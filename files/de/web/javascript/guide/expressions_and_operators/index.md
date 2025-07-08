---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt die Ausdrücke und Operatoren in JavaScript, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik, Zeichenfolge, Ternär und mehr.

Auf einer hohen Ebene ist ein _Ausdruck_ eine gültige Einheit von Code, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche, die Seiteneffekte haben (wie das Zuweisen von Werten) und solche, die rein _ausgewertet_ werden.

Der Ausdruck `x = 7` ist ein Beispiel für den ersten Typ. Dieser Ausdruck verwendet den `=`-Operator, um dem Variablen `x` den Wert sieben zuzuweisen. Der Ausdruck selbst wird zu `7` ausgewertet.

Der Ausdruck `3 + 4` ist ein Beispiel für den zweiten Typ. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zusammenzuzählen und einen Wert, `7`, zu erzeugen. Wenn er jedoch nicht Teil eines größeren Konstrukts ist (zum Beispiel eine [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen — dies ist normalerweise ein Programmierfehler, da die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele auch veranschaulichen, sind alle komplexen Ausdrücke durch _Operatoren_, wie `=` und `+`, verbunden. In diesem Abschnitt werden wir die folgenden Operatoren einführen:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt-Operatoren](#bigint-operatoren)
- [Zeichenfolgenoperatoren](#zeichenfolgenoperatoren)
- [Bedingungsoperator (ternär)](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verbinden Operanden entweder gebildet durch höherwertige Operatoren oder eines der [Grundausdrücke](#grundlegende_ausdrücke). Eine vollständige und detaillierte Liste der Operatoren und Ausdrücke ist auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) verfügbar.

Die _Präzedenz_ von Operatoren bestimmt die Reihenfolge, in der sie angewendet werden, wenn ein Ausdruck ausgewertet wird. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Trotz dass `*` und `+` in unterschiedlichen Reihenfolgen erscheinen, würden beide Ausdrücke zu `7` führen, da `*` eine höhere Präzedenz als `+` hat, so dass der `*` verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operatorpräzedenz mit Hilfe von Klammern überschreiben (die einen [Gruppenausdruck](#gruppierungsoperator) erstellen — der Grundeinheit eines Ausdrucks). Um eine vollständige Tabelle der Operatorpräzedenz sowie verschiedene Vorsichtsmaßnahmen zu sehen, besuchen Sie die Seite [Operatorpräzedenzreferenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren und einen speziellen ternären Operator, den bedingten Operator. Ein binärer Operator erfordert zwei Operanden, einen vor dem Operator und einen nach dem Operator:

```plain
operand1 operator operand2
```

Beispielsweise `3 + 4` oder `x * y`. Diese Form wird als _infix_ binärer Operator bezeichnet, da der Operator zwischen zwei Operanden positioniert ist. Alle binären Operatoren in JavaScript sind infix.

Ein unärer Operator erfordert einen einzelnen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel, `x++` oder `++x`. Die Form `operator operand` wird als _präfix_ unärer Operator bezeichnet, und die Form `operand operator` wird als _postfix_ unärer Operator bezeichnet. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof`, etc., sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden einen Wert basierend auf dem Wert seines rechten Operanden zu.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` zu `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzschrift für die in der folgenden Tabelle aufgelisteten Operationen sind:

| Name                                                                                                                 | Kurzschriftoperator | Bedeutung          |
| -------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                                  | `x = f()`           | `x = f()`          |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`          | `x = x + f()`      |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                          | `x -= f()`          | `x = x - f()`      |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`          | `x = x * f()`      |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`          | `x = x / f()`      |
| [Restzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                    | `x %= f()`          | `x = x % f()`      |
| [Exponentialzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                        | `x **= f()`         | `x = x ** f()`     |
| [Linksverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`         | `x = x << f()`     |
| [Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`         | `x = x >> f()`     |
| [Unsigned-Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`        | `x = x >>> f()`    |
| [Bitweises UND zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                         | `x &= f()`          | `x = x & f()`      |
| [Bitweisem XOR zuzuweisen](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                       | `x ^= f()`          | `x = x ^ f()`      |
| [Bitweisem ODER zuzuweisen](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                       | `x \|= f()`         | `x = x \| f()`     |
| [Logischem UND zuzuweisen](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                       | `x &&= f()`         | `x && (x = f())`   |
| [Logischem ODER zuzuweisen](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                       | `x \|\|= f()`       | `x \|\| (x = f())` |
| [Nullish-Koaleszenzzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)             | `x ??= f()`         | `x ?? (x = f())`   |

### Zuweisung zu Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, dann kann die linke Seite eines Zuweisungsausdrucks Zuweisungen zu den Eigenschaften dieses Ausdrucks machen.
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

Weitere Informationen zu Objekten finden Sie unter [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, dann weisen Zuweisungen zu den Eigenschaften dieses Ausdrucks nichts zu:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wirft der obige Code einen Fehler, weil man keine Eigenschaften zu Primitiven zuweisen kann.

Es ist ein Fehler, Werte zu unveränderlichen Eigenschaften zuzuwiesen oder zu Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`).

### Destrukturierung

Für komplexere Zuweisungen ist die [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) eine JavaScript-Ausdruckssyntax, die es ermöglicht, Daten aus Arrays oder Objekten mithilfe einer Syntax zu extrahieren, die der Konstruktion von Array- und
Objektliteralien ähnelt.

Ohne Destrukturierung erfordert es mehrere Anweisungen, um Werte aus Arrays und Objekten zu extrahieren:

```js
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

Mit Destrukturierung können Sie mehrere Werte in verschiedene Variablen mit einer einzigen Anweisung extrahieren:

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

Da jedoch, wie andere Ausdrücke, auch Zuweisungsausdrücke wie `x = f()` in einen Ergebniswert ausgewertet werden.
Obwohl dieser Ergebniswert normalerweise nicht verwendet wird, kann er dann von einem anderen Ausdruck verwendet werden.

Durch das Verketten von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken können überraschende Verhaltensweisen entstehen.
Aus diesem Grund [raten einige JavaScript-Stilrichtlinien das Verketten oder Verschachteln von Zuweisungen ab](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).
Trotzdem können manchmal Verkettung und Verschachtelung von Zuweisungen auftreten, daher ist es wichtig, zu verstehen, wie sie funktionieren.

Durch das Verketten oder Verschachteln eines Zuweisungsausdrucks kann das Ergebnis selbst einer anderen Variablen zugewiesen werden.
Es kann protokolliert, in ein Array-Literal oder einen Funktionsaufruf eingefügt und so weiter getan werden.

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

Das Auswertungsergebnis stimmt mit dem im Ausdruck rechts vom Gleichheitszeichen in der Spalte "Bedeutung" der obigen Tabelle überein. Das bedeutet, dass `x = f()` zum Ergebnis von `f()` ausgewertet wird, `x += f()` sich in die sich ergebende Summe `x + f()` auswertet, `x **= f()` in die sich ergebende Potenz `x ** f()` und so weiter.

Im Fall von logischen Zuweisungen werden `x &&= f()`, `x \|\|= f()` und `x ??= f()` der Rückgabewert der logischen Operation ohne die Zuweisung, also `x && f()`, `x \|\| f()`, und `x ?? f()`, je nachdem.

Beim Verkettung dieser Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren, wie Array-Literale, werden die Zuweisungsausdrücke **von rechts nach links** gruppiert (sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber **von links nach rechts** ausgewertet.

Beachten Sie, dass bei allen anderen Zuweisungsoperatoren als `=` selbst die Ergebnisse immer auf den Werten der Operanden basieren, _bevor_ die Operation durchgeführt wird.

Zum Beispiel, nehmen wir an, dass die folgenden Funktionen `f` und `g` und die Variablen `x` und `y` deklariert wurden:

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

`y = x = f()` ist gleichwertig mit `y = (x = f())`, weil der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist. Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt ausgewertet zu werden.
   1. Das `y` auf der linken Seite dieser Zuweisung wird in einen Verweis auf die Variablen `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt ausgewertet zu werden.
      1. Das `x` auf der linken Seite dieser Zuweisung wird in einen Verweis auf die Variablen `x` ausgewertet.
      2. Der Funktionsaufruf `f()` druckt "F!" auf die Konsole und wird dann in die Zahl `2` ausgewertet.
      3. Dieses `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` hat nun die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2`-Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` hat nun die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `y` – der zufällig `2` ist. `x` und `y` werden auf `2` gesetzt, und die Konsole hat "F!" gedruckt.

#### Auswertungsbeispiel 2

`y = [f(), x = g()]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [f(), x = g()]` beginnt ausgewertet zu werden.
   1. Das `y` auf der linken Seite dieser Zuweisung wird in einen Verweis auf die Variablen `y` ausgewertet.
   2. Das innere Array-Literal `[f(), x = g()]` beginnt ausgewertet zu werden.
      1. Der Funktionsaufruf `f()` druckt "F!" auf die Konsole und wird dann in die Zahl `2` ausgewertet.
      2. Der Zuweisungsausdruck `x = g()` beginnt ausgewertet zu werden.
         1. Das `x` auf der linken Seite dieser Zuweisung wird in einen Verweis auf die Variablen `x` ausgewertet.
         2. Der Funktionsaufruf `g()` druckt "G!" auf die Konsole und wird dann in die Zahl `3` ausgewertet.
         3. Dieses `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` hat nun die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `x`, der `3` ist. Dieses `3`-Ergebnis wird das nächste Element im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[f(), x = g()]` hat nun die Auswertung abgeschlossen; sein Ergebnis ist ein Array mit zwei Werten: `[2, 3]`.
   4. Dieses `[2, 3]`-Array wird nun `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [f(), x = g()]` hat nun die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `y` – der zufällig `[2, 3]` ist. `x` ist nun auf `3` gesetzt, `y` ist nun auf `[2, 3]` gesetzt, und die Konsole hat zuerst "F!" und dann "G!" gedruckt.

#### Auswertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel setzt voraus, dass `x` bereits einem Objekt zugeordnet ist. Weitere Informationen zu Objekten finden Sie unter [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt ausgewertet zu werden.
   1. Der `x[f()]`-Eigenschaftszugriff auf der linken Seite dieser Zuweisung beginnt ausgewertet zu werden.
      1. Das `x` in diesem Eigenschaftszugriff wird in einen Verweis auf die Variablen `x` ausgewertet.
      2. Dann druckt der Funktionsaufruf `f()` "F!" auf die Konsole und wird in die Zahl `2` ausgewertet.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung hat nun die Auswertung abgeschlossen; sein Ergebnis ist ein Variableneigenschaftsverweis: `x[2]`.
   3. Dann druckt der Funktionsaufruf `g()` "G!" auf die Konsole und wird in die Zahl `3` ausgewertet.
   4. Dieses `3` wird jetzt `x[2]` zugewiesen. (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` hat nun die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `x[2]` – der zufällig `3` ist. `x[2]` ist jetzt auf `3` festgelegt, und die Konsole hat zuerst "F!" und dann "G!" gedruckt.

### Vermeidung von Zuweisungsketten

Das Verketten von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen. Aus diesem Grund wird [das Verketten von Zuweisungen in derselben Anweisung abgeraten](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Einfügen eines Variablenketten in eine [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung funktioniert oft _nicht_. Nur die äußerste/linksste Variabel wird deklariert; andere Variablen innerhalb der Zuweisungskette werden von der `const`/`let`/`var`-Anweisung _nicht_ deklariert.

Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung deklariert scheinbar die Variablen `x`, `y`, und `z`.
Es deklariert jedoch tatsächlich nur die Variable `z`.
`y` und `x` sind entweder ungültige Verweise auf nicht vorhandene Variablen (im [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, noch schlimmer, würden implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "schluderhaften Modus")}} erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert basierend darauf zurück, ob der Vergleich wahr ist.
Die Operanden können numerische, Zeichenfolgen, logische oder [objektartige](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein.
Zeichenfolgen werden basierend auf der Standardlexikographie geordnet, wobei Unicode-Werte verwendet werden.
In den meisten Fällen, wenn die beiden Operanden nicht vom gleichen Typ sind, versucht JavaScript, sie in einen passenden Typ für den Vergleich zu konvertieren.
Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen bei der Typkonvertierung innerhalb der Vergleiche betreffen die `===` und `!==` Operatoren, die eine strenge Gleichheits- und Ungleichheitsprüfung durchführen.
Diese Operatoren versuchen nicht, die Operanden vor dem Gleichheitsprüfung in kompatible Typen zu konvertieren.
Die folgende Tabelle beschreibt die Vergleichsoperatoren im Kontext dieses Beispielcodes:

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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality">Streng gleich</a> (<code>===</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden gleich und vom gleichen Typ sind. Siehe auch {{jsxref("Object.is")}} und
        <a href="/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness">Gleichheit in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Streng ungleich</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ, aber nicht gleich sind, oder einen verschiedenen Typ haben.
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

> [!NOTE]
> `=>` ist kein Vergleichsoperator, sondern die Notation
> für [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetische Operatoren

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als seine Operanden und gibt einen einzelnen numerischen Wert zurück.
Die Standard-Arithmetik-Operatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren, wie sie es in den meisten anderen Programmiersprachen tun, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass die Division durch Null {{jsxref("Infinity")}} erzeugt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standard-Arithmetik-Operationen (`+`, `-`, `*`, `/`) bietet JavaScript die in der folgenden Tabelle aufgelisteten Arithmetik-Operatoren:

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
        Binärer Operator. Gibt den ganzzahligen Rest der Teilung der beiden Operanden zurück.
      </td>
      <td>12 % 5 gibt 2 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Increment">Inkrement</a> (<code>++</code>)
      </td>
      <td>
        Unärer Operator. Addiert eins zu seinem Operanden. Wenn als Präfix-Operator verwendet
        (<code>++x</code>), gibt er den Wert seines Operanden nach dem Hinzufügen von eins zurück;
        wenn er als Postfix-Operator verwendet wird (<code>x++</code>), gibt er den Wert
        seines Operanden vor dem Hinzufügen von eins zurück.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>++x</code> <code>x</code> auf 4
        und gibt 4 zurück; hingegen gibt <code>x++</code> 3 zurück und setzt dann <code>x</code> auf 4.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Decrement">Dekrement</a> (<code>--</code>)
      </td>
      <td>
        Unärer Operator. Subtrahiert eins von seinem Operanden.
        Der Rückgabewert entspricht dem des Inkrement-Operators.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>--x</code> <code>x</code> auf 2
        und gibt 2 zurück; hingegen gibt <code>x--</code> 3 zurück und setzt dann <code>x</code> auf 2.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unäre Negation</a> (<code>-</code>)
      </td>
      <td>Unärer Operator. Gibt die Negation seines Operanden zurück.</td>
      <td>Wenn <code>x</code> 3 ist, gibt <code>-x</code> -3 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäres Plus</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versucht, den Operanden in eine Zahl zu konvertieren, falls er es noch nicht ist.
      </td>
      <td>
        <p><code>+"3"</code> gibt <code>3</code> zurück.</p>
        <p><code>+true</code> gibt <code>1</code> zurück.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiationsoperator</a> (<code>**</code>)
      </td>
      <td>
        Berechnet die <code>Basis</code> zur <code>Exponent</code> Potenz,
        das heißt, <code>Basis^Exponent</code>.
      </td>
      <td>
        <code>2 ** 3</code> gibt <code>8</code> zurück.<br /><code>10 ** -1</code>
        gibt <code>0.1</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als eine Menge von 32 Bits (Nullen und Einsen) und nicht als Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun eine binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen binären Darstellungen durch, geben aber standardmäßige JavaScript-numerische Werte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren von JavaScript zusammen.

| Operator                                                                                                | Verwendung | Beschreibung                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                                | `a & b`    | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                                    |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                                | `a \| b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                                                    |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                                | `a ^ b`    | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweises NICHT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                              | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                        |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                             | `a << b`   | Verschiebt `a` in der binären Darstellung `b` Bits nach links und schiebt Nullen von rechts ein.                                                                                             |
| [Sign-weitergebende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)        | `a >> b`   | Verschiebt `a` in der binären Darstellung `b` Bits nach rechts und verwirft nach rechts verschobene Bits.                                                                                    |
| [Null-auffüllende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`  | Verschiebt `a` in der binären Darstellung `b` Bits nach rechts, verwirft nach rechts verschobene Bits und schiebt Nullen von links ein.                                                      |

### Bitweise logische Operatoren

Konzepte, die die bitweisen logischen Operatoren umfassen, funktionieren wie folgt:

- Die Operanden werden in zweiunddreißig-Bit-Ganzzahlen umgewandelt und werden durch eine Reihe von Bits (Nullen und Einsen) ausgedrückt. Zahlen mit mehr als 32 Bits verlieren ihre am meisten signifikanten Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bit in eine 32-Bit-Ganzzahl umgewandelt:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit und so weiter.
- Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Zum Beispiel ist die binäre Darstellung von neun 1001 und die binäre Darstellung von fünfzehn ist 1111. Wenn die bitweisen Operatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits mit dem Bitweisen NICHT Operator invertiert werden, und dass Werte mit dem am meisten signifikanten (links darstellenden) Bit, das auf 1 gesetzt ist, negative Zahlen darstellen (Zweierkomplementdarstellung). `~x` wird in denselben Wert ausgewertet, den `-x - 1` ergibt.

### Bitweise Verschiebeoperatoren

Die bitweisen Verschiebeoperatoren nehmen zwei Operanden: Der erste ist eine zu verschiebende Menge, und die zweite gibt die Anzahl der Bits an, um die der erste Operand verschoben werden soll. Die Richtung des Verschiebevorgangs wird durch den verwendeten Operator gesteuert.

Verschiebeoperatoren konvertieren ihre Operanden in zweiunddreißig-Bit-Ganzzahlen und liefern ein Ergebnis entweder des Typs {{jsxref("Number")}} oder {{jsxref("BigInt")}}: insbesondere, wenn der Typ des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück; andernfalls geben sie {{jsxref("Number")}} zurück.

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
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach links. Überzählige Bits, die nach links verschoben werden, werden verworfen. Null-Bits werden von rechts eingeschoben.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach links verschoben wird und zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Sign-weitergebende Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überzählige Bits, die nach rechts verschoben werden, werden verworfen. Kopien des am linksten stehenden Bits, werden von links eingeschoben.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts verschoben und zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, da das Vorzeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Null-auffüllende Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überzählige Bits, die nach rechts verschoben werden, werden verworfen. Null-Bits werden von links eingeschoben.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts verschoben wird und zu 100 wird, was 4 ist. Für nicht-negative Zahlen ergeben null-auffüllende Rechtsverschiebungen und sign-weitergebende Rechtsverschiebungen dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden normalerweise mit Booleschen Werten verwendet; wenn sie es tun, geben sie einen Booleschen Wert zurück. Die Operatoren `&&`, `||` und `??` geben tatsächlich den Wert eines ihrer angegebenen Operanden zurück. Wenn diese Operatoren mit nicht-booleschen Werten verwendet werden, können sie einen nicht-booleschen Wert zurückgeben. Als solche sind sie treffender als "Wertauswahloperatoren" bezeichnet. Die logischen Operatoren sind in der folgenden Tabelle beschrieben.

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
        andernfalls gibt es <code>expr2</code> zurück. Wenn beide Operanden true sind, gibt <code>expr1 &#x26;&#x26; expr2</code> <code>true</code> zurück; ansonsten <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> konvertiert werden kann;
        andernfalls gibt es <code>expr2</code> zurück. Somit gibt <code>||</code> <code>true</code> zurück, wenn einer der beiden Operanden true ist, und <code>false</code>, wenn beide false sind.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish coalescing operator</a> (<code>??</code>)
      </td>
      <td><code>expr1 ?? expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es weder <code>null</code> noch <code>undefined</code> ist; ansonsten gibt es <code>expr2</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logisches NICHT</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Gibt <code>false</code> zurück, wenn sein einzelner Operand in <code>true</code> konvertiert werden kann; ansonsten <code>true</code>.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, der leeren Zeichenfolge (`""`) oder `undefined` ausgewertet werden.

Der folgende Code zeigt Beispiele des `&&`-Operators (logisches UND).

```js
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
```

Der folgende Code zeigt Beispiele des `||`-Operators (logisches ODER).

```js
const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat
```

Der folgende Code zeigt Beispiele des `??`-Operators (nullish coalescing).

```js
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
```

Beachten Sie, wie `??` wie `||` funktioniert, aber es gibt den zweiten Ausdruck nur dann zurück, wenn der erste "{{Glossary("Nullish", "nullish")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||` für das Setzen von Standardwerten für Werte, die möglicherweise `null` oder `undefined` sind, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standardwert nicht anwendbar ist.

Der folgende Code zeigt Beispiele des `!`-Operators (logisches NICHT).

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie auf mögliche "Kurzschluss"-Auswertung unter den folgenden Regeln getestet:

- `falsy && anything` wird auf den falsy Wert evaluiert.
- `truthy || anything` wird auf den truthy Wert evaluiert.
- `nonNullish ?? anything` wird auf den nicht-nullish Wert evaluiert.

Die Logikregeln garantieren, dass diese Auswertungen immer korrekt sind. Beachten Sie, dass der _anything_ Teil der obigen Ausdrücke nicht ausgewertet wird, so dass die Nebenwirkungen des Ausführens nicht zum Tragen kommen.

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

Eine Ausnahme ist [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat und technisch gesehen keine "höchste Bit" hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht austauschbar — Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Das liegt daran, dass BigInt weder eine Teilmenge noch eine Obermenge von Zahlen ist. BigInts haben eine höhere Genauigkeit als Zahlen, wenn es um große ganze Zahlen geht, aber sie können keine Dezimalzahlen darstellen, sodass durch eine automatische Konvertierung auf beiden Seiten Genauigkeit verloren gehen könnte. Verwenden Sie eine explizite Konvertierung, um anzuzeigen, ob die Operation eine Zahl-Operation oder eine BigInt-Operation sein soll.

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

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenfolgenwerte angewendet werden können, fügt der Konkatenationsoperator (+) zwei Zeichenfolgenwerte zusammen und gibt eine weitere Zeichenfolge zurück, die die Vereinigung der beiden Operanden-Zeichenfolgen ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzzuweisungsoperator `+=` kann auch verwendet werden, um Zeichenfolgen zu concatenieren.

Zum Beispiel,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingungsoperator (ternär)

Der [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist der einzige JavaScript-Operator, der drei Operanden benötigt. Der Operator kann, basierend auf einer Bedingung, einen von zwei Werten annehmen. Die Syntax lautet:

```js-nolint
condition ? val1 : val2
```

Wenn `condition` wahr ist, hat der Operator den Wert von `val1`. Andernfalls hat er den Wert von `val2`. Sie können den Bedingungsoperator überall verwenden, wo Sie auch einen Standardoperator verwenden würden.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Dieser Ausdruck weist der Variablen `status` den Wert "adult" zu, wenn `age` achtzehn oder mehr ist. Andernfalls weist es den Wert "minor" `status` zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`) wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück. Dieser Operator wird in erster Linie in einer `for`-Schleife verwendet, um mehrere Variablen bei jedem Durchlauf der Schleife zu aktualisieren. Es wird als schlechter Stil angesehen, ihn anderswo zu verwenden, wenn es nicht notwendig ist. Oft können und sollten zwei separate Anweisungen anstelle dessen verwendet werden.

Zum Beispiel, wenn `a` ein zweidimensionales Array mit 10 Elementen an einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren. Der Code druckt die Werte der diagonalen Elemente im Array:

```js
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## Unäre Operatoren

Ein unäres Operator ist eine Operation mit nur einem Operanden.

### delete

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löscht die Eigenschaft eines Objekts. Die Syntax lautet:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts ist, `property` eine vorhandene Eigenschaft ist und `propertyKey` eine Zeichenfolge oder ein Symbol ist, das eine vorhandene Eigenschaft bezeichnet.

Wenn der `delete`-Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt. Ein nachfolgender Zugriff darauf gibt `undefined` zurück. Der `delete`-Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente aus ihnen zu `löschen`. Dies wird jedoch als schlechte Praxis angesehen - versuchen Sie, es zu vermeiden. Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indiziert. Um dieses Verhalten zu erreichen, ist es viel besser, das Element durch den Wert `undefined` zu überschreiben. Um tatsächlich das Array zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt eine Zeichenkette zurück, die den Typ des nicht ausgewerteten Operanden angibt. `operand` ist die Zeichenfolge, Variable, das Schlüsselwort oder Objekt, für das der Typ zurückgegeben werden soll. Die Klammern sind optional.

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

Für die Schlüsselwörter `true` und `null` gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder Zeichenfolge gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof` Operator den Typ des Wertes zurück, den die Eigenschaft enthält:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für Methoden und Funktionen gibt der `typeof` Operator folgende Ergebnisse zurück:

```js
typeof blur; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

Für vordefinierte Objekte gibt der `typeof` Operator folgende Ergebnisse zurück:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

Der [`void` operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt einen Ausdruck an, der ausgewertet wird, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck, der ausgewertet werden soll. Die Klammern, die den Ausdruck umgeben, sind optional, aber es ist ein guter Stil, sie zu verwenden, um Präzedenzprobleme zu vermeiden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt einen Booleschen Wert basierend darauf zurück, ob der Vergleich wahr ist.

### in

Der [`in` operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt vorhanden ist. Die Syntax lautet:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein Zeichenfolgen-, numerischer oder Symbole-Ausdruck ist, der einen Eigenschaftsnamen oder Array-Index darstellt, und `objectName` der Name eines Objekts ist.

Die folgenden Beispiele zeigen einige Verwendungen des `in`-Operators.

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

Der [`instanceof` operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true` zurück, wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax lautet:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen den `objectType` getestet werden soll, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen müssen. Zum Beispiel, wenn Sie Ausnahmen abfangen, können Sie je nach Art der ausgelösten Ausnahme in unterschiedliche Ausnahmebehandlungscodes wechseln.

Zum Beispiel verwendet der folgende Code `instanceof`, um zu bestimmen, ob `obj` ein `Map`-Objekt ist. Da `obj` ein `Map`-Objekt ist, werden die Anweisungen innerhalb des `if`-Blocks ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren arbeiten schließlich an einem oder mehreren grundlegenden Ausdrücken. Diese grundlegenden Ausdrücke schließen [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals) ein, aber es gibt noch einige andere Arten. Sie werden unten kurz eingeführt, und ihre Semantik wird ausführlich in den jeweiligen Referenzabschnitten beschrieben.

### this

Das Schlüsselwort [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) wird normalerweise innerhalb einer Funktion verwendet. Im Allgemeinen, wenn die Funktion an ein Objekt als Methode angehängt ist, bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wird. Es handelt sich um einen Ausdruck, der zum Objekt ausgewertet wird, sodass Sie alle zuvor eingeführten Objektoperationen verwenden können.

```js
this["propertyName"];
this.propertyName;
doSomething(this);
```

Zum Beispiel, nehmen wir an, eine Funktion wird wie folgt definiert:

```js
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
```

Wir können diese Funktion nun an ein Objekt anhängen, und es wird die Eigenschaften dieses Objekts verwenden, wenn es aufgerufen wird:

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

Der Gruppierungsoperator `( )` steuert die Reihenfolge der Auswertung in Ausdrücken. Zum Beispiel können Sie Multiplikation und Division überschreiben, um zuerst Addition auszuführen.

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

Die Syntax des [Eigenschaftszugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) ruft Eigenschaftswerte von Objekten ab, entweder mit Punktnotation oder Klammernotation.

```js
object.property;
object["property"];
```

Der Leitfaden für [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) geht ausführlicher auf Objekteigenschaften ein.

### Optionales Chaining

Die [optionale Chaining-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`) führt die verkettete Operation auf einem Objekt aus, wenn es definiert und nicht `null` ist, ansonsten wird die Operation abgebrochen und `undefined` zurückgegeben. Dies ermöglicht es Ihnen, auf einen Wert zuzugreifen, der möglicherweise `null` oder `undefined` ist, ohne einen `TypeError` auszulösen.

```js
maybeObject?.property;
maybeObject?.[property];
maybeFunction?.();
```

### new

Sie können den [`new` operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, um eine Instanz eines benutzerdefinierten Objekttyps oder eines der eingebauten Objekttypen zu erstellen. Verwenden Sie `new` wie folgt:

```js
const objectName = new ObjectType(param1, param2, /* …, */ paramN);
```

### super

Das Schlüsselwort [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen auf dem übergeordneten Objekt aufzurufen. Es ist nützlich mit [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um den übergeordneten Konstruktor aufzurufen, zum Beispiel.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
