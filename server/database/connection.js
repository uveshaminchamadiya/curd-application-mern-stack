import mongosee from 'mongoose';

const con = async () =>{
    const url = 'mongodb://127.0.0.1:27017/curdOperation';
    try{
        await mongosee.connect(url)
        console.log("connected to the database");
    }catch(err){
        console.log("Error while connecting with database",err);
    }
}

export default con;