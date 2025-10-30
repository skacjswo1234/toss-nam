import React from 'react'

export default function Step1Intro({ onStart }) {
  return (
    <section>
      <h1 className="title">나에게 맞는 랜딩페이지 견적 받아보기</h1>
      <p className="subtitle">59000원 특가 진행! 비싼 돈 주고 랜딩/홈페이지 만들지 마세요. 간단하게 상담을 시작하세요.</p>

      <div className="mt-6 card p-6">
        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
          <li>모바일 최적화 반응형 제공</li>
          <li>브랜딩에 맞춘 맞춤 디자인</li>
          <li>검색 노출을 위한 기본 SEO 고려</li>
        </ul>
      </div>

      <div className="mt-4 rounded-2xl border border-brand-200 bg-brand-50 p-5">
        <div className="text-[15px] font-semibold text-brand-700">59000원 특가 진행</div>
        <ul className="mt-2 text-sm text-brand-800 space-y-1 list-disc pl-5">
          <li>최저가·고품질, 고객사 100회 이상 경력</li>
          <li>도메인·유지보수 무료 제공</li>
          <li>지금 59,000원에 모시겠습니다</li>
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-100 px-5 pb-[env(safe-area-inset-bottom)] pt-3">
        <button className="primary-btn" onClick={onStart}>시작하기</button>
      </div>
    </section>
  )
}


