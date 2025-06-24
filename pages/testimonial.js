import Head from "next/head";
import { useState } from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../components/layouts/Layout";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import CustomerReviewsData from "../data/CustomerReviews.json";
import Image from "next/legacy/image";

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const changeActive = (index) => {
    setActiveTestimonial(index);
  };

  return (
    <Layout>
      <Head>
        <title>Customer Reviews || Keystroke Creative Agency</title>
      </Head>

      <Breadcrumb title="Customer Reviews" current="Customer Reviews" />

      <main className="page-wrapper">
        {/* Google Reviews Section */}
        <div className="axil-testimonial-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                <div className="section-title text-start">
                  <h2 className="title">Google Reviews</h2>
                  <p className="subtitle-2 mb--50">
                    Hear directly from our clients on Google. Their honest feedback reflects the impact we've made through our services and partnerships.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt_mobile--20">
                <div className="axil-social-share text-start text-sm-right">
                  <Image width={213} height={70} src="/images/shape/google.png" alt="Google Reviews" />
                </div>
              </div>
            </div>
            <div className="testimonial-activation">
              <div className="row axil-testimonial-single">
                {CustomerReviewsData?.map((review, index) => (
                  review.company === "google" && (
                    <TestimonialCard
                      key={`testimonial-${index}`}
                      column="col-lg-6 mt--60 mt_sm--30 mt_md--30"
                      testimonialClass="axil-testimonial style-var--2 axil-control testimonial"
                      data={review}
                      index={index}
                      activeIndex={activeTestimonial}
                      changeActive={changeActive}
                    />
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Facebook Reviews Section */}
        <div className="axil-testimonial-area ax-section-gap bg-color-lightest">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                <div className="section-title text-start">
                  <h2 className="title">Facebook Reviews</h2>
                  <p className="subtitle-2 mb--50">
                    Discover how our clients rate us on Facebook. These reviews showcase our commitment to quality and relationship building.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt_mobile--20">
                <div className="axil-social-share text-start text-sm-right">
                  <Image width={70} height={70} src="/images/shape/facebook.png" alt="Facebook Reviews" />
                </div>
              </div>
            </div>
            <div className="testimonial-activation">
              <div className="row axil-testimonial-single">
                {CustomerReviewsData?.map((review, index) => (
                  review.company === "facebook" && (
                    <TestimonialCard
                      key={`testimonial-${index}`}
                      column="col-lg-6 mt--60 mt_sm--30 mt_md--30"
                      testimonialClass="axil-testimonial style-var--2 axil-control testimonial"
                      data={review}
                      index={index}
                      activeIndex={activeTestimonial}
                      changeActive={changeActive}
                    />
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Yelp Reviews Section */}
        <div className="axil-testimonial-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                <div className="section-title text-start">
                  <h2 className="title">Yelp Reviews</h2>
                  <p className="subtitle-2 mb--50">
                    Explore real feedback from our clients on Yelp—sharing experiences, stories, and how we helped solve real challenges.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt_mobile--20">
                <div className="axil-social-share text-start text-sm-right">
                  <Image width={136} height={70} src="/images/shape/yelp.png" alt="Yelp Reviews" />
                </div>
              </div>
            </div>
            <div className="testimonial-activation">
              <div className="row axil-testimonial-single">
                {CustomerReviewsData?.map((review, index) => (
                  review.company === "yelp" && (
                    <TestimonialCard
                      key={`testimonial-${index}`}
                      column="col-lg-6 mt--60 mt_sm--30 mt_md--30"
                      testimonialClass="axil-testimonial style-var--2 axil-control testimonial"
                      data={review}
                      index={index}
                      activeIndex={activeTestimonial}
                      changeActive={changeActive}
                    />
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Testimonial;
