---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Operators")}}

Das **`this`**-Schlüsselwort bezieht sich auf den Kontext, in dem ein Stück Code, wie z.B. der Inhalt einer Funktion, ausgeführt werden soll. Es wird am häufigsten in Objektmethoden verwendet, wobei sich `this` auf das Objekt bezieht, an das die Methode angehängt ist, was es ermöglicht, dieselbe Methode auf verschiedenen Objekten erneut zu verwenden.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (Laufzeit-{{Glossary("binding", "Bindung")}}), nicht davon, wie sie definiert ist. Wird eine normale Funktion als Methode eines Objekts aufgerufen (`obj.method()`), zeigt `this` auf dieses Objekt. Wird sie als eigenständige Funktion aufgerufen (nicht an ein Objekt angehängt: `func()`), bezieht sich `this` typischerweise auf das {{Glossary("Global_object", "globale Objekt")}} (im nicht-strikten Modus) oder `undefined` (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die {{jsxref("Function.prototype.bind()")}}-Methode kann eine Funktion erzeugen, deren `this`-Bindung sich nicht ändert, und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können den `this`-Wert für einen bestimmten Aufruf ebenfalls festlegen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in der Handhabung von `this`: Sie erben `this` aus dem Elterndokument zum Zeitpunkt ihrer Definition. Dieses Verhalten macht Arrow-Funktionen besonders nützlich für Callbacks und zur Beibehaltung des Kontexts. Allerdings haben Arrow-Funktionen keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch `bind()`, `apply()` oder `call()` festgelegt werden, noch zeigt er in Objektmethoden auf das aktuelle Objekt.

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

Im nicht-strikten Modus ist `this` immer eine Referenz auf ein Objekt. Im strikten Modus kann es jeden Wert annehmen. Weitere Informationen darüber, wie der Wert bestimmt wird, finden Sie in der Beschreibung unten.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Denken Sie an `this` als ein verstecktes Argument einer Funktion — genau wie die Parameter, die in der Funktionsdefinition deklariert sind, ist `this` eine Bindung, die die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Für eine normale Funktion (keine Arrow-Funktion, gebundene Funktion etc.) ist der Wert von `this` das Objekt, auf dem die Funktion aufgerufen wird. Mit anderen Worten, wenn der Funktionsaufruf in der Form `obj.f()` erfolgt, bezieht sich `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, wie die Funktion dieselbe ist, aber der Wert von `this` je nach Aufruf unterschiedlich ist. Dies ist analog zu der Funktionsweise von Parametern.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigene Eigenschaft enthält, sondern das Objekt, das verwendet wird, um die Funktion aufzurufen. Sie können dies beweisen, indem Sie eine Methode eines Objekts in der [Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer abhängig davon, wie eine Funktion aufgerufen wird, auch wenn die Funktion bei der Erstellung auf einem Objekt definiert wurde:

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

Wird die Funktion aufgerufen, ohne dass sie auf etwas anderes als `undefined` bezogen wird, ist `this` - aber nur, wenn die Funktion im strikten Modus ist.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im nicht-strikten Modus stellt ein spezieller Prozess namens [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) sicher, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

- Wenn eine Funktion mit `this`, das auf `undefined` oder `null` gesetzt ist, aufgerufen wird, wird `this` mit {{jsxref("globalThis")}} ersetzt.
- Wird die Funktion mit `this`, das auf einen primitiven Wert gesetzt ist, aufgerufen, wird `this` mit dem Wrapper-Objekt des primitiven Werts ersetzt.

```js
function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

Bei typischen Funktionsaufrufen wird `this` implizit wie ein Parameter über das Präfix der Funktion (der Teil vor dem Punkt) übergeben. Sie können auch explizit den Wert von `this` mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} oder {{jsxref("Reflect.apply()")}} setzen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem spezifischen Wert von `this` erstellen, die sich nicht ändert, egal wie die Funktion aufgerufen wird. Bei Verwendung dieser Methoden gelten weiterhin die oben genannten Regeln zur `this`-Substitution, wenn die Funktion nicht-strikt ist.

#### Callbacks

Wenn eine Funktion als Callback übergeben wird, hängt der Wert von `this` davon ab, wie der Callback aufgerufen wird, was vom Implementierer der API bestimmt wird. Callbacks werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (direkt ohne Anfügen an ein Objekt), was bedeutet, dass der Wert von `this` das globale Objekt ist ({{jsxref("globalThis")}}), wenn die Funktion nicht streng ist. Dies ist der Fall für [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), den [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor, etc.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs ermöglichen es, einen `this`-Wert für die Aufrufe des Callbacks festzulegen. Zum Beispiel akzeptieren alle iterativen Array-Methoden und verwandte Methoden wie {{jsxref("Set.prototype.forEach()")}} ein optionales `thisArg`-Argument.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Callback mit einem anderen `this`-Wert als `undefined` aufgerufen. Zum Beispiel wird der `reviver`-Parameter in {{jsxref("JSON.parse()")}} und der `replacer`-Parameter in {{jsxref("JSON.stringify()")}} mit `this` auf das Objekt gesetzt, zu dem die zu parsierende/zu serialisierende Eigenschaft gehört.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umgebenden lexikalischen Kontexts bei. Mit anderen Worten, beim Auswerten des Körpers einer Arrow-Funktion erstellt die Sprache keine neue `this`-Bindung.

Zum Beispiel ist in globalem Code `this` immer `globalThis`, unabhängig von der Strenge, aufgrund der [globalen Kontextbindung](#globaler_kontext):

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen erzeugen einen [Closure](/de/docs/Web/JavaScript/Guide/Closures) über den `this`-Wert ihres umgebenden Scopes, was bedeutet, dass Arrow-Funktionen so funktionieren, als wären sie "automatisch gebunden" — egal, wie sie aufgerufen werden, `this` ist an das gebunden, was es war, als die Funktion erstellt wurde (im obigen Beispiel das globale Objekt). Das Gleiche gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt werden: Ihr `this` bleibt das des umgebenden lexikalischen Kontexts. [Siehe Beispiel unten](#this_in_arrow-funktionen).

Darüber hinaus wird, wenn Arrow-Funktionen mit `call()`, `bind()` oder `apply()` aufgerufen werden, der `thisArg`-Parameter ignoriert. Sie können mit diesen Methoden dennoch andere Argumente übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wenn eine Funktion als Konstruktor (mit dem {{jsxref("Operators/new", "new")}}-Schlüsselwort) verwendet wird, ist ihr `this` an das neue Objekt gebunden, das erstellt wird, unabhängig davon, auf welchem Objekt die Konstruktorfunktion aufgerufen wird. Der Wert von `this` wird zum Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht-primitiven Wert zurück.

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

Im zweiten Beispiel (`C2`) wird, weil ein Objekt während der Kontruktion zurückgegeben wurde, das neue Objekt, an das `this` gebunden war, verworfen. (Dies macht die Anweisung `this.a = 37;` im Wesentlichen zu "toten" Code. Es ist nicht genau tot, da es ausgeführt wird, aber es kann ohne äußere Auswirkungen entfernt werden.)

#### super

Wenn eine Funktion in der Form `super.method()` aufgerufen wird, hat das `this` innerhalb der `method`-Funktion denselben Wert wie das `this` um den `super.method()`-Aufruf herum und ist im Allgemeinen nicht gleich dem Objekt, auf das sich `super` bezieht. Das liegt daran, dass `super.method` kein Objektmitgliedszugriff wie die oben genannten ist — es ist eine spezielle Syntax mit verschiedenen Bindungsregeln. Beispiele finden Sie in der [`super`-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte unterteilt werden: statisch und instanziiert. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Initialisierungen von Instanzvariablen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) gehören zum Instanzkontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, statische Feldinitialisierungen und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Klassenkonstruktoren werden immer mit `new` aufgerufen, sodass ihr Verhalten dem der [Funktionskonstruktoren](#konstruktoren) entspricht: Der `this`-Wert ist die neue Instanz, die erstellt wird. Klassenmethoden verhalten sich wie Methoden in Objektliteralen — der `this`-Wert ist das Objekt, auf dem die Methode aufgerufen wird. Wenn die Methode nicht auf ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf der Klasse aufgerufen, und `this` ist der Wert der Klasse (oder einer Unterklasse). Auch statische Initialisierungsblöcke werden mit `this`, das auf die aktuelle Klasse gesetzt ist, ausgewertet.

Feldinitialisierungen werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` bewertet, das auf die Instanz gesetzt ist, die konstruiert wird. Statische Felder werden mit `this` bewertet, das auf die aktuelle Klasse gesetzt ist. Aus diesem Grund sind Arrow-Funktionen in Initialisierungen von Feldern [an die Instanz für Instanzfelder und an die Klasse für statische Felder gebunden](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

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

Im Gegensatz zu Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine anfängliche `this`-Bindung. Das Aufrufen von {{jsxref("Operators/super", "super()")}} erstellt innerhalb des Konstruktors eine `this`-Bindung und hat im Wesentlichen denselben Effekt, wie das Auswerten der folgenden Zeile von Code, wobei `Base` die Basisklasse ist:

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

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; kann innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen) definiert im globalen Scope sein) hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript ausgeführt wird. Wie bei [Callbacks](#callbacks) wird der `this`-Wert vom Runtime-Umfeld (dem Aufrufer) bestimmt.

Auf oberster Ebene eines Skripts bezieht sich `this` auf {{jsxref("globalThis")}}, sowohl im strikten Modus als auch nicht. Dies ist generell dasselbe wie das globale Objekt — zum Beispiel, wenn die Quelle in ein HTML-[`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element eingefügt und als Skript ausgeführt wird, dann `this === window`.

> [!NOTE] > `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) — das ist der Fall für Browser und Node — aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt in Verbindung steht.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wird die Quelle als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen (für HTML bedeutet dies das Hinzufügen von `type="module"` zum `<script>`-Tag), ist `this` immer `undefined` auf oberster Ebene.

Wird die Quelle mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt, ist `this` für [direkte eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) dasselbe wie der umschließende Kontext oder `globalThis` (als ob es in einem separaten globalen Skript ausgeführt würde) für indirekte eval.

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

Beachten Sie, dass einiger Quellcode, der sich wie der globale Scope darstellt, tatsächlich in einer Funktion ausgeführt wird. Beispielsweise werden Node.js-CommonJS-Module in eine Funktion eingeschlossen und mit dem `this`-Wert, der auf `module.exports` gesetzt ist, ausgeführt. [Event-Handler-Attribute](#this_in_inline-event-handlern) werden mit `this`, das auf das Element gesetzt ist, an dem sie angebracht sind, ausgeführt.

Objektliterale erstellen keinen `this`-Scope — nur innerhalb des Objekts definierte Funktionen (Methoden) tun dies. Die Verwendung von `this` in einem Objektliteral erbt den Wert aus dem umgebenden Scope.

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

Mit `call()` und `apply()` können Sie den Wert von `this` wie ein explizites Parameter übergeben.

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

Im nicht-strikten Modus, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, wird der `this`-Wert mit einem Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive wie `7` oder `'foo'` werden mit dem zugehörigen Konstruktor in ein Objekt umgewandelt, sodass die primitive Zahl `7` in eine {{jsxref("Number")}}-Wrapper-Klasse und die Zeichenkette `'foo'` in eine {{jsxref("String")}}-Wrapper-Klasse konvertiert wird.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind()-Methode

Ein Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erzeugt eine neue Funktion mit demselben Körper und Scope wie `f`, aber der Wert von `this` ist dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

Arrow-Funktionen erzeugen Closure über den `this`-Wert des umgebenden Ausführungskontexts. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt, sodass ihr `this` dauerhaft an das `this` ihrer umgebenden Funktion gebunden ist. Der Wert von `this` innerhalb von `getThisGetter` kann im Aufruf festgelegt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion festlegt. Wir nehmen an, dass `getThisGetter` eine nicht-strikte Funktion ist, was bedeutet, dass sie in einem nicht-strikten Script enthalten ist und nicht weiter in einer Klasse oder einer strikten Funktion verschachtelt ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen, wodurch `this` an `obj` in ihrem Körper gebunden wird. Die zurückgegebene Funktion wird einer Variable `fn` zugewiesen. Jetzt, wenn `fn` aufgerufen wird, ist der Wert von `this`, der zurückgegeben wird, immer noch der, der im Aufruf von `getThisGetter` festgelegt wurde, der `obj` ist. Wäre die zurückgegebene Funktion keine Arrow-Funktion, würden solche Aufrufe den `this`-Wert auf `globalThis` setzen, da `getThisGetter` nicht strikt ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber seien Sie vorsichtig, wenn Sie die Methode von `obj` entbinden, ohne sie aufzurufen, denn `getThisGetter` ist immer noch eine Methode, die einen variierenden `this`-Wert hat. Ein Aufruf von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, da er dem `this` von `fn2()` folgt, welches `globalThis` ist, da es ohne Anheftung an ein Objekt aufgerufen wird.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist sehr nützlich beim Definieren von Callbacks. Normalerweise erstellt jeder Funktionsausdruck seine eigene `this`-Bindung, die den `this`-Wert des übergeordneten Scopes verdeckt. Jetzt können Sie Funktionen als Arrow-Funktionen definieren, wenn Ihnen der `this`-Wert egal ist, und nur `this`-Bindungen dort erstellen, wo es Sie interessiert (z.B. in Klassenmethoden). Siehe [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welchem Objekt die Eigenschaft zugegriffen wird, nicht darauf, auf welchem Objekt die Eigenschaft definiert ist. Eine Funktion, die als Getter oder Setter verwendet wird, hat ihr `this` an das Objekt gebunden, von dem die Eigenschaft gesetzt oder abgerufen wird.

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

Wenn eine Funktion als Ereignishandler verwendet wird, ist ihr `this`-Parameter an das DOM-Element gebunden, auf dem der Listener platziert ist (einige Browser folgen dieser Konvention nicht für Listener, die dynamisch mit Methoden außer [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurden).

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

Wenn der Code von einem Inline-[Event-Handler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) aus aufgerufen wird, ist `this` an das DOM-Element gebunden, auf dem der Listener platziert ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Der obige Alert zeigt `button`. Beachten Sie jedoch, dass nur der äußere Scope auf diese Weise gebunden ist:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` gebunden (d.h. das Standardobjekt im nicht-strikten Modus, wenn `this` im Aufruf nicht übergeben wird).

### Gebundene Methoden in Klassen

Genau wie bei normalen Funktionen hängt der Wert von `this` in Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten so zu überschreiben, dass `this` in Klassen immer auf die Klasseninstanz verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

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
> Klassen sind immer im strikten Modus. Aufrufe von Methoden mit einem nicht definierten `this` führen zu einem Fehler, wenn die Methode versucht, auf Eigenschaften von `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError, weil die 'sayHi'-Methode versucht, auf 'this.name' zuzugreifen, aber 'this' im strikten Modus nichts ist.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden das gleiche Problem haben wie [die Verwendung von Arrow-Funktionen für Klasseigenschaften](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse hat ihre eigene Kopie der Methode, was den Speicherverbrauch erhöht. Nutzen Sie es nur dann, wenn es absolut notwendig ist. Sie können auch die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als Getter, der eine gebundene Funktion zurückgibt, wenn sie aufgerufen wird, und speichern Sie sie, sodass die Funktion nur einmal und nur erstellt wird, wenn dies erforderlich ist.

### this in mit-Anweisungen

Obwohl [`mit`](/de/docs/Web/JavaScript/Reference/Statements/with) Anweisungen veraltet sind und im strikten Modus nicht verfügbar sind, dienen sie immer noch als eine Ausnahme zu den normalen `this`-Binding-Regeln. Wird eine Funktion innerhalb einer `with`-Anweisung aufgerufen und ist diese Funktion eine Eigenschaft des Scope-Objekts, wird der `this`-Wert an das Scope-Objekt gebunden, als ob das `obj1.`-Präfix existiert.

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
