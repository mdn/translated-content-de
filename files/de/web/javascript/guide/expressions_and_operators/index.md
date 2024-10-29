---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

Dieses Kapitel beschreibt JavaScripts Ausdrücke und Operatoren, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik, String, ternaere Operatoren und mehr.

Auf einer hohen Ebene ist ein _Ausdruck_ eine gültige Einheit von Code, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: diejenigen, die Nebeneffekte haben (wie Wertzuweisungen) und diejenigen, die rein _bewerten_.

Der Ausdruck `x = 7` ist ein Beispiel für den ersten Typ. Dieser Ausdruck verwendet den `=`- _Operator_, um den Wert sieben der Variablen `x` zuzuweisen. Der Ausdruck selbst wird zu `7` ausgewertet.

Der Ausdruck `3 + 4` ist ein Beispiel für den zweiten Typ. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zusammenzuzählen und erzeugt einen Wert, `7`. Wenn er jedoch nicht schließlich Teil eines größeren Konstrukts ist (zum Beispiel einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen — dies ist normalerweise ein Programmierfehler, da die Bewertung keine Effekte produziert.

Wie die obigen Beispiele auch veranschaulichen, werden alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie `=` und `+`. In diesem Abschnitt stellen wir die folgenden Operatoren vor:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt Operatoren](#bigint_operatoren)
- [String-Operatoren](#string-operatoren)
- [Bedingter (ternärer) Operator](#conditional_ternary_operator)
- [Komma-Operator](#kommaoperator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verknüpfen Operanden, die entweder durch höherpräzisere Operatoren gebildet oder einer der [gründlichen Ausdrücke](#grundlegende_ausdrücke) sind. Eine vollständige und detaillierte Liste von Operatoren und Ausdrücken finden Sie auch im [Referenz](/de/docs/Web/JavaScript/Reference/Operators).

Die _Priorität_ von Operatoren bestimmt die Reihenfolge, in der sie bei der Bewertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlicher Reihenfolge erscheinen, würden beide Ausdrücke zu `7` führen, weil `*` Vorrang vor `+` hat, sodass der `*`-verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operatorpriorität durch Verwendung von Klammern überschreiben (die einen [gruppierten Ausdruck](#gruppierungsoperator) — den grundlegenden Ausdruck — erzeugen). Um eine vollständige Tabelle der Operatorpriorität sowie verschiedene Vorbehalte zu sehen, besuchen Sie die Seite [Operator Precedence Reference](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren, und einen besonderen tertiären Operator, den bedingten Operator.
Ein binärer Operator benötigt zwei Operanden, einen vor dem Operator und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird ein _infix_ binärer Operator genannt, weil der Operator zwischen zwei Operanden platziert wird. Alle binären Operatoren in JavaScript sind infix.

Ein unärer Operator benötigt einen einzigen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die `operator operand` Form wird ein _präfix_ unärer Operator genannt, und die `operand operator` Form wird ein _postfix_ unärer Operator genannt. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof` usw. sind Präfix-Operatoren.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist den Wert seines rechten Operanden basierend auf dem Wert seines linken Operanden zu.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` an `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzform für die in der folgenden Tabelle aufgeführten Operationen sind:

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
| [Unsigned Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`      | `x = x >>> f()`    |
| [Bitweises UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                        | `x &= f()`        | `x = x & f()`      |
| [Bitweises XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                        | `x ^= f()`        | `x = x ^ f()`      |
| [Bitweises ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                        | `x \|= f()`       | `x = x \| f()`     |
| [Logisches UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                        | `x &&= f()`       | `x && (x = f())`   |
| [Logisches ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                        | `x \|\|= f()`     | `x \|\| (x = f())` |
| [Nullish Coalescing-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)            | `x ??= f()`       | `x ?? (x = f())`   |

### Zuweisung an Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, kann die linke Seite eines Zuweisungsausdrucks Werte an Eigenschaften dieses Ausdrucks zuweisen.
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

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, erfolgt keine Zuweisung an Eigenschaften dieses Ausdrucks:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wirft der obige Code einen Fehler, da man Eigenschaften keinen primitiven Werten zuweisen kann.

Es ist ein Fehler, unveränderlichen Eigenschaften oder Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) Werte zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen bietet die [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Syntax einen JavaScript-Ausdruck, der es ermöglicht, Daten aus Arrays oder Objekten mit einer Syntax zu extrahieren, die der Konstruktion von Array- und
Objektliteralen ähnelt.

Ohne Destrukturierung sind mehrere Anweisungen erforderlich, um Werte aus Arrays und Objekten zu extrahieren:

```js
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

Mit Destrukturierung können Sie mit einer einzigen Anweisung mehrere Werte in separate Variablen extrahieren:

```js
const [one, two, three] = foo;
```

### Bewertung und Verschachtelung

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration verwendet (z. B. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Wie andere Ausdrücke werte Zuweisungsausdrücke wie `x = f()` jedoch in einen Ergebniswert aus.
Obwohl dieser Ergebiswert in der Regel nicht verwendet wird, kann er dann von einem anderen Ausdruck verwendet werden.

Kettenzuweisungen oder Verschachtelungen von Zuweisungen in anderen Ausdrücken können zu überraschendem Verhalten führen.
Aus diesem Grund enthalten einige JavaScript-Stilrichtlinien [raten von Ketten- oder Verschachtelungszuweisungen ab](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).
Nichtsdestotrotz können Ketten- und Verschachtelungszuweisungen gelegentlich auftreten, sodass es wichtig ist, zu verstehen, wie sie funktionieren.

Durch Kettenbildung oder Verschachtelung eines Zuweisungsausdrucks kann dessen Ergebnis selbst einer anderen Variablen zugewiesen werden.
Es kann protokolliert, in einem Array-Literal oder Funktionsaufruf platziert werden und so weiter.

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
„Bedeutung“-Spalte der obigen Tabelle. Das bedeutet, dass `x = f()` in das Ergebnis von
`f()` ausgewertet wird, `x += f()` in die resultierende Summe `x + f()`,
`x **= f()` in die resultierende Potenz `x ** f()`, und so weiter.

Im Fall logischer Zuweisungen, `x &&= f()`,
`x ||= f()`, und `x ??= f()`, ist der Rückgabewert das
der logischen Operation ohne die Zuweisung, also `x && f()`,
`x || f()`, und `x ?? f()`, jeweils.

Beim Verketten dieser Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren
wie Array-Literale, werden die Zuweisungsausdrücke **rechts nach links gruppiert**
(sie sind [rechts-assoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden \*\*links nach rechts bearbeitet ausgeführt.

Beachten Sie, dass bei allen anderen Zuweisungsoperatoren als `=` selbst
die resultierenden Werte immer auf den Werten der Operanden _vor_
der Operation basieren.

Angenommen, die folgenden Funktionen `f` und `g`
und die Variablen `x` und `y` wurden deklariert:

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

`y = x = f()` ist gleichbedeutend mit `y = (x = f())`,
weil der Zuweisungsoperator `=` [rechts-assoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist.
Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt zu werden bewertet.
   1. Das `y` auf der linken Seite dieser Zuweisung wird
      in einen Verweis auf die Variable mit dem Namen `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt zu werden bewertet.
      1. Das `x` auf der linken Seite dieser Zuweisung wird
         in einen Verweis auf die Variable mit dem Namen `x` ausgewertet.
      2. Der Funktionsaufruf `f()` druckt „F!“ auf die Konsole und
         wird dann zu der Zahl `2` ausgewertet.
      3. Das `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` ist jetzt zu Ende bewertet;
      sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2`-Ergebnis wird wiederum auch an `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` ist jetzt zu Ende ausgewertet;
   sein Ergebnis ist der neue Wert von `y` – der zufällig `2` ist.
   `x` und `y` sind `2` zugewiesen,
   und die Konsole hat „F!“ gedruckt.

#### Bewertungsbeispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt ausgewählt zu werden.
   1. Das `y` auf dieser Zuweisung links wird
      in einen Verweis auf die Variable mit dem Namen `y` ausgewertet.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt zu werden ausgewertet.
      1. Der Funktionsaufruf `f()` druckt „F!“ auf die Konsole und
         wird dann zu der Zahl `2` ausgewertet.
      2. Der Zuweisungsausdruck `x = g()` beginnt zu werden ausgewertet.
         1. Das `x` auf der linken Seite dieser Zuweisung wird
            in einen Verweis auf die Variable mit dem Namen `x` ausgewertet.
         2. Der Funktionsaufruf `g()` druckt „G!“ auf die Konsole und
            wird dann zu der Zahl `3` ausgewertet.
         3. Das `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` ist jetzt zu Ende bewertet;
         sein Ergebnis ist der neue Wert von `x`, der `3` ist.
         Dieses `3`-Ergebnis wird das nächste Element
         im inneren Array-Literal (nach dem `2` aus dem `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]`
      ist jetzt zu Ende bewertet;
      sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird jetzt `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` hat
   ist jetzt zu Ende ausgewertet;
   sein Ergebnis ist der neue Wert von `y` – was zufällig `[ 2, 3 ]` ist.
   `x` ist nun auf `3` gesetzt,
   `y` ist nun auf `[ 2, 3 ]` gesetzt,
   und die Konsole hat „F!“ gedruckt und dann „G!“.

#### Bewertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel setzt voraus, dass `x` bereits einem Objekt zugeordnet ist.
Weitere Informationen zu Objekten finden Sie unter [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt zu werden ausgewertet.
   1. Der `x[f()]`-Eigenschaftsaufruf auf diesem Zuweisungsbereich startet
      zu bewerten.
      1. Das `x` bei diesem Property-Zugriff wird
         in einen Verweis auf die Variable namens `x` ausgewertet.
      2. Dann der Funktionsaufruf `f()` druckt „F!“ auf die Konsole und
         wird dann zu der Zahl `2` ausgewertet.
   2. Der `x[f()]`-Eigenschaftszugriff auf diesem Zuweisungsbereich
      ist nun zu Ende bewertet;
      sein Ergebnis ist ein variabler Eigenschaftsverweis: `x[2]`.
   3. Dann der Funktionsaufruf `g()` druckt „G!“ auf die Konsole und
      wird dann zu der Zahl `3` ausgewertet.
   4. Dieses `3` wird jetzt `x[2]` zugewiesen.
      (Dieser Schritt wird nur erfolgreich ausgeführt, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` ist jetzt zu Ende bewertet;
   sein Ergebnis ist der neue Wert von `x[2]` – der zufällig `3` ist.
   `x[2]` ist nun `3` zugewiesen,
   und die Konsole hat „F!“ gedruckt, dann „G!“.

### Vermeiden Sie Zuweisungsketten

Verketten von Zuweisungen oder Verschachtelungen von Zuweisungen in anderen Ausdrücken können
zu überraschendem Verhalten führen. Aus diesem Grund,
[das Verketten von Zuweisungen in derselben Anweisung wird nicht empfohlen](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere, wenn Sie eine Variablenkette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Anweisung verwenden, funktioniert dies oft _nicht_. Nur die äußerste/linkeste Variable würde deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ von der `const`/`let`/`var`-Anweisung erklärt.
Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung deklariert scheinbar die Variablen `x`, `y` und `z`.
Tatsächlich wird jedoch nur die Variable `z` deklariert.
`y` und `x` sind entweder ungültige Referenzen auf nicht existierende Variablen (im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "Sloppy Mode")}} erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert zurück, der darauf basiert, ob der Vergleich wahr ist.
Die Operanden können numerische, string, logische oder [objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein.
Strings werden basierend auf der Standard-lexikographischen Reihenfolge, unter Verwendung von Unicode-Werten, verglichen.
In den meisten Fällen, wenn die beiden Operanden nicht vom gleichen Typ sind, versucht JavaScript, sie für den Vergleich in einen geeigneten Typ zu konvertieren.
Diese Verhaltensweise führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen bei der Typkonversion innerhalb von Vergleichen betreffen die `===` und `!==` Operatoren, die strenge Gleichheits- und Ungleichheitsvergleiche durchführen.
Diese Operatoren versuchen nicht, die Operanden in kompatible Typen zu konvertieren, bevor sie die Gleichheit prüfen.
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
      <td>Gibt <code>true</code> zurück, wenn die Operanden ungleich sind.</td>
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
        <a href="/de/docs/Web/JavaScript/Equality_comparisons_and_sameness">Sameness in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Streng ungleich</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom selben Typ, aber nicht gleich sind oder unterschiedlichen Typs sind.
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

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als Operanden und gibt einen einzigen numerischen Wert zurück.
Die Standard-Arithmetik-Operatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren arbeiten wie in den meisten anderen Programmiersprachen mit Fließkommazahlen (insbesondere beachten, dass Division durch Null {{jsxref("Infinity")}} ergibt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standardarithmetischen Operationen (`+`, `-`, `*`, `/`), bietet JavaScript die arithmetischen Operatoren, die in der folgenden Tabelle aufgelistet sind:

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
        Unärer Operator. Fügt seinem Operanden eins hinzu. Wenn er als Präfix-Operator
        (<code>++x</code>) verwendet wird, gibt er den Wert seines Operanden nach Hinzufügen von einem zurück;
        wenn er als Postfix-Operator (<code>x++</code>) verwendet wird, gibt er den Wert seines Operanden vor dem Hinzufügen von eins zurück.
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
        Unärer Operator. Subtrahiert einen von seinem Operanden.
        Der Rückgabewert ist dem des Inkrement-Operators analog.
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
        Unärer Operator. Versucht <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">den Operanden in eine Zahl umzuwandeln</a>, wenn er nicht bereits eine ist.
      </td>
      <td>
        <p><code>+"3"</code> ergibt <code>3</code>.</p>
        <p><code>+true</code> ergibt <code>1</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiationsoperator</a> (<code>**</code>)
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

Ein Bitweiser Operator behandelt seine Operanden als Satz von 32 Bits (Nullen und Einsen), anstatt als Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun
eine binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen
binären Darstellungen aus, geben aber Standard-JavaScript-Zahlenwerte zurück.

Die folgende Tabelle fasst JavaScripts bitweise Operatoren zusammen.

| Operator                                                                                              | Verwendung | Beschreibung                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                              | `a & b`    | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Eins sind.                                                                                         |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                              | `a \| b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Null sind.                                                                                         |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                              | `a ^ b`    | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits identisch sind. [Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweises NICHT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                            | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                           |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                           | `a << b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach links und verschiebt Nullbits von rechts herein.                                                                                            |
| [Vorzeichenbehaftete Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)     | `a >> b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts und verwirft Bits, die verschoben wurden.                                                                                            |
| [Vorzeichenlose Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft Bits, die verschoben wurden, und schiebt Nullbits von links herein.                                                        |

### Bitweise logische Operatoren

Konzeptionell arbeiten die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in 32-Bit-Ganzzahlen umgewandelt und durch eine Reihe von Bits (Nullen und Einsen) ausgedrückt.
  Zahlen mit mehr als 32 Bit verlieren ihre bedeutendsten Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit usw.
- Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Zum Beispiel ist die Binärdarstellung von neun 1001 und die Binärdarstellung von fünfzehn 1111.
Wenn die bitweisen Operatoren auf diese Werte angewendet werden, ergeben sich folgende Ergebnisse:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits mit dem Bitweisen-NICHT-Operator invertiert werden, und dass Werte mit
dem höchsten (links-most) Bit, das auf 1 gesetzt ist, negative Zahlen
(Zweiers-Komplement-Darstellung) darstellen. `~x` wird auf denselben Wert
ausgewertet, den auch `-x - 1` ergibt.

### Bitweise Schiebeoperatoren

Die bitweisen Schiebeoperatoren nehmen zwei Operanden: der erste ist eine Menge, die verschoben werden soll, und der zweite gibt die Anzahl der Bitpositionen an, um die der erste Operand verschoben werden soll.
Die Richtung der Schiebeoperation wird durch den verwendeten Operator gesteuert.

Schiebeoperatoren konvertieren ihre Operanden in 32-Bit-Ganzzahlen und geben entweder Typ {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück. Konkret, wenn der Typ des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück;
anderenfalls geben sie {{jsxref("Number")}} zurück.

Die Schiebeoperatoren sind in der folgenden Tabelle aufgelistet.

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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Left_shift">Linksverschiebung</a><br />(<code>&#x3C;&#x3C;</code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        links. Überzählige Bits, die nach links verschoben werden, werden verworfen. Null-Bits
        werden von rechts hereingeschoben.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach
        links verschoben zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Vorzeichenbehaftete Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überzählige Bits, die nach rechts verschoben werden, werden verworfen. Kopien von
        dem linken Bit werden von links hereingeschoben.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts
        verschoben zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, weil das Vorzeichen beibehalten wird.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Vorzeichenlose Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach
        rechts. Überzählige Bits, die nach rechts verschoben werden, werden verworfen. Null-Bits
        werden von links hereingeschoben.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts
        verschoben zu 100 wird, was 4 ist. Für nicht-negative Zahlen liefern vorzeichenlose Rechtsverschiebung
        und vorzeichenbehaftete Rechtsverschiebung dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit booleschen (logischen) Werten verwendet; wenn sie das sind, geben sie einen booleschen Wert zurück.
Die Operatoren `&&`, `||` und `??` geben jedoch tatsächlich den Wert eines der angegebenen Operanden zurück, sodass, wenn diese
Operatoren mit nicht-booleschen Werten verwendet werden, sie möglicherweise einen nicht-booleschen Wert zurückgeben. Da sie so sind, werden sie manchmal auch als "Wertauswahl-Operatoren" bezeichnet.
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
        Operanden wahr sind; andernfalls gibt es <code>false</code zurück>.
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
        Werten verwendet wird, gibt <code>||</code> <code>true</code> zurück, wenn entweder Operand
        wahr ist; wenn beide falsch sind, gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish Coalescing Operator</a> (<code>??</code>)
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

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind solche, die in `null`, `0`, `0n`, `NaN`, den leeren String (`""`) oder `undefined` ausgewertet werden.

Der folgende Code zeigt Beispiele für den `&&`-Operator (logisches UND).

```js
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
```

Der folgende Code zeigt Beispiele für den `||`-Operator (logisches ODER).

```js
const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat
```

Der folgende Code zeigt Beispiele für den `??`-Operator (Nullish Coalescing).

```js
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
```

Beachten Sie, wie `??` wie `||` funktioniert, jedoch nur den zweiten Ausdruck zurückgibt, wenn der erste "{{Glossary("Nullish", "nullish")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||` zum Festlegen von Standardwerten für Werte, die möglicherweise `null` oder `undefined` sind, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standardwert nicht gelten sollte.

Der folgende Code zeigt Beispiele für den `!`-Operator (logisches NICHT).

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschließ-Evaluation

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie auf mögliche
"Kurzschluss"-Bewertung mit den folgenden Regeln getestet:

- `falsy && anything` wird kurzgeschlossen auf den Falsy-Wert ausgewertet.
- `truthy || anything` wird kurzgeschlossen auf den Truthy-Wert ausgewertet.
- `nonNullish ?? anything` wird kurzgeschlossen auf den Non-Nullish-Wert ausgewertet.

Die Regeln der Logik garantieren, dass diese Bewertungen immer korrekt sind. Beachten Sie, dass der
_anything_-Teil der obigen Ausdrücke nicht ausgewertet wird, sodass alle Nebeneffekte des
nicht stattfinden.

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

Eine Ausnahme ist [Unsigned Right Shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat und daher technisch gesehen kein „höchstes Bit“ hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig austauschbar — Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder ein Subset noch ein Superset von Zahlen ist. BigInts haben eine höhere Präzision als Zahlen bei der Darstellung großer Ganzzahlen, können jedoch keine Dezimalzahlen darstellen, sodass eine implizite Konvertierung auf beiden Seiten Präzision verlieren könnte. Verwenden Sie eine explizite Konvertierung, um anzugeben, ob Sie die Operation als Zahlen- oder BigInt-Operation wünschen.

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

Zusätzlich zu den Vergleichsoperatoren, die auf String-Werte angewendet werden können, verkettet der Konkatenationsoperator (+) zwei String-Werte miteinander und gibt einen anderen String zurück, der die Vereinigung der beiden Operanden-Strings ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzform-Zuweisungsoperator `+=` kann auch verwendet werden, um Strings zu verketteken.

Zum Beispiel,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingter (ternärer) Operator

Der [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist der einzige JavaScript-Operator, der drei Operanden nimmt.
Der Operator kann je nach Bedingung einen von zwei Werten haben.
Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn `condition` wahr ist, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Sie können den bedingten Operator überall dort verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist der Variable `status` den Wert „adult“ zu, wenn
`age` achtzehn oder mehr ist. Andernfalls weist sie `status` den Wert „minor“ zu.

## Kommaoperator

Der [Comma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich innerhalb einer `for`-Schleife verwendet, um mehrere Variablen jedes Mal durch die Schleife zu aktualisieren.
Es wird als schlechter Stil angesehen, ihn anderswo zu verwenden, insbesondere wenn es nicht notwendig ist.
Oft können und sollten stattdessen zwei separate Anweisungen verwendet werden.

Zum Beispiel, wenn `a` ein zweidimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Kommaoperator, um zwei Variablen gleichzeitig zu aktualisieren.
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

Eine unäre Operation ist eine Operation mit nur einem Operanden.

### delete

Der [`delete`-Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) löscht eine Eigenschaft eines Objekts.
Die Syntax ist:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts ist, `property` eine vorhandene Eigenschaft, und `propertyKey` ein String oder Symbol ist, das auf eine vorhandene Eigenschaft verweist.

Wenn der `delete`-Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Wenn Sie anschließend darauf zugreifen, wird `undefined` zurückgegeben.
Der `delete`-Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente daraus zu löschen.
Dies wird jedoch als schlechte Praxis angesehen — versuchen Sie, dies zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indexiert.
Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie. die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

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

Für die Schlüsselwörter `true` und `null` gibt der `typeof`-Operator
die folgenden Ergebnisse zurück:

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

Der [`void`-Operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt ein Ausdruck an, der ausgewertet wird, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck, der ausgewertet wird.
Die Klammern um den Ausdruck herum sind optional, aber es ist guter Stil, sie zur Vermeidung von Prioritätsproblemen zu verwenden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt einen booleschen Wert zurück, je nachdem, ob der Vergleich wahr ist.

### in

Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt enthalten ist.
Die Syntax ist:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein String-, numerischer- oder Symbolexpression ist, die einen Eigenschaftsnamen oder einen Array-Index darstellt, und `objectName` der Name eines Objekts ist.

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
zurück, wenn das angegebene Objekt vom angegebenen Objekttyp ist. Der Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet wird, und `objectType` ein Konstruktor ist, der einen Typ repräsentiert, wie z. B. {{jsxref("Date")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen müssen.
Zum Beispiel, wenn Sie Ausnahmen abfangen, können Sie zu unterschiedlichem Ausnahmehandhabungscode wechseln, abhängig von der Art der geworfenen Ausnahme.

Zum Beispiel verwendet der folgende Code `instanceof`, um zu bestimmen, ob `theDay` ein `Date`-Objekt ist. Da `theDay` ein `Date`-Objekt ist, werden die Anweisungen in der `if`-Anweisung ausgeführt.

```js
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren arbeiten letztendlich auf einem oder mehrere grundlegende Ausdrücke. Diese grundlegenden Ausdrücke beinhalten [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt auch einige andere Arten. Sie werden kurz unten eingeführt, und ihre Semantik wird detailliert in ihren jeweiligen Referenzabschnitten beschrieben.

### this

Verwenden Sie das [`this`-Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen.
Im Allgemeinen bezieht sich `this` im Kontext einer Methode auf das aufrufende Objekt.
Verwenden Sie `this` entweder mit Punkt- oder Klammernotation:

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

Sie können `validate` in jedem Formularelement `onChange`-Ereignishandlers aufrufen, indem Sie `this` verwenden, um es an das Formularelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Priorität der Bewertung in
-Ausdrücken. Zum Beispiel können Sie die Multiplikation und Divison zuerst übersteuern, dann
addition und Subtraktion, um die Addition zuerst zu bewerten.

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

Die [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Syntax holt Eigenschaftswerte auf Objekten ab, entweder durch Punkt-Notation oder Klammer-Notation.

```js
object.property;
object["property"];
```

Der [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) Leitfaden geht detaillierter auf Objekt-Eigenschaften ein.

### Optionale Verkettung

Die [Optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) Syntax (`?.`) führt die verkettete Operation auf einem Objekt aus, wenn es definiert und nicht `null` ist, und kurzschließt andernfalls die Operation und gibt `undefined` zurück.
Dies ermöglicht es Ihnen, auf einen Wert zu arbeiten, der `null` oder `undefined` sein könnte, ohne einen `TypeError` zu verursachen.

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
Es ist nützlich mit [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um den Eltern-Konstruktor aufzurufen, zum Beispiel.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}
