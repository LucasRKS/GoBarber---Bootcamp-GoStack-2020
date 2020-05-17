import { Router } from 'express';
import multer from 'multer';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import uploadConfig from '../config/upload';

const userRouter = Router();
const upload = multer(uploadConfig);

userRouter.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, password });

        delete user.password;

        return res.json(user);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
});

userRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    async (req, res) => {
        try {
            const updateUserAvatarService = new UpdateUserAvatarService();

            const user = await updateUserAvatarService.execute({
                user_id: req.user.id,
                avatarFilename: req.file.filename,
            });

            return res.json(user);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    },
);

export default userRouter;