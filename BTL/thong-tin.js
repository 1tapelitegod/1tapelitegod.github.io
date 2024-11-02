document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedbackForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const feedbackInput = document.getElementById('feedback');

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      document.querySelectorAll('.error').forEach(error => error.textContent = '');
      
      let isValid = true;

      if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(nameInput.value)) {
          document.getElementById('nameError').textContent = 'Họ tên chỉ được chứa chữ cái';
          isValid = false;
      }

      if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
          document.getElementById('emailError').textContent = 'Email không hợp lệ';
          isValid = false;
      }

      if (feedbackInput.value.length > 500) {
          document.getElementById('feedbackError').textContent = 'Phản hồi không được quá 500 ký tự';
          isValid = false;
      }

      if (isValid) {
          alert('Đã tiếp nhận ý kiến của bạn!');
          form.reset();
      }
  });
});