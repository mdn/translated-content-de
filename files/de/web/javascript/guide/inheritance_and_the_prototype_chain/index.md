---
title: Vererbung und die Prototypkette
slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Advanced")}}

In der Programmierung bezieht sich _Vererbung_ auf die Weitergabe von Eigenschaften von einem Elternteil an ein Kind, sodass ein neues Codesegment die Merkmale eines bestehenden wiederverwenden und darauf aufbauen kann. JavaScript implementiert die Vererbung, indem es [Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) verwendet. Jedes Objekt hat einen internen Link zu einem anderen Objekt, das als sein _Prototyp_ bezeichnet wird. Dieses Prototypobjekt hat wiederum einen eigenen Prototyp, und so weiter, bis ein Objekt erreicht wird, dessen Prototyp `null` ist. Per Definition hat `null` keinen Prototyp und dient als der letzte Link in dieser **Prototypkette**. Es ist möglich, jedes Mitglied der Prototypkette zu verändern oder sogar den Prototyp zur Laufzeit auszutauschen, weshalb Konzepte wie [statische Disposition](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht existieren.

JavaScript kann für Entwickler, die mit klassenbasierten Sprachen wie Java oder C++ vertraut sind, etwas verwirrend sein, da es [dynamisch](/de/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen hat. Während diese Verwirrung oft als eine Schwäche von JavaScript angesehen wird, ist das Modell der prototypischen Vererbung selbst tatsächlich mächtiger als das klassische Modell. Es ist beispielsweise relativ einfach, ein klassisches Modell auf einem prototypischen Modell aufzubauen, was erklärt, wie [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert werden.

Obwohl Klassen mittlerweile weit verbreitet und zu einem neuen Paradigma in JavaScript geworden sind, bringen sie kein neues Vererbungsmuster mit sich. Während Klassen die meisten prototypischen Mechanismen abstrahieren, ist es dennoch nützlich zu verstehen, wie Prototypen unter der Haube funktionieren.

## Vererbung mit der Prototypkette

### Vererbung von Eigenschaften

JavaScript-Objekte sind dynamische "Beutel" von Eigenschaften (bekannt als **eigene Eigenschaften**). JavaScript-Objekte haben einen Link zu einem Prototyp-Objekt. Beim Versuch, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur auf dem Objekt selbst, sondern auch auf dessen Prototyp, dem Prototyp des Prototyps usw. gesucht, bis entweder eine passende Eigenschaft gefunden oder das Ende der Prototypkette erreicht ist.

> [!NOTE]
> Gemäß dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Der interne Slot `[[Prototype]]` kann mit den Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} jeweils abgerufen und geändert werden. Dies entspricht dem JavaScript-Accessor [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), der nicht standardisiert ist, aber faktisch von vielen JavaScript-Engines implementiert wird. Um Verwirrung zu vermeiden und es kurz zu halten, werden wir in unserer Notation vermeiden, `obj.__proto__` zu verwenden, sondern stattdessen `obj.[[Prototype]]` nutzen. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Es sollte nicht mit der `func.prototype`-Eigenschaft von Funktionen verwechselt werden, die stattdessen den `[[Prototype]]` festlegt, der allen _Instanzen_ von Objekten zugewiesen wird, die durch die gegebene Funktion als Konstruktor erstellt werden. Wir werden die `prototype`-Eigenschaft von Konstruktorfunktionen [in einem späteren Abschnitt](#konstruktoren) besprechen.

Es gibt mehrere Möglichkeiten, den `[[Prototype]]` eines Objekts zu spezifizieren, die in [einem späteren Abschnitt](#verschiedene_möglichkeiten_zur_erstellung_und_veränderung_von_prototypketten) aufgeführt sind. Vorerst werden wir die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung verwenden. Es ist erwähnenswert, dass die `{ __proto__: ... }`-Syntax sich von dem `obj.__proto__`-Accessor unterscheidet: Ersterer ist standardisiert und nicht veraltet.

In einem Objektliteral wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` (der entweder `null` oder ein anderes Objekt sein muss) zum `[[Prototype]]` des durch das Literal dargestellten Objekts, während die anderen Schlüssel wie `a` und `b` die _eigenen Eigenschaften_ des Objekts werden. Diese Syntax liest sich sehr natürlich, da `[[Prototype]]` lediglich eine "interne Eigenschaft" des Objekts ist.

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

Das Setzen einer Eigenschaft auf ein Objekt erzeugt eine eigene Eigenschaft. Die einzige Ausnahme von den Regeln des Abrufens und Festsetzens besteht, wenn sie durch einen [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen werden.

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

### Vererbung von "Methoden"

JavaScript hat keine "{{Glossary("Method", "Methoden")}}" in der Form, wie sie klassenbasierte Sprachen definieren. In JavaScript kann jede Funktion einem Objekt in Form einer Eigenschaft hinzugefügt werden. Eine geerbte Funktion verhält sich wie jede andere Eigenschaft, einschließlich des Überschattens von Eigenschaften, wie oben gezeigt (in diesem Fall eine Form des _Methodenüberschreibens_).

Wenn eine geerbte Funktion ausgeführt wird, zeigt der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das vererbende Objekt und nicht auf das Prototypobjekt, in dem die Funktion eine eigene Eigenschaft ist.

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

Die Macht der Prototypen besteht darin, dass wir einen Satz von Eigenschaften wiederverwenden können, wenn sie auf jeder Instanz vorhanden sein sollten - insbesondere für Methoden. Angenommen, wir sollen eine Reihe von Boxen erstellen, wobei jede Box ein Objekt ist, das einen Wert enthält, der über eine `getValue`-Funktion abgerufen werden kann. Eine naive Implementierung wäre:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Dies ist suboptimal, da jede Instanz ihre eigene Funktions-Eigenschaft hat, die dasselbe tut, was redundant und unnötig ist. Stattdessen können wir `getValue` auf den `[[Prototype]]` aller Boxen verschieben:

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

Auf diese Weise wird die `getValue`-Methode aller Boxen auf dieselbe Funktion verweisen, was den Speicherverbrauch senkt. Das manuelle Binden des `__proto__` bei jeder Objekterstellung ist jedoch immer noch sehr unpraktisch. In diesem Fall würden wir eine _Konstruktor_-Funktion verwenden, die den `[[Prototype]]` für jedes hergestellte Objekt automatisch festlegt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

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

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die von der `Box`-Konstruktorfunktion erstellt wurde. `Box.prototype` unterscheidet sich nicht wesentlich von dem `boxPrototype`-Objekt, das wir zuvor erstellt haben — es ist einfach ein normales Objekt. Jede Instanz, die aus einer Konstruktorfunktion erstellt wird, hat automatisch das [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft des Konstruktors als ihren `[[Prototype]]` — das heißt, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktorfunktion selbst verweist — das heißt, `Box.prototype.constructor === Box`. Dies ermöglicht es, von jeder Instanz aus auf den ursprünglichen Konstruktor zuzugreifen.

> [!NOTE]
> Wenn ein nicht-primitives Objekt von der Konstruktorfunktion zurückgegeben wird, wird dieser Wert zum Ergebnis des `new`-Ausdrucks. In diesem Fall wird der `[[Prototype]]` möglicherweise nicht korrekt gebunden — aber dies sollte in der Praxis nicht häufig vorkommen.

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

Klassen sind syntaktischer Zucker über Konstruktorfunktionen, was bedeutet, dass man `Box.prototype` immer noch manipulieren kann, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch als Abstraktion über den zugrunde liegenden Prototypmechanismus konzipiert sind, werden wir die leichtgewichtigere Syntax für Konstruktorfunktionen in diesem Tutorial verwenden, um vollständig zu demonstrieren, wie Prototypen funktionieren.

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

Ein Korollar ist, dass das _Neu-Zuweisen_ von `Constructor.prototype` (`Constructor.prototype = ...`) eine schlechte Idee aus zwei Gründen ist:

- Der `[[Prototype]]` von Instanzen, die vor der Neuzuweisung erstellt wurden, verweist jetzt auf ein anderes Objekt als der `[[Prototype]]` von Instanzen, die nach der Neuzuweisung erstellt wurden — das Verändern eines `[[Prototype]]` verändert nicht mehr das andere.
- Wenn Sie die `constructor`-Eigenschaft nicht manuell erneut festlegen, kann die Konstruktorfunktion nicht mehr von `instance.constructor` verfolgt werden, was die Erwartungen der Benutzer brechen kann. Einige eingebaute Operationen lesen auch die `constructor`-Eigenschaft, und wenn sie nicht gesetzt ist, funktionieren sie möglicherweise nicht wie erwartet.

`Constructor.prototype` ist nur nützlich beim Erstellen von Instanzen. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, was der _eigene_ Prototyp der Konstruktorfunktion ist, der `Function.prototype` ist — das heißt, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literalsyntaxen in JavaScript erstellen Instanzen, die implizit den `[[Prototype]]` festlegen. Beispiel:

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

Wir können sie in ihre Konstruktorform "ent-zuckern".

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Zum Beispiel sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, weshalb sie automatisch auf alle Array-Instanzen verfügbar sind.

> [!WARNING]
> Es gibt eine Feature, das früher weit verbreitet war — das Erweitern von `Object.prototype` oder einer der anderen eingebauten Prototypen. Ein Beispiel dafür ist das Definieren von `Array.prototype.myMethod = function () {...}` und dann die Verwendung von `myMethod` auf allen Array-Instanzen.
>
> Dieses Feature wird _Monkey Patching_ genannt. Monkey Patching birgt Risiken für die zukünftige Kompatibilität, da, wenn die Sprache diese Methode in Zukunft hinzufügt, jedoch mit einer anderen Signatur, Ihr Code nicht mehr funktioniert. Es hat zu Vorfällen wie dem [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt und kann ein großes Ärgernis für die Weiterentwicklung der Sprache sein, da JavaScript versucht, das "Web nicht zu brechen".
>
> Der **einzige** Grund für das Erweitern eines eingebauten Prototyps ist das Backportieren der Features neuerer JavaScript-Engines, wie `Array.prototype.forEach`.

Es könnte interessant sein zu wissen, dass aufgrund historischer Gründe einige Prototyp-Eigenschaften von eingebauten Konstruktoren selbst Instanzen sind. Zum Beispiel ist `Number.prototype` die Zahl 0, `Array.prototype` ist ein leeres Array, und `RegExp.prototype` ist `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

Dies ist jedoch nicht der Fall für benutzerdefinierte Konstruktoren oder moderne Konstruktoren wie `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Längere Vererbungsketten aufbauen

Die `Constructor.prototype`-Eigenschaft wird so wie sie ist zum `[[Prototype]]` der Instanzen des Konstruktors – einschließlich des eigenen `[[Prototype]]` von `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _einfaches Objekt_ — das heißt, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist — das heißt, `Object.getPrototypeOf(Object.prototype) === null`. Daher wird ein typischer Konstruktor die folgende Prototypkette aufbauen:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototypketten aufzubauen, können wir den `[[Prototype]]` von `Constructor.prototype` über die Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) festlegen.

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

In einigen Fällen sehen Sie möglicherweise alten Code, der {{jsxref("Object.create()")}} verwendet, um die Vererbungskette aufzubauen. Da dies jedoch die `prototype`-Eigenschaft neu zuweist und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft entfernt, kann es fehleranfälliger sein, während die Leistungsgewinne möglicherweise nicht erkennbar sind, wenn die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Prototypen inspizieren: ein tieferer Einblick

Lassen Sie uns einen genaueren Blick darauf werfen, was hinter den Kulissen passiert.

Wie oben erwähnt, können Funktionen in JavaScript Eigenschaften haben. Alle Funktionen haben eine spezielle Eigenschaft namens `prototype`. Beachten Sie, dass der untenstehende Code eigenständig ist (es ist sicher anzunehmen, dass es keinen weiteren JavaScript-Code auf der Webseite gibt außer dem untenstehenden). Für das beste Lernerlebnis wird dringend empfohlen, dass Sie eine Konsole öffnen, zum Tab "Konsole" navigieren, den untenstehenden JavaScript-Code kopieren und einfügen und ihn durch Drücken der Enter/Return-Taste ausführen. (Die Konsole ist in den Entwickler-Werkzeugen der meisten Webbrowser enthalten. Weitere Informationen sind für [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/) und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) verfügbar.)

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

Wie oben gesehen, hat `doSomething()` eine Standard-`prototype`-Eigenschaft, wie durch die Konsole demonstriert wird. Nach dem Ausführen dieses Codes sollte die Konsole ein Objekt angezeigt haben, das in etwa so aussieht:

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
> Die Chrome-Konsole verwendet `[[Prototype]]`, um den Prototyp des Objekts zu bezeichnen, gemäß den Begriffen der Spezifikation; Firefox verwendet `<prototype>`. Zur Konsistenz verwenden wir `[[Prototype]]`.

Wir können der Prototyp von `doSomething()` Eigenschaften hinzufügen, wie unten gezeigt.

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

Wir können jetzt den `new`-Operator verwenden, um eine Instanz von `doSomething()` basierend auf diesem Prototyp zu erstellen. Um den new-Operator zu verwenden, rufen Sie die Funktion normalerweise auf, außer dass sie mit `new` prefixiert wird. Der Aufruf einer Funktion mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Eigenschaften können dann zu diesem Objekt hinzugefügt werden.

Versuchen Sie den folgenden Code:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

Dies führt zu einer Ausgabe, die in etwa wie folgt aussieht:

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

Wie oben gesehen, ist der `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`. Aber was bewirkt das? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, überprüft die Laufzeit zuerst, ob `doSomeInstancing` diese Eigenschaft hat.

Wenn `doSomeInstancing` die Eigenschaft nicht hat, sucht die Laufzeit nach der Eigenschaft in `doSomeInstancing.[[Prototype]]` (alias `doSomething.prototype`). Wenn `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft hat, wird diese Eigenschaft auf `doSomeInstancing.[[Prototype]]` verwendet.

Andernfalls, wenn `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, wird `doSomeInstancing.[[Prototype]].[[Prototype]]` auf die gesuchte Eigenschaft geprüft. Standardmäßig ist der `[[Prototype]]` der `prototype`-Eigenschaft jeder Funktion `Object.prototype`. Dann wird `doSomeInstancing.[[Prototype]].[[Prototype]]` (alias `doSomething.prototype.[[Prototype]]` (alias `Object.prototype`)) auf die gesuchte Eigenschaft überprüft.

Wenn die Eigenschaft nicht in `doSomeInstancing.[[Prototype]].[[Prototype]]` gefunden wird, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` überprüft. Es gibt jedoch ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, da `Object.prototype.[[Prototype]]` `null` ist. Dann und nur dann, nach der vollständigen Durchsuchung der gesamten Prototypkette der `[[Prototype]]`, stellt die Laufzeit fest, dass die Eigenschaft nicht existiert, und schließt daraus, dass der Wert an der Eigenschaft `undefined` ist.

Versuchen wir, etwas mehr Code in die Konsole einzugeben:

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

Dies führt zu folgendem Ergebnis:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Möglichkeiten zur Erstellung und Veränderung von Prototypketten

Wir haben viele Möglichkeiten kennengelernt, Objekte zu erstellen und ihre Prototypketten zu ändern. Wir werden systematisch die verschiedenen Ansatzmöglichkeiten zusammenfassen und die Vor- und Nachteile jeder Methode vergleichen.

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

Wenn der `__proto__`-Schlüssel in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verwendet wird, schlägt das Zeigen des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, stillschweigend fehl, ohne eine Ausnahme auszulösen. Im Gegensatz zum [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Setter ist `__proto__` in Objektliteralen standardisiert und optimiert und kann sogar leistungsfähiger als {{jsxref("Object.create")}} sein. Das Deklarieren zusätzlicher eigener Eigenschaften am Objekt bei der Erstellung ist ergonomischer als {{jsxref("Object.create")}}.

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

Konstruktorfunktionen sind seit sehr frühem JavaScript verfügbar. Daher sind sie sehr schnell, sehr standardisiert und sehr JIT-optimierbar. Es ist jedoch auch schwer, "richtig" zu sein, da auf diese Weise hinzugefügte Methoden standardmäßig aufgezählt werden, was inkonsistent mit der Klassensyntax oder dem Verhalten eingebaute Methoden ist. Längere Vererbungsketten aufzubauen ist ebenfalls fehleranfällig, wie zuvor demonstriert.

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

Ähnlich wie der `__proto__` Schlüssel in Objektinitialisierern ermöglicht `Object.create()` das direkte Festlegen des Prototyps eines Objekts bei der Erstellung, was der Laufzeit ermöglicht, das Objekt weiter zu optimieren. Es ermöglicht auch die Erstellung von Objekten mit `null` Prototyp, indem `Object.create(null)` verwendet wird. Der zweite Parameter von `Object.create()` erlaubt es, die Attribute jeder Eigenschaft im neuen Objekt genau zu spezifizieren, was ein zweischneidiges Schwert sein kann:

- Es ermöglicht die Erstellung nicht aufzählbarer Eigenschaften usw. bei der Objekterstellung, was mit Objektliteralen nicht möglich ist.
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

Klassen bieten die höchste Lesbarkeit und Wartbarkeit bei der Definition komplexer Vererbungsstrukturen. [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind ein Feature ohne triviale Ersetzung in der prototypischen Vererbung. Klassen sind jedoch weniger optimiert als traditionelle Konstruktorfunktionen und werden in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während alle oben genannten Methoden die Prototypkette zur Erstellungszeit des Objekts festlegen, ermöglicht [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) das Ändern der `[[Prototype]]` internen Eigenschaft eines existierenden Objekts. Es kann sogar einen Prototyp auf ein protokollfreies Objekt erzwingen, das mit `Object.create(null)` erstellt wurde, oder den Prototyp eines Objekts entfernen, indem er auf `null` gesetzt wird.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Sie sollten jedoch den Prototyp, wenn möglich, während der Erstellung festlegen, da das dynamische Festlegen des Prototyps alle Optimierungen, die die Engines an der Prototypkette vorgenommen haben, stört. Es kann einige Engines dazu bringen, Ihren Code zur De-Optimierung neu zu kompilieren, um nach Spezifikationen zu arbeiten.

### Mit dem \_\_proto\_\_ Accessor

Alle Objekte erben den [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Setter, der verwendet werden kann, um den `[[Prototype]]` eines existierenden Objekts zu setzen (wenn der `__proto__` Schlüssel nicht auf dem Objekt überschrieben wird).

> [!WARNING]
> `Object.prototype.__proto__` Accessors sind **nicht standardisiert** und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Im Vergleich zu `Object.setPrototypeOf` schlägt das Setzen von `__proto__` auf etwas, das kein Objekt ist, still vorhandener Elemente weder einen Fehler noch eine Ausnahme aus. Es hat auch eine etwas bessere Browserunterstützung. Es ist jedoch nicht standardisiert und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

## Leistung

Die Suchzeit für Eigenschaften, die sich weit oben in der Prototypkette befinden, kann die Leistung beeinträchtigen, und dies kann in leistungsrelevanten Codebereichen erheblich sein. Außerdem wird das Zugreifen auf nicht existierende Eigenschaften immer die gesamte Prototypkette durchlaufen.

Beim Durchlaufen der Eigenschaften eines Objekts wird **jede** aufzählbare Eigenschaft, die sich in der Prototypkette befindet, aufgezählt. Um zu überprüfen, ob ein Objekt eine Eigenschaft auf sich selbst und nicht irgendwo in seiner Prototypkette definiert hat, ist es notwendig, die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) zu verwenden. Alle Objekte, außer solchen mit `null` als `[[Prototype]]`, erben [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype`, es sei denn, sie wurden weiter unten in der Prototypkette überschrieben. Um Ihnen ein konkretes Beispiel zu geben, nehmen wir das obige Codebeispiel, um es zu veranschaulichen:

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

Hinweis: Es ist **nicht** ausreichend zu prüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft könnte durchaus existieren, aber ihr Wert ist einfach auf `undefined` gesetzt.

## Fazit

JavaScript kann für Entwickler, die von Java oder C++ kommen, etwas verwirrend sein, da es vollständig dynamisch und zur Laufzeit ist und überhaupt keine statischen Typen hat. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und selbst Funktionen sind Instanzen des `Function` Konstruktors. Selbst die "Klassen" als Syntaxkonstrukte sind nur Konstruktionsfunktionen zur Laufzeit.

Alle Konstruktionsfunktionen in JavaScript haben eine spezielle Eigenschaft namens `prototype`, die mit dem `new`-Operator zusammenarbeitet. Der Verweis auf das Prototypobjekt wird an die interne Eigenschaft `[[Prototype]]` der neuen Instanz kopiert. Wenn Sie zum Beispiel `const a1 = new A()` durchführen, setzt JavaScript (nachdem das Objekt im Speicher erstellt wurde und bevor die Funktion `A()` mit `this` definiert ausgeführt wird) `a1.[[Prototype]] = A.prototype`. Wenn Sie dann auf Eigenschaften der Instanz zugreifen, überprüft JavaScript zuerst, ob diese direkt auf diesem Objekt existieren, und wenn nicht, wird in `[[Prototype]]` gesucht. `[[Prototype]]` wird _rekursiv_ betrachtet, d.h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis es gefunden wird oder `Object.getPrototypeOf` `null` zurückgibt. Dies bedeutet, dass alle auf `prototype` definierten Eigenschaften effektiv von allen Instanzen geteilt werden, und Sie können sogar später Teile von `prototype` ändern und die Änderungen in allen bestehenden Instanzen erscheinen lassen.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` verwenden, dann würde `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething` verweisen — was das gleiche wie das von Ihnen definierte `A.prototype.doSomething` ist, d.h. `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das prototypische Vererbungskonzept zu verstehen, bevor Sie komplexen Code schreiben, der es verwendet. Achten Sie auch auf die Länge der Prototypketten in Ihrem Code und brechen Sie sie bei Bedarf auf, um mögliche Leistungsprobleme zu vermeiden. Weiterhin sollten die nativen Prototypen **niemals** erweitert werden, es sei denn, es dient der Kompatibilität mit neueren JavaScript-Features.
