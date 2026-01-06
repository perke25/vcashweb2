import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Blind Euphoric Rabbit</title>
          <meta property="og:title" content="Blind Euphoric Rabbit" />
          <link
            rel="canonical"
            href="https://blind-euphoric-rabbit-45ym7d.teleporthq.app/"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <section className="hero-section">
          <div className="hero-media">
            <img
              alt="Fintech Digital Payment"
              src="https://images.pexels.com/photos/7534801/pexels-photo-7534801.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-image"
            />
            <div className="hero-scrim"></div>
          </div>
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title home-hero-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroTitle_ujc4o0'),
                  }}
                ></span>
              </h1>
              <p className="hero-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroSubtitle_s0EW0C'),
                  }}
                ></span>
              </p>
              <div className="hero-actions">
                <a href="https://market.vcash.rs">
                  <div className="btn-primary btn-lg btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kX_Ovf'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="#how-it-works">
                  <div className="btn-outline btn-lg btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-0Cemh'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="steps-section">
          <div className="steps-container">
            <h2 className="text-center section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_rYy5GI'),
                }}
              ></span>
            </h2>
            <div className="steps-grid">
              <div className="step-item">
                <div className="step-number">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ypxeJQ'),
                      }}
                    ></span>
                  </span>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_QBTCSk'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_expMeF'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1HAukr'),
                      }}
                    ></span>
                  </span>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_o8KrEu'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_9rVFN1'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__p-U5R'),
                      }}
                    ></span>
                  </span>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_QjOuoM'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_egCepj'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div className="steps-cta">
              <a href="https://market.vcash.rs">
                <div className="btn-primary btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_O1Lu-j'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="features-section">
          <div className="features-container">
            <h2 className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_TZ4prN'),
                }}
              ></span>
            </h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-box">
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
                    <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_NbyEgY'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_D7UQRS'),
                    }}
                  ></span>
                </p>
                <div className="feature-links">
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_-BACYX'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_pM3Dz7'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon-box">
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
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_VVAMhb'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_TXdX4U'),
                    }}
                  ></span>
                </p>
                <div className="feature-links">
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_cpyQ6W'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_2ezD_l'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="feature-card-restricted feature-card">
                <div className="feature-icon-box">
                  <span className="restricted-badge">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('RestrictedBadge_hKxKkq'),
                      }}
                    ></span>
                  </span>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_zGzwnf'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_ZTzlIa'),
                    }}
                  ></span>
                </p>
                <div className="feature-links">
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_02Fw8z'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_-F-YC_'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon-box">
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
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_dGheEj'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_Tt4I4h'),
                    }}
                  ></span>
                </p>
                <div className="feature-links">
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_I6DPZ4'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_vLJnef'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon-box">
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
                    <circle r="1" cx="8" cy="21"></circle>
                    <circle r="1" cx="19" cy="21"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_mXdqaU'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_JzWMOE'),
                    }}
                  ></span>
                </p>
                <div className="feature-links">
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_UgO_Ck'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-link btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7rAsCX'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="feature-card feature-highlight">
                <div className="feature-icon-box">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_AtwtJd'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_3FWNC5'),
                    }}
                  ></span>
                </p>
                <div className="feature-links">
                  <a href="https://market.vcash.rs">
                    <div className="btn-primary btn-sm btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_IZg2US'),
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
        <section className="explore-section">
          <div className="explore-container">
            <div className="explore-content">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_fggvBx'),
                  }}
                ></span>
              </h2>
              <p className="section-content">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionContent_GQPOBk'),
                  }}
                ></span>
              </p>
              <div className="explore-filters">
                <span className="filter-pill">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FilterPill_oY5trm'),
                    }}
                  ></span>
                </span>
                <span className="filter-pill">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FilterPill_WPlNOz'),
                    }}
                  ></span>
                </span>
                <span className="filter-pill">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FilterPill_Izr28O'),
                    }}
                  ></span>
                </span>
                <span className="filter-pill">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FilterPill_oMv7JO'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="explore-actions">
                <a href="#">
                  <div className="btn-outline btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_emnvEM'),
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
                          __html: translate.raw('text_wheD3b'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="explore-visual">
              <div className="map-placeholder">
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
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle r="3" cx="12" cy="10"></circle>
                </svg>
                <span className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_luGiAq'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-section">
          <div className="trust-container">
            <h2 className="text-center section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_Lb2GGO'),
                }}
              ></span>
            </h2>
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-icon">
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
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_nzm2aA'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_bJgZFU'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
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
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11l3 3L22 4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_jJoW8_'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_KcYGII'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8 9V2"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_DDkoSv'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_V_O8fU'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
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
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_Br2C3m'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_ApHQ_K'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
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
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_KH5jFD'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_WICWg1'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12h6m-3-3v6"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_emDYyI'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_5kTmcn'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="showcase-section">
          <div className="showcase-media">
            <img
              alt="VCash Marketplace"
              src="https://images.pexels.com/photos/5054535/pexels-photo-5054535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="showcase-image"
            />
            <div className="showcase-scrim"></div>
          </div>
          <div className="showcase-container">
            <div className="showcase-content">
              <h2 className="hero-title home-hero-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroTitle_R7z91K'),
                  }}
                ></span>
              </h2>
              <p className="hero-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroSubtitle_rNGi0u'),
                  }}
                ></span>
              </p>
              <a href="https://market.vcash.rs">
                <div className="btn-accent btn-xl btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_4WD5Lu'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="faq-container">
            <h2 className="text-center section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_QjAVWa'),
                }}
              ></span>
            </h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-trigger">
                  <span className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_D61nU0'),
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
                    <path d="m6 9l6 6l6-6"></path>
                  </svg>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_DSgjdC'),
                      }}
                    ></span>
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-trigger">
                  <span className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_udYcto'),
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
                    <path d="m6 9l6 6l6-6"></path>
                  </svg>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_mxGfXF'),
                      }}
                    ></span>
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-trigger">
                  <span className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_X5Q6Lh'),
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
                    <path d="m6 9l6 6l6-6"></path>
                  </svg>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_aBDQl0'),
                      }}
                    ></span>
                  </p>
                </div>
              </details>
            </div>
            <div className="faq-footer">
              <a href="https://market.vcash.rs">
                <div className="btn-primary btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SnF4Mg'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <div className="sticky-cta-bar">
          <div className="sticky-container">
            <div className="sticky-logo">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_L4uv8L'),
                  }}
                ></span>
              </span>
            </div>
            <a href="https://market.vcash.rs">
              <div className="btn-primary btn-lg btn">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8aLPXY'),
                    }}
                  ></span>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer data-name="vcash-interactions">
(function(){
  // Simple scroll reveal for the hero section
  const heroContent = document.querySelector(".hero-content")
  if (heroContent) {
    heroContent.style.opacity = "0"
    heroContent.style.transform = "translateY(20px)"
    heroContent.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"

    setTimeout(() => {
      heroContent.style.opacity = "1"
      heroContent.style.transform = "translateY(0)"
    }, 100)
  }

  // Handle sticky bar visibility or simple analytics tracking
  const ctaButtons = document.querySelectorAll('a[href*="market.vcash.rs"]')
  ctaButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Conversion: Marketplace CTA Clicked")
      // Potential analytics event trigger here
    })
  })

  // Smooth appearance for trust items on scroll
  const trustItems = document.querySelectorAll(".trust-item")
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  trustItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = \`opacity 0.5s ease-out \${index * 0.1}s, transform 0.5s ease-out \${index * 0.1}s\`
    observer.observe(item)
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
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home

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
