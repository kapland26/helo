module.exports = {

    create:( req, res ) => {
        const connection = req.app.get('db');
        const {username, password} = req.body;
        console.log("user: "+username+" pass= "+password)
        connection.create_user([username, password])
            .then( (user)=> {
                // console.log(user);
                res.status(200).send(user);
            })
            .catch( (err) => {
                console.log(err);
                res.status(500).send(err);
            });    
    },
    login:( req, res ) => {
        const connection = req.app.get('db');
        const {username, password} = req.body;
        console.log("user: "+username+" pass= "+password)
        connection.login_user([username, password])
            .then( (user)=>  {
                // console.log(user);
                res.status(200).send(user)
            })
            .catch( (err) => {
                console.log(err);
                res.status(500).send(err);
            });    
    },
    getOne:(req, res) =>{
        let user = req.query.username;
        console.log(username);
        // const connection = req.app.get('db');
        // connection.get_user([])
    }
}
