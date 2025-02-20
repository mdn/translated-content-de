---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`let`**-Deklaration deklariert neu zuweisbare, block-skopierte lokale Variablen und initialisiert diese optional mit einem Wert.

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
  - : Der Name der zu deklarierenden Variablen. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Binding-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN` {{optional_inline}}
  - : Der initiale Wert der Variablen. Es kann jeder gültige Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `let` deklarierten Variablen ist einer der folgenden geschweiften Block-Syntaxen, der die `let`-Deklaration am engsten umschließt:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Statement
- {{jsxref("Statements/switch", "switch")}}-Statement
- {{jsxref("Statements/try...catch", "try...catch")}}-Statement
- Der Body eines [eines der `for`-Statements](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn das `let` im Header des Statements steht
- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder falls nichts davon zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), wenn der Code im Modulmodus ausgeführt wird
- Der globale Gültigkeitsbereich, wenn der Code im Skriptmodus ausgeführt wird.

Im Vergleich zu {{jsxref("Statements/var", "var")}} gibt es bei `let`-Deklarationen die folgenden Unterschiede:

- `let`-Deklarationen sind sowohl block- als auch funktionsspezifisch.
- `let`-Deklarationen können nur nach dem Erreichen der Deklarationsstelle zugegriffen werden (siehe [temporal dead zone](#temporal_dead_zone_tdz)). Aus diesem Grund werden `let`-Deklarationen üblicherweise als {{Glossary("Hoisting", "nicht-hochgehoben")}} angesehen.
- `let`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf oberster Ebene eines Skripts deklariert werden.
- `let`-Deklarationen können nicht [erneut deklariert](#redeclarations) werden, weder durch sich selbst noch durch eine andere Deklaration im selben Gültigkeitsbereich.
- `let` beginnt [_Deklarationen_, nicht _Statements_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass eine alleinstehende `let`-Deklaration nicht als Body eines Blocks verwendet werden kann (was Sinn ergibt, da die Variable nicht zugänglich wäre).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` als Bezeichnername erlaubt ist, wenn es mit `var` oder `function` in [nicht-striktem Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) deklariert wird. Dennoch sollten Sie vermeiden, `let` als Bezeichnernamen zu verwenden, um unerwartete Syntaxzweideutigkeiten zu vermeiden.

Viele Stilrichtlinien (einschließlich [derjenigen von MDN](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von {{jsxref("Statements/const", "const")}} statt `let`, wenn eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies verdeutlicht die Absicht, dass der Typ (oder Wert im Fall eines primitiven Typs) einer Variablen sich niemals ändert. Andere bevorzugen möglicherweise `let` für Nicht-Primitivwerte, die mutiert werden.

Die Liste, die auf das Schlüsselwort `let` folgt, wird als _{{Glossary("binding", "Binding")}} List_ bezeichnet und ist durch Kommata getrennt, wobei die Kommata _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

### Temporale Dead Zone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich in einer "temporalen Dead Zone" (TDZ), von Beginn des Blocks bis zur Codeausführung an der Stelle, an der die Variable deklariert und initialisiert wird.

Innerhalb der TDZ wurde der Variablen kein Wert zugewiesen, und jeder Zugriff darauf führt zu einem {{jsxref("ReferenceError")}}. Die Initialisierung erfolgt, wenn der Code die Deklarationsstelle erreicht. Wenn kein Anfangswert angegeben wurde, wird `undefined` als Wert zugewiesen.

Dies unterscheidet sich von {{jsxref("Statements/var", "var", "hoisting")}}-Variablen, die einen Wert von `undefined` zurückgeben, wenn sie vor ihrer Deklaration aufgerufen werden. Der folgende Code demonstriert die unterschiedlichen Ergebnisse beim Zugriff auf `let` und `var` vor deren Deklaration:

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Der Begriff "tempora" wird verwendet, da die Zone von der Ausführungsreihenfolge (Zeit) und nicht von der Reihenfolge, in der der Code geschrieben ist (Position), abhängt. Zum Beispiel funktioniert der folgende Code, da die Funktion, die die `let`-Variable verwendet, außerhalb der TDZ _aufgerufen_ wird, auch wenn sie vor der Variablendeklaration erscheint.

```js
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

Die Verwendung des `typeof`-Operators für eine Variable in ihrer TDZ führt zu einem {{jsxref("ReferenceError")}}:

```js example-bad
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

Das unterscheidet sich vom Einsatz von `typeof` bei nicht deklarierten Variablen und Variablen, die den Wert `undefined` enthalten:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> **Note:** `let`- und `const`-Deklarationen werden nur verarbeitet, wenn das aktuelle Skript verarbeitet wird. Wenn Sie zwei `<script>`-Elemente im Skriptmodus in einem einzigen HTML haben, unterliegt das erste Skript nicht den TDZ-Beschränkungen für Top-Level-`let`- oder `const`-Variablen, die im zweiten Skript deklariert wurden. Allerdings führt eine erneute Deklaration einer `let`- oder `const`-Variablen im ersten und im zweiten Skript zu einem [Redeclaration Error](#redeclarations).

### Redeclarations

`let`-Deklarationen können nicht im selben Gültigkeitsbereich mit einer anderen Deklaration existieren, einschließlich `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, und {{jsxref("Statements/import", "import")}}-Deklarationen.

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Eine `let`-Deklaration innerhalb eines Funktionskörpers kann nicht denselben Namen haben wie ein Parameter. Auch innerhalb eines `catch`-Blocks kann eine `let`-Deklaration nicht denselben Namen wie der `catch`-gebundene Bezeichner haben.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Wenn Sie in einer REPL, wie der Firefox-Webkonsole (**Tools** > **Web Developer** > **Web Console**), experimentieren und zwei `let`-Deklarationen mit demselben Namen in zwei getrennten Eingaben ausführen, können Sie denselben Redeclarations-Fehler erhalten. Weitere Diskussionen hierzu finden Sie im [Firefox-Bug 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt `let`-Neudeklarationen zwischen verschiedenen REPL-Eingaben.

In {{jsxref("Statements/switch", "switch")}}-Statements treten möglicherweise Fehler auf, da es nur einen Block gibt.

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

Um den Fehler zu vermeiden, können Sie jeden `case` in einen neuen Block einschließen.

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

Variablen, die mit `let` deklariert wurden, haben ihren Gültigkeitsbereich im Block, für den sie deklariert wurden, sowie in allen enthaltenen Unterblöcken. In dieser Hinsicht funktioniert `let` ähnlich wie `var`. Der Hauptunterschied ist, dass der Gültigkeitsbereich einer `var`-Variablen die gesamte umschließende Funktion ist:

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

Auf der obersten Ebene von Programmen und Funktionen erzeugt `let` im Gegensatz zu `var` keine Eigenschaft im globalen Objekt. Zum Beispiel:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### TDZ kombiniert mit lexikalischer Sichtbarkeit

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

Der `if`-Block wird ausgewertet, weil die äußere `var foo` einen Wert hat. Aufgrund der lexikalischen Sichtbarkeit ist dieser Wert jedoch nicht im Block verfügbar: Der Bezeichner `foo` _im_ `if`-Block ist das `let foo`. Die Anweisung `foo + 55` löst einen `ReferenceError` aus, da die Initialisierung von `let foo` noch nicht abgeschlossen ist — es befindet sich noch in der temporalen Dead Zone.

Dieses Phänomen kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits im Gültigkeitsbereich des Blocks der `for...of`-Schleife. Somit wird der Bezeichner `n.a` auf die Eigenschaft `a` des Objekts `n` aufgelöst, das sich im ersten Teil der Anweisung selbst befindet (`let n`). Dies befindet sich jedoch immer noch in der temporalen Dead Zone, da die Deklarationsanweisung noch nicht erreicht und abgeschlossen wurde.

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

Wenn `let` innerhalb eines Blocks verwendet wird, begrenzt es den Gültigkeitsbereich der Variablen auf diesen Block. Beachten Sie den Unterschied zu `var`, dessen Gültigkeitsbereich innerhalb der Funktion liegt, in der es deklariert wird:

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

Die folgende Kombination aus `var`- und `let`-Deklarationen führt jedoch zu einem {{jsxref("SyntaxError")}}, da `var` nicht blockskopiert ist, was dazu führt, dass beide Deklarationen im selben Gültigkeitsbereich liegen. Dies resultiert in einer impliziten Neudeklaration der Variablen.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destructuring

Die linke Seite jedes `=` kann auch ein Binding-Muster sein. Dies ermöglicht das Erstellen mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

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
- [Was ist der Unterschied zwischen der Verwendung von `let` und `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) auf Stack Overflow
- [Warum wurde der Name 'let' für block-skopierte Variablendeklarationen in JavaScript gewählt?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) auf Stack Overflow
