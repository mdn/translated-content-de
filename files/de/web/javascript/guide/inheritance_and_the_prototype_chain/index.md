---
title: Vererbung und die Prototypen-Kette
slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

In der Programmierung bezieht sich _Vererbung_ darauf, Merkmale von einem Elternteil an ein Kind weiterzugeben, sodass ein neuer Code vorhandene Funktionen wiederverwenden und darauf aufbauen kann. JavaScript implementiert Vererbung durch die Verwendung von [Objekten](/de/docs/Web/JavaScript/Guide/Data_structures#objects). Jedes Objekt hat einen internen Link zu einem anderen Objekt, das als _Prototyp_ bezeichnet wird. Dieses Prototypobjekt hat einen eigenen Prototyp und so weiter, bis ein Objekt mit `null` als Prototyp erreicht wird. Per Definition hat `null` keinen Prototyp und fungiert als letzter Link in dieser **Prototypen-Kette**. Es ist möglich, jedes Mitglied der Prototypen-Kette zu ändern oder sogar den Prototyp zur Laufzeit auszutauschen, sodass Konzepte wie [statische Dispatching](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht existieren.

JavaScript kann für Entwickler, die Erfahrung mit klassenbasierten Sprachen (wie Java oder C++) haben, etwas verwirrend sein, da es [dynamisch](/de/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen hat. Während diese Verwirrung oft als eine der Schwächen von JavaScript angesehen wird, ist das prototypische Vererbungsmodell selbst tatsächlich mächtiger als das klassische Modell. Es ist zum Beispiel recht einfach, ein klassisches Modell auf einem prototypischen Modell aufzubauen – was die Art ist, wie [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert werden.

Obwohl Klassen mittlerweile weit verbreitet sind und zu einem neuen Paradigma in JavaScript geworden sind, bringen Klassen kein neues Vererbungsmuster mit sich. Während Klassen die meisten prototypischen Mechanismen abstrahieren, ist es dennoch nützlich, zu verstehen, wie Prototypen im Hintergrund funktionieren.

## Vererbung mit der Prototyp-Kette

### Vererbung von Eigenschaften

JavaScript-Objekte sind dynamische "Taschen" von Eigenschaften (als **eigene Eigenschaften** bezeichnet). JavaScript-Objekte haben einen Link zu einem Prototypobjekt. Beim Versuch, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur im Objekt selbst gesucht, sondern auch im Prototyp des Objekts, im Prototyp des Prototyps und so weiter, bis entweder eine Eigenschaft mit dem passenden Namen gefunden wird oder das Ende der Prototyp-Kette erreicht ist.

> [!NOTE]
> Gemäß dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Der interne Slot `[[Prototype]]` kann mit den Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} entsprechend zugegriffen und geändert werden. Dies entspricht dem JavaScript-Accessor [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), der nicht standardisiert ist, aber von vielen JavaScript-Engines de facto implementiert wird. Um Verwirrung zu vermeiden und es prägnant zu halten, werden wir in unserer Notation `obj.__proto__` vermeiden und stattdessen `obj.[[Prototype]]` verwenden. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Es sollte nicht mit der Eigenschaft `func.prototype` von Funktionen verwechselt werden, die stattdessen den `[[Prototype]]` festlegt, der allen _Instanzen_ von Objekten zugewiesen wird, die durch die gegebene Funktion erstellt werden, wenn sie als Konstruktor verwendet wird. Wir werden die `prototype`-Eigenschaft von Konstruktorfunktionen in [einem späteren Abschnitt](#konstruktoren) besprechen.

Es gibt mehrere Möglichkeiten, den `[[Prototype]]` eines Objekts anzugeben, die in [einem späteren Abschnitt](#verschiedene_arten_zum_erstellen_und_ändern_von_prototyp-ketten) aufgeführt sind. Für jetzt werden wir die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung verwenden. Es ist bemerkenswert, dass die Syntax `{ __proto__: ... }` sich von dem `obj.__proto__`-Accessor unterscheidet: Ersteres ist standardisiert und nicht veraltet.

In einem Objektliteral wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` (der entweder `null` oder ein anderes Objekt sein muss) zum `[[Prototype]]` des durch das Literal dargestellten Objekts, während die anderen Schlüssel wie `a` und `b` zu den _eigenen Eigenschaften_ des Objekts werden. Diese Syntax liest sich sehr natürlich, da `[[Prototype]]` nur eine "interne Eigenschaft" des Objekts ist.

Dies geschieht, wenn versucht wird, auf eine Eigenschaft zuzugreifen:

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
// what that means later).
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and
// there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.
```

Das Setzen einer Eigenschaft zu einem Objekt erstellt eine eigene Eigenschaft. Die einzige Ausnahme von den Regeln zum Abrufen und Setzen von Verhalten besteht darin, wenn sie von einem [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen wird.

Ähnlich können Sie längere Prototyp-Ketten erstellen und eine Eigenschaft wird auf all diesen gesucht.

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(o.d); // 5
```

### Vererbung von "Methoden"

JavaScript hat keine "{{Glossary("Method", "Methoden")}}" in der Form, wie klassenbasierte Sprachen sie definieren. In JavaScript kann jede Funktion in Form einer Eigenschaft zu einem Objekt hinzugefügt werden. Eine geerbte Funktion verhält sich wie jede andere Eigenschaft, einschließlich des schattenähnlichen Verhaltens von Eigenschaften (in diesem Fall eine Form von _Methodenüberschreibung_).

Wenn eine geerbte Funktion ausgeführt wird, zeigt der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das vererbende Objekt und nicht auf das Prototypobjekt, bei dem die Funktion eine eigene Eigenschaft ist.

```js
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// When child.method is called, 'this' refers to child.
// So when child inherits the method of parent,
// The property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

child.value = 4; // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means
// child.value instead
```

## Konstruktoren

Die Stärke von Prototypen besteht darin, dass wir eine Menge von Eigenschaften wiederverwenden können, wenn sie bei jeder Instanz vorhanden sein sollen – insbesondere für Methoden. Angenommen, wir wollen eine Reihe von Boxen erstellen, bei denen jede Box ein Objekt ist, das einen Wert enthält, auf den über eine `getValue`-Funktion zugegriffen werden kann. Eine naive Implementierung wäre:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Dies ist suboptimal, da jede Instanz ihre eigene Funktions-Eigenschaft hat, die dasselbe tut, was redundant und unnötig ist. Stattdessen können wir `getValue` zum `[[Prototype]]` aller Boxen verschieben:

```js
const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];
```

Auf diese Weise wird die `getValue`-Methode aller Boxen auf dieselbe Funktion verweisen, wodurch der Speicherverbrauch reduziert wird. Das manuelle Binden des `__proto__` für jede Objekterstellung ist jedoch immer noch sehr umständlich. Dies ist der Moment, in dem wir eine _Konstruktor_-Funktion verwenden würden, die den `[[Prototype]]` automatisch für jedes hergestellte Objekt festlegt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

```js
// A constructor function
function Box(value) {
  this.value = value;
}

// Properties all boxes created from the Box() constructor
// will have
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
```

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die von der `Box`-Konstruktor-Funktion erstellt wurde. `Box.prototype` ist nicht viel anders als das `boxPrototype`-Objekt, das wir zuvor erstellt haben – es ist nur ein einfaches Objekt. Jede Instanz, die aus einer Konstruktionsfunktion erstellt wird, hat automatisch die `prototype`-Eigenschaft des Konstruktors als `[[Prototype]]` – das heißt, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), welche die Konstruktionsfunktion selbst referenziert – das heißt, `Box.prototype.constructor === Box`. Dies ermöglicht es, den ursprünglichen Konstruktor von jeder Instanz aus zu erreichen.

> [!NOTE]
> Wenn aus der Konstruktionsfunktion ein Nicht-Primitiv zurückgegeben wird, wird dieser Wert zum Ergebnis des `new`-Ausdrucks. In diesem Fall könnte der `[[Prototype]]` nicht korrekt gebunden sein – aber in der Praxis sollte dies nicht häufig vorkommen.

Die oben genannte Konstruktionsfunktion kann in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) umgeschrieben werden als:

```js
class Box {
  constructor(value) {
    this.value = value;
  }

  // Methods are created on Box.prototype
  getValue() {
    return this.value;
  }
}
```

Klassen sind syntaktischer Zucker über Konstruktionsfunktionen, was bedeutet, dass Sie `Box.prototype` weiterhin manipulieren können, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch so konzipiert sind, dass sie eine Abstraktion über den zugrunde liegenden Prototyp-Mechanismus darstellen, werden wir für dieses Tutorial die leichtergewichtige Konstruktionsfunktion-Syntax verwenden, um vollständig zu demonstrieren, wie Prototypen funktionieren.

Da `Box.prototype` dasselbe Objekt referenziert wie der `[[Prototype]]` aller Instanzen, können wir das Verhalten aller Instanzen ändern, indem wir `Box.prototype` ändern.

```js
function Box(value) {
  this.value = value;
}
Box.prototype.getValue = function () {
  return this.value;
};
const box = new Box(1);

// Mutate Box.prototype after an instance has already been created
Box.prototype.getValue = function () {
  return this.value + 1;
};
box.getValue(); // 2
```

Ein Korollar ist, _das Neuerstellen_ von `Constructor.prototype` (`Constructor.prototype = ...`) ist aus zwei Gründen eine schlechte Idee:

- Der `[[Prototype]]` der Instanzen, die vor der Neuzuweisung erstellt wurden, referenziert nun ein anderes Objekt als der `[[Prototype]]` der Instanzen, die nach der Neuzuweisung erstellt wurden – das Ändern des `[[Prototype]]` eines verändert nicht den anderen.
- Es sei denn, Sie setzen die `constructor`-Eigenschaft manuell zurück, die Konstruktionsfunktion kann nicht mehr über `instance.constructor` zurückverfolgt werden, was die Benutzererwartung verletzen könnte. Einige eingebaute Operationen lesen auch die `constructor`-Eigenschaft, und wenn sie nicht gesetzt ist, funktionieren sie möglicherweise nicht wie erwartet.

`Constructor.prototype` ist nur nützlich beim Erstellen von Instanzen. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, was der _eigene_ Prototyp der Konstruktionsfunktion ist, welcher `Function.prototype` ist – das heißt, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literal-Syntaxen in JavaScript erstellen Instanzen, die implizit den `[[Prototype]]` festlegen. Zum Beispiel:

```js
// Object literals (without the `__proto__` key) automatically
// have `Object.prototype` as their `[[Prototype]]`
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// Array literals automatically have `Array.prototype` as their `[[Prototype]]`
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// RegExp literals automatically have `RegExp.prototype` as their `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true
```

Wir können sie in ihre Konstruktorform "entsüßen".

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Zum Beispiel sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, weshalb sie automatisch auf allen Array-Instanzen verfügbar sind.

> [!WARNING]
> Es gibt eine Fehlfunktion, die früher weit verbreitet war – das Erweitern von `Object.prototype` oder einem der anderen eingebauten Prototypen. Ein Beispiel für diese Fehlfunktion ist das Definieren von `Array.prototype.myMethod = function () {...}` und dann die Verwendung von `myMethod` auf allen Array-Instanzen.
>
> Diese Fehlfunktion wird als _Monkey Patching_ bezeichnet. Monkey Patching birgt das Risiko der Vorwärtskompatibilität, da Ihre Implementierung bei einer späteren Einfügung dieser Methode in die Sprache, jedoch mit einer anderen Signatur, fehlerhaft sein wird. Dies führte zu Vorfällen wie dem [SmooshGate](https://developer.chrome.com/blog/smooshgate/) und kann eine erhebliche Hürde für die Weiterentwicklung der Sprache sein, da JavaScript versucht, "das Web nicht zu zerstören".
>
> Der **einzige** gute Grund, einen eingebauten Prototyp zu erweitern, besteht darin, die Funktionen neuerer JavaScript-Engines nachzurüsten, wie `Array.prototype.forEach`.

Es ist interessant zu bemerken, dass einige eingebaute Konstruktoren aus historischen Gründen selbst Instanzen sind. Zum Beispiel ist `Number.prototype` eine Zahl 0, `Array.prototype` ist ein leeres Array und `RegExp.prototype` ist `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

Bei benutzerdefinierten Konstruktoren oder modernen Konstruktoren wie `Map` ist dies jedoch nicht der Fall.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Längere Vererbungsketten erstellen

Die `Constructor.prototype`-Eigenschaft wird zum `[[Prototype]]` der Instanzen des Konstruktors, wie sie ist – einschließlich `Constructor.prototype`'s eigenem `[[Prototype]]`. Standardmäßig ist `Constructor.prototype` ein _einfaches Objekt_ – das heißt, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist – das heißt, `Object.getPrototypeOf(Object.prototype) === null`. Daher erstellt ein typischer Konstruktor die folgende Prototypen-Kette:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototyp-Ketten zu erstellen, können wir den `[[Prototype]]` von `Constructor.prototype` mit der Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) festlegen.

```js
function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

In Klassentermen entspricht dies der Verwendung der [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Syntax.

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Sie werden möglicherweise auch einige Legacy-Codes sehen, die {{jsxref("Object.create()")}} verwenden, um die Vererbungskette zu erstellen. Da dies jedoch die `prototype`-Eigenschaft neu zuweist und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft entfernt, kann dies fehleranfälliger sein, während Leistungsgewinne nicht offensichtlich sein können, wenn die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Prototypen inspizieren: ein tieferer Einblick

Sehen wir uns an, was hinter den Kulissen im Detail passiert.

In JavaScript, wie oben erwähnt, können Funktionen Eigenschaften haben. Alle Funktionen haben eine spezielle Eigenschaft namens `prototype`. Bitte beachten Sie, dass der nachfolgende Code eigenständig ist (es wird angenommen, dass es keine andere JavaScript auf der Webseite gibt, außer dem folgenden Code). Für das beste Lernerlebnis wird dringend empfohlen, eine Konsole zu öffnen, zum Tab "Konsole" zu navigieren, den unten stehenden JavaScript-Code zu kopieren und dann durch Drücken der Enter/Return-Taste auszuführen. (Die Konsole ist in den meisten Webbrowser-Entwicklertools enthalten. Weitere Informationen finden Sie in den [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/) und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/).)

```js
function doSomething() {}
console.log(doSomething.prototype);
// It does not matter how you declare the function; a
// function in JavaScript will always have a default
// prototype property — with one exception: an arrow
// function doesn't have a default prototype property:
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);
```

Wie oben gezeigt, hat `doSomething()` eine Standard-`prototype`-Eigenschaft, wie von der Konsole demonstriert. Nach dem Ausführen dieses Codes sollte die Konsole ein Objekt angezeigt haben, das diesem ähnlich sieht.

```plain
{
  constructor: ƒ doSomething(),
  [[Prototype]]: {
    constructor: ƒ Object(),
    hasOwnProperty: ƒ hasOwnProperty(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toLocaleString: ƒ toLocaleString(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf()
  }
}
```

> [!NOTE]
> Die Chrome-Konsole verwendet `[[Prototype]]`, um den Prototyp des Objekts zu bezeichnen, gemäß den Begriffsbedingungen der Spezifikation; Firefox verwendet `<prototype>`. Der Konsistenz halber werden wir `[[Prototype]]` verwenden.

Wir können dem Prototyp von `doSomething()` Eigenschaften hinzufügen, wie unten gezeigt.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

Dies führt zu:

```plain
{
  foo: "bar",
  constructor: ƒ doSomething(),
  [[Prototype]]: {
    constructor: ƒ Object(),
    hasOwnProperty: ƒ hasOwnProperty(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toLocaleString: ƒ toLocaleString(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf()
  }
}
```

Wir können jetzt den `new`-Operator verwenden, um eine Instanz von `doSomething()` basierend auf diesem Prototyp zu erstellen. Um den `new`-Operator zu verwenden, rufen Sie die Funktion normal auf, jedoch mit `new` als Präfix. Das Aufrufen einer Funktion mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Eigenschaften können dann auf dieses Objekt hinzugefügt werden.

Probieren Sie den folgenden Code aus:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

Dies führt zu einer Ausgabe ähnlich der folgenden:

```plain
{
  prop: "some value",
  [[Prototype]]: {
    foo: "bar",
    constructor: ƒ doSomething(),
    [[Prototype]]: {
      constructor: ƒ Object(),
      hasOwnProperty: ƒ hasOwnProperty(),
      isPrototypeOf: ƒ isPrototypeOf(),
      propertyIsEnumerable: ƒ propertyIsEnumerable(),
      toLocaleString: ƒ toLocaleString(),
      toString: ƒ toString(),
      valueOf: ƒ valueOf()
    }
  }
}
```

Wie oben gesehen, ist der `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`. Aber was macht das? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, sucht die Laufzeit zuerst, ob `doSomeInstancing` diese Eigenschaft hat.

Wenn `doSomeInstancing` die Eigenschaft nicht hat, sucht die Laufzeit nach der Eigenschaft in `doSomeInstancing.[[Prototype]]` (alias `doSomething.prototype`). Wenn `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft hat, wird die Eigenschaft auf `doSomeInstancing.[[Prototype]]` verwendet.

Andernfalls, wenn `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, wird `doSomeInstancing.[[Prototype]].[[Prototype]]` auf die gesuchte Eigenschaft geprüft. Standardmäßig ist der `[[Prototype]]` der `prototype`-Eigenschaft einer Funktion `Object.prototype`. So wird `doSomeInstancing.[[Prototype]].[[Prototype]]` (alias `doSomething.prototype.[[Prototype]]` (alias `Object.prototype`)) auf die gesuchte Eigenschaft durchsucht.

Wenn die Eigenschaft nicht in `doSomeInstancing.[[Prototype]].[[Prototype]]` gefunden wird, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` durchsucht. Es gibt jedoch ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, da `Object.prototype.[[Prototype]]` `null` ist. Dann, und nur dann, nachdem die gesamte Prototyp-Kette der `[[Prototype]]`s durchsucht wurde, stellt die Laufzeit fest, dass die Eigenschaft nicht existiert, und schlussfolgert, dass der Wert an der Eigenschaft `undefined` ist.

Geben wir noch etwas mehr Code in die Konsole ein:

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:     ", doSomeInstancing.prop);
console.log("doSomeInstancing.foo:      ", doSomeInstancing.foo);
console.log("doSomething.prop:          ", doSomething.prop);
console.log("doSomething.foo:           ", doSomething.foo);
console.log("doSomething.prototype.prop:", doSomething.prototype.prop);
console.log("doSomething.prototype.foo: ", doSomething.prototype.foo);
```

Dies führt zu folgendem:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Arten zum Erstellen und Ändern von Prototyp-Ketten

Wir sind auf viele Arten gestoßen, Objekte zu erstellen und ihre Prototyp-Ketten zu ändern. Wir werden die verschiedenen Ansätze systematisch zusammenfassen und die Vor- und Nachteile jedes Ansatzes vergleichen.

### Objekte erstellt mit Syntaxkonstrukten

```js
const o = { a: 1 };
// The newly created object o has Object.prototype as its [[Prototype]]
// Object.prototype has null as its [[Prototype]].
// o ---> Object.prototype ---> null

const b = ["yo", "sup", "?"];
// Arrays inherit from Array.prototype
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// Functions inherit from Function.prototype
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null

const p = { b: 2, __proto__: o };
// It is possible to point the newly created object's [[Prototype]] to
// another object via the __proto__ literal property. (Not to be confused
// with Object.prototype.__proto__ accessors)
// p ---> o ---> Object.prototype ---> null
```

Beim Verwenden des `__proto__`-Schlüssels in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) wird das Hinweisen des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, nur stillschweigend fehlschlagen, ohne eine Ausnahme auszulösen. Im Gegensatz zu dem [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Setter ist `__proto__` in Objektliteral-Initialisierern standardisiert und optimiert und kann sogar performanter sein als {{jsxref("Object.create")}}. Zusätzlich zur Deklaration von zusätzlichen eigenen Eigenschaften auf dem Objekt bei der Erstellung ist es ergonomischer als {{jsxref("Object.create")}}.

### Mit Konstruktorfunktionen

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.
```

Konstruktorfunktionen sind seit sehr frühem JavaScript verfügbar. Daher sind sie sehr schnell, sehr standardisiert und sehr JIT-optimierbar. Jedoch ist es auch schwer, sie "richtig" zu machen, da auf diese Weise hinzugefügte Methoden standardmäßig aufzählbar sind, was inkonsistent mit der Klassensyntax oder dem Verhalten eingebauter Methoden ist. Das Erstellen längerer Vererbungsketten ist ebenfalls fehleranfällig, wie zuvor demonstriert.

### Mit Object.create()

Durch Aufrufen von {{jsxref("Object.create()")}} wird ein neues Objekt erstellt. Der `[[Prototype]]` dieses Objekts ist das erste Argument der Funktion:

```js
const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null (d is an object that has null directly as its prototype)
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype
```

Ähnlich wie der `__proto__`-Schlüssel in Objektinitialisierern ermöglicht `Object.create()` das direkte Festlegen des Prototyps eines Objekts zum Erstellungszeitpunkt, was es der Laufzeit ermöglicht, das Objekt weiter zu optimieren. Es ermöglicht auch das Erstellen von Objekten mit `null`-Prototypen, indem `Object.create(null)` verwendet wird. Der zweite Parameter von `Object.create()` erlaubt es, die Attribute jeder Eigenschaft im neuen Objekt präzise zu spezifizieren, was ein zweischneidiges Schwert sein kann:

- Es erlaubt das Erstellen von nicht-aufrufbaren Eigenschaften usw. während der Objekterstellung, was mit Objektliteralen nicht möglich ist.
- Es ist viel ausführlicher und fehleranfälliger als Objektliterale.
- Es kann langsamer sein als Objektliterale, insbesondere wenn viele Eigenschaften erstellt werden.

### Mit Klassen

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "Filled rectangle";
    this.color = color;
  }
}

const filledRectangle = new FilledRectangle(5, 10, "blue");
// filledRectangle ---> FilledRectangle.prototype ---> Rectangle.prototype ---> Object.prototype ---> null
```

Klassen bieten die höchste Lesbarkeit und Wartbarkeit beim Definieren komplexer Vererbungsstrukturen. [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind ein Feature ohne triviale Ersatzlösung in der prototypischen Vererbung. Klassen sind jedoch weniger optimiert als traditionelle Konstruktorfunktionen und werden in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während alle oben genannten Methoden die Prototyp-Kette beim Erstellungszeitpunkt von Objekten festlegen, erlaubt [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) das Ändern der `[[Prototype]]`-internen Eigenschaft eines bestehenden Objekts. Es kann sogar einen Prototyp auf ein prototyploses Objekt erzwingen, das mit `Object.create(null)` erstellt wurde, oder den Prototyp eines Objekts durch Festlegen auf `null` entfernen.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Es sollte jedoch nach Möglichkeit beim Erstellen des Prototyps festgelegt werden, da das dynamische Festlegen des Prototyps alle Optimierungen, die Engines an der Prototyp-Kette vorgenommen haben, unterbricht. Es könnte dazu führen, dass einige Engines Ihren Code zur Deoptimierung neu kompilieren, damit er gemäß den Spezifikationen funktioniert.

### Mit dem \_\_proto\_\_ Accessor

Alle Objekte erben den [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Setter, der verwendet werden kann, um den `[[Prototype]]` eines bestehenden Objekts festzulegen (wenn der `__proto__`-Schlüssel auf dem Objekt nicht überschrieben wird).

> [!WARNING]
> `Object.prototype.__proto__` Accessoren sind **nicht standardisiert** und veraltet. Sie sollten fast immer stattdessen `Object.setPrototypeOf` verwenden.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Im Vergleich zu `Object.setPrototypeOf` schlägt das Festlegen von `__proto__` auf etwas, das kein Objekt ist, stillschweigend ohne Ausnahme fehl. Es hat auch eine etwas bessere Browser-Unterstützung. Es ist jedoch nicht standardisiert und veraltet. Sie sollten fast immer `Object.setPrototypeOf` stattdessen verwenden.

## Leistung

Die Suchzeit für Eigenschaften, die sich weit oben in der Prototyp-Kette befinden, kann sich negativ auf die Leistung auswirken, und dies kann in Code, in dem die Leistung kritisch ist, signifikant sein. Außerdem wird beim Versuch, auf nicht existierende Eigenschaften zuzugreifen, die gesamte Prototyp-Kette immer durchlaufen.

Wenn auch über die Eigenschaften eines Objekts iteriert wird, werden **alle** aufzählbaren Eigenschaften, die sich in der Prototyp-Kette befinden, aufgezählt. Um zu überprüfen, ob ein auf einem Objekt definierte Eigenschaft _an sich_ und nicht irgendwo in seiner Prototyp-Kette vorliegt, müssen die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) verwendet werden. Alle Objekte, außer diejenigen mit `null` als `[[Prototype]]`, erben [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype` — sofern es nicht weiter unten in der Prototyp-Kette überschrieben wurde. Um Ihnen ein konkretes Beispiel zu geben, nehmen wir das obige Graph-Code-Beispiel zur Veranschaulichung:

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g ---> Graph.prototype ---> Object.prototype ---> null

g.hasOwnProperty("vertices"); // true
Object.hasOwn(g, "vertices"); // true

g.hasOwnProperty("nope"); // false
Object.hasOwn(g, "nope"); // false

g.hasOwnProperty("addVertex"); // false
Object.hasOwn(g, "addVertex"); // false

Object.getPrototypeOf(g).hasOwnProperty("addVertex"); // true
```

Hinweis: Es ist **nicht** ausreichend zu überprüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft könnte durchaus existieren, aber ihr Wert ist zufällig auf `undefined` gesetzt.

## Fazit

JavaScript kann für Entwickler, die von Java oder C++ kommen, etwas verwirrend sein, da alles dynamisch ist, alles zur Laufzeit abläuft und es überhaupt keine statischen Typen gibt. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und selbst Funktionen sind Instanzen des `Function`-Konstruktors. Selbst die "Klassen" als Syntaxkonstrukte sind zur Laufzeit nur Konstruktionsfunktionen.

Alle Konstruktionsfunktionen in JavaScript haben eine spezielle Eigenschaft namens `prototype`, die mit dem `new`-Operator arbeitet. Der Verweis auf das Prototypobjekt wird auf die interne `[[Prototype]]`-Eigenschaft der neuen Instanz kopiert. Beispielsweise wird beim Ausführen von `const a1 = new A()` von JavaScript (nachdem das Objekt im Speicher erstellt wurde und bevor die Funktion `A()` mit definiertem `this` ausgeführt wird) `a1.[[Prototype]] = A.prototype` festgelegt. Wenn Sie dann auf die Eigenschaften der Instanz zugreifen, überprüft JavaScript zuerst, ob diese direkt an diesem Objekt vorhanden sind, und wenn nicht, schaut es in `[[Prototype]]`. `[[Prototype]]` wird _rekursiv_ betrachtet, d.h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis es gefunden wird oder `Object.getPrototypeOf` `null` zurückgibt. Dadurch werden alle auf `prototype` definierten Eigenschaften effektiv von allen Instanzen gemeinsam genutzt, und Sie können sogar später Teile von `prototype` ändern und die Änderungen werden in allen vorhandenen Instanzen sichtbar.

Wenn Sie im Beispiel oben `const a1 = new A(); const a2 = new A();` ausführen, dann würde `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething` verweisen – was dem entspricht, wie Sie `A.prototype.doSomething` definiert haben, d.h. `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das prototypische Vererbungsmodell zu verstehen, bevor man komplexen Code schreibt, der es nutzt. Beachten Sie auch die Länge der Prototyp-Ketten in Ihrem Code und teilen Sie sie bei Bedarf auf, um mögliche Leistungsprobleme zu vermeiden. Weiterhin sollten die nativen Prototypen **niemals** erweitert werden, es sei denn, es dient zur Kompatibilität mit neueren JavaScript-Funktionen.
