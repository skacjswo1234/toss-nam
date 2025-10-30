import React from 'react'

export default function Step1Intro({ onStart }) {
  return (
    <section>
      <h1 className="title">나에게 맞는 랜딩페이지 견적 받아보기</h1>
      <p className="subtitle">디자인, 반응형, SEO까지 한 번에. 간단하게 상담을 시작하세요.</p>

      <div className="mt-8 card p-6">
        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
          <li>모바일 최적화 반응형 제공</li>
          <li>브랜딩에 맞춘 맞춤 디자인</li>
          <li>검색 노출을 위한 기본 SEO 고려</li>
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-100 px-5 pb-[env(safe-area-inset-bottom)] pt-3">
        <button className="primary-btn" onClick={onStart}>시작하기</button>
      </div>
    </section>
  )
}


