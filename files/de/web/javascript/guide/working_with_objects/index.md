---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript ist auf einem objektorientierten Paradigma aufgebaut. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}, und eine Eigenschaft ist eine Assoziation zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in welchem Fall die Eigenschaft als {{Glossary("Method", "Methode")}} bekannt ist.

Objekte in JavaScript können, wie in vielen anderen Programmiersprachen, mit Objekten im realen Leben verglichen werden. In JavaScript ist ein Objekt eine eigenständige Entität mit Eigenschaften und Typen. Vergleichen Sie es beispielsweise mit einer Tasse. Eine Tasse ist ein Objekt mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, ein Gewicht, ein Material, aus dem sie besteht, usw. Auf die gleiche Weise können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Zusätzlich zu Objekten, die im Browser vordefiniert sind, können Sie Ihre eigenen Objekte definieren. Dieses Kapitel beschreibt, wie Sie Objekte, Eigenschaften und Methoden verwenden und wie Sie Ihre eigenen Objekte erstellen können.

## Neue Objekte erstellen

Sie können ein Objekt mit einem [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktionsfunktion erstellen und dann ein Objekt durch Aufruf dieser Funktion mit dem `new` Operator instanziieren.

### Verwenden von Objekt-Initialisierern

Objekt-Initialisierer werden auch _Objekt-Literale_ genannt. "Objekt-Initializer" entspricht der in C++ verwendeten Terminologie.

Die Syntax für ein Objekt unter Verwendung eines Objekt-Initialisierers ist:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor den Doppelpunkten ist ein Bezeichner (entweder ein Name, eine Zahl oder ein String-Literal), und jedes `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenschaftsname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern gesetzt werden. Die Referenz zum [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variablen `obj` zugewiesen — dies ist optional. Wenn Sie dieses Objekt anderweitig nicht referenzieren müssen, müssen Sie es nicht einer Variablen zuweisen. (Beachten Sie, dass Sie das Objektliteral in Klammern setzen müssen, wenn das Objekt an einer Stelle erscheint, an der ein Ausdruck erwartet wird, um nicht mit einer Blockanweisung verwechselt zu werden.)

Objekt-Initialisierer sind Ausdrücke, und jeder Objekt-Initializer erzeugt ein neues Objekt, wann immer die Anweisung, in der er erscheint, ausgeführt wird. Identische Objekt-Initialisierer erstellen unterschiedliche Objekte, die nicht als gleich angesehen werden.

Die folgende Anweisung erstellt ein Objekt und weist es der Variablen `x` zu, wenn und nur wenn der Ausdruck `cond` wahr ist:

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

Mit Initialisierern erstellte Objekte werden als _einfache Objekte_ bezeichnet, da sie Instanzen von {{jsxref("Object")}} sind, aber keinem anderen Objekttyp angehören. Einige Objekttypen haben spezielle Initialisierungssyntaxen — zum Beispiel [Array-Initialisierer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [Regex-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwendung einer Konstruktionsfunktion

Alternativ können Sie ein Objekt mit diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktionsfunktion schreiben. Es gibt eine starke Konvention, die mit guten Gründen befolgt wird, einen Großbuchstaben am Anfang zu verwenden.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, der dessen Namen, Eigenschaften und Methoden spezifiziert. Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und Sie möchten, dass er Eigenschaften für Marke, Modell und Jahr hat. Dazu schreiben Sie die folgende Funktion:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie den Gebrauch von `this`, um den Eigenschaften des Objekts Werte basierend auf den an die Funktion übergebenen Werten zuzuweisen.

Nun können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Der Wert von `myCar.make` ist somit der String `"Eagle"`, `myCar.model` ist der String `"Talon TSi"`, `myCar.year` ist der Integer `1993`, und so weiter. Die Reihenfolge der Argumente und Parameter sollte gleich sein.

Sie können eine beliebige Anzahl von `Car`-Objekten durch Aufrufe von `new` erstellen. Zum Beispiel:

```js
const randCar = new Car("Nissan", "300ZX", 1992);
const kenCar = new Car("Mazda", "Miata", 1990);
```

Ein Objekt kann eine Eigenschaft haben, die selbst ein weiteres Objekt ist. Angenommen, Sie definieren ein Objekt namens `Person` wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

und instanziieren dann zwei neue `Person`-Objekte wie folgt:

```js
const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Dann können Sie die Definition von `Car` um eine `owner`-Eigenschaft erweitern, die ein `Person`-Objekt annimmt, wie folgt:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Um die neuen Objekte zu instanziieren, verwenden Sie dann Folgendes:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Beachten Sie, dass statt eines literalischen Strings oder eines Integerwertes, bei der Erstellung der neuen Objekte die Objekte `rand` und `ken` als Argumente für die Eigentümer übergeben werden. Wenn Sie dann den Namen des Eigentümers von `car2` herausfinden wollen, können Sie auf folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können einem zuvor definierten Objekt jederzeit eine Eigenschaft hinzufügen. Zum Beispiel fügt die Anweisung

```js
car1.color = "black";
```

der `car1`-Instanz eine Eigenschaft `color` hinzu und weist ihr den Wert `"black"` zu. Dies wirkt sich jedoch nicht auf andere Objekte aus. Um die neue Eigenschaft zu allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des `Car`-Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes)-Syntax anstelle der `function`-Syntax verwenden, um eine Konstruktionsfunktion zu definieren. Weitere Informationen finden Sie im [Klassenguide](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwenden der Object.create()-Methode

Objekte können auch mit der {{jsxref("Object.create()")}}-Methode erstellt werden. Diese Methode kann sehr nützlich sein, da sie es erlaubt, das [Prototype-Objekt](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) für das gewünschte Objekt auszuwählen, ohne eine Konstruktionsfunktion zu definieren.

```js
// Animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes
```

## Objekte und Eigenschaften

Ein JavaScript-Objekt hat Eigenschaften, die damit assoziiert sind. Objekteigenschaften sind im Wesentlichen dasselbe wie Variablen, außer dass sie mit Objekten und nicht mit {{Glossary("Scope", "Scopes")}} assoziiert sind. Die Eigenschaften eines Objekts definieren seine Merkmale.

Zum Beispiel erzeugt dieses Beispiel ein Objekt namens `myCar` mit den Eigenschaften `make`, `model` und `year`, deren Werte auf `"Ford"`, `"Mustang"` und `1969` gesetzt sind:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind Eigenschaftsnamen case-sensitiv. Eigenschaftsnamen können nur Strings oder Symbole sein — alle Schlüssel werden in [Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, sie sind Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind tatsächlich Eigenschaften mit String-Schlüsseln, die ganze Zahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts durch ihren Eigenschaftsnamen zugreifen. [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt es in zwei Syntaxen: _Dot-Notation_ und _Bracket-Notation_. Zum Beispiel könnten Sie auf die Eigenschaften des `myCar`-Objekts wie folgt zugreifen:

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

Ein Objekt-Eigenschaftsname kann ein beliebiger JavaScript-String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich eines leeren Strings. Sie können jedoch die Punktnotation nicht verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Zum Beispiel kann ein Eigenschaftsname, der ein Leerzeichen oder einen Bindestrich enthält, der mit einer Zahl beginnt oder in einer Variablen gehalten wird, nur mit der Klammer-Notation zugegriffen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch ermittelt werden sollen, d. h. nicht zur Laufzeit bestimmbar sind. Beispiele sind wie folgt:

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

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder ein String noch ein Symbol ist. Wenn es zu `myObj` hinzugefügt wird, ruft JavaScript die {{jsxref("Object/toString", "toString()")}}-Methode von `anotherObj` auf und verwendet den resultierenden String als neuen Schlüssel.

Sie können auch mit einem String-Wert, der in einer Variablen gespeichert ist, auf Eigenschaften zugreifen. Die Variable muss in der Klammernotation übergeben werden. Im obigen Beispiel hielt die Variable `str` `"myString"` und es ist `"myString"`, das der Eigenschaftsname ist. Daher wird `myObj.str` als undefined zurückgegeben.

```js
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'This key is in variable str'
console.log(myObj.myString); // 'This key is in variable str'
```

Dies erlaubt den Zugriff auf jede Eigenschaft, wie zur Laufzeit bestimmt:

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

Seien Sie jedoch vorsichtig beim Verwenden von eckigen Klammern zum Zugriff auf Eigenschaften, deren Namen durch externe Eingaben angegeben werden. Dies kann Ihren Code anfällig für [Objekt-Injektions-Angriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

Nicht vorhandene Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Eigenschaften aufzählen

Es gibt drei native Methoden, um Objekt-Eigenschaften aufzulisten/zu durchlaufen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen. Diese Methode durchläuft alle aufzählbaren String-Eigenschaften eines Objekts sowie dessen Prototyp-Kette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den aufzählbaren eigenen String-Eigenschaftsnamen ("Schlüssel") im Objekt `myObj` zurück, jedoch nicht denen in der Prototyp-Kette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array mit allen eigenen String-Eigenschaftsnamen im Objekt `myObj` zurück, unabhängig davon, ob sie aufzählbar sind oder nicht.

Sie können die Klammernotation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um über alle aufzählbaren Eigenschaften eines Objekts zu iterieren. Um zu veranschaulichen, wie das funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Namen des Objekts als Argumente an die Funktion übergeben:

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

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, schließt jedoch die der Prototyp-Kette aus. So würde der Funktionsaufruf `showProps(myCar, 'myCar')` Folgendes ausgeben:

```plain
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

Das obige ist gleichbedeutend mit:

```js
function showProps(obj, objName) {
  let result = "";
  Object.keys(obj).forEach((i) => {
    result += `${objName}.${i} = ${obj[i]}\n`;
  });
  console.log(result);
}
```

Es gibt keinen nativen Weg, um geerbte nicht aufzählbare Eigenschaften aufzulisten. Dies kann jedoch mit der folgenden Funktion erreicht werden:

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

Weitere Informationen finden Sie unter [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).

### Eigenschaften löschen

Sie können eine nicht vererbte Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator entfernen. Der folgende Code zeigt, wie eine Eigenschaft entfernt wird.

```js
// Creates a new object, myObj, with two properties, a and b.
const myObj = new Object();
myObj.a = 5;
myObj.b = 12;

// Removes the a property, leaving myObj with only the b property.
delete myObj.a;
console.log("a" in myObj); // false
```

## Vererbung

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das Objekt, von dem geerbt wird, wird als Prototyp bezeichnet, und die geerbten Eigenschaften finden sich im `prototype`-Objekt des Konstruktors. Siehe [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) für weitere Informationen.

### Eigenschaften für alle Objekte eines Typs definieren

Sie können einer bestimmten [Konstruktionsfunktion](#verwendung_einer_konstruktionsfunktion) eine Eigenschaft für alle Objekte hinzufügen, indem Sie die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft verwenden. Dies definiert eine Eigenschaft, die von allen Objekten des angegebenen Typs und nicht nur von einer Instanz des Objekts geteilt wird. Der folgende Code fügt allen Objekten des Typs `Car` eine `color`-Eigenschaft hinzu und liest dann den Eigenschaftswert von einer Instanz `car1`.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Methoden definieren

Eine _Methode_ ist eine Funktion, die mit einem Objekt assoziiert ist, oder anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden so definiert, wie normale Funktionen definiert werden, außer dass sie als Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für weitere Details. Ein Beispiel ist:

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

wobei `objectName` ein vorhandenes Objekt, `methodName` der Name, den Sie der Methode zuweisen, und `functionName` der Name der Funktion ist.

Sie können dann die Methode im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden typischerweise am `prototype`-Objekt des Konstruktors definiert, sodass alle Objekte desselben Typs die gleiche Methode teilen. Zum Beispiel können Sie eine Funktion definieren, die die Eigenschaften der zuvor definierten `Car`-Objekte formatiert und anzeigt.

```js
Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};
```

Beachten Sie die Verwendung von `this`, um auf das Objekt zu verweisen, dem die Methode gehört. Anschließend können Sie die `displayCar`-Methode für jedes der Objekte wie folgt aufrufen:

```js
car1.displayCar();
car2.displayCar();
```

### Verwenden von this für Objekt-Referenzen

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Angenommen, Sie haben 2 Objekte, `Manager` und `Intern`. Jedes Objekt hat seinen eigenen `name`, `age` und `job`. In der Funktion `sayHi()`, beachten Sie die Verwendung von `this.name`. Wenn die Funktion zu den 2 Objekten hinzugefügt wird, druckt sie die Nachricht mit dem Namen des jeweiligen Objekts, mit dem sie verknüpft ist.

```js
const Manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};
const Intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is Karina
Intern.sayHi(); // Hello, my name is Tyrone
```

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der durch die Angabe des Objekts vor der aufgerufenen Funktion übergeben wird. Zum Beispiel ist in `Manager.sayHi()` `this` das `Manager`-Objekt, da `Manager` vor der Funktion `sayHi()` steht. Wenn Sie auf dieselbe Funktion von einem anderen Objekt zugreifen, ändert sich auch `this`. Wenn Sie andere Methoden verwenden, um die Funktion aufzurufen, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Getter und Setter definieren

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine Funktion, die mit einer Eigenschaft assoziiert ist, die den Wert einer bestimmten Eigenschaft abruft. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine Funktion, die mit einer Eigenschaft assoziiert ist, die den Wert einer bestimmten Eigenschaft setzt. Zusammen können sie indirekt den Wert einer Eigenschaft darstellen.

Getter und Setter können entweder

- innerhalb von [Objekt-Initialisierern](#verwenden_von_objekt-initialisierern) definiert oder
- später jedem vorhandenen Objekt hinzugefügt werden.

Innerhalb von [Objekt-Initialisierern](#verwenden_von_objekt-initialisierern) werden Getter und Setter wie normale [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, jedoch mit den Schlüsselwörtern `get` oder `set` vorangestellt. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter erwartet (den neuen Wert, der gesetzt werden soll). Zum Beispiel:

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

Die Eigenschaften des `myObj`-Objekts sind:

- `myObj.a` — eine Zahl
- `myObj.b` — ein Getter, der `myObj.a` plus 1 zurückgibt
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Wertes setzt, auf den `myObj.c` gesetzt wird

Getter und Setter können auch jederzeit nach der Erstellung zu einem Objekt hinzugefügt werden, indem die {{jsxref("Object.defineProperties()")}}-Methode verwendet wird. Der erste Parameter dieser Methode ist das Objekt, an dem Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Getter- oder Setternamen sind, und dessen Eigenschaftswerte Objekte zur Definition der Getter- oder Setterfunktionen sind. Hier ist ein Beispiel, das denselben Getter und Setter wie im vorherigen Beispiel definiert:

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

Welche der beiden Formen Sie wählen, hängt von Ihrem Programmierstil und der anstehenden Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter über den ursprünglichen Initializer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch später Getter und Setter hinzufügen müssen — vielleicht, weil Sie das betreffende Objekt nicht geschrieben haben —, ist die zweite Form die einzige mögliche. Die zweite Form repräsentiert besser die dynamische Natur von JavaScript, kann jedoch den Code schwer lesbar und verständlich machen.

## Objekte vergleichen

In JavaScript sind Objekte ein Referenztyp. Zwei verschiedene Objekte sind niemals gleich, selbst wenn sie dieselben Eigenschaften haben. Nur das Vergleichen derselben Objektreferenz mit sich selbst ergibt true.

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

- [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
