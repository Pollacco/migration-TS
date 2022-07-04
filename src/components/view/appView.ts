import News, { NewsItem } from './news/news';
import Sources, { Data } from './sources/sources';


interface DrawSources {
    id: string,
    sources: Data[]
}

interface DrawNews {
    articles: NewsItem[],
    status: number,
    totalResults: string
}

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DrawNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DrawSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;