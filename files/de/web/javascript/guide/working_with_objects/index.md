---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: 67bcc0fe90eda964606523670f8688dc1d4a838c
---

{{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript basiert auf einem objektbasierten Paradigma. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}, und eine Eigenschaft ist eine Assoziation zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in diesem Fall wird die Eigenschaft als {{Glossary("Method", "Methode")}} bezeichnet.

Objekte in JavaScript können, wie in vielen anderen Programmiersprachen, mit Objekten im realen Leben verglichen werden. In JavaScript ist ein Objekt eine eigenständige Einheit mit Eigenschaften und einem Typ. Zum Beispiel kann man es mit einer Tasse vergleichen. Eine Tasse ist ein Objekt mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, Gewicht, ein Material, aus dem sie besteht, usw. In gleicher Weise können JavaScript-Objekte Eigenschaften haben, die ihre Charakteristika definieren.

Neben den vordefinierten Objekten im Browser können Sie Ihre eigenen Objekte definieren. Dieses Kapitel beschreibt, wie man Objekte, Eigenschaften und Methoden verwendet und wie man eigene Objekte erstellt.

## Neue Objekte erstellen

Sie können ein Objekt mit einem [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktionsfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new`-Operator aufrufen.

### Verwendung von Objekt-Initialisierern

Objekt-Initialisierer werden auch _Objekt-Literale_ genannt. Der Begriff "Objekt-Initializer" ist konsistent mit der Terminologie, die in C++ verwendet wird.

Die Syntax für ein Objekt, das mit einem Objekt-Initializer erstellt wird, lautet:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor einem Doppelpunkt ist ein Bezeichner (entweder ein Name, eine Zahl oder ein Stringliterale), und jeder `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugeordnet wird. Der Eigenschaftsname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern gesetzt werden. Die Referenz zum [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variablen `obj` zugewiesen - das ist optional. Wenn Sie dieses Objekt nicht an anderer Stelle benötigen, müssen Sie es nicht einer Variablen zuweisen. (Beachten Sie, dass Sie das Objekt-Literal möglicherweise in Klammern setzen müssen, wenn das Objekt dort erscheint, wo eine Anweisung erwartet wird, um nicht mit einer Blockanweisung verwechselt zu werden.)

Objekt-Initialisierer sind Ausdrücke, und jeder Objekt-Initializer führt zu einem neuen Objekt, das jedes Mal erstellt wird, wenn die Anweisung, in der es erscheint, ausgeführt wird. Identische Objekt-Initialisierer erstellen unterschiedliche Objekte, die nicht als gleich verglichen werden.

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

Mit Initialisierern erstellte Objekte werden _einfache Objekte_ genannt, weil sie Instanzen von {{jsxref("Object")}} sind, aber keinem anderen Objekttyp angehören. Einige Objekttypen haben spezielle Initialisierungssyntaxen - z.B. [Array-Initializer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [Regex-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwendung einer Konstruktionsfunktion

Alternativ können Sie ein Objekt in diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktionsfunktion schreiben. Es gibt eine starke Konvention, aus gutem Grund, Großbuchstaben zu verwenden.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, die seinen Namen, seine Eigenschaften und Methoden spezifiziert. Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und Sie möchten, dass er Eigenschaften für Marke, Modell und Jahr hat. Dafür würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie die Verwendung von `this`, um Werte den Eigenschaften des Objekts basierend auf den an die Funktion übergebenen Werten zuzuweisen.

Jetzt können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Dann ist der Wert von `myCar.make` der String `"Eagle"`, `myCar.model` der String `"Talon TSi"`, `myCar.year` ist der Integer `1993` und so weiter. Die Reihenfolge der Argumente und Parameter sollte gleich sein.

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

Um die neuen Objekte zu instanziieren, verwenden Sie dann folgendes:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Beachten Sie, dass anstelle der Übergabe eines literalen Strings oder integerwertigen Werts bei der Erstellung der neuen Objekte in den obigen Anweisungen die Objekte `rand` und `ken` als Argumente für die Besitzer übergeben werden. Wenn Sie dann den Namen des Besitzers von `car2` herausfinden möchten, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können einem zuvor definierten Objekt immer eine Eigenschaft hinzufügen. Beispielsweise die Anweisung

```js
car1.color = "black";
```

fügt `car1` eine Eigenschaft `color` hinzu und weist ihr den Wert `"black"` zu. Dies beeinflusst jedoch keine anderen Objekte. Um die neue Eigenschaft allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des `Car`-Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes)-Syntax anstelle der `function`-Syntax zur Definition einer Konstruktionsfunktion verwenden. Weitere Informationen finden Sie im [Klassen-Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwendung der Object.create()-Methode

Objekte können auch mit der {{jsxref("Object.create()")}}-Methode erstellt werden. Diese Methode kann sehr nützlich sein, weil sie Ihnen ermöglicht, das [Prototypenobjekt](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für das Objekt, das Sie erstellen möchten, auszuwählen, ohne eine Konstruktionsfunktion definieren zu müssen.

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

Ein JavaScript-Objekt hat damit verbundene Eigenschaften. Objekteigenschaften sind im Grunde dasselbe wie Variablen, außer dass sie mit Objekten und nicht mit {{Glossary("Scope", "Scopes")}} verknüpft sind. Die Eigenschaften eines Objekts definieren die Merkmale des Objekts.

Zum Beispiel erstellt dieses Beispiel ein Objekt namens `myCar` mit den Eigenschaften `make`, `model` und `year`, wobei deren Werte auf `"Ford"`, `"Mustang"` und `1969` gesetzt sind:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind Eigenschaftsnamen groß-/klein-schreibungssensitiv. Eigenschaftsnamen können nur Strings oder Symbole sein - alle Schlüssel werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, sie sind Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind in Wirklichkeit Eigenschaften mit String-Schlüsseln, die ganze Zahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts anhand seines Eigenschaftsnamen zugreifen. [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt es in zwei Syntaxen: _Punktnotation_ und _Klammernotation_. Zum Beispiel könnten Sie auf die Eigenschaften des `myCar`-Objekts wie folgt zugreifen:

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

Ein Objekt-Eigenschaftsname kann jede JavaScript-Zeichenfolge oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich einer leeren Zeichenfolge. Sie können jedoch keine Punktnotation verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Zum Beispiel kann ein Eigenschaftsname, der ein Leerzeichen oder einen Bindestrich enthält, mit einer Zahl beginnt oder in einer Variablen gespeichert ist, nur mit der Klammernotation zugegriffen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch bestimmt werden sollen, also nicht zur Laufzeit bestimmbar sind. Beispiele sind:

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

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder ein String noch ein Symbol ist. Wenn es dem `myObj` hinzugefügt wird, ruft JavaScript die {{jsxref("Object/toString", "toString()")}}-Methode von `anotherObj` auf und verwendet den resultierenden String als neuen Schlüssel.

Sie können auch auf Eigenschaften mit einem in einer Variablen gespeicherten Stringwert zugreifen. Die Variable muss in der Klammernotation übergeben werden. Im oben erwähnten Beispiel hielt die Variable `str` den Wert `"myString"` und es ist `"myString"`, das der Eigenschaftsname ist. Daher wird `myObj.str` als undefined zurückgegeben.

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

Seien Sie jedoch vorsichtig, wenn Sie eckige Klammern verwenden, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben angegeben werden. Dadurch könnte Ihr Code anfällig für [Objekt-Injektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) werden.

Nicht vorhandene Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Aufzählen von Eigenschaften

Es gibt drei native Methoden, um Objekt-Eigenschaften aufzulisten/zu durchlaufen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen. Diese Methode durchläuft alle aufzählbaren Zeichenfolge-Eigenschaften eines Objekts sowie dessen Prototypen-Kette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den aufzählbaren eigenen Zeichenfolge-Eigenschaftsnamen ("Schlüsseln") im Objekt `myObj` zurück, aber nicht diejenigen in der Prototypen-Kette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array zurück, das alle eigenen Zeichenfolge-Eigenschaftsnamen im Objekt `myObj` enthält, unabhängig davon, ob sie aufzählbar sind oder nicht.

Sie können die Klammernotation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um alle aufzählbaren Eigenschaften eines Objekts zu durchlaufen. Um zu verdeutlichen, wie dies funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Namen des Objekts als Argumente zur Funktion übergeben:

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

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, jedoch mit Ausnahme jener der Prototypen-Kette. So würde der Funktionsaufruf `showProps(myCar, 'myCar')` folgendes ausdrucken:

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

Es gibt keine native Möglichkeit, alle geerbten Eigenschaften, einschließlich nicht-aufzählbarer, aufzulisten. Dies kann jedoch mit der folgenden Funktion erreicht werden:

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

Weitere Informationen finden Sie unter [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

### Löschen von Eigenschaften

Sie können eine nicht-geerbte Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator entfernen. Der folgende Code zeigt, wie eine Eigenschaft entfernt werden kann.

```js
// Creates a new object, myObj, with two properties, a and b.
const myObj = { a: 5, b: 12 };

// Removes the a property, leaving myObj with only the b property.
delete myObj.a;
console.log("a" in myObj); // false
```

## Vererbung

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das Objekt, von dem geerbt wird, ist als Prototyp bekannt, und die geerbten Eigenschaften können im `prototype`-Objekt des Konstruktors gefunden werden. Siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für weitere Informationen.

### Eigenschaften für alle Objekte eines Typs definieren

Sie können mit der [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft einer bestimmten [Konstruktionsfunktion](#verwendung_einer_konstruktionsfunktion) eine Eigenschaft zu allen durch diese Funktion erstellten Objekten hinzufügen. Dies definiert eine Eigenschaft, die von allen Objekten des angegebenen Typs gemeinsam genutzt wird, anstatt nur von einer Instanz des Objekts. Der folgende Code fügt allen Objekten vom Typ `Car` eine `color`-Eigenschaft hinzu und liest dann den Eigenschaftswert aus einer Instanz `car1`:

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Methoden definieren

Eine _Methode_ ist eine mit einem Objekt assoziierte Funktion oder anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden auf die gleiche Weise definiert, wie normale Funktionen definiert werden, außer dass sie als Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für weitere Details. Ein Beispiel ist:

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

Sie können die Methode dann im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden typischerweise auf dem `prototype`-Objekt des Konstruktors definiert, sodass alle Objekte desselben Typs die gleiche Methode teilen. Zum Beispiel können Sie eine Funktion definieren, die die Eigenschaften der vorher definierten `Car`-Objekte formatiert und anzeigt.

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

### Verwendung von this für Objekt-Referenzen

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das innerhalb einer Methode verwendet werden kann, um auf das aktuelle Objekt zu verweisen. Zum Beispiel, nehmen wir an, Sie haben 2 Objekte, `manager` und `intern`. Jedes Objekt hat einen eigenen `name`, `age` und `job`. In der Funktion `sayHi()` beachten Sie die Verwendung von `this.name`. Wenn die Funktion den 2 Objekten hinzugefügt wird, wird dieselbe Funktion die Nachricht mit dem Namen des jeweiligen Objekts ausgeben, dem sie zugeordnet ist.

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

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der durch die Angabe des Objekts vor der aufgerufenen Funktion übergeben wird. Beispielsweise ist bei `manager.sayHi()` `this` das `manager`-Objekt, weil `manager` vor der Funktion `sayHi()` steht. Wenn Sie auf dieselbe Funktion von einem anderen Objekt aus zugreifen, ändert sich `this` ebenfalls. Wenn Sie andere Methoden verwenden, um die Funktion aufzurufen, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Definieren von Gettern und Settern

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine mit einer Eigenschaft verknüpfte Funktion, die den Wert einer bestimmten Eigenschaft erhält. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine mit einer Eigenschaft verknüpfte Funktion, die den Wert einer bestimmten Eigenschaft setzt. Zusammen können sie den Wert einer Eigenschaft indirekt darstellen.

Getter und Setter können entweder

- innerhalb von [Objekt-Initialisierern](#verwendung_von_objekt-initialisierern) definiert werden, oder
- später zu einem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objekt-Initialisierern](#verwendung_von_objekt-initialisierern) werden Getter und Setter wie reguläre [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, jedoch mit den Präfixen `get` oder `set`. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter erwartet (den neuen Wert, der gesetzt werden soll). Beispielsweise:

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
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Wertes setzt, zu dem `myObj.c` gesetzt wird

Getter und Setter können auch zu einem Objekt jederzeit nach seiner Erstellung mit der {{jsxref("Object.defineProperties()")}}-Methode hinzugefügt werden. Diese Methode nimmt als ersten Parameter das Objekt, in dem Sie den Getter oder Setter definieren möchten, und als zweiten Parameter ein Objekt, dessen Eigenschaftsnamen die Namen der Getter oder Setter sind und dessen Eigenschaftswerte Objekte zur Definition der Getter- oder Setter-Funktionen sind. Hier ist ein Beispiel, das denselben Getter und Setter wie im vorherigen Beispiel definiert:

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

Welcher der beiden Formen man wählt, hängt von Ihrem Programmierstil und der vorliegenden Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter durch den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch später Getter und Setter hinzufügen müssen – vielleicht, weil Sie das betreffende Objekt nicht geschrieben haben –, dann ist die zweite Form die einzige mögliche Form. Die zweite Form repräsentiert besser die dynamische Natur von JavaScript, kann jedoch den Code schwer lesbar und verständlich machen.

## Vergleich von Objekten

In JavaScript sind Objekte ein Referenztyp. Zwei unterschiedliche Objekte sind niemals gleich, selbst wenn sie die gleichen Eigenschaften haben. Nur der Vergleich mit dem eigenen Objektverweis ergibt true.

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

Weitere Informationen über Vergleichsoperatoren finden Sie bei [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators).

## Siehe auch

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
