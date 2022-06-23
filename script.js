const workObject = [
  {
    title: 'Tonic',
    img: 'img/Snapshoot_Portfolio.png',
    projectDetailFirst: 'CANOPY',
    projectDetailSecond: 'Back End Dev',
    projectDetailThird: '2015',
    info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960.",
  },
  {
    title: 'Multi-Post Stories',
    img: 'img/Snapshoot_Portfolio-1.png',
    projectDetailFirst: 'FACEBOOK',
    projectDetailSecond: 'Full Stack Dev',
    projectDetailThird: '2015',
    info: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960.",
  },
  {
    title: 'Facebook 360',
    img: 'img/Snapshoot_Portfolio-2.png',
    projectDetailFirst: 'FACEBOOK',
    projectDetailSecond: 'Full Stack Dev',
    projectDetailThird: '2015',
    info: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960.",
  },
  {
    title: 'Uber Navigation',
    img: 'img/Snapshoot_Portfolio-3.png',
    projectDetailFirst: 'Uber',
    projectDetailSecond: 'Lead Developer',
    projectDetailThird: '2018',
    info: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960.",
  },
];

const ul = document.createElement('ul');
for (let i = 0; i < workObject.length; i += 1) {
  const li = document.createElement('li');
  li.classList.add('project');
  const section = document.createElement('section');
  section.classList.add('inside_project');

  const image = document.createElement('img');
  image.src = workObject[i].img;
  if (i % 2 === 0) { image.classList.add('left'); } else { image.classList.add('right'); }
  const sectionInside = document.createElement('section');
  if (i % 2 === 0) { sectionInside.classList.add('right', 'text-inside_project'); } else { sectionInside.classList.add('left', 'text-inside_project'); }
  sectionInside.innerHTML = `
      <h3><a href="#">${workObject[i].title}</a></h3>
      <ul class="project-detail">
          <li class="canopy">${workObject[i].projectDetailFirst}</li>
          <li class="project_info">${workObject[i].projectDetailSecond}</li>
          <li class="project_info">${workObject[i].projectDetailThird}</li>
      </ul>
      <p>${workObject[i].info}</p>
      <ul class="project-language">
          <li><a href="#">${workObject[i].languages[0]}</a></li>
          <li><a href="#">${workObject[i].languages[2]}</a></li>
          <li><a href="#">${workObject[i].languages[3]}</a></li>
      </ul>
      <button type="button" class="see">See Project</button>
  `;
  section.appendChild(image);
  section.appendChild(sectionInside);
  li.appendChild(section);
  ul.appendChild(li);
}
document.getElementById('work').appendChild(ul);

const buttonWork = document.querySelectorAll('.work .see');
const popup = document.querySelector('.projectPopup');

for (let i = 0; i < buttonWork.length; i += 1) {
  buttonWork[i].addEventListener('click', () => {
    popup.classList.add('visible');

    const popupTitle = document.querySelector('.popupTitle');
    popupTitle.textContent = workObject[i].title;

    const projectTitle = document.querySelector('.canopy');
    projectTitle.textContent = workObject[i].projectDetailFirst;

    const projectInfo = document.querySelector('.detail');
    projectInfo.textContent = workObject[i].projectDetailSecond;

    const projectYear = document.querySelector('.year');
    projectYear.textContent = workObject[i].projectDetailThird;

    const projectText = document.querySelector('.info');
    projectText.textContent = workObject[i].popupinfo;
  
    const projectLanguage = document.querySelector('.project-language');
    projectLanguage.innerHTML = `
      <li><a href="#">${workObject[i].languages[0]}</a></li>
      <li><a href="#">${workObject[i].languages[2]}</a></li>
      <li><a href="#">${workObject[i].languages[3]}</a></li>
      `
  });
}

const xButton = document.querySelector('.close');

xButton.addEventListener('click', () => {
  popup.classList.remove('visible');
});