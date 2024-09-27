---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: 83cd56a5a8a5d19b2b602d0b3448487d6053c50a
---

{{jsSidebar("Statements")}}

Die **`let`**-Deklaration deklariert erneut zuweisbare, blockscoped lokale Variablen und initialisiert optional jede mit einem Wert.

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein gültiger JavaScript-[Identifikator](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungs-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `let` deklarierten Variablen ist eines der folgenden geschweiften und umschlossenen Syntaxelemente, das die `let`-Deklaration am engsten enthält:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung
- {{jsxref("Statements/switch", "switch")}}-Anweisung
- {{jsxref("Statements/try...catch", "try...catch")}}-Anweisung
- Körper einer [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn sich das `let` im Header der Anweisung befindet
- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keiner der obigen Punkte zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code der im Modus "Module" ausgeführt wird
- Der globale Bereich, für Code der im Skriptmodus läuft.

Im Vergleich zu {{jsxref("Statements/var", "var")}}, weisen `let`-Deklarationen folgende Unterschiede auf:

- `let`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- Auf `let`-Deklarationen kann nur zugegriffen werden, nachdem der Deklarationsort erreicht ist (siehe [temporäre tote Zone](#temporal_dead_zone_tdz)). Aus diesem Grund werden `let`-Deklarationen oft als [nicht erhöht](/de/docs/Glossary/Hoisting) angesehen.
- `let`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf oberster Ebene eines Skripts deklariert werden.
- `let`-Deklarationen können in demselben Bereich nicht durch eine andere Deklaration [erneut deklariert](#neudeklarationen) werden.
- `let` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine alleinstehende `let`-Deklaration nicht als Körper eines Blocks verwenden können (was sinnvoll ist, da es keinen Zugriff auf die Variable gibt).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` als Identifikatorname erlaubt ist, wenn es mit `var` oder `function` im [nicht strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) deklariert wird, aber Sie sollten es vermeiden, `let` als Identifikatorname zu verwenden, um unerwartete Syntaxkonflikte zu vermeiden.

Viele Stilrichtlinien (einschließlich der [MDN-Stilrichtlinie](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen, {{jsxref("Statements/const", "const")}} anstelle von `let` zu verwenden, wann immer eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht die Absicht deutlich, dass sich der Typ (oder im Fall von primitiven Werten der Wert) einer Variablen niemals ändern kann. Andere ziehen `let` für nicht-primitives vor, die verändert werden.

Die Liste, die dem Schlüsselwort `let` folgt, wird als _[Bindung](/de/docs/Glossary/binding)-Liste_ bezeichnet und ist durch Kommas getrennt, wobei die Kommas _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=` Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

### Temporäre tote Zone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich in einer "temporären toten Zone" (TDZ) vom Beginn des Blocks bis der Code die Deklarations- und Initialisierungsstelle der Variablen erreicht.

Während sich die Variable in der TDZ befindet, wurde ihr kein Wert zugewiesen, und jeder Versuch des Zugriffs führt zu einem {{jsxref("ReferenceError")}}. Die Variable wird mit einem Wert initialisiert, wenn die Ausführung die Stelle im Code erreicht, an der sie deklariert wurde. Wenn bei der Variablendeklaration kein Anfangswert angegeben wurde, wird sie mit einem Wert von `undefined` initialisiert.

Dies unterscheidet sich von {{jsxref("Statements/var", "var", "hoisting")}}-Variablen, die einen Wert von `undefined` zurückgeben, wenn sie vor der Deklaration aufgerufen werden. Der folgende Code veranschaulicht das unterschiedliche Ergebnis, wenn `let` und `var` im Code aufgerufen werden, bevor sie deklariert wurden.

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Der Begriff "temporal" wird verwendet, weil die Zone von der Reihenfolge der Ausführung (Zeit) und nicht von der Reihenfolge des geschriebenen Codes (Position) abhängt. Zum Beispiel funktioniert der folgende Code, weil, obwohl die Funktion, die die `let`-Variable verwendet, vor ihrem Deklarationsort erscheint, die Funktion _außerhalb_ der TDZ aufgerufen wird.

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

Dies unterscheidet sich von der Verwendung von `typeof` für nicht deklarierte Variablen und Variablen, die einen Wert `undefined` enthalten:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> **Note:** `let`- und `const`-Deklarationen werden nur verarbeitet, wenn das aktuelle Skript verarbeitet wird. Wenn Sie zwei `<script>`-Elemente im Skriptmodus innerhalb eines HTML ausführen, unterliegt das erste Skript nicht den TDZ-Beschränkungen für `let` oder `const`-Variablen auf oberster Ebene, die im zweiten Skript deklariert wurden, obwohl, wenn Sie eine `let` oder `const` Variable im ersten Skript deklarieren, sie erneut im zweiten Skript zu deklarieren, wird einen [Neudeklarationsfehler](#neudeklarationen) verursachen.

### Neudeklarationen

`let`-Deklarationen können sich nicht im selben Bereich befinden wie jede andere Deklaration, einschließlich `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, und {{jsxref("Statements/import", "import")}}-Deklaration.

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Eine `let`-Deklaration innerhalb eines Funktionskörpers kann nicht denselben Namen wie ein Parameter haben. Eine `let`-Deklaration innerhalb eines `catch`-Blocks kann nicht denselben Namen wie der catch-gebundene Bezeichner haben.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Wenn Sie in einer REPL, wie der Firefox-Webkonsole (**Werkzeuge** > **Web-Entwickler** > **Web-Konsole**), experimentieren und Sie zwei `let`-Deklarationen mit demselben Namen in zwei separaten Eingaben ausführen, können Sie denselben Neudeklarationsfehler erhalten. Weitere Diskussionen zu diesem Thema finden Sie in [Firefox Bug 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt `let`-Neudeklarationen zwischen verschiedenen REPL-Eingaben.

Sie können auf Fehler in {{jsxref("Statements/switch", "switch")}}-Anweisungen stoßen, da es dort nur einen Block gibt.

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

Um den Fehler zu vermeiden, umschließen Sie jeden `case` in eine neue Blockanweisung.

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

### Gültigkeitsbereiche

Von `let` deklarierte Variablen haben ihren Gültigkeitsbereich im Block, für den sie deklariert sind, sowie in allen enthaltenen Unterblöcken. `let` funktioniert in dieser Hinsicht sehr ähnlich wie `var`. Der Hauptunterschied besteht darin, dass der Gültigkeitsbereich einer `var`-Variablen die gesamte umschließende Funktion ist:

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

Auf oberster Programmebene und in Funktionen erstellt `let`, im Gegensatz zu `var`, keine Eigenschaft im globalen Objekt. Zum Beispiel:

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

Der `if`-Block wird ausgewertet, da das äußere `var foo` einen Wert hat. Aufgrund des lexikalischen Scopings ist dieser Wert jedoch innerhalb des Blocks nicht verfügbar: der Bezeichner `foo` _innerhalb_ des `if`-Blocks ist das `let foo`. Der Ausdruck `foo + 55` wirft einen `ReferenceError`, weil die Initialisierung von `let foo` noch nicht abgeschlossen ist — er befindet sich noch in der temporären toten Zone.

Dieses Phänomen kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits im Gültigkeitsbereich des Blocks der `for...of`-Schleife. Daher bezieht sich der Bezeichner `n.a` auf die Eigenschaft `a` des Objekts `n`, das sich im ersten Teil der Anweisung selbst befindet (`let n`). Dies ist immer noch in der temporären toten Zone, da die Deklarationsanweisung noch nicht erreicht und abgeschlossen wurde.

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

Bei Verwendung innerhalb eines Blocks beschränkt `let` den Gültigkeitsbereich der Variablen auf diesen Block. Beachten Sie den Unterschied zu `var`, dessen Gültigkeitsbereich innerhalb der Funktion liegt, in der es deklariert ist.

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

Diese Kombination aus `var` und `let`-Deklarationen unten führt jedoch zu einem {{jsxref("SyntaxError")}}, da `var` nicht blockscoped ist, was dazu führt, dass sie sich im selben Gültigkeitsbereich befinden. Dies führt zu einer impliziten Neudeklaration der Variablen.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [Hoisting](/de/docs/Glossary/Hoisting)
- [ES6 In Depth: `let` und `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/) auf hacks.mozilla.org (2015)
- [Breaking changes in `let` und `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) auf blog.mozilla.org (2015)
- [You Don't Know JS: Scope & Closures, Ch.3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) von Kyle Simpson
- [Was ist die temporäre tote Zone?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) auf Stack Overflow
- [Was ist der Unterschied zwischen der Verwendung von `let` und `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) auf Stack Overflow
- [Warum wurde der Name 'let' für Block-Scoped-Variablendeklarationen in JavaScript gewählt?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) auf Stack Overflow
