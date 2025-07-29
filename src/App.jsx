import { useState, useRef, useEffect } from 'react'
import CharacterSummary from './Components/CharacterSummary'
import { supabase } from './client';
import { Link } from 'react-router-dom';
import './App.css'
import create from './assets/create.png'

function App() {
  const sourceElementRef = useRef(null);
  const [targetHeight, setTargetHeight] = useState(0);
  const [numPosts, setNumPosts] = useState(0)
  const [posts, setPosts] = useState([])


  useEffect(() => {
    if (sourceElementRef.current) {
      setTargetHeight(sourceElementRef.current.offsetHeight); // Or getBoundingClientRect().height
    }
  }, [posts]); // Empty dependency array to run once after initial render

  
  useEffect(() => {
    const fetchPost = async () => {
        const {data} = await supabase
        .from('Characters')
        .select()
        .order('time_created', { ascending: false })

        // set state of posts
        setPosts(data)
        // console.log(data)
    }

     fetchPost();
  }, [])

  return (
    <>
      <div id="main-placeholder" style={{ height: `${targetHeight}px` }}></div>
      <div className='main-content' ref={sourceElementRef}>
        <div id='banner-container'>
          <svg>
            <path
              id="wavyPath"
              d="M10 80 Q 200 30, 490 80"
              fill="none"
              stroke="none"
            />
            <text>
              <textPath href="#wavyPath">
                Create Characters For Your DND Campaign⚔️
              </textPath>
            </text>
          </svg>
          <img id='banner' src="src/assets/banner.png" alt="banner" />
        </div>
        <div id="character-container">
          {
            posts && posts.length > 0 ?
            <>
              {
                [...posts]
                .sort((a, b) => a.id - b.id)
                .map((post, index) => (
                  <CharacterSummary 
                    key={post.charid + index}
                    post={post}
                  />
                ))
              }
              <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Link to='/create'>
                  <img id='add' src={create} alt="add-button" /> 
                </Link>
                <div style={{margin: '40px', fontSize: '20px'}}>Create New Character Here!</div>
              </div>
            </>
             :
            <div>
              <div id='no-characters'>{'Add some characters Here!'}</div>
              <div style={{position: 'relative', top: '250px', left: '140px', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Link to='/create'>
                  <img id='add' src={create} alt="add-button" /> 
                </Link>
                <div style={{margin: '40px', fontSize: '20px', opacity: '0.6'}}>Create New Character Here!</div>
              </div>        
            </div>
          }
        </div>
      
      </div>
    </>
    
  )
}

export default App
