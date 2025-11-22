---
title: Vererbung und die Prototyp-Kette
slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: 4fc928963dcb04fece336fb3a2f34958fa4bdcb3
---

In der Programmierung bezieht sich _Vererbung_ auf das Weitergeben von Eigenschaften von einem Elternteil zu einem Kind, sodass ein neuer Code auf die Funktionen eines vorhandenen aufbauen und diese wiederverwenden kann. JavaScript implementiert Vererbung durch die Verwendung von [Objekten](/de/docs/Web/JavaScript/Guide/Data_structures#objects). Jedes Objekt hat eine interne Verknüpfung zu einem anderen Objekt, das sein _Prototyp_ genannt wird. Dieses Prototyp-Objekt hat wiederum einen eigenen Prototyp, und so weiter, bis ein Objekt erreicht wird, dessen Prototyp `null` ist. Per Definition hat `null` keinen Prototyp und fungiert als letztes Glied in dieser **Prototyp-Kette**. Es ist möglich, jedes Glied der Prototyp-Kette zu verändern oder sogar zur Laufzeit den Prototyp auszutauschen, weshalb Konzepte wie [statische Zuweisung](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht existieren.

JavaScript ist für Entwickler, die Erfahrung mit klassenbasierten Sprachen (wie Java oder C++) haben, ein wenig verwirrend, da es [dynamisch](/de/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen hat. Während diese Verwirrung oft als eine der Schwächen von JavaScript angesehen wird, ist das Prototyp-Vererbungskonzept selbst tatsächlich mächtiger als das klassische Modell. Es ist beispielsweise relativ einfach, auf einem Prototyp-Modell ein klassisches Modell aufzubauen – so werden [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert.

Obwohl Klassen mittlerweile weit verbreitet sind und zu einem neuen Paradigma in JavaScript geworden sind, bringen sie kein neues Vererbungsmuster mit sich. Selbst wenn Klassen die meisten Prototyp-Mechanismen abstrahieren, ist es dennoch nützlich zu verstehen, wie Prototypen intern funktionieren.

## Vererbung mit der Prototyp-Kette

### Vererben von Eigenschaften

JavaScript-Objekte sind dynamische "Taschen" von Eigenschaften (als **eigene Eigenschaften** bezeichnet). JavaScript-Objekte haben eine Verbindung zu einem Prototyp-Objekt. Beim Versuch, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur auf dem Objekt, sondern auch auf dessen Prototyp, dem Prototyp des Prototyps usw. gesucht, bis entweder eine Eigenschaft mit gleichem Namen gefunden oder das Ende der Prototyp-Kette erreicht ist.

> [!NOTE]
> Gemäß dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Der interne Slot `[[Prototype]]` kann mit den Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} abgerufen und modifiziert werden. Dies entspricht dem JavaScript-Zugriffsobjekt [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), das nicht standardisiert, aber de-facto von vielen JavaScript-Engines implementiert ist. Um Verwirrung zu vermeiden und es prägnant zu halten, werden wir in unserer Notation darauf verzichten, `obj.__proto__` zu verwenden, sondern stattdessen `obj.[[Prototype]]`. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Es sollte nicht mit der `func.prototype`-Eigenschaft von Funktionen verwechselt werden, die stattdessen den `[[Prototype]]` festlegt, der allen _Instanzen_ von Objekten zugewiesen wird, die von der angegebenen Funktion beim Einsatz als Konstruktor erstellt werden. Wir werden die `prototype`-Eigenschaft von Konstruktorfunktionen in [einem späteren Abschnitt](#konstruktoren) diskutieren.

Es gibt mehrere Möglichkeiten, den `[[Prototype]]` eines Objekts festzulegen, die in [einem späteren Abschnitt](#verschiedene_möglichkeiten_zur_erstellung_und_mutation_von_prototyp-ketten) aufgeführt sind. Vorläufig werden wir die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung verwenden. Es sei darauf hingewiesen, dass die `{ __proto__: ... }`-Syntax von dem `obj.__proto__`-Zugriffsobjekt unterschiedlich ist: Ersteres ist standardmäßig und nicht veraltet.

In einem Objekt-Literal wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` (der entweder `null` oder ein anderes Objekt sein muss) zum `[[Prototype]]` des durch das Literal repräsentierten Objekts, während die anderen Schlüssel wie `a` und `b` zu den _eigenen Eigenschaften_ des Objekts werden. Diese Syntax liest sich sehr natürlich, da `[[Prototype]]` nur eine "interne Eigenschaft" des Objekts ist.

So geschieht es, wenn versucht wird, auf eine Eigenschaft zuzugreifen:

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

Das Setzen einer Eigenschaft auf ein Objekt erzeugt eine eigene Eigenschaft. Die einzige Ausnahme von den Regeln des Abruf- und Setzverhaltens ist, wenn es durch einen [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen wird.

Ähnlich können Sie längere Prototyp-Ketten erstellen, und eine Eigenschaft wird auf allen von ihnen gesucht.

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

JavaScript verfügt nicht über "{{Glossary("Method", "Methode")}}" in der Form, wie sie von klassenbasierten Sprachen definiert werden. In JavaScript kann jede Funktion einem Objekt in Form einer Eigenschaft hinzugefügt werden. Eine geerbte Funktion verhält sich wie jede andere Eigenschaft, einschließlich der oben gezeigten Eigenschaftsüberschattung (in diesem Fall eine Form von _Methodenüberschreibung_).

Wenn eine geerbte Funktion ausgeführt wird, verweist der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das vererbende Objekt, nicht auf das Prototyp-Objekt, bei dem die Funktion eine eigene Eigenschaft ist.

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

Die Stärke der Prototypen liegt darin, dass wir eine Menge von Eigenschaften wiederverwenden können, wenn sie in jeder Instanz vorhanden sein sollen – insbesondere für Methoden. Angenommen, wir sollen eine Reihe von Boxen erstellen, wobei jede Box ein Objekt ist, das einen Wert enthält, auf den über eine `getValue`-Funktion zugegriffen werden kann. Eine naive Implementierung wäre:

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

Auf diese Weise verweisen alle Boxen mit der `getValue`-Methode auf dieselbe Funktion, was den Speicherverbrauch reduziert. Es ist jedoch immer noch sehr unpraktisch, manuell den `__proto__` für jede Objekterstellung zu binden. An dieser Stelle würden wir eine _Konstruktorfunktion_ verwenden, die automatisch das `[[Prototype]]` für jedes hergestellte Objekt festlegt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

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

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die von der `Box`-Konstruktorfunktion erstellt wurde. `Box.prototype` unterscheidet sich nicht wesentlich von dem `boxPrototype`-Objekt, das wir zuvor erstellt haben – es ist einfach ein schlichtes Objekt. Jede Instanz, die von einer Konstruktorfunktion erstellt wird, hat automatisch die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft des Konstruktors als ihr `[[Prototype]]` – das heißt, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktorfunktion selbst verweist – das heißt, `Box.prototype.constructor === Box`. Dies ermöglicht es, aus jeder Instanz auf den ursprünglichen Konstruktor zuzugreifen.

> [!NOTE]
> Wenn aus der Konstruktorfunktion ein nicht-primitives Objekt zurückgegeben wird, wird dieser Wert zum Ergebnis des `new`-Ausdrucks. In diesem Fall könnte das `[[Prototype]]` möglicherweise nicht korrekt gebunden werden – aber das sollte in der Praxis nicht häufig vorkommen.

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

Klassen sind Zucker über Konstruktorfunktionen, was bedeutet, dass Sie `Box.prototype` trotzdem manipulieren können, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch als Abstraktion über den zugrunde liegenden Prototyp-Mechanismus konzipiert sind, verwenden wir für dieses Tutorial die leichtere Konstruktorfunktions-Syntax, um vollständig zu demonstrieren, wie Prototypen funktionieren.

Weil `Box.prototype` dasselbe Objekt referenziert wie das `[[Prototype]]` aller Instanzen, können wir das Verhalten aller Instanzen ändern, indem wir `Box.prototype` ändern.

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

Ein Korollar ist, dass das _Neuzuweisen_ von `Constructor.prototype` (`Constructor.prototype = ...`) eine schlechte Idee aus zwei Gründen ist:

- Das `[[Prototype]]` von Instanzen, die vor der Neuzuweisung erstellt wurden, referenziert nun ein anderes Objekt als das `[[Prototype]]` von Instanzen, die nach der Neuzuweisung erstellt wurden – das Ändern des `[[Prototype]]` von einem beeinflusst daher nicht mehr das andere.
- Es sei denn, Sie setzen die `constructor`-Eigenschaft manuell neu, kann die Konstruktorfunktion nicht mehr von `instance.constructor` zurückverfolgt werden, was die Benutz erwartet. Einige eingebaute Operationen werden ebenfalls die `constructor`-Eigenschaft lesen, und wenn sie nicht gesetzt ist, könnten sie nicht wie erwartet funktionieren.

`Constructor.prototype` ist nur dann nützlich, wenn Instanzen erzeugt werden. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, das der _eigene_ Prototyp der Konstruktorfunktion ist, nämlich `Function.prototype` – das heißt, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literalsyntaxen in JavaScript erstellen Instanzen, die implizit das `[[Prototype]]` festlegen. Zum Beispiel:

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

Wir können sie in ihre Konstruktorform "entzuckern".

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Beispielsweise sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, was erklärt, warum sie automatisch bei allen Array-Instanzen verfügbar sind.

> [!WARNING]
> Es gibt ein Merkmals, das früher sehr verbreitet war – das Erweitern von `Object.prototype` oder einem der anderen eingebauten Prototypen. Ein Beispiel für dieses Merkmal ist das Definieren von `Array.prototype.myMethod = function () {...}` und das anschließende Verwenden von `myMethod` bei allen Array-Instanzen.
>
> Dieses Merkmal wird als _Monkey-Patching_ bezeichnet. Das Durchführen von Monkey-Patching birgt Risiken bezüglich der zukünftigen Kompatibilität, da Ihr Code fehlerhaft wird, wenn die Sprache in Zukunft diese Methode mit einer anderen Signatur hinzufügt. Es hat zu Vorfällen wie dem [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt und kann ein großes Hindernis für die Weiterentwicklung der Sprache sein, da JavaScript versucht "das Web nicht zu brechen".
>
> Der **einzige** triftige Grund, einen eingebauten Prototyp zu erweitern, ist, um die Funktionen neuer JavaScript-Engines rückzuportieren, wie `Array.prototype.forEach`.

Es mag interessant sein zu erwähnen, dass einige eingebauten Konstruktoren aufgrund historischer Gründe selbst Instanzen sind. Zum Beispiel ist `Number.prototype` eine Zahl 0, `Array.prototype` ist ein leeres Array, und `RegExp.prototype` ist `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

Dies gilt jedoch nicht für benutzerdefinierte Konstruktoren oder moderne Konstruktoren wie `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Längere Vererbungsketten erstellen

Die `Constructor.prototype`-Eigenschaft wird, wie sie ist, zum `[[Prototype]]` von Instanzen des Konstruktors – einschließlich des eigenen `[[Prototype]]` von `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _einfaches Objekt_ – das heißt, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist – das heißt, `Object.getPrototypeOf(Object.prototype) === null`. Daher baut ein typischer Konstruktor die folgende Prototyp-Kette auf:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototyp-Ketten zu erstellen, können wir den `[[Prototype]]` von `Constructor.prototype` über die Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) festlegen.

```js
function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

In Klassenausdrücken entspricht dies der Verwendung der Syntax [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Sie können auch einige veraltete Codes sehen, die {{jsxref("Object.create()")}} zur Erstellung der Vererbungskette verwenden. Da dies jedoch die `prototype`-Eigenschaft neu zuweist und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft entfernt, kann dies fehleranfälliger sein, während Leistungsgewinne nicht offensichtlich sein können, solange die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Prototypen inspizieren: ein tieferer Einblick

Lassen Sie uns genauer betrachten, was hinter den Kulissen passiert.

In JavaScript, wie oben erwähnt, können Funktionen Eigenschaften haben. Alle Funktionen haben eine besondere Eigenschaft namens `prototype`. Beachten Sie, dass der untenstehende Code für sich steht (es wird davon ausgegangen, dass es keine andere JavaScript auf der Webseite außer dem folgenden Code gibt). Für das beste Lernerlebnis wird dringend empfohlen, eine Konsole zu öffnen, zur Registerkarte "Konsole" zu navigieren, den untenstehenden JavaScript-Code zu kopieren und einzufügen und ihn durch Drücken der Eingabe-/Return-Taste auszuführen. (Die Konsole ist in den meisten Entwicklertools für Webbrowser enthalten. Weitere Informationen sind verfügbar für die [Firefox-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/), und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/).)

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

Wie oben gesehen, hat `doSomething()` eine Standard-`prototype`-Eigenschaft, wie von der Konsole demonstriert. Nach Ausführung dieses Codes sollte die Konsole ein ähnliches Objekt wie dieses angezeigt haben.

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
> Die Chrome-Konsole verwendet `[[Prototype]]`, um den Prototyp des Objekts zu bezeichnen, entsprechend den Spezifikationsbedingungen; Firefox verwendet `<prototype>`. Der Übersicht halber verwenden wir `[[Prototype]]`.

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

Wir können jetzt den `new`-Operator verwenden, um eine Instanz von `doSomething()` basierend auf diesem Prototyp zu erstellen. Um den neuen Operator zu verwenden, rufen Sie die Funktion normal auf, jedoch mit dem Präfix `new`. Das Aufrufen einer Funktion mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Eigenschaften können dann zu diesem Objekt hinzugefügt werden.

Probieren Sie folgenden Code aus:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

Das Ergebnis ist eine Ausgabe ähnlich der folgenden:

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

Wie oben gesehen, ist das `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`. Aber was bewirkt das? Wenn auf eine Eigenschaft von `doSomeInstancing` zugegriffen wird, prüft die Laufzeit zuerst, ob `doSomeInstancing` diese Eigenschaft hat.

Falls `doSomeInstancing` die Eigenschaft nicht hat, sucht die Laufzeit nach der Eigenschaft in `doSomeInstancing.[[Prototype]]` (also `doSomething.prototype`). Wenn `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft hat, wird diese Eigenschaft auf `doSomeInstancing.[[Prototype]]` verwendet.

Andernfalls, wenn `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, wird `doSomeInstancing.[[Prototype]].[[Prototype]]` auf die Eigenschaft geprüft. Standardmäßig ist der `[[Prototype]]` der `prototype`-Eigenschaft einer Funktion `Object.prototype`. Also wird `doSomeInstancing.[[Prototype]].[[Prototype]]` (also `doSomething.prototype.[[Prototype]]` (also `Object.prototype`)) dann auf die gesuchte Eigenschaft durchsucht.

Falls bei `doSomeInstancing.[[Prototype]].[[Prototype]]` die Eigenschaft nicht gefunden wird, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` durchsucht. Allerdings gibt es ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, da `Object.prototype.[[Prototype]]` `null` ist. Dann und nur dann, nachdem die gesamte Prototyp-Kette der `[[Prototype]]`s durchsucht wurde, stellt die Laufzeit fest, dass die Eigenschaft nicht existiert und schließt, dass der Wert an der Eigenschaft `undefined` ist.

Versuchen wir, noch mehr Code in die Konsole einzugeben:

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

Das resultiert in folgendem:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Möglichkeiten zur Erstellung und Mutation von Prototyp-Ketten

Wir haben verschiedene Möglichkeiten zur Erstellung von Objekten und zur Veränderung ihrer Prototyp-Ketten kennengelernt. Wir werden systematisch die verschiedenen Methoden zusammenfassen, wobei wir die Vor- und Nachteile jeder Methode vergleichen.

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

Wenn der `__proto__`-Schlüssel in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verwendet wird, schlägt das Zeigen des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, einfach stillschweigend fehl, ohne eine Ausnahme zu werfen. Anders als bei dem [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Setter, ist `__proto__` in Objektliteral-Initialisierern standardisiert und optimiert und kann sogar leistungsfähiger sein als {{jsxref("Object.create")}}. Zusätzliche eigene Eigenschaften beim Erstellen des Objekts zu deklarieren, ist ergonomischer als bei {{jsxref("Object.create")}}.

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

Konstruktorfunktionen gibt es seit sehr frühen JavaScript-Versionen. Daher sind sie sehr schnell, sehr standardisiert und sehr JIT-optimierbar. Sie "richtig zu machen", kann jedoch schwierig sein, da auf diese Weise hinzugefügte Methoden standardmäßig aufzählbar sind, was inkonsistent mit der Klassensyntax oder wie eingebaute Methoden sich verhalten ist. Längere Vererbungsketten sind ebenfalls fehleranfällig, wie zuvor demonstriert.

### Mit Object.create()

Der Aufruf von {{jsxref("Object.create()")}} erstellt ein neues Objekt. Die `[[Prototype]]` dieses Objekts ist das erste Argument der Funktion:

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

Ähnlich wie der `__proto__`-Schlüssel in Objektinitialisierungen ermöglicht `Object.create()` das direkte Festlegen des Prototyps eines Objekts zur Erstellungszeit, was der Laufzeit erlaubt, das Objekt weiter zu optimieren. Es ermöglicht auch die Erstellung von Objekten mit `null`-Prototyp, wie bei `Object.create(null)`. Der zweite Parameter von `Object.create()` erlaubt es, die Attribute jeder Eigenschaft im neuen Objekt genau festzulegen, was ein doppelschneidiges Schwert sein kann:

- Es erlaubt Ihnen, nicht aufzählbare Eigenschaften usw. während der Objekterstellung zu erstellen, was mit Objektliteralen nicht möglich ist.
- Es ist viel ausführlicher und fehleranfälliger als Objektliterale.
- Es kann langsamer als Objektliterale sein, insbesondere bei der Erstellung vieler Eigenschaften.

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

Klassen bieten die höchste Lesbarkeit und Wartbarkeit bei der Definition komplexer Vererbungsstrukturen. [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind ein Feature, das im prototypischen Erbe-Modell keinen trivialen Ersatz hat. Klassen sind jedoch weniger optimiert als traditionelle Konstruktorfunktionen und werden in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während alle oben genannten Methoden die Prototypenkette zur Objekterstellung festlegen, ermöglicht [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) das Mutieren der `[[Prototype]]`-internen Eigenschaft eines bestehenden Objekts. Es kann sogar einen Prototyp zu einem objektlosen Objekt auszwingen, das mit `Object.create(null)` erstellt wurde, oder den Prototyp eines Objekts durch Setzen auf `null` entfernen.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Sie sollten jedoch nach Möglichkeit den Prototyp während der Erstellung einstellen, da das dynamische Einstellen des Prototyps alle Optimierungen stört, die Engines an der Prototyp-Kette vorgenommen haben. Es könnte einige Engines dazu bringen, Ihren Code zur Deoptimierung neu zu kompilieren, damit er den Spezifikationen entspricht.

### Mit dem \_\_proto\_\_-Zugriffsobjekt

Alle Objekte erben den [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Setter, der verwendet werden kann, um das `[[Prototype]]` eines bestehenden Objekts festzulegen (wenn der `__proto__` Schlüssel nicht im Objekt überschrieben wird).

> [!WARNING]
> Die Accessoren `Object.prototype.__proto__` sind **nicht standardisiert** und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Verglichen mit `Object.setPrototypeOf` schlägt das Setzen von `__proto__` auf etwas, das kein Objekt ist, stillschweigend fehl, ohne eine Ausnahme zu werfen. Es hat auch eine etwas bessere Browserunterstützung. Es ist jedoch nicht standard und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

## Leistung

Die Zugriffszeit für Eigenschaften, die hoch oben in der Prototyp-Kette liegen, kann negative Auswirkungen auf die Leistung haben, und dies könnte signifikant in kritischen Codebereichen sein, wo Leistung wichtig ist. Außerdem durchläuft der Versuch, auf nicht vorhandene Eigenschaften zuzugreifen, stets die gesamte Prototyp-Kette.

Außerdem werden beim Iterieren über die Eigenschaften eines Objekts **jede** aufzählbare Eigenschaft, die sich in der Prototyp-Kette befindet, aufgezählt. Um zu überprüfen, ob eine Eigenschaft auf _ihm selbst_ und nicht irgendwo in seiner Prototyp-Kette definiert ist, ist es notwendig, die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) zu verwenden. Alle Objekte, außer diejenigen mit `null` als `[[Prototype]]`, erben [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype` – es sei denn, es wurde weiter unten in der Prototyp-Kette überschrieben. Um Ihnen ein konkretes Beispiel zu geben, nehmen wir den obigen Beispielcode des Graphen, um dies zu veranschaulichen:

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

Hinweis: Es reicht **nicht** aus, zu überprüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft könnte sehr wohl existieren, aber ihr Wert ist einfach `undefined` gesetzt.

## Fazit

JavaScript kann für Entwickler, die von Java oder C++ kommen, etwas verwirrend sein, da alles dynamisch und im Laufzeitmodus ist und überhaupt keine statischen Typen hat. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und sogar die "Klassen" als Syntaxkonstrukte sind lediglich Konstruktorfunktionen zur Laufzeit.

Alle Konstruktorfunktionen in JavaScript haben eine spezielle Eigenschaft namens `prototype`, die mit dem `new`-Operator arbeitet. Die Referenz auf das Prototyp-Objekt wird in die interne `[[Prototype]]`-Eigenschaft der neuen Instanz kopiert. Wenn Sie beispielsweise `const a1 = new A()` ausführen, legt JavaScript (nach dem Erstellen des Objekts im Speicher und bevor es die Funktion `A()` mit `this` aufruft) `a1.[[Prototype]] = A.prototype` fest. Wenn Sie dann auf die Eigenschaften der Instanz zugreifen, prüft JavaScript zuerst, ob diese Eigenschaften direkt auf diesem Objekt existieren, und wenn nicht, sucht es in `[[Prototype]]`. `[[Prototype]]` wird _rekursiv_ betrachtet, d.h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis es gefunden wird oder `Object.getPrototypeOf` `null` zurückgibt. Dies bedeutet, dass alle auf `prototype` definierten Eigenschaften effektiv von allen Instanzen geteilt werden, und Sie können sogar später Teile von `prototype` ändern und die Änderungen erscheinen in allen vorhandenen Instanzen.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` ausführen, würde `a1.doSomething` tatsächlich `Object.getPrototypeOf(a1).doSomething` referenzieren – was dasselbe ist wie `A.prototype.doSomething`, das Sie definiert haben, also `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das Prototyp-Vererbungskonzept zu verstehen, bevor Sie komplexen Code schreiben, der es verwendet. Achten Sie auch auf die Länge der Prototyp-Ketten in Ihrem Code und unterbrechen Sie sie notfalls, um mögliche Leistungsprobleme zu vermeiden. Darüber hinaus sollten die nativen Prototypen **niemals** erweitert werden, es sei denn, es ist für die Kompatibilität mit neueren JavaScript-Funktionen.
