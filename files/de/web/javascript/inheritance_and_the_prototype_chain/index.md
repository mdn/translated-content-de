---
title: Vererbung und die Prototypenkette
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Advanced")}}

In der Programmierung bezieht sich _Vererbung_ auf das Weitergeben von Eigenschaften von einem Elternteil an ein Kind, sodass ein neues Stück Code die Merkmale eines bestehenden wiederverwenden und darauf aufbauen kann. JavaScript implementiert Vererbung durch die Verwendung von [Objekten](/de/docs/Web/JavaScript/Data_structures#objects). Jedes Objekt hat einen internen Link zu einem anderen Objekt, das als sein _Prototyp_ bezeichnet wird. Dieses Prototypobjekt hat wiederum seinen eigenen Prototyp und so weiter, bis ein Objekt erreicht wird, dessen Prototyp `null` ist. Per Definition hat `null` keinen Prototyp und fungiert als letzter Link in dieser **Prototypenkette**. Es ist möglich, jedes Mitglied der Prototypenkette zu ändern oder sogar prototypische Variablen zur Laufzeit auszutauschen, sodass Konzepte wie [statische Disposition](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht existieren.

JavaScript kann für Entwickler, die mit klassenbasierten Sprachen (wie Java oder C++) vertraut sind, etwas verwirrend sein, da es [dynamisch](/de/docs/Web/JavaScript/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen hat. Obwohl diese Verwirrung oft als eine der Schwächen von JavaScript angesehen wird, ist das prototypische Vererbungsmodell an sich tatsächlich mächtiger als das klassische Modell. Es ist beispielsweise ziemlich trivial, ein klassisches Modell auf einem prototypischen Modell aufzubauen – so werden [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert.

Obwohl Klassen jetzt weit verbreitet und zu einem neuen Paradigma in JavaScript geworden sind, bringen Klassen kein neues Vererbungsmuster. Während Klassen die meisten prototypischen Mechanismen abstrahieren, ist es weiterhin nützlich zu verstehen, wie Prototypen unter der Oberfläche funktionieren.

## Vererbung mit der Prototypenkette

### Eigenschaften erben

JavaScript-Objekte sind dynamische "Taschen" von Eigenschaften (bezeichnet als **eigene Eigenschaften**). JavaScript-Objekte haben einen Link zu einem Prototypobjekt. Wenn versucht wird, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur auf dem Objekt, sondern auch auf dem Prototyp des Objekts, dem Prototyp des Prototyps usw. gesucht, bis entweder eine Eigenschaft mit übereinstimmendem Namen gefunden wird oder das Ende der Prototypenkette erreicht ist.

> [!NOTE]
> Entsprechend dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Der `[[Prototype]]`-Interne Slot kann mit den Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} zugänglich gemacht und modifiziert werden. Dies entspricht dem JavaScript-Zugriffsmodul [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), das nicht standardisiert, aber de-facto von vielen JavaScript-Engines implementiert ist. Um Verwirrung zu vermeiden, verwenden wir in unserer Notation `obj.__proto__` nicht, sondern `obj.[[Prototype]]`. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Es sollte nicht mit der Eigenschaft `func.prototype` von Funktionen verwechselt werden, die stattdessen den `[[Prototype]]` für alle _Instanzen_ von Objekten spezifiziert, die von der gegebenen Funktion erstellt werden, wenn sie als Konstruktor verwendet wird. Wir werden die Eigenschaft `prototype` von Konstruktorfunktionen in [einem späteren Abschnitt](#konstruktoren) besprechen.

Es gibt verschiedene Möglichkeiten, den `[[Prototype]]` eines Objekts festzulegen, die in [einem späteren Abschnitt](#verschiedene_möglichkeiten_zur_erstellung_und_veränderung_von_prototypketten) aufgelistet sind. Für den Moment verwenden wir die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung. Es ist bemerkenswert, dass die Syntax `{ __proto__: ... }` sich von dem `obj.__proto__`-Accessor unterscheidet: Ersteres ist standardisiert und nicht veraltet.

In einem Objektliteral wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` (der entweder `null` oder ein anderes Objekt sein muss) der `[[Prototype]]` des durch das Literal dargestellten Objekts, während die anderen Schlüssel wie `a` und `b` die _eigenen Eigenschaften_ des Objekts werden. Diese Syntax liest sich sehr natürlich, da `[[Prototype]]` lediglich eine "interne Eigenschaft" des Objekts ist.

Folgendes passiert, wenn versucht wird, auf eine Eigenschaft zuzugreifen:

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

Das Festlegen einer Eigenschaft für ein Objekt erstellt eine eigene Eigenschaft. Die einzige Ausnahme von den Regeln für das Abrufen und Festlegen von Eigenschaften ist, wenn es von einem [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen wird.

Ebenso können Sie längere Prototypketten erstellen, und eine Eigenschaft wird auf allen diesen gesucht.

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

### "Methoden" erben

JavaScript hat keine "{{Glossary("Method", "Methoden")}}" in der Form, wie klassenbasierte Sprachen sie definieren. In JavaScript kann jede Funktion in Form einer Eigenschaft zu einem Objekt hinzugefügt werden. Eine geerbte Funktion verhält sich genauso wie jede andere Eigenschaft, einschließlich Eigenschaftsüberschattung, wie oben gezeigt (in diesem Fall eine Form des _Methodenüberschreibens_).

Wenn eine geerbte Funktion ausgeführt wird, zeigt der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das ererbende Objekt, nicht auf das Prototypobjekt, auf dem die Funktion eine eigene Eigenschaft ist.

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

Die Stärke von Prototypen liegt darin, dass wir eine Menge von Eigenschaften wiederverwenden können, wenn sie bei jeder Instanz vorhanden sein sollten – speziell für Methoden. Nehmen wir an, wir sollen eine Reihe von Boxen erstellen, wobei jede Box ein Objekt ist, das einen Wert enthält, der über eine `getValue`-Funktion zugänglich ist. Eine naive Implementierung wäre:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Das ist suboptimal, weil jede Instanz ihre eigene Funktions-Eigenschaft hat, die dasselbe tut, was redundant und unnötig ist. Stattdessen können wir `getValue` auf den `[[Prototype]]` aller Boxen verschieben:

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

Auf diese Weise verweisen alle Boxen auf dieselbe Funktion, was den Speicherverbrauch senkt. Das manuelle Binden des `__proto__` bei jeder Objekterstellung ist jedoch immer noch sehr umständlich. An dieser Stelle verwenden wir eine _Konstruktorfunktion_, die den `[[Prototype]]` für jedes hergestellte Objekt automatisch setzt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

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

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die aus der `Box`-Konstruktorfunktion erstellt wurde. `Box.prototype` unterscheidet sich nicht wesentlich von dem `boxPrototype`-Objekt, das wir zuvor erstellt haben – es ist einfach ein normales Objekt. Jede Instanz, die aus einer Konstruktorfunktion erstellt wird, hat automatisch die `prototype`-Eigenschaft des Konstruktors als ihr `[[Prototype]]` – das heißt, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktorfunktion selbst verweist – das heißt, `Box.prototype.constructor === Box`. Dies ermöglicht es, den ursprünglichen Konstruktor von jeder Instanz aus zuzugreifen.

> [!NOTE]
> Wenn ein Nicht-Primitiver von der Konstruktorfunktion zurückgegeben wird, wird dieser Wert zum Ergebnis des `new`-Ausdrucks. In diesem Fall könnte `[[Prototype]]` nicht korrekt gebunden sein – das sollte in der Praxis jedoch selten vorkommen.

Die obige Konstruktorfunktion kann in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) wie folgt umgeschrieben werden:

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

Klassen sind eine Syntaxüberlagerung für Konstruktorfunktionen, was bedeutet, dass Sie weiterhin `Box.prototype` manipulieren können, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch als eine Abstraktion über den zugrunde liegenden Prototypmechanismus konzipiert sind, verwenden wir in diesem Tutorial die eher leichtgewichtige Konstruktorfunktionssyntax, um vollständig darzulegen, wie Prototypen funktionieren.

Da `Box.prototype` dasselbe Objekt referenziert wie der `[[Prototype]]` aller Instanzen, können wir das Verhalten aller Instanzen ändern, indem wir `Box.prototype` modifizieren.

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

Ein Korollar ist, _das erneute Zuweisen_ von `Constructor.prototype` (`Constructor.prototype = ...`) ist aus zwei Gründen eine schlechte Idee:

- Der `[[Prototype]]` von Instanzen, die vor der Neuzuweisung erstellt wurden, verweisen jetzt auf ein anderes Objekt als der `[[Prototype]]` von Instanzen, die nach der Neuzuweisung erstellt wurden – das Mutieren des `[[Prototype]]` einer Instanz beeinträchtigt nicht leer die andere.
- Sofern Sie nicht manuell die `constructor`-Eigenschaft neu setzen, kann der Konstruktor nicht mehr von `instance.constructor` aus nachvollzogen werden, was Nutzererwartungen brechen kann. Einige eingebaute Operationen lesen auch die `constructor`-Eigenschaft, und wenn diese nicht gesetzt ist, funktionieren sie möglicherweise nicht wie erwartet.

`Constructor.prototype` ist nur nützlich, wenn Instanzen erstellt werden. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, was der eigene Prototyp der Konstruktorfunktion ist, der `Function.prototype` ist – das heißt, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literalsyntaxen in JavaScript erstellen Instanzen, die den `[[Prototype]]` implizit setzen. Ein Beispiel:

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

Wir können sie in ihre Konstruktorsyntax umwandeln.

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Zum Beispiel sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, weshalb sie in allen Array-Instanzen automatisch verfügbar sind.

> [!WARNING]
> Es gibt ein Missverstehen, das früher weit verbreitet war – das Erweitern von `Object.prototype` oder einer der anderen eingebauten Prototypen. Ein Beispiel für dieses Missverstehen ist das Definieren von `Array.prototype.myMethod = function () {...}` und dann das Verwenden von `myMethod` auf allen Array-Instanzen.
>
> Diese Fehlhaltung wird _"monkey patching"_ genannt. Monkey Patching riskiert die zukunftssichere Kompatibilität, denn wenn die Sprache diese Methode in Zukunft hinzufügt, jedoch mit einer anderen Signatur, wird Ihr Code brechen. Dies hat zu Vorfällen wie dem [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt und kann ein großes Hindernis für die Weiterentwicklung der Sprache sein, da JavaScript versucht, das "Web nicht zu brechen".
>
> Der **einzige** gute Grund für die Erweiterung eines eingebauten Prototyps ist die Backportierung der Funktionen neuerer JavaScript-Engines, wie `Array.prototype.forEach`.

Es könnte interessant sein zu bemerken, dass aufgrund historischer Gründe einige eingebauten Konstruktoren selbst Instanzen sind. Zum Beispiel ist `Number.prototype` eine Zahl 0, `Array.prototype` ist ein leeres Array und `RegExp.prototype` ist `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

Dies ist jedoch nicht der Fall bei benutzerdefinierten Konstruktoren oder modernen Konstruktoren wie `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Längere Vererbungsketten aufbauen

Die `Constructor.prototype`-Eigenschaft wird zum `[[Prototype]]` der Instanzen des Konstruktors, wie sie ist – einschließlich des eigenen `[[Prototype]]` von `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _gewöhnliches Objekt_ – das heißt, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist – das heißt, `Object.getPrototypeOf(Object.prototype) === null`. Daher wird ein typischer Konstruktor die folgende Prototypenkette aufbauen:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototypketten zu erstellen, können wir den `[[Prototype]]` von `Constructor.prototype` über die Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) festlegen.

```js
function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

In Klassenterms entspricht dies der Verwendung der [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Syntax.

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Sie könnten auch einige Legacy-Codes sehen, die {{jsxref("Object.create()")}} verwenden, um die Vererbungskette zu erstellen. Da dies jedoch die `prototype`-Eigenschaft neu zuweist und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft entfernt, kann es fehleranfälliger sein, während Leistungsgewinne möglicherweise nicht offensichtlich sind, wenn die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Prototypen inspizieren: Ein tieferer Einblick

Lassen Sie uns genauer ansehen, was hinter den Kulissen passiert.

In JavaScript, wie oben erwähnt, können Funktionen Eigenschaften haben. Alle Funktionen haben eine spezielle Eigenschaft namens `prototype`. Bitte beachten Sie, dass der untenstehende Code eigenständig ist (es wird angenommen, dass sich kein weiterer JavaScript-Code auf der Webseite befindet außer dem untenstehenden Code). Für das beste Lernerlebnis wird dringend empfohlen, die Konsole zu öffnen, auf die Registerkarte "Konsole" zu navigieren, den untenstehenden JavaScript-Code zu kopieren und durch Drücken der Eingabetaste auszuführen. (Die Konsole ist in den meisten Entwicklertools für Webbrowser enthalten. Weitere Informationen sind für die [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/) und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) verfügbar.)

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

Wie oben zu sehen ist, hat `doSomething()` eine standardmäßige `prototype`-Eigenschaft, wie in der Konsole demonstriert. Nach dem Ausführen dieses Codes sollte die Konsole ein Objekt angezeigt haben, das ähnlich wie das folgende aussieht.

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
> Die Chrome-Konsole verwendet `[[Prototype]]`, um den Prototyp des Objekts zu kennzeichnen, gemäß der spec-Begriffe; Firefox verwendet `<prototype>`. Für die Konsistenz verwenden wir `[[Prototype]]`.

Wir können Eigenschaften zum Prototyp von `doSomething()` hinzufügen, wie unten gezeigt.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

Das führt zu:

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

Wir können nun den `new`-Operator verwenden, um eine Instanz von `doSomething()` basierend auf diesem Prototyp zu erstellen. Um den `new`-Operator zu verwenden, rufen Sie die Funktion normal auf, außer dass Sie sie mit `new` voranstellen. Das Aufrufen einer Funktion mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Eigenschaften können dann zu diesem Objekt hinzugefügt werden.

Probieren Sie den folgenden Code aus:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

Das ergibt eine Ausgabe ähnlich der folgenden:

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

Wie oben zu sehen, ist der `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`. Aber was bewirkt das? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, prüft die Laufzeit zuerst, ob `doSomeInstancing` diese Eigenschaft hat.

Wenn `doSomeInstancing` die Eigenschaft nicht hat, sucht die Laufzeit die Eigenschaft in `doSomeInstancing.[[Prototype]]` (alias `doSomething.prototype`). Wenn `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft hat, wird diese Eigenschaft auf `doSomeInstancing.[[Prototype]]` verwendet.

Andernfalls, wenn `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, wird `doSomeInstancing.[[Prototype]].[[Prototype]]` nach der gesuchten Eigenschaft durchsucht. Standardmäßig ist der `[[Prototype]]` der `prototype`-Eigenschaft einer Funktion `Object.prototype`. Daher wird `doSomeInstancing.[[Prototype]].[[Prototype]]` (alias `doSomething.prototype.[[Prototype]]` (alias `Object.prototype`)) dann nach der gesuchten Eigenschaft durchsucht.

Wenn die Eigenschaft in `doSomeInstancing.[[Prototype]].[[Prototype]]` nicht gefunden wird, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` durchlaufen. Es gibt jedoch ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, da `Object.prototype.[[Prototype]]` `null` ist. Dann, und nur dann, nachdem die gesamte Prototypenkette durchsucht wurde, kommt die Laufzeit zu dem Schluss, dass die Eigenschaft nicht existiert und dass der Wert an der Eigenschaft `undefined` ist.

Lassen Sie uns versuchen, noch mehr Code in die Konsole einzugeben:

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

Das führt zu folgendem:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Möglichkeiten zur Erstellung und Veränderung von Prototypketten

Wir haben zahlreiche Möglichkeiten kennengelernt, wie Objekte erstellt und ihre Prototypketten verändert werden können. Wir fassen die verschiedenen Ansätze systematisch zusammen und vergleichen Vor- und Nachteile jeder Methode.

### Objekte, erstellt mit Syntaxkonstrukten

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

Beim Verwenden des `__proto__`-Schlüssels in [Objektinitializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) führt das Angeben des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, nur stillschweigend zu einem Fehler, ohne eine Ausnahme auszulösen. Im Gegenteil zum [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Setter ist `__proto__` in Objektliteralinitialisierern standardisiert und optimiert und kann sogar leistungsfähiger sein als {{jsxref("Object.create")}}. Das deklarieren zusätzlicher eigener Eigenschaften des Objekts bei der Erstellung ist ergonomischer als {{jsxref("Object.create")}}.

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

Konstruktorfunktionen sind seit sehr früh in JavaScript verfügbar. Daher sind sie sehr schnell, sehr standardisiert und sehr JIT-optimierbar. Es ist jedoch schwer "richtig zu machen", weil damit hinzugefügte Methoden standardmäßig aufzählbar sind, was nicht konsistent mit der Klassensyntax oder wie eingebaute Methoden verhalten ist. Das Erstellen längerer Vererbungsketten ist auch fehleranfällig, wie zuvor gezeigt wurde.

### Mit Object.create()

Das Aufrufen von {{jsxref("Object.create()")}} erstellt ein neues Objekt. Der `[[Prototype]]` dieses Objekts ist das erste Argument der Funktion:

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

Ähnlich zum `__proto__`-Schlüssel in Objektinitialisierern ermöglicht `Object.create()` das direkte Setzen des Prototyps eines Objekts zur Erstellungszeit, was der Laufzeit ermöglicht, das Objekt weiter zu optimieren. Es erlaubt auch die Erzeugung von Objekten mit `null`-Prototyp, indem `Object.create(null)` verwendet wird. Der zweite Parameter von `Object.create()` erlaubt das präzise Festlegen der Attribute jeder Eigenschaft im neuen Objekt, was ein zweischneidiges Schwert sein kann:

- Es erlaubt das Erstellen von nicht-aufzählbaren Eigenschaften etc., während der Objekterstellung, was mit Objektliteral nicht möglich ist.
- Es ist viel wortreicher und fehleranfälliger als Objektliteral.
- Es kann langsamer als Objektliteral sein, insbesondere beim Erstellen vieler Eigenschaften.

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

Klassen bieten die höchste Lesbarkeit und Wartbarkeit beim Definieren komplexer Vererbungsstrukturen. [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sind ein Feature ohne triviale Ersetzung in prototypischen Vererbungen. Klassen sind jedoch weniger optimiert als traditionelle Konstruktorfunktionen und in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während alle oben aufgeführten Methoden die Prototypenkette zur Objekterstellungszeit setzen, erlaubt [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) das Mutieren der `[[Prototype]]`-Internen Eigenschaft eines bestehenden Objekts. Es kann sogar einen Prototyp bei einem prototypenlosen Objekt, das mit `Object.create(null)` erstellt wurde, erzwingen oder den Prototyp eines Objekts entfernen, indem es auf `null` gesetzt wird.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Sie sollten den Prototyp nach Möglichkeit während der Erstellung setzen, da das dynamische Setzen des Prototyps alle Optimierungen, die die Engines an der Prototypkette vorgenommen haben, stört. Es könnte einige Engines dazu veranlassen, Ihren Code für die Deoptimierung neu zu kompilieren, um sicherzustellen, dass er laut den Spezifikationen funktioniert.

### Mit dem **proto**-Accessor

Alle Objekte erben den [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Setter, mit dem der `[[Prototype]]` eines bestehenden Objekts gesetzt werden kann (sofern der `__proto__`-Schlüssel im Objekt nicht überschrieben ist).

> **Warning:** `Object.prototype.__proto__`-Accessor sind **nicht standardisiert** und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Im Vergleich zu `Object.setPrototypeOf` schlägt das Setzen von `__proto__` auf etwas, das kein Objekt ist, stillschweigend fehl, ohne eine Ausnahme auszulösen. Es hat auch eine leicht bessere Browserunterstützung. Es ist jedoch nicht standardisiert und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

## Leistung

Die Nachschlagezeit für Eigenschaften, die hoch oben in der Prototypenkette stehen, kann sich negativ auf die Leistung auswirken, und dies kann in der Leistungskritischen Code signifikant sein. Außerdem führt der Versuch, auf nicht vorhandene Eigenschaften zuzugreifen, stets dazu, dass die gesamte Prototypenkette durchlaufen wird.

Wenn Sie über die Eigenschaften eines Objekts iterieren, wird **jede** aufzählbare Eigenschaft, die sich in der Prototypenkette befindet, aufgezählt. Um zu überprüfen, ob ein Objekt eine Eigenschaft auf _sich selbst_ definiert hat und nicht irgendwo in seiner Prototypenkette, ist es notwendig, die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) zu verwenden. Alle Objekte, außer diejenigen mit `null` als `[[Prototype]]`, erben [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype` – solange es nicht weiter unten in der Prototypenkette überschrieben wurde. Um Ihnen ein konkretes Beispiel zu geben, nehmen wir den obigen Diagramm-Code, um dies zu veranschaulichen:

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

Note: Es ist **nicht** ausreichend zu überprüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft könnte sehr wohl existieren, aber ihr Wert kann einfach auf `undefined` gesetzt sein.

## Fazit

JavaScript kann für Entwickler, die von Java oder C++ kommen, etwas verwirrend sein, da es alles dynamisch, alles Laufzeit ist und es überhaupt keine statischen Typen gibt. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und selbst Funktionen sind Instanzen des `Function`-Konstruktors. Selbst die "Klassen" als Syntaxkonstrukte sind zur Laufzeit nur Konstruktorfunktionen.

Alle Konstruktorfunktionen in JavaScript haben eine spezielle Eigenschaft namens `prototype`, die mit dem `new`-Operator arbeitet. Die Referenz auf das Prototypobjekt wird in die interne `[[Prototype]]`-Eigenschaft der neuen Instanz kopiert. Zum Beispiel, wenn Sie `const a1 = new A()` tun, setzt JavaScript (nach dem Erstellen des Objekts im Speicher und vor dem Ausführen der Funktion `A()` mit `this` darauf definiert) `a1.[[Prototype]] = A.prototype`. Wenn Sie dann auf Eigenschaften der Instanz zugreifen, überprüft JavaScript zunächst, ob diese direkt auf diesem Objekt existieren, und wenn nicht, schaut es in `[[Prototype]]`. `[[Prototype]]` wird _rekursiv_ betrachtet, d.h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis es gefunden ist oder `Object.getPrototypeOf` `null` zurückgibt. Das bedeutet, dass alle auf `prototype` definierten Eigenschaften tatsächlich von allen Instanzen geteilt werden, und Sie können sogar später Teile von `prototype` ändern und die Änderungen in allen bestehenden Instanzen sehen.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` tun, würde `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething` verweisen – was das gleiche ist wie das `A.prototype.doSomething`, das Sie definiert haben, d.h. `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das prototypische Vererbungsmodell zu verstehen, bevor Sie komplexen Code schreiben, der darauf aufbaut. Beachten Sie auch die Länge der Prototypketten in Ihrem Code und brechen Sie sie gegebenenfalls auf, um mögliche Leistungsprobleme zu vermeiden. Außerdem sollten die nativen Prototypen **niemals** erweitert werden, es sei denn, es dient der Kompatibilität mit neueren JavaScript-Funktionen.
