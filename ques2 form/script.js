document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const course = document.getElementById('course').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!name || !email || !mobile || !course || !gender) {
        alert('Please fill out all required fields.');
        event.preventDefault();
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    const mobilePattern = /^\+91-\d{5}-\d{5}$/;
    if (!mobilePattern.test(mobile)) {
        alert('Please enter a valid mobile number in +91-XXXXX-XXXXX format.');
        event.preventDefault();
        return;
    }
});