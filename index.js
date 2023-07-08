const Box = (props) => {
  //  Write your code here.
  const { boxCls, boxText } = props;
  return (
    <div className={boxCls}>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-bg-container">
    <h1 className="boxes-heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxCls="small-box" boxText="Small" />
      <Box boxCls="medium-box" boxText="Medium" />
      <Box boxCls="large-box" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
