import userRoute from './api/user';


export default function controllers(app) {
  app.get('/', (req, res) => res.send('Welcome - XYZ API!'));
  app.use('/api/user', userRoute);
}