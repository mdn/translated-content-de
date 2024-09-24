---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: 83cd56a5a8a5d19b2b602d0b3448487d6053c50a
---

{{jsSidebar("Statements")}}

Die **`let`** Deklaration deklariert neu zuweisbare, block-skopierte lokale Variablen und initialisiert optional jede mit einem Wert.

{{EmbedInteractiveExample("pages/js/statement-let.html")}}

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein legaler JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring Bindemuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Es kann jeder legale Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `let` deklarierten Variablen ist eine der folgenden geschweifte Klammern umfassenden Syntaxen, die die `let`-Deklaration am nächsten enthält:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block) Anweisung
- {{jsxref("Statements/switch", "switch")}} Anweisung
- {{jsxref("Statements/try...catch", "try...catch")}} Anweisung
- Körper einer [der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn sich das `let` im Header der Anweisung befindet
- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keine der oben genannten zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code, der im Modulmodus läuft
- Der globale Gültigkeitsbereich, für Code, der im Skriptmodus läuft.

Im Vergleich zu {{jsxref("Statements/var", "var")}} haben `let`-Deklarationen die folgenden Unterschiede:

- `let`-Deklarationen sind auf Blöcke sowie Funktionen beschränkt.
- Auf `let`-Deklarationen kann erst zugegriffen werden, nachdem der Ort der Deklaration erreicht ist (siehe [temporale tote Zone](#temporal_dead_zone_tdz)). Aus diesem Grund werden `let`-Deklarationen üblicherweise als [nicht-gehoistete](/de/docs/Glossary/Hoisting) angesehen.
- `let`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf oberster Ebene eines Skripts deklariert werden.
- `let`-Deklarationen können nicht im gleichen Bereich von einer anderen Deklaration [neu deklariert](#redeclarations) werden.
- `let` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie keine alleinstehende `let` Deklaration als den Körper eines Blocks verwenden können (was Sinn macht, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` als Bezeichnername erlaubt ist, wenn es im [Nicht-Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) mit `var` oder `function` deklariert wird, aber Sie sollten vermeiden, `let` als Bezeichnername zu verwenden, um unerwartete Syntaxzweideutigkeiten zu verhindern.

Viele Stilrichtlinien (einschließlich der [MDN's](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen, {{jsxref("Statements/const", "const")}} über `let` zu verwenden, wann immer eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht deutlich, dass sich der Typ (oder Wert, im Fall eines Primitiven) einer Variablen niemals ändern kann. Andere mögen `let` für Nicht-Primitiven, die mutiert werden, bevorzugen.

Die Liste, die dem `let` Schlüsselwort folgt, wird als _{{Glossary("binding")}}-Liste_ bezeichnet und durch Kommas getrennt, wobei die Kommas _keine_ [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

### Temporale tote Zone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich in einer "temporalen toten Zone" (TDZ) vom Beginn des Blocks bis zum Erreichen des Deklarations- und Initialisierungsortes im Code.

Während sie sich in der TDZ befindet, wurde die Variable nicht mit einem Wert initialisiert, und jeder Versuch, auf sie zuzugreifen, wird zu einem {{jsxref("ReferenceError")}} führen. Die Variable wird mit einem Wert initialisiert, wenn die Ausführung die Stelle erreicht, an der sie deklariert wurde. Wenn kein anfänglicher Wert mit der Variablendeklaration angegeben wurde, wird sie mit einem Wert von `undefined` initialisiert.

Dies unterscheidet sich von {{jsxref("Statements/var", "var", "hoisting")}} Variablen, die einen Wert von `undefined` zurückgeben, wenn sie vor ihrer Deklaration aufgerufen werden. Der untenstehende Code veranschaulicht das unterschiedliche Ergebnis, wenn `let` und `var` im Code vor der Deklaration aufgerufen werden.

```js example-bad
{
  // TDZ beginnt am Anfang des Gültigkeitsbereichs
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // Ende der TDZ (für foo)
}
```

Der Begriff "temporal" wird verwendet, weil die Zone von der Ausführungsreihenfolge (Zeit) anstelle der Anordnung des Codes (Position) abhängt. Zum Beispiel funktioniert der Code unten, weil obwohl die Funktion, die die `let`-Variable verwendet, vor der Variablendeklaration erscheint, die Funktion _außerhalb_ der TDZ aufgerufen wird.

```js
{
  // TDZ beginnt am Anfang des Gültigkeitsbereichs
  const func = () => console.log(letVar); // OK

  // Innerhalb der TDZ führt letVar-Zugriff zu `ReferenceError`

  let letVar = 3; // Ende der TDZ (für letVar)
  func(); // Außerhalb der TDZ aufgerufen!
}
```

Die Verwendung des `typeof` Operators für eine Variable in ihrer TDZ wird einen {{jsxref("ReferenceError")}} hervorrufen:

```js example-bad
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

Dies unterscheidet sich von der Verwendung von `typeof` für nicht deklarierte Variablen und Variablen, die den Wert `undefined` haben:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> **Note:** `let` und `const` Deklarationen werden nur verarbeitet, wenn das aktuelle Skript verarbeitet wird. Wenn Sie zwei `<script>`-Elemente im Skriptmodus in einem HTML haben, unterliegt das erste Skript nicht den TDZ-Beschränkungen für Top-Level-`let` oder `const` Variablen, die im zweiten Skript deklariert sind, obwohl das erneute Deklarieren einer `let` oder `const` Variablen im ersten Skript im zweiten Skript einen [Redeclaration-Fehler](#redeclarations) auslösen wird.

### Redeclarations

`let`-Deklarationen können nicht im gleichen Bereich wie jede andere Deklaration, einschließlich `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, und {{jsxref("Statements/import", "import")}} Deklaration sein.

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Eine `let` Deklaration innerhalb des Funktionskörpers kann nicht denselben Namen wie ein Parameter haben. Eine `let` Deklaration innerhalb eines `catch`-Blocks kann nicht denselben Namen wie der durch `catch` gebundene Bezeichner haben.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Wenn Sie in einem REPL experimentieren, wie der Firefox-Webkonsole (**Werkzeuge** > **Web-Entwickler** > **Web-Konsole**), und Sie führen zwei `let`-Deklarationen mit demselben Namen in zwei separaten Eingaben aus, können Sie denselben Wiederdeklarationsfehler erhalten. Weitere Diskussion zu diesem Thema finden Sie im [Firefox-Fehler 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt `let` Wiederdeklarationen zwischen verschiedenen REPL-Eingaben.

Sie können auf Fehler in {{jsxref("Statements/switch", "switch")}} Anweisungen stoßen, weil es nur einen Block gibt.

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

Um den Fehler zu vermeiden, umschließen Sie jeden `case` in einem neuen Block.

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

Variablen, die mit `let` deklariert sind, haben ihren Gültigkeitsbereich im Block, für den sie deklariert sind, sowie in allen enthaltenen Unterblöcken. Auf diese Weise funktioniert `let` ähnlich wie `var`. Der Hauptunterschied besteht darin, dass der Gültigkeitsbereich einer `var`-Variablen die gesamte umschließende Funktion ist:

```js
function varTest() {
  var x = 1;
  {
    var x = 2; // gleiche Variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // andere Variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

Auf der oberen Ebene von Programmen und Funktionen erzeugt `let`, im Gegensatz zu `var`, keine Eigenschaft auf dem globalen Objekt. Zum Beispiel:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### TDZ kombiniert mit lexikalischem Scoping

Der folgende Code führt zu einem `ReferenceError` an der gezeigten Zeile:

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

Der `if`-Block wird ausgewertet, weil der äußere `var foo` einen Wert hat. Aufgrund des lexikalischen Scopings ist dieser Wert jedoch nicht innerhalb des Blocks verfügbar: Der Bezeichner `foo` _innerhalb_ des `if`-Blocks ist das `let foo`. Der Ausdruck `foo + 55` löst einen `ReferenceError` aus, weil die Initialisierung von `let foo` nicht abgeschlossen ist — es befindet sich noch in der temporalen toten Zone.

Dieses Phänomen kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits im Gültigkeitsbereich des Blocks der `for...of` Schleife. Daher wird der Bezeichner `n.a` auf die Eigenschaft `a` des `n`-Objekts in den ersten Teil der Anweisung selbst aufgelöst (`let n`). Dies ist immer noch in der temporalen toten Zone, da ihre Deklarationsanweisung nicht erreicht und abgeschlossen wurde.

```js example-bad
function go(n) {
  // n hier ist definiert!
  console.log(n); // { a: [1, 2, 3] }

  for (let n of n.a) {
    //          ^ ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

### Andere Situationen

Wenn `let` innerhalb eines Blocks verwendet wird, beschränkt es den Gültigkeitsbereich der Variablen auf diesen Block. Beachten Sie den Unterschied zu `var`, dessen Gültigkeitsbereich innerhalb der Funktion ist, in der es deklariert wird.

```js
var a = 1;
var b = 2;

{
  var a = 11; // der Gültigkeitsbereich ist global
  let b = 22; // der Gültigkeitsbereich ist innerhalb des Blocks

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

Diese Kombination von `var` und `let` Deklarationen unten ist jedoch ein {{jsxref("SyntaxError")}}, weil `var` nicht block-scoped ist, was dazu führt, dass sie im gleichen Gültigkeitsbereich sind. Dies führt zu einer impliziten Wiederdeklaration der Variablen.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destructuring

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für mehr Informationen, siehe [Destructuring assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [Hoisting](/de/docs/Glossary/Hoisting)
- [ES6 Im Detail: `let` und `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/) auf hacks.mozilla.org (2015)
- [Breaking Changes in `let` und `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) auf blog.mozilla.org (2015)
- [You Don't Know JS: Scope & Closures, Ch.3: Funktion vs. Block-Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) von Kyle Simpson
- [Was ist die Temporale Tote Zone?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) auf Stack Overflow
- [Was ist der Unterschied zwischen der Verwendung von `let` und `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) auf Stack Overflow
- [Warum wurde der Name 'let' für Block-scoped Variablendeklarationen in JavaScript gewählt?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) auf Stack Overflow
