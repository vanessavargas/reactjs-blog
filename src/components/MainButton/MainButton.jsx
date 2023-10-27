const MainButton = ({ children, tamanho }) => {
  return (
    <button
      className={`
      main-button
      ${[tamanho]}
        `}
    >
      {children}
    </button>
  );
};

export default MainButton;
