---
title: Vererbung und die Prototyp-Kette
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Advanced")}}

In der Programmierung bezieht sich _Vererbung_ auf das Übertragen von Eigenschaften von einem Eltern- auf ein Kindobjekt, sodass ein neues Stück Code die Merkmale eines bestehenden wiederverwenden und darauf aufbauen kann. JavaScript implementiert Vererbung durch die Verwendung von [Objekten](/de/docs/Web/JavaScript/Data_structures#objects). Jedes Objekt hat einen internen Link zu einem anderen Objekt, das sein _Prototyp_ genannt wird. Dieses Prototyp-Objekt verfügt über einen eigenen Prototyp und so weiter, bis ein Objekt erreicht wird, das `null` als seinen Prototyp hat. Per Definition hat `null` keinen Prototyp und fungiert als das letzte Glied in dieser **Prototyp-Kette**. Es ist möglich, jedes Mitglied der Prototyp-Kette zu ändern oder sogar den Prototyp zur Laufzeit auszutauschen, sodass Konzepte wie [statische Bindung](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht existieren.

JavaScript ist für EntwicklerInnen, die mit klassenbasierten Sprachen (wie Java oder C++) vertraut sind, ein wenig verwirrend, da es [dynamisch](/de/docs/Web/JavaScript/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen hat. Während diese Verwirrung oft als eine der Schwächen von JavaScript angesehen wird, ist das prototypische Vererbungsmodell an sich tatsächlich mächtiger als das klassische Modell. Es ist zum Beispiel relativ einfach, ein klassisches Modell auf einem prototypischen Modell aufzubauen — so werden [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert.

Obwohl Klassen heutzutage weit verbreitet sind und ein neues Paradigma in JavaScript darstellen, bringen Klassen kein neues Vererbungsmuster mit sich. Während Klassen die meisten prototypischen Mechanismen abstrahieren, ist es dennoch nützlich zu verstehen, wie Prototypen im Hintergrund funktionieren.

## Vererbung mit der Prototyp-Kette

### Eigenschaftsvererbung

JavaScript-Objekte sind dynamische "Säcke" von Eigenschaften (als **eigene Eigenschaften** bezeichnet). JavaScript-Objekte haben eine Verbindung zu einem Prototyp-Objekt. Beim Versuch, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur am Objekt selbst gesucht, sondern auch im Prototyp des Objekts, im Prototyp des Prototyps und so weiter, bis entweder eine Eigenschaft mit passendem Namen gefunden wird oder das Ende der Prototyp-Kette erreicht ist.

> [!NOTE]
> Gemäß dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Der interne Slot `[[Prototype]]` kann mit den Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} respektive abgerufen und geändert werden. Dies entspricht dem JavaScript-Accessor [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), der nicht standardisiert, aber de facto von vielen JavaScript-Engines implementiert wird. Um Verwirrung zu vermeiden und es prägnant zu halten, werden wir in unserer Notation `obj.__proto__` vermeiden und stattdessen `obj.[[Prototype]]` verwenden. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Dies sollte nicht mit der `func.prototype`-Eigenschaft von Funktionen verwechselt werden, die stattdessen den `[[Prototype]]` angibt, der allen _Instanzen_ von Objekten zugewiesen wird, die durch die gegebene Funktion erstellt werden, wenn sie als Konstruktor verwendet wird. Wir werden die `prototype`-Eigenschaft von Konstruktionsfunktionen in [einem späteren Abschnitt](#konstruktoren) diskutieren.

Es gibt mehrere Möglichkeiten, den `[[Prototype]]` eines Objekts anzugeben, die in [einem späteren Abschnitt](#verschiedene_möglichkeiten_zur_erstellung_und_veränderung_von_prototyp-ketten) aufgeführt sind. Für den Moment werden wir die [`__proto__`-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung verwenden. Es ist erwähnenswert, dass die `{ __proto__: ... }`-Syntax sich von dem `obj.__proto__`-Accessor unterscheidet: Erstere ist standardisiert und nicht veraltet.

In einem Objektliteral wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` (der entweder `null` oder ein anderes Objekt sein muss) der `[[Prototype]]` des durch das Literal dargestellten Objekts, während die anderen Schlüssel wie `a` und `b` die _eigenen Eigenschaften_ des Objekts werden. Diese Syntax liest sich sehr natürlich, da `[[Prototype]]` nur eine "interne Eigenschaft" des Objekts ist.

Das passiert, wenn versucht wird, auf eine Eigenschaft zuzugreifen:

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

Das Setzen einer Eigenschaft auf ein Objekt erstellt eine eigene Eigenschaft. Die einzige Ausnahme von den Regeln für das Verhalten beim Holen und Setzen ist, wenn es von einem [getter oder setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen wird.

Ähnlich können Sie längere Prototyp-Ketten erstellen und eine Eigenschaft wird auf allen von ihnen gesucht.

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

JavaScript hat keine "[Methoden](/de/docs/Glossary/Method)" in der Form, wie klassenbasierte Sprachen sie definieren. In JavaScript kann jede Funktion einem Objekt in Form einer Eigenschaft hinzugefügt werden. Eine geerbte Funktion fungiert genauso wie jede andere Eigenschaft, einschließlich Überschattung, wie oben gezeigt (in diesem Fall eine Form des _Methodenüberschreibens_).

Wenn eine geerbte Funktion ausgeführt wird, zeigt der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das vererbende Objekt, nicht auf das Prototyp-Objekt, bei dem die Funktion eine eigene Eigenschaft ist.

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

Die Stärke der Prototypen liegt darin, dass wir eine Menge von Eigenschaften wiederverwenden können, wenn sie in jeder Instanz vorhanden sein sollten — insbesondere für Methoden. Angenommen, wir sollen eine Reihe von Boxen erstellen, wobei jede Box ein Objekt ist, das einen Wert enthält, der über eine `getValue`-Funktion aufrufbar ist. Eine naive Implementierung wäre:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Das ist suboptimal, da jede Instanz ihre eigene Funktions-Eigenschaft hat, die das Gleiche tut, was redundant und unnötig ist. Stattdessen können wir `getValue` zum `[[Prototype]]` aller Boxen verschieben:

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

Auf diese Weise verweist die `getValue`-Methode aller Boxen auf dieselbe Funktion und senkt den Speicherverbrauch. Das manuelle Festlegen des `__proto__` bei jeder Objekterstellung ist jedoch immer noch sehr unpraktisch. Hier würden wir eine _Konstruktionsfunktion_ verwenden, die automatisch den `[[Prototype]]` für jedes hergestellte Objekt festlegt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

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

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die von der `Box`-Konstruktionsfunktion erstellt wird. `Box.prototype` unterscheidet sich kaum vom `boxPrototype`-Objekt, das wir zuvor erstellt haben — es ist nur ein einfaches Objekt. Jede von einer Konstruktionsfunktion erstellte Instanz hat automatisch die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft des Konstruktors als ihren `[[Prototype]]` — das heißt, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktionsfunktion selbst verweist — das heißt, `Box.prototype.constructor === Box`. Dies ermöglicht den Zugriff auf den ursprünglichen Konstruktor von jeder Instanz.

> [!NOTE]
> Wenn ein Nicht-Primitiv aus der Konstruktionsfunktion zurückgegeben wird, wird dieser Wert zum Ergebnis des `new`-Ausdrucks. In diesem Fall könnte der `[[Prototype]]` nicht korrekt gebunden sein — aber das sollte in der Praxis nicht oft vorkommen.

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

Klassen sind syntaktischer Zucker über Konstruktionsfunktionen, was bedeutet, dass Sie `Box.prototype` immer noch manipulieren können, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch als Abstraktion über den zugrunde liegenden Prototyp-Mechanismus konzipiert sind, werden wir für dieses Tutorial die leichtergewichtige Konstruktionsfunktion-Syntax verwenden, um vollständig zu demonstrieren, wie Prototypen arbeiten.

Da `Box.prototype` auf dasselbe Objekt wie der `[[Prototype]]` aller Instanzen verweist, können wir das Verhalten aller Instanzen ändern, indem wir `Box.prototype` ändern.

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

Ein Korollar ist, _neu zuzuweisen_ `Constructor.prototype` (`Constructor.prototype = ...`) ist eine schlechte Idee aus zwei Gründen:

- Der `[[Prototype]]` der vor der Neuzuweisung erstellten Instanzen verweist jetzt auf ein anderes Objekt als der `[[Prototype]]` der nach der Neuzuweisung erstellten Instanzen — das Ändern des `[[Prototype]]` eines Objekts ändert nicht mehr das anderer.
- Wenn Sie nicht manuell die `constructor`-Eigenschaft zurücksetzen, kann die Konstruktionsfunktion nicht mehr von `instance.constructor` aus verfolgt werden, was die Benutzerewartung brechen kann. Einige eingebaute Operationen lesen die `constructor`-Eigenschaft ebenfalls, und wenn sie nicht gesetzt ist, funktionieren sie möglicherweise nicht wie erwartet.

`Constructor.prototype` ist nur beim Konstruieren von Instanzen nützlich. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, was der _eigene_ Prototyp der Konstruktionsfunktion ist, nämlich `Function.prototype` — das heißt, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literalsyntaxen in JavaScript erstellen Instanzen, die den `[[Prototype]]` implizit festlegen. Zum Beispiel:

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

Diese können in ihre Konstruktionsform "entsüßt" werden.

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Zum Beispiel sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, weshalb sie automatisch in allen Array-Instanzen verfügbar sind.

> [!WARNING]
> Es gibt eine Fehlentwicklung, die früher weit verbreitet war — das Erweitern von `Object.prototype` oder einem der anderen eingebauten Prototypen. Ein Beispiel für diese Fehlentwicklung ist es, `Array.prototype.myMethod = function () {...}` zu definieren und dann `myMethod` bei allen Array-Instanzen zu verwenden.
>
> Diese Fehlentwicklung wird als _Monkey-Patching_ bezeichnet. Das Durchführen von Monkey-Patching gefährdet die Abwärtskompatibilität, da, wenn die Sprache diese Methode in Zukunft hinzufügt, aber mit einer anderen Signatur, Ihr Code nicht mehr funktioniert. Dies hat zu Vorfällen wie [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt und kann ein großes Hindernis für die Weiterentwicklung der Sprache sein, da JavaScript versucht, "das Web nicht zu brechen".
>
> Der **einzige** gute Grund für das Erweitern eines eingebauten Prototyps ist, Features neuer JavaScript-Engines zu unterstützen, wie `Array.prototype.forEach`.

Es mag interessant sein zu bemerken, dass aufgrund historischer Gründe einige eingebaute Konstruktoren die `prototype`-Eigenschaft selbst Instanzen sind. Zum Beispiel ist `Number.prototype` eine Zahl 0, `Array.prototype` ist ein leeres Array und `RegExp.prototype` ist `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

Dies ist jedoch nicht der Fall für benutzerdefinierte Konstruktoren, noch für moderne Konstruktoren wie `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Aufbau längerer Vererbungsketten

Die Eigenschaft `Constructor.prototype` wird der `[[Prototype]]` der Instanzen des Konstruktors, genau so, wie sie ist — einschließlich des eigenen `[[Prototype]]` von `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _einfaches Objekt_ — das heißt, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist — das heißt, `Object.getPrototypeOf(Object.prototype) === null`. Daher wird ein typischer Konstruktor die folgende Prototyp-Kette aufbauen:

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

Im Klassen-Kontext entspricht dies dem Einsatz der [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Syntax.

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Sie können auch einige Legacy-Codes sehen, die {{jsxref("Object.create()")}} verwenden, um die Vererbungskette aufzubauen. Da dies jedoch die `prototype`-Eigenschaft neu zuweist und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft entfernt, kann dies fehleranfälliger sein, während die Leistungsgewinne möglicherweise nicht offensichtlich sind, wenn die Konstruktoren noch keine Instanzen erstellt haben.

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

In JavaScript sind, wie oben erwähnt, Funktionen in der Lage, Eigenschaften zu haben. Alle Funktionen haben eine besondere Eigenschaft namens `prototype`. Bitte beachten Sie, dass der Code unten freistehend ist (es ist sicher anzunehmen, dass es keinen anderen JavaScript-Code auf der Webseite gibt, außer dem unten stehenden Code). Für die beste Lernerfahrung wird dringend empfohlen, dass Sie eine Konsole öffnen, zum "Konsole"-Tab navigieren, den folgenden JavaScript-Code kopieren und einfügen und ihn ausführen, indem Sie die Eingabe-/Eingabetaste drücken. (Die Konsole ist in den meisten Developer-Tools von Webbrowsern enthalten. Weitere Informationen sind für [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/) und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) verfügbar.)

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

Wie oben zu sehen ist, hat `doSomething()` eine Standard-`prototype`-Eigenschaft, wie durch die Konsole demonstriert. Nach Ausführung dieses Codes sollte die Konsole ein Objekt angezeigt haben, das ähnlich aussieht wie dieses.

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
> Die Chrome-Konsole verwendet `[[Prototype]]`, um den Prototyp des Objekts gemäß den Spezifikationsbedingungen zu bezeichnen; Firefox verwendet `<prototype>`. Zur Konsistenz werden wir `[[Prototype]]` verwenden.

Wir können Eigenschaften zum Prototypen von `doSomething()` hinzufügen, wie unten gezeigt.

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

Wir können jetzt den `new`-Operator verwenden, um eine Instanz von `doSomething()` basierend auf diesem Prototyp zu erstellen. Um den neuen Operator zu verwenden, rufen Sie die Funktion wie gewohnt auf, aber setzen Sie `new` davor. Das Aufrufen einer Funktion mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Eigenschaften können dann zu diesem Objekt hinzugefügt werden.

Probieren Sie den folgenden Code aus:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

Das führt zu einem Ergebnis ähnlich dem folgenden:

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

Wie oben zu sehen ist, ist das `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`. Aber was bedeutet das? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, schaut der Laufzeitumgebung zuerst, ob `doSomeInstancing` diese Eigenschaft hat.

Wenn `doSomeInstancing` die Eigenschaft nicht hat, sucht die Laufzeitumgebung nach der Eigenschaft in `doSomeInstancing.[[Prototype]]` (alias `doSomething.prototype`). Wenn `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft hat, wird diese Eigenschaft auf `doSomeInstancing.[[Prototype]]` verwendet.

Andernfalls, wenn `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, wird `doSomeInstancing.[[Prototype]].[[Prototype]]` auf die Eigenschaft überprüft. Standardmäßig ist das `[[Prototype]]` der `prototype`-Eigenschaft jeder Funktion `Object.prototype`. So wird `doSomeInstancing.[[Prototype]].[[Prototype]]` (alias `doSomething.prototype.[[Prototype]]` (alias `Object.prototype`)) dann nach der gesuchten Eigenschaft durchsucht.

Wenn die Eigenschaft in `doSomeInstancing.[[Prototype]].[[Prototype]]` nicht gefunden wird, wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` durchsucht. Es gibt jedoch ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, da `Object.prototype.[[Prototype]]` `null` ist. Dann, und nur dann, nachdem die gesamte Prototyp-Kette von `[[Prototype]]` durchsucht wurde, stellt die Laufzeit fest, dass die Eigenschaft nicht existiert und schließt daraus, dass der Wert an der Eigenschaft `undefined` ist.

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

Das ergibt das folgende Ergebnis:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Möglichkeiten zur Erstellung und Veränderung von Prototyp-Ketten

Wir haben viele Möglichkeiten kennengelernt, wie man Objekte erstellt und ihre Prototyp-Ketten verändert. Wir werden systematisch die verschiedenen Ansätze zusammenfassen und die Vor- und Nachteile jedes Ansatzes vergleichen.

### Mit syntaktischen Konstruktionen erstellte Objekte

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

Wenn Sie den `__proto__`-Schlüssel in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verwenden, führt das Zeigen des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, nur zu einem stillen Fehler, ohne eine Ausnahme auszulösen. Im Gegensatz zum [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Setter ist `__proto__` in Objektliteral-Initialisierern standardisiert und optimiert und kann sogar leistungsfähiger sein als {{jsxref("Object.create")}}. Zusätzliche eigene Eigenschaften beim Erstellen des Objekts zu deklarieren ist ergonomischer als bei {{jsxref("Object.create")}}.

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

Konstruktionsfunktionen sind seit sehr frühen JavaScript-Versionen verfügbar. Daher sind sie sehr schnell, sehr standardisiert und sehr JIT-optimierbar. Es ist jedoch auch schwer, "richtig" mit ihnen zu arbeiten, da auf diese Weise hinzugefügte Methoden standardmäßig nicht aufzählbar sind, was inkonsistent mit der Klassensyntax oder dem Verhalten von eingebauten Methoden ist. Das Erstellen längerer Vererbungsketten ist, wie zuvor gezeigt, ebenfalls fehleranfällig.

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

Ähnlich wie bei dem `__proto__`-Schlüssel in Objekt-Initialisierern ermöglicht `Object.create()` das direkte Setzen des Prototyps eines Objekts zur Erstellungszeit, was der Laufzeit ermöglicht, das Objekt weiter zu optimieren. Es erlaubt auch die Erstellung von Objekten mit `null`-Prototyp, indem `Object.create(null)` verwendet wird. Der zweite Parameter von `Object.create()` erlaubt Ihnen, die Attribute jeder Eigenschaft im neuen Objekt genau festzulegen, was ein zweischneidiges Schwert sein kann:

- Es ermöglicht Ihnen, nicht aufzählbare Eigenschaften usw. während der Objekterstellung zu erstellen, was mit Objektliteral-Initialisierern nicht möglich ist.
- Es ist viel ausführlicher und fehleranfälliger als Objektliteral-Initialisierer.
- Es kann langsamer sein als Objektliteral-Initialisierer, besonders wenn viele Eigenschaften erstellt werden.

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

Klassen bieten die höchste Lesbarkeit und Wartbarkeit bei der Definition komplexer Vererbungshierarchien. [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sind ein Feature, das im prototypischen Vererbungsmodell keine triviale Ersatzlösung hat. Klassen sind jedoch weniger optimiert als die traditionellen Konstruktionsfunktionen und werden in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während alle oben genannten Methoden die Prototyp-Kette zur Objekterstellungszeit festlegen, ermöglicht [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) die Mutation der `[[Prototype]]` internEigenschaft eines bestehenden Objekts. Es kann sogar einen Prototyp auf ein protokollfreies Objekt erzwingen, das mit `Object.create(null)` erstellt wurde, oder den Prototyp eines Objekts entfernen, indem er auf `null` gesetzt wird.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Sie sollten jedoch den Prototyp bei der Erstellung festlegen, wenn möglich, da das dynamische Festlegen des Prototyps alle Optimierungen unterbricht, die Engines an der Prototyp-Kette vorgenommen haben. Es könnte einige Engines dazu veranlassen, Ihren Code zu dekompilieren, um ihn gemäß den Spezifikationen funktionsfähig zu machen.

### Mit dem \_\_proto\_\_ Accessor

Alle Objekte erben den [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Setter, der verwendet werden kann, um das `[[Prototype]]` eines bestehenden Objekts zu setzen (wenn der `__proto__`-Schlüssel auf dem Objekt nicht übersteuert ist).

> **Achtung:** `Object.prototype.__proto__`-Accessoren sind **nicht standardisiert** und veraltet. Sie sollten fast immer `Object.setPrototypeOf` stattdessen verwenden.

```js
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Im Vergleich zu `Object.setPrototypeOf` schlägt das Setzen von `__proto__` auf etwas, das kein Objekt ist, stillschweigend fehl, ohne eine Ausnahme auszulösen. Es bietet auch eine etwas bessere Browserunterstützung. Es ist jedoch nicht standardisiert und veraltet. Sie sollten fast immer `Object.setPrototypeOf` stattdessen verwenden.

## Leistung

Die Suchzeit für Eigenschaften, die weit oben in der Prototyp-Kette stehen, kann negative Auswirkungen auf die Leistung haben, und dies kann in Code, bei dem die Leistung entscheidend ist, beträchtlich sein. Zusätzlich führt der Versuch, auf nicht existierende Eigenschaften zuzugreifen, immer dazu, dass die gesamte Prototyp-Kette durchlaufen wird.

Außerdem werden beim Iterieren über die Eigenschaften eines Objekts **jede** aufzählbare Eigenschaft, die auf der Prototyp-Kette liegt, aufgezählt. Um zu überprüfen, ob ein Objekt eine Eigenschaft auf sich selbst definiERT hat und nicht irgendwo in seiner Prototyp-Kette, ist es notwendig, die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) zu verwenden. Alle Objekte, außer denen mit `null` als `[[Prototype]]`, erben die Methode [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype` — es sei denn, sie wurde weiter unten in der Prototyp-Kette überschrieben. Um Ihnen ein konkretes Beispiel zu geben, nehmen wir den obigen Graphen-Code, um dies zu veranschaulichen:

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

Hinweis: Es ist **nicht** genug zu prüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft könnte sehr wohl existieren, aber ihr Wert ist zufällig auf `undefined` gesetzt.

## Fazit

JavaScript mag ein wenig verwirrend für EntwicklerInnen sein, die von Java oder C++ kommen, da alles dynamisch ist, alles zur Laufzeit passiert und es überhaupt keine statischen Typen gibt. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und sogar Funktionen selbst sind Instanzen des `Function` Konstruktors. Sogar die "Klassen" als Syntaxkonstrukte sind zur Laufzeit nur Konstruktionsfunktionen.

Alle Konstruktionsfunktionen in JavaScript haben eine besondere Eigenschaft namens `prototype`, die mit dem `new`-Operator funktioniert. Der Verweis auf das Prototyp-Objekt wird in die interne `[[Prototype]]`-Eigenschaft der neuen Instanz kopiert. Zum Beispiel, wenn Sie `const a1 = new A();` tun, setzt JavaScript (nachdem es das Objekt im Speicher erstellt hat und bevor die Funktion `A()` mit `this` darauf ausgeführt wird) `a1.[[Prototype]] = A.prototype`. Wenn Sie dann auf Eigenschaften der Instanz zugreifen, überprüft JavaScript zuerst, ob sie direkt auf diesem Objekt existieren, und falls nicht, sucht es in `[[Prototype]]`. `[[Prototype]]` wird _rekursiv_ durchsucht, d.h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis sie gefunden oder `Object.getPrototypeOf` `null` zurückgibt. Dies bedeutet, dass alle auf `prototype` definierten Eigenschaften effektiv von allen Instanzen gemeinsam verwendet werden, und Sie können sogar später Teile von `prototype` ändern und die Änderungen in allen bestehenden Instanzen sehen.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` tun, dann würde `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething` verweisen — was dasselbe ist wie das `A.prototype.doSomething`, das Sie definiert haben, d.h. `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das prototypische Vererbungsmodell zu verstehen, bevor Sie komplexen Code schreiben, der es verwendet. Achten Sie auch auf die Länge der Prototyp-Ketten in Ihrem Code und teilen Sie sie bei Bedarf auf, um mögliche Leistungsprobleme zu vermeiden. Weiterhin sollten die nativen Prototypen **niemals** erweitert werden, es sei denn, es ist zum Zwecke der Kompatibilität mit neueren JavaScript-Funktionen.
