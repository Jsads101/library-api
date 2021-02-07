// creating book tabe using sequelize. ID automatically generated
module.exports = (connection, DataTypes) => {
    const schema = {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      numCopies : DataTypes.INTEGER,
    };
  
    const BookModel = connection.define("Book", schema);
    return BookModel;
  };