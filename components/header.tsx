import React from 'react'
<<<<<<< HEAD
// import { useTheme } from 'next-themes'
=======
>>>>>>> parent of 476cb10 (theme setting)
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC = async () => {
<<<<<<< HEAD
  // const { theme } = useTheme()
=======
>>>>>>> parent of 476cb10 (theme setting)
  return (
    <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div>
        <a href="/">
<<<<<<< HEAD
          <IconLogo className={cn('w-5 h-5')} />
          {/* {theme === 'light' ? (
            <img src="/Logo-black.png" className={cn('w-10 h-10')} alt="dark" />
          ) : (
            <img src="/Logo-white.png" className={cn('w-10 h-10')} alt="white" />
          )} */}
=======
          {/* <IconLogo className={cn('w-5 h-5')} /> */}
          <img src="/Logo-black.png" className={cn('w-5 h-5')}/>
>>>>>>> parent of 476cb10 (theme setting)
          <span className="sr-only">Proof of Me</span>
        </a>
      </div>
      <div className="flex gap-0.5">
        <ModeToggle />
        <HistoryContainer location="header" />
      </div>
    </header>
  )
}

export default Header
