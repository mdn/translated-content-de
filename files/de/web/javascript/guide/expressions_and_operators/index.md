---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt die Ausdrücke und Operatoren von JavaScript, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik, String, ternärer Operator und mehr.

Auf einem hohen Level ist ein _Ausdruck_ eine gültige Codeeinheit, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche, die Nebenwirkungen haben (wie das Zuweisen von Werten), und solche, die rein _auswerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`- _Operator_, um den Wert sieben der Variablen `x` zuzuweisen. Der Ausdruck selbst wertet zu `7` aus.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zusammenzuzählen und ergibt einen Wert, `7`. Wenn er allerdings nicht Teil eines größeren Konstrukts ist (beispielsweise einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen — das ist normalerweise ein Programmierfehler, weil die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele ebenfalls zeigen, werden alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie `=` und `+`. In diesem Abschnitt werden wir die folgenden Operatoren vorstellen:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt Operatoren](#bigint_operatoren)
- [String-Operatoren](#string-operatoren)
- [Bedingungs- (ternärer) Operator](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationsoperatoren](#relationsoperatoren)

Diese Operatoren verbinden Operanden, die entweder durch höherwertige Operatoren oder einen der [grundlegenden Ausdrücke](#grundlegende_ausdrücke) gebildet werden. Eine vollständige und detaillierte Liste der Operatoren und Ausdrücke ist auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) verfügbar.

Die _Priorität_ der Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlicher Reihenfolge erscheinen, würden beide Ausdrücke zu `7` führen, weil `*` Vorrang vor `+` hat, sodass der `*`-verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Priorität der Operatoren durch die Verwendung von Klammern überschreiben (die einen [gruppierten Ausdruck](#gruppierungsoperator) erzeugen — den grundlegenden Ausdruck). Eine komplette Tabelle der Operatorenpriorität sowie verschiedene Vorbehalte finden Sie auf der Seite [Operator Precedence Reference](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren, und einen speziellen ternären Operator, den bedingten Operator.
Ein binärer Operator erfordert zwei Operanden, einen vor dem Operator und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird als _infix_ binärer Operator bezeichnet, weil der Operator zwischen zwei Operanden platziert ist. Alle binären Operatoren in JavaScript sind infix.

Ein unärer Operator erfordert einen einzigen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die Form `operator operand` wird als _prefix_ unärer Operator bezeichnet, und die Form `operand operator` als _postfix_ unärer Operator. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof`, etc., sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operand basierend auf dem Wert seines rechten Operanden einen Wert zu.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzfassung für die in der folgenden Tabelle aufgelisteten Operationen sind:

| Name                                                                                                                | Kurzoperator  | Bedeutung          |
| ------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                                 | `x = f()`     | `x = f()`          |
| [Addition zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`    | `x = x + f()`      |
| [Subtraktion zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                          | `x -= f()`    | `x = x - f()`      |
| [Multiplikation zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`    | `x = x * f()`      |
| [Division zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`    | `x = x / f()`      |
| [Rest zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                   | `x %= f()`    | `x = x % f()`      |
| [Exponentiation zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                    | `x **= f()`   | `x = x ** f()`     |
| [Linksverschiebung zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`   | `x = x << f()`     |
| [Rechtsverschiebung zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`   | `x = x >> f()`     |
| [Unsigned-Rechtsverschiebung zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`  | `x = x >>> f()`    |
| [Bitweises UND zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                        | `x &= f()`    | `x = x & f()`      |
| [Bitweises XOR zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                        | `x ^= f()`    | `x = x ^ f()`      |
| [Bitweises ODER zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                        | `x \|= f()`   | `x = x \| f()`     |
| [Logisches UND zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                        | `x &&= f()`   | `x && (x = f())`   |
| [Logisches ODER zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                        | `x \|\|= f()` | `x \|\| (x = f())` |
| [Null-Koaleszenz zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)               | `x ??= f()`   | `x ?? (x = f())`   |

### Zuweisung an Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, kann die linke Seite eines Zuweisungsausdrucks Zuweisungen an Eigenschaften dieses Ausdrucks vornehmen.
Beispielsweise:

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

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, dann führen Zuweisungen an Eigenschaften dieses Ausdrucks zu keinen Zuweisungen:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wirft der obige Code einen Fehler, weil man keinen Eigenschaften von Primitiven zuweisen kann.

Es ist ein Fehler, Werte an unveränderbare Eigenschaften oder an Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen ist die [Destrukturierungs-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ein JavaScript-Ausdruck, der es ermöglicht, Daten aus Arrays oder Objekten mithilfe einer Syntax zu extrahieren, die den Konstruktionen von Array- und Objekt-Literalen ähnelt.

Ohne Destrukturierung erfordert es mehrere Anweisungen, um Werte aus Arrays und Objekten zu extrahieren:

```js
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

Mit Destrukturierung können Sie mehrere Werte in getrennte Variablen mit nur einer Anweisung extrahieren:

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

Jedoch, wie bei anderen Ausdrücken, werten Zuweisungsausdrücke wie `x = f()` zu einem Ergebniswert aus.
Obwohl dieser Ergebniswert üblicherweise nicht verwendet wird, kann er anschließend von einem anderen Ausdruck verwendet werden.

Das Verketteten von Zuweisungen oder das Verschachteln von Zuweisungen in andere Ausdrücke kann zu überraschendem Verhalten führen.
Aus diesem Grund raten einige JavaScript-Stilrichtlinien [davon ab, Zuweisungen zu verketten oder zu verschachteln](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).
Dennoch können Zuweisungsverketten und -verschachteln manchmal vorkommen, daher ist es wichtig, zu verstehen, wie sie funktionieren.

Indem ein Zuweisungsausdruck verkettet oder verschachtelt wird, kann sein Ergebnis selbst einer anderen Variablen zugewiesen werden.
Es kann protokolliert oder in einem Array-Literal oder Funktionsaufruf eingefügt werden, und so weiter.

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

Das Auswertungsergebnis entspricht dem Ausdruck rechts vom `=` Zeichen in der
"Bedeutung"-Spalte der Tabelle oben. Das bedeutet, dass `x = f()` in
was auch immer `f()`'s Ergebnis ist, auswertet, `x += f()` in die resultierende Summe `x + f()`,
`x **= f()` in die resultierende Potenz `x ** f()`, und so weiter.

Im Fall von logischen Zuweisungen, `x &&= f()`,
`x ||= f()`, und `x ??= f()`, ist der Rückgabewert der der
logischen Operation ohne Zuweisung, also `x && f()`,
`x || f()`, und `x ?? f()`, jeweils.

Beim Verketteten dieser Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren
wie Array-Literalen, werden die Zuweisungsausdrücke **rechts nach links** gruppiert
(sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **links nach rechts** ausgewertet.

Beachten Sie, dass bei allen Zuweisungsoperatoren außer `=` selbst,
die resultierenden Werte immer auf den Werten der Operanden _vor_
der Operation basieren.

Zum Beispiel, nehmen wir an, dass folgende Funktionen `f` und `g`
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

Betrachten wir diese drei Beispiele:

```js-nolint
y = x = f();
y = [f(), x = g()];
x[f()] = g();
```

#### Auswertungsbeispiel 1

`y = x = f()` ist gleichwertig mit `y = (x = f())`,
weil der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist.
Er wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wertet
      in eine Referenz auf die Variable genannt `y` aus.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wertet
         in eine Referenz auf die Variable genannt `x` aus.
      2. Der Funktionsaufruf `f()` gibt "F!" in der Konsole aus und
         wertet dann zur Zahl `2` aus.
      3. Dieses `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` hat jetzt die Auswertung abgeschlossen;
      sein Ergebnis ist der neue Wert von `x`, nämlich `2`.
   4. Dieses `2`-Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` hat jetzt die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `y` — der zufällig `2` ist.
   `x` und `y` sind auf `2` zugewiesen,
   und die Konsole hat "F!" ausgegeben.

#### Auswertungsbeispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wertet
      in eine Referenz auf die Variable genannt `y` aus.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` gibt "F!" in der Konsole aus und
         wertet dann zur Zahl `2` aus.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wertet
            in eine Referenz auf die Variable genannt `x` aus.
         2. Der Funktionsaufruf `g()` gibt "G!" in der Konsole aus und
            wertet dann zur Zahl `3` aus.
         3. Dieses `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` hat jetzt die Auswertung abgeschlossen;
         sein Ergebnis ist der neue Wert von `x`, welcher `3` ist.
         Dieses `3`-Ergebnis wird zum nächsten Element
         im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]`
      hat jetzt die Auswertung abgeschlossen;
      sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]` Array wird jetzt `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` hat
   jetzt die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `y` – welcher zufällig `[ 2, 3 ]` ist.
   `x` ist jetzt auf `3` zugewiesen,
   `y` ist jetzt auf `[ 2, 3 ]` zugewiesen,
   und die Konsole hat "F!" und dann "G!" ausgegeben.

#### Auswertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel setzt voraus, dass `x` bereits einem Objekt zugewiesen ist.
Für weitere Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaften Zugriff auf der linken Seite dieser Zuweisung
      beginnt mit der Auswertung.
      1. Das `x` in diesem Zugriff wertet
         in eine Referenz auf die Variable genannt `x` aus.
      2. Dann gibt der Funktionsaufruf `f()` "F!" in der Konsole aus und
         wertet dann zur Zahl `2` aus.
   2. Der `x[f()]`-Eigenschaften Zugriff auf dieser Zuweisung
      hat jetzt die Auswertung abgeschlossen;
      sein Ergebnis ist eine variable Eigenschaftenreferenz: `x[2]`.
   3. Dann gibt der Funktionsaufruf `g()` "G!" in der Konsole aus und
      wertet dann zur Zahl `3` aus.
   4. Dieses `3` wird jetzt `x[2]` zugewiesen.
      (Dieser Schritt wird nur dann erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` hat jetzt die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `x[2]` – der zufällig `3` ist.
   `x[2]` ist jetzt auf `3` zugewiesen,
   und die Konsole hat "F!" und dann "G!" ausgegeben.

### Verwenden Sie keine Zuweisungsketten

Das Verkettete von Zuweisungen oder das Verschachteln von Zuweisungen in andere Ausdrücke kann
zu überraschendem Verhalten führen. Aus diesem Grund wird [das Verkettete von Zuweisungen in derselben Anweisung nicht empfohlen](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Platzieren einer Variablendevikette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung funktioniert oft _nicht_. Nur die äußerste/linkeste Variable wird deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ durch die `const`/`let`/`var`-Anweisung deklariert.
Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung deklariert scheinbar die Variablen `x`, `y` und `z`.
Sie deklariert jedoch tatsächlich nur die Variable `z`.
`y` und `x` sind entweder ungültige Referenzen auf nicht vorhandene Variablen (im [Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "lockerem Modus")}} erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert basierend darauf zurück, ob der Vergleich wahr ist.
Die Operanden können numerische, stringische, logische oder [objektbasierte](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein.
Zeichenketten werden basierend auf der standardmäßigen lexikographischen Reihenfolge unter Verwendung von Unicode-Werten verglichen.
In den meisten Fällen, wenn die beiden Operanden nicht vom gleichen Typ sind, versucht JavaScript sie in einen angemessenen Typ für den Vergleich zu konvertieren.
Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen von der Konvertierung von Typen innerhalb von Vergleichen betreffen die `===` und `!==` Operatoren, die strikte Gleichheits- bzw. Ungleichheitsvergleiche durchführen.
Diese Operatoren versuchen nicht, die Operanden in kompatible Typen zu konvertieren, bevor sie die Gleichheit überprüfen.
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
      <th scope="col">Beispiele, die true zurückgeben</th>
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strikte Gleichheit</a> (<code>===</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden gleich und vom gleichen
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
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ, aber nicht gleich oder von einem unterschiedlichen Typ sind.
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
> für [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetische Operatoren

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als ihre Operanden und gibt einen einzelnen numerischen Wert zurück.
Die Standardarithmetik-Operatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass die Division durch Null {{jsxref("Infinity")}} produziert). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standardarithmetikoperationen (`+`, `-`, `*`, `/`) bietet JavaScript die in der folgenden Tabelle aufgelisteten arithmetischen Operatoren:

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
        Unärer Operator. Addiert eins zu seinem Operanden. Wenn als Präfix-Operator verwendet
        (<code>++x</code>), gibt er den Wert seines Operanden nach dem Hinzufügen von eins zurück;
        wenn er als Postfix-Operator verwendet wird (<code>x++</code>), gibt er den Wert
        seines Operanden vor dem Hinzufügen von eins zurück.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>++x</code> <code>x</code> auf 4
        und gibt 4 zurück, während <code>x++</code> 3 zurückgibt und erst danach <code>x</code> auf 4 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Decrement">Dekrement</a> (<code>--</code>)
      </td>
      <td>
        Unärer Operator. Subtrahiert eins von seinem Operanden.
        Der Rückgabewert ist analog zu dem des Inkrement-Operators.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>--x</code> <code>x</code> auf 2
        und gibt 2 zurück, während <code>x--</code> 3 zurückgibt und erst danach <code>x</code> auf 2 setzt.
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäres Plus</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versucht, <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">den Operanden in eine Zahl zu konvertieren</a>, falls er es nicht bereits ist.
      </td>
      <td>
        <p><code>+"3"</code> gibt <code>3</code> zurück.</p>
        <p><code>+true</code> gibt <code>1</code> zurück.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation-Operator</a> (<code>**</code>)
      </td>
      <td>
        Berechnet die <code>basis</code> zur <code>exponent</code>-Potenz,
        das heißt, <code>basis^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> gibt <code>8</code> zurück.<br /><code>10 ** -1</code>
        gibt <code>0.1</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als eine Menge von 32 Bits (Nullen und Einsen), anstatt als Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun eine Binärdarstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen Binärdarstellungen aus, geben jedoch Standard-JavaScript-Zahlenwerte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren in JavaScript zusammen.

| Operator                                                                                                  | Verwendung | Beschreibung                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                                  | `a & b`    | Gibt eine eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden eins sind.                                                                                      |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                                  | `a \| b`   | Gibt eine null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden null sind.                                                                                      |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                                  | `a ^ b`    | Gibt eine null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eine eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweises NICHT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                                | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                        |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                               | `a << b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach links und schiebt Nullen von rechts ein.                                                                                                 |
| [Zeichenvorschub-Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)             | `a >> b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft Bits, die verschoben wurden.                                                                                            |
| [Nullen auffüllende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft Bits, die verschoben wurden, und schiebt Nullen von links ein.                                                          |

### Bitweise logische Operatoren

Konzepteurlich arbeiten die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in Zweiunddreißig-Bit-Ganzzahlen konvertiert und durch eine Serie von Bits (Nullen und Einsen) ausgedrückt.
  Zahlen mit mehr als 32 Bits haben ihre signifikantesten Bits verworfen.
  Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit, und so weiter.
- Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Zum Beispiel ist die Binärdarstellung von neun 1001, und die Binärdarstellung von fünfzehn ist 1111.
Also sind, wenn die bitweisen Operatoren auf diese Werte angewendet werden, die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Beschreibungen in Binärform                           |
| --------- | -------- | ----------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                                  |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                                 |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                                  |
| `~15`     | `-16`    | `~ 0000 0000 ... 0000 1111 = 1111 1111 ... 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 ... 0000 1001 = 1111 1111 ... 1111 0110` |

Beachten Sie, dass alle 32 Bits mit dem Bitweisen NICHT-Operator invertiert werden und dass Werte mit dem am meisten signifikanten (linkesten) Bit, das auf 1 gesetzt ist, negative Zahlen darstellen (Zwei's-Komplement-Darstellung). `~x` wertet auf denselben Wert aus, den `-x - 1` ergibt.

### Bitweise Verschiebeoperatoren

Die bitweisen Verschiebeoperatoren benötigen zwei Operanden: der erste ist eine Menge, die verschoben wird, und der zweite gibt die Anzahl der Bitpositionen an, um die der erste Operand verschoben werden soll.
Die Richtung der Verschiebeoperation wird durch den verwendeten Operator gesteuert.

Verschiebeoperatoren konvertieren ihre Operanden in zweiunddreißig-bitige Ganzzahlen und geben ein Ergebnis des Typs {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: Insbesondere, wenn der Typ des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück; andernfalls geben sie {{jsxref("Number")}} zurück.

Die Verschiebeoperatoren sind in der folgenden Tabelle aufgelistet.

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
        Dieser Operator verschiebt den ersten Operanden die angegebene Anzahl von Bits nach links. Überzählige Bits, die nach links verschoben werden, werden verworfen. Null-Bits werden von rechts eingefügt.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach links verschoben 100100 ergibt, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Zeichenvorschub-Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden die angegebene Anzahl von Bits nach rechts. Überzählige Bits, die nach rechts verschoben werden, werden verworfen. Kopien des linken Bits werden von links eingefügt.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts verschoben 10 ergibt, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, weil das Vorzeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Nullen auffüllende Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden die angegebene Anzahl von Bits nach rechts. Überzählige Bits, die nach rechts verschoben werden, werden verworfen. Null-Bits werden von links eingefügt.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts verschoben 100 ergibt, was 4 ist. Bei nicht-negativen Zahlen ergeben Nullen auffüllende Rechtsverschiebung und zeichenvorschub-Rechtsverschiebung dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit booleschen (logischen) Werten verwendet; wenn sie es sind, geben sie einen booleschen Wert zurück.
Jedoch geben die Operatoren `&&`, `||` und `??` tatsächlich den Wert eines der angegebenen Operanden zurück, sodass wenn diese Operatoren mit nicht-boolschen Werten verwendet werden, sie einen nicht-booleschen Wert zurückgeben können. Daher werden sie besser als "Wertauswahloperatoren" bezeichnet.
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
        andernfalls gibt es <code>expr2</code> zurück. So gibt <code>&#x26;&#x26;</code> bei Verwendung mit booleschen
        Werten <code>true</code> zurück, wenn beide Operanden wahr sind; andernfalls gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> konvertiert werden kann;
        andernfalls gibt es <code>expr2</code> zurück. So gibt <code>||</code> bei Verwendung mit booleschen
        Werten <code>true</code> zurück, wenn entweder Operand wahr ist; wenn beide falsch sind, gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Null-Koaleszenzoperator</a> (<code>??</code>)
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

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, dem leeren String (`""`) oder `undefined` ausgewertet werden.

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

Der folgende Code zeigt Beispiele für den `??` (Null-Koaleszenz) Operator.

```js
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
```

Beachten Sie, wie `??` wie `||` funktioniert, aber es gibt nur den zweiten Ausdruck zurück, wenn der erste "nullish" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||` zum Setzen von Standards für Werte, die `null` oder `undefined` sein könnten, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht angewendet werden sollte.

Der folgende Code zeigt Beispiele für den `!` (logisches NICHT) Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Wenn logische Ausdrücke von links nach rechts ausgewertet werden, werden sie auf mögliche "Kurzschluss"-Auswertungen unter Verwendung der folgenden Regeln getestet:

- `falsy && irgendetwas` wird kurzgeschlossen zum falsy Wert ausgewertet.
- `truthy || irgendetwas` wird kurzgeschlossen zum truthy Wert ausgewertet.
- `nonNullish ?? irgendetwas` wird kurzgeschlossen zum non-nullish Wert ausgewertet.

Die Regeln der Logik garantieren, dass diese Auswertungen immer korrekt sind. Beachten Sie, dass der _irgendetwas_ Teil der obigen Ausdrücke nicht ausgewertet wird, sodass keine Seiteneffekte dabei stattfinden.

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

Eine Ausnahme ist der [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), der für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat, daher hat es technisch gesehen kein "höchstes Bit".

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig ersetzbar — Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder ein Teil- noch ein Obermenge von Zahlen ist. BigInts haben eine höhere Genauigkeit als Zahlen bei der Darstellung großer Ganzzahlen, können jedoch keine Dezimalstellen darstellen, sodass bei jeder Seite der impliziten Konvertierung eine Genauigkeit verloren gehen könnte. Verwenden Sie die explizite Konvertierung, um anzugeben, ob Sie wünschen, dass die Operation eine Zahlenoperation oder eine BigInt-Operation ist.

```js example-good
const a = Number(1n) + 2; // 3
const b = 1n + BigInt(2); // 3n
```

Sie können BigInts mit Zahlen vergleichen.

```js
const a = 1n > 2; // false
const b = 3 > 2n; // true
```

## String-Operatoren

Zusätzlich zu den Vergleichsoperatoren, die auf String-Werten verwendet werden können, verknüpft der Konkatenationsoperator (`+`) zwei String-Werte miteinander und gibt einen anderen String zurück, der die Vereinigung der zwei Operand Strings ist.

Beispielsweise,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzzuweisungsoperator `+=` kann ebenfalls verwendet werden, um Strings zu konkateniert.

Beispielsweise,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingungs- (ternärer) Operator

Der [bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
ist der einzige JavaScript-Operator, der drei Operanden benötigt.
Der Operator kann einen von zwei Werten basierend auf einer Bedingung annehmen.
Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn `condition` wahr ist, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Sie können den bedingten Operator überall verwenden, wo Sie einen Standard-Operator verwenden würden.

Beispielsweise,

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist der Variablen `status` den Wert "adult" zu, wenn
`age` achtzehn oder mehr ist. Andernfalls weist sie `status` den Wert "minor" zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich innerhalb einer `for`-Schleife verwendet, um mehrere Variablen jedes Mal, wenn die Schleife durchlaufen wird, zu aktualisieren.
Es gilt als schlechter Stil, ihn an anderen Stellen zu verwenden, wenn er nicht notwendig ist.
Oft können und sollten stattdessen zwei separate Anweisungen verwendet werden.

Beispielsweise, wenn `a` ein 2-dimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen auf einmal zu aktualisieren.
Der Code gibt die Werte der diagonalen Elemente im Array aus:

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

wobei `object` der Name eines Objekts ist, `property` eine existierende Eigenschaft und `propertyKey` entweder ein String oder Symbol ist, das auf eine existierende Eigenschaft verweist.

Wenn der `delete` Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Ein Zugriff darauf danach gibt `undefined` zurück.
Der `delete` Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente daraus zu `löschen`.
Dies gilt jedoch als schlechte Praxis — versuchen Sie, es zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indiziert.
Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt einen String zurück, der den Typ des unevaluierten Operanden angibt.
`operand` ist der String, die Variable, das Schlüsselwort oder das Objekt, für die/den der Typ zurückgegeben werden soll.
Die Klammern sind optional.

Angenommen, Sie definieren die folgenden Variablen:

```js
const myFun = () => 5 + 2;
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();
```

Der `typeof` Operator gibt folgende Ergebnisse für diese Variablen zurück:

```js
typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"
```

Für die Schlüsselwörter `true` und `null`, gibt der `typeof`
Operator die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder einen String, gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof` Operator den Typ des
von der Eigenschaft enthaltenen Wertes zurück:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für Methoden und Funktionen, gibt der `typeof` Operator Ergebnisse wie folgt zurück:

```js
typeof blur; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

Für vordefinierte Objekte gibt der `typeof` Operator Ergebnisse wie folgt zurück:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

Der [`void` Operator](/de/docs/Web/JavaScript/Reference/Operators/void) spezifiziert einen Ausdruck, der auszuwerten ist, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck, der ausgewertet wird.
Die Klammern, die den Ausdruck umgeben, sind optional, aber es ist gutes Stil, sie zu verwenden, um Vorrangprobleme zu vermeiden.

## Relationsoperatoren

Ein Relationsoperator vergleicht seine Operanden und gibt einen Booleschen Wert basierend darauf zurück, ob der Vergleich wahr ist.

### in

Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt enthalten ist.
Die Syntax ist:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein String-Nummern- oder Symbole-Ausdruck ist, der einen Eigenschaftsnamen oder Array-Index darstellt, und `objectName` der Name eines Objekts ist.

Die folgenden Beispiele zeigen einige Anwendungen des `in` Operators.

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
wenn das angegebene Objekt von dem angegebenen Objekttyp ist. Die Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet werden soll, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen müssen.
Zum Beispiel, wenn Sie Ausnahmen abfangen, können Sie in verschiedene Ausnahmebehandlungs-Code schnittigen, je nach dem Typ der geworfenen Ausnahme.

Zum Beispiel verwendet der folgende Code `instanceof`, um zu bestimmen, ob `obj` ein `Map`-Objekt ist. Da `obj` ein `Map`-Objekt ist, werden die Anweisungen im `if`-Block ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren arbeiten schließlich auf einem oder mehreren grundlegenden Ausdrücken. Diese grundlegenden Ausdrücke umfassen [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt auch einige andere Arten. Sie werden unten kurz eingeführt, und ihre Semantik wird in den jeweiligen Referenzabschnitten im Detail beschrieben.

### this

Das [`this` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this) wird üblicherweise innerhalb einer Funktion genutzt. Im Allgemeinen, wenn die Funktion an ein Objekt als Methode angehängt ist, bezieht sich `this` auf das Objekt, das die Methode aufgerufen hat. Es funktioniert wie ein versteckter Parameter, der an die Funktion übergeben wird. `this` ist ein Ausdruck, der in ein Objekt auswertet, sodass Sie alle Objektoperationen verwenden können, die wir eingeführt haben.

```js
this["propertyName"];
this.propertyName;
doSomething(this);
```

Zum Beispiel, nehmen wir an, eine Funktion ist wie folgt definiert:

```js
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
```

Wir können diese Funktion nun an ein Objekt anhängen, und es wird die Eigenschaften dieses Objekts nutzen, wenn es aufgerufen wird:

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

Der Gruppierungsoperator `( )` kontrolliert den Vorrang der Auswertung in
Ausdrücken. Zum Beispiel können Sie die Multiplikation und Division außer Kraft setzen, erst dann
Addition und Subtraktion, um die Addition als erste zu bewerten.

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

### Eigenschafts-Zugriff

Die [Eigenschafts-Zugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Syntax ruft Eigenschaftswerte von Objekten ab, indem entweder Punktnotation oder Klammernotation verwendet wird.

```js
object.property;
object["property"];
```

Das Arbeiten mit Objekten [guide](/de/docs/Web/JavaScript/Guide/Working_with_objects) geht näher auf Objekteigenschaften ein.

### Optionales Chaining

Die [optionale Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) Syntax (`?.`) führt die verkettete Operation auf einem Objekt aus, wenn es definiert und nicht-`null` ist, und überspringt ansonsten die Operation und gibt `undefined` zurück.
Dies ermöglicht Ihnen, auf einen Wert zu operieren, der möglicherweise `null` oder `undefined` ist, ohne dass ein `TypeError` ausgelöst wird.

```js
maybeObject?.property;
maybeObject?.[property];
maybeFunction?.();
```

### new

Sie können den [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, um eine Instanz eines benutzerdefinierten Objekttyps oder eines der eingebauten Objekttypen zu erstellen. Verwenden Sie `new` wie folgt:

```js
const objectName = new ObjectType(param1, param2, /* …, */ paramN);
```

### super

Das [`super` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen auf dem Elterobjekt eines Objekts aufzurufen.
Es ist nützlich, um mit [Klassen](/de/docs/Web/JavaScript/Reference/Classes) den Elternkonstruktor aufzurufen, zum Beispiel.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
