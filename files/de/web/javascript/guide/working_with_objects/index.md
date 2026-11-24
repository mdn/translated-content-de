---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: 52efe757952fde32b197b8ae9395f8f2a3bc7a9f
---

{{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript basiert auf einem objektorientierten Paradigma. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}. Eine Eigenschaft verknüpft einen Namen (oder _Schlüssel_) mit einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein; in diesem Fall wird die Eigenschaft als {{Glossary("Method", "Methode")}} bezeichnet.

Wie in vielen anderen Programmiersprachen lassen sich Objekte in JavaScript mit Gegenständen des Alltags vergleichen. Ein JavaScript-Objekt ist eine eigenständige Einheit mit Eigenschaften und einem Typ. Nehmen Sie beispielsweise eine Tasse: Sie ist ein Gegenstand mit Eigenschaften wie Farbe, Design, Gewicht und Material. Ebenso können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale festlegen.

Neben den im Browser vordefinierten Objekten können Sie eigene Objekte definieren. Dieses Kapitel beschreibt, wie Sie Objekte, Eigenschaften und Methoden verwenden und eigene Objekte erstellen.

## Neue Objekte erstellen

Sie können ein Objekt mit einem [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zunächst eine Konstruktorfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem Operator `new` aufrufen.

### Objektinitialisierer verwenden

Objektinitialisierer werden auch _Objektliterale_ genannt. Der Begriff „Objektinitialisierer“ entspricht der in C++ verwendeten Terminologie.

Die Syntax für ein Objekt mit einem Objektinitialisierer lautet:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor dem Doppelpunkt ist entweder ein Bezeichner, ein Zahlenliteral oder ein Zeichenfolgenliteral. Jedes `valueN` ist ein Ausdruck, dessen Wert der jeweiligen Eigenschaft zugewiesen wird. Der Eigenschaftsname kann ebenfalls ein Ausdruck sein; berechnete Schlüssel müssen in eckigen Klammern stehen. Die Referenz zum [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erläutert die Syntax ausführlicher.

In diesem Beispiel wird das neu erstellte Objekt der Variablen `obj` zugewiesen – das ist optional. Wenn Sie an anderer Stelle nicht auf dieses Objekt verweisen müssen, brauchen Sie es keiner Variablen zuzuweisen. (Beachten Sie, dass Sie das Objektliteral möglicherweise in Klammern setzen müssen, wenn das Objekt an einer Stelle steht, an der eine Anweisung erwartet wird. Andernfalls könnte das Literal mit einer Blockanweisung verwechselt werden.)

Objektinitialisierer sind Ausdrücke. Jedes Mal, wenn die Anweisung ausgeführt wird, in der ein Objektinitialisierer steht, entsteht ein neues Objekt. Identische Objektinitialisierer erzeugen unterschiedliche Objekte, die beim Vergleich nicht als gleich gelten.

Die folgende Anweisung erstellt ein Objekt und weist es der Variablen `x` genau dann zu, wenn der Ausdruck `cond` wahr ist:

```js
let x;
if (cond) {
  x = { greeting: "hi there" };
}
```

Das folgende Beispiel erstellt `myHonda` mit drei Eigenschaften. Beachten Sie, dass die Eigenschaft `engine` ebenfalls ein Objekt mit eigenen Eigenschaften ist.

```js
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
```

Mit Initialisierern erstellte Objekte heißen _einfache Objekte_, da sie Instanzen von {{jsxref("Object")}} sind, aber keine Instanzen eines anderen Objekttyps. Einige Objekttypen haben eine eigene Initialisierungssyntax – beispielsweise [Array-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Array_initializer) und [Literale für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Eine Konstruktorfunktion verwenden

Alternativ können Sie ein Objekt in zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktorfunktion schreiben. Es gibt gute Gründe für die weitverbreitete Konvention, den Namen mit einem Großbuchstaben beginnen zu lassen.
2. Erstellen Sie mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) eine Instanz des Objekts.

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion, die seinen Namen, seine Eigenschaften und seine Methoden festlegt. Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Der Typ soll `Car` heißen und Eigenschaften für Hersteller, Modell und Baujahr haben. Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie, wie mit `this` den Eigenschaften des Objekts Werte zugewiesen werden, die auf den an die Funktion übergebenen Werten beruhen.

Nun können Sie wie folgt ein Objekt namens `myCar` erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist seinen Eigenschaften die angegebenen Werte zu. Danach ist der Wert von `myCar.make` die Zeichenfolge `"Eagle"`, der Wert von `myCar.model` die Zeichenfolge `"Talon TSi"` und der Wert von `myCar.year` die Ganzzahl `1993` usw. Die Reihenfolge der Argumente muss der Reihenfolge der Parameter entsprechen.

Durch Aufrufe von `new` können Sie beliebig viele `Car`-Objekte erstellen. Zum Beispiel:

```js
const randCar = new Car("Nissan", "300ZX", 1992);
const kenCar = new Car("Mazda", "Miata", 1990);
```

Eine Eigenschaft eines Objekts kann selbst ein anderes Objekt sein. Angenommen, Sie definieren ein Objekt namens `Person` wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

Anschließend instanziieren Sie zwei neue `Person`-Objekte:

```js
const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Dann können Sie die Definition von `Car` so ändern, dass sie eine Eigenschaft `owner` enthält, die ein `Person`-Objekt aufnimmt:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Um die neuen Objekte zu instanziieren, verwenden Sie anschließend Folgendes:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Beachten Sie, dass die obigen Anweisungen beim Erstellen der neuen Objekte statt einer literalen Zeichenfolge oder Ganzzahl die Objekte `rand` und `ken` als Argumente für die Eigentümer übergeben. Wenn Sie den Namen des Eigentümers von `car2` ermitteln möchten, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können einem bereits definierten Objekt jederzeit eine Eigenschaft hinzufügen. Beispielsweise fügt die Anweisung

```js
car1.color = "black";
```

dem Objekt `car1` die Eigenschaft `color` hinzu und weist ihr den Wert `"black"` zu. Dies wirkt sich jedoch nicht auf andere Objekte aus. Um die neue Eigenschaft allen Objekten desselben Typs hinzuzufügen, müssen Sie sie der Definition des Objekttyps `Car` hinzufügen.

Sie können eine Konstruktorfunktion auch mit der [`class`](/de/docs/Web/JavaScript/Reference/Classes)-Syntax statt mit der `function`-Syntax definieren. Weitere Informationen finden Sie im [Leitfaden zu Klassen](/de/docs/Web/JavaScript/Guide/Using_classes).

### Die Methode Object.create() verwenden

Objekte können auch mit der Methode {{jsxref("Object.create()")}} erstellt werden. Diese Methode kann sehr nützlich sein, weil Sie damit das [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)-Objekt für das zu erstellende Objekt auswählen können, ohne eine Konstruktorfunktion definieren zu müssen.

```js
// Animal properties and method encapsulation
const animalProto = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display the type of animal
    console.log(this.type);
  },
};

// Create a new animal type called `animal`
const animal = Object.create(animalProto);
animal.displayType(); // Logs: Invertebrates

// Create a new animal type called fish
const fish = Object.create(animalProto);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes
```

## Objekte und Eigenschaften

Mit einem JavaScript-Objekt sind Eigenschaften verknüpft. Objekteigenschaften funktionieren im Wesentlichen wie Variablen, sind aber Objekten und nicht {{Glossary("Scope", "Gültigkeitsbereichen")}} zugeordnet. Die Eigenschaften eines Objekts legen seine Merkmale fest.

Dieses Beispiel erstellt ein Objekt namens `myCar` mit den Eigenschaften `make`, `model` und `year`, denen die Werte `"Ford"`, `"Mustang"` und `1969` zugewiesen werden:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie bei JavaScript-Variablen wird bei Eigenschaftsnamen zwischen Groß- und Kleinschreibung unterschieden. Eigenschaftsnamen können nur Zeichenfolgen oder Symbols sein – alle Schlüssel werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sofern sie keine Symbols sind. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind tatsächlich Eigenschaften, deren Zeichenfolgenschlüssel Ganzzahlen enthalten.

### Auf Eigenschaften zugreifen

Sie können über den Eigenschaftsnamen auf eine Eigenschaft eines Objekts zugreifen. Für [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt es zwei Schreibweisen: die _Punktnotation_ und die _Klammernotation_. Auf die Eigenschaften des Objekts `myCar` können Sie beispielsweise wie folgt zugreifen:

```js
// Dot notation
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// Bracket notation
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

Der Name einer Objekteigenschaft kann eine beliebige JavaScript-Zeichenfolge oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, auch eine leere Zeichenfolge. Mit der Punktnotation können Sie jedoch nicht auf eine Eigenschaft zugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Enthält ein Eigenschaftsname beispielsweise ein Leerzeichen oder einen Bindestrich, beginnt er mit einer Zahl oder ist er in einer Variablen gespeichert, ist der Zugriff nur mit der Klammernotation möglich. Diese Schreibweise ist auch nützlich, wenn Eigenschaftsnamen dynamisch bestimmt werden und somit erst zur Laufzeit feststehen. Beispiele:

```js
const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

// Create additional properties on myObj
myObj.type = "Dot syntax for a key named type";
myObj["date created"] = "This key has a space";
myObj[str] = "This key is in variable str";
myObj[rand] = "A random number is the key here";
myObj[anotherObj] = "This key is object anotherObj";
myObj[""] = "This key is an empty string";

console.log(myObj);
// {
//   type: 'Dot syntax for a key named type',
//   'date created': 'This key has a space',
//   myString: 'This key is in variable str',
//   '0.6398914448618778': 'A random number is the key here',
//   '[object Object]': 'This key is object anotherObj',
//   '': 'This key is an empty string'
// }
console.log(myObj.myString); // 'This key is in variable str'
```

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, also weder eine Zeichenfolge noch ein Symbol. Wenn es `myObj` hinzugefügt wird, ruft JavaScript die Methode {{jsxref("Object/toString", "toString()")}} von `anotherObj` auf und verwendet die resultierende Zeichenfolge als neuen Schlüssel.

Sie können auch über einen in einer Variablen gespeicherten Zeichenfolgenwert auf Eigenschaften zugreifen. Dazu muss die Variable in der Klammernotation verwendet werden. Im obigen Beispiel enthält die Variable `str` den Wert `"myString"`; der Eigenschaftsname lautet also `"myString"`. Daher gibt `myObj.str` den Wert `undefined` zurück.

```js
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'This key is in variable str'
console.log(myObj.myString); // 'This key is in variable str'
```

So können Sie auf jede beliebige Eigenschaft zugreifen, deren Name zur Laufzeit bestimmt wird:

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

Seien Sie jedoch vorsichtig, wenn Sie mit eckigen Klammern auf Eigenschaften zugreifen, deren Namen aus externen Eingaben stammen. Dadurch kann Ihr Code anfällig für [Object-Injection-Angriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) werden.

Nicht vorhandene Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Eigenschaften auflisten

Es gibt drei integrierte Möglichkeiten, Objekteigenschaften aufzulisten oder zu durchlaufen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen. Damit werden alle aufzählbaren Zeichenfolgeneigenschaften eines Objekts sowie die seiner Prototypkette durchlaufen.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array zurück, das nur die Namen („Schlüssel“) der eigenen aufzählbaren Zeichenfolgeneigenschaften des Objekts `myObj` enthält, nicht aber die der Prototypkette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array mit allen Namen eigener Zeichenfolgeneigenschaften des Objekts `myObj` zurück, unabhängig davon, ob sie aufzählbar sind.

Sie können die Klammernotation zusammen mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um alle aufzählbaren Eigenschaften eines Objekts zu durchlaufen. Die folgende Funktion veranschaulicht dies: Sie zeigt die Eigenschaften eines Objekts an, wenn Sie ihr das Objekt und dessen Namen als Argumente übergeben:

```js
function showProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    // Object.hasOwn() is used to exclude properties from the object's
    // prototype chain and only show "own properties"
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
```

Der Begriff „eigene Eigenschaft“ bezeichnet eine Eigenschaft des Objekts, die nicht aus der Prototypkette stammt. Der Funktionsaufruf `showProps(myCar, 'myCar')` würde also Folgendes ausgeben:

```plain
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

Das Obige entspricht:

```js
function showProps(obj, objName) {
  let result = "";
  Object.keys(obj).forEach((i) => {
    result += `${objName}.${i} = ${obj[i]}\n`;
  });
  console.log(result);
}
```

Es gibt keine integrierte Möglichkeit, alle geerbten Eigenschaften einschließlich der nicht aufzählbaren aufzulisten. Mit der folgenden Funktion ist dies jedoch möglich:

```js
function listAllProperties(myObj) {
  let objectToInspect = myObj;
  let result = [];

  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }

  return result;
}
```

Weitere Informationen finden Sie unter [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

### Eigenschaften löschen

Mit dem Operator [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) können Sie eine nicht geerbte Eigenschaft entfernen. Der folgende Code zeigt, wie eine Eigenschaft entfernt wird.

```js
// Creates a new object, myObj, with two properties, a and b.
const myObj = { a: 5, b: 12 };

// Removes the a property, leaving myObj with only the b property.
delete myObj.a;
console.log("a" in myObj); // false
```

## Vererbung

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das Objekt, von dem geerbt wird, heißt Prototyp. Die geerbten Eigenschaften sind im `prototype`-Objekt des Konstruktors zu finden. Weitere Informationen finden Sie unter [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

### Eigenschaften für alle Objekte eines Typs definieren

Über die Eigenschaft [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) können Sie allen Objekten, die mit einem bestimmten [Konstruktor](#eine_konstruktorfunktion_verwenden) erstellt wurden, eine Eigenschaft hinzufügen. Damit definieren Sie eine Eigenschaft, die alle Objekte des angegebenen Typs gemeinsam haben, statt nur eine einzelne Instanz. Der folgende Code fügt allen Objekten des Typs `Car` eine Eigenschaft `color` hinzu und liest anschließend deren Wert aus der Instanz `car1` aus.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Methoden definieren

Eine _Methode_ ist eine Funktion, die einem Objekt zugeordnet ist – anders ausgedrückt: eine Eigenschaft eines Objekts, deren Wert eine Funktion ist. Methoden werden wie gewöhnliche Funktionen definiert, müssen aber einer Objekteigenschaft zugewiesen werden. Weitere Einzelheiten finden Sie unter [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions). Ein Beispiel:

```js
objectName.methodName = functionName;

const myObj = {
  myMethod: function (params) {
    // do something
  },

  // this works too!
  myOtherMethod(params) {
    // do something else
  },
};
```

Dabei ist `objectName` ein vorhandenes Objekt, `methodName` der Name, den Sie der Methode zuweisen, und `functionName` der Name der Funktion.

Anschließend können Sie die Methode im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden üblicherweise auf dem `prototype`-Objekt des Konstruktors definiert, damit alle Objekte desselben Typs dieselbe Methode verwenden. Sie können beispielsweise eine Funktion definieren, die die Eigenschaften der zuvor definierten `Car`-Objekte formatiert und anzeigt.

```js
Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};
```

Beachten Sie, dass `this` auf das Objekt verweist, zu dem die Methode gehört. Anschließend können Sie die Methode `displayCar` für jedes der Objekte wie folgt aufrufen:

```js
car1.displayCar();
car2.displayCar();
```

### this für Objektverweise verwenden

JavaScript verfügt über ein besonderes Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), mit dem Sie innerhalb einer Methode auf das aktuelle Objekt verweisen können. Angenommen, Sie haben zwei Objekte, `manager` und `intern`. Jedes Objekt hat eigene Eigenschaften `name`, `age` und `job`. Beachten Sie in der Funktion `sayHi()`, wie `this.name` verwendet wird. Wenn Sie dieselbe Funktion beiden Objekten hinzufügen, gibt sie jeweils eine Nachricht mit dem Namen des Objekts aus, dem sie zugeordnet ist.

```js
const manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};
const intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

// Add sayHi function to both objects
manager.sayHi = sayHi;
intern.sayHi = sayHi;

manager.sayHi(); // Hello, my name is Karina
intern.sayHi(); // Hello, my name is Tyrone
```

`this` ist ein „versteckter Parameter“ eines Funktionsaufrufs. Sein Wert ergibt sich aus dem Objekt, das vor der aufgerufenen Funktion steht. Bei `manager.sayHi()` ist `this` beispielsweise das Objekt `manager`, weil `manager` vor der Funktion `sayHi()` steht. Wenn Sie über ein anderes Objekt auf dieselbe Funktion zugreifen, ändert sich auch `this`. Wenn Sie die Funktion auf andere Weise aufrufen, etwa mit {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` ausdrücklich als Argument übergeben.

## Getter und Setter definieren

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine einer Eigenschaft zugeordnete Funktion, die den Wert einer bestimmten Eigenschaft abruft. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine einer Eigenschaft zugeordnete Funktion, die den Wert einer bestimmten Eigenschaft setzt. Gemeinsam können sie den Wert einer Eigenschaft indirekt repräsentieren.

Getter und Setter können entweder

- innerhalb von [Objektinitialisierern](#objektinitialisierer_verwenden) definiert oder
- später einem beliebigen vorhandenen Objekt hinzugefügt werden.

Innerhalb von [Objektinitialisierern](#objektinitialisierer_verwenden) werden Getter und Setter wie gewöhnliche [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, jedoch mit den vorangestellten Schlüsselwörtern `get` beziehungsweise `set`. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter erwartet: den neu zu setzenden Wert. Zum Beispiel:

```js
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(myObj.a); // 7
console.log(myObj.b); // 8, returned from the get b() method
myObj.c = 50; // Calls the set c(x) method
console.log(myObj.a); // 25
```

Die Eigenschaften des Objekts `myObj` sind:

- `myObj.a` – eine Zahl
- `myObj.b` – ein Getter, der `myObj.a` plus 1 zurückgibt
- `myObj.c` – ein Setter, der `myObj.a` auf die Hälfte des Werts setzt, der `myObj.c` zugewiesen wird

Getter und Setter können einem Objekt auch jederzeit nach seiner Erstellung mit der Methode {{jsxref("Object.defineProperties()")}} hinzugefügt werden. Der erste Parameter dieser Methode ist das Objekt, auf dem Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Namen der Getter oder Setter sind und dessen Eigenschaftswerte Objekte zur Definition der Getter- oder Setter-Funktionen sind. Das folgende Beispiel definiert denselben Getter und Setter wie im vorherigen Beispiel:

```js
const myObj = { a: 0 };

Object.defineProperties(myObj, {
  b: {
    get() {
      return this.a + 1;
    },
  },
  c: {
    set(x) {
      this.a = x / 2;
    },
  },
});

myObj.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(myObj.b); // Runs the getter, which yields a + 1 or 6
```

Welche der beiden Formen Sie wählen, hängt von Ihrem Programmierstil und der jeweiligen Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie Getter und Setter wahrscheinlich im ursprünglichen Initialisierer definieren. Diese Form ist kompakter und naheliegender. Wenn Sie Getter und Setter jedoch erst später hinzufügen müssen – möglicherweise, weil Sie das betreffende Objekt nicht selbst geschrieben haben –, ist nur die zweite Form möglich. Sie spiegelt die dynamische Natur von JavaScript besser wider, kann aber die Lesbarkeit und Verständlichkeit des Codes beeinträchtigen.

## Objekte vergleichen

In JavaScript sind Objekte Referenztypen. Zwei unterschiedliche Objekte sind niemals gleich, selbst wenn sie dieselben Eigenschaften haben. Nur der Vergleich einer Objektreferenz mit sich selbst ergibt `true`.

```js
// Two variables, two distinct objects with the same properties
const fruit = { name: "apple" };
const anotherFruit = { name: "apple" };

fruit == anotherFruit; // return false
fruit === anotherFruit; // return false
```

```js
// Two variables, a single object
const fruit = { name: "apple" };
const anotherFruit = fruit; // Assign fruit object reference to anotherFruit

// Here fruit and anotherFruit are pointing to same object
fruit == anotherFruit; // return true
fruit === anotherFruit; // return true

fruit.name = "grape";
console.log(anotherFruit); // { name: "grape" }; not { name: "apple" }
```

Weitere Informationen zu Vergleichsoperatoren finden Sie unter [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators).

## Siehe auch

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
