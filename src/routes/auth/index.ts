import { Router } from 'express';
import signupRoute from './signup';
import signinRoute from './signin';
import signoutRoute from './signout';
import refreshTokenRouter from './token';

const router = Router();

router.use('/', signupRoute);
router.use('/', signinRoute);
router.use('/', signoutRoute);
router.use('/token', refreshTokenRouter);

export default router;
