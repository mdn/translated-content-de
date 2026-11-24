---
title: Vererbung und die Prototypenkette
slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

In der Programmierung bezeichnet _Vererbung_ die Weitergabe von Eigenschaften von einem Elternteil an ein Kind, sodass neuer Code die Funktionen von bestehendem Code wiederverwenden und darauf aufbauen kann. JavaScript implementiert Vererbung mithilfe von [Objekten](/de/docs/Web/JavaScript/Guide/Data_structures#objects). Jedes Objekt hat eine interne Verknüpfung zu einem anderen Objekt, seinem _Prototyp_. Auch dieses Prototypobjekt hat einen Prototyp, und so weiter, bis ein Objekt erreicht wird, dessen Prototyp `null` ist. Definitionsgemäß hat `null` keinen Prototyp und bildet das letzte Glied dieser **Prototypenkette**. Jedes Glied der Prototypenkette kann verändert werden; sogar der Prototyp lässt sich zur Laufzeit austauschen. Konzepte wie [statischer Dispatch](https://en.wikipedia.org/wiki/Static_dispatch) existieren daher in JavaScript nicht.

Für Entwickler, die mit klassenbasierten Sprachen wie Java oder C++ vertraut sind, kann JavaScript etwas verwirrend sein, da es [dynamisch](/de/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen hat. Obwohl dies oft als Schwäche von JavaScript angesehen wird, ist das prototypbasierte Vererbungsmodell selbst tatsächlich leistungsfähiger als das klassische Modell. Beispielsweise lässt sich auf einem prototypbasierten Modell recht einfach ein klassisches Modell aufbauen – so sind auch [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert.

Obwohl Klassen inzwischen weit verbreitet sind und sich als neues Paradigma in JavaScript etabliert haben, führen sie kein neues Vererbungsmuster ein. Klassen abstrahieren den prototypbasierten Mechanismus weitgehend; dennoch ist es hilfreich zu verstehen, wie Prototypen im Hintergrund funktionieren.

## Vererbung über die Prototypenkette

### Eigenschaften erben

JavaScript-Objekte sind dynamische Sammlungen von Eigenschaften (sogenannten **eigenen Eigenschaften**). Sie besitzen eine Verknüpfung zu einem Prototypobjekt. Beim Zugriff auf eine Objekteigenschaft wird nicht nur im Objekt selbst danach gesucht, sondern auch in dessen Prototyp, im Prototyp dieses Prototyps und so weiter, bis entweder eine Eigenschaft mit dem passenden Namen gefunden oder das Ende der Prototypenkette erreicht wird.

> [!NOTE]
> Gemäß dem ECMAScript-Standard bezeichnet die Schreibweise `someObject.[[Prototype]]` den Prototyp von `someObject`. Auf den internen Slot `[[Prototype]]` kann mit {{jsxref("Object.getPrototypeOf()")}} zugegriffen und er kann mit {{jsxref("Object.setPrototypeOf()")}} verändert werden. Dies entspricht dem JavaScript-Accessor [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), der nicht standardisiert ist, aber de facto von vielen JavaScript-Engines implementiert wird. Um Verwechslungen zu vermeiden und die Schreibweise dennoch knapp zu halten, verwenden wir `obj.[[Prototype]]` statt `obj.__proto__`. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Dies ist nicht mit der Eigenschaft `func.prototype` von Funktionen zu verwechseln. Sie legt fest, welcher `[[Prototype]]` allen _Instanzen_ von Objekten zugewiesen wird, die mit der betreffenden Funktion als Konstruktor erstellt werden. Die Eigenschaft `prototype` von Konstruktorfunktionen behandeln wir in [einem späteren Abschnitt](#konstruktoren).

Es gibt mehrere Möglichkeiten, den `[[Prototype]]` eines Objekts festzulegen. Diese werden in [einem späteren Abschnitt](#verschiedene_möglichkeiten,_prototypenketten_zu_erstellen_und_zu_verändern) aufgeführt. Zur Veranschaulichung verwenden wir zunächst die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter). Beachten Sie, dass sich die Syntax `{ __proto__: ... }` vom Accessor `obj.__proto__` unterscheidet: Erstere ist standardisiert und nicht veraltet.

In einem Objektliteral wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` – der entweder `null` oder ein anderes Objekt sein muss – zum `[[Prototype]]` des durch das Literal dargestellten Objekts. Die anderen Schlüssel wie `a` und `b` werden zu _eigenen Eigenschaften_ des Objekts. Diese Syntax ist gut nachvollziehbar, da `[[Prototype]]` lediglich eine „interne Eigenschaft“ des Objekts ist.

Folgendes geschieht beim Zugriff auf eine Eigenschaft:

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

Wenn Sie einem Objekt eine Eigenschaft zuweisen, entsteht eine eigene Eigenschaft. Eine Ausnahme von den Regeln für das Lesen und Setzen von Eigenschaften besteht, wenn ein [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) den Zugriff abfängt.

Auf ähnliche Weise können Sie längere Prototypenketten erstellen. Die Eigenschaft wird dann entlang der gesamten Kette gesucht.

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

### „Methoden“ erben

JavaScript hat keine „{{Glossary("Method", "Methoden")}}“ in dem Sinne, wie klassenbasierte Sprachen sie definieren. In JavaScript kann jede Funktion einem Objekt als Eigenschaft hinzugefügt werden. Eine geerbte Funktion verhält sich wie jede andere Eigenschaft. Das gilt auch für das oben gezeigte Überdecken von Eigenschaften – in diesem Fall eine Form des _Überschreibens von Methoden_.

Wird eine geerbte Funktion ausgeführt, verweist der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das erbende Objekt und nicht auf das Prototypobjekt, in dem die Funktion eine eigene Eigenschaft ist.

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

Die Stärke von Prototypen liegt darin, dass wir eine Gruppe von Eigenschaften wiederverwenden können, wenn diese auf jeder Instanz vorhanden sein sollen – insbesondere Methoden. Angenommen, wir möchten mehrere Boxen erstellen. Jede Box ist ein Objekt, das einen Wert enthält, auf den über eine Funktion `getValue` zugegriffen werden kann. Eine naive Implementierung wäre:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Das ist nicht optimal, weil jede Instanz eine eigene Funktionseigenschaft besitzt, die dasselbe tut. Das ist redundant und unnötig. Stattdessen können wir `getValue` in den `[[Prototype]]` aller Boxen verschieben:

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

So verweist die Methode `getValue` aller Boxen auf dieselbe Funktion, was den Speicherverbrauch senkt. Allerdings ist es weiterhin umständlich, `__proto__` bei jeder Objekterstellung manuell zuzuweisen. Hierfür können wir eine _Konstruktorfunktion_ verwenden, die den `[[Prototype]]` für jedes erstellte Objekt automatisch festlegt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

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

Wir bezeichnen `new Box(1)` als _Instanz_, die mit der Konstruktorfunktion `Box` erstellt wurde. `Box.prototype` unterscheidet sich kaum von dem zuvor erstellten Objekt `boxPrototype` – es ist ein gewöhnliches Objekt. Jede mit einer Konstruktorfunktion erstellte Instanz erhält automatisch die Eigenschaft [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) des Konstruktors als ihren `[[Prototype]]`. Es gilt also `Object.getPrototypeOf(new Box()) === Box.prototype`. Standardmäßig hat `Constructor.prototype` eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor). Sie verweist auf die Konstruktorfunktion selbst; es gilt also `Box.prototype.constructor === Box`. Dadurch lässt sich von jeder Instanz aus auf den ursprünglichen Konstruktor zugreifen.

> [!NOTE]
> Wenn die Konstruktorfunktion einen nicht-primitiven Wert zurückgibt, wird dieser Wert zum Ergebnis des `new`-Ausdrucks. In diesem Fall ist der `[[Prototype]]` möglicherweise nicht korrekt zugewiesen. In der Praxis sollte dies allerdings selten vorkommen.

Die obige Konstruktorfunktion lässt sich mit [Klassen](/de/docs/Web/JavaScript/Reference/Classes) wie folgt umschreiben:

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

Klassen sind syntaktischer Zucker für Konstruktorfunktionen. Sie können also weiterhin `Box.prototype` verändern, um das Verhalten aller Instanzen anzupassen. Da Klassen jedoch als Abstraktion des zugrunde liegenden Prototypenmechanismus konzipiert sind, verwenden wir in diesem Tutorial die schlankere Syntax von Konstruktorfunktionen, um die Funktionsweise von Prototypen vollständig zu veranschaulichen.

Da `Box.prototype` auf dasselbe Objekt verweist wie der `[[Prototype]]` aller Instanzen, können wir das Verhalten aller Instanzen ändern, indem wir `Box.prototype` verändern.

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

Daraus folgt, dass eine _Neuzuweisung_ von `Constructor.prototype` (`Constructor.prototype = ...`) aus zwei Gründen keine gute Idee ist:

- Der `[[Prototype]]` von Instanzen, die vor der Neuzuweisung erstellt wurden, verweist nun auf ein anderes Objekt als der `[[Prototype]]` später erstellter Instanzen. Eine Änderung am einen `[[Prototype]]` wirkt sich daher nicht mehr auf den anderen aus.
- Wenn Sie die Eigenschaft `constructor` nicht manuell erneut setzen, lässt sich die Konstruktorfunktion nicht mehr über `instance.constructor` ermitteln. Das kann den Erwartungen der Nutzer widersprechen. Auch einige integrierte Operationen lesen die Eigenschaft `constructor` aus und funktionieren möglicherweise nicht wie erwartet, wenn sie nicht gesetzt ist.

`Constructor.prototype` ist nur beim Erstellen von Instanzen relevant. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, dem _eigenen_ Prototyp der Konstruktorfunktion. Dieser ist `Function.prototype`; es gilt also `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literalsyntaxen in JavaScript erstellen Instanzen, deren `[[Prototype]]` implizit gesetzt wird. Zum Beispiel:

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

Wir können sie in die entsprechende Konstruktorform umschreiben.

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

„Array-Methoden“ wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) sind beispielsweise einfach Methoden, die auf `Array.prototype` definiert sind. Deshalb stehen sie automatisch allen Array-Instanzen zur Verfügung.

> [!WARNING]
> Eine früher verbreitete problematische Praxis besteht darin, `Object.prototype` oder einen anderen integrierten Prototyp zu erweitern. Ein Beispiel ist die Definition von `Array.prototype.myMethod = function () {...}` und die anschließende Verwendung von `myMethod` auf allen Array-Instanzen.
>
> Diese Praxis wird _Monkey Patching_ genannt. Monkey Patching gefährdet die zukünftige Kompatibilität: Wenn die Sprache später eine gleichnamige Methode mit einer anderen Signatur hinzufügt, funktioniert Ihr Code nicht mehr. Das hat zu Vorfällen wie [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt und kann die Weiterentwicklung der Sprache erheblich erschweren, da JavaScript bestrebt ist, „das Web nicht kaputtzumachen“.
>
> Der **einzige** gute Grund, einen integrierten Prototyp zu erweitern, ist das Nachrüsten von Funktionen neuerer JavaScript-Engines, etwa `Array.prototype.forEach`.

Interessanterweise sind die `prototype`-Eigenschaften einiger integrierter Konstruktoren aus historischen Gründen selbst Instanzen. Beispielsweise ist `Number.prototype` ein `Number`-Objekt, das die Zahl 0 umschließt, und `Array.prototype` ist ein leeres Array.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
Boolean.prototype.valueOf(); // false
Function.prototype(); // Function.prototype is a no-op function by itself
```

Das gilt jedoch weder für benutzerdefinierte Konstruktoren noch für moderne Konstruktoren wie `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Längere Vererbungsketten aufbauen

Die Eigenschaft `Constructor.prototype` wird unverändert zum `[[Prototype]]` der Instanzen des Konstruktors – einschließlich des eigenen `[[Prototype]]` von `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _gewöhnliches Objekt_; es gilt also `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` den Wert `null` hat; es gilt also `Object.getPrototypeOf(Object.prototype) === null`. Ein typischer Konstruktor erzeugt daher die folgende Prototypenkette:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototypenketten aufzubauen, können wir den `[[Prototype]]` von `Constructor.prototype` mit der Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) festlegen.

```js
function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Bei Klassen entspricht dies der Verwendung der [`extends`-Syntax](/de/docs/Web/JavaScript/Reference/Classes/extends).

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Möglicherweise stoßen Sie auch auf älteren Code, der die Vererbungskette mit {{jsxref("Object.create()")}} aufbaut. Dabei wird jedoch die Eigenschaft `prototype` neu zugewiesen und die Eigenschaft [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) entfernt. Das kann fehleranfälliger sein, während mögliche Leistungsvorteile nicht unbedingt erkennbar sind, wenn die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Prototypen untersuchen: ein genauerer Blick

Sehen wir uns genauer an, was im Hintergrund geschieht.

Wie bereits erwähnt, können Funktionen in JavaScript Eigenschaften besitzen. Alle Funktionen haben eine besondere Eigenschaft namens `prototype`. Beachten Sie, dass der folgende Code eigenständig ist: Sie können davon ausgehen, dass außer diesem Code kein weiteres JavaScript auf der Webseite vorhanden ist. Für einen möglichst guten Lerneffekt empfehlen wir Ihnen, eine Konsole zu öffnen, zum Tab „Console“ zu wechseln, den folgenden JavaScript-Code hineinzukopieren und ihn mit der Eingabetaste auszuführen. (Die Konsole ist in den Entwicklerwerkzeugen der meisten Webbrowser enthalten. Weitere Informationen finden Sie zu den [Firefox-Entwicklerwerkzeugen](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/) und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/).)

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

Wie die Konsolenausgabe zeigt, hat `doSomething()` standardmäßig eine Eigenschaft `prototype`. Nach Ausführung dieses Codes sollte die Konsole ein Objekt angezeigt haben, das ungefähr so aussieht:

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
> Die Chrome-Konsole verwendet gemäß der Terminologie der Spezifikation `[[Prototype]]` für den Prototyp eines Objekts; Firefox verwendet `<prototype>`. Der Einheitlichkeit halber verwenden wir `[[Prototype]]`.

Wie unten gezeigt, können wir dem Prototyp von `doSomething()` Eigenschaften hinzufügen.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

Das führt zu folgendem Ergebnis:

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

Nun können wir mit dem Operator `new` eine Instanz von `doSomething()` auf Grundlage dieses Prototyps erstellen. Dazu rufen Sie die Funktion wie gewohnt auf, stellen dem Aufruf aber `new` voran. Wird eine Funktion mit dem Operator `new` aufgerufen, gibt sie ein Objekt zurück, das eine Instanz der Funktion ist. Diesem Objekt können anschließend Eigenschaften hinzugefügt werden.

Probieren Sie den folgenden Code aus:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

Die Ausgabe sieht ungefähr so aus:

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

Wie oben zu sehen ist, ist der `[[Prototype]]` von `doSomeInstancing` gleich `doSomething.prototype`. Was bedeutet das? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, prüft die Laufzeitumgebung zunächst, ob `doSomeInstancing` diese Eigenschaft selbst besitzt.

Ist dies nicht der Fall, sucht die Laufzeitumgebung in `doSomeInstancing.[[Prototype]]` (auch bekannt als `doSomething.prototype`) nach der Eigenschaft. Wenn `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft besitzt, wird diese Eigenschaft verwendet.

Andernfalls wird `doSomeInstancing.[[Prototype]].[[Prototype]]` auf die Eigenschaft geprüft. Standardmäßig ist der `[[Prototype]]` der Eigenschaft `prototype` jeder Funktion gleich `Object.prototype`. Deshalb wird anschließend in `doSomeInstancing.[[Prototype]].[[Prototype]]` (auch bekannt als `doSomething.prototype.[[Prototype]]`, also `Object.prototype`) nach der Eigenschaft gesucht.

Wird die Eigenschaft auch in `doSomeInstancing.[[Prototype]].[[Prototype]]` nicht gefunden, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` geprüft. Hier gibt es allerdings ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, weil `Object.prototype.[[Prototype]]` gleich `null` ist. Erst nachdem die gesamte Prototypenkette der `[[Prototype]]`-Verweise durchsucht wurde, stellt die Laufzeitumgebung fest, dass die Eigenschaft nicht existiert und ihr Wert `undefined` ist.

Geben wir noch etwas Code in die Konsole ein:

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

Das führt zu folgendem Ergebnis:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Möglichkeiten, Prototypenketten zu erstellen und zu verändern

Wir haben zahlreiche Möglichkeiten kennengelernt, Objekte zu erstellen und ihre Prototypenketten zu verändern. Im Folgenden fassen wir diese Möglichkeiten systematisch zusammen und vergleichen ihre Vor- und Nachteile.

### Mit Syntaxkonstrukten erstellte Objekte

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

Wenn Sie den Schlüssel `__proto__` in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verwenden und ihm einen Wert zuweisen, der kein Objekt ist, schlägt dies lediglich stillschweigend fehl, ohne eine Ausnahme auszulösen. Anders als der Setter [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) ist `__proto__` in Objektliteralen standardisiert und optimiert und kann sogar schneller sein als {{jsxref("Object.create")}}. Zusätzliche eigene Eigenschaften direkt beim Erstellen des Objekts zu deklarieren, ist zudem bequemer als mit {{jsxref("Object.create")}}.

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

Konstruktorfunktionen gibt es bereits seit den frühen Versionen von JavaScript. Sie sind daher schnell, standardisiert und lassen sich gut per JIT optimieren. Allerdings ist ihre korrekte Verwendung schwierig: Auf diese Weise hinzugefügte Methoden sind standardmäßig aufzählbar, was weder der Klassensyntax noch dem Verhalten integrierter Methoden entspricht. Wie zuvor gezeigt, ist auch das Erstellen längerer Vererbungsketten fehleranfällig.

### Mit Object.create()

Ein Aufruf von {{jsxref("Object.create()")}} erstellt ein neues Objekt. Der `[[Prototype]]` dieses Objekts ist das erste Argument der Funktion:

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

Wie der Schlüssel `__proto__` in Objektinitialisierern ermöglicht `Object.create()` es, den Prototyp eines Objekts direkt bei seiner Erstellung festzulegen. Dadurch kann die Laufzeitumgebung das Objekt besser optimieren. Mit `Object.create(null)` lassen sich außerdem Objekte mit `null` als Prototyp erstellen. Der zweite Parameter von `Object.create()` ermöglicht es, die Attribute jeder Eigenschaft des neuen Objekts genau festzulegen. Das hat Vor- und Nachteile:

- Sie können beim Erstellen des Objekts nicht aufzählbare Eigenschaften und Ähnliches anlegen, was mit Objektliteralen nicht möglich ist.
- Die Schreibweise ist deutlich ausführlicher und fehleranfälliger als bei Objektliteralen.
- Sie kann langsamer sein als Objektliterale, insbesondere wenn viele Eigenschaften erstellt werden.

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

Klassen bieten die beste Lesbarkeit und Wartbarkeit beim Definieren komplexer Vererbungsstrukturen. [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind eine Funktion, für die es in der prototypbasierten Vererbung keinen einfachen Ersatz gibt. Allerdings sind Klassen weniger gut optimiert als herkömmliche Konstruktorfunktionen und werden in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während alle oben genannten Methoden die Prototypenkette beim Erstellen eines Objekts festlegen, können Sie mit [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) die interne Eigenschaft `[[Prototype]]` eines vorhandenen Objekts verändern. So können Sie sogar einem mit `Object.create(null)` erstellten prototyplosen Objekt einen Prototyp zuweisen oder den Prototyp eines Objekts entfernen, indem Sie ihn auf `null` setzen.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Legen Sie den Prototyp nach Möglichkeit jedoch beim Erstellen des Objekts fest. Wird er nachträglich geändert, werden die Optimierungen beeinträchtigt, die Engines für die Prototypenkette vorgenommen haben. Manche Engines müssen Ihren Code dann möglicherweise zur Deoptimierung neu kompilieren, damit er sich gemäß der Spezifikation verhält.

### Mit dem Accessor \_\_proto\_\_

Alle Objekte erben den Setter [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Mit ihm lässt sich der `[[Prototype]]` eines vorhandenen Objekts festlegen, sofern der Schlüssel `__proto__` auf dem Objekt nicht überschrieben wurde.

> [!WARNING]
> `Object.prototype.__proto__`-Accessoren sind **nicht standardisiert** und veraltet. Verwenden Sie stattdessen fast immer `Object.setPrototypeOf`.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Anders als bei `Object.setPrototypeOf` schlägt das Setzen von `__proto__` auf einen Wert, der kein Objekt ist, stillschweigend fehl, ohne eine Ausnahme auszulösen. Außerdem ist die Browser-Unterstützung geringfügig besser. Dennoch ist dieser Accessor nicht standardisiert und veraltet. Verwenden Sie stattdessen fast immer `Object.setPrototypeOf`.

## Leistung

Die Suche nach Eigenschaften weit oben in der Prototypenkette kann die Leistung beeinträchtigen. In leistungskritischem Code kann dies erheblich sein. Auch beim Zugriff auf nicht vorhandene Eigenschaften wird stets die gesamte Prototypenkette durchsucht.

Wenn über die Eigenschaften eines Objekts iteriert wird, werden außerdem **alle** aufzählbaren Eigenschaften in der Prototypenkette mit erfasst. Um zu prüfen, ob eine Eigenschaft auf dem Objekt _selbst_ und nicht an anderer Stelle in seiner Prototypenkette definiert ist, müssen Sie die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) verwenden. Alle Objekte außer solchen mit `null` als `[[Prototype]]` erben [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype` – sofern die Methode nicht weiter unten in der Prototypenkette überschrieben wurde. Zur Veranschaulichung verwenden wir den obigen Beispielcode mit dem Graphen:

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

Hinweis: Es reicht **nicht** aus, zu prüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft kann durchaus existieren, obwohl ihr Wert auf `undefined` gesetzt ist.

## Fazit

JavaScript kann für Entwickler, die von Java oder C++ kommen, etwas verwirrend sein: Alles ist dynamisch, vieles geschieht zur Laufzeit, und statische Typen gibt es nicht. Alles ist entweder ein Objekt (eine Instanz) oder eine Funktion (ein Konstruktor); selbst Funktionen sind Instanzen des Konstruktors `Function`. Auch „Klassen“ sind als Syntaxkonstrukte zur Laufzeit lediglich Konstruktorfunktionen.

Alle Konstruktorfunktionen in JavaScript besitzen eine besondere Eigenschaft namens `prototype`, die mit dem Operator `new` zusammenwirkt. Die Referenz auf das Prototypobjekt wird in die interne Eigenschaft `[[Prototype]]` der neuen Instanz kopiert. Wenn Sie beispielsweise `const a1 = new A()` ausführen, setzt JavaScript `a1.[[Prototype]] = A.prototype`, nachdem das Objekt im Speicher erstellt wurde und bevor die Funktion `A()` mit dem darauf verweisenden `this` ausgeführt wird. Wenn Sie anschließend auf Eigenschaften der Instanz zugreifen, prüft JavaScript zuerst, ob sie direkt auf diesem Objekt vorhanden sind. Falls nicht, sucht es in `[[Prototype]]`. Diese Suche erfolgt _rekursiv_, also über `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis die Eigenschaft gefunden wird oder `Object.getPrototypeOf` den Wert `null` zurückgibt. Somit werden alle auf `prototype` definierten Eigenschaften effektiv von allen Instanzen gemeinsam genutzt. Sie können sogar später Teile von `prototype` ändern, sodass die Änderungen in allen vorhandenen Instanzen sichtbar werden.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` ausführen, verweist `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething`. Das ist dieselbe Funktion wie das von Ihnen definierte `A.prototype.doSomething`; es gilt also `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Bevor Sie komplexen Code schreiben, der prototypbasierte Vererbung nutzt, sollten Sie dieses Modell unbedingt verstehen. Achten Sie außerdem auf die Länge der Prototypenketten in Ihrem Code und verkürzen Sie sie gegebenenfalls, um mögliche Leistungsprobleme zu vermeiden. Integrierte Prototypen sollten **niemals** erweitert werden, es sei denn, dies dient der Kompatibilität mit neueren JavaScript-Funktionen.
