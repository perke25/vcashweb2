import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Lokacije1 from '../components/lokacije1'

const Lokacije = (props) => {
  return (
    <>
      <div className="lokacije-container">
        <Head>
          <title>Lokacije - Blind Euphoric Rabbit</title>
          <meta
            property="og:title"
            content="Lokacije - Blind Euphoric Rabbit"
          />
          <link
            rel="canonical"
            href="https://blind-euphoric-rabbit-45ym7d.teleporthq.app/lokacije"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <Lokacije1 locale={props?.locale ?? ''}></Lokacije1>
      </div>
      <style jsx>
        {`
          .lokacije-container {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
        `}
      </style>
    </>
  )
}

export default Lokacije

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
