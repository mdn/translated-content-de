---
title: Arbeiten mit Objekten
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript basiert auf einem objektorientierten Paradigma. Ein Objekt ist eine Sammlung von {{Glossary("Property/JavaScript", "Eigenschaften")}}, und eine Eigenschaft ist eine Zuordnung zwischen einem Namen (oder _Schlüssel_) und einem Wert. Der Wert einer Eigenschaft kann eine Funktion sein, in diesem Fall wird die Eigenschaft als {{Glossary("Method", "Methode")}} bezeichnet.

Objekte in JavaScript können wie Objekte im echten Leben betrachtet werden, genau wie in vielen anderen Programmiersprachen auch. In JavaScript ist ein Objekt eine eigenständige Einheit mit Eigenschaften und Typ. Man kann es mit einer Tasse vergleichen, zum Beispiel. Eine Tasse ist ein Objekt mit Eigenschaften. Eine Tasse hat eine Farbe, ein Design, ein Gewicht, ein Material, aus dem sie gemacht ist, usw. Genauso können JavaScript-Objekte Eigenschaften haben, die ihre Merkmale definieren.

Zusätzlich zu den im Browser vordefinierten Objekten können Sie Ihre eigenen Objekte definieren. In diesem Kapitel wird beschrieben, wie Objekte, Eigenschaften und Methoden verwendet werden und wie Sie Ihre eigenen Objekte erstellen können.

## Neue Objekte erstellen

Sie können ein Objekt mit einem [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellen. Alternativ können Sie zuerst eine Konstruktorfunktion erstellen und dann ein Objekt instanziieren, indem Sie diese Funktion mit dem `new` Operator aufrufen.

### Verwenden von Objektinitialisierern

Objektinitialisierer werden auch _Objektliterale_ genannt. "Objektinitialisierer" ist konsistent mit der von C++ verwendeten Terminologie.

Die Syntax für ein Objekt mit einem Objektinitialisierer ist:

```js
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

Jeder Eigenschaftsname vor den Doppelpunkten ist ein Bezeichner (entweder ein Name, eine Zahl oder ein Stringliteral), und jeder `valueN` ist ein Ausdruck, dessen Wert dem Eigenschaftsnamen zugewiesen wird. Der Eigenschaftsname kann auch ein Ausdruck sein; berechnete Schlüssel müssen in eckigen Klammern stehen. Der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) Referenz enthält eine detailliertere Erklärung der Syntax.

In diesem Beispiel wird das neu erstellte Objekt einer Variablen `obj` zugewiesen — dies ist optional. Wenn Sie dieses Objekt nicht anderweitig referenzieren müssen, müssen Sie es keiner Variablen zuweisen. (Beachten Sie, dass Sie möglicherweise das Objektliteral in Klammern setzen müssen, wenn es dort erscheint, wo eine Anweisung erwartet wird, damit das Literal nicht mit einer Blockanweisung verwechselt wird.)

Objektinitialisierer sind Ausdrücke, und jeder Objektinitialisierer führt zu einem neuen Objekt, das erstellt wird, wann immer die Anweisung, in der es erscheint, ausgeführt wird. Identische Objektinitialisierer erzeugen unterschiedliche Objekte, die nicht als gleich verglichen werden können.

Die folgende Anweisung erstellt ein Objekt und weist es der Variablen `x` zu, nur wenn der Ausdruck `cond` wahr ist:

```js
let x;
if (cond) {
  x = { greeting: "hi there" };
}
```

Das folgende Beispiel erstellt `myHonda` mit drei Eigenschaften. Beachten Sie, dass die `engine`-Eigenschaft auch ein Objekt mit eigenen Eigenschaften ist.

```js
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
```

Mit Initialisierern erstellte Objekte werden _einfache Objekte_ genannt, da sie Instanzen von {{jsxref("Object")}} sind, jedoch nicht von einem anderen Objekttyp. Einige Objekttypen haben spezielle Initialisierer-Syntaxen — zum Beispiel [Array-Initialisierer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und [RegEx-Literale](/de/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression).

### Verwenden einer Konstruktorfunktion

Alternativ können Sie ein Objekt mit diesen zwei Schritten erstellen:

1. Definieren Sie den Objekttyp, indem Sie eine Konstruktorfunktion schreiben. Es gibt eine starke Konvention, mit gutem Grund, den Anfangsbuchstaben groß zu schreiben.
2. Erstellen Sie eine Instanz des Objekts mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).

Um einen Objekttyp zu definieren, erstellen Sie eine Funktion für den Objekttyp, der seinen Namen, seine Eigenschaften und seine Methoden spezifiziert. Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und Sie möchten, dass er Eigenschaften für Marke, Modell und Baujahr hat. Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Beachten Sie die Verwendung von `this`, um Werte den Eigenschaften des Objekts anhand der an die Funktion übergebenen Werte zuzuweisen.

Jetzt können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Diese Anweisung erstellt `myCar` und weist ihm die angegebenen Werte für seine Eigenschaften zu. Dann ist der Wert von `myCar.make` der String `"Eagle"`, `myCar.model` ist der String `"Talon TSi"`, `myCar.year` ist der Integer `1993` usw. Die Reihenfolge von Argumenten und Parametern sollte gleich sein.

Sie können beliebig viele `Car` Objekte durch Aufrufe an `new` erstellen. Zum Beispiel,

```js
const randCar = new Car("Nissan", "300ZX", 1992);
const kenCar = new Car("Mazda", "Miata", 1990);
```

Ein Objekt kann eine Eigenschaft haben, die selbst ein anderes Objekt ist. Angenommen, Sie definieren ein Objekt namens `Person` wie folgt:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

und instanziieren dann zwei neue `Person` Objekte wie folgt:

```js
const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Dann können Sie die Definition von `Car` um eine `owner` Eigenschaft erweitern, die ein `Person` Objekt übernimmt, wie folgt:

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

Beachten Sie, dass anstelle der Übergabe eines literal String- oder Integerwerts beim Erstellen der neuen Objekte die obigen Anweisungen die Objekte `rand` und `ken` als Argumente für die Besitzer übergeben. Wenn Sie dann den Namen des Besitzers von `car2` herausfinden möchten, können Sie auf die folgende Eigenschaft zugreifen:

```js
car2.owner.name;
```

Sie können einem zuvor definierten Objekt jederzeit eine Eigenschaft hinzufügen. Zum Beispiel, der Ausdruck

```js
car1.color = "black";
```

fügt `car1` eine `color`-Eigenschaft hinzu und weist ihr den Wert `"schwarz"` zu. Dies hat jedoch keine Auswirkungen auf andere Objekte. Um die neue Eigenschaft allen Objekten des gleichen Typs hinzuzufügen, müssen Sie die Eigenschaft zur Definition des `Car` Objekttyps hinzufügen.

Sie können auch die [`class`](/de/docs/Web/JavaScript/Reference/Classes) Syntax anstelle der `function` Syntax verwenden, um eine Konstruktorfunktion zu definieren. Für weitere Informationen siehe den [Klassen-Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes).

### Verwenden der Object.create() Methode

Objekte können auch mit der {{jsxref("Object.create()")}} Methode erstellt werden. Diese Methode kann sehr nützlich sein, da sie Ihnen ermöglicht, das [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Objekt für das Objekt, das Sie erstellen möchten, auszuwählen, ohne eine Konstruktorfunktion definieren zu müssen.

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

Ein JavaScript Objekt hat Eigenschaften, die ihm zugeordnet sind. Objekteigenschaften sind im Wesentlichen dasselbe wie Variablen, außer dass sie mit Objekten und nicht mit {{Glossary("Scope", "Scopes")}} verknüpft sind. Die Eigenschaften eines Objekts definieren die Merkmale des Objekts.

Zum Beispiel erstellt dieses Beispiel ein Objekt namens `myCar` mit Eigenschaften namens `make`, `model` und `year`, deren Werte auf `"Ford"`, `"Mustang"` und `1969` gesetzt sind:

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Wie JavaScript-Variablen sind Eigenschaftsnamen case-sensitiv. Eigenschaftsnamen können nur Strings oder Symbole sein — alle Schlüssel werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), es sei denn, sie sind Symbole. [Array-Indizes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices) sind in der Tat Eigenschaften mit String-Schlüsseln, die Ganzzahlen enthalten.

### Zugriff auf Eigenschaften

Sie können auf eine Eigenschaft eines Objekts über ihren Eigenschaftsnamen zugreifen. [Property accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt es in zwei Varianten: _Punktnotation_ und _Klammernotation_. Beispielsweise könnten Sie auf die Eigenschaften des `myCar` Objekts wie folgt zugreifen:

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

Ein Objekt-Eigenschaftsname kann jeder JavaScript-String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sein, einschließlich eines leeren Strings. Sie können jedoch keine Punktnotation verwenden, um auf eine Eigenschaft zuzugreifen, deren Name kein gültiger JavaScript-Bezeichner ist. Beispielsweise kann auf einen Eigenschaftsnamen, der ein Leerzeichen oder einen Bindestrich hat, der mit einer Zahl beginnt oder der in einer Variablen gehalten wird, nur mit der Klammernotation zugegriffen werden. Diese Notation ist auch sehr nützlich, wenn Eigenschaftsnamen dynamisch bestimmt werden sollen, d.h. erst zur Laufzeit bestimmbar sind. Beispiele dafür sind:

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

Im obigen Code ist der Schlüssel `anotherObj` ein Objekt, das weder ein String noch ein Symbol ist. Wenn es `myObj` hinzugefügt wird, ruft JavaScript die {{jsxref("Object/toString", "toString()")}} Methode von `anotherObj` auf und verwendet den resultierenden String als neuen Schlüssel.

Sie können auch auf Eigenschaften mit einem String-Wert zugreifen, der in einer Variablen gespeichert ist. Die Variable muss in der Klammernotation übergeben werden. Im obigen Beispiel hielt die Variable `str` `"myString"` und es ist `"myString"`, das der Eigenschaftsname ist. Daher wird `myObj.str` als undefined zurückgegeben.

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

Allerdings sollten Sie vorsichtig sein, wenn Sie eckige Klammern verwenden, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben angegeben werden. Dies kann Ihren Code anfällig für [Objektinjektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

Nicht existierende Eigenschaften eines Objekts haben den Wert {{jsxref("undefined")}} (und nicht [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.nonexistentProperty; // undefined
```

### Aufzählen von Eigenschaften

Es gibt drei native Möglichkeiten, die Eigenschaften eines Objekts aufzulisten/zu durchlaufen:

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen. Diese Methode durchläuft alle aufzählbaren String-Eigenschaften eines Objekts sowie dessen Prototyp-Kette.
- {{jsxref("Object.keys()")}}. Diese Methode gibt ein Array mit nur den aufzählbaren eigenen String-Eigenschaftsnamen ("Schlüssel") im Objekt `myObj` zurück, jedoch nicht denen in der Prototyp-Kette.
- {{jsxref("Object.getOwnPropertyNames()")}}. Diese Methode gibt ein Array zurück, das alle eigenen String-Eigenschaftsnamen im Objekt `myObj` enthält, unabhängig davon, ob sie aufzählbar sind oder nicht.

Sie können die Klammernotation mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) verwenden, um alle aufzählbaren Eigenschaften eines Objekts zu durchlaufen. Um zu veranschaulichen, wie dies funktioniert, zeigt die folgende Funktion die Eigenschaften des Objekts an, wenn Sie das Objekt und den Namen des Objekts als Argumente an die Funktion übergeben:

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

Der Begriff "Eigentümer-Eigenschaft" bezieht sich auf die Eigenschaften des Objekts, jedoch ohne die der Prototyp-Kette. So würde der Funktionsaufruf `showProps(myCar, 'myCar')` Folgendes ausgeben:

```plain
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

Das oben Genannte ist gleichbedeutend mit:

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

Für weitere Informationen siehe [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

### Löschen von Eigenschaften

Sie können eine nicht geerbte Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator entfernen. Der folgende Code zeigt, wie man eine Eigenschaft entfernt.

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

Alle Objekte in JavaScript erben von mindestens einem anderen Objekt. Das Objekt, von dem geerbt wird, ist als Prototyp bekannt, und die geerbten Eigenschaften sind im `prototype` Objekt des Konstrukteurs zu finden. Siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für weitere Informationen.

### Definieren von Eigenschaften für alle Objekte eines Typs

Sie können einem bestimmten [Konstruktor](#verwenden_einer_konstruktorfunktion) über die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft eine Eigenschaft zu allen Objekten hinzufügen. Dies definiert eine Eigenschaft, die von allen Objekten des angegebenen Typs gemeinsam genutzt wird, anstatt nur von einer Instanz des Objekts. Der folgende Code fügt allen Objekten des Typs `Car` eine `color`-Eigenschaft hinzu und liest dann den Wert der Eigenschaft von einer Instanz `car1` aus.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## Definieren von Methoden

Eine _Methode_ ist eine Funktion, die mit einem Objekt verknüpft ist, oder anders ausgedrückt, eine Methode ist eine Eigenschaft eines Objekts, die eine Funktion ist. Methoden werden auf die gleiche Weise definiert wie normale Funktionen, außer dass sie als Eigenschaft eines Objekts zugewiesen werden müssen. Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für weitere Details. Ein Beispiel ist:

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

wobei `objectName` ein vorhandenes Objekt ist, `methodName` der Name ist, den Sie der Methode zuweisen, und `functionName` der Name der Funktion ist.

Sie können dann die Methode im Kontext des Objekts wie folgt aufrufen:

```js
objectName.methodName(params);
```

Methoden werden typischerweise auf dem `prototype` Objekt des Konstrukteurs definiert, sodass alle Objekte des gleichen Typs die gleiche Methode teilen. Zum Beispiel können Sie eine Funktion definieren, die die Eigenschaften der zuvor definierten `Car` Objekte formatiert und anzeigt.

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

### Verwenden von this für Objektreferenzen

JavaScript hat ein spezielles Schlüsselwort, [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), das Sie innerhalb einer Methode verwenden können, um auf das aktuelle Objekt zu verweisen. Angenommen, Sie haben 2 Objekte, `Manager` und `Intern`. Jedes Objekt hat seinen eigenen `name`, `age` und `job`. In der Funktion `sayHi()`, beachten Sie die Verwendung von `this.name`. Wenn die gleiche Funktion zu den 2 Objekten hinzugefügt wird, wird die Nachricht mit dem Namen des jeweiligen Objekts, an das sie gebunden ist, ausgegeben.

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

`this` ist ein "versteckter Parameter" eines Funktionsaufrufs, der durch Angabe des Objekts vor der aufgerufenen Funktion übergeben wird. Zum Beispiel ist in `Manager.sayHi()` `this` das `Manager` Objekt, da `Manager` vor der Funktion `sayHi()` kommt. Wenn Sie von einem anderen Objekt auf dieselbe Funktion zugreifen, wird `this` ebenfalls geändert. Wenn Sie andere Methoden verwenden, um die Funktion aufzurufen, wie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Reflect.apply()")}}, können Sie den Wert von `this` explizit als Argument übergeben.

## Definieren von Gettern und Settern

Ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) ist eine Funktion, die mit einer Eigenschaft verknüpft ist, die den Wert einer bestimmten Eigenschaft abruft. Ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) ist eine Funktion, die mit einer Eigenschaft verknüpft ist, die den Wert einer bestimmten Eigenschaft festlegt. Zusammen können sie indirekt den Wert einer Eigenschaft repräsentieren.

Getter und Setter können entweder

- innerhalb von [Objekt-Initialisierern](#verwenden_von_objektinitialisierern) definiert werden oder
- jederzeit einem bestehenden Objekt hinzugefügt werden.

Innerhalb von [Objekt-Initialisierern](#verwenden_von_objektinitialisierern) werden Getter- und Setter-Methoden wie normale [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert, jedoch mit den Schlüsselwörtern `get` oder `set` vorangestellt. Die Getter-Methode darf keinen Parameter erwarten, während die Setter-Methode genau einen Parameter erwartet (den neuen zu setzenden Wert). Zum Beispiel:

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

Die `myObj` Objekteigenschaften sind:

- `myObj.a` — eine Zahl
- `myObj.b` — ein Getter, der `myObj.a` plus 1 zurückgibt
- `myObj.c` — ein Setter, der den Wert von `myObj.a` auf die Hälfte des Werts setzt, auf den `myObj.c` gesetzt wird

Getter und Setter können einem Objekt jederzeit nach der Erstellung mit der Methode {{jsxref("Object.defineProperties()")}} hinzugefügt werden. Der erste Parameter dieser Methode ist das Objekt, für das Sie den Getter oder Setter definieren möchten. Der zweite Parameter ist ein Objekt, dessen Eigenschaftsnamen die Namen des Getters oder Setters sind und dessen Eigenschaftswerte Objekte zur Definition der Getter- oder Setter-Funktionen sind. Hier ist ein Beispiel, das denselben Getter und Setter wie im vorherigen Beispiel definiert:

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

Welche der beiden Formen Sie wählen, hängt von Ihrem Programmierstil und der anstehenden Aufgabe ab. Wenn Sie die Definition des ursprünglichen Objekts ändern können, werden Sie wahrscheinlich Getter und Setter über den ursprünglichen Initialisierer definieren. Diese Form ist kompakter und natürlicher. Wenn Sie jedoch später Getter und Setter hinzufügen müssen — vielleicht, weil Sie das bestimmte Objekt nicht geschrieben haben —, dann ist die zweite Form die einzige mögliche Form. Die zweite Form repräsentiert besser die dynamische Natur von JavaScript, kann aber den Code schwer lesbar und verständlich machen.

## Vergleichen von Objekten

In JavaScript sind Objekte ein Referenztyp. Zwei unterschiedliche Objekte sind niemals gleich, selbst wenn sie dieselben Eigenschaften haben. Nur der Vergleich desselben Objekt-Referenzs mit sich selbst liefert wahr.

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

Für weitere Informationen über Vergleichsoperatoren siehe [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators).

## Siehe auch

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
