---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Das Schlüsselwort **`this`** bezieht sich auf den Kontext, in dem ein Stück Code, wie der Körper einer Funktion, ausgeführt werden soll. Es wird am häufigsten in Objektmethoden verwendet, wo `this` auf das Objekt verweist, an das die Methode angehängt ist, und es somit ermöglicht, dieselbe Methode auf verschiedenen Objekten wiederzuverwenden.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (Laufzeit-{{Glossary("binding", "Bindung")}}), nicht wie sie definiert ist. Wenn eine reguläre Funktion als Methode eines Objekts aufgerufen wird (`obj.method()`), zeigt `this` auf dieses Objekt. Wenn sie als eigenständige Funktion aufgerufen wird (nicht an ein Objekt gebunden: `func()`), verweist `this` typischerweise auf das {{Glossary("Global_object", "globale Objekt")}} (im nicht-strikten Modus) oder ist `undefined` (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erstellen, deren `this`-Bindung sich nicht ändert, und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können den `this`-Wert für einen bestimmten Aufruf festlegen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in ihrer Handhabung von `this`: Sie erben `this` vom übergeordneten Gültigkeitsbereich zum Zeitpunkt ihrer Definition. Dieses Verhalten macht Arrow-Funktionen besonders nützlich für Callbacks und zur Wahrung des Kontextes. Allerdings haben Arrow-Funktionen keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch `bind()`, `apply()` oder `call()`-Methoden gesetzt werden und verweist in Objektmethoden auch nicht auf das aktuelle Objekt.

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

Im nicht-strikten Modus ist `this` immer eine Referenz auf ein Objekt. Im strikten Modus kann es jeden Wert haben. Weitere Informationen dazu, wie der Wert bestimmt wird, finden Sie in der nachfolgenden Beschreibung.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Betrachten Sie `this` als einen versteckten Parameter einer Funktion — genau wie die Parameter, die in der Funktionsdefinition deklariert sind, ist `this` eine Bindung, die die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Für eine reguläre Funktion (keine Arrow-Funktion, gebundene Funktion usw.) ist der Wert von `this` das Objekt, auf dem die Funktion aufgerufen wird. Mit anderen Worten, wenn der Funktionsaufruf in der Form `obj.f()` ist, dann bezieht sich `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, wie die Funktion dieselbe ist, aber je nachdem, wie sie aufgerufen wird, der Wert von `this` unterschiedlich ist. Dies ist analog zu der Funktionsweise von Parametern.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigene Eigenschaft hat, sondern das Objekt, das verwendet wird, um die Funktion aufzurufen. Sie können dies beweisen, indem Sie eine Methode eines Objekts in der [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer basierend darauf, wie eine Funktion aufgerufen wird, selbst wenn die Funktion bei der Erstellung an ein Objekt gebunden war:

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

Wenn der Wert, auf dem die Methode aufgerufen wird, ein primitiver Wert ist, wird `this` ebenfalls ein primitiver Wert sein — aber nur, wenn die Funktion im strikten Modus ist.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wenn die Funktion ohne Bezug auf irgendetwas aufgerufen wird, ist `this` `undefined` — aber nur, wenn die Funktion im strikten Modus ist.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im nicht-strikten Modus sorgt ein spezieller Prozess namens [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) dafür, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

- Wenn eine Funktion mit `this` aufgerufen wird, das auf `undefined` oder `null` gesetzt ist, wird `this` mit {{jsxref("globalThis")}} ersetzt.
- Wenn die Funktion mit `this` aufgerufen wird, das auf einen primitiven Wert gesetzt ist, wird `this` mit dem entsprechenden Wrapper-Objekt des primitiven Wertes ersetzt.

```js
function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

In typischen Funktionsaufrufen wird `this` implizit wie ein Parameter durch das Präfix der Funktion übergeben (der Teil vor dem Punkt). Sie können den Wert von `this` auch explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} oder {{jsxref("Reflect.apply()")}} festlegen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem bestimmten Wert von `this` erstellen, der sich unabhängig davon, wie die Funktion aufgerufen wird, nicht ändert. Bei der Verwendung dieser Methoden gelten die oben genannten Regeln zur `this`-Substitution weiterhin, wenn die Funktion nicht im strikten Modus ist.

#### Callbacks

Wenn eine Funktion als Callback übergeben wird, hängt der Wert von `this` davon ab, wie der Callback aufgerufen wird, was vom Implementor der API bestimmt wird. Callbacks werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (direktes Aufrufen ohne Anknüpfung an ein Objekt), was bedeutet, dass der Wert von `this` das globale Objekt ist ({{jsxref("globalThis")}}), wenn die Funktion nicht im strikten Modus ist. Dies ist der Fall bei [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), dem [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor usw.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs erlauben es Ihnen, einen `this`-Wert für die Aufrufe des Callbacks festzulegen. Zum Beispiel akzeptieren alle iterativen Array-Methoden und verwandte wie {{jsxref("Set.prototype.forEach()")}} einen optionalen `thisArg`-Parameter.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Callback mit einem `this`-Wert aufgerufen, der nicht `undefined` ist. Zum Beispiel werden der `reviver`-Parameter von {{jsxref("JSON.parse()")}} und der `replacer`-Parameter von {{jsxref("JSON.stringify()")}} beide mit `this` auf das Objekt gesetzt, zu dem die zu parsende/zu serialisierende Eigenschaft gehört.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umgebenden lexikalischen Kontextes bei. Mit anderen Worten, beim Auswerten des Körpers einer Arrow-Funktion erstellt die Sprache keine neue `this`-Bindung.

Zum Beispiel ist in globalem Code `this` immer `globalThis`, unabhängig vom Striktheitsgrad, aufgrund der [globalen Kontexte](#globaler_kontext)-Bindung:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen erstellen eine [Closure](/de/docs/Web/JavaScript/Guide/Closures) über den `this`-Wert ihres umgebenden Gültigkeitsbereichs, was bedeutet, dass Arrow-Funktionen sich verhalten, als wären sie "automatisch gebunden" — egal wie sie aufgerufen werden, `this` ist an das gebunden, was es war, als die Funktion erstellt wurde (im obigen Beispiel das globale Objekt). Dasselbe gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt werden: Ihr `this` bleibt das des umgebenden lexikalischen Kontextes. [Siehe Beispiel unten](#this_in_arrow-funktionen).

Darüber hinaus wird beim Aufrufen von Arrow-Funktionen mit `call()`, `bind()` oder `apply()` der `thisArg`-Parameter ignoriert. Sie können jedoch weiterhin andere Argumente mit diesen Methoden übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wenn eine Funktion als Konstruktor verwendet wird (mit dem Schlüsselwort {{jsxref("Operators/new", "new")}}), ist `this` an das neue Objekt gebunden, das erstellt wird, unabhängig von dem Objekt, auf dem die Konstruktorfunktion aufgerufen wird. Der Wert von `this` wird der Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht-primitiven Wert zurück.

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

Im zweiten Beispiel (`C2`) wird das neue Objekt, an das `this` gebunden war, verworfen, weil ein Objekt während der Erstellung zurückgegeben wurde. (Dies macht die Anweisung `this.a = 37;` im Wesentlichen zu totem Code. Es ist nicht genau tot, weil es ausgeführt wird, aber es kann ohne äußere Effekte eliminiert werden.)

#### super

Wenn eine Funktion in der Form `super.method()` aufgerufen wird, ist `this` innerhalb der `method`-Funktion der gleiche Wert wie der `this`-Wert um den `super.method()`-Aufruf, und ist im Allgemeinen nicht gleich dem Objekt, auf das `super` verweist. Dies liegt daran, dass `super.method` kein Objektmitgliedszugriff wie die oben genannten ist — es ist eine spezielle Syntax mit anderen Bindungsregeln. Für Beispiele siehe die [super-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte unterteilt werden: statisch und instanziiert. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Initialisierer für Instanzfelder ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)) gehören zum Instanzkontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, Initialisierer für statische Felder und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Konstruktormethoden werden immer mit `new` aufgerufen, sodass ihr Verhalten dem von [Funktionskonstruktoren](#konstruktoren) entspricht: Der `this`-Wert ist die neue Instanz, die erstellt wird. Klassenmethoden verhalten sich wie Methoden in Objektliteralen — der `this`-Wert ist das Objekt, auf dem die Methode aufgerufen wurde. Wenn die Methode nicht an ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf der Klasse aufgerufen, und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden ebenfalls mit `this` auf die aktuelle Klasse gesetzt ausgewertet.

Initialisierer für Felder werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` auf die Instanz gesetzt, die erstellt wird, ausgewertet. Statische Felder werden mit `this` auf die aktuelle Klasse gesetzt ausgewertet. Deshalb sind Arrow-Funktionen in Feldinitialisierern [an die Instanz für Instanzfelder und an die Klasse für statische Felder gebunden](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

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

Im Gegensatz zu Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine initiale `this`-Bindung. Der Aufruf von {{jsxref("Operators/super", "super()")}} erstellt eine `this`-Bindung innerhalb des Konstruktors und hat im Wesentlichen die Wirkung, die folgende Codezeile auszuwerten, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Ein Verweis auf `this` vor dem Aufruf von `super()` führt zu einem Fehler.

Abgeleitete Klassen dürfen nicht vor dem Aufruf von `super()` zurückkehren, es sei denn, der Konstruktor gibt ein Objekt zurück (sodass der `this`-Wert überschrieben wird) oder die Klasse hat keinen Konstruktor.

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

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; kann in [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen) definiert im globalen Gültigkeitsbereich liegen) hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript ausgeführt wird. Wie bei [Callbacks](#callbacks) wird der `this`-Wert von der Laufzeitumgebung (dem Aufrufer) bestimmt.

Auf der obersten Ebene eines Skripts bezieht sich `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob im strikten Modus oder nicht. Dies ist im Allgemeinen dasselbe wie das globale Objekt — wenn der Quelltext beispielsweise in einem HTML-`<script>`-Element eingeschlossen und als Skript ausgeführt wird, ist `this === window`.

> [!NOTE]
> `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — dies ist der Fall für Browser und Node — aber es ist den Hosts erlaubt, einen anderen Wert für `globalThis` bereitzustellen, der nicht mit dem globalen Objekt in Zusammenhang steht.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wenn die Quelle als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen wird (für HTML bedeutet dies das Hinzufügen von `type="module"` zum `<script>`-Tag), ist `this` immer `undefined` auf der obersten Ebene.

Wenn der Quellcode mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt wird, ist `this` dasselbe wie der umgebende Kontext für [direktes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval), oder `globalThis` (als ob es in einem separaten globalen Skript ausgeführt wird) für indirektes eval.

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

Beachten Sie, dass ein Teil des Quellcodes, obwohl er wie der globale Bereich aussieht, tatsächlich in eine Funktion eingeschlossen ist, wenn er ausgeführt wird. Beispielsweise werden Node.js CommonJS-Module in eine Funktion eingeschlossen und mit dem `this`-Wert `module.exports` ausgeführt. [Ereignishandlerattribute](#this_in_inline-ereignishandlern) werden mit `this` auf das Element gesetzt, an das sie angehängt sind.

Objektliterale erstellen keinen `this`-Gültigkeitsbereich — nur innerhalb des Objekts definierte Funktionen (Methoden) tun das. Die Verwendung von `this` in einem Objektliteral erbt den Wert vom umgebenden Gültigkeitsbereich.

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

Mit `call()` und `apply()` können Sie den Wert von `this` übergeben, als ob es ein expliziter Parameter wäre.

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

Im nicht-strikten Modus, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, wird der `this`-Wert mit einem Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive wie `7` oder `'foo'` werden zu einem Objekt unter Verwendung des zugehörigen Konstruktors konvertiert, sodass die primitive Zahl `7` zu einer {{jsxref("Number")}}-Wrapper-Klasse und der String `'foo'` zu einer {{jsxref("String")}}-Wrapper-Klasse werden.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind()-Methode

Der Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt eine neue Funktion mit dem gleichen Körper und Gültigkeitsbereich wie `f`, aber der Wert von `this` ist dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

Arrow-Funktionen erstellen Closures über den `this`-Wert des umgebenden Ausführungskontextes. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt, sodass ihr `this` dauerhaft an das `this` ihrer umgebenden Funktion gebunden ist. Der Wert von `this` innerhalb `getThisGetter` kann im Aufruf festgelegt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion festlegt. Wir nehmen an, dass `getThisGetter` eine nicht-strikte Funktion ist, was bedeutet, dass sie in einem nicht-strikten Skript enthalten ist und nicht weiter in einer Klasse oder strikten Funktion verschachtelt ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen, was `this` an `obj` innerhalb seines Körpers bindet. Die zurückgegebene Funktion wird einer Variablen `fn` zugewiesen. Wenn wir nun `fn` aufrufen, bleibt der Wert von `this` der, der durch den Aufruf von `getThisGetter` festgelegt wurde, also `obj`. Wäre die zurückgegebene Funktion keine Arrow-Funktion gewesen, würden solche Aufrufe dazu führen, dass der `this`-Wert `globalThis` wäre, weil `getThisGetter` nicht-strikt ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber seien Sie vorsichtig, wenn Sie die Methode von `obj` ohne sie aufzurufen lösen, da `getThisGetter` noch eine Methode mit einem variierenden `this`-Wert ist. Der Aufruf von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, weil es dem `this` von `fn2()` folgt, welches `globalThis` ist, da es ohne Verbindung zu einem Objekt aufgerufen wird.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist sehr nützlich beim Definieren von Callbacks. Normalerweise erstellt jeder Funktionsausdruck seine eigene `this`-Bindung, die den `this`-Wert des oberen Bereichs überschattet. Jetzt können Sie Funktionen als Arrow-Funktionen definieren, wenn Ihnen der `this`-Wert egal ist, und `this`-Bindungen nur dort erstellen, wo Sie es tun (z.B. in Klassenmethoden). Siehe [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welchem Objekt die Eigenschaft aufgerufen wird, nicht auf welchem Objekt die Eigenschaft definiert ist. Eine Funktion, die als Getter oder Setter verwendet wird, hat ihr `this` an das Objekt gebunden, von dem die Eigenschaft gesetzt oder abgerufen wird.

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

Wenn eine Funktion als Ereignishandler verwendet wird, ist ihr `this`-Parameter an das DOM-Element gebunden, auf dem der Listener platziert ist (einige Browser halten sich nicht an diese Konvention bei Listeners, die dynamisch mit anderen Methoden als [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt werden).

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

Wenn der Code von einem Inline-[Ereignishandler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) aufgerufen wird, ist `this` an das DOM-Element gebunden, auf dem der Listener platziert ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Die obige Benachrichtigung zeigt `button`. Beachten Sie jedoch, dass nur der äußere Gültigkeitsbereich auf diese Weise sein `this` gebunden hat:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` gebunden (d.h. das Standardobjekt im nicht-strikten Modus, bei dem `this` im Aufruf nicht übergeben wird).

### Gebundene Methoden in Klassen

Wie bei regulären Funktionen hängt der `this`-Wert innerhalb von Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten zu überschreiben, sodass `this` innerhalb von Klassen immer auf die Klasseninstanz verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

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
> Klassen sind immer im strikten Modus. Das Aufrufen von Methoden mit einem undefinierten `this` führt zu einem Fehler, wenn die Methode versucht, auf Eigenschaften auf `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError, weil die 'sayHi'-Methode versucht, 'this.name' zuzugreifen, aber 'this' ist im strikten Modus undefiniert.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden dasselbe Problem haben wie [die Verwendung von Arrow-Funktionen für Klassenmethoden](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse wird ihre eigene Kopie der Methode haben, was den Speicherverbrauch erhöht. Verwenden Sie dies nur, wenn es absolut notwendig ist. Sie können auch die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als Getter, der eine gebundene Funktion zurückgibt, wenn sie aufgerufen wird, und speichern Sie sie, sodass die Funktion nur einmal und nur bei Bedarf erstellt wird.

### this in with-Anweisungen

Obwohl [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungen veraltet und im strikten Modus nicht verfügbar sind, bilden sie weiterhin eine Ausnahme von den normalen `this`-Bindungsregeln. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Gültigkeitsbereich-Objekts ist, wird der `this`-Wert an das Gültigkeitsbereich-Objekt gebunden, als ob das `obj.`-Präfix existiert.

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
