import axios from 'axios';

const API_KEY = '33195267-1b3b7003c08e911d98c3746fb';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const PER_PAGE = 12;

export const getImagesWithQuery = async (searchQuery, pageNumber) => {
    const response = await axios.get(`/?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`);

    return response.data.hits;
};