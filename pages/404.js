import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layouts/Layout";
import Image from "next/legacy/image";

const ErrorPage = () => {
    return (
        <Layout showFooter={false}>
            <Head>
                <title>404 || Gobind Coach</title>
            </Head>
            <main className="page-wrapper page-error">
                <div className="axil-error-not-found fullscreen d-flex align-items-center theme-gradient-7 list-active">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="axil-error text-center">
                                    <div className="inner">
                                        <h1 className="title mb--20">Oops! Page Not Found</h1>
                                        <p className="subtitle-2 mb--30">
                                            The page you are looking for might have been removed,<br />
                                            had its name changed, or is temporarily unavailable.
                                        </p>
                                        <Link href="/" className="axil-button btn-large btn-transparent">
                                            <span className="button-text">Go to Homepage</span>
                                            <span className="button-icon" />
                                        </Link>

                                        <div className="text-image mt--40">
                                            <Image
                                                width={860}
                                                height={378}
                                                src="/images/others/404.svg"
                                                alt="404 Illustration"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-group">
                        <div className="shape shape-01">
                            <Image width={67} height={28} src="/images/shape/404-01.svg" alt="Decorative Shape" />
                        </div>
                        <div className="shape shape-02">
                            <Image width={67} height={28} src="/images/shape/404-01.svg" alt="Decorative Shape" />
                        </div>
                        <div className="shape shape-03">
                            <Image width={1920} height={761} src="/images/shape/404-02.svg" alt="Background Shape" />
                        </div>
                        <div className="shape shape-04">
                            <Image width={546} height={413} src="/images/shape/404-03.svg" alt="Abstract Shape" />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default ErrorPage;
