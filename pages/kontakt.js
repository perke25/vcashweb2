import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Kontakt = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="kontakt-container10">
        <Head>
          <title>Kontakt - Blind Euphoric Rabbit</title>
          <meta property="og:title" content="Kontakt - Blind Euphoric Rabbit" />
          <link
            rel="canonical"
            href="https://blind-euphoric-rabbit-45ym7d.teleporthq.app/kontakt"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <section className="hero-contact">
          <div className="hero-contact__media">
            <img
              alt="VCash Contact Hero"
              src="https://images.pexels.com/photos/7108095/pexels-photo-7108095.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-contact__img"
            />
            <div className="hero-contact__overlay"></div>
          </div>
          <div className="hero-contact__container">
            <div className="hero-contact__content">
              <h1 className="hero-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroTitle_zKK1Jx'),
                  }}
                ></span>
              </h1>
              <p className="hero-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroSubtitle_ae7RAe'),
                  }}
                ></span>
              </p>
              <div className="hero-contact__actions">
                <a href="https://market.vcash.rs">
                  <div className="btn-primary btn-lg btn">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_yHPBf7'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <div className="hero-contact__quick-info">
                  <div className="hero-contact__info-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
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
                          __html: translate.raw('text_-qkh4u'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="hero-contact__info-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dxLkh4'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="hero-contact__info-item">
                    <a href="mailto:podrska@vcash.rs?subject=">
                      <div className="kontakt-container11">
                        <span>podrska@vcash.rs</span>
                      </div>
                    </a>
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
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-form-section">
          <div className="contact-form-section__container">
            <div className="contact-form-card">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_7rFWXg'),
                  }}
                ></span>
              </h2>
              <p className="section-content">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionContent_LwLQc_'),
                  }}
                ></span>
              </p>
              <form
                action="/submit-contact"
                method="POST"
                data-form-id="f124e38e-0aaf-4d5c-b68b-c3e84273dc68"
                className="contact-form"
              >
                <div className="contact-form__group">
                  <label htmlFor="inquiry-type" className="contact-form__label">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('ContactForm__label_sWKbCf'),
                      }}
                    ></span>
                  </label>
                  <select
                    id="inquiry-type"
                    name="tip upita"
                    required="true"
                    data-form-field-id="inquiry-type"
                    className="contact-form__select"
                  >
                    <option value="cannot-activate">
                      Ne mogu da aktiviram vaučer.
                    </option>
                    <option value="not-printed">
                      Nije mi odštampao vaučer
                    </option>
                    <option value="no-gift-code">
                      Nisam dobio gift card kod na mail.
                    </option>
                    <option value="partnership">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5k4dyA'),
                        }}
                      ></span>
                    </option>
                    <option value="general">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__aVFB_'),
                        }}
                      ></span>
                    </option>
                  </select>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="name" className="contact-form__label">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('ContactForm__label_lwNaUr'),
                        }}
                      ></span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="ime i prezime"
                      required="true"
                      placeholder="Vaše ime"
                      data-form-field-id="name"
                      className="contact-form__input"
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('ContactForm__label_IpVYsK'),
                        }}
                      ></span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email adresa"
                      required="true"
                      placeholder="email@primer.com"
                      data-form-field-id="email"
                      className="contact-form__input"
                    />
                  </div>
                </div>
                <label htmlFor="thq_phone_MQ2W">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QMoMVU'),
                    }}
                  ></span>
                </label>
                <input
                  type="tel"
                  id="thq_phone_MQ2W"
                  name="broj mobilnog telefona"
                  placeholder="Phone"
                  data-form-field-id="thq_phone_MQ2W"
                  className="input contact-form__input"
                />
                <div className="kontakt-container12"></div>
                <label htmlFor="thq_dropdown_995C">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6b8_PJ'),
                    }}
                  ></span>
                </label>
                <datalist
                  id="thq_dropdown_995C"
                  name="lokacija kupovine vauera"
                  data-form-field-id="thq_dropdown_995C"
                  className="contact-form__select"
                >
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </datalist>
                <select
                  id="thq_dropdown_995C"
                  name="lokacija kupovine vauera"
                  required
                  data-form-field-id="thq_dropdown_995C"
                  className="contact-form__select"
                >
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <select
                  id="thq_dropdown_995C"
                  name="lokacija kupovine vauera"
                  required
                  data-form-field-id="thq_dropdown_995C"
                  className="contact-form__select"
                >
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <div
                  id="partner-fields"
                  className="contact-form__partner-fields"
                >
                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label htmlFor="company" className="contact-form__label">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('ContactForm__label_F-TcFI'),
                          }}
                        ></span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="naziv firme"
                        placeholder="Vaša firma"
                        data-form-field-id="company"
                        className="contact-form__input"
                      />
                    </div>
                    <div className="contact-form__group">
                      <label
                        htmlFor="collaboration"
                        className="contact-form__label"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('ContactForm__label_2yEjIT'),
                          }}
                        ></span>
                      </label>
                      <input
                        type="text"
                        id="collaboration"
                        name="tip saradnje"
                        placeholder="npr. Maloprodaja, API integracija"
                        data-form-field-id="collaboration"
                        className="contact-form__input"
                      />
                    </div>
                  </div>
                </div>
                <label htmlFor="thq_datetime_picker_vt-6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fnOBy-'),
                    }}
                  ></span>
                </label>
                <div className="kontakt-container13"></div>
                <div className="contact-form__group">
                  <div>
                    <input
                      type="date"
                      id="thq_datetime_picker_vt-6"
                      name="datum i okvirno vreme kupovine"
                      required
                      data-form-field-id="thq_datetime_picker_vt-6"
                      className="input contact-form__input"
                    />
                    <input
                      type="time"
                      id="thq_time_picker_vt-6"
                      name="time_picker"
                      required
                      data-form-field-id="thq_time_picker_vt-6"
                      className="input contact-form__input"
                    />
                  </div>
                  <div>
                    <div className="kontakt-container15">
                      <Script
                        html={`<script>

  // Set default date to today
  const dateInput = document.getElementById("thq_date_picker_vt-6")
  const timeInput = document.getElementById("thq_time_picker_vt-6")

  const today = new Date()
  dateInput.value = today.toISOString().split("T")[0]

  const hours = String(today.getHours()).padStart(2, "0")
  const minutes = String(today.getMinutes()).padStart(2, "0")
  timeInput.value = \`\${hours}:\${minutes}\`

</script>`}
                      ></Script>
                    </div>
                  </div>
                  <label htmlFor="thq_number_9ohx">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_9dLNPG'),
                      }}
                    ></span>
                  </label>
                  <input
                    type="text"
                    id="thq_number_9ohx"
                    name="KOD TRANSFERA sa vauera ako ga imate"
                    pattern="[A-Za-z0-9]&#123;3&#125;-[A-Za-z0-9]&#123;3&#125;"
                    maxlength="7"
                    placeholder="Unesi kod transfera sa vaučera"
                    data-form-field-id="thq_number_9ohx"
                    className="input contact-form__input"
                  />
                  <label htmlFor="message" className="contact-form__label">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('ContactForm__label_B0FWHs'),
                      }}
                    ></span>
                  </label>
                  <textarea
                    id="message"
                    name="poruka"
                    minlength="10"
                    placeholder="Kako možemo da pomognemo?"
                    data-form-field-id="message"
                    className="contact-form__textarea"
                  ></textarea>
                </div>
                <div className="kontakt-container16"></div>
                <button
                  id="thq_button_DLEE"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_DLEE"
                  className="btn-primary btn-xl contact-form__submit btn"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Btn_Wy_zIZ'),
                    }}
                  ></span>
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="contact-details">
          <div className="contact-details__container">
            <div className="contact-details__grid">
              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_lIR-iG'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_DjqUS5'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_VCWkAB'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_nDQYRb'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_yQQEs7'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_xGB8nM'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_Tg4HDu'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_x2nNdN'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="partner-benefits">
          <div className="partner-benefits__container">
            <h2 className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_5zCLsd'),
                }}
              ></span>
            </h2>
            <div className="partner-benefits__grid">
              <div className="benefit-item">
                <div className="benefit-item__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path>
                  </svg>
                </div>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_glMzpD'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_gr7890'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-item__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
                </div>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_qfbzlc'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_y-tsMV'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-item__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="5"
                        y="2"
                        rx="2"
                        ry="2"
                        width="14"
                        height="20"
                      ></rect>
                      <path d="M12 18h.01"></path>
                    </g>
                  </svg>
                </div>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_11JcF0'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_2d2m5D'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-item__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                    </g>
                  </svg>
                </div>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_5PNwnP'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_uS5MXe'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-item__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </svg>
                </div>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_OeErWM'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_-ETqMS'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-item__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <h4 className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_SLNoj6'),
                    }}
                  ></span>
                </h4>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_R0jucE'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div className="partner-benefits__cta">
              <a href="/partners">
                <div className="btn-secondary btn-lg btn">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zeW6ug'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="explore-quick-links">
          <div className="explore-quick-links__container">
            <h2 className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_CEySHG'),
                }}
              ></span>
            </h2>
            <div className="explore-quick-links__grid">
              <a href="https://market.vcash.rs">
                <div className="explore-card">
                  <div className="explore-card__icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="explore-card__content">
                    <h4 className="section-subtitle">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_kTx3YB'),
                        }}
                      ></span>
                    </h4>
                    <p className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_iNVKQ5'),
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              </a>
              <a href="#support">
                <div className="explore-card">
                  <div className="explore-card__icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="explore-card__content">
                    <h4 className="section-subtitle">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_Yh87W9'),
                        }}
                      ></span>
                    </h4>
                    <p className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_F-bLiU'),
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              </a>
              <a href="/faq">
                <div className="explore-card">
                  <div className="explore-card__icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="explore-card__content">
                    <h4 className="section-subtitle">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_A7-XIX'),
                        }}
                      ></span>
                    </h4>
                    <p className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_GFT49a'),
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              </a>
              <a href="/legal">
                <div className="explore-card">
                  <div className="explore-card__icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                  </div>
                  <div className="explore-card__content">
                    <h4 className="section-subtitle">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_QVcV8r'),
                        }}
                      ></span>
                    </h4>
                    <p className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_uEJxcw'),
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="location-search">
          <div className="location-search__container">
            <div className="location-search__grid">
              <div className="location-search__info">
                <h2 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_FiZ3I_'),
                    }}
                  ></span>
                </h2>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_TU95WG'),
                    }}
                  ></span>
                </p>
                <div className="location-search__bar">
                  <div className="location-search__input-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <input
                      type="text"
                      placeholder="Unesite grad ili adresu..."
                      className="location-search__input"
                    />
                  </div>
                  <a href="/locations">
                    <div className="btn-primary btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_fHMXZy'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="location-search__map-preview">
                <div className="kontakt-map-placeholder">
                  <div className="map-placeholder__marker">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                  <span className="map-placeholder__text">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('MapPlaceholder__text_U4Hxpj'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="kontakt-thq-final-ctafull-elm final-cta__full"></div>
        </section>
        <div className="kontakt-container17">
          <div className="kontakt-container18">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes bounce {0%,100% {transform: translateY(0);}
50% {transform: translateY(-15px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="kontakt-container19">
          <div className="kontakt-container20">
            <Script
              html={`<script defer data-name="contact-logic">
(function(){
  const inquirySelect = document.getElementById("inquiry-type")
  const partnerFields = document.getElementById("partner-fields")

  if (inquirySelect && partnerFields) {
    inquirySelect.addEventListener("change", (e) => {
      if (e.target.value === "partnership") {
        partnerFields.classList.add("is-visible")
        partnerFields.querySelectorAll("input").forEach((input) => input.setAttribute("required", ""))
      } else {
        partnerFields.classList.remove("is-visible")
        partnerFields.querySelectorAll("input").forEach((input) => input.removeAttribute("required"))
      }
    })
  }

  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const btn = contactForm.querySelector(".contact-form__submit")
      btn.textContent = "Sending..."
      btn.style.opacity = "0.7"
      btn.style.pointerEvents = "none"
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer locale={props?.locale ?? ''}></Footer>
      </div>
      <style jsx>
        {`
          .kontakt-container10 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .kontakt-container11 {
            color: inherit;
            text-decoration: none;
          }
          .kontakt-container12 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            flex-direction: column;
          }
          .kontakt-container13 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            flex-direction: column;
          }
          .kontakt-container15 {
            display: contents;
          }
          .kontakt-container16 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            flex-direction: column;
          }
          .kontakt-thq-final-ctafull-elm {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .kontakt-container17 {
            display: none;
          }
          .kontakt-container18 {
            display: contents;
          }
          .kontakt-container19 {
            display: none;
          }
          .kontakt-container20 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Kontakt

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
