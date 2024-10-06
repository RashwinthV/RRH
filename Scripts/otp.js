function genotp(){
  return 6741;
}
function verifyOTP() {
    const inputCode = [
        document.getElementById('cod1').value,
        document.getElementById('cod2').value,
        document.getElementById('cod3').value,
        document.getElementById('cod4').value
    ].join('');
let generatedOtp=genotp();
    if (inputCode == generatedOtp) {
        alert("OTP Verified Successfully!");
        window.location.href = "success.html";  // Redirect to success page
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
