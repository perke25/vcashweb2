import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
body.nav-open {
  overflow: hidden;
}
body.nav-open .navigation-mobile-overlay {
  display: flex;
  animation: slideIn 0.4s ease-out;
}
@media (prefers-reduced-motion: reduce) {
body.nav-open .navigation-mobile-overlay {
  animation: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <nav
            id="mainNav"
            className="navigation-container navigation-thq-navigation-container-elm"
          >
            <div className="navigation-wrapper">
              <div className="navigation-links-desktop">
                <img
                  alt={props.imageAlt1}
                  src="/vcash%203%20(1)-200h.png"
                  className="navigation-image"
                />
                <a href="/kako-funkcionise">
                  <div className="navigation-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_jt-tzW'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="/usluge">
                  <div className="navigation-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_plwzjA'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="/lokacije">
                  <div className="navigation-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_t_jFXS'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="/bezbednost">
                  <div className="navigation-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_SZy4ZD'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="/kontakt">
                  <div className="navigation-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_UH3MDZ'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
              <div className="navigation-actions">
                <a href="https://market.vcash.rs">
                  <div className="btn-primary navigation-cta-sticky btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nJtuyb'),
                        }}
                      ></span>
                    </span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7l-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <button
                  id="navToggle"
                  aria-label="Otvori meni"
                  aria-controls="mobileOverlay"
                  aria-expanded="false"
                  className="navigation-toggle"
                >
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="icon-menu"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div id="mobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-overlay-header">
            <a href="/">
              <div aria-label="VCash Home" className="navigation-brand">
                <div className="navigation-logo-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                </div>
                <span className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_-po4DU'),
                    }}
                  ></span>
                </span>
              </div>
            </a>
            <button
              id="navClose"
              aria-label="Zatvori meni"
              className="navigation-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <div className="navigation-mobile-links">
              <a href="/kako-funkcionise">
                <div className="navigation-mobile-link">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_WgOt1X'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
              <a href="/usluge">
                <div className="navigation-mobile-link">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PwVhdW'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
              <a href="/lokacije">
                <div className="navigation-mobile-link">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_KSxoEI'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
              <a href="/bezbednost">
                <div className="navigation-mobile-link">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_9TfKwQ'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
              <a href="/kontakt">
                <div className="navigation-mobile-link">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kBzyMv'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-footer">
              <a href="https://market.vcash.rs">
                <div className="btn-primary navigation-cta-full btn-xl btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8DBTLU'),
                      }}
                    ></span>
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-mobile-sticky-bar">
          <a href="https://market.vcash.rs">
            <div className="btn-primary navigation-cta-full btn-lg btn">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xS5QNa'),
                  }}
                ></span>
              </span>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="navigation-container5">
          <div className="navigation-container6">
            <Script
              html={`<style>
        @keyframes slideIn {from {transform: translateX(100%);}
to {transform: translateX(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="navigation-container7">
          <div className="navigation-container8">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const body = document.body

  const openNav = () => {
    body.classList.add("nav-open")
    navToggle.setAttribute("aria-expanded", "true")
    // Focus management for accessibility
    setTimeout(() => {
      navClose.focus()
    }, 100)
  }

  const closeNav = () => {
    body.classList.remove("nav-open")
    navToggle.setAttribute("aria-expanded", "false")
    navToggle.focus()
  }

  navToggle.addEventListener("click", openNav)
  navClose.addEventListener("click", closeNav)

  // Close overlay when clicking a mobile link
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeNav)
  })

  // Handle ESC key to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && body.classList.contains("nav-open")) {
      closeNav()
    }
  })

  // Simple scroll effect for desktop nav
  let lastScroll = 0
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset
    const nav = document.getElementById("mainNav")

    if (currentScroll > 50) {
      nav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)"
      nav.style.padding = "2px 0"
    } else {
      nav.style.boxShadow = "none"
      nav.style.padding = "0"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .navigation-image {
            width: 200px;
            object-fit: cover;
          }
          .navigation-container5 {
            display: none;
          }
          .navigation-container6 {
            display: contents;
          }
          .navigation-container7 {
            display: none;
          }
          .navigation-container8 {
            display: contents;
          }
          @media (max-width: 479px) {
            .navigation-thq-navigation-container-elm {
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  imageAlt1: 'image',
}

Navigation.propTypes = {
  imageAlt1: PropTypes.string,
}

export default Navigation
