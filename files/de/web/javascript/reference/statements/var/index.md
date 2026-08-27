---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: 710372d69095aaeadfba6c892f3e39ed63df4c54
---

Die **`var`**-Anweisung deklariert funktions- oder global-gescope Variablen und initialisiert optional jede mit einem Wert.

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
  - : Der Name der zu deklarierenden Variable. Jede muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsbindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Geltungsbereich einer mit `var` deklarierten Variable ist eine der folgenden durch geschweifte Klammern eingeschlossenen Syntaxen, die die `var`-Anweisung am engsten umfassen:

- Funktionskörper
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder falls nichts davon zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code, der im Modus "Modul" ausgeführt wird
- Der globale Geltungsbereich, für Code, der im Skriptmodus ausgeführt wird.

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

Wichtig ist, dass andere Blockkonstrukte, einschließlich [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, Überschriften von [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), keine Geltungsbereiche für `var` erzeugen, und Variablen, die mit `var` innerhalb eines solchen Blocks deklariert werden, außerhalb des Blocks weiterhin referenziert werden können.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht-konfigurierbare Eigenschaft des globalen Objekts hinzugefügt. Das bedeutet, dass ihr Eigenschafts-Deskriptor nicht geändert werden kann und sie nicht mit {{jsxref("delete")}} gelöscht werden kann. JavaScript verfügt über eine automatische Speicherverwaltung, und es würde keinen Sinn machen, den `delete`-Operator auf eine globale Variable anwenden zu können.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

In sowohl Node.js [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Modulen als auch in nativen [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind Variablendeklarationen auf Modulebene auf das Modul beschränkt und werden nicht als Eigenschaften dem globalen Objekt hinzugefügt.

Die Liste, die dem `var`-Schlüsselwort folgt, wird als _{{Glossary("binding", "Bindungsliste")}}_ bezeichnet und durch Kommas getrennt, wobei die Kommas keine [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen keine [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen und deren initialisierten Wert erhalten.

### Heben

`var`-Deklarationen, wo immer sie in einem Skript auftreten, werden verarbeitet, bevor irgendein Code innerhalb des Skripts ausgeführt wird. Das Deklarieren einer Variablen irgendwo im Code ist gleichbedeutend mit ihrer Deklaration am Anfang. Das bedeutet auch, dass eine Variable scheinbar verwendet werden kann, bevor sie deklariert ist. Dieses Verhalten wird _{{Glossary("Hoisting", "Heben")}}_ genannt, da es so aussieht, als würde die Variablendeklaration an den Anfang der Funktion, des statischen Initialisierungsblocks oder des Skript-Quelltexts verschoben, in dem sie vorkommt.

> [!NOTE]
> `var`-Deklarationen werden nur an den Anfang des aktuellen Skripts gehoben. Wenn Sie zwei `<script>`-Elemente innerhalb eines HTML-Dokuments haben, kann das erste Skript nicht auf Variablen zugreifen, die vom zweiten deklariert wurden, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Dies wird implizit verstanden als:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer am Anfang ihres Geltungsbereichs zu deklarieren (am Anfang des globalen Codes und am Anfang des Funktionscodes), damit klar ist, welche Variablen im aktuellen Funktionsumfang sind.

Nur die Deklaration einer Variablen wird gehoben, nicht ihre Initialisierung. Die Initialisierung erfolgt nur, wenn die Zuweisungsanweisung erreicht wird. Bis dahin bleibt die Variable `undefined` (aber deklariert):

```js
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

Dies wird implizit verstanden als:

```js
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

### Neudeklarationen

Doppelte Variablendeklarationen mit `var` führen nicht zu einem Fehler, selbst im strikten Modus, und die Variable verliert ihren Wert nicht, es sei denn, die Deklaration hat einen Initialisierer.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var`-Deklarationen können auch im selben Geltungsbereich wie eine `function`-Deklaration stehen. Sowohl die Funktionsdeklaration als auch die `var`-Deklaration werden an den Anfang gehoben, sodass der Funktionswert nur vom Anfang seines Geltungsbereichs bis zum Initialisierer oder der ersten Zuweisung der Variablen zugänglich ist, unabhängig von der relativen Position der beiden Deklarationen im Quellcode.

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

`var`-Deklarationen können nicht im selben Geltungsbereich wie eine {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, oder {{jsxref("Statements/import", "import")}}-Deklaration stehen.

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

Es gilt nicht für den folgenden Fall, bei dem `let` in einem Kindbereich von `var`, nicht im gleichen Bereich ist:

```js example-good
var a = 1;
{
  let a = 2;
}
```

Eine `var`-Deklaration innerhalb des Körpers einer Funktion kann denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der `catch`-gebundene Bezeichner haben, jedoch nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein Destrukturierungsmuster ist. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und Sie sollten sich nicht darauf verlassen. In diesem Fall wird die Deklaration aus dem `catch`-Block gehoben, aber jeder innerhalb des `catch`-Blocks zugewiesene Wert ist außerhalb nicht sichtbar.

```js-nolint example-bad
try {
  throw new Error();
} catch (e) {
  var e = 2; // Works
}
console.log(e); // undefined
```

## Beispiele

### Deklaration und Initialisierung von zwei Variablen

```js
var a = 0,
  b = 0;
```

### Zwei Variablen mit einem einzigen String-Wert zuweisen

```js
var a = "A";
var b = a;
```

Dies ist gleichbedeutend mit:

```js-nolint
var a, b = a = "A";
```

Achten Sie auf die Reihenfolge:

```js
var x = y,
  y = "A";
console.log(x, y); // undefined A
```

Hier werden `x` und `y` deklariert, bevor irgendein Code ausgeführt wird, aber die Zuweisungen erfolgen später. Zum Zeitpunkt der Auswertung von `x = y` existiert `y`, sodass kein `ReferenceError` ausgelöst wird und sein Wert `undefined` ist. Somit wird `x` der undefined-Wert zugewiesen. Dann wird `y` der Wert `"A"` zugewiesen.

### Initialisierung mehrerer Variablen

Seien Sie vorsichtig mit der `var x = y = 1`-Syntax — `y` wird eigentlich nicht als Variable deklariert, sodass `y = 1` eine [nicht qualifizierte Bezeichnerzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment) ist, die im Nicht-Strict-Modus eine globale Variable erstellt.

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

Dasselbe Beispiel wie oben, aber im Strict-Modus:

```js-nolint
"use strict";

var x = 0;
function f() {
  var x = y = 1; // ReferenceError: y is not defined
}
f();

console.log(x, y);
```

### Implizite globale Variablen und äußere Funktionsbereiche

Variablen, die scheinbar implizite globale Variablen sind, können Referenzen auf Variablen in einem äußeren Funktionsbereich sein:

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

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dadurch können mehrere Variablen gleichzeitig erzeugt werden.

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
