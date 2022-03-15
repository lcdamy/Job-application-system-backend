export class Helper {
    static customFileName(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        let fileExtension = "";
        if (file.mimetype.indexOf("pdf") > -1) {
            fileExtension = "pdf"
        }
        cb(null, uniqueSuffix + "." + fileExtension);
    }
    static destinationPath(req, file, cb) {
        cb(null, './uploadedFiles/cv')
    }
}