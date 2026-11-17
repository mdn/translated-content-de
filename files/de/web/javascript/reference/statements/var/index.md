---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`var`**-Anweisung deklariert Variablen mit Funktions- oder globalem Gültigkeitsbereich und initialisiert sie optional jeweils mit einem Wert.

{{InteractiveExample("JavaScript Demo: var statement")}}

```js interactive-example
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2
```

## Syntax

```js-nolint
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variablen. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungs-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Der Anfangswert der Variablen. Dies kann ein beliebiger gültiger Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `var` deklarierten Variablen ist diejenige der folgenden, von geschweiften Klammern umschlossenen Syntaxstrukturen, die die `var`-Anweisung am unmittelbarsten umgibt:

- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Wenn keine davon zutrifft, ist es:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), wenn der Code im Modulmodus ausgeführt wird
- Der globale Gültigkeitsbereich, wenn der Code im Skriptmodus ausgeführt wird.

```js
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();
```

Wichtig ist, dass andere Blockkonstrukte – darunter [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}} und die Kopfbereiche [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) – keinen Gültigkeitsbereich für `var` erzeugen. Auf Variablen, die innerhalb eines solchen Blocks mit `var` deklariert wurden, kann daher auch außerhalb des Blocks zugegriffen werden.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable dem globalen Objekt als nicht konfigurierbare Eigenschaft hinzugefügt. Das bedeutet, dass ihre Attribute `configurable` und `enumerable` nicht geändert werden können und dass sie nicht mit {{jsxref("delete")}} gelöscht werden kann. Ihr Wert kann weiterhin geändert werden, und ihr Attribut `writable` kann von `true` auf `false` gesetzt werden. JavaScript verwaltet den Speicher automatisch; den Operator `delete` auf eine globale Variable anwenden zu können, wäre daher nicht sinnvoll.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

Sowohl in Node.js-[CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Modulen als auch in nativen [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind Variablendeklarationen auf oberster Ebene auf das Modul beschränkt und werden dem globalen Objekt nicht als Eigenschaften hinzugefügt.

Die Liste nach dem Schlüsselwort `var` heißt _{{Glossary("binding", "Bindungsliste")}}_ und ist durch Kommas getrennt. Diese Kommas sind _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator), und die `=`-Zeichen sind _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment). Initialisierer späterer Variablen können auf frühere Variablen in der Liste zugreifen und deren initialisierten Wert erhalten.

### Hoisting

`var`-Deklarationen werden unabhängig von ihrer Position in einem Skript verarbeitet, bevor irgendein Code des Skripts ausgeführt wird. Eine Variable an beliebiger Stelle im Code zu deklarieren, ist gleichbedeutend mit einer Deklaration am Anfang. Dadurch kann es so aussehen, als würde eine Variable verwendet, bevor sie deklariert wurde. Dieses Verhalten heißt {{Glossary("Hoisting", "_Hoisting_")}}, da es so wirkt, als würde die Variablendeklaration an den Anfang der Funktion, des statischen Initialisierungsblocks oder des Skriptquelltexts verschoben, in dem sie vorkommt.

> [!NOTE]
> `var`-Deklarationen werden nur an den Anfang des aktuellen Skripts verschoben. Wenn ein HTML-Dokument zwei `<script>`-Elemente enthält, kann das erste Skript nicht auf Variablen zugreifen, die im zweiten deklariert werden, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Dies wird implizit wie folgt interpretiert:

```js
var bla;
bla = 2;
```

Deshalb empfiehlt es sich, Variablen immer am Anfang ihres Gültigkeitsbereichs zu deklarieren (am Anfang des globalen Codes beziehungsweise des Funktionscodes). So ist klar, welche Variablen zur aktuellen Funktion gehören.

Nur die Deklaration einer Variablen unterliegt dem Hoisting, nicht ihre Initialisierung. Die Initialisierung erfolgt erst, wenn die Zuweisungsanweisung erreicht wird. Bis dahin bleibt der Wert der Variablen `undefined` (sie ist aber deklariert):

```js
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

Dies wird implizit wie folgt interpretiert:

```js
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

### Erneute Deklarationen

Mehrfache Deklarationen einer Variablen mit `var` lösen auch im strikten Modus keinen Fehler aus. Die Variable verliert ihren Wert nicht, es sei denn, die erneute Deklaration enthält einen Initialisierer.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var`-Deklarationen können sich auch im selben Gültigkeitsbereich wie eine `function`-Deklaration befinden. Sowohl die Funktions- als auch die `var`-Deklaration werden an den Anfang verschoben. Der Funktionswert ist daher nur vom Beginn des Gültigkeitsbereichs bis zum Initialisierer oder zur ersten Zuweisung der Variablen zugänglich – unabhängig von der relativen Position der beiden Deklarationen im Quellcode.

```js
console.log(typeof a); // "function"
function a() {}
var a;
console.log(typeof a); // "function"
```

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var`-Deklarationen können sich nicht im selben Gültigkeitsbereich wie eine Deklaration mit {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}} oder {{jsxref("Statements/import", "import")}} befinden.

```js-nolint example-bad
var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Da `var`-Deklarationen nicht auf Blöcke beschränkt sind, gilt dies auch für den folgenden Fall:

```js-nolint example-bad
let a = 1;
{
  var a = 1; // SyntaxError: Identifier 'a' has already been declared
}
```

Für den folgenden Fall gilt es nicht: Hier befindet sich `let` in einem untergeordneten Gültigkeitsbereich von `var`, nicht im selben Gültigkeitsbereich:

```js example-good
var a = 1;
{
  let a = 2;
}
```

Eine `var`-Deklaration innerhalb eines Funktionskörpers kann denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der durch `catch` gebundene Bezeichner haben, allerdings nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein Destrukturierungsmuster ist. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements), auf die Sie sich nicht verlassen sollten. In diesem Fall wird die Deklaration aus dem `catch`-Block heraus verschoben; ein innerhalb des `catch`-Blocks zugewiesener Wert ist außerhalb jedoch nicht sichtbar.

```js-nolint example-bad
try {
  throw new Error();
} catch (e) {
  var e = 2; // Works
}
console.log(e); // undefined
```

## Beispiele

### Zwei Variablen deklarieren und initialisieren

```js
var a = 0,
  b = 0;
```

### Zwei Variablen einen einzelnen Zeichenfolgenwert zuweisen

```js
var a = "A";
var b = a;
```

Dies entspricht:

```js-nolint
var a, b = a = "A";
```

Achten Sie auf die Reihenfolge:

```js
var x = y,
  y = "A";
console.log(x, y); // undefined A
```

Hier werden `x` und `y` deklariert, bevor irgendein Code ausgeführt wird; die Zuweisungen erfolgen jedoch später. Wenn `x = y` ausgewertet wird, existiert `y` bereits. Deshalb wird kein `ReferenceError` ausgelöst, und der Wert von `y` ist `undefined`. `x` wird also der Wert `undefined` zugewiesen. Anschließend wird `y` der Wert `"A"` zugewiesen.

### Mehrere Variablen initialisieren

Seien Sie bei der Syntax `var x = y = 1` vorsichtig: `y` wird dabei nicht als Variable deklariert. `y = 1` ist stattdessen eine [Zuweisung an einen nicht qualifizierten Bezeichner](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment), die außerhalb des strikten Modus eine globale Variable erzeugt.

```js-nolint
var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally.
}
f();

console.log(x, y); // 0 1

// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!
```

Dasselbe Beispiel im strikten Modus:

```js-nolint
"use strict";

var x = 0;
function f() {
  var x = y = 1; // ReferenceError: y is not defined
}
f();

console.log(x, y);
```

### Implizite globale Variablen und der Gültigkeitsbereich äußerer Funktionen

Variablen, die wie implizite globale Variablen aussehen, können Verweise auf Variablen im Gültigkeitsbereich einer äußeren Funktion sein:

```js
var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
    // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z); // 3 5
console.log(typeof y); // "undefined", as y is local to function a
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dadurch lassen sich mehrere Variablen gleichzeitig erstellen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
