---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 06927abb9c3f434334729a6cc64010af9974d055
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

In diesem Kapitel werden JavaScript-Ausdrücke und -Operatoren beschrieben, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik-, String-, Ternär- und mehr.

Auf hoher Ebene ist ein _Ausdruck_ eine gültige Codeeinheit, die zu einem Wert ausgewertet wird. Es gibt zwei Arten von Ausdrücken: solche, die Nebeneffekte haben (wie das Zuweisen von Werten) und solche, die rein _auswerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den _Operator_ `=`, um den Wert sieben der Variable `x` zuzuweisen. Der Ausdruck selbst wird zu `7` ausgewertet.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den Operator `+`, um `3` und `4` zusammenzuzählen und einen Wert zu erzeugen, `7`. Wenn er jedoch nicht letztendlich Teil einer größeren Konstruktion ist (zum Beispiel einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird das Ergebnis sofort verworfen — dies ist normalerweise ein Programmierfehler, da die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele ebenfalls illustrieren, sind alle komplexen Ausdrücke durch _Operatoren_ wie `=` und `+` verbunden. In diesem Abschnitt stellen wir die folgenden Operatoren vor:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt-Operatoren](#bigint-operatoren)
- [String-Operatoren](#string-operatoren)
- [Bedingter (ternärer) Operator](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationsoperatoren](#relationsoperatoren)

Diese Operatoren verbinden Operanden, die entweder durch höherstufige Operatoren gebildet werden oder einen der [basalen Ausdrücke](#basisausdrücke) darstellen. Eine vollständige und detaillierte Liste der Operatoren und Ausdrücke finden Sie auch im [Referenzdokument](/de/docs/Web/JavaScript/Reference/Operators).

Die _Priorität_ von Operatoren bestimmt die Reihenfolge, in der sie bei der Bewertung eines Ausdrucks angewendet werden. Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Trotz der unterschiedlichen Reihenfolge von `*` und `+` würden beide Ausdrücke zu `7` führen, da `*` Vorrang vor `+` hat, sodass der durch `*` verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operatorpriorität durch die Verwendung von Klammern überschreiben (was einen [gruppierten Ausdruck](#gruppierungsoperator) erzeugt — den basalen Ausdruck). Eine vollständige Tabelle der Operatorpriorität sowie verschiedene Besonderheiten finden Sie auf der Seite [Operatorpriorität-Referenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript verfügt über _binäre_ und _unäre_ Operatoren sowie einen speziellen ternären Operator, den bedingten Operator.
Ein binärer Operator benötigt zwei Operanden, einen vor und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel, `3 + 4` oder `x * y`. Diese Form wird als _Infix_-binärer Operator bezeichnet, weil der Operator zwischen zwei Operanden gesetzt wird. Alle binären Operatoren in JavaScript sind Infix-Operatoren.

Ein unärer Operator benötigt einen einzelnen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel, `x++` oder `++x`. Die Form `operator operand` wird als _Präfix_-unärer Operator bezeichnet und die Form `operand operator` als _Postfix_-unärer Operator. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof` usw. sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinen linken Operanden basierend auf dem Wert seines rechten Operanden einen Wert zu.
Der Einfachzuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzform für die in der folgenden Tabelle aufgeführten Operationen sind:

| Name                                                                                                          | Kurzoperator  | Bedeutung          |
| ------------------------------------------------------------------------------------------------------------- | ------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                           | `x = f()`     | `x = f()`          |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                         | `x += f()`    | `x = x + f()`      |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                   | `x -= f()`    | `x = x - f()`      |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)             | `x *= f()`    | `x = x * f()`      |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                         | `x /= f()`    | `x = x / f()`      |
| [Restzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                             | `x %= f()`    | `x = x % f()`      |
| [Exponentiierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)            | `x **= f()`   | `x = x ** f()`     |
| [Linksschiebzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`   | `x = x << f()`     |
| [Rechtsschiebzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`   | `x = x >> f()`     |
| [Unsigned-Rechtsschiebzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`  | `x = x >>> f()`    |
| [Bitweises AND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                 | `x &= f()`    | `x = x & f()`      |
| [Bitweises XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                 | `x ^= f()`    | `x = x ^ f()`      |
| [Bitweises OR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                   | `x \|= f()`   | `x = x \| f()`     |
| [Logisches AND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                 | `x &&= f()`   | `x && (x = f())`   |
| [Logisches OR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                   | `x \|\|= f()` | `x \|\| (x = f())` |
| [Nullish coalescing-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)     | `x ??= f()`   | `x ?? (x = f())`   |

### Zuweisung an Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, kann die linke Seite eines Zuweisungsausdrucks Zuweisungen an Eigenschaften dieses Ausdrucks vornehmen.
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

Weitere Informationen über Objekte finden Sie im [Leitfaden zu Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, werden Zuweisungen an Eigenschaften dieses Ausdrucks nicht zugewiesen:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) löst der obige Code einen Fehler aus, da man keine Eigenschaften an primitive Daten zuweisen kann.

Es ist ein Fehler, Werten zuzuweisen, die unveränderliche Eigenschaften sind oder zu einem Ausdruck ohne Eigenschaften (`null` oder `undefined`).

### Destrukturierung

Für komplexere Zuweisungen ist die [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) eine JavaScript-Ausdruckssyntax, die es ermöglicht, Daten aus Arrays oder Objekten mit einer Syntax zu extrahieren, die der Konstruktion von Array- und
Objektliteralen ähnelt.

Ohne die Destrukturierung sind mehrere Anweisungen erforderlich, um Werte aus Arrays und Objekten zu extrahieren:

```js
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

Mit der Destrukturierung können Sie mit einer einzigen Anweisung mehrere Werte in separate Variablen extrahieren:

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

Wie andere Ausdrücke werden Zuweisungsausdrücke wie `x = f()` jedoch in ein Ergebnis ausgewertet.
Obwohl dieses Ergebnisergebnis in der Regel nicht verwendet wird, kann es dann von einem anderen Ausdruck verwendet werden.

Das Verketten oder Verschachteln von Zuweisungen in anderen Ausdrücken kann zu unerwartetem Verhalten führen.
Aus diesem Grund raten einige JavaScript-Stilrichtlinien [von Verkettungs- oder Verschachtelungszuweisungen ab](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).
Dennoch kann es zu Zuweisungsverketten und -verschachtelungen kommen, daher ist es wichtig zu verstehen, wie sie funktionieren.

Durch das Verketten oder Verschachteln eines Zuweisungsausdrucks kann das Ergebnis selbst einer anderen Variablen zugewiesen werden.
Es kann protokolliert werden, in einem Array-Literal oder Funktionsaufruf platziert werden und so weiter.

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

Das Auswertungsergebnis entspricht dem Ausdruck rechts von dem `=` Zeichen in der
"Bedeutungs"-Spalte der obigen Tabelle. Das bedeutet, dass `x = f()` in
das Ergebnis von `f()` ausgewertet wird, `x += f()` in die resultierende Summe `x + f()`,
`x **= f()` in die resultierende Potenz `x ** f()`, und so weiter.

Im Falle von logischen Zuweisungen, `x &&= f()`,
`x ||= f()`, und `x ??= f()`, ist der Rückgabewert der
logischen Operation ohne die Zuweisung, also `x && f()`,
`x || f()`, und `x ?? f()`, jeweils.

Beim Verketten dieser Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren
wie Array-Literale werden die Zuweisungsausdrücke **von rechts nach links gruppiert**
(sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts bewertet**.

Beachten Sie, dass für alle Zuweisungsoperatoren außer `=` selbst
die resultierenden Werte immer auf den Werten der Operanden _vor_
der Operation basieren.

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

`y = x = f()` ist gleichbedeutend mit `y = (x = f())`,
weil der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist.
Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird
      zu einer Referenz auf die Variable namens `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wird
         zu einer Referenz auf die Variable namens `x` ausgewertet.
      2. Der Funktionsaufruf `f()` druckt "F!" auf die Konsole und
         wird dann in die Zahl `2` ausgewertet.
      3. Das Ergebnis `2` von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` wurde nun ausgewertet;
      sein Ergebnis ist der neue Wert von `x`, nämlich `2`.
   4. Dieses Ergebnis `2` wird wiederum `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` wurde nun ausgewertet;
   sein Ergebnis ist der neue Wert von `y` – der zufällig `2` ist.
   `x` und `y` sind auf `2` gesetzt,
   und die Konsole hat "F!" gedruckt.

#### Auswertungsbeispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` in dieser Zuweisung links wird
      zu einer Referenz auf die Variable namens `y` ausgewertet.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` druckt "F!" auf die Konsole und
         wird dann in die Zahl `2` ausgewertet.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wird
            zu einer Referenz auf die Variable namens `x` ausgewertet.
         2. Der Funktionsaufruf `g()` druckt "G!" auf die Konsole und
            wird dann in die Zahl `3` ausgewertet.
         3. Das Ergebnis `3` von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` wurde nun ausgewertet;
         sein Ergebnis ist der neue Wert von `x`, nämlich `3`.
         Dieses Ergebnis `3` wird das nächste Element
         im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]`
      wurde nun ausgewertet;
      sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses Array `[ 2, 3 ]` wird `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` wurde
   nun ausgewertet;
   sein Ergebnis ist der neue Wert von `y` – der zufällig `[ 2, 3 ]` ist.
   `x` ist jetzt auf `3` gesetzt,
   `y` ist jetzt auf `[ 2, 3 ]` gesetzt,
   und die Konsole hat "F!" und dann "G!" gedruckt.

#### Auswertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel geht davon aus, dass `x` bereits einem Objekt zugewiesen wurde.
Weitere Informationen zu Objekten finden Sie im [Leitfaden zu Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaftsaufruf auf der linken
      Seite dieser Zuweisung beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftsaufruf wird
         zu einer Referenz auf die Variable namens `x` ausgewertet.
      2. Dann druckt der Funktionsaufruf `f()` "F!" auf die Konsole und
         wird dann in die Zahl `2` ausgewertet.
   2. Der `x[f()]`-Eigenschaftsaufruf in dieser Zuweisung
      wurde nun ausgewertet;
      sein Ergebnis ist eine Variableigenschaftsreferenz: `x[2]`.
   3. Dann druckt der Funktionsaufruf `g()` "G!" auf die Konsole und
      wird dann in die Zahl `3` ausgewertet.
   4. Diese `3` wird jetzt `x[2]` zugewiesen.
      (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` wurde nun ausgewertet;
   sein Ergebnis ist der neue Wert von `x[2]` – das zufällig `3` ist.
   `x[2]` ist jetzt auf `3` gesetzt,
   und die Konsole hat "F!" und dann "G!" gedruckt.

### Vermeiden von Zuweisungsketten

Das Verketten oder Verschachteln von Zuweisungen in anderen Ausdrücken kann
zu unerwartetem Verhalten führen. Aus diesem Grund wird
[das Verketten von Zuweisungen in derselben Anweisung nicht empfohlen](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Setzen einer Variablenkette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung funktioniert häufig _nicht_. Nur die äußerste/leftmost-Variablen würde deklariert werden; andere Variablen innerhalb der Zuweisungskette werden von der `const`/`let`/`var`-Anweisung _nicht_ deklariert.
Beispielsweise:

```js-nolint
const z = y = x = f();
```

Diese Anweisung gibt den Anschein, die Variablen `x`, `y` und `z` zu deklarieren.
Tatsächlich wird jedoch nur die Variable `z` deklariert.
`y` und `x` sind entweder ungültige Referenzen auf nicht vorhandene Variablen (im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden in [sloppy mode](/de/docs/Glossary/Sloppy_mode) [Globale Variablen](/de/docs/Glossary/Global_variable) für `x` und `y` implizit erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und liefert basierend darauf einen logischen Wert, ob der Vergleich wahr ist.
Die Operanden können numerische, string, logische oder [objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein.
Strings werden basierend auf standardmäßiger lexikografischer Ordnung unter Verwendung von Unicode-Werten verglichen.
In den meisten Fällen versucht JavaScript, die Operanden zu einem geeigneten Typ für den Vergleich zu konvertieren, wenn die beiden Operanden nicht vom gleichen Typ sind.
Dieses Verhalten führt im Allgemeinen zu einem numerischen Vergleich der Operanden.
Die einzigen Ausnahmen von der Typumwandlung innerhalb von Vergleichen betreffen die Operatoren `===` und `!==`, die einen strikten Gleichheits- und Ungleichheitsvergleich durchführen.
Diese Operatoren versuchen nicht, die Operanden in kompatible Typen zu konvertieren, bevor Sie die Gleichheit prüfen.
Die folgende Tabelle beschreibt die Vergleichsoperatoren anhand dieser Beispiellösung:

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
        Gibt <code>true</code> zurück, wenn die Operanden gleich und vom gleichen
        Typ sind. Siehe auch {{jsxref("Object.is")}} und
        <a href="/de/docs/Web/JavaScript/Equality_comparisons_and_sameness">Gleichheit in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strikte Ungleichheit</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ sind, aber nicht gleich, oder von unterschiedlichem Typ sind.
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

> **Hinweis:** `=>` ist kein Vergleichsoperator, sondern die Notation
> für [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetische Operatoren

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als ihre Operanden und gibt einen einzelnen numerischen Wert zurück.
Die Standard-Arithmetikoperatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass die Division durch Null {{jsxref("Infinity")}} erzeugt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standard-Arithmetikoperationen (`+`, `-`, `*`, `/`) bietet JavaScript die in der folgenden Tabelle aufgeführten arithmetischen Operatoren:

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
        Binärer Operator. Gibt den ganzzahligen Rest der Division der zwei Operanden zurück.
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
        wenn als Postfix-Operator verwendet (<code>x++</code>), gibt er den Wert seines
        Operanden vor dem Hinzufügen von eins zurück.
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
        Der Rückgabewert ist analog zu dem für den Inkrementoperator.
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
      <td>Wenn <code>x</code> 3 ist, gibt <code>-x</code> -3 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäres Plus</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versucht den Operanden zu <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">einem numerischen Wert zu konvertieren</a>, wenn er nicht bereits einer ist.
      </td>
      <td>
        <p><code>+"3"</code> ergibt <code>3</code>.</p>
        <p><code>+true</code> ergibt <code>1</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiierungsoperator</a> (<code>**</code>)
      </td>
      <td>
        Berechnet das <code>base</code> zur <code>exponent</code> Potenz,
        das heißt, <code>basis^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> ergibt <code>8</code>.<br /><code>10 ** -1</code>
        ergibt <code>0.1</code>.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als eine Menge von 32 Bits (nullen und einsen), anstatt als dezimale, hexadezimale oder oktale Zahlen. Zum Beispiel hat die Dezimalzahl neun eine
binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen an solchen
binären Darstellungen aus, aber sie geben Standard-JavaScript-numerische Werte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren von JavaScript zusammen.

| Operator                                                                                                   | Verwendung | Beschreibung                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                                   | `a & b`    | Gibt eine eins an jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden eins sind.                                                                                 |
| [Bitweises OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                                     | `a \| b`   | Gibt eine null an jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden null sind.                                                                                 |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                                   | `a ^ b`    | Gibt eine null an jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eins an jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweises NOT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                                   | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                   |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                                | `a << b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach links und schiebt Nullen von rechts ein.                                                                                            |
| [Vorzeichenerhaltende Rechtsschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)            | `a >> b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts und verwirft Bits, die verschoben werden.                                                                                    |
| [Rechtsverschiebung mit Nulleinstellung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft Bits, die verschoben werden, und schiebt Nullen von links ein.                                                     |

### Logische Bitweise Operatoren

Konzeptionell funktionieren die logischen bitweisen Operatoren wie folgt:

- Die Operanden werden in zweiunddreißig-Bit-Ganzzahlen konvertiert und durch eine Anzahl von Bits (nullen und einsen) ausgedrückt.
  Zahlen mit mehr als 32 Bits bekommen ihre signifikantesten Bits verworfen.
  Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit mit erstem Bit, zweites Bit mit zweitem Bit und so weiter.
- Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Zum Beispiel ist die binäre Darstellung von neun 1001 und die binäre Darstellung von fünfzehn 1111.
Wenn die bitweisen Operatoren auf diese Werte angewendet werden, lauten die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits unter Verwendung des bitweisen NOT-Operators invertiert werden und dass Werte mit
dem am weitesten links stehenden Bit, das auf 1 gesetzt ist, negative Zahlen darstellen
(Zweierkomplementdarstellung). `~x` ergibt den gleichen Wert wie
`-x - 1`.

### Bitverschiebungsoperatoren

Die Bitverschiebungsoperatoren nehmen zwei Operanden: Der erste ist eine Menge, die verschoben werden soll, und der zweite gibt die Anzahl der Bitpositionen an, um die der erste Operand
verschoben werden soll.
Die Richtung der Verschiebungsoperation wird durch den verwendeten Operator gesteuert.

Verschiebungsoperatoren konvertieren ihre Operanden in Zweiunddreißig-Bit-Ganzzahlen und geben ein Ergebnis entweder des Typs {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: Insbesondere, wenn der Typ
des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück;
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Left_shift">Linksschiebung</a><br />(<code>&#x3C;&#x3C;</code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        links. Überschüssige Bits, die nach links verschoben werden, werden verworfen. Null-Bits
        werden von rechts eingefügt.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, da 1001 um 2 Bits nach
        links verschoben wird und zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Vorzeichenerhaltende Rechtsschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Kopien des
        am weitesten links stehenden Bits werden von links eingefügt.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, da 1001 um 2 Bits nach rechts
        verschoben und zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, da das Vorzeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Rechtsverschiebung mit Nulleinstellung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Null-Bits
        werden von links eingefügt.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, da 10011 um 2 Bits nach rechts
        verschoben wird und zu 100 wird, was 4 ist. Bei nicht-negativen Zahlen ergeben Rechtsverschiebungen mit Nulleinstellung
        und Vorzeichenerhaltende Rechtsschiebung dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit Boolean (logischen) Werten verwendet; wenn sie es sind, geben sie einen Boolean-Wert zurück.
Die Operatoren `&&`, `||` und `??` geben jedoch tatsächlich den Wert eines der angegebenen Operanden zurück, sodass, wenn diese
Operatoren mit nicht-Boolean-Werten verwendet werden, sie einen nicht-Boolean-Wert zurückgeben können. Daher sind sie besser als "Wertaustwahl-Operatoren" bezeichnet.
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
        Gibt <code>expr1</code> zurück, wenn es in <code>false</code> umgewandelt werden kann;
        andernfalls wird <code>expr2</code> zurückgegeben. So gibt <code>&#x26;&#x26;</code>
        bei Verwendung mit Boolean-Werten <code>true</code> zurück, wenn beide
        Operanden wahr sind; andernfalls wird <code>false</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches OR</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> umgewandelt werden kann;
        andernfalls wird <code>expr2</code> zurückgegeben. So gibt <code>||</code>
        bei Verwendung mit Boolean-Werten <code>true</code> zurück, wenn entweder Operand
        wahr ist; wenn beide falsch sind, wird <code>false</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish coalescing operator</a> (<code>??</code>)
      </td>
      <td><code>expr1 ?? expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es weder <code>null</code> noch
        <code>undefined</code> ist; andernfalls wird <code>expr2</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logisches NICHT</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Gibt <code>false</code> zurück, wenn sein einzelner Operand in <code>true</code> umgewandelt
        werden kann; andernfalls wird <code>true</code> zurückgegeben.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, dem leeren String (`""`) oder `undefined` auswerten.

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

Der folgende Code zeigt Beispiele für den `||` (logisches OR) Operator.

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

Beachten Sie, wie `??` wie `||` funktioniert, aber es gibt nur den zweiten Ausdruck zurück, wenn der erste "nullish" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||` zum Setzen von Standardwerten für Werte, die `null` oder `undefined` sein könnten, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht angewendet werden sollte.

Der folgende Code zeigt Beispiele für den `!` (logisches NICHT) Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie unter Verwendung der folgenden Regeln auf mögliche "Kurzschluss"-Auswertungen geprüft:

- `falsy && anything` wird kurzschlussmäßig auf den falsy Wert ausgewertet.
- `truthy || anything` wird kurzschlussmäßig auf den truthy Wert ausgewertet.
- `nonNullish ?? anything` wird kurzschlussmäßig auf den non-nullish Wert ausgewertet.

Die Regeln der Logik garantieren, dass diese Auswertungen immer korrekt sind. Beachten Sie, dass der _anything_ Teil der obigen Ausdrücke nicht ausgewertet wird, sodass alle Seiteneffekte
davon nicht wirksam werden.

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

Eine Ausnahme ist die [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat und technisch gesehen kein "höchstes Bit" hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig ersetzbar — Sie können sie in Berechnungen nicht mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder eine Untermenge noch eine Obermenge von Zahlen ist. BigInts haben eine höhere Präzision als Zahlen, wenn sie große Ganzzahlen darstellen, können jedoch keine Dezimalzahlen darstellen. Daher könnte die implizite Konvertierung auf beiden Seiten Präzision verlieren. Verwenden Sie eine explizite Konvertierung, um anzugeben, ob Sie die Operation als Zahl-Operation oder als BigInt-Operation durchführen möchten.

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

Zusätzlich zu den Vergleichsoperatoren, die auf String-Werte angewendet werden können, verbindet der Verkettungsoperator (+) zwei String-Werte miteinander und gibt einen weiteren String zurück, der die Vereinigung der beiden Operanden-Strings ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzzuweisungsoperator `+=` kann auch verwendet werden, um Strings zu verketten.

Zum Beispiel,

```js
let mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
```

## Bedingter (ternärer) Operator

Der [bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
ist der einzige JavaScript-Operator, der drei Operanden benötigt.
Der Operator kann basierend auf einer Bedingung einen von zwei Werten haben.
Die Syntax lautet:

```js-nolint
condition ? val1 : val2
```

Wenn `condition` wahr ist, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Sie können den bedingten Operator überall verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Dieser Ausdruck weist der Variablen `status` den Wert "adult" zu, wenn
`age` achtzehn oder mehr ist. Andernfalls weist er `status` den Wert "minor" zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich innerhalb einer `for`-Schleife verwendet, um mehrere Variablen bei jedem Durchlaufen der Schleife zu aktualisieren.
Er wird als schlechter Stil angesehen, ihn anderswo zu verwenden, wenn es nicht notwendig ist.
Oft können und sollten stattdessen zwei separate Anweisungen verwendet werden.

Beispielsweise, wenn `a` ein zweidimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren.
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

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator löscht eine Eigenschaft eines Objekts.
Die Syntax lautet:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts ist, `property` eine bestehende Eigenschaft ist und `propertyKey` ein String oder Symbol ist, das auf eine bestehende Eigenschaft verweist.

Wenn der `delete`-Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Der Zugriff darauf führt anschließend zu `undefined`.
Der `delete`-Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente aus ihnen zu `löschen`.
Dies wird jedoch als schlechte Praxis angesehen — versuchen Sie es zu vermeiden.
Beim Löschen einer Array-Eigenschaft wird die Länge des Arrays nicht beeinflusst und andere Elemente werden nicht neu zugeordnet.
Um dieses Verhalten anzustreben, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt einen String zurück, der den Typ des nicht ausgewerteten Operanden angibt.
`operand` ist der String, die Variable, das Schlüsselwort oder das Objekt, für das der Typ zurückgegeben werden soll.
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

Für die Schlüsselwörter `true` und `null` gibt der `typeof`-Operator die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder einen String gibt der `typeof`-Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Bei Eigenschaftswerten gibt der `typeof`-Operator den Typ des Werts der
Eigenschaft zurück:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Bei Methoden und Funktionen gibt der `typeof`-Operator Ergebnisse wie folgt zurück:

```js
typeof blur; // returns "function"
typeof eval; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

Bei vordefinierten Objekten gibt der `typeof`-Operator Ergebnisse wie folgt zurück:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

Der [`void`-Operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt an, dass ein Ausdruck ohne Rückgabe eines Werts ausgewertet werden soll. `expression` ist ein JavaScript-Ausdruck zum Auswerten.
Die Klammern um den Ausdruck sind optional, aber es ist guter Stil, sie zur Vermeidung von Vorrangproblemen zu verwenden.

## Relationsoperatoren

Ein Relationsoperator vergleicht seine Operanden und gibt einen Boolean-Wert basierend darauf zurück, ob der Vergleich wahr ist.

### in

Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt ist.
Die Syntax lautet:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein String, eine Zahl oder ein Symbol ist, das einen Eigenschaftsnamen oder einen Array-Index darstellt, und `objectName` der Name eines Objekts ist.

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
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true
```

### instanceof

Der [`instanceof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true` zurück,
wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax lautet:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet werden soll, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie {{jsxref("Date")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie zur Laufzeit den Typ eines Objekts bestätigen müssen.
Zum Beispiel, wenn Ausnahmen gefangen werden, können Sie zu unterschiedlichem Ausnahme-Behandlungscode verzweigen, abhängig vom Typ der ausgelösten Ausnahme.

Zum Beispiel verwendet der folgende Code `instanceof`, um zu bestimmen, ob `theDay` ein `Date`-Objekt ist. Da `theDay` ein `Date`-Objekt ist, werden die Anweisungen in der `if`-Anweisung ausgeführt.

```js
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

## Basisausdrücke

Alle Operatoren arbeiten schließlich auf einem oder mehreren basalen Ausdrücken. Diese basalen Ausdrücke umfassen [Identifikatoren](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt noch einige andere Arten. Sie werden kurz vorgestellt, und ihre Semantik wird im Detail in ihren jeweiligen Referenzabschnitten beschrieben.

### this

Verwenden Sie das [`this` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen.
Im Allgemeinen bezieht sich `this` auf das aufrufende Objekt in einer Methode.
Verwenden Sie `this` entweder mit der Punktnotation oder der Klammernotation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, eine Funktion namens `validate` überprüft eine Eigenschaft `value` eines Objekts, gegebenen das Objekt und die hohen und niedrigen Werte:

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    console.log("Invalid Value!");
  }
}
```

Sie könnten `validate` in jedem `onChange`-Ereignishandler des Formularelements aufrufen, indem Sie `this` verwenden, um es an das Formularelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Vorrangregelung in Ausdrücken. Zum Beispiel können Sie das Überschreiben von Multiplikation und Division zuerst, dann Addition und Subtraktion steuern, um Addition zuerst auszuwerten.

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

### Eigenschafts-Zugreifer

Die [Eigenschafts-Zugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)-Syntax erhält Eigenschaftswerte auf Objekten, entweder unter Verwendung von Punktnotation oder Klammernotation.

```js
object.property;
object["property"];
```

Der [Leitfaden zu Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) geht ausführlicher auf Objekteigenschaften ein.

### Optionale Verkettung

Die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Syntax (`?.`) führt die verkettete Operation auf einem Objekt aus, wenn es definiert und nicht `null` ist, und bricht sonst die Operation ab und gibt `undefined` zurück.
Dies ermöglicht es Ihnen, auf einen Wert zuzugreifen, der `null` oder `undefined` sein könnte, ohne einen `TypeError` zu verursachen.

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

Das [`super` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen im übergeordneten Objekt eines Objekts aufzurufen.
Es ist nützlich bei [Klassendefinitionen](/de/docs/Web/JavaScript/Reference/Classes), um beispielsweise den Elter-Konstruktor aufzurufen.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}
