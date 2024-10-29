---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript basiert auf einem einfachen objektorientierten Paradigma. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}, und eine Eigenschaft ist eine Zuordnung zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in diesem Fall wird die Eigenschaft als {{Glossary("Method", "Methode")}} bezeichnet.

Objekte in JavaScript können, wie in vielen anderen Programmiersprachen, mit Objekten aus dem echten Leben verglichen werden. Ein Objekt in JavaScript ist eine eigenständige Einheit mit Eigenschaften und Typ. Vergleichen Sie es mit einer Tasse, die ein Objekt mit Eigenschaften ist. Eine Tasse hat eine Farbe, ein Design, ein Gewicht, ein Material, aus dem sie besteht, usw. Auf die gleiche Weise können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Neben Objekten, die im Browser vordefiniert sind, können Sie Ihre eigenen Objekte definieren. Dieses Kapitel beschreibt, wie Sie Objekte, Eigenschaften und Methoden verwenden und wie Sie Ihre eigenen Objekte erstellen können.

## Erstellen neuer Objekte

Sie können ein Objekt mit einem [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktorfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new` Operator aufrufen.

### Verwenden von Objektinitialisierern

Objektinitialisierer werden auch _Objektliterale_ genannt. "Objektinitialisierer" ist konsistent mit der Terminologie, die von C++ verwendet wird.

Die Syntax für ein Objekt unter Verwendung eines Objektinitialisierers lautet:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor Doppelpunkten ist ein Bezeichner (entweder ein Name, eine Zahl oder ein Stringliteral), und jeder `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenschaftsname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern eingeschlossen werden. Die [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Referenz enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variable `obj` zugewiesen — dies ist optional. Wenn Sie dieses Objekt an keiner anderen Stelle referenzieren müssen, brauchen Sie es keiner Variablen zuzuweisen. (Beachten Sie, dass Sie möglicherweise das Objektliteral in Klammern setzen müssen, wenn das Objekt an einer Stelle erscheint, an der ein Statement erwartet wird, damit das Literal nicht mit einem Block-Statement verwechselt wird.)

Objektinitialisierer sind Ausdrücke, und jeder Objektinitialisierer führt zu einem neuen Objekt, das jedes Mal erstellt wird, wenn das Statement, in dem er erscheint, ausgeführt wird. Identische Objektinitialisierer erstellen unterschiedliche Objekte, die sich gegenseitig nicht als gleich vergleichen lassen.

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

Objekte, die mit Initialisierern erstellt werden, werden als _einfache Objekte_ bezeichnet, weil sie Instanzen von {{jsxref("Object")}} sind, aber keinem anderen Objekttyp angehören. Einige Objekttypen haben spezielle Initialisierungssyntaxen — zum Beispiel [Array-Initialisierer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [Regex-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwenden einer Konstruktorfunktion

Alternativ können Sie ein Objekt in zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktorfunktion schreiben. Es gibt eine starke Konvention, aus gutem Grund, den Anfangsbuchstaben groß zu schreiben.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, die seinen Namen, seine Eigenschaften und Methoden spezifiziert. Wenn Sie beispielsweise einen Objekttyp für Autos erstellen möchten, sollen diese Objekte `Car` genannt werden und Eigenschaften für Marke, Modell und Baujahr haben. Um dies zu erreichen, würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie die Verwendung von `this`, um Werte den Objekteigenschaften zuzuweisen, basierend auf den an die Funktion übergebenen Werten.

Jetzt können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Dann ist der Wert von `myCar.make` der String `"Eagle"`, `myCar.model` ist der String `"Talon TSi"`, `myCar.year` ist die Ganzzahl `1993` und so weiter. Die Reihenfolge der Argumente und Parameter sollte dieselbe sein.

Sie können eine beliebige Anzahl von `Car`-Objekten durch Aufrufe von `new` erstellen. Zum Beispiel,

```js
const randCar = new Car("Nissan", "300ZX", 1992);
const kenCar = new Car("Mazda", "Miata", 1990);
```

Ein Objekt kann eine Eigenschaft haben, die selbst ein weiteres Objekt ist. Wenn Sie beispielsweise ein Objekt namens `Person` definieren möchten, dann wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

und dann zwei neue `Person`-Objekte wie folgt instanziieren:

```js
const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Dann können Sie die Definition von `Car` um eine `owner`-Eigenschaft erweitern, die ein `Person`-Objekt übernimmt, wie folgt:

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

Beachten Sie, dass statt eines Literalstrings oder Ganzzahlen die Objekte `rand` und `ken` als Argumente für die Besitzer beim Erstellen der neuen Objekte übergeben werden. Wenn Sie dann den Namen des Besitzers von `car2` herausfinden möchten, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können immer eine Eigenschaft zu einem zuvor definierten Objekt hinzufügen. Zum Beispiel,

```js
car1.color = "black";
```

fügt die Eigenschaft `color` zu `car1` hinzu und weist ihr den Wert `"black"` zu. Dies betrifft jedoch keine anderen Objekte. Um die neue Eigenschaft zu allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des `Car`-Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes)-Syntax anstelle der `function`-Syntax verwenden, um eine Konstruktorfunktion zu definieren. Weitere Informationen finden Sie im [Klassenleitfaden](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwenden der Methode `Object.create()`

Objekte können auch mit der Methode {{jsxref("Object.create()")}} erstellt werden. Diese Methode kann sehr nützlich sein, da sie es Ihnen ermöglicht, das [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)-Objekt für das gewünschte Objekt auszuwählen, ohne eine Konstruktorfunktion definieren zu müssen.

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

Ein JavaScript-Objekt hat damit verbundene Eigenschaften. Objekteigenschaften sind im Grunde dasselbe wie Variablen, mit dem Unterschied, dass sie mit Objekten und nicht mit {{Glossary("Scope", "Scopes")}} verbunden sind. Die Eigenschaften eines Objekts definieren die Merkmale des Objekts.

Zum Beispiel erstellt dieses Beispiel ein Objekt namens `myCar`, mit Eigenschaften `make`, `model` und `year`, die die Werte `"Ford"`, `"Mustang"` und `1969` haben:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind auch Eigenschaftsnamen groß- und kleinschreibungssensitiv. Eigenschaftsnamen können nur Strings oder Symbole sein — alle Schlüssel werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, sie sind Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind in der Tat Eigenschaften mit String-Schlüsseln, die Ganzzahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts durch ihren Eigenschaftsnamen zugreifen. [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwenden zwei Notationen: _Punktnotation_ und _Klammernotation_. Zum Beispiel könnten Sie auf die Eigenschaften des `myCar`-Objekts wie folgt zugreifen:

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

Ein Objekt-Eigenschaftsname kann ein beliebiger JavaScript-String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich eines leeren Strings. Sie können jedoch die Punktnotation nicht verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Ein Eigenschaftsname mit Leerzeichen oder Bindestrichen, der mit einer Zahl beginnt, oder der in einer Variablen gehalten wird, kann nur mit der Klammernotation zugegriffen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen zur Laufzeit dynamisch ermittelt werden müssen. Die Beispiele sind wie folgt:

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

Sie können auch Eigenschaften mit einem String-Wert, der in einer Variablen gespeichert ist, zugreifen. Die Variable muss in der Klammernotation übergeben werden. Im obigen Beispiel hielt die Variable `str` `"myString"`, und es ist `"myString"`, das der Eigenschaftsname ist. Daher wird `myObj.str` als undefiniert zurückgegeben.

```js
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'This key is in variable str'
console.log(myObj.myString); // 'This key is in variable str'
```

Dies ermöglicht den Zugang zu jeder Eigenschaft, die zur Laufzeit bestimmt wird:

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

Seien Sie jedoch vorsichtig, wenn Sie eckige Klammern verwenden, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben vorgegeben sind. Dies könnte Ihren Code anfällig für [Objekt-Injection-Angriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

Nicht existierende Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Aufzählen von Eigenschaften

Es gibt drei native Möglichkeiten, Objekteigenschaften aufzulisten/zu durchlaufen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen. Diese Methode durchläuft alle aufzählbaren String-Eigenschaften eines Objekts sowie deren Prototypkette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den aufzählbaren eigenen String-Eigenschaftsnamen ("Schlüssel") im Objekt `myObj` zurück, jedoch nicht die in der Prototypkette enthaltenen.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array zurück, das alle eigenen String-Eigenschaftsnamen im Objekt `myObj` enthält, unabhängig davon, ob sie aufzählbar sind oder nicht.

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

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, wobei diejenigen der Prototypkette ausgeschlossen sind. So würde der Funktionsaufruf `showProps(myCar, 'myCar')` folgendes ausgeben:

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

Es gibt keine native Möglichkeit, geerbte nicht-auzählbare Eigenschaften aufzulisten. Dies kann jedoch mit der folgenden Funktion erreicht werden:

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

Weitere Informationen finden Sie unter [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).

### Löschen von Eigenschaften

Sie können eine nicht geerbte Eigenschaft mithilfe des [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operators entfernen. Der folgende Code zeigt, wie eine Eigenschaft entfernt wird.

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

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das Objekt, von dem geerbt wird, ist als Prototyp bekannt, und die vererbten Eigenschaften können im `prototype`-Objekt des Konstruktors gefunden werden. Weitere Informationen finden Sie unter [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

### Definieren von Eigenschaften für alle Objekte eines Typs

Sie können einem bestimmten [Konstruktor](#verwenden_einer_konstruktorfunktion) eine Eigenschaft hinzufügen, um eine Eigenschaft zu definieren, die von allen Objekten des angegebenen Typs gemeinsam genutzt wird, anstatt nur von einer Instanz des Objekts. Der folgende Code fügt allen Objekten des Typs `Car` eine Eigenschaft `color` hinzu und liest dann den Eigenschaftswert von einer Instanz `car1`.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Definieren von Methoden

Eine _Methode_ ist eine Funktion, die mit einem Objekt verknüpft ist, oder anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden auf dieselbe Weise definiert, wie normale Funktionen definiert werden, außer dass sie einer Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für weitere Details. Ein Beispiel ist:

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

wobei `objectName` ein bestehendes Objekt, `methodName` der Name ist, den Sie der Methode zuweisen, und `functionName` der Name der Funktion ist.

Sie können die Methode dann im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden normalerweise im `prototype`-Objekt des Konstruktors definiert, damit alle Objekte desselben Typs die gleiche Methode teilen. Zum Beispiel können Sie eine Funktion definieren, die die Eigenschaften der zuvor definierten `Car`-Objekte formatiert und anzeigt.

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

### Verwendung von this für Objektverweise

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Nehmen wir zum Beispiel an, Sie haben 2 Objekte, `Manager` und `Intern`. Jedes Objekt hat seinen eigenen `name`, `age` und `job`. In der Funktion `sayHi()` beachten Sie die Verwendung von `this.name`. Wenn sie zu den 2 Objekten hinzugefügt wird, wird dieselbe Funktion die Nachricht mit dem Namen des jeweiligen Objekts drucken, an das sie angehängt ist.

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

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der über eine Angabe des Objekts vor der aufgerufenen Funktion übergeben wird. Zum Beispiel ist in `Manager.sayHi()` `this` das `Manager`-Objekt, weil `Manager` vor der Funktion `sayHi()` kommt. Wenn Sie dieselbe Funktion von einem anderen Objekt aus aufrufen, wird sich `this` ebenfalls ändern. Wenn Sie andere Methoden verwenden, um die Funktion aufzurufen, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Definieren von Gettern und Settern

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine Funktion, die mit einer Eigenschaft verknüpft ist und den Wert einer bestimmten Eigenschaft abruft. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine Funktion, die mit einer Eigenschaft verknüpft ist und den Wert einer bestimmten Eigenschaft festlegt. Zusammen können sie indirekt den Wert einer Eigenschaft darstellen.

Getter und Setter können entweder

- innerhalb von [Objektinitialisierern](#verwenden_von_objektinitialisierern) definiert werden oder
- später zu jedem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objektinitialisierern](#verwenden_von_objektinitialisierern) werden Getter und Setter wie reguläre [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, aber mit den Schlüsselwörtern `get` oder `set` vorangestellt. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter (den neuen Wert, der festgelegt werden soll) erwartet. Ein Beispiel:

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
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Wertes festlegt, der `myObj.c` zugewiesen wird

Getter und Setter können auch zu einem Objekt jederzeit nach dessen Erstellung mit der Methode {{jsxref("Object.defineProperties()")}} hinzugefügt werden. Der erste Parameter dieser Methode ist das Objekt, bei dem Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Getter- oder Setternamen sind, und dessen Eigenschaftswerte Objekte zum Definieren der Getter- oder Setzfunktionen sind. Hier ist ein Beispiel, das den gleichen Getter und Setter wie im vorherigen Beispiel definiert:

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

Welche der beiden Formen Sie wählen, hängt von Ihrem Programmierstil und der Aufgabe ab, die Sie erledigen müssen. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter durch den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch Getter und Setter später hinzufügen müssen — vielleicht, weil Sie das betreffende Objekt nicht geschrieben haben — dann ist die zweite Form die einzige mögliche. Die zweite Form repräsentiert besser die dynamische Natur von JavaScript, kann jedoch den Code schwer lesbar und verständlich machen.

## Vergleichen von Objekten

In JavaScript sind Objekte ein Referenztyp. Zwei verschiedene Objekte sind niemals gleich, selbst wenn sie die gleichen Eigenschaften haben. Nur der Vergleich desselben Objektverweises mit sich selbst ergibt `true`.

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

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
