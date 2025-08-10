let currentSequence = 1;
let cakeCut = false;

function showSequence(sequenceNum) {
    // Hide all sequences
    document.querySelectorAll('.avatar-section, .greeting-card, .dark-room, .lit-room, .cake-section').forEach(el => {
        el.style.display = 'none';
    });

    // Show selected sequence
    let targetSequence;
    if (sequenceNum === 1) {
        targetSequence = document.getElementById('sequence1');
    } else if (sequenceNum === 2) {
        targetSequence = document.getElementById('sequence2');
    } else if (sequenceNum === 3) {
        targetSequence = document.getElementById('sequence3');
    } else if (sequenceNum === 4) {
        targetSequence = document.getElementById('sequence4');
    } else if (sequenceNum === 5) {
        targetSequence = document.getElementById('sequence5');
    }
    
    if (targetSequence) {
        targetSequence.style.display = 'block';
        addSequenceAnimations(targetSequence);
    }
    
    currentSequence = sequenceNum;
}

function lightUpRoom() {
    showSequence(4); // Lit Room is now sequence 4
}

function cutCake() {
    if (!cakeCut) {
        cakeCut = true;
        
        // Create confetti
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
        
        // Create balloons
        createBalloons();
        
        // Show celebration message
        const cakeSection = document.querySelector('.cake-section');
        const celebrationMsg = document.createElement('div');
        celebrationMsg.innerHTML = '<h3>🎉 Yay! Cake is cut! 🎉</h3>';
        celebrationMsg.style.textAlign = 'center';
        celebrationMsg.style.marginTop = '20px';
        celebrationMsg.style.animation = 'celebrationEntrance 1s ease-out';
        cakeSection.appendChild(celebrationMsg);
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][Math.floor(Math.random() * 6)];
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 4000);
}

function createBalloons() {
    const balloonsContainer = document.querySelector('.balloons-container');
    balloonsContainer.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = (i * 15 + 10) + '%';
        balloon.style.animationDelay = (i * 0.2) + 's';
        balloon.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][i];
        balloonsContainer.appendChild(balloon);
    }
}

function showCelebrationPage() {
    window.location.href = 'celebration.html';
}

function goBack() {
    window.location.href = 'index.html';
}

function addSequenceAnimations(sequence) {
    // Re-trigger animations
    sequence.style.animation = 'none';
    sequence.offsetHeight; // Trigger reflow
    sequence.style.animation = null;
}

function createFloatingParticles() {
    const emojis = ['🎈', '🎉', '🎊', '🎁', '🎂', '💝', '💖', '💕'];
    const particle = document.createElement('div');
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.fontSize = '24px';
    particle.style.pointerEvents = 'none';
    particle.style.animation = 'particleFloat 6s linear infinite';
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Create floating particles every 2 seconds
setInterval(createFloatingParticles, 2000);

// Click anywhere to advance (except buttons)
document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('cut-button') &&
        !e.target.classList.contains('light-button') &&
        !e.target.classList.contains('next-page-btn')) {
        // Remove auto-advance on click
    }
});

// Initialize first sequence
showSequence(1);

// Make greeting card clickable
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    if (card) {
        card.addEventListener('click', function() {
            this.classList.add('clicked');
        });
    }
}); 