import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Step1Intro from './components/Step1Intro.jsx'
import Step2Industry from './components/Step2Industry.jsx'
import Step3Purpose from './components/Step3Purpose.jsx'
import Step4Contact from './components/Step4Contact.jsx'
import Step5Complete from './components/Step5Complete.jsx'
import BrandHeader from './components/BrandHeader.jsx'

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -40 : 40, opacity: 0 })
}

export default function App() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [industry, setIndustry] = useState('')
  const [purpose, setPurpose] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const goTo = (next) => {
    setDirection(next > step ? 1 : -1)
    setStep(next)
  }

  const next = () => goTo(Math.min(step + 1, 5))
  const prev = () => goTo(Math.max(step - 1, 1))

  const canGoNext = useMemo(() => {
    if (step === 2) return Boolean(industry)
    if (step === 3) return Boolean(purpose)
    if (step === 4) return Boolean(name.trim() && phone.trim())
    return true
  }, [step, industry, purpose, name, phone])

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const payload = { industry, purpose, name, phone, createdAt: new Date().toISOString() }
      // Placeholder submit: log and attempt a dummy POST for future integration
      // Replace '/api/submit' with Cloudflare Functions endpoint later
      // eslint-disable-next-line no-console
      console.log('Submitting payload:', payload)
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => new Promise((resolve) => setTimeout(resolve, 600)))
      next()
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setIndustry('')
    setPurpose('')
    setName('')
    setPhone('')
    setDirection(-1)
    setStep(1)
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-brand-50/60 to-white">
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="max-w-md mx-auto px-5 pt-[env(safe-area-inset-top)] pb-2">
          <div className="flex items-center justify-between py-2">
            <BrandHeader />
            <div className="text-sm text-gray-400 tabular-nums">{step}/5</div>
          </div>
        </div>
      </header>

      <main className="page">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {step === 1 && (
              <Step1Intro onStart={() => next()} />
            )}

            {step === 2 && (
              <Step2Industry
                selected={industry}
                onSelect={setIndustry}
                onNext={() => next()}
              />
            )}

            {step === 3 && (
              <Step3Purpose
                selected={purpose}
                onSelect={setPurpose}
                onPrev={() => prev()}
                onNext={() => next()}
                nextDisabled={!canGoNext}
              />
            )}

            {step === 4 && (
              <Step4Contact
                name={name}
                phone={phone}
                onChangeName={setName}
                onChangePhone={setPhone}
                onPrev={() => prev()}
                onNext={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}

            {step === 5 && (
              <Step5Complete onReset={reset} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}


