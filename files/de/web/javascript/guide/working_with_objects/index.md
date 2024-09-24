---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript ist auf einem einfachen objektbasierten Paradigma aufgebaut. Ein Objekt ist eine Ansammlung von [Eigenschaften](/de/docs/Glossary/Property/JavaScript), und eine Eigenschaft ist eine Zuordnung zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein. In diesem Fall wird die Eigenschaft als [Methode](/de/docs/Glossary/Method) bezeichnet.

Objekte in JavaScript können, wie in vielen anderen Programmiersprachen, mit Objekten im wirklichen Leben verglichen werden. In JavaScript ist ein Objekt eine eigenständige Einheit mit Eigenschaften und Typ. Vergleichen Sie es zum Beispiel mit einer Tasse. Eine Tasse ist ein Objekt mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, ein Gewicht, ein Material, aus dem sie besteht usw. Auf die gleiche Weise können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Zusätzlich zu den Objekten, die im Browser vordefiniert sind, können Sie Ihre eigenen Objekte definieren. Dieses Kapitel beschreibt, wie man Objekte, Eigenschaften und Methoden verwendet und wie man eigene Objekte erstellt.

## Erstellen neuer Objekte

Sie können ein Objekt mit einem [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstrukturfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new` Operator aufrufen.

### Verwenden von Objekt-Initializern

Objekt-Initializer werden auch _Objektliterale_ genannt. "Objekt-Initializer" ist konsistent mit der von C++ verwendeten Terminologie.

Die Syntax für ein Objekt mit einem Objekt-Initializer ist:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor den Doppelpunkten ist ein Bezeichner (entweder ein Name, eine Zahl oder ein Zeichenfolgenliterale), und jeder `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenschaftsname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern gesetzt werden. Die [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) Referenz enthält eine detaillierte Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variablen `obj` zugewiesen — das ist optional. Wenn Sie sich nicht auf dieses Objekt an anderer Stelle beziehen müssen, müssen Sie es nicht einer Variablen zuweisen. (Beachten Sie, dass Sie das Objektliteral möglicherweise in Klammern setzen müssen, wenn das Objekt an einer Stelle erscheint, an der ein Statement erwartet wird, um nicht mit einem Block-Statement verwechselt zu werden.)

Objekt-Initializer sind Ausdrücke, und jeder Objekt-Initializer führt dazu, dass ein neues Objekt erstellt wird, wann immer das Statement, in dem es erscheint, ausgeführt wird. Identische Objekt-Initializer erstellen verschiedene Objekte, die nicht als gleichwertig verglichen werden können.

Die folgende Anweisung erstellt ein Objekt und weist es der Variablen `x` zu, wenn und nur wenn der Ausdruck `cond` wahr ist:

```js
let x;
if (cond) {
  x = { greeting: "hi there" };
}
```

Das folgende Beispiel erstellt `myHonda` mit drei Eigenschaften. Beachten Sie, dass die Eigenschaft `engine` auch ein Objekt mit eigenen Eigenschaften ist.

```js
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
```

Mit Initializern erstellte Objekte werden _plain objects_ genannt, weil sie Instanzen von {{jsxref("Object")}}, aber nicht von einem anderen Objekttyp sind. Einige Objekttypen haben spezielle Initializer-Syntaxen — zum Beispiel [Array-Initializer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [Regex-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwendung einer Konstrukturfunktion

Alternativ können Sie ein Objekt in diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstrukturfunktion schreiben. Es gibt eine starke Konvention, aus gutem Grund, einen Anfangsbuchstaben in Großbuchstaben zu verwenden.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, die seinen Namen, seine Eigenschaften und seine Methoden angibt. Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und dass er Eigenschaften für Marke, Modell und Baujahr hat. Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie die Verwendung von `this`, um Werte den Eigenschaften des Objekts basierend auf den an die Funktion übergebenen Werten zuzuweisen.

Nun können Sie ein Objekt namens `myCar` folgendermaßen erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Dann ist der Wert von `myCar.make` der String `"Eagle"`, `myCar.model` ist der String `"Talon TSi"`, `myCar.year` ist der Integer `1993`, und so weiter. Die Reihenfolge der Argumente und Parameter sollte dieselbe sein.

Sie können eine beliebige Anzahl von `Car`-Objekten durch Aufrufe von `new` erstellen. Zum Beispiel:

```js
const kenscar = new Car("Nissan", "300ZX", 1992);
const vpgscar = new Car("Mazda", "Miata", 1990);
```

Ein Objekt kann eine Eigenschaft haben, die selbst ein anderes Objekt ist. Beispielsweise nehmen wir an, Sie definieren ein Objekt namens `Person` wie folgt:

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

Dann können Sie die Definition von `Car` um eine `owner`-Eigenschaft ändern, die ein `Person`-Objekt übernimmt, wie folgt:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Um die neuen Objekte zu instanziieren, verwenden Sie dann das Folgende:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Beachten Sie, dass anstatt ein literales String- oder Integer-Wert zu übergeben, wenn die neuen Objekte erstellt werden, die obigen Anweisungen die Objekte `rand` und `ken` als die Argumente für die Besitzer übergeben. Dann, wenn Sie den Namen des Besitzers von `car2` herausfinden möchten, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können einer zuvor definierten Eigenschaft jederzeit eine neue Eigenschaft hinzufügen. Zum Beispiel fügt die folgende Anweisung

```js
car1.color = "black";
```

fügt eine Eigenschaft `color` zu `car1` hinzu und weist ihr den Wert `"black"` zu. Dies beeinflusst jedoch keine anderen Objekte. Um die neue Eigenschaft zu allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des `Car`-Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes)-Syntax anstelle der `function`-Syntax verwenden, um eine Konstrukturfunktion zu definieren. Weitere Informationen finden Sie im [Klassenguide](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwendung der Object.create() Methode

Objekte können auch mit der {{jsxref("Object.create()")}} Methode erstellt werden. Diese Methode kann sehr nützlich sein, weil sie Ihnen erlaubt, das [Prototype](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)-Objekt für das Objekt, das Sie erstellen möchten, auszuwählen, ohne eine Konstrukturfunktion definieren zu müssen.

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

Ein JavaScript-Objekt hat damit verbundene Eigenschaften. Objekteigenschaften sind im Grunde die gleichen wie Variablen, mit dem Unterschied, dass sie mit Objekten und nicht mit [Scopes](/de/docs/Glossary/Scope) assoziiert sind. Die Eigenschaften eines Objekts definieren die Merkmale des Objekts.

Zum Beispiel erstellt dieses Beispiel ein Objekt namens `myCar`, mit Eigenschaften namens `make`, `model` und `year`, mit ihren Werten gesetzt auf `"Ford"`, `"Mustang"` und `1969`:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind Eigenschaftsnamen groß-/klein-empfindlich. Eigenschaftsnamen können nur Strings oder Symbole sein — alle Schlüssel werden [zu Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, sie sind Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind in Wirklichkeit Eigenschaften mit String-Schlüsseln, die Ganzzahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts durch ihren Eigenschaftsnamen zugreifen. [Property accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) kommen in zwei Syntaxen vor: _Punktnotation_ und _Klammernotation_. Zum Beispiel könnten Sie auf die Eigenschaften des `myCar`-Objekts wie folgt zugreifen:

```js
// Punktnotation
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// Klammernotation
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

Ein Objektschlüssel kann jeder JavaScript-String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich eines leeren Strings. Sie können jedoch Punktnotation nicht verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Zum Beispiel kann auf einen Eigenschaftsnamen, der ein Leerzeichen oder einen Bindestrich enthält, der mit einer Zahl beginnt, oder der in einer Variablen gehalten wird, nur mit Klammernotation zugegriffen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch bestimmt werden sollen, d.h. nicht zur Laufzeit feststellbar sind. Beispiele sind:

```js
const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

// Zusätzliche Eigenschaften zu myObj hinzufügen
myObj.type = "Punkt-Syntax für einen Schlüssel namens type";
myObj["date created"] = "Dieser Schlüssel enthält ein Leerzeichen";
myObj[str] = "Dieser Schlüssel ist in der Variablen str";
myObj[rand] = "Eine Zufallszahl ist der Schlüssel hier";
myObj[anotherObj] = "Dieser Schlüssel ist das Objekt anotherObj";
myObj[""] = "Dieser Schlüssel ist ein leerer String";

console.log(myObj);
// {
//   type: 'Punkt-Syntax für einen Schlüssel namens type',
//   'date created': 'Dieser Schlüssel enthält ein Leerzeichen',
//   myString: 'Dieser Schlüssel ist in der Variablen str',
//   '0.6398914448618778': 'Eine Zufallszahl ist der Schlüssel hier',
//   '[object Object]': 'Dieser Schlüssel ist das Objekt anotherObj',
//   '': 'Dieser Schlüssel ist ein leerer String'
// }
console.log(myObj.myString); // 'Dieser Schlüssel ist in der Variablen str'
```

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder ein String noch ein Symbol ist. Wenn es zu `myObj` hinzugefügt wird, ruft JavaScript die {{jsxref("Object/toString", "toString()")}}-Methode von `anotherObj` auf und verwendet den resultierenden String als neuen Schlüssel.

Sie können auch auf Eigenschaften mit einem String-Wert zugreifen, der in einer Variablen gespeichert ist. Die Variable muss in der Klammernotation übergeben werden. Im obigen Beispiel hielt die Variable `str` `"myString"` und es ist `"myString"`, dass der Eigenschaftsname ist. Daher wird `myObj.str` als undefined zurückgegeben.

```js
str = "myString";
myObj[str] = "Dieser Schlüssel ist in der Variablen str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'Dieser Schlüssel ist in der Variablen str'
console.log(myObj.myString); // 'Dieser Schlüssel ist in der Variablen str'
```

Dies ermöglicht den Zugriff auf jede Eigenschaft, wie zur Laufzeit bestimmt:

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// auf verschiedene Eigenschaften zugreifen, indem der Inhalt der Variablen geändert wird
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

Seien Sie jedoch vorsichtig, wenn Sie eckige Klammern verwenden, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben angegeben werden. Dies kann Ihren Code anfällig für [Objektspritzangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

Nicht vorhandene Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Aufzählen von Eigenschaften

Es gibt drei native Möglichkeiten, Objekteigenschaften aufzulisten/zu durchlaufen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen. Diese Methode durchläuft alle aufzählbaren String-Eigenschaften eines Objekts sowie dessen Prototypenkette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array zurück, das nur die aufzählbaren eigenen String-Eigenschaftsnamen ("Schlüssel") im Objekt `myObj` enthält, jedoch nicht diejenigen in der Prototypenkette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array zurück, das alle eigenen String-Eigenschaftsnamen im Objekt `myObj` unabhängig davon enthält, ob sie aufzählbar sind oder nicht.

Sie können die Klammernotation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um über alle aufzählbaren Eigenschaften eines Objekts zu iterieren. Um zu veranschaulichen, wie dies funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Namen des Objekts als Argumente an die Funktion übergeben:

```js
function showProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    // Object.hasOwn() wird verwendet, um Eigenschaften in der Prototypenkette auszuschließen und nur "eigene Eigenschaften" zu zeigen
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
```

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, jedoch unter Ausschluss jener der Prototypenkette. Daher würde der Funktionsaufruf `showProps(myCar, 'myCar')` folgendes ausgeben:

```plain
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

Das oben Genannte ist gleichwertig zu:

```js
function showProps(obj, objName) {
  let result = "";
  Object.keys(obj).forEach((i) => {
    result += `${objName}.${i} = ${obj[i]}\n`;
  });
  console.log(result);
}
```

Es gibt keinen nativen Weg, um nicht aufzählbare vererbte Eigenschaften aufzulisten. Dies kann jedoch mit der folgenden Funktion erreicht werden:

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

Sie können eine nicht vererbte Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator entfernen. Der folgende Code zeigt, wie eine Eigenschaft entfernt wird.

```js
// Creates a new object, myobj, with two properties, a and b.
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Entfernt die Eigenschaft a, sodass myobj nur noch die Eigenschaft b hat.
delete myobj.a;
console.log("a" in myobj); // false
```

## Vererbung

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das vererbende Objekt wird als Prototyp bezeichnet, und die vererbten Eigenschaften können im `prototype`-Objekt des Konstruktors gefunden werden. Weitere Informationen finden Sie unter [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

### Definieren von Eigenschaften für alle Objekte eines Typs

Sie können eine Eigenschaft zu allen Objekten hinzufügen, die durch einen bestimmten [Konstruktor](#verwendung_einer_konstrukturfunktion) erstellt wurden, indem Sie die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft verwenden. Dadurch wird eine Eigenschaft definiert, die von allen Objekten des angegebenen Typs, anstatt von nur einer Instanz des Objekts, geteilt wird. Der folgende Code fügt allen Objekten des Typs `Car` eine `color`-Eigenschaft hinzu und liest dann den Eigenschaftswert von einer Instanz `car1`.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Definieren von Methoden

Eine _Methode_ ist eine Funktion, die mit einem Objekt assoziiert ist, oder, anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden auf die gleiche Weise definiert wie normale Funktionen, außer dass sie als die Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für mehr Details. Ein Beispiel ist:

```js
objectName.methodName = functionName;

const myObj = {
  myMethod: function (params) {
    // do something
  },

  // das funktioniert auch!
  myOtherMethod(params) {
    // do something else
  },
};
```

wobei `objectName` ein existierendes Objekt, `methodName` der Name ist, den Sie der Methode zuweisen, und `functionName` der Name der Funktion ist.

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

Beachten Sie die Verwendung von `this`, um sich auf das Objekt zu beziehen, dem die Methode gehört. Dann können Sie die `displayCar`-Methode für jedes der Objekte wie folgt aufrufen:

```js
car1.displayCar();
car2.displayCar();
```

### Verwendung von this für Objektverweise

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Zum Beispiel, nehmen wir an, Sie haben zwei Objekte, `Manager` und `Intern`. Jedes Objekt hat seinen eigenen `name`, `age` und `job`. In der Funktion `sayHi()`, beachten Sie die Verwendung von `this.name`. Wenn es zu den beiden Objekten hinzugefügt wird, wird dieselbe Funktion die Nachricht mit dem Namen des jeweiligen Objekts, an das sie angehängt ist, ausdrucken.

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

// sayHi Funktion zu beiden Objekten hinzufügen
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is Karina
Intern.sayHi(); // Hello, my name is Tyrone
```

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der dadurch übergeben wird, dass das Objekt vor der aufgerufenen Funktion angegeben wird. Zum Beispiel, in `Manager.sayHi()`, ist `this` das `Manager`-Objekt, weil `Manager` vor der Funktion `sayHi()` kommt. Wenn Sie von einem anderen Objekt aus auf dieselbe Funktion zugreifen, wird `this` sich ebenso ändern. Wenn Sie andere Methoden verwenden, um die Funktion aufzurufen, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Definieren von Gettern und Settern

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine Funktion, die mit einer Eigenschaft assoziiert ist und den Wert einer bestimmten Eigenschaft erhält. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine Funktion, die mit einer Eigenschaft assoziiert ist und den Wert einer bestimmten Eigenschaft setzt. Gemeinsam können sie den Wert einer Eigenschaft indirekt darstellen.

Getter und Setter können entweder

- innerhalb von [Objekt-Initializern](#verwenden_von_objekt-initializern) definiert werden, oder
- später einem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objekt-Initializern](#verwenden_von_objekt-initializern) werden Getter und Setter wie reguläre [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, jedoch mit den Schlüsselwörtern `get` oder `set` vorangestellt. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter erwartet (den neuen Wert, der gesetzt werden soll). Ein Beispiel:

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
myObj.c = 50; // Ruft die set c(x) Methode auf
console.log(myObj.a); // 25
```

Die Eigenschaften des `myObj` Objekts sind:

- `myObj.a` — eine Zahl
- `myObj.b` — ein Getter, der `myObj.a` plus 1 zurückgibt
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Werts setzt, den `myObj.c` gesetzt wird

Getter und Setter können auch jederzeit nach der Erstellung mit der {{jsxref("Object.defineProperties()")}}-Methode zu einem Objekt hinzugefügt werden. Der erste Parameter dieser Methode ist das Objekt, auf dem Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Getter- oder Setternamen sind und dessen Eigenschaftswerte Objekte zum Definieren der Getter- oder Settermethoden sind. Hier ist ein Beispiel, das den gleichen Getter und Setter definiert, die im vorherigen Beispiel verwendet wurden:

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

myObj.c = 10; // Führt den Setter aus, der 10 / 2 (5) der Eigenschaft 'a' zuweist
console.log(myObj.b); // Führt den Getter aus, der a + 1 oder 6 ergibt
```

Welche der beiden Formen gewählt wird, hängt von Ihrem Programmierstil und der Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie Getter und Setter wahrscheinlich durch den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch später Getter und Setter hinzufügen müssen — vielleicht, weil Sie das bestimmte Objekt nicht geschrieben haben —, dann ist die zweite Form die einzige mögliche Form. Die zweite Form stellt die dynamische Natur von JavaScript besser dar, kann den Code jedoch schwer lesbar und verständlich machen.

## Vergleichen von Objekten

In JavaScript sind Objekte ein Referenztyp. Zwei unterschiedliche Objekte sind nie gleich, auch wenn sie dieselben Eigenschaften haben. Nur das Vergleichen derselben Objektreferenz mit sich selbst ergibt true.

```js
// Zwei Variablen, zwei unterschiedliche Objekte mit den gleichen Eigenschaften
const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

fruit == fruitbear; // ergibt false
fruit === fruitbear; // ergibt false
```

```js
// Zwei Variablen, ein einzelnes Objekt
const fruit = { name: "apple" };
const fruitbear = fruit; // Zuweisung der Referenz des fruit Objekts an fruitbear

// Hier beziehen sich fruit und fruitbear auf dasselbe Objekt
fruit == fruitbear; // ergibt true
fruit === fruitbear; // ergibt true

fruit.name = "grape";
console.log(fruitbear); // { name: "grape" }; nicht { name: "apple" }
```

Für weitere Informationen über Vergleichsoperatoren sehen Sie sich die [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) an.

## Siehe auch

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
