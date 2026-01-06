import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-top-cta">
              <div className="footer-cta-content">
                <h2 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_wtUChw'),
                    }}
                  ></span>
                </h2>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_yYL6Du'),
                    }}
                  ></span>
                </p>
              </div>
              <a href="https://market.vcash.rs">
                <div className="btn-primary footer-primary-cta btn-xl btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_g8OmNm'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
            <div className="footer-grid">
              <div className="footer-brand-column">
                <div className="footer-logo-wrapper">
                  <div className="footer-container2">
                    <img
                      alt={props.imageAlt1}
                      src={props.imageSrc1}
                      className="footer-image"
                    />
                  </div>
                </div>
                <p className="footer-description">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FooterDescription_uBKXjb'),
                    }}
                  ></span>
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-icon">
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
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-icon">
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
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-icon">
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-column-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FooterColumnTitle_REboiT'),
                    }}
                  ></span>
                </h3>
                <nav className="footer-nav">
                  <a href="/homepage">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_hrZesm'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/u-izradi">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1BfQXE'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/lokacije">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_YF6XGR'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/kontakt">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_eMhDva'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/u-izradi">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_rB9wHT'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-column-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FooterColumnTitle_OKE9Ok'),
                    }}
                  ></span>
                </h3>
                <nav className="footer-nav">
                  <a href="/usluge">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Iwd-3F'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/usluge">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_40-N43'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/kako-funkcionise">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Szngr6'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="https://market.vcash.rs">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_nHgGs_'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/u-izradi">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_GpE0lM'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-column-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FooterColumnTitle_XVsjqx'),
                    }}
                  ></span>
                </h3>
                <nav className="footer-nav">
                  <a href="/bezbednost-i-uskladjenost">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Qds0-C'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/u-izradi">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7ZNFEQ'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/u-izradi">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MkjUYS'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="/u-izradi">
                    <div className="footer-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_qv3s77'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <div className="footer-compliance-badge">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="footer-badge-icon"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </svg>
                    <span className="footer-badge-text">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('FooterBadgeText_aUSDIA'),
                        }}
                      ></span>
                    </span>
                  </div>
                </nav>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-copyright">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qyuH33'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="footer-bottom-links">
                <span className="footer-status">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FooterStatus_sZFkPa'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
          <div className="footer-mobile-sticky">
            <a href="https://market.vcash.rs">
              <div className="btn-primary footer-sticky-btn btn-lg btn">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WJV8Tb'),
                    }}
                  ></span>
                </span>
              </div>
            </a>
          </div>
        </footer>
        <div className="footer-container3">
          <div className="footer-container4">
            <Script
              html={`<style>
        @keyframes pulseStatus {0% {opacity: 1;
transform: scale(1);}
50% {opacity: 0.6;
transform: scale(1.1);}
100% {opacity: 1;
transform: scale(1);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="footer-container5">
          <div className="footer-container6">
            <Script
              html={`<script defer data-name="footer-logic">
(function(){
  // The footer is mostly static for SEO and accessibility,
  // but we can add a simple scroll observer to hide/show the mobile sticky CTA
  // to prevent overlapping with the footer's own CTA.

  const footerCta = document.querySelector(".footer-top-cta")
  const stickyMobileBar = document.querySelector(".footer-mobile-sticky")

  if (footerCta && stickyMobileBar) {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stickyMobileBar.style.opacity = "0"
          stickyMobileBar.style.pointerEvents = "none"
          stickyMobileBar.style.transform = "translateY(100%)"
          stickyMobileBar.style.transition = "all 0.4s ease"
        } else {
          stickyMobileBar.style.opacity = "1"
          stickyMobileBar.style.pointerEvents = "auto"
          stickyMobileBar.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    observer.observe(footerCta)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .footer-image {
            width: 200px;
            object-fit: cover;
          }
          .footer-container3 {
            display: none;
          }
          .footer-container4 {
            display: contents;
          }
          .footer-container5 {
            display: none;
          }
          .footer-container6 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  imageAlt1: 'image',
  imageSrc1: '/vcash%204%20(1)-200h.png',
}

Footer.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default Footer
