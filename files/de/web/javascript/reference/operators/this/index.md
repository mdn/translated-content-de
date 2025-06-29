---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Operators")}}

Das **`this`** Schlüsselwort bezieht sich auf den Kontext, in dem ein Codeabschnitt, wie z.B. der Rumpf einer Funktion, ausgeführt werden soll. Am häufigsten wird es in Methoden von Objekten verwendet, wobei sich `this` auf das Objekt bezieht, an das die Methode angehängt ist, sodass dieselbe Methode auf verschiedenen Objekten wiederverwendet werden kann.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (Laufzeit-{{Glossary("binding", "Bindung")}}), nicht davon, wie sie definiert ist. Wenn eine reguläre Funktion als Methode eines Objekts aufgerufen wird (`obj.method()`), zeigt `this` auf dieses Objekt. Wenn sie als eigenständige Funktion aufgerufen wird (nicht an ein Objekt gebunden: `func()`), bezieht sich `this` typischerweise auf das {{Glossary("Global_object", "globale Objekt")}} (im Nicht-Strict-Modus) oder `undefined` (im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erstellen, deren `this`-Bindung sich nicht ändert, und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können ebenfalls den `this`-Wert für einen bestimmten Aufruf festlegen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in der Handhabung von `this`: Sie übernehmen `this` aus dem übergeordneten Gültigkeitsbereich zum Zeitpunkt ihrer Definition. Dieses Verhalten macht Arrow-Funktionen besonders nützlich für Rückrufe und die Erhaltung des Kontexts. Allerdings haben Arrow-Funktionen keine eigene `this`-Bindung. Daher kann ihr `this`-Wert nicht durch die Methoden `bind()`, `apply()` oder `call()` gesetzt werden, noch zeigt es auf das aktuelle Objekt in Objektmethoden.

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

Im Nicht-Strict-Modus ist `this` immer eine Referenz auf ein Objekt. Im Strict-Modus kann es jeden Wert annehmen. Für weitere Informationen darüber, wie der Wert bestimmt wird, siehe die Beschreibung unten.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Denken Sie an `this` wie an einen versteckten Parameter einer Funktion – genauso wie die in der Funktionsdefinition deklarierten Parameter, ist `this` eine Bindung, die die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Für eine reguläre Funktion (keine Arrow-Funktion, gebundene Funktion usw.) ist der Wert von `this` das Objekt, auf das die Funktion zugreift. Anders ausgedrückt, wenn der Funktionsaufruf in der Form `obj.f()` erfolgt, bezieht sich `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, wie die Funktion dieselbe ist, der Wert von `this` jedoch unterschiedlich ist, basierend darauf, wie sie aufgerufen wird. Dies ist analog dazu, wie Funktionsparameter funktionieren.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigene Eigenschaft besitzt, sondern das Objekt, das zum Aufrufen der Funktion verwendet wird. Sie können dies beweisen, indem Sie eine Methode eines Objekts in der [Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer basierend darauf, wie eine Funktion aufgerufen wird, selbst wenn die Funktion bei der Erstellung auf einem Objekt definiert wurde:

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

Wenn der Wert, auf dem die Methode zugegriffen wird, ein primitiver Wert ist, wird `this` ebenfalls ein primitiver Wert sein – jedoch nur, wenn die Funktion im Strict-Modus ist.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wenn die Funktion aufgerufen wird, ohne auf etwas zuzugreifen, wird `this` auf `undefined` gesetzt — jedoch nur, wenn die Funktion im Strict-Modus ist.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im Nicht-Strict-Modus stellt ein spezieller Prozess namens [`this` Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) sicher, dass der Wert von `this` immer ein Objekt ist. Dies bedeutet:

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

Bei typischen Funktionsaufrufen wird `this` implizit wie ein Parameter durch das Präfix der Funktion (der Teil vor dem Punkt) übergeben. Sie können auch den Wert von `this` explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} oder {{jsxref("Reflect.apply()")}} festlegen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem bestimmten Wert von `this` erstellen, der sich nicht ändert, unabhängig davon, wie die Funktion aufgerufen wird. Wenn Sie diese Methoden verwenden, gelten die oben beschriebenen `this`-Substitutionsregeln weiterhin, wenn die Funktion nicht im Strict-Modus ist.

#### Rückrufe

Wenn eine Funktion als Rückruf übergeben wird, hängt der Wert von `this` davon ab, wie der Rückruf aufgerufen wird, was vom Implementierer der API bestimmt wird. Rückrufe werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (direkter Aufruf ohne Anbindung an ein Objekt), was bedeutet, dass, wenn die Funktion nicht im Strict-Modus ist, der Wert von `this` das globale Objekt ({{jsxref("globalThis")}}) ist. Dies ist der Fall bei [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), dem [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor usw.

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

Gelegentlich wird ein Rückruf mit einem anderen `this`-Wert als `undefined` aufgerufen. Beispielsweise werden der `reviver` Parameter von {{jsxref("JSON.parse()")}} und der `replacer` Parameter von {{jsxref("JSON.stringify()")}} beide mit `this` auf das Objekt gesetzt, zu dem die zu parsende/zu serialisierende Eigenschaft gehört.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umschließenden lexikalischen Kontexts von `this` bei. Anders ausgedrückt, bei der Auswertung des Rumpfes einer Arrow-Funktion erstellt die Sprache keine neue `this`-Bindung.

Zum Beispiel ist in globalem Code `this` immer `globalThis`, unabhängig von der Striktheit, aufgrund der [globalen Kontex] (#globaler_kontext) Bindung:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen erstellen eine [Closure](/de/docs/Web/JavaScript/Guide/Closures) über den `this`-Wert ihres umgebenden Gültigkeitsbereichs, was bedeutet, dass Arrow-Funktionen so verhalten, als wären sie „automatisch gebunden“ — egal, wie sie aufgerufen werden, `this` ist an das gebunden, was es war, als die Funktion erstellt wurde (im obigen Beispiel das globale Objekt). Dasselbe gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt werden: ihr `this` bleibt das des umschließenden lexikalischen Kontexts. [Siehe Beispiel unten](#this_in_arrow-funktionen).

Darüber hinaus, wenn Arrow-Funktionen mit `call()`, `bind()` oder `apply()` aufgerufen werden, wird der `thisArg`-Parameter ignoriert. Sie können jedoch immer noch andere Argumente mit diesen Methoden übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wenn eine Funktion als Konstruktor verwendet wird (mit dem Schlüsselwort {{jsxref("Operators/new", "new")}}), ist ihr `this` an das neue Objekt gebunden, das konstruiert wird, unabhängig davon, auf welches Objekt die Konstruktorfunktion zugreift. Der Wert von `this` wird zum Wert des `new` Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht-primitiven Wert zurück.

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

Im zweiten Beispiel (`C2`), da ein Objekt während der Konstruktion zurückgegeben wurde, wird das neue Objekt, an das `this` gebunden war, verworfen. (Dies macht die Anweisung `this.a = 37;` zu einem toten Code. Es ist nicht genau tot, weil es ausgeführt wird, aber es kann ohne äußere Auswirkungen eliminiert werden.)

#### super

Wenn eine Funktion in der Form `super.method()` aufgerufen wird, ist das `this` innerhalb der `method`-Funktion derselbe Wert wie der `this`-Wert um den `super.method()`-Aufruf und ist im Allgemeinen nicht gleich dem Objekt, auf das sich `super` bezieht. Dies liegt daran, dass `super.method` kein Objektzugriff ist wie die oben genannten — es ist eine spezielle Syntax mit unterschiedlichen Bindungsregeln. Für Beispiele, siehe das [`super`-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte aufgeteilt werden: statisch und instanziiert. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Initialisierungen von Instanzfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)) gehören zum Instanzenkontext. [Statische Methoden](/de/docs/Web/JavaScript/Reference/Classes/static), statische Initialisierungen von Feldern und [statischen Initialisierungsblöcken](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Klassenkonstruktoren werden immer mit `new` aufgerufen, sodass ihr Verhalten dem [Funktionskonstruktor](#konstruktoren) entspricht: der `this`-Wert ist die neu erzeugte Instanz. Klassenmethoden verhalten sich wie Methoden in Objektliteralen — der `this`-Wert ist das Objekt, auf das die Methode zugegriffen wird. Wenn die Methode nicht auf ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf die Klasse zugegriffen, und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden ebenfalls mit `this` auf die aktuelle Klasse gesetzt ausgewertet.

Feldinitialisierungen werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` auf die zu konstruierende Instanz gesetzt ausgewertet. Statische Felder werden mit `this` auf die aktuelle Klasse gesetzt ausgewertet. Daher sind Arrow-Funktionen in Feldinitialisierungen an die Instanz für Instanzfelder gebunden und an die Klasse für statische Felder. [Siehe Arrow-Funktionen in Feldinitialisierungen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

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

Im Gegensatz zu Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine anfängliche `this`-Bindung. Ein Aufruf von {{jsxref("Operators/super", "super()")}} innerhalb des Konstruktors erstellt eine `this`-Bindung und hat im Wesentlichen den Effekt, die folgende Codezeile auszuführen, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Auf `this` vor dem Aufruf von `super()` zu verweisen, führt zu einem Fehler.

Abgeleitete Klassen dürfen nicht zurückkehren, bevor `super()` aufgerufen wurde, es sei denn, der Konstruktor gibt ein Objekt zurück (damit der `this`-Wert überschrieben wird) oder die Klasse hat keinen Konstruktor.

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

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; kann in [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen) definiert im globalen Gültigkeitsbereich verwendet werden) hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript läuft. Wie bei [Rückrufen](#rückrufe) wird der `this`-Wert von der Laufzeitumgebung (dem Aufrufer) bestimmt.

Auf der obersten Ebene eines Skripts bezieht sich `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob der Strict-Modus verwendet wird oder nicht. Dies entspricht im Allgemeinen dem globalen Objekt - beispielsweise, wenn der Code in ein HTML [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element eingefügt und als Skript ausgeführt wird, ist `this === window`.

> [!NOTE]
> `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht sie zu globalen Variablen) - dies ist der Fall für Browser und Node - aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt in Verbindung steht.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wenn der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen wird (für HTML bedeutet dies, `type="module"` im `<script>`-Tag hinzuzufügen), ist `this` immer `undefined` auf der obersten Ebene.

Wenn der Code mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt wird, ist `this` derselbe wie der umgebende Kontext bei [direktem eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval), oder `globalThis` (als würde es in einem separaten globalen Skript ausgeführt) beim indirekten `eval`.

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

Beachten Sie, dass einige Quellcodes, obwohl es so aussieht, als ob sie sich im globalen Bereich befinden, tatsächlich in einer Funktion ausgeführt werden. Zum Beispiel werden Node.js-CommonJS-Module in einer Funktion verpackt und mit dem `this` Wert auf `module.exports` ausgeführt. [Ereignis-Handler-Attribute](#this_in_inline-ereignis-handlern) werden mit `this` auf das Element gesetzt, an das sie angehängt sind.

Objektliterale erstellen keinen `this`-Gültigkeitsbereich - nur Funktionen (Methoden), die innerhalb des Objekts definiert sind. Die Verwendung von `this` in einem Objektliteral übernimmt den Wert aus dem umgebenden Gültigkeitsbereich.

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

Mit `call()` und `apply()` können Sie den Wert von `this` übergeben, als wäre es ein expliziter Parameter.

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

Im Nicht-Strict-Modus, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, wird der `this`-Wert durch ein Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitiva wie `7` oder `'foo'` werden in ein Objekt umgewandelt, indem der zugehörige Konstruktor verwendet wird, sodass die primitive Zahl `7` in eine {{jsxref("Number")}}-Wrapper-Klasse und die Zeichenkette `'foo'` in eine {{jsxref("String")}}-Wrapper-Klasse umgewandelt wird.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind() Methode

Ein Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt eine neue Funktion mit demselben Rumpf und Gültigkeitsbereich wie `f`, aber der Wert von `this` ist dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

Arrow-Funktionen erstellen Closures über den `this`-Wert des umschließenden Ausführungskontexts. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt, daher ist ihr `this` dauerhaft an das `this` ihrer umschließenden Funktion gebunden. Der Wert von `this` innerhalb `getThisGetter` kann durch den Aufruf festgelegt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion festlegt. Wir nehmen an, dass `getThisGetter` eine nicht-strikte Funktion ist, was bedeutet, dass sie in einem nicht-strikten Skript enthalten ist und nicht weiter in einer Klasse oder strikten Funktion verschachtelt ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen, was `this` an `obj` innerhalb ihres Körpers bindet. Die zurückgegebene Funktion wird einer Variable `fn` zugewiesen. Jetzt, wenn `fn` aufgerufen wird, ist der Wert von `this`, der zurückgegeben wird, immer noch derjenige, der durch den Aufruf von `getThisGetter` festgelegt wurde, nämlich `obj`. Wenn die zurückgegebene Funktion keine Arrow-Funktion wäre, würden solche Aufrufe den `this`-Wert zu `globalThis` ändern, weil `getThisGetter` nicht-strikt ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber seien Sie vorsichtig, wenn Sie die Methode von `obj` loslösen, ohne sie aufzurufen, denn `getThisGetter` ist immer noch eine Methode, die einen variierenden `this`-Wert hat. Das Aufrufen von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, weil es dem `this` von `fn2()` folgt, was `globalThis` ist, da es ohne Anbindung an ein Objekt aufgerufen wird.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist sehr nützlich beim Definieren von Rückrufen. Normalerweise erstellt jeder Funktionsausdruck seine eigene `this`-Bindung, die den `this`-Wert des oberen Bereichs überdeckt. Jetzt können Sie Funktionen als Arrow-Funktionen definieren, wenn Ihnen der `this`-Wert egal ist, und nur diese `this`-Bindungen erstellen, wo Sie es tun (z.B. in Klassenmethoden). Siehe [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Setzern basiert darauf, auf welches Objekt die Eigenschaft zugegriffen wird, nicht darauf, auf welches Objekt die Eigenschaft definiert ist. Eine Funktion, die als Getter oder Setter verwendet wird, hat ihr `this` an das Objekt gebunden, von dem die Eigenschaft gesetzt oder abgerufen wird.

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

Wenn eine Funktion als Ereignis-Handler verwendet wird, ist ihr `this`-Parameter an das DOM-Element gebunden, auf das der Listener platziert ist (einige Browser folgen dieser Konvention nicht für Listener, die dynamisch mit anderen Methoden als [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurden).

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

### this in Inline-Ereignis-Handlern

Wenn der Code aus einem Inline-[Ereignis-Handler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) aufgerufen wird, ist sein `this` an das DOM-Element gebunden, auf das der Listener platziert ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Der obige Alarm zeigt `button`. Beachten Sie jedoch, dass nur der äußere Gültigkeitsbereich sein `this` auf diese Weise gebunden hat:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` gebunden (d.h. das Standardobjekt im Nicht-Strict-Modus, bei dem `this` nicht im Aufruf übergeben wird).

### Gebundene Methoden in Klassen

Genau wie bei regulären Funktionen hängt der Wert von `this` innerhalb von Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten außer Kraft zu setzen, sodass `this` innerhalb von Klassen immer auf die Klasseninstanz verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

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
> carSayHi(); // TypeError, da die 'sayHi'-Methode versucht, auf 'this.name' zuzugreifen, aber 'this' im Strict-Modus undefiniert ist.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden dasselbe Problem haben wie [die Verwendung von Arrow-Funktionen für Klassen-Eigenschaften](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse wird ihre eigene Kopie der Methode haben, was den Speicherverbrauch erhöht. Verwenden Sie dies nur, wo es absolut notwendig ist. Sie können auch die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als einen Getter, der bei Zugriff eine gebundene Funktion zurückgibt und sie speichert, sodass die Funktion nur einmal erstellt und erstellt wird, wenn dies erforderlich ist.

### this in with-Anweisungen

Obwohl [with](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungen veraltet und im Strict-Modus nicht verfügbar sind, dienen sie immer noch als Ausnahme zu den üblichen `this`-Bindungsregeln. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Scope-Objekts ist, wird der `this`-Wert an das Scope-Objekt gebunden, als ob das `obj1.`-Präfix vorhanden wäre.

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
