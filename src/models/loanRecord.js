// creating loanRecord tabe using sequelize. ID automatically generated
module.exports = (connection, DataTypes) => {
    const schema = {
      bookId: DataTypes.INTEGER,
      readerId: DataTypes.INTEGER
      //returned: {type: DataTypes.INTEGER, defaultValue: 1}

    };
  
    const loanRecordModel = connection.define("LoanRecord", schema);
    return loanRecordModel;
  };