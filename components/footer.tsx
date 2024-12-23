import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiX } from 'react-icons/si'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        <Link href="https://proofofme.fun" passHref target="_blank">
          <Button
            variant={'ghost'}
            size={'icon'}
            className="text-muted-foreground/50"
          >
            <span>Back to Web</span>
          </Button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
