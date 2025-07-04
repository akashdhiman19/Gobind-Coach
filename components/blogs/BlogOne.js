import Link from 'next/link';
import Image from "next/legacy/image";
import SectionTitle from '../common/SectionTitle';
import {useState} from "react";

const BlogOne = ({posts}) => {
    const [activeBlog, setActiveBlog] = useState(0);

    const changeActive = (index) => {
        setActiveBlog(index);
    };

    return (
        <div className="axil-blog-area ax-section-gap bg-color-lightest">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Latest stories"
                            subtitle="what's going on"
                            description="See what we've been up to lately and what's going in the world of buses."
                            color="extra04-color"
                            alignment="center"
                        />
                    </div>
                </div>
                <div className="row blog-list-wrapper mt--20">
                    {posts?.map((post, index) => (
                        <div className="col-lg-6 col-md-6 col-12"
                             key={`blog-post-${index}`}>
                            <div className={`axil-blog axil-control mt--40 ${activeBlog === index ? "active" : ""}`}
                                 onMouseEnter={() => changeActive(index)}>
                                <div className="content">
                                    <div className="content-wrap paralax-image">
                                        <div className="inner">
                                            <span className="category">GC Buses</span>
                                            <h5 className="title">
                                                <Link href={`/blog/${post.slug}`} legacyBehavior>
                                                    <a className="text-ellipsis">
                                                        {post.postdata.title.substring(0, 50)}
                                                    </a>
                                                </Link>
                                            </h5>
                                            <p>{post.postdata.excerpt.substring(0, 70)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail">
                                    <div className="image">
                                        <Image
                                            width={410}
                                            height={452}
                                            src={post.postdata.thumbnail?.large || "/images/default-thumbnail.jpg"}

                                            alt="Blog images"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogOne;
