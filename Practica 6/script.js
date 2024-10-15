// Clase para representar un nodo en la lista enlazada
class ListNode {
    constructor(character) {
        this.character = character; 
        this.next = null;            
    }
}

// Clase para representar la lista enlazada
class LinkedList {
    constructor() {
        this.head = null; 
    }

    // Método para agregar un carácter al final de la lista
    append(character) {
        const newNode = new ListNode(character);
        if (!this.head) {
            this.head = newNode; 
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; 
            }
            current.next = newNode; 
        }
    }

    // Método para invertir la lista
    reverse() {
        let prev = null;
        let current = this.head;

        while (current) {
            const nextNode = current.next; 
            current.next = prev; 
            prev = current; 
            current = nextNode; 
        }
        this.head = prev; // Actualiza la cabeza de la lista
    }
    // Método para convertir la lista en un string
    toString() {
        let result = '';
        let current = this.head;
        while (current) {
            result += current.character; 
            current = current.next; 
        }
        return result; // Retorna la palabra invertida
    }
}
// Evento para invertir la palabra
document.getElementById('invertWordBtn').addEventListener('click', () => {
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value.trim();
    if (word === '') {
        alert('Por favor, ingresa una palabra.');
        return;
    }
    const linkedList = new LinkedList();
    // Agregar cada carácter de la palabra a la lista enlazada
    for (let char of word) {
        linkedList.append(char);
    }
    // Invertir la lista
    linkedList.reverse();
    // Mostrar la palabra invertida
    document.getElementById('reversedWord').textContent = linkedList.toString();
    // Limpiar el campo de entrada
    wordInput.value = '';
});
