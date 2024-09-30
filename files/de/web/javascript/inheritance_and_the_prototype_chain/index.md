---
title: Vererbung und die Prototypenkette
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Advanced")}}

In der Programmierung bezieht sich _Vererbung_ darauf, Merkmale von einem Elternteil an ein Kind zu vererben, sodass ein neuer Code bestehende Funktionen wiederverwenden und darauf aufbauen kann. JavaScript implementiert Vererbung mithilfe von [Objekten](/de/docs/Web/JavaScript/Data_structures#objects). Jedes Objekt besitzt eine interne Verbindung zu einem anderen Objekt, das als sein _Prototyp_ bezeichnet wird. Dieses Prototyp-Objekt hat wiederum einen eigenen Prototyp, und so weiter, bis ein Objekt erreicht wird, dessen Prototyp `null` ist. Per Definition hat `null` keinen Prototyp und fungiert als letztes Glied in dieser **Prototypenkette**. Es ist möglich, jedes Mitglied der Prototypenkette zu mutieren oder sogar den Prototyp zur Laufzeit auszutauschen, sodass Konzepte wie [statische Disposition](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht existieren.

JavaScript ist ein wenig verwirrend für Entwickler, die in klassenbasierten Sprachen (wie Java oder C++) erfahren sind, da es [dynamisch](/de/docs/Web/JavaScript/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen besitzt. Obwohl diese Verwirrung oft als eine der Schwächen von JavaScript angesehen wird, ist das prototypische Vererbungssystem selbst tatsächlich mächtiger als das klassische Modell. Es ist beispielsweise relativ trivial, ein klassisches Modell auf einem prototypischen Modell zu erstellen — so werden [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert.

Obwohl Klassen inzwischen weit verbreitet sind und in JavaScript zu einem neuen Paradigma geworden sind, bringen Klassen kein neues Vererbungsmuster mit sich. Während Klassen die meisten prototypischen Mechanismen abstrahieren, ist es dennoch nützlich zu verstehen, wie Prototypen unter der Haube funktionieren.

## Vererbung mit der Prototypenkette

### Vererbung von Eigenschaften

JavaScript-Objekte sind dynamische "Beutel" von Eigenschaften (als **eigene Eigenschaften** bezeichnet). JavaScript-Objekte besitzen eine Verbindung zu einem Prototyp-Objekt. Wenn versucht wird, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur im Objekt selbst gesucht, sondern auch im Prototyp des Objekts, im Prototyp des Prototyps usw., bis entweder eine passende Eigenschaft gefunden wird oder das Ende der Prototypenkette erreicht ist.

> [!NOTE]
> Gemäß dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Der `[[Prototype]]`-internen Slot kann mittels der Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} jeweils abgerufen und geändert werden. Dies ist äquivalent zum JavaScript-Accessor [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), der nicht standardisiert, aber faktisch von vielen JavaScript-Engines implementiert ist. Um Verwirrung zu vermeiden und dabei prägnant zu bleiben, werden wir in unserer Notation darauf verzichten, `obj.__proto__` zu verwenden, sondern `obj.[[Prototype]]` stattdessen verwenden. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Dies sollte nicht mit der `func.prototype`-Eigenschaft von Funktionen verwechselt werden, die stattdessen den `[[Prototype]]` angibt, der allen _Instanzen_ von Objekten zugewiesen werden soll, die von der gegebenen Funktion als Konstruktor erstellt wurden. Wir werden die `prototype`-Eigenschaft von Konstruktionsfunktionen in [einem späteren Abschnitt](#konstruktoren) besprechen.

Es gibt verschiedene Möglichkeiten, den `[[Prototype]]` eines Objekts anzugeben, die in [einem späteren Abschnitt](#verschiedene_möglichkeiten_zum_erstellen_und_mutieren_von_prototypketten) aufgelistet sind. Für jetzt werden wir die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung verwenden. Es ist erwähnenswert, dass die `{ __proto__: ... }`-Syntax sich vom `obj.__proto__`-Accessor unterscheidet: Ersteres ist standardisiert und nicht veraltet.

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

Das Festlegen einer Eigenschaft auf ein Objekt erstellt eine eigene Eigenschaft. Die einzige Ausnahme von den Regeln des Abrufens und Festlegens von Eigenschaften ist, wenn sie von einem [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen wird.

Ebenso können Sie längere Prototypenketten erstellen, und eine Eigenschaft wird in allen von ihnen gesucht.

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

JavaScript verfügt nicht über "[Methoden](/de/docs/Glossary/Method)" in der Form, in der klassenbasierte Sprachen sie definieren. In JavaScript kann jede Funktion einem Objekt in Form einer Eigenschaft hinzugefügt werden. Eine geerbte Funktion verhält sich wie jede andere Eigenschaft, einschließlich der Eigenschaftenschattenbildung wie oben gezeigt (in diesem Fall eine Form der _Methodenüberschreibung_).

Wenn eine geerbte Funktion ausgeführt wird, zeigt der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das erbende Objekt, nicht auf das Prototyp-Objekt, in dem die Funktion eine eigene Eigenschaft ist.

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

Die Stärke der Prototypen besteht darin, dass wir einen Satz von Eigenschaften wiederverwenden können, wenn sie bei jeder Instanz vorhanden sein sollten — insbesondere für Methoden. Angenommen, wir sollen eine Serie von Boxen erstellen, wobei jede Box ein Objekt ist, das einen Wert enthält, der durch eine `getValue`-Funktion abgerufen werden kann. Eine naive Implementierung wäre:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Dies ist suboptimal, da jede Instanz ihre eigene Funktionseigenschaft besitzt, die dasselbe tut, was redundant und unnötig ist. Stattdessen können wir `getValue` in den `[[Prototype]]` aller Boxen verschieben:

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

Auf diese Weise wird die `getValue`-Methode aller Boxen auf dieselbe Funktion verweisen, was den Speicherverbrauch senkt. Das manuelle Binden des `__proto__` für jede Objekt-Erstellung ist jedoch immer noch sehr unbequem. Dies ist der Zeitpunkt, an dem wir eine _Konstruktionsfunktion_ verwenden würden, die automatisch den `[[Prototype]]` für jedes hergestellte Objekt festlegt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

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

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die aus der Konstruktionsfunktion `Box` erstellt wurde. `Box.prototype` unterscheidet sich nicht wesentlich von dem `boxPrototype`-Objekt, das wir zuvor erstellt haben — es ist einfach ein normales Objekt. Jede Instanz, die von einer Konstruktionsfunktion erstellt wird, hat automatisch die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft des Konstruktors als ihren `[[Prototype]]` — das heißt, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktionsfunktion selbst verweist — das heißt, `Box.prototype.constructor === Box`. Dies ermöglicht es, auf den ursprünglichen Konstruktor von jeder Instanz aus zuzugreifen.

> [!NOTE]
> Wenn ein Nicht-Primitiv von der Konstruktionsfunktion zurückgegeben wird, wird dieser Wert zum Ergebnis des `new`-Ausdrucks. In diesem Fall ist der `[[Prototype]]` möglicherweise nicht korrekt gebunden — aber das sollte in der Praxis selten vorkommen.

Die obige Konstruktionsfunktion kann in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) wie folgt umgeschrieben werden:

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

Klassen sind syntaktischer Zucker über Konstruktionsfunktionen, was bedeutet, dass Sie `Box.prototype` immer noch manipulieren können, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch als Abstraktion über den zugrunde liegenden Prototyp-Mechanismus konzipiert sind, werden wir für dieses Tutorial die leichtere Syntax der Konstruktionsfunktion verwenden, um vollständig zu demonstrieren, wie Prototypen funktionieren.

Da `Box.prototype` dasselbe Objekt wie der `[[Prototype]]` aller Instanzen referenziert, können wir das Verhalten aller Instanzen ändern, indem wir `Box.prototype` mutieren.

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

Ein Korollar ist, _das Neuzuweisen_ von `Constructor.prototype` (`Constructor.prototype = ...`) ist eine schlechte Idee aus zwei Gründen:

- Der `[[Prototype]]` von Instanzen, die vor der Neuzuweisung erstellt wurden, verweist jetzt auf ein anderes Objekt als der `[[Prototype]]` von Instanzen, die nach der Neuzuweisung erstellt wurden — das Mutieren des `[[Prototype]]` eines Objekts verändert nicht mehr das andere.
- Es sei denn, Sie setzen manuell die `constructor`-Eigenschaft zurück, die Konstruktionsfunktion kann vom `instance.constructor` nicht mehr zurückverfolgt werden, was die Benutzererwartung enttäuschen könnte. Einige eingebaute Operationen lesen ebenfalls die `constructor`-Eigenschaft, und falls sie nicht gesetzt ist, funktionieren sie möglicherweise nicht wie erwartet.

`Constructor.prototype` ist nur nützlich beim Konstruieren von Instanzen. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, das der _eigene_ Prototyp der Konstruktionsfunktion ist, der `Function.prototype` ist — das heißt `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literalsyntaxen in JavaScript erstellen Instanzen, die implizit den `[[Prototype]]` festlegen. Zum Beispiel:

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

Wir können sie in ihre Konstruktionsformen "entsüßen".

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Zum Beispiel sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, was erklärt, warum sie automatisch auf allen Array-Instanzen verfügbar sind.

> [!WARNING]
> Es gibt ein Missfeature, das früher weit verbreitet war — die Erweiterung von `Object.prototype` oder einem der anderen eingebauten Prototypen. Ein Beispiel für dieses Missfeature ist das Definieren von `Array.prototype.myMethod = function () {...}` und dann die Verwendung von `myMethod` auf allen Array-Instanzen.
>
> Dieses Missfeature wird _Monkey Patching_ genannt. Das Durchführen von Monkey Patching gefährdet die Vorwärtskompatibilität, weil, wenn die Sprache diese Methode in Zukunft mit einer anderen Signatur hinzufügt, Ihr Code bricht. Es hat zu Vorfällen wie [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt und kann für die Weiterentwicklung der Sprache, da JavaScript versucht, "das Web nicht zu brechen", eine große Unannehmlichkeit sein.
>
> Der **einzige** gute Grund, einen eingebauten Prototyp zu erweitern, besteht darin, die Funktionen neuerer JavaScript-Engines nachzurüsten, wie z.B. `Array.prototype.forEach`.

Aus historischen Gründen sind einige `prototype`-Eigenschaften eingebauter Konstruktoren selbst Instanzen. Zum Beispiel ist `Number.prototype` eine Zahl 0, `Array.prototype` ist ein leeres Array, und `RegExp.prototype` ist `/(?:)/`.

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

### Längere Vererbungsketten erstellen

Die `Constructor.prototype`-Eigenschaft wird wie vorhanden der `[[Prototype]]` der Instanzen des Konstruktors sein — einschließlich des eigenen `[[Prototype]]` von `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _normales Objekt_ — das heißt `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist — das heißt `Object.getPrototypeOf(Object.prototype) === null`. Daher baut ein typischer Konstruktor die folgende Prototypenkette auf:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototypenketten zu erstellen, können wir den `[[Prototype]]` von `Constructor.prototype` über die Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) festlegen.

```js
function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

In Klassenbegriffen entspricht dies der Verwendung der [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) Syntax.

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Möglicherweise sehen Sie auch einige Legacy-Codes, die {{jsxref("Object.create()")}} verwenden, um die Vererbungskette zu erstellen. Da hierbei jedoch die `prototype`-Eigenschaft neu zugewiesen und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) entfernt wird, kann dies fehleranfälliger sein, während Leistungsgewinne nicht offensichtlich sind, wenn die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Prototypen inspizieren: ein tieferer Einblick

Schauen wir uns im Detail an, was im Hintergrund passiert.

In JavaScript können, wie oben erwähnt, Funktionen Eigenschaften haben. Alle Funktionen haben eine spezielle Eigenschaft namens `prototype`. Beachten Sie bitte, dass der folgende Code frei steht (es ist sicher anzunehmen, dass es keinen anderen JavaScript-Code auf der Webseite gibt außer dem untenstehenden Code). Für das beste Lernerlebnis wird dringend empfohlen, eine Konsole zu öffnen, zur Registerkarte "Konsole" zu navigieren, den untenstehenden JavaScript-Code zu kopieren und durch Drücken der Eingabetaste/Return-Taste auszuführen. (Die Konsole ist in den meisten Entwicklertools von Webbrowsern enthalten. Weitere Informationen sind verfügbar für [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/), und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/).)

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

Wie oben zu sehen ist, hat `doSomething()` eine Standard-`prototype`-Eigenschaft, wie durch die Konsole demonstriert. Nach dem Ausführen dieses Codes sollte die Konsole ein Objekt anzeigen, das ähnlich aussieht wie dieses.

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
> Die Chrome-Konsole verwendet `[[Prototype]]`, um den Prototyp des Objekts zu bezeichnen, entsprechend den Begriffen der Spezifikation; Firefox verwendet `<prototype>`. Zur Konsistenz werden wir `[[Prototype]]` verwenden.

Wir können Eigenschaften zum Prototyp von `doSomething()` hinzufügen, wie im Folgenden gezeigt.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

Dies ergibt:

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

Wir können jetzt den `new`-Operator verwenden, um eine Instanz von `doSomething()` basierend auf diesem Prototyp zu erstellen. Um den `new`-Operator zu verwenden, rufen Sie die Funktion wie gewohnt auf, aber mit dem Präfix `new`. Der Aufruf einer Funktion mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Dann können dieser Instanz Eigenschaften hinzugefügt werden.

Versuchen Sie den folgenden Code:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

Dies ergibt eine Ausgabe ähnlich der folgenden:

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

Wie oben zu sehen ist, ist der `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`. Aber was bewirkt das? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, prüft die Laufzeit zuerst, ob `doSomeInstancing` diese Eigenschaft besitzt.

Falls `doSomeInstancing` die Eigenschaft nicht besitzt, wird die Eigenschaft in `doSomeInstancing.[[Prototype]]` (alias `doSomething.prototype`) gesucht. Wenn `doSomeInstancing.[[Prototype]]` über die gesuchte Eigenschaft verfügt, wird diese Eigenschaft aus `doSomeInstancing.[[Prototype]]` verwendet.

Ansonsten, falls `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, wird `doSomeInstancing.[[Prototype]].[[Prototype]]` auf die Eigenschaft hin überprüft. Standardmäßig ist der `[[Prototype]]` der `prototype`-Eigenschaft jeder Funktion `Object.prototype`. Also wird `doSomeInstancing.[[Prototype]].[[Prototype]]` (alias `doSomething.prototype.[[Prototype]]` (alias `Object.prototype`)) durchsucht, um die gesuchte Eigenschaft zu finden.

Wenn die Eigenschaft in `doSomeInstancing.[[Prototype]].[[Prototype]]` nicht gefunden wird, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` durchsucht. Es gibt jedoch ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, weil `Object.prototype.[[Prototype]]` `null` ist. Erst dann, nach der vollständigen Durchsuchung der gesamten Prototypenkette von `[[Prototype]]`, stellt die Laufzeit fest, dass die Eigenschaft nicht existiert, und schlussfolgert, dass der Wert der Eigenschaft `undefined` ist.

Lassen Sie uns etwas mehr Code in die Konsole eingeben:

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

## Verschiedene Möglichkeiten zum Erstellen und Mutieren von Prototypketten

Wir sind auf viele Möglichkeiten gestoßen, Objekte zu erstellen und ihre Prototypenkette zu ändern. Wir werden systematisch die verschiedenen Ansätze zusammenfassen und die Vor- und Nachteile jedes Ansatzes vergleichen.

### Mit Syntaxkonstrukten erstellte Objekte

```js
const o = { a: 1 };
// The newly created object o has Object.prototype as its [[Prototype]]
// Object.prototype has null as its [[Prototype]].
// o ---> Object.prototype ---> null

const b = ["yo", "whadup", "?"];
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

Wenn der `__proto__`-Schlüssel in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verwendet wird, führt das Verweisen des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, stillschweigend zum Scheitern ohne Ausnahme. Im Gegensatz zum [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Setter ist `__proto__` in Objektliteralen standardisiert und optimiert und kann sogar performanter sein als {{jsxref("Object.create")}}. Die Deklaration zusätzlicher eigene Eigenschaften am Objekt während der Erstellung ist ergonomischer als {{jsxref("Object.create")}}.

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

Konstruktionsfunktionen sind seit den Anfängen von JavaScript verfügbar. Daher sind sie sehr schnell, sehr standardisiert und sehr JIT-optimierbar. Es ist jedoch auch schwierig, "richtig zu machen", da auf diese Weise hinzugefügte Methoden standardmäßig aufzählbar sind, was inkonsistent mit der Klassensyntax oder dem Verhalten eingebauter Methoden ist. Auch das Erstellen längerer Vererbungsketten ist, wie früher demonstriert, fehleranfällig.

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

Ähnlich wie der `__proto__`-Schlüssel in Objektliteralen ermöglicht `Object.create()` das direkte Festlegen des Prototyps eines Objekts bei der Erstellung, wodurch die Laufzeit das Objekt weiter optimieren kann. Es erlaubt auch die Erstellung von Objekten mit `null` Prototyp durch Verwendung von `Object.create(null)`. Der zweite Parameter von `Object.create()` erlaubt es Ihnen, die Attribute jeder Eigenschaft im neuen Objekt genau zu spezifizieren, was ein zweischneidiges Schwert sein kann:

- Es ermöglicht Ihnen, nicht aufzählbare Eigenschaften usw. während der Erstellung des Objekts zu erstellen, was mit Objektliteralen nicht möglich ist.
- Es ist viel ausführlicher und fehleranfälliger als Objektliterale.
- Es könnte langsamer als Objektliterale sein, insbesondere bei der Erstellung vieler Eigenschaften.

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

Klassen bieten die höchste Lesbarkeit und Wartbarkeit bei der Definition komplexer Vererbungsstrukturen. [Privateigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sind ein Feature ohne triviale Ersetzung im prototypischen Vererbungssystem. Klassen sind jedoch weniger optimiert als traditionelle Konstruktionsfunktionen und werden in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während alle oben genannten Methoden die Prototypenkette bei der Objekterstellung festlegen, ermöglicht [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) das Mutieren der `[[Prototype]]`-internen Eigenschaft eines vorhandenen Objekts. Es kann sogar ein Prototyp auf ein Prototyp-loses Objekt gesetzt werden, das mit `Object.create(null)` erstellt wurde, oder den Prototyp eines Objekts entfernen, indem es auf `null` gesetzt wird.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Es sollte jedoch angestrebt werden, den Prototyp während der Erstellung festzulegen, wo immer möglich, da das dynamische Festlegen des Prototyps alle Optimierungen, die die Engines an der Prototypenkette vorgenommen haben, stört. Dies könnte dazu führen, dass einige Engines Ihren Code für die De-Optimierung neu kompilieren, um ihn gemäß den Spezifikationen zum Laufen zu bringen.

### Mit dem \_\_proto\_\_ Accessor

Alle Objekte erben den [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Setter, der verwendet werden kann, um `[[Prototype]]` eines vorhandenen Objekts festzulegen (wenn der `__proto__`-Schlüssel auf dem Objekt nicht überschrieben ist).

> **Achtung:** `Object.prototype.__proto__`-Accessor ist **nicht standardisiert** und veraltet. Sie sollten fast immer `Object.setPrototypeOf` stattdessen verwenden.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Im Vergleich zu `Object.setPrototypeOf` scheitert das Festlegen von `__proto__` auf etwas, das kein Objekt ist, stillschweigend ohne Ausnahme. Es hat auch etwas bessere Browser-Unterstützung. Es ist jedoch nicht standardisiert und veraltet. Sie sollten fast immer `Object.setPrototypeOf` stattdessen verwenden.

## Leistung

Die Suchzeit für Eigenschaften, die weit oben in der Prototypenkette liegen, kann sich negativ auf die Leistung auswirken, und dies kann in kritischen Codestellen erheblich sein. Darüber hinaus führt der Versuch, nicht vorhandene Eigenschaften zuzugreifen, immer dazu, dass die gesamte Prototypenkette durchlaufen wird.

Auch beim Iterieren über die Eigenschaften eines Objekts wird **jede** aufzählbare Eigenschaft, die in der Prototypenkette liegt, aufgezählt. Um zu überprüfen, ob ein Objekt eine Eigenschaft auf _sich selbst_ und nicht irgendwo in seiner Prototypenkette festgelegt hat, ist es notwendig, die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) zu verwenden. Alle Objekte, außer jene mit `null` als `[[Prototype]]`, erben [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype` — es sei denn, es wurde weiter unten in der Prototypenkette überschrieben. Um Ihnen ein konkretes Beispiel zu geben, nehmen wir den obigen Beispielcode des Graphen, um es zu veranschaulichen:

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

Hinweis: Es reicht **nicht** aus, zu überprüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft könnte sehr wohl existieren, aber ihr Wert könnte einfach auf `undefined` gesetzt sein.

## Fazit

JavaScript kann für Entwickler, die von Java oder C++ kommen, etwas verwirrend sein, da es alles dynamisch ist, alles zur Laufzeit passiert und es keine statischen Typen gibt. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und selbst Funktionen sind Instanzen des `Function`-Konstruktors. Selbst "Klassen" als Sprachkonstrukte sind nur Konstruktionsfunktionen zur Laufzeit.

Alle Konstruktionsfunktionen in JavaScript haben eine spezielle Eigenschaft namens `prototype`, die mit dem `new`-Operator arbeitet. Die Referenz auf das Prototyp-Objekt wird zur internen `[[Prototype]]`-Eigenschaft der neuen Instanz kopiert. Zum Beispiel, wenn Sie `const a1 = new A()` machen, setzt JavaScript (nachdem es das Objekt im Speicher erstellt hat und bevor es die Funktion `A()` mit `this` darauf ausführt) `a1.[[Prototype]] = A.prototype`. Wenn Sie dann Eigenschaften der Instanz zugreifen, prüft JavaScript zuerst, ob sie direkt auf diesem Objekt existieren, und falls nicht, prüft es `[[Prototype]]`. `[[Prototype]]` wird _rekursiv_ geprüft, d.h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis es gefunden wird oder `Object.getPrototypeOf` `null` zurückgibt. Das bedeutet, dass alle im `prototype` definierten Eigenschaften effektiv von allen Instanzen geteilt werden, und Sie können sogar später Teile von `prototype` ändern und die Änderungen in allen bestehenden Instanzen sehen.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` machen, dann würde `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething` verweisen — das ist das gleiche wie das von Ihnen definierte `A.prototype.doSomething`, d.h. `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das prototypische Vererbungssystem zu verstehen, bevor Sie komplexen Code schreiben, der es nutzt. Achten Sie auch auf die Länge der Prototypenketten in Ihrem Code und teilen Sie sie bei Bedarf auf, um mögliche Leistungsprobleme zu vermeiden. Außerdem sollten die nativen Prototypen **niemals** erweitert werden, es sei denn, es geschieht zur Sicherstellung der Kompatibilität mit neueren JavaScript-Funktionen.
