---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript ist nach einem objektbasierten Paradigma entworfen. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}, und eine Eigenschaft ist eine Assoziation zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in diesem Fall wird die Eigenschaft als {{Glossary("Method", "Methode")}} bezeichnet.

Objekte in JavaScript können, wie in vielen anderen Programmiersprachen, mit Objekten im realen Leben verglichen werden. In JavaScript ist ein Objekt ein eigenständiges Entität mit Eigenschaften und Typ. Vergleichen Sie es mit einer Tasse, zum Beispiel. Eine Tasse ist ein Objekt mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, Gewicht, ein Material, aus dem es besteht usw. Auf die gleiche Weise können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Zusätzlich zu den im Browser vordefinierten Objekten können Sie Ihre eigenen Objekte definieren. Dieses Kapitel beschreibt, wie man Objekte, Eigenschaften und Methoden verwendet und wie man eigene Objekte erstellt.

## Erstellen neuer Objekte

Sie können ein Objekt mit einem [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktorfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new`-Operator aufrufen.

### Verwendung von Objekt-Initialisierern

Objekt-Initialisierer werden auch _Objekt-Literale_ genannt. "Objekt-Initialisierer" ist konsistent mit der Terminologie, die von C++ verwendet wird.

Die Syntax für ein Objekt mit einem Objekt-Initialisierer ist:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor den Doppelpunkten ist ein Bezeichner (entweder ein Name, eine Zahl oder ein Zeichenfolgenliteral), und jeder `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenschaftsname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckige Klammern eingeschlossen werden. Die [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Referenz enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variablen `obj` zugewiesen - dies ist optional. Wenn Sie auf dieses Objekt nicht an anderer Stelle verweisen müssen, brauchen Sie es nicht einer Variablen zuzuweisen. (Beachten Sie, dass Sie das Objektliteral in Klammern einschließen müssen, wenn das Objekt an einer Stelle erscheint, an der eine Anweisung erwartet wird, damit das Literal nicht mit einer Blockanweisung verwechselt wird.)

Objekt-Initialisierer sind Ausdrücke, und jeder Objekt-Initialisierer führt jedes Mal, wenn die Anweisung, in der er erscheint, ausgeführt wird, zu einem neuen Objekt. Identische Objekt-Initialisierer erzeugen unterschiedliche Objekte, die im Vergleich zueinander nicht gleich sind.

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

Objekte, die mit Initialisierern erstellt wurden, werden als _einfache Objekte_ bezeichnet, da sie Instanzen von {{jsxref("Object")}} sind, jedoch keinem anderen Objekttyp angehören. Einige Objekttypen haben besondere Initialisierer-Syntaxen – zum Beispiel [Array-Initialisierer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [Regex-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwendung einer Konstruktorfunktion

Alternativ können Sie ein Objekt mit diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktorfunktion schreiben. Es gibt eine starke Konvention, aus gutem Grund, den Anfangsbuchstaben groß zu schreiben.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, die seinen Namen, seine Eigenschaften und Methoden angibt. Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und Sie möchten, dass er Eigenschaften für Marke, Modell und Jahr hat. Dafür würden Sie die folgende Funktion schreiben:

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

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Der Wert von `myCar.make` ist dann der String `"Eagle"`, `myCar.model` ist der String `"Talon TSi"`, `myCar.year` ist der Integer `1993` usw. Die Reihenfolge der Argumente und Parameter sollte die gleiche sein.

Sie können beliebig viele `Car`-Objekte durch Aufrufe von `new` erstellen. Zum Beispiel,

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

Dann können Sie die Definition von `Car` um eine `owner`-Eigenschaft erweitern, die ein `Person`-Objekt übernimmt, wie folgt:

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

Beachten Sie, dass anstelle eines Literal-Strings oder Integer-Wertes beim Erstellen der neuen Objekte die Objekte `rand` und `ken` als Argumente für die Eigentümer übergeben werden. Wenn Sie dann den Namen des Eigentümers von `car2` herausfinden möchten, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können jederzeit eine Eigenschaft zu einem zuvor definierten Objekt hinzufügen. Zum Beispiel fügt die Anweisung

```js
car1.color = "black";
```

eine Eigenschaft `color` zu `car1` hinzu, und weist ihr den Wert `"black"` zu. Dies wirkt sich jedoch nicht auf andere Objekte aus. Um die neue Eigenschaft zu allen Objekten desselben Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des `Car`-Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes)-Syntax anstelle der `function`-Syntax verwenden, um eine Konstruktorfunktion zu definieren. Weitere Informationen finden Sie im [Klassenguide](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwendung der Object.create()-Methode

Objekte können auch mit der {{jsxref("Object.create()")}}-Methode erstellt werden. Diese Methode kann sehr nützlich sein, da sie es Ihnen ermöglicht, das [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)-Objekt für das zu erstellende Objekt auszuwählen, ohne eine Konstruktorfunktion definieren zu müssen.

```js
// Animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};

// Create new animal type called `animal`
const animal = Object.create(Animal);
animal.displayType(); // Logs: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes
```

## Objekte und Eigenschaften

Ein JavaScript-Objekt hat Eigenschaften, die mit ihm verbunden sind. Objekteigenschaften sind im Grunde dasselbe wie Variablen, außer dass sie mit Objekten und nicht mit {{Glossary("Scope", "Gültigkeitsbereichen")}} verbunden sind. Die Eigenschaften eines Objekts definieren die Merkmale des Objekts.

Dieses Beispiel erstellt beispielsweise ein Objekt namens `myCar` mit den Eigenschaften `make`, `model` und `year`, deren Werte auf `"Ford"`, `"Mustang"` und `1969` gesetzt sind:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind Eigenschaftsnamen groß- und kleinschreibungsempfindlich. Eigenschaftsnamen können nur Strings oder Symbole sein – alle Schlüssel werden zu [Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, sie sind Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind tatsächlich Eigenschaften mit String-Schlüsseln, die ganze Zahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts durch ihren Eigenschaftsnamen zugreifen. [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt es in zwei Syntaxen: _Punktnotation_ und _Klammernotation_. Zum Beispiel können Sie auf die Eigenschaften des `myCar`-Objekts wie folgt zugreifen:

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

Ein Objekt-Eigenschaftsname kann jeder JavaScript-String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich eines leeren Strings. Sie können jedoch keine Punktnotation verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Eine Eigenschaft, die z.B. ein Leerzeichen oder einen Bindestrich enthält, die mit einer Zahl beginnt oder in einer Variable gehalten wird, kann nur mit der Klammernotation angesprochen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch bestimmt werden müssen, d.h. nicht zur Laufzeit ermittelbar sind. Beispiele sind wie folgt:

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

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder ein String noch ein Symbol ist. Wenn es `myObj` hinzugefügt wird, ruft JavaScript die Methode {{jsxref("Object/toString", "toString()")}} von `anotherObj` auf und verwendet den resultierenden String als neuen Schlüssel.

Sie können auch auf Eigenschaften mit einem String-Wert zugreifen, der in einer Variable gespeichert ist. Die Variable muss in der Klammernotation übergeben werden. Im obigen Beispiel hielt die Variable `str` `"myString"` und es ist `"myString"`, das der Eigenschaftsname ist. Daher wird `myObj.str` als undefined zurückgegeben.

```js
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'This key is in variable str'
console.log(myObj.myString); // 'This key is in variable str'
```

Dies erlaubt den Zugriff auf alle Eigenschaften, die zur Laufzeit bestimmt werden:

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

Jedoch sollten Sie vorsichtig sein, wenn Sie bei externen Eingaben auf Eigenschaftsnamen über eckige Klammern zugreifen. Dies kann Ihren Code anfällig für [Objekt-Injektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

Nicht vorhandene Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Aufzählen von Eigenschaften

Es gibt drei native Wege, Objekteigenschaften aufzulisten/zu durchlaufen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen. Diese Methode durchläuft alle aufzählbaren String-Eigenschaften eines Objekts sowie dessen Prototypenkette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den aufzählbaren eigenen String-Eigenschaftsnamen ("Schlüssel") im Objekt `myObj` zurück, aber nicht die in der Prototypenkette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array mit allen eigenen String-Eigenschaftsnamen im Objekt `myObj` zurück, unabhängig davon, ob sie aufzählbar sind oder nicht.

Sie können die Klammernotation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um alle aufzählbaren Eigenschaften eines Objekts zu durchlaufen. Um zu illustrieren, wie dies funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Namen des Objekts als Argumente der Funktion übergeben:

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

Der Begriff "eigene Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, jedoch mit Ausnahme derer, die in der Prototypenkette sind. So würde der Funktionsaufruf `showProps(myCar, 'myCar')` Folgendes ausgeben:

```plain
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

Das obige entspricht:

```js
function showProps(obj, objName) {
  let result = "";
  Object.keys(obj).forEach((i) => {
    result += `${objName}.${i} = ${obj[i]}\n`;
  });
  console.log(result);
}
```

Es gibt keinen nativen Weg, vererbte nicht-auflösbare Eigenschaften aufzulisten. Dies kann jedoch mit der folgenden Funktion erreicht werden:

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

Alle Objekte in JavaScript erben von mindestens einem weiteren Objekt. Das Objekt, von dem geerbt wird, wird als Prototyp bezeichnet, und die geerbten Eigenschaften finden sich im `prototype`-Objekt des Konstruktors. Siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für weitere Informationen.

### Eigenschaften für alle Objekte eines Typs definieren

Sie können einer bestimmten [Konstruktorfunktion](#verwendung_einer_konstruktorfunktion) durch die Verwendung der [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft eine Eigenschaft hinzufügen. Dies definiert eine Eigenschaft, die von allen Objekten des angegebenen Typs geteilt wird, und nicht nur von einer Instanz des Objekts. Der folgende Code fügt allen Objekten des Typs `Car` eine `color`-Eigenschaft hinzu und liest dann den Eigenschaftswert aus einer Instanz `car1`.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Methoden definieren

Eine _Methode_ ist eine Funktion, die mit einem Objekt assoziiert ist, oder anders gesagt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden auf die gleiche Weise definiert, wie normale Funktionen definiert werden, außer dass sie als die Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für weitere Details. Ein Beispiel ist:

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

Sie können dann die Methode im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden üblicherweise am `prototype`-Objekt des Konstruktors definiert, sodass alle Objekte desselben Typs die gleiche Methode teilen. Zum Beispiel können Sie eine Funktion definieren, die die Eigenschaften der zuvor definierten `Car`-Objekte formatiert und anzeigt.

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

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Zum Beispiel, angenommen, Sie haben zwei Objekte, `Manager` und `Intern`. Jedes Objekt hat seinen eigenen `name`, `age` und `job`. In der Funktion `sayHi()`, beachten Sie die Verwendung von `this.name`. Wenn zu den beiden Objekten hinzugefügt, wird dieselbe Funktion die Nachricht mit dem Namen des jeweiligen Objekts, an das es angehängt ist, ausgeben.

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

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der durch Angabe des Objekts vor der Funktion übergeben wird, die aufgerufen wurde. Beispielsweise, in `Manager.sayHi()`, ist `this` das `Manager`-Objekt, da `Manager` vor der Funktion `sayHi()` steht. Wenn Sie von einem anderen Objekt aus auf dieselbe Funktion zugreifen, ändert sich auch `this`. Wenn Sie andere Methoden zum Aufrufen der Funktion verwenden, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Definieren von Getter und Setter

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine Funktion, die mit einer Eigenschaft assoziiert ist und den Wert einer bestimmten Eigenschaft erhält. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine Funktion, die mit einer Eigenschaft assoziiert ist und den Wert einer bestimmten Eigenschaft setzt. Zusammen können sie indirekt den Wert einer Eigenschaft darstellen.

Getter und Setter können entweder

- innerhalb von [Objekt-Initialisierern](#verwendung_von_objekt-initialisierern) definiert werden oder
- später zu einem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objekt-Initialisierern](#verwendung_von_objekt-initialisierern) werden Getter und Setter wie reguläre [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, jedoch mit den Schlüsselwörtern `get` oder `set` vorangestellt. Die Gettermethode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter erwartet (den neuen Wert, der gesetzt wird). Zum Beispiel:

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

Getter und Setter können auch jederzeit nach der Erstellung mit der Methode {{jsxref("Object.defineProperties()")}} zu einem Objekt hinzugefügt werden. Der erste Parameter dieser Methode ist das Objekt, an welches Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Namen des Getters oder Setters sind und dessen Eigenschaftswerte Objekte zur Definition der Getter- oder Setterfunktionen sind. Hier ein Beispiel, das den gleichen Getter und Setter definiert wie im vorherigen Beispiel:

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

Welche der beiden Formen Sie wählen, hängt von Ihrem Programmierstil und der jeweiligen Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter durch den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch Getter und Setter später hinzufügen müssen – vielleicht weil Sie das bestimmte Objekt nicht geschrieben haben – dann ist die zweite Form die einzige mögliche Form. Die zweite Form repräsentiert besser die dynamische Natur von JavaScript, kann jedoch den Code schwer lesbar und verständlich machen.

## Objekte vergleichen

In JavaScript sind Objekte ein Referenztyp. Zwei unterschiedliche Objekte sind nie gleich, selbst wenn sie die gleichen Eigenschaften haben. Nur der Vergleich der gleichen Objekt-Referenz mit sich selbst ergibt true.

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

Weitere Informationen über Vergleichsoperatoren finden Sie unter [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators).

## Siehe auch

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
