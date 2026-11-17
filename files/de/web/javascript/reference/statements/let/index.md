---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`let`**-Deklaration deklariert lokale Variablen mit Block-Scope, denen erneut Werte zugewiesen werden können. Optional kann jede Variable mit einem Wert initialisiert werden.

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
  - : Der Name der zu deklarierenden Variablen. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungs-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Der Anfangswert der Variablen. Dies kann ein beliebiger gültiger Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `let` deklarierten Variablen ist diejenige der folgenden, durch geschweifte Klammern begrenzten Strukturen, welche die `let`-Deklaration unmittelbar umschließt:

- [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung
- {{jsxref("Statements/switch", "switch")}}-Anweisung
- {{jsxref("Statements/try...catch", "try...catch")}}-Anweisung
- Rumpf [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), wenn sich `let` im Kopf der Anweisung befindet
- Funktionsrumpf
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Falls nichts davon zutrifft, gilt:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), wenn der Code im Modulmodus ausgeführt wird
- Der globale Gültigkeitsbereich, wenn der Code im Skriptmodus ausgeführt wird

Im Vergleich zu {{jsxref("Statements/var", "var")}} weisen `let`-Deklarationen folgende Unterschiede auf:

- Der Gültigkeitsbereich von `let`-Deklarationen erstreckt sich auf Blöcke und Funktionen.
- Auf `let`-Deklarationen kann erst zugegriffen werden, nachdem die Ausführung die Deklaration erreicht hat (siehe [Temporal Dead Zone](#temporal_dead_zone_tdz)). Daher gelten `let`-Deklarationen gemeinhin als {{Glossary("Hoisting", "nicht gehoistet")}}.
- `let`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts stehen.
- `let`-Deklarationen können im selben Gültigkeitsbereich nicht durch eine andere Deklaration [erneut deklariert](#erneute_deklarationen) werden.
- `let` leitet [_Deklarationen_ ein, keine _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions). Das bedeutet, dass eine alleinstehende `let`-Deklaration nicht als Rumpf einer `if`-Anweisung ohne Block verwendet werden kann. Das ist sinnvoll, da auf die Variable sonst nicht zugegriffen werden könnte.

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Beachten Sie, dass `let` im [nicht strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) als Bezeichnername zulässig ist, wenn die Deklaration mit `var` oder `function` erfolgt. Sie sollten `let` jedoch nicht als Bezeichnernamen verwenden, um unerwartete syntaktische Mehrdeutigkeiten zu vermeiden.

Viele Stilrichtlinien (einschließlich [der MDN-Stilrichtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) empfehlen, {{jsxref("Statements/const", "const")}} statt `let` zu verwenden, wenn einer Variablen innerhalb ihres Gültigkeitsbereichs kein neuer Wert zugewiesen wird. Dadurch wird deutlich, dass sich der Typ einer Variablen (oder bei einem primitiven Wert der Wert selbst) nicht ändern kann. Andere bevorzugen möglicherweise `let` für nicht primitive Werte, die verändert werden.

Die auf das Schlüsselwort `let` folgende Liste heißt _{{Glossary("binding", "Bindungsliste")}}_ und wird durch Kommas getrennt. Dabei sind die Kommas _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment). Initialisierer späterer Variablen können auf frühere Variablen in der Liste verweisen.

### Temporal Dead Zone (TDZ)

Eine mit `let`, `const` oder `class` deklarierte Variable befindet sich vom Beginn des Blocks an in einer „Temporal Dead Zone“ (TDZ), bis die Codeausführung die Stelle erreicht, an der die Variable deklariert und initialisiert wird.

Innerhalb der TDZ ist die Variable noch nicht mit einem Wert initialisiert. Jeder Versuch, auf sie zuzugreifen, führt zu einem {{jsxref("ReferenceError")}}. Die Variable wird mit einem Wert initialisiert, wenn die Ausführung die Stelle ihrer Deklaration im Code erreicht. Wurde bei der Variablendeklaration kein Anfangswert angegeben, wird sie mit `undefined` initialisiert.

Dies unterscheidet sich von Variablen, die mit {{jsxref("Statements/var", "var", "hoisting")}} deklariert wurden: Wird auf sie vor ihrer Deklaration zugegriffen, geben sie `undefined` zurück. Der folgende Code zeigt die unterschiedlichen Ergebnisse beim Zugriff auf `let` und `var`, bevor ihre jeweilige Deklaration erreicht wird.

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Der Begriff „temporal“ wird verwendet, weil die Zone von der Ausführungsreihenfolge (Zeit) und nicht von der Reihenfolge abhängt, in der der Code geschrieben ist (Position). Der folgende Code funktioniert beispielsweise, weil die Funktion zwar vor der Deklaration der `let`-Variablen steht, aber erst _außerhalb_ der TDZ aufgerufen wird.

```js
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

Die Verwendung des Operators `typeof` für eine Variable in ihrer TDZ löst einen {{jsxref("ReferenceError")}} aus:

```js example-bad
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

Dies unterscheidet sich von der Verwendung von `typeof` für nicht deklarierte Variablen und für Variablen mit dem Wert `undefined`:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> [!NOTE]
> `let`- und `const`-Deklarationen werden erst verarbeitet, wenn das jeweilige Skript verarbeitet wird. Wenn Sie in einem HTML-Dokument zwei `<script>`-Elemente im Skriptmodus ausführen, gelten für das erste Skript nicht die TDZ-Einschränkungen für `let`- oder `const`-Variablen, die auf der obersten Ebene des zweiten Skripts deklariert werden. Wenn Sie allerdings eine `let`- oder `const`-Variable im ersten Skript deklarieren und sie im zweiten Skript erneut deklarieren, führt dies zu einem [Fehler wegen erneuter Deklaration](#erneute_deklarationen).

### Erneute Deklarationen

Eine `let`-Deklaration darf sich nicht im selben Gültigkeitsbereich wie eine andere Deklaration befinden. Dazu gehören Deklarationen mit `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und {{jsxref("Statements/import", "import")}}.

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Eine `let`-Deklaration im Rumpf einer Funktion darf nicht denselben Namen wie ein Parameter haben. Eine `let`-Deklaration in einem `catch`-Block darf nicht denselben Namen wie der an `catch` gebundene Bezeichner haben.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Wenn Sie in einer REPL experimentieren, etwa in der Firefox-Webkonsole (**Werkzeuge** > **Web-Entwickler** > **Web-Konsole**), und zwei `let`-Deklarationen mit demselben Namen in getrennten Eingaben ausführen, kann derselbe Fehler wegen erneuter Deklaration auftreten. Eine weitere Erörterung dieses Problems finden Sie unter [Firefox-Bug 1580891](https://bugzil.la/1580891). Die Chrome-Konsole erlaubt erneute `let`-Deklarationen in verschiedenen REPL-Eingaben.

In {{jsxref("Statements/switch", "switch")}}-Anweisungen können Fehler auftreten, weil es nur einen einzigen Block gibt.

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

Um den Fehler zu vermeiden, schließen Sie jeden `case` in eine eigene Blockanweisung ein.

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

### Regeln für Gültigkeitsbereiche

Mit `let` deklarierte Variablen sind in dem Block gültig, für den sie deklariert wurden, sowie in allen darin enthaltenen Unterblöcken. In dieser Hinsicht funktioniert `let` ähnlich wie `var`. Der wesentliche Unterschied besteht darin, dass sich der Gültigkeitsbereich einer `var`-Variablen auf die gesamte umschließende Funktion erstreckt:

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

Auf der obersten Ebene eines Skripts erzeugt `let` im Gegensatz zu `var` keine Eigenschaft auf dem globalen Objekt. Zum Beispiel:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### TDZ in Verbindung mit lexikalischem Gültigkeitsbereich

Der folgende Code führt in der angegebenen Zeile zu einem `ReferenceError`:

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

Der `if`-Block wird ausgewertet, weil das äußere `var foo` einen Wert hat. Aufgrund des lexikalischen Gültigkeitsbereichs ist dieser Wert innerhalb des Blocks jedoch nicht verfügbar: Der Bezeichner `foo` _innerhalb_ des `if`-Blocks bezeichnet `let foo`. Der Ausdruck `foo + 55` löst einen `ReferenceError` aus, weil die Initialisierung von `let foo` noch nicht abgeschlossen ist – die Variable befindet sich noch in der Temporal Dead Zone.

Dieses Verhalten kann in einer Situation wie der folgenden verwirrend sein. Die Anweisung `let n of n.a` befindet sich bereits im Gültigkeitsbereich des Blocks der `for...of`-Schleife. Deshalb wird der Bezeichner `n.a` als Eigenschaft `a` des Objekts `n` interpretiert, das im ersten Teil derselben Anweisung (`let n`) deklariert wird. Dieses `n` befindet sich noch in der Temporal Dead Zone, da seine Deklaration noch nicht erreicht und abgeschlossen wurde.

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

### Weitere Situationen

Innerhalb eines Blocks beschränkt `let` den Gültigkeitsbereich einer Variablen auf diesen Block. Beachten Sie den Unterschied zu `var`, dessen Gültigkeitsbereich die Funktion ist, in der es deklariert wird.

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

Die folgende Kombination aus `var`- und `let`-Deklarationen führt jedoch zu einem {{jsxref("SyntaxError")}}: Da `var` keinen Block-Scope hat, liegen beide Deklarationen im selben Gültigkeitsbereich. Dadurch wird die Variable implizit erneut deklariert.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. So lassen sich mehrere Variablen gleichzeitig erstellen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- {{Glossary("Hoisting", "Hoisting")}}
- [ES6 im Detail: `let` und `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/) auf hacks.mozilla.org (2015)
- [Inkompatible Änderungen an `let` und `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) auf blog.mozilla.org (2015)
- [You Don't Know JS: Gültigkeitsbereiche und Closures, Kapitel 3: Funktions- vs. Block-Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) von Kyle Simpson
- [Was ist die Temporal Dead Zone?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) auf Stack Overflow
- [Was ist der Unterschied zwischen der Verwendung von `let` und `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) auf Stack Overflow
- [Warum wurde für Variablendeklarationen mit Block-Scope in JavaScript der Name „let“ gewählt?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) auf Stack Overflow
