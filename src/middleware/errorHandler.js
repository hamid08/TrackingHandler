const errorHandler = (error, req, res, next) => {

    if (error instanceof Error) {
        return res.status(400).json({
            success: false,
            messages: error.message,
            data:null
        });
    }

    return res.status(400).send({
        success: false,
        messages: "عملیات با خطا مواجه شد",
        data:null
    });

};

module.exports = errorHandler;