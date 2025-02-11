---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Das Schlüsselwort **`this`** verweist auf den Kontext, in dem ein Codeabschnitt, wie z. B. der Körper einer Funktion, ausgeführt werden soll. In der Regel wird es in Methoden von Objekten verwendet, wobei `this` auf das Objekt verweist, dem die Methode zugeordnet ist, und es so ermöglicht, dieselbe Methode auf verschiedenen Objekten wiederzuverwenden.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (zur Laufzeit {{Glossary("binding", "Gebundenheit")}}), nicht davon, wie sie definiert ist. Wenn eine reguläre Funktion als Methode eines Objekts aufgerufen wird (`obj.method()`), zeigt `this` auf dieses Objekt. Wird sie als eigenständige Funktion aufgerufen (nicht mit einem Objekt verbunden: `func()`), verweist `this` typischerweise auf das {{Glossary("Global_object", "globale Objekt")}} (im Nicht-Strict-Modus) oder `undefined` (im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erstellen, deren `this`-Bindung sich nicht ändert. Außerdem können die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} den `this`-Wert für einen bestimmten Aufruf festlegen.

[Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich im Umgang mit `this`: Sie erben den `this`-Wert aus dem übergeordneten Scope, in dem sie definiert wurden. Dieses Verhalten macht Arrow Functions besonders nützlich für Callbacks und bei der Kontextbewahrung. Allerdings haben Arrow Functions keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch die Methoden `bind()`, `apply()` oder `call()` gesetzt werden, noch verweist er in Objektmethoden auf das aktuelle Objekt.

{{InteractiveExample("JavaScript Demo: Expressions - this")}}

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

Im Nicht-Strict-Modus ist `this` immer eine Referenz auf ein Objekt. Im Strict-Modus kann es jeden beliebigen Wert annehmen. Weitere Informationen dazu, wie der Wert bestimmt wird, finden Sie in der Beschreibung unten.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Denken Sie an `this` als einen versteckten Parameter einer Funktion — genau wie die Parameter, die in der Funktionsdefinition deklariert sind, ist `this` eine Bindung, die von der Sprache für Sie erstellt wird, wenn der Funktionskörper ausgewertet wird.

Für eine reguläre Funktion (keine Arrow Function, gebundene Funktion usw.) ist der Wert von `this` das Objekt, auf dem die Funktion aufgerufen wird. Mit anderen Worten: Wenn der Funktionsaufruf in der Form `obj.f()` erfolgt, dann verweist `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, wie die Funktion dieselbe bleibt, aber je nach Aufruf der Wert von `this` unterschiedlich ist. Das ist analog dazu, wie Funktionsparameter funktionieren.

Der Wert von `this` ist nicht das Objekt, das die Funktion als Eigenschaft besitzt, sondern das Objekt, das verwendet wird, um die Funktion aufzurufen. Sie können dies nachweisen, indem Sie eine Methode eines Objekts in der [Prototypen-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer basierend darauf, wie eine Funktion aufgerufen wird, selbst wenn die Funktion beim Erstellen auf ein Objekt definiert wurde:

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

Wenn der Wert, auf dem die Methode aufgerufen wird, ein primitiver Wert ist, wird `this` ebenfalls ein primitiver Wert sein — jedoch nur, wenn sich die Funktion im Strict-Modus befindet.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wird die Funktion aufgerufen, ohne auf einem Objekt aufgerufen zu werden, ist `this` `undefined` — jedoch nur, wenn sich die Funktion im Strict-Modus befindet.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im Nicht-Strict-Modus sorgt ein spezieller Prozess, der [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) genannt wird, dafür, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

- Wenn eine Funktion mit `this` aufgerufen wird, das auf `undefined` oder `null` gesetzt ist, wird `this` durch {{jsxref("globalThis")}} ersetzt.
- Wenn die Funktion mit `this` aufgerufen wird, das auf einen primitiven Wert gesetzt ist, wird `this` durch das Wrapper-Objekt des primitiven Wertes ersetzt.

```js
function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

In typischen Funktionsaufrufen wird `this` implizit wie ein Parameter über das Präfix der Funktion (der Teil vor dem Punkt) übergeben. Sie können den Wert von `this` auch explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} oder {{jsxref("Reflect.apply()")}} festlegen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem spezifischen Wert von `this` erstellen, der sich unabhängig davon, wie die Funktion aufgerufen wird, nicht ändert. Wenn Sie diese Methoden verwenden, gelten jedoch weiterhin die oben beschriebenen `this`-Substitutionsregeln, falls die Funktion nicht im Strict-Modus ist.

#### Callbacks

Wenn eine Funktion als Callback übergeben wird, hängt der Wert von `this` davon ab, wie der Callback aufgerufen wird. Dies wird durch den Implementierer der API bestimmt. Callbacks werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (direkt aufgerufen, ohne an ein Objekt gebunden zu sein), was bedeutet, dass der Wert von `this` im Nicht-Strict-Modus das globale Objekt ({{jsxref("globalThis")}}) ist. Dies ist der Fall bei [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), dem Konstruktor [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) usw.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs erlauben es Ihnen, einen `this`-Wert für Aufrufe des Callbacks festzulegen. Beispielsweise akzeptieren alle iterativen Array-Methoden und verwandte wie {{jsxref("Set.prototype.forEach()")}} ein optionales `thisArg`-Parameter.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Callback mit einem anderen `this`-Wert als `undefined` aufgerufen. Zum Beispiel: Der `reviver`-Parameter von {{jsxref("JSON.parse()")}} und der `replacer`-Parameter von {{jsxref("JSON.stringify()")}} werden beide mit `this` auf das Objekt gesetzt, zu dem die zu analysierende/zu serialisierende Eigenschaft gehört.

#### Arrow Functions

In [Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umschließenden lexikalischen Kontexts bei der Definition der Funktion. Mit anderen Worten: Beim Auswerten des Körpers einer Arrow Function erstellt die Sprache keine neue Bindung für `this`.

Zum Beispiel ist `this` im globalen Code immer `globalThis`, unabhängig von der Strictness, aufgrund der [globalen Kontextbindung](#globaler_kontext):

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow Functions erstellen einen [Closure](/de/docs/Web/JavaScript/Closures) über den `this`-Wert ihres umgebenden Scopes. Das bedeutet, dass Arrow Functions sich so verhalten, als wären sie „automatisch gebunden“ — egal, wie sie aufgerufen werden, `this` bleibt an das gebunden, was es beim Erstellen der Funktion war (im obigen Beispiel das globale Objekt). Dasselbe gilt für Arrow Functions, die innerhalb anderer Funktionen erstellt werden: Ihr `this` bleibt das des umschließenden lexikalischen Kontexts. [Beispiel siehe unten](#this_in_arrow_functions).

Darüber hinaus wird der `thisArg`-Parameter bei der Verwendung von `call()`, `bind()` oder `apply()` mit Arrow Functions ignoriert. Sie können trotzdem andere Argumente mit diesen Methoden übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wird eine Funktion als Konstruktor (mit dem Schlüsselwort {{jsxref("Operators/new", "new")}}) verwendet, wird ihr `this` an das neue Objekt gebunden, das erstellt wird, unabhängig davon, auf welchem Objekt die Konstruktorfunktion zugegriffen wird. Der Wert von `this` wird zum Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen, nicht-primitiven Wert zurück.

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

Im zweiten Beispiel (`C2`), weil während der Konstruktion ein Objekt zurückgegeben wurde, wird das neue Objekt, dem `this` zugewiesen wurde, verworfen. (Dies macht die Anweisung `this.a = 37;` im Wesentlichen zu totem Code. Es ist nicht genau tot, weil es ausgeführt wird, aber es kann eliminiert werden, ohne Auswirkungen zu haben.)

#### super

Wird eine Funktion in der Form `super.method()` aufgerufen, ist das `this` innerhalb der `method`-Funktion derselbe Wert wie das `this` im umgebenden Kontext des `super.method()`-Aufrufs und ist in der Regel nicht gleich dem Objekt, auf das sich `super` bezieht. Dies liegt daran, dass `super.method` kein Memberzugriff wie oben ist — es ist eine spezielle Syntax mit anderen Bindungsregeln. Beispiele finden Sie unter der Referenz zu [`super`](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte aufgeteilt werden: statisch und instanzbasiert. Konstruktoren, Methoden und Initialisierer von Instanzfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) gehören zum instanzbasierten Kontext. [Statische Methoden](/de/docs/Web/JavaScript/Reference/Classes/static), Initialisierer von statischen Feldern und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der Wert von `this` ist in jedem Kontext unterschiedlich.

Konstruktoren von Klassen werden immer mit `new` aufgerufen, sodass ihr Verhalten dem von [Funktionen als Konstruktoren](#konstruktoren) entspricht: Der `this`-Wert ist die neue Instanz, die erstellt wird. Klassenmethoden verhalten sich wie Methoden in Objektliteralen — der `this`-Wert ist das Objekt, auf dem die Methode aufgerufen wird. Wenn die Methode nicht auf ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf der Klasse aufgerufen, und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden ebenfalls mit `this` ausgewertet, das auf die aktuelle Klasse gesetzt ist.

Initialisierer von Feldern werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` ausgewertet, das auf die konstruierte Instanz verweist. Statische Felder werden mit `this` ausgewertet, das auf die aktuelle Klasse gesetzt ist. Deshalb sind Arrow Functions in Feldinitialisierern [an die Instanz für Instanzfelder und an die Klasse für statische Felder gebunden](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();
console.log(c.instanceField === c); // true
console.log(C.staticField === C); // true
```

#### Konstruktoren von abgeleiteten Klassen

Im Gegensatz zu Konstruktoren von Basisklassen haben Konstruktoren von abgeleiteten Klassen keine initiale `this`-Bindung. Ein Aufruf von {{jsxref("Operators/super", "super()")}} erstellt eine `this`-Bindung innerhalb des Konstruktors und hat im Wesentlichen den Effekt, die folgende Codezeile auszuwerten, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Ein Verweis auf `this` vor dem Aufruf von `super()` führt zu einem Fehler.

Abgeleitete Klassen dürfen nicht zurückkehren, bevor `super()` aufgerufen wurde, es sei denn, der Konstruktor gibt ein Objekt zurück (sodass der `this`-Wert überschrieben wird) oder die Klasse hat keinen Konstruktor.

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

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; kann sich innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow Functions](#arrow_functions) befinden, die im globalen Scope definiert sind), hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript ausgeführt wird. Wie bei [Callbacks](#callbacks) wird der `this`-Wert durch die Laufzeitumgebung (den Aufrufer) bestimmt.

Auf der obersten Ebene eines Skripts verweist `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob es sich im Strict-Modus befindet oder nicht. Dies entspricht im Allgemeinen dem globalen Objekt — beispielsweise, wenn der Quellcode in ein HTML-[`<script>`](/de/docs/Web/HTML/Element/script)-Element eingefügt und als Skript ausgeführt wird, gilt `this === window`.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (z. B. das Hinzufügen von Eigenschaften zu `globalThis` macht diese zu globalen Variablen) — das ist bei Browsern und Node.js der Fall — aber Hosts dürfen für `globalThis` einen anderen Wert bereitstellen, der nicht mit dem globalen Objekt zusammenhängt.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wird der Quellcode als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen (für HTML bedeutet dies das Hinzufügen von `type="module"` zum `<script>`-Tag), ist `this` auf oberster Ebene immer `undefined`.

Wird der Quellcode mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt, ist `this` dasselbe wie der umgebende Kontext für [Direct Eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) oder `globalThis` (als ob es in einem separaten globalen Skript ausgeführt wird) für Indirect Eval.

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

Beachten Sie, dass einiger Quellcode, der wie ein globaler Scope aussieht, tatsächlich in einer Funktion eingeschlossen ist, wenn er ausgeführt wird. Zum Beispiel werden Node.js CommonJS-Module in eine Funktion eingebunden und mit dem `this`-Wert als `module.exports` ausgeführt. [Event-Handler-Attribute](#this_in_inline-event-handlern) werden mit `this` als das Element ausgeführt, an das sie gebunden sind.

Objektliterale erstellen keinen `this`-Scope — nur Funktionen (Methoden), die innerhalb des Objekts definiert sind, tun dies. Die Verwendung von `this` in einem Objektliteral erbt den Wert aus dem umgebenden Scope.

```js
const obj = {
  a: this,
};

console.log(obj.a === window); // true
```

## Beispiele

### this im Funktionskontext

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

Mit `call()` und `apply()` können Sie den Wert von `this` so übergeben, als wäre er ein expliziter Parameter.

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

### this und Objektkonvertierung

Im Nicht-Strict-Modus wird, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, der `this`-Wert durch ein Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive Werte wie `7` oder `'foo'` werden in ein Objekt unter Verwendung des zugehörigen Konstruktors umgewandelt, sodass die primitive Zahl `7` in eine {{jsxref("Number")}}-Wrapper-Klasse und der String `'foo'` in eine {{jsxref("String")}}-Wrapper-Klasse konvertiert wird.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind()-Methode

Ein Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erzeugt eine neue Funktion mit demselben Körper und Scope wie `f`, aber der Wert von `this` wird dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

### this in Arrow Functions

Arrow Functions erstellen Closures über den `this`-Wert des umschließenden Ausführungskontexts. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, welche den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow Function erstellt, sodass ihr `this` dauerhaft an das `this` ihrer umschließenden Funktion gebunden ist. Der Wert von `this` innerhalb von `getThisGetter` kann beim Aufruf gesetzt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion setzt. Wir nehmen an, dass `getThisGetter` eine Nicht-Strict-Funktion ist, was bedeutet, dass sie in einem Nicht-Strict-Skript enthalten ist und nicht weiter in einer Klasse oder Strict-Funktion verschachtelt ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als eine Methode von `obj` aufrufen, wodurch `this` in seinem Körper an `obj` gebunden wird. Die zurückgegebene Funktion wird einer Variablen `fn` zugewiesen. Wenn wir nun `fn` aufrufen, bleibt der Wert von `this` derjenige, der beim Aufruf von `getThisGetter` gesetzt wurde, nämlich `obj`. Wenn die zurückgegebene Funktion keine Arrow Function wäre, würden solche Aufrufe den `this`-Wert zu `globalThis` machen, da `getThisGetter` nicht im Strict-Modus ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber seien Sie vorsichtig, wenn Sie die Methode von `obj` abkoppeln, ohne sie aufzurufen, da `getThisGetter` immer noch eine Methode ist, deren `this`-Wert variieren kann. Das Aufrufen von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, da es dem `this` von `fn2()` folgt, welches `globalThis` ist, da es ohne Anbindung an ein Objekt aufgerufen wurde.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist sehr nützlich bei der Definition von Callbacks. Normalerweise erstellt jeder Funktionsausdruck seine eigene `this`-Bindung, die den `this`-Wert des oberen Scopes überschattet. Nun können Sie Funktionen als Arrow Functions definieren, wenn Ihnen der `this`-Wert egal ist, und `this`-Bindungen nur dort erstellen, wo Sie es tun (z. B. in Methoden von Klassen). [Beispiel mit `setTimeout()` anzeigen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welchem Objekt auf die Eigenschaft zugegriffen wird, nicht darauf, auf welchem Objekt die Eigenschaft definiert ist. Eine Funktion, die als Getter oder Setter verwendet wird, hat ihr `this` an das Objekt gebunden, von dem die Eigenschaft gesetzt oder abgerufen wird.

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

### this in DOM-Event-Handlern

Wenn eine Funktion als Event-Handler verwendet wird, ist ihr `this`-Parameter an das DOM-Element gebunden, auf dem der Listener platziert ist (einige Browser folgen dieser Konvention nicht für Listener, die mit Methoden außer [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) dynamisch hinzugefügt wurden).

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

### this in Inline-Event-Handlern

Wenn der Code aus einem Inline-[Event-Handler-Attribut](/de/docs/Web/HTML/Attributes#event_handler_attributes) aufgerufen wird, wird `this` an das DOM-Element gebunden, an das der Listener angebracht ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Das obige alert zeigt `button`. Beachten Sie jedoch, dass nur der äußere Scope auf diese Weise sein `this` gebunden hat:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` gebunden (d. h. das Standard-Objekt im Nicht-Strict-Modus, bei dem `this` nicht mit dem Aufruf übergeben wird).

### Gebundene Methoden in Klassen

Genau wie bei regulären Funktionen hängt der Wert von `this` in Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten zu überschreiben, sodass `this` in Klassen immer auf die Klasseninstanz verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

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
> Klassen sind immer im Strict-Modus. Das Aufrufen von Methoden mit einem undefinierten `this` führt zu einem Fehler, wenn die Methode versucht, auf Eigenschaften von `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError, weil die "sayHi"-Methode versucht, auf "this.name" zuzugreifen, aber "this" im Strict-Modus undefiniert ist.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden unter demselben Problem leiden wie [die Verwendung von Arrow Functions für Klassen-Eigenschaften](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse wird ihre eigene Kopie der Methode haben, was den Speicherverbrauch erhöht. Verwenden Sie es nur dort, wo es absolut notwendig ist. Sie können auch die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als Getter, der eine gebundene Funktion zurückgibt, wenn sie aufgerufen wird, und diese speichert, sodass die Funktion nur einmal erstellt wird und nur, wenn nötig.

### this in `with`-Anweisungen

Obwohl [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungen veraltet und im Strict-Modus nicht verfügbar sind, stellen sie immer noch eine Ausnahme zu den normalen `this`-Bindungsregeln dar. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Scope-Objekts ist, wird der `this`-Wert an das Scope-Objekt gebunden, als ob das Präfix `obj1.` existiert.

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

- [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("globalThis")}}
