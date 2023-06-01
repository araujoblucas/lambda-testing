export const handler = async(event) => {
    const message = process.env.message;
    return {
        statusCode: 200,
        body: JSON.stringify(message + ' ' + event.name),
    };
};
