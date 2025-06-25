import { GetServerSideProps } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";
import { Tweet } from "../typings";
import { fetchTweet } from "../utils/fetchTweet";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="dark:bg-[#15202b] h-screen overflow-hidden"
    >
      <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
        <Head>
          <title>Cardinal &copy; | Discover</title>
          <meta name="Cardinal &copy;| Be Discovered." content="Cardinal &copy;| Be Discovered." />
          <link
            rel="icon"
            href="https://cardinal-images.s3.us-west-1.amazonaws.com/cardinal-logo-2.jpg"
          />
        </Head>
        <Toaster />
        <main className="grid grid-cols-9">
          <SideBar isShow={false} isHome={true} />
          <Feed tweets={tweets} />
          <Widgets />
        </main>
      </div>
    </motion.div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweet();

  return {
    props: {
      tweets,
    },
  };
};
