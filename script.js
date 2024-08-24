function nextStep(step) {
    if (step === 2) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name) {
            alert('Please enter your name.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    }

    const currentStep = document.querySelector('.step.active');
    currentStep.classList.remove('active');

    const nextStepElement = document.getElementById(`step-${step}`);
    nextStepElement.classList.add('active');

    document.getElementById('step-count-text').textContent = `Step ${step} of 3`;

    updateIndicators(step);

    if (step === 3) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        document.getElementById('summary-name').textContent = name;
        document.getElementById('summary-email').textContent = email;

        const topics = document.querySelectorAll('.topic-button.active');
        const summaryTopics = document.getElementById('summary-topics');
        summaryTopics.innerHTML = '';

        topics.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic.textContent;
            summaryTopics.appendChild(li);
        });
    }
}

function updateIndicators(step) {
    const indicators = document.querySelectorAll('.step-indicator');

    indicators.forEach((indicator, index) => {
        if (index < step - 1) {
            indicator.classList.add('completed');
            indicator.classList.remove('active');
        } else if (index === step - 1) {
            indicator.classList.add('active');
            indicator.classList.remove('completed');
        } else {
            indicator.classList.remove('active');
            indicator.classList.remove('completed');
        }
    });
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function submitForm() {
    alert('Form submitted!');
}

function selectTopic(button) {
    button.classList.toggle('active');
}
