import { templates, select, classNames} from '../settings.js';
class Home {
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initPage();

  }

  render(element) {
    const thisHome = this;
    const generatedHTML = templates.home();
    console.log (generatedHTML);
    thisHome.dom = {};
    thisHome.dom.wrapper= element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  activatePage(pageId){
    const thisHome = this;

    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);

    for(let page of thisHome.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for(let link of thisHome.navLinks){
      link.classList.toggle(classNames.nav.active);
      link.getAttribute('href') == '#' + pageId;
    }
  }

  initPage(){
    const thisHome = this;

    thisHome.links = document.querySelectorAll('.link');

    for( let link of thisHome.links){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');

        thisHome.activatePage(id);
      });
    }
  }
}

export default Home;
