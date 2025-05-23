---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript ist auf einem objektbasierten Paradigma aufgebaut. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}, und eine Eigenschaft ist eine Zuordnung zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in diesem Fall wird die Eigenschaft als {{Glossary("Method", "Methode")}} bezeichnet.

Objekte in JavaScript, wie auch in vielen anderen Programmiersprachen, können mit Objekten im realen Leben verglichen werden. In JavaScript ist ein Objekt eine eigenständige Entität mit Eigenschaften und Typ. Vergleichen Sie es zum Beispiel mit einer Tasse. Eine Tasse ist ein Objekt mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, ein Gewicht, ein Material, aus dem sie gemacht ist, usw. Genauso können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Zusätzlich zu den vordefinierten Objekten im Browser können Sie auch Ihre eigenen Objekte definieren. Dieses Kapitel beschreibt, wie Sie Objekte, Eigenschaften und Methoden verwenden und wie Sie Ihre eigenen Objekte erstellen.

## Erstellen neuer Objekte

Sie können ein Objekt mit einem [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktorfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new` Operator aufrufen.

### Verwendung von Objekt-Initialisierern

Objekt-Initialisierer werden auch _Objekt-Literale_ genannt. "Objekt-Initializer" ist konsistent mit der Terminologie, die von C++ verwendet wird.

Die Syntax für ein Objekt mit einem Objekt-Initializer ist:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftenname vor den Doppelpunkten ist ein Identifikator (entweder ein Name, eine Zahl oder ein Zeichenfolgenliteral), und jeder `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenschaftenname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern gesetzt werden. Die Referenz zu [Object Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variablen `obj` zugewiesen – dies ist optional. Wenn Sie dieses Objekt andernorts nicht referenzieren müssen, brauchen Sie es keiner Variablen zuzuweisen. (Beachten Sie, dass Sie das Objektliteral möglicherweise in Klammern setzen müssen, wenn das Objekt dort erscheint, wo eine Anweisung erwartet wird, um zu verhindern, dass das Literal mit einer Blockanweisung verwechselt wird.)

Objekt-Initialisierer sind Ausdrücke, und jeder Objekt-Initializer führt zu einem neuen Objekt, das erzeugt wird, wann immer die Anweisung, in der es erscheint, ausgeführt wird. Identische Objekt-Initialisierer erzeugen verschiedene Objekte, die sich nicht als gleich vergleichen lassen.

Die folgende Anweisung erstellt ein Objekt und weist es der Variablen `x` nur dann zu, wenn der Ausdruck `cond` wahr ist:

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

Mit Initialisierern erstellte Objekte werden als _einfache Objekte_ bezeichnet, da sie Instanzen von {{jsxref("Object")}} sind, jedoch keinen anderen Objektyp darstellen. Einige Objekttypen haben spezielle Initialisierungssyntaxen — zum Beispiel [Array-Initialisierer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [RegEx-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwendung einer Konstruktorfunktion

Alternativ können Sie ein Objekt mit diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktorfunktion schreiben. Es gibt eine starke Konvention, aus gutem Grund, einen Großbuchstaben für den Anfangsbuchstaben zu verwenden.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, die dessen Name, Eigenschaften und Methoden festlegt. Beispielsweise, wenn Sie einen Objekttyp für Autos erstellen möchten. Sie möchten, dass dieser Objekttyp `Car` genannt wird und Eigenschaften für Marke, Modell und Baujahr haben soll. Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie die Verwendung von `this`, um Werte den Eigenschaften des Objekts basierend auf den an die Funktion übergebenen Werten zuzuweisen.

Nun können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Dann ist der Wert von `myCar.make` die Zeichenkette `"Eagle"`, `myCar.model` ist die Zeichenkette `"Talon TSi"`, `myCar.year` ist der ganze Zahlwert `1993`, und so weiter. Die Reihenfolge von Argumenten und Parametern sollte gleich sein.

Sie können eine beliebige Anzahl von `Car`-Objekten durch Aufrufe von `new` erstellen. Zum Beispiel,

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

Dann können Sie die Definition von `Car` um eine `owner`-Eigenschaft erweitern, die ein `Person`-Objekt aufnimmt, wie folgt:

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

Beachten Sie, dass anstatt einen literalen Zeichenfolgen- oder Ganzzahlenwert zu übergeben, wenn die neuen Objekte erstellt werden, die obigen Anweisungen die Objekte `rand` und `ken` als Argumente für die Eigentümer übergeben. Wenn Sie dann herausfinden möchten, wie der Name des Eigentümers von `car2` lautet, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können einer zuvor definierten Objekt immer eine Eigenschaft hinzufügen. Zum Beispiel fügt die Anweisung

```js
car1.color = "black";
```

eine Eigenschaft `color` zu `car1` hinzu und weist ihr den Wert `"black"` zu. Dies wirkt sich jedoch nicht auf andere Objekte aus. Um die neue Eigenschaft allen Objekten des gleichen Typs hinzuzufügen, müssen Sie die Eigenschaft der Definition des `Car`-Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes)-Syntax anstelle der `function`-Syntax verwenden, um eine Konstruktorfunktion zu definieren. Für weitere Informationen siehe den [Klassenguide](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwendung der Methode Object.create()

Objekte können auch mit der {{jsxref("Object.create()")}}-Methode erstellt werden. Diese Methode kann sehr nützlich sein, da Sie es Ihnen erlaubt, das [Prototype](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)-Objekt für das zu erstellende Objekt auszuwählen, ohne eine Konstruktorfunktion definieren zu müssen.

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

Ein JavaScript-Objekt hat Eigenschaften, die mit ihm assoziiert sind. Objekteigenschaften sind im Wesentlichen dasselbe wie Variablen, außer dass sie mit Objekten und nicht mit {{Glossary("Scope", "Scopes")}} assoziiert sind. Die Eigenschaften eines Objekts definieren die Merkmale des Objekts.

Zum Beispiel erstellt dieses Beispiel ein Objekt mit dem Namen `myCar`, mit Eigenschaften namens `make`, `model` und `year`, deren Werte auf `"Ford"`, `"Mustang"` und `1969` gesetzt sind:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind auch Eigenschaftsnamen case-sensitiv. Eigenschaftsnamen können nur Zeichenfolgen oder Symbole sein – alle Schlüssel werden [in Zeichenfolgen konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, es handelt sich um Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind in Wirklichkeit Eigenschaften mit Zeichenfolgen-Schlüsseln, die Ganzzahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts durch ihren Eigenschaftsnamen zugreifen. [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt es in zwei Notationen: _Punkt-Notation_ und _Klammer-Notation_. Zum Beispiel könnten Sie auf die Eigenschaften des `myCar`-Objekts wie folgt zugreifen:

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

Der Name einer Objekteigenschaft kann jeder beliebige JavaScript-Zeichenfolgen oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich einer leeren Zeichenfolge. Sie können jedoch nicht die Punktnotation verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Identifikator ist. Zum Beispiel kann auf eine Eigenschaft, die ein Leerzeichen oder einen Bindestrich enthält, die mit einer Zahl beginnt oder die sich in einer Variablen befindet, nur mit der Klammer-Notation zugegriffen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch bestimmt werden sollen, also nicht bis zur Laufzeit bestimmbar sind. Beispiele sind wie folgt:

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

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder eine Zeichenfolge noch ein Symbol ist. Wenn es zu `myObj` hinzugefügt wird, ruft JavaScript die {{jsxref("Object/toString", "toString()")}}-Methode von `anotherObj` auf und verwendet die resultierende Zeichenfolge als neuen Schlüssel.

Sie können auch auf Eigenschaften mit einem Zeichenfolgenwert zugreifen, der in einer Variablen gespeichert ist. Die Variable muss in der Klammern-Notation übergeben werden. Im obigen Beispiel hielt die Variable `str` den Wert `"myString"` und es ist `"myString"`, der der Eigenname ist. Daher gibt `myObj.str` undefined zurück.

```js
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'This key is in variable str'
console.log(myObj.myString); // 'This key is in variable str'
```

Dies ermöglicht den Zugriff auf jede beliebige Eigenschaft, wie zur Laufzeit bestimmt:

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

Seien Sie jedoch vorsichtig beim Verwenden von eckigen Klammern, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingabe gegeben sind. Dies kann Ihren Code anfällig für [Objekt-Injektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

Nicht existierende Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Aufzählen von Eigenschaften

Es gibt drei native Methoden, um Objekteigenschaften aufzulisten/durchzugehen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen. Diese Methode durchläuft alle aufzählbaren Zeichenfolgen-Eigenschaften eines Objekts sowie seine Prototypen-Kette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den aufzählbaren eigenen Zeichenfolgen-Eigenschaftsnamen ("keys") im Objekt `myObj`, jedoch nicht diejenigen in der Prototypen-Kette, zurück.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array zurück, das alle eigenen Zeichenfolgen-Eigenschaftsnamen im Objekt `myObj` enthält, unabhängig davon, ob sie aufzählbar sind oder nicht.

Sie können die Klammern-Notation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um über alle aufzählbaren Eigenschaften eines Objekts zu iterieren. Um zu veranschaulichen, wie dies funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Namen des Objekts als Argumente an die Funktion übergeben:

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

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, jedoch ohne die der Prototypen-Kette. Der Funktionsaufruf `showProps(myCar, 'myCar')` würde Folgendes ausgeben:

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

Es gibt keine native Methode, um geerbte nicht-auzählbare Eigenschaften aufzulisten. Dies kann jedoch mit der folgenden Funktion erreicht werden:

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

Für weitere Informationen siehe [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

### Löschen von Eigenschaften

Sie können eine nicht geerbte Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator entfernen. Der folgende Code zeigt, wie man eine Eigenschaft entfernt.

```js
// Creates a new object, myObj, with two properties, a and b.
const myObj = { a: 5, b: 12 };

// Removes the a property, leaving myObj with only the b property.
delete myObj.a;
console.log("a" in myObj); // false
```

## Vererbung

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das Objekt, von dem geerbt wird, wird als Prototyp bezeichnet, und die geerbten Eigenschaften können im `prototype`-Objekt des Konstruktors gefunden werden. Siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für weitere Informationen.

### Eigenschaften für alle Objekte eines Typs definieren

Sie können einer Eigenschaft zu allen Objekten, die durch einen bestimmten [Konstruktor](#verwendung_einer_konstruktorfunktion) erstellt wurden, mit der [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft hinzufügen. Dies definiert eine Eigenschaft, die von allen Objekten des angegebenen Typs geteilt wird, statt nur von einer Instanz des Objekts. Der folgende Code fügt allen Objekten des Typs `Car` die Eigenschaft `color` hinzu und liest dann den Eigenschaftswert aus einer Instanz `car1`.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Methoden definieren

Eine _Methode_ ist eine mit einem Objekt assoziierte Funktion, oder, anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden so definiert, wie normale Funktionen definiert werden, müssen jedoch als Eigenschaft eines Objekts zugewiesen werden. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für weitere Details. Ein Beispiel ist:

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

wobei `objectName` ein bestehendes Objekt, `methodName` der Name ist, den Sie der Methode zuordnen, und `functionName` der Name der Funktion ist.

Sie können dann die Methode im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden typischerweise auf dem `prototype`-Objekt des Konstruktors definiert, damit alle Objekte des gleichen Typs die gleiche Methode teilen. Zum Beispiel können Sie eine Funktion definieren, die die Eigenschaften der zuvor definierten `Car`-Objekte formatiert und darstellt.

```js
Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};
```

Beachten Sie die Verwendung von `this`, um auf das Objekt zu verweisen, zu dem die Methode gehört. Dann können Sie die `displayCar`-Methode für jedes der Objekte wie folgt aufrufen:

```js
car1.displayCar();
car2.displayCar();
```

### Verwendung von this für Objekt-Referenzen

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Angenommen, Sie haben 2 Objekte, `Manager` und `Intern`. Jedes Objekt hat seine eigenen `name`, `age` und `job`. In der Funktion `sayHi()` beachten Sie die Verwendung von `this.name`. Wenn sie zu den 2 Objekten hinzugefügt wird, druckt dieselbe Funktion die Nachricht mit dem Namen des jeweiligen Objekts, dem sie zugeordnet ist.

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

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der übergeben wird, indem das Objekt vor der Funktion angegeben wird, die aufgerufen wurde. Beispielsweise ist in `Manager.sayHi()` `this` das `Manager`-Objekt, weil `Manager` vor der Funktion `sayHi()` kommt. Wenn Sie dieselbe Funktion von einem anderen Objekt aus aufrufen, ändert sich auch `this`. Wenn Sie andere Methoden verwenden, um die Funktion aufzurufen, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Getter und Setter definieren

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine mit einer Eigenschaft assoziierte Funktion, die den Wert einer spezifischen Eigenschaft abruft. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine mit einer Eigenschaft assoziierte Funktion, die den Wert einer spezifischen Eigenschaft setzt. Zusammen können sie den Wert einer Eigenschaft indirekt darstellen.

Getter und Setter können entweder

- innerhalb von [Objekt Initialisierern](#verwendung_von_objekt-initialisierern) definiert werden oder
- später zu einem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objekt Initialisierern](#verwendung_von_objekt-initialisierern) werden Getter und Setter wie reguläre [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, aber mit den Schlüsselwörtern `get` oder `set` vorangestellt. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter (den neuen Wert, der gesetzt werden soll) erwartet. Zum Beispiel:

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

- `myObj.a` — eine Zahl
- `myObj.b` — ein Getter, der `myObj.a` plus 1 zurückgibt
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Wertes setzt, den `myObj.c` erhält

Getter und Setter können auch jederzeit nach der Erstellung einem Objekt mit der {{jsxref("Object.defineProperties()")}}-Methode hinzugefügt werden. Der erste Parameter dieser Methode ist das Objekt, für das Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Namen der Getter oder Setter sind und dessen Eigenschaftswerte Objekte zum Definieren der Getter- oder Setter-Funktionen sind. Hier ist ein Beispiel, das den gleichen Getter und Setter aus dem vorherigen Beispiel definiert:

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

Welche der beiden Formen Sie wählen, hängt von Ihrem Programmierstil und der jeweiligen Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter durch den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch später Getter und Setter hinzufügen müssen — vielleicht weil Sie das spezifische Objekt nicht geschrieben haben — dann ist die zweite Form die einzige mögliche. Die zweite Form repräsentiert besser die dynamische Natur von JavaScript, kann aber den Code schwer lesbar und verständlich machen.

## Vergleichen von Objekten

In JavaScript sind Objekte ein Referenztyp. Zwei unterschiedliche Objekte sind niemals gleich, selbst wenn sie die gleichen Eigenschaften haben. Nur der Vergleich desselben Objekt-Referenzes mit sich selbst ergibt true.

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

Für weitere Informationen zu Vergleichsoperatoren siehe [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators).

## Siehe auch

- [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
