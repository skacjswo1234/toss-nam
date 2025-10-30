import React from 'react'

export default function BrandHeader() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-6 h-6 rounded-full bg-brand-600 shadow-sm" />
      <div className="text-[15px] font-semibold tracking-tight text-gray-900">브랜디업</div>
    </div>
  )
}


