---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`let`**-Deklaration deklariert erneut zuweisbare, block-skopierte lokale Variablen und initialisiert diese optional mit einem Wert.

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `let` deklarierten Variablen ist eine der folgenden geschweiften Klammern umschließenden Syntaxen, die am engsten die `let`-Deklaration umfasst:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung
- {{jsxref("Statements/switch", "switch")}}-Anweisung
- {{jsxref("Statements/try...catch", "try...catch")}}-Anweisung
- Körper einer [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn sich das `let` in der Kopfleiste der Anweisung befindet
- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keine der oben genannten zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules) für Code, der im Modulmodus ausgeführt wird
- Der globale Gültigkeitsbereich für Code, der im Skriptmodus ausgeführt wird.

Im Vergleich zu {{jsxref("Statements/var", "var")}} haben `let`-Deklarationen die folgenden Unterschiede:

- `let`-Deklarationen sind sowohl für Blöcke als auch für Funktionen skopiert.
- `let`-Deklarationen können nur nach Erreichen des Deklarationsorts zugegriffen werden (siehe [temporal dead zone](#temporal_dead_zone_tdz)). Aus diesem Grund werden `let`-Deklarationen häufig als {{Glossary("Hoisting", "nicht-hoisted")}} angesehen.
- `let`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden.
- `let`-Deklarationen können im selben Gültigkeitsbereich von keiner anderen Deklaration [neu deklariert](#neudeklarationen) werden.
- `let` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie keine alleinstehende `let`-Deklaration als den Körper eines Blocks verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` als Bezeichnername erlaubt ist, wenn es mit `var` oder `function` im [Nicht-Strikt-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) deklariert wird. Es wird jedoch empfohlen, die Verwendung von `let` als Bezeichnername zu vermeiden, um unerwartete Syntaxmehrdeutigkeiten zu verhindern.

Viele Stilrichtlinien (einschließlich [MDNs](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von {{jsxref("Statements/const", "const")}} über `let`, wann immer eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht die Absicht deutlich, dass sich der Typ (oder Wert, im Falle eines primitiven Typs) einer Variablen niemals ändern kann. Andere bevorzugen möglicherweise `let` für nicht-primitive Typen, die verändert werden.

Die Liste, die dem `let`-Schlüsselwort folgt, wird _{{Glossary("binding", "Binding")}}-Liste_ genannt und wird durch Kommas getrennt, wobei die Kommas _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

### Zeitliche tote Zone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich in einer "zeitlichen toten Zone" (TDZ) von Beginn des Blocks bis die Codeausführung die Stelle erreicht, an der die Variable deklariert und initialisiert wird.

Während sie sich in der TDZ befindet, wurde die Variable nicht mit einem Wert initialisiert, und jeder Versuch, darauf zuzugreifen, führt zu einem {{jsxref("ReferenceError")}}. Die Variable wird mit einem Wert initialisiert, wenn die Ausführung die Stelle im Code erreicht, an der sie deklariert wurde. Wenn mit der Variablendeklaration kein Anfangswert angegeben wurde, wird sie mit einem Wert von `undefined` initialisiert.

Dies unterscheidet sich von {{jsxref("Statements/var", "var", "hoisting")}}-Variablen, die einen Wert von `undefined` zurückgeben, wenn auf sie zugegriffen wird, bevor sie deklariert werden. Der folgende Code zeigt das unterschiedliche Ergebnis, wenn `let` und `var` im Code verwendet werden, bevor sie deklariert werden.

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Der Begriff "zeitlich" wird verwendet, weil die Zone von der Reihenfolge der Ausführung (Zeit) abhängt und nicht von der Reihenfolge, in der der Code geschrieben ist (Position). Zum Beispiel funktioniert der folgende Code, obwohl die Funktion, die die `let`-Variable verwendet, vor der Deklaration der Variable erscheint, weil die Funktion _außerhalb_ der TDZ _aufgerufen_ wird.

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

Dies unterscheidet sich von der Verwendung von `typeof` für nicht deklarierte Variablen und Variablen, die den Wert `undefined` enthalten:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> [!NOTE]
> `let`- und `const`-Deklarationen werden nur verarbeitet, wenn das aktuelle Skript verarbeitet wird. Wenn Sie zwei `<script>`-Elemente im Skriptmodus innerhalb eines HTML ausführen, unterliegt das erste Skript nicht den TDZ-Einschränkungen für `let`- oder `const`-Variablen auf oberster Ebene, die im zweiten Skript deklariert wurden. Wenn Sie jedoch eine `let`- oder `const`-Variable im ersten Skript deklarieren, führt ihre erneute Deklaration im zweiten Skript zu einem [Neudeklarationsfehler](#neudeklarationen).

### Neudeklarationen

`let`-Deklarationen dürfen sich nicht im selben Gültigkeitsbereich wie jede andere Deklaration befinden, einschließlich `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und {{jsxref("Statements/import", "import")}}-Deklarationen.

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Eine `let`-Deklaration innerhalb des Funktionskörpers darf nicht denselben Namen wie ein Parameter haben. Eine `let`-Deklaration innerhalb eines `catch`-Blocks darf nicht denselben Namen wie der `catch`-gebundene Bezeichner haben.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Wenn Sie in einem REPL experimentieren, wie z.B. der Firefox-Webkonsole (**Tools** > **Web Developer** > **Web Console**), und Sie führen zwei `let`-Deklarationen mit demselben Namen in zwei separaten Eingaben aus, können Sie denselben Neudeklarationsfehler erhalten. Eine weitere Diskussion dieses Problems finden Sie unter [Firefox-Bug 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt `let`-Neudeklarationen zwischen unterschiedlichen REPL-Eingaben.

Sie können auf Fehler in {{jsxref("Statements/switch", "switch")}}-Anweisungen stoßen, weil es nur einen Block gibt.

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

Um den Fehler zu vermeiden, umschließen Sie jeden `case` in einer neuen Blockanweisung.

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

### Gültigkeitsbereichsregeln

Variablen, die mit `let` deklariert werden, haben ihren Gültigkeitsbereich im Block, für den sie deklariert werden, sowie in allen enthaltenen Unterblöcken. Auf diese Weise funktioniert `let` sehr ähnlich wie `var`. Der Hauptunterschied ist, dass der Gültigkeitsbereich einer `var`-Variablen die gesamte umschließende Funktion ist:

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

### TDZ kombiniert mit lexikalischem Gültigkeitsbereich

Der folgende Code führt zu einem `ReferenceError` in der gezeigten Zeile:

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

Der `if`-Block wird ausgewertet, weil die äußere `var foo` einen Wert hat. Aufgrund des lexikalischen Gültigkeitsbereichs ist dieser Wert jedoch im Block nicht verfügbar: Der Bezeichner `foo` _innerhalb_ des `if`-Blocks ist das `let foo`. Der Ausdruck `foo + 55` wirft einen `ReferenceError`, weil die Initialisierung von `let foo` nicht abgeschlossen ist — es befindet sich noch in der zeitlichen toten Zone.

Dieses Phänomen kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits im Gültigkeitsbereich des Blockes der `for...of`-Schleife. Somit wird der Bezeichner `n.a` auf die Eigenschaft `a` des `n`-Objektes im ersten Teil der Anweisung selbst (`let n`) aufgelöst. Dies ist immer noch in der zeitlichen toten Zone, da die Deklarationsanweisung nicht erreicht und abgeschlossen ist.

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

Wenn `let` innerhalb eines Blocks verwendet wird, beschränkt es den Gültigkeitsbereich der Variablen auf diesen Block. Beachten Sie den Unterschied zu `var`, dessen Gültigkeitsbereich innerhalb der Funktion liegt, in der es deklariert ist.

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

Diese Kombination aus `var`- und `let`-Deklarationen unten ist jedoch ein {{jsxref("SyntaxError")}}, weil `var` nicht blockskopiert ist und sie so im selben Gültigkeitsbereich sind. Dies führt zu einer impliziten Neudeklaration der Variablen.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht die Erstellung mehrerer Variablen gleichzeitig.

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
