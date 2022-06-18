const express = require('express');
const router = express.Router();
const { isAuth, generateSendJWT } = require('../service/auth');
const upload = require('../service/image')

const uploads = require('../controllers/upload')

router.post('/', isAuth, upload, (req, res, next)=>{
    /**
     * #swagger.tags = ['Upload - 上傳圖片']
     * #swagger.summary = '上傳貼文圖片OR使用者頭像'
     * #swagger.security = [{
        "apiKeyAuth": []
        }]
     */
    /**
    #swagger.parameters['上傳圖片'] = {
        type: 'file',
        in: 'formData',
        description: '上傳貼文圖片OR使用者頭像',
        schema: '',
    }
    */
    /**
    #swagger.responses[200] = {
        description: '資料讀取成功',
        schema: {
            data: {
                url: 'string',
            }
        }
    }
    #swagger.responses[400] = {
        description: '上傳失敗',
        schema: {
            message: '尚未上傳檔案'
        }
    }
    */
    uploads.uploadFile(req, res, next);
});

module.exports = router;