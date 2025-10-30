import React from 'react'

const PURPOSES = ['문의 유도', '상품 판매', '회원 모집']

export default function Step3Purpose({ selected, onSelect, onPrev, onNext, nextDisabled }) {
  return (
    <section>
      <h2 className="title">랜딩페이지의 목적은 무엇인가요?</h2>
      <p className="subtitle">가장 중요한 목표를 선택해주세요.</p>

      <div className="mt-6 space-y-3">
        {PURPOSES.map((label) => {
          const isActive = selected === label
          return (
            <button
              key={label}
              type="button"
              onClick={() => onSelect(label)}
              className={
                'w-full h-14 rounded-xl border transition-colors px-4 text-left ' +
                (isActive
                  ? 'border-brand-400 ring-2 ring-brand-100 bg-brand-50'
                  : 'border-gray-200 bg-white hover:border-gray-300')
              }
            >
              <span className={isActive ? 'text-brand-700 font-medium' : 'text-gray-800 font-medium'}>{label}</span>
            </button>
          )
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-100 px-5 pb-[env(safe-area-inset-bottom)] pt-3 grid grid-cols-2 gap-3">
        <button type="button" className="secondary-btn" onClick={onPrev}>이전</button>
        <button type="button" className="primary-btn" onClick={onNext} disabled={nextDisabled}>다음</button>
      </div>
    </section>
  )
}


