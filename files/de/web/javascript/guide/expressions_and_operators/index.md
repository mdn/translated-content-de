---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt JavaScripts Ausdrücke und Operatoren, einschließlich Zuweisungen, Vergleiche, Arithmetik, bitweiser Operationen, logischer Operationen, Zeichenkettenoperationen, Ternär- und mehr.

Auf einer hohen Ebene ist ein _Ausdruck_ eine gültige Einheit von Code, die auf einen Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche, die Nebeneffekte haben (wie z.B. Werte zuweisen) und solche, die rein _auswerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`-Operator, um dem Variablen `x` den Wert sieben zuzuweisen. Der Ausdruck selbst wertet zu `7` aus.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zusammenzuzählen und einen Wert, `7`, zu erzeugen. Wenn er jedoch nicht Teil eines größeren Konstrukts wird (z.B. einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird das Ergebnis sofort verworfen - dies ist normalerweise ein Programmierfehler, da die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele auch zeigen, werden alle komplexen Ausdrücke durch _Operatoren_ wie `=` und `+` verbunden. In diesem Abschnitt werden wir die folgenden Operatoren vorstellen:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt-Operatoren](#bigint-operatoren)
- [Zeichenkettenoperatoren](#zeichenkettenoperatoren)
- [Bedingter (ternärer) Operator](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verbinden Operanden, die entweder durch Operatoren höherer Vorrangigkeit oder durch einen der [grundlegenden Ausdrücke](#grundlegende_ausdrücke) gebildet werden. Eine vollständige und detaillierte Liste der Operatoren und Ausdrücke ist auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) verfügbar.

Die _Vorrangigkeit_ der Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in verschiedenen Reihenfolgen vorkommen, würden beide Ausdrücke mit `7` enden, da `*` Vorrang vor `+` hat, sodass der `*`-verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operatorvorrangigkeit durch Verwendung von Klammern außer Kraft setzen (was einen [gruppierten Ausdruck](#gruppierungsoperator) erzeugt - den grundlegenden Ausdruck). Um eine vollständige Tabelle der Operatorvorrangigkeiten sowie verschiedene Einschränkungen zu sehen, siehe die Seite [Operatorvorrang-Referenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren und einen speziellen ternären Operator, den bedingten Operator. Ein binärer Operator erfordert zwei Operanden, einen vor dem Operator und einen danach:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird _infix_ binärer Operator genannt, da der Operator zwischen zwei Operanden platziert wird. Alle binären Operatoren in JavaScript sind infix.

Ein unärer Operator erfordert einen einzelnen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die Form `operator operand` wird _prefix_ unärer Operator genannt, und die Form `operand operator` wird _postfix_ unärer Operator genannt. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript - alle anderen Operatoren, wie `!`, `typeof`, usw. sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden basierend auf dem Wert seines rechten Operanden einen Wert zu. Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist. Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzschreibweise für die in der folgenden Tabelle aufgeführten Operationen sind:

| Name                                                                                                                 | Kurzschreiboperator | Bedeutung          |
| -------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                                  | `x = f()`           | `x = f()`          |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`          | `x = x + f()`      |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                          | `x -= f()`          | `x = x - f()`      |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`          | `x = x * f()`      |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`          | `x = x / f()`      |
| [Restzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                    | `x %= f()`          | `x = x % f()`      |
| [Exponentiierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                   | `x **= f()`         | `x = x ** f()`     |
| [Linksverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`         | `x = x << f()`     |
| [Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`         | `x = x >> f()`     |
| [Unsigned-Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`        | `x = x >>> f()`    |
| [Bitweise UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                         | `x &= f()`          | `x = x & f()`      |
| [Bitweise XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                         | `x ^= f()`          | `x = x ^ f()`      |
| [Bitweise ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                         | `x \|= f()`         | `x = x \| f()`     |
| [Logische UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                         | `x &&= f()`         | `x && (x = f())`   |
| [Logische ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                         | `x \|\|= f()`       | `x \|\| (x = f())` |
| [Nullish Coalescing Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)            | `x ??= f()`         | `x ?? (x = f())`   |

### Zuweisung zu Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, dann kann die linke Seite eines Zuweisungsausdruckes Zuweisungen zu Eigenschaften dieses Ausdrucks vornehmen. Zum Beispiel:

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

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, führen Zuweisungen zu Eigenschaften dieses Ausdrucks zu keiner Zuweisung:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wirft der obige Code einen Fehler, da man keine Eigenschaften zu Primitives zuweisen kann.

Es ist ein Fehler, Werte an nicht modifizierbare Eigenschaften oder an Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen ermöglicht die [Destrukturierungs](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Syntax, Daten aus Arrays oder Objekten herauszuziehen, mit einer Syntax, die der Konstruktion von Array- und Objektliteralen entspricht.

Ohne Destrukturierung sind mehrere Anweisungen erforderlich, um Werte aus Arrays und Objekten herauszuziehen:

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

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration (d.h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen verwendet.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Wie andere Ausdrücke werten Zuweisungsausdrücke wie `x = f()` jedoch in einen Ergebniswert aus. Obwohl dieser Ergebniswert normalerweise nicht verwendet wird, kann er dann von einem anderen Ausdruck verwendet werden.

Das Verketteln oder Verschachteln von Zuweisungen in anderen Ausdrücken kann zu Überraschungen führen. Aus diesem Grund, [wird das Verketteln oder Verschachteln von Zuweisungen von einigen JavaScript-Stilrichtlinien abgeschreckt](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment). Dennoch kann es manchmal vorkommen, daher ist es wichtig, zu verstehen, wie es funktioniert.

Durch das Verketteln oder Verschachteln eines Zuweisungsausdrucks kann sein Ergebnis selbst einer anderen Variablen zugewiesen werden. Es kann protokolliert werden, es kann in ein Array-Literal oder einen Funktionsaufruf integriert werden und so weiter.

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

Das Auswertungsergebnis entspricht dem Ausdruck rechts vom `=`-Zeichen in der "Bedeutung"-Spalte in der obigen Tabelle. Das bedeutet, dass `x = f()` in das Ergebnis von `f()` auswertet, `x += f()` in die resultierende Summe `x + f()` auswertet, `x **= f()` in die resultierende Potenz `x ** f()` auswertet usw.

Im Fall von logischen Zuweisungen, `x &&= f()`, `x ||= f()`, und `x ??= f()`, ist der Rückgabewert das der logischen Operation ohne die Zuweisung, also `x && f()`, `x || f()`, und `x ?? f()`, entsprechend.

Wenn diese Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren wie Array-Literale verkettet werden, werden die Zuweisungsausdrücke **von rechts nach links** gruppiert (sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts** ausgewertet.

Beachten Sie, dass für alle anderen Zuweisungsoperatoren als `=` selbst, die resultierenden Werte immer auf den Werten der Operanden basieren _vor_ der Operation.

Zum Beispiel, nehmen wir an, die folgenden Funktionen `f` und `g` und die Variablen `x` und `y` sind deklariert:

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

`y = x = f()` ist äquivalent zu `y = (x = f())`, da der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist. Jedoch wird es von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird in eine Referenz auf die Variable mit dem Namen `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wird in eine Referenz auf die Variable mit dem Namen `x` ausgewertet.
      2. Der Funktionsaufruf `f()` druckt "F!" in die Konsole und wird dann zur Zahl `2` ausgewertet.
      3. Dieses `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` ist jetzt abgeschlossen; sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2`-Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` ist jetzt abgeschlossen; sein Ergebnis ist der neue Wert von `y` – der zufällig `2` ist. `x` und `y` sind auf `2` zugewiesen und die Konsole hat "F!" gedruckt.

#### Auswertungsbeispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird in eine Referenz auf die Variable mit dem Namen `y` ausgewertet.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` druckt "F!" in die Konsole und wird dann zur Zahl `2` ausgewertet.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wird in eine Referenz auf die Variable mit dem Namen `x` ausgewertet.
         2. Der Funktionsaufruf `g()` druckt "G!" in die Konsole und wird dann zur Zahl `3` ausgewertet.
         3. Dieses `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` ist jetzt abgeschlossen; sein Ergebnis ist der neue Wert von `x`, der `3` ist. Dieses `3`-Ergebnis wird zum nächsten Element im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]` ist jetzt abgeschlossen; sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird jetzt `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` ist jetzt abgeschlossen; sein Ergebnis ist der neue Wert von `y` – der zufällig `[ 2, 3 ]` ist. `x` ist jetzt auf `3` zugewiesen, `y` ist jetzt auf `[ 2, 3 ]` zugewiesen und die Konsole hat "F!" dann "G!" gedruckt.

#### Auswertungsbeispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet. (Dieses Beispiel geht davon aus, dass `x` bereits einem Objekt zugewiesen wurde. Für weitere Informationen über Objekte, lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaftszugriff auf der linken Seite dieser Zuweisung beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftszugriff wird in eine Referenz auf die Variable mit dem Namen `x` ausgewertet.
      2. Dann druckt der Funktionsaufruf `f()` "F!" in die Konsole und wird dann zur Zahl `2` ausgewertet.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung ist jetzt abgeschlossen; sein Ergebnis ist eine variable Eigenschaftsreferenz: `x[2]`.
   3. Dann druckt der Funktionsaufruf `g()` "G!" in die Konsole und wird dann zur Zahl `3` ausgewertet.
   4. Dieses `3` wird jetzt `x[2]` zugewiesen. (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen wurde.)
2. Der Zuweisungsausdruck `x[f()] = g()` ist jetzt abgeschlossen; sein Ergebnis ist der neue Wert von `x[2]` – der zufällig `3` ist. `x[2]` ist jetzt auf `3` zugewiesen und die Konsole hat "F!" dann "G!" gedruckt.

### Vermeiden von Zuweisungsketten

Das Verketteln oder Verschachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen. Aus diesem Grund, [wird das Verketteln von Zuweisungen in derselben Anweisung abgeschreckt](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Platzieren einer Variablenkette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Anweisung funktioniert oft _nicht_. Nur die äußerste/linkeste Variable würde deklariert werden; andere Variablen innerhalb der Zuweisungskette werden _nicht_ durch die `const`/`let`/`var`-Anweisung deklariert. Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung scheint die Variablen `x`, `y`, und `z` zu deklarieren. Tatsächlich deklariert sie jedoch nur die Variable `z`. `y` und `x` sind entweder ungültige Referenzen zu nicht existierenden Variablen (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "lässigen Modus")}} erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert zurück, basierend darauf, ob der Vergleich wahr ist. Die Operanden können numerische, Zeichenketten-, logische oder [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein. Zeichenketten werden basierend auf der Standard-Lexikographie-Reihenfolge, unter Verwendung von Unicode-Werten, verglichen. In den meisten Fällen, wenn die beiden Operanden nicht von derselben Art sind, versucht JavaScript, sie in eine passende Art für den Vergleich zu konvertieren. Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden. Die einzigen Ausnahmen zur Typkonvertierung bei Vergleichen betreffen die `===` und `!==` Operatoren, die strikte Gleichheit und Ungleichheit vergleichen. Diese Operatoren versuchen nicht, die Operanden vor dem Prüfen der Gleichheit in kompatible Typen zu konvertieren. Die folgende Tabelle beschreibt die Vergleichsoperatoren anhand dieses Muster-Codes:

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
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ sind aber ungleich, oder von unterschiedlichem Typ sind.
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
        Gibt <code>true</code> zurück, wenn der linke Operand weniger als der rechte Operand ist.
      </td>
      <td>
        <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Weniger als oder gleich</a>
        (<code>&#x3C;=</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn der linke Operand weniger als oder gleich dem rechten Operand ist.
      </td>
      <td>
        <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** `=>` ist kein Vergleichsoperator, sondern die Notation
> für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetische Operatoren

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als ihre Operanden und gibt einen einzigen numerischen Wert zurück. Die Standard-Arithmetik-Operatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`), und Division (`/`). Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass eine Division durch Null {{jsxref("Infinity")}} ergibt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standard-Arithmetik-Operationen (`+`, `-`, `*`, `/`), bietet JavaScript die in der folgenden Tabelle aufgelisteten arithmetischen Operatoren:

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
        Binärer Operator. Gibt den ganzzahligen Rest zurück, wenn die zwei Operanden geteilt werden.
      </td>
      <td>12 % 5 gibt 2 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Increment">Inkrement</a> (<code>++</code>)
      </td>
      <td>
        Unärer Operator. Erhöht seinen Operanden um eins. Wenn als Präfix-Operator
        (<code>++x</code>) verwendet, gibt den Wert seines Operanden nach dem Hinzufügen eins zurück;
        wenn als Postfix-Operator (<code>x++</code>) verwendet, gibt den Wert seines Operanden
        vor dem Hinzufügen eins zurück.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>++x</code> <code>x</code> auf 4
        und gibt 4 zurück, während <code>x++</code> 3 zurückgibt und dann erst <code>x</code> auf 4 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Decrement">Dekrement</a> (<code>--</code>)
      </td>
      <td>
        Unärer Operator. Subtrahiert eins von seinem Operanden.
        Der zurückgegebene Wert ist analog zu dem des Inkrement-Operators.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, dann setzt <code>--x</code> <code>x</code> auf 2
        und gibt 2 zurück, während <code>x--</code> 3 zurückgibt und dann erst <code>x</code> auf 2 setzt.
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
        Unärer Operator. Versucht, <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">den Operanden in eine Zahl umzuwandeln</a>, wenn er nicht schon eine ist.
      </td>
      <td>
        <p><code>+"3"</code> gibt <code>3</code> zurück.</p>
        <p><code>+true</code> gibt <code>1</code> zurück.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiierungsoperator</a> (<code>**</code>)
      </td>
      <td>
        Berechnet die <code>Basis</code> zur <code>Exponenten</code>-Potenz,
        das heißt, <code>Basis^Exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> gibt <code>8</code> zurück.<br /><code>10 ** -1</code>
        gibt <code>0.1</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als eine Menge von 32 Bit (Nullen und Einsen), anstatt als Dezimalzahlen, Hexadezimalzahlen oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun eine binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen binären Darstellungen durch, aber sie geben standardmäßige JavaScript-Zahlenwerte zurück.

Die folgende Tabelle fasst JavaScripts bitweise Operatoren zusammen.

| Operator                                                                                               | Verwendung | Beschreibung                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweise UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                                | `a & b`    | Gibt eine Eins in jeder Bit-Position zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                                     |
| [Bitweise ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                                | `a \| b`   | Gibt eine Null in jeder Bit-Position zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                                                     |
| [Bitweise XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                                | `a ^ b`    | Gibt eine Null in jeder Bit-Position zurück, für die die entsprechenden Bits gleich sind. [Gibt eine Eins in jeder Bit-Position zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweise NICHT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                              | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                          |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                            | `a << b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach links und verschiebt Nullen von rechts hinein.                                                                                             |
| [Vorzeichenübergreifende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)  | `a >> b`   | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts und verwirft Bits, die herausgeschoben werden.                                                                                      |
| [Nullangenäherte Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, verwirft Bits, die herausgeschoben werden, und verschiebt Nullen von links hinein.                                                 |

### Logische bitweise Operatoren

Konzepte zu den logischen bitweisen Operatoren:

- Die Operanden werden zu 32-Bit-Ganzzahlen konvertiert und durch eine Reihe von Bits (Nullen und Einsen) ausgedrückt. Zahlen mit mehr als 32 Bits werden ihre bedeutendsten Bits abgeschnitten. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit zum ersten Bit, zweites Bit zum zweiten Bit und so weiter.
- Der Operator wird auf jedes Bitpaar angewendet und das Ergebnis bitweise konstruiert.

Zum Beispiel ist die binäre Darstellung von neun 1001, und die binäre Darstellung von fünfzehn ist 1111. Also, wenn die bitweisen Operatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits mit dem Bitweisen NICHT-Operator invertiert werden und dass Werte mit dem meistbedeutenden (linksmost) Bit, das auf 1 gesetzt ist, negative Zahlen darstellen (Zweierkomplement-Darstellung). `~x` wertet zum gleichen Wert aus, wie `-x - 1` ausgewertet wird.

### Bitweise Verschiebungsoperatoren

Die bitweisen Verschiebungsoperatoren nehmen zwei Operanden an: Der erste ist die zu verschiebende Menge und der zweite gibt an, um wie viele Bitpositionen der erste Operand verschoben werden soll. Die Richtung der Verschiebungsoperation wird durch den verwendeten Operator gesteuert.

Verschiebungsoperatoren konvertieren ihre Operanden in 32-Bit-Ganzzahlen und geben ein Ergebnis des Typs {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: speziell, wenn der Typ des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück; ansonsten geben sie {{jsxref("Number")}} zurück.

Die Verschiebungsoperatoren sind in der folgenden Tabelle aufgeführt.

<table class="fullwidth-table">
  <caption>
    Bitweise Verschiebungsoperatoren
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
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach links. Überflüssige Bits, die nach links herausgeschoben werden, werden verworfen. Null-Bits werden von rechts hereingeschoben.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach links verschoben wird und zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Vorzeichenübergreifende Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überflüssige Bits, die nach rechts herausgeschoben werden, werden verworfen. Kopien des linksmost Bits werden von links hereingeschoben.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts verschoben wird und zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, weil das Vorzeichen beibehalten wird.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Nullangenäherte Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überflüssige Bits, die nach rechts herausgeschoben werden, werden verworfen. Null-Bits werden von links hereingeschoben.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts verschoben wird und zu 100 wird, was 4 ist. Für nicht-negative Zahlen ergeben Nullangenäherte Rechtsverschiebung und Vorzeichenübergreifende Rechtsverschiebung das gleiche Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden normalerweise mit booleschen (logischen) Werten verwendet; wenn sie verwendet werden, geben sie einen booleschen Wert zurück. Allerdings geben die Operatoren `&&`, `||`, und `??` tatsächlich den Wert eines der angegebenen Operanden zurück, so dass diese Operatoren, wenn sie mit nicht-booleschen Werten verwendet werden, einen nicht-booleschen Wert zurückgeben können. Daher sollten sie korrekterweise "Wertauswahloperatoren" genannt werden. Die logischen Operatoren werden in der folgenden Tabelle beschrieben.

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
        andernfalls gibt es <code>expr2</code> zurück. Wird es mit booleschen Werten verwendet,
        gibt <code>&#x26;&#x26;</code> <code>true</code> zurück, wenn beide
        Operanden wahr sind; andernfalls gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> umgewandelt werden kann;
        andernfalls gibt es <code>expr2</code> zurück. Wird es mit booleschen Werten verwendet,
        gibt <code>||</code> <code>true</code> zurück, wenn einer der Operanden
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
        <code>true</code> umgewandelt werden kann; andernfalls gibt es <code>true</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, der leeren Zeichenkette (`""`) oder `undefined` auswerten.

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

Beachten Sie, wie `??` wie `||` funktioniert, aber es gibt nur den zweiten Ausdruck zurück, wenn der erste "{{Glossary("Nullish", "nullisch")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||` zum Festlegen von Standardwerten für Werte, die `null` oder `undefined` sein könnten, insbesondere, wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht gelten sollte.

Der folgende Code zeigt Beispiele für den `!` (logisches NICHT) Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie auf mögliche "Kurzschluss"-Auswertung getestet, unter Verwendung der folgenden Regeln:

- `falsch && irgendetwas` wird kurzgeschlossen in den falschen Wert ausgewertet.
- `wahr || irgendetwas` wird kurzgeschlossen in den wahren Wert ausgewertet.
- `nicht-Nullisch ?? irgendetwas` wird kurzgeschlossen in den nicht-nullischen Wert ausgewertet.

Die Regeln der Logik garantieren, dass diese Bewertungen immer korrekt sind. Beachten Sie, dass der _irgendetwas_ Teil der obigen Ausdrücke nicht ausgewertet wird, sodass alle Nebenwirkungen des Auswertens von diesem nicht eintreten.

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

Eine Ausnahme ist die [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat und daher technisch kein "höchstes Bit" hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht wechselseitig austauschbar — Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder eine Untermenge noch eine Obermenge von Zahlen ist. BigInts haben höhere Präzision als Zahlen beim Darstellen großer Ganzzahlen, können aber keine Dezimalzahlen darstellen, so dass eine implizite Umwandlung auf beiden Seiten Präzision verlieren könnte. Verwenden Sie eine explizite Umwandlung, um anzugeben, ob Sie die Operation als Zahlenoperation oder als BigInt-Operation wünschen.

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

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenkettenwerte angewendet werden können, fügt der Verkettungsoperator (+) zwei Zeichenkettenwerte zusammen und gibt eine andere Zeichenkette zurück, die die Vereinigung der beiden Operandzeichenketten ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Zuweisungskurzoperator `+=` kann auch verwendet werden, um Zeichenketten zu verknüpfen.

Zum Beispiel,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingter (ternärer) Operator

Der [bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist der einzige JavaScript-Operator, der drei Operanden nimmt. Der Operator kann einen von zwei Werten basierend auf einer Bedingung haben. Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn die `Bedingung` wahr ist, hat der Operator den Wert von `val1`. Andernfalls hat er den Wert von `val2`. Sie können den bedingten Operator überall verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel:

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist den Wert "adult" der Variable `status` zu, wenn `age` achtzehn oder mehr ist. Andernfalls weist sie den Wert "minor" `status` zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`) wertet seine beiden Operanden aus und gibt den Wert des letzten Operanden zurück. Dieser Operator wird hauptsächlich innerhalb einer `for`-Schleife verwendet, um mehrere Variablen bei jedem Durchlauf durch die Schleife zu aktualisieren. Es gilt als schlechter Stil, ihn anderwärtig zu verwenden, wenn er nicht notwendig ist. Oft können und sollten zwei separate Anweisungen anstelle dessen verwendet werden.

Zum Beispiel, wenn `a` ein zweidimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren. Der Code gibt die Werte der diagonalen Elemente im Array aus:

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

wobei `object` der Name eines Objekts ist, `property` eine bestehende Eigenschaft ist und `propertyKey` eine Zeichenkette oder ein Symbol ist, das sich auf eine bestehende Eigenschaft bezieht.

Wenn der `delete` Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt. Ein Versuch, danach darauf zuzugreifen, wird `undefined` liefern. Der `delete` Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente daraus mit `delete` zu löschen. Dies wird jedoch als schlechte Praxis angesehen — versuchen Sie, es zu vermeiden. Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indiziert. Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben. Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt eine Zeichenkette zurück, die den Typ des nicht ausgewerteten Operanden angibt. `operand` ist die Zeichenkette, Variable, das Schlüsselwort oder das Objekt, für das der Typ zurückgegeben werden soll. Die Klammern sind optional.

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

Für die Schlüsselwörter `true` und `null` gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder Zeichenkette gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof` Operator den Typ des Werts zurück, den die Eigenschaft enthält:

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

Der [`void` Operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt an, dass ein Ausdruck ausgewertet werden soll, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck zur Auswertung. Die Klammern um den Ausdruck sind optional, aber es ist guter Stil, sie zu verwenden, um Vorrangfragen zu vermeiden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt einen Booleschen Wert basierend darauf zurück, ob der Vergleich wahr ist.

### in

Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt ist. Die Syntax ist:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` eine Zeichenkette, ein numerischer oder symbolischer Ausdruck ist, der einen Eigenschaftsnamen oder Array-Index darstellt, und `objectName` der Name eines Objekts ist.

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

Der [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true` zurück, wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet wird, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie z.B. {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie zur Laufzeit den Typ eines Objekts bestätigen müssen. Zum Beispiel, wenn Ausnahmen eingefangen werden, können Sie in unterschiedlichen Ausnahmebehandlungscode verzweigen, abhängig von der Art der geworfenen Ausnahme.

Zum Beispiel verwendet der folgende Code `instanceof`, um zu bestimmen, ob `obj` ein `Map`-Objekt ist. Da `obj` ein `Map`-Objekt ist, werden die Anweisungen innerhalb des `if` Blocks ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren arbeiten schließlich auf einem oder mehreren grundlegenden Ausdrücken. Zu diesen grundlegenden Ausdrücken gehören [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt auch einige andere Arten. Sie werden kurz unten eingeführt, und ihre Semantik wird im Detail in ihren jeweiligen Referenzabschnitten beschrieben.

### this

Verwenden Sie das [`this` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen. Im Allgemeinen bezieht sich `this` im Inneren einer Methode auf das objekt, das die Methode aufruft. Verwenden Sie `this` entweder mit der Punkt- oder der Klammernotation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, es gibt eine Funktion `validate`, die eine Objekt-Eigenschaft `value` validiert, gegeben das Objekt und die hohen und niedrigen Werte:

```js
function validate(obj, lowVal, highVal) {
  if (obj.value < lowVal || obj.value > highVal) {
    console.log("Invalid Value!");
  }
}
```

Sie könnten `validate` in jedem `onChange` Event-Handler eines Formularelements aufrufen, wobei Sie `this` verwenden, um es an das Formularelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Vorrangigkeit der Auswertung in Ausdrücken. Zum Beispiel können Sie die Multiplikation und Division zuerst überschreiben, dann Addition und Subtraktion, um zuerst die Addition zu bewerten.

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

Die [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)-Syntax erhält Eigenschaftswerte von Objekten, indem entweder Punkt- oder Klammernotation verwendet wird.

```js
object.property;
object["property"];
```

Der [Leitfaden zur Arbeit mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) geht detaillierter auf Objekteigenschaften ein.

### Optionale Verkettung

Die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Syntax (`?.`) führt die verkettete Operation an einem Objekt aus, wenn es definiert und nicht-`null` ist, sonst wird die Operation abgebrochen und `undefined` zurückgegeben. Dies ermöglicht es Ihnen, auf einen Wert zuzugreifen, der `null` oder `undefined` sein könnte, ohne einen `TypeError` zu verursachen.

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

Das [`super` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen auf dem Elternobjekt aufzurufen. Es ist nützlich bei [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um beispielsweise den Elternkonstruktor aufzurufen.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
