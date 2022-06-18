var express = require('express');
var router = express.Router();
const PostsControllers = require('../controllers/posts');
const { isAuth, generateSendJWT } = require('../service/auth');


router.get('/post', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Posts - 貼文']
     * #swagger.summary = '取得所有貼文'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['取得貼文'] = {
        in: 'body',
        description: '取得所有貼文',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '取得所有貼文成功',
        schema: {
            status: 'success',
            message: '資料讀取成功',
            data: {
                _id: 'string',
                content: 'string',
                image: 'string',
                user: {
                    _id: 'string',
                    name: 'string',
                    photo: 'string',
                },
                likes: 'array',
                createdAt: 'time',
                comments: 'string',
                id: 'string',
            }
        }
    }
    */
    PostsControllers.getPosts(req, res, next)
});
router.post('/create', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Posts - 貼文']
     * #swagger.summary = '發文'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['發文'] = {
        in: 'body',
        description: '發文',
        schema: {
            $user:'6277a6907b79d6126d575d6b',
            $content:'string',
            image: 'string'
        },
    }
    */
    /**
    #swagger.responses[200] = {
        description: '發文成功',
        schema: {
            status: 'success',
            message: '200',
            data: {
                content: 'string',
                image: 'string',
                user: 'string',
                likes: 'array',
                _id: 'string',
                createdAt: 'time',
                id: 'string',
            }
        }
    }
    #swagger.responses[400] = {
        description: '發文失敗',
        schema: {
            message: '內文不能空白'
        }
    }
    */
    PostsControllers.createPost(req, res, next);
});
router.patch('/:id', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Posts - 貼文']
     * #swagger.summary = '編輯貼文'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['編輯貼文'] = {
        in: 'body',
        description: '編輯貼文',
        schema: {
            $content:'string',
        },
    }
    */
    /**
    #swagger.responses[200] = {
        description: '編輯貼文成功',
        schema: {
            status: 'success',
            message: '200',
            data: {
                _id: 'string',
                content: 'string',
                image: 'string',
                user: 'string',
                likes: 'array',
                createdAt: 'time',
                id: 'string',
            }
        }
    }
    #swagger.responses[400] = {
        description: '編輯貼文失敗',
        schema: {
            message: '內文不能空白'
        }
    }
    #swagger.responses[401] = {
        description: '編輯貼文失敗',
        schema: {
            message: '無此貼文ID'
        }
    }
    */
    PostsControllers.editPost(req, res, next);
});
router.post('/:id/comment', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Posts - 貼文']
     * #swagger.summary = '新增留言'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['新增留言'] = {
        in: 'body',
        description: '新增留言',
        schema: {
            $content:'string',
        },
    }
    */
    /**
    #swagger.responses[200] = {
        description: '新增留言成功',
        schema: {
            status: 'success',
            message: '新增留言成功',
            data: {
                comment: 'string',
                user: 'string',
                post: 'string',
                _id: 'string',
                createdAt: 'time',
            }
        }
    }
    #swagger.responses[400] = {
        description: '新增留言失敗',
        schema: {
            message: '內文不能空白'
        }
    }
    */
    PostsControllers.createComment(req, res, next);   
});

router.delete('/', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Posts - 貼文']
     * #swagger.summary = '刪除所有貼文'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['刪除貼文'] = {
        in: 'body',
        description: '刪除所有貼文',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '刪除所有貼文成功',
        schema: {
            status: 'success',
            message: '刪除成功',
            data: {
                acknowledged: 'boolean',
                deletedCount: 'number',
            }
        }
    }
    #swagger.responses[400] = {
        description: '刪除失敗',
        schema: {
            message: '無此路由'
        }
    }
    */
    PostsControllers.deletePosts(req, res, next);
});
router.delete('/deletone/:id', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Posts - 貼文']
     * #swagger.summary = '刪除單筆貼文'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['刪除單筆貼文'] = {
        in: 'body',
        description: '刪除單筆貼文',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '刪除單筆貼文成功',
        schema: {
            status: 'success',
            message: '刪除成功',
            data: {
                _id: 'string',
                content: 'string',
                image: 'string',
                user: 'string',
                likes: 'array',
                createdAt: 'time',
                id: 'string',
            }
        }
    }
    #swagger.responses[400] = {
        description: '刪除失敗',
        schema: {
            message: '無此ID'
        }
    } 
    */
    PostsControllers.deleteOnePost(req, res, next);
});

router.post('/:id/like', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Posts - 貼文']
     * #swagger.summary = '對貼文按讚'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['對貼文按讚'] = {
        in: 'body',
        description: '對貼文按讚',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '對貼文按讚成功',
        schema: {
            status: 'success',
            message: '按讚成功',
            data: {
                _id: 'string',
                content: 'string',
                image: 'string',
                user: 'string',
                likes: 'array',
                createdAt: 'time',
                comments: 'string',
                id: 'string',
            }
        }
    }
    #swagger.responses[400] = {
        description: '按讚失敗',
        schema: {
            message: '無此ID'
        }
    } 
    */
    PostsControllers.addLikes(req, res, next);
});
router.delete('/:id/unlike', isAuth, (req, res, next)=>{
    /**
     * #swagger.tags = ['Posts - 貼文']
     * #swagger.summary = '移除按過的讚'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['移除按過的讚'] = {
        in: 'body',
        description: '移除按過的讚',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '移除按過的讚成功',
        schema: {
            status: 'success',
            message: '移除按讚成功',
            data: {
                _id: 'string',
                content: 'string',
                image: 'string',
                user: 'string',
                likes: 'array',
                createdAt: 'time',
                comments: 'string',
                id: 'string',
            }
        }
    }
    #swagger.responses[400] = {
        description: '按讚失敗',
        schema: {
            message: '無此ID'
        }
    } 
    */
    PostsControllers.deleteLikes(req, res, next);
});

module.exports = router;