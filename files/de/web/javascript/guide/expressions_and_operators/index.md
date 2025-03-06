---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt JavaScripts Ausdrücke und Operatoren, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik, Zeichenketten, ternär und mehr.

Auf hoher Ebene ist ein _Ausdruck_ eine gültige Code-Einheit, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche mit Nebeneffekten (wie Wertzuweisungen) und solche, die rein _bewerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`-Operator, um den Wert sieben der Variablen `x` zuzuweisen. Der Ausdruck selbst ergibt `7`.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zusammenzuzählen und ergibt den Wert `7`. Wenn er jedoch nicht Teil einer größeren Konstruktion wird (zum Beispiel einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen — normalerweise ein Programmierfehler, da die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele auch zeigen, werden alle komplexen Ausdrücke durch _Operatoren_ wie `=` und `+` verbunden. In diesem Abschnitt stellen wir die folgenden Operatoren vor:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt-Operatoren](#bigint-operatoren)
- [Zeichenkettenoperatoren](#zeichenkettenoperatoren)
- [Bedingungsoperator (ternär)](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verbinden Operanden, die entweder von Operatoren mit höherer Priorität gebildet werden oder von einem der [Basis-Ausdrücke](#basis-ausdrücke). Eine vollständige und detaillierte Liste von Operatoren und Ausdrücken ist ebenfalls in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) verfügbar.

Die _Priorität_ von Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlicher Reihenfolge vorkommen, würden beide Ausdrücke zu `7` führen, da `*` Vorrang vor `+` hat, sodass der `*`-verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operatorpriorität überschreiben, indem Sie Klammern verwenden (was einen [gruppierten Ausdruck](#gruppierungsoperator) — den Basis-Ausdruck — erstellt). Um eine vollständige Tabelle der Operatorpriorität sowie verschiedene Besonderheiten zu sehen, sehen Sie auf der Seite [Operator Precedence Reference](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren und einen speziellen ternären Operator, den Bedingungsoperator. Ein binärer Operator benötigt zwei Operanden, einen vor und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird ein _infix_ binärer Operator genannt, weil der Operator zwischen zwei Operanden steht. Alle binären Operatoren in JavaScript sind Infix.

Ein unärer Operator benötigt einen einzigen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die `operator operand`-Form wird ein _prefix_ unärer Operator genannt, und die `operand operator`-Form wird ein _postfix_ unärer Operator genannt. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof` usw., sind Prefix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist basierend auf dem Wert seines rechten Operanden einen Wert seinem linken Operanden zu.
Der einfache Zuweisungsoperator ist das Gleichheitszeichen (`=`), das den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzform für die Operationen sind, die in der folgenden Tabelle aufgeführt sind:

| Name                                                                                                                 | Kurzform-Operator | Bedeutung          |
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
| [Bitweises UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                        | `x &= f()`        | `x = x & f()`      |
| [Bitweises XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                        | `x ^= f()`        | `x = x ^ f()`      |
| [Bitweises ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                        | `x \|= f()`       | `x = x \| f()`     |
| [Logisches UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                        | `x &&= f()`       | `x && (x = f())`   |
| [Logisches ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                        | `x \|\|= f()`     | `x \|\| (x = f())` |
| [Nullish Coalescing-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)            | `x ??= f()`       | `x ?? (x = f())`   |

### Zuweisung an Eigenschaften

Wenn ein Ausdruck auf ein [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) auswertet, kann die linke Seite eines Zuweisungsausdrucks Zuweisungen an Eigenschaften dieses Ausdrucks vornehmen.
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

Für weitere Informationen über Objekte, lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht auf ein Objekt auswertet, dann ordnen Zuweisungen an Eigenschaften dieses Ausdrucks keine Zuweisungen zu:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wird der obige Code fehlschlagen, da man Eigenschaften nicht an Primitive zuweisen kann.

Es ist ein Fehler, Werte an unveränderbare Eigenschaften oder an Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen ermöglicht die [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) eine JavaScript-Ausdrucksweise, die es ermöglicht, Daten aus Arrays oder Objekten unter Verwendung einer Syntax zu extrahieren, die der Konstruktion von Array- und Objektliteralen ähnelt.

Ohne Destrukturierung benötigt es mehrere Anweisungen, um Werte aus Arrays und Objekten zu extrahieren:

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

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration (d.h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen verwendet.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Aber wie andere Ausdrücke auch, wird ein Zuweisungsausdruck wie `x = f()` in einen Ergebnisausdruck ausgewertet.
Obwohl dieses Resultat normalerweise nicht verwendet wird, kann es dann von einem anderen Ausdruck verwendet werden.

Das Ketten oder Verschachteln von Zuweisungen in andere Ausdrücke kann zu überraschendem Verhalten führen.
Aus diesem Grund [raten einige JavaScript-Stilrichtlinien vom Ketten oder Verschachteln von Zuweisungen ab](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).
Nichtsdestotrotz können Zuweisungsketten und Verschachtelungen manchmal auftreten, daher ist es wichtig, zu verstehen, wie sie funktionieren.

Durch das Ketten oder Verschachteln eines Zuweisungsausdrucks kann dessen Resultat selbst einer anderen Variablen zugewiesen werden.
Es kann geloggt werden, es kann in einem Array-Literal oder Funktionsaufruf verwendet werden und so weiter.

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

Das Auswertungsergebnis entspricht dem Ausdruck rechts vom `=`-Zeichen in der
Spalte "Bedeutung" der obigen Tabelle. Das bedeutet, dass `x = f()` ausgewertet wird in das
Ergebnis von `f()`, `x += f()` ausgewertet wird in die resultierende Summe `x + f()`,
`x **= f()` ausgewertet wird in die resultierende Potenz `x ** f()`, und so weiter.

Bei logischen Zuweisungen sind `x &&= f()`,
`x ||= f()`, und `x ??= f()`, das Rückgabewert ist jener der
logischen Operation ohne Zuweisung, also `x && f()`,
`x || f()`, und `x ?? f()`, jeweils.

Wenn diese Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren wie Array-Literale verkettet werden,
werden die Zuweisungsausdrücke **von rechts nach links gruppiert**
(sie sind [rückwärts assoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts ausgewertet**.

Beachten Sie, dass sich bei allen anderen Zuweisungsoperatoren außer `=` selbst
die resultierenden Werte immer auf die Werte der Operanden _vor_ der
Operation basieren.

Angenommen, die folgenden Funktionen `f` und `g`
sowie die Variablen `x` und `y` wurden deklariert:

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

`y = x = f()` entspricht `y = (x = f())`,
weil der Zuweisungsoperator `=` [rückwärts assoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist.
Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird
      zu einer Referenz auf die Variable namens `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wird
         zu einer Referenz auf die Variable namens `x` ausgewertet.
      2. Der Funktionsaufruf `f()` gibt "F!" auf der Konsole aus und
         wird dann zu der Zahl `2` ausgewertet.
      3. Dieses `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` ist nun fertig ausgewertet;
      sein Resultat ist der neue Wert von `x`, welcher `2` ist.
   4. Dieses `2`-Resultat wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` ist nun fertig ausgewertet;
   sein Resultat ist der neue Wert von `y` — welcher `2` ist.
   `x` und `y` sind zu `2` zugewiesen,
   und die Konsole hat "F!" ausgegeben.

#### Auswertungsbeispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird
      zu einer Referenz auf die Variable namens `y` ausgewertet.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` gibt "F!" auf der Konsole aus und
         wird dann zu der Zahl `2` ausgewertet.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wird
            zu einer Referenz auf die Variable namens `x` ausgewertet.
         2. Der Funktionsaufruf `g()` gibt "G!" auf der Konsole aus und
            wird dann zu der Zahl `3` ausgewertet.
         3. Dieses `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` ist nun fertig ausgewertet;
         sein Resultat ist der neue Wert von `x`, welcher `3` ist.
         Dieses `3`-Resultat wird das nächste Element
         im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]`
      ist nun fertig ausgewertet;
      sein Resultat ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird nun `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` ist
   nun fertig ausgewertet;
   sein Resultat ist der neue Wert von `y` — welcher `[ 2, 3 ]` ist.
   `x` ist nun zu `3` zugewiesen,
   `y` ist nun zu `[ 2, 3 ]` zugewiesen,
   und die Konsole hat "F!" dann "G!" ausgegeben.

#### Auswertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel geht davon aus, dass `x` bereits einem Objekt zugewiesen wurde.
Für weitere Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaftszugriff auf der linken Seite dieser Zuweisung
      beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftszugriff wird
         zu einer Referenz auf die Variable namens `x` ausgewertet.
      2. Dann gibt der Funktionsaufruf `f()` "F!" auf der Konsole aus und
         wird dann zu der Zahl `2` ausgewertet.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung
      ist nun fertig ausgewertet;
      sein Resultat ist eine variable Eigenschaftsreferenz: `x[2]`.
   3. Dann gibt der Funktionsaufruf `g()` "G!" auf der Konsole aus und
      wird dann zu der Zahl `3` ausgewertet.
   4. Dieses `3` wird nun `x[2]` zugewiesen.
      (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` ist nun fertig ausgewertet;
   sein Resultat ist der neue Wert von `x[2]` — welcher `3` ist.
   `x[2]` ist nun zu `3` zugewiesen,
   und die Konsole hat "F!" dann "G!" ausgegeben.

### Vermeiden von Zuweisungsketten

Das Ketten oder Verschachteln von Zuweisungen in andere Ausdrücke kann
zu überraschendem Verhalten führen. Aus diesem Grund wird davon abgeraten,
[Zuweisungen im gleichen Ausdruck zu verketteln](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Platzieren einer Variablenkette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung funktioniert oft nicht. Nur die äußerste/linkeste Variable würde deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ durch die `const`/`let`/`var`-Anweisung deklariert.
Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung deklariert scheinbar die Variablen `x`, `y` und `z`.
Tatsächlich deklariert sie jedoch nur die Variable `z`.
`y` und `x` sind entweder ungültige Referenzen auf nicht existierende Variablen (im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "sloppy mode")}} erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert zurück, basierend darauf, ob der Vergleich wahr ist.
Die Operanden können numerische, string, logische oder [objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein.
Strings werden basierend auf standardmäßiger lexikografischer Ordnung verglichen, wobei Unicode-Werte verwendet werden.
In den meisten Fällen, wenn die beiden Operanden nicht vom gleichen Typ sind, versucht JavaScript, sie in einen geeigneten Typ für den Vergleich zu konvertieren.
Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen von der Typkonvertierung innerhalb von Vergleichen betreffen die `===`- und `!==`-Operatoren, die strikte Gleichheits- und Ungleichheitsvergleiche durchführen.
Diese Operatoren versuchen nicht, die Operanden vor dem Überprüfen der Gleichheit in kompatible Typen zu konvertieren.
Die folgende Tabelle beschreibt die Vergleichsoperatoren in Bezug auf diesen Beispielcode:

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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Inequality">Ungleich</a> (<code>!=</code>)
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
        Gibt <code>true</code> zurück, wenn die Operanden gleich und vom selben Typ sind.
        Siehe auch {{jsxref("Object.is")}} und
        <a href="/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness">Gleichheit in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strikt ungleich</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom selben Typ, aber nicht gleich sind oder wenn sie von verschiedenen Typen sind.
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
        Gibt <code>true</code> zurück, wenn der linke Operand größer ist als der rechte Operand.
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
        Gibt <code>true</code> zurück, wenn der linke Operand kleiner ist als der rechte Operand.
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

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als Operanden und gibt einen einzelnen numerischen Wert zurück.
Die Standard-Arithmetikoperatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren so, wie sie es in den meisten anderen Programmiersprachen tun, wenn sie mit Gleitzahlen verwendet werden (insbesondere beachten Sie, dass die Division durch null {{jsxref("Infinity")}} ergibt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standard-Arithmetikoperationen (`+`, `-`, `*`, `/`), bietet JavaScript die in der folgenden Tabelle aufgeführten arithmetischen Operatoren:

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
      <td>12 % 5 ergibt 2.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Increment">Inkrement</a> (<code>++</code>)
      </td>
      <td>
        Unärer Operator. Addiert eins zu seinem Operanden. Wird er als Präfix-Operator
        (<code>++x</code>) verwendet, gibt er den Wert seines Operanden nach der Addition von eins zurück;
        wird er als Postfix-Operator (<code>x++</code>) verwendet, gibt er den Wert seines Operanden
        vor der Addition von eins zurück.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>++x</code> <code>x</code> auf 4
        und gibt 4 zurück, während <code>x++</code> 3 zurückgibt und danach <code>x</code> auf 4 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Decrement">Dekrement</a> (<code>--</code>)
      </td>
      <td>
        Unärer Operator. Subtrahiert eins von seinem Operanden.
        Der Rückgabewert ist analog zu dem beim Inkrement-Operator.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>--x</code> <code>x</code> auf 2
        und gibt 2 zurück, während <code>x--</code> 3 zurückgibt und danach <code>x</code> auf 2 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unäres Minus</a> (<code>-</code>)
      </td>
      <td>Unärer Operator. Gibt die Negation seines Operanden zurück.</td>
      <td>Wenn <code>x</code> 3 ist, gibt <code>-x</code> -3 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäres Plus</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versucht, den Operanden in eine Zahl
        <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">zu konvertieren</a>, falls er noch keine ist.
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
        Berechnet die <code>Basis</code> hoch <code>Exponent</code>,
        das heißt <code>base^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> ergibt <code>8</code>.<br /><code>10 ** -1</code>
        ergibt <code>0.1</code>.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als eine Reihe von 32 Bits (Nullen und Einsen), anstatt als dezimale, hexadezimale oder oktale Zahlen. Zum Beispiel hat die dezimale Zahl neun eine
binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen binären Darstellungen durch, aber sie geben standardmäßige JavaScript-numerische Werte zurück.

Die folgende Tabelle fasst JavaScripts bitweise Operatoren zusammen.

| Operator                                                                                            | Verwendung | Beschreibung                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                            | `a & b`    | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Eins sind.                                                                                      |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                            | `a \| b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Null sind.                                                                                      |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                            | `a ^ b`    | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweise NOT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                             | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                        |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                         | `a << b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach links, schiebt Nullen von rechts hinein.                                                                                                 |
| [Zeichenübernehmende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)   | `a >> b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft Bits, die verschoben werden.                                                                                            |
| [Nullfüllende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft Bits, die verschoben werden, und schiebt Nullen von links hinein.                                                       |

### Bitweise logische Operatoren

Konzeptionell arbeiten die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in zweiunddreißig Bit-Integer konvertiert und durch eine Reihe von Bits (Nullen und Einsen) ausgedrückt. Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit mit erstem Bit, zweites Bit mit zweitem Bit usw.
- Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird Bit für Bit konstruiert.

Zum Beispiel ist die binäre Darstellung von neun 1001, und die binäre Darstellung von fünfzehn ist 1111.
Wenn die bitweisen Operatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits mit dem Bitweisen NOT-Operator invertiert werden und dass Werte mit dem bedeutendsten (linken) Bit, das auf 1 gesetzt ist, negative Zahlen darstellen (Zweierkomplement-Darstellung). `~x` ergibt denselben Wert wie `-x - 1`.

### Bitverschiebungsoperatoren

Die bitweisen Verschiebungsoperatoren nehmen zwei Operanden: Der erste ist eine Menge, die verschoben werden soll, und der zweite gibt die Anzahl der Bitpositionen an, um die der erste Operand verschoben werden soll.|
Die Richtung der Verschiebungsoperation wird durch den verwendeten Operator gesteuert.

Verschiebungsoperatoren konvertieren ihre Operanden in zweiunddreißig Bit-Integer und geben ein Ergebnis vom Typ {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: Insbesondere, wenn der Typ des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück;|
ansonsten geben sie {{jsxref("Number")}} zurück.

Die Verschiebungsoperatoren sind in der folgenden Tabelle aufgeführt.

<table class="fullwidth-table">
  <caption>
    Bitverschiebungsoperatoren
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
        links. Überschüssige nach links verschobene Bits werden verworfen. Null-Bits werden
        von rechts eingefügt.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach
        links verschoben zu 100100 wird, welches 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Zeichenübernehmende Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überschüssige nach rechts verschobene Bits werden verworfen. Kopien
        des linksten Bits werden von links eingefügt.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts
        verschoben zu 10 wird, welches 2 ist. Ebenso ergibt <code>-9>>2</code> -3, da das Zeichen beibehalten wird.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Nullfüllende Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überschüssige nach rechts verschobene Bits werden verworfen. Null-Bits
        werden von links eingefügt.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts
        verschoben zu 100 wird, welches 4 ist. Für nicht-negative Zahlen ergeben Nullfüllende Rechtsverschiebung
        und Zeichenübernehmende Rechtsverschiebung dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit Booleschen (logischen) Werten verwendet; wenn sie es sind, geben sie einen Booleschen Wert zurück.
Jedoch geben die `&&`, `||` und `??` Operatoren tatsächlich den Wert eines ihrer angegebenen Operanden zurück, sodass diese
Operatoren mit Nicht-Booleschen Werten verwendet werden, können sie einen Nicht-Booleschen Wert zurückgeben. Daher sind sie genauer als "Wertaushalwaunterator" zu bezeichnen.
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
        Gibt <code>expr1</code> zurück, wenn es zu <code>false</code> konvertiert werden kann;
        andernfalls gibt es <code>expr2</code> zurück. Daher, wenn es mit Booleschen
        Werten verwendet wird, gibt <code>&#x26;&#x26;</code> <code>true</code> zurück, wenn beide
        Operanden wahr sind; ansonsten wird <code>false</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es zu <code>true</code> konvertiert werden kann;
        andernfalls gibt es <code>expr2</code> zurück. Daher gibt <code>||</code>, wenn
        es mit Booleschen Werten verwendet wird, <code>true</code> zurück, wenn entweder Operanden
        wahr ist; wenn beide falsch sind, wird <code>false</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish Coalescing-Operator</a> (<code>??</code>)
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
        Gibt <code>false</code> zurück, wenn sein einzelner Operand zu
        <code>true</code> konvertiert werden kann; andernfalls gibt er <code>true</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die zu `false` konvertiert werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, dem leeren String (`""`) oder `undefined` auswerten.

Der folgende Code zeigt Beispiele des `&&` (logisches UND)-Operators.

```js
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
```

Der folgende Code zeigt Beispiele des `||` (logisches ODER)-Operators.

```js
const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat
```

Der folgende Code zeigt Beispiele des `??` (Nullish Coalescing)-Operators.

```js
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
```

Beachten Sie, wie `??` wie `||` funktioniert, aber es gibt nur den zweiten Ausdruck zurück, wenn der erste "{{Glossary("Nullish", "nullish")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||`, um Standardwerte für Werte festzulegen, die `null` oder `undefined` sein könnten, besonders wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht angewendet werden sollte.

Der folgende Code zeigt Beispiele des `!` (logisches NICHT)-Operators.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie nach möglichen "Kurzschluss"-Auswertungen unter Verwendung der folgenden Regeln getestet:

- `falsy && anything` wird kurzschlussartig zum falsy-Wert ausgewertet.
- `truthy || anything` wird kurzschlussartig zum truthy-Wert ausgewertet.
- `nonNullish ?? anything` wird kurzschlussartig zum nicht-nullish Wert ausgewertet.

Die Logikregeln garantieren, dass diese Auswertungen immer korrekt sind. Beachten Sie, dass der _anything_-Teil der obigen Ausdrücke nicht ausgewertet wird, sodass jegliche Nebeneffekte des so Umgehenden nicht eintreten.

## BigInt-Operatoren

Die meisten Operatoren, die zwischen Zahlen verwendet werden können, können auch zwischen [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werten verwendet werden.

```js
// BigInt addition
const a = 1n + 2n; // 3n
// Division with BigInts round towards zero
const b = 1n / 2n; // 0n
// Bitwise operations with BigInts do not truncate either side
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

Eine Ausnahme ist [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat, sodass er technisch gesehen kein "höchstes Bit" hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig austauschbar — Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder eine Teilmenge noch eine Obermenge von Zahlen ist. BigInts haben eine höhere Präzision als Zahlen bei der Darstellung großer Ganzzahlen, können jedoch keine Dezimalzahlen darstellen, sodass eine implizite Konvertierung in beide Richtungen Präzision verlieren könnte. Verwenden Sie eine explizite Konvertierung, um anzuzeigen, ob Sie wünschen, dass die Operation eine Zahlenoperation oder eine BigInt-Operation ist.

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

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenkettenwerte angewendet werden können, verknüpft der Verkettungsoperator (+) zwei Zeichenkettenwerte miteinander und gibt eine weitere Zeichenkette zurück, die die Vereinigung der beiden Operanden-Zeichenketten ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzzuweisungsoperator `+=` kann auch zum Verknüpfen von Zeichenketten verwendet werden.

Zum Beispiel,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingungsoperator (ternär)

Der [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
ist der einzige JavaScript-Operator, der drei Operanden verwendet.
Der Operator kann basierend auf einer Bedingung einen von zwei Werten haben.
Die Syntax lautet:

```js-nolint
condition ? val1 : val2
```

Wenn `condition` wahr ist, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Sie können den Bedingungsoperator überall verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist der Variablen `status` den Wert "adult" zu, wenn
`age` achtzehn oder mehr ist. Andernfalls weist sie `status` den Wert "minor" zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich innerhalb einer `for`-Schleife verwendet, um mehrere Variablen jedes Mal durch die Schleife zu aktualisieren.
Es wird als schlechter Stil angesehen, ihn anderswo zu verwenden, wenn es nicht erforderlich ist.
Oft können und sollten zwei separate Anweisungen anstelle davon verwendet werden.

Zum Beispiel, wenn `a` ein zweidimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren.
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

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator löscht eine Eigenschaft eines Objekts.
Die Syntax lautet:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts ist, `property` eine bestehende Eigenschaft ist und `propertyKey` ein String oder Symbol ist, das auf eine bestehende Eigenschaft verweist.

Wenn der `delete`-Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Der Versuch, danach darauf zuzugreifen, ergibt `undefined`.
Der `delete`-Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente daraus zu löschen.
Dies wird jedoch als schlechte Praxis angesehen — versuchen Sie, es zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indiziert.
Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt einen String zurück, der den Typ des nicht ausgewerteten Operanden angibt.
`operand` ist der String, die Variable, das Schlüsselwort oder das Objekt, für welches der Typ zurückgegeben werden soll.
Die Klammern sind optional.

Angenommen, Sie definieren die folgenden Variablen:

```js
const myFun = new Function("5 + 2");
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

Für die Schlüsselwörter `true` und `null`, gibt der `typeof`
Operator die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder einen String gibt der `typeof`-Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof`-Operator den Typ des Wertes zurück, den
die Eigenschaft enthält:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für Methoden und Funktionen gibt der `typeof`-Operator Ergebnisse wie folgt zurück:

```js
typeof blur; // returns "function"
typeof eval; // returns "function"
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

Der [`void` operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt an, dass ein Ausdruck ausgewertet werden soll, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck, der ausgewertet werden soll.
Die Klammern um den Ausdruck sind optional, aber es ist guter Stil, sie zur Vermeidung von Prioritätsproblemen zu verwenden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt einen Booleschen Wert zurück, basierend darauf, ob der Vergleich wahr ist.

### in

Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt vorhanden ist.
Die Syntax lautet:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein String, eine Zahl oder Ausdruck ist, der einen Eigenschaftsnamen oder Array-Index darstellt, und `objectName` der Name eines Objekts ist.

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

Der [`instanceof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true`
zurück, wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax lautet:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet werden soll, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen müssen.
Zum Beispiel, wenn Ausnahmen abgefangen werden, können Sie zu verschiedenen Ausnahmebehandlungscodes verzweigen, abhängig vom Typ der geworfenen Ausnahme.

Zum Beispiel verwendet der folgende Code `instanceof`, um zu bestimmen, ob `obj` ein `Map`-Objekt ist. Da `obj` ein `Map`-Objekt ist, werden die Anweisungen innerhalb des `if`-Blocks ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Basis-Ausdrücke

Alle Operatoren arbeiten letztendlich mit einem oder mehreren Basis-Ausdrücken. Diese Basis-Ausdrücke schließen [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals) ein, es gibt jedoch auch noch einige andere Arten. Sie werden kurz unten eingeführt, und ihre Semantik wird im Detail in ihren jeweiligen Referenzabschnitten beschrieben.

### this

Verwenden Sie das [`this` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen.
Im Allgemeinen bezieht sich `this` auf das aufrufende Objekt in einer Methode.
Verwenden Sie `this` entweder mit der Punkt- oder Klammernnotation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, eine Funktion namens `validate` validiert die `value`-Eigenschaft eines Objekts, gegeben das Objekt und die hohen und niedrigen Werte:

```js
function validate(obj, lowVal, highVal) {
  if (obj.value < lowVal || obj.value > highVal) {
    console.log("Invalid Value!");
  }
}
```

Sie könnten `validate` im `onChange`-Event-Handler jedes Formularelements aufrufen, indem Sie `this` verwenden, um es zum Formularelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Evaluationspriorität in
Ausdrücken. Zum Beispiel können Sie Multiplikation und Division überschreiben, dann kann die
Addition und Subtraktion zuerst ausgewertet werden.

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

### Eigenschaften-Accessor

Der [Eigenschaften-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)-Syntax erhält Eigenschaftswerte von Objekten, entweder mit Punktnotation oder Klammernnotation.

```js
object.property;
object["property"];
```

Der [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects)-Leitfaden geht detaillierter auf Objekteigenschaften ein.

### Optionale Verkettung

Die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Syntax (`?.`) führt die verkettete Operation auf einem Objekt aus, wenn es definiert und nicht `null` ist, und schließt andernfalls die Operation kurz und gibt `undefined` zurück.
Dies ermöglicht es, auf einen Wert zu operieren, der `null` oder `undefined` sein kann, ohne einen `TypeError` zu verursachen.

```js
maybeObject?.property;
maybeObject?.[property];
maybeFunction?.();
```

### new

Sie können den [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, um eine Instanz eines benutzerdefinierten Objekttyps oder eines der integrierten Objekttypen zu erstellen. Verwenden Sie `new` wie folgt:

```js
const objectName = new ObjectType(param1, param2, /* …, */ paramN);
```

### super

Das [`super` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen des Elternteils eines Objekts aufzurufen.
Es ist nützlich für die Verwendung mit [Klassen](/de/docs/Web/JavaScript/Reference/Classes) um den Elternkonstruktor aufzurufen, zum Beispiel.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
