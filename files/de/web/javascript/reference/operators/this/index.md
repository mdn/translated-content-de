---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Das Schlüsselwort **`this`** bezieht sich auf den Kontext, in dem ein Stück Code, wie der Körper einer Funktion, ausgeführt werden soll. Meistens wird es in Objektmethoden verwendet, wobei sich `this` auf das Objekt bezieht, an das die Methode gebunden ist, was es ermöglicht, dass dieselbe Methode auf verschiedenen Objekten wiederverwendet werden kann.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (zur Laufzeit {{Glossary("binding", "binding")}}), nicht wie sie definiert ist. Wenn eine normale Funktion als Methode eines Objekts aufgerufen wird (`obj.method()`), zeigt `this` auf dieses Objekt. Wird sie als eigenständige Funktion aufgerufen (nicht an ein Objekt gebunden: `func()`), bezieht sich `this` typischerweise auf das {{Glossary("Global_object", "globale Objekt")}} (im nicht-strengen Modus) oder `undefined` (im [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erstellen, deren `this`-Bindung sich nicht ändert, und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können auch den `this`-Wert für einen bestimmten Aufruf festlegen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in der Behandlung von `this`: Sie übernehmen `this` aus dem übergeordneten Gültigkeitsbereich zu dem Zeitpunkt, an dem sie definiert werden. Dieses Verhalten macht Arrow-Funktionen besonders nützlich für Rückrufe und zur Erhaltung des Kontexts. Allerdings haben Arrow-Funktionen keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch die Methoden `bind()`, `apply()` oder `call()` festgelegt werden, noch verweist es auf das aktuelle Objekt in Objektmethoden.

{{InteractiveExample("JavaScript Demo: this expression")}}

```js interactive-example
const test = {
  prop: 42,
  func() {
    return this.prop;
  },
};

console.log(test.func());
// Expected output: 42
```

## Syntax

```js-nolint
this
```

### Wert

Im nicht–strengen Modus ist `this` immer eine Referenz auf ein Objekt. Im strengen Modus kann es jeder Wert sein. Für weitere Informationen, wie der Wert bestimmt wird, siehe die Beschreibung unten.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Denken Sie an `this` als einen versteckten Parameter einer Funktion — genau wie die Parameter, die in der Funktionsdefinition deklariert sind, ist `this` eine Bindung, die die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Für eine normale Funktion (keine Arrow-Funktion, gebundene Funktion, etc.) ist der Wert von `this` das Objekt, auf das die Funktion zugegriffen wird. Mit anderen Worten, wenn der Funktionsaufruf in der Form `obj.f()` ist, dann bezieht sich `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, wie die Funktion dieselbe ist, aber basierend darauf, wie sie aufgerufen wird, ist der Wert von `this` unterschiedlich. Dies ist analog dazu, wie Funktionsparameter funktionieren.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigenen Eigenschaft hat, sondern das Objekt, das zum Aufrufen der Funktion verwendet wird. Sie können dies beweisen, indem Sie eine Methode eines Objekts in der [Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer basierend darauf, wie eine Funktion aufgerufen wird, selbst wenn die Funktion bei der Erstellung in einem Objekt definiert wurde:

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

Wenn der Wert, auf den die Methode zugegriffen wird, ein primitiver Wert ist, wird `this` ebenfalls ein primitiver Wert sein — aber nur, wenn sich die Funktion im strengen Modus befindet.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wenn die Funktion ohne Zugriff auf irgendetwas aufgerufen wird, wird `this` `undefined` sein — aber nur, wenn sich die Funktion im strengen Modus befindet.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im nicht-strengen Modus sorgt ein spezieller Prozess namens [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) dafür, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

- Wenn eine Funktion mit `this` aufgerufen wird, das auf `undefined` oder `null` gesetzt ist, wird `this` mit {{jsxref("globalThis")}} substituiert.
- Wenn die Funktion mit `this` aufgerufen wird, das auf einen primitiven Wert gesetzt ist, wird `this` mit dem Wrapper-Objekt des primitiven Werts substituiert.

```js
function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

In typischen Funktionsaufrufen wird `this` implizit wie ein Parameter durch das Präfix der Funktion (der Teil vor dem Punkt) übergeben. Sie können den Wert von `this` auch explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} oder {{jsxref("Reflect.apply()")}} festlegen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem spezifischen Wert von `this` erstellen, der sich unabhängig davon nicht ändert, wie die Funktion aufgerufen wird. Wenn Sie diese Methoden verwenden, gelten die oben genannten `this`-Substitutionsregeln immer noch, wenn die Funktion nicht-streng ist.

#### Rückrufe

Wenn eine Funktion als Rückruf übergeben wird, hängt der Wert von `this` davon ab, wie der Rückruf aufgerufen wird, was vom Implementierer der API bestimmt wird. Rückrufe werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (direkt ohne Anbindung an ein Objekt aufgerufen), was bedeutet, dass der Wert von `this`, wenn die Funktion nicht-streng ist, das globale Objekt ({{jsxref("globalThis")}}) ist. Dies ist der Fall für [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), den [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor usw.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs erlauben es Ihnen, einen `this`-Wert für die Aufrufe des Rückrufs festzulegen. Beispielsweise akzeptieren alle iterativen Array-Methoden und verwandte wie {{jsxref("Set.prototype.forEach()")}} einen optionalen `thisArg`-Parameter.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Rückruf mit einem anderen `this`-Wert als `undefined` aufgerufen. Zum Beispiel werden der `reviver`-Parameter von {{jsxref("JSON.parse()")}} und der `replacer`-Parameter von {{jsxref("JSON.stringify()")}} beide mit `this` auf das Objekt gesetzt, dem die Eigenschaft gehört, die geparst/serialisiert wird.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umschließenden lexikalischen Kontexts von `this`. Mit anderen Worten, beim Auswerten des Arrow-Funktions-Körpers erstellt die Sprache keine neue `this`-Bindung.

Zum Beispiel ist im globalen Code `this` immer `globalThis`, unabhängig von der Striktheit, aufgrund der [globalen Kontexte](#globaler_kontext)-Bindung:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen erstellen einen [Closure](/de/docs/Web/JavaScript/Guide/Closures) über den `this`-Wert des umgebenden Bereichs, was bedeutet, dass Arrow-Funktionen so funktionieren, als ob sie "auto-gebunden" wären — egal, wie sie aufgerufen werden, `this` ist auf das gebunden, was es war, als die Funktion erstellt wurde (im obigen Beispiel das globale Objekt). Dasselbe gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt werden: Ihr `this` bleibt das des umschließenden lexikalischen Kontexts. [Siehe Beispiel unten](#this_in_arrow-funktionen).

Des Weiteren wird beim Aufrufen von Arrow-Funktionen mit `call()`, `bind()` oder `apply()` der `thisArg`-Parameter ignoriert. Sie können jedoch weiterhin andere Argumente mit diesen Methoden übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wenn eine Funktion als Konstruktor verwendet wird (mit dem {{jsxref("new")}}-Schlüsselwort), ist ihr `this` an das neue Objekt gebunden, das konstruiert wird, unabhängig davon, auf welches Objekt die Konstruktionsfunktion zugegriffen wird. Der Wert von `this` wird der Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht-primitiven Wert zurück.

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

Im zweiten Beispiel (`C2`), weil ein Objekt während der Konstruktion zurückgegeben wurde, wird das neue Objekt, an das `this` gebunden war, verworfen. (Dies macht im Wesentlichen die Anweisung `this.a = 37;` zu totem Code. Es ist nicht genau tot, weil es ausgeführt wird, aber es kann eliminiert werden, ohne äußere Effekte.)

#### super

Wenn eine Funktion in der `super.method()`-Form aufgerufen wird, ist `this` innerhalb der `method`-Funktion derselbe Wert wie der `this`-Wert um den `super.method()`-Aufruf, und ist im Allgemeinen nicht gleich dem Objekt, auf das `super` verweist. Dies liegt daran, dass `super.method` kein Objektmitgliedszugriff wie die oben genannten ist — es ist eine spezielle Syntax mit anderen Bindungsregeln. Für Beispiele siehe die [`super`-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte unterteilt werden: statisch und Instanz. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Instanzfeldinitialisierer ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)) gehören zum Instanzkontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, statische Feldinitialisierer und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Klassenkonstruktoren werden immer mit `new` aufgerufen, daher ist ihr Verhalten dasselbe wie das von [Funktionskonstruktoren](#konstruktoren): Der `this`-Wert ist die neue Instanz, die erstellt wird. Klassenmethoden verhalten sich wie Methoden in Objektliteralen — der `this`-Wert ist das Objekt, auf das die Methode zugegriffen wird. Wenn die Methode nicht auf ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf der Klasse aufgerufen, und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden auch mit `this` ausgewertet, das auf die aktuelle Klasse gesetzt ist.

Feldinitialisierer werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` ausgewertet, das auf die konstruierte Instanz gesetzt ist. Statische Felder werden mit `this` ausgewertet, das auf die aktuelle Klasse gesetzt ist. Dies ist der Grund, warum Arrow-Funktionen in Feldinitialisierern [an die Instanz für Instanzfelder und an die Klasse für statische Felder gebunden sind](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();
console.log(c.instanceField === c); // true
console.log(C.staticField === C); // true
```

#### Abgeleitete Klassenkonstruktoren

Im Gegensatz zu Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine anfängliche `this`-Bindung. Der Aufruf von {{jsxref("Operators/super", "super()")}} erstellt eine `this`-Bindung im Konstruktor und hat im Wesentlichen die Wirkung der Auswertung der folgenden Codezeile, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Das Referenzieren von `this` vor dem Aufruf von `super()` führt zu einem Fehler.

Abgeleitete Klassen dürfen nicht zurückgeben, bevor `super()` aufgerufen wird, es sei denn, der Konstruktor gibt ein Objekt zurück (sodass der `this`-Wert überschrieben wird) oder die Klasse hat keinen Konstruktor.

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

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; kann aber innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen) definiert in der globalen Sphäre sein) hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript ausgeführt wird. Wie bei [Rückrufen](#rückrufe) wird der `this`-Wert durch die Laufzeitumgebung (den Anrufer) bestimmt.

Auf höchster Ebene eines Skripts bezieht sich `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob im strengen Modus oder nicht. Dies ist im Allgemeinen dasselbe wie das globale Objekt — zum Beispiel, wenn die Quelle in einem HTML-`<script>`-Element geladen und als Skript ausgeführt wird, `this === window`.

> [!NOTE]
> `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — dies ist der Fall bei Browsern und Node — aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt zusammenhängt.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wenn die Quelle als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen wird (für HTML bedeutet dies, `type="module"` zum `<script>`-Tag hinzuzufügen), ist `this` immer `undefined` auf oberster Ebene.

Wenn die Quelle mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt wird, ist `this` dasselbe wie der umschließende Kontext für [direkten eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) oder `globalThis` (als würde es in einem separaten globalen Skript ausgeführt) für indirekten eval.

```js
function test() {
  // Direct eval
  console.log(eval("this") === this);
  // Indirect eval, non-strict
  console.log(eval?.("this") === globalThis);
  // Indirect eval, strict
  console.log(eval?.("'use strict'; this") === globalThis);
}

test.call({ name: "obj" }); // Logs 3 "true"
```

Beachten Sie, dass einige Quellcodes, obwohl sie wie der globale Bereich aussehen, eigentlich in einer Funktion umschlossen sind, wenn sie ausgeführt werden. Zum Beispiel werden Node.js CommonJS-Module in eine Funktion gehüllt und mit dem `this`-Wert gesetzt auf `module.exports` ausgeführt. [Ereignis-Handler-Attribute](#this_in_inline-ereignishandlern) werden mit `this` gesetzt auf das Element ausgeführt, auf das sie angewendet werden.

Objektliterale erstellen keinen `this`-Bereich — nur Funktionen (Methoden), die innerhalb des Objekts definiert sind. Die Verwendung von `this` in einem Objektliteral erbt den Wert vom umgebenden Bereich.

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

Durch Verwendung von `call()` und `apply()` können Sie den Wert von `this` übergeben, als ob es ein expliziter Parameter wäre.

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

Im nicht–strengen Modus, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, wird der `this`-Wert durch ein Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive wie `7` oder `'foo'` werden mit dem entsprechenden Konstruktor in ein Objekt umgewandelt, sodass die primitive Zahl `7` in eine {{jsxref("Number")}}-Wrapper-Klasse und der String `'foo'` in eine {{jsxref("String")}}-Wrapper-Klasse umgewandelt wird.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind()-Methode

Mit dem Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) wird eine neue Funktion mit demselben Körper und demselben Geltungsbereich wie `f` erstellt, aber der Wert von `this` ist dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

Arrow-Funktionen erstellen Closures über den `this`-Wert des umschließenden Ausführungskontextes. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt, daher ist ihr `this` dauerhaft an das `this` ihrer umschließenden Funktion gebunden. Der Wert von `this` innerhalb von `getThisGetter` kann im Aufruf festgelegt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion festlegt. Wir nehmen an, dass `getThisGetter` eine nicht-strenge Funktion ist, was bedeutet, dass sie in einem nicht-strengen Skript enthalten und nicht weiter in einer Klasse oder strenger Funktion verschachtelt ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen, was `this` innerhalb ihres Körpers an `obj` bindet. Die zurückgegebene Funktion wird einer Variablen `fn` zugewiesen. Nun, wenn wir `fn` aufrufen, bleibt der Wert von `this`, der durch den Aufruf von `getThisGetter` festgelegt wurde, gültig, was `obj` ist. Wenn die zurückgegebene Funktion keine Arrow-Funktion wäre, würden solche Aufrufe dazu führen, dass der `this`-Wert `globalThis` wäre, da `getThisGetter` nicht-streng ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber seien Sie vorsichtig, wenn Sie die Methode von `obj` entkoppeln, ohne sie aufzurufen, da `getThisGetter` immer noch eine Methode ist, die einen variierenden `this`-Wert hat. Das Aufrufen von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, da es dem `this` von `fn2()` folgt, welches `globalThis` ist, da es aufgerufen wird, ohne an ein Objekt gebunden zu sein.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist sehr nützlich beim Definieren von Rückrufen. Normalerweise erstellt jeder Funktionsausdruck sein eigenes `this`-Binding, das den `this`-Wert des oberen Bereichs überschattet. Nun können Sie Funktionen als Arrow-Funktionen definieren, wenn Ihnen der `this`-Wert egal ist, und `this`-Bindungen nur dort erstellen, wo es darauf ankommt (z.B. in Klassenmethoden). Siehe [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welches Objekt die Eigenschaft zugegriffen wird, nicht auf welches Objekt die Eigenschaft definiert ist. Eine Funktion, die als Getter oder Setter verwendet wird, hat ihr `this` an das Objekt gebunden, von dem aus die Eigenschaft gesetzt oder geholt wird.

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

### this in DOM-Ereignishandlern

Wenn eine Funktion als Ereignishandler verwendet wird, ist ihr `this`-Parameter an das DOM-Element gebunden, auf dem der Listener platziert ist (einige Browser folgen dieser Konvention nicht für Listener, die dynamisch mit anderen Methoden als [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt werden).

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
  element.addEventListener("click", bluify);
}
```

### this in Inline-Ereignishandlern

Wenn der Code aus einem Inline [Ereignishandler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) aufgerufen wird, ist `this` an das DOM-Element gebunden, auf dem der Listener platziert ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Der obige Alarm zeigt `button`. Beachten Sie jedoch, dass nur der äußere Bereich sein `this` auf diese Weise gebunden hat:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` gebunden (d.h. das Standardobjekt im nicht–strengen Modus, wo `this` nicht im Aufruf übergeben wird).

### Gebundene Methoden in Klassen

Genau wie bei normalen Funktionen hängt der Wert von `this` innerhalb von Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten zu überschreiben, sodass `this` innerhalb von Klassen immer auf die Klasseninstanz verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

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
> Klassen sind immer im strengen Modus. Das Aufrufen von Methoden mit einem undefinierten `this` führt zu einem Fehler, wenn die Methode versucht, auf Eigenschaften von `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError weil die 'sayHi'-Methode versucht, auf 'this.name' zuzugreifen, aber 'this' im strengen Modus undefiniert ist.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden das gleiche Problem haben wie [die Verwendung von Arrow-Funktionen für Klasseneigenschaften](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse hat ihre eigene Kopie der Methode, was den Speicherverbrauch erhöht. Verwenden Sie es nur, wo es absolut notwendig ist. Sie können auch die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als Getter, der eine gebundene Funktion zurückgibt, wenn sie aufgerufen wird und speichert sie, sodass die Funktion nur einmal erstellt und nur bei Bedarf erstellt wird.

### this in with-Anweisungen

Obwohl [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungen veraltet sind und im strengen Modus nicht verfügbar sind, dienen sie immer noch als Ausnahme zu den normalen `this`-Bindungsregeln. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Umfangsobjekts ist, wird der `this`-Wert an das Umfangsobjekt gebunden, als ob das Präfix `obj.` existiert.

```js
const obj = {
  foo() {
    return this;
  },
};

with (obj) {
  console.log(foo() === obj); // true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("globalThis")}}
