---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript basiert auf einem objektorientierten Paradigma. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}, und eine Eigenschaft ist eine Assoziation zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in diesem Fall wird die Eigenschaft als {{Glossary("Method", "Methode")}} bezeichnet.

Objekte in JavaScript können, wie in vielen anderen Programmiersprachen, mit Objekten im echten Leben verglichen werden. In JavaScript ist ein Objekt eine eigenständige Entität, mit Eigenschaften und Typ. Vergleichen Sie es zum Beispiel mit einer Tasse. Eine Tasse ist ein Objekt, mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, ein Gewicht, ein Material, aus dem sie hergestellt ist, usw. Auf die gleiche Weise können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Zusätzlich zu den im Browser vordefinierten Objekten können Sie Ihre eigenen Objekte definieren. Dieses Kapitel beschreibt, wie man Objekte, Eigenschaften und Methoden verwendet und wie man eigene Objekte erstellt.

## Neue Objekte erzeugen

Sie können ein Objekt mit einem [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktionsfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new` Operator aufrufen.

### Verwendung von Objekt-Initialisierern

Objekt-Initialisierer werden auch _Objektliterale_ genannt. "Objekt-Initialisierer" ist konsistent mit der Terminologie, die von C++ verwendet wird.

Die Syntax für ein Objekt mittels eines Objekt-Initialisierers ist:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor den Doppelpunkten ist ein Bezeichner (entweder ein Name, eine Zahl oder ein Stringliteral), und jedes `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenschaftsname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern gesetzt werden. Die Referenz des [Objekt-Initialisierers](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt der Variablen `obj` zugewiesen – dies ist optional. Wenn Sie dieses Objekt nicht anderswo referenzieren müssen, müssen Sie es keiner Variablen zuweisen. (Beachten Sie, dass Sie das Objektliteral in Klammern setzen müssen, wenn das Objekt dort erscheint, wo ein Ausdruck erwartet wird, um zu verhindern, dass das Literal mit einer Blockanweisung verwechselt wird.)

Objekt-Initialisierer sind Ausdrücke, und jeder Objekt-Initialisierer führt zu einem neuen Objekt, das jedes Mal erstellt wird, wenn die Anweisung, in der er erscheint, ausgeführt wird. Identische Objekt-Initialisierer erzeugen separate Objekte, die nicht gleich sind.

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

Objekte, die mit Initialisierern erstellt werden, werden _einfache Objekte_ genannt, weil sie Instanzen von {{jsxref("Object")}} sind, aber keinem anderen Objekttyp angehören. Einige Objekttypen haben spezielle Initialisierer-Syntaxen – zum Beispiel [Array-Initialisierer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [Regex-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwendung einer Konstruktorfunktion

Alternativ können Sie ein Objekt mit diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp durch das Schreiben einer Konstruktorfunktion. Es besteht eine starke Konvention, aus gutem Grund, den Anfangsbuchstaben groß zu schreiben.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, die seinen Namen, Eigenschaften und Methoden angibt. Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass diese Art von Objekt `Car` genannt wird und Eigenschaften für Marke, Modell und Jahr hat. Um dies zu tun, würden Sie die folgende Funktion schreiben:

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

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Dann ist der Wert von `myCar.make` der String `"Eagle"`, `myCar.model` ist der String `"Talon TSi"`, `myCar.year` ist die Ganzzahl `1993`, und so weiter. Die Reihenfolge der Argumente sollte mit der der Parameter übereinstimmen.

Sie können eine beliebige Anzahl von `Car` Objekten durch Anrufe an `new` erstellen. Zum Beispiel,

```js
const randCar = new Car("Nissan", "300ZX", 1992);
const kenCar = new Car("Mazda", "Miata", 1990);
```

Ein Objekt kann eine Eigenschaft haben, die selbst ein weiteres Objekt ist. Stellen Sie sich vor, Sie definieren ein Objekt namens `Person` wie folgt:

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

Zum Instanziieren der neuen Objekte verwenden Sie dann das Folgende:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Beachten Sie, dass anstelle eines literalen Strings oder eines ganzzahligen Wertes die Objekte `rand` und `ken` als Argumente für die Eigentümer übergeben werden. Wenn Sie dann den Namen des Eigentümers von `car2` erfahren möchten, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können jederzeit eine Eigenschaft zu einem zuvor definierten Objekt hinzufügen. Zum Beispiel,

```js
car1.color = "black";
```

fügt `car1` eine Eigenschaft `color` hinzu und weist ihr den Wert `"black"` zu. Dies beeinflusst jedoch keine anderen Objekte. Um die neue Eigenschaft zu allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des Typs `Car` hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes) Syntax anstelle der `function` Syntax verwenden, um eine Konstruktorfunktion zu definieren. Für weitere Informationen siehe den [Class-Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwendung der Methode Object.create()

Objekte können auch mit der Methode {{jsxref("Object.create()")}} erstellt werden. Diese Methode kann sehr nützlich sein, weil sie Ihnen erlaubt, das [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Objekt für das zu erzeugende Objekt auszuwählen, ohne eine Konstruktorfunktion definieren zu müssen.

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

Ein JavaScript-Objekt hat Eigenschaften, die mit ihm verknüpft sind. Objekteigenschaften sind im Grunde dasselbe wie Variablen, außer dass sie mit Objekten, nicht mit {{Glossary("Scope", "Scopes")}} verknüpft sind. Die Eigenschaften eines Objekts definieren die Merkmale des Objekts.

Zum Beispiel, dieses Beispiel erstellt ein Objekt namens `myCar`, mit Eigenschaften `make`, `model` und `year`, deren Werte auf `"Ford"`, `"Mustang"` und `1969` gesetzt sind:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind Eigenschaftenamen case-sensitive. Eigenschaftenamen können nur Strings oder Symbole sein – alle Schlüssel werden [in Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, es handelt sich um Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind tatsächlich Eigenschaften mit String-Schlüsseln, die ganze Zahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts über seinen Eigenschaftsnamen zugreifen. [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) haben zwei Syntaxen: _dot notation_ und _bracket notation_. Zum Beispiel könnten Sie auf die Eigenschaften des Objekts `myCar` wie folgt zugreifen:

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

Ein Objekt-Eigenschaftsname kann jeder JavaScript-String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich eines leeren Strings. Sie können jedoch keine Punktnotation verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Zum Beispiel kann ein Eigenschaftsname, der ein Leerzeichen oder einen Bindestrich enthält, der mit einer Zahl beginnt oder in einer Variablen gehalten wird, nur mit der Klammernotation aufgerufen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch ermittelt werden sollen, d.h. erst zur Laufzeit ermittelbar sind. Beispiele sind wie folgt:

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

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder ein String noch ein Symbol ist. Wenn es dem `myObj` hinzugefügt wird, ruft JavaScript die Methode {{jsxref("Object/toString", "toString()")}} von `anotherObj` auf und verwendet den resultierenden String als neuen Schlüssel.

Sie können auch auf Eigenschaften mit einem Stringwert zugreifen, der in einer Variablen gespeichert ist. Die Variable muss in der Klammernotation übergeben werden. Im obigen Beispiel hielt die Variable `str` den Wert `"myString"` und es ist `"myString"`, das der Eigenschaftsname ist. Daher wird `myObj.str` als undefined zurückgegeben.

```js
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'This key is in variable str'
console.log(myObj.myString); // 'This key is in variable str'
```

Dies ermöglicht den Zugriff auf jede Eigenschaft, wie sie zur Laufzeit bestimmt wird:

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

Seien Sie jedoch vorsichtig beim Verwenden von eckigen Klammern, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingabe gegeben sind. Dies kann Ihren Code anfällig für [Objekt-Injektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

Nicht vorhandene Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Enumerieren von Eigenschaften

Es gibt drei native Möglichkeiten, Objekteigenschaften aufzulisten/zu durchlaufen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen. Diese Methode durchläuft alle aufzählbaren String-Eigenschaften eines Objekts sowie dessen Prototyp-Kette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den aufzählbaren eigenen String-Eigenschaftsnamen ("Schlüssel") im Objekt `myObj` zurück, aber nicht die der Prototyp-Kette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array mit allen eigenen String-Eigenschaftsnamen im Objekt `myObj` zurück, unabhängig davon, ob sie aufzählbar sind oder nicht.

Sie können die Klammernotation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um alle aufzählbaren Eigenschaften eines Objekts zu durchlaufen. Um zu veranschaulichen, wie dies funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Objektnamen als Argumente an die Funktion übergeben:

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

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, jedoch nicht auf die der Prototyp-Kette. Daher würde der Funktionsaufruf `showProps(myCar, 'myCar')` folgendes ausgeben:

```plain
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

Das obige ist gleichwertig mit:

```js
function showProps(obj, objName) {
  let result = "";
  Object.keys(obj).forEach((i) => {
    result += `${objName}.${i} = ${obj[i]}\n`;
  });
  console.log(result);
}
```

Es gibt keine native Möglichkeit, geerbte nicht-auflistenbare Eigenschaften aufzulisten. Dies kann jedoch mit der folgenden Funktion erreicht werden:

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

Für weitere Informationen siehe [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

### Entfernen von Eigenschaften

Sie können eine nicht vererbte Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator entfernen. Der folgende Code zeigt, wie man eine Eigenschaft entfernt.

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

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das vererbte Objekt wird als Prototyp bezeichnet, und die geerbten Eigenschaften können im `prototype` Objekt des Konstruktors gefunden werden. Siehe [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für weitere Informationen.

### Definition von Eigenschaften für alle Objekte eines Typs

Sie können eine Eigenschaft zu allen Objekten hinzufügen, die durch einen bestimmten [Konstruktor](#verwendung_einer_konstruktorfunktion) erstellt wurden, indem Sie die Eigenschaft [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) verwenden. Dies definiert eine Eigenschaft, die allen Objekten des angegebenen Typs gemeinsam ist, anstatt nur einer einzelnen Instanz des Objekts. Der folgende Code fügt allen Objekten des Typs `Car` eine `color` Eigenschaft hinzu und liest dann den Wert der Eigenschaft von einer Instanz `car1`.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Definition von Methoden

Eine _Methode_ ist eine Funktion, die mit einem Objekt verknüpft ist, oder anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden so definiert, wie normale Funktionen definiert werden, mit dem Unterschied, dass sie als Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für weitere Details. Ein Beispiel ist:

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

wobei `objectName` ein existierendes Objekt ist, `methodName` der Name ist, den Sie der Methode zuweisen, und `functionName` der Name der Funktion ist.

Sie können dann die Methode im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden typischerweise auf dem `prototype` Objekt des Konstruktors definiert, sodass alle Objekte desselben Typs die gleiche Methode teilen. Zum Beispiel können Sie eine Funktion definieren, die die Eigenschaften der zuvor definierten `Car` Objekte formatiert und anzeigt.

```js
Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};
```

Beachten Sie die Verwendung von `this`, um auf das Objekt zu verweisen, zu dem die Methode gehört. Dann können Sie die `displayCar` Methode für jedes der Objekte wie folgt aufrufen:

```js
car1.displayCar();
car2.displayCar();
```

### Verwendung von this für Objektverweise

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Angenommen, Sie haben zwei Objekte, `Manager` und `Intern`. Jedes Objekt hat seinen eigenen `name`, `age` und `job`. In der Funktion `sayHi()`, beachten Sie die Verwendung von `this.name`. Wenn dieselbe Funktion zu den beiden Objekten hinzugefügt wird, wird die Nachricht mit dem Namen des jeweiligen Objekts gedruckt, dem es angehängt ist.

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

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der über den Verweis auf das Objekt vor der Funktion übergeben wird. Zum Beispiel ist in `Manager.sayHi()` das `this` das `Manager`-Objekt, weil `Manager` vor der Funktion `sayHi()` steht. Wenn Sie dieselbe Funktion von einem anderen Objekt aus aufrufen, wird sich `this` ebenfalls ändern. Wenn Sie andere Methoden verwenden, um die Funktion aufzurufen, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Definition von Gettern und Settern

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine Funktion, die mit einer Eigenschaft verknüpft ist und den Wert einer bestimmten Eigenschaft abruft. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine Funktion, die mit einer Eigenschaft verknüpft ist und den Wert einer bestimmten Eigenschaft festlegt. Zusammen können sie indirekt den Wert einer Eigenschaft darstellen.

Getter und Setter können entweder

- innerhalb von [Objekt-Initialisierern](#verwendung_von_objekt-initialisierern) definiert werden oder
- später jedem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objekt-Initialisierern](#verwendung_von_objekt-initialisierern) werden Getter und Setter wie reguläre [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, jedoch mit den Schlüsselwörtern `get` oder `set` als Präfix. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter erwartet (den neuen Wert, der festgelegt werden soll). Zum Beispiel:

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

Die Eigenschaften des `myObj` Objekts sind:

- `myObj.a` — eine Nummer
- `myObj.b` — ein Getter, der `myObj.a` plus 1 zurückgibt
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Wertes setzt, den `myObj.c` erhalten soll

Getter und Setter können auch jederzeit nach der Erstellung mit der Methode {{jsxref("Object.defineProperties()")}} zu einem Objekt hinzugefügt werden. Der erste Parameter dieser Methode ist das Objekt, an dem Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Getter- oder Setter-Namen sind und dessen Eigenschaftswerte Objekte sind, um die Getter- oder Setter-Funktionen zu definieren. Hier ist ein Beispiel, das den gleichen Getter und Setter wie im vorherigen Beispiel definiert:

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

Welches der beiden Formate zu wählen ist, hängt von Ihrem Programmierstil und der gestellten Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter über den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch später Getter und Setter hinzufügen müssen – vielleicht, weil Sie das betreffende Objekt nicht geschrieben haben – ist die zweite Form die einzige mögliche. Die zweite Form repräsentiert besser die dynamische Natur von JavaScript, kann aber den Code schwer lesbar und verständlich machen.

## Vergleich von Objekten

In JavaScript sind Objekte ein Referenztyp. Zwei verschiedene Objekte sind niemals gleich, selbst wenn sie die gleichen Eigenschaften haben. Nur der Vergleich derselben Objekt-Referenz mit sich selbst ergibt `true`.

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

Für weitere Informationen über Vergleichs-Operatoren siehe [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators).

## Siehe auch

- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
