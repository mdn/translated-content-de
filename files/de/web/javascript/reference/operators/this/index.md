---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Das Schlüsselwort **`this`** bezeichnet den Kontext, in dem ein Codeabschnitt, etwa der Rumpf einer Funktion, ausgeführt werden soll. Meist wird es in Objektmethoden verwendet. Dort verweist `this` auf das Objekt, zu dem die Methode gehört, sodass dieselbe Methode für verschiedene Objekte verwendet werden kann.

Der Wert von `this` in JavaScript hängt davon ab, wie eine Funktion aufgerufen wird ({{Glossary("binding", "Bindung zur Laufzeit")}}), nicht davon, wie sie definiert ist. Wird eine reguläre Funktion als Methode eines Objekts aufgerufen (`obj.method()`), verweist `this` auf dieses Objekt. Wird sie als eigenständige Funktion aufgerufen (ohne an ein Objekt gebunden zu sein: `func()`), verweist `this` üblicherweise auf das {{Glossary("Global_object", "globale Objekt")}} (außerhalb des strikten Modus) oder hat den Wert `undefined` (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)). Mit der Methode {{jsxref("Function.prototype.bind()")}} lässt sich eine Funktion erstellen, deren `this`-Bindung sich nicht ändert. Die Methoden {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}} können den Wert von `this` für einen bestimmten Aufruf festlegen.

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behandeln `this` anders: Sie übernehmen `this` zum Zeitpunkt ihrer Definition aus dem umgebenden Gültigkeitsbereich. Dadurch eignen sie sich besonders für Callbacks und dafür, einen Kontext beizubehalten. Arrow-Funktionen haben jedoch keine eigene `this`-Bindung. Ihr `this`-Wert kann daher weder mit `bind()`, `apply()` noch mit `call()` festgelegt werden. In Objektmethoden verweist er auch nicht auf das aktuelle Objekt.

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

Außerhalb des strikten Modus ist `this` immer eine Referenz auf ein Objekt. Im strikten Modus kann es einen beliebigen Wert haben. Wie dieser Wert bestimmt wird, erläutert die folgende Beschreibung.

## Beschreibung

Der Wert von `this` hängt davon ab, in welchem Kontext es vorkommt: in einer Funktion, einer Klasse oder im globalen Kontext.

### Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird. Betrachten Sie `this` als einen verborgenen Parameter der Funktion: Wie bei den in der Funktionsdefinition deklarierten Parametern erzeugt die Sprache beim Auswerten des Funktionsrumpfs eine Bindung für `this`.

Bei einer regulären Funktion (also keiner Arrow-Funktion, gebundenen Funktion usw.) ist der Wert von `this` das Objekt, über das auf die Funktion zugegriffen wird. Hat der Funktionsaufruf beispielsweise die Form `obj.f()`, verweist `this` auf `obj`:

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

Beachten Sie, dass es sich um dieselbe Funktion handelt, der Wert von `this` sich aber je nach Aufruf unterscheidet. Das entspricht der Funktionsweise von Funktionsparametern.

Der Wert von `this` ist nicht das Objekt, das die Funktion als eigene Eigenschaft besitzt, sondern das Objekt, über das die Funktion aufgerufen wird. Das lässt sich zeigen, indem Sie eine Methode eines Objekts weiter oben in der [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) aufrufen.

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

Der Wert von `this` richtet sich immer danach, wie eine Funktion aufgerufen wird – auch wenn die Funktion bei ihrer Erstellung auf einem Objekt definiert wurde:

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

Ist der Wert, über den auf die Methode zugegriffen wird, ein primitiver Wert, ist auch `this` ein primitiver Wert – allerdings nur, wenn sich die Funktion im strikten Modus befindet.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

Wird die Funktion aufgerufen, ohne dass über ein Objekt auf sie zugegriffen wird, ist `this` `undefined` – ebenfalls nur im strikten Modus.

```js
console.log(typeof getThisStrict()); // "undefined"
```

Außerhalb des strikten Modus sorgt ein besonderer Vorgang, die sogenannte [`this`-Substitution](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution), dafür, dass der Wert von `this` immer ein Objekt ist. Das bedeutet:

- Wird eine Funktion mit `undefined` oder `null` als `this` aufgerufen, wird `this` durch {{jsxref("globalThis")}} ersetzt.
- Wird die Funktion mit einem primitiven Wert als `this` aufgerufen, wird `this` durch das Wrapper-Objekt dieses Werts ersetzt.

```js
function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

Bei üblichen Funktionsaufrufen wird `this` implizit über das Präfix des Funktionsaufrufs (den Teil vor dem Punkt) wie ein Parameter übergeben. Sie können den Wert von `this` auch ausdrücklich mit den Methoden {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} oder {{jsxref("Reflect.apply()")}} festlegen. Mit {{jsxref("Function.prototype.bind()")}} können Sie eine neue Funktion erstellen, deren festgelegter `this`-Wert unabhängig von der Art des Aufrufs unverändert bleibt. Bei diesen Methoden gelten die oben beschriebenen Regeln für die `this`-Substitution weiterhin, wenn sich die Funktion nicht im strikten Modus befindet.

#### Callbacks

Wird eine Funktion als Callback übergeben, hängt der Wert von `this` davon ab, wie der Callback aufgerufen wird. Das bestimmt die Implementierung der API. Callbacks werden _üblicherweise_ mit `undefined` als `this`-Wert aufgerufen (also direkt, ohne sie an ein Objekt zu binden). Befindet sich die Funktion nicht im strikten Modus, ist der Wert von `this` deshalb das globale Objekt ({{jsxref("globalThis")}}). Das gilt beispielsweise für [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) und den Konstruktor [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise).

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

Bei einigen APIs können Sie einen `this`-Wert für Callback-Aufrufe festlegen. Beispielsweise akzeptieren alle iterativen Array-Methoden sowie verwandte Methoden wie {{jsxref("Set.prototype.forEach()")}} einen optionalen Parameter `thisArg`.

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

Gelegentlich wird ein Callback mit einem anderen `this`-Wert als `undefined` aufgerufen. Beispielsweise werden sowohl der Parameter `reviver` von {{jsxref("JSON.parse()")}} als auch der Parameter `replacer` von {{jsxref("JSON.stringify()")}} mit dem Objekt als `this` aufgerufen, zu dem die gerade geparste bzw. serialisierte Eigenschaft gehört.

#### Arrow-Funktionen

In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) behält `this` den Wert von `this` aus dem umgebenden lexikalischen Kontext. Anders ausgedrückt: Beim Auswerten des Rumpfs einer Arrow-Funktion erzeugt die Sprache keine neue `this`-Bindung.

In globalem Code ist `this` beispielsweise unabhängig vom strikten Modus immer `globalThis`. Das ergibt sich aus der Bindung des [globalen Kontexts](#globaler_kontext):

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow-Funktionen bilden eine [Closure](/de/docs/Web/JavaScript/Guide/Closures) über den `this`-Wert ihres umgebenden Gültigkeitsbereichs. Sie verhalten sich damit so, als wären sie „automatisch gebunden“: Unabhängig davon, wie sie aufgerufen werden, bleibt `this` an den Wert gebunden, den es bei der Erstellung der Funktion hatte (im obigen Beispiel das globale Objekt). Dasselbe gilt für Arrow-Funktionen, die innerhalb anderer Funktionen erstellt werden: Ihr `this` bleibt das des umgebenden lexikalischen Kontexts. [Siehe das Beispiel unten](#this_in_arrow-funktionen).

Beim Aufruf von Arrow-Funktionen mit `call()`, `bind()` oder `apply()` wird der Parameter `thisArg` außerdem ignoriert. Andere Argumente können Sie mit diesen Methoden weiterhin übergeben.

```js
const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### Konstruktoren

Wird eine Funktion als Konstruktor verwendet (mit dem Schlüsselwort {{jsxref("new")}}), wird ihr `this` an das neu erstellte Objekt gebunden – unabhängig davon, über welches Objekt auf die Konstruktorfunktion zugegriffen wird. Der Wert von `this` wird zum Wert des `new`-Ausdrucks, sofern der Konstruktor keinen anderen nicht primitiven Wert zurückgibt.

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

Im zweiten Beispiel (`C2`) wird während der Konstruktion ein Objekt zurückgegeben. Daher wird das neue Objekt verworfen, an das `this` gebunden war. (Dadurch wird die Anweisung `this.a = 37;` im Wesentlichen zu wirkungslosem Code. Sie wird zwar ausgeführt, kann aber ohne Auswirkungen nach außen entfernt werden.)

#### super

Wird eine Funktion in der Form `super.method()` aufgerufen, hat `this` innerhalb der Funktion `method` denselben Wert wie `this` im Umfeld des Aufrufs von `super.method()`. Dieser Wert entspricht im Allgemeinen nicht dem Objekt, auf das `super` verweist. Der Grund ist, dass `super.method` anders als die obigen Beispiele kein gewöhnlicher Zugriff auf ein Objektmitglied ist, sondern eine besondere Syntax mit anderen Bindungsregeln. Beispiele finden Sie in der [Referenz zu `super`](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

### Klassenkontext

Eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) umfasst zwei Kontexte: einen statischen Kontext und einen Instanzkontext. [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor), Methoden und Initialisierer von Instanzfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)) gehören zum Instanzkontext. [Statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden, Initialisierer statischer Felder und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) gehören zum statischen Kontext. Der Wert von `this` unterscheidet sich je nach Kontext.

Klassenkonstruktoren werden immer mit `new` aufgerufen. Sie verhalten sich daher wie [Funktionskonstruktoren](#konstruktoren): Der Wert von `this` ist die neue Instanz, die erstellt wird. Klassenmethoden verhalten sich wie Methoden in Objektliteralen: Der Wert von `this` ist das Objekt, über das auf die Methode zugegriffen wurde. Wird die Methode nicht auf ein anderes Objekt übertragen, ist `this` im Allgemeinen eine Instanz der Klasse.

Statische Methoden sind keine Eigenschaften von `this`, sondern Eigenschaften der Klasse selbst. Auf sie wird daher im Allgemeinen über die Klasse zugegriffen, und `this` hat den Wert der Klasse (oder einer Unterklasse). Auch statische Initialisierungsblöcke werden mit der aktuellen Klasse als `this` ausgewertet.

Feldinitialisierer werden ebenfalls im Kontext der Klasse ausgewertet. Bei Instanzfeldern ist `this` die Instanz, die gerade erstellt wird. Bei statischen Feldern ist `this` die aktuelle Klasse. Deshalb sind Arrow-Funktionen in Feldinitialisierern [bei Instanzfeldern an die Instanz und bei statischen Feldern an die Klasse gebunden](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();
console.log(c.instanceField === c); // true
console.log(C.staticField === C); // true
```

#### Konstruktoren abgeleiteter Klassen

Anders als Konstruktoren von Basisklassen haben Konstruktoren abgeleiteter Klassen anfangs keine `this`-Bindung. Der Aufruf von {{jsxref("Operators/super", "super()")}} erzeugt innerhalb des Konstruktors eine `this`-Bindung und hat im Wesentlichen dieselbe Wirkung wie die Auswertung der folgenden Codezeile, wobei `Base` die Basisklasse ist:

```js-nolint
this = new Base();
```

> [!WARNING]
> Wenn Sie vor dem Aufruf von `super()` auf `this` zugreifen, wird ein Fehler ausgelöst.

Abgeleitete Klassen dürfen nicht vor dem Aufruf von `super()` einen Rückgabewert liefern – es sei denn, der Konstruktor gibt ein Objekt zurück (wodurch der `this`-Wert überschrieben wird) oder die Klasse hat überhaupt keinen Konstruktor.

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

Im globalen Ausführungskontext (außerhalb aller Funktionen oder Klassen; gegebenenfalls innerhalb von [Blöcken](/de/docs/Web/JavaScript/Reference/Statements/block) oder [Arrow-Funktionen](#arrow-funktionen), die im globalen Gültigkeitsbereich definiert wurden) hängt der Wert von `this` davon ab, in welchem Ausführungskontext das Skript läuft. Wie bei [Callbacks](#callbacks) wird der Wert von `this` durch die Laufzeitumgebung (den Aufrufer) bestimmt.

Auf der obersten Ebene eines Skripts verweist `this` unabhängig vom strikten Modus auf {{jsxref("globalThis")}}. Das entspricht im Allgemeinen dem globalen Objekt. Wenn der Quellcode beispielsweise in ein HTML-Element [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) eingefügt und als Skript ausgeführt wird, gilt `this === window`.

> [!NOTE]
> `globalThis` entspricht im Allgemeinen dem Konzept des globalen Objekts (das heißt, Eigenschaften, die `globalThis` hinzugefügt werden, werden zu globalen Variablen). Das gilt für Browser und Node. Host-Umgebungen dürfen für `globalThis` jedoch einen anderen Wert bereitstellen, der nicht mit dem globalen Objekt zusammenhängt.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

Wird der Quellcode als [Modul](/de/docs/Web/JavaScript/Guide/Modules) geladen (bei HTML bedeutet das, dem `<script>`-Tag `type="module"` hinzuzufügen), ist `this` auf der obersten Ebene immer `undefined`.

Wird der Quellcode mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt, entspricht `this` bei [direktem eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) dem Wert des umgebenden Kontexts. Bei indirektem eval ist es `globalThis` (als würde der Code in einem eigenständigen globalen Skript ausgeführt).

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

Beachten Sie, dass mancher Quellcode zwar wie Code im globalen Gültigkeitsbereich aussieht, bei der Ausführung aber tatsächlich in eine Funktion eingebettet wird. Beispielsweise werden CommonJS-Module in Node.js in eine Funktion eingebettet und mit `module.exports` als `this`-Wert ausgeführt. [Event-Handler-Attribute](#this_in_inline-event-handlern) werden mit dem Element als `this` ausgeführt, an das sie gebunden sind.

Objektliterale erzeugen keinen eigenen `this`-Gültigkeitsbereich – das tun nur Funktionen (Methoden), die innerhalb des Objekts definiert sind. Wird `this` in einem Objektliteral verwendet, übernimmt es den Wert aus dem umgebenden Gültigkeitsbereich.

```js
const obj = {
  a: this,
};

console.log(obj.a === window); // true
```

## Beispiele

### this in Funktionskontexten

Der Wert des Parameters `this` hängt davon ab, wie die Funktion aufgerufen wird, nicht davon, wie sie definiert ist.

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

Mit `call()` und `apply()` können Sie den Wert von `this` übergeben, als wäre er ein ausdrücklich deklarierter Parameter.

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

Wird eine Funktion außerhalb des strikten Modus mit einem `this`-Wert aufgerufen, der kein Objekt ist, wird dieser Wert durch ein Objekt ersetzt. `null` und `undefined` werden zu `globalThis`. Primitive Werte wie `7` oder `'foo'` werden mithilfe des zugehörigen Konstruktors in ein Objekt umgewandelt: Die primitive Zahl `7` wird in ein Wrapper-Objekt von {{jsxref("Number")}} umgewandelt und die Zeichenfolge `'foo'` in ein Wrapper-Objekt von {{jsxref("String")}}.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### Die Methode bind()

Der Aufruf von [`f.bind(someObject)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt eine neue Funktion mit demselben Rumpf und Gültigkeitsbereich wie `f`. Ihr `this`-Wert ist jedoch dauerhaft an das erste Argument von `bind` gebunden, unabhängig davon, wie die Funktion aufgerufen wird.

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

Arrow-Funktionen bilden Closures über den `this`-Wert des umgebenden Ausführungskontexts. Im folgenden Beispiel erstellen wir `obj` mit einer Methode `getThisGetter`. Diese gibt eine Funktion zurück, die wiederum den Wert von `this` zurückgibt. Die zurückgegebene Funktion wird als Arrow-Funktion erstellt. Ihr `this` ist deshalb dauerhaft an das `this` der umgebenden Funktion gebunden. Der Wert von `this` innerhalb von `getThisGetter` kann beim Aufruf festgelegt werden; dadurch wird zugleich der Rückgabewert der zurückgegebenen Funktion bestimmt. Wir gehen davon aus, dass `getThisGetter` keine Funktion im strikten Modus ist: Sie befindet sich also in einem Skript außerhalb des strikten Modus und ist weder in einer Klasse noch in einer Funktion im strikten Modus verschachtelt.

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

Wir können `getThisGetter` als Methode von `obj` aufrufen. Dadurch wird `this` innerhalb ihres Rumpfs an `obj` gebunden. Die zurückgegebene Funktion wird der Variablen `fn` zugewiesen. Wird nun `fn` aufgerufen, gibt sie weiterhin den `this`-Wert zurück, der beim Aufruf von `getThisGetter` festgelegt wurde: `obj`. Wäre die zurückgegebene Funktion keine Arrow-Funktion, hätte `this` bei solchen Aufrufen den Wert `globalThis`, da sich `getThisGetter` nicht im strikten Modus befindet.

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

Seien Sie jedoch vorsichtig, wenn Sie die Methode von `obj` lösen, ohne sie aufzurufen: `getThisGetter` ist weiterhin eine Methode, deren `this`-Wert variieren kann. Der Aufruf von `fn2()()` im folgenden Beispiel gibt `globalThis` zurück. Die Arrow-Funktion übernimmt nämlich `this` von `fn2()`, und dessen Wert ist `globalThis`, weil `fn2()` ohne Bindung an ein Objekt aufgerufen wird.

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode
```

Dieses Verhalten ist bei der Definition von Callbacks sehr nützlich. Normalerweise erzeugt jeder Funktionsausdruck eine eigene `this`-Bindung, die den `this`-Wert des übergeordneten Gültigkeitsbereichs verdeckt. Wenn Sie keinen eigenen `this`-Wert benötigen, können Sie Funktionen als Arrow-Funktionen definieren und `this`-Bindungen nur dort erzeugen, wo sie gebraucht werden (etwa in Klassenmethoden). Siehe das [Beispiel mit `setTimeout()`](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply).

### this in Gettern und Settern

`this` in Gettern und Settern richtet sich nach dem Objekt, über das auf die Eigenschaft zugegriffen wird, nicht nach dem Objekt, auf dem die Eigenschaft definiert ist. Eine als Getter oder Setter verwendete Funktion bindet ihr `this` an das Objekt, über das die Eigenschaft gelesen oder gesetzt wird.

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

Wird eine Funktion als Event-Handler verwendet, ist ihr Parameter `this` an das DOM-Element gebunden, auf dem der Listener registriert ist. (Einige Browser befolgen diese Konvention nicht für Listener, die dynamisch mit anderen Methoden als [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurden.)

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

### this in Inline-Event-Handlern

Wird Code über ein Inline-[Event-Handler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) aufgerufen, ist sein `this` an das DOM-Element gebunden, auf dem der Listener registriert ist:

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

Der obige Alert zeigt `button` an. Beachten Sie jedoch, dass nur der äußere Gültigkeitsbereich auf diese Weise an `this` gebunden ist:

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

In diesem Fall ist der Parameter `this` der inneren Funktion an `globalThis` gebunden (also an das Standardobjekt außerhalb des strikten Modus, wenn beim Aufruf kein `this` übergeben wird).

### Gebundene Methoden in Klassen

Wie bei regulären Funktionen hängt der Wert von `this` innerhalb von Methoden davon ab, wie sie aufgerufen werden. Manchmal ist es sinnvoll, dieses Verhalten zu ändern, damit `this` innerhalb von Klassenmethoden immer auf die Klasseninstanz verweist. Binden Sie dazu die Klassenmethoden im Konstruktor:

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
> Klassen befinden sich immer im strikten Modus. Wird eine Methode mit `undefined` als `this` aufgerufen, löst sie einen Fehler aus, wenn sie versucht, auf Eigenschaften von `this` zuzugreifen.
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError because the 'sayHi' method tries to access 'this.name', but 'this' is undefined in strict mode.
> ```

Beachten Sie jedoch, dass automatisch gebundene Methoden dasselbe Problem haben wie die [Verwendung von Arrow-Funktionen für Klasseneigenschaften](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods): Jede Instanz der Klasse erhält eine eigene Kopie der Methode, was den Speicherverbrauch erhöht. Verwenden Sie diesen Ansatz nur, wenn es unbedingt nötig ist. Sie können auch die Implementierung von [`Intl.DateTimeFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#using_format_with_map) nachbilden: Definieren Sie die Eigenschaft als Getter, der beim Zugriff eine gebundene Funktion zurückgibt und speichert. So wird die Funktion nur einmal und nur bei Bedarf erstellt.

### this in with-Anweisungen

Obwohl [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungen veraltet und im strikten Modus nicht verfügbar sind, bilden sie weiterhin eine Ausnahme von den üblichen Regeln für die `this`-Bindung. Wird eine Funktion innerhalb einer `with`-Anweisung aufgerufen und ist sie eine Eigenschaft des Gültigkeitsbereichsobjekts, wird `this` an dieses Objekt gebunden – als wäre das Präfix `obj.` vorhanden.

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
