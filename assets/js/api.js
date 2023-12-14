function getViands() {
    return $.ajax({
        url: 'http://127.0.0.1:3000/api/v1/viands',
        dataType: 'JSON',
        method: 'GET',
    });
}

$(async function () {
    try {
        const data = await getViands();
    } catch (error) {
        console.log(error);
    }
});
