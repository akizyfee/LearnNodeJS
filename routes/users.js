const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/users');
const { isAuth } = require('../service/auth');

router.post('/sign_up', (req, res, next)=>{
    /**
     * #swagger.tags = ['Users - 使用者']
     * #swagger.summary = '註冊一個帳號'
     */
    /**
    #swagger.parameters['註冊'] = {
        in: 'body',
        description: '輸入帳密暱稱註冊一個帳號',
        schema: {
            $name: '暱稱',
            $email: 'test11@gmail.com',
            $password: '1234567ab',
        }
    }
    */
    /**
    #swagger.responses[200] = {
        description: '註冊帳號成功',
        schema: {
            status: 'success',
            user: {
            token: 'string',
            name: 'string',
            }
        }
    }
    #swagger.responses[400] = {
        description: 'email重複',
        schema: {
            message: '帳號已被註冊，請替換新的 Email！'
        }
    }
    #swagger.responses[401] = {
        description: '暱稱至少2個字',
        schema: {
            message: '暱稱至少 2 個字元以上'
        }
    }
    */
    UsersControllers.signUp(req, res, next);
});
router.post('/sign_in', (req, res, next)=>{
    /**
     * #swagger.tags = ['Users - 使用者']
     * #swagger.summary = '登入帳號'
     */
    /**
    #swagger.parameters['登入'] = {
        in: 'body',
        description: '輸入帳密登入你的帳號',
        schema: {
            $email: 'aa55@gmail.com',
            $password: 'aa8888883',
        }
    }
    */
    /**
    #swagger.responses[200] = {
        description: '登入帳號成功',
        schema: {
            status: 'success',
            user: {
            token: 'string',
            name: 'string',
            }
        }
    }
    #swagger.responses[400] = {
        description: '帳號或密碼錯誤',
        schema: {
            message: '帳號或密碼錯誤，請重新輸入！'
        }
    }
    */
    UsersControllers.signIn(req, res, next);
});

router.get('/user',isAuth,  (req, res, next)=>{
    /**
     * #swagger.tags = ['Users - 使用者']
     * #swagger.summary = '取得使用者資料'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['使用者資料'] = {
        in: 'body',
        description: '取得使用者資料',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '取得使用者資料成功',
        schema: {
            status: 'success',
            message: '取得使用者資料',
            user: {
            _id:'string',
            name: 'string',
            photo: '',
            gender: '',
            followers: [],
            following: []
            }
        }
    }
    #swagger.responses[400] = {
        description: '取得失敗',
        schema: {
            message: '尚未登入'
        }
    }
    */
    UsersControllers.getUser(req, res, next);
});
router.patch('/user/:id/edit', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Users - 使用者']
     * #swagger.summary = '修改個人資訊'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['body'] = {
        in: 'body',
        description: '修改個人資料格式',
        schema: {
            $name: 'aassbb',
            photo: '',
            gender: '',
        },
    }
    */
    /**
    #swagger.responses[200] = {
        description: '修改使用者資訊成功',
        schema: {
            status: 'success',
            message: '編輯使用者資料成功',
            data: {
                _id:'string',
                name: 'string',
                photo: '',
                gender: '',
                followers: [],
                following: []
            }
        }
    }
    #swagger.responses[400] = {
        description: '編輯失敗',
        schema: {
            message: '編輯失敗'
        }
    }
    #swagger.responses[401] = {
        description: '編輯失敗',
        schema: {
            message: '欄位資料填寫不全'
        }
    }
    */
    UsersControllers.editUser(req, res, next);
});
router.post('/user/:id/updatePassword', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Users - 使用者']
     * #swagger.summary = '修改密碼'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['body'] = {
        in: 'body',
        description: '修改密碼',
        schema: {
            $password:"aa8888883",
            $confirmPassword:"aa8888883"
        },
    }
    */
    /**
    #swagger.responses[200] = {
        description: '修改密碼成功',
        schema: {
            status: 'success',
            message: '修改密碼成功',
            user: {
            token: 'string',
            name: 'string'
            }
        }
    }
    #swagger.responses[400] = {
        description: '修改失敗',
        schema: {
            message: '密碼不一致！'
        }
    }
    #swagger.responses[401] = {
        description: '修改失敗',
        schema: {
            message: '密碼需至少 8 碼以上'
        }
    }
    */
    UsersControllers.updatePassword(req, res, next);
});

router.post('/user/:id/follow', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Users - 使用者']
     * #swagger.summary = '追蹤'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['body'] = {
        in: 'body',
        description: '追蹤',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '追蹤成功',
        schema: {
            message: '成功追蹤',
            }
        }
    }
    #swagger.responses[400] = {
        description: '追蹤失敗',
        schema: {
            message: '不可以追蹤自己'
        }
    }
    */
    UsersControllers.follow(req, res, next);
});
router.delete('/user/:id/unfollow', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Users - 使用者']
     * #swagger.summary = '取消追蹤'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['body'] = {
        in: 'body',
        description: '取消追蹤',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '取消追蹤成功',
        schema: {
            message: '成功取消追蹤',
            }
        }
    }
    #swagger.responses[400] = {
        description: '取消追蹤失敗',
        schema: {
            message: '沒有這個選項'
        }
    }
    */
    UsersControllers.unfollow(req, res, next);
});
router.get('/user/following', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Users - 使用者']
     * #swagger.summary = '取得追蹤列表'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['body'] = {
        in: 'body',
        description: '取得追蹤列表',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '取得追蹤列表成功',
        schema: {
            name: 'string',
            }
        }
    }
    */
    UsersControllers.getFollowing(req, res, next);
});


module.exports = router;