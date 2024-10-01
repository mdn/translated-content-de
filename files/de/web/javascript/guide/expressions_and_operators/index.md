---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 06927abb9c3f434334729a6cc64010af9974d055
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

Dieses Kapitel beschreibt JavaScripts Ausdrücke und Operatoren, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik, Zeichenketten, ternäre Operatoren und mehr.

Auf hoher Ebene ist ein _Ausdruck_ eine gültige Einheit von Code, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche, die Nebenwirkungen haben (wie das Zuweisen von Werten), und solche, die rein _ausgewertet_ werden.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`-_Operator_, um den Wert sieben der Variablen `x` zuzuweisen. Der Ausdruck selbst wertet zu `7`.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+` Operator, um `3` und `4` zu addieren und einen Wert zu erzeugen, `7`. Wenn er jedoch nicht letztendlich Teil eines größeren Konstrukts ist (zum Beispiel einer [Variablen-Deklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen — dies ist normalerweise ein Programmierfehler, da die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele auch zeigen, werden alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie `=` und `+`. In diesem Abschnitt werden wir die folgenden Operatoren einführen:

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
- [Beziehungsoperatoren](#beziehungsoperatoren)

Diese Operatoren verbinden Operanden, die entweder von Operatoren höherer Priorität oder einer der [grundlegenden Ausdrücke](#grundlegende_ausdrücke) gebildet werden. Eine vollständige und detaillierte Liste von Operatoren und Ausdrücken ist auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) erhältlich.

Die _Priorität_ der Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Trotz dass `*` und `+` in unterschiedlicher Reihenfolge kommen, würden beide Ausdrücke `7` ergeben, weil `*` Vorrang über `+` hat, daher wird immer der `*`-verbundene Ausdruck zuerst ausgewertet. Sie können die Operatorpriorität überschreiben, indem Sie Klammern verwenden (was einen [gruppierten Ausdruck](#grupperiungsoperator) erzeugt — den grundlegenden Ausdruck). Eine vollständige Tabelle der Operatorpriorität sowie verschiedene Besonderheiten finden Sie auf der Seite [Operator-Prioritätsreferenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren, sowie einen speziellen ternären Operator, den bedingten Operator. Ein binärer Operator erfordert zwei Operanden, einen vor und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel, `3 + 4` oder `x * y`. Diese Form wird als _infix_ binärer Operator bezeichnet, da der Operator zwischen zwei Operanden platziert wird. Alle binären Operatoren in JavaScript sind Infix.

Ein unärer Operator erfordert einen einzelnen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel, `x++` oder `++x`. Die Form `operator operand` wird als _Prefix_ unärer Operator bezeichnet, und die Form `operand operator` wird als _Postfix_ unärer Operator bezeichnet. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof`, etc. sind Präfixe.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinen linken Operanden einen Wert basierend auf dem Wert seines rechten Operanden zu. Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist. Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die Abkürzungen für die in der folgenden Tabelle aufgeführten Operationen darstellen:

| Name                                                                                                                 | Kurzoperator  | Bedeutung          |
| -------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                                  | `x = f()`     | `x = f()`          |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`    | `x = x + f()`      |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                          | `x -= f()`    | `x = x - f()`      |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`    | `x = x * f()`      |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`    | `x = x / f()`      |
| [Restzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                    | `x %= f()`    | `x = x % f()`      |
| [Exponentialzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                        | `x **= f()`   | `x = x ** f()`     |
| [Linksverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`   | `x = x << f()`     |
| [Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`   | `x = x >> f()`     |
| [Unsigned-Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`  | `x = x >>> f()`    |
| [Bitweise UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                         | `x &= f()`    | `x = x & f()`      |
| [Bitweise XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                         | `x ^= f()`    | `x = x ^ f()`      |
| [Bitweise ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                         | `x \|= f()`   | `x = x \| f()`     |
| [Logisches UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                        | `x &&= f()`   | `x && (x = f())`   |
| [Logisches ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                        | `x \|\|= f()` | `x \|\| (x = f())` |
| [Nullish coalescing-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)            | `x ??= f()`   | `x ?? (x = f())`   |

### Eigenschaften zuweisen

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, kann der linke Teil eines Zuweisungsausdrucks Zuweisungen zu Eigenschaften dieses Ausdrucks vornehmen. Zum Beispiel:

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

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, werden Zuweisungen zu Eigenschaften dieses Ausdrucks nicht vorgenommen:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wird der obige Code fehlschlagen, da man keine Eigenschaften zu Primitiven zuweisen kann.

Es ist ein Fehler, Werte zu unveränderbaren Eigenschaften oder zu Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen bietet die [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) eine JavaScript-Ausdruckssyntax, die es ermöglicht, Daten aus Arrays oder Objekten mithilfe einer Syntax zu extrahieren, die die Konstruktion von Array- und Objektliteralen widerspiegelt.

Ohne Destrukturierung erfordert das Extrahieren von Werten aus Arrays und Objekten mehrere Anweisungen:

```js
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

Mit Destrukturierung können Sie mehrere Werte in separate Variablen mit einer einzigen Anweisung extrahieren:

```js
const [one, two, three] = foo;
```

### Auswertung und Schachtelung

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration (d. h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisung verwendet.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Wie andere Ausdrücke werden jedoch auch Zuweisungsausdrücke wie `x = f()` zu einem Ergebniswert ausgewertet. Auch wenn dieser Ergebniswert normalerweise nicht verwendet wird, kann er dann von einem anderen Ausdruck verwendet werden.

Das Verketten von Zuweisungen oder das Schachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen. Aus diesem Grund [entmutigen einige JavaScript-Stilrichtlinien das Verketten oder Schachteln von Zuweisungen](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment). Nichtsdestotrotz kann es vorkommen, dass Zuweisungen zu einer Kette oder Schachtelung kommen, weshalb es wichtig ist zu verstehen, wie sie funktionieren.

Durch das Verketten oder Schachteln eines Zuweisungsausdrucks kann dessen Ergebnis selbst einer anderen Variablen zugewiesen werden. Es kann protokolliert werden, es kann innerhalb eines Array-Literals oder Funktionsaufrufs platziert werden und so weiter.

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

Das Bewertungsergebnis entspricht dem Ausdruck rechts des `=`-Zeichens in der "Bedeutung"-Spalte der obigen Tabelle. Das bedeutet, dass `x = f()` zu dem Ergebnis von `f()` auswertet, `x += f()` zu der resultierenden Summe `x + f()` auswertet, `x **= f()` zu der resultierenden Potenz `x ** f()` auswertet und so weiter.

Im Fall von logischen Zuweisungen, `x &&= f()`, `x ||= f()`, und `x ??= f()`, ist der Rückgabewert der des logischen Vorgangs ohne die Zuweisung, also `x && f()`, `x || f()`, und `x ?? f()`, jeweils.

Beim Verketten dieser Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren wie Array-Literale werden die Zuweisungsausdrücke **von rechts nach links gruppiert** (sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), ebenso werden sie **von links nach rechts ausgewertet**.

Beachten Sie, dass für alle anderen Zuweisungsoperatoren als `=` selbst die resultierenden Werte immer auf den Werten der Operanden _vor_ dem Vorgang basieren.

Zum Beispiel, nehmen wir an, dass die folgenden Funktionen `f` und `g` und die Variablen `x` und `y` deklariert sind:

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

#### Bewertung Beispiel 1

`y = x = f()` ist gleichbedeutend mit `y = (x = f())`, weil der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist. Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt, ausgewertet zu werden.
   1. Das `y` auf dieser Zuweisungslinken Seite wertet zu einer Referenz auf die Variable mit dem Namen `y` aus.
   2. Der Zuweisungsausdruck `x = f()` beginnt, ausgewertet zu werden.
      1. Das `x` auf dieser Zuweisungslinken Seite wertet zu einer Referenz auf die Variable mit dem Namen `x` aus.
      2. Der Funktionsaufruf `f()` druckt "F!" auf die Konsole und wertet dann zu der Zahl `2` aus.
      3. Das `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` hat jetzt die Auswertung beendet; sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2`-Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` hat nun die Auswertung beendet; sein Ergebnis ist der neue Wert von `y` – welcher zufällig `2` ist. `x` und `y` werden auf `2` gesetzt, und die Konsole hat "F!" gedruckt.

#### Bewertung Beispiel 2

`y = [ f(), x = g() ]` wertet auch von links nach rechts aus:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt, ausgewertet zu werden.
   1. Das `y` auf dieser Zuweisungslinken Seite wertet zu einer Referenz auf die Variable mit dem Namen `y` aus.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt, ausgewertet zu werden.
      1. Der Funktionsaufruf `f()` druckt "F!" auf die Konsole und wertet dann zu der Zahl `2` aus.
      2. Der Zuweisungsausdruck `x = g()` beginnt, ausgewertet zu werden.
         1. Das `x` auf dieser Zuweisungslinken Seite wertet zu einer Referenz auf die Variable mit dem Namen `x` aus.
         2. Der Funktionsaufruf `g()` druckt "G!" auf die Konsole und wertet dann zu der Zahl `3` aus.
         3. Das `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` hat jetzt die Auswertung beendet; sein Ergebnis ist der neue Wert von `x`, der `3` ist. Das `3`-Ergebnis wird zum nächsten Element im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]` hat jetzt die Auswertung beendet; sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird jetzt `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` hat nun die Auswertung beendet; sein Ergebnis ist der neue Wert von `y` – welcher zufällig `[ 2, 3 ]` ist. `x` wird jetzt `3` zugewiesen, `y` wird jetzt `[ 2, 3 ]` zugewiesen, und die Konsole hat "F!" und dann "G!" gedruckt.

#### Bewertung Beispiel 3

`x[f()] = g()` wertet auch von links nach rechts aus. (Dieses Beispiel geht davon aus, dass `x` bereits einem Objekt zugewiesen ist. Für weitere Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt, ausgewertet zu werden.
   1. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisungslinken Seite beginnt, ausgewertet zu werden.
      1. Das `x` in diesem Eigenschaftszugriff wertet zu einer Referenz auf die Variable mit dem Namen `x` aus.
      2. Dann druckt der Funktionsaufruf `f()` "F!" auf die Konsole und wertet dann zu der Zahl `2` aus.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung hat jetzt die Auswertung beendet; sein Ergebnis ist eine Variableigenschaftsreferenz: `x[2]`.
   3. Dann druckt der Funktionsaufruf `g()` "G!" auf die Konsole und wertet dann zu der Zahl `3` aus.
   4. Dieses `3` wird nun `x[2]` zugewiesen. (Dieser Schritt wäre erfolgreich, nur wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` hat nun die Auswertung beendet; sein Ergebnis ist der neue Wert von `x[2]` – welcher zufällig `3` ist. `x[2]` wird jetzt `3` zugewiesen, und die Konsole hat "F!" und dann "G!" gedruckt.

### Vermeiden von Zuweisungsketten

Das Verketten von Zuweisungen oder das Schachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen. Aus diesem Grund wird [Verketten von Zuweisungen in derselben Anweisung entmutigt](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Platzieren einer Variablenkette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung funktioniert oft _nicht_. Nur die äußerste/linkeste Variable würde deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ durch die `const`/`let`/`var`-Anweisung deklariert. Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung scheint die Variablen `x`, `y` und `z` zu deklarieren. Tatsächlich wird jedoch nur die Variable `z` deklariert. `y` und `x` sind entweder ungültige Referenzen zu nicht existierenden Variablen (im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "Sloppy Mode")}} erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert zurück, basierend darauf, ob der Vergleich wahr ist. Die Operanden können numerische, Zeichenketten-, logische oder [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein. Zeichenketten werden basierend auf der Standard-Lexikografischen Ordnung, unter Verwendung von Unicode-Werten verglichen. In den meisten Fällen, wenn die beiden Operanden nicht vom selben Typ sind, versucht JavaScript, sie in einen geeigneten Typ für den Vergleich zu konvertieren. Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden. Die einzigen Ausnahmen bei der Typkonvertierung innerhalb von Vergleichen betreffen die `===` und `!==` Operatoren, die strenge Gleich- und Ungleichvergleiche durchführen. Diese Operatoren versuchen nicht, die Operanden in kompatible Typen umzuwandeln, bevor sie auf Gleichheit überprüfen. Die folgende Tabelle beschreibt die Vergleichsoperatoren anhand dieses Beispielcodes:

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
      <td>Gibt zurück <code>true</code>, wenn die Operanden gleich sind.</td>
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
      <td>Gibt zurück <code>true</code>, wenn die Operanden ungleich sind.</td>
      <td>
        <code>var1 != 4<br />var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality">Streng gleich</a> (<code>===</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden gleich und vom selben
        Typ sind. Siehe auch {{jsxref("Object.is")}} und
        <a href="/de/docs/Web/JavaScript/Equality_comparisons_and_sameness">Gleichheit in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Streng ungleich</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom selben Typ aber nicht gleich sind, oder von unterschiedlichem Typ sind.
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
        Gibt <code>true</code> zurück, wenn der linke Operand größer als den rechten ist.
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
        Gibt <code>true</code> zurück, wenn der linke Operand größer oder gleich dem rechten ist.
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
        Gibt <code>true</code> zurück, wenn der linke Operand kleiner als der rechte ist.
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
        Gibt <code>true</code> zurück, wenn der linke Operand kleiner oder gleich dem rechten ist.
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

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als ihre Operanden und gibt einen einzigen numerischen Wert zurück. Die Standardarithmetischen Operatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`). Diese Operatoren arbeiten wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere, beachten Sie, dass die Division durch Null {{jsxref("Infinity")}} erzeugt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standardarithmetischen Operationen (`+`, `-`, `*`, `/`), bietet JavaScript die in der folgenden Tabelle aufgeführten arithmetischen Operatoren:

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
        (<code>++x</code>), gibt den Wert seines Operanden nach dem Hinzufügen von eins zurück;
        wenn als Postfix-Operator verwendet (<code>x++</code>), gibt den Wert seines Operanden vor dem Hinzufügen von Eins zurück.
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
        Unärer Operator. Subtrahiert eins von seinem Operanden.
        Der Rückgabewert ist analog zu dem für den Inkrement-Operator.
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
      <td>Unärer Operator. Gibt die Negation seines Operanden zurück.</td>
      <td>Wenn <code>x</code> 3 ist, gibt <code>-x</code> -3 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäre Addition</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versucht, den Operanden in eine Zahl zu <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">konvertieren</a>, falls er noch keine ist.
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
        Berechnet den <code>base</code> zur <code>exponent</code>-Potenz,
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

Ein bitweiser Operator behandelt seine Operanden als eine Menge von 32 Bits (Nullen und Einsen) statt als Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun eine binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen an solchen binären Darstellungen aus, geben allerdings Standard-JavaScript-Numerische Werte zurück.

Die folgende Tabelle fasst JavaScripts bitweise Operatoren zusammen.

| Operator                                                                                               | Verwendung | Beschreibung                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweise UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                                | `a & b`    | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                                    |
| [Bitweise ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                                | `a \| b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                                                    |
| [Bitweise XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                                | `a ^ b`    | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweise NICHT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                              | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                        |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                            | `a << b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach links und verschiebt Nullen von rechts ein.                                                                                              |
| [Vorzeichenbewahrende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)     | `a >> b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts und verwirft Bits, die verschoben wurden.                                                                                         |
| [Nullauffüllende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft verschobene Bits und verschiebt Nullen von links ein.                                                                   |

### Logische bitweise Operatoren

Konz

eptionell funktionieren die logischen bitweisen Operatoren folgendermaßen:

- Die Operanden werden in zweiunddreißig-Bit Integers konvertiert und durch eine Reihe von Bits (Nullen und Einsen) ausgedrückt. Zahlen mit mehr als 32 Bits lassen ihre bedeutendsten Bits fallen. Zum Beispiel wird der folgende Integer mit mehr als 32 Bits in einen 32-Bit Integer konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: Erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit und so weiter.
- Der Operator wird auf jedes Bitpaar angewendet und das Ergebnis Bit für Bit konstruiert.

Zum Beispiel ist die binäre Darstellung von neun 1001 und die binäre Darstellung von fünfzehn ist 1111. Somit, wenn die Bitoperatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binär Beschreibung                                |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits mit dem Bitweise-Nicht Operator invertiert werden, und dass Werte mit dem bedeutendsten (linkesten) Bit, das auf Eins gesetzt ist, negative Zahlen darstellen (Zweier-Komplement Darstellung). `~x` wertet auf den gleichen Wert aus wie `-x - 1`.

### Bitweise Verschiebeoperatoren

Die bitweisen Verschiebeoperatoren nehmen zwei Operanden: der erste ist eine Menge, die verschoben werden soll, und der zweite gibt die Anzahl der Bit-Positionen an, um die der erste Operand verschoben werden soll. Die Richtung des Verschiebevorgangs wird durch den verwendeten Operator gesteuert.

Verschiebeoperatoren konvertieren ihre Operanden in zweiunddreißig-Bit Integ

ers und geben ein Ergebnis vom Typ {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: konkret, wenn der Typ des linken Operanden ein {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück; andernfalls geben sie {{jsxref("Number")}} zurück.

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
        links. Überschüssige Bits, die nach links verschoben werden, werden verworfen. Null Bits
        werden von rechts eingefügt.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, da 1001 um 2 Bits nach
        links verschoben wird und zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Vorzeichenbewahrende Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Kopien des
        linken Bits werden von links eingefügt.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, da 1001 um 2 Bits nach rechts
        verschoben wird und zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, da das Vorzeichen beibehalten wird.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Nullauffüllende Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Null Bits
        werden von links eingefügt.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, da 10011 um 2 Bits nach rechts
        verschoben wird und zu 100 wird, was 4 ist. Für nicht-negative Zahlen ergeben nullauffüllende Rechtsverschiebung
        und Vorzeichenbewahrende Rechtsverschiebung das gleiche Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit Boolean (logischen) Werten verwendet; wenn sie es sind, geben sie einen Boolean-Wert zurück. Die Operatoren `&&`, `||` und `??` geben jedoch tatsächlich den Wert eines der angegebenen Operanden zurück, sodass sie, wenn diese Operatoren mit nicht-Boolean Werten verwendet werden, einen nicht-Boolean Wert zurückgeben können. Daher werden sie eher als "Wertauswahloperatoren" bezeichnet. Die logischen Operatoren sind in der folgenden Tabelle beschrieben.

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
        andernfalls gibt es <code>expr2</code> zurück. Wenn es mit Boolean Werten verwendet wird, gibt <code>&#x26;&#x26;</code> <code>true</code> zurück, wenn beide
        Operanden true sind; andererseits <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> konvertiert werden kann;
        andernfalls gibt es <code>expr2</code> zurück. Wenn es mit Boolean Werten verwendet wird, gibt <code>||</code> <code>true</code> zurück, wenn einer der Operanden
        true ist; andernfalls, wenn beide false sind.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish coalescing-Operator</a> (<code>??</code>)
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

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, der leeren Zeichenkette (`""`) oder `undefined` ausgewertet werden.

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

Beachten Sie, wie `??` wie `||` funktioniert, aber es gibt der zweiten Ausdruck nur zurück, wenn der erste "{{Glossary("Nullish", "nullish")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||` zum Setzen von Standardeinstellungen für Werte, die `null` oder `undefined` sein könnten, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und die Standardeinstellung nicht gelten soll.

Der folgende Code zeigt Beispiele für den `!` (logisches NICHT) Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie auf mögliche "Kurzschluss"-Auswertungen getestet, indem folgende Regeln angewendet werden:

- `falsy && anything` wird zu dem falsy Wert kurzgeschlossen ausgewertet.
- `truthy || anything` wird zu dem truthy Wert kurzgeschlossen ausgewertet.
- `nonNullish ?? anything` wird zu dem nicht-nullish Wert kurzgeschlossen ausgewertet.

Die Logikregeln garantieren, dass diese Bewertungen immer korrekt sind. Beachten Sie, dass der _anything_-Teil der obigen Ausdrücke nicht ausgewertet wird, sodass mögliche Nebeneffekte nicht eintreten.

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

Eine Ausnahme bildet die [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die nicht für BigInt Werte definiert ist. Der Grund ist, dass ein BigInt keine feste Breite hat, also hat es technisch gesehen kein "höchstes Bit".

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig austauschbar — man kann sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Der Grund liegt darin, dass BigInt weder ein Teil- noch ein Obermengentyp von Zahlen ist. BigInts haben eine höhere Präzision als Zahlen beim Repräsentieren großer Integer, können jedoch keine Dezimalzahlen darstellen, sodass eine implizite Konvertierung auf beiden Seiten Präzision verlieren könnte. Verwenden Sie eine explizite Konvertierung, um anzugeben, ob Sie die Operation als eine Zahlenoperation oder eine BigInt-Operation wünschen.

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

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenkettenwerte angewendet werden können, verknüpft der Konkatenationsoperator (+) zwei Zeichenkettenwerte miteinander, und gibt eine weitere Zeichenkette zurück, die die Vereinigung der zwei Operanden-Zeichenketten ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Operator `+=` kann auch zum Verketten von Zeichenketten verwendet werden.

Zum Beispiel,

```js
let mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
```

## Bedingter (ternärer) Operator

Der [bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist der einzige JavaScript-Operator, der drei Operanden benötigt. Der Operator kann einen von zwei Werten je nach einer Bedingung haben. Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn `condition` wahr ist, hat der Operator den Wert von `val1`. Andernfalls hat er den Wert von `val2`. Sie können den bedingten Operator überall verwenden, wo Sie auch einen Standardoperator anwenden würden.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist der Variablen `status` den Wert "Erwachsener" zu, wenn `age` achtzehn oder mehr beträgt. Andernfalls weist sie den Wert "Minderjähriger" zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`) wertet beide seiner Operanden aus und gibt den Wert des zweiten Operanden zurück. Dieser Operator wird hauptsächlich in einer `for` Schleife verwendet, um mehrere Variablen jedes Mal durch die Schleife zu aktualisieren. Es gilt als schlechter Stil, ihn anderswo zu verwenden, wenn es nicht notwendig ist. Oft können und sollten stattdessen zwei separate Anweisungen verwendet werden.

Zum Beispiel, wenn `a` ein 2-dimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren. Der Code druckt die Werte der diagonal Elemente im Array:

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

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löscht eine Eigenschaft eines Objekts. Die Syntax ist:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts ist, `property` eine bestehende Eigenschaft ist, und `propertyKey` eine Zeichenkette oder ein Symbol ist, das auf eine bestehende Eigenschaft verweist.

Wenn der `delete` Operator erfolgreich ist, entfernt er die Eigenschaft vom Objekt. Ein Versuch, sie danach zuzugreifen, liefert `undefined`. Der `delete` Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente daraus zu `löschen`. Dies wird jedoch als schlechte Praxis angesehen — versuchen Sie, dies zu vermeiden. Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und die anderen Elemente werden nicht neu indexiert. Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben. Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt eine Zeichenkette zurück, die den Typ des unevaluierten Operanden angibt. `operand` ist die Zeichenkette, die Variable, das Schlüsselwort oder das Objekt, für das der Typ zurückgegeben werden soll. Die Klammern sind optional.

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

Für die Schlüsselwörter `true` und `null` geben die `typeof`
Operatoren die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder eine Zeichenkette gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof` Operator den Typ des Wertes zurück, den die
Eigenschaft enthält:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für vordefinierte Objekte gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof blur; // returns "function"
typeof eval; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

### void

Der [`void` Operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt einen Ausdruck an, der ausgewertet werden soll, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck, der ausgewertet werden soll. Die Klammern um den Ausdruck sind optional, es ist jedoch ein guter Stil, sie zu verwenden, um Vorfachfragen zu vermeiden.

## Beziehungsoperatoren

Ein Beziehungsoperator vergleicht seine Operanden und gibt einen Boolean-Wert zurück, basierend darauf, ob der Vergleich wahr ist.

### in

Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft in dem angegebenen Objekt vorhanden ist. Die Syntax ist:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein Ausdruck von Zeichenkette, Zahl oder Symbol ist, der einen Eigenschaftsnamen oder einen Array-Index darstellt und `objectName` der Name eines Objekts ist.

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
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true
```

### instanceof

Der [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true` zurück, wenn das angegebene Objekt von dem angegebenen Objekttyp ist. Die Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das zu testende Objekt gegen `objectType` ist und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie {{jsxref("Date")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit überprüfen müssen. Zum Beispiel, wenn Sie Ausnahmen abfangen, können Sie zu verschiedenen Ausnahmebehandlungscode verzweigen, abhängig von der Art der ausgelösten Ausnahme.

Zum Beispiel verwendet der folgende Code `instanceof`, um festzustellen, ob `theDay` ein `Date` Objekt ist. Da `theDay` ein `Date` Objekt ist, werden die Anweisungen in der `if` Anweisung ausgeführt.

```js
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren operieren letztendlich auf einem oder mehreren grundlegenden Ausdrücken. Zu diesen grundlegenden Ausdrücken gehören [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt auch noch einige andere Arten. Sie werden hier kurz vorgestellt und ihre Semantik wird im Detail in ihren jeweiligen Referenzabschnitten beschrieben.

### this

Verwenden Sie das Schlüsselwort [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen. Im Allgemeinen bezieht sich `this` in einer Methode auf das aufrufende Objekt. Verwenden Sie `this` entweder mit der Punkt- oder der Klammernotation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, eine Funktion namens `validate` validiert die `value` Eigenschaft eines Objekts, gegeben das Objekt sowie die hohen und niedrigen Werte:

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    console.log("Invalid Value!");
  }
}
```

Sie könnten `validate` in jedem Formularelement seinem `onChange` Ereignis-Handler aufrufen, indem Sie `this` verwenden, um es an das Formularelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Grupperiungsoperator

Der Gruppierungsoperator `( )` steuert die Priorität der Auswertung in Ausdrücken. Zum Beispiel, Sie können Multiplikation und Division zuerst überschreiben, dann Addition und Subtraktion, um Addition zuerst auszuwerten.

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

### Eigenschafts-Zugriffsoperator

Die [Eigenschafts-Zugriffsoperator](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Syntax erhält Eigenschaftswerte auf Objekten, entweder mit Punktnotation oder Klammernotation.

```js
object.property;
object["property"];
```

Der [Leitfaden zum Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) bietet weitere Details zu Objekteigenschaften.

### Optionale Verkettung

Die [Optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) Syntax (`?.`) führt die verkettete Operation auf ein Objekt aus, wenn es definiert und nicht `null` ist, und unterbricht andernfalls die Operation und gibt `undefined` zurück. Dies erlaubt es Ihnen, auf einen Wert zu operieren, der `null` oder `undefined` sein könnte, ohne einen `TypeError` zu verursachen.

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

Das [`super` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen des Elter-Objekts aufzurufen. Es ist nützlich bei [Klassen](/de/docs/Web/JavaScript/Reference/Classes) zum Aufrufen des Elternkonstruktors, zum Beispiel.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}
