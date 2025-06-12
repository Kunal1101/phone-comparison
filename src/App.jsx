import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";
import ComparisonTable from "./components/Comparison/ComparisonTable";

const App = () => {
  const [compareItems, setCompareItems] = useState(() => {
    const saved = localStorage.getItem("compareItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleCompare = (product) => {
    const exists = compareItems.find((item) => item.id === product.id);
    if (exists) {
      setCompareItems(compareItems.filter((item) => item.id !== product.id));
    } else if (compareItems.length < 3) {
      setCompareItems([...compareItems, product]);
    }
  };

  const clearCompare = () => {
    setCompareItems([]);
    localStorage.removeItem("compareItems");
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("compareItems", JSON.stringify(compareItems));
  }, [compareItems]);

  useEffect(() => {
    document.body.className = isDarkMode
      ? "bg-dark text-white"
      : "bg-light text-dark";
  }, [isDarkMode]);

  return (
    <div className="container py-4">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <ComparisonTable
        compareItems={compareItems}
        clearCompare={clearCompare}
      />

      <div className="row">
        <ProductList
          compareItems={compareItems}
          handleToggleCompare={handleToggleCompare}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default App;
