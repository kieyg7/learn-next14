import {Suspense} from "react";

import MovieInfo, {getMovie} from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: {id: string};
}

export async function generateMetadata({params: {id}}: IParams) {
  // next js는 fetch시 캐싱하기 때문에 아래와 같이 중복 호출되는 경우 2번 호출되는 나쁜 패턴이 되지 않는다.
  const movie = await getMovie(id)
  return {
    title: movie.title
  };
}

export default async function MovieDetail({params: {id}}: IParams) {
  return (<div>
    <Suspense fallback={<h5>Loading... movie info</h5>}>
      <MovieInfo id={id} />
    </Suspense>
    <Suspense fallback={<h5>Loading... movie videos</h5>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>)
}
