---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Statements")}}

Die **`let`**-Deklaration deklariert neu zuweisbare, block-skopierte lokale Variablen und initialisiert jede optional mit einem Wert.

{{InteractiveExample("JavaScript Demo: Statement - Let")}}

```js interactive-example
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1
```

## Syntax

```js-nolint
let name1;
let name1 = value1;
let name1 = value1, name2 = value2;
let name1, name2 = value2;
let name1 = value1, name2, /* …, */ nameN = valueN;
```

### Parameter

- `nameN`
  - : Der Name der zu deklarierenden Variablen. Jede muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsbindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `let` deklarierten Variablen ist eine der folgenden geschweiften Klammern umschlossenen Syntaxen, die die `let`-Deklaration am engsten umschließt:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung
- {{jsxref("Statements/switch", "switch")}}-Anweisung
- {{jsxref("Statements/try...catch", "try...catch")}}-Anweisung
- Rumpf einer [der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn das `let` im Kopf der Anweisung steht
- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keiner der oben genannten Punkte zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für im Modus Modul ausgeführten Code
- Der globale Gültigkeitsbereich, für im Skript-Modus ausgeführten Code.

Im Vergleich zu {{jsxref("Statements/var", "var")}} haben `let`-Deklarationen die folgenden Unterschiede:

- `let`-Deklarationen sind an Blöcke sowie an Funktionen gebunden.
- `let`-Deklarationen können nur nach Erreichen des Deklarationsortes zugegriffen werden (siehe [temporal dead zone](#temporal_dead_zone_tdz)). Aus diesem Grund werden `let`-Deklarationen allgemein als {{Glossary("Hoisting", "nicht-gehoistete")}} betrachtet.
- `let`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf oberster Ebene eines Skripts deklariert werden.
- `let`-Deklarationen können nicht durch irgendeine andere Deklaration im selben Gültigkeitsbereich [neu deklariert](#redeclarations) werden.
- `let` beginnt [_Deklarationen_, keine _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine einzelne `let`-Deklaration nicht als Rumpf eines Blocks verwenden können (was Sinn ergibt, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` als Bezeichnername zulässig ist, wenn es mit `var` oder `function` im [nicht-strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) deklariert wird, aber Sie sollten vermeiden, `let` als Bezeichnernamen zu verwenden, um unerwartete Syntaxambiguitäten zu vermeiden.

Viele Stilrichtlinien (einschließlich [der von MDN](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von {{jsxref("Statements/const", "const")}} über `let`, wenn eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht deutlich, dass sich der Typ (oder der Wert im Falle eines primitiven) einer Variablen niemals ändern kann. Andere bevorzugen möglicherweise `let` für nicht-primitives, die mutiert werden.

Die Liste, die dem `let`-Schlüsselwort folgt, wird eine _{{Glossary("binding", "Bindung")}}-Liste_ genannt und wird durch Kommas getrennt, wobei die Kommas _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

### Temporale Dead Zone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich von Beginn des Blocks an in einer sogenannten "temporal dead zone" (TDZ), bis der Codeausführung die Stelle erreicht, an der die Variable deklariert und initialisiert wurde.

Während sich die Variable in der TDZ befindet, wurde sie mit keinem Wert initialisiert, und jeder Versuch, darauf zuzugreifen, führt zu einem {{jsxref("ReferenceError")}}. Die Variable wird mit einem Wert initialisiert, wenn die Ausführung die Stelle im Code erreicht, an der sie deklariert wurde. Wurde kein Anfangswert bei der Variablendeklaration angegeben, wird sie mit dem Wert `undefined` initialisiert.

Dies unterscheidet sich von {{jsxref("Statements/var", "var", "hoisting")}}-Variablen, die einen Wert von `undefined` zurückgeben, wenn sie vor ihrer Deklaration aufgerufen werden. Der unten stehende Code demonstriert das unterschiedliche Verhalten, wenn `let` und `var` im Code vor der Deklaration aufgerufen werden.

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Der Begriff "temporal" wird verwendet, weil die Zone von der Ausführungsreihenfolge (Zeit) abhängt und nicht von der Reihenfolge, in der der Code geschrieben ist (Position). Zum Beispiel funktioniert der folgende Code, weil, obwohl die Funktion, die die `let`-Variable verwendet, erscheint, bevor die Variable deklariert ist, die Funktion _außerhalb_ der TDZ _aufgerufen_ wird.

```js
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

Die Verwendung des `typeof`-Operators für eine Variable in ihrer TDZ wirft einen {{jsxref("ReferenceError")}}:

```js example-bad
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

Dies unterscheidet sich von der Verwendung von `typeof` für nicht deklarierte Variablen und Variablen, die den Wert `undefined` halten:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> **Note:** `let`- und `const`-Deklarationen werden nur verarbeitet, wenn das aktuelle Skript verarbeitet wird. Wenn Sie zwei `<script>`-Elemente im Skript-Modus in einem HTML-Dokument ausführen, unterliegt das erste Skript nicht den TDZ-Einschränkungen für oberste `let`- oder `const`-Variablen, die im zweiten Skript deklariert werden, obwohl das Deklarieren einer `let`- oder `const`-Variable im ersten Skript und das erneute Deklarieren im zweiten Skript zu einem [Redeklarationsfehler](#redeclarations) führen.

### Redeclarations

`let`-Deklarationen können im selben Gültigkeitsbereich nicht mit einer anderen Deklaration, einschließlich `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, und {{jsxref("Statements/import", "import")}}-Deklarationen kombiniert werden.

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Eine `let`-Deklaration innerhalb des Körpers einer Funktion kann nicht denselben Namen wie ein Parameter haben. Eine `let`-Deklaration innerhalb eines `catch`-Blocks kann nicht denselben Namen wie der `catch`-gebundene Bezeichner haben.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Wenn Sie in einem REPL experimentieren, wie der Firefox-Webkonsole (**Werkzeuge** > **Web-Entwickler** > **Web-Konsole**), und Sie zwei `let`-Deklarationen mit demselben Namen in zwei separaten Eingaben ausführen, können Sie denselben Neudeklarationsfehler erhalten. Siehe weitere Diskussion zu diesem Thema in [Firefox bug 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt `let`-Neudeklarationen zwischen verschiedenen REPL-Eingaben.

Sie können Fehler in {{jsxref("Statements/switch", "switch")}}-Anweisungen aufgrund eines einzigen Blocks erhalten.

```js-nolint example-bad
let x = 1;

switch (x) {
  case 0:
    let foo;
    break;
  case 1:
    let foo; // SyntaxError: Identifier 'foo' has already been declared
    break;
}
```

Um den Fehler zu vermeiden, umwickeln Sie jeden `case` in eine neue Blockanweisung.

```js
let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

## Beispiele

### Scoping-Regeln

Variablen, die durch `let` deklariert wurden, haben ihren Gültigkeitsbereich im Block, für den sie deklariert wurden, sowie in allen enthaltenden Unterblöcken. Auf diese Weise funktioniert `let` sehr ähnlich wie `var`. Der Hauptunterschied besteht darin, dass der Gültigkeitsbereich einer `var`-Variablen die gesamte umschließende Funktion ist:

```js
function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

Auf der obersten Ebene von Programmen und Funktionen erzeugt `let`, im Gegensatz zu `var`, keine Eigenschaft im globalen Objekt. Zum Beispiel:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### TDZ kombiniert mit lexikalischem Scoping

Der folgende Code führt zu einem `ReferenceError` an der angegebenen Zeile:

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

Der `if`-Block wird ausgewertet, weil die äußere `var foo` einen Wert hat. Aufgrund des lexikalischen Scopings ist dieser Wert jedoch innerhalb des Blocks nicht verfügbar: der Bezeichner `foo` _innerhalb_ des `if`-Blocks ist `let foo`. Der Ausdruck `foo + 55` wirft einen `ReferenceError`, weil die Initialisierung von `let foo` nicht abgeschlossen ist — es befindet sich noch in der temporalen Dead Zone.

Dieses Phänomen kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits im Gültigkeitsbereich des Blocks der `for...of`-Schleife. Daher wird der Bezeichner `n.a` auf die Eigenschaft `a` des `n`-Objekts aufgelöst, das sich im ersten Teil der Anweisung selbst befindet (`let n`). Diese befindet sich noch in der temporalen Dead Zone, da die Deklarationsanweisung nicht erreicht und abgeschlossen wurde.

```js example-bad
function go(n) {
  // n here is defined!
  console.log(n); // { a: [1, 2, 3] }

  for (let n of n.a) {
    //          ^ ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

### Andere Situationen

Bei Verwendung in einem Block beschränkt `let` den Gültigkeitsbereich der Variablen auf diesen Block. Beachten Sie den Unterschied zu `var`, dessen Gültigkeitsbereich innerhalb der Funktion liegt, in der es deklariert wurde.

```js
var a = 1;
var b = 2;

{
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

Diese Kombination von `var`- und `let`-Deklarationen unten wirft jedoch einen {{jsxref("SyntaxError")}}, da `var` nicht blockgebunden ist, was zu demselben Gültigkeitsbereich führt. Dies führt zu einer impliziten Neudeklaration der Variablen.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann ebenfalls ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- {{Glossary("Hoisting", "Hoisting")}}
- [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/) auf hacks.mozilla.org (2015)
- [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) auf blog.mozilla.org (2015)
- [You Don't Know JS: Scope & Closures, Ch.3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) von Kyle Simpson
- [What is the Temporal Dead Zone?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) auf Stack Overflow
- [What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) auf Stack Overflow
- [Why was the name 'let' chosen for block-scoped variable declarations in JavaScript?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) auf Stack Overflow
