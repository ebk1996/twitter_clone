import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../firebase/firebase";

type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);

  const handleSignUp = async () => {
    signInWithGoogle();
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    } else {
      console.log("You Need To Login");
    }
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="dark:bg-[#15202b] h-screen overflow-hidden"
    >
      <Head>
        <title>Cardinal &copy;| Discover</title>
        <meta name="Cardinal &copy;| Be Discovered." content="Cardinal &copy;| Be Discovered." />
        <link
          rel="icon"
          href="https://cardinal-images.s3.us-west-1.amazonaws.com/cardinal-logo-2.jpg"
        />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center pt-60">
        <img
          //className="h-120"
          style={{ height: "400px" }}
          src="https://cardinal-images.s3.us-west-1.amazonaws.com/cardinal-logo-2.jpg"
          alt=""
        />
        <p className="font-xs italic">
          Please login or register to continue.
        </p>
        <div className="mt-20">
          <div>
            <button
              className="p-3 bg-twitter rounded-lg text-white font-bold hover:bg-gray-500"
              onClick={handleSignUp}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default SignIn;
