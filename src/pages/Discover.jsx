import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, MusicPlayer, SongCard } from '../components';
import { genres } from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {

    // to set current song
    const dispatch = useDispatch();

    const { activeSong, isPlaying} = useSelector((state) => state.player);
    // we get activeSong & isPlaying from playerSlice.js



    // using useGetTopChartsQuery as a hook
    // we get 3 values in this - the response as data, isFetching & error

    const { data, isFetching, error } = useGetTopChartsQuery();

    const title = "Pop";
    console.log(data)

    if(isFetching) return <Loader title="Loading Songs.."/>;

    if(error) return <Error />;

    return (
        <div className='flex flex-col'    >
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-white text-left'>Discover {title}</h2>
                <select
                    onChange={() => { }}
                    value=""
                    className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
                >
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    
                    <SongCard 
                    key={song.id}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                    i={i}
                    />

            ))}

            </div>

          

        </div>
    )
}

export default Discover;
