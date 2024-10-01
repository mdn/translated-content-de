---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript ist auf einem einfachen, objektbasierten Paradigma aufgebaut. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}, und eine Eigenschaft ist eine Assoziation zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in diesem Fall ist die Eigenschaft als {{Glossary("Method", "Methode")}} bekannt.

Objekte in JavaScript können, wie in vielen anderen Programmiersprachen, mit Objekten im wirklichen Leben verglichen werden. In JavaScript ist ein Objekt eine eigenständige Entität mit Eigenschaften und Typ. Vergleichen Sie es zum Beispiel mit einer Tasse. Eine Tasse ist ein Objekt mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, Gewicht, ein Material, aus dem sie besteht, usw. Auf die gleiche Weise können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Zusätzlich zu Objekten, die im Browser vordefiniert sind, können Sie auch eigene Objekte definieren. Dieses Kapitel beschreibt, wie man Objekte, Eigenschaften und Methoden verwendet und wie man eigene Objekte erstellt.

## Erstellen neuer Objekte

Sie können ein Objekt mithilfe eines [Objektinitialisierers](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktorfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new`-Operator aufrufen.

### Verwendung von Objektinitialisierern

Objektinitialisierer werden auch _Objektliterale_ genannt. "Objektinitialisierer" ist konsistent mit der in C++ verwendeten Terminologie.

Die Syntax für ein Objekt, das einen Objektinitialisierer verwendet, ist:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor den Doppelpunkten ist ein Bezeichner (entweder ein Name, eine Zahl oder ein Zeichenfolgenliteral), und jedes `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenschaftsname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern gesetzt werden. Die Referenz zum [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variablen `obj` zugewiesen — dies ist optional. Wenn Sie diesem Objekt an anderer Stelle nicht referenzieren müssen, müssen Sie es nicht einer Variablen zuweisen. (Beachten Sie, dass Sie das Objektliteral möglicherweise in Klammern setzen müssen, wenn das Objekt dort erscheint, wo eine Anweisung erwartet wird, damit das Literal nicht mit einer Blockanweisung verwechselt wird.)

Objektinitialisierer sind Ausdrücke, und jeder Objektinitialisierer führt dazu, dass ein neues Objekt erstellt wird, wann immer die Anweisung, in der er erscheint, ausgeführt wird. Identische Objektinitialisierer erstellen unterschiedliche Objekte, die nicht als gleich verglichen werden.

Die folgende Anweisung erstellt ein Objekt und weist es der Variablen `x` zu, wenn und nur wenn der Ausdruck `cond` wahr ist:

```js
let x;
if (cond) {
  x = { greeting: "hi there" };
}
```

Das folgende Beispiel erstellt `myHonda` mit drei Eigenschaften. Beachten Sie, dass die `engine`-Eigenschaft ebenfalls ein Objekt mit eigenen Eigenschaften ist.

```js
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
```

Objekte, die mit Initialisierern erstellt werden, werden _einfache Objekte_ genannt, weil sie Instanzen von {{jsxref("Object")}} sind, aber von keinem anderen Objekttyp. Einige Objekttypen haben spezielle Initialisierersyntaxen — zum Beispiel [Array-Initialisierer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [Regex-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwendung einer Konstruktorfunktion

Alternativ können Sie ein Objekt mit diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktorfunktion schreiben. Es gibt eine starke Konvention, aus gutem Grund, einen Großbuchstaben als Anfangsbuchstaben zu verwenden.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, die seinen Namen, seine Eigenschaften und seine Methoden angibt. Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und Sie möchten, dass er Eigenschaften für Marke, Modell und Baujahr hat. Um dies zu tun, würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie die Verwendung von `this`, um den Eigenschaften des Objekts basierend auf den an die Funktion übergebenen Werten Werte zuzuweisen.

Jetzt können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Dann ist der Wert von `myCar.make` die Zeichenkette `"Eagle"`, `myCar.model` die Zeichenkette `"Talon TSi"`, `myCar.year` ist die ganze Zahl `1993` usw. Die Reihenfolge der Argumente und Parameter sollte die gleiche sein.

Sie können durch Aufrufe von `new` eine beliebige Anzahl von `Car`-Objekten erstellen. Zum Beispiel:

```js
const kenscar = new Car("Nissan", "300ZX", 1992);
const vpgscar = new Car("Mazda", "Miata", 1990);
```

Ein Objekt kann eine Eigenschaft haben, die selbst ein anderes Objekt ist. Angenommen, Sie definieren ein Objekt namens `Person` wie folgt:

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

Beachten Sie, dass statt eines literalen Zeichenfolgen- oder Ganzzahlenwerts beim Erstellen der neuen Objekte die Objekte `rand` und `ken` als Argumente für die Eigentümer übergeben werden. Dann, wenn Sie den Namen des Besitzers von `car2` herausfinden möchten, können Sie auf folgendes Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können einem zuvor definierten Objekt jederzeit eine Eigenschaft hinzufügen. Zum Beispiel fügt die Anweisung

```js
car1.color = "black";
```

eine Eigenschaft `color` zu `car1` hinzu und weist ihr den Wert `"black"` zu. Dies wirkt sich jedoch nicht auf andere Objekte aus. Um die neue Eigenschaft zu allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des `Car`-Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes) Syntax anstelle der `function`-Syntax verwenden, um eine Konstruktorfunktion zu definieren. Weitere Informationen finden Sie im [Klassenleitfaden](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwendung der Object.create()-Methode

Objekte können auch mit der Methode {{jsxref("Object.create()")}} erstellt werden. Diese Methode kann sehr nützlich sein, da sie Ihnen ermöglicht, das [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)-Objekt für das zu erstellende Objekt auszuwählen, ohne eine Konstruktorfunktion definieren zu müssen.

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

Ein JavaScript-Objekt hat Eigenschaften, die damit verbunden sind. Objekteigenschaften sind im Grunde dasselbe wie Variablen, außer dass sie mit Objekten und nicht mit {{Glossary("Scope", "Scopes")}} verbunden sind. Die Eigenschaften eines Objekts definieren die Merkmale des Objekts.

Zum Beispiel erstellt dieses Beispiel ein Objekt, das `myCar` genannt wird, mit Eigenschaften `make`, `model` und `year`, mit den Werten `"Ford"`, `"Mustang"` und `1969`:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind Eigenschaftsnamen Groß-/Kleinschreibungsempfindlich. Eigenschaftsnamen können nur Zeichenfolgen oder Symbole sein — alle Schlüssel werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, sie sind Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind tatsächlich Eigenschaften mit Zeichenfolgen-Schlüsseln, die ganze Zahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts über ihren Eigenschaftsnamen zugreifen. [Zugriffsoperatoren für Eigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt es in zwei Schreibweisen: _Punktnotation_ und _Klammernotation_. Zum Beispiel könnten Sie auf die Eigenschaften des `myCar`-Objekts wie folgt zugreifen:

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

Ein Objekteigenschaftsname kann jede JavaScript-Zeichenfolge oder jedes [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich einer leeren Zeichenfolge. Sie können jedoch die Punktnotation nicht verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Zum Beispiel kann auf einen Eigenschaftsnamen, der einen Leerraum oder Bindestrich enthält, mit einer Zahl beginnt oder in einer Variablen gespeichert ist, nur mit der Klammernotation zugegriffen werden. Diese Schreibweise ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch bestimmt werden sollen, d.h. erst zur Laufzeit bestimmbar sind. Beispiele sind wie folgt:

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

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder eine Zeichenfolge noch ein Symbol ist. Wenn es `myObj` hinzugefügt wird, ruft JavaScript die Methode {{jsxref("Object/toString", "toString()")}} von `anotherObj` auf und verwendet die resultierende Zeichenfolge als neuen Schlüssel.

Sie können auch auf Eigenschaften mit einem Zeichenfolgenwert zugreifen, der in einer Variablen gespeichert ist. Die Variable muss in der Klammernotation übergeben werden. Im obigen Beispiel hielt die Variable `str` `"myString"` und es ist `"myString"`, das der Eigenschaftsname ist. Daher wird `myObj.str` als undefined zurückgegeben.

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

Seien Sie jedoch vorsichtig, wenn Sie eckige Klammern verwenden, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben angegeben werden. Dies kann Ihren Code für [Objektinjektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) anfällig machen.

Nicht vorhandene Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Aufzählen von Eigenschaften

Es gibt drei native Möglichkeiten, Objekteigenschaften aufzulisten/bereisen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen. Diese Methode durchläuft alle aufzählbaren Zeichenfolgeneigenschaften eines Objekts sowie dessen Prototypen-Kette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den eigenen aufzählbaren Zeichenfolgeneigenschaften ("Schlüssel") im Objekt `myObj` zurück, jedoch nicht die in der Prototypenkette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array zurück, das alle eigenen Zeichenfolgeneigenschaftsnamen im Objekt `myObj` enthält, unabhängig davon, ob sie aufzählbar sind oder nicht.

Sie können die Klammernotation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um über alle aufzählbaren Eigenschaften eines Objekts zu iterieren. Um zu veranschaulichen, wie dies funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Namen des Objekts als Argumente an die Funktion übergeben:

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

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, jedoch ohne die der Prototypen-Kette. Also würde der Funktionsaufruf `showProps(myCar, 'myCar')` Folgendes ausgeben:

```plain
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

Das obige ist äquivalent zu:

```js
function showProps(obj, objName) {
  let result = "";
  Object.keys(obj).forEach((i) => {
    result += `${objName}.${i} = ${obj[i]}\n`;
  });
  console.log(result);
}
```

Es gibt keine native Möglichkeit, geerbte nicht-auflistbare Eigenschaften aufzulisten. Dies kann jedoch mit der folgenden Funktion erreicht werden:

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

Weitere Informationen finden Sie unter [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).

### Löschen von Eigenschaften

Sie können eine nicht geerbte Eigenschaft mithilfe des [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operators entfernen. Der folgende Code zeigt, wie man eine Eigenschaft entfernt.

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

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das Objekt, von dem geerbt wird, wird als Prototyp bezeichnet, und die geerbten Eigenschaften können im `prototype`-Objekt des Konstruktors gefunden werden. Siehe [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) für weitere Informationen.

### Definieren von Eigenschaften für alle Objekte eines Typs

Sie können einer bestimmten [Konstruktor](#verwendung_einer_konstruktorfunktion) eine Eigenschaft hinzufügen, die für alle Objekte desselben Typs gilt, indem Sie die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft verwenden. Dies definiert eine Eigenschaft, die von allen Objekten des angegebenen Typs geteilt wird und nicht nur von einer Instanz des Objekts. Der folgende Code fügt allen Objekten des Typs `Car` eine `color`-Eigenschaft hinzu und liest dann den Eigenschaftswert aus einer Instanz `car1`.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Definieren von Methoden

Eine _Methode_ ist eine Funktion, die mit einem Objekt verbunden ist, oder anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden wie normale Funktionen definiert, außer dass sie als Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für weitere Details. Ein Beispiel ist:

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

wo `objectName` ein vorhandenes Objekt, `methodName` der Name ist, den Sie der Methode zuweisen, und `functionName` der Name der Funktion ist.

Sie können die Methode dann im Kontext des Objekts wie folgt aufrufen:

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

Beachten Sie die Verwendung von `this`, um auf das Objekt zu verweisen, zu dem die Methode gehört. Dann können Sie die Methode `displayCar` für jedes der Objekte wie folgt aufrufen:

```js
car1.displayCar();
car2.displayCar();
```

### Verwendung von this für Objekt-Referenzen

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Zum Beispiel nehmen wir an, Sie haben zwei Objekte, `Manager` und `Intern`. Jedes Objekt hat seinen eigenen `name`, `age` und `job`. In der Funktion `sayHi()`, beachten Sie die Verwendung von `this.name`. Wenn sie zu den zwei Objekten hinzugefügt wird, gibt die gleiche Funktion die Nachricht mit dem Namen des jeweiligen Objekts aus, an das sie angehängt ist.

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

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der durch Angabe des Objekts vor der aufgerufenen Funktion übergeben wird. Zum Beispiel ist in `Manager.sayHi()` `this` das `Manager`-Objekt, da `Manager` vor der Funktion `sayHi()` steht. Wenn Sie auf dieselbe Funktion von einem anderen Objekt zugreifen, ändert sich `this` ebenfalls. Wenn Sie andere Methoden zum Aufrufen der Funktion verwenden, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Definieren von Gettern und Settern

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine Funktion, die mit einer Eigenschaft verbunden ist und den Wert einer bestimmten Eigenschaft erhält. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine Funktion, die mit einer Eigenschaft verbunden ist und den Wert einer bestimmten Eigenschaft setzt. Zusammen können sie indirekt den Wert einer Eigenschaft darstellen.

Getter und Setter können entweder

- innerhalb der [Objektinitialisierer](#verwendung_von_objektinitialisierern) definiert werden, oder
- später zu jedem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objektinitialisierern](#verwendung_von_objektinitialisierern) werden Getter und Setter wie reguläre [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, aber mit den Schlüsselwörtern `get` oder `set` versehen. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter (den neuen zu setzenden Wert) erwartet. Zum Beispiel:

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

Die `myObj` Objekt-Eigenschaften sind:

- `myObj.a` — eine Zahl
- `myObj.b` — ein Getter, der `myObj.a` plus 1 zurückgibt
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Werts setzt, den `myObj.c` gesetzt wird

Getter und Setter können auch jederzeit nach der Erstellung mit der Methode {{jsxref("Object.defineProperties()")}} zu einem Objekt hinzugefügt werden. Der erste Parameter dieser Methode ist das Objekt, für das Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Namen des Getters oder Setters sind und dessen Eigenschaftswerte Objekte sind, um die Getter- oder Setter-Funktionen zu definieren. Hier ist ein Beispiel, das den gleichen Getter und Setter aus dem vorherigen Beispiel definiert:

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

Welche der beiden Formen Sie wählen, hängt von Ihrem Programmierstil und der zu bearbeitenden Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter durch den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch später Getter und Setter hinzufügen müssen — vielleicht, weil Sie das betreffende Objekt nicht geschrieben haben — dann ist die zweite Form die einzige mögliche Form. Die zweite Form stellt die dynamische Natur von JavaScript besser dar, kann den Code jedoch schwer lesbar und verständlich machen.

## Vergleichen von Objekten

In JavaScript sind Objekte ein Referenztyp. Zwei verschiedene Objekte sind niemals gleich, auch wenn sie dieselben Eigenschaften haben. Nur der Vergleich derselben Objektreferenz mit sich selbst ergibt wahr.

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

Weitere Informationen zu Vergleichsoperatoren finden Sie unter [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators).

## Siehe auch

- [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
