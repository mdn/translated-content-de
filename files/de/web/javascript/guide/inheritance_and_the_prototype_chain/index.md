---
title: Vererbung und die Prototypkette
slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Advanced")}}

In der Programmierung bezieht sich _Vererbung_ darauf, Merkmale von einem Elternteil auf ein Kind zu übertragen, sodass ein neues Stück Code die Eigenschaften eines bestehenden wiederverwenden und darauf aufbauen kann. JavaScript implementiert Vererbung durch die Verwendung von [Objekten](/de/docs/Web/JavaScript/Guide/Data_structures#objects). Jedes Objekt hat eine interne Verbindung zu einem anderen Objekt, das als sein _Prototyp_ bezeichnet wird. Dieses Prototyp-Objekt hat einen eigenen Prototyp und so weiter, bis ein Objekt erreicht wird, das `null` als seinen Prototyp hat. Per Definition hat `null` keinen Prototyp und fungiert als das letzte Glied in dieser **Prototypkette**. Es ist möglich, jedes Mitglied der Prototypkette zu verändern oder sogar den Prototyp zur Laufzeit auszutauschen, sodass Konzepte wie [statische Disparagierung](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht existieren.

JavaScript ist ein wenig verwirrend für Entwickler, die an klassenbasierte Sprachen (wie Java oder C++) gewöhnt sind, da es [dynamisch](/de/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen hat. Obwohl diese Verwirrung oft als eine Schwäche von JavaScript betrachtet wird, ist das Prototypenvererbungsmodell selbst tatsächlich mächtiger als das klassische Modell. Es ist beispielsweise ziemlich trivial, ein klassisches Modell auf ein Prototypenmodell aufzubauen — was erklärt, wie [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert sind.

Obwohl Klassen jetzt weit verbreitet sind und in JavaScript ein neues Paradigma geworden sind, bringen Klassen kein neues Vererbungsmuster mit sich. Während Klassen den größten Teil des Prototypenmechanismus abstrahieren, ist es dennoch nützlich zu verstehen, wie Prototypen unter der Haube funktionieren.

## Vererbung mit der Prototypkette

### Vererben von Eigenschaften

JavaScript-Objekte sind dynamische "Beutel" von Eigenschaften (bezeichnet als **eigene Eigenschaften**). JavaScript-Objekte haben eine Verbindung zu einem Prototyp-Objekt. Beim Versuch, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur auf dem Objekt gesucht, sondern auch auf dem Prototyp des Objekts, dem Prototyp des Prototyps und so weiter, bis entweder eine Eigenschaft mit einem übereinstimmenden Namen gefunden wird oder das Ende der Prototypkette erreicht ist.

> [!NOTE]
> Nach dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Der `[[Prototype]]`-Interne Slot kann mit den Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} jeweils abgerufen und geändert werden. Dies entspricht dem JavaScript-Zugriff [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), der nicht standardisiert, aber von vielen JavaScript-Engines faktisch implementiert ist. Um Verwirrung zu vermeiden, verwenden wir in unserer Notation nicht `obj.__proto__`, sondern `obj.[[Prototype]]`. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Es sollte nicht mit der `func.prototype`-Eigenschaft von Funktionen verwechselt werden, die stattdessen den `[[Prototype]]` angibt, der allen _Instanzen_ von Objekten zugewiesen wird, die durch die gegebene Funktion erstellt werden, wenn sie als Konstruktor verwendet wird. Wir werden die `prototype`-Eigenschaft von Konstruktorfunktionen [in einem späteren Abschnitt](#konstruktoren) besprechen.

Es gibt mehrere Möglichkeiten, den `[[Prototype]]` eines Objekts anzugeben, die in [einem späteren Abschnitt](#verschiedene_möglichkeiten_zum_erstellen_und_verändern_von_prototypketten) aufgeführt sind. Für jetzt verwenden wir die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung. Es ist erwähnenswert, dass die Syntax `{ __proto__: ... }` anders ist als der `obj.__proto__`-Zugriff: Erstere ist standardmäßig und nicht veraltet.

In einem Objektliteral wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` (der entweder `null` oder ein anderes Objekt sein muss) zum `[[Prototype]]` des durch das Literal dargestellten Objekts, während die anderen Schlüssel wie `a` und `b` zu den _eigenen Eigenschaften_ des Objekts werden. Diese Syntax liest sich sehr natürlich, da `[[Prototype]]` nur eine "interne Eigenschaft" des Objekts ist.

Hier ist, was passiert, wenn versucht wird, auf eine Eigenschaft zuzugreifen:

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

Das Setzen einer Eigenschaft auf ein Objekt erstellt eine eigene Eigenschaft. Die einzige Ausnahme zu den Regeln für das Abrufen und Setzen von Verhalten ist, wenn es durch einen [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen wird.

Ebenso können Sie längere Prototypketten erstellen, und eine Eigenschaft wird auf allen von ihnen gesucht.

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

### Vererben von "Methoden"

JavaScript hat keine "{{Glossary("Method", "Methoden")}}" in der Form, in der klassenbasierte Sprachen sie definieren. In JavaScript kann jede Funktion einem Objekt in Form einer Eigenschaft hinzugefügt werden. Eine geerbte Funktion agiert genauso wie jede andere Eigenschaft, einschließlich der oben gezeigten Eigenschaftsüberschattung (in diesem Fall eine Form von _Methodenüberschreibung_).

Wenn eine geerbte Funktion ausgeführt wird, zeigt der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das ererbende Objekt, nicht auf das Prototyp-Objekt, bei dem die Funktion eine eigene Eigenschaft ist.

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

Die Stärke der Prototypen liegt darin, dass wir eine Reihe von Eigenschaften wiederverwenden können, wenn sie auf jeder Instanz vorhanden sein sollten — insbesondere für Methoden. Angenommen, wir sollen eine Reihe von Boxen erstellen, wobei jede Box ein Objekt ist, das einen Wert enthält, der über eine `getValue`-Funktion abgerufen werden kann. Eine naive Implementierung wäre:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Dies ist suboptimal, da jede Instanz ihre eigene Funktionseigenschaft hat, die dasselbe tut, was redundant und unnötig ist. Stattdessen können wir `getValue` zum `[[Prototype]]` aller Boxen verschieben:

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

Auf diese Weise bezieht sich die `getValue`-Methode aller Boxen auf dieselbe Funktion, was den Speicherverbrauch senkt. Das manuelle Binden des `__proto__` bei jeder Objekterstellung ist jedoch immer noch sehr umständlich. Hier würden wir eine _Konstruktorfunktion_ verwenden, die das `[[Prototype]]` für jede hergestellte Objekt automatisch setzt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

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

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die aus der `Box`-Konstruktorfunktion erstellt wurde. `Box.prototype` unterscheidet sich nicht wesentlich von dem `boxPrototype`-Objekt, das wir zuvor erstellt haben — es ist einfach ein einfaches Objekt. Jede Instanz, die aus einer Konstruktorfunktion erstellt wird, hat automatisch die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft des Konstruktors als seinen `[[Prototype]]` — das bedeutet `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktorfunktion selbst verweist — das heißt, `Box.prototype.constructor === Box`. Dies ermöglicht es, vom jede Instanz aus den ursprünglichen Konstruktor zuzugreifen.

> [!NOTE]
> Wenn ein Nicht-Primitive von der Konstruktorfunktion zurückgegeben wird, wird dieser Wert das Ergebnis des `new`-Ausdrucks. In diesem Fall wird der `[[Prototype]]` möglicherweise nicht korrekt gebunden — das sollte in der Praxis jedoch nicht oft vorkommen.

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

Klassen sind Syntaxzucker über Konstruktorfunktionen, was bedeutet, dass Sie immer noch `Box.prototype` manipulieren können, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch als eine Abstraktion über den zugrunde liegenden Prototypmechanismus konzipiert sind, werden wir die leichtergewichtige Konstruktorfunktionssyntax für dieses Tutorial verwenden, um vollständig zu demonstrieren, wie Prototypen funktionieren.

Da `Box.prototype` auf dasselbe Objekt wie der `[[Prototype]]` aller Instanzen verweist, können wir das Verhalten aller Instanzen ändern, indem wir `Box.prototype` verändern.

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

Ein Korollar ist, das _Neuzuweisen_ von `Constructor.prototype` (`Constructor.prototype = ...`) ist eine schlechte Idee aus zwei Gründen:

- Der `[[Prototype]]` von Instanzen, die vor der Neuzuweisung erstellt wurden, verweist jetzt auf ein anderes Objekt als der `[[Prototype]]` von Instanzen, die nach der Neuzuweisung erstellt wurden — das Verändern eines `[[Prototype]]` verändert das andere nicht mehr.
- Es sei denn, Sie setzen die `constructor`-Eigenschaft manuell neu, kann die Konstruktorfunktion nicht mehr von `instance.constructor` aus nachverfolgt werden, was das Benutzererwartungen brechen kann. Einige integrierte Operationen lesen auch die `constructor`-Eigenschaft, und wenn sie nicht gesetzt ist, funktionieren sie möglicherweise nicht wie erwartet.

`Constructor.prototype` ist nur nützlich beim Konstruieren von Instanzen. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, was der eigene Prototyp der Konstruktorfunktion ist, was `Function.prototype` ist — das bedeutet, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literal-Syntaxen in JavaScript erstellen Instanzen, die implizit den `[[Prototype]]` setzen. Zum Beispiel:

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

Zum Beispiel sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, weshalb sie automatisch bei allen Array-Instanzen verfügbar sind.

> [!WARNING]
> Es gibt eine Missbrauchsfunktion, die früher weit verbreitet war — das Erweitern von `Object.prototype` oder einem der anderen eingebauten Prototypen. Ein Beispiel für diese Missbrauchsfunktion wäre, `Array.prototype.myMethod = function () {...}` zu definieren und dann `myMethod` auf allen Array-Instanzen zu verwenden.
>
> Diese Missbrauchsfunktion wird als _Affenspatching_ bezeichnet. Das Durchführen von Affenspatching birgt das Risiko von Abwärtskompatibilität, weil, wenn die Sprache in der Zukunft diese Methode hinzufügt, aber mit einer anderen Signatur, Ihr Code nicht mehr funktioniert. Es hat zu Vorfällen wie [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt und kann ein großes Ärgernis für die Weiterentwicklung der Sprache sein, da JavaScript versucht, das Web "nicht zu brechen".
>
> **Der einzige** gute Grund, einen eingebauten Prototyp zu erweitern, ist das Rückportieren der Funktionen neuerer JavaScript-Engines, wie `Array.prototype.forEach`.

Es könnte interessant sein zu bemerken, dass einige eingebaute Konstruktoren aufgrund historischer Gründe ihre `prototype`-Eigenschaft selbst Instanzen sind. Zum Beispiel ist `Number.prototype` eine Nummer 0, `Array.prototype` ist ein leeres Array und `RegExp.prototype` ist `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

Dies ist jedoch nicht der Fall für benutzerdefinierte Konstruktoren oder für moderne Konstruktoren wie `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Längere Vererbungsketten aufbauen

Die `Constructor.prototype`-Eigenschaft wird zum `[[Prototype]]` der Instanzen des Konstruktors, wie sie ist — einschließlich des eigenen `[[Prototype]]` von `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _einfaches Objekt_ — das bedeutet `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist — das bedeutet `Object.getPrototypeOf(Object.prototype) === null`. Daher wird ein typischer Konstruktor die folgende Prototypkette erstellen:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototypketten aufzubauen, können wir den `[[Prototype]]` von `Constructor.prototype` über die Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) setzen.

```js
function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

In Klassensprache entspricht dies der Verwendung der Syntax [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Sie können auch einige Legacy-Codes sehen, die {{jsxref("Object.create()")}} verwenden, um die Vererbungskette aufzubauen. Da dies jedoch die `prototype`-Eigenschaft neu zuweist und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft entfernt, kann es fehleranfälliger sein, während Leistungsgewinne möglicherweise nicht offensichtlich sind, wenn die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Inspektieren von Prototypen: ein tieferer Einblick

Lassen Sie uns ein bisschen genauer darauf schauen, was im Hintergrund passiert.

In JavaScript, wie oben erwähnt, können Funktionen Eigenschaften haben. Alle Funktionen haben eine spezielle Eigenschaft namens `prototype`. Bitte beachten Sie, dass der nachstehende Code eigenständig ist (es kann davon ausgegangen werden, dass kein anderer JavaScript-Code auf der Webseite vorhanden ist außer dem untenstehenden Code). Für das beste Lernerlebnis wird dringend empfohlen, dass Sie eine Konsole öffnen, zur Registerkarte "Konsole" navigieren, den untenstehenden JavaScript-Code kopieren und durch Drücken der Enter-/Return-Taste ausführen. (Die Konsole ist in den meisten Webbrowser-Entwicklertools enthalten. Weitere Informationen sind für [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/) und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) verfügbar.)

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

Wie oben gezeigt, hat `doSomething()` eine Standard-`prototype`-Eigenschaft, wie die Konsole zeigt. Nach dem Ausführen dieses Codes sollte die Konsole ein Objekt angezeigt haben, das ähnlich diesem aussieht.

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
> Die Chrome-Konsole verwendet `[[Prototype]]`, um den Prototyp des Objekts zu bezeichnen, in Übereinstimmung mit den Spezifikationsterminen; Firefox verwendet `<prototype>`. For Konsistenz werden wir `[[Prototype]]` verwenden.

Wir können Eigenschaften zum Prototypen von `doSomething()` hinzufügen, wie unten gezeigt.

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

Wir können jetzt den `new`-Operator verwenden, um eine Instanz von `doSomething()` basierend auf diesem Prototyp zu erstellen. Um den `new`-Operator zu verwenden, rufen Sie die Funktion normalerweise auf, außer dass Sie sie mit `new` voranstellen. Der Aufruf einer Funktion mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Dann können Eigenschaften zu diesem Objekt hinzugefügt werden.

Versuchen Sie den folgenden Code:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

Dies führt zu einer Ausgabe, die ähnlich dem Folgenden ist:

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

Wie oben gezeigt, ist der `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`. Aber, was bewirkt das? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, überprüft die Laufzeit zuerst, ob `doSomeInstancing` diese Eigenschaft hat.

Hat `doSomeInstancing` die Eigenschaft nicht, so sucht die Laufzeit nach der Eigenschaft in `doSomeInstancing.[[Prototype]]` (alias `doSomething.prototype`). Wenn `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft hat, wird diese Eigenschaft auf `doSomeInstancing.[[Prototype]]` verwendet.

Andernfalls, wenn `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, wird `doSomeInstancing.[[Prototype]].[[Prototype]]` auf die Eigenschaft überprüft. Standardmäßig ist der `[[Prototype]]` der `prototype`-Eigenschaft jeder Funktion `Object.prototype`. Also wird `doSomeInstancing.[[Prototype]].[[Prototype]]` (alias `doSomething.prototype.[[Prototype]]` (alias `Object.prototype`)) anschließend nach der gesuchten Eigenschaft durchsucht.

Wenn die Eigenschaft nicht in `doSomeInstancing.[[Prototype]].[[Prototype]]` gefunden wird, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` durchsucht. Es gibt jedoch ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, da `Object.prototype.[[Prototype]]` `null` ist. Dann, und nur dann, nachdem die gesamte Prototypkette von `[[Prototype]]`s durchsucht wurde, kommt die Laufzeit zu dem Schluss, dass die Eigenschaft nicht existiert und dass der Wert bei der Eigenschaft `undefined` ist.

Versuchen wir weitere Codes in die Konsole einzugeben:

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

Dies ergibt das folgende Ergebnis:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Möglichkeiten zum Erstellen und Verändern von Prototypketten

Wir haben viele Wege kennengelernt, Objekte zu erstellen und deren Prototypketten zu verändern. Wir werden systematisch die verschiedenen Wege zusammenfassen und die Vor- und Nachteile jedes Ansatzes vergleichen.

### Objekte, die mit Syntaxkonstrukten erstellt wurden

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

Wenn der `__proto__`-Schlüssel in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verwendet wird, schlägt das Zeigen des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, nur stillschweigend fehl, ohne eine Ausnahme auszulösen. Im Gegensatz zur [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Einstellung wird `__proto__` in Objektliteralen standardisiert und optimiert und kann sogar performanter sein als {{jsxref("Object.create")}}. Bei der Deklaration zusätzlicher eigener Eigenschaften im Objekt bei der Erstellung ist es ergonomischer als {{jsxref("Object.create")}}.

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

Konstruktorfunktionen sind seit sehr frühem JavaScript verfügbar. Daher sind sie sehr schnell, sehr standardisiert und sehr JIT-optimierbar. Es ist jedoch auch schwierig, „richtig zu machen“, weil auf diese Weise hinzugefügte Methoden standardmäßig aufzählbar sind, was mit der Klassensyntax oder wie eingebaute Methoden sich verhalten, unvereinbar ist. Das Bilden längerer Vererbungsketten ist ebenfalls fehleranfällig, wie zuvor demonstriert.

### Mit Object.create()

Der Aufruf von {{jsxref("Object.create()")}} erstellt ein neues Objekt. Der `[[Prototype]]` dieses Objekts ist das erste Argument der Funktion:

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

Ähnlich wie der `__proto__`-Schlüssel in Objektinitialisierern ermöglicht `Object.create()` das direkte Setzen des Prototyps eines Objekts zur Erstellungszeit, was der Laufzeit ermöglicht, das Objekt weiter zu optimieren. Es ermöglicht auch das Erstellen von Objekten mit einem `null`-Prototyp, durch Verwendung von `Object.create(null)`. Der zweite Parameter von `Object.create()` erlaubt es, genau die Attribute jeder Eigenschaft im neuen Objekt zu spezifizieren, was ein zweischneidiges Schwert sein kann:

- Es ermöglicht Ihnen, nicht-auflösbare Eigenschaften bei der Objekterstellung hinzuzufügen, was mit Objektliteralen nicht möglich ist.
- Es ist viel ausführlicher und fehleranfälliger als Objektliterale.
- Es kann langsamer als Objektliterale sein, insbesondere wenn viele Eigenschaften erstellt werden.

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

Klassen bieten die höchste Lesbarkeit und Wartbarkeit beim Definieren komplexer Vererbungsstrukturen. [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sind ein Feature ohne triviale Ersetzung in der Prototypenvererbung. Klassen sind jedoch weniger optimiert als traditionelle Konstruktorfunktionen und werden in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während all die oben genannten Methoden die Prototypkette zur Objekterstellungszeit setzen, erlaubt [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) das Verändern der `[[Prototype]]`-internen Eigenschaft eines bestehenden Objekts. Es kann sogar einen Prototyp auf ein Prototyp-freies Objekt erzwingen, das mit `Object.create(null)` erstellt wurde, oder den Prototyp eines Objekts entfernen, indem es ihn auf `null` setzt.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Sie sollten den Prototyp jedoch möglichst während der Erstellung setzen, weil das dynamische Setzen des Prototyps alle Optimierungen der Engines, die an der Prototypkette vorgenommen wurden, unterbricht. Es könnte dazu führen, dass einige Engines Ihren Code für De-Optimierung neu kompilieren, um sicherzustellen, dass er laut Spezifikationen funktioniert.

### Mit dem \_\_proto\_\_-Accessor

Alle Objekte erben die [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Einstellung, die verwendet werden kann, um das `[[Prototype]]` eines bestehenden Objekts zu setzen (wenn der **proto**-Schlüssel nicht auf dem Objekt überschrieben ist).

> [!WARNING] > `Object.prototype.__proto__`-Einstellungen sind **nicht standardisiert** und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Im Vergleich zu `Object.setPrototypeOf` schlägt das Setzen von `__proto__` auf etwas, das kein Objekt ist, stillschweigend fehl, ohne eine Ausnahme auszulösen. Es hat auch einen leicht besseren Browser-Support. Es ist jedoch nicht standardisiert und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

## Leistung

Die Suchzeit nach Eigenschaften, die hoch im Prototypkette sind, kann sich negativ auf die Leistung auswirken, und dies kann im Code, bei dem die Leistung kritisch ist, bedeutsam sein. Zudem führt der Versuch, auf nicht existente Eigenschaften zuzugreifen, dazu, dass immer die gesamte Prototypkette durchlaufen wird.

Auch beim Durchlaufen der Eigenschaften eines Objekts wird **jede** aufzählbare Eigenschaft, die in der Prototypkette liegt, aufgezählt. Um zu überprüfen, ob ein Objekt eine Eigenschaft _selbst_ definiert hat und nicht irgendwo in seiner Prototypkette, ist es notwendig, die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) zu verwenden. Alle Objekte, außer denen mit `null` als `[[Prototype]]`, erben [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype` — es sei denn, es wurde weiter unten in der Prototypkette überschrieben. Um Ihnen ein konkretes Beispiel zu geben, schauen wir uns den obigen Grafikbeispielcode an, um es zu veranschaulichen:

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

Hinweis: Es ist **nicht** ausreichend, zu überprüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaftent könnte sehr wohl existieren, aber ihr Wert ist möglicherweise einfach nur auf `undefined` gesetzt.

## Schlussfolgerung

JavaScript kann ein wenig verwirrend für Entwickler sein, die von Java oder C++ kommen, weil es alles dynamisch und zur Laufzeit ist und keine statischen Typen hat. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und sogar Funktionen selbst sind Instanzen des Konstruktoren `Function`. Sogar die "Klassen" als Syntaxkonstrukte sind nur Konstruktorfunktionen zur Laufzeit.

Alle Konstruktorfunktionen in JavaScript haben eine spezielle Eigenschaft namens `prototype`, die in Verbindung mit dem `new`-Operator funktioniert. Die Referenz zum Prototyp-Objekt wird an die interne `[[Prototype]]`-Eigenschaft der neuen Instanz weitergegeben. Zum Beispiel, wenn Sie `const a1 = new A()` ausführen, stellt JavaScript (nach dem Erstellen des Objekts im Speicher und bevor die Funktion `A()` mit `this` darauf ausgeführt wird) `a1.[[Prototype]] = A.prototype` ein. Wenn Sie dann versuchen, Eigenschaften der Instanz zuzugreifen, überprüft JavaScript zunächst, ob sie direkt auf diesem Objekt existieren, und wenn nicht, wird im `[[Prototype]]` nachgesehen. `[[Prototype]]` wird _rekursiv_ überprüft, d.h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis es gefunden wird oder `Object.getPrototypeOf` `null` zurückgibt. Dies bedeutet, dass alle auf `prototype` definierten Eigenschaften effektiv von allen Instanzen gemeinsam genutzt werden, und Sie können sogar später Teile von `prototype` ändern und die Änderungen in allen bestehenden Instanzen sehen.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` ausführen, dann würde `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething` verweisen — das ist dasselbe `A.prototype.doSomething` das Sie definiert haben, d.h. `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das Prototypenvererbungsmodell zu verstehen, bevor Sie komplexen Code schreiben, der davon Gebrauch macht. Seien Sie sich auch der Länge der Prototypketten in Ihrem Code bewusst und brechen Sie sie ggf. auf, um mögliche Leistungsprobleme zu vermeiden. Darüber hinaus sollten die nativen Prototypen **niemals** verlängert werden, es sei denn, dies dient der Kompatibilität mit neueren JavaScript-Funktionen.
