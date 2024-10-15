
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

    // Método para verificar si la lista es un palíndromo
    isPalindrome() {
        let left = this.head;
        let right = this.head;
        let stack = [];

        // Colocar los caracteres en una pila
        while (right) {
            stack.push(right.character); 
            right = right.next; 
        }

        // Comparar con los caracteres en la pila
        while (left) {
            const top = stack.pop();
            if (left.character !== top) {
                return false; 
            }
            left = left.next; 
        }

        return true; // Si todos los caracteres coinciden, es un palíndromo
    }
}

// Evento para verificar si la palabra es un palíndromo
document.getElementById('checkPalindromeBtn').addEventListener('click', () => {
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value.trim().toLowerCase().replace(/[^a-z]/g, ''); 

    if (word === '') {
        alert('Por favor, ingresa una palabra.');
        return;
    }

    const linkedList = new LinkedList();

    // Agregar cada carácter de la palabra a la lista enlazada
    for (let char of word) {
        linkedList.append(char);
    }

    // Verificar si es un palíndromo
    const isPalindrome = linkedList.isPalindrome();

    // Mostrar el resultado
    document.getElementById('result').textContent = isPalindrome ? 
        'La palabra es un palíndromo.' : 
        'La palabra NO es un palíndromo.';

    // Limpiar el campo de entrada
    wordInput.value = '';
});
