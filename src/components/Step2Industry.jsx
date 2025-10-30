import React from 'react'

const INDUSTRIES = ['병원', '뷰티', '정책자금', '쇼핑몰', '기타']

export default function Step2Industry({ selected, onSelect, onNext }) {
  return (
    <section>
      <h2 className="title">어떤 업종의 랜딩페이지인가요?</h2>
      <p className="subtitle">업종 선택은 맞춤형 레퍼런스 추천에 활용됩니다.</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {INDUSTRIES.map((label) => {
          const isActive = selected === label
          return (
            <button
              key={label}
              type="button"
              onClick={() => onSelect(label)}
              className={
                'card h-24 p-4 text-left transition-colors ' +
                (isActive ? 'border-brand-400 ring-2 ring-brand-100' : 'hover:border-gray-200')
              }
            >
              <span className={isActive ? 'text-brand-700 font-medium' : 'text-gray-800 font-medium'}>
                {label}
              </span>
            </button>
          )
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-100 px-5 pb-[env(safe-area-inset-bottom)] pt-3">
        <button className="primary-btn" onClick={onNext} disabled={!selected}>
          다음
        </button>
      </div>
    </section>
  )
}


