//comparação
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeDeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeDeCarga = capacidadeDeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].nome === carClass.nome) return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(!(carClass instanceof Car)) {
        throw "Você precisa passar um objeto da classe Car";
    }

    if (el.checked) {
        if (carArr.length >= 2) {
            alert("Você só pode comparar dois veículos por vez.");
            el.checked = false;
            return;
        }
        if (GetCarArrPosition(carArr, carClass) === -1) {
            carArr.push(carClass);
        }
    } else {
        const pos = GetCarArrPosition(carArr, carClass);
        if (pos !== -1) {
            carArr.splice(pos, 1);
        }
    }
}

function ShowCompare() {
        const compareElement = document.getElementById("compare");
        
        if (!compareElement) {
            console.error("Elemento #compare não encontrado!");
            return;
        }
        
        if(carArr.length < 2) {
            alert("Precisa marcar 2 carros para apresentar a comparação!");
            return;
        }
    
        UpdateCompareTable();
        compareElement.style.display = "block";
    }
   

function HideCompare() {

    document.getElementById("compare").style.display = "none";
    
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        document.getElementById("compare_image_" + i).innerHTML = `<img src="${carArr[i].image}" width="150"/>`;

        document.getElementById("compare_modelo_" + i).textContent = carArr[i].nome;

        document.getElementById("compare_alturacacamba_" + i).textContent = carArr[i].alturaCacamba + " mm";
        
        document.getElementById("compare_alturaveiculo_" + i).textContent = carArr[i].alturaVeiculo + " mm";
        
        document.getElementById("compare_alturasolo_" + i).textContent = carArr[i].alturaSolo + " mm";
        
        document.getElementById("compare_capacidadecarga_" + i).textContent = carArr[i].capacidadeDeCarga + " Kg";
        
        document.getElementById("compare_motor_" + i).textContent = carArr[i].motor + " L";
       
        document.getElementById("compare_potencia_" + i).textContent = carArr[i].potencia + " cv";
        
        document.getElementById("compare_volumecacamba_" + i).textContent = carArr[i].volumeCacamba + "L";
        
        document.getElementById("compare_roda_" + i).textContent = carArr[i].roda;

        document.getElementById("compare_preco_" + i).textContent = "R$ " + carArr[i].preco.toLocaleString("pt-BR", {minimumFractionDigits: 2}); // ajuste porque na tabela o preço estava parecendo errado
    }
}