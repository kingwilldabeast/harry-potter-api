import {Route, Routes} from 'react-router-dom'
import FileNotFound from './FileNotFound'
import Home from './Home'
import FilmList from './FilmList'
import FilmExpandedPage from './FilmExpandedPage'
import PeopleList from './PeopleList'
import PotionList from './PotionList'
import SpellsList from './SpellsList'
import BookList from './BookList'

export default function Main (props) {
    // console.log(props)
    // const thing = ""
    return (
      
      <div className="main">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/films" element={<FilmList/>}/>
            <Route path="/films/:filmID" element={<FilmExpandedPage/>}/>
            <Route path="/people" element={<PeopleList/>}/>
            <Route path="/potions" element={<PotionList/>}/>
            <Route path="/spells" element={<SpellsList/>}/>
            <Route path="/books" element={<BookList/>}/>
            <Route path="*" element={<FileNotFound />}/>
        </Routes>
      </div>
    )
  }