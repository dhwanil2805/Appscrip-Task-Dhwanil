import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>My SEO Friendly Page</title>
                <meta name="description" content="This is an SEO-friendly page built with Next.js" />
            </Head>

            <Header />

            <main>
                <h1 style={{ paddingBottom: 10 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </h1>

                <h1 className="heading-name">
                    I'M <strong className="main-name">Dhwanil Kanthariya</strong>
                </h1>
                <br />
                <h1 style={{ fontSize: "2.6em" }}>
                    LET ME <span className="purple">INTRODUCE</span> MYSELF
                </h1>
                <p className="home-about-body">
                    I fell in love with programming and I have at least learnt something.
                    <br />
                    <br />I think I am fluent in classics like
                    <i>
                        <b className="purple"> HTML, CSS, React.js, and MongoDB.</b>
                    </i>
                    <br />
                    <br />
                    My field of Interest's are building new &nbsp;
                    <i>
                        <b className="purple">Web Projects in React</b> and also in{" "}
                        <b className="purple">PHP.</b>
                    </i>
                    <br />
                    <br />
                    Currently, I am studying at
                    <b className="purple"> SCET.</b>
                </p>

                <div className="image-container">
                    <Image src="/images/sample-image.jpg" alt="Sample Image" width={600} height={400} />
                </div>
            </main>
        </div>
    );
}
