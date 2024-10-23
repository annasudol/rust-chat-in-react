import React from 'react'
import { containerMaxW } from '../config'
import { mdiGithub } from '@mdi/js'
import Button from './Button'

export default function FooterBar() {
  const year = new Date().getFullYear()

  return (
    <footer className={`py-2 px-6 ${containerMaxW}`}>
      <div className="block md:flex items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <b>
            &copy;{year},{` `}
            <a href="https://github.com/annasudol" rel="noreferrer" target="_blank">
              Anna Sudol
            </a>
            .
          </b>
        </div>
        <div className="md:py-2">
          <Button
            href="https://github.com/sudolann"
            target="_blank"
            icon={mdiGithub}
            label="Star on GitHub"
            color="contrast"
            roundedFull
            small
          />
        </div>
      </div>
    </footer>
  )
}
