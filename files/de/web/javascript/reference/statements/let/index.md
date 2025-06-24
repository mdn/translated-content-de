---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Statements")}}

Die **`let`**-Deklaration deklariert neu zuweisbare, blockscoped lokale Variablen und initialisiert optional jede mit einem Wert.

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
  - : Der Name der zu deklarierenden Variable. Jeder muss ein legaler JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring Binding Pattern](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Es kann jeder legale Ausdruck sein. Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `let` deklarierten Variable ist eine der folgenden geschweiften Klammern umschlossenen Syntaxen, die die `let`-Deklaration am nächsten enthält:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung
- {{jsxref("Statements/switch", "switch")}}-Anweisung
- {{jsxref("Statements/try...catch", "try...catch")}}-Anweisung
- Körper einer [der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn sich das `let` im Header der Anweisung befindet
- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keine der obigen zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code, der im Modulmodus ausgeführt wird
- Der globale Gültigkeitsbereich, für Code, der im Skriptmodus ausgeführt wird.

Im Vergleich zu {{jsxref("Statements/var", "var")}} weisen `let`-Deklarationen die folgenden Unterschiede auf:

- `let`-Deklarationen sind auf Blöcke sowie Funktionen begrenzt.
- `let`-Deklarationen können nur nach Erreichen der Deklarationsstelle zugegriffen werden (siehe [temporal dead zone](#temporal_dead_zone_tdz)). Aus diesem Grund werden `let`-Deklarationen allgemein als {{Glossary("Hoisting", "nicht-hoisted")}} betrachtet.
- `let`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf oberster Ebene eines Skripts deklariert werden.
- `let`-Deklarationen können nicht durch eine andere Deklaration im selben Gültigkeitsbereich [erneut deklariert](#erklärungsänderungen) werden.
- `let` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine einzelne `let`-Deklaration nicht als den Körper eines Blocks verwenden können (was sinnvoll ist, da es keinen Zugang zur Variablen gibt).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` als Bezeichnername erlaubt ist, wenn es mit `var` oder `function` im [nicht-strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) deklariert wird, aber Sie sollten vermeiden, `let` als Bezeichnernamen zu verwenden, um unerwartete Syntaxzweideutigkeiten zu verhindern.

Viele Stilrichtlinien (einschließlich der [MDN-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von {{jsxref("Statements/const", "const")}} über `let`, wann immer eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht deutlich, dass sich der Typ (oder der Wert im Fall eines Primitiven) einer Variablen niemals ändern kann. Andere ziehen `let` für Nicht-Primitiven vor, die verändert werden.

Die Liste, die dem Schlüsselwort `let` folgt, wird als _{{Glossary("binding", "binding")}} list_ bezeichnet und ist durch Kommata getrennt, wobei die Kommata nicht die [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen nicht die [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

### Temporale Totzone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich von Anfang des Blocks an in einer sogenannten "temporalen Totzone" (TDZ), bis der Code den Punkt erreicht, an dem die Variable deklariert und initialisiert wird.

Während sich die Variable in der TDZ befindet, wurde sie nicht mit einem Wert initialisiert, und jeder Versuch, auf sie zuzugreifen, führt zu einem {{jsxref("ReferenceError")}}. Die Variable wird mit einem Wert initialisiert, wenn die Ausführung den Punkt im Code erreicht, an dem sie deklariert wurde. Wenn kein Anfangswert bei der Variablendeklaration angegeben wurde, wird sie mit einem Wert von `undefined` initialisiert.

Dies unterscheidet sich von {{jsxref("Statements/var", "var", "hoisting")}}-Variablen, die einen Wert von `undefined` zurückgeben, wenn auf sie zugegriffen wird, bevor sie deklariert werden. Der folgende Code zeigt das unterschiedliche Ergebnis, wenn `let` und `var` im Code aufgerufen werden, bevor sie deklariert werden.

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Der Begriff "temporal" wird verwendet, weil die Zone von der Ausführungsreihenfolge (Zeit) statt von der Schreibordnung des Codes (Position) abhängt. Zum Beispiel funktioniert der unten stehende Code, weil die Funktion, die die `let`-Variable verwendet, außerhalb der TDZ _aufgerufen_ wird, auch wenn sie vor der Deklaration erscheint.

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

Dies unterscheidet sich von der Verwendung von `typeof` für nicht deklarierte Variablen und Variablen, die einen Wert von `undefined` haben:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> [!NOTE] > `let`- und `const`-Deklarationen werden nur verarbeitet, wenn das aktuelle Skript verarbeitet wird. Wenn Sie zwei `<script>`-Elemente im Skriptmodus innerhalb eines HTML ausführen, unterliegt das erste Skript nicht den TDZ-Einschränkungen für top-level `let`- oder `const`-Variablen, die im zweiten Skript deklariert sind, obwohl die erneute Deklaration einer `let`- oder `const`-Variablen im ersten Skript im zweiten Skript einen [Erklärungsfehler](#erklärungsänderungen) verursachen wird.

### Erklärungsänderungen

`let`-Deklarationen können nicht im selben Gültigkeitsbereich wie jede andere Deklaration sein, einschließlich `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, und {{jsxref("Statements/import", "import")}}-Deklarationen.

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

Wenn Sie in einem REPL experimentieren, wie der Firefox-Webkonsole (**Werkzeuge** > **Web-Entwickler** > **Webkonsole**), und Sie führen zwei `let`-Deklarationen mit demselben Namen in zwei separaten Eingaben aus, könnten Sie denselben Neudeklarationsfehler erhalten. Siehe weitere Diskussion zu diesem Thema im [Firefox-Bug 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt `let`-Neudeklarationen zwischen verschiedenen REPL-Eingaben.

Sie könnten Fehler in {{jsxref("Statements/switch", "switch")}}-Anweisungen begegnen, da es nur einen Block gibt.

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

Variablen, die mit `let` deklariert werden, haben ihren Gültigkeitsbereich in dem Block, für den sie deklariert werden, sowie in allen enthaltenen Unterblöcken. Auf diese Weise funktioniert `let` sehr ähnlich wie `var`. Der Hauptunterschied ist, dass der Gültigkeitsbereich einer `var`-Variablen die gesamte umschließende Funktion ist:

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

Der `if`-Block wird evaluiert, weil die äußere `var foo` einen Wert hat. Auf Grund des lexikalischen Scopings ist dieser Wert jedoch innerhalb des Blocks nicht verfügbar: Der Bezeichner `foo` _innerhalb_ des `if`-Blocks ist das `let foo`. Der Ausdruck `foo + 55` löst einen `ReferenceError` aus, weil die Initialisierung von `let foo` nicht abgeschlossen ist und er sich noch in der temporalen Totzone befindet.

Dieses Phänomen kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits im Gültigkeitsbereich des Blocks der `for...of`-Schleife. So wird der Bezeichner `n.a` auf die Eigenschaft `a` des Objekts `n` im ersten Teil der Anweisung selbst (`let n`) aufgelöst. Diese befindet sich noch in der temporalen Totzone, da die Deklarationsanweisung noch nicht erreicht und abgeschlossen wurde.

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

Wenn `let` innerhalb eines Blocks verwendet wird, beschränkt es den Gültigkeitsbereich der Variablen auf diesen Block. Beachten Sie den Unterschied zu `var`, dessen Gültigkeitsbereich innerhalb der Funktion ist, in der es deklariert wird.

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

Diese Kombination von `var`- und `let`-Deklarationen unten ist jedoch ein {{jsxref("SyntaxError")}}, weil `var` nicht block-scoped ist, was dazu führt, dass sie sich im selben Gültigkeitsbereich befinden. Dies führt zu einer impliziten Neudeklaration der Variablen.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destructuring

Die linke Seite jedes `=` kann auch ein Binding-Pattern sein. Dies ermöglicht die Erstellung mehrerer Variablen auf einmal.

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
- [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/) auf hacks.mozilla.org (2015)
- [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) auf blog.mozilla.org (2015)
- [You Don't Know JS: Scope & Closures, Ch.3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) von Kyle Simpson
- [What is the Temporal Dead Zone?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) auf Stack Overflow
- [What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) auf Stack Overflow
- [Why was the name 'let' chosen for block-scoped variable declarations in JavaScript?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) auf Stack Overflow
