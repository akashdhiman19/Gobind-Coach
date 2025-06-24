import Head from 'next/head';
import Link from 'next/link';
import Image from "next/legacy/image";
import CountDownTimer from '../components/timer/CountDownTimer';
import Logo from '../components/common/Logo';
import ThemeSwitcher from '../components/layouts/ThemeSwitcher';

const ComingSoon = () => {
    return (
        <>
            <Head>
                <title>Coming Soon || Gobind Coach</title>
            </Head>
            <ThemeSwitcher />
            <main className="page-wrapper">
                <div className="axil-comming-soon-area axil-comming-soon theme-gradient">
                    <div className="wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-10 col-12">
                                    <div className="content">
                                        <div className="logo pt--30">
                                            <Link href="/">
                                                <Logo />
                                            </Link>
                                        </div>
                                        <div className="inner">
                                            <h1 className="title mb--20">
                                                Something exciting <br /> is coming your way!
                                            </h1>
                                            <p className="subtitle-2 mb--40 mb_sm--20 mb_md--20">
                                                We’re working hard on a brand-new experience <br />
                                                that will redefine your expectations. Stay tuned for the big reveal!
                                            </p>
                                            <div className="box-timer countdown-style-1">
                                                <div className="countbox timer-grid">
                                                    <CountDownTimer />
                                                </div>
                                            </div>
                                            <div className="axil-newsletter mt--40 mt_md--20 mt_sm--20">
                                                <form className="newsletter-form" action="#">
                                                    <input type="email" placeholder="Enter your email to get notified" />
                                                    <a className="axil-button btn-transparent" href="#">
                                                        <span className="button-text">Notify Me</span>
                                                        <span className="button-icon"></span>
                                                    </a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-wrapper">
                        <div className="shape shape-01">
                            <Image width={67} height={28} src="/images/shape/404-01.svg" alt="Decorative shape" />
                        </div>
                        <div className="shape shape-02">
                            <Image width={67} height={28} src="/images/shape/404-01.svg" alt="Decorative shape" />
                        </div>
                        <div className="shape shape-03">
                            <Image width={1920} height={761} src="/images/shape/404-02.svg" alt="Background decoration" />
                        </div>
                        <div className="shape shape-04">
                            <Image width={670} height={106} src="/images/shape/comming-01.svg" alt="Wavy banner shape" />
                        </div>
                        <div className="shape shape-05">
                            <Image width={329} height={550} src="/images/shape/comming-soon.svg" alt="Coming soon visual" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ComingSoon;
