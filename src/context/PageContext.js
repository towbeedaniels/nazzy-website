import React, { createContext, useState, useContext } from 'react';

const PageContext = createContext();

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within PageProvider');
  }
  return context;
};

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <PageContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </PageContext.Provider>
  );
};
