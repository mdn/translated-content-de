---
title: Vererbung und die Prototypenkette
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Advanced")}}

In der Programmierung bezieht sich _Vererbung_ auf das Weitergeben von Merkmalen von einem Elternteil an ein Kind, sodass ein neuer Programmcode die Funktionen eines bestehenden Codes wiederverwenden und darauf aufbauen kann. JavaScript implementiert Vererbung durch die Verwendung von [Objekten](/de/docs/Web/JavaScript/Data_structures#objects). Jedes Objekt hat einen internen Verweis auf ein anderes Objekt, das sein _Prototyp_ genannt wird. Dieses Prototyp-Objekt hat einen eigenen Prototyp und so weiter, bis ein Objekt erreicht wird, dessen Prototyp `null` ist. Per Definition hat `null` keinen Prototyp und fungiert als letztes Glied in dieser **Prototypenkette**. Es ist möglich, jedes Mitglied der Prototypenkette zu ändern oder sogar den Prototyp zur Laufzeit auszutauschen, daher existieren Konzepte wie [statische Disposition](https://en.wikipedia.org/wiki/Static_dispatch) in JavaScript nicht.

JavaScript ist für Entwickler, die Erfahrung in klassenbasierten Sprachen (wie Java oder C++) haben, etwas verwirrend, da es [dynamisch](/de/docs/Web/JavaScript/Data_structures#dynamic_and_weak_typing) ist und keine statischen Typen besitzt. Obwohl diese Verwirrung oft als eine der Schwächen von JavaScript angesehen wird, ist das Prototypenvererbungsmodell an sich tatsächlich mächtiger als das klassische Modell. Es ist zum Beispiel relativ einfach, ein klassisches Modell auf einem Prototypenmodell aufzubauen — so werden [Klassen](/de/docs/Web/JavaScript/Reference/Classes) implementiert.

Auch wenn Klassen mittlerweile weit verbreitet sind und ein neues Paradigma in JavaScript darstellen, bieten Klassen kein neues Vererbungsmuster. Auch wenn Klassen die meisten Prototypenmechanismen abstrahieren, ist es weiterhin nützlich zu verstehen, wie Prototypen im Hintergrund funktionieren.

## Vererbung mit der Prototypenkette

### Vererbung von Eigenschaften

JavaScript-Objekte sind dynamische "Säcke" von Eigenschaften (auch als **eigene Eigenschaften** bezeichnet). JavaScript-Objekte haben einen Verweis auf ein Prototyp-Objekt. Beim Versuch, auf eine Eigenschaft eines Objekts zuzugreifen, wird die Eigenschaft nicht nur auf dem Objekt gesucht, sondern auch auf dem Prototyp des Objekts, dem Prototyp des Prototyps und so weiter, bis entweder eine Eigenschaft mit einem passenden Namen gefunden wird oder das Ende der Prototypenkette erreicht ist.

> [!NOTE]
> Gemäß dem ECMAScript-Standard wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu kennzeichnen. Der interne Slot `[[Prototype]]` kann mit den Funktionen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} jeweils abgerufen und verändert werden. Dies entspricht dem JavaScript-Zugriff [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), der nicht standardisiert ist, aber von vielen JavaScript-Engines de facto implementiert wurde. Um Verwirrungen zu vermeiden, während wir dabei prägnant bleiben, werden wir in unserer Notation `obj.__proto__` vermeiden und stattdessen `obj.[[Prototype]]` verwenden. Dies entspricht `Object.getPrototypeOf(obj)`.
>
> Es sollte nicht mit der `func.prototype` Eigenschaft von Funktionen verwechselt werden, die vielmehr den `[[Prototype]]` festlegt, der allen _Instanzen_ von Objekten zugewiesen wird, die von der gegebenen Funktion erstellt werden, wenn sie als Konstruktor verwendet wird. Wir werden die `prototype` Eigenschaft von Konstruktorfunktionen in [einem späteren Abschnitt](#konstruktoren) besprechen.

Es gibt mehrere Möglichkeiten, den `[[Prototype]]` eines Objekts anzugeben, die in [einem späteren Abschnitt](#verschiedene_möglichkeiten_zum_erstellen_und_ändern_von_prototypenketten) aufgeführt sind. Für den Moment werden wir die [`__proto__` Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) zur Veranschaulichung verwenden. Es ist erwähnenswert, dass die `{ __proto__: ... }` Syntax sich vom `obj.__proto__` Zugriffsbezeichner unterscheidet: Ersteres ist standardisiert und nicht veraltet.

In einem Objektliteral wie `{ a: 1, b: 2, __proto__: c }` wird der Wert `c` (der entweder `null` oder ein anderes Objekt sein muss) zum `[[Prototype]]` des Objekts, das durch das Literal dargestellt wird, während die anderen Schlüssel wie `a` und `b` zu den _eigenen Eigenschaften_ des Objekts werden. Diese Syntax liest sich sehr natürlich, da `[[Prototype]]` nur eine "interne Eigenschaft" des Objekts ist.

Hier ist, was passiert, wenn versucht wird, auf eine Eigenschaft zuzugreifen:

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ setzt den [[Prototype]]. Es wird hier
  // als weiteres Objektliteral spezifiziert.
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]] hat die Eigenschaften b und c.
// o.[[Prototype]].[[Prototype]] ist Object.prototype (wir werden
// später erklären, was das bedeutet).
// Schließlich ist o.[[Prototype]].[[Prototype]].[[Prototype]] null.
// Dies ist das Ende der Prototypenkette, da null
// per Definition kein [[Prototype]] hat.
// Die vollständige Prototypenkette sieht daher so aus:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Gibt es eine 'a'-Eigenschaft auf o? Ja, und ihr Wert ist 1.

console.log(o.b); // 2
// Gibt es eine 'b'-Eigenschaft auf o? Ja, und ihr Wert ist 2.
// Der Prototyp hat auch eine 'b'-Eigenschaft, aber sie wird nicht verwendet.
// Dies wird Eigenschaftenschatten genannt.

console.log(o.c); // 4
// Gibt es eine 'c'-Eigenschaft auf o? Nein, überprüfen Sie seinen Prototyp.
// Gibt es eine 'c'-Eigenschaft auf o.[[Prototype]]? Ja, ihr Wert ist 4.

console.log(o.d); // undefined
// Gibt es eine 'd'-Eigenschaft auf o? Nein, überprüfen Sie seinen Prototyp.
// Gibt es eine 'd'-Eigenschaft auf o.[[Prototype]]? Nein, überprüfen Sie seinen Prototyp.
// o.[[Prototype]].[[Prototype]] ist Object.prototype und
// es gibt keine 'd'-Eigenschaft standardmäßig, überprüfen Sie seinen Prototyp.
// o.[[Prototype]].[[Prototype]].[[Prototype]] ist null, beenden Sie die Suche,
// keine Eigenschaft gefunden, geben undefined zurück.
```

Das Setzen einer Eigenschaft auf ein Objekt erzeugt eine eigene Eigenschaft. Die einzige Ausnahme von den Regeln zum Abrufen und Setzen von Eigenschaften ist, wenn sie von einem [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) abgefangen wird.

Ebenso können Sie längere Prototypketten erstellen, und eine Eigenschaft wird auf allen von ihnen gesucht.

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ setzt den [[Prototype]]. Es wird hier
  // als weiteres Objektliteral spezifiziert.
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

JavaScript hat keine "[Methoden](/de/docs/Glossary/Method)" in der Form, wie sie klassenbasierte Sprachen definieren. In JavaScript kann jede Funktion in Form einer Eigenschaft einem Objekt hinzugefügt werden. Eine geerbte Funktion verhält sich wie jede andere Eigenschaft, einschließlich des Eigenschaftenschatten, wie oben gezeigt (in diesem Fall eine Form des _Methodenüberschreibens_).

Wenn eine geerbte Funktion ausgeführt wird, verweist der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das erbende Objekt, nicht auf das Prototyp-Objekt, bei dem die Funktion eine eigene Eigenschaft ist.

```js
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// Wenn parent.method in diesem Fall aufgerufen wird, bezieht sich 'this' auf parent

// child ist ein Objekt, das von parent erbt
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// Wenn child.method aufgerufen wird, bezieht sich 'this' auf child.
// Wenn das Kind also die Methode von parent erbt,
// wird die Eigenschaft 'value' beim Kind gesucht. Da das Kind
// allerdings keine eigene Eigenschaft namens 'value' hat, wird die Eigenschaft
// im [[Prototype]] gefunden, das parent.value ist.

child.value = 4; // Weisen Sie dem Kind die Eigenschaft 'value' den Wert 4 zu.
// Dies überschattet die 'value'-Eigenschaft auf parent.
// Das child-Objekt sieht nun wie folgt aus:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Da child nun die 'value'-Eigenschaft hat, bedeutet 'this.value'
// stattdessen child.value.
```

## Konstruktoren

Die Stärke von Prototypen liegt darin, dass wir eine Reihe von Eigenschaften wiederverwenden können, wenn sie bei jeder Instanz vorhanden sein sollten – insbesondere für Methoden. Nehmen wir an, wir sollen eine Reihe von Boxen erstellen, wobei jede Box ein Objekt ist, das einen Wert enthält, auf den über eine `getValue`-Funktion zugegriffen werden kann. Eine naive Implementierung wäre:

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

Auf diese Weise wird die `getValue`-Methode aller Boxen auf dieselbe Funktion verweisen, was den Speicherverbrauch reduziert. Allerdings ist es immer noch sehr unbequem, den `__proto__` für jede Objekterstellung manuell zu binden. An dieser Stelle verwenden wir eine _Konstruktor_-Funktion, die den `[[Prototype]]` für jedes hergestellte Objekt automatisch festlegt. Konstruktoren sind Funktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden.

```js
// Eine Konstruktorfunktion
function Box(value) {
  this.value = value;
}

// Eigenschaften, die alle Boxen besitzen,
// die mit dem Box()-Konstruktor erstellt werden
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
```

Wir sagen, dass `new Box(1)` eine _Instanz_ ist, die von der `Box` Konstruktorfunktion erstellt wurde. `Box.prototype` unterscheidet sich nicht wesentlich von dem zuvor erstellten `boxPrototype`-Objekt — es ist nur ein einfaches Objekt. Jede von einer Konstruktorfunktion erstellte Instanz hat automatisch die `prototype`-Eigenschaft des Konstruktors als `[[Prototype]]` — also `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` hat standardmäßig eine eigene Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktorfunktion selbst verweist — also `Box.prototype.constructor === Box`. Dies ermöglicht es, auf den ursprünglichen Konstruktor von jeder Instanz aus zuzugreifen.

> [!NOTE]
> Wenn eine nicht-primitive von der Konstruktorfunktion zurückgegeben wird, wird dieser Wert zum Ergebnis des `new`-Ausdrucks. In diesem Fall wird der `[[Prototype]]` möglicherweise nicht korrekt gebunden — aber dies sollte in der Praxis nicht oft vorkommen.

Die obige Konstruktorfunktion kann in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) wie folgt umgeschrieben werden:

```js
class Box {
  constructor(value) {
    this.value = value;
  }

  // Methoden werden auf Box.prototype erstellt
  getValue() {
    return this.value;
  }
}
```

Klassen sind syntaktischer Zucker über Konstruktorfunktionen, was bedeutet, dass Sie weiterhin `Box.prototype` manipulieren können, um das Verhalten aller Instanzen zu ändern. Da Klassen jedoch als eine Abstraktion über den zugrunde liegenden Prototypenmechanismus entworfen wurden, verwenden wir für dieses Tutorial die leichtgewichtigere Konstruktorfunktionssyntax, um vollständig zu demonstrieren, wie Prototypen funktionieren.

Da `Box.prototype` dasselbe Objekt wie der `[[Prototype]]` aller Instanzen referenziert, können wir das Verhalten aller Instanzen ändern, indem wir `Box.prototype` mutieren.

```js
function Box(value) {
  this.value = value;
}
Box.prototype.getValue = function () {
  return this.value;
};
const box = new Box(1);

// Mutieren Sie Box.prototype, nachdem eine Instanz bereits erstellt wurde
Box.prototype.getValue = function () {
  return this.value + 1;
};
box.getValue(); // 2
```

Eine Folgerung ist, _das Neuzuweisen_ von `Constructor.prototype` (`Constructor.prototype = ...`) ist eine schlechte Idee aus zwei Gründen:

- Der `[[Prototype]]` von Instanzen, die vor der Neuzuweisung erstellt wurden, bezieht sich nun auf ein anderes Objekt als der `[[Prototype]]` von Instanzen, die nach der Neuzuweisung erstellt werden — das Mutieren des einen `[[Prototype]]` mutiert nicht mehr den anderen.
- Es sei denn, Sie setzen die `constructor`-Eigenschaft manuell zurück, die Konstruktorfunktion kann von `instance.constructor` aus nicht mehr zurückverfolgt werden, was die Benutzererwartung brechen kann. Einige eingebaute Operationen lesen auch die `constructor`-Eigenschaft, und wenn sie nicht gesetzt ist, funktionieren sie möglicherweise nicht wie erwartet.

`Constructor.prototype` ist nur nützlich beim Erstellen von Instanzen. Es hat nichts mit `Constructor.[[Prototype]]` zu tun, das der eigene Prototyp der Konstruktorfunktion ist, der `Function.prototype` ist — also `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Implizite Konstruktoren von Literalen

Einige Literalsyntaxen in JavaScript erstellen Instanzen, die implizit den `[[Prototype]]` festlegen. Zum Beispiel:

```js
// Objektliterale (ohne den `__proto__` Schlüssel) haben automatisch
// `Object.prototype` als ihren `[[Prototype]]`
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// Array-Literale haben automatisch `Array.prototype` als ihren `[[Prototype]]`
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// RegExp-Literale haben automatisch `RegExp.prototype` als ihren `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true
```

Wir können sie in ihre Konstruktorform "enträtseln".

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Zum Beispiel sind "Array-Methoden" wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einfach Methoden, die auf `Array.prototype` definiert sind, weshalb sie automatisch auf allen Array-Instanzen verfügbar sind.

> [!WARNING]
> Es gibt ein Missfeature, das früher weit verbreitet war: die Erweiterung von `Object.prototype` oder einem der anderen eingebauten Prototypen. Ein Beispiel für dieses Missfeature ist das Definieren von `Array.prototype.myMethod = function () {...}` und dann die Verwendung von `myMethod` auf allen Array-Instanzen.
>
> Dieses Missfeature wird _Monkey Patching_ genannt. Das Durchführen von Monkey Patching birgt das Risiko der Abwärtskompatibilität, denn wenn die Sprache diese Methode in Zukunft hinzufügt, aber mit einer anderen Signatur, wird Ihr Code brechen. Es hat zu Vorfällen wie dem [SmooshGate](https://developer.chrome.com/blog/smooshgate/) geführt, und kann ein großes Hindernis für das Vorankommen der Sprache sein, da JavaScript versucht, "das Web nicht zu brechen".
>
> Der **einzige** gute Grund zur Erweiterung eines eingebauten Prototyps ist das Zurückportieren der Funktionen neuerer JavaScript-Engines, wie `Array.prototype.forEach`.

Es könnte interessant sein zu beachten, dass aufgrund historischer Gründe einige eingebaute Konstruktoren-Prototypen selbst Instanzen sind. Zum Beispiel ist `Number.prototype` die Zahl 0, `Array.prototype` ein leeres Array und `RegExp.prototype` ist `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype ist eine No-Op-Funktion an sich
```

Dies ist jedoch nicht der Fall für benutzerdefinierte Konstruktoren, noch für moderne Konstruktoren wie `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Erstellen längerer Vererbungsketten

Die `Constructor.prototype`-Eigenschaft wird wie sie ist zum `[[Prototype]]` der Instanzen des Konstruktors — einschließlich des `[[Prototype]]` von `Constructor.prototype`. Standardmäßig ist `Constructor.prototype` ein _normales Objekt_ — also `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Die einzige Ausnahme ist `Object.prototype` selbst, dessen `[[Prototype]]` `null` ist — das heißt `Object.getPrototypeOf(Object.prototype) === null`. Daher wird ein typischer Konstruktor die folgende Prototypenkette erstellen:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Um längere Prototypketten zu erstellen, können wir den `[[Prototype]]` von `Constructor.prototype` über die Funktion [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) festlegen.

```js
function Base() {}
function Derived() {}
// Setzen Sie den `[[Prototype]]` von `Derived.prototype`
// auf `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

In Klassenterms entspricht dies der Verwendung der Syntax [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Sie könnten auch einige Legacy-Code sehen, der {{jsxref("Object.create()")}} verwendet, um die Vererbungskette zu erstellen. Da dies jedoch die `prototype`-Eigenschaft neu zuweist und die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) Eigenschaft entfernt, kann es fehleranfälliger sein, während Leistungsvorteile möglicherweise nicht offensichtlich sind, wenn die Konstruktoren noch keine Instanzen erstellt haben.

```js example-bad
function Base() {}
function Derived() {}
// Weist `Derived.prototype` einem neuen Objekt zu
// mit `Base.prototype` als seinem `[[Prototype]]`
// **NICHT** TUN — Verwenden Sie stattdessen Object.setPrototypeOf, um dies zu mutieren
Derived.prototype = Object.create(Base.prototype);
```

## Untersuchen von Prototypen: ein tieferer Einblick

Lassen Sie uns im Detail betrachten, was hinter den Kulissen passiert.

In JavaScript, wie oben erwähnt, können Funktionen Eigenschaften haben. Alle Funktionen haben eine spezielle Eigenschaft namens `prototype`. Bitte beachten Sie, dass der folgende Code eigenständig ist (es ist sicher anzunehmen, dass auf der Webseite außer dem folgenden Code kein anderer JavaScript-Code vorhanden ist). Für das beste Lernerlebnis wird dringend empfohlen, eine Konsole zu öffnen, zum "Konsole"-Tab zu navigieren, den unten stehenden JavaScript-Code zu kopieren und einzufügen und ihn durch Drücken der Enter-Taste auszuführen. (Die Konsole ist in den meisten Entwicklertools von Webbrowsern enthalten. Weitere Informationen sind verfügbar für [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools](https://developer.chrome.com/docs/devtools/), und [Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/).)

```js
function doSomething() {}
console.log(doSomething.prototype);
// Es spielt keine Rolle, wie Sie die Funktion deklarieren; eine
// Funktion in JavaScript wird immer eine Standard-
// prototype-Eigenschaft haben — mit einer Ausnahme: eine Pfeil-
// Funktion hat keine Standard-prototype-Eigenschaft:
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);
```

Wie oben gesehen, hat `doSomething()` eine Standard-`prototype`-Eigenschaft, wie in der Konsole demonstriert wird. Nachdem Sie diesen Code ausgeführt haben, sollte die Konsole ein Objekt anzeigen, das diesem ähnlich sieht.

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
> Die Chrome-Konsole verwendet `[[Prototype]]`, um den Prototyp des Objekts gemäß den Begriffen der Spezifikation zu bezeichnen; Firefox verwendet `<prototype>`. Zur Konsistenz verwenden wir `[[Prototype]]`.

Wir können dem Prototyp von `doSomething()` Eigenschaften hinzufügen, wie unten gezeigt.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

Das ergibt:

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

Wir können jetzt den `new`-Operator verwenden, um eine Instanz von `doSomething()` basierend auf diesem Prototyp zu erstellen. Um den new-Operator zu verwenden, rufen Sie die Funktion normal auf, außer dass Sie sie mit `new` prefixen. Der Aufruf einer Funktion mit dem `new`-Operator gibt ein Objekt zurück, das eine Instanz der Funktion ist. Eigenschaften können dann auf dieses Objekt hinzugefügt werden.

Probieren Sie den folgenden Code aus:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // eine Eigenschaft zum Prototyp hinzufügen
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // eine Eigenschaft zum Objekt hinzufügen
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

Wie oben gesehen, ist der `[[Prototype]]` von `doSomeInstancing` `doSomething.prototype`. Aber was bewirkt das? Wenn Sie auf eine Eigenschaft von `doSomeInstancing` zugreifen, sieht der Laufzeit zunächst nach, ob `doSomeInstancing` diese Eigenschaft besitzt.

Wenn `doSomeInstancing` die Eigenschaft nicht hat, sucht der Laufzeit nach der Eigenschaft in `doSomeInstancing.[[Prototype]]` (Alias `doSomething.prototype`). Wenn `doSomeInstancing.[[Prototype]]` die gesuchte Eigenschaft hat, wird diese Eigenschaft auf `doSomeInstancing.[[Prototype]]` verwendet.

Andernfalls, wenn `doSomeInstancing.[[Prototype]]` die Eigenschaft nicht hat, wird `doSomeInstancing.[[Prototype]].[[Prototype]]` nach der Eigenschaft durchsucht. Standardmäßig ist der `[[Prototype]]` der `prototype`-Eigenschaft jeder Funktion `Object.prototype`. Daher wird `doSomeInstancing.[[Prototype]].[[Prototype]]`(Alias `doSomething.prototype.[[Prototype]]` (Alias `Object.prototype`)) nach der gesuchten Eigenschaft durchsucht.

Wenn die Eigenschaft in `doSomeInstancing.[[Prototype]].[[Prototype]]` nicht gefunden wird, dann wird `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` durchsucht. Es gibt jedoch ein Problem: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` existiert nicht, da `Object.prototype.[[Prototype]]` `null` ist. Dann und nur dann, nachdem die gesamte Prototypenkette der `[[Prototype]]` durchsucht wurde, stellt der Laufzeit fest, dass die Eigenschaft nicht existiert, und schließt, dass der Wert an der Eigenschaft `undefined` ist.

Lassen Sie uns versuchen, weiteren Code in die Konsole einzugeben:

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

Dies ergibt das Folgende:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Verschiedene Möglichkeiten zum Erstellen und Ändern von Prototypenketten

Wir haben viele Möglichkeiten kennengelernt, um Objekte zu erstellen und ihre Prototypketten zu ändern. Wir werden systematisch die verschiedenen Ansätze zusammenfassen und die jeweiligen Vor- und Nachteile vergleichen.

### Objekte, die mit Syntaxkonstrukten erstellt wurden

```js
const o = { a: 1 };
// Das neu erstellte Objekt o hat Object.prototype als seinen [[Prototype]]
// Object.prototype hat null als seinen [[Prototype]].
// o ---> Object.prototype ---> null

const b = ["yo", "whadup", "?"];
// Arrays erben von Array.prototype
// (das Methoden wie indexOf, forEach, etc. hat)
// Die Prototypenkette sieht wie folgt aus:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// Funktionen erben von Function.prototype
// (das Methoden wie call, bind, etc. hat)
// f ---> Function.prototype ---> Object.prototype ---> null

const p = { b: 2, __proto__: o };
// Es ist möglich, den [[Prototype]] des neu erstellten Objekts auf
// ein anderes Objekt zu verweisen, indem der __proto__-literal-Eigenschaft verwendet wird. 
// (Nicht zu verwechseln mit den Object.prototype.__proto__ Zugriffsmethoden)
// p ---> o ---> Object.prototype ---> null
```

Wenn Sie den `__proto__`-Schlüssel in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verwenden, schlägt das Zeigen des `__proto__`-Schlüssels auf etwas, das kein Objekt ist, nur ohne eine Ausnahme auszulösen. Im Gegensatz zum [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Accessor ist `__proto__` in Objektliteralinitialisierern standardisiert und optimiert und kann sogar leistungsfähiger als {{jsxref("Object.create")}} sein. Das Deklarieren zusätzlicher eigener Eigenschaften des Objekts bei der Erstellung ist ergonomischer als {{jsxref("Object.create")}}.

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
// g ist ein Objekt mit eigenen Eigenschaften 'vertices' und 'edges'.
// g.[[Prototype]] ist der Wert von Graph.prototype, wenn new Graph() ausgeführt wird.
```

Konstruktorfunktionen sind seit sehr frühen JavaScript-Versionen verfügbar. Daher sind sie sehr schnell, sehr standardisiert und sehr JIT-optimierbar. Sie sind jedoch auch schwer "richtig zu machen", da auf diese Weise hinzugefügte Methoden standardmäßig aufzählbar sind, was im Widerspruch zur Klassensyntax oder zum Verhalten eingebauter Methoden steht. Längere Vererbungsketten zu erstellen, ist ebenfalls fehleranfällig, wie zuvor demonstriert.

### Mit Object.create()

Der Aufruf von {{jsxref("Object.create()")}} erstellt ein neues Objekt. Der `[[Prototype]]` dieses Objekts ist das erste Argument der Funktion:

```js
const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (geerbt)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null (d ist ein Objekt, das direkt null als seinen Prototyp hat)
console.log(d.hasOwnProperty);
// undefined, da d nicht von Object.prototype erbt
```

Ähnlich wie der `__proto__` Schlüssel in Objektinitialisierern, ermöglicht `Object.create()` das direkte Festlegen des Prototyps eines Objekts zur Erstellungszeit, was der Laufzeit erlaubt, das objekt weiter zu optimieren. Es ermöglicht auch das Erstellen von Objekten mit `null` Prototyp, indem `Object.create(null)` verwendet wird. Der zweite Parameter von `Object.create()` erlaubt es, die Attribute jeder Eigenschaft im neuen Objekt genau festzulegen, was ein zweischneidiges Schwert sein kann:

- Es ermöglicht es, unkapselbare Eigenschaften während der Objekterstellung zu erstellen, was mit Objektliteralen nicht möglich ist.
- Es ist viel ausführlicher und fehleranfälliger als Objektliterale.
- Es könnte langsamer als Objektliterale sein, insbesondere beim Erstellen vieler Eigenschaften.

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

Klassen bieten die höchste Lesbarkeit und Wartbarkeit beim Definieren komplexer Vererbungsstrukturen. [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sind eine Funktion, für die es im prototypalen Vererbungsschema keinen trivialen Ersatz gibt. Klassen sind jedoch weniger optimiert als traditionelle Konstruktorfunktionen und werden in älteren Umgebungen nicht unterstützt.

### Mit Object.setPrototypeOf()

Während alle obigen Methoden die Prototypenkette zur Objekterstellung festlegen, erlaubt [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) das Ändern der `[[Prototype]]`-Interneneigenschaft eines bestehenden Objekts. Es kann sogar einen Prototyp auf ein prototypelesses Objekt erzwingen, das mit `Object.create(null)` erstellt wurde oder den Prototyp eines Objekts entfernen, indem er auf `null` gesetzt wird.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Sie sollten den Prototyp jedoch möglichst während der Erstellung festlegen, da das dynamische Setzen des Prototyps alle Optimierungen, die Engines an der Prototypkette vorgenommen haben, stört. Es könnte dazu führen, dass einige Engines Ihren Code zur De-Optimierung neu kompilieren, um ihn gemäß den Spezifikationen lauffähig zu machen.

### Mit dem \_\_proto\_\_ Accessor

Alle Objekte erben den [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Setter, der für das Setzen des `[[Prototype]]` eines bestehenden Objekts verwendet werden kann (sofern der `__proto__`-Schlüssel auf dem Objekt nicht überschrieben wurde).

> **Warnung:** `Object.prototype.__proto__` Accessoren sind **nicht standardmäßig** und veraltet. Sie sollten fast immer `Object.setPrototypeOf` anstelle dessen verwenden.

```js
const obj = {};
// VERWENDEN SIE DIESES NICHT: nur zum Beispiel.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Im Vergleich zu `Object.setPrototypeOf` schlägt das Setzen von `__proto__` auf etwas, das kein Objekt ist, still ohne eine Ausnahme zu werfen. Es hat jedoch eine etwas bessere Browserunterstützung. Es ist jedoch nicht standardisiert und veraltet. Sie sollten fast immer `Object.setPrototypeOf` verwenden.

## Leistung

Die Zugriffszeit für Eigenschaften, die weit oben auf der Prototypenkette stehen, kann sich negativ auf die Leistung auswirken, und dies könnte signifikant sein, wo die Leistung im Code kritisch ist. Außerdem wird bei dem Versuch, nicht vorhandene Eigenschaften zuzugreifen, immer die vollständige Prototypenkette durchlaufen.

Darüber hinaus wird bei der Iteration über die Eigenschaften eines Objekts **jede** aufzählbare Eigenschaft, die sich auf der Prototypenkette befindet, aufgeführt. Um zu überprüfen, ob ein Objekt eine Eigenschaft auf _sich selbst_ und nicht irgendwo auf seiner Prototypenkette hat, ist es notwendig, die Methoden [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) oder [`Object.hasOwn`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) zu verwenden. Alle Objekte, außer diejenigen mit `null` als `[[Prototype]]`, erben [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) von `Object.prototype`, es sei denn, es wurde weiter unten in der Prototypenkette überschrieben. Um Ihnen ein konkretes Beispiel zu geben, lassen Sie uns den obigen Graphen-Beispielcode verwenden, um dies zu veranschaulichen:

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

Hinweis: Es ist **nicht** ausreichend zu überprüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. Die Eigenschaft könnte sehr wohl existieren, aber ihr Wert könnte einfach auf `undefined` gesetzt sein.

## Schlussfolgerung

JavaScript mag für Entwickler, die aus Java oder C++ kommen, ein wenig verwirrend sein, da es alles dynamisch, alles zur Laufzeit und es keine statischen Typen gibt. Alles ist entweder ein Objekt (Instanz) oder eine Funktion (Konstruktor), und sogar die Funktionen selbst sind Instanzen des `Function` Konstruktors. Sogar die "Klassen" als Syntaxkonstrukte sind zur Laufzeit nur Konstruktorfunktionen.

Alle Konstruktorfunktionen in JavaScript haben eine spezielle Eigenschaft namens `prototype`, die mit dem `new`-Operator funktioniert. Der Verweis auf das Prototyp-Objekt wird auf die interne `[[Prototype]]`-Eigenschaft der neuen Instanz kopiert. Zum Beispiel, wenn Sie `const a1 = new A();` ausführen, setzt JavaScript (nachdem das Objekt im Speicher erstellt wurde und bevor die Funktion `A()` mit `this` darauf ausgeführt wird) `a1.[[Prototype]] = A.prototype`. Wenn Sie dann auf Eigenschaften der Instanz zugreifen, überprüft JavaScript zunächst, ob sie direkt auf diesem Objekt existieren, und wenn nicht, schaut es im `[[Prototype]]`. `[[Prototype]]` wird rekursiv betrachtet, d. h. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` usw., bis es gefunden wird oder `Object.getPrototypeOf` `null` zurückgibt. Dies bedeutet, dass alle auf `prototype` definierten Eigenschaften effektiv von allen Instanzen gemeinsam genutzt werden und Sie sogar später Teile des `prototype` ändern können und die Änderungen in allen bestehenden Instanzen erscheinen.

Wenn Sie im obigen Beispiel `const a1 = new A(); const a2 = new A();` ausführen, würde `a1.doSomething` tatsächlich auf `Object.getPrototypeOf(a1).doSomething` verweisen — das gleiche wie das `A.prototype.doSomething`, das Sie definiert haben, d.h. `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es ist wichtig, das prototypale Vererbungsschema zu verstehen, bevor Sie komplexen Code schreiben, der davon Gebrauch macht. Achten Sie auch auf die Länge der Prototyp-Ketten in Ihrem Code und brechen Sie sie bei Bedarf auf, um mögliche Leistungsprobleme zu vermeiden. Außerdem sollten die nativen Prototypen **niemals** erweitert werden, es sei denn, es handelt sich um eine Kompatibilität zu neueren JavaScript-Funktionen.
