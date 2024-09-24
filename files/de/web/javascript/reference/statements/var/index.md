---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Statements")}}

Die **`var`** Anweisung deklariert funktionslokale oder global-lokale Variablen und kann optional jede mit einem Wert initialisieren.

{{EmbedInteractiveExample("pages/js/statement-var.html")}}

## Syntax

```js-nolint
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variable. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variable. Es kann jeder gültige Ausdruck sein. Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `var` deklarierten Variablen ist eine der folgenden geschweifte Klammern einschließenden Syntaxen, die die `var`-Anweisung am ehesten enthält:

- Funktionskörper
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keine der oben genannten zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code im Modus "module"
- Der globale Bereich, für Code im Modus "script".

```js
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (Funktion `bar` schließt über `x`)
    console.log(y); // 2 (`y` ist im Gültigkeitsbereich)
  }
  bar();
  console.log(x); // 1 (`x` ist im Gültigkeitsbereich)
  console.log(y); // ReferenceError, `y` ist auf `bar` beschränkt
}

foo();
```

Wichtig ist, dass andere Blockkonstruktionen, einschließlich [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, Kopfzeilen von [einer der `for` Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), keine Gültigkeitsbereiche für `var` erstellen, und Variablen, die mit `var` innerhalb eines solchen Blocks deklariert werden, weiterhin außerhalb des Blocks referenziert werden können.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht konfigurierbare Eigenschaft des globalen Objekts hinzugefügt. Dies bedeutet, dass ihr Eigenschaften-Deskriptor nicht geändert werden kann und sie nicht mit {{jsxref("Operators/delete", "delete")}} gelöscht werden kann. JavaScript verfügt über automatische Speicherverwaltung, und es würde keinen Sinn machen, den `delete`-Operator auf eine globale Variable anwenden zu können.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError im Strict-Modus. Scheitert sonst stillschweigend.
delete x; // SyntaxError im Strict-Modus. Scheitert sonst stillschweigend.
```

In sowohl NodeJS [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) Modulen als auch nativen [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind Variable-Deklarationen auf Modul-Ebene begrenzt und werden nicht als Eigenschaften zum globalen Objekt hinzugefügt.

Die Liste, die dem `var`-Schlüsselwort folgt, wird _{{Glossary("binding")}}-Liste_ genannt und ist durch Kommas getrennt, wobei die Kommas _nicht_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _nicht_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen und erhalten den initialisierten Wert.

### Hoisting

`var`-Deklarationen werden überall dort, wo sie in einem Skript auftreten, verarbeitet, bevor irgendein Code innerhalb des Skripts ausgeführt wird. Eine Variable irgendwo im Code zu deklarieren, ist gleichbedeutend damit, sie an der Spitze zu deklarieren. Das bedeutet auch, dass eine Variable scheinbar verwendet werden kann, bevor sie deklariert wird. Dieses Verhalten wird [_Hoisting_](/de/docs/Glossary/Hoisting) genannt, da es so erscheint, als würde die Variablendeklaration an die Spitze der Funktion, des statischen Initialisierungsblocks oder des Skript-Quelltextes verschoben, in dem sie auftritt.

> **Note:** `var`-Deklarationen werden nur an die Spitze des aktuellen Skripts gehoben. Wenn Sie zwei `<script>`-Elemente in einem HTML haben, kann das erste Skript nicht auf Variablen zugreifen, die vom zweiten deklariert werden, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Das wird implizit wie folgt verstanden:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer an der Spitze ihres Gültigkeitsbereichs zu deklarieren (an der Spitze des globalen Codes und des Funktionscodes), damit klar ist, welche Variablen zum aktuellen Gültigkeitsbereich gehören.

Nur die Deklaration einer Variable wird gehoben, nicht ihre Initialisierung. Die Initialisierung findet erst dann statt, wenn die Zuweisungserklärung erreicht wird. Bis dahin bleibt die Variable `undefined` (aber deklariert):

```js
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

Das wird implizit wie folgt verstanden:

```js
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

### Neu-Deklarationen

Doppelte Variablendeklarationen mit `var` führen nicht zu einem Fehler, selbst im Strict-Modus, und die Variable verliert ihren Wert nicht, es sei denn, die Deklaration hat einen Initialisierer.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; nicht undefined
```

`var`-Deklarationen können auch im selben Gültigkeitsbereich wie eine `function`-Deklaration existieren. In diesem Fall überschreibt der Initialisierer der `var`-Deklaration immer den Wert der Funktion, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor jedem Initialisierer angehoben werden, sodass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var`-Deklarationen können nicht im selben Gültigkeitsbereich wie eine {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, oder {{jsxref("Statements/import", "import")}} Deklaration sein.

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

Dies gilt nicht für den folgenden Fall, bei dem `let` in einem Kindbereich von `var`, aber nicht im selben Bereich ist:

```js example-good
var a = 1;
{
  let a = 2;
}
```

Eine `var`-Deklaration innerhalb des Funktionskörpers kann denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Gibt 1 aus
```

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der an `catch` gebundene Bezeichner haben, aber nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein Destructuring-Muster ist. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und Sie sollten sich nicht darauf verlassen. In diesem Fall wird die Deklaration außerhalb des `catch`-Blocks gehoben, aber jeder innerhalb des `catch`-Blocks zugewiesene Wert ist außerhalb nicht sichtbar.

```js-nolint example-bad
try {
  throw 1;
} catch (e) {
  var e = 2; // Funktioniert
}
console.log(e); // undefined
```

## Beispiele

### Deklaration und Initialisierung von zwei Variablen

```js
var a = 0,
  b = 0;
```

### Zwei Variablen mit einem einzelnen String-Wert zuweisen

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

Hier werden `x` und `y` vor jedem Code deklariert, der ausgeführt wird, aber die Zuweisungen erfolgen später. Zum Zeitpunkt, zu dem `x = y` ausgewertet wird, existiert `y`, sodass kein `ReferenceError` ausgelöst wird und sein Wert `undefined` ist. Also wird `x` der undefinierte Wert zugewiesen. Dann wird `y` der Wert `"A"` zugewiesen.

### Initialisierung mehrerer Variablen

Achten Sie auf die Syntax `var x = y = 1` — `y` wird tatsächlich nicht als Variable deklariert, sodass `y = 1` eine [unqualifizierte Bezeichnerzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment) ist, die im Nicht-Strikt-Modus eine globale Variable erzeugt.

```js-nolint
var x = 0;
function f() {
  var x = y = 1; // Deklariert x lokal; deklariert y global.
}
f();

console.log(x, y); // 0 1

// Im Nicht-Strikt-Modus:
// x ist das globale wie erwartet;
// y ist außerhalb der Funktion durchgesickert!
```

Dasselbe Beispiel wie oben, aber im Strikt-Modus:

```js-nolint
"use strict";

var x = 0;
function f() {
  var x = y = 1; // ReferenceError: y is not defined
}
f();

console.log(x, y);
```

### Implizite Globals und äußerer Funktionsbereich

Variablen, die implizite Globals zu sein scheinen, können Verweise auf Variablen in einem äußeren Funktionsbereich sein:

```js
var x = 0; // Deklariert x innerhalb des Dateibereichs und weist ihm dann den Wert 0 zu.

console.log(typeof z); // "undefined", da z noch nicht existiert

function a() {
  var y = 2; // Deklariert y innerhalb des Bereichs der Funktion a und weist ihm dann den Wert 2 zu.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Weist 3 dem existierenden, dateibegrenzten x zu.
    y = 4; // Weist 4 dem existierenden äußeren y zu.
    z = 5; // Erstellt eine neue globale Variable z und weist ihr den Wert 5 zu.
    // (Wirft einen ReferenceError im Strikt-Modus.)
  }

  b(); // Erstellt z als globale Variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Ruft auch b auf.
console.log(x, z); // 3 5
console.log(typeof y); // "undefined", weil y lokal für die Funktion a ist
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen gleichzeitig.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destrukturierende Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
