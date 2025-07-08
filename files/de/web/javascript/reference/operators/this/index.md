---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Das Schlüsselwort **`this`** bezieht sich auf den Kontext, in dem ein Stück Code, wie der Körper einer Funktion, ausgeführt werden soll. Normalerweise wird es in Objektmethoden verwendet, wo `this` auf das Objekt verweist, an das die Methode angehängt ist, wodurch dieselbe Methode auf verschiedenen Objekten wiederverwendet werden kann.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (Laufzeit-{{Glossary("binding", "Bindung")}}), nicht wie sie definiert ist. Wenn eine normale Funktion als Methode eines Objekts (`obj.method()`) aufgerufen wird, zeigt `this` auf dieses Objekt. Wenn sie als eigenständige Funktion aufgerufen wird (nicht an ein Objekt angehängt: `func()`), bezieht sich `this normalerweise auf das {{Glossary("Global_object", "globale Objekt")}} (im Nicht-Strikten Modus) oder auf `undefined`(im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erstellen, deren`this`-Bindung sich nicht ändert, und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können ebenfalls den `this`-Wert für einen bestimmten Aufruf setzen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in ihrem Umgang mit `this`: Sie übernehmen `this` vom Elternkontext zu dem Zeitpunkt, an dem sie definiert werden. Dieses Verhalten macht Arrow-Funktionen besonders nützlich für Rückruf-Funktionen und die Bewahrung des Kontexts. Allerdings haben Arrow-Funktionen keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch `bind()`, `apply()` oder `call()`-Methoden gesetzt werden, noch verweist es in Objektmethoden auf das aktuelle Objekt.

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

Im Nicht-Strikten Modus ist `this` stets eine Referenz auf ein Objekt. Im Strikten Modus kann es jeden Wert annehmen. Für weitere Informationen darüber, wie der Wert bestimmt wird, siehe die untenstehende Beschreibung.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Betrachten Sie `this` als einen versteckten Parameter einer Funktion — genau wie die Parameter, die in der Funktionsdefinition deklariert sind, ist `this` eine Bindung, die die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Für eine normale Funktion (keine Arrow-Funktion, gebundene Funktion, etc.) ist der Wert von `this` das Objekt, auf das zugegriffen wird. Mit anderen Worten, wenn der Funktionsaufruf die Form `obj.f()` hat, dann bezieht sich `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, dass die Funktion dieselbe ist, aber der Wert von `this` je nach Aufruf unterschiedlich ist. Dies ist analog zu der Funktionsweise von Funktionsparametern.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigene Eigenschaft hat, sondern das Objekt, das verwendet wird, um die Funktion aufzurufen. Dies können Sie beweisen, indem Sie eine Methode eines Objekts in der [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer je nachdem, wie eine Funktion aufgerufen wird, selbst wenn die Funktion bei der Erstellung an ein Objekt gebunden wurde:

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

Wenn der Wert, auf den die Methode zugegriffen wird, ein primitiver Wert ist, wird `this` ebenfalls ein primitiver Wert sein — aber nur, wenn die Funktion im strikten Modus ist.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wenn die Funktion aufgerufen wird, ohne dass auf etwas zugegriffen wird, wird `this` `undefined` sein — aber nur, wenn die Funktion im strikten Modus ist.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im Nicht-Strikten Modus gewährleistet ein spezieller Prozess namens [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution), dass der Wert von `this` immer ein Objekt ist. Dies bedeutet:

- Wenn eine Funktion mit `this` aufgerufen wird, das auf `undefined` oder `null` gesetzt ist, wird `this` durch {{jsxref("globalThis")}} ersetzt.
- Wenn die Funktion mit `this` aufgerufen wird, das auf einen primitiven Wert gesetzt ist, wird `this` durch das Wrapper-Objekt des primitiven Werts ersetzt.

```js
function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

Bei typischen Funktionsaufrufen wird `this` implizit wie ein Parameter durch das Präfix der Funktion (der Teil vor dem Punkt) übergeben. Sie können den Wert von `this` auch explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}}, oder {{jsxref("Reflect.apply()")}} setzen. Mit {{jsxref("Function.prototype.bind()")}}, können Sie eine neue Funktion mit einem spezifischen Wert von `this` erstellen, der sich nicht ändert, egal wie die Funktion aufgerufen wird. Bei der Verwendung dieser Methoden gelten die oben genannten `this`-Substitutionsregeln weiterhin, wenn die Funktion nicht im strikten Modus ist.

#### Rückruf-Funktionen

Wenn eine Funktion als Rückruf-Funktion übergeben wird, hängt der Wert von `this` davon ab, wie der Rückruf aufgerufen wird, was vom API-Implementierer bestimmt wird. Rückruf-Funktionen werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (indem sie direkt aufgerufen werden, ohne sie an ein Objekt zu binden), was bedeutet, dass wenn die Funktion nicht im strikten Modus ist, der Wert von `this` das globale Objekt ist ({{jsxref("globalThis")}}). Dies ist der Fall für [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), den Konstruktor [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) usw.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs erlauben es Ihnen, einen `this`-Wert für Aufrufe des Rückrufs zu setzen. Zum Beispiel akzeptieren alle iterativen Array-Methoden und verwandte Methoden wie {{jsxref("Set.prototype.forEach()")}} einen optionalen Parameter `thisArg`.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Rückruf mit einem `this`-Wert aufgerufen, der nicht `undefined` ist. Zum Beispiel werden die Parameter `reviver` von {{jsxref("JSON.parse()")}} und `replacer` von {{jsxref("JSON.stringify()")}} beide mit `this` auf das Objekt gesetzt, zu dem die Eigenschaft gehört, die geparst/serialisiert wird.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umgebenden lexikalischen Kontextes von `this`. Mit anderen Worten, beim Auswerten des Körpers einer Arrow-Funktion erstellt die Sprache keine neue `this`-Bindung.

Zum Beispiel: Im globalen Code ist `this` immer `globalThis`, unabhängig von der Strenge, wegen der [globalen Kontexte](#globaler_kontext)-Bindung:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen erstellen einen [Closure](/de/docs/Web/JavaScript/Guide/Closures) über den `this`-Wert ihres umgebenden Bereichs, was bedeutet, dass Arrow-Funktionen sich verhalten, als wären sie "automatisch gebunden" — egal wie sie aufgerufen werden, `this` ist gebunden an das, was es war, als die Funktion erstellt wurde (im obigen Beispiel das globale Objekt). Gleiches gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt wurden: ihr `this` bleibt das des umgebenden lexikalischen Kontexts. [Beispiel siehe unten](#this_in_arrow-funktionen).

Außerdem: Beim Aufrufen von Arrow-Funktionen mit `call()`, `bind()` oder `apply()`, wird der `thisArg`-Parameter ignoriert. Sie können jedoch weiterhin andere Argumente mit diesen Methoden übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wenn eine Funktion als Konstruktor (mit dem Schlüsselwort {{jsxref("Operators/new", "new")}}) verwendet wird, ist ihr `this` auf das neue Objekt gebunden, das erstellt wird, unabhängig davon, auf welchem Objekt die Konstruktorfunktion aufgerufen wird. Der Wert von `this` wird zum Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht-primiti`<span>`</span>ven Wert zurück.

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

Im zweiten Beispiel (`C2`): Da ein Objekt während der Konstruktion zurückgegeben wurde, wird das neue Objekt, an das `this` gebunden war, verworfen. (Dies macht im Wesentlichen die Anweisung `this.a = 37;` zu "toter" Code. Es ist nicht genau "tot", weil es ausgeführt wird, aber es kann ohne Auswirkungen eliminiert werden.)

#### super

Wenn eine Funktion in der Form `super.method()` aufgerufen wird, ist das `this` innerhalb der `method`-Funktion derselbe Wert wie der `this`-Wert um den `super.method()`-Aufruf herum und entspricht im Allgemeinen nicht dem Objekt, auf das `super` verweist. Dies liegt daran, dass `super.method` kein Objektzugriff ist wie die oben genannten — es ist eine spezielle Syntax mit unterschiedlichen Bindungsregeln. Beispiele dazu finden Sie in der [`super`-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte unterteilt werden: statisch und Instanz. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden, und Initialisierer von Instanzfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)) gehören zum Instanz-Kontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, statische Feldinitialisierer und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Klassenkonstruktoren werden immer mit `new` aufgerufen, daher ist ihr Verhalten dasselbe wie bei [Funktionskonstruktoren](#konstruktoren): Der `this`-Wert ist die neue Instanz, die erstellt wird. Methoden in Klassen verhalten sich wie Methoden in Objektliteralen — der `this`-Wert ist das Objekt, auf das die Methode zugegriffen wird. Wenn die Methode nicht auf ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf der Klasse aufgerufen, und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden ebenfalls mit `this` gesetzt auf die aktuelle Klasse ausgewertet.

Feldinitialisierer werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` gesetzt auf die Instanz ausgewertet, die konstruiert wird. Statische Felder werden mit `this` auf die aktuelle Klasse gesetzt ausgewertet. Deshalb sind Arrow-Funktionen in Feldinitialisierern [an die Instanz für Instanzfelder und an die Klasse für statische Felder gebunden](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

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

Im Gegensatz zu Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine anfängliche `this`-Bindung. Ein Aufruf von {{jsxref("Operators/super", "super()")}} erstellt eine `this`-Bindung innerhalb des Konstruktors und hat im Wesentlichen die gleiche Wirkung wie das Auswerten der folgenden Zeile, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Ein Verweis auf `this` vor dem Aufruf von `super()` führt zu einem Fehler.

Abgeleitete Klassen dürfen nicht zurückkehren, bevor `super()` aufgerufen wird, es sei denn, der Konstruktor gibt ein Objekt zurück (sodass der `this`-Wert überschrieben wird) oder die Klasse hat keinen Konstruktor.

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

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; möglicherweise innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen), die im globalen Bereich definiert sind) hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript ausgeführt wird. Wie bei [Rückruf-Funktionen](#rückruf-funktionen) wird der `this`-Wert durch die Laufzeitumgebung (den Aufrufer) bestimmt.

Auf der obersten Ebene eines Skripts bezieht sich `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob im strikten Modus oder nicht. Dies ist im Allgemeinen dasselbe wie das globale Objekt — zum Beispiel, wenn die Quelle in ein HTML-`<script>`-Element eingefügt wird und als Skript ausgeführt wird, gilt: `this === window`.

> [!NOTE]
> `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — dies ist der Fall für Browser und Node — aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der mit dem globalen Objekt nicht zusammenhängt.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wenn die Quelle als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen wird (für HTML bedeutet dies das Hinzufügen von `type="module"` zum `<script>`-Tag), ist `this` immer undefined auf der obersten Ebene.

Wenn die Quelle mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt wird, ist `this` dasselbe wie der umgebende Kontext für [direktes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval), oder `globalThis` (als ob es in einem separaten globalen Skript ausgeführt wird) für indirektes eval.

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

Beachten Sie, dass einige Quellcodes, die wie der globale Bereich aussehen, tatsächlich in eine Funktion eingeschlossen sind, wenn sie ausgeführt werden. Zum Beispiel werden Node.js CommonJS-Module in eine Funktion eingeschlossen und mit dem `this`-Wert auf `module.exports` gesetzt ausgeführt. [Event-Handler-Attribute](#this_in_inline-ereignishandlern) werden mit dem `this`-Wert auf das Element, an das sie angehängt sind, gesetzt ausgeführt.

Objektliterale erstellen keinen `this`-Bereich — nur Funktionen (Methoden), die innerhalb des Objekts definiert sind. Die Verwendung von `this` in einem Objektliteral erbt den Wert aus dem umgebenden Bereich.

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

Mit `call()` und `apply()` können Sie den Wert von `this` übergeben, als ob er ein expliziter Parameter wäre.

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

Im Nicht-Strikten Modus, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, wird der `this`-Wert durch ein Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive wie `7` oder `'foo'` werden in ein Objekt umgewandelt, indem der entsprechende Konstruktor verwendet wird, sodass die primitive Zahl `7` in eine {{jsxref("Number")}}-Wrapperklasse und der String `'foo'` in eine {{jsxref("String")}}-Wrapperklasse umgewandelt wird.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind() Methode

Der Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt eine neue Funktion mit demselben Körper und Bereich wie `f`, aber der Wert von `this` ist dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

Arrow-Funktionen erstellen Closures über den `this`-Wert des umgebenden Ausführungskontextes. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt, sodass ihr `this` dauerhaft an das `this` ihrer umgebenden Funktion gebunden ist. Der Wert von `this` innerhalb `getThisGetter` kann im Aufruf gesetzt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion bestimmt. Wir gehen davon aus, dass `getThisGetter` eine nicht-strikte Funktion ist, was bedeutet, dass sie in einem nicht-strikten Skript enthalten ist und nicht weiter in einer Klasse oder einer strikten Funktion verschachtelt ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen, was `this` an `obj` in ihrem Körper bindet. Die zurückgegebene Funktion wird einer Variablen `fn` zugewiesen. Nun wird beim Aufruf von `fn` der Wert von `this` immer noch derjenige sein, der durch den Aufruf von `getThisGetter` gesetzt wurde, nämlich `obj`. Wenn die zurückgegebene Funktion keine Arrow-Funktion wäre, würden solche Aufrufe den `this`-Wert `globalThis` zur Folge haben, da `getThisGetter` nicht-strikt ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber seien Sie vorsichtig, wenn Sie die Methode von `obj` ohne ihren Aufruf lösen, da `getThisGetter` immer noch eine Methode ist, die einen variierenden `this`-Wert hat. Der Aufruf von `fn2()()` in folgendem Beispiel gibt `globalThis` zurück, weil es dem `this` von `fn2()` folgt, das `globalThis` ist, da es ohne Anbindung an ein Objekt aufgerufen wird.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist sehr nützlich beim Definieren von Rückruf-Funktionen. Normalerweise erstellt jeder Funktionsausdruck seine eigene `this`-Bindung, die den `this`-Wert des oberen Bereichs überschattet. Nun können Sie Funktionen als Arrow-Funktionen definieren, wenn Ihnen der `this`-Wert egal ist, und nur `this`-Bindungen erstellen, wo Sie es tun (z. B. in Klassenmethoden). Siehe [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welches Objekt die Eigenschaft zugegriffen wird, nicht darauf, auf welchem Objekt die Eigenschaft definiert ist. Eine Funktion, die als Getter oder Setter verwendet wird, hat `this` auf das Objekt gebunden, von dem die Eigenschaft gesetzt oder abgerufen wird.

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

Wenn eine Funktion als Ereignishandler verwendet wird, ist ihr `this`-Parameter an das DOM-Element gebunden, an das der Listener angehängt ist (einige Browser befolgen diese Konvention nicht bei dynamisch mit anderen Methoden als [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügten Listenern).

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

Wenn der Code von einem Inline-[Ereignishandler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) aufgerufen wird, ist `this` an das DOM-Element gebunden, an dem der Listener angebracht ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Das obige Alert zeigt `button`. Beachten Sie jedoch, dass nur der äußere Bereich `this` auf diese Weise gebunden hat:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` gebunden (d.h. das Standardobjekt im Nicht-Strikten Modus, in dem `this` nicht im Aufruf übergeben wird).

### Gebundene Methoden in Klassen

Wie bei regulären Funktionen hängt der Wert von `this` innerhalb von Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten zu überschreiben, sodass `this` innerhalb von Klassen immer auf die Klasseninstanz verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

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
> Klassen sind immer im strikten Modus. Das Aufrufen von Methoden mit einem nicht definierten `this` führt zu einem Fehler, wenn die Methode versucht, auf Eigenschaften von `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError weil die 'sayHi'-Methode versucht, auf 'this.name' zuzugreifen, aber 'this' im strikten Modus nicht definiert ist.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden das gleiche Problem haben wie [die Verwendung von Arrow-Funktionen für Klassen-Eigenschaften](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse hat ihr eigenes Exemplar der Methode, was den Speicherverbrauch erhöht. Verwenden Sie es nur, wo absolut notwendig. Sie können auch die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als Getter, der eine gebundene Funktion zurückgibt, wenn sie aufgerufen wird und speichert sie, sodass die Funktion nur einmal erstellt wird und nur bei Bedarf erstellt wird.

### this in with-Anweisungen

Obwohl [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungen veraltet sind und im strikten Modus nicht verfügbar sind, dienen sie dennoch als Ausnahme von den normalen `this`-Bindungsregeln. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Bereichsobjekts ist, wird der `this`-Wert an das Bereichsobjekt gebunden, als ob das Präfix `obj1.` existiert.

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
