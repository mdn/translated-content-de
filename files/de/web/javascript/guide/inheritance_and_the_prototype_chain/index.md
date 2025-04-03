---
title: Vererbung und die Prototypenkette
slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Advanced")}}

In der Programmierung bezieht sich _Vererbung_ auf das Weitergeben von Eigenschaften von einem Elternteil an ein Kind, sodass neuer Code die Merkmale eines bestehenden Codes wiederverwenden und darauf aufbauen kann. JavaScript implementiert Vererbung durch die Verwendung von [Objekten](/de/docs/Web/JavaScript/Guide/Data_structures#objects). Jedes Objekt hat einen internen Link zu einem anderen Objekt, das als sein _Prototyp_ bezeichnet wird. Dieses Prototyp-Objekt hat selbst einen Prototyp und so weiter, bis ein Objekt mit `null` als Prototyp erreicht wird. Per Definition hat `null` keinen Prototyp und fungiert als letztes Glied in dieser **Prototypenkette**. Es ist möglich, jedes Mitglied der Prototypenkette zu ändern oder sogar den Prototyp zur Laufzeit auszutauschen, sodass Konzepte wie [statische Zuweisung](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht existieren.

JavaScript kann für Entwickler, die an klassenbasierte Sprachen gewöhnt sind (wie Java oder C++), etwas verwirrend sein, da es [dynamisch](/de/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen hat. Während diese Verwirrung oft als eine Schwäche von JavaScript angesehen wird, ist das Prototypenvererbungsmodell selbst tatsächlich mächtiger als das klassische Modell. Es ist zum Beispiel ziemlich trivial, ein klassisches Modell auf der Grundlage eines Prototypmodells zu erstellen – so werden [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert.

Obwohl Klassen inzwischen weit verbreitet sind und ein neues Paradigma in JavaScript geworden sind, bringen Klassen kein neues Vererbungsmuster mit sich. Während Klassen die meisten der prototypischen Mechanismen abstrahieren, ist es dennoch nützlich zu verstehen, wie Prototypen unter der Haube funktionieren.

## Vererbung mit der Prototypenkette

### Vererbung von Eigenschaften

JavaScript-Objekte sind dynamische "Beispiele" von Eigenschaften (auch **eigene Eigenschaften** genannt). JavaScript-Objekte haben eine Verbindung zu einem Prototyp-Objekt. Beim Versuch, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur auf dem Objekt, sondern auch auf dem Prototyp des Objekts, dem Prototyp des Prototyps und so weiter gesucht, bis entweder eine Eigenschaft mit einem passenden Namen gefunden wird oder das Ende der Prototypenkette erreicht ist.

> [!NOTE]
> Nach dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Der `[[Prototype]]`-interne Slot kann mit den Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} jeweils abgerufen und modifiziert werden. Dies ist äquivalent zum JavaScript-Accessor [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), der zwar nicht standardisiert, aber de facto von vielen JavaScript-Engines implementiert ist. Um Verwirrung zu vermeiden und es dennoch prägnant zu halten, verwenden wir in unserer Notation nicht `obj.__proto__`, sondern `obj.[[Prototype]]`. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Es sollte nicht mit der `func.prototype`-Eigenschaft von Funktionen verwechselt werden, die stattdessen den `[[Prototype]]` für alle _Instanzen_ von Objekten angibt, die von der gegebenen Funktion erstellt wurden, wenn sie als Konstruktor verwendet wird. Wir werden die `prototype`-Eigenschaft von Konstruktorfunktionen in [einem späteren Abschnitt](#konstruktoren) besprechen.

Es gibt mehrere Möglichkeiten, den `[[Prototype]]` eines Objekts anzugeben, die in [einem späteren Abschnitt](#verschiedene_wege,_prototypenketten_zu_erstellen_und_zu_verändern) aufgelistet sind. Für jetzt verwenden wir die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung. Es ist erwähnenswert, dass die Syntax `{ __proto__: ... }` sich von dem `obj.__proto__`-Accessor unterscheidet: Erstere ist standardisiert und nicht veraltet.

In einem Objektliteral wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` (der entweder `null` oder ein anderes Objekt sein muss) zum `[[Prototype]]` des durch das Literal dargestellten Objekts, während die anderen Schlüssel wie `a` und `b` zu den _eigenen Eigenschaften_ des Objekts werden. Diese Syntax liest sich sehr natürlich, da `[[Prototype]]` einfach eine "interne Eigenschaft" des Objekts ist.

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

Das Setzen einer Eigenschaft für ein Objekt erstellt eine eigene Eigenschaft. Die einzige Ausnahme von den Regeln für das Abrufen und Setzen von Eigenschaften ist, wenn sie von einem [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen wird.

Ähnlich können Sie längere Prototypenketten erstellen, und eine Eigenschaft wird auf all diesen gesucht.

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

JavaScript hat keine "{{Glossary("Method", "Methoden")}}" in der Form, wie sie von klassenbasierten Sprachen definiert werden. In JavaScript kann jede Funktion einem Objekt in Form einer Eigenschaft hinzugefügt werden. Eine geerbte Funktion verhält sich genauso wie jede andere Eigenschaft, einschließlich des Überschattens von Eigenschaften wie oben gezeigt (in diesem Fall eine Form des _Methodenüberschreibens_).

Wenn eine geerbte Funktion ausgeführt wird, zeigt der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das erbende Objekt, nicht auf das Prototyp-Objekt, wo die Funktion eine eigene Eigenschaft ist.

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

Die Stärke von Prototypen liegt darin, dass wir eine Menge von Eigenschaften wiederverwenden können, wenn sie in jeder Instanz vorhanden sein sollen – insbesondere für Methoden. Angenommen, wir möchten eine Serie von Boxen erstellen, wobei jede Box ein Objekt ist, das einen Wert enthält, auf den über eine `getValue`-Funktion zugegriffen werden kann. Eine naive Implementierung wäre:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Dies ist suboptimal, denn jede Instanz hat ihre eigene Funktions-Eigenschaft, die dasselbe tut, was redundant und unnötig ist. Stattdessen können wir `getValue` zum `[[Prototype]]` aller Boxen verschieben:

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

Auf diese Weise werden alle `getValue`-Methoden der Boxen auf dieselbe Funktion verweisen, was den Speicherverbrauch verringert. Das manuelle Binden des `__proto__` bei jeder Objektinstanzierung ist jedoch weiterhin sehr unpraktisch. Dies ist der Punkt, an dem wir eine _Konstruktorfunktion_ verwenden würden, die automatisch den `[[Prototype]]` für jedes erzeugte Objekt setzt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

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

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die aus der `Box`-Konstruktorfunktion erstellt wurde. `Box.prototype` unterscheidet sich nicht wesentlich von dem von uns vorher erstellten `boxPrototype`-Objekt – es ist nur ein einfaches Objekt. Jede Instanz, die von einer Konstruktorfunktion erstellt wird, hat automatisch die `prototype`-Eigenschaft des Konstruktors als ihren `[[Prototype]]` – das heißt, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktorfunktion selbst verweist – das heißt, `Box.prototype.constructor === Box`. Dies ermöglicht es, den ursprünglichen Konstruktor von jeder Instanz aus zu erreichen.

> [!NOTE]
> Wenn ein Nicht-Primitivwert von der Konstruktorfunktion zurückgegeben wird, wird dieser Wert das Ergebnis des `new`-Ausdrucks. In diesem Fall könnte der `[[Prototype]]` nicht korrekt gebunden sein – aber das sollte in der Praxis nicht oft vorkommen.

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

Klassen sind syntaktischer Zucker über Konstruktorfunktionen, was bedeutet, dass Sie `Box.prototype` immer noch manipulieren können, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch so konzipiert sind, dass sie eine Abstraktion über den zugrunde liegenden Prototypmechanismus darstellen, verwenden wir in diesem Leitfaden die leichtergewichtige Konstruktorfunktion-Syntax, um vollständig zu demonstrieren, wie Prototypen funktionieren.

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

Ein logischer Schluss ist, dass das _Neu-Zuweisen_ von `Constructor.prototype` (`Constructor.prototype = ...`) aus zwei Gründen eine schlechte Idee ist:

- Der `[[Prototype]]` von Instanzen, die vor der Zuweisung erstellt wurden, verweist nun auf ein anderes Objekt als der `[[Prototype]]` von Instanzen, die nach der Zuweisung erstellt wurden – das Ändern des `[[Prototype]]` eines Objekts beeinflusst nun das andere nicht mehr.
- Wenn Sie die `constructor`-Eigenschaft nicht manuell zurücksetzen, kann die Konstruktorfunktion nicht mehr von `instance.constructor` aus zurückverfolgt werden, was die Erwartungen des Benutzers brechen könnte. Einige eingebettete Operationen lesen die `constructor`-Eigenschaft ebenfalls, und wenn sie nicht gesetzt ist, funktionieren sie möglicherweise nicht wie erwartet.

`Constructor.prototype` ist nur nützlich, wenn Instanzen konstruiert werden. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, das der _eigene_ Prototyp der Konstruktorfunktion ist, welcher `Function.prototype` ist – das heißt, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren bei Literalen

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

Diese können in ihre Konstruktionsform "de-zuckert" werden.

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Zum Beispiel sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, weshalb sie automatisch auf allen Array-Instanzen verfügbar sind.

> [!WARNING]
> Es gibt eine frühere Unart, die weit verbreitet war – das Erweitern des `Object.prototype` oder eines der anderen eingebauten Prototypen. Ein Beispiel für diese Unart ist das Definieren von `Array.prototype.myMethod = function () {...}` und dann die Verwendung von `myMethod` auf allen Array-Instanzen.
>
> Diese Unart wird als _Monkey-Patching_ bezeichnet. Das Durchführen von Monkey-Patching gefährdet die Kompatibilität mit zukünftigen Versionen, denn wenn die Sprache in der Zukunft diese Methode mit einer anderen Signatur hinzufügt, wird Ihr Code brechen. Es hat zu Vorfällen wie dem [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt und kann ein großes Hindernis für den Fortschritt der Sprache sein, da JavaScript versucht, das "Web nicht zu zerstören".
>
> Der **einzige** gute Grund, einen eingebauten Prototyp zu erweitern, ist das Zurückportieren von Funktionen neuerer JavaScript-Engines, wie `Array.prototype.forEach`.

Es könnte interessant sein zu bemerken, dass aufgrund historischer Gründe einige eingebaute Konstruktoren die `prototype`-Eigenschaft selbst Instanzen sind. Zum Beispiel ist `Number.prototype` eine Zahl 0, `Array.prototype` ist ein leeres Array, und `RegExp.prototype` ist `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

Dies ist jedoch nicht der Fall für vom Benutzer definierte Konstruktoren, noch für moderne Konstruktoren wie `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Längere Vererbungsketten aufbauen

Die `Constructor.prototype`-Eigenschaft wird zum `[[Prototype]]` der Instanzen des Konstruktors, wie sie ist – einschließlich des eigenen `[[Prototype]]` von `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _einfaches Objekt_ – das heißt, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme bildet `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist – das heißt, `Object.getPrototypeOf(Object.prototype) === null`. Daher baut ein typischer Konstruktor die folgende Prototypenkette auf:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototypenketten zu bauen, können wir den `[[Prototype]]` von `Constructor.prototype` über die Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) festlegen.

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

Sie können auch auf einige Codebeispiele stoßen, die {{jsxref("Object.create()")}} verwenden, um die Vererbungskette aufzubauen. Da dies jedoch die `prototype`-Eigenschaft neu zuweist und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft entfernt, kann es fehleranfälliger sein, während Leistungsgewinne möglicherweise nicht erkennbar sind, wenn die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
```

## Prototypen inspizieren: ein tieferer Einblick

Werfen wir einen detaillierteren Blick darauf, was hinter den Kulissen passiert.

In JavaScript, wie oben erwähnt, können Funktionen Eigenschaften haben. Alle Funktionen haben eine spezielle Eigenschaft namens `prototype`. Bitte beachten Sie, dass der untenstehende Code eigenständig ist (es ist sicher anzunehmen, dass es keinen anderen JavaScript-Code auf der Webseite gibt außer dem untenstehenden Code). Für das beste Lernerlebnis wird dringend empfohlen, eine Konsole zu öffnen, zum Tab "Konsole" zu navigieren, den untenstehenden JavaScript-Code zu kopieren und ihn durch Drücken der Eingabe-/Return-Taste auszuführen. (Die Konsole ist in den Entwickler-Tools der meisten Webbrowser enthalten. Weitere Informationen sind für die [Firefox-Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/) und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) verfügbar.)

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

Wie oben zu sehen, hat `doSomething()` eine standardmäßige `prototype`-Eigenschaft, wie von der Konsole demonstriert. Nach Ausführung dieses Codes sollte die Konsole ein Objekt angezeigt haben, das folgendermaßen aussieht.

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

Das ergibt folgendes:

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

Wir können jetzt den `new`-Operator verwenden, um eine Instanz von `doSomething()` auf der Grundlage dieses Prototyps zu erstellen. Um den `new`-Operator zu verwenden, rufen Sie die Funktion normal auf, jedoch mit `new` davor. Der Aufruf einer Funktion mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Eigenschaften können dann zu diesem Objekt hinzugefügt werden.

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

Wie oben zu sehen, ist der `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`. Aber was bewirkt das? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, überprüft die Laufzeit zuerst, ob `doSomeInstancing` diese Eigenschaft hat.

Wenn `doSomeInstancing` die Eigenschaft nicht hat, sucht die Laufzeit die Eigenschaft in `doSomeInstancing.[[Prototype]]` (alias `doSomething.prototype`). Wenn `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft hat, wird diese Eigenschaft auf `doSomeInstancing.[[Prototype]]` verwendet.

Andernfalls, wenn `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, wird `doSomeInstancing.[[Prototype]].[[Prototype]]` auf die Eigenschaft überprüft. Standardmäßig ist der `[[Prototype]]` der `prototype`-Eigenschaft einer Funktion `Object.prototype`. Also wird `doSomeInstancing.[[Prototype]].[[Prototype]]` (alias `doSomething.prototype.[[Prototype]]` (alias `Object.prototype`)) dann nach der gesuchten Eigenschaft durchsucht.

Wenn die Eigenschaft in `doSomeInstancing.[[Prototype]].[[Prototype]]` nicht gefunden wird, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` durchsucht. Es gibt jedoch ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, da `Object.prototype.[[Prototype]]` `null` ist. Dann, und nur dann, nachdem die gesamte Prototypenkette von `[[Prototype]]` durchsucht wurde, stellt die Laufzeit fest, dass die Eigenschaft nicht existiert und schließt, dass der Wert an der Eigenschaft `undefined` ist.

Versuchen Sie, einige weiteren Code in die Konsole einzugeben:

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

Das ergibt folgendes:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Wege, Prototypenketten zu erstellen und zu verändern

Wir sind auf viele Möglichkeiten gestoßen, Objekte zu erstellen und ihre Prototypenketten zu ändern. Wir werden systematisch die verschiedenen Ansätze zusammenfassen und ihre Vor- und Nachteile vergleichen.

### Objekte, die mit Syntax-Konstrukten erstellt werden

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

Beim Verwenden des `__proto__`-Schlüssels in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) führt das Zeigen des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, nur wirkungslos aus, ohne eine Ausnahme zu werfen. Im Gegensatz zum [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Setter ist `__proto__` in Objektliteralinitialisierern standardisiert und optimiert und kann sogar leistungsfähiger als {{jsxref("Object.create")}} sein. Das Deklarieren zusätzlicher eigener Eigenschaften am Objekt bei der Erstellung ist ergonomischer als {{jsxref("Object.create")}}.

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

Konstruktorfunktionen sind seit sehr frühen JavaScript-Versionen verfügbar. Daher sind sie sehr schnell, sehr standardisiert und sehr gut Just-in-Time-optimierbar. Es ist jedoch auch schwer "richtig zu machen", da hinzugefügte Methoden auf diese Weise standardmäßig aufzählbar sind, was im Gegensatz zur Klassensyntax oder zur Funktionsweise eingebauter Methoden steht. Längere Vererbungsketten zu erstellen, kann ebenfalls fehleranfällig sein, wie bereits demonstriert.

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

Ähnlich wie der `__proto__`-Schlüssel in Objektinitialisierern ermöglicht `Object.create()` das direkte Setzen des Prototyps eines Objekts zur Erstellungszeit, was der Laufzeit erlaubt, das Objekt weiter zu optimieren. Es ermöglicht auch die Erstellung von Objekten mit `null`-Prototyp, durch die Verwendung von `Object.create(null)`. Der zweite Parameter von `Object.create()` erlaubt die präzise Angabe der Attribute jeder Eigenschaft im neuen Objekt, was ein zweischneidiges Schwert sein kann:

- Es gestattet Ihnen die Erstellung von nicht aufzählbaren Eigenschaften usw. während der Objekterstellung, was mit Objektliteralen nicht möglich ist.
- Es ist wesentlich umständlicher und fehleranfälliger als Objektliterale.
- Es könnte langsamer sein als Objektliterale, insbesondere beim Erstellen vieler Eigenschaften.

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

Klassen bieten die höchste Lesbarkeit und Wartbarkeit beim Definieren komplexer Vererbungsstrukturen. [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sind eine Funktion, die keine triviale Ersetzung in prototypischer Vererbung hat. Klassen sind jedoch weniger optimiert als traditionelle Konstruktorfunktionen und in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während alle oben genannten Methoden die Prototypenkette zur Erstellungszeit setzen, erlaubt [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) die Mutation der `[[Prototype]]`-internen Eigenschaft eines vorhandenen Objekts. Es kann sogar einen Prototyp auf ein prototypenloses Objekt erzwingen, das mit `Object.create(null)` erstellt wurde, oder den Prototyp eines Objekts entfernen, indem es ihn auf `null` setzt.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Allerdings sollten Sie, wenn möglich, den Prototyp während der Erstellung setzen, da das dynamische Festlegen des Prototyps alle Optimierungen stört, die die Engines für die Prototypkette vorgenommen haben. Es könnte dazu führen, dass einige Engines Ihren Code zur Entoptimierung neu kompilieren müssen, um ihn gemäß der Spezifikation funktionsfähig zu machen.

### Mit dem \_\_proto\_\_-Accessor

Alle Objekte erben den [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Setter, der zum Setzen des `[[Prototype]]` eines bestehenden Objekts verwendet werden kann (wenn der `__proto__`-Schlüssel nicht auf dem Objekt überschrieben wurde).

> **Warnung:** `Object.prototype.__proto__` Accessor sind **nicht standardisiert** und veraltet. Sie sollten fast immer `Object.setPrototypeOf` stattdessen verwenden.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Im Vergleich zu `Object.setPrototypeOf` führt das Setzen von `__proto__` auf etwas, das kein Objekt ist, nur wirkungslos aus, ohne eine Ausnahme zu werfen. Es hat auch eine leicht bessere Browser-Unterstützung. Es ist jedoch nicht standardisiert und veraltet. Sie sollten fast immer `Object.setPrototypeOf` stattdessen verwenden.

## Performance

Die Suchzeit für Eigenschaften, die hoch in der Prototypkette stehen, kann sich negativ auf die Leistung auswirken, und dies kann in Code, in dem die Leistung entscheidend ist, von Bedeutung sein. Außerdem wird beim Versuch, auf nicht vorhandene Eigenschaften zuzugreifen, immer die gesamte Prototypkette durchlaufen.

Auch beim Iterieren über die Eigenschaften eines Objekts werden **alle** aufzählbaren Eigenschaften, die sich in der Prototypkette befinden, aufgezählt. Um zu überprüfen, ob ein Objekt eine auf _ihm selbst_ definierte Eigenschaft und nicht irgendwo in seiner Prototypkette hat, ist es notwendig, die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) zu verwenden. Alle Objekte, mit Ausnahme derer mit `null` als `[[Prototype]]`, erben [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype` – es sei denn, es wurde weiter in der Prototypkette überschrieben. Um Ihnen ein konkretes Beispiel zu geben, nehmen wir den obigen Graphcode, um es zu veranschaulichen:

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

Hinweis: Es ist **nicht** genug zu überprüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft könnte sehr wohl existieren, aber ihr Wert könnte einfach nur auf `undefined` gesetzt sein.

## Fazit

JavaScript kann für Entwickler, die von Java oder C++ kommen, etwas verwirrend sein, da alles dynamisch, alles zur Laufzeit und überhaupt keine statischen Typen vorhanden sind. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und sogar Funktionen selbst sind Instanzen des `Function`-Konstruktors. Selbst die "Klassen" als Syntax-Konstrukte sind zur Laufzeit nur Konstruktorfunktionen.

Alle Konstruktorfunktionen in JavaScript haben eine spezielle Eigenschaft namens `prototype`, die mit dem `new`-Operator funktioniert. Der Verweis auf das Prototyp-Objekt wird zur internen `[[Prototype]]`-Eigenschaft der neuen Instanz kopiert. Zum Beispiel, wenn Sie `const a1 = new A()` ausführen, setzen Sie JavaScript (nach der Erstellung des Objekts im Speicher und vor der Ausführung der Funktion `A()` mit `this` darauf bezogen) `a1.[[Prototype]] = A.prototype`. Wenn Sie dann auf Eigenschaften der Instanz zugreifen, überprüft JavaScript zuerst, ob sie direkt auf diesem Objekt existieren, und wenn nicht, sucht es in `[[Prototype]]`. `[[Prototype]]` wird _rekursiv_ durchsucht, d.h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis es gefunden wird oder `Object.getPrototypeOf` `null` zurückgibt. Dies bedeutet, dass alle auf `prototype` definierten Eigenschaften effektiv von allen Instanzen geteilt werden, und Sie können sogar später Teile von `prototype` ändern und die Änderungen in allen bestehenden Instanzen erscheinen lassen.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` machen, dann würde `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething` verweisen – was dasselbe ist wie das von Ihnen definierte `A.prototype.doSomething`, d.h. `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das Prototypen-Vererbungsmodell zu verstehen, bevor Sie komplexen Code schreiben, der darauf basiert. Außerdem sollten Sie sich der Länge der Prototypketten in Ihrem Code bewusst sein und sie bei Bedarf aufteilen, um mögliche Leistungsprobleme zu vermeiden. Weiterhin sollten die nativen Prototypen **niemals** erweitert werden, es sei denn, es dient der Kompatibilität mit neueren JavaScript-Funktionen.
