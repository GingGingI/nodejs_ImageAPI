const router = require('express').Router();
const multer = require('multer');

router.post('/:filename', (req, res, next) => {
    upload(req, res)
})

var upload = (req, res) => {
    var imagePath = "/Users/ginggingi/nodejsStudy/nodejs_ImageAPI/router/image/images";
    var storage = multer.diskStorage({
        // 저장할 폴더.
        destination: (req, file, cb) => {
            cb(null, imagePath);
        },
        // 파일 이름.
        filename: (req, file, cb) => {
            file.uploadedFile = {
                name: req.params.filename,
                ext: file.mimetype.split('/')[1],
            };
            cb(null, file.uploadedFile.name + '.' + file.uploadedFile.ext);
        }
    });

    var upload = multer({ storage: storage }).single('file');
    upload(req, res, (err) => {
        if (err) { res.status(500).send(err); console.log('err', err) }
        else { res.status(200).send('file added'); console.log('it', 'works!') }
    })
 }


 module.exports = router