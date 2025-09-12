
    document.getElementById('forgot-password-form').addEventListener('submit', function(e){
      e.preventDefault();
      const emailInput = document.getElementById('email');
      const msgDiv = document.getElementById('msg');
      const email = emailInput.value.trim();

      function isEmailValid(email) {
        return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
      }

      if (!email) {
        msgDiv.textContent = 'Por favor, digite seu e-mail.';
        msgDiv.className = 'message error';
        emailInput.focus();
        return;
      }
      if (!isEmailValid(email)) {
        msgDiv.textContent = 'E-mail inválido.';
        msgDiv.className = 'message error';
        emailInput.focus();
        return;
      }

      this.querySelector('.btn').disabled = true;
      this.querySelector('.btn').textContent = 'Enviando...';

      setTimeout(() => {
        msgDiv.textContent = 'Enviamos o link para ' + email + '. Verifique sua caixa de entrada.';
        msgDiv.className = 'message success';
        this.querySelector('.btn').disabled = false;
        this.querySelector('.btn').textContent = 'Enviar link';
      }, 1200);
    });
