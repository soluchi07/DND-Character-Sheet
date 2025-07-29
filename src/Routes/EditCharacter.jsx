import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client';

//TODO Make and format this Edit page
export default function EditCharacter() {
  const { id } = useParams();
  const [new_values, setNewValues] = useState(null);
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
 

  const updateRecord = async (event) => {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
   
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson, "This is the form data");
    let res = {}

    for (const [key, value] of Object.entries(formJson)) {
      if (value !== ''){
        if (key === 'skills' || key === 'equip' || key === 'special'){
          res[key] = value.split(','); 
        } else {
          res[key] = value;
        }
      }
    }

    const newRes = {...new_values, ...res}
    console.log(newRes);

    setNewValues(newRes);

    const { data, error } = await supabase
      .from('Characters') // Replace with your table name
      .update(newRes) // The data you want to update
      .eq('charid', id); // Filter to target the specific record(s)

    if (error) {
      console.error('Error updating record:', error.message);
    } else {
      console.log(new_values);
      console.log('Record updated successfully:', data);
    }

    window.location = "/"
  }


  const deletePost = async (event) => {
    event.preventDefault();
    await supabase
    .from('Characters')
    .delete()
    .eq('charid', id)

    window.location = "/"
  }


  return ( char? 
    <div className="form-container">
      <h2>Edit Character</h2>
        <div className="form-grid">
          <form method="post" onSubmit={updateRecord}>
          <div className="form-section">
            <h3 class="section-title">Basic Information</h3>
              
            <label>
                Name
                <input type="text" name="name" placeholder={char.name} />
            </label>
            
            <label>
                Class
                <select name="class">
                    <option value="">Current Class is {char.class}</option>
                    <option value="Warrior">Warrior</option>
                    <option value="Mage">Mage</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Bard">Bard</option>
                </select>
            </label>
            
            <label>
                Level
                <input type="number" name="level" placeholder={char.level} />
            </label>
            
            <label>
                Race
                <input type="text" name="race" placeholder={char.race} />
            </label>
            
            <label>
                Background
                <input type="text" name="background" placeholder={char.background} />
            </label>
            
            <label>
                Alignment
                <select name="alignment">
                    <option value="">Current Alignment is {char.alignment}</option>
                    <option value="Lawful Good">Lawful Good</option>
                    <option value="Neutral Good">Neutral Good</option>
                    <option value="Chaotic Good">Chaotic Good</option>
                    <option value="Lawful Neutral">Lawful Neutral</option>
                    <option value="True Neutral">True Neutral</option>
                    <option value="Chaotic Neutral">Chaotic Neutral</option>
                    <option value="Lawful Evil">Lawful Evil</option>
                    <option value="Neutral Evil">Neutral Evil</option>
                    <option value="Chaotic Evil">Chaotic Evil</option>
                </select>
            </label>
          </div>
          <div class="form-section">
            <h3 class="section-title">Character Details</h3>
            
            <label>
                Lore
                <textarea name="lore" placeholder={char.lore}></textarea>
            </label>
            
            <label>
                Image Link
                <input type="text" name="img" placeholder={char.img}/>
            </label>
            
            <label>
                Skills
                <textarea name="skills" placeholder={char.skills}></textarea>
            </label>
            
            <label>
                Special Abilities
                <textarea name="special" placeholder={char.special}></textarea>
            </label>
            
            <label>
                Equipment
                <textarea name="equipment" placeholder={char.equipment}></textarea>
            </label>
          </div>
                
          <div class="form-section">
                <h3 class="section-title">⚔️ Ability Scores ⚔️</h3>
                <div class="stats-grid">
                    <label class="stat-input">
                        Strength
                        <input type="number" name="str" placeholder={char.str} min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Dexterity
                        <input type="number" name="dex" placeholder={char.dex} min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Constitution
                        <input type="number" name="con" placeholder={char.con} min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Intelligence
                        <input type="number" name="int" placeholder={char.int} min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Wisdom
                        <input type="number" name="wis" placeholder={char.wis} min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Charisma
                        <input type="number" name="cha" placeholder={char.cha} min="1" max="30" />
                    </label>
                </div>
            </div>
            <div class="form-section">
                <h3 class="section-title">⚡ Combat Statistics ⚡</h3>
                <div class="stats-grid">
                    <label class="stat-input">
                        Hit Points
                        <input type="number" name="hits" placeholder={char.hits} min="1" />
                    </label>
                    <label class="stat-input">
                        Armor Class
                        <input type="number" name="armor" placeholder={char.armor} min="1" />
                    </label>
                    <label class="stat-input">
                        Speed
                        <input type="number" name="speed" placeholder={char.speed} min="0" />
                    </label>
                    <label class="stat-input">
                        Proficiency
                        <input type="number" name="prof" placeholder={char.prof} min="0" />
                    </label>
                </div>
            </div>        
        <button type="submit" className='button'> Submit </button>
        <button className='button' onClick={deletePost}> Delete Character </button>
      </form>
      </div>
  </div> :
  <>
  </>
  )
}