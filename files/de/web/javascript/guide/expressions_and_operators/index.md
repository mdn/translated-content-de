---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt die Ausdrücke und Operatoren in JavaScript, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik, Zeichenkette, ternär und mehr.

Auf hoher Ebene ist ein _Ausdruck_ eine gültige Codeeinheit, die zu einem Wert ausgewertet wird. Es gibt zwei Arten von Ausdrücken: solche, die Nebeneffekte haben (wie das Zuweisen von Werten), und solche, die nur _ausgewertet_ werden.

Der Ausdruck `x = 7` ist ein Beispiel für den ersten Typ. Dieser Ausdruck verwendet den `=`-Operator, um den Wert sieben der Variablen `x` zuzuweisen. Der Ausdruck selbst wird zu `7` ausgewertet.

Der Ausdruck `3 + 4` ist ein Beispiel für den zweiten Typ. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zusammenzuzählen und erzeugt einen Wert, `7`. Wenn er jedoch nicht letztlich Teil eines größeren Konstrukts ist (zum Beispiel einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen — dies ist normalerweise ein Programmierfehler, da die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele auch zeigen, sind alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie `=` und `+`. In diesem Abschnitt stellen wir die folgenden Operatoren vor:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt-Operatoren](#bigint_operatoren)
- [Zeichenkettenoperatoren](#zeichenkettenoperatoren)
- [Bedingter (ternärer) Operator](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verbinden Operanden, die entweder durch höherwiegende Operatoren gebildet werden oder aus einem der [grundlegenden Ausdrücke](#grundlegende_ausdrücke) stammen. Eine vollständige und detaillierte Liste von Operatoren und Ausdrücken ist auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) verfügbar.

Die _Präzedenz_ der Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlicher Reihenfolge vorkommen, würden beide Ausdrücke `7` ergeben, da `*` Vorrang vor `+` hat, sodass der `*`-verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operatorpräzedenz durch Klammern überschreiben (was einen [gruppierten Ausdruck](#gruppierungsoperator) — den grundlegenden Ausdruck — erstellt). Um eine vollständige Tabelle der Operatorpräzedenz sowie verschiedene Ausnahmen zu sehen, besuchen Sie die Seite [Operatorpräzedenz-Referenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript verfügt über sowohl _binäre_ als auch _unäre_ Operatoren und einen speziellen ternären Operator, den Bedingungsoperator.
Ein binärer Operator benötigt zwei Operanden, einen vor dem Operator und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird als _infix_ binärer Operator bezeichnet, weil der Operator zwischen zwei Operanden platziert ist. Alle binären Operatoren in JavaScript sind infix.

Ein unärer Operator benötigt einen einzigen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die Form `Operator Operand` wird als _Präfix_ unärer Operator bezeichnet, und die Form `Operand Operator` als _Postfix_ unärer Operator. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof`, etc. sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden einen Wert zu, basierend auf dem Wert seines rechten Operanden.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` an `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzform für die in der folgenden Tabelle aufgeführten Operationen darstellen:

| Name                                                                                                                | Kurzform Operator | Bedeutung          |
| ------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                                 | `x = f()`         | `x = f()`          |
| [Addition zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`        | `x = x + f()`      |
| [Subtraktion zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                          | `x -= f()`        | `x = x - f()`      |
| [Multiplikation zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`        | `x = x * f()`      |
| [Division zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`        | `x = x / f()`      |
| [Rest zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                   | `x %= f()`        | `x = x % f()`      |
| [Exponentiation zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                    | `x **= f()`       | `x = x ** f()`     |
| [Linksschieben zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                         | `x <<= f()`       | `x = x << f()`     |
| [Rechtsschieben zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                       | `x >>= f()`       | `x = x >> f()`     |
| [Unsigniertes Rechtsschieben zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`      | `x = x >>> f()`    |
| [Bitweises UND zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                        | `x &= f()`        | `x = x & f()`      |
| [Bitweises XOR zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                        | `x ^= f()`        | `x = x ^ f()`      |
| [Bitweises ODER zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                        | `x \|= f()`       | `x = x \| f()`     |
| [Logisches UND zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                        | `x &&= f()`       | `x && (x = f())`   |
| [Logisches ODER zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                        | `x \|\|= f()`     | `x \|\| (x = f())` |
| [Nullish Coalescing zuweisen](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)            | `x ??= f()`       | `x ?? (x = f())`   |

### Zuweisung zu Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, kann die linke Seite eines Zuweisungsausdrucks Zuweisungen zu den Eigenschaften dieses Ausdrucks vornehmen.
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

Für mehr Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, führen Zuweisungen zu den Eigenschaften dieses Ausdrucks nicht zu einer Zuweisung:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wirft der obige Code einen Fehler, da man Eigenschaften nicht zu Primitiven zuweisen kann.

Es ist ein Fehler, Werte nicht modifizierbaren Eigenschaften oder Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen ermöglicht die [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) es, Daten aus Arrays oder Objekten mit einer Syntax zu extrahieren, die den Aufbau von Array- und
Objektliteralen widerspiegelt.

Ohne Destrukturierung sind mehrere Anweisungen erforderlich, um Werte aus Arrays und Objekten zu extrahieren:

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

### Auswertung und Verschachtelung

Im Allgemeinen werden Zuweisungen in einer Variablendeklaration verwendet (d.h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Allerdings wird, wie bei anderen Ausdrücken, ein Zuweisungsausdruck wie `x = f()` in einen Ergebniswert ausgewertet.
Obwohl dieser Ergebniswert normalerweise nicht verwendet wird, kann er dann von einem anderen Ausdruck verwendet werden.

Das Verketten von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen.
Aus diesem Grund [raten einige JavaScript-Stilrichtlinien das Verketten oder Verschachteln von Zuweisungen ab](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).
Dennoch kann es manchmal vorkommen, dass Zuweisungsverkettung und -verschachtelung auftreten, und es ist daher wichtig, zu verstehen, wie sie funktionieren.

Durch die Verkettung oder Verschachtelung eines Zuweisungsausdrucks kann dessen Ergebnis selbst einer anderen Variablen zugewiesen werden.
Es kann protokolliert werden, es kann innerhalb eines Array-Literals oder Funktionsaufrufs platziert werden, usw.

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

Das Auswertungsergebnis entspricht dem Ausdruck rechts des `=`-Zeichens in der
"Bedeutung"-Spalte der obigen Tabelle. Das bedeutet, dass `x = f()` in
was auch immer `f()` ergibt ausgewertet wird, `x += f()` ergibt die resultierende Summe `x + f()`,
`x **= f()` ergibt die resultierende Potenz `x ** f()`, und so weiter.

Im Falle von logischen Zuweisungen, `x &&= f()`,
`x ||= f()`, und `x ??= f()`, ist der Rückgabewert der der
logischen Operation ohne die Zuweisung, also `x && f()`,
`x || f()`, und `x ?? f()`, jeweils.

Wenn diese Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren
wie Array-Literalen miteinander verkettet werden, werden die Zuweisungsausdrücke **von rechts nach links gruppiert**
(sie sind [rechts-assoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts ausgewertet**.

Beachten Sie, dass für alle anderen Zuweisungsoperatoren als `=` selbst,
die resultierenden Werte immer basierend auf den Werten der Operanden _vorher_
der Operation basieren.

Beispielsweise nehmen wir an, dass die folgenden Funktionen `f` und `g`
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

#### Evaluierungsbeispiel 1

`y = x = f()` ist äquivalent zu `y = (x = f())`,
da der Zuweisungsoperator `=` [rechts-assoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist.
Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wertet sich
      in eine Referenz auf die Variable mit dem Namen `y` aus.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wertet sich
         in eine Referenz auf die Variable mit dem Namen `x` aus.
      2. Der Funktionsaufruf `f()` gibt "F!" in der Konsole aus und
         wertet sich dann auf die Zahl `2` aus.
      3. Dieses `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` hat die Auswertung abgeschlossen;
      sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2`-Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` hat die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `y` — der zufällig `2` ist.
   `x` und `y` werden auf `2` gesetzt,
   und die Konsole hat "F!" ausgegeben.

#### Evaluierungsbeispiel 2

`y = [ f(), x = g() ]` wertet sich ebenfalls von links nach rechts aus:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wertet sich
      in eine Referenz auf die Variable mit dem Namen `y` aus.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` gibt "F!" in der Konsole aus und
         wertet sich dann auf die Zahl `2` aus.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wertet sich
            in eine Referenz auf die Variable mit dem Namen `x` aus.
         2. Der Funktionsaufruf `g()` gibt "G!" in der Konsole aus und
            wertet sich dann auf die Zahl `3` aus.
         3. Dieses `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` hat die Auswertung abgeschlossen;
         sein Ergebnis ist der neue Wert von `x`, der `3` ist.
         Dieses `3`-Ergebnis wird das nächste Element
         im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]`
      hat die Auswertung abgeschlossen;
      sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` hat
   die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `y` — der zufällig `[ 2, 3 ]` ist.
   `x` ist jetzt auf `3` gesetzt,
   `y` ist jetzt auf `[ 2, 3 ]` gesetzt,
   und die Konsole hat "F!" und dann "G!" ausgegeben.

#### Evaluierungsbeispiel 3

`x[f()] = g()` wertet sich ebenfalls von links nach rechts aus.
(Dieses Beispiel geht davon aus, dass `x` bereits einem Objekt zugeordnet ist.
Für mehr Informationen über Objekte, lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaftszugriff auf der linken Seite dieser Zuweisung
      beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftszugriff wertet sich
         in eine Referenz auf die Variable mit dem Namen `x` aus.
      2. Dann gibt der Funktionsaufruf `f()` "F!" in der Konsole aus und
         wertet sich dann auf die Zahl `2` aus.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuordnung
      hat die Auswertung abgeschlossen;
      sein Ergebnis ist eine variable Eigenschaftsreferenz: `x[2]`.
   3. Dann gibt der Funktionsaufruf `g()` "G!" in der Konsole aus und
      wertet sich dann auf die Zahl `3` aus.
   4. Diese `3` wird jetzt `x[2]` zugewiesen.
      (Dieser Schritt gelingt nur, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` hat die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `x[2]` — der zufällig `3` ist.
   `x[2]` ist jetzt auf `3` gesetzt,
   und die Konsole hat "F!" und dann "G!" ausgegeben.

### Vermeiden Sie Zuweisungsketten

Das Verketten von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken kann
zu überraschendem Verhalten führen. Aus diesem Grund wird
[das Verketten von Zuweisungen in der gleichen Anweisung wird abgeraten](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Setzen einer Variablenkette in eine [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Anweisung funktioniert oft _nicht_. Nur die äußerste/linkeste Variable wird deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ von der `const`/`let`/`var`-Anweisung deklariert.
Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung scheint die Variablen `x`, `y` und `z` zu deklarieren.
Sie deklariert jedoch nur tatsächlich die Variable `z`.
`y` und `x` sind entweder ungültige Verweise auf nicht existierende Variablen (im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer, würden {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "sloppy mode")}} implizit erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert zurück, basierend darauf, ob der Vergleich wahr ist.
Die Operanden können numerische, Zeichenketten-, logische oder [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects)-Werte sein.
Zeichenketten werden basierend auf der standardmäßigen lexikografischen Ordnung unter Verwendung von Unicode-Werten verglichen.
In den meisten Fällen, wenn die beiden Operanden nicht denselben Typ haben, versucht JavaScript, sie in einen geeigneten Typ für den Vergleich zu konvertieren.
Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen bei der Typkonvertierung innerhalb von Vergleichen betreffen die `===` und `!==` Operatoren, die strikte Gleichheits- und Ungleichheitsvergleiche durchführen.
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
      <th scope="col">Beispiele, die wahr zurückgeben</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Equality">Gleich</a> (<code>==</code>)
      </td>
      <td>Gibt <code>**true**</code> zurück, wenn die Operanden gleich sind.</td>
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
      <td>Gibt <code>**true**</code> zurück, wenn die Operanden ungleich sind.</td>
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
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ, aber nicht gleich sind, oder von unterschiedlichem Typ.
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

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als seine Operanden und gibt einen einzelnen numerischen Wert zurück.
Die Standardarithmetik-Operatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass eine Division durch Null {{jsxref("Infinity")}} erzeugt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standardarithmetik-Operationen (`+`, `-`, `*`, `/`) stellt JavaScript die in der folgenden Tabelle aufgeführten arithmetischen Operatoren zur Verfügung:

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
        Binärer Operator. Gibt den ganzzahligen Rest bei der Division der beiden Operanden zurück.
      </td>
      <td>12 % 5 ergibt 2.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Increment">Inkrement</a> (<code>++</code>)
      </td>
      <td>
        Unärer Operator. Addiert eins zu seinem Operanden. Wenn er als Präfix-Operator
        (<code>++x</code>) verwendet wird, gibt er den Wert seines Operanden nach dem Hinzufügen eines Einers zurück;
        wenn er als Postfix-Operator (<code>x++</code>) verwendet wird, gibt er den Wert seines Operanden vor dem Hinzufügen eines Einers zurück.
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
      <td>Wenn <code>x</code> 3 ist, dann ergibt <code>-x</code> -3.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäres Plus</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versucht, den Operanden in eine Zahl zu <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">konvertieren</a>, wenn er noch keine ist.
      </td>
      <td>
        <p><code>+"3"</code> ergibt <code>3</code>.</p>
        <p><code>+true</code> ergibt <code>1</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation-Operator</a> (<code>**</code>)
      </td>
      <td>
        Berechnet <code>basis</code> zur Potenz <code>exponent</code>,
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

Ein Bitweise-Operator behandelt seine Operanden als eine Menge von 32 Bits (Nullen und Einsen), anstatt als dezimale, hexadezimale oder oktale Zahlen. Zum Beispiel hat die dezimale Zahl neun
eine binäre Darstellung von 1001. Bitweise-Operatoren führen ihre Operationen auf solchen
binären Darstellungen durch, aber sie geben Standard-JavaScript-Zahlenwerte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren von JavaScript zusammen.

| Operator                                                                                          | Verwendung | Beschreibung                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                          | `a & b`    | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                                  |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                          | `a \| b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                                                  |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                          | `a ^ b`    | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind. |
| [Bitweises NICHT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                        | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                      |
| [Linksschieben](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                           | `a << b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach links und schiebt Nullen von rechts ein.                                                                                               |
| [Vorzeichenübertragendes Rechtsschieben](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) | `a >> b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts und verwirft Bits, die herausgeschoben wurden.                                                                                  |
| [Null-Füll-Rechtsschieben](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)      | `a >>> b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft herausgeschobene Bits und schiebt Nullen von links ein.                                                               |

### Bitweise logische Operatoren

Konzeptionell funktionieren die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in zweiunddreißig-Bit-Integer konvertiert und durch eine Reihe von Bits (Nullen und Einsen) ausgedrückt.
  Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits.
  Zum Beispiel wird der folgende Integer mit mehr als 32 Bits zu einem 32-Bit-Integer konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit mit erstem Bit, zweites Bit mit zweitem Bit, usw.
- Der Operator wird auf jedes Paar von Bits angewendet, und das Ergebnis wird bitweise aufgebaut.

Zum Beispiel ist die binäre Darstellung von neun 1001 und die binäre Darstellung von fünfzehn ist 1111.
Wenn die bitweisen Operatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass mit dem bitweisen NICHT-Operator alle 32 Bits invertiert werden und dass Werte mit
dem bedeutendsten (linkesten) Bit, das auf 1 gesetzt ist, negative Zahlen darstellen
(zweierkomplementäre Darstellung). `~x` wertet auf denselben Wert aus, den auch
`-x - 1` ergibt.

### Bitweise Verschiebeoperatoren

Die bitweisen Verschiebeoperatoren nehmen zwei Operanden: der erste ist eine Menge, die verschoben werden soll, und die zweite gibt an, um wie viele Bitpositionen der erste Operand verschoben werden soll.
Die Richtung der Verschiebeoperation wird durch den verwendeten Operator gesteuert.

Verschiebeoperatoren konvertieren ihre Operanden in zweiunddreißig-Bit-Integer und geben ein Ergebnis des Typs {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: genauer gesagt, wenn der Typ
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Left_shift">Linksschieben</a><br />(<code>&#x3C;&#x3C;</code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        links. Überschüssige Bits, die nach links verschoben werden, werden verworfen. Nullbits
        werden von rechts eingefügt.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach
        links verschoben zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Vorzeichenübertragendes Rechtsschieben</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Kopien des
        linkesten Bits werden von links eingefügt.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts
        verschoben zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, weil das Vorzeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Null-Füll-Rechtsschieben</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Nullbits
        werden von links eingefügt.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts
        verschoben zu 100 wird, was 4 ist. Für nicht-negative Zahlen liefern Null-Füll-Rechtsschieben
        und Vorzeichenübertragendes Rechtsschieben dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit Booleschen (logischen) Werten verwendet; wenn sie es sind, geben sie einen Booleschen Wert zurück.
Die Operatoren `&&`, `||`, und `??` geben tatsächlich jedoch den Wert eines der angegebenen Operanden zurück, sodass diese
Operatoren mit Nicht-Booleschen Werten verwendet werden, sie könnten einen Nicht-Booleschen Wert zurückgeben. Daher nennt man sie eher "Wertauswahloperatoren".
Die logischen Operatoren werden in der folgenden Tabelle beschrieben.

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
        andernfalls wird <code>expr2</code> zurückgegeben. Wenn sie mit Booleschen
        Werten verwendet werden, gibt <code>&#x26;&#x26;</code> <code>true</code> zurück, wenn beide
        Operanden true sind; andernfalls wird <code>false</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> konvertiert werden kann;
        andernfalls wird <code>expr2</code> zurückgegeben. Wenn sie mit Booleschen
        Werten verwendet werden, gibt <code>||</code> <code>true</code> zurück, wenn einer der Operanden
        wahr ist; wenn beide falsch sind, wird <code>false</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish Coalescing Operator</a> (<code>??</code>)
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
        Gibt <code>false</code> zurück, wenn sein einzelner Operand in
        <code>true</code> konvertiert werden kann; andernfalls wird <code>true</code> zurückgegeben.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, dem leeren String (`""`) oder `undefined` ausgewertet werden.

Der folgende Code zeigt Beispiele für den `&&`- (logisches UND) Operator.

```js
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
```

Der folgende Code zeigt Beispiele für den `||`- (logisches ODER) Operator.

```js
const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat
```

Der folgende Code zeigt Beispiele für den `??`- (Nullish Coalescing) Operator.

```js
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
```

Beachten Sie, wie `??` wie `||` funktioniert, aber nur den zweiten Ausdruck zurückgibt, wenn der erste einer der {{Glossary("Nullish", "Nullish")}} Werte ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` stellt eine bessere Alternative zu `||` dar, um Standardwerte für Werte zu setzen, die `null` oder `undefined` sein könnten, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht angewendet werden soll.

Der folgende Code zeigt Beispiele für den `!`- (logisches NICHT) Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie für mögliche
"Kurzschluss"-Auswertungen mit den folgenden Regeln getestet:

- `falsy && anything` wird durch Kurzschluss auf den falsy-Wert ausgewertet.
- `truthy || anything` wird durch Kurzschluss auf den truthy-Wert ausgewertet.
- `nonNullish ?? anything` wird durch Kurzschluss auf den non-nullish Wert ausgewertet.

Die Regeln der Logik stellen sicher, dass diese Bewertungen immer korrekt sind. Beachten Sie, dass der
_anything_-Teil der obigen Ausdrücke nicht ausgewertet wird, sodass mögliche Nebenwirkungen
von dessen Auswertung nicht eintreten.

## BigInt Operatoren

Die meisten Operatoren, die zwischen Zahlen verwendet werden können, können auch zwischen [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werten verwendet werden.

```js
// BigInt addition
const a = 1n + 2n; // 3n
// Division with BigInts round towards zero
const b = 1n / 2n; // 0n
// Bitwise operations with BigInts do not truncate either side
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

Eine Ausnahme ist das [unsignierte Rechtsschieben (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), das nicht für BigInt-Werte definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite aufweist und daher technisch kein "höchstes Bit" vorhanden ist.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig ersetzbar — Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder eine Teilmenge noch eine Obermenge von Zahlen ist. BigInts haben eine höhere Präzision als Zahlen beim Darstellen großer Ganzzahlen, können jedoch keine Dezimalzahlen darstellen, sodass eine implizite Konvertierung auf beiden Seiten zu einem Präzisionsverlust führen könnte. Verwenden Sie eine explizite Konvertierung, um anzugeben, ob Sie möchten, dass die Operation eine Zahl-Operation oder eine BigInt-Operation ist.

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

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenkettenwerte angewendet werden können, verbindet der Verkettungsoperator (+) zwei Zeichenkettenwerte und gibt eine andere Zeichenkette zurück, die die Vereinigung der beiden Operanden-Strings ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzform-Zuweisungsoperator `+=` kann ebenfalls zur Verkettung von Zeichenketten verwendet werden.

Zum Beispiel,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingungs- (ternärer) Operator

Der [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
ist der einzige JavaScript-Operator, der drei Operanden verwendet.
Der Operator kann je nach Bedingung einen von zwei Werten haben.
Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn `condition` wahr ist, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Sie können den Bedingungsoperator überall verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Dieser Ausdruck weist der Variablen `status` den Wert "adult" zu, wenn
`age` achtzehn oder mehr ist. Andernfalls weist er der Variable den Wert "minor" zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich innerhalb einer `for`-Schleife verwendet, um mehrere Variablen bei jedem Durchlaufen der Schleife zu aktualisieren.
Es wird als schlechter Stil angesehen, ihn anderswo zu verwenden, wenn es nicht notwendig ist.
Oft können und sollten zwei separate Anweisungen anstelle dessen verwendet werden.

Zum Beispiel, wenn `a` ein 2-dimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren.
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
Die Syntax ist:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts ist, `property` eine vorhandene Eigenschaft ist und `propertyKey` ein String oder Symbol ist, das auf eine vorhandene Eigenschaft verweist.

Wenn der `delete`-Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Der Versuch, danach darauf zuzugreifen, wird `undefined` ergeben.
Der `delete`-Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente aus ihnen zu `löschen`.
Dies wird jedoch als schlechte Praxis angesehen — versuchen Sie, es zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indiziert.
Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben.
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

Für die Schlüsselwörter `true` und `null` gibt der `typeof`
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

Für Eigenschaftswerte gibt der `typeof`-Operator den Typ des Werts zurück, den die
Eigenschaft enthält:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für Methoden und Funktionen gibt der `typeof`-Operator die folgenden Ergebnisse zurück:

```js
typeof blur; // returns "function"
typeof eval; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

Für vordefinierte Objekte gibt der `typeof`-Operator die folgenden Ergebnisse zurück:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

Der [`void`-Operator](/de/docs/Web/JavaScript/Reference/Operators/void) spezifiziert einen Ausdruck, der ausgewertet werden soll, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck, der ausgewertet werden soll.
Die Klammern, die den Ausdruck umgeben, sind optional, aber es ist guter Stil, sie zu verwenden, um Präzedenzprobleme zu vermeiden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt basierend darauf, ob der Vergleich wahr ist, einen Booleschen Wert zurück.

### in

Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt enthalten ist.
Die Syntax ist:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein String-, numerischer oder Symbolausdruck ist, der einen Eigenschaftsnamen oder Array-Index darstellt, und `objectName` der Name eines Objekts ist.

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

Der [`instanceof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true` zurück,
wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt zum Testen gegen `objectType` ist und `objectType` ein Konstruktor ist, der einen Typ repräsentiert, wie {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen möchten.
Zum Beispiel, wenn Sie Ausnahmen abfangen, können Sie zu unterschiedlichem Ausnahmebehandlungscode basierend auf dem Typ der geworfenen Ausnahme verzweigen.

Zum Beispiel verwendet der folgende Code `instanceof`, um zu bestimmen, ob `obj` ein `Map`-Objekt ist. Da `obj` ein `Map`-Objekt ist, werden die Anweisungen innerhalb des `if`-Blocks ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren arbeiten letztendlich auf einem oder mehreren grundlegenden Ausdrücken. Diese grundlegenden Ausdrücke umfassen [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt auch einige andere Arten. Sie werden unten kurz eingeführt, und ihre Semantik wird in ihren jeweiligen Referenzabschnitten ausführlich beschrieben.

### this

Verwenden Sie das [`this`-Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen.
Im Allgemeinen bezieht sich `this` auf das aufrufende Objekt in einer Methode.
Verwenden Sie `this` entweder mit der Punkt- oder der Klammernotation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, eine Funktion namens `validate` validiert die `value`-Eigenschaft eines Objekts, gegeben dem Objekt und den hohen und niedrigen Werten:

```js
function validate(obj, lowVal, highVal) {
  if (obj.value < lowVal || obj.value > highVal) {
    console.log("Invalid Value!");
  }
}
```

Sie können `validate` im `onChange`-Ereignishandler jedes Formularelements aufrufen, indem Sie `this` verwenden, um es an das Formularelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Auswertungspräzedenz in
Ausdrücken. Zum Beispiel können Sie eine Multiplikation und Division zuerst außer Kraft setzen und
zusätzlich und Subtraktion auswerten.

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

Die [Eigenschaftszugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)-Syntax erhält Eigenschaftswerte auf Objekten, entweder unter Verwendung der Punktnotation oder der Klammernotation.

```js
object.property;
object["property"];
```

Der [Arbeit mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) Leitfaden geht ausführlicher auf Objekteigenschaften ein.

### Optionales Chaining

Die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Syntax (`?.`) führt die verkettete Operation auf einem Objekt aus, wenn es definiert ist und nicht `null`, und andernfalls die Operation abbricht und `undefined` zurückgibt.
Dies ermöglicht es Ihnen, auf einem Wert zu arbeiten, der `null` oder `undefined` sein kann, ohne einen `TypeError` zu verursachen.

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

Das [`super`-Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen im Elte-Objekt eines Objekts aufzurufen.
Es ist nützlich bei [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um den Elternkonstruktor aufzurufen, beispielsweise.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
