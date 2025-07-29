import React from 'react'
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

//TODO Make and format this New Character
export default function NewCharacter() {
  const { id } = useParams();
  // const [new_values, setNewValues] = useState(null);


  const createCharacter = async (event) => {
    event.preventDefault();
      
    const form = event.target;
    const formData = new FormData(form);
    
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson, "This is the form data");
    let res = {}

    for (const [key, value] of Object.entries(formJson)) {
      if (value !== ''){
        if (key === 'skills' || key === 'equipment' || key === 'special'){
          res[key] = value.split(','); 
        } else {
          res[key] = value;
        }
      }
    }

    // const newRes = {...new_values, ...res}
    console.log(res);

    // setNewValues(res);

    const { data, error } = await supabase
      .from('Characters') // Replace with your table name
      .insert(res) // The data you want to update
      .select(); // Filter to target the specific record(s)

    if (error) {
      console.error('Error updating record:', error.message);
    } else {
      // console.log(new_values);
      console.log('Record updated successfully:', data);
    }

    window.location = "/"
  }
  
  return (
    <div className="form-container">
      <h2>Create New Character</h2>
        <div className="form-grid">
          <form method="post" onSubmit={createCharacter}>
          <div className="form-section">
            <h3 class="section-title">Basic Information</h3>
              
            <label>
                Name
                <input type="text" name="name" placeholder="Enter character name" />
            </label>
            
            <label>
                Class
                <select name="class">
                    <option value="">Select Class</option>
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
                <input type="number" name="level" placeholder="1" />
            </label>
            
            <label>
                Race
                <input type="text" name="race" placeholder="Human, Elf, Dwarf, etc." />
            </label>
            
            <label>
                Background
                <input type="text" name="background" placeholder="Noble, Soldier, Scholar, etc." />
            </label>
            
            <label>
                Alignment
                <select name="alignment">
                    <option value="">Select Alignment</option>
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
                <textarea name="lore" placeholder="Character's backstory and history..."></textarea>
            </label>
            
            <label>
                Image Link
                <input type="text" name="img" placeholder="https://example.com/character.jpg" />
            </label>
            
            <label>
                Skills
                <textarea name="skills" placeholder="Swordsmanship, Archery, Stealth..."></textarea>
            </label>
            
            <label>
                Special Abilities
                <textarea name="special" placeholder="Magical abilities, unique talents..."></textarea>
            </label>
            
            <label>
                Equipment
                <textarea name="equipment" placeholder="Weapons, armor, magical items..."></textarea>
            </label>
          </div>
                
          <div class="form-section">
                <h3 class="section-title">⚔️ Ability Scores ⚔️</h3>
                <div class="stats-grid">
                    <label class="stat-input">
                        Strength
                        <input type="number" name="str" placeholder="10" min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Dexterity
                        <input type="number" name="dex" placeholder="10" min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Constitution
                        <input type="number" name="con" placeholder="10" min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Intelligence
                        <input type="number" name="int" placeholder="10" min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Wisdom
                        <input type="number" name="wis" placeholder="10" min="1" max="30" />
                    </label>
                    <label class="stat-input">
                        Charisma
                        <input type="number" name="cha" placeholder="10" min="1" max="30" />
                    </label>
                </div>
            </div>
            <div class="form-section">
                <h3 class="section-title">⚡ Combat Statistics ⚡</h3>
                <div class="stats-grid">
                    <label class="stat-input">
                        Hit Points
                        <input type="number" name="hits" placeholder="20" min="1" />
                    </label>
                    <label class="stat-input">
                        Armor Class
                        <input type="number" name="armor" placeholder="15" min="1" />
                    </label>
                    <label class="stat-input">
                        Speed
                        <input type="number" name="speed" placeholder="30" min="0" />
                    </label>
                    <label class="stat-input">
                        Proficiency
                        <input type="number" name="prof" placeholder="2" min="0" />
                    </label>
                </div>
            </div>        
        <button type="submit" className='button'> Submit </button>
      </form>
      </div>
  </div>
  )
}


