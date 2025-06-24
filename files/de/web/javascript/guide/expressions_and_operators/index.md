---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt JavaScripts Ausdrücke und Operatoren, einschließlich Zuweisungs-, Vergleichs-, arithmetische, bitweise, logische, Zeichenketten-, ternäre und mehr.

Auf hoher Ebene ist ein _Ausdruck_ eine gültige Codeeinheit, die sich zu einem Wert auflöst. Es gibt zwei Arten von Ausdrücken: solche, die Nebeneffekte haben (wie das Zuweisen von Werten) und solche, die rein _auswerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`-Operator, um der Variablen `x` den Wert sieben zuzuweisen. Der Ausdruck selbst bewertet sich zu `7`.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zu addieren und erzeugt so den Wert `7`. Wenn er jedoch nicht Teil eines größeren Konstrukts (zum Beispiel einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`) ist, wird sein Ergebnis sofort verworfen — dies ist üblicherweise ein Programmierfehler, da die Auswertung keine Effekte hervorruft.

Wie die obigen Beispiele ebenfalls zeigen, werden alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie `=` und `+`. In diesem Abschnitt werden wir die folgenden Operatoren einführen:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt-Operatoren](#bigint-operatoren)
- [Zeichenkettenoperatoren](#zeichenkettenoperatoren)
- [Bedingter (ternärer) Operator](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verbinden Operanden, die entweder von höherpriorisierten Operatoren gebildet werden oder von einem der [grundlegenden Ausdrücke](#grundlegende_ausdrücke). Eine vollständige und detaillierte Liste der Operatoren und Ausdrücke finden Sie auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators).

Die _Priorität_ von Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlichen Reihenfolgen kommen, würden beide Ausdrücke zu `7` führen, weil `*` Vorrang vor `+` hat, wodurch der `*`-verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operatorenpriorität durch die Verwendung von Klammern überschreiben (dies erzeugt einen [gruppierten Ausdruck](#gruppierungsoperator) — den grundlegenden Ausdruck). Um eine vollständige Tabelle der Operatorenpriorität sowie verschiedene Vorbehalte zu sehen, besuchen Sie die [Operatorenprioritäts-Referenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table)-Seite.

JavaScript verfügt sowohl über _binäre_ als auch _unäre_ Operatoren und einen speziellen ternären Operator, den bedingten Operator.
Ein binärer Operator erfordert zwei Operanden, einen vor und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird ein _infixer_ binärer Operator genannt, weil der Operator zwischen zwei Operanden platziert wird. Alle binären Operatoren in JavaScript sind infix.

Ein unärer Operator erfordert einen einzelnen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die `Operator Operand`-Form wird _präfix_ unärer Operator genannt und die `Operand Operator`-Form wird _postfix_ unärer Operator genannt. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof`, usw., sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden basierend auf dem Wert seines rechten Operanden einen Wert zu.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` an `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die Kurzformen für die in der folgenden Tabelle aufgeführten Operationen sind:

| Name                                                                                                            | Kurzoperator  | Bedeutung          |
| --------------------------------------------------------------------------------------------------------------- | ------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                             | `x = f()`     | `x = f()`          |
| [Addition-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                           | `x += f()`    | `x = x + f()`      |
| [Subtraktions-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                    | `x -= f()`    | `x = x - f()`      |
| [Multiplikations-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)              | `x *= f()`    | `x = x * f()`      |
| [Divisions-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                          | `x /= f()`    | `x = x / f()`      |
| [Rest-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                              | `x %= f()`    | `x = x % f()`      |
| [Exponentierungs-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)              | `x **= f()`   | `x = x ** f()`     |
| [Linksschiebe-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`   | `x = x << f()`     |
| [Rechtsschiebe-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`   | `x = x >> f()`     |
| [Unsigned Rechtsschiebe-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`  | `x = x >>> f()`    |
| [Bitweise UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                    | `x &= f()`    | `x = x & f()`      |
| [Bitweise XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                    | `x ^= f()`    | `x = x ^ f()`      |
| [Bitweise ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                    | `x \|= f()`   | `x = x \| f()`     |
| [Logische UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                    | `x &&= f()`   | `x && (x = f())`   |
| [Logische ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                    | `x \|\|= f()` | `x \|\| (x = f())` |
| [Nullish Koalitions-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)       | `x ??= f()`   | `x ?? (x = f())`   |

### Zuweisungen an Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, dann kann die linke Seite eines Zuweisungsausdrucks Zuweisungen zu den Eigenschaften dieses Ausdrucks vornehmen.
Zum Beispiel:

```js
const obj = {};

obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.
```

Weitere Informationen über Objekte finden Sie unter [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, dann führen Zuweisungen zu den Eigenschaften dieses Ausdrucks nicht zu einer Zuweisung:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wirft der obige Code einen Fehler, da man nicht Eigenschaften zu primitiven Datentypen zuweisen kann.

Es ist ein Fehler, Werte an nicht modifizierbare Eigenschaften oder an Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen ist die [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) eine JavaScript-Ausdruckssyntax, die es ermöglicht, Daten aus Arrays oder Objekten mithilfe einer Syntax herauszuziehen, die dem Aufbau von Array- und
Objektliteralen ähnelt.

Ohne Destrukturierung sind mehrere Anweisungen erforderlich, um Werte aus Arrays und Objekten zu extrahieren:

```js
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

Mit Destrukturierung können Sie mehrere Werte in unterschiedlichen Variablen mit einer einzigen Anweisung extrahieren:

```js
const [one, two, three] = foo;
```

### Auswertung und Verschachtelung

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration (d.h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen verwendet.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Wie andere Ausdrücke auch, werten sich Zuweisungsausdrücke wie `x = f()` zu einem Ergebniswert aus. Obwohl dieser Ergebniswert normalerweise nicht verwendet wird, kann er von einem anderen Ausdruck verwendet werden.

Das Verketten von Zuweisungen oder das Verschachteln von Zuweisungen in andere Ausdrücke kann zu überraschendem Verhalten führen. Aus diesem Grund raten einige JavaScript-Stilrichtlinien [vom Verketten oder Verschachteln von Zuweisungen ab](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment). Trotzdem kann es manchmal vorkommen, dass Zuweisungen verkettet oder verschachtelt werden, daher ist es wichtig zu verstehen, wie sie funktionieren.

Durch das Verketten oder Verschachteln eines Zuweisungsausdrucks kann dessen Ergebnis selbst einer anderen Variablen zugewiesen werden. Es kann protokolliert, in ein Array-Literal oder Funktionsaufruf gesetzt werden, und so weiter.

```js-nolint
let x;
const y = (x = f()); // Or equivalently: const y = x = f();
console.log(y); // Logs the return value of the assignment x = f().

console.log(x = f()); // Logs the return value directly.

// An assignment expression can be nested in any place
// where expressions are generally allowed,
// such as array literals' elements or as function calls' arguments.
console.log([0, x = f(), 0]);
console.log(f(0, x = f(), 0));
```

Das Auswertungsergebnis stimmt mit dem Ausdruck rechts neben dem `=`-Zeichen in der Spalte "Bedeutung" der Tabelle oben überein. Das bedeutet, dass `x = f()` sich zu dem Ergebnis von `f()` auswertet, `x += f()` sich zur resultierenden Summe `x + f()` auswertet, `x **= f()` sich zur resultierenden Potenz `x ** f()` auswertet, und so weiter.

Im Fall von logischen Zuweisungen, `x &&= f()`, `x ||= f()`, und `x ??= f()`, ist der Rückgabewert der des logischen Vorgangs ohne die Zuweisung, also `x && f()`, `x || f()`, und `x ?? f()`, jeweils.

Beim Verketten dieser Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren wie Array-Literale werden die Zuweisungsausdrücke **von rechts nach links gruppiert** (sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts ausgewertet**.

Zu beachten ist, dass für alle Zuweisungsoperatoren außer `=` selbst die resultierenden Werte immer auf den Werten der Operanden _vor_ der Operation basieren.

Zum Beispiel, nehmen wir an, dass die folgenden Funktionen `f` und `g` und die Variablen `x` und `y` deklariert worden sind:

```js
function f() {
  console.log("F!");
  return 2;
}
function g() {
  console.log("G!");
  return 3;
}
let x, y;
```

Beachten Sie diese drei Beispiele:

```js-nolint
y = x = f();
y = [f(), x = g()];
x[f()] = g();
```

#### Auswertungsbeispiel 1

`y = x = f()` entspricht `y = (x = f())`, da der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist. Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable mit dem Namen `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable mit dem Namen `x` ausgewertet.
      2. Der Funktionsaufruf `f()` gibt "F!" in der Konsole aus und wird dann zur Zahl `2` ausgewertet.
      3. Das `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` ist nun fertig ausgewertet; sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2` Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` ist nun fertig ausgewertet;
   sein Ergebnis ist der neue Wert von `y` – der zufällig `2` ist.
   `x` und `y` sind auf `2` gesetzt,
   und die Konsole hat "F!" ausgegeben.

#### Auswertungsbeispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird
      zu einer Referenz auf die Variable mit dem Namen `y` ausgewertet.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` gibt "F!" in der Konsole aus und
         wird dann zur Zahl `2` ausgewertet.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wird
            zu einer Referenz auf die Variable mit dem Namen `x` ausgewertet.
         2. Der Funktionsaufruf `g()` gibt "G!" in der Konsole aus und
            wird dann zur Zahl `3` ausgewertet.
         3. Das `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` ist nun fertig ausgewertet;
         sein Ergebnis ist der neue Wert von `x`, der `3` ist.
         Das `3`-Ergebnis wird zum nächsten Element
         im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]`
      ist nun fertig ausgewertet;
      sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird nun `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` ist
   nun fertig ausgewertet;
   sein Ergebnis ist der neue Wert von `y` – der zufällig `[ 2, 3 ]` ist.
   `x` ist nun auf `3` gesetzt,
   `y` ist nun auf `[ 2, 3 ]` gesetzt,
   und die Konsole hat "F!" gefolgt von "G!" ausgegeben.

#### Auswertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel setzt voraus, dass `x` bereits einem Objekt zugewiesen ist.
Weitere Informationen zu Objekten finden Sie unter [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaftszugriff auf der linken Seite dieser Zuweisung
      beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftszugriff wird
         zu einer Referenz auf die Variable mit dem Namen `x` ausgewertet.
      2. Dann gibt der Funktionsaufruf `f()` "F!" in der Konsole aus und
         wird dann zur Zahl `2` ausgewertet.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung
      ist nun fertig ausgewertet;
      sein Ergebnis ist eine Variable Eigenschaftsreferenz: `x[2]`.
   3. Dann gibt der Funktionsaufruf `g()` "G!" in der Konsole aus und
      wird dann zur Zahl `3` ausgewertet.
   4. Dieses `3` wird nun `x[2]` zugewiesen.
      (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` ist nun fertig ausgewertet;
   sein Ergebnis ist der neue Wert von `x[2]` – der zufällig `3` ist.
   `x[2]` ist nun auf `3` gesetzt,
   und die Konsole hat "F!" gefolgt von "G!" ausgegeben.

### Vermeiden Sie Zuweisungsketten

Das Verketten von Zuweisungen oder Verschachteln von Zuweisungen in andere Ausdrücke kann zu überraschendem Verhalten führen. Aus diesem Grund wird [das Verketten von Zuweisungen in der gleichen Anweisung nicht empfohlen](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere funktioniert das Einfügen einer Variablenkette in eine [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Anweisung oft _nicht_. Nur die äußerste/linkeste Variable würde deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ von der `const`/`let`/`var`-Anweisung deklariert.
Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung scheint die Variablen `x`, `y` und `z` zu deklarieren.
Allerdings wird tatsächlich nur die Variable `z` deklariert.
`y` und `x` sind entweder ungültige Referenzen auf nicht existierende Variablen (im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "sloppy mode")}} erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert basierend darauf zurück, ob der Vergleich wahr ist.
Die Operanden können numerische, Zeichenketten-, logische oder [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein.
Zeichenketten werden basierend auf der lexikografischen Standardreihenfolge unter Verwendung von Unicode-Werten verglichen.
In den meisten Fällen versucht JavaScript, die beiden Operanden auf einen geeigneten Typ für den Vergleich zu konvertieren, wenn sie nicht vom selben Typ sind.
Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen von der Typkonvertierung innerhalb von Vergleichen betreffen die `===` und `!==` Operatoren, die strikte Gleichheits- und Ungleichheitsvergleiche durchführen.
Diese Operatoren versuchen nicht, die Operanden vor der Gleichheitsprüfung in kompatible Typen zu konvertieren.
Die folgende Tabelle beschreibt die Vergleichsoperatoren anhand dieses Beispielcodes:

```js
const var1 = 3;
const var2 = 4;
```

<table class="standard-table">
  <caption>
    Vergleichsoperatoren
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Beispiele, die wahr zurückgeben</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Equality">Gleich</a> (<code>==</code>)
      </td>
      <td>Gibt <code>true</code> zurück, wenn die Operanden gleich sind.</td>
      <td>
        <code>3 == var1</code>
        <p><code>"3" == var1</code></p>
        <code>3 == '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Inequality">Ungleich</a> (<code>!=</code>)
      </td>
      <td>Gibt <code>true</code> zurück, wenn die Operanden nicht gleich sind.</td>
      <td>
        <code>var1 != 4<br />var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strikte Gleichheit</a> (<code>===</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden gleich und vom selben
        Typ sind. Siehe auch {{jsxref("Object.is")}} und
        <a href="/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness">Gleichheit in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strikte Ungleichheit</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ, aber nicht gleich oder von unterschiedlichem Typ sind.
      </td>
      <td>
        <code>var1 !== "3"<br />3 !== '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Greater_than">Größer als</a> (<code>></code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn der linke Operand größer als der rechte Operand ist.
      </td>
      <td>
        <code>var2 > var1<br />"12" > 2</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">Größer als oder gleich</a>
        (<code>>=</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn der linke Operand größer oder gleich dem rechten Operand ist.
      </td>
      <td>
        <code>var2 >= var1<br />var1 >= 3</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Less_than">Kleiner als</a>
        (<code>&#x3C;</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn der linke Operand kleiner als der rechte Operand ist.
      </td>
      <td>
        <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Kleiner als oder gleich</a>
        (<code>&#x3C;=</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn der linke Operand kleiner oder gleich dem rechten Operand ist.
      </td>
      <td>
        <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE] > `=>` ist kein Vergleichsoperator, sondern die Notation
> für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetische Operatoren

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als seine Operanden und gibt einen einzelnen numerischen Wert zurück.
Die Standardarithmetikoperatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass eine Division durch null {{jsxref("Infinity")}} produziert). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standardarithmetikoperationen (`+`, `-`, `*`, `/`) bietet JavaScript die in der folgenden Tabelle aufgeführten Arithmetikoperatoren:

<table class="fullwidth-table">
  <caption>
    Arithmetische Operatoren
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Remainder">Rest</a> (<code>%</code>)
      </td>
      <td>
        Binärer Operator. Gibt den ganzzahligen Rest der Division der beiden Operanden zurück.
      </td>
      <td>12 % 5 ergibt 2.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Increment">Inkrement</a> (<code>++</code>)
      </td>
      <td>
        Unärer Operator. Addiert eins zu seinem Operanden. Wenn er als Präfixoperator
        verwendet wird (<code>++x</code>), gibt er den Wert seines Operanden nach Addition
        eins zurück; wenn als Postfixoperator (<code>x++</code>), gibt er den Wert seines
        Operanden vor dem Hinzufügen von eins zurück.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>++x</code> <code>x</code> auf 4 und
        gibt 4 zurück, während <code>x++</code> 3 zurückgibt und erst dann
        <code>x</code> auf 4 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Decrement">Dekrement</a> (<code>--</code>)
      </td>
      <td>
        Unärer Operator. Subtrahiert eins von seinem Operanden.
        Der Rückgabewert ist analog zu dem des Inkrementoperators.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>--x</code> <code>x</code> auf 2 und
        gibt 2 zurück, während <code>x--</code> 3 zurückgibt und erst dann
        <code>x</code> auf 2 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unäre Verneinung</a> (<code>-</code>)
      </td>
      <td>Unärer Operator. Gibt die Negation seines Operanden zurück.</td>
      <td>Wenn <code>x</code> 3 ist, dann ergibt <code>-x</code> -3.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäres Plus</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versucht, den Operanden in eine Zahl [zu konvertieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), falls es noch keine ist.
      </td>
      <td>
        <p><code>+"3"</code> ergibt <code>3</code>.</p>
        <p><code>+true</code> ergibt <code>1</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentierungsoperator</a> (<code>**</code>)
      </td>
      <td>
        Berechnet die <code>Basis</code> zur <code>Exponenten</code>-Potenz, das heißt,
        <code>basis^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> ergibt <code>8</code>.<br /><code>10 ** -1</code>
        ergibt <code>0.1</code>.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als eine Menge von 32 Bits (Nullen und Einsen), anstatt als Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die dezimale Zahl neun eine binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen binären Darstellungen aus, geben jedoch standardmäßig JavaScript-Zahlenwerte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren von JavaScript zusammen.

| Operator                                                                                               | Nutzung   | Beschreibung                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                               | `a & b`   | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                                    |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                               | `a \| b`  | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                                                    |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                               | `a ^ b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweises NICHT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                             | `~ a`     | Invertiert die Bits seines Operanden.                                                                                                                                                        |
| [Linksschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                               | `a << b`  | Verschiebt `a` in binärer Darstellung um `b` Bits nach links und füllt die Lücken rechts mit Nullen auf.                                                                                     |
| [Rechtsverschiebung mit Vorzeichen](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)           | `a >> b`  | Verschiebt `a` in binärer Darstellung um `b` Bits nach rechts und verwirft die verschobenen Bits.                                                                                            |
| [Rechtsverschiebung ohne Vorzeichen](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b` | Verschiebt `a` in binärer Darstellung um `b` Bits nach rechts, verwirft die verschobenen Bits und füllt die Lücken links mit Nullen auf.                                                     |

### Bitweise logische Operatoren

Konzep­tio­nell arbeiten die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in zweiunddreißig-Bit-Ganzzahlen konvertiert und Ausdruck in eine Bitfolge (Nullen und Einsen) gebracht. Zahlen mit mehr als 32 Bits werden in eine 32-Bit-Ganzzahl konvertiert, wobei die signifkanten Bits verworfen werden.
  Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit und so weiter.
- Der Operator wird auf jedes Paar von Bits angewendet, und das Ergebnis wird bitweise zusammengesetzt.

Zum Beispiel ist die binäre Darstellung von neun 1001 und die binäre Darstellung von fünfzehn 1111.
Wenn die bitweisen Operatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits bei Nutzung des Bitweise-NOT-Operators invertiert werden und dass Werte mit dem bedeutendsten (linkesten) Bit auf 1 negative Zahlen darstellen (Zweierkomplement-Darstellung). `~x` wertet sich zum gleichen Wert wie `-x - 1`.

### Bitweise Schiebeoperatoren

Die bitweisen Schiebeoperatoren nehmen zwei Operanden: Der erste ist eine zu verschiebende Menge, der zweite die Anzahl der Bitpositionen, um die der erste Operand verschoben werden soll.
Die Richtung der Verschiebeoperation wird durch den verwendeten Operator gesteuert.

Die Schiebeoperatoren konvertieren ihre Operanden in zweiunddreißig-Bit-Ganzzahlen und geben ein Ergebnis entweder vom Typ {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: specifically, if the type
of the left operand is {{jsxref("BigInt")}}, they return {{jsxref("BigInt")}};
otherwise, they return {{jsxref("Number")}}.

Die Schiebeoperatoren sind in der folgenden Tabelle aufgeführt.

<table class="fullwidth-table">
  <caption>
    Bitweise Schiebeoperatoren
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Left_shift">Linksschiebung</a><br />(<code>&#x3C;&#x3C;</code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach links. Überzählige, nach links verschobene Bits werden verworfen. Null-Bits werden von rechts hereingeschoben.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, da 1001 um 2 Bits nach links verschoben wird und 100100 ergibt, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Rechtsverschiebung mit Vorzeichen</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überzählige, nach rechts verschobene Bits werden verworfen. Kopien des linken Bits werden links hereingeschoben
      </td>
      <td>
        <code>9>>>2</code> ergibt 2, da 1001 um 2 Bits nach rechts verschoben wird und 10 ergibt, was 2 ist. Ebenso ergibt <code>-9>>>2</code> -3, da das Zeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Rechtsverschiebung ohne Vorzeichen</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überzählige, nach rechts verschobene Bits werden verworfen. Null-Bits werden von links hereingeschoben.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, da 10011 um 2 Bits nach rechts verschoben wird und 100 ergibt, was 4 ist. Für nicht-negative Zahlen ergeben die Rechtsverschiebung ohne Vorzeichen und die Rechtsverschiebung mit Zeichen dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit Boolean-Werten (logischen Werten) verwendet; dann geben sie einen Boolean-Wert zurück.
Die `&&`, `||` und `??` Operatoren geben tatsächlich den Wert eines der angegebenen Operanden zurück, sodass diese Operatoren, wenn sie mit nicht-Boolean-Werten verwendet werden, einen nicht-Boolean-Wert zurückgeben können. Daher sind sie eher als "Wertauswahloperatoren" zu betrachten.
Die logischen Operatoren werden in der folgenden Tabelle beschrieben.

<table class="fullwidth-table">
  <caption>
    Logische operatoren
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Nutzung</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_AND">Logisches UND</a> (<code>&#x26;&#x26;</code>)
      </td>
      <td><code>expr1 &#x26;&#x26; expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>false</code> konvertiert werden kann;
        andernfalls wird <code>expr2</code>. Somit, wenn mit Boolean-Werten verwendet wird,
        <code>&#x26;&#x26;</code> gibt <code>true</code> zurück, wenn beide
        Operanden true sind; andernfalls gibt <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> konvertiert werden kann;
        andernfalls wird <code>expr2</code> zurückgegeben. Somit, wenn mit Boolean-Werten
        verwendet wird, <code>||</code> gibt <code>true</code> zurück, wenn entweder
        Operand ist true; wenn beide false sind, gibt <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish Coalescing Operator</a> (<code>??</code>)
      </td>
      <td><code>expr1 ?? expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es weder <code>null</code> noch
        <code>undefined</code> ist; andernfalls gibt <code>expr2</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logisches NICHT</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Gibt <code>false</code> zurück, wenn sein einzelner Operand konvertiert
        werden kann zu <code>true</code>; andernfalls gibt <code>true</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind diejenigen, die `null`, `0`, `0n`, `NaN`, die leere Zeichenkette (`""`) oder `undefined` ergeben.

Der folgende Code zeigt Beispiele des `&&` (logisches UND) Operators.

```js
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
```

Der folgende Code zeigt Beispiele des `||` (logisches ODER) Operators.

```js
const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat
```

Der folgende Code zeigt Beispiele des `??` (nullish coalescing) Operators.

```js
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
```

Beachten Sie, wie `??` wie `||` funktioniert, aber nur den zweiten Ausdruck zurückgibt, wenn der erste "{{Glossary("Nullish", "nullisch")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||`, um Standardeinstellungen für Werte zu setzen, die möglicherweise `null` oder `undefined` sind, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht angewendet werden sollte.

Der folgende Code zeigt Beispiele des `!` (logisches NICHT) Operators.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie unter Verwendung der folgenden Regeln auf mögliche "Kurzschluss" Auswertung überprüft:

- `falsch && irgendetwas` wird zur Auswertung von Kurzschlüssen zu einem falschen Wert.
- `wahr || irgendetwas` wird zur Auswertung von Kurzschlüssen zum wahren Wert.
- `nonNullish ?? irgendetwas` wird zur Auswertung von Kurzschlüssen zum nicht-nullischen Wert.

Die Regeln der Logik garantieren, dass diese Bewertungen immer korrekt sind. Beachten Sie, dass der
_irgendetwas_ Teil der obigen Ausdrücke nicht ausgewertet wird, sodass keine Nebeneffekte
dieser Auswertung wirksam werden.

## BigInt-Operatoren

Die meisten Operatoren, die zwischen Zahlen verwendet werden können, können auch zwischen [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Werten verwendet werden.

```js
// BigInt addition
const a = 1n + 2n; // 3n
// Division with BigInts round towards zero
const b = 1n / 2n; // 0n
// Bitwise operations with BigInts do not truncate either side
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

Eine Ausnahme ist [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die nicht für BigInt-Werte definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat, wodurch es technisch kein "höchstwertiges Bit" gibt.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig austauschbar — Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder ein Teilmengen- noch ein Supersett von Zahlen ist. BigInts haben bei der Darstellung großer Ganzzahlen eine höhere Präzision als Zahlen, können jedoch keine Dezimalstellen darstellen, sodass die implizite Konvertierung auf beiden Seiten zu einem Präzisionsverlust führen kann. Verwenden Sie eine explizite Konvertierung, um anzugeben, ob Sie möchten, dass die Operation eine Zahl-Operation oder eine BigInt-Operation ist.

```js example-good
const a = Number(1n) + 2; // 3
const b = 1n + BigInt(2); // 3n
```

Sie können BigInts mit Zahlen vergleichen.

```js
const a = 1n > 2; // false
const b = 3 > 2n; // true
```

## Zeichenkettenoperatoren

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenkettenwerte angewendet werden können, verkettet der Verkettungsoperator (+) zwei Zeichenfolgenwerte und gibt eine andere Zeichenfolge zurück, die die Vereinigung der beiden Operand-Zeichenfolgen darstellt.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzzuweisungsoperator `+=` kann auch zum Verketten von Zeichenfolgen verwendet werden.

Zum Beispiel,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingter (ternärer) Operator

Der [bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
ist der einzige JavaScript-Operator, der drei Operanden aufnimmt.
Der Operator kann je nach Bedingung einen von zwei Werten haben.
Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Ist die `Bedingung` wahr, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Der bedingte Operator kann überall verwendet werden, wo ein Standardoperator verwendet wird.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Dies weist der Variablen `status` den Wert "adult" zu, wenn
`age` ist achtzehn oder mehr. Andernfalls weist es den Wert "minor" zu
`status`.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich in einer `for` Schleife verwendet, um mehrere Variablen zu aktualisieren, jedes Mal, wenn die Schleife durchlaufen wird.
Es wird als schlechter Stil betrachtet, ihn an anderer Stelle zu verwenden, wenn es nicht notwendig ist.
Oftmals können und sollten zwei getrennte Anweisungen stattdessen verwendet werden.

Zum Beispiel, wenn `a` ein 2-dimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen auf einmal zu aktualisieren.
Der Code druckt die Werte der diagonalen Elemente im Array:

```js
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## Unäre Operatoren

Eine unäre Operation ist eine Operation mit nur einem Operanden.

### delete

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löscht eine Eigenschaft eines Objekts.
Die Syntax ist:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts ist, `property` eine bestehende Eigenschaft ist, und `propertyKey` ein String oder Symbol ist, der auf eine bestehende Eigenschaft verweist.

Wenn der `delete` Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Der Versuch, darauf zuzugreifen, ergibt anschließend `undefined`.
Der `delete` Operator gibt `true` zurück, wenn der Vorgang möglich ist; er gibt `false` zurück, wenn der Vorgang nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente von ihnen zu `löschen`.
Dies wird jedoch als schlechte Praxis angesehen — versuchen Sie, es zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indiziert.
Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt einen String zurück, der den Typ des nicht ausgewerteten Operanden angibt.
`operand` ist der String, die Variable, das Schlüsselwort oder das Objekt, für das der Typ zurückgegeben werden soll.
Die Klammern sind optional.

Angenommen, Sie definieren die folgenden Variablen:

```js
const myFun = () => 5 + 2;
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();
```

Der `typeof`-Operator gibt die folgenden Ergebnisse für diese Variablen zurück:

```js
typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"
```

Für die Schlüsselwörter `true` und `null`, der `typeof`
Operator gibt die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder Zeichenfolge gibt der `typeof`-Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof`-Operator den Typ des Wertes zurück, den die
Eigenschaft enthält:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für Methoden und Funktionen gibt der `typeof`-Operator Ergebnisse wie folgt zurück:

```js
typeof blur; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

Für vordefinierte Objekte gibt der `typeof`-Operator Ergebnisse wie folgt zurück:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

Der [`void` Operator](/de/docs/Web/JavaScript/Reference/Operators/void) spezifiziert einen Ausdruck zur Auswertung ohne Rückgabe eines Werts. `expression` ist ein JavaScript-Ausdruck zur Auswertung.
Die Klammern, die den Ausdruck umgeben, sind optional, aber es ist eine gute Praxis, sie zu verwenden, um Präzedenzprobleme zu vermeiden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt einen Boolean-Wert basierend darauf zurück, ob der Vergleich wahr ist.

### in

Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt vorhanden ist.
Die Syntax ist:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein String-, numerischer oder symbolischer Ausdruck ist, der einen Eigenschaftsnamen oder Array-Index darstellt, und `objectName` der Name eines Objekts ist.

Die folgenden Beispiele zeigen einige Verwendungen des `in` Operators.

```js
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false
// (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const myCar = { make: "Honda", model: "Accord", year: 1998 };
"make" in myCar; // returns true
"model" in myCar; // returns true
```

### instanceof

Der [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true` zurück
wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet wird, und `objectType` ist ein Konstruktor, der einen Typ repräsentiert, wie {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen müssen.
Zum Beispiel, wenn Sie Ausnahmen abfangen, können Sie zu unterschiedlichem Ausnahmebehandlungscode verzweigen, je nach dem Typ der geworfenen Ausnahme.

Beispielsweise verwendet der folgende Code `instanceof`, um zu bestimmen, ob `obj` ein `Map` Objekt ist. Da `obj` ein `Map` Objekt ist, werden die Anweisungen innerhalb des `if` Blocks ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren arbeiten letztendlich an einem oder mehreren grundlegenden Ausdrücken. Zu diesen grundlegenden Ausdrücken gehören [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt auch einige andere Arten. Sie werden unten kurz eingeführt und ihre Semantik wird in ihren jeweiligen Referenzabschnitten ausführlich beschrieben.

### this

Das [`this` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this) wird normalerweise innerhalb einer Funktion verwendet. Im Allgemeinen, wenn die Funktion einem Objekt als Methode angehängt ist, bezieht sich `this` auf das Objekt, bei dem die Methode aufgerufen wird. Es funktioniert wie ein versteckter Parameter, der an die Funktion übergeben wird. `this` ist ein Ausdruck, der zu einem Objekt auswertet, sodass Sie alle Objektoperationen verwenden können, die wir eingeführt haben.

```js
this["propertyName"];
this.propertyName;
doSomething(this);
```

Zum Beispiel, angenommen, eine Funktion ist wie folgt definiert:

```js
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
```

Wir können diese Funktion jetzt an ein Objekt anhängen, und es wird die Eigenschaften dieses Objekts verwenden, wenn es aufgerufen wird:

```js
const person1 = {
  firstName: "Chris",
  lastName: "Martin",
};

const person2 = {
  firstName: "Chester",
  lastName: "Bennington",
};

// Attach the same function
person1.getFullName = getFullName;
person2.getFullName = getFullName;

console.log(person1.getFullName()); // "Chris Martin"
console.log(person2.getFullName()); // "Chester Bennington"
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Vorrangregel bei der Auswertung in
Ausdrücken. Zum Beispiel können Sie Multiplikation und Division zunächst überschreiben, dann
Addition und Subtraktion, um Addition zuerst auszuführen.

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// default precedence
a + b * c; // 7
// evaluated by default like this
a + (b * c); // 7

// now overriding precedence
// addition before multiplication
(a + b) * c; // 9

// which is equivalent to
a * c + b * c; // 9
```

### Eigenschaftszugriff

Die [Eigenschaftszugriffssyntax](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) ruft Eigenschaftswerte bei Objekten ab, wobei entweder die Punkt-Notation oder die Klammer-Notation verwendet wird.

```js
object.property;
object["property"];
```

Der [Leitfaden zum Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) geht näher auf Objekteigenschaften ein.

### Optionale Verkettung

Die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Syntax (`?.`) führt die verkettete Operation an einem Objekt durch, wenn es definiert und nicht-`null` ist, und bricht andernfalls die Operation ab und gibt `undefined` zurück.
Dies ermöglicht es Ihnen, auf einen Wert zuzugreifen, der möglicherweise `null` oder `undefined` ist, ohne einen `TypeError` zu verursachen.

```js
maybeObject?.property;
maybeObject?.[property];
maybeFunction?.();
```

### new

Sie können den [`new Operator`](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, um eine Instanz eines benutzerdefinierten Objekttyps oder eines der eingebauten Objekttypen zu erstellen. Verwenden Sie `new` wie folgt:

```js
const objectName = new ObjectType(param1, param2, /* …, */ paramN);
```

### super

Das [`super` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen eines übergeordneten Objekts aufzurufen.
Es ist nützlich für [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um beispielsweise den übergeordneten Konstruktor aufzurufen.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
