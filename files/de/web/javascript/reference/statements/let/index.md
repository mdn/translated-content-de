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
  - : Der Name der zu deklarierenden Variable. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variable. Es kann jeder gültige Ausdruck sein. Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `let` deklarierten Variablen ist eine der folgenden geschweifte Klammern umschließenden Syntaxen, die die `let`-Deklaration am nächsten enthält:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block) Anweisung
- {{jsxref("Statements/switch", "switch")}} Anweisung
- {{jsxref("Statements/try...catch", "try...catch")}} Anweisung
- Körper einer [der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn das `let` sich im Kopf der Anweisung befindet
- Funktionskörper
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keiner der obigen Punkte zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code, der im Modulmodus läuft
- Der globale Bereich, für Code, der im Skriptmodus läuft.

Im Vergleich mit {{jsxref("Statements/var", "var")}} weisen `let`-Deklarationen die folgenden Unterschiede auf:

- `let`-Deklarationen sind auf Blöcke sowie auf Funktionen beschränkt.
- `let`-Deklarationen können erst nach Erreichen der Deklarationsstelle zugegriffen werden (siehe [temporal dead zone](#temporal_dead_zone_tdz)). Aus diesem Grund werden `let`-Deklarationen häufig als {{Glossary("Hoisting", "nicht-geliftet")}} betrachtet.
- `let`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert sind.
- `let`-Deklarationen können im gleichen Bereich durch keine andere Deklaration [neu deklariert](#neudeklarationen) werden.
- `let` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine einzelne `let`-Deklaration nicht als Körper eines Blocks verwenden können (was Sinn macht, da es keinen Weg gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` als Bezeichnername erlaubt ist, wenn er mit `var` oder `function` im [nicht-strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) deklariert wird, aber man sollte `let` als Bezeichnername vermeiden, um unerwartete Syntaxzweideutigkeiten zu vermeiden.

Viele Stilrichtlinien (einschließlich der [MDN-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von {{jsxref("Statements/const", "const")}} über `let`, wann immer eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht die Absicht klar, dass der Typ (oder der Wert, im Fall eines Primitivs) einer Variablen niemals geändert werden kann. Andere bevorzugen möglicherweise `let` für Nicht-Primitiven, die verändert werden.

Die Liste, die dem `let`-Schlüsselwort folgt, wird _{{Glossary("binding", "Binding-")}} Liste_ genannt und durch Kommata getrennt, wobei die Kommata _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

### Temporale Totzone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich in einer "temporalen Totzone" (TDZ) vom Beginn des Blocks bis der Codeausführung die Deklarationsstelle der Variable erreicht und initialisiert.

Innerhalb der TDZ ist die Variable noch nicht mit einem Wert initialisiert, und jeder Versuch, auf sie zuzugreifen, führt zu einem {{jsxref("ReferenceError")}}. Die Variable wird mit einem Wert initialisiert, wenn die Codeausführung die Deklarationsstelle erreicht. Wenn kein Anfangswert bei der Variablendeklaration angegeben wurde, wird sie mit dem Wert `undefined` initialisiert.

Dies unterscheidet sich von {{jsxref("Statements/var", "var", "hoisting")}}-Variablen, die einen Wert von `undefined` zurückgeben, wenn auf sie zugegriffen wird, bevor sie deklariert sind. Der Code unten zeigt die unterschiedlichen Ergebnisse, wenn `let` und `var` im Code aufgerufen werden, bevor sie deklariert sind.

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Der Begriff "temporal" wird verwendet, weil die Zone von der Ausführungsreihenfolge (Zeit) abhängt und nicht von der Reihenfolge, in der der Code geschrieben ist (Position). Zum Beispiel funktioniert der untenstehende Code, weil, obwohl die Funktion, die die `let`-Variable verwendet, vor der Deklaration der Variablen erscheint, die Funktion _außerhalb_ der TDZ aufgerufen wird.

```js
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

Das Verwenden des Operators `typeof` für eine Variable in ihrer TDZ wird einen {{jsxref("ReferenceError")}} werfen:

```js example-bad
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

Dies unterscheidet sich von der Verwendung von `typeof` für nicht deklarierte Variablen und Variablen, die einen Wert von `undefined` haben:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> **Note:** `let`- und `const`-Deklarationen werden nur verarbeitet, wenn das aktuelle Skript verarbeitet wird. Wenn Sie zwei `<script>`-Elemente im Skriptmodus innerhalb eines HTML-Dokuments ausführen, unterliegt das erste Skript nicht den TDZ-Einschränkungen für oberste `let`- oder `const`-Variablen, die im zweiten Skript deklariert sind, obwohl eine Deklaration von `let` oder `const` im ersten Skript in einer [Neudeklarationsfehler](#neudeklarationen) resultiert, wenn sie im zweiten Skript erneut deklariert wird.

### Neudeklarationen

`let`-Deklarationen können nicht im gleichen Bereich mit einer anderen Deklaration, einschließlich `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, und {{jsxref("Statements/import", "import")}} deklariert werden.

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

Wenn Sie in einem REPL experimentieren, wie z.B. der Firefox-Webkonsole (**Tools** > **Web Developer** > **Webkonsole**), und Sie führen zwei `let` Deklarationen mit demselben Namen in zwei separaten Eingaben aus, können Sie denselben Neudeklarationsfehler erhalten. Siehe weitere Diskussion dieses Problems in [Firefox Bug 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt `let` Neudeklarationen zwischen verschiedenen REPL-Eingaben.

Sie können auf Fehler in {{jsxref("Statements/switch", "switch")}}-Anweisungen stoßen, da es derzeit nur einen Block gibt.

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

### Gültigkeitsbereichsregeln

Variablen, die mit `let` deklariert werden, haben ihren Gültigkeitsbereich innerhalb des Blocks, für den sie deklariert sind, sowie in allen darin enthaltenen Unterblöcken. Auf diese Weise funktioniert `let` sehr ähnlich wie `var`. Der Hauptunterschied besteht darin, dass der Gültigkeitsbereich einer `var`-Variablen die gesamte umgebende Funktion ist:

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

### TDZ kombiniert mit lexikalischer Bereichsszedierung

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

Der `if`-Block wird ausgewertet, weil das äußere `var foo` einen Wert hat. Aufgrund der lexikalischen Bereichslogik ist dieser Wert jedoch innerhalb des Blocks nicht verfügbar: Der Bezeichner `foo` _innerhalb_ des `if`-Blocks ist das `let foo`. Der Ausdruck `foo + 55` wirft einen `ReferenceError`, weil die Initialisierung von `let foo` nicht abgeschlossen ist - es befindet sich noch in der Temporalen Totzone.

Dieses Phänomen kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits im Gültigkeitsbereich des Blockes der `for...of` Schleife. Daher wird der Bezeichner `n.a` auf die Eigenschaft `a` des `n` Objekts im ersten Teil der Anweisung selbst (`let n`) aufgelöst. Dies befindet sich noch in der Temporalen Totzone da ihre Deklaration noch nicht erreicht und beendet wurde.

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

Diese Kombination von `var` und `let`-Deklarationen unten führt jedoch zu einem {{jsxref("SyntaxError")}}, weil `var` nicht blockskopiert ist und sie sich im gleichen Bereich befinden. Dies führt zu einer impliziten Neudeklaration der Variablen.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destructuring

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen gleichzeitig.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen, siehe [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- {{Glossary("Hoisting", "Hoisting")}}
- [ES6 In Depth: `let` und `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/) auf hacks.mozilla.org (2015)
- [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) auf blog.mozilla.org (2015)
- [You Don't Know JS: Scope & Closures, Ch.3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) von Kyle Simpson
- [What is the Temporal Dead Zone?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) auf Stack Overflow
- [What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) auf Stack Overflow
- [Why was the name 'let' chosen for block-scoped variable declarations in JavaScript?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) auf Stack Overflow
