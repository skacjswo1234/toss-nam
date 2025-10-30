import React from 'react'

export default function BrandHeader() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="h-6 flex items-center">
        {/* Light mode logo */}
        <img src="/images/logo.png" alt="브랜디업" className="h-6 block dark:hidden" />
        {/* Dark mode logo */}
        <img src="/images/logo_dark.png" alt="브랜디업" className="h-6 hidden dark:block" />
      </div>
    </div>
  )
}


