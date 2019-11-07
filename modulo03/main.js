// Exercicio 01
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
    console.log(await delay());
    console.log(await delay());
    console.log(await delay());
}

umPorSegundo();
// Exercicio 02
import axios from 'axios';
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// Exercicio 03
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
        
    }
}
Github.getRepositories('Rocketseat/ambiente-react-native');
Github.getRepositories('Rocketseat/dslkvmskv');

// Exercicio 04 
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');