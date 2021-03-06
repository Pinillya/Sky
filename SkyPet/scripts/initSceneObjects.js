var pets = [];
var objects = [];
var testChar = null;

function initSceneObjects()
{
	//SKyBox
	addSky();
	//Island
	initIsland(-70, 0, -50);
	initIsland(-350, 90, -250, 100);
	initIsland(-100, -80, 250, 80);
	//Pet
	makeAMesh();
	testChar = new tChar();
	//testCube
	// makeCube();
}

function makeAMesh()
{
	//Making pets
	// pets[0] = new Pet("img/Pet/pet.png", 75, 25, 150);
	// pets[1] = new Pet("img/Pet/pet.png", 140, 25, 175);

	//Making food object
	var parametersObject = {
		"position": new THREE.Vector3(100, 25, 100),
		"texture": '../img/Inside/food.png',
		"nameId": 'food01',
		"sizeX": 25,
		"sizeY": 25,
		"smellRad": 20,
		"soundRad": 0,
		"isStatic": true,
		"hasSmell": true,
		"hasSound": false,
		"hasAni": false,
		"initValue": 60
	};
	objects[1] = new Object(parametersObject);
	parametersObject.position = new THREE.Vector3(50, 25, 120);
	objects[2] = new Object(parametersObject);
	parametersObject.position = new THREE.Vector3(140, 25, 150);
	objects[2] = new Object(parametersObject);
}
