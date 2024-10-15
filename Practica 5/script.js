// Clase para representar un nodo en la lista enlazada
class ListNode {
    constructor(letter) {
        this.letter = letter; 
        this.words = [];      
        this.next = null;     
    }
}

// Clase para representar la lista enlazada
class LinkedList {
    constructor() {
        this.head = null; // Cabeza de la lista
    }

    // Método para agregar una palabra a la lista
    addWord(word) {
        const firstLetter = word.charAt(0).toUpperCase();
        let current = this.head;

        // Verificar si la lista ya tiene un nodo con esa letra
        while (current) {
            if (current.letter === firstLetter) {
                current.words.push(word); 
                return;
            }
            current = current.next;
        }

        // Si no existe, crear un nuevo nodo
        const newNode = new ListNode(firstLetter);
        newNode.words.push(word);

        // Insertar el nuevo nodo al inicio de la lista
        newNode.next = this.head;
        this.head = newNode;
    }

    // Método para mostrar las palabras clasificadas
    display() {
        const wordListsContainer = document.getElementById('wordLists');
        wordListsContainer.innerHTML = ''; 

        let current = this.head;
        while (current) {
            const listContainer = document.createElement('div');
            listContainer.className = 'word-list';
            listContainer.innerHTML = `<strong>Lista ${current.letter}:</strong> ${current.words.join(', ')}`;
            wordListsContainer.appendChild(listContainer);
            current = current.next;
        }
    }
}

// Crear una instancia de la lista enlazada
const wordsList = new LinkedList();

// Evento para agregar palabras
document.getElementById('addWordBtn').addEventListener('click', () => {
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value.trim();

    if (word === '') {
        alert('Por favor, ingresa una palabra.');
        return;
    }

    wordsList.addWord(word); 
    wordsList.display(); 

    // Limpiar el campo de entrada
    wordInput.value = '';
});
