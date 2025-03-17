---
title: Vererbung und die Prototypkette
slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Advanced")}}

In der Programmierung bezieht sich _Vererbung_ darauf, Eigenschaften von einem Elternteil an ein Kind weiterzugeben, sodass ein neues Stück Code die Funktionen eines bestehenden Codes wiederverwenden und darauf aufbauen kann. JavaScript implementiert Vererbung durch die Verwendung von [Objekten](/de/docs/Web/JavaScript/Guide/Data_structures#objects). Jedes Objekt hat einen internen Link zu einem anderen Objekt, das als _Prototyp_ bezeichnet wird. Dieses Prototypobjekt hat seinen eigenen Prototyp und so weiter, bis ein Objekt mit `null` als Prototyp erreicht wird. Per Definition hat `null` keinen Prototyp und fungiert als letztes Glied in dieser **Prototypkette**. Es ist möglich, jedes Element der Prototypkette zu ändern oder sogar den Prototyp zur Laufzeit auszutauschen, sodass Konzepte wie [statisches Dispatching](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht existieren.

JavaScript ist für Entwickler, die mit klassenbasierten Sprachen (wie Java oder C++) vertraut sind, etwas verwirrend, da JavaScript [dynamisch](/de/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen hat. Während diese Verwirrung oft als Schwäche von JavaScript angesehen wird, ist das prototypische Vererbungsmodell selbst tatsächlich leistungsstärker als das klassische Modell. Es ist zum Beispiel relativ einfach, ein klassisches Modell auf einem prototypischen Modell aufzubauen — so werden [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert.

Obwohl Klassen mittlerweile weit verbreitet sind und ein neues Paradigma in JavaScript darstellen, bringen sie kein neues Vererbungsmuster mit sich. Während Klassen die meisten Prototypmechanismen abstrahieren, ist es dennoch nützlich zu verstehen, wie Prototypen unter der Haube funktionieren.

## Vererbung mit der Prototypkette

### Erben von Eigenschaften

JavaScript-Objekte sind dynamische "Behälter" von Eigenschaften (als **eigene Eigenschaften** bezeichnet). JavaScript-Objekte haben einen Link zu einem Prototypobjekt. Beim Versuch, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur im Objekt gesucht, sondern auch im Prototyp des Objekts, im Prototyp des Prototyps und so weiter, bis entweder eine Eigenschaft mit einem passenden Namen gefunden oder das Ende der Prototypkette erreicht wird.

> [!NOTE]
> Nach dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Der interne Slot `[[Prototype]]` kann mit den Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} zugegriffen und geändert werden. Dies entspricht dem JavaScript-Accessor [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), der nicht standardisiert, aber faktisch von vielen JavaScript-Engines implementiert ist. Um Verwirrung zu vermeiden und es kurz zu halten, werden wir in unserer Notation darauf verzichten, `obj.__proto__` zu verwenden, sondern `obj.[[Prototype]]` verwenden. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Es sollte nicht mit der `func.prototype`-Eigenschaft von Funktionen verwechselt werden, die stattdessen den `[[Prototype]]` festlegt, der allen _Instanzen_ von Objekten zugewiesen wird, die durch die gegebene Funktion erstellt wurden, wenn diese als Konstruktor verwendet wird. Wir werden die `prototype`-Eigenschaft von Konstruktfunktionen in [einem späteren Abschnitt](#konstruktoren) besprechen.

Es gibt mehrere Möglichkeiten, den `[[Prototype]]` eines Objekts zu spezifizieren, die in [einem späteren Abschnitt](#verschiedene_möglichkeiten,_prototypketten_zu_erstellen_und_zu_ändern) aufgeführt sind. Für den Moment werden wir die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung verwenden. Es ist erwähnenswert, dass die `{ __proto__: ... }`-Syntax sich von dem `obj.__proto__`-Accessor unterscheidet: ersteres ist Standard und nicht veraltet.

In einem Objektliteral wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` (der entweder `null` oder ein anderes Objekt sein muss) zum `[[Prototype]]` des durch das Literal dargestellten Objekts, während andere Schlüssel, wie `a` und `b`, zu den _eigenen Eigenschaften_ des Objekts werden. Diese Syntax liest sich sehr natürlich, da `[[Prototype]]` nur eine "interne Eigenschaft" des Objekts ist.

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

Das Setzen einer Eigenschaft auf ein Objekt erstellt eine eigene Eigenschaft. Die einzige Ausnahme von den Regeln für das Abrufen und Setzen von Verhalten tritt auf, wenn es durch einen [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen wird.

Ebenso können Sie längere Prototypketten erstellen, und eine Eigenschaft wird an allen von ihnen gesucht.

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

### Erben von "Methoden"

JavaScript hat keine "{{Glossary("Method", "Methoden")}}" in der Form, wie klassenbasierte Sprachen sie definieren. In JavaScript kann jede Funktion einem Objekt in Form einer Eigenschaft hinzugefügt werden. Eine geerbte Funktion verhält sich genauso wie jede andere Eigenschaft, einschließlich der im obigen Beispiel gezeigten Eigenschaftenschatten (in diesem Fall eine Form des _Methodenüberschreibens_).

Wenn eine geerbte Funktion ausgeführt wird, zeigt der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das vererbende Objekt, nicht auf das Prototypobjekt, bei dem die Funktion eine eigene Eigenschaft ist.

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

Die Stärke von Prototypen besteht darin, dass wir einen Satz von Eigenschaften wiederverwenden können, wenn sie in jeder Instanz vorhanden sein sollen — insbesondere für Methoden. Angenommen, wir möchten eine Reihe von Boxen erstellen, wobei jede Box ein Objekt ist, das einen Wert enthält, der über eine `getValue`-Funktion abgerufen werden kann. Eine naive Implementierung wäre:

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

Auf diese Weise verweisen alle `getValue`-Methoden der Boxen auf dieselbe Funktion, was den Speicherverbrauch senkt. Das manuelle Binden des `__proto__` für jede Objekterstellung ist jedoch weiterhin sehr unbequem. Daher verwenden wir eine _Konstruktfunktion_, die automatisch das `[[Prototype]]` für jedes hergestellte Objekt festlegt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

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

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die aus der `Box`-Konstruktionsfunktion erstellt wurde. `Box.prototype` unterscheidet sich nicht wesentlich von dem zuvor erstellten `boxPrototype`-Objekt — es ist einfach ein Reines Objekt. Jede aus einer Konstruktionsfunktion erstellte Instanz hat automatisch die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft des Konstruktors als `[[Prototype]]` — das heißt, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktionsfunktion selbst verweist — das heißt, `Box.prototype.constructor === Box`. Dies ermöglicht es, vom Konstruktionsobjekt aus auf den ursprünglichen Konstruktor zuzugreifen.

> [!NOTE]
> Wenn ein nicht-primitive Wert von der Konstruktionsfunktion zurückgegeben wird, wird dieser Wert zum Ergebnis des `new`-Ausdrucks. In diesem Fall wird der `[[Prototype]]` möglicherweise nicht korrekt gebunden — dies sollte jedoch in der Praxis nicht oft vorkommen.

Die obige Konstruktionsfunktion kann als [Klassen](/de/docs/Web/JavaScript/Reference/Classes) umgeschrieben werden:

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

Klassen sind syntaktischer Zucker über Konstruktionsfunktionen, was bedeutet, dass Sie `Box.prototype` noch manipulieren können, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch so konzipiert sind, dass sie eine Abstraktion des zugrunde liegenden Prototypmechanismus darstellen, verwenden wir für dieses Tutorial die besser lesbare Konstruktionsfunktionssyntax, um vollständig zu demonstrieren, wie Prototypen funktionieren.

Da `Box.prototype` dasselbe Objekt wie das `[[Prototype]]` aller Instanzen referenziert, können wir das Verhalten aller Instanzen ändern, indem wir `Box.prototype` verändern.

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

Ein Korollar ist, dass das _Neu-Zuweisen_ von `Constructor.prototype` (`Constructor.prototype = ...`) eine schlechte Idee ist aus zwei Gründen:

- Der `[[Prototype]]` von Instanzen, die vor der Neuzuweisung erstellt wurden, bezieht sich jetzt auf ein anderes Objekt als der `[[Prototype]]` von Instanzen, die nach der Neuzuweisung erstellt wurden — das Verändern des `[[Prototype]]` eines Objekts verändert nicht mehr das andere.
- Wenn Sie nicht manuell die `constructor`-Eigenschaft neu setzen, kann von `instance.constructor` nicht mehr auf die Konstruktionsfunktion zugegriffen werden, was die Benutzerewartung brechen kann. Einige eingebettete Operationen lesen die `constructor`-Eigenschaft ebenfalls; wenn sie nicht gesetzt ist, funktionieren sie möglicherweise nicht wie erwartet.

`Constructor.prototype` ist nur nützlich beim Erstellen von Instanzen. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, das der eigene Prototyp der Konstruktionsfunktion ist, der `Function.prototype` ist — das heißt, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literalsyntaxen in JavaScript erstellen Instanzen, die implizit den `[[Prototype]]` setzen. Zum Beispiel:

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

Wir können sie in ihre Konstruktorform "de-sugaren".

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Zum Beispiel sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, weshalb sie automatisch für alle Array-Instanzen verfügbar sind.

> [!WARNING]
> Es gibt ein Featur, das früher weit verbreitet war — das Erweitern von `Object.prototype` oder einem der anderen eingebauten Prototypen. Ein Beispiel für dieses Featur ist, `Array.prototype.myMethod = function () {...}` zu definieren und dann `myMethod` auf allen Array-Instanzen zu verwenden.
>
> Dieses Featur wird als _monkey patching_ bezeichnet. Das Durchführen eines monkey patching gefährdet die Abwärtskompatibilität, da, wenn die Sprache diese Methode in der Zukunft, jedoch mit einer anderen Signatur, hinzufügt, Ihr Code kaputtgeht. Dies hat zu Vorfällen wie [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt und kann ein großes Ärgernis für die Sprache darstellen, da JavaScript versucht, das "Netz nicht zu brechen".
>
> Der _einzige_ gute Grund für das Erweitern eines eingebauten Prototyps ist das Zurückportieren der Funktionen neuerer JavaScript-Engines, wie `Array.prototype.forEach`.

Es mag interessant sein zu wissen, dass aus historischen Gründen einige eingebaute Konstruktoren selbst Instanzen sind. Zum Beispiel ist `Number.prototype` die Zahl 0, `Array.prototype` ist ein leeres Array, und `RegExp.prototype` ist `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

Dies ist jedoch nicht der Fall bei benutzerdefinierten Konstruktoren, noch bei modernen Konstruktoren wie `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Längere Vererbungsketten aufbauen

Die `Constructor.prototype`-Eigenschaft wird (wie sie ist) zum `[[Prototype]]` der Instanzen des Konstruktors — einschließlich des eigenen `[[Prototype]]` des `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _reines Objekt_ — das heißt, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist — das heißt, `Object.getPrototypeOf(Object.prototype) === null`. Daher erstellt ein typischer Konstruktor die folgende Prototypkette:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototypketten zu erstellen, können wir den `[[Prototype]]` von `Constructor.prototype` über die Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) einstellen.

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

Sie können auch in einigen Legacy-Code {{jsxref("Object.create()")}} sehen, um die Vererbungskette zu erstellen. Da dies jedoch die `prototype`-Eigenschaft neu zuweist und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft entfernt, kann es fehleranfälliger sein, während Leistungsgewinne möglicherweise nicht offensichtlich sind, wenn die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Prototypen inspizieren: ein tieferer Einblick

Schauen wir uns genauer an, was hinter den Kulissen passiert.

Wie oben erwähnt, können Funktionen in JavaScript Eigenschaften haben. Alle Funktionen haben eine spezielle Eigenschaft namens `prototype`. Bitte beachten Sie, dass der folgende Code freistehend ist (es ist sicher anzunehmen, dass es keinen anderen JavaScript-Code auf der Webseite gibt als den untenstehenden Code). Für das beste Lernerlebnis wird dringend empfohlen, dass Sie eine Konsole öffnen, zum Tab "Konsole" navigieren, den untenstehenden JavaScript-Code kopieren und einfügen und ihn durch Drücken der Enter/Return-Taste ausführen. (Die Konsole ist in den meisten Entwicklerwerkzeugen von Webbrowsern enthalten. Mehr Informationen sind verfügbar für [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/) und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/).)

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

Wie oben zu sehen, hat `doSomething()` eine standardmäßige `prototype`-Eigenschaft, was durch die Konsole gezeigt wird. Nach Ausführung dieses Codes sollte die Konsole ein Objekt angezeigt haben, das diesem ähnlich sieht.

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

Wir können jetzt den `new`-Operator verwenden, um eine Instanz von `doSomething()` basierend auf diesem Prototyp zu erstellen. Um den new-Operator zu verwenden, rufen Sie die Funktion normal auf, außer, dass Sie es mit `new` voranstellen. Ein Funktionsaufruf mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Dann können dieser Instanz Eigenschaften hinzugefügt werden.

Versuchen Sie den folgenden Code:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

Dies ergibt eine Ausgabe, die der folgenden ähnlich ist:

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

Wie oben zu sehen ist, ist das `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`.

Aber, wozu dient dies? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, prüft die Laufzeit zuerst, ob `doSomeInstancing` diese Eigenschaft hat.

Wenn `doSomeInstancing` die Eigenschaft nicht hat, dann sucht die Laufzeit nach der Eigenschaft in `doSomeInstancing.[[Prototype]]` (alias `doSomething.prototype`). Hat `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft, dann wird diese Eigenschaft auf `doSomeInstancing.[[Prototype]]` verwendet.

Andernfalls, wenn `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, dann wird `doSomeInstancing.[[Prototype]].[[Prototype]]` auf die Eigenschaft überprüft. Standardmäßig ist das `[[Prototype]]` der `prototype`-Eigenschaft einer Funktion `Object.prototype`. Daher wird `doSomeInstancing.[[Prototype]].[[Prototype]]` (alias `doSomething.prototype.[[Prototype]]` (alias `Object.prototype`)) dann nach der gesuchten Eigenschaft durchsucht.

Wird die Eigenschaft in `doSomeInstancing.[[Prototype]].[[Prototype]]` nicht gefunden, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` durchsucht. Es gibt jedoch ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, da `Object.prototype.[[Prototype]]` `null` ist. Erst dann, nachdem die gesamte Prototypkette der `[[Prototype]]`'s durchsucht wurde, stellt die Laufzeit fest, dass die Eigenschaft nicht existiert und schließt daraus, dass der Wert an der Eigenschaft `undefined` ist.

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

Dies ergibt Folgendes:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Möglichkeiten, Prototypketten zu erstellen und zu ändern

Wir haben viele Wege kennengelernt, um Objekte zu erstellen und ihre Prototypketten zu ändern. Wir werden nun systematisch die verschiedenen Möglichkeiten zusammenfassen und Vor- sowie Nachteile der einzelnen Ansätze vergleichen.

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

Bei der Verwendung des `__proto__`-Schlüssels in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer), führt das Zeigen des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, dazu, dass es still fehlschlägt, ohne eine Ausnahme auszulösen. Im Gegensatz zum [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Setter ist `__proto__` in Objektliteral-Initialisierern standardisiert und optimiert und kann sogar performanter sein als {{jsxref("Object.create")}}. Das Deklarieren zusätzlicher eigener Eigenschaften am Objekt während der Erstellung ist ergonomischer als {{jsxref("Object.create")}}.

### Mit Konstruktionsfunktionen

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

Konstruktionsfunktionen sind seit sehr frühem JavaScript verfügbar. Daher sind sie sehr schnell, sehr standardisiert und sehr JIT-optimalisierbar. Das "richtiges" Arbeiten damit ist jedoch auch schwierig, da auf diese Weise hinzugefügte Methoden standardmäßig aufgezählt werden, was inkonsistent mit der Klassensyntax oder dem Verhalten eingebauter Methoden ist. Längere Vererbungsketten zu erstellen ist ebenfalls fehleranfällig, wie bereits demonstriert.

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

Ähnlich wie beim `__proto__`-Schlüssel in Objektinitialisierern ermöglicht `Object.create()`, den Prototyp eines Objekts direkt zur Erstellung festzulegen, was dem Laufzeitverhalten eine weitere Optimierung des Objekts erlaubt. Es ermöglicht auch die Erstellung von Objekten mit `null`-Prototyp, unter Verwendung von `Object.create(null)`. Der zweite Parameter von `Object.create()` erlaubt eine exakte Spezifizierung der Attribute jeder Eigenschaft im neuen Objekt, was beidseitig sein kann:

- Es erlaubt, nicht-auflistbare Eigenschaften usw. während der Objekterstellung zu erstellen, was mit Objektlitern nicht möglich ist.
- Es ist viel ausführlicher und fehleranfälliger als Objektliterale.
- Es könnte langsamer als Objektliterale sein, besonders bei der Erstellung vieler Eigenschaften.

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

Klassen bieten die höchste Lesbarkeit und Wartbarkeit beim Definieren komplexer Vererbungsstrukturen. [Privateigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sind eine Funktion, die in der Prototypvererbung kein trivialer Ersatz ist. Klassen sind jedoch weniger optimiert als traditionelle Konstruktionsfunktionen und werden in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Obwohl alle oben genannten Methoden die Prototypkette zur Objekterstellung festlegen, ermöglicht [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) das Ändern der `[[Prototype]]`-Eigenschaft eines bestehenden Objekts. Es kann sogar einen Prototyp auf ein Prototyploses Objekt erzwingen, das mit `Object.create(null)` erstellt wurde oder den Prototyp eines Objekts entfernen, indem es auf `null` gesetzt wird.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Sie sollten den Prototyp nach Möglichkeit während der Erstellung festlegen, da das dynamische Setzen des Prototyps alle Optimierungen der Engine, die für die Prototypkette gemacht wurden, stört. Es könnte einige Engines dazu veranlassen, Ihren Code zur De-Optimierung neu zu kompilieren, um ihn gemäß den Spezifikationen funktionsfähig zu machen.

### Mit dem \_\_proto\_\_-Accessor

Alle Objekte erben die [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Settereigenschaften, die verwendet werden können, um den `[[Prototype]]` eines bestehenden Objekts festzulegen (wenn der `__proto__`-Schlüssel nicht auf dem Objekt überschrieben wird).

> **Warnung:** `Object.prototype.__proto__`-Accessors sind **nicht standardisiert** und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Im Vergleich zu `Object.setPrototypeOf`, schlägt das Setzen von `__proto__` auf etwas, das kein Objekt ist, still fehl, ohne eine Ausnahme auszulösen. Es hat auch eine leicht bessere Unterstützung im Browser. Es ist jedoch nicht standardisiert und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

## Leistung

Die Suchzeit für Eigenschaften, die weit oben in der Prototypkette liegen, kann einen negativen Einfluss auf die Leistung haben, und dies kann im Code, bei dem Leistung entscheidend ist, signifikant sein. Außerdem wird beim Versuch auf nicht existierende Eigenschaften zuzugreifen, immer die gesamte Prototypkette durchlaufen.

Wenn Sie über die Eigenschaften eines Objekts iterieren, werden **alle** aufzählbaren Eigenschaften, die sich in der Prototypkette befinden, aufgezählt. Um zu überprüfen, ob ein Objekt eine Eigenschaft auf _sich selbst_ definiert hat und nicht irgendwo auf seiner Prototypkette, ist es notwendig, die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) zu verwenden. Alle Objekte, außer denen mit `null` als `[[Prototype]]`, erben die [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype` — es sei denn, es wurde weiter unten in der Prototypkette überschrieben. Um Ihnen ein konkretes Beispiel zu geben, nehmen wir das obige Netzwerkbeispiel, um es zu veranschaulichen:

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

Hinweis: Es ist **nicht** genug zu überprüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft könnte durchaus existieren, aber ihr Wert wurde nur zufällig auf `undefined` gesetzt.

## Fazit

JavaScript kann für Entwickler, die aus Java oder C++ kommen, etwas verwirrend sein, da alles dynamisch und zur Laufzeit ist und es überhaupt keine statischen Typen gibt. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und selbst die Funktionen sind Instanzen des `Function`-Konstruktors. Sogar die "Klassen" als Syntaxkonstrukte sind nur Konstruktionsfunktionen zur Laufzeit.

Alle Konstruktionsfunktionen in JavaScript haben eine spezielle Eigenschaft namens `prototype`, die mit dem `new`-Operator funktioniert. Die Referenz zum Prototypobjekt wird auf die interne `[[Prototype]]`-Eigenschaft der neuen Instanz kopiert. Zum Beispiel, wenn Sie `const a1 = new A()` ausführen, setzt JavaScript (nach der Erstellung des Objekts im Speicher und vor der Funktion `A()` auszuführen, die `this` auf ihm definiert) `a1.[[Prototype]] = A.prototype`. Wenn Sie dann auf Eigenschaften der Instanz zugreifen, prüft JavaScript zuerst, ob sie direkt auf diesem Objekt existieren, und, wenn nicht, sucht es im `[[Prototype]]`. `[[Prototype]]` wird _rekursiv_ durchsucht, d.h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis es gefunden oder `Object.getPrototypeOf` `null` zurückgibt. Das bedeutet, dass alle Eigenschaften, die auf `prototype` definiert sind, effektiv von allen Instanzen geteilt werden, und Sie können sogar später Teile von `prototype` ändern und die Änderungen in allen vorhandenen Instanzen sehen.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` ausführen, dann würde `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething` verweisen — was dasselbe ist wie das `A.prototype.doSomething`, das Sie definiert haben, das bedeutet `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das prototypische Vererbungsmodell zu verstehen, bevor Sie komplexen Code schreiben, der es verwendet. Darüber hinaus sollten Sie sich der Länge der Prototypketten in Ihrem Code bewusst sein und sie bei Bedarf auflösen, um mögliche Leistungsprobleme zu vermeiden. Außerdem sollten die nativen Prototypen **niemals** erweitert werden, es sei denn, es dient der Kompatibilität mit neueren JavaScript-Features.
