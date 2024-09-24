---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Das **`this`** Schlüsselwort bezieht sich auf den Kontext, in dem ein Codeabschnitt, beispielsweise ein Funktionskörper, ausgeführt werden soll. Am häufigsten wird es in Objektmethoden verwendet, wobei `this` auf das Objekt verweist, an das die Methode gebunden ist, was es ermöglicht, dieselbe Methode bei verschiedenen Objekten wiederzuverwenden.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird (zur Laufzeit {{glossary("binding")}}), nicht wie sie definiert wird. Wenn eine normale Funktion als Methode eines Objekts aufgerufen wird (`obj.method()`), zeigt `this` auf dieses Objekt. Wenn sie als eigenständige Funktion aufgerufen wird (nicht an ein Objekt angehängt: `func()`), bezieht sich `this` typischerweise auf das [globale Objekt](/de/docs/Glossary/Global_object) (im Nicht-Strict-Modus) oder auf `undefined` (im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Die Methode {{jsxref("Function.prototype.bind()")}} kann eine Funktion erstellen, deren `this`-Bindung sich nicht ändert, und die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können ebenfalls den `this`-Wert für einen bestimmten Aufruf setzen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterscheiden sich in der Handhabung von `this`: Sie erben `this` vom übergeordneten Scope zum Zeitpunkt ihrer Definition. Dieses Verhalten macht Arrow-Funktionen besonders nützlich für Rückrufe und zur Kontexterhaltung. Arrow-Funktionen haben jedoch keine eigene `this`-Bindung. Daher kann ihr `this`-Wert weder durch `bind()`, `apply()` noch `call()` Methoden gesetzt werden, noch zeigt er in Objektmethoden auf das aktuelle Objekt.

{{EmbedInteractiveExample("pages/js/expressions-this.html")}}

## Syntax

```js-nolint
this
```

### Wert

Im Nicht-Strict-Modus ist `this` immer eine Referenz auf ein Objekt. Im Strict-Modus kann es jeden Wert haben. Weitere Informationen darüber, wie der Wert bestimmt wird, finden Sie in der nachfolgenden Beschreibung.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es erscheint: Funktion, Klasse oder global.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Betrachten Sie `this` als einen versteckten Parameter einer Funktion — genau wie die in der Funktionsdefinition deklarierten Parameter ist `this` eine Bindung, die die Sprache für Sie erstellt, wenn der Funktionskörper ausgewertet wird.

Für eine normale Funktion (keine Arrow-Funktion, gebundene Funktion usw.) ist der Wert von `this` das Objekt, auf dem die Funktion zugegriffen wird. In anderen Worten, wenn der Funktionsaufruf die Form `obj.f()` hat, dann bezieht sich `this` auf `obj`. Zum Beispiel:

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

Beachten Sie, wie die Funktion dieselbe ist, aber basierend darauf, wie sie aufgerufen wird, ist der Wert von `this` unterschiedlich. Dies ist analog zu der Funktionsweise von Funktionsparametern.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigene Eigenschaft hat, sondern das Objekt, das verwendet wird, um die Funktion aufzurufen. Sie können dies beweisen, indem Sie eine Methode eines Objekts in der [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` ändert sich immer basierend darauf, wie eine Funktion aufgerufen wird, auch wenn die Funktion bei der Objekterstellung definiert wurde:

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

Wenn der Wert, auf dem die Methode zugegriffen wird, ein primitiver Wert ist, wird `this` ebenfalls ein primitiver Wert sein – jedoch nur, wenn sich die Funktion im Strict-Modus befindet.

```js
function getThisStrict() {
  "use strict"; // Betreten des Strict-Modus
  return this;
}

// Nur zur Demonstration - Sie sollten eingebaute Prototypen nicht verändern
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wenn die Funktion ohne jeglichen Zugriff auf etwas aufgerufen wird, wird `this` `undefined` sein - jedoch nur, wenn die Funktion im Strict-Modus ist.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Im Nicht-Strict-Modus sorgt ein spezieller Prozess namens [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) dafür, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

- Wenn eine Funktion mit `this`, das auf `undefined` oder `null` gesetzt ist, aufgerufen wird, wird `this` durch {{jsxref("globalThis")}} ersetzt.
- Wenn die Funktion mit `this`, das auf einen primitiven Wert gesetzt ist, aufgerufen wird, wird `this` durch das Wrapper-Objekt des primitiven Werts ersetzt.

```js
function getThis() {
  return this;
}

// Nur zur Demonstration - Sie sollten eingebaute Prototypen nicht verändern
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

In typischen Funktionsaufrufen wird `this` implizit wie ein Parameter durch das Präfix der Funktion (der Teil vor dem Punkt) übergeben. Sie können den Wert von `this` auch explizit mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} oder {{jsxref("Reflect.apply()")}} setzen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion mit einem spezifischen Wert von `this` erstellen, der sich unabhängig davon, wie die Funktion aufgerufen wird, nicht ändert. Bei der Nutzung dieser Methoden gelten weiterhin die oben genannten `this`-Substitutionsregeln, wenn die Funktion nicht im Strict-Modus ist.

#### Rückrufe

Wenn eine Funktion als Rückruf übergeben wird, hängt der Wert von `this` davon ab, wie der Rückruf aufgerufen wird, was vom Implementierer der API bestimmt wird. Rückrufe werden _typischerweise_ mit einem `this`-Wert von `undefined` aufgerufen (ein direkter Aufruf ohne Anbindung an ein Objekt), was bedeutet, dass, wenn die Funktion nicht im Strict-Modus ist, der Wert von `this` das globale Objekt ({{jsxref("globalThis")}}) ist. Dies ist der Fall bei [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), dem [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor usw.

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Einige APIs erlauben es Ihnen, einen `this`-Wert für Aufrufe des Rückrufs festzulegen. Beispielsweise akzeptieren alle iterativen Array-Methoden und verwandte Methoden wie {{jsxref("Set.prototype.forEach()")}} einen optionalen `thisArg`-Parameter.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Rückruf mit einem `this`-Wert, der nicht `undefined` ist, aufgerufen. Beispielsweise wird der `reviver`-Parameter von {{jsxref("JSON.parse()")}} und der `replacer`-Parameter von {{jsxref("JSON.stringify()")}} mit `this` aufgerufen, das auf das Objekt gesetzt ist, zu dem die zu parsernder/serialisierender Eigenschaft gehört.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert des umgebenden lexikalischen Kontexts von `this` bei. Mit anderen Worten, beim Auswerten des Funktionskörpers einer Arrow-Funktion erstellt die Sprache keine neue `this`-Bindung.

Beispielsweise ist im globalen Code `this` immer `globalThis`, unabhängig von der Striktheit, aufgrund der [globalen Kontext](#globaler_kontext)-Bindung:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen erstellen einen [Abschluss](/de/docs/Web/JavaScript/Closures) über den `this`-Wert ihres umgebenden Scopes, was bedeutet, dass Arrow-Funktionen sich so verhalten, als ob sie "automatisch gebunden" wären — unabhängig von der Art ihres Aufrufs ist `this` an den Wert gebunden, den es bei der Erstellung der Funktion hatte (im obigen Beispiel das globale Objekt). Dasselbe gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt werden: ihr `this` bleibt das des umschließenden lexikalischen Kontexts. [Siehe Beispiel unten](#this_in_arrow-funktionen).

Darüber hinaus wird beim Aufruf von Arrow-Funktionen unter Verwendung von `call()`, `bind()` oder `apply()` der `thisArg`-Parameter ignoriert. Sie können jedoch immer noch andere Argumente mit diesen Methoden übergeben.

```js
const obj = { name: "obj" };

// Versuch, this mit call zu setzen
console.log(foo.call(obj) === globalObject); // true

// Versuch, this mit bind zu setzen
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wenn eine Funktion als Konstruktor (mit dem Schlüsselwort {{jsxref("Operators/new", "new")}}) verwendet wird, ist ihr `this` an das neue Objekt gebunden, das konstruiert wird, unabhängig davon, auf welches Objekt die Konstruktorfunktion zugegriffen wird. Der Wert von `this` wird zum Wert des `new`-Ausdrucks, es sei denn, der Konstruktor gibt einen anderen nicht-primitiven Wert zurück.

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

Im zweiten Beispiel (`C2`), weil ein Objekt während der Konstruktion zurückgegeben wurde, wird das neue Objekt, an das `this` gebunden war, verworfen. (Dies macht die Anweisung `this.a = 37;` im Wesentlichen zu einem toten Code. Es ist nicht genau tot, da es ausgeführt wird, aber es kann ohne Auswirkungen von außen entfernt werden.)

#### super

Wenn eine Funktion in der `super.method()`-Form aufgerufen wird, ist das `this` innerhalb der Funktion `method` derselbe Wert wie der `this`-Wert rund um den `super.method()`-Aufruf und ist im Allgemeinen nicht gleich dem Objekt, auf das sich `super` bezieht. Dies liegt daran, dass `super.method` kein Objektzugriff wie die oben genannten ist — es ist eine besondere Syntax mit anderen Bindungsregeln. Für Beispiele siehe die [`super`-Referenz](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) kann in zwei Kontexte aufgeteilt werden: statisch und instanzbezogen. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Instanzfeldinitialisierer ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) gehören zum Instanzkontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, statische Feldinitialisierer und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der `this`-Wert ist in jedem Kontext unterschiedlich.

Klassenkonstruktoren werden immer mit `new` aufgerufen, daher ist ihr Verhalten das gleiche wie bei [Funktionskonstruktoren](#konstruktoren): der `this`-Wert ist die neue Instanz, die erstellt wird. Klassenmethoden verhalten sich wie Methoden in Objektliteralen — der `this`-Wert ist das Objekt, auf das die Methode zugegriffen wird. Wenn die Methode nicht auf ein anderes Objekt übertragen wird, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`. Sie sind Eigenschaften der Klasse selbst. Daher werden sie im Allgemeinen auf der Klasse aufgerufen, und `this` ist der Wert der Klasse (oder einer Unterklasse). Statische Initialisierungsblöcke werden ebenfalls ausgewertet, mit `this` auf die aktuelle Klasse eingestellt.

Feldinitialisierer werden ebenfalls im Kontext der Klasse ausgewertet. Instanzfelder werden mit `this` ausgewertet, das auf die instanziierte Instanz gesetzt ist. Statische Felder werden mit `this` ausgewertet, das auf die aktuelle Klasse gesetzt ist. Aus diesem Grund werden Arrow-Funktionen in Feldinitialisierern auf die Instanz für Instanzfelder und auf die Klasse für statische Felder [gebunden](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

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

Im Gegensatz zu Basisklassenkonstruktoren haben abgeleitete Konstruktoren keine anfängliche `this`-Bindung. Ein Aufruf von {{jsxref("Operators/super", "super()")}} erstellt eine `this`-Bindung im Konstruktor und hat im Wesentlichen den Effekt, die folgende Codezeile auszuwerten, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Ein Verweis auf `this` vor dem Aufruf von `super()` führt zu einem Fehler.

Abgeleitete Klassen dürfen nicht vor dem Aufruf von `super()` zurückkehren, es sei denn, der Konstruktor gibt ein Objekt zurück (wodurch der Wert von `this` überschrieben wird) oder die Klasse hat überhaupt keinen Konstruktor.

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
new Bad(); // ReferenceError: Muss den Superkonstruktor in einer abgeleiteten Klasse aufrufen, bevor 'this' zugegriffen wird oder von abgeleitetem Konstruktor zurückgekehrt wird
```

### Globaler Kontext

Im globalen Ausführungskontext (außerhalb von Funktionen oder Klassen; kann innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen) sein, die im globalen Scope definiert sind) hängt der `this`-Wert davon ab, in welchem Ausführungskontext das Skript ausgeführt wird. Wie bei [Rückrufen](#rückrufe) wird der `this`-Wert von der Laufzeitumgebung (dem Aufrufer) bestimmt.

Auf höchster Ebene eines Skripts bezieht sich `this` auf {{jsxref("globalThis")}}, unabhängig davon, ob der Strict-Modus aktiviert ist oder nicht. Dies ist im Allgemeinen dasselbe wie das globale Objekt — zum Beispiel, wenn die Quelle in ein HTML-Element [`<script>`](/de/docs/Web/HTML/Element/script) eingefügt und als Skript ausgeführt wird, gilt `this === window`.

> **Hinweis:** `globalThis` ist im Allgemeinen dasselbe Konzept wie das globale Objekt (d.h. das Hinzufügen von Eigenschaften zu `globalThis` macht es zu globalen Variablen) — dies ist der Fall bei Browsern und Node —, aber Hosts dürfen einen anderen Wert für `globalThis` bereitstellen, der nicht mit dem globalen Objekt in Verbindung steht.

```js
// In Webbrowsern ist das window-Objekt auch das globale Objekt:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wenn die Quelle als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen wird (für HTML bedeutet dies, `type="module"` zum `<script>`-Tag hinzuzufügen), ist `this` immer `undefined` auf höchster Ebene.

Wenn die Quelle mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt wird, ist `this` dasselbe wie der umgebende Kontext für [direktes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) oder `globalThis` (als ob es in einem separaten globalen Skript ausgeführt würde) für indirektes eval.

```js
function test() {
  // Direktes eval
  console.log(eval("this") === this);
  // Indirektes eval, nicht strikt
  console.log(eval?.("this") === globalThis);
  // Indirektes eval, strikt
  console.log(eval?.("'use strict'; this") === globalThis);
}

test.call({ name: "obj" }); // Gibt 3 "true" aus
```

Beachten Sie, dass einige Quellcodes, obwohl sie wie der globale Scope aussehen, tatsächlich beim Ausführen in eine Funktion eingebunden sind. Zum Beispiel werden Node.js CommonJS-Module in eine Funktion eingebunden und mit dem `this`-Wert, der auf `module.exports` gesetzt ist, ausgeführt. [Event-Handler-Attribute](#this_in_inline-event-handlern) werden mit `this` ausgeführt, das auf das Element eingestellt ist, an das sie gebunden sind.

Objektliterale erstellen keinen `this`-Scope — nur innerhalb des Objekts definierte Funktionen (Methoden) tun dies. Die Verwendung von `this` in einem Objektliteral erbt den Wert vom umgebenden Scope.

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
// Ein Objekt kann als erstes Argument an 'call'
// oder 'apply' übergeben werden, und 'this' wird daran gebunden.
const obj = { a: "Custom" };

// Mit var deklarierte Variablen werden zu Eigenschaften von 'globalThis'.
var a = "Global";

function whatsThis() {
  return this.a; // 'this' hängt davon ab, wie die Funktion aufgerufen wird
}

whatsThis(); // 'Global'; der 'this'-Parameter wird im Nicht-Strict-Modus auf 'globalThis' gesetzt
obj.whatsThis = whatsThis;
obj.whatsThis(); // 'Custom'; der 'this'-Parameter ist an obj gebunden
```

Mit `call()` und `apply()` können Sie den Wert von `this` so übergeben, als wäre er ein expliziter Parameter.

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

// Das erste Argument wird an den impliziten 'this'-Parameter gebunden; die verbleibenden
// Argumente werden an die benannten Parameter gebunden.
add.call(o, 5, 7); // 16

// Das erste Argument wird an den impliziten 'this'-Parameter gebunden; das zweite
// Argument ist ein Array, dessen Mitglieder an die benannten Parameter gebunden sind.
add.apply(o, [10, 20]); // 34
```

### this und Objektkonvertierung

Im Nicht-Strict-Modus, wenn eine Funktion mit einem `this`-Wert aufgerufen wird, der kein Objekt ist, wird der `this`-Wert mit einem Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive Werte wie `7` oder `'foo'` werden mit dem zugehörigen Konstruktor in ein Objekt umgewandelt, sodass die primitive Zahl `7` in eine {{jsxref("Number")}}-Wrapper-Klasse und der String `'foo'` in eine {{jsxref("String")}}-Wrapper-Klasse umgewandelt wird.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die bind()-Methode

Ein Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt eine neue Funktion mit demselben Körper und Scope wie `f`, aber der Wert von `this` ist dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

```js
function f() {
  return this.a;
}

const g = f.bind({ a: "azerty" });
console.log(g()); // azerty

const h = g.bind({ a: "yoo" }); // bind funktioniert nur einmal!
console.log(h()); // azerty

const o = { a: 37, f, g, h };
console.log(o.a, o.f(), o.g(), o.h()); // 37 37 azerty azerty
```

### this in Arrow-Funktionen

Arrow-Funktionen erstellen Abschlüsse über den `this`-Wert des umgebenden Ausführungskontexts. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`, die eine Funktion zurückgibt, die den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt, sodass ihr `this` dauerhaft an das `this` der umschließenden Funktion gebunden ist. Der Wert von `this` innerhalb von `getThisGetter` kann im Aufruf festgelegt werden, was wiederum den Rückgabewert der zurückgegebenen Funktion festlegt. Wir gehen davon aus, dass `getThisGetter` eine nicht-strikte Funktion ist, was bedeutet, dass sie sich in einem nicht-strikt Skript befindet und nicht weiter in einer Klasse oder strikten Funktion eingebettet ist.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen, was `this` an `obj` innerhalb seines Körpers bindet. Die zurückgegebene Funktion wird einer Variablen `fn` zugewiesen. Wenn `fn` jetzt aufgerufen wird, bleibt der Wert von `this` derjenige, der beim Aufruf von `getThisGetter` festgelegt wurde, also `obj`. Wäre die zurückgegebene Funktion keine Arrow-Funktion, würden solche Aufrufe dazu führen, dass `this` den Wert `globalThis` annimmt, da `getThisGetter` nicht strikt ist.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Aber seien Sie vorsichtig, wenn Sie die Methode von `obj` lösen, ohne sie aufzurufen, denn `getThisGetter` ist immer noch eine Methode, die einen variierenden `this`-Wert hat. Der Aufruf von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück, da es dem `this` von `fn2()` folgt, das `globalThis` ist, da es ohne Verbindung zu einem Objekt aufgerufen wird.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true im Nicht-Strict-Modus
```

Dieses Verhalten ist sehr nützlich beim Definieren von Rückrufen. Normalerweise erstellt jeder Funktionsausdruck seine eigene `this`-Bindung, die den `this`-Wert der oberen Ebene überschattet. Jetzt können Sie Funktionen als Arrow-Funktionen definieren, wenn Ihnen der `this`-Wert egal ist, und nur dort `this`-Bindungen erstellen, wo Sie es tun (z. B. in Klassenmethoden). Sehen Sie [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this mit einem Getter oder Setter

`this` in Gettern und Settern basiert darauf, auf welchem Objekt auf die Eigenschaft zugegriffen wird, nicht auf welchem Objekt die Eigenschaft definiert ist. Eine Funktion, die als Getter oder Setter verwendet wird, hat ihr `this` an das Objekt gebunden, von dem die Eigenschaft gesetzt oder abgerufen wird.

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

Wenn eine Funktion als Event-Handler verwendet wird, ist ihr `this`-Parameter an das DOM-Element gebunden, auf dem der Listener platziert ist (einige Browser folgen dieser Konvention nicht für Listener, die mit anderen Methoden als {{domxref("EventTarget/addEventListener", "addEventListener()")}} dynamisch hinzugefügt werden).

```js
// Wenn es als Listener aufgerufen wird, färbt sich das zugehörige Element blau
function bluify(e) {
  // Immer wahr
  console.log(this === e.currentTarget);
  // wahr, wenn currentTarget und target dasselbe Objekt sind
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// Holen Sie sich eine Liste jedes Elements im Dokument
const elements = document.getElementsByTagName("*");

// Fügen Sie bluify als Click-Listener hinzu, sodass sich
// das Element blau färbt, wenn darauf geklickt ist
for (const element of elements) {
  element.addEventListener("click", bluify, false);
}
```

### this in Inline-Event-Handlern

Wenn der Code aus einem Inline-[Event-Handler-Attribut](/de/docs/Web/HTML/Attributes#event_handler_attributes) aufgerufen wird, ist `this` an das DOM-Element gebunden, auf dem der Listener platziert ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Das obige Alert zeigt `button` an. Beachten Sie jedoch, dass nur der äußere Scope sein `this` auf diese Weise gebunden hat:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der `this`-Parameter der inneren Funktion an `globalThis` gebunden (d.h. das Standardobjekt im Nicht-Strict-Modus, wenn `this` nicht im Aufruf übergeben wird).

### Gebundene Methoden in Klassen

Wie bei regulären Funktionen hängt der Wert von `this` innerhalb von Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es nützlich, dieses Verhalten zu überschreiben, damit `this` innerhalb von Klassen immer auf die Klasseninstanz verweist. Um dies zu erreichen, binden Sie die Klassenmethoden im Konstruktor:

```js
class Car {
  constructor() {
    // binde sayBye, aber nicht sayHi, um den Unterschied zu zeigen
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

// Der Wert von `this` in Methoden hängt von ihrem Aufrufer ab
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// Für gebundene Methoden hängt `this` nicht vom Aufrufer ab
bird.sayBye = car.sayBye;
bird.sayBye(); // Bye from Ferrari
```

> [!NOTE]
> Klassen sind immer im Strict-Modus. Das Aufrufen von Methoden mit einem undefinierten `this` führt zu einem Fehler, wenn die Methode versucht, auf Eigenschaften von `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError, weil die 'sayHi'-Methode versucht, auf 'this.name' zuzugreifen, aber 'this' ist im Strict-Modus undefined.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden dasselbe Problem wie [die Verwendung von Arrow-Funktionen für Klassenattribute](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods) haben: Jede Instanz der Klasse hat ihre eigene Kopie der Methode, was den Speicherbedarf erhöht. Verwenden Sie dies nur, wenn es absolut notwendig ist. Sie können auch die Implementierung von [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachahmen: Definieren Sie die Eigenschaft als einen Getter, der eine gebundene Funktion beim Zugriff zurückgibt und speichert, sodass die Funktion nur einmal und nur bei Bedarf erstellt wird.

### this in with-Anweisungen

Obwohl [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungen veraltet und im Strict-Modus nicht verfügbar sind, dienen sie nach wie vor als eine Ausnahme von den normalen `this`-Bindungsregeln. Wenn eine Funktion innerhalb einer `with`-Anweisung aufgerufen wird und diese Funktion eine Eigenschaft des Scope-Objekts ist, ist der `this`-Wert an das Scope-Objekt gebunden, als ob das Präfix `obj1.` existiert.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("globalThis")}}
