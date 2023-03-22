import React from "react";
import { CustomCard } from "../../components/custom-card/CustomCard";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { Hero } from "./Hero";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <div className="card-section mt-5 flex-wrap">
        <div className="py-4 d-flex justify-content-between">
          <h3>Browse Library</h3>
        </div>

        <div className="d-flex gap-4">
          <CustomCard
            title="Think Grow and Rich"
            img="https://books.google.com.au/books/publisher/content?id=1ZxxDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0v9Lw0H9HDfEMJYmYnpruLGX-xDA&w=1280"
            summary=" just a summary"
          />
          <CustomCard
            title="Think Grow and Rich"
            img="https://books.google.com.au/books/publisher/content?id=1ZxxDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0v9Lw0H9HDfEMJYmYnpruLGX-xDA&w=1280"
            summary=" just a summary"
          />
          <CustomCard
            title="Think Grow and Rich"
            img="https://books.google.com.au/books/publisher/content?id=1ZxxDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0v9Lw0H9HDfEMJYmYnpruLGX-xDA&w=1280"
            summary=" just a summary"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
