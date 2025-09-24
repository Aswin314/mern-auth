export const errorHandler = (sourcecode, message) => {
    const error = new Error();
    error.message = message || 'Something went wrong';
    error.status = sourcecode || 500
    return error;
};

