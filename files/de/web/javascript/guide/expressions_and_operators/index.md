---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 847f754b374ed8928a270ab17672a1675802776f
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt die Ausdrücke und Operatoren von JavaScript, einschließlich Zuordnung, Vergleich, Arithmetik, Bitweise, Logik, Zeichenkette, ternäre und mehr.

Auf hoher Ebene ist ein _Ausdruck_ eine gültige Einheit von Code, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche, die Nebeneffekte haben (wie das Zuweisen von Werten) und solche, die rein _auswerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`-Operator, um der Variablen `x` den Wert sieben zuzuweisen. Der Ausdruck selbst wird zu `7` ausgewertet.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zusammenzuzählen und einen Wert, `7`, zu erzeugen. Wenn er jedoch nicht letztlich Teil einer größeren Konstruktion ist (zum Beispiel einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen – dies ist normalerweise ein Programmierfehler, da die Auswertung keine Effekte produziert.

Wie die obigen Beispiele auch zeigen, werden alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie `=` und `+`. In diesem Abschnitt stellen wir die folgenden Operatoren vor:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt Operatoren](#bigint_operatoren)
- [Zeichenkettenoperatoren](#zeichenkettenoperatoren)
- [Bedingter (ternärer) Operator](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verknüpfen Operanden, die entweder durch Operatoren mit höherer Priorität gebildet werden oder einer der [grundlegenden Ausdrücke](#grundlegende_ausdrücke) sind. Eine vollständige und detaillierte Liste der Operatoren und Ausdrücke finden Sie auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators).

Die _Priorität_ von Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlicher Reihenfolge erscheinen, würden beide Ausdrücke `7` ergeben, da `*` Vorrang vor `+` hat, sodass der `*`-verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operatorpriorität durch die Verwendung von Klammern überschreiben (die einen [gruppierten Ausdruck](#gruppenoperator) bilden — den grundlegenden Ausdruck). Um eine vollständige Tabelle der Operatorpriorität sowie verschiedene Besonderheiten zu sehen, besuchen Sie die Seite [Operatorpriorität Referenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren sowie einen speziellen ternären Operator, den bedingten Operator. Ein binärer Operator erfordert zwei Operanden, einen vor dem Operator und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird als _infix_ binärer Operator bezeichnet, weil der Operator zwischen zwei Operanden platziert wird. Alle binären Operatoren in JavaScript sind infix.

Ein unärer Operator erfordert einen einzigen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die `operator operand`-Form wird als _prefix_ unärer Operator bezeichnet, und die `operand operator`-Form als _postfix_ unärer Operator. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript – alle anderen Operatoren, wie `!`, `typeof` usw., sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden basierend auf dem Wert seines rechten Operanden einen Wert zu.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden auf seinen linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzform der in der folgenden Tabelle aufgeführten Operationen darstellen:

| Name                                                                                                                 | Kurzform Operator | Bedeutung          |
| -------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                                  | `x = f()`         | `x = f()`          |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`        | `x = x + f()`      |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                          | `x -= f()`        | `x = x - f()`      |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`        | `x = x * f()`      |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`        | `x = x / f()`      |
| [Restzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                    | `x %= f()`        | `x = x % f()`      |
| [Exponentiationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                    | `x **= f()`       | `x = x ** f()`     |
| [Linksverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`       | `x = x << f()`     |
| [Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`       | `x = x >> f()`     |
| [Unsigned-Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`      | `x = x >>> f()`    |
| [Bitweise UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                         | `x &= f()`        | `x = x & f()`      |
| [Bitweise XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                         | `x ^= f()`        | `x = x ^ f()`      |
| [Bitweise OR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                           | `x \|= f()`       | `x = x \| f()`     |
| [Logische UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                         | `x &&= f()`       | `x && (x = f())`   |
| [Logische OR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                           | `x \|\|= f()`     | `x \|\| (x = f())` |
| [Nullish Coalescing-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)            | `x ??= f()`       | `x ?? (x = f())`   |

### Zuweisung zu Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, kann die linke Seite eines Zuweisungsausdrucks Zuweisungen zu den Eigenschaften dieses Ausdrucks machen.
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

Für weitere Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, dann werden Zuweisungen zu Eigenschaften dieses Ausdrucks nicht durchgeführt:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wirft der obige Code einen Fehler, da man einem primitiven Wert keine Eigenschaften zuweisen kann.

Es ist ein Fehler, nicht veränderbaren Eigenschaften Werte zuzuweisen oder Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Destrukturierung

Für komplexere Zuordnungen ist die [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) in JavaScript eine Ausdruckssyntax, die es ermöglicht, Daten aus Arrays oder Objekten mit einer Syntax zu extrahieren, die den Konstruktionen von Array- und Objektliteralen ähnelt.

Ohne Destrukturierung sind mehrere Anweisungen erforderlich, um Werte aus Arrays und Objekten zu extrahieren:

```js
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

Mit Destrukturierung können Sie mehrere Werte in einzelnen Variablen mit einer einzigen Anweisung extrahieren:

```js
const [one, two, three] = foo;
```

### Auswertung und Verschachtelung

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration verwendet (d.h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Wie andere Ausdrücke werten Zuweisungsausdrücke wie `x = f()` jedoch in einen Ergebniswert aus.
Obwohl dieser Ergebniswert normalerweise nicht verwendet wird, kann er dann von einem anderen Ausdruck genutzt werden.

Das Verkettung von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen.
Aus diesem Grund empfehlen einige JavaScript-Stilrichtlinien [das Verkettung oder Verschachteln von Zuweisungen nicht](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).
Nichtsdestotrotz kann Zuweisungskettung und -verschachtelung manchmal vorkommen, daher ist es wichtig, zu verstehen, wie sie funktionieren.

Indem Sie einen Zuweisungsausdruck verketten oder verschachteln, kann sein Ergebnis selbst einer anderen Variablen zugewiesen werden.
Es kann protokolliert werden, es kann in einem Array-Literal oder einem Funktionsaufruf platziert werden usw.

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

Das Auswertungsergebnis entspricht dem Ausdruck rechts neben dem `=`-Zeichen in der Spalte "Bedeutung" der obigen Tabelle. Das bedeutet, dass `x = f()` in das Ergebnis von `f()` auswertet, `x += f()` in die resultierende Summe `x + f()`, `x **= f()` in die resultierende Potenz `x ** f()`, und so weiter.

Im Fall von logischen Zuweisungen, `x &&= f()`, `x ||= f()`, und `x ??= f()`, ist der Rückgabewert das der logischen Operation ohne die Zuweisung, also `x && f()`, `x || f()`, und `x ?? f()`, jeweils.

Wenn Sie diese Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren wie Array-Literale verketten, werden die Zuweisungsausdrücke **von rechts nach links gruppiert** (sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts ausgewertet**.

Beachten Sie, dass bei allen Zuweisungsoperatoren außer dem `=` selbst die resultierenden Werte immer auf den Werten der Operanden _vor_ der Operation basieren.

Zum Beispiel, nehmen wir an, dass folgende Funktionen `f` und `g` und die Variablen `x` und `y` deklariert wurden:

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

Betrachten Sie diese drei Beispiele:

```js-nolint
y = x = f();
y = [f(), x = g()];
x[f()] = g();
```

#### Auswertungsbeispiel 1

`y = x = f()` ist gleich `y = (x = f())`, weil der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist. Er wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable namens `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable namens `x` ausgewertet.
      2. Der Funktionsaufruf `f()` gibt "F!" in die Konsole aus und wird dann zur Zahl `2` ausgewertet.
      3. Dieses `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` ist jetzt fertig ausgewertet; sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2`-Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` ist jetzt fertig ausgewertet; sein Ergebnis ist der neue Wert von `y` – was zufällig `2` ist.
   `x` und `y` sind auf `2` gesetzt,
   und die Konsole hat "F!" ausgegeben.

#### Auswertungsbeispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable namens `y` ausgewertet.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` gibt "F!" in die Konsole aus und wird dann zur Zahl `2` ausgewertet.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable namens `x` ausgewertet.
         2. Der Funktionsaufruf `g()` gibt "G!" in die Konsole aus und wird dann zur Zahl `3` ausgewertet.
         3. Dieses `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` ist jetzt fertig ausgewertet; sein Ergebnis ist der neue Wert von `x`, der `3` ist.
         Dieses `3`-Ergebnis wird das nächste Element im inneren Array-Literal (nach der `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]` ist jetzt fertig ausgewertet; sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird nun `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` ist jetzt fertig ausgewertet; sein Ergebnis ist der neue Wert von `y` – was zufällig `[ 2, 3 ]` ist.
   `x` ist jetzt auf `3` gesetzt,
   `y` ist jetzt auf `[ 2, 3 ]` gesetzt,
   und die Konsole hat "F!" und dann "G!" ausgegeben.

#### Auswertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel setzt voraus, dass `x` bereits zu einem Objekt zugewiesen wurde. Für weitere Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaftszugriff auf der linken Seite dieser Zuweisung beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftszugriff wird zu einer Referenz auf die Variable namens `x` ausgewertet.
      2. Der Funktionsaufruf `f()` gibt "F!" in die Konsole aus und wird dann zur Zahl `2` ausgewertet.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung ist jetzt fertig ausgewertet; sein Ergebnis ist eine variable Eigenschaftsreferenz: `x[2]`.
   3. Dann gibt der Funktionsaufruf `g()` "G!" in die Konsole aus und wird dann zur Zahl `3` ausgewertet.
   4. Diese `3` wird nun `x[2]` zugewiesen.
      (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` ist jetzt fertig ausgewertet; sein Ergebnis ist der neue Wert von `x[2]` – was zufällig `3` ist.
   `x[2]` ist jetzt auf `3` gesetzt,
   und die Konsole hat "F!" und dann "G!" ausgegeben.

### Vermeiden von Zuweisungsketten

Das Verkettung oder Verschachteln von Zuweisungen in anderen Ausdrücken kann zu unerwartetem Verhalten führen. Aus diesem Grund wird das [Verkettung von Zuweisungen im selben Ausdruck](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment) nicht empfohlen.

Insbesondere das Platzieren einer Variablenkette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-, [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Anweisung funktioniert oft _nicht_. Nur die äußerste/linkeste Variable würde deklariert; andere Variablen innerhalb der Zuweisungskette werden von der `const`/`let`/`var`-Anweisung _nicht_ deklariert.
Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung deklariert scheinbar die Variablen `x`, `y` und `z`.
Tatsächlich deklariert sie jedoch nur die Variable `z`.
`y` und `x` sind entweder ungültige Referenzen auf nicht vorhandene Variablen (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "nachsichtigen Modus")}} erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert basierend darauf zurück, ob der Vergleich wahr ist.
Die Operanden können numerisch, als Zeichenkette, logisch oder [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) sein.
Zeichenketten werden basierend auf der standardmäßigen lexikografischen Reihenfolge, unter Verwendung von Unicode-Werten, verglichen.
In den meisten Fällen, wenn die beiden Operanden nicht vom gleichen Typ sind, versucht JavaScript, sie in einen geeigneten Typ für den Vergleich zu konvertieren.
Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen bei der Typkonvertierung innerhalb von Vergleichen betreffen die Operatoren `===` und `!==`, die strikte Gleichheits- und Ungleichheitsvergleiche durchführen.
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Inequality">Nicht gleich</a> (<code>!=</code>)
      </td>
      <td>Gibt <code>true</code> zurück, wenn die Operanden nicht gleich sind.</td>
      <td>
        <code>var1 != 4<br />var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strikt gleich</a> (<code>===</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden gleich und vom gleichen Typ sind. Siehe auch {{jsxref("Object.is")}} und
        <a href="/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness">Gleichheit in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strikt ungleich</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ, aber nicht gleich sind, oder von unterschiedlichem Typ sind.
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

> **Hinweis:** `=>` ist kein Vergleichsoperator, sondern die Notation für [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetische Operatoren

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als ihre Operanden und gibt einen einzigen numerischen Wert zurück.
Die Standard-Arithmetikoperatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass die Division durch Null {{jsxref("Infinity")}} ergibt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standardarithmetikoperationen (`+`, `-`, `*`, `/`) bietet JavaScript die folgenden arithmetischen Operatoren an:

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
        Unärer Operator. Addiert eins zu seinem Operanden. Wird er als Präfix-Operator
        (<code>++x</code>) verwendet, gibt er den Wert seines Operanden nach der Erhöhung um eins zurück;
        wird er als Postfix-Operator (<code>x++</code>) verwendet, gibt er den Wert
        seines Operanden vor der Erhöhung um eins zurück.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>++x</code> <code>x</code> auf 4
        und gibt 4 zurück, während <code>x++</code> 3 zurückgibt und, erst danach, <code>x</code> auf 4 setzt.
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
        Wenn <code>x</code> 3 ist, dann setzt <code>--x</code> <code>x</code> auf 2
        und gibt 2 zurück, während <code>x--</code> 3 zurückgibt und, erst danach, <code>x</code> auf 2 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unäre Negation</a> (<code>-</code>)
      </td>
      <td>Unärer Operator. Gibt die Negation seines Operanden zurück.</td>
      <td>Wenn <code>x</code> 3 ist, dann gibt <code>-x</code> -3 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unärer Plus</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versuch, den Operanden in eine Zahl zu <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">konvertieren,</a> falls er noch keine ist.
      </td>
      <td>
        <p><code>+"3"</code> gibt <code>3</code> zurück.</p>
        <p><code>+true</code> gibt <code>1</code> zurück.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Exponentiation">Potenzierungsoperator</a> (<code>**</code>)
      </td>
      <td>
        Berechnet die <code>Basis</code> zur Potenz des <code>Exponenten</code>,
        also <code>base^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> gibt <code>8</code> zurück.<br /><code>10 ** -1</code>
        gibt <code>0.1</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als ein Set von 32 Bits (Nullen und Einsen), anstatt als Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun eine Binärdarstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen Binärdarstellungen aus, geben jedoch Standard-JavaScript-Zahlenwerte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren von JavaScript zusammen.

| Operator                                                                                               | Gebrauch  | Beschreibung                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweise UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                                | `a & b`   | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                                    |
| [Bitweise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                                  | `a \| b`  | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                                                    |
| [Bitweise XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                                | `a ^ b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweise NOT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                                | `~ a`     | Invertiert die Bits seines Operanden.                                                                                                                                                        |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                            | `a << b`  | Verschiebt `a` in Binärdarstellung um `b` Bits nach links und fügt Nullen von rechts ein.                                                                                                    |
| [Vorzeichenherhaltende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)    | `a >> b`  | Verschiebt `a` in Binärdarstellung um `b` Bits nach rechts und verwirft verschobene Bits.                                                                                                    |
| [Nullauffüllende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b` | Verschiebt `a` in Binärdarstellung um `b` Bits nach rechts, verwirft verschobene Bits und fügt Nullen von links ein.                                                                         |

### Bitweise logische Operatoren

Konzeptionell funktionieren die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in 32-Bit-Ganzzahlen konvertiert und durch eine Reihe von Bits (Nullen und Einsen) ausgedrückt.
  Zahlen mit mehr als 32 Bit haben ihre bedeutendsten Bits verworfen.
  Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bit in eine 32-Bit-Ganzzahl konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: Erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit und so weiter.
- Der Operator wird auf jedes Bit-Paar angewendet, und das Ergebnis wird bitweise konstruiert.

Zum Beispiel ist die Binärdarstellung von neun 1001, und die Binärdarstellung von fünfzehn ist 1111.
Wenn die bitweisen Operatoren auf diese Werte angewendet werden, lauten die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass mit dem Bitweise-NOT-Operator alle 32 Bit invertiert werden und dass Werte mit dem bedeutendsten (linken) Bit, das auf 1 gesetzt ist, negative Zahlen darstellen (Zweierkomplement-Darstellung). `~x` wird auf denselben Wert ausgewertet, den `-x - 1` ergibt.

### Bitweise Verschiebeoperatoren

Die bitweisen Verschiebeoperatoren nehmen zwei Operanden: Der erste ist eine zu verschiebende Menge, und der zweite gibt die Anzahl der Bitpositionen an, um die der erste Operand verschoben werden soll.
Die Richtung der Verschiebeoperation wird durch den verwendeten Operator bestimmt.

Verschiebeoperatoren konvertieren ihre Operanden in 32-Bit-Ganzzahlen und geben ein Ergebnis vom Typ {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: Insbesondere geben sie {{jsxref("BigInt")}} zurück, wenn der Typ des linken Operanden {{jsxref("BigInt")}} ist; andernfalls geben sie {{jsxref("Number")}} zurück.

Die Verschiebeoperatoren sind in der folgenden Tabelle aufgeführt.

<table class="fullwidth-table">
  <caption>
    Bitweise Verschiebeoperatoren
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Left_shift">Linksverschiebung</a><br />(<code>&#x3C;&#x3C;</code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach links. Überschüssige Bits, die nach links verschoben werden, werden verworfen. Nullen werden von rechts eingefügt.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, da 1001 um 2 Bits nach links verschoben zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Vorzeichenherhaltende Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Kopien des linksten Bits werden von links eingefügt.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, da 1001 um 2 Bits nach rechts verschoben zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, da das Vorzeichen beibehalten wird.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Nullauffüllende Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Nullen werden von links eingefügt.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, da 10011 um 2 Bits nach rechts verschoben zu 100 wird, was 4 ist. Bei nicht-negativen Zahlen ergeben Nullauffüllende Rechtsverschiebung und Vorzeichenherhaltende Rechtsverschiebung dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit booleschen (logischen) Werten verwendet; wenn sie es sind, geben sie einen booleschen Wert zurück.
Die Operatoren `&&`, `||` und `??` geben jedoch tatsächlich den Wert eines der angegebenen Operanden zurück, daher können diese Operatoren bei Verwendung mit nicht-booleschen Werten einen nicht-booleschen Wert zurückgeben. Daher werden sie treffender als "Wertauswahloperatoren" bezeichnet.
Die logischen Operatoren sind in der folgenden Tabelle beschrieben.

<table class="fullwidth-table">
  <caption>
    Logische Operatoren
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Gebrauch</th>
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
        Gibt <code>expr1</code> zurück, wenn es in <code>false</code> konvertiert werden kann; andernfalls gibt es <code>expr2</code> zurück. Daher wird bei Verwendung mit booleschen Werten <code>&#x26;&#x26;</code> <code>true</code> zurückgeben, wenn beide Operanden wahr sind; andernfalls wird <code>false</code> zurückgeben.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> konvertiert werden kann; andernfalls gibt es <code>expr2</code> zurück. Daher wird bei Verwendung mit booleschen Werten <code>||</code> <code>true</code> zurückgeben, wenn einer der Operanden wahr ist; wenn beide falsch sind, wird <code>false</code> zurückgeben.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish Coalescing Operator</a> (<code>??</code>)
      </td>
      <td><code>expr1 ?? expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es weder <code>null</code> noch <code>undefined</code> ist; andernfalls gibt es <code>expr2</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logisches NICHT</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Gibt <code>false</code> zurück, wenn sein einzelner Operand in <code>true</code> konvertiert werden kann; andernfalls gibt es <code>true</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, der leeren Zeichenkette (`""`) oder `undefined` auswerten.

Der folgende Code zeigt Beispiele für den `&&` (logischen UND)-Operator.

```js
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
```

Der folgende Code zeigt Beispiele für den `||` (logischen ODER)-Operator.

```js
const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat
```

Der folgende Code zeigt Beispiele für den `??` (nullish coalescing) Operator.

```js
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
```

Beachten Sie, wie `??` wie `||` funktioniert, aber es nur den zweiten Ausdruck zurückgibt, wenn der erste "{{Glossary("Nullish", "nullish")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||`, um Standardwerte für Werte festzulegen, die `null` oder `undefined` sein könnten, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht angewendet werden sollte.

Der folgende Code zeigt Beispiele für den `!` (logischen NICHT)-Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie auf mögliche "Kurzschluss"-Auswertung unter Verwendung der folgenden Regeln getestet:

- `falsy && anything` wird zu dem falsy Wert kurzgeschlossen ausgewertet.
- `truthy || anything` wird zu dem truthy Wert kurzgeschlossen ausgewertet.
- `nonNullish ?? anything` wird zu dem nicht-nullish Wert kurzgeschlossen ausgewertet.

Die Regeln der Logik garantieren, dass diese Auswertungen immer korrekt sind. Beachten Sie, dass der _anything_-Teil der obigen Ausdrücke nicht ausgewertet wird, sodass eventuelle Nebeneffekte dabei nicht eintreten.

## BigInt Operatoren

Die meisten Operatoren, die zwischen Zahlen verwendet werden können, können auch zwischen [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Werten verwendet werden.

```js
// BigInt addition
const a = 1n + 2n; // 3n
// Division with BigInts round towards zero
const b = 1n / 2n; // 0n
// Bitwise operations with BigInts do not truncate either side
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

Eine Ausnahme ist der [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), der für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat und somit technisch gesehen kein "höchstes Bit" hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig ersetzbar – Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Das liegt daran, dass BigInt weder eine Teilmenge noch eine Obermenge von Zahlen ist. BigInts haben eine höhere Präzision als Zahlen, wenn sie große Ganzzahlen darstellen, können jedoch keine Dezimalstellen darstellen, sodass eine implizite Konvertierung auf beiden Seiten Präzision verlieren könnte. Verwenden Sie eine explizite Umwandlung, um anzugeben, ob Sie möchten, dass die Operation eine Zahlnummer- oder eine BigInt-Operation ist.

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

Zusätzlich zu den Vergleichsoperatoren, die bei Zeichenkettenwerten verwendet werden können, verkettet der Konkatenationsoperator (+) zwei Zeichenkettenwerte miteinander und gibt eine andere Zeichenkette zurück, die die Vereinigung der beiden Operanden-Zeichenfolgen ist.

Zum Beispiel:

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzzuweisungsoperator `+=` kann auch verwendet werden, um Zeichenfolgen zu verkettet.

Zum Beispiel:

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingter (ternärer) Operator

Der [bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist der einzige JavaScript-Operator, der drei Operanden erfordert.
Der Operator kann einen von zwei Werten basierend auf einer Bedingung haben.
Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn `condition` wahr ist, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Sie können den bedingten Operator überall verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel:

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist der Variablen `status` den Wert "Erwachsener" zu, wenn `age` achtzehn oder mehr ist. Andernfalls weist er `status` den Wert "Minderjähriger" zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`) wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich in einer `for`-Schleife verwendet, um es zu ermöglichen, dass mehrere Variablen bei jedem Durchgang durch die Schleife aktualisiert werden.
Es wird als schlechter Stil angesehen, ihn anderswo zu verwenden, wenn dies nicht erforderlich ist.
Oft können und sollten zwei separate Anweisungen stattdessen verwendet werden.

Wenn `a` zum Beispiel ein zweidimensionales Array mit 10 Elementen pro Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren.
Der Code gibt die Werte der diagonal angeordneten Elemente im Array aus:

```js
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## Unäre Operatoren

Ein unärer Operator ist ein Operator mit nur einem Operanden.

### delete

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator löscht eine Eigenschaft eines Objekts.
Die Syntax lautet:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts, `property` eine vorhandene Eigenschaft und `propertyKey` eine Zeichenfolge oder ein Symbol ist, das sich auf eine vorhandene Eigenschaft bezieht.

Wenn der `delete`-Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Der Versuch, danach darauf zuzugreifen, ergibt `undefined`.
Der `delete`-Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente aus ihnen zu `löschen`.
Dies wird jedoch als schlechte Praxis angesehen — versuchen Sie, es zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indexiert.
Um dieses Verhalten zu erreichen, ist es weitaus besser, nur das Element mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt eine Zeichenkette zurück, die den Typ des nicht ausgewerteten Operanden angibt.
`operand` ist die Zeichenfolge, Variable, das Schlüsselwort oder das Objekt, für das der Typ zurückgegeben werden soll.
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

Für die Schlüsselwörter `true` und `null` gibt der `typeof`-Operator die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder eine Zeichenkette gibt der `typeof`-Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof`-Operator den Typ des Wertes zurück, den die Eigenschaft enthält:

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

Der [`void`-Operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt an, dass ein Ausdruck ohne Rückgabe eines Wertes ausgewertet werden soll. `expression` ist ein JavaScript-Ausdruck zur Auswertung.
Die Klammern, die den Ausdruck umgeben, sind optional, jedoch ist es eine gute Praxis, sie zu verwenden, um Präzedenzprobleme zu vermeiden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt einen booleschen Wert zurück, basierend darauf, ob der Vergleich wahr ist.

### in

Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt vorhanden ist.
Die Syntax lautet:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` eine Zeichenfolge, numerischer oder symbolischer Ausdruck ist, der einen Eigenschaftsnamen oder einen Array-Index darstellt, und `objectName` der Name eines Objekts ist.

Die folgenden Beispiele zeigen einige Verwendungsmöglichkeiten des `in`-Operators.

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

Der [`instanceof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true` zurück, wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax lautet:

```js-nolint
object instanceof objectType
```

wobei `object` das zu testende Objekt gegen `objectType` ist, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie zur Laufzeit den Typ eines Objekts bestätigen müssen.
Zum Beispiel, beim Abfangen von Ausnahmen, können Sie den Ausnahmebehandlungscode abhängig vom Typ der ausgelösten Ausnahme verzweigen.

Zum Beispiel verwendet der folgende Code `instanceof`, um zu bestimmen, ob `obj` ein `Map`-Objekt ist. Da `obj` ein `Map`-Objekt ist, werden die Anweisungen im `if`-Block ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren agieren letztendlich auf einem oder mehreren grundlegenden Ausdrücken. Diese grundlegenden Ausdrücke umfassen [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt auch einige andere Arten. Sie werden unten kurz vorgestellt, und ihre Semantik ist in ihren jeweiligen Referenzabschnitten im Detail beschrieben.

### this

Verwenden Sie das [`this`-Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen.
Im Allgemeinen bezieht sich `this` auf das aufrufende Objekt in einer Methode.
Verwenden Sie `this` entweder mit der Punkt- oder der Klammernnotation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, eine Funktion namens `validate` überprüft die `value`-Eigenschaft eines Objekts, gegeben das Objekt und die hohen und niedrigen Werte:

```js
function validate(obj, lowVal, highVal) {
  if (obj.value < lowVal || obj.value > highVal) {
    console.log("Invalid Value!");
  }
}
```

Sie könnten `validate` in jedem Formularelement-`onChange`-Ereignishandler aufrufen, indem Sie `this` verwenden, um es an das Formularelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppenoperator

Der Gruppenoperator `( )` kontrolliert die Vorrangigkeit von Auswertungen in Ausdrücken. Zum Beispiel können Sie Multiplikation und Division außer Kraft setzen zuerst, dann
Addition und Subtraktion um zuerst die Addition auszuwerten.

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

### Eigenschafts-Accessor

Die [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)-Syntax erhält Eigenschaftswerte auf Objekten, entweder mittels Punkt-Notation oder Klammernotation.

```js
object.property;
object["property"];
```

Der [Leitfaden zum Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) geht näher auf Objekteigenschaften ein.

### Optionale Verkettung

Die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Syntax (`?.`) führt die verkettete Operation auf einem Objekt durch, wenn es definiert und nicht-`null` ist, und bricht andernfalls die Operation ab und gibt `undefined` zurück.
Dies erlaubt Ihnen, auf einem Wert zu operieren, der `null` oder `undefined` sein könnte, ohne einen `TypeError` zu verursachen.

```js
maybeObject?.property;
maybeObject?.[property];
maybeFunction?.();
```

### new

Sie können den [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, um eine Instanz eines benutzerdefinierten Objekttyps oder eines der eingebauten Objekttypen zu erstellen. Verwenden Sie `new` wie folgt:

```js
const objectName = new ObjectType(param1, param2, /* …, */ paramN);
```

### super

Das [`super`-Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen auf dem Elternteil eines Objekts aufzurufen.
Es ist nützlich in [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um den Elternkonstruktor aufzurufen.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
