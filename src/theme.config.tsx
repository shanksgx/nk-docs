import React from 'react'
import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = () => <div className='font-bold font-mono tracking-tight inline from-[#b21c1c] to-[#ff9900] text-[2.5rem] lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b'>NK</div>

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/shanksgx'
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – NK'
      }
    }
  },
  logo,
  banner: {
    key: 'update banner',
    text: 'I will continue to update the components and personal blog.'
  },
  faviconGlyph: '❤️',
  head: function useHead() {
    const { title } = useConfig()

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites MDX."
        />
        <meta
          name="og:title"
          content={title ? title + ' – NK' : 'NK'}
        />
        <meta name="apple-mobile-web-app-title" content="NK" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →',
    component: null
  },
  feedback: {
    content: '',
    labels: 'feedback',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  search:{
    placeholder: '搜索文档'
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <span>Powered by Gox</span>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} The NK Project.
        </p>
      </div>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config