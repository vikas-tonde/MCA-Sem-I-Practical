var re = /^\d{10}$/;
function testInfo(phoneInput) {
    var OK = re.exec(phoneInput);
    if (!OK) {
        console.error(phoneInput + ' Phone number should be 10 digits long');
    } else {
        console.log('Thanks, your phone number is ' + OK[0]);
    }
}
testInfo("8308859743");