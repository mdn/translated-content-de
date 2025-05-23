---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt JavaScripts Ausdrücke und Operatoren, einschließlich Zuweisungs-, Vergleichs-, arithmetische, bitweise, logische, String-, ternäre Operatoren und mehr.

Auf hoher Ebene ist ein _Ausdruck_ eine gültige Codeeinheit, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: jene mit Seiteneffekten (wie das Zuweisen von Werten) und jene, die lediglich _auswerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`-Operator, um den Wert sieben der Variablen `x` zuzuweisen. Der Ausdruck selbst wertet sich zu `7`.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zu addieren und ergibt einen Wert, `7`. Ist er jedoch nicht Teil einer größeren Konstruktion (zum Beispiel einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen — das ist normalerweise ein Programmierfehler, da die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele auch zeigen, werden alle komplexen Ausdrücke durch _Operatoren_ verknüpft, wie `=` und `+`. In diesem Abschnitt werden wir die folgenden Operatoren einführen:

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
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verknüpfen Operanden, die entweder von Operatoren höherer Priorität gebildet werden oder einer der [grundlegenden Ausdrücke](#grundlegende_ausdrücke) sind. Eine vollständige und detaillierte Liste von Operatoren und Ausdrücken ist auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) verfügbar.

Die _Priorität_ von Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewandt werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlicher Reihenfolge kommen, würden beide Ausdrücke `7` ergeben, da `*` Vorrang über `+` hat, sodass der `*`-verkettete Ausdruck immer zuerst ausgewertet wird. Sie können die Operatorpräzedenz mit Klammern überschreiben (die einen [gruppierten Ausdruck](#gruppierungsoperator) erzeugen — der grundlegende Ausdruck). Um eine vollständige Tabelle der Operatorpräzedenz sowie verschiedene Warnhinweise zu sehen, besuchen Sie die Seite [Operatorpräzedenz-Referenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren und einen speziellen ternären Operator, den bedingten Operator.
Ein binärer Operator benötigt zwei Operanden, einen vor dem Operator und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird als _infix_ binärer Operator bezeichnet, da der Operator zwischen zwei Operanden platziert ist. Alle binären Operatoren in JavaScript sind infix.

Ein unärer Operator benötigt einen einzigen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die `operator operand`-Form wird als _Präfix_-unärer Operator bezeichnet, und die `operand operator`-Form wird als _Postfix_-unärer Operator bezeichnet. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof`, usw., sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden basierend auf dem Wert seines rechten Operanden einen Wert zu.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` auf `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die Kurzformen für die Operationen sind, die in der folgenden Tabelle aufgelistet sind:

| Name                                                                                                                        | Kurzform-Operator | Bedeutung          |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                                         | `x = f()`         | `x = f()`          |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                       | `x += f()`        | `x = x + f()`      |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                                 | `x -= f()`        | `x = x - f()`      |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                           | `x *= f()`        | `x = x * f()`      |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                       | `x /= f()`        | `x = x / f()`      |
| [Restwertzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                       | `x %= f()`        | `x = x % f()`      |
| [Exponentialzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                               | `x **= f()`       | `x = x ** f()`     |
| [Linksverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                            | `x <<= f()`       | `x = x << f()`     |
| [Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                          | `x >>= f()`       | `x = x >> f()`     |
| [Nicht signierte Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`      | `x = x >>> f()`    |
| [Bitweise UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                                | `x &= f()`        | `x = x & f()`      |
| [Bitweise XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                                | `x ^= f()`        | `x = x ^ f()`      |
| [Bitweise ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                                | `x \|= f()`       | `x = x \| f()`     |
| [Logisches UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                               | `x &&= f()`       | `x && (x = f())`   |
| [Logisches ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                               | `x \|\|= f()`     | `x \|\| (x = f())` |
| [Nullish coalescing-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)                   | `x ??= f()`       | `x ?? (x = f())`   |

### Zuweisungen zu Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, kann die linke Seite eines Zuweisungsausdrucks Zuweisungen zu Eigenschaften dieses Ausdrucks machen.
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

Für weitere Informationen über Objekte lesen Sie den [Leitfaden zu Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, dann führen Zuweisungen zu Eigenschaften dieses Ausdrucks nicht zu einer Zuweisung:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) löst der obige Code einen Fehler aus, da man Eigenschaften nicht auf Primitiven zuweisen kann.

Es ist ein Fehler, Werte an nicht modifizierbare Eigenschaften oder an Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen ist die [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) eine JavaScript-Syntax, die es ermöglicht, Daten aus Arrays oder Objekten zu extrahieren, indem eine Syntax verwendet wird, die der Konstruktion von Array- und Objekt-Literalen ähnelt.

Ohne Destrukturierung erfordert es mehrere Anweisungen, um Werte aus Arrays und Objekten zu extrahieren:

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

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration verwendet (d.h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Wie andere Ausdrücke werten sich jedoch auch Zuweisungsausdrücke wie `x = f()` zu einem Ergebniswert aus.
Obwohl dieser Ergebniswert in der Regel nicht verwendet wird, kann er dann von einem anderen Ausdruck verwendet werden.

Das Ketten von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen.
Aus diesem Grund [wird in einigen JavaScript-Stilrichtlinien empfohlen, das Ketten oder Verschachteln von Zuweisungen zu vermeiden](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).
Dennoch können Zuweisungsketten und Verschachtelungen manchmal vorkommen, daher ist es wichtig, verstehen zu können, wie sie funktionieren.

Durch das Ketten oder Verschachteln eines Zuweisungsausdrucks kann das Ergebnis selbst einer anderen Variablen zugewiesen werden.
Es kann protokolliert, in einem Array-Literal oder Funktionsaufruf platziert werden, und so weiter.

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

Das Auswertungsergebnis entspricht dem Ausdruck rechts vom `=`-Zeichen in der Spalte "Bedeutung" der obigen Tabelle.
Das bedeutet, dass `x = f()` sich zu dem Ergebniswert von `f()` auswertet, `x += f()` sich zu der resultierenden Summe `x + f()` und `x **= f()` zu der resultierenden Potenz `x ** f()`, und so weiter.

Im Falle von logischen Zuweisungen sind `x &&= f()`, `x ||= f()` und `x ??= f()` der Rückgabewert der logischen Operation ohne Zuweisung, also `x && f()`, `x || f()` und `x ?? f()` entsprechend.

Beim Ketten dieser Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren wie Array-Literale werden die Zuweisungsausdrücke **von rechts nach links gruppiert** (sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), sie werden jedoch **von links nach rechts ausgewertet**.

Beachten Sie, dass bei allen Zuweisungsoperatoren außer `=` selbst die resultierenden Werte immer auf den Werten der Operanden _vor_ der Operation basieren.

Angenommen, die folgenden Funktionen `f` und `g` und die Variablen `x` und `y` sind deklariert worden:

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

`y = x = f()` ist äquivalent zu `y = (x = f())`, weil der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist.
Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung evaluiert zu einer Referenz auf die Variable namens `y`.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung evaluiert zu einer Referenz auf die Variable namens `x`.
      2. Der Funktionsaufruf `f()` druckt "F!" in die Konsole und evaluiert dann zur Zahl `2`.
      3. Dieses `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` ist nun mit der Auswertung fertig; sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2`-Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` ist nun mit der Auswertung fertig; sein Ergebnis ist der neue Wert von `y` – der zufällig `2` ist.
   `x` und `y` werden zu `2` zugewiesen, und die Konsole hat "F!" gedruckt.

#### Auswertungsbeispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf dieser Zuweisung linke Seite evaluiert zu einer Referenz auf die Variable namens `y`.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` druckt "F!" in die Konsole und evaluiert dann zur Zahl `2`.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf dieser Zuweisung linke Seite evaluiert zu einer Referenz auf die Variable namens `x`.
         2. Der Funktionsaufruf `g()` druckt "G!" in die Konsole und evaluiert dann zur Zahl `3`.
         3. Dieses `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` ist nun mit der Auswertung fertig; sein Ergebnis ist der neue Wert von `x`, der `3` ist.
         Dieses `3`-Ergebnis wird das nächste Element im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]` ist nun mit der Auswertung fertig; sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird nun `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` ist nun mit der Auswertung fertig; sein Ergebnis ist der neue Wert von `y` – der zufällig `[ 2, 3 ]` ist.
   `x` wird nun zu `3` zugewiesen, `y` wird nun zu `[ 2, 3 ]` zugewiesen, und die Konsole hat "F!" und dann "G!" gedruckt.

#### Auswertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel geht davon aus, dass `x` bereits einem Objekt zugewiesen ist.
Für weitere Informationen über Objekte lesen Sie den [Leitfaden zu Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung linke Seite beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftszugriff evaluiert zu einer Referenz auf die Variable namens `x`.
      2. Dann druckt der Funktionsaufruf `f()` "F!" in die Konsole und evaluiert dann zur Zahl `2`.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung hat nun die Auswertung beendet; sein Ergebnis ist eine variable Eigenschaftsreferenz: `x[2]`.
   3. Dann druckt der Funktionsaufruf `g()` "G!" in die Konsole und evaluiert dann zur Zahl `3`.
   4. Dieses `3` wird nun `x[2]` zugewiesen.
      (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` ist nun mit der Auswertung fertig; sein Ergebnis ist der neue Wert von `x[2]`, der zufällig `3` ist.
   `x[2]` wird nun `3` zugewiesen, und die Konsole hat "F!" und dann "G!" gedruckt.

### Vermeiden Sie Zuweisungsketten

Das Ketten von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen.
Aus diesem Grund [wird empfohlen, keine Zuweisungsketten in derselben Anweisung zu verwenden](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Platzieren einer Variablenkette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung funktioniert oft _nicht_.
Nur die äußerste/linkeste Variable würde deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ von der `const`/`let`/`var`-Anweisung deklariert.
Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung scheint die Variablen `x`, `y` und `z` zu deklarieren.
Tatsächlich deklariert sie jedoch nur die Variable `z`.
`y` und `x` sind entweder ungültige Referenzen auf nicht existierende Variablen (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, sie würden im {{Glossary("Sloppy_mode", "schlampigen Modus")}} implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert basierend darauf zurück, ob der Vergleich wahr ist.
Die Operanden können numerische, Zeichenkettenwerte, logische oder [objektbasierte](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein.
Zeichenketten werden basierend auf standardmäßiger lexikographischer Ordnung über Unicode-Werte verglichen.
In den meisten Fällen, wenn die beiden Operanden nicht vom gleichen Typ sind, versucht JavaScript, sie in einen passenden Typ für den Vergleich zu konvertieren.
Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen von der Typkonvertierung bei Vergleichen betreffen die Operatoren `===` und `!==`, die strikte Gleichheits- und Ungleichheitsvergleiche durchführen.
Diese Operatoren versuchen nicht, die Operanden vor der Prüfung der Gleichheit so zu konvertieren, dass sie kompatibel sind.
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strikt gleich</a> (<code>===</code>)
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strikt ungleich</a> (<code>!==</code>)
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
        Gibt <code>true</code> zurück, wenn der linke Operand größer als oder gleich dem rechten Operand ist.
      </td>
      <td>
        <code>var2 >= var1<br />var1 >= 3</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Less_than">Weniger als</a>
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
        Gibt <code>true</code> zurück, wenn der linke Operand kleiner als oder gleich dem rechten Operand ist.
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
Die Standard-arithmetischen Operatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass eine Division durch null {{jsxref("Infinity")}} erzeugt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standard-arithmetischen Operationen (`+`, `-`, `*`, `/`) bietet JavaScript die in der folgenden Tabelle aufgeführten arithmetischen Operatoren:

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
      <td>12 % 5 gibt 2 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Increment">Inkrement</a> (<code>++</code>)
      </td>
      <td>
        Unärer Operator. Addiert eins zu seinem Operanden. Wenn er als Präfix-Operator verwendet wird
        (<code>++x</code>), gibt er den Wert seines Operanden nach dem Addieren von eins zurück;
        wenn er als Postfix-Operator verwendet wird (<code>x++</code>), gibt er den Wert seines
        Operanden vor dem Addieren von eins zurück.
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
        Unärer Operator. Zieht eins von seinem Operanden ab.
        Der Rückgabewert ist analog zu dem des Inkrementoperators.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>--x</code> <code>x</code> auf 2
        und gibt 2 zurück, während <code>x--</code> 3 zurückgibt und nur dann <code>x</code> auf 2 setzt.
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
        Unärer Operator. Versucht, den Operanden in eine Zahl zu konvertieren, falls er es nicht schon ist.
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
        Berechnet die Potenz <code>base</code> zu <code>exponent</code>,
        also <code>base^exponent</code>.
      </td>
      <td>
        <code>2 ** 3</code> gibt <code>8</code> zurück.<br /><code>10 ** -1</code>
        gibt <code>0.1</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als ein Set aus 32 Bits (Nullen und Einsen), anstatt als Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun eine
binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen
binären Darstellungen aus, aber sie geben Standard-JavaScript-numerische Werte zurück.

Die folgende Tabelle fasst die JavaScript-bitweisen Operatoren zusammen.

| Operator                                                                                             | Verwendung | Beschreibung                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                             | `a & b`    | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                                  |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                             | `a \| b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                                                  |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                             | `a ^ b`    | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind. |
| [Bitweises NOT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                             | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                      |
| [Linksschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                             | `a << b`   | Verschiebt `a` in binärer Darstellung `b` Stellen nach links und schiebt Nullen von rechts hinein.                                                                                         |
| [Rechtsschiebung mit Vorzeichenübertragung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) | `a >> b`   | Verschiebt `a` in binärer Darstellung `b` Stellen nach rechts und verwirft abgelegte Bits.                                                                                                 |
| [Nicht signierte Rechtsschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)  | `a >>> b`  | Verschiebt `a` in binärer Darstellung `b` Stellen nach rechts und verwirft abgelegte Bits, schiebt Nullen von links hinein.                                                                |

### Bitweise logische Operatoren

Konzepthafterweise funktionieren die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in Zweiunddreißig-Bit-Ganze Zahlen konvertiert und durch eine Reihe von Bits (Nullen und Einsen) ausgedrückt.
  Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits.
  Zum Beispiel wird die folgende Zahl mit mehr als 32 Bits in eine 32-Bit-Ganze Zahl konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit usw.
- Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Zum Beispiel ist die binäre Darstellung von neun 1001, und die binäre Darstellung von fünfzehn ist 1111.
Wenn die bitweisen Operatoren auf diese Werte angewendet werden, ergeben sich die folgenden Ergebnisse:

| Ausdruck  | Ergebnis | binale Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits mit dem Bitweisen-NOT-Operator invertiert werden und dass Werte mit dem am meisten bedeutenden (am weitesten links gelegenen) Bit auf 1 negative Zahlen darstellen (Zweierkomplementdarstellung). `~x` ergibt denselben Wert, den auch `-x - 1` ergibt.

### Bitweise Verschiebeoperatoren

Die bitweisen Verschiebeoperatoren benötigen zwei Operanden: Der erste ist eine Menge, die verschoben wird, und der zweite gibt die Anzahl der Bitpositionen an, um welche der erste Operand verschoben werden soll.
Die Richtung der Verschiebungsoperation wird durch den verwendeten Operator gesteuert.

Verschiebeoperatoren konvertieren ihre Operanden in Zweiunddreißig-Bit-Ganze Zahlen und geben ein Ergebnis entweder vom Typ {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: Insbesondere, wenn der Typ des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück; andernfalls {{jsxref("Number")}}.

Die Verschiebeoperatoren sind in der folgenden Tabelle zusammengefasst.

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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Left_shift">Linksschiebung</a><br />(<code>&#x3C;&#x3C;</code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach links. Überschüssige Bits, die nach links verschoben werden, werden verworfen. Null-Bits werden von rechts hineingeschoben.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach links verschoben zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Rechtsschiebung mit Vorzeichenübertragung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Kopien des linksten Bits werden von links hineingeschoben.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts verschoben zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, weil das Vorzeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Nicht signierte Rechtsschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Null-Bits werden von links hineingeschoben.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts verschoben zu 100 wird, was 4 ist. Für nicht-negative Zahlen ergeben die nicht signierte Rechtsschiebung und die Rechtsschiebung mit Vorzeichenübertragung dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit Booleschen Werten verwendet; wenn sie es sind, geben sie einen Booleschen Wert zurück.
Die Operatoren `&&`, `||` und `??` geben jedoch tatsächlich den Wert eines der angegebenen Operanden zurück, sodass, wenn diese
Operatoren mit nicht-booleschen Werten verwendet werden, sie möglicherweise einen Nicht-Booleschen Wert zurückgeben. Daher werden sie besser als "Wertauswahloperatoren" bezeichnet.
Die logischen Operatoren sind in der folgenden Tabelle beschrieben:

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
        andernfalls gibt es <code>expr2</code> zurück. Wenn <code>&#x26;&#x26;</code> mit booleschen Werten verwendet wird, gibt es <code>true</code> zurück, wenn beide Operanden wahr sind; andernfalls gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> konvertiert werden kann;
        andernfalls gibt es <code>expr2</code> zurück. Wenn <code>||</code> mit Booleschen Werten verwendet wird, gibt es <code>true</code> zurück, wenn einer der Operanden wahr ist; wenn beide falsch sind, gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish coalescing-Operator</a> (<code>??</code>)
      </td>
      <td><code>expr1 ?? expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es weder <code>null</code> noch <code>undefined</code> ist; andernfalls gibt es <code>expr2</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logisches NOT</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Gibt <code>false</code> zurück, wenn sein einzelner Operand in <code>true</code> konvertiert werden kann; andernfalls gibt es <code>true</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind jene, die zu `null`, `0`, `0n`, `NaN`, der leeren Zeichenkette (`""`) oder `undefined` ausgewertet werden.

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

Beachten Sie, wie `??` wie `||` funktioniert, jedoch nur dann den zweiten Ausdruck zurückgibt, wenn der erste "{{Glossary("Nullish", "nullish")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||` für die Einstellung von Standardwerten für Werte, die möglicherweise `null` oder `undefined` sind, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht gelten sollte.

Der folgende Code zeigt Beispiele für den `!` (logisches NOT) Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie auf mögliche "Kurzschluss"-Auswertungen mit den folgenden Regeln getestet:

- `falsch && alles` wird zur falschen Auswertung kurzgeschlossen.
- `wahr || alles` wird zur wahren Auswertung kurzgeschlossen.
- `nichtNullish ?? alles` wird zur nicht-nullish-Auswertung kurzgeschlossen.

Die Regeln der Logik garantieren, dass diese Auswertungen immer korrekt sind. Beachten Sie, dass der _alles_-Teil der obigen Ausdrücke nicht ausgewertet wird, sodass Nebenwirkungen davon nicht eintreten.

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

Eine Ausnahme ist die [nicht signierte Rechtsschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat und daher technisch kein "höchstes Bit" hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig ersetzbar – Sie können sie in Berechnungen nicht mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder eine Teilmenge noch eine Obermenge von Zahlen ist. BigInts haben eine höhere Präzision als Zahlen bei der Darstellung großer Ganzzahlen, können jedoch keine Dezimalzahlen darstellen, sodass bei der impliziten Konvertierung auf beiden Seiten Präzision verloren gehen kann. Verwenden Sie eine explizite Konvertierung, um zu signalisieren, ob Sie möchten, dass die Operation eine Zahlenoperation oder eine BigInt-Operation ist.

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

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenfolgenwerte angewendet werden können, verbindet der Konkatenationsoperator (+) zwei String-Werte miteinander und gibt eine weitere Zeichenfolge zurück, die die Vereinigung der beiden Operand-Zeichenfolgen ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der verkürzte Zuweisungsoperator `+=` kann ebenfalls zur Verkettung von Zeichenfolgen verwendet werden.

Zum Beispiel,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingter (ternärer) Operator

Der [bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
ist der einzige JavaScript-Operator, der drei Operanden verwendet.
Der Operator kann basierend auf einer Bedingung einen von zwei Werten haben.
Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn `Bedingung` wahr ist, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Sie können den bedingten Operator überall verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist der Variablen `Status` den Wert "adult" zu, wenn
`Alter` 18 oder mehr beträgt. Andernfalls weist sie den Wert "minor" zu
`Status`.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich in einer `for`-Schleife verwendet, um mehrere Variablen gleichzeitig bei jedem Durchlauf der Schleife zu aktualisieren.
Es wird als schlechter Stil angesehen, ihn anderswo zu verwenden, wenn er nicht notwendig ist.
Oft können auch zwei separate Anweisungen verwendet werden und sollten das auch.

Zum Beispiel, wenn `a` ein zweidimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren.
Der Code gibt die Werte der Diagonalelemente im Array aus:

```js
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## Unäre Operatoren

Ein unärer Vorgang ist ein Vorgang mit nur einem Operanden.

### delete

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löscht eine Eigenschaft eines Objekts.
Die Syntax ist:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `objekt` der Name eines Objekts ist, `eigenschaft` eine vorhandene Eigenschaft ist und `eigenschaftsSchlüssel` eine Zeichenkette oder ein Symbol ist, das auf eine vorhandene Eigenschaft verweist.

Wenn der `delete` Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Der Versuch, danach darauf zuzugreifen, führt zu `undefined`.
Der `delete` Operator gibt `true` zurück, wenn der Vorgang möglich ist; er gibt `false` zurück, wenn der Vorgang nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays einfach Objekte sind, ist es technisch möglich, Elemente daraus zu `löschen`.
Dies wird jedoch als schlechte Praxis angesehen - versuchen Sie, dies zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indiziert.
Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt eine Zeichenfolge zurück, die den Typ des nicht ausgewerteten Operanden angibt.
`operand` ist die Zeichenkette, die Variablen-, Schlüsselwort- oder Objektenamen angibt, für die der Typ zurückgegeben werden soll.
Die Klammern sind optional.

Angenommen, Sie definieren die folgenden Variablen:

```js
const myFun = () => 5 + 2;
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

Für die Schlüsselwörter `true` und `null`, der `typeof`
Operator gibt die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder einen String gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof` Operator den Typ des
Wertes zurück, den die Eigenschaft enthält:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für Methoden und Funktionen gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof blur; // returns "function"
typeof eval; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

Für vordefinierte Objekte gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

Der [`void` Operator](/de/docs/Web/JavaScript/Reference/Operators/void) spezifiziert einen Ausdruck, der ausgewertet werden soll, ohne dass ein Wert zurückgegeben wird.
`expression` ist ein JavaScript-Ausdruck, der ausgewertet werden soll.
Die Klammern um den Ausdruck sind optional, aber es ist eine gute Praxis, sie zu verwenden, um Präzedenzprobleme zu vermeiden.

## Relationale Operatoren

Ein Relationaler Operator vergleicht seine Operanden und gibt einen Booleschen Wert basierend darauf zurück, ob der Vergleich wahr ist.

### in

Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt existiert.
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

Der [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true` zurück,
wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet werden soll, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen müssen.
Zum Beispiel, wenn Sie Ausnahmen abfangen, können Sie zu anderem Ausnahmebehandlungscode verzweigen, abhängig vom Typ der geworfenen Ausnahme.

Zum Beispiel verwendet der folgende Code `instanceof`, um festzustellen, ob `obj` ein `Map`-Objekt ist. Da `obj` ein `Map`-Objekt ist, werden die Anweisungen innerhalb des `if`-Blocks ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren operieren schließlich auf einem oder mehreren grundlegenden Ausdrücken. Diese grundlegenden Ausdrücke schließen [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals) ein, aber es gibt auch einige andere Arten. Sie werden unten kurz eingeführt und ihre Semantik wird in ihren jeweiligen Referenzabschnitten detailliert beschrieben.

### this

Verwenden Sie das [`this` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen.
Im Allgemeinen bezieht sich `this` auf das aufrufende Objekt in einer Methode.
Verwenden Sie `this` entweder mit der Punkt- oder der Klammernotation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, eine Funktion namens `validate` validiert die `value`-Eigenschaft eines Objekts, wobei das Objekt sowie die hohen und niedrigen Werte angegeben werden:

```js
function validate(obj, lowVal, highVal) {
  if (obj.value < lowVal || obj.value > highVal) {
    console.log("Invalid Value!");
  }
}
```

Sie können `validate` in jedem `onChange`-Ereignis-Handler des Formularelements aufrufen, indem Sie `this` verwenden, um es an das Formularelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Vorrangordnung der Auswertung in
Ausdrücken. Zum Beispiel können Sie Multiplikation und Division überschreiben, dann
Addition und Subtraktion, um als erstes die Addition auszuwerten.

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

Die [Eigenschaftszugriffssyntax](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) erhält Eigenschaftswerte von Objekten, entweder mit Punktnotation oder mit Klammernotation.

```js
object.property;
object["property"];
```

Der [Leitfaden zum Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) bietet detailliertere Informationen über Objekteigenschaften.

### Optionale Verkettung

Die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Syntax (`?.`) führt die verkettete Operation an einem Objekt aus, wenn es definiert und nicht `null` ist und bricht ansonsten die Operation ab und gibt `undefined` zurück.
Dies ermöglicht es Ihnen, auf einen Wert zuzugreifen, der `null` oder `undefined` sein könnte, ohne einen `TypeError` zu verursachen.

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

Das [`super` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen auf dem Elternobjekt eines Objekts aufzurufen.
Es ist nützlich bei [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um beispielsweise den Elternkonstruktor aufzurufen.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
