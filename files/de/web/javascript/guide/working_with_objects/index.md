---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: 59433be3814da9b599782af543eabccab071c81e
---

{{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript basiert auf einem objektorientierten Paradigma. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}, und eine Eigenschaft ist eine Zuordnung zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in diesem Fall wird die Eigenschaft als {{Glossary("Method", "Methode")}} bezeichnet.

Objekte in JavaScript können, ebenso wie in vielen anderen Programmiersprachen, mit Objekten im realen Leben verglichen werden. In JavaScript ist ein Objekt eine eigenständige Entität mit Eigenschaften und Typ. Vergleichen Sie es zum Beispiel mit einer Tasse. Eine Tasse ist ein Objekt mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, ein Gewicht, ein Material, aus dem sie hergestellt ist, usw. Auf dieselbe Weise können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Zusätzlich zu Objekten, die im Browser vordefiniert sind, können Sie Ihre eigenen Objekte definieren. Dieses Kapitel beschreibt, wie man Objekte, Eigenschaften und Methoden verwendet und wie man eigene Objekte erstellt.

## Neue Objekte erstellen

Sie können ein Objekt mit einem [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktorfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new` Operator aufrufen.

### Verwenden von Objektinitialisierern

Objektinitialisierer werden auch als _Objektliterale_ bezeichnet. "Objektinitialisierer" ist konsistent mit der in C++ verwendeten Terminologie.

Die Syntax für ein Objekt mit einem Objektinitialisierer ist:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor dem Doppelpunkt ist entweder ein Bezeichner, eine Zahlenliterale oder eine Stringliterale, und jeder `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenschaftsname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern gesetzt werden. Die Referenz zum [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variablen `obj` zugewiesen — dies ist optional. Wenn Sie auf dieses Objekt an keiner anderen Stelle Bezug nehmen müssen, müssen Sie es nicht einer Variablen zuweisen. (Beachten Sie, dass Sie das Objektliteral möglicherweise in Klammern setzen müssen, wenn das Objekt an einer Stelle erscheint, an der ein Statement erwartet wird, um nicht mit einem Block-Statement verwechselt zu werden.)

Objektinitialisierer sind Ausdrücke, und jeder Objektinitialisierer führt zu einem neuen Objekt, das immer dann erstellt wird, wenn das Statement, in dem es erscheint, ausgeführt wird. Identische Objektinitialisierer erstellen unterschiedliche Objekte, die nicht als gleich angesehen werden.

Das folgende Statement erstellt ein Objekt und weist es der Variablen `x` zu, wenn und nur wenn der Ausdruck `cond` wahr ist:

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

Objekte, die mit Initialisierern erstellt werden, werden _einfache Objekte_ genannt, da sie Instanzen von {{jsxref("Object")}}, aber nicht von einem anderen Objekttyp sind. Einige Objekttypen haben spezielle Initialisierer-Syntaxen — zum Beispiel [Array-Initialisierer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [Regex-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwenden einer Konstruktorfunktion

Alternativ können Sie ein Objekt in diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktorfunktion schreiben. Es ist eine starke Konvention, aus gutem Grund, einen Großbuchstaben als Anfangsbuchstaben zu verwenden.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, die seinen Namen, seine Eigenschaften und seine Methoden angibt. Zum Beispiel, nehmen wir an, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und Sie möchten, dass er Eigenschaften für Marke, Modell und Baujahr hat. Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie die Verwendung von `this`, um Werte den Eigenschaften des Objekts zuzuweisen, basierend auf den an die Funktion übergebenen Werten.

Nun können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Dieses Statement erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Dann ist der Wert von `myCar.make` der String `"Eagle"`, `myCar.model` ist der String `"Talon TSi"`, `myCar.year` ist die Zahl `1993`, und so weiter. Die Reihenfolge der Argumente und Parameter sollte dieselbe sein.

Sie können beliebig viele `Car` Objekte durch Aufrufe an `new` erstellen. Zum Beispiel,

```js
const randCar = new Car("Nissan", "300ZX", 1992);
const kenCar = new Car("Mazda", "Miata", 1990);
```

Ein Objekt kann eine Eigenschaft haben, die selbst ein weiteres Objekt ist. Zum Beispiel, nehmen wir an, Sie definieren ein Objekt namens `Person` wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

und dann instanziieren Sie zwei neue `Person` Objekte wie folgt:

```js
const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Dann können Sie die Definition von `Car` um eine `owner` Eigenschaft erweitern, die ein `Person` Objekt aufnimmt, wie folgt:

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

Beachten Sie, dass anstelle eines literalen Strings oder eines Zahlenwerts beim Erstellen der neuen Objekte die Objekte `rand` und `ken` als Argumente für die Besitzer übergeben werden. Wenn Sie dann den Namen des Besitzers von `car2` herausfinden möchten, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können immer eine Eigenschaft zu einem zuvor definierten Objekt hinzufügen. Zum Beispiel, das Statement

```js
car1.color = "black";
```

fügt eine Eigenschaft `color` zu `car1` hinzu und weist ihr den Wert `"black"` zu. Dies beeinflusst jedoch keine anderen Objekte. Um die neue Eigenschaft zu allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des `Car` Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes) Syntax anstelle der `function` Syntax verwenden, um eine Konstruktorfunktion zu definieren. Für mehr Informationen, siehe den [Klassenleitfaden](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwenden der Methode Object.create()

Objekte können auch mithilfe der Methode {{jsxref("Object.create()")}} erstellt werden. Diese Methode kann sehr nützlich sein, da sie es Ihnen ermöglicht, das [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Objekt für das Objekt, das Sie erstellen möchten, auszuwählen, ohne eine Konstruktorfunktion definieren zu müssen.

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

Ein JavaScript-Objekt hat Eigenschaften, die mit ihm verbunden sind. Objekteigenschaften sind im Wesentlichen dasselbe wie Variablen, außer dass sie mit Objekten und nicht mit {{Glossary("Scope", "Scopes")}} assoziiert sind. Die Eigenschaften eines Objekts definieren dessen Merkmale.

Zum Beispiel, dieses Beispiel erstellt ein Objekt namens `myCar` mit Eigenschaften namens `make`, `model` und `year`, deren Werte auf `"Ford"`, `"Mustang"` und `1969` gesetzt sind:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind Eigenschaftsnamen case-sensitiv. Eigenschaftsnamen können nur Strings oder Symbole sein — alle Schlüssel werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, sie sind Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind in der Tat Eigenschaften mit Stringschlüsseln, die Ganzzahlen enthalten.

### Auf Eigenschaften zugreifen

Sie können auf eine Eigenschaft eines Objekts über dessen Eigenschaftsnamen zugreifen. [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt es in zwei Syntaxen: _Punktnotation_ und _Klammernnotation_. Zum Beispiel, Sie könnten auf die Eigenschaften des `myCar` Objekts wie folgt zugreifen:

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

Ein Objekt-Eigenschaftsname kann jedes JavaScript-String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich eines leeren Strings. Sie können jedoch Punktnotation nicht verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Zum Beispiel, ein Eigenschaftsname, der ein Leerzeichen oder einen Bindestrich hat, der mit einer Zahl beginnt oder der in einer Variablen gehalten wird, kann nur mit der Klammernnotation zugegriffen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch bestimmt werden sollen, d.h. bis zur Laufzeit nicht feststellbar sind. Beispiele sind folgendermaßen:

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

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder ein String noch ein Symbol ist. Wenn es zum `myObj` hinzugefügt wird, ruft JavaScript die Methode {{jsxref("Object/toString", "toString()")}} von `anotherObj` auf und verwendet den resultierenden String als neuen Schlüssel.

Sie können auch auf Eigenschaften mit einem in einer Variablen gespeicherten Stringwert zugreifen. Die Variable muss in der Klammernnotation übergeben werden. Im obigen Beispiel hielt die Variable `str` den Wert `"myString"` und `"myString"` ist der Eigenschaftsname. Folglich gibt `myObj.str` undefined zurück.

```js
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'This key is in variable str'
console.log(myObj.myString); // 'This key is in variable str'
```

Dies ermöglicht den Zugriff auf jede Eigenschaft, wie zur Laufzeit bestimmt:

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

Beachten Sie jedoch die Verwendung von eckigen Klammern, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben gegeben sind. Dies kann Ihren Code anfällig für [Object-Injection-Angriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

Nicht vorhandene Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Enumerieren von Eigenschaften

Es gibt drei native Wege, um Objekteigenschaften aufzulisten/zu durchlaufen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen. Diese Methode durchläuft alle aufzählbaren Stringeigenschaften eines Objekts sowie seine Prototypkette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den aufzählbaren eigenen String-Eigenschaftsnamen ("Schlüssel") im Objekt `myObj` zurück, aber nicht denen in der Prototypkette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array zurück, das alle eigenen String-Eigenschaftsnamen im Objekt `myObj` enthält, unabhängig davon, ob sie aufzählbar sind oder nicht.

Sie können die Klammernnotation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um alle aufzählbaren Eigenschaften eines Objekts zu durchlaufen. Um zu veranschaulichen, wie dies funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Namen des Objekts als Argumente an die Funktion übergeben:

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

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, jedoch ohne die der Prototypkette. Also würde der Funktionsaufruf `showProps(myCar, 'myCar')` Folgendes ausgeben:

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

Es gibt keinen nativen Weg, um alle vererbten Eigenschaften, einschließlich nicht aufzählbarer, aufzulisten. Jedoch kann dies mit der folgenden Funktion erreicht werden:

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

Für mehr Informationen, siehe [Enumerabilität und Eigentümer von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

### Löschen von Eigenschaften

Sie können eine nicht vererbte Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator entfernen. Der folgende Code zeigt, wie eine Eigenschaft entfernt wird.

```js
// Creates a new object, myObj, with two properties, a and b.
const myObj = { a: 5, b: 12 };

// Removes the a property, leaving myObj with only the b property.
delete myObj.a;
console.log("a" in myObj); // false
```

## Vererbung

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das Objekt, von dem geerbt wird, ist als Prototyp bekannt, und die geerbten Eigenschaften finden sich im `prototype` Objekt des Konstruktors. Sehen Sie [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für mehr Informationen.

### Eigenschaften für alle Objekte eines Typs definieren

Sie können eine Eigenschaft zu allen Objekten hinzufügen, die durch einen bestimmten [Konstruktor](#verwenden_einer_konstruktorfunktion) erstellt wurden, indem Sie die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft verwenden. Dies definiert eine Eigenschaft, die von allen Objekten des angegebenen Typs geteilt wird, anstatt nur von einer Instanz des Objekts. Der folgende Code fügt allen Objekten des Typs `Car` eine `color` Eigenschaft hinzu und liest dann den Eigenschaftswert von einer Instanz `car1`.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Methoden definieren

Eine _Methode_ ist eine Funktion, die mit einem Objekt assoziiert ist, oder anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden wie normale Funktionen definiert, außer dass sie als Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für mehr Details. Ein Beispiel ist:

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

wobei `objectName` ein bestehendes Objekt ist, `methodName` der Name ist, den Sie der Methode zuweisen, und `functionName` der Name der Funktion ist.

Sie können die Methode im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden typischerweise am `prototype` Objekt des Konstruktors definiert, sodass alle Objekte desselben Typs dieselbe Methode teilen. Zum Beispiel können Sie eine Funktion definieren, die die Eigenschaften der zuvor definierten `Car` Objekte formatiert und anzeigt.

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

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Stellen Sie sich vor, Sie haben zwei Objekte, `manager` und `intern`. Jedes Objekt hat seinen eigenen `name`, `age` und `job`. In der Funktion `sayHi()` beachten Sie die Verwendung von `this.name`. Wenn die Funktion zu den zwei Objekten hinzugefügt wird, wird dieselbe Funktion die Nachricht mit dem Namen des jeweiligen Objekts drucken, an das sie angehängt ist.

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

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der durch Angabe des Objekts vor die Funktion, die aufgerufen wurde, übergegeben wird. Zum Beispiel, in `manager.sayHi()`, ist `this` das `manager` Objekt, weil `manager` vor der Funktion `sayHi()` steht. Wenn Sie auf dieselbe Funktion von einem anderen Objekt aus zugreifen, wird sich `this` ebenfalls ändern. Wenn Sie andere Methoden verwenden, um die Funktion aufzurufen, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie explizit den Wert von `this` als Argument übergeben.

## Definieren von Gettern und Settern

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine Funktion, die mit einer Eigenschaft verknüpft ist, die den Wert einer bestimmten Eigenschaft abruft. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine Funktion, die mit einer Eigenschaft verknüpft ist, die den Wert einer bestimmten Eigenschaft setzt. Zusammen können sie indirekt den Wert einer Eigenschaft darstellen.

Getter und Setter können entweder innerhalb von [Objektinitialisierern](#verwenden_von_objektinitialisierern) definiert werden, oder später zu einem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objektinitialisierern](#verwenden_von_objektinitialisierern) werden Getter und Setter wie reguläre [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, jedoch mit dem Präfix `get` oder `set`. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter erwartet (den neuen Wert, den sie setzen soll). Zum Beispiel:

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

- `myObj.a` — eine Zahl
- `myObj.b` — ein Getter, der `myObj.a` plus 1 zurückgibt
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Werts setzt, auf den `myObj.c` gesetzt wird

Getter und Setter können auch zu einem Objekt jederzeit nach dessen Erstellung mit der Methode {{jsxref("Object.defineProperties()")}} hinzugefügt werden. Der erste Parameter dieser Methode ist das Objekt, an dem Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Getter- oder Setternamen sind und dessen Eigenschaftswerte Objekte für die Definition der Getter- oder Setterfunktionen sind. Hier ist ein Beispiel, das denselben Getter und Setter wie im vorherigen Beispiel definiert:

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

Welche der beiden Formen Sie wählen, hängt von Ihrem Programmierstil und der Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter durch den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch später Getter und Setter hinzufügen müssen — vielleicht weil Sie das spezielle Objekt nicht geschrieben haben — dann ist die zweite Form die einzige mögliche Form. Die zweite Form repräsentiert die dynamische Natur von JavaScript besser, kann aber den Code schwer lesbar und verständlich machen.

## Objekte vergleichen

In JavaScript sind Objekte ein Referenztyp. Zwei unterschiedliche Objekte sind niemals gleich, selbst wenn sie dieselben Eigenschaften haben. Nur der Vergleich des gleichen Objektreferenz mit sich selbst ergibt true.

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

Für mehr Informationen über Vergleichsoperatoren, siehe [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators).

## Siehe auch

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
