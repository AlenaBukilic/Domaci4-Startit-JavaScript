// Zadatak 1.

var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
var trazenaVrednost = 4;
var vrednostZaZamenu = 25;

function zamena(niz, trazenaVrednost, vrednostZaZamenu) {

	var noviNiz = [];

	for ( i = 0; i < niz.length; i++) {
		if (niz[i] == trazenaVrednost) {
			noviNiz.push(vrednostZaZamenu);
		}
		else {
			noviNiz.push(niz[i]);
		}
	}
	return noviNiz;
}

//Zadatak 2.

var niz = [1,5,1,2];
var niz2 = [3,7,8,6];

function provera(niz) {

	for( i = 0; i < niz.length; i++){

		for ( j = i + 1; j < niz.length; j++) {

			if (niz[i] != niz[j]) {	
				continue;
			}
			else {
				return true;
			}
		}
	}
	return false;
}

// Zadatak 3.

function tezina(weight1, weight2, maxWeight) {

	if (weight1 + weight2 <= maxWeight) {
		return "nosimo oba";
	}
	else if (weight1 > maxWeight && weight2 > maxWeight) {
		return "ne mozemo nijedan da ponesemo";
	}
	else if (weight1 <= maxWeight && weight2 <= maxWeight && weight2 + weight1 > maxWeight){
		return "mozemo da biramo koji cemo ali ne mozemo oba";
	}
	else if (weight1 <= maxWeight && weight2 > maxWeight){
		return "mozemo prvi";
	}
	else {
		return "mozemo drugi";
	}
}