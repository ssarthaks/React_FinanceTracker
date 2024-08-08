import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import {
  Home,
  AddTransaction,
  Report,
  Setting,
  ListTransaction,
} from "./Pages/Index";
import { FinanceContextProvider } from "./Context/FinanceContext";

function App() {
  return (
    <div className="min-h-screen bg-slate-500">
      <FinanceContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/addtransaction" element={<AddTransaction />} />
              <Route path="/listtransaction" element={<ListTransaction />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/report" element={<Report />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FinanceContextProvider>
    </div>
  );
}

export default App;
