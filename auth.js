// Password Protection System
// CHANGE THIS PASSWORD to your desired password
const CORRECT_PASSWORD = "Tech3303";

// Check if user is already authenticated
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    
    if (isAuthenticated === 'true') {
        showContent();
    } else {
        showPasswordModal();
    }
}

// Show password modal
function showPasswordModal() {
    document.getElementById('password-modal').style.display = 'flex';
    document.getElementById('protected-content').style.display = 'none';
    
    // Focus on password input
    setTimeout(() => {
        document.getElementById('password-input').focus();
    }, 100);
    
    // Allow Enter key to submit
    document.getElementById('password-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
}

// Show protected content
function showContent() {
    document.getElementById('password-modal').style.display = 'none';
    document.getElementById('protected-content').style.display = 'flex';
}

// Check password
function checkPassword() {
    const input = document.getElementById('password-input');
    const password = input.value;
    const errorMessage = document.getElementById('error-message');
    
    if (password === CORRECT_PASSWORD) {
        // Store authentication in session
        sessionStorage.setItem('authenticated', 'true');
        
        // Show success message briefly
        errorMessage.style.color = '#10b981';
        errorMessage.textContent = '✓ Access granted!';
        
        // Show content after brief delay
        setTimeout(() => {
            showContent();
        }, 500);
    } else {
        // Show error
        errorMessage.style.color = '#ef4444';
        errorMessage.textContent = '✗ Incorrect password. Please try again.';
        input.value = '';
        input.focus();
        
        // Shake animation
        input.classList.add('shake');
        setTimeout(() => {
            input.classList.remove('shake');
        }, 500);
    }
}

// Run authentication check on page load
document.addEventListener('DOMContentLoaded', checkAuthentication);
