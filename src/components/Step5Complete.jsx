import React from 'react'

export default function Step5Complete({ onReset }) {
  const openHomepage = () => {
    const url = 'https://kmong.com/gig/698784'
    try {
      window.location.href = url
    } catch (_) {
      // noop
    }
  }

  return (
    <section>
      <h2 className="title">감사합니다!</h2>
      <p className="subtitle">담당자가 빠르게 확인 후 연락드릴게요.</p>

      <div className="mt-8 card p-6">
        <p className="text-sm text-gray-600">
          접수하신 정보는 상담 이외의 목적으로 사용되지 않습니다.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-100 px-5 pb-[env(safe-area-inset-bottom)] pt-3 grid grid-cols-2 gap-3">
        <button className="secondary-btn" onClick={onReset}>처음으로</button>
        <button className="primary-btn" onClick={openHomepage}>브랜디업 홈페이지 보기</button>
      </div>
    </section>
  )
}


