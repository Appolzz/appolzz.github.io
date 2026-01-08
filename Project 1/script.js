
class Pokemon{
    constructor(id, name, type, moves, hp, img){
        this.id = id;
        this.name = name;
        this.type = type;
        this.moves = moves;
        this.hp = hp;
    }

    attack(move, target){
        console.log(`${this.name} has attacked ${target.name}`)
        let dmg = move.dmg
        if(target.weak.includes(move.type)){
            console.log(`Weak to ${move.type}`)
            dmg *= 1.8
        }else if(target.strong.includes(move.type)){
            console.log(`Strong to ${move.type}`)
            dmg *= 0.7
        }
        target.receive_dmg(dmg)
    }
    receive_dmg(dmg){
        if(dmg >= this.hp){
            this.hp = 0
            console.log('Target has fainted')
        }else{
        this.hp -= dmg
        }
    }
    render_pkmn(){
        console.log('rendering pokemon')
        this.element = document.createElement('div')
        this.element.className = 'pk-card'
        this.title = document.createElement('h4')
        this.title.id = 'pk-title'
        this.element.appendChild(this.title)
        this.picture = document.createElement('img')
        document.getElementById('pk-holder').appendChild(this.element)

        this.picture.id = 'pic'
        this.picture.src = this.img

    }
}
for(let i = 0; i < this.moves; i++){
    console.log(this.moves[i])
    x = document.createElemend('div')
    x.id = `move${i}`
    this.move_grid.appendChild(x)
}

class Move{
    constructor(name, dmg, type, pp){
        this.name = name;
        this.name = dmg;
        this.type = type;
        this.pp = pp;
    }

    use(){
        this.pp -= 3;
    }
}
tndr_shck = new Move('Thunder Shock', 30, 'electric', 10)
tack = new Move('Tackle', 10, 'normal', 20)
wtr_gn = new Move('Water Gun', 25, 'water', 15)

pikachu = new Pokemon(1, 'Pikachu', 'electric', [tack, tndr_shck], 23, ["Ground", "Rock"], ["Water", "Fly"], 'https://obamawhitehouse.archives.gov/1600/presidents/barackobama')
squirtle = new Pokemon(2, 'Squirtle', 'water', [tack, wtr_gn], 30, ["Electric", "Grass"], ["Fire", "Rock", "Ground"], 'https://www.ign.com/wikis/pokedex/Squirtle')

console.log(pikachu.hp)

squirtle.attack(squirtle.moves[1], pikachu)
pikachu.attack(pikachu.moves[1], squirtle)

console.log('pikachu\'s hp:')
console.log(pikachu.hp)
console.log('squirtle\'s hp:')
console.log(squirtle.hp)
pikachu.render_pkmn()




