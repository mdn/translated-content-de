---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Das Schlüsselwort **`this`** bezieht sich auf den Kontext, in dem ein Stück Code, wie z.B. ein Funktionskörper, ausgeführt werden soll. Am häufigsten wird es in Objektmethoden verwendet, wobei `this` sich auf das Objekt bezieht, an das die Methode angehängt ist, was es ermöglicht, dieselbe Methode auf verschiedenen Objekten wiederzuverwenden.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (zur Laufzeit [Bindung](/de/docs/Glossary/binding)), nicht wie sie definiert ist. Wird eine normale Funktion als Methode eines Objektes aufgerufen (`obj.method()`), zeigt `this` auf dieses Objekt. Wird sie als eigenständige Funktion aufgerufen (nicht an ein Objekt gebunden: `func()`), bezieht sich `this` typischerweise auf das [globale Objekt](/de/docs/Glossary/Global_object) (im nicht-strikten Modus) oder `undefined` (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erstellen, deren `this`-Bindung sich nicht ändert, und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können ebenfalls den `this`-Wert für einen bestimmten Aufruf festlegen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in ihrer Behandlung von `this`: Sie erben `this` aus dem übergeordneten Bereich zum Zeitpunkt ihrer Definition. Dieses Verhalten macht Arrow-Funktionen besonders nützlich für Callbacks und zur Bewahrung des Kontexts. Arrow-Funktionen haben jedoch keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch die Methoden `bind()`, `apply()` oder `call()` festgelegt werden, noch verweist er in Objektmethoden auf das aktuelle Objekt.

{{EmbedInteractiveExample("pages/js/expressions-this.html")}}

## Syntax

```js-nolint
this
```

### Wert

Im nicht-strikten Modus ist `this` immer eine Referenz zu einem Objekt. Im strikten Modus kann es jeder Wert sein. Weitere Informationen dazu, wie der Wert ermittelt wird, finden Sie in der folgenden Beschreibung.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Betrachten Sie `this` als einen versteckten Parameter einer Funktion — genau wie die in der Funktionsdefinition erklärten Parameter ist `this` eine Bindung, die die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Für eine normale Funktion (keine Arrow-Funktion, gebundene Funktion, etc.) ist der Wert von `this` das Objekt, auf dem die Funktion aufgerufen wird. Mit anderen Worten, wenn der Funktionsaufruf die Form `obj.f()` hat, bezieht sich `this` auf `obj`. Zum Beispiel:

```js
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
```

Beachten Sie, wie die Funktion dieselbe ist, aber je nachdem, wie sie aufgerufen wird, der Wert von `this` unterschiedlich ist. Dies ist analog zu den Funktionsparametern.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigene Eigenschaft hat, sondern das Objekt, das zum Aufrufen der Funktion verwendet wird. Sie können dies beweisen, indem Sie eine Methode eines Objekts in der [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer basierend darauf, wie eine Funktion aufgerufen wird, selbst wenn die Funktion bei der Erstellung auf ein Objekt definiert wurde:

```js
const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
```

Wenn der Wert, auf dem die Methode aufgerufen wird, ein primitiver Wert ist, wird auch `this` ein primitiver Wert sein — aber nur, wenn die Funktion im strikten Modus ist.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wird die Funktion ohne Zugriff auf irgendetwas aufgerufen, wird `this` `undefined` sein — aber nur, wenn die Funktion im strikten Modus ist.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im nicht-strikten Modus stellt ein spezieller Prozess namens [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) sicher, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

- Wenn eine Funktion mit `this` auf `undefined` oder `null` gesetzt aufgerufen wird, wird `this` mit {{jsxref("globalThis")}} ersetzt.
- Wenn die Funktion mit `this` auf einen primitiven Wert gesetzt aufgerufen wird, wird `this` mit dem Wrapper-Objekt des primitiven Werts ersetzt.

```js
function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

Bei typischen Funktionsaufrufen wird `this` implizit wie ein Parameter durch das Präfix der Funktion (der Teil vor dem Punkt) weitergegeben. Sie können auch den Wert von `this` explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}}, oder {{jsxref("Reflect.apply()")}} setzen. Mithilfe von {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem spezifischen Wert von `this` erstellen, der sich nicht ändert, unabhängig davon, wie die Funktion aufgerufen wird. Bei der Verwendung dieser Methoden gelten die oben genannten Regeln zur `this`-Substitution weiterhin, wenn die Funktion nicht-strikt ist.

#### Callbacks

Wenn eine Funktion als Callback übergeben wird, hängt der Wert von `this` davon ab, wie der Callback aufgerufen wird, was vom Implementator der API bestimmt wird. Callbacks werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (direkt aufgerufen, ohne es an ein Objekt zu binden), was bedeutet, dass, wenn die Funktion nicht-strikt ist, der Wert von `this` das globale Objekt ({{jsxref("globalThis")}}) ist. Dies ist der Fall bei [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), dem [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor, etc.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs ermöglichen es Ihnen, einen `this`-Wert für Aufrufe des Callbacks festzulegen. Zum Beispiel akzeptieren alle iterativen Array-Methoden und verwandte Methoden wie {{jsxref("Set.prototype.forEach()")}} einen optionalen `thisArg`-Parameter.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Callback mit einem anderen `this`-Wert als `undefined` aufgerufen. Zum Beispiel wird der `reviver`-Parameter von {{jsxref("JSON.parse()")}} und der `replacer`-Parameter von {{jsxref("JSON.stringify()")}} mit `this` auf das Objekt gesetzt, zu dem die Eigenschaft gehört, die geparst/serialisiert wird.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umschließenden lexikalischen Kontexts bei. Mit anderen Worten, beim Auswerten des Funktionskörpers einer Arrow-Funktion erstellt die Sprache keine neue `this`-Bindung.

Zum Beispiel ist `this` im globalen Code immer `globalThis`, unabhängig von der Striktheit, aufgrund der [globalen Kontext](#globaler_kontext)-Bindung:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen erstellen eine [Closure](/de/docs/Web/JavaScript/Closures) über den `this`-Wert ihres umgebenden Bereichs, was bedeutet, dass Arrow-Funktionen so wirken, als wären sie "automatisch gebunden" — egal, wie sie aufgerufen werden, `this` ist an das gebunden, was es bei der Erstellung der Funktion war (im obigen Beispiel das globale Objekt). Dasselbe gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt wurden: Ihr `this` bleibt dasselbe wie der umschließende lexikalische Kontext. [Siehe Beispiel unten](#this_in_arrow-funktionen).

Darüber hinaus wird beim Aufrufen von Arrow-Funktionen mit `call()`, `bind()`, oder `apply()` der `thisArg`-Parameter ignoriert. Sie können mit diesen Methoden jedoch weiterhin andere Argumente übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wird eine Funktion als Konstruktor (mit dem Schlüsselwort {{jsxref("Operators/new", "new")}}) verwendet, ist `this` an das neue Objekt gebunden, das konstruiert wird, unabhängig davon, auf welches Objekt die Konstrukturfunktion zugreift. Der Wert von `this` wird der Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht-primitiven Wert zurück.

```js
function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38
```

Im zweiten Beispiel (`C2`), da während der Konstruktion ein Objekt zurückgegeben wurde, wird das neue Objekt, an das `this` gebunden war, verworfen. (Dies macht die Anweisung `this.a = 37;` im Wesentlichen zu totem Code. Es ist nicht genau tot, weil es ausgeführt wird, aber es kann ohne äußere Effekte entfernt werden.)

#### super

Wird eine Funktion in der Form `super.method()` aufgerufen, ist `this` innerhalb der `method`-Funktion derselbe Wert wie der Wert von `this` um den `super.method()`-Aufruf herum und ist im Allgemeinen nicht gleich dem Objekt, auf das `super` verweist. Dies liegt daran, dass `super.method` kein Objektmemberzugang wie die oben genannten ist — es ist eine spezielle Syntax mit anderen Bindungsregeln. Für Beispiele siehe den [`super`-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte aufgeteilt werden: statisch und instanziiert. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Instanzfeld-Initialisierer ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) gehören zum Instanzkontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, statische Feld-Initialisierer und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Klassenkonstruktoren werden immer mit `new` aufgerufen, sodass ihr Verhalten das gleiche ist wie bei [Funktionskonstruktoren](#konstruktoren): Der `this`-Wert ist die neue Instanz, die erstellt wird. Klassenmethoden verhalten sich wie Methoden in Objektliteralen — der `this`-Wert ist das Objekt, auf das die Methode aufgerufen wurde. Wenn die Methode nicht auf ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf die Klasse zugegriffen und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden auch mit `this` auf die aktuelle Klasse ausgewertet.

Feld-Initialisierer werden auch im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` auf die Instanz ausgewertet, die konstruiert wird. Statische Felder werden mit `this` auf die aktuelle Klasse ausgewertet. Deshalb sind Arrow-Funktionen in Feld-Initialisierern [an die Instanz gebunden für Instanzfelder und an die Klasse für statische Felder](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();
console.log(c.instanceField === c); // true
console.log(C.staticField === C); // true
```

#### Konstruktoren abgeleiteter Klassen

Anders als Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine anfängliche `this`-Bindung. Das Aufrufen von {{jsxref("Operators/super", "super()")}} erzeugt eine `this`-Bindung im Konstruktor und hat im Wesentlichen den Effekt, die folgende Codezeile zu bewerten, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Ein Verweis auf `this` vor dem Aufruf von `super()` führt zu einem Fehler.

Abgeleitete Klassen dürfen nicht zurückkehren, bevor `super()` aufgerufen wird, es sei denn, der Konstruktor gibt ein Objekt zurück (wodurch der `this`-Wert überschrieben wird) oder die Klasse hat keinen Konstruktor.

```js
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() {}
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

### Globaler Kontext

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; kann innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen) definiert im globalen Bereich sein) hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript läuft. Wie bei [Callbacks](#callbacks), wird der `this`-Wert durch die Laufzeitumgebung (den Aufrufer) bestimmt.

Auf oberster Ebene eines Skripts bezieht sich `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob im strikten Modus oder nicht. Im allgemeinen entspricht dies dem globalen Objekt — zum Beispiel, wenn der Quellcode in ein HTML-[`<script>`](/de/docs/Web/HTML/Element/script)-Element eingefügt und als Skript ausgeführt wird, ist `this === window`.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — das ist der Fall für Browser und Node — aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt zusammenhängt.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wird der Quellcode als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen (für HTML bedeutet das, dem `<script>`-Tag `type="module"` hinzuzufügen), ist `this` immer `undefined` auf oberster Ebene.

Wird der Quellcode mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt, ist `this` dasselbe wie der umgebende Kontext für [direktes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) oder `globalThis` (als ob es in einem separaten globalen Skript ausgeführt wird) für indirektes eval.

![](16-12c87b7.md)

Beachten Sie, dass einige Quellcodes, obwohl sie wie der globale Bereich aussehen, tatsächlich in eine Funktion gewrappt werden, wenn sie ausgeführt werden. Zum Beispiel werden Node.js CommonJS-Module in eine Funktion gewrappt und mit dem `this`-Wert gesetzt auf `module.exports` ausgeführt. [Ereignishandlerattribute](#this_in_inline-ereignishandlern) werden mit `this` auf das Element gesetzt, an das sie gebunden sind, ausgeführt.

Objektliterale erstellen keinen `this`-Bereich — nur Funktionen (Methoden), die innerhalb des Objekts definiert sind. Die Verwendung von `this` in einem Objektliteral übernimmt den Wert aus dem umliegenden Bereich.

```js
const obj = {
  a: this,
};

console.log(obj.a === window); // true
```

## Beispiele

### this in Funktionskontexten

Der Wert des `this`-Parameters hängt davon ab, wie die Funktion aufgerufen wird, nicht davon, wie sie definiert ist.

```js
// An object can be passed as the first argument to 'call'
// or 'apply' and 'this' will be bound to it.
const obj = { a: "Custom" };

// Variables declared with var become properties of 'globalThis'.
var a = "Global";

function whatsThis() {
  return this.a; // 'this' depends on how the function is called
}

whatsThis(); // 'Global'; the 'this' parameter defaults to 'globalThis' in non–strict mode
obj.whatsThis = whatsThis;
obj.whatsThis(); // 'Custom'; the 'this' parameter is bound to obj
```

Mit `call()` und `apply()` können Sie den Wert von `this` übergeben, als ob es sich um einen expliziten Parameter handelt.

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

// The first argument is bound to the implicit 'this' parameter; the remaining
// arguments are bound to the named parameters.
add.call(o, 5, 7); // 16

// The first argument is bound to the implicit 'this' parameter; the second
// argument is an array whose members are bound to the named parameters.
add.apply(o, [10, 20]); // 34
```

### this und Objektumwandlung

Im nicht-strikten Modus, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, wird der `this`-Wert durch ein Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive wie `7` oder `'foo'` werden in ein Objekt mittels des zugehörigen Konstruktors konvertiert, so wird die primitive Zahl `7` in eine {{jsxref("Number")}} Wrapper-Klasse und der String `'foo'` in eine {{jsxref("String")}} Wrapper-Klasse umgewandelt.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind()-Methode

Ein Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt eine neue Funktion mit demselben Körper und Geltungsbereich wie `f`, aber der Wert von `this` ist permanent an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

```js
function f() {
  return this.a;
}

const g = f.bind({ a: "azerty" });
console.log(g()); // azerty

const h = g.bind({ a: "yoo" }); // bind only works once!
console.log(h()); // azerty

const o = { a: 37, f, g, h };
console.log(o.a, o.f(), o.g(), o.h()); // 37 37 azerty azerty
```

### this in Arrow-Funktionen

Arrow-Funktionen erstellen Closures über den `this`-Wert des umgebenden Ausführungskontexts. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt, sodass ihr `this` dauerhaft an das `this` ihrer umgebenden Funktion gebunden ist. Der Wert von `this` innerhalb von `getThisGetter` kann im Aufruf gesetzt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion bestimmt. Wir gehen davon aus, dass `getThisGetter` eine nicht-strikte Funktion ist, was bedeutet, dass sie in einem nicht-strikten Skript enthalten ist und nicht weiter in einer Klasse oder strikten Funktion verschachtelt ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen, was `this` an `obj` in seinem Körper bindet. Die zurückgegebene Funktion wird einer Variable `fn` zugewiesen. Jetzt, beim Aufruf von `fn`, bleibt der Wert von `this` immer noch der, der durch den Aufruf von `getThisGetter` gesetzt wird, also `obj`. Wäre die zurückgegebene Funktion keine Arrow-Funktion, würden solche Aufrufe dazu führen, dass der `this`-Wert `globalThis` wäre, da `getThisGetter` nicht-strikt ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber achten Sie darauf, wenn Sie die Methode von `obj` entkoppeln, ohne sie aufzurufen, da `getThisGetter` immer noch eine Methode ist, die einen variierenden `this`-Wert hat. Der Aufruf von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, weil es dem `this` von `fn2()` folgt, das `globalThis` ist, da es ohne Bindung an ein Objekt aufgerufen wird.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist sehr nützlich beim Definieren von Callbacks. Normalerweise erstellt jeder Funktionsausdruck seine eigene `this`-Bindung, die den `this`-Wert des oberen Bereichs überschattet. Jetzt können Sie Funktionen als Arrow-Funktionen definieren, wenn Ihnen der `this`-Wert egal ist, und `this`-Bindungen nur dort erstellen, wo Sie es tun (z.B. in Klassenmethoden). Siehe [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welches Objekt die Eigenschaft zugegriffen wird, nicht darauf, auf welchem Objekt die Eigenschaft definiert ist. Eine als Getter oder Setter verwendete Funktion hat ihr `this`-Wert an das Objekt gebunden, von dem die Eigenschaft gesetzt oder abgerufen wird.

```js
function sum() {
  return this.a + this.b + this.c;
}

const o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  },
};

Object.defineProperty(o, "sum", {
  get: sum,
  enumerable: true,
  configurable: true,
});

console.log(o.average, o.sum); // 2 6
```

### this in DOM-Ereignis-Handlern

Wenn eine Funktion als Ereignis-Handler verwendet wird, wird ihr `this`-Parameter an das DOM-Element gebunden, auf dem der Listener platziert ist (einige Browser folgen diesem Konvention nicht für Listener, die dynamisch mit Methoden außer [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt werden).

```js
// When called as a listener, turns the related element blue
function bluify(e) {
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// Get a list of every element in the document
const elements = document.getElementsByTagName("*");

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (const element of elements) {
  element.addEventListener("click", bluify, false);
}
```

### this in Inline-Ereignishandlern

Wenn der Code aus einem Inline-[Ereignishandlerattribut](/de/docs/Web/HTML/Attributes#event_handler_attributes) aufgerufen wird, ist `this` an das DOM-Element gebunden, auf dem der Listener platziert ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Der obige Alert zeigt `button`. Beachten Sie jedoch, dass nur der äußere Bereich `this` auf diese Weise gebunden hat:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` (d.h. das Standardobjekt im nicht-strikten Modus, in dem `this` nicht im Aufruf übergeben wird) gebunden.

### Gebundene Methoden in Klassen

Genau wie bei regulären Funktionen hängt der Wert von `this` innerhalb von Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten zu überschreiben, so dass `this` in Klassen immer auf die Klasseninstanz verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

```js
class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    this.sayBye = this.sayBye.bind(this);
  }

  sayHi() {
    console.log(`Hello from ${this.name}`);
  }

  sayBye() {
    console.log(`Bye from ${this.name}`);
  }

  get name() {
    return "Ferrari";
  }
}

class Bird {
  get name() {
    return "Tweety";
  }
}

const car = new Car();
const bird = new Bird();

// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye(); // Bye from Ferrari
```

> [!NOTE]
> Klassen sind immer im strikten Modus. Das Aufrufen von Methoden mit einem undefinierten `this`-Wert führt zu einem Fehler, wenn die Methode versucht, auf Eigenschaften auf `this` zuz greifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError, da die 'sayHi' Methode versucht auf 'this.name' zuzugreifen, aber 'this' im strikten Modus nicht definiert ist.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden unter demselben Problem leiden wie [die Verwendung von Arrow-Funktionen für Klassenattribute](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse wird ihre eigene Kopie der Methode haben, was den Speicherverbrauch erhöht. Nutzen Sie es nur, wo es absolut notwendig ist. Sie können auch die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als Getter, die eine gebundene Funktion beim Zugriff zurückgibt und speichert, so dass die Funktion nur einmal und nur bei Bedarf erstellt wird.

### this in `with`-Anweisungen

Auch wenn [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungen veraltet und im strikten Modus nicht verfügbar sind, dienen sie immer noch als Ausnahme zu den normalen `this`-Bindungsregeln. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Umfangsobjekts ist, wird der `this`-Wert an das Umfangsobjekt gebunden, als ob das `obj1.`-Präfix existiert.

```js
const obj1 = {
  foo() {
    return this;
  },
};

with (obj1) {
  console.log(foo() === obj1); // true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("globalThis")}}
