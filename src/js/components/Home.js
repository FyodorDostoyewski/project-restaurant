
import { templates} from '../settings.js';
class Home {
  constructor(element, app){
    const thisHome = this;
    thisHome.app = app;

    thisHome.render(element);
  }

  render(element) {
    const thisHome = this;
    const generatedHTML = templates.home();
    console.log (generatedHTML);
    thisHome.dom = {};
    thisHome.dom.wrapper= element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

}

export default Home;
