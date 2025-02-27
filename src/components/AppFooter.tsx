"use client";

import { Footer } from "flowbite-react";

const AppFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex mt-0 -mb-10 ">
      <div className="flex-grow "></div>
      <Footer container className="mt-auto bg-neutral-800 dark:bg-slate-900 light:text-white">
        <Footer.Copyright
          by="Made With 💓 by Gitanshu Gautam"
          year={year}
        />
       
      </Footer>
    </div>
  );
}

export default AppFooter;