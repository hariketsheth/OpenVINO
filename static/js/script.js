const answers = [
	"You can click on the button on the main page, after which you will be redirected to a Google Form. ",
	"You have to sell your house, property and land 😁😛. IT'S FREEEEEE !!",
	"If you can attend this event - we would be really pleased, but if you can't , we will surely help you out with resources and the Recording😉. Huff... I am Tired !! ",
	"Anyone who wants to frankly...	doesn't matter what you know or don't. It's going to be a beginner-friendly event and you're going to learn a lot...",
	"You should not see the time when learning something useful 🧐🤭. But it would be 1 Hour",
	"You will get to learn about What is OpenVINO, and how to use OpenVINO Toolkit. This would be an informative event 😍",
	"All attendees have to attempt the quiz (sent at the end of session), those scoring >=7 would be receiving an Intel Certified Certificate!!!	",
	`We would be conducting it on Microsoft Teams. We will circulate the meeting link once registration is done.😎😎 `,
];


const message1 = `<div class="message-container">
            <div class="avatar">
              <img src="assets/media/profile.png" class="avatar-image" />
            </div>
            <div class="message">Hi there! I am Inteloxi. How may I help you?</div>
          </div>`;

const accordian = `<div class="accordion">
            <div class="learntcr"><img src="./assets/media/logo.png" class="tcr-logo"/></div>
            <div data-index='0' onclick="answerQuery(event)">How do I register for this event?</div>
            <div data-index='1' onclick="answerQuery(event)">What is the registration fee?</div>
            <div data-index='2' onclick="answerQuery(event)">What if I am not able to attend, recording?</div>
            <div data-index='3' onclick="answerQuery(event)">Who all can attend this event ?</div>
            <div data-index='4' onclick="answerQuery(event)">What would be the duration of the event?</div>
            <div data-index='5' onclick="answerQuery(event)">Why should I Register, What can I expect?</div>
            <div data-index='6' onclick="answerQuery(event)">Are there any prizes/perks for this event?</div>
            <div data-index='7' onclick="answerQuery(event)">Which platform would be used for the event?</div>
          </div>`;
const message2 = `<div class="message-container">
            <div class="avatar">
              <img src="assets/media/profile.png" class="avatar-image" />
            </div>
            <div class="message">How can I help you further?</div>
          </div>`;
const waitMessage = `<div class="message-container">
            <div class="avatar">
              <img src="assets/media/profile.png" class="avatar-image" />
            </div>
            <div class="message"><div id="wave">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div></div>
          </div>`;
const messageTemplate = function (index) {
	return `<div class="message-container">
            <div class="avatar">
              <img src="assets/media/profile.png" class="avatar-image" />
            </div>
            <div class="message">${answers[index]}</div>
          </div>`;
};
document.getElementById('faq-button').addEventListener('click', () => {
	document.querySelector('body').style.height = '100vh';
	document.querySelector('body').style.overflowY = 'hidden';
	document.getElementsByClassName('faq')[0].style.display = 'block';
	document.getElementById('faq-button').style.display = 'none';
	let left = document.getElementsByClassName('faq-left')[0];

	left.insertAdjacentHTML('beforeEnd', waitMessage);
	setTimeout(() => {
		left.removeChild(left.lastChild);
		left.insertAdjacentHTML('beforeEnd', message1);
		left.insertAdjacentHTML('beforeEnd', accordian);
	}, 2500);
});
document.getElementById('close').addEventListener('click', () => {
	document.querySelector('body').style.overflowY = 'unset';
	document.querySelector('body').style.height = 'unset';
	document.getElementsByClassName('faq')[0].style.display = 'none';
	document.getElementById('faq-button').style.display = 'block';
	document.getElementsByClassName('faq-left')[0].innerHTML = '';
});
function answerQuery(e) {
	let index = e.target.getAttribute('data-index');
	let left = document.getElementsByClassName('faq-left')[0];
	let delay = messageTemplate(index).length*35;
	left.insertAdjacentHTML('beforeEnd', waitMessage);
	left.scrollTop = left.scrollHeight;
	setTimeout(() => {
		left.removeChild(left.lastChild);
		left.insertAdjacentHTML('beforeend', messageTemplate(index));
		left.scrollTop = left.scrollHeight;
	}, 2500);

	setTimeout(() => {
		left.insertAdjacentHTML('beforeEnd', waitMessage);
		left.removeChild(left.lastChild);
		left.insertAdjacentHTML('beforeEnd', message2);
		left.insertAdjacentHTML('beforeEnd', accordian);
		left.scrollTop = left.scrollHeight;
	}, delay);
}
