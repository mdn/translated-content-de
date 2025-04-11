---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{jsSidebar("Operators")}}

Das Schlüsselwort **`this`** bezieht sich auf den Kontext, in dem ein Codeabschnitt, wie der Körper einer Funktion, ausgeführt werden soll. Es wird typischerweise in Objektmethoden verwendet, wo `this` auf das Objekt verweist, an das die Methode gebunden ist, was die Widerverwendung der gleichen Methode auf unterschiedlichen Objekten ermöglicht.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (Laufzeit-{{Glossary("binding", "Binding")}}), nicht wie sie definiert ist. Wenn eine reguläre Funktion als Methode eines Objekts aufgerufen wird (`obj.method()`), zeigt `this` auf dieses Objekt. Wenn sie als eigenständige Funktion aufgerufen wird (nicht an ein Objekt gebunden: `func()`), verweist `this` typischerweise auf das {{Glossary("Global_object", "globale Objekt")}} (im Nicht-strikten Modus) oder `undefined` (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erzeugen, deren `this`-Bindung sich nicht ändert und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können ebenfalls den `this`-Wert für einen bestimmten Aufruf festlegen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in ihrer Handhabung von `this`: Sie erben `this` vom übergeordneten Gültigkeitsbereich zum Zeitpunkt ihrer Definition. Dieses Verhalten macht Arrow-Funktionen besonders nützlich für Rückrufe und die Erhaltung des Kontexts. Allerdings haben Arrow-Funktionen keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch `bind()`, `apply()` oder `call()`-Methoden festgelegt werden, noch zeigt er in Objektmethoden auf das aktuelle Objekt.

{{InteractiveExample("JavaScript Demo: this expression")}}

```js interactive-example
const test = {
  prop: 42,
  func: function () {
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

Im Nicht–strikten Modus ist `this` immer eine Referenz auf ein Objekt. Im strikten Modus kann es jeden Wert annehmen. Für weitere Informationen darüber, wie der Wert bestimmt wird, lesen Sie die untenstehende Beschreibung.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Stellen Sie sich `this` als einen versteckten Parameter einer Funktion vor — genau wie die Parameter, die in der Funktionsdefinition deklariert sind, ist `this` ein Binding, das die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Für eine normale Funktion (keine Arrow-Funktion, gebundene Funktion usw.) ist der Wert von `this` das Objekt, auf dem die Funktion aufgerufen wird. Anders ausgedrückt: Wenn der Funktionsaufruf in der Form `obj.f()` erfolgt, dann bezieht sich `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, wie die Funktion die gleiche ist, aber basierend darauf, wie sie aufgerufen wird, der Wert von `this` unterschiedlich ist. Dies ist analog dazu, wie Funktionsparameter funktionieren.

Der Wert von `this` ist nicht das Objekt, das die Funktion als Eigenes-Eigentum hat, sondern das Objekt, das zum Aufrufen der Funktion verwendet wurde. Sie können dies beweisen, indem Sie eine Methode eines Objekts weiter oben in der [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer basierend darauf, wie eine Funktion aufgerufen wird, auch wenn die Funktion bei der Erstellung auf einem Objekt definiert wurde:

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

Wenn die Funktion aufgerufen wird, ohne auf irgendetwas zuzugreifen, wird `this` `undefined` sein — aber nur, wenn die Funktion im strikten Modus ist.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im Nicht-strikten Modus sorgt ein spezieller Prozess namens [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) dafür, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

- Wenn eine Funktion mit `this`, das auf `undefined` oder `null` gesetzt ist, aufgerufen wird, wird `this` durch {{jsxref("globalThis")}} ersetzt.
- Wenn die Funktion mit `this`, das auf einen primitiven Wert gesetzt ist, aufgerufen wird, wird `this` durch das Wrapper-Objekt des primitiven Werts ersetzt.

```js
function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

In typischen Funktionsaufrufen wird `this` implizit wie ein Parameter durch das Präfix der Funktion (der Teil vor dem Punkt) übergeben. Sie können den Wert von `this` auch explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}}, oder {{jsxref("Reflect.apply()")}} festlegen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem bestimmten Wert von `this` erstellen, der sich nicht ändert, unabhängig davon, wie die Funktion aufgerufen wird. Bei der Verwendung dieser Methoden gelten die oben genannten `this`-Substitutionsregeln weiterhin, wenn die Funktion nicht im strikten Modus ist.

#### Rückrufe

Wenn eine Funktion als Rückruf übergeben wird, hängt der Wert von `this` davon ab, wie der Rückruf aufgerufen wird, was vom Implementierer der API bestimmt wird. Rückrufe werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (direkt aufgerufen, ohne es an ein Objekt zu binden), was bedeutet, wenn die Funktion nicht im strikten Modus ist, ist der Wert von `this` das globale Objekt ({{jsxref("globalThis")}}). Dies trifft beispielsweise auf [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), den [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor usw. zu.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs erlauben es Ihnen, einen `this`-Wert für die Aufrufe des Rückrufs festzulegen. Beispielsweise akzeptieren alle iterativen Array-Methoden und ähnliche Methoden wie {{jsxref("Set.prototype.forEach()")}} einen optionalen `thisArg`-Parameter.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Rückruf mit einem `this`-Wert, der nicht `undefined` ist, aufgerufen. Zum Beispiel werden der `reviver`-Parameter von {{jsxref("JSON.parse()")}} und der `replacer`-Parameter von {{jsxref("JSON.stringify()")}} beide mit `this` auf das Objekt gesetzt, zu dem die zu parsende/serialisierende Eigenschaft gehört.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umgebenden lexikalischen Kontexts. Mit anderen Worten: Wenn der Körper einer Arrow-Funktion ausgewertet wird, erstellt die Sprache keine neue `this`-Bindung.

Zum Beispiel ist im globalen Code `this` immer `globalThis`, unabhängig von der Striktheit, aufgrund des [globalen Kontexts](#globaler_kontext) Bindung:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen erstellen eine [Schließung](/de/docs/Web/JavaScript/Guide/Closures) über den `this`-Wert ihres umgebenden Gültigkeitsbereichs, was bedeutet, dass Arrow-Funktionen so funktionieren, als wären sie "automatisch gebunden" — egal wie sie aufgerufen werden, `this` ist an das gebunden, was es war, als die Funktion erstellt wurde (im obigen Beispiel das globale Objekt). Das gleiche gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt werden: ihr `this` bleibt das des umgebenden lexikalischen Kontexts. [Siehe Beispiel unten](#this_in_arrow-funktionen).

Darüber hinaus wird der `thisArg`-Parameter beim Aufrufen von Arrow-Funktionen mit `call()`, `bind()` oder `apply()` ignoriert. Sie können jedoch weiterhin andere Argumente mit diesen Methoden übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wird eine Funktion als Konstruktor (mit dem Schlüsselwort {{jsxref("Operators/new", "new")}}) verwendet, ist `this` an das neue Objekt gebunden, das konstruiert wird, unabhängig davon, auf welchem Objekt die Konstruktorfunktion aufgerufen wird. Der Wert von `this` wird der Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht-primitiven Wert zurück.

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

Im zweiten Beispiel (`C2`), weil während der Konstruktion ein Objekt zurückgegeben wurde, wird das neue Objekt, an das `this` gebunden war, verworfen. (Dies macht im Wesentlichen die Anweisung `this.a = 37;` zu totem Code. Es ist nicht genau tot, weil es ausgeführt wird, aber es kann ohne äußere Effekte eliminiert werden.)

#### super

Wird eine Funktion in der Form `super.method()` aufgerufen, ist das `this` innerhalb der `method`-Funktion der gleiche Wert wie der `this`-Wert um den `super.method()`-Aufruf herum und ist im Allgemeinen nicht gleich dem Objekt, auf das `super` verweist. Dies liegt daran, dass `super.method` kein Objektmitgliederzugriff wie die oben genannten ist - es handelt sich um eine spezielle Syntax mit unterschiedlichen Bindungsregeln. Beispiele hierzu finden Sie in der [`super`-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte aufgeteilt werden: statisch und instanziell. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Initialisierer für Instanzfelder ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) gehören zum instanziellen Kontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, statische Initialisierungen, und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Klassenkonstruktoren werden immer mit `new` aufgerufen, daher ist ihr Verhalten das gleiche wie bei [Funktionenkonstruktoren](#konstruktoren): Der `this`-Wert ist die neue Instanz, die erstellt wird. Klassenmethoden verhalten sich wie Methoden in Objektliteralen – der `this`-Wert ist das Objekt, auf dem die Methode aufgerufen wurde. Wenn die Methode nicht auf ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf der Klasse aufgerufen, und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden ebenfalls mit `this` gesetzt auf die aktuelle Klasse ausgewertet.

Feldinitialisierer werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this`, gesetzt auf die zu konstruierende Instanz, ausgewertet. Statische Felder werden mit `this`, gesetzt auf die aktuelle Klasse, ausgewertet. Dies erklärt, warum Arrow-Funktionen in Feldinitialisierern [an die Instanz für Instanzfelder und an die Klasse für statische Felder gebunden sind](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

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

Anders als Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine anfängliche `this`-Bindung. Ein Aufruf von {{jsxref("Operators/super", "super()")}} erstellt eine `this`-Bindung innerhalb des Konstruktors und hat im Wesentlichen die Wirkung, die folgende Codezeile zu evaluieren, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Wenn auf `this` verwiesen wird, bevor `super()` aufgerufen wird, wird ein Fehler ausgelöst.

Abgeleitete Klassen dürfen nicht zurückkehren, bevor `super()` aufgerufen wird, es sei denn, der Konstruktor gibt ein Objekt zurück (sodass der `this`-Wert überschrieben wird) oder die Klasse hat überhaupt keinen Konstruktor.

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

Im globalen Ausführungskontext (außerhalb jeglicher Funktionen oder Klassen; möglicherweise innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen), die im globalen Geltungsbereich definiert sind), hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript läuft. Ähnlich wie bei [Rückrufen](#rückrufe) wird der `this`-Wert von der Laufzeitumgebung bestimmt (dem Aufrufer).

Auf der obersten Ebene eines Skripts verweist `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob im strikten Modus oder nicht. Dies entspricht im Allgemeinen dem globalen Objekt – beispielsweise zeigt, wenn der Quellcode in ein HTML-`<script>`-Element eingebettet und als Skript ausgeführt wird, `this === window`.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) – dies trifft auf Browser und Node zu – aber Hosts dürfen für `globalThis` einen anderen Wert bereitstellen, der nicht mit dem globalen Objekt in Zusammenhang steht.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wenn der Quellcode als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen wird (für HTML bedeutet dies, `type="module"` zum `<script>`-Tag hinzuzufügen), ist `this` auf oberster Ebene immer `undefined`.

Wenn der Quellcode mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt wird, ist `this` dasselbe wie der umschließende Kontext für [direktes Eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval), oder `globalThis` (als ob es in einem separaten globalen Skript ausgeführt wird) für indirektes Eval.

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

Beachten Sie, dass einige Quellcodes, obwohl sie wie der globale Bereich aussehen, tatsächlich in einer Funktion ausgeführt werden. Beispielsweise werden Node.js CommonJS-Module in eine Funktion eingeschlossen und mit dem `this`-Wert, gesetzt auf `module.exports`, ausgeführt. [Ereignishandlereigenschaften](#this_in_inline-ereignishandlern) werden mit `this`, gesetzt auf das Element, an das sie gebunden sind, ausgeführt.

Objektliterale erzeugen keinen `this`-Gültigkeitsbereich – nur innerhalb des Objekts definierte Funktionen (Methoden) tun dies. Die Verwendung von `this` innerhalb eines Objektliterals erbt den Wert aus dem umliegenden Gültigkeitsbereich.

```js
const obj = {
  a: this,
};

console.log(obj.a === window); // true
```

## Beispiele

### this in Funktionskontexten

Der Wert des `this`-Parameters hängt davon ab, wie die Funktion aufgerufen wird, nicht von ihrer Definition.

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

Mit `call()` und `apply()` können Sie den Wert von `this` als expliziten Parameter übergeben.

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

### this und Objektkonversion

Im Nicht–strikten Modus, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, wird der `this`-Wert durch ein Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive Werte wie `7` oder `'foo'` werden in ein Objekt umgewandelt, indem der zugehörige Konstruktor verwendet wird, sodass die primitive Zahl `7` in eine {{jsxref("Number")}}-Wrapper-Klasse und der String `'foo'` in eine {{jsxref("String")}}-Wrapper-Klasse umgewandelt wird.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind()-Methode

Ein Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt eine neue Funktion mit demselben Funktionstext und derselben Funktionsempfehlung wie `f`, jedoch wird der Wert von `this` dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

Arrow-Funktionen erstellen Schließungen über den `this`-Wert ihres umgebenden Ausführungskontexts. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt, sodass ihr `this` dauerhaft an das `this` ihrer umgebenden Funktion gebunden ist. Der Wert von `this` innerhalb von `getThisGetter` kann im Aufruf festgelegt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion festlegt. Wir gehen davon aus, dass `getThisGetter` eine nicht-strikte Funktion ist, was bedeutet, dass es in einem nicht-strikten Skript enthalten ist und nicht weiter in einer Klasse oder strikten Funktion eingebettet ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen, was `this` in seinem Körper an `obj` bindet. Die zurückgegebene Funktion wird einer Variablen `fn` zugewiesen. Wenn nun `fn` aufgerufen wird, bleibt der Wert von `this` immer noch derjenige, der durch den Aufruf von `getThisGetter` festgelegt wurde, nämlich `obj`. Wenn die zurückgegebene Funktion keine Arrow-Funktion wäre, würde dies dazu führen, dass der `this`-Wert `globalThis` ist, da `getThisGetter` nicht strikt ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber Vorsicht, wenn Sie die Methode von `obj` ohne sie aufzurufen binden, denn `getThisGetter` ist immer noch eine Methode, die einen variierenden `this`-Wert hat. Ein Aufruf von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, weil es dem `this` von `fn2()` folgt, das `globalThis` ist, da es aufgerufen wird, ohne an ein Objekt gebunden zu sein.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist bei der Definition von Rückrufen sehr nützlich. Normalerweise erstellt jeder Funktionsausdruck seine ein eigenes `this`-Binding, das den `this`-Wert des übergeordneten Bereichs überschattet. Jetzt können Sie Funktionen als Arrow-Funktionen definieren, wenn Ihnen der `this`-Wert egal ist, und `this`-Bindings nur dort erstellen, wo es Ihnen wichtig ist (z.B. in Klassenmethoden). Siehe [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welchem Objekt die Eigenschaft zugegriffen wird, nicht auf welchem Objekt die Eigenschaft definiert ist. Eine als Getter oder Setter verwendete Funktion hat ihr `this` an das Objekt gebunden, von dem die Eigenschaft festgelegt oder abgerufen wird.

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

Wenn eine Funktion als Ereignishandler verwendet wird, wird ihr `this`-Parameter an das DOM-Element gebunden, auf dem der Listener platziert ist (einige Browser halten sich nicht an diese Konvention für Listener, die dynamisch mit anderen Methoden als [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt werden).

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

Wenn der Code von einem Inline-[Ereignishandlereigenschaft](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) aufgerufen wird, ist `this` an das DOM-Element gebunden, auf dem der Listener platziert ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Der obige Alert zeigt `button`. Beachten Sie jedoch, dass nur der äußere Bereich auf diese Weise gebunden ist:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` gebunden (d.h. das Standardobjekt im nicht-strikten Modus, wo `this` im Aufruf nicht übergeben wird).

### Gebundene Methoden in Klassen

Genau wie bei regulären Funktionen hängt der Wert von `this` innerhalb von Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten zu überschreiben, sodass `this` innerhalb von Klassen immer auf die Klasseninstanz verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

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
> Klassen sind immer im strikten Modus. Das Aufrufen von Methoden mit einem undefinierten `this`-Wert führt zu einem Fehler, wenn die Methode versucht, auf Eigenschaften von `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError, weil die 'sayHi'-Methode versucht, auf 'this.name' zuzugreifen, aber 'this' im strikten Modus undefiniert ist.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden das gleiche Problem haben wie [die Verwendung von Arrow-Funktionen für Klassen-Eigenschaften](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse wird ihre eigene Kopie der Methode haben, was den Speicherverbrauch erhöht. Verwenden Sie es nur, wo es absolut notwendig ist. Sie können auch die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als Getter, der eine gebundene Funktion zurückgibt, wenn sie zugegriffen wird, und speichern Sie sie, sodass die Funktion nur einmal erstellt wird und nur erstellt wird, wenn es notwendig ist.

### this in with-Anweisungen

Obwohl [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Anweisungen veraltet sind und im strikten Modus nicht verfügbar sind, dienen sie immer noch als Ausnahme zu den normalen `this`-Bindungsregeln. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Gültigkeitsbereichs-Objekts ist, wird der `this`-Wert an das Gültigkeitsbereichs-Objekt gebunden, als ob das `obj1.` Präfix existiert.

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
