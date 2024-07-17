import {Route, Routes} from 'react-router-dom'
import FileNotFound from './FileNotFound'
import Home from './Home'
import FilmList from './FilmList'
import FilmExpandedPage from './FilmExpandedPage'
import BookList from './BookList'
import BookExpandedPage from './BookExpandedPage'
import PeopleList from './PeopleList'
import PersonExpandedPage from './PersonExpandedPage'
import SpellsList from './SpellsList'
import SpellExpandedPage from './SpellExpandedPage'
import PotionList from './PotionList'
import PotionExpandedPage from './PotionExpandedPage'

export default function Main (props) {
    // console.log(props)
    // const thing = ""
    return (
      
      <div className="main">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/films" element={<FilmList/>}/>
            <Route path="/films/:filmID" element={<FilmExpandedPage/>}/>
            <Route path="/books" element={<BookList/>}/>
            <Route path="/books/:bookID" element={<BookExpandedPage/>}/>
            <Route path="/people" element={<PeopleList/>}/>
            <Route path="/people/:personID" element={<PersonExpandedPage/>}/>            
            <Route path="/spells" element={<SpellsList/>}/>
            <Route path="/spells/:spellID" element={<SpellExpandedPage/>}/>
            <Route path="/potions" element={<PotionList/>}/>
            <Route path="/potions/:potionID" element={<PotionExpandedPage/>}/>
            <Route path="*" element={<FileNotFound />}/>
        </Routes>
      </div>
    )
  }