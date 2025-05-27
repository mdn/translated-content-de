---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{jsSidebar("Operators")}}

Das **`this`**-Schlüsselwort bezieht sich auf den Kontext, in dem ein Code, wie der Körper einer Funktion, ausgeführt werden soll. Am häufigsten wird es in Objektmethoden verwendet, wobei `this` auf das Objekt verweist, an das die Methode gebunden ist, und es somit ermöglicht, dieselbe Methode auf verschiedenen Objekten wiederzuverwenden.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (Laufzeit-{{Glossary("binding", "Bindung")}}), nicht davon, wie sie definiert ist. Wenn eine normale Funktion als Methode eines Objekts aufgerufen wird (`obj.method()`), verweist `this` auf dieses Objekt. Wenn sie als eigenständige Funktion aufgerufen wird (nicht an ein Objekt gebunden: `func()`), verweist `this` typischerweise auf das {{Glossary("Global_object", "globale Objekt")}} (im Nicht-Strict-Modus) oder ist `undefined` (im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erstellen, deren `this`-Bindung sich nicht ändert, und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können ebenfalls den `this`-Wert für einen bestimmten Aufruf setzen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in der Behandlung von `this`: Sie erben `this` aus dem übergeordneten Gültigkeitsbereich zur Zeit ihrer Definition. Dieses Verhalten macht Arrow-Funktionen besonders nützlich für Rückrufe und zur Wahrung des Kontexts. Arrow-Funktionen haben jedoch keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch die Methoden `bind()`, `apply()` oder `call()` gesetzt werden und verweist in Objektmethoden nicht auf das aktuelle Objekt.

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

Im Nicht-Strict-Modus ist `this` immer eine Referenz auf ein Objekt. Im Strict-Modus kann es jeden Wert annehmen. Weitere Informationen zur Bestimmung des Wertes finden Sie in der Beschreibung unten.

## Beschreibung

Der Wert von `this` hängt vom Kontext ab, in dem es erscheint: Funktion, Klasse oder globaler Kontext.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Betrachten Sie `this` als einen versteckten Parameter einer Funktion – ähnlich wie die in der Funktionsdefinition deklarierten Parameter ist `this` eine Bindung, die die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Bei einer normalen Funktion (nicht einer Arrow-Funktion, gebundenen Funktion usw.) ist der Wert von `this` das Objekt, auf das die Funktion zugegriffen wird. Mit anderen Worten, wenn der Funktionsaufruf die Form `obj.f()` hat, verweist `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, wie die Funktion dieselbe bleibt, aber je nachdem, wie sie aufgerufen wird, der Wert von `this` unterschiedlich ist. Dies ist analog dazu, wie Funktionsparameter funktionieren.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigene Eigenschaft hat, sondern das Objekt, das zum Aufrufen der Funktion verwendet wird. Dies können Sie beweisen, indem Sie eine Methode eines Objekts in der [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer basierend darauf, wie eine Funktion aufgerufen wird, selbst wenn die Funktion bei der Erstellung einem Objekt zugewiesen wurde:

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

Wenn der Wert, auf den die Methode zugreift, ein primitiver Wert ist, wird `this` ebenfalls ein primitiver Wert sein – aber nur, wenn sich die Funktion im Strict-Modus befindet.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wenn die Funktion aufgerufen wird, ohne auf etwas zuzugreifen, wird `this` `undefined` sein – aber nur, wenn sich die Funktion im Strict-Modus befindet.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im Nicht-Strict-Modus stellt ein spezieller Prozess namens [`this` Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) sicher, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

- Wenn eine Funktion mit `this` auf `undefined` oder `null` aufgerufen wird, wird `this` durch {{jsxref("globalThis")}} ersetzt.
- Wenn die Funktion mit `this` auf einen primitiven Wert aufgerufen wird, wird `this` durch das Wrapper-Objekt des primitiven Wertes ersetzt.

```js
function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

In typischen Funktionsaufrufen wird `this` implizit als Parameter durch das Präfix der Funktion (den Teil vor dem Punkt) übergeben. Sie können den Wert von `this` auch explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} oder {{jsxref("Reflect.apply()")}} setzen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem bestimmten Wert von `this` erstellen, der unabhängig davon, wie die Funktion aufgerufen wird, unverändert bleibt. Bei der Verwendung dieser Methoden gelten die oben genannten `this` Substitutionsregeln noch immer, wenn die Funktion nicht im Strict-Modus ist.

#### Rückrufe

Wenn eine Funktion als Rückruf übergeben wird, hängt der Wert von `this` davon ab, wie der Rückruf aufgerufen wird, was vom Implementierer der API bestimmt wird. Rückrufe werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (direkter Aufruf, ohne an ein Objekt gebunden zu sein), was bedeutet, dass der Wert von `this` im Nicht-Strict-Modus das globale Objekt ist ({{jsxref("globalThis")}}). Dies ist der Fall für [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), den [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor usw.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs erlauben es, einen `this`-Wert für Aufrufe des Rückrufs festzulegen. Zum Beispiel akzeptieren alle iterativen Array-Methoden und verwandte Methoden wie {{jsxref("Set.prototype.forEach()")}} einen optionalen `thisArg`-Parameter.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Rückruf mit einem `this`-Wert aufgerufen, der nicht `undefined` ist. Zum Beispiel werden der `reviver`-Parameter von {{jsxref("JSON.parse()")}} und der `replacer`-Parameter von {{jsxref("JSON.stringify()")}} beide mit `this` auf das Objekt gesetzt, zu dem die Eigenschaft gehört, die geparst/serialisiert wird.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umgebenden lexikalischen Kontexts. Mit anderen Worten, beim Auswerten des Körpers einer Arrow-Funktion wird keine neue `this`-Bindung erstellt.

Zum Beispiel ist in globalem Code `this` immer `globalThis`, unabhängig von der Striktmode, aufgrund der [globalen Kontex]bindung:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen erstellen eine [closure](/de/docs/Web/JavaScript/Guide/Closures) über den `this`-Wert ihres umgebenden Gültigkeitsbereichs, was bedeutet, dass Arrow-Funktionen sich verhalten, als wären sie "automatisch gebunden" — egal, wie sie aufgerufen werden, `this` wird auf den Wert gebunden, den es beim Erstellen der Funktion hatte (im obigen Beispiel das globale Objekt). Dasselbe gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt werden: Ihr `this` bleibt das des umgebenden lexikalischen Kontexts. [Beispiel siehe unten](#this_in_arrow-funktionen).

Darüber hinaus wird bei der Verwendung von Arrow-Funktionen mit `call()`, `bind()` oder `apply()` der `thisArg`-Parameter ignoriert. Sie können jedoch weiterhin andere Argumente mit diesen Methoden übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wenn eine Funktion als Konstruktor verwendet wird (mit dem {{jsxref("Operators/new", "new")}}-Schlüsselwort), wird ihr `this` an das neue Objekt gebunden, das gerade erstellt wird, unabhängig davon, auf welches Objekt die Konstruktorfunktion zugegriffen wird. Der Wert von `this` wird der Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht-primitiven Wert zurück.

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

Im zweiten Beispiel (`C2`), da ein Objekt während der Konstruktion zurückgegeben wurde, wird das neue Objekt, an das `this` gebunden war, verworfen. (Dies macht im Wesentlichen die Aussage `this.a = 37;` zu einem „toten Code“. Es ist nicht genau tot, da es ausgeführt wird, aber es kann ohne äußere Effekte eliminiert werden.)

#### super

Wenn eine Funktion in der `super.method()`-Form aufgerufen wird, ist das `this` innerhalb der `method`-Funktion derselbe Wert wie der `this`-Wert im Kontext des `super.method()`-Aufrufs und ist in der Regel nicht gleich dem Objekt, auf das `super` verweist. Dies liegt daran, dass `super.method` kein Objektmitglied-Zugriff wie die oben genannten ist – es handelt sich um eine spezielle Syntax mit unterschiedlichen Bindungsregeln. Beispiele finden Sie im [`super`-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte unterteilt werden: statisch und Instanz. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Initialisierungen von Instanzfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) gehören zum Instanzkontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, Initialisierungen von statischen Feldern und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Klassenkonstruktoren werden immer mit `new` aufgerufen, daher ist ihr Verhalten dasselbe wie bei [Funktionskonstruktoren](#konstruktoren): Der `this`-Wert ist die neu erstellte Instanz. Klassenmethoden verhalten sich wie Methoden in Objektliteralen – der `this`-Wert ist das Objekt, auf das die Methode zugegriffen wird. Wenn die Methode nicht auf ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher wird in der Regel auf sie über die Klasse zugegriffen und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden ebenfalls mit `this` auf die aktuelle Klasse ausgewertet.

Feldinitialisierungen werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` auf die Instanz gesetzt, die gerade erstellt wird. Statische Felder werden mit `this` auf die aktuelle Klasse gesetzt. Aus diesem Grund sind Arrow-Funktionen in Feldinitialisierungen [an die Instanz für Instanzfelder und an die Klasse für statische Felder gebunden](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

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

Im Gegensatz zu Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine anfängliche `this`-Bindung. Das Aufrufen von {{jsxref("Operators/super", "super()")}} erstellt eine `this`-Bindung im Konstruktor und hat im Wesentlichen die Wirkung, die folgende Codezeile auszuführen, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Der Verweis auf `this` vor dem Aufruf von `super()` wird einen Fehler auslösen.

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

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; kann innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen) definiert im globalen Umfang sein) hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript läuft. Wie bei [Rückrufen](#rückrufe) wird der `this`-Wert von der Laufzeitumgebung (dem Aufrufer) bestimmt.

Auf der obersten Ebene eines Skripts bezieht sich `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob im Strict-Modus oder nicht. Dies ist im Allgemeinen dasselbe wie das globale Objekt — zum Beispiel, wenn die Quelle innerhalb eines HTML `<script>`-Elements eingefügt und als Skript ausgeführt wird, dann ist `this === window`.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — das ist bei Browsern und Node.js der Fall, aber Hosts dürfen für `globalThis` einen anderen Wert bereitstellen, der nicht mit dem globalen Objekt in Zusammenhang steht.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wenn die Quelle als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen wird (für HTML bedeutet das, `type="module"` zum `<script>`-Tag hinzuzufügen), ist `this` auf oberster Ebene immer `undefined`.

Wenn die Quelle mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt wird, ist `this` dasselbe wie im umgebenden Kontext für [direkte Auswertungen](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) oder `globalThis` (als ob es in einem separaten globalen Skript ausgeführt wird) für indirekte Auswertungen.

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

Beachten Sie, dass einige Quellcodes, obwohl sie wie der globale Bereich aussehen, tatsächlich in einer Funktion umwickelt sind, wenn sie ausgeführt werden. Zum Beispiel werden Node.js CommonJS-Module in einer Funktion ausgeführt, wobei `this` auf `module.exports` gesetzt ist. [Event-Handler-Attribute](#this_in_inline-event-handlern) werden mit `this` auf das Element, an das sie angehängt sind, ausgeführt.

Objektliteralien erstellen keinen `this`-Gültigkeitsbereich — nur Funktionen (Methoden), die innerhalb des Objekts definiert werden. Wenn `this` in einem Objektliteral verwendet wird, wird der Wert aus dem umgebenden Gültigkeitsbereich übernommen.

```js
const obj = {
  a: this,
};

console.log(obj.a === window); // true
```

## Beispiele

### this in Funktionskontexten

Der Wert des `this`-Parameters hängt davon ab, wie die Funktion aufgerufen wird, nicht wie sie definiert ist.

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

### this und Objektkonvertierung

Im Nicht-Strict-Modus wird, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, der `this`-Wert durch ein Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive wie `7` oder `'foo'` werden in ein Objekt durch den zugehörigen Konstruktor umgewandelt, sodass die primitive Zahl `7` in eine {{jsxref("Number")}}-Wrapper-Klasse und der String `'foo'` in eine {{jsxref("String")}}-Wrapper-Klasse umgewandelt wird.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind()-Methode

Ein Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt eine neue Funktion mit demselben Körper und Gültigkeitsbereich wie `f`, aber der Wert von `this` ist dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

Arrow-Funktionen erstellen Closures über den `this`-Wert des umgebenden Ausführungskontexts. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt, daher ist ihr `this` dauerhaft an das `this` ihrer umgebenden Funktion gebunden. Der `this`-Wert innerhalb von `getThisGetter` kann im Aufruf gesetzt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion setzt. Wir nehmen an, dass `getThisGetter` eine nicht-strikte Funktion ist, was bedeutet, dass sie in einem nicht-strikten Skript enthalten ist und nicht weiter in einer Klasse oder strikten Funktion verschachtelt ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als eine Methode von `obj` aufrufen, die `this` an `obj` innerhalb ihres Körpers bindet. Die zurückgegebene Funktion wird einer Variablen `fn` zugewiesen. Nun, wenn `fn` aufgerufen wird, bleibt der `this`-Wert der, der durch den Aufruf von `getThisGetter` gesetzt wurde, nämlich `obj`. Wenn die zurückgegebene Funktion keine Arrow-Funktion wäre, würden solche Aufrufe dazu führen, dass der `this`-Wert `globalThis` ist, da `getThisGetter` nicht-strikt ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber seien Sie vorsichtig, wenn Sie die Methode von `obj` loslösen, ohne sie aufzurufen, da `getThisGetter` immer noch eine Methode mit einem variierenden `this`-Wert ist. Ein Aufruf von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, da er dem `this` von `fn2()` folgt, was `globalThis` ist, da es aufgerufen wurde, ohne an ein Objekt gebunden zu sein.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist sehr nützlich, wenn Rückrufe definiert werden. Normalerweise erstellt jeder Funktionsausdruck seine eigene `this`-Bindung, die den `this`-Wert des oberen Gültigkeitsbereichs überschattet. Jetzt können Sie Funktionen als Arrow-Funktionen definieren, wenn Ihnen der `this`-Wert egal ist, und `this`-Bindungen nur dort erstellen, wo sie erforderlich sind (z. B. in Klassenmethoden). Siehe [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welchem Objekt die Eigenschaft aufgerufen wird, nicht darauf, auf welchem Objekt die Eigenschaft definiert ist. Eine Funktion, die als Getter oder Setter verwendet wird, hat ihr `this` an das Objekt gebunden, aus dem die Eigenschaft gesetzt oder abgerufen wird.

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

Wenn eine Funktion als Event-Handler verwendet wird, ist ihr `this`-Parameter an das DOM-Element gebunden, auf dem der Listener platziert wird (einige Browser halten sich nicht mit dieser Konvention für dynamisch hinzugefügte Listener an, die mit anderen Methoden als [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt werden).

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

Wenn der Code von einem Inline-Event-Handler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) aufgerufen wird, ist `this` an das DOM-Element gebunden, an dem der Listener platziert wird:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Das obige Alert zeigt `button`. Beachten Sie jedoch, dass nur der äußere Gültigkeitsbereich auf diese Weise sein `this` gebunden hat:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` gebunden (d.h. das Standardobjekt im Nicht-Strict-Modus, in dem `this` nicht im Aufruf übergeben wird).

### Gebundene Methoden in Klassen

Genau wie bei regulären Funktionen hängt der Wert von `this` innerhalb von Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten zu überschreiben, sodass `this` innerhalb von Klassen immer auf die Instanz der Klasse verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

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
> Klassen befinden sich immer im Strict-Modus. Das Aufrufen von Methoden mit einem undefinierten `this` führt zu einem Fehler, wenn die Methode versucht, auf Eigenschaften von `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError, weil die 'sayHi'-Methode versucht, auf 'this.name' zuzugreifen, aber 'this' ist undefined im Strict-Modus.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden dasselbe Problem haben wie [das Verwenden von Arrow-Funktionen für Klasseneigenschaften](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse hat ihre eigene Kopie der Methode, was den Speicherverbrauch erhöht. Verwenden Sie es nur dort, wo es unbedingt notwendig ist. Sie können auch die Implementierung der [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als einen Getter, der eine gebundene Funktion zurückgibt, wenn darauf zugegriffen wird, und speichert sie, sodass die Funktion nur einmal erstellt wird und nur dann, wenn sie benötigt wird.

### this in with-Anweisungen

Obwohl [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Anweisungen veraltet und im Strict-Modus nicht verfügbar sind, dienen sie immer noch als Ausnahme zu den normalen `this`-Bindungsregeln. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Gültigkeitsbereichsobjekts ist, wird der `this`-Wert an das Gültigkeitsbereichsobjekt gebunden, als ob der `obj1.`-Präfix existiert.

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
