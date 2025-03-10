---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt JavaScripts Ausdrücke und Operatoren, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik, Zeichenfolgen, ternäre und mehr.

Auf einer hohen Ebene ist ein _Ausdruck_ eine gültige Einheit von Code, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche, die Nebeneffekte haben (wie das Zuweisen von Werten) und solche, die rein _bewerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`-Operator, um der Variablen `x` den Wert sieben zuzuweisen. Der Ausdruck selbst wird zu `7` ausgewertet.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zusammenzuzählen und ergibt den Wert `7`. Wenn er jedoch nicht Teil einer größeren Konstruktion ist (z.B. einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen - dies ist in der Regel ein Programmierfehler, da die Auswertung keine Effekte hervorruft.

Wie die obigen Beispiele ebenfalls zeigen, sind alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie `=` und `+`. In diesem Abschnitt werden wir die folgenden Operatoren einführen:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt-Operatoren](#bigint-operatoren)
- [Zeichenfolgenoperatoren](#zeichenfolgenoperatoren)
- [Bedingter (ternärer) Operator](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Einstellige Operatoren](#einstellige_operatoren)
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verbinden Operanden, die entweder durch höher-priorisierte Operatoren gebildet werden oder einen der [Basis-Ausdrücke](#basisausdrücke) darstellen. Eine vollständige und detaillierte Liste von Operatoren und Ausdrücken ist auch im [Referenzbereich](/de/docs/Web/JavaScript/Reference/Operators) verfügbar.

Die _Priorität_ von Operatoren bestimmt, in welcher Reihenfolge sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlichen Reihenfolgen kommen, würden beide Ausdrücke zu `7` führen, da `*` Vorrang vor `+` hat, daher wird der `*`-verbundene Ausdruck immer zuerst ausgewertet. Sie können die Operatorpriorität überschreiben, indem Sie Klammern verwenden (was einen [gruppierten Ausdruck](#gruppierungsoperator) bildet – der Basis-Ausdruck). Um eine vollständige Tabelle der Operatorpriorität sowie verschiedene Ausnahmen zu sehen, besuchen Sie die Seite [Operator Prioritätsreferenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren sowie einen speziellen ternären Operator, den bedingten Operator.
Ein binärer Operator erfordert zwei Operanden, einen vor dem Operator und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel, `3 + 4` oder `x * y`. Diese Form wird als _Infix_ binärer Operator bezeichnet, da der Operator zwischen zwei Operanden platziert ist. Alle binären Operatoren in JavaScript sind Infix.

Ein unärer Operator erfordert einen einzelnen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel, `x++` oder `++x`. Die Form `operator operand` wird als _Präfix_ unärer Operator bezeichnet, und die Form `operand operator` wird als _Postfix_ unärer Operator bezeichnet. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript - alle anderen Operatoren, wie `!`, `typeof` usw. sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden basierend auf dem Wert seines rechten Operanden einen Wert zu.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die Kurzschreibweisen für die in der folgenden Tabelle aufgeführten Operationen sind:

| Name                                                                                                                 | Kurzschreibweise | Bedeutung          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                                  | `x = f()`        | `x = f()`          |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`       | `x = x + f()`      |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                          | `x -= f()`       | `x = x - f()`      |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`       | `x = x * f()`      |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`       | `x = x / f()`      |
| [Restzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                    | `x %= f()`       | `x = x % f()`      |
| [Exponentialzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                        | `x **= f()`      | `x = x ** f()`     |
| [Linksverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`      | `x = x << f()`     |
| [Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`      | `x = x >> f()`     |
| [Unsigned Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`     | `x = x >>> f()`    |
| [Bitwise UND Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                          | `x &= f()`       | `x = x & f()`      |
| [Bitwise XOR Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                          | `x ^= f()`       | `x = x ^ f()`      |
| [Bitwise ODER Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                          | `x \|= f()`      | `x = x \| f()`     |
| [Logisches UND Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                        | `x &&= f()`      | `x && (x = f())`   |
| [Logisches ODER Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                        | `x \|\|= f()`    | `x \|\| (x = f())` |
| [Nullish Coalescing Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)            | `x ??= f()`      | `x ?? (x = f())`   |

### Zuweisung von Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) evaluiert wird, kann die linke Seite eines Zuweisungsausdrucks Zuweisungen zu Eigenschaften dieses Ausdrucks vornehmen.
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

Für weitere Informationen zu Objekten lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt evaluiert wird, führen Zuweisungen zu Eigenschaften dieses Ausdrucks nicht zu einer Zuweisung:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wirft der obige Code einen Fehler, da man keine Eigenschaften auf Primitive zuweisen kann.

Es ist ein Fehler, unveränderlichen Eigenschaften Werte zuzuweisen oder Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`).

### Destrukturierung

Für komplexere Zuweisungen ist die [Destrukturierungs-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ein JavaScript-Ausdruck, der es ermöglicht, Daten aus Arrays oder Objekten mithilfe einer Syntax zu extrahieren, die die Konstruktion von Array- und Objektliteralen widerspiegelt.

Ohne Destrukturierung sind mehrere Anweisungen erforderlich, um Werte aus Arrays und Objekten zu extrahieren:

```js
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

Mit Destrukturierung können Sie mehrere Werte mit einer einzigen Anweisung in separate Variablen extrahieren:

```js
const [one, two, three] = foo;
```

### Auswertung und Verschachtelung

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration (d.h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen verwendet.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Jedoch, wie andere Ausdrücke, werden Zuweisungsausdrücke wie `x = f()` in einen Ergebniswert ausgewertet. Obwohl dieser Ergebniswert normalerweise nicht verwendet wird, kann er von einem anderen Ausdruck verwendet werden.

Verkettung von Zuweisungen oder Verschachtelung von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen. Aus diesem Grund, [raten einige JavaScript-Stilrichtlinien gegen Verkettung oder Verschachtelung von Zuweisungen ab](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment). Dennoch können Zuweisungskettungen und -verschachtelungen manchmal vorkommen, deshalb ist es wichtig, zu verstehen, wie sie funktionieren.

Durch Verkettung oder Verschachtelung eines Zuweisungsausdrucks kann dessen Ergebnis selbst einer anderen Variablen zugewiesen werden. Es kann protokolliert werden, es kann innerhalb eines Array-Literals oder Funktionsaufrufs platziert werden, und so weiter.

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

Das Bewertungsergebnis entspricht dem Ausdruck rechts vom `=`-Zeichen in der
"Bedeutung"-Spalte der obigen Tabelle. Das bedeutet, dass `x = f()` in das Ergebnis von
`f()` ausgewertet wird, `x += f()` in die resultierende Summe `x + f()` ausgewertet wird,
`x **= f()` in die resultierende Potenz `x ** f()` ausgewertet wird, und so weiter.

Im Falle der logischen Zuweisungen, `x &&= f()`,
`x ||= f()`, und `x ??= f()`, ist der Rückgabewert der
der logischen Operation ohne die Zuweisung, also `x && f()`,
`x || f()`, und `x ?? f()`, jeweils.

Wenn Sie diese Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren
wie Array-Literale verketten, werden die Zuweisungsausdrücke **von rechts nach links gruppiert**
(sie sind [rechts-assoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts ausgewertet**.

Beachten Sie, dass alle anderen Zuweisungsoperatoren als `=` selbst,
die resultierenden Werte immer auf den Werten der Operanden _vor_ der
Operation basieren.

Zum Beispiel, wenn wir annehmen, dass die folgenden Funktionen `f` und `g`
und die Variablen `x` und `y` deklariert wurden:

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

#### Bewertungsbeispiel 1

`y = x = f()` ist äquivalent zu `y = (x = f())`,
da der Zuweisungsoperator `=` [rechts-assoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist.
Er wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt zu evaluieren.
   1. Das `y` auf der linken Seite dieser Zuweisung evaluiert
      zu einer Referenz auf die Variable mit dem Namen `y`.
   2. Der Zuweisungsausdruck `x = f()` beginnt zu evaluieren.
      1. Das `x` auf der linken Seite dieser Zuweisung evaluiert
         zu einer Referenz auf die Variable mit dem Namen `x`.
      2. Der Funktionsaufruf `f()` gibt "F!" auf der Konsole aus und
         wird dann zu der Zahl `2` ausgewertet.
      3. Dieses `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` ist nun fertig evaluiert;
      sein Ergebnis ist der neue Wert von `x`, nämlich `2`.
   4. Dieses `2`-Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` ist nun fertig evaluiert;
   sein Ergebnis ist der neue Wert von `y` – nämlich `2`.
   `x` und `y` werden auf `2` gesetzt,
   und die Konsole hat "F!" ausgegeben.

#### Bewertungsbeispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt zu evaluieren.
   1. Das `y` auf der linken Seite dieser Zuweisung evaluiert
      zu einer Referenz auf die Variable mit dem Namen `y`.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt zu evaluieren.
      1. Der Funktionsaufruf `f()` gibt "F!" auf der Konsole aus und
         wird dann zu der Zahl `2` ausgewertet.
      2. Der Zuweisungsausdruck `x = g()` beginnt zu evaluieren.
         1. Das `x` auf der linken Seite dieser Zuweisung evaluiert
            zu einer Referenz auf die Variable mit dem Namen `x`.
         2. Der Funktionsaufruf `g()` gibt "G!" auf der Konsole aus und
            wird dann zu der Zahl `3` ausgewertet.
         3. Dieses `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` ist nun fertig evaluiert;
         sein Ergebnis ist der neue Wert von `x`, nämlich `3`.
         Dieses `3`-Ergebnis wird zum nächsten Element
         im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]`
      ist nun fertig evaluiert;
      sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird nun `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` ist
   nun fertig evaluiert;
   sein Ergebnis ist der neue Wert von `y` – nämlich `[ 2, 3 ]`.
   `x` ist nun auf `3` gesetzt,
   `y` ist nun auf `[ 2, 3 ]` gesetzt,
   und die Konsole hat "F!" dann "G!" ausgegeben.

#### Bewertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel nimmt an, dass `x` bereits einem Objekt zugewiesen ist.
Für mehr Informationen über Objekte, lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt zu evaluieren.
   1. Der `x[f()]`-Eigenschaftszugriff auf der linken Seite dieser
      Zuweisung beginnt zu evaluieren.
      1. Das `x` in diesem Eigenschaftszugriff evaluiert
         zu einer Referenz auf die Variable mit dem Namen `x`.
      2. Dann gibt der Funktionsaufruf `f()` "F!" auf der Konsole aus und
         wird dann zu der Zahl `2` ausgewertet.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung
      ist nun fertig evaluiert;
      sein Ergebnis ist eine variable Eigenschaftsreferenz: `x[2]`.
   3. Dann gibt der Funktionsaufruf `g()` "G!" auf der Konsole aus und
      wird dann zu der Zahl `3` ausgewertet.
   4. Dieses `3` wird nun `x[2]` zugewiesen.
      (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` ist nun fertig evaluiert;
   sein Ergebnis ist der neue Wert von `x[2]` – nämlich `3`.
   `x[2]` ist nun auf `3` gesetzt,
   und die Konsole hat "F!" dann "G!" ausgegeben.

### Vermeiden von Zuweisungsketten

Verkettung von Zuweisungen oder Verschachtelung von Zuweisungen in anderen Ausdrücken kann
zu überraschendem Verhalten führen. Aus diesem Grund wird
[[Verkettung von Zuweisungen in derselben Anweisung wird abgeraten]](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere, wenn Sie eine Variablenkette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung platzieren, funktioniert es oft _nicht_. Nur die äußerste/Linkeste Variable würde deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ durch die `const`/`let`/`var`-Anweisung deklariert.
Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung erklärt scheinbar die Variablen `x`, `y`, und `z`.
Jedoch deklariert sie tatsächlich nur die Variable `z`.
`y` und `x` sind entweder ungültige Verweise auf nicht existierende Variablen (im [Strict Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "nachlässigen Modus")}} implizit erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert zurück, basierend darauf, ob der Vergleich wahr ist oder nicht.
Die Operanden können numerische Werte, Zeichenfolgen, logische Werte oder [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) sein.
Zeichenfolgen werden basierend auf der standardmäßigen lexikographischen Ordnung unter Verwendung von Unicode-Werten verglichen.
In den meisten Fällen versucht JavaScript, die Operanden in einen geeigneten Typ für den Vergleich zu konvertieren, wenn beide Operanden nicht vom selben Typ sind.
Dieses Verhalten führt normalerweise dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen vom Konvertieren von Typen bei Vergleichen betreffen die Operatoren `===` und `!==`, die strikte Gleichheits- und Ungleichheitsvergleiche durchführen.
Diese Operatoren versuchen nicht, die Operanden zu kompatiblen Typen zu konvertieren, bevor die Gleichheit überprüft wird.
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
        Gibt <code>true</code> zurück, wenn die Operanden gleich und vom selben Typ sind. Siehe auch {{jsxref("Object.is")}} und
        <a href="/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness">Gleichheit in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strikte Ungleichheit</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom selben Typ sind, aber nicht gleich, oder von unterschiedlichem Typ.
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">Größer oder gleich</a>
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Kleiner oder gleich</a>
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

> **Hinweis:** `=>` ist kein Vergleichsoperator, sondern die Notation
> für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetische Operatoren

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als seine Operanden und gibt einen einzigen numerischen Wert zurück.
Die Standardarithmetikoperatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere ist zu beachten, dass eine Division durch Null {{jsxref("Infinity")}} ergibt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standardarithmetikoperationen (`+`, `-`, `*`, `/`) bietet JavaScript die in der folgenden Tabelle aufgeführten arithmetischen Operatoren:

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
        Einfache Operator. Fügt seinem Operanden eins hinzu. Wenn er als Präfixoperator
        (<code>++x</code>) verwendet wird, gibt er den Wert seines Operanden nach Hinzufügen von eins zurück;
        wenn er als Postfixoperator (<code>x++</code>) verwendet wird, gibt er den Wert seines
        Operanden vor Hinzufügen von eins zurück.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>++x</code> <code>x</code> auf 4
        und gibt 4 zurück, während <code>x++</code> 3 zurückgibt und erst dann <code>x</code> auf 4 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Decrement">Dekrement</a> (<code>--</code>)
      </td>
      <td>
        Einfache Operator. Subtrahiert eins von seinem Operanden.
        Der Rückgabewert ist analog zu dem des Inkrementoperators.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>--x</code> <code>x</code> auf 2
        und gibt 2 zurück, während <code>x--</code> 3 zurückgibt und erst dann <code>x</code> auf 2 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unäre Negation</a> (<code>-</code>)
      </td>
      <td>Einfacher Operator. Gibt die Negation seines Operanden zurück.</td>
      <td>Wenn <code>x</code> 3 ist, gibt <code>-x</code> -3 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäres Plus</a> (<code>+</code>)
      </td>
      <td>
        Einfacher Operator. Versucht, den Operanden in eine Zahl zu konvertieren, wenn er noch keine ist.
      </td>
      <td>
        <p><code>+"3"</code> ergibt <code>3</code>.</p>
        <p><code>+true</code> ergibt <code>1</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentialoperator</a> (<code>**</code>)
      </td>
      <td>
        Berechnet die <code>Basis</code> zur <code>Exponenten</code>potenz,
        das heißt, <code>basis^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> gibt <code>8</code> zurück.<br /><code>10 ** -1</code>
        ergibt <code>0.1</code>.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als eine Menge von 32 Bits (Nullen und Einsen), anstelle von Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun
eine binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen
binären Darstellungen durch, geben jedoch Standard-JavaScript-Zahlenwerte zurück.

Die folgende Tabelle fasst JavaScripts bitweise Operatoren zusammen.

| Operator                                                                                             | Verwendung | Beschreibung                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Bitweise UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                              | `a & b`    | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                                  |
| [Bitweise ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                              | `a \| b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                                                  |
| [Bitweise XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                              | `a ^ b`    | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind. |
| [Bitweises NICHT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                           | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                      |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                          | `a << b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach links und fügt Nullen von rechts ein.                                                                                                  |
| [Vorzeichen-behaltene Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)   | `a >> b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts und verwirft Bits, die verschoben wurden.                                                                                       |
| [Null-füllende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft Bits, die verschoben wurden, und fügt Nullen von links ein.                                                           |

### Bitwise logische Operatoren

Konzeptionell arbeiten die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in zweiunddreißig-Bit-Integer konvertiert und durch eine Reihe von Bits (Nullen und Einsen) dargestellt.
  Zahlen, die mehr als 32 Bits haben, verlieren ihre bedeutendsten Bits.
  Zum Beispiel wird die folgende gesamte Zahl mit mehr als 32 Bits in eine 32-Bit-Integer konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit mit erstem Bit, zweites Bit mit zweitem Bit und so weiter.
- Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Zum Beispiel, die binäre Darstellung von neun ist 1001 und die binäre Darstellung von fünfzehn ist 1111.
Also, wenn die bitweisen Operatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits mit dem Bitweisen NICHT-Operator invertiert werden und dass Werte mit dem bedeutendsten (linksmost) Bit, das auf 1 gesetzt ist, negative Zahlen darstellen
(Zwei-Komplement-Darstellung). `~x` wird zu dem gleichen Wert ausgewertet, zu dem
`-x - 1` ausgewertet wird.

### Bitweise Verschiebeoperatoren

Die bitweisen Verschiebeoperatoren nehmen zwei Operanden: Der erste ist eine zu verschiebende Menge, und der zweite gibt die Anzahl der Bitpositionen an, um die der erste Operand verschoben werden soll.
Die Richtung der Verschiebeoperation wird durch den verwendeten Operator gesteuert.

Verschiebeoperatoren konvertieren ihre Operanden in zweiunddreißig-Bit-Integer und geben ein Ergebnis entweder vom Typ {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: speziell, wenn der Typ
des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück;
ansonsten geben sie {{jsxref("Number")}} zurück.

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
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        links. Überflüssige Bits, die nach links verschoben wurden, werden verworfen. Null-Bits
        werden von rechts eingefügt.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach
        links verschoben zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Vorzeichen-behaltende Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überflüssige Bits, die nach rechts verschoben wurden, werden verworfen. Kopien des
        linken Bits werden von links eingefügt.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts
        verschoben zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, da das Vorzeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Null-füllende Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überflüssige Bits, die nach rechts verschoben wurden, werden verworfen. Null-Bits
        werden von links eingefügt.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts
        verschoben zu 100 wird, was 4 ist. Für nicht-negative Zahlen ergeben Null-füllende Rechtsverschiebungen und Vorzeichen-behaltende Rechtsverschiebungen dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit booleschen (logischen) Werten verwendet; wenn sie es sind, geben sie einen booleschen Wert zurück.
Jedoch geben die `&&`, `||`, und `??` Operatoren tatsächlich den Wert eines der angegebenen Operanden zurück, daher können diese
Operatoren, wenn sie mit nicht-booleschen Werten verwendet werden, einen nicht-booleschen Wert zurückgeben. Als solche können sie eher als "Wertauswahloperatoren" bezeichnet werden.
Die logischen Operatoren sind in der folgenden Tabelle beschrieben.

<table class="fullwidth-table">
  <caption>
    Logische Operatoren
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Verwendung</th>
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
        andernfalls gibt es <code>expr2</code> zurück. Wenn es mit booleschen
        Werten verwendet wird, gibt <code>&#x26;&#x26;</code> <code>true</code> zurück, wenn beide
        Operanden wahr sind; andernfalls gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> konvertiert werden kann;
        andernfalls gibt es <code>expr2</code> zurück. Wenn es mit booleschen
        Werten verwendet wird, gibt <code>||</code> <code>true</code> zurück, wenn ein Operand
        wahr ist; wenn beide falsch sind, gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish coalescing operator</a> (<code>??</code>)
      </td>
      <td><code>expr1 ?? expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es weder <code>null</code> noch
        <code>undefined</code> ist; andernfalls gibt es <code>expr2</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logisches NICHT</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Gibt <code>false</code> zurück, wenn sein einzelner Operand in
        <code>true</code> konvertiert werden kann; andernfalls gibt es <code>true</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind die, die zu `null`, `0`, `0n`, `NaN`, dem leeren String (`""`) oder `undefined` ausgewertet werden.

Der folgende Code zeigt Beispiele für den `&&` (logisches UND) Operator.

```js
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
```

Der folgende Code zeigt Beispiele für den `||` (logisches ODER) Operator.

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

Achten Sie darauf, wie `??` wie `||` funktioniert, aber es gibt nur den zweiten Ausdruck zurück, wenn der erste "{{Glossary("Nullish", "nullish")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||` für das Setzen von Standardwerten für Werte, die `null` oder `undefined` sein könnten, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht angewendet werden soll.

Der folgende Code zeigt Beispiele für den `!` (logisches NICHT) Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie auf mögliche
"Kurzschluss"-Auswertung unter Verwendung der folgenden Regeln getestet:

- `falsy && anything` wird auf den falsy Wert kurzgeschlossen ausgewertet.
- `truthy || anything` wird auf den truthy Wert kurzgeschlossen ausgewertet.
- `nonNullish ?? anything` wird auf den nicht-nullish Wert kurzgeschlossen ausgewertet.

Die Regeln der Logik garantieren, dass diese Auswertungen immer korrekt sind. Beachten Sie, dass der
_anything_-Teil der obigen Ausdrücke nicht ausgewertet wird, so dass keine Nebeneffekte
auftreten.

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

Eine Ausnahme ist die [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat und daher technisch gesehen kein "höchstes Bit" hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig austauschbar — Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder eine Teilmenge noch eine Obermenge von Zahlen ist. BigInts haben eine höhere Genauigkeit als Zahlen, wenn sie große Ganzzahlen darstellen, können jedoch keine Dezimalzahlen darstellen, sodass eine implizite Konvertierung auf beiden Seiten an Genauigkeit verlieren könnte. Verwenden Sie die explizite Konvertierung, um anzugeben, ob Sie wünschen, dass die Operation eine Zahlenoperation oder eine BigInt-Operation ist.

```js example-good
const a = Number(1n) + 2; // 3
const b = 1n + BigInt(2); // 3n
```

Sie können BigInts mit Zahlen vergleichen.

```js
const a = 1n > 2; // false
const b = 3 > 2n; // true
```

## Zeichenfolgenoperatoren

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenfolgenwerte angewendet werden können, verknüpft der Verkettungsoperator (`+`) zwei Zeichenfolgenwerte, wodurch eine weitere Zeichenfolge zurückgegeben wird, die die Vereinigung der beiden Operanden ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzschreib-Zuweisungsoperator `+=` kann auch verwendet werden, um Zeichenfolgen zu verknüpfen.

Zum Beispiel,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingter (ternärer) Operator

Der [bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
ist der einzige JavaScript-Operator, der drei Operanden benötigt.
Der Operator kann einen von zwei Werten basierend auf einer Bedingung haben.
Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn `Bedingung` wahr ist, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Sie können den bedingten Operator überall dort verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist der Variablen `status` den Wert "adult" zu, wenn
`age` achtzehn oder mehr ist. Andernfalls weist sie den Wert "minor" zu
`status` zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich innerhalb einer `for`-Schleife verwendet, um mehrere Variablen zu aktualisieren, bei jedem Durchgang durch die Schleife.
Es wird als schlechter Stil angesehen, ihn anderweitig zu verwenden, wenn es nicht notwendig ist.
Oft können und sollten stattdessen zwei separate Anweisungen verwendet werden.

Zum Beispiel, wenn `a` ein 2-dimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren. Der Code gibt die Werte der diagonalen Elemente im Array aus:

```js
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## Einstellige Operatoren

Eine unäre Operation ist eine Operation mit nur einem Operand.

### delete

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löscht eine Eigenschaft eines Objekts.
Die Syntax ist:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts ist, `property` eine bestehende Eigenschaft ist, und `propertyKey` eine Zeichenfolge oder ein Symbol ist, das auf eine bestehende Eigenschaft verweist.

Wenn der `delete` Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Der Versuch, es danach zuzugreifen, liefert `undefined`.
Der `delete` Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente daraus zu `löschen`.
Das wird jedoch als schlechte Praxis angesehen - versuchen Sie, es zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht betroffen und andere Elemente werden nicht neu indexiert.
Um ein solches Verhalten zu erzielen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt eine Zeichenfolge zurück, die den Typ des unevaluierten Operanden angibt.
`operand` ist die Zeichenfolge, die Variable, das Schlüsselwort oder das Objekt, für das der Typ zurückgegeben werden soll.
Die Klammern sind optional.

Angenommen, Sie definieren die folgenden Variablen:

```js
const myFun = new Function("5 + 2");
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();
```

Der `typeof` Operator gibt die folgenden Ergebnisse für diese Variablen zurück:

```js
typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"
```

Für die Schlüsselwörter `true` und `null` gibt der `typeof`
Operator die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder eine Zeichenfolge gibt der `typeof`-Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof`-Operator den Typ des Werts zurück, den die
Eigenschaft enthält:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für Methoden und Funktionen gibt der `typeof`-Operator folgende Ergebnisse zurück:

```js
typeof blur; // returns "function"
typeof eval; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

Für vordefinierte Objekte gibt der `typeof`-Operator folgende Ergebnisse zurück:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

Der [`void` operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt einen Ausdruck an, der ausgewertet werden soll, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck, der ausgewertet werden soll.
Die Klammern, die den Ausdruck umgeben, sind optional, aber es ist guter Stil, sie zu verwenden, um Vorrangprobleme zu vermeiden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt einen booleschen Wert basierend darauf zurück, ob der Vergleich wahr ist.

### in

Der [`in` operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt ist.
Die Syntax ist:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein Zeichenfolgen-, numerischer oder Symbolausdruck ist, der einen Eigenschaftsnamen oder Array-Index darstellt, und `objectName` der Name eines Objekts ist.

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

Der [`instanceof` operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true`
zurück, wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet werden soll, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie z.B. {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen müssen.
Zum Beispiel, wenn Sie Ausnahmen abfangen, können Sie zu unterschiedlichen Ausnahmebehandlungs-Code verzweigen, abhängig von der Art der ausgelösten Ausnahme.

Zum Beispiel, der folgende Code verwendet `instanceof` um festzustellen, ob `obj` ein `Map` Objekt ist. Da `obj` ein `Map` Objekt ist, führen die Anweisungen innerhalb des `if` Blocks ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Basisausdrücke

Alle Operatoren arbeiten letztendlich auf einem oder mehreren grundlegenden Ausdrücken. Diese grundlegenden Ausdrücke umfassen [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt auch einige andere Arten. Sie werden unten kurz eingeführt und ihre Semantik ist in ihren jeweiligen Referenzabschnitten ausführlich beschrieben.

### this

Verwenden Sie das [`this` keyword](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen.
Im Allgemeinen bezieht sich `this` auf das aufrufende Objekt in einer Methode.
Verwenden Sie `this` entweder mit der Punkt- oder der Klammernotation:

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

Sie könnten `validate` in jedem `onChange`-Event-Handler des Formularelements aufrufen und `this` verwenden, um es an das Formularelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` kontrolliert die Priorität der Auswertung in
Ausdrücken. Zum Beispiel können Sie die Multiplikation und Division zuerst überschreiben und
anschließend die Addition und Subtraktion auswerten, um die Addition zuerst zu bewerten.

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
```

### Eigenschaftszugriff

Die [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Syntax ruft Eigenschaftswerte von Objekten ab, entweder mit Punktnotation oder Klammernotation.

```js
object.property;
object["property"];
```

Der [Leitfaden zur Arbeit mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) geht näher auf Objekteigenschaften ein.

### Optionales Chaining

Die [optionale Verkettungs-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`) führt die verkettete Operation an einem Objekt durch, wenn es definiert und nicht `null` ist, und bricht andernfalls die Operation ab und gibt `undefined` zurück.
Dies ermöglicht es Ihnen, auf einem Wert zu operieren, der `null` oder `undefined` sein könnte, ohne eine `TypeError` zu verursachen.

```js
maybeObject?.property;
maybeObject?.[property];
maybeFunction?.();
```

### new

Sie können den [`neuen Operator`](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, um eine Instanz eines benutzerdefinierten Objekttyps oder eines der eingebauten Objekttypen zu erstellen. Verwenden Sie `new` wie folgt:

```js
const objectName = new ObjectType(param1, param2, /* …, */ paramN);
```

### super

Das [`super`-Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen des Elternobjekts aufzurufen.
Es ist nützlich in [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um den Elternkonstruktor aufzurufen, zum Beispiel.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
