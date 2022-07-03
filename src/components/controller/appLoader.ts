import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9386f4c9c8704c9eb7d464e2681e668a', 
        });
    }
}

export default AppLoader;
