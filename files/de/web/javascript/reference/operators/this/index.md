---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Das Schlüsselwort **`this`** bezieht sich auf den Kontext, in dem ein Code, wie z. B. der Körper einer Funktion, ausgeführt werden soll. Es wird am häufigsten in Objektmethoden verwendet, bei denen `this` auf das Objekt verweist, dem die Methode zugeordnet ist, wodurch diese Methode auf verschiedenen Objekten wiederverwendet werden kann.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (Laufzeit- {{Glossary("binding", "binding")}}) und nicht, wie sie definiert ist. Wenn eine reguläre Funktion als Methode eines Objekts (`obj.method()`) aufgerufen wird, verweist `this` auf dieses Objekt. Wird sie als eigenständige Funktion aufgerufen (nicht einem Objekt zugeordnet: `func()`), bezieht sich `this` typischerweise auf das {{Glossary("Global_object", "globale Objekt")}} (im Nicht-Strikt-Modus) oder `undefined` (im [Strikt-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erstellen, deren Bindung an `this` sich nicht ändert, und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können ebenfalls den `this`-Wert für einen bestimmten Aufruf setzen.

[Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in ihrem Umgang mit `this`: sie erben `this` aus dem übergeordneten Gültigkeitsbereich zum Zeitpunkt ihrer Definition. Dieses Verhalten macht Pfeilfunktionen besonders nützlich für Rückrufe und zur Erhaltung des Kontextes. Pfeilfunktionen haben jedoch keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch die Methoden `bind()`, `apply()` oder `call()` gesetzt werden und verweist auch nicht auf das aktuelle Objekt in Objektmethoden.

{{EmbedInteractiveExample("pages/js/expressions-this.html")}}

## Syntax

```js-nolint
this
```

### Wert

Im Nicht–Strikt-Modus ist `this` immer ein Verweis auf ein Objekt. Im Strikt-Modus kann es jeder Wert sein. Weitere Informationen darüber, wie der Wert bestimmt wird, finden Sie in der folgenden Beschreibung.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Betrachten Sie `this` als einen versteckten Parameter einer Funktion — genau wie die Parameter, die in der Funktionsdefinition deklariert sind, ist `this` eine Bindung, die die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Für eine reguläre Funktion (keine Pfeilfunktion, gebundene Funktion usw.) ist der Wert von `this` das Objekt, auf das zugegriffen wird. Anders ausgedrückt: Wenn der Funktionsaufruf in der Form `obj.f()` erfolgt, bezieht sich `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, wie die Funktion gleich bleibt, aber basierend auf der Art und Weise, wie sie aufgerufen wird, der Wert von `this` unterschiedlich ist. Dies ist analog dazu, wie Funktionsparameter funktionieren.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigene Eigenschaft enthält, sondern das Objekt, das verwendet wird, um die Funktion aufzurufen. Sie können dies beweisen, indem Sie eine Methode eines Objekts in der [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer, je nachdem, wie eine Funktion aufgerufen wird, auch wenn die Funktion beim Erstellen auf einem Objekt definiert wurde:

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

Wenn der Wert, auf den die Methode zugreift, ein primitiver Wert ist, wird `this` ebenfalls ein primitiver Wert sein — aber nur, wenn die Funktion sich im Strikmodus befindet.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wird die Funktion ohne Zugriff auf etwas aufgerufen, wird `this` `undefined` sein — aber nur, wenn die Funktion sich im Striktmodus befindet.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im Nicht-Strikt-Modus sorgt ein spezieller Prozess, genannt [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution), dafür, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

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

In typischen Funktionsaufrufen wird `this` implizit wie ein Parameter über das Präfix der Funktion (der Teil vor dem Punkt) übergeben. Sie können den Wert von `this` auch explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} oder {{jsxref("Reflect.apply()")}} setzen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem bestimmten Wert von `this` erstellen, der sich nicht ändert, unabhängig davon, wie die Funktion aufgerufen wird. Wenn Sie diese Methoden verwenden, gelten die oben genannten `this`-Substitutionsregeln, wenn die Funktion nicht im Striktmodus ist.

#### Rückrufe

Wird eine Funktion als Rückruf übergeben, hängt der Wert von `this` davon ab, wie der Rückruf aufgerufen wird, was vom Implementierer der API bestimmt wird. Rückrufe werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (sie werden direkt aufgerufen, ohne sie an ein Objekt anzuhängen), was bedeutet, dass im Nicht–Strikt-Modus der Wert von `this` das globale Objekt ({{jsxref("globalThis")}}) ist. Dies ist der Fall für [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), den [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor usw.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs erlauben es Ihnen, einen `this`-Wert für Aufrufe des Rückrufs festzulegen. Zum Beispiel akzeptieren alle iterativen Array-Methoden und verwandte Methoden wie {{jsxref("Set.prototype.forEach()")}} einen optionalen `thisArg`-Parameter.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Rückruf mit einem anderen `this`-Wert als `undefined` aufgerufen. Zum Beispiel werden die `reviver`-Parameter von {{jsxref("JSON.parse()")}} und der `replacer`-Parameter von {{jsxref("JSON.stringify()")}} jeweils mit `this` auf das Objekt gesetzt, zu dem die Eigenschaft gehört, die analysiert/serialisiert wird.

#### Pfeilfunktionen

In [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umgebenden lexikalischen Kontexts bei. Anders ausgedrückt: Wenn der Körper einer Pfeilfunktion ausgewertet wird, erstellt die Sprache keine neue `this`-Bindung.

Zum Beispiel: Im globalen Code ist `this` immer `globalThis`, unabhängig von der Striktheit, aufgrund der [globalen Kontext](#globaler_kontext)-Bindung:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Pfeilfunktionen erstellen eine [closure](/de/docs/Web/JavaScript/Closures) über den `this`-Wert ihres umgebenden Kontexts, was bedeutet, dass sich Pfeilfunktionen so verhalten, als ob sie "automatisch gebunden" wären — unabhängig davon, wie sie aufgerufen werden, ist `this` an das gebunden, was es bei der Erstellung der Funktion war (im obigen Beispiel ist es das globale Objekt). Das Gleiche gilt für Pfeilfunktionen, die in anderen Funktionen erstellt werden: Ihr `this` bleibt das des umgebenden lexikalischen Kontexts. [Beispiel siehe unten](#this_in_pfeilfunktionen).

Darüber hinaus wird beim Aufrufen von Pfeilfunktionen mit `call()`, `bind()` oder `apply()` der `thisArg`-Parameter ignoriert. Sie können jedoch weiterhin andere Argumente mit diesen Methoden übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wird eine Funktion als Konstruktor (mit dem Schlüsselwort {{jsxref("Operators/new", "new")}}) verwendet, wird ihr `this` an das neue Objekt gebunden, das erstellt wird, unabhängig davon, auf welches Objekt die Konstruktorfunktion zugreift. Der Wert von `this` wird zum Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht primitiven Wert zurück.

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

Im zweiten Beispiel (`C2`) wird während der Konstruktion ein Objekt zurückgegeben, weshalb das neue Objekt, an das `this` gebunden war, verworfen wird. (Dies macht die Anweisung `this.a = 37;` im Wesentlichen zu einem toten Code. Sie ist nicht exakt tot, da sie ausgeführt wird, aber sie kann ohne externe Auswirkungen eliminiert werden.)

#### super

Wird eine Funktion in der `super.method()`-Form aufgerufen, ist `this` innerhalb der `method`-Funktion derselbe Wert wie der `this`-Wert um den `super.method()`-Aufruf herum und ist generell nicht gleich dem Objekt, auf das `super` verweist. Dies liegt daran, dass `super.method` kein Objektmitgliedzugriff wie die oben genannten ist — es ist eine spezielle Syntax mit anderen Bindungsregeln. Beispiele finden Sie im [`super`-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte unterteilt werden: static und instanz. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Instanzfeldinitialisierer ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) gehören zum Instanzkontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, statische Feldinitialisierer und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Klassenkonstruktoren werden immer mit `new` aufgerufen, daher ist ihr Verhalten dasselbe wie bei [Funktionskonstruktoren](#konstruktoren): Der `this`-Wert ist die neue Instanz, die erstellt wird. Klassenmethoden verhalten sich wie Methoden in Objektliteralen — der `this`-Wert ist das Objekt, auf das zugegriffen wird. Wird die Methode nicht auf ein anderes Objekt übertragen, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf die Klasse zugegriffen und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden auch mit `this` ausgewertet, das auf die aktuelle Klasse gesetzt ist.

Feldinitialisierer werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` ausgewertet, das auf die erstellte Instanz gesetzt ist. Statische Felder werden mit `this` ausgewertet, das auf die aktuelle Klasse gesetzt ist. Aus diesem Grund sind Pfeilfunktionen in Feldinitialisierern [an die Instanz für Instanzfelder und an die Klasse für statische Felder gebunden](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

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

Im Gegensatz zu Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine anfängliche `this`-Bindung. Der Aufruf von {{jsxref("Operators/super", "super()")}} erstellt eine `this`-Bindung innerhalb des Konstruktors und hat im Wesentlichen die Wirkung, die folgende Codezeile zu evaluieren, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Ein Verweis auf `this` vor dem Aufrufen von `super()` wird einen Fehler auslösen.

Abgeleitete Klassen dürfen nicht vor dem Aufruf von `super()` zurückkehren, es sei denn, der Konstruktor gibt ein Objekt zurück (sodass der `this`-Wert überschrieben wird) oder die Klasse hat überhaupt keinen Konstruktor.

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

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; kann innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Pfeilfunktionen](#pfeilfunktionen) sein, die im globalen Gültigkeitsbereich definiert sind) hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript läuft. Wie [Rückrufe](#rückrufe) wird der `this`-Wert durch die Laufzeitumgebung (den Aufrufer) bestimmt.

Auf der obersten Ebene eines Skripts bezieht sich `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob es sich im Strikt-Modus befindet oder nicht. Dies ist im Allgemeinen das gleiche wie das globale Objekt — zum Beispiel, wenn die Quelle in ein HTML-`<script>`-Element gesetzt wird und als Skript ausgeführt wird, ist `this === window`.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d. h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — dies gilt für Browser und Node — aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt verwandt ist.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wenn die Quelle als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen wird (für HTML bedeutet dies, `type="module"` zum `<script>`-Tag hinzuzufügen), ist `this` immer `undefined` auf der obersten Ebene.

Wenn die Quelle mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt wird, ist `this` dasselbe wie der umgebende Kontext für [direktes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) oder `globalThis` (als ob es in einem separaten globalen Skript ausgeführt wird) für indirektes eval.

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

Beachten Sie, dass einige Quellcodes, obwohl sie wie der globale Gültigkeitsbereich aussehen, tatsächlich in eine Funktion eingebettet werden, wenn sie ausgeführt werden. Beispielsweise werden Node.js CommonJS-Module in eine Funktion eingebettet und mit dem `this`-Wert `module.exports` ausgeführt. [Ereignishandler-Attribute](#this_in_inline-ereignishandlern) werden mit `this` ausgeführt, das auf das Element gesetzt ist, an das sie angehängt sind.

Objektliterale erstellen keinen `this`-Gültigkeitsbereich — nur Funktionen (Methoden), die im Objekt definiert sind, tun dies. Die Verwendung von `this` in einem Objektliteral übernimmt den Wert aus dem umgebenden Gültigkeitsbereich.

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

### this und Objektkonvertierung

Im Nicht–Strikt-Modus, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, wird der `this`-Wert durch ein Objekt ersetzt. `null` und `undefined` werden `globalThis`. Primitive wie `7` oder `'foo'` werden in ein Objekt mit dem zugehörigen Konstruktor umgewandelt, sodass die primitive Zahl `7` in eine Klasse der {{jsxref("Number")}}-Wrapperklasse umgewandelt wird und der String `'foo'` in eine Klasse der {{jsxref("String")}}-Wrapperklasse.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind() Methode

Der Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt eine neue Funktion mit demselben Körper und Gültigkeitsbereich wie `f`, aber der Wert von `this` ist dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

### this in Pfeilfunktionen

Pfeilfunktionen erstellen Closures über den `this`-Wert des umgebenden Ausführungskontextes. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Pfeilfunktion erstellt, sodass ihr `this` dauerhaft an das `this` ihrer umgebenden Funktion gebunden ist. Der Wert von `this` innerhalb von `getThisGetter` kann im Aufruf festgelegt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion festlegt. Wir nehmen an, dass `getThisGetter` eine nicht-strikte Funktion ist, was bedeutet, dass es in einem nicht-strikten Skript enthalten ist und nicht weiter in einer Klasse oder strengen Funktion verschachtelt ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen, wodurch `this` an `obj` innerhalb ihres Körpers gebunden wird. Die zurückgegebene Funktion wird einer Variable `fn` zugewiesen. Wenn `fn` aufgerufen wird, bleibt der Wert von `this`, der durch den Aufruf von `getThisGetter` festgelegt wurde, `obj`. Wenn die zurückgegebene Funktion keine Pfeilfunktion wäre, würden solche Aufrufe den `this`-Wert auf `globalThis` setzen, da `getThisGetter` nicht-strikt ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Seien Sie jedoch vorsichtig, wenn Sie die Methode von `obj` entfernen, ohne sie aufzurufen, da `getThisGetter` immer noch eine Methode ist, die einen variierenden `this`-Wert hat. Das Aufrufen von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, da es dem `this` von `fn2()` folgt, das `globalThis` ist, da es aufgerufen wird, ohne an ein Objekt gebunden zu sein.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist sehr nützlich bei der Definition von Rückrufen. Normalerweise erstellt jeder Funktionsausdruck seine eigene `this`-Bindung, die den `this`-Wert des oberen Umfangs überschattet. Jetzt können Sie Funktionen als Pfeilfunktionen definieren, wenn Sie sich nicht um den `this`-Wert kümmern, und `this`-Bindungen nur dort erstellen, wo Sie dies tun (z. B. in Klassenmethoden). Siehe [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welches Objekt auf die Eigenschaft zugegriffen wird, nicht auf welches Objekt die Eigenschaft definiert ist. Eine Funktion, die als Getter oder Setter verwendet wird, hat ihr `this` an das Objekt gebunden, von dem die Eigenschaft eingestellt oder abgerufen wird.

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

Wenn eine Funktion als Ereignishandler verwendet wird, ist ihr `this`-Parameter an das DOM-Element gebunden, an das der Listener angehängt ist (einige Browser folgen diesem Konventions nicht für Listener, die dynamisch mit anderen Methoden als [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt werden).

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

Wenn der Code von einem Inline-[Ereignishandler-Attribut](/de/docs/Web/HTML/Attributes#event_handler_attributes) aufgerufen wird, ist `this` an das DOM-Element gebunden, an dem der Listener platziert ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Die obige Warnung zeigt `button`. Beachten Sie jedoch, dass nur der äußere Umfang auf diese Weise gebunden ist:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion auf `globalThis` gebunden (d. h. das Standardobjekt im Nicht–Strikt-Modus, wobei `this` nicht im Aufruf übergeben wird).

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
> Klassen sind immer im Strikt-Modus. Das Aufrufen von Methoden mit einem undefinierten `this` wird einen Fehler auslösen, wenn die Methode versucht, auf Eigenschaften von `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError, weil die 'sayHi'-Methode versucht, auf 'this.name' zuzugreifen, aber 'this' im Strikt-Modus undefiniert ist.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden dasselbe Problem haben wie [die Verwendung von Pfeilfunktionen für Klassenattribute](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse hat ihre eigene Kopie der Methode, was den Speicherverbrauch erhöht. Verwenden Sie es nur dort, wo es unbedingt notwendig ist. Sie können die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als Getter, der beim Zugriff eine gebundene Funktion zurückgibt und speichert, sodass die Funktion nur einmal erstellt wird und nur dann, wenn es notwendig ist.

### this in with-Anweisungen

Obwohl [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Anweisungen veraltet sind und im Strikt-Modus nicht verfügbar sind, dienen sie immer noch als Ausnahme zu den normalen `this`-Bindungsregeln. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Umfangsobjekts ist, wird der `this`-Wert an das Umfangsobjekt gebunden, als ob das Präfix `obj1.` existiert.

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
