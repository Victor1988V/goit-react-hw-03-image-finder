import axios from 'axios';

const KEY = '31827143-3ef7fc1e2c9062a368ffbac70';

const httpLink_base = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export async function getImages(search, pageNum) {
  const { data } = await httpLink_base.get(
    `?q=${search}&page=${pageNum}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    // {
    //   q: 'catch',
    //   page: 1,
    //   key: KEY,
    //   image_type: 'photo',
    //   orientation: 'horizontal',
    //   per_page: 12,
    // }
  );
  return data;
}
