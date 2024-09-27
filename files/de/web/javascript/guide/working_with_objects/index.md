---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript ist auf einem einfachen objektbasierten Paradigma aufgebaut. Ein Objekt ist eine Sammlung von [Eigenschaften](/de/docs/Glossary/Property/JavaScript), und eine Eigenschaft ist eine Zuordnung zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in diesem Fall wird die Eigenschaft als [Methode](/de/docs/Glossary/Method) bezeichnet.

Objekte in JavaScript können, wie in vielen anderen Programmiersprachen, mit Objekten im realen Leben verglichen werden. In JavaScript ist ein Objekt eine eigenständige Einheit mit Eigenschaften und Typ. Vergleichen Sie es zum Beispiel mit einer Tasse. Eine Tasse ist ein Objekt mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, ein Gewicht, ein Material, aus dem sie besteht, usw. Auf die gleiche Weise können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Zusätzlich zu den vordefinierten Objekten im Browser können Sie Ihre eigenen Objekte definieren. Dieses Kapitel beschreibt, wie man Objekte, Eigenschaften und Methoden verwendet und wie man eigene Objekte erstellt.

## Neue Objekte erstellen

Sie können ein Objekt mit einem [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktorfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new`-Operator aufrufen.

### Verwendung von Objektinitialisierern

Objektinitialisierer werden auch _Objektliterale_ genannt. "Objektinitialisierer" ist konsistent mit der in C++ verwendeten Terminologie.

Die Syntax für ein Objekt mit einem Objektinitialisierer ist:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenname vor Doppelpunkten ist ein Bezeichner (entweder ein Name, eine Zahl oder ein Zeichenfolgenliteral) und jeder `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern gesetzt werden. Der Referenzteil [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variablen `obj` zugewiesen — dies ist optional. Wenn Sie dieses Objekt an anderer Stelle nicht referenzieren müssen, brauchen Sie es keiner Variablen zuzuweisen. (Beachten Sie, dass Sie das Objektliteral möglicherweise in Klammern setzen müssen, wenn das Objekt an einer Stelle erscheint, an der ein Statement erwartet wird, um nicht mit einem Block-Statement verwechselt zu werden.)

Objektinitialisierer sind Ausdrücke, und jeder Objektinitialisierer führt dazu, dass jedes Mal ein neues Objekt erstellt wird, wenn das Statement, in dem es erscheint, ausgeführt wird. Identische Objektinitialisierer erzeugen unterschiedliche Objekte, die nicht miteinander gleich sind.

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

Objekte, die mit Initialisierern erstellt werden, werden _plain objects_ genannt, da sie Instanzen von {{jsxref("Object")}} sind, aber nicht von einem anderen Objekttyp. Einige Objekttypen haben spezielle Initialisierungssyntaxen — zum Beispiel [array initializers](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [regex literals](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwendung einer Konstruktorfunktion

Alternativ können Sie ein Objekt in diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktorfunktion schreiben. Es gibt eine starke Konvention, mit gutem Grund, einen Großbuchstaben zu verwenden.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, die seinen Namen, seine Eigenschaften und Methoden angibt. Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und sie möchten, dass er Eigenschaften für Marke, Modell und Jahr hat. Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie die Verwendung von `this`, um Werte den Eigenschaften des Objekts basierend auf den an die Funktion übergebenen Werten zuzuweisen.

Jetzt können Sie ein Objekt `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Dies führt dazu, dass `myCar` erstellt und ihm die angegebenen Werte für seine Eigenschaften zugewiesen werden. Dann ist der Wert von `myCar.make` der String `"Eagle"`, `myCar.model` ist der String `"Talon TSi"`, `myCar.year` ist die Ganzzahl `1993` usw. Die Reihenfolge von Argumenten und Parametern sollte gleich sein.

Sie können beliebig viele `Car`-Objekte durch Aufrufe von `new` erstellen. Zum Beispiel:

```js
const kenscar = new Car("Nissan", "300ZX", 1992);
const vpgscar = new Car("Mazda", "Miata", 1990);
```

Ein Objekt kann eine Eigenschaft haben, die selbst ein weiteres Objekt ist. Zum Beispiel, um ein Objekt namens `Person` zu definieren, wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

und dann zwei neue `Person`-Objekte wie folgt zu instanziieren:

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

Um die neuen Objekte zu instanziieren, verwenden Sie dann das folgende:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Beachten Sie, dass anstelle eines literalen Strings oder einer Ganzzahl beim Erstellen der neuen Objekte, jetzt die Objekte `rand` und `ken` als Argumente für die Besitzer übergeben werden. Wenn Sie dann den Namen des Besitzers von `car2` herausfinden möchten, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können immer einer zuvor definierten Objekt eine Eigenschaft hinzufügen. Zum Beispiel die Anweisung

```js
car1.color = "black";
```

fügt dem `car1` eine Eigenschaft `color` hinzu und weist ihr den Wert `"black"` zu. Dies hat jedoch keine Auswirkungen auf andere Objekte. Um die neue Eigenschaft allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des `Car`-Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes) Syntax anstelle der `function`-Syntax verwenden, um eine Konstruktorfunktion zu definieren. Für weitere Informationen siehe den [Klassen-Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwendung der Object.create() Methode

Objekte können auch mit der {{jsxref("Object.create()")}} Methode erstellt werden. Diese Methode kann sehr nützlich sein, da sie es Ihnen ermöglicht, das [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)-Objekt für das Objekt auszuwählen, das Sie erstellen möchten, ohne eine Konstruktorfunktion definieren zu müssen.

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

Ein JavaScript-Objekt hat Eigenschaften, die mit ihm verbunden sind. Objekteigenschaften sind im Grunde dasselbe wie Variablen, außer dass sie mit Objekten und nicht mit [Scopes](/de/docs/Glossary/Scope) verbunden sind. Die Eigenschaften eines Objekts definieren die Merkmale des Objekts.

Zum Beispiel erstellt dieses Beispiel ein Objekt namens `myCar` mit den Eigenschaften `make`, `model` und `year`, deren Werte auf `"Ford"`, `"Mustang"` und `1969` gesetzt sind:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind Eigenschaftsnamen case-sensitive. Eigenschaftsnamen können nur Zeichenfolgen oder Symbole sein — alle Schlüssel werden [in Zeichenfolgen konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, sie sind Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind tatsächlich Eigenschaften mit Zeichenfolgen-Schlüsseln, die ganze Zahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts über seinen Eigenschaftsnamen zugreifen. [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt es in zwei Syntaxen: _Punktnotation_ und _Klammernotation_. Zum Beispiel könnten Sie auf die Eigenschaften des `myCar`-Objekts wie folgt zugreifen:

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

Ein Objekteigenschaftsname kann jede JavaScript-Zeichenfolge oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich einer leeren Zeichenfolge. Sie können jedoch keine Punktnotation verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Zum Beispiel kann ein Eigenschaftenname, der ein Leerzeichen oder einen Bindestrich enthält, mit einer Zahl beginnt oder in einer Variablen enthalten ist, nur mit der Klammernotation zugegriffen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch bestimmt werden sollen, d.h. nicht bis zur Laufzeit bestimmbar sind. Beispiele sind wie folgt:

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

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder eine Zeichenfolge noch ein Symbol ist. Wenn es zu `myObj` hinzugefügt wird, ruft JavaScript die {{jsxref("Object/toString", "toString()")}} Methode von `anotherObj` auf und verwendet die resultierende Zeichenfolge als neuen Schlüssel.

Sie können auch auf Eigenschaften mit einem Zeichenfolgenwert zugreifen, der in einer Variablen gespeichert ist. Die Variable muss in Klammernotation übergeben werden. Im obigen Beispiel enthielt die Variable `str` `"myString"` und somit ist `"myString"` der Eigenschaftenname. Deshalb wird `myObj.str` als undefiniert zurückgegeben.

```js
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'This key is in variable str'
console.log(myObj.myString); // 'This key is in variable str'
```

Dies ermöglicht den Zugriff auf jede Eigenschaft, die zur Laufzeit bestimmt wird:

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

Seien Sie jedoch vorsichtig, wenn Sie eckige Klammern verwenden, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben angegeben werden. Dies kann dazu führen, dass Ihr Code anfällig für [Objektinjektions-Angriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) wird.

Nicht vorhandene Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Eigenschaften aufzählen

Es gibt drei native Möglichkeiten, um Objekteigenschaften aufzulisten/zurückzuführen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen. Diese Methode durchläuft alle aufzählbaren String-Eigenschaften eines Objekts sowie dessen Prototypen-Kette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den aufzählbaren eigenen String-Eigenschaftsnamen ("Schlüssel") im Objekt `myObj` zurück, jedoch nicht die in der Prototypen-Kette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array zurück, das alle eigenen String-Eigenschaftsnamen im Objekt `myObj` enthält, unabhängig davon, ob sie aufzählbar sind oder nicht.

Sie können die Klammernotation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um alle aufzählbaren Eigenschaften eines Objekts zu iterieren. Um zu veranschaulichen, wie dies funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Namen des Objekts als Argumente an die Funktion übergeben:

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

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, jedoch ausgeschlossen von denen der Prototypen-Kette. Der Funktionsaufruf `showProps(myCar, 'myCar')` würde dann folgendes ausgeben:

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

Es gibt keine native Methode, um geerbte nicht-auflistbare Eigenschaften aufzulisten. Dies kann jedoch mit der folgenden Funktion erreicht werden:

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

Für weitere Informationen siehe [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).

### Eigenschaften löschen

Sie können eine nicht-ererbte Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator entfernen. Der folgende Code zeigt, wie Sie eine Eigenschaft entfernen.

```js
// Creates a new object, myobj, with two properties, a and b.
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log("a" in myobj); // false
```

## Vererbung

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das geerbte Objekt wird als Prototyp bezeichnet, und die geerbten Eigenschaften finden sich im `prototype`-Objekt des Konstruktors. Weitere Informationen finden Sie unter [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

### Eigenschaften für alle Objekte eines Typs definieren

Sie können mit der [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft eine Eigenschaft zu allen durch einen bestimmten [Konstruktor](#verwendung_einer_konstruktorfunktion) erstellten Objekten hinzufügen. Dies definiert eine Eigenschaft, die von allen Objekten des angegebenen Typs geteilt wird, anstatt nur von einer Instanz des Objekts. Der folgende Code fügt allen Objekten des Typs `Car` eine `color`-Eigenschaft hinzu und liest dann den Eigenschaftswert aus einer Instanz `car1` aus.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Methoden definieren

Eine _Methode_ ist eine Funktion, die mit einem Objekt verbunden ist, oder anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden auf dieselbe Weise definiert wie normale Funktionen, außer dass sie als Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für weitere Details. Ein Beispiel ist:

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

wo `objectName` ein bestehendes Objekt ist, `methodName` der Name ist, den Sie der Methode zuweisen, und `functionName` der Name der Funktion ist.

Sie können dann die Methode im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden typischerweise auf das `prototype`-Objekt des Konstruktors definiert, sodass alle Objekte desselben Typs dieselbe Methode teilen. Zum Beispiel können Sie eine Funktion definieren, die die Eigenschaften der zuvor definierten `Car`-Objekte formatiert und anzeigt.

```js
Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};
```

Beachten Sie die Verwendung von `this`, um sich auf das Objekt zu beziehen, zu dem die Methode gehört. Dann können Sie die `displayCar`-Methode für jedes der Objekte wie folgt aufrufen:

```js
car1.displayCar();
car2.displayCar();
```

### Verwendung von this für Objektverweise

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Angenommen, Sie haben 2 Objekte, `Manager` und `Intern`. Jedes Objekt hat seinen eigenen `name`, `age` und `job`. In der Funktion `sayHi()`, beachten Sie die Verwendung von `this.name`. Wenn Sie es den 2 Objekten hinzufügen, wird die gleiche Funktion die Nachricht mit dem Namen des jeweiligen Objekts drucken, an das sie angehängt ist.

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

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der durch Angabe des Objekts vor der aufgerufenen Funktion übergeben wird. Zum Beispiel ist `this` im `Manager.sayHi()`-Aufruf das `Manager`-Objekt, weil `Manager` vor der Funktion `sayHi()` kommt. Wenn Sie auf die gleiche Funktion von einem anderen Objekt zugreifen, ändert sich `this` ebenfalls. Wenn Sie andere Methoden verwenden, um die Funktion aufzurufen, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Getter und Setter definieren

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine Funktion, die mit einer Eigenschaft assoziiert ist, die den Wert einer bestimmten Eigenschaft abruft. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine Funktion, die mit einer Eigenschaft assoziiert ist, die den Wert einer bestimmten Eigenschaft setzt. Zusammen können sie indirekt den Wert einer Eigenschaft repräsentieren.

Getter und Setter können entweder

- innerhalb von [Objektinitialisierern](#verwendung_von_objektinitialisierern) definiert oder
- später zu jedem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objektinitialisierern](#verwendung_von_objektinitialisierern) werden Getter und Setter wie reguläre [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, jedoch mit dem Präfix `get` oder `set`. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter erwartet (den neuen Wert, der gesetzt werden soll). Zum Beispiel:

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
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Werts setzt, auf den `myObj.c` gesetzt wird

Getter und Setter können auch jederzeit nach der Erstellung zu einem Objekt hinzugefügt werden, indem die Methode {{jsxref("Object.defineProperties()")}} verwendet wird. Der erste Parameter dieser Methode ist das Objekt, für das Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Getter- oder Setternamen sind und dessen Eigenschaftswerte Objekte sind, um die Getter- oder Setterfunktionen zu definieren. Hier ist ein Beispiel, das denselben Getter und Setter wie im vorherigen Beispiel definiert:

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

Welche der beiden Formen zu wählen ist, hängt von Ihrem Programmierstil und der aktuellen Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter durch den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch irgendwann später Getter und Setter hinzufügen müssen — vielleicht, weil Sie das betreffende Objekt nicht geschrieben haben —, ist die zweite Form die einzige mögliche Form. Die zweite Form repräsentiert besser die dynamische Natur von JavaScript, kann den Code jedoch schwer lesbar und verständlich machen.

## Objekte vergleichen

In JavaScript sind Objekte ein Referenztyp. Zwei unterschiedliche Objekte sind niemals gleich, auch wenn sie dieselben Eigenschaften haben. Nur der Vergleich derselben Objektreferenz mit sich selbst ergibt true.

```js
// Two variables, two distinct objects with the same properties
const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

fruit == fruitbear; // return false
fruit === fruitbear; // return false
```

```js
// Two variables, a single object
const fruit = { name: "apple" };
const fruitbear = fruit; // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true

fruit.name = "grape";
console.log(fruitbear); // { name: "grape" }; not { name: "apple" }
```

Für weitere Informationen über Vergleichsoperatoren siehe [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators).

## Siehe auch

- [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
