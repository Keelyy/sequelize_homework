import {Sequelize} from 'sequelize'


const sequelize = new Sequelize("node38_appfood","root","1234",{
    host:"localhost",
    port:"3307",
    dialect:"mysql"
});


// try{
//     await sequelize.authenticate(); // xác minh là đã connect tới database thành công hay chưa
//     console.log("Kết nối thành công");
// } catch (error) {
//     console.log("Kết nối thất bại!");
// }

export default sequelize;
// npx sequelize-auto -h localhost -d node38_appfood -u root -x 1234 -p 3307 --dialect mysql -o src/models -l esm 
// dùng để kết nối với localhost 