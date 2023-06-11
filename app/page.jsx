import Feed from "@/components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Book
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Luxury Travel Accomodation</span>
    </h1>
    <p className='desc text-center'>
      Zambezi is Zambia's leading luxury accomodation booking website. Browse our screened accomodation providers
      and book through our website or mobile app. Becuase good sleep is impotant.
    </p>

    <Feed />
  </section>
);

export default Home;