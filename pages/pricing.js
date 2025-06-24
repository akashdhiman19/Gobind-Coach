import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import SectionTitle from "../components/common/SectionTitle";
import Layout from "../components/layouts/Layout";
import PricingTable from "../components/pricings/PricingTable";
import PricingData from "../data/Pricings.json";

const Pricing = () => {
  return (
    <Layout>
      <Head>
        <title>Pricing || Keystroke Creative Agency</title>
      </Head>

      <Breadcrumb title="Pricing" current="Pricing" />

      <main className="page-wrappper">
        <div className="axil-pricing-table-area pricing-shape-position ax-section-gap bg-color-lightest">
          <div className="container">
            <div className="row row--25 justify-content-center">
              {PricingData?.map((pricing, index) => (
                <PricingTable
                  key={`pricing-table-${index}`}
                  column="col-lg-4 col-md-6 col-sm-12 col-12"
                  pricingTableClass={
                    index === 1
                      ? "axil-pricing-table prcing-style-2 mt--40 active"
                      : "axil-pricing-table prcing-style-2 mt--40 mt_sm--60"
                  }
                  buttonClass={index === 1 ? "btn-solid" : "btn-transparent"}
                  data={pricing}
                />
              ))}
            </div>
          </div>
          <div className="shape-group">
            <div className="shape">
              <i className="icon icon-shape-15"></i>
            </div>
          </div>
        </div>

        <div className="axil-faq-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  title="Frequently Asked Questions"
                  subtitle="Find Your Answers"
                  description="Here are some of the most commonly asked questions about our pricing and services."
                  color="extra04-color"
                  alignment="center"
                />
              </div>
            </div>
            <div className="row mt--30">
              <div className="col-lg-8 offset-lg-2">
                <div id="accordion" className="axil-accordion--2">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <a
                        href="#"
                        className="btn btn-link d-block text-start"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What does each pricing plan include?
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        Each plan includes access to our full feature set, with differences in usage limits, priority support, and team collaboration options depending on the tier.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <a
                        href="#"
                        className="btn btn-link d-block text-start collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I change my plan later?
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        Absolutely! You can upgrade or downgrade your plan at any time through your account settings. Changes will be reflected in your next billing cycle.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <a
                        href="#"
                        className="btn btn-link d-block text-start collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Do you offer refunds if I cancel?
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        We offer a 7-day refund policy for first-time users. If you're not satisfied, contact our support team within 7 days of purchase and we’ll process your request.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default Pricing;
