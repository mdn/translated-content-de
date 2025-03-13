---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`let`**-Deklaration deklariert zuweisbare, block-skopierte lokale Variablen und initialisiert optional jede mit einem Wert.

{{InteractiveExample("JavaScript Demo: let declaration")}}

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
  - : Der Name der zu deklarierenden Variablen. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Initialwert der Variablen. Es kann jeder gültige Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Geltungsbereich einer mit `let` deklarierten Variablen ist einer der folgenden geschweiften Klammer-Syntaxen, die die `let`-Deklaration am engsten enthält:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung
- {{jsxref("Statements/switch", "switch")}}-Anweisung
- {{jsxref("Statements/try...catch", "try...catch")}}-Anweisung
- Körper einer [der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn sich das `let` im Kopf der Anweisung befindet
- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keines der oben genannten zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code, der im Modulmodus ausgeführt wird
- Der globale Geltungsbereich, für Code, der im Skriptmodus ausgeführt wird.

Im Vergleich zu {{jsxref("Statements/var", "var")}}-Deklarationen gibt es die folgenden Unterschiede bei `let`-Deklarationen:

- `let`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- `let`-Deklarationen können nur nach Erreichen der Deklarationsstelle aufgerufen werden (siehe [temporal dead zone](#temporal_dead_zone_tdz)). Aus diesem Grund werden `let`-Deklarationen oft als {{Glossary("Hoisting", "nicht-gehoistet")}} angesehen.
- `let`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert sind.
- `let`-Deklarationen können nicht durch eine andere Deklaration im gleichen Bereich [erneut deklariert](#wiederdeklarationen) werden.
- `let` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine alleinstehende `let`-Deklaration nicht als Körper eines Blocks verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` als Bezeichnername erlaubt ist, wenn es mit `var` oder `function` im [Nicht-strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) deklariert wird, aber Sie sollten es vermeiden, `let` als Bezeichnername zu verwenden, um unerwartete Syntax-Mehrdeutigkeiten zu vermeiden.

Viele Stilrichtlinien (einschließlich [der von MDN](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von {{jsxref("Statements/const", "const")}} anstelle von `let`, wann immer eine Variable in ihrem Geltungsbereich nicht neu zugewiesen wird. Dies macht die Absicht klar, dass sich der Typ (oder der Wert, im Falle eines primitiven Typs) einer Variablen niemals ändern kann. Andere bevorzugen möglicherweise `let` für Nicht-Primitiva, die verändert werden.

Die Liste, die dem `let`-Schlüsselwort folgt, wird als _{{Glossary("binding", "Bindung")}}sliste_ bezeichnet und ist durch Kommas getrennt, wobei die Kommas _keine_ [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

### Zeitliche Tote Zone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich in einer "zeitlichen toten Zone" (TDZ) vom Beginn des Blocks, bis die Codeausführung die Stelle erreicht, an der die Variable deklariert und initialisiert wird.

Innerhalb der TDZ ist die Variable nicht mit einem Wert initialisiert, und jeder Versuch, darauf zuzugreifen, führt zu einem {{jsxref("ReferenceError")}}. Die Variable wird mit einem Wert initialisiert, wenn die Ausführung die Stelle im Code erreicht, an der sie deklariert wurde. Wenn mit der Variablendeklaration kein Anfangswert angegeben wurde, wird sie mit einem Wert von `undefined` initialisiert.

Dies unterscheidet sich von {{jsxref("Statements/var", "var", "hoisting")}}-Variablen, die einen Wert von `undefined` zurückgeben, wenn sie aufgerufen werden, bevor sie deklariert sind. Der unten stehende Code zeigt das unterschiedliche Ergebnis, wenn `let` und `var` im Code aufgerufen werden, bevor sie deklariert sind.

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Der Begriff "temporal" wird verwendet, weil die Zone von der Ausführungsreihenfolge (Zeit) abhängt, anstatt von der Reihenfolge, in der der Code geschrieben ist (Position). Zum Beispiel funktioniert der unten stehende Code, auch wenn die Funktion, die die `let`-Variable verwendet, vor der Variable deklariert erscheint, weil die Funktion _außerhalb_ der TDZ aufgerufen wird.

```js
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

Der Einsatz des `typeof`-Operators für eine Variable in ihrer TDZ führt zu einem {{jsxref("ReferenceError")}}:

```js example-bad
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

Dies unterscheidet sich vom Einsatz von `typeof` für nicht deklarierte Variablen und Variablen, die den Wert `undefined` halten:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> **Note:** Deklarationen `let` und `const` werden nur verarbeitet, wenn das aktuelle Skript verarbeitet wird. Wenn Sie zwei `<script>`-Elemente im Skriptmodus innerhalb eines HTML ausführen, unterliegt das erste Skript nicht den TDZ-Beschränkungen für top-level `let` oder `const`-Variablen, die im zweiten Skript deklariert sind, obwohl wenn Sie eine `let` oder `const`-Variable im ersten Skript deklarieren und sie erneut im zweiten Skript deklarieren, ein [Wiederdeklarationsfehler](#wiederdeklarationen) auftritt.

### Wiederdeklarationen

`let`-Deklarationen können sich nicht im gleichen Geltungsbereich wie jede andere Deklaration befinden, einschließlich `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und {{jsxref("Statements/import", "import")}}-Deklaration.

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Eine `let`-Deklaration innerhalb eines Funktionskörpers kann nicht denselben Namen wie ein Parameter haben. Eine `let`-Deklaration innerhalb eines `catch`-Blocks kann nicht denselben Namen wie der `catch`-gebundene Bezeichner haben.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Wenn Sie in einem REPL experimentieren, wie in der Firefox-Webkonsole (**Tools** > **Web Developer** > **Web Console**) und Sie zwei `let`-Deklarationen mit demselben Namen in zwei separaten Eingaben ausführen, könnten Sie den gleichen Wiederdeklarationsfehler erhalten. Siehe weitere Diskussion zu diesem Problem im [Firefox-Bug 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt `let`-Wiederdeklarationen zwischen verschiedenen REPL-Eingaben.

Sie könnten Fehler in {{jsxref("Statements/switch", "switch")}}-Anweisungen begegnen, weil es nur einen Block gibt.

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

Um den Fehler zu vermeiden, umschließen Sie jeden `case`-Abschnitt in einem neuen Block.

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

### Geltungsregeln

Variablen, die durch `let` deklariert werden, haben ihren Geltungsbereich in dem Block, für den sie deklariert sind, sowie in allen enthaltenen Unterblöcken. Auf diese Weise funktioniert `let` sehr ähnlich wie `var`. Der Hauptunterschied besteht darin, dass der Geltungsbereich einer `var`-Variablen die gesamte umschließende Funktion ist:

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

Auf der obersten Ebene von Programmen und Funktionen erstellt `let`, im Gegensatz zu `var`, keine Eigenschaft auf dem globalen Objekt. Zum Beispiel:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### TDZ kombiniert mit lexikalischem Scoping

Der folgende Code führt an der gezeigten Zeile zu einem `ReferenceError`:

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

Der `if`-Block wird ausgewertet, weil die äußere `var foo` einen Wert hat. Aufgrund des lexikalischen Scoping ist dieser Wert jedoch innerhalb des Blocks nicht verfügbar: der Bezeichner `foo` _innerhalb_ des `if`-Blocks ist das `let foo`. Der Ausdruck `foo + 55` wirft einen `ReferenceError`, weil die Initialisierung von `let foo` noch nicht abgeschlossen ist — es befindet sich noch in der zeitlichen toten Zone.

Dieses Phänomen kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits im Geltungsbereich des Blocks der `for...of`-Schleife. Der Bezeichner `n.a` wird also auf die Eigenschaft `a` des `n`-Objekts im ersten Teil der Anweisung selbst (`let n`) aufgelöst. Dies ist noch in der zeitlichen toten Zone, da die Deklarationsanweisung noch nicht erreicht und abgeschlossen wurde.

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

Bei Verwendung innerhalb eines Blocks begrenzt `let` den Geltungsbereich der Variablen auf diesen Block. Beachten Sie den Unterschied zu `var`, dessen Geltungsbereich innerhalb der Funktion liegt, in der es deklariert ist.

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

Allerdings ist diese Kombination von `var` und `let`-Deklarationen unten ein {{jsxref("SyntaxError")}}, weil `var` nicht block-skopiert ist, was dazu führt, dass sie sich im gleichen Geltungsbereich befinden. Dies führt zu einer impliziten Wiederdeklaration der Variablen.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destructuring

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht die gleichzeitige Erstellung mehrerer Variablen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- {{Glossary("Hoisting", "Hoisting")}}
- [ES6 In Depth: `let` und `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/) auf hacks.mozilla.org (2015)
- [Breaking changes in `let` und `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) auf blog.mozilla.org (2015)
- [You Don't Know JS: Scope & Closures, Ch.3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) von Kyle Simpson
- [What is the Temporal Dead Zone?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) auf Stack Overflow
- [What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) auf Stack Overflow
- [Why was the name 'let' chosen for block-scoped variable declarations in JavaScript?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) auf Stack Overflow
