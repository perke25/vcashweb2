import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Usluge = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="usluge-container1">
        <Head>
          <title>Usluge - Blind Euphoric Rabbit</title>
          <meta property="og:title" content="Usluge - Blind Euphoric Rabbit" />
          <link
            rel="canonical"
            href="https://blind-euphoric-rabbit-45ym7d.teleporthq.app/usluge"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <section className="usluge-hero-section">
          <div className="hero-media-wrapper">
            <img
              alt="VCash Digital Fintech"
              src="https://images.pexels.com/photos/7534804/pexels-photo-7534804.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-container">
            <div className="usluge-hero-text-block">
              <h1 className="usluge-hero-title hero-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroTitle_wMuoTY'),
                  }}
                ></span>
              </h1>
              <p className="usluge-hero-subtitle hero-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroSubtitle_-cUnAF'),
                  }}
                ></span>
              </p>
              <div className="usluge-hero-cta-group">
                <a href="https://market.vcash.rs">
                  <div className="btn-primary btn-xl btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1gY6Pu'),
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
                          __html: translate.raw('text_RnkPqg'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="voucher-grid-section">
          <div className="container">
            <h2 className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_LPRKku'),
                }}
              ></span>
            </h2>
            <p className="section-subtitle">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionSubtitle_aCQl76'),
                }}
              ></span>
            </p>
            <div className="voucher-grid">
              <div className="voucher-card">
                <div className="voucher-icon-box">
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
                    <path d="m21 8-2 2-1.5-3.7A.5.5 0 0 0 17 6H7a.5.5 0 0 0-.5.3L5 10l-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path d="M10 7v4"></path>
                    <path d="M14 7v4"></path>
                    <path d="M18 10.2c.3.2.5.5.5.9V19a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-7.9c0-.4.2-.7.5-.9l2-2h10z"></path>
                  </svg>
                </div>
                <h3 className="voucher-card-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('VoucherCardTitle_eF4D1B'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_8nl6J2'),
                    }}
                  ></span>
                </p>
                <div className="voucher-card-footer">
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_b2eiz1'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_eQs-F0'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="voucher-card">
                <div className="voucher-icon-box">
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
                    <rect x="2" y="3" rx="2" width="20" height="15"></rect>
                    <path d="m10 8 5 3-5 3z"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="voucher-card-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('VoucherCardTitle_M-Qz5B'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_plLsA5'),
                    }}
                  ></span>
                </p>
                <div className="voucher-card-footer">
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9bTRyG'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_CXfgV0'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="voucher-card">
                <div className="voucher-icon-box">
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
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4Z"></path>
                  </svg>
                </div>
                <h3 className="voucher-card-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('VoucherCardTitle_nOs6hN'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_TyhdJp'),
                    }}
                  ></span>
                </p>
                <div className="voucher-card-footer">
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_yvp0tt'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_2bG5tw'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="voucher-card">
                <div className="voucher-icon-box">
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
                    <rect x="2" y="5" rx="2" width="20" height="14"></rect>
                    <path d="M2 10h20"></path>
                  </svg>
                </div>
                <h3 className="voucher-card-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('VoucherCardTitle_2FQ7Ng'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_Sk7Tue'),
                    }}
                  ></span>
                </p>
                <div className="voucher-card-footer">
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MXA9nH'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MaHX5T'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="voucher-card">
                <div className="voucher-icon-box">
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
                </div>
                <h3 className="voucher-card-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('VoucherCardTitle_eTUjjx'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_IEzYhz'),
                    }}
                  ></span>
                </p>
                <div className="voucher-card-footer">
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_W8nQR4'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_OaUNYu'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="voucher-card">
                <div className="voucher-icon-box">
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" x2="12" y1="22" y2="12"></line>
                  </svg>
                </div>
                <h3 className="voucher-card-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('VoucherCardTitle_iXRWH0'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_jlEIhn'),
                    }}
                  ></span>
                </p>
                <div className="voucher-card-footer">
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Xj5zLS'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_iS5AaF'),
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
        <section className="payment-channels-section">
          <div className="container">
            <h2 className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_hkFiWI'),
                }}
              ></span>
            </h2>
            <p className="section-subtitle">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionSubtitle_-75ejV'),
                }}
              ></span>
            </p>
            <div className="payment-grid">
              <div className="payment-item">
                <div className="payment-icon">
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
                    <rect x="2" y="5" rx="2" width="20" height="14"></rect>
                    <path d="M2 10h20"></path>
                  </svg>
                </div>
                <h4 className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_lVNoUx'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_sFGD5P'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="payment-item">
                <div className="payment-icon">
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
                    <path d="M11 15h2m-6 0h.01M7 15h.01m4 0h2m4 0h.01M17 15h.01M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8z"></path>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
                <h4 className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_dQ74oN'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_WJOxZX'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="payment-item">
                <div className="payment-icon">
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
                    <path d="m11 19l-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12m-6-6.236V12m3 3v6m3-3h-6M9 3.236v15"></path>
                  </svg>
                </div>
                <h4 className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_NfCS7m'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_knTO4K'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="payment-item">
                <div className="payment-icon">
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
                </div>
                <h4 className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_mFLzT-'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_0qvF6X'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="payment-item">
                <div className="payment-icon">
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
                </div>
                <h4 className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_190n_f'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_r0_dvl'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="payment-item">
                <div className="payment-icon">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M19 8v6m3-3h-6"></path>
                  </svg>
                </div>
                <h4 className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_m2T1Yo'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_sN0cit'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div className="payment-cta-wrapper">
              <a href="https://market.vcash.rs">
                <div className="btn-primary btn-lg btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kcw1Vk'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="terminal-network-section">
          <div className="terminal-grid-wrapper">
            <div className="terminal-content-block">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_DcOS5w'),
                  }}
                ></span>
              </h2>
              <p className="section-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionSubtitle_u53mx9'),
                  }}
                ></span>
              </p>
              <div className="terminal-capabilities">
                <div className="capability-item">
                  <div className="capability-icon">
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
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v8m-4-4h8"></path>
                    </svg>
                  </div>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_X-WbSn'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="capability-item">
                  <div className="capability-icon">
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
                      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
                      <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m17 9v6m-3-3h6"></path>
                    </svg>
                  </div>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_f5ZrVe'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="capability-item">
                  <div className="capability-icon">
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
                      <path d="m12 16l4-4l-4-4m-4 4h8"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </svg>
                  </div>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Xb-Ilr'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="terminal-actions">
                <a href="#">
                  <div className="btn-secondary btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_qQHm7t'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="https://market.vcash.rs">
                  <div className="btn-outline btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_mTFdsB'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="terminal-visual-block">
              <img
                alt="VCash Terminal Location"
                src="https://images.pexels.com/photos/7621366/pexels-photo-7621366.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="terminal-img"
              />
            </div>
          </div>
        </section>
        <section id="how-it-works" className="checkout-flow-section">
          <div className="container">
            <h2 className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_S4o6E6'),
                }}
              ></span>
            </h2>
            <p className="section-subtitle">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionSubtitle_GwWUPE'),
                }}
              ></span>
            </p>
            <div className="usluge-steps-container steps-container">
              <div className="usluge-step-card">
                <div className="usluge-step-number">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dLSrnl'),
                      }}
                    ></span>
                  </span>
                </div>
                <h4 className="step-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('StepTitle_v6hk4X'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_u5rb74'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="step-arrow">
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
                  <path d="M5 12h14m-7-7 7 7-7 7"></path>
                </svg>
              </div>
              <div className="usluge-step-card">
                <div className="usluge-step-number">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Y-6Oyr'),
                      }}
                    ></span>
                  </span>
                </div>
                <h4 className="step-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('StepTitle_VziF_s'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_OvEgyE'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="step-arrow">
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
                  <path d="M5 12h14m-7-7 7 7-7 7"></path>
                </svg>
              </div>
              <div className="usluge-step-card">
                <div className="usluge-step-number">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_jMPlIK'),
                      }}
                    ></span>
                  </span>
                </div>
                <h4 className="step-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('StepTitle_wrNlWj'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_k7koSo'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div className="flow-cta">
              <a href="https://market.vcash.rs">
                <div className="btn-primary btn-xl btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wemAnd'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="gaming-alert-section">
          <div className="container">
            <div className="alert-banner">
              <div className="alert-icon">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              </div>
              <div className="alert-content">
                <h2 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_5TDAIB'),
                    }}
                  ></span>
                </h2>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent__ve0TC'),
                    }}
                  ></span>
                </p>
                <div className="alert-actions">
                  <a href="https://market.vcash.rs">
                    <div className="btn-accent btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_0cm_p4'),
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
        <section className="trust-stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="stat-text">
                  <h4 className="stat-label">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('StatLabel_NqBRGa'),
                      }}
                    ></span>
                  </h4>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_0nCR5c'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <path d="M14 2v6h6"></path>
                    <path d="m9 15 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="stat-text">
                  <h4 className="stat-label">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('StatLabel__qla6L'),
                      }}
                    ></span>
                  </h4>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_S6nKTv'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="stat-text">
                  <h4 className="stat-label">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('StatLabel_kKoXbN'),
                      }}
                    ></span>
                  </h4>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_pWw5bI'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M19 8v6m3-3h-6"></path>
                  </svg>
                </div>
                <div className="stat-text">
                  <h4 className="stat-label">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('StatLabel_7mMeyg'),
                      }}
                    ></span>
                  </h4>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_qRkfGK'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="stats-footer-cta">
              <a href="https://market.vcash.rs">
                <div className="btn-primary btn-lg btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_YOXDLq'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="usluge-final-cta-section">
          <div className="container">
            <div className="usluge-cta-card">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_NU4_tr'),
                  }}
                ></span>
              </h2>
              <p className="section-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionSubtitle_I0HUWd'),
                  }}
                ></span>
              </p>
              <div className="usluge-cta-actions">
                <a href="https://market.vcash.rs">
                  <div className="btn-primary btn-xl btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_YhihD2'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
              <div className="usluge-cta-secondary-links">
                <a href="#how-it-works">
                  <div className="btn-link btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_IBZ1pE'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn-link btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_LK7cY7'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="usluge-container2">
          <div className="usluge-container3">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="usluge-container4">
          <div className="usluge-container5">
            <Script
              html={`<script defer data-name="vcash-interactions">
(function(){
  // Simple scroll reveal for cards using Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Apply to cards and items
  document.querySelectorAll(".voucher-card, .payment-item, .step-card, .stat-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    revealObserver.observe(el)
  })

  // Track CTA clicks for analytics (simulated)
  document.querySelectorAll('a[href*="market.vcash.rs"]').forEach((cta) => {
    cta.addEventListener("click", () => {
      console.log("Conversion Event: Marketplace CTA Clicked - " + cta.innerText)
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
          .usluge-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .usluge-container2 {
            display: none;
          }
          .usluge-container3 {
            display: contents;
          }
          .usluge-container4 {
            display: none;
          }
          .usluge-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Usluge

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
