module.exports = function( req, res, next ) {
    const { session } = req;
  
    if ( !session.user ) {
      console.log("no user logged in!")
    } 
    
    next();
  };