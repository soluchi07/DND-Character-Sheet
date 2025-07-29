import { Component, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { supabase } from "../client"

function CharacterDetails() {
    const { id } = useParams()
    const [char, setChar] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
            .from('Characters')
            .select()
            .eq('charid', id)
    
            // set state of posts
            setChar(data[0])
            console.log(data[0].equipment)

        }
    
         fetchPost();
    }, [])

    return (
        <div id="details">
            {char ?
            <>
                <h2>{char.name}</h2>
                <div id="img-container">
                    <img src={char.img} alt="" />
                    <div id="img-details">
                        <h3>Class: {char.class}</h3>
                        <p>Level: {char.level}</p>
                        <p>Race: {char.race}</p>
                        <p>Background: {char.background}</p>
                        <p>Alignment: {char.alignment}</p>
                        <Link to={`/edit/${char.charid}`}>
                            <div style={{color: 'white', width: '200px', margin: '10px', position: 'relative', right: '13px', top: '10px'}} className="button"> Edit </div>
                        </Link>
                    </div>
                </div>
                <div id="details-container">
                    <div id="details-left">
                        <h3>Core Attributes</h3>
                        <div className="grid-items">
                                <p>Strength: {char.str}</p>
                                <p>Dexterity: {char.dex} </p>
                                <p>Constitution: {char.con}</p>
                                <p>Intelligence: {char.int}</p>
                                <p>Wisdom: {char.wis}</p>
                                <p>Charisma: {char.cha}</p>    
                        </div>

                        <h3>Combat Stats</h3>
                        <div className="grid-items">
                                <p>Armor Class: {char.armor}</p>
                                <p>Hit Points: {char.hits}/{char.hits}</p>
                            
                                <p>Speed: {char.speed} ft</p>
                                <p>Proficiency: + {char.prof}</p>
                        </div>
                        <h3>Equipment</h3>
                        <div className="grid-items">
                            {char.equipment.map((eq) => {
                                return <p key={`${eq}-${char.charid}`}>{eq}</p>
                            })} 
                        </div>
                                         
                    </div>

                    <div id="details-right">
                        
                        
                        <h3>Skills & Expertise</h3>
                        <div className="grid-items">
                            { char.skills && char.skills.map((skill) => {
                                return <p key={`${skill}-${char.charid}`}>{skill}</p>
                            })}
                        </div>
                        {char.special ?
                        <>
                            <h3>Special Abilities</h3>
                            <div className="grid-items">
                                { char.special.map((ab) => {
                                    return <p key={`${ab}-${char.charid}`}>{ab}</p>
                                })}
                            </div>
                            
                        </> :
                        <>
                        </>}

                        <h3>Character Lore</h3>
                        <p>{char.lore}</p>

                    </div>
                </div>
            </> :
            <>
            </> }
            
        </div>
    )
}

export default CharacterDetails

