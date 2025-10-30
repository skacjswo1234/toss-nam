import React, { useMemo } from 'react'

export default function Step4Contact({ name, phone, onChangeName, onChangePhone, onPrev, onNext, isSubmitting }) {
  const isValid = useMemo(() => Boolean(name.trim() && phone.trim()), [name, phone])

  return (
    <section>
      <h2 className="title">연락 가능한 정보를 입력해주세요.</h2>
      <p className="subtitle">담당자가 빠르게 확인 후 연락드립니다.</p>

      <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="block text-sm text-gray-600">이름</label>
          <input
            type="text"
            inputMode="text"
            autoComplete="name"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
            placeholder="홍길동"
            className="w-full h-12 rounded-xl border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-gray-600">연락처</label>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => onChangePhone(e.target.value.replace(/[^0-9-+]/g, ''))}
            placeholder="010-1234-5678"
            className="w-full h-12 rounded-xl border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
      </form>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-100 px-5 pb-[env(safe-area-inset-bottom)] pt-3 grid grid-cols-2 gap-3">
        <button type="button" className="secondary-btn" onClick={onPrev} disabled={isSubmitting}>이전</button>
        <button type="button" className="primary-btn" onClick={onNext} disabled={!isValid || isSubmitting}>
          {isSubmitting ? '전송 중...' : '다음'}
        </button>
      </div>
    </section>
  )
}


