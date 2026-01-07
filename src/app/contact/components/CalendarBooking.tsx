// src/app/contact/components/CalendarBooking.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, User, Mail, Building2, MessageSquare, CheckCircle2, Loader2 } from "lucide-react"

// Helper functions for date manipulation
const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
]

type BookingStep = "calendar" | "time" | "details" | "confirmation"

interface BookingData {
  date: Date | null
  time: string
  name: string
  email: string
  company: string
  notes: string
}

export default function CalendarBooking() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [step, setStep] = useState<BookingStep>("calendar")
  const [loading, setLoading] = useState(false)
  
  const [bookingData, setBookingData] = useState<BookingData>({
    date: null,
    time: "",
    name: "",
    email: "",
    company: "",
    notes: ""
  })

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const selectDate = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    selected.setHours(0, 0, 0, 0)
    
    if (selected >= today) {
      setSelectedDate(selected)
      setBookingData({ ...bookingData, date: selected })
      setStep("time")
    }
  }

  const selectTime = (time: string) => {
    setBookingData({ ...bookingData, time })
    setStep("details")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setLoading(false)
    setStep("confirmation")
  }

  const resetBooking = () => {
    setStep("calendar")
    setSelectedDate(null)
    setBookingData({
      date: null,
      time: "",
      name: "",
      email: "",
      company: "",
      notes: ""
    })
  }

  // Generate calendar days
  const calendarDays = []
  
  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="aspect-square" />)
  }
  
  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    date.setHours(0, 0, 0, 0)
    const isPast = date < today
    const isSelected = selectedDate && 
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()

    calendarDays.push(
      <motion.button
        key={day}
        type="button"
        onClick={() => selectDate(day)}
        disabled={isPast}
        whileHover={!isPast ? { scale: 1.05 } : {}}
        whileTap={!isPast ? { scale: 0.95 } : {}}
        className={`
          aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200
          ${isPast 
            ? "text-gray-700 cursor-not-allowed" 
            : isSelected
              ? "bg-gradient-to-br from-[#D33E9E] to-[#3530BA] text-white shadow-lg shadow-[#D33E9E]/25"
              : "text-gray-300 hover:bg-white/10 hover:text-white"
          }
        `}
      >
        {day}
      </motion.button>
    )
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 rounded-3xl blur-2xl" />
      
      <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Book a Demo</h3>
              <p className="text-sm text-gray-400 mt-1">30 minutes · Video call</p>
            </div>
            {step !== "calendar" && step !== "confirmation" && (
              <button
                onClick={() => setStep(step === "time" ? "calendar" : "time")}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                ← Back
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Calendar */}
            {step === "calendar" && (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-white">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h4>
                  <div className="flex gap-2">
                    <motion.button
                      type="button"
                      onClick={prevMonth}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-400" />
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={nextMonth}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </motion.button>
                  </div>
                </div>

                {/* Weekday Headers */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Select a date</p>
                      <p className="text-xs text-gray-400 mt-1">Choose an available date to see time slots</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Time Selection */}
            {step === "time" && (
              <motion.div
                key="time"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <CalendarIcon className="w-4 h-4" />
                    <span>
                      {selectedDate?.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Select a time</h4>
                </div>

                <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      type="button"
                      onClick={() => selectTime(time)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D33E9E]/50 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200"
                    >
                      <Clock className="w-4 h-4 inline-block mr-2" />
                      {time}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Details Form */}
            {step === "details" && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{bookingData.time}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Enter your details</h4>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="company"
                        value={bookingData.company}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Additional Notes
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <textarea
                        name="notes"
                        value={bookingData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all resize-none"
                        placeholder="Tell us what you'd like to discuss..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white font-semibold hover:shadow-lg hover:shadow-[#D33E9E]/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Scheduling...</span>
                      </>
                    ) : (
                      <span>Schedule Meeting</span>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === "confirmation" && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/50 flex items-center justify-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2">Meeting Scheduled!</h3>
                <p className="text-gray-400 mb-8">
                  We've sent a confirmation email to <span className="text-white">{bookingData.email}</span>
                </p>

                <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CalendarIcon className="w-5 h-5 text-[#D33E9E]" />
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="text-sm font-medium text-white">
                        {selectedDate?.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Clock className="w-5 h-5 text-[#3530BA]" />
                    <div>
                      <p className="text-xs text-gray-500">Time</p>
                      <p className="text-sm font-medium text-white">{bookingData.time} IST</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={resetBooking}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
                >
                  Book Another Meeting
                </motion.button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(211, 62, 158, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(211, 62, 158, 0.7);
        }
      `}</style>
    </div>
  )
}

