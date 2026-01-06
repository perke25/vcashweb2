import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Lokacije1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="lokacije1-container1">
        <section className="Lokacije-section">
          <div className="Lokacije-container">
            <div className="Lokacije-content-grid">
              <div className="Lokacije-info-panel">
                <div className="Lokacije-header">
                  <h2 className="section-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle__YM4ra'),
                      }}
                    ></span>
                  </h2>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_lZnmfo'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="Lokacije-controls">
                  <div className="Lokacije-search-wrapper">
                    <div className="Lokacije-icon-search">
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
                          <path d="m21 21l-4.34-4.34"></path>
                          <circle r="8" cx="11" cy="11"></circle>
                        </g>
                      </svg>
                    </div>
                    <input
                      type="text"
                      aria-label="Search locations"
                      placeholder="Unesi grad/ mesto"
                      className="Lokacije-search-input"
                    />
                  </div>
                  <div className="Lokacije-filters">
                    <button
                      data-filter="all"
                      className="active Lokacije-filter-btn"
                    >
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_gfCGsc'),
                          }}
                        ></span>
                      </span>
                    </button>
                    <button
                      data-filter="petrol"
                      className="Lokacije-filter-btn"
                    >
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5m-4 16V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16m-1 0h13M3 9h11"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_cjY7J-'),
                          }}
                        ></span>
                      </span>
                    </button>
                    <button data-filter="mall" className="Lokacije-filter-btn">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle r="1" cx="8" cy="21"></circle>
                          <circle r="1" cx="19" cy="21"></circle>
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </g>
                      </svg>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_LqstK0'),
                          }}
                        ></span>
                      </span>
                    </button>
                    <button data-filter="mall" className="Lokacije-filter-btn">
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
                          <svg d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg>
                          <path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6l-3-3m-6-2v-5a5 5 0 0 1 5-5h3l-3-3m0 6l3-3"></path>
                        </g>
                      </svg>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_HII2rZ'),
                          }}
                        ></span>
                      </span>
                    </button>
                    <button data-filter="mall" className="Lokacije-filter-btn">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m8 2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_PpJ8jh'),
                          }}
                        ></span>
                      </span>
                    </button>
                  </div>
                </div>
                <div id="locationList" className="Lokacije-results-list">
                  <div data-type="petrol" className="Lokacije-card">
                    <div className="Lokacije-card-icon">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="Lokacije-card-details">
                      <h3 className="Lokacije-card-title">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('LokacijeCardTitle_tl17hV'),
                          }}
                        ></span>
                      </h3>
                      <p className="Lokacije-card-address">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('LokacijeCardAddress_22AECX'),
                          }}
                        ></span>
                      </p>
                      <div className="Lokacije-card-meta">
                        <span className="Lokacije-tag">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('LokacijeTag_L7O1Iy'),
                            }}
                          ></span>
                        </span>
                        <span className="Lokacije-tag">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('LokacijeTag_2H1zh3'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div data-type="mall" className="Lokacije-card">
                    <div className="Lokacije-card-icon">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="Lokacije-card-details">
                      <h3 className="Lokacije-card-title">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('LokacijeCardTitle__oUcsU'),
                          }}
                        ></span>
                      </h3>
                      <p className="Lokacije-card-address">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('LokacijeCardAddress_RXR0-J'),
                          }}
                        ></span>
                      </p>
                      <div className="Lokacije-card-meta">
                        <span className="Lokacije-tag">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('LokacijeTag_lX2dfZ'),
                            }}
                          ></span>
                        </span>
                        <span className="Lokacije-tag">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('LokacijeTag_7GwXAY'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div data-type="petrol" className="Lokacije-card">
                    <div className="Lokacije-card-icon">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="Lokacije-card-details">
                      <h3 className="Lokacije-card-title">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('LokacijeCardTitle_WVpxHr'),
                          }}
                        ></span>
                      </h3>
                      <p className="Lokacije-card-address">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('LokacijeCardAddress_lVGt3D'),
                          }}
                        ></span>
                      </p>
                      <div className="Lokacije-card-meta">
                        <span className="Lokacije-tag">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('LokacijeTag_PwJHZR'),
                            }}
                          ></span>
                        </span>
                        <span className="Lokacije-tag">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('LokacijeTag_T-zAzh'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Lokacije-cta-footer">
                  <Link href="/lokacije">
                    <a>
                      <div className="lokacije1-thq-btn-elm btn-primary btn-lg btn">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_K8Jsum'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="Lokacije-map-panel">
                <div className="Lokacije-map-container">
                  <img
                    alt="VCash Interactive Map"
                    src="https://images.pexels.com/photos/17445146/pexels-photo-17445146.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    className="Lokacije-map-img"
                  />
                  <div className="Lokacije-map-overlay">
                    <div className="lokacije1-thq-lokacije-map-marker-elm1 Lokacije-map-marker">
                      <div className="Lokacije-marker-dot"></div>
                      <div className="Lokacije-marker-pulse"></div>
                    </div>
                    <div className="lokacije1-thq-lokacije-map-marker-elm2 Lokacije-map-marker">
                      <div className="Lokacije-marker-dot"></div>
                      <div className="Lokacije-marker-pulse"></div>
                    </div>
                    <div className="lokacije1-thq-lokacije-map-marker-elm3 Lokacije-map-marker">
                      <div className="Lokacije-marker-dot"></div>
                      <div className="Lokacije-marker-pulse"></div>
                    </div>
                  </div>
                  <div className="Lokacije-map-glass">
                    <p className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_aHC_CF'),
                        }}
                      ></span>
                    </p>
                    <span className="Lokacije-badge">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('LokacijeBadge_G_5V6l'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="lokacije1-container2">
          <div className="lokacije1-container3">
            <Script
              html={`<style>
        @keyframes pulse {0% {transform: translate(-50%, -50%) scale(1);
opacity: 0.8;}
100% {transform: translate(-50%, -50%) scale(4);
opacity: 0;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="lokacije1-container4">
          <div className="lokacije1-container5">
            <Script
              html={`<script defer data-name="lokacije-logic">
(function(){
  const searchInput = document.querySelector(".Lokacije-search-input")
  const filterButtons = document.querySelectorAll(".Lokacije-filter-btn")
  const locationCards = document.querySelectorAll(".Lokacije-card")

  // Filter Logic
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Toggle active class
      filterButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      const filterValue = btn.getAttribute("data-filter")

      locationCards.forEach((card) => {
        const cardType = card.getAttribute("data-type")
        if (filterValue === "all" || filterValue === cardType) {
          card.style.display = "flex"
          card.style.animation = "fadeIn 0.4s ease forwards"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Search Logic (Simple text match)
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase()

    locationCards.forEach((card) => {
      const title = card.querySelector(".Lokacije-card-title").textContent.toLowerCase()
      const address = card.querySelector(".Lokacije-card-address").textContent.toLowerCase()

      if (title.includes(term) || address.includes(term)) {
        card.style.display = "flex"
      } else {
        card.style.display = "none"
      }
    })
  })

  // Card click interaction
  locationCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Visual feedback
      locationCards.forEach((c) => (c.style.borderColor = "var(--color-border)"))
      card.style.borderColor = "var(--color-primary)"

      // In a real app, this would center the map on this location
      console.log("Centering map on:", card.querySelector(".Lokacije-card-title").textContent)
    })
  })

  // Simple animation definition
  const styleSheet = document.createElement("style")
  styleSheet.innerText = \`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  \`
  document.head.appendChild(styleSheet)
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .lokacije1-container1 {
            display: contents;
          }
          .lokacije1-thq-btn-elm {
            text-decoration: none;
          }
          .lokacije1-thq-lokacije-map-marker-elm1 {
            top: 30%;
            left: 45%;
          }
          .lokacije1-thq-lokacije-map-marker-elm2 {
            top: 55%;
            left: 60%;
          }
          .lokacije1-thq-lokacije-map-marker-elm3 {
            top: 40%;
            left: 25%;
          }
          .lokacije1-container2 {
            display: none;
          }
          .lokacije1-container3 {
            display: contents;
          }
          .lokacije1-container4 {
            display: none;
          }
          .lokacije1-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Lokacije1
