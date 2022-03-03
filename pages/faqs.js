import React from 'react'
import Image from 'next/image'
import styles from '../styles/Faqs.module.scss'

const Faqs = () => {

  return (
    <>
      <div className='container py-4'>
        <div className="pb-2 borderbottom d-flex align-items-center justify-content-between">
          <h3>FAQs</h3>
        </div>
        <div className="accordion">
          <div className="accordion-items shadow-sm mb-3">
            <div
              className={`${styles.accordion_button} accordion-button py-4`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-controls="collapse1"
              aria-expanded="true"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="heading1"
              data-bs-parent="#accordionExample"
            >
              <div className={`${styles.accordion_body} accordion-body`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <div className="accordion-items shadow-sm mb-3">
            <div
              className={`${styles.accordion_button} accordion-button py-4`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-controls="collapse2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              aria-labelledby="heading2"
              data-bs-parent="#accordionExample"
            >
              <div className={`${styles.accordion_body} accordion-body`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <div className="accordion-items shadow-sm mb-3">
            <div
              className={`${styles.accordion_button} accordion-button py-4`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-controls="collapse3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              aria-labelledby="heading3"
              data-bs-parent="#accordionExample"
            >
              <div className={`${styles.accordion_body} accordion-body`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <div className="accordion-items shadow-sm mb-3">
            <div
              className={`${styles.accordion_button} accordion-button py-4`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-controls="collapse4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div
              id="collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="heading4"
              data-bs-parent="#accordionExample"
            >
              <div className={`${styles.accordion_body} accordion-body`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs