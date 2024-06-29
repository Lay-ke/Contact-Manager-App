const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 400:
            res.json({title: 'VALIDATION FAILED',message: err.message, stackTrace: err.stack});
            break;
        case 404:
            res.json({title: 'NOT FOUND',message: err.message, stackTrace: err.stack});
        default:
            console.log('No errors. All good!')
            break;
    }
    
    

};

module.exports = errorHandler