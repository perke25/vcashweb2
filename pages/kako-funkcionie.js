import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const KakoFunkcionie = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="kako-funkcionie-container1">
        <Head>
          <title>Kako-funkcionie - Blind Euphoric Rabbit</title>
          <meta
            property="og:title"
            content="Kako-funkcionie - Blind Euphoric Rabbit"
          />
          <link
            rel="canonical"
            href="https://blind-euphoric-rabbit-45ym7d.teleporthq.app/kako-funkcionie"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <section className="kako-funkcioni-e-hero-section">
          <div className="hero-video-container">
            <img
              alt="VCash Digital Ecosystem"
              src="/terminal-1500w.png"
              className="kako-funkcionie-thq-hero-bg-media-elm hero-bg-media"
            />
            <div className="hero-scrim-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="hero-title kako-funkcioni-e-hero-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroTitle_IgTWNw'),
                  }}
                ></span>
              </h1>
              <p className="kako-funkcioni-e-hero-subtitle hero-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroSubtitle_5XYK-P'),
                  }}
                ></span>
              </p>
              <div className="hero-cta-group">
                <a href="https://market.vcash.rs">
                  <div className="btn-primary btn-xl btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_MDeVKX'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="#how-it-works">
                  <div className="btn-xl btn-outline btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_QKNTXo'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="kako-funkcioni-e-steps-section">
          <div className="steps-container">
            <h2 className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_gQ84YB'),
                }}
              ></span>
            </h2>
            <div className="kako-funkcioni-e-steps-grid">
              <div className="step-card">
                <div className="step-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="5" rx="2" width="20" height="14"></rect>
                    <path d="M2 10h20"></path>
                  </svg>
                  <span className="kako-funkcioni-e-step-number">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('StepNumber_b4XXBI'),
                      }}
                    ></span>
                  </span>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_4749M1'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_WwLFS9'),
                    }}
                  ></span>
                </p>
                <a href="https://market.vcash.rs">
                  <div className="btn-link btn-sm btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1_ZvUS'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
              <div className="step-card">
                <div className="step-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </g>
                  </svg>
                  <span className="kako-funkcioni-e-step-number">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('StepNumber_kDAPbY'),
                      }}
                    ></span>
                  </span>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_KOA869'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_L_8LHH'),
                    }}
                  ></span>
                </p>
                <a href="#payment-details">
                  <div className="kako-funkcionie-thq-btn-elm13 btn-link btn-sm btn"></div>
                </a>
              </div>
              <div className="step-card">
                <div className="step-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                  <span className="kako-funkcioni-e-step-number">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('StepNumber_EjCuW_'),
                      }}
                    ></span>
                  </span>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_pUJ_q_'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_dQtya1'),
                    }}
                  ></span>
                </p>
                <a href="https://market.vcash.rs">
                  <div className="btn-primary btn-sm btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Tj0iKr'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="payment-details" className="guide-section">
          <div className="guide-container">
            <div className="guide-split">
              <div className="guide-column">
                <div className="guide-badge">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_HAwr93'),
                      }}
                    ></span>
                  </span>
                </div>
                <h2 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_So_ctt'),
                    }}
                  ></span>
                </h2>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_9cby3v'),
                    }}
                  ></span>
                </p>
                <ul className="guide-checklist">
                  <li className="guide-check-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_6R1_Do'),
                        }}
                      ></span>
                    </span>
                  </li>
                  <li className="guide-check-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_becKPC'),
                        }}
                      ></span>
                    </span>
                  </li>
                  <li className="guide-check-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-rvRHP'),
                        }}
                      ></span>
                    </span>
                  </li>
                </ul>
                <a href="https://market.vcash.rs">
                  <div className="btn-primary btn-lg btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_XyTMHj'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
              <div className="guide-column">
                <div className="guide-badge">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_3oydxW'),
                      }}
                    ></span>
                  </span>
                </div>
                <h2 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_GvniTQ'),
                    }}
                  ></span>
                </h2>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_6IqobH'),
                    }}
                  ></span>
                </p>
                <ul className="guide-checklist">
                  <li className="guide-check-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_vxCL2K'),
                        }}
                      ></span>
                    </span>
                  </li>
                  <li className="guide-check-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_z8JqGv'),
                        }}
                      ></span>
                    </span>
                  </li>
                  <li className="guide-check-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5CV7h7'),
                        }}
                      ></span>
                    </span>
                  </li>
                </ul>
                <a href="https://market.vcash.rs">
                  <div className="btn-secondary btn-lg btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_w4GjmT'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="kako-funkcioni-e-faq-section">
          <div className="kako-funkcioni-e-faq-container">
            <h2 className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_PZrzdD'),
                }}
              ></span>
            </h2>
            <div className="faq-accordion-list">
              <details className="kako-funkcioni-e-faq-item">
                <summary className="kako-funkcioni-e-faq-trigger">
                  <span className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_31aT90'),
                      }}
                    ></span>
                  </span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="faq-icon"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="kako-funkcioni-e-faq-content">
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_syKzc6'),
                      }}
                    ></span>
                  </p>
                </div>
              </details>
              <details className="kako-funkcioni-e-faq-item">
                <summary className="kako-funkcioni-e-faq-trigger">
                  <span className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_5BWc_l'),
                      }}
                    ></span>
                  </span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="faq-icon"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="kako-funkcioni-e-faq-content">
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_HQZ8uA'),
                      }}
                    ></span>
                  </p>
                </div>
              </details>
              <details className="kako-funkcioni-e-faq-item">
                <summary className="kako-funkcioni-e-faq-trigger">
                  <span className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_P95b9I'),
                      }}
                    ></span>
                  </span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="faq-icon"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="kako-funkcioni-e-faq-content">
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_cyVFth'),
                      }}
                    ></span>
                  </p>
                </div>
              </details>
            </div>
            <div className="kako-funkcioni-e-faq-footer">
              <a href="/faq">
                <div className="btn-link btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Ngx9-0'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="troubleshoot-section">
          <div className="troubleshoot-container">
            <h2 className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_gF7gew'),
                }}
              ></span>
            </h2>
            <div className="troubleshoot-accordion-list">
              <details className="troubleshoot-item">
                <summary className="troubleshoot-trigger">
                  <span className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_ULptTw'),
                      }}
                    ></span>
                  </span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="faq-icon"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="troubleshoot-content">
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_Pgwik5'),
                      }}
                    ></span>
                  </p>
                </div>
              </details>
              <details className="troubleshoot-item">
                <summary className="troubleshoot-trigger">
                  <span className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_Nv7-gM'),
                      }}
                    ></span>
                  </span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="faq-icon"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="troubleshoot-content">
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_tgFdbV'),
                      }}
                    ></span>
                  </p>
                </div>
              </details>
            </div>
            <div className="troubleshoot-actions">
              <a href="/contact">
                <div className="btn-outline btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_9G90yS'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
              <a href="https://market.vcash.rs">
                <div className="btn-primary btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_i_B9Ze'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="kako-funkcioni-e-trust-section">
          <div className="trust-container">
            <div className="kako-funkcioni-e-trust-grid">
              <div className="kako-funkcioni-e-trust-item">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </svg>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_Y5tXDp'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_D0a-_2'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="kako-funkcioni-e-trust-item">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_EnCwbK'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_htxmQ5'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="kako-funkcioni-e-trust-item">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_s9irm2'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_kWvHj3'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="kako-funkcioni-e-trust-item">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle r="3" cx="12" cy="10"></circle>
                </svg>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_czyT61'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_CZv3y_'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="kako-funkcioni-e-trust-item">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 6.1H3"></path>
                  <path d="M21 12.1H3"></path>
                  <path d="M15.1 18.1H3"></path>
                </svg>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_Y3oIs8'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_ZGEsrJ'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="kako-funkcioni-e-trust-item">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_jqMKpI'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_JBsZlI'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta-section">
          <div className="final-cta-container">
            <div className="cta-card">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_T6RZWw'),
                  }}
                ></span>
              </h2>
              <p className="section-content">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionContent_j61IwH'),
                  }}
                ></span>
              </p>
              <div className="cta-actions">
                <a href="https://market.vcash.rs">
                  <div className="btn-primary btn-xl btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_blwFsA'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <div className="cta-secondary-links">
                  <a href="#how-it-works">
                    <div className="btn-link btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_V_gFi8'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/locations">
                    <div className="btn-link btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_HeXbRN'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="kako-funkcionie-container2">
          <div className="kako-funkcionie-container3">
            <Script
              html={`<style>
details[open] .faq-icon {
  transform: rotate(180deg);
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="kako-funkcionie-container4">
          <div className="kako-funkcionie-container5">
            <Script
              html={`<script defer data-name="v-cash-interactions">
(function(){
  // Handle smooth reveals for steps on scroll
  const stepCards = document.querySelectorAll(".step-card")

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8

    stepCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top

      if (cardTop < triggerBottom) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Initial state for animation
  stepCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "all 0.6s ease-out"
  })

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Trigger once on load

  // Accordion mutual exclusivity (optional enhancement)
  const allDetails = document.querySelectorAll("details")
  allDetails.forEach((detail) => {
    detail.addEventListener("toggle", (e) => {
      if (detail.open) {
        allDetails.forEach((otherDetail) => {
          if (otherDetail !== detail && otherDetail.open) {
            otherDetail.open = false
          }
        })
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer locale={props?.locale ?? ''}></Footer>
      </div>
      <style jsx>
        {`
          .kako-funkcionie-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .kako-funkcionie-thq-hero-bg-media-elm {
            width: 90%;
            height: 1015px;
            display: block;
          }
          .kako-funkcionie-thq-btn-elm13 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .kako-funkcionie-container2 {
            display: none;
          }
          .kako-funkcionie-container3 {
            display: contents;
          }
          .kako-funkcionie-container4 {
            display: none;
          }
          .kako-funkcionie-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default KakoFunkcionie

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
