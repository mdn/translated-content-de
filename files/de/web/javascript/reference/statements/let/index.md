---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

{{jsSidebar("Statements")}}

Die **`let`**-Deklaration deklariert neu zuweisbare, block-skopierte lokale Variablen und initialisiert sie optional mit einem Wert.

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsbindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Kann jeder gültige Ausdruck sein. Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `let` deklarierten Variablen ist eine der folgenden geschweiften Klammer-Syntaxen, die die `let`-Deklaration am nächsten enthalten:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung
- {{jsxref("Statements/switch", "switch")}}-Anweisung
- {{jsxref("Statements/try...catch", "try...catch")}}-Anweisung
- Rumpf von [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn das `let` im Header der Anweisung steht
- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder falls keiner der oben genannten Punkte zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules) für Code, der im Modulmodus ausgeführt wird
- Der globale Gültigkeitsbereich für Code, der im Skriptmodus ausgeführt wird.

Im Vergleich zu {{jsxref("Statements/var", "var")}} haben `let`-Deklarationen die folgenden Unterschiede:

- `let`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- Auf `let`-Deklarationen kann nur zugegriffen werden, nachdem der Deklarationsort erreicht wurde (siehe [temporale Totzone](#temporal_dead_zone_tdz)). Aus diesem Grund werden `let`-Deklarationen häufig als {{Glossary("Hoisting", "nicht hoisted")}} betrachtet.
- `let`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf höchster Ebene eines Skripts deklariert werden.
- `let`-Deklarationen können nicht durch eine andere Deklaration im selben Gültigkeitsbereich [erneut deklariert](#neudeklarationen) werden.
- `let` beginnt [_Deklarationen_, keine _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine einzelne `let`-Deklaration nicht als Rumpf eines Blocks verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` als Bezeichnername erlaubt ist, wenn es mit `var` oder `function` im [nicht-strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) deklariert wird, aber Sie sollten vermeiden, `let` als Bezeichnername zu verwenden, um unerwartete Syntaxambiguitäten zu vermeiden.

Viele Stilrichtlinien (einschließlich der [MDN-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) empfehlen, {{jsxref("Statements/const", "const")}} über `let` zu verwenden, wann immer eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht die Absicht klar, dass sich der Typ einer Variablen (oder der Wert im Fall eines Primitives) niemals ändern kann. Andere bevorzugen möglicherweise `let` für nicht-primitives, die verändert werden.

Die Liste, die dem `let`-Schlüsselwort folgt, wird als _{{Glossary("binding", "Bindung")}}-Liste_ bezeichnet und ist durch Kommas getrennt; die Kommas sind _nicht_ [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen sind _nicht_ [Zuweisungs-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment). Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

### Temporale Totzone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich in einer "temporalen Totzone" (TDZ) vom Beginn des Blocks bis der Code die Stelle erreicht, an der die Variable deklariert und initialisiert wurde.

Während der TDZ wurde die Variable nicht mit einem Wert initialisiert, und jeder Versuch, darauf zuzugreifen, führt zu einem {{jsxref("ReferenceError")}}. Die Variable wird mit einem Wert initialisiert, wenn die Ausführung die Stelle im Code erreicht, an der sie deklariert wurde. Wenn kein Initialwert mit der Variablendeklaration angegeben wurde, wird sie mit einem Wert von `undefined` initialisiert.

Dies unterscheidet sich von {{jsxref("Statements/var", "var", "hoisting")}} Variablen, die einen Wert von `undefined` zurückgeben, wenn sie aufgerufen werden, bevor sie deklariert werden. Der folgende Code zeigt das unterschiedliche Ergebnis, wenn `let` und `var` in Code aufgerufen werden, bevor die Stelle erreicht wird, an der sie deklariert sind.

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Der Begriff "temporal" wird verwendet, weil die Zone von der Ausführungsreihenfolge (Zeit) abhängt und nicht von der Reihenfolge, in der der Code geschrieben ist (Position). Zum Beispiel funktioniert der untenstehende Code, weil die Funktion, die die `let`-Variable verwendet, zwar vor der Deklaration der Variable erscheint, die Funktion jedoch _außerhalb_ der TDZ aufgerufen wird.

```js
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

Die Verwendung des `typeof`-Operators für eine Variable in ihrer TDZ wird einen {{jsxref("ReferenceError")}} auslösen:

```js example-bad
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

Dies unterscheidet sich von der Verwendung von `typeof` für nicht deklarierte Variablen und Variablen, die einen Wert von `undefined` enthalten:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> **Note:** `let`- und `const`-Deklarationen werden nur verarbeitet, wenn das aktuelle Skript verarbeitet wird. Wenn Sie zwei `<script>`-Elemente im Skriptmodus innerhalb eines HTML-Dokuments ausführen, unterliegt das erste Skript nicht den TDZ-Beschränkungen für `let`- oder `const`-Variablen auf oberster Ebene, die im zweiten Skript deklariert sind, obwohl das erneute Deklarieren einer `let`- oder `const`-Variablen im ersten Skript im zweiten Skript einen [Neudeklarationsfehler](#neudeklarationen) verursachen wird.

### Neudeklarationen

`let`-Deklarationen können nicht im selben Gültigkeitsbereich wie eine andere Deklaration existieren, einschließlich `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, und {{jsxref("Statements/import", "import")}}-Deklarationen.

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Eine `let`-Deklaration innerhalb des Rumpfes einer Funktion kann nicht denselben Namen wie ein Parameter haben. Eine `let`-Deklaration innerhalb eines `catch`-Blocks kann nicht denselben Namen wie der `catch`-gebundene Bezeichner haben.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Wenn Sie in einem REPL experimentieren, wie der Firefox-Webkonsole (**Werkzeuge** > **Web-Entwickler** > **Web-Konsole**), und Sie führen zwei `let`-Deklarationen mit demselben Namen in zwei separaten Eingaben aus, könnten Sie denselben Neudeklarationsfehler erhalten. Siehe weitere Diskussion zu diesem Thema in [Firefox bug 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt `let`-Neudeklarationen zwischen verschiedenen REPL-Eingaben.

In {{jsxref("Statements/switch", "switch")}}-Anweisungen können Fehler auftreten, weil es nur einen Block gibt.

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

Um den Fehler zu vermeiden, umgeben Sie jedes `case` mit einer neuen Blockanweisung.

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

### Gültigkeitsregeln

Von `let` deklarierte Variablen haben ihren Gültigkeitsbereich in dem Block, für den sie deklariert wurden, sowie in allen enthaltenen Unterblöcken. Auf diese Weise funktioniert `let` ähnlich wie `var`. Der Hauptunterschied ist, dass der Gültigkeitsbereich einer `var`-Variablen die gesamte umschließende Funktion ist:

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

Auf der obersten Ebene von Programmen und Funktionen erstellt `let`, im Gegensatz zu `var`, keine Eigenschaft im globalen Objekt. Zum Beispiel:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### TDZ kombiniert mit lexikalischem Scoping

Der folgende Code führt zu einem `ReferenceError` in der angegebenen Zeile:

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

Der `if`-Block wird ausgewertet, weil das äußere `var foo` einen Wert hat. Aufgrund des lexikalischen Scopings ist dieser Wert jedoch nicht innerhalb des Blocks verfügbar: Der Bezeichner `foo` _innerhalb_ des `if`-Blocks ist das `let foo`. Der Ausdruck `foo + 55` führt zu einem `ReferenceError`, weil die Initialisierung von `let foo` noch nicht abgeschlossen ist — es befindet sich noch in der temporalen Totzone.

Dieses Phänomen kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits innerhalb des Gültigkeitsbereichs des Blocks der `for...of`-Schleife. Der Bezeichner `n.a` wird also auf die Eigenschaft `a` des `n`-Objekts im ersten Teil der Anweisung selbst (`let n`) aufgelöst. Dies befindet sich noch in der temporalen Totzone, da seine Deklarationsanweisung noch nicht erreicht und abgeschlossen wurde.

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

Wenn `let` in einem Block verwendet wird, beschränkt es den Gültigkeitsbereich der Variablen auf diesen Block. Beachten Sie den Unterschied zu `var`, dessen Gültigkeitsbereich innerhalb der Funktion liegt, in der es deklariert ist.

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

Diese Kombination von `var`- und `let`-Deklarationen unten ist jedoch ein {{jsxref("SyntaxError")}}, weil `var` nicht block-skopiert ist, was dazu führt, dass sie im selben Gültigkeitsbereich liegen. Dies führt zu einer impliziten Neudeklaration der Variablen.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht das gleichzeitige Erstellen mehrerer Variablen.

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
- [Breaking Changes in `let` und `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) auf blog.mozilla.org (2015)
- [You Don't Know JS: Scope & Closures, Ch.3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) von Kyle Simpson
- [Was ist die Temporale Totzone?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) auf Stack Overflow
- [Was ist der Unterschied zwischen der Verwendung von `let` und `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) auf Stack Overflow
- [Warum wurde der Name 'let' für Block-skopierte Variablendeklarationen in JavaScript gewählt?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) auf Stack Overflow
