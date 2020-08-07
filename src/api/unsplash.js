import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID uj7drLY3TRfwVTl1zfgtmD_i-574Y65vkWKsrPnx1HU'
    }
});
