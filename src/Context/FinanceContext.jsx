import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

const FinanceContext = createContext();

export const useTrans = () => useContext(FinanceContext);

export const FinanceContextProvider = ({ children }) => {
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    const storedTrans = JSON.parse(localStorage.getItem("trans"));
    console.log("Loading transactions from localStorage:", storedTrans);
    if (storedTrans && Array.isArray(storedTrans)) {
      setTrans(storedTrans);
    }
  }, []);

  useEffect(() => {
    console.log("Saving transactions to localStorage:", trans);
    localStorage.setItem("trans", JSON.stringify(trans));
  }, [trans]);

  const contextValue = useMemo(
    () => ({
      trans,
      addTrans: (income, expense, category) => {
        const newTransaction = {
          id: Date.now(),
          income,
          expense,
          category,
        };
        setTrans((prevTrans) => {
          const updatedTrans = [...prevTrans, newTransaction];
          console.log("Updated Transactions:", updatedTrans);
          return updatedTrans;
        });
      },
      removeTrans: (id) => {
        setTrans((prevTrans) => prevTrans.filter((trans) => trans.id !== id));
      },
      updateTrans: (id, income, expense, category) => {
        setTrans((prevTrans) =>
          prevTrans.map((trans) =>
            trans.id === id ? { ...trans, income, expense, category } : trans
          )
        );
      },
    }),
    [trans]
  );

  return (
    <FinanceContext.Provider value={contextValue}>
      {children}
    </FinanceContext.Provider>
  );
};
