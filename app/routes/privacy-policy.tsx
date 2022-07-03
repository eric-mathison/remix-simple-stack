import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Sidebar from "~/components/Sidebar";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main>
        <article className="mx-auto flex max-w-screen-2xl flex-col flex-wrap py-8 px-2 sm:px-6 md:flex-row md:flex-nowrap lg:px-8">
          <div className="flex-1 md:mr-8 lg:mr-12">
            <h1>Privacy Policy</h1>
          </div>
          <Sidebar />
        </article>
      </main>
      <Footer />
    </>
  );
}
