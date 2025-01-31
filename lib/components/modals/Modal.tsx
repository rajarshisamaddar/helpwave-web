import { tw, tx } from '../../twind'
import type { MouseEventHandler, PropsWithChildren } from 'react'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

export type ModalProps = {
  isOpen: boolean,
  title?: string,
  description?: string,
  onBackgroundClick?: MouseEventHandler<HTMLDivElement>,
  portalRootName?: string
}
export const Modal = ({
  children,
  isOpen,
  title,
  description,
  onBackgroundClick,
  portalRootName = 'portal-root'
}: PropsWithChildren<ModalProps>) => {
  const modalRoot = document.getElementById('modal-root')

  useEffect(() => () => {
    const portalElement = document.getElementById(portalRootName)
    if (portalElement === null) return
    modalRoot?.removeChild(portalElement)
  })

  if (modalRoot === null) return null

  return ReactDOM.createPortal(
    <div className={tx('fixed inset-0 overflow-y-auto z-[99]', { hidden: !isOpen }) + ` ${portalRootName}`}>
      <div
        className={tw('fixed inset-0 h-screen w-screen bg-black/70')}
        onClick={onBackgroundClick}
      />
      <div
        className={tw('fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col p-4 bg-white rounded-xl shadow-xl')}>
        {title && (
          <span className={tx('text-lg font-semibold', { 'mb-1': description, 'mb-3': !description })}>
              {title}
          </span>
        )}
        {description && <span className={tw('mb-3 text-gray-400')}>{description}</span>}
        {children}
      </div>
    </div>,
    modalRoot
  )
}
