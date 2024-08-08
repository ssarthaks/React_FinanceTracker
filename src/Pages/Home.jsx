import React from "react";

import fin1 from "../assets/Home/Finance1.jpg";
import fin2 from "../assets/Home/Finance2.jpg";
import fin3 from "../assets/Home/Finance3.jpg";
import fin4 from "../assets/Home/Finance4.jpg";

import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Container>
        <div className="text-slate-300 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-slate-200 font-bold">
            Welcome to Personal Finance Tracker
          </h1>
          <div className="flex flex-wrap mt-4 gap-8">
            <img src={fin1} alt="" className="w-60 h-60 rounded-full" />
            <img src={fin2} alt="" className="w-60 h-60 rounded-full" />
            <img src={fin3} alt="" className="w-60 h-60 rounded-full" />
            <img src={fin4} alt="" className="w-60 h-60 rounded-full" />
          </div>
          <h1 className="text-4xl mt-8">
            "<strong>A budget</strong> is telling your money{" "}
            <strong>where to go</strong> instead of <strong>where it went.</strong>"
          </h1>
          <h2 className="mt-20 text-2xl font-medium text-indigo-200">Get Started!</h2>
          <div className="flex flex-wrap gap-8">
            <Link to="/addtransaction">
              <button className="text-white text-xl rounded-2xl text-bold bg-gradiant1 py-3 px-7 mt-4">
                <strong>Add Your First Transaction</strong>
              </button>
            </Link>
          </div>
        </div>
    </Container>
  );
}

export default Home;
