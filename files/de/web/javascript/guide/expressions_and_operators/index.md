---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 06927abb9c3f434334729a6cc64010af9974d055
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

Dieses Kapitel beschreibt die Ausdrücke und Operatoren in JavaScript, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik, Zeichenfolge, Ternär und mehr.

Auf einer hohen Ebene ist ein _Ausdruck_ eine gültige Codeeinheit, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche, die Seiteneffekte haben (wie das Zuweisen von Werten), und solche, die rein _bewertet_ werden.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`- _Operator_, um den Wert sieben der Variablen `x` zuzuweisen. Der Ausdruck selbst wird zu `7` ausgewertet.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zu addieren und ergibt einen Wert, `7`. Wenn es jedoch letztendlich nicht Teil eines größeren Konstrukts ist (zum Beispiel eine [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird sein Ergebnis sofort verworfen – das ist normalerweise ein Programmierfehler, da die Auswertung keine Auswirkungen hat.

Wie die obigen Beispiele auch veranschaulichen, sind alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie `=` und `+`. In diesem Abschnitt werden wir die folgenden Operatoren einführen:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt-Operatoren](#bigint_operatoren)
- [String-Operatoren](#string-operatoren)
- [Bediengs-(ternärer) Operator](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationale Operatoren](#relationale_operatoren)

Diese Operatoren verbinden Operanden, die entweder von höherrangigen Operatoren oder einem der [basalen Ausdrücke](#basale_ausdrücke) erstellt werden. Eine vollständige und detaillierte Liste von Operatoren und Ausdrücken ist auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) verfügbar.

Die _Priorität_ von Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewandt werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlichen Reihenfolgen auftreten, würden beide Ausdrücke zu `7` führen, da `*` eine höhere Priorität als `+` hat, sodass der `*`-verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operator-Priorität überschreiben, indem Sie Klammern verwenden (die einen [gruppierten Ausdruck](#gruppierungsoperator) erstellen — der grundlegende Ausdruck). Um eine vollständige Tabelle der Operator-Priorität sowie verschiedene Abweichungen zu sehen, siehe die Seite [Operator-Priorität-Referenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren sowie einen speziellen ternären Operator, den bedingten Operator.
Ein binärer Operator benötigt zwei Operanden, einen vor dem Operator und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel, `3 + 4` oder `x * y`. Diese Form wird als _Infix_ binärer Operator bezeichnet, weil der Operator zwischen zwei Operanden gesetzt wird. Alle binären Operatoren in JavaScript sind Infix.

Ein unärer Operator benötigt einen einzelnen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel, `x++` oder `++x`. Die `operator operand` Form wird als _Präfix_ unärer Operator bezeichnet und die `operand operator` Form wird als _Postfix_ unärer Operator bezeichnet. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof`, etc., sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist einen Wert seinem linken Operanden basierend auf dem Wert seines rechten Operanden zu.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzform für die Operationen darstellen, die in der folgenden Tabelle aufgelistet sind:

| Name                                                                                                              | Kurzform-Operator | Bedeutung            |
| ----------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                           | `x = f()`         | `x = f()`            |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                         | `x += f()`        | `x = x + f()`        |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                   | `x -= f()`        | `x = x - f()`        |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)             | `x *= f()`        | `x = x * f()`        |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                         | `x /= f()`        | `x = x / f()`        |
| [Restzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                             | `x %= f()`        | `x = x % f()`        |
| [Exponentialzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                 | `x **= f()`       | `x = x ** f()`       |
| [Linksverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)              | `x <<= f()`       | `x = x << f()`       |
| [Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)            | `x >>= f()`       | `x = x >> f()`       |
| [Unsigned-Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()` | `x = x >>> f()`      |
| [Bitweise UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                   | `x &= f()`        | `x = x & f()`        |
| [Bitweise XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                   | `x ^= f()`        | `x = x ^ f()`        |
| [Bitweise ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                   | `x \|= f()`       | `x = x \| f()`       |
| [Logische UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                   | `x &&= f()`       | `x && (x = f())`     |
| [Logische ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                   | `x \|\|= f()`     | `x \|\| (x = f())`   |
| [Nullish-Zusammenführungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) | `x ??= f()`       | `x ?? (x = f())`     |

### Zuweisung zu Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, dann kann die linke Seite eines Zuweisungsausdrucks Zuweisungen zu den Eigenschaften dieses Ausdrucks vornehmen.
Zum Beispiel:

```js
const obj = {};

obj.x = 3;
console.log(obj.x); // Gibt 3 aus.
console.log(obj); // Gibt { x: 3 } aus.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Gibt 5 aus.
console.log(obj); // Gibt { x: 3, y: 5 } aus.
```

Für mehr Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, dann werden Zuweisungen zu Eigenschaften dieses Ausdrucks nicht zugewiesen:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Gibt undefined aus.
console.log(val); // Gibt 0 aus.
```

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) löst der obige Code einen Fehler aus, da man Eigenschaften nicht auf Primitive zuweisen kann.

Es ist ein Fehler, Werte unveränderbaren Eigenschaften oder den Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen ermöglicht die [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ein JavaScript-Ausdruck, Daten aus Arrays oder Objekten mit einer Syntax zu extrahieren, die dem Aufbau von Array- und
Objektliteralien entspricht.

Ohne Destrukturierung sind mehrere Anweisungen erforderlich, um Werte aus Arrays und Objekten zu extrahieren:

```js
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

Mit Destrukturierung können Sie mehrere Werte in einem einzigen Statement in eindeutige Variablen extrahieren:

```js
const [one, two, three] = foo;
```

### Auswertung und Verschachtelung

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration verwendet (d.h., mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen.

```js
// Deklariert eine Variable x und initialisiert sie mit dem Ergebnis von f().
// Das Ergebnis des x = f() Zuweisungsausdrucks wird verworfen.
let x = f();

x = g(); // Weist der Variable x das Ergebnis von g() erneut zu.
```

Wie bei anderen Ausdrücken werden Zuweisungsausdrücke wie `x = f()` in ein Ergebnis ausgewertet.
Obwohl dieses Ergebnis normalerweise nicht verwendet wird, kann es dann von einem anderen Ausdruck verwendet werden.

Verketten von Zuweisungen oder Verschachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen.
Aus diesem Grund [entmutigen einige JavaScript-Stilrichtlinien das Verketten oder Verschachteln von Zuweisungen](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).
Nichtsdestotrotz kann es manchmal vorkommen, dass Zuweisungen verkettet oder verschachtelt werden, also ist es wichtig, zu verstehen, wie sie funktionieren.

Durch Verkettung oder Verschachtelung eines Zuweisungsausdrucks kann sein Ergebnis selbst einer anderen Variablen zugewiesen werden.
Es kann protokolliert werden, es kann in ein Array-Literal oder einen Funktionsaufruf eingefügt werden, und so weiter.

```js-nolint
let x;
const y = (x = f()); // Oder gleichwertig: const y = x = f();
console.log(y); // Protokolliert den Rückgabewert der Zuweisung x = f().

console.log(x = f()); // Protokolliert den Rückgabewert direkt.

// Ein Zuweisungsausdruck kann an jeder Stelle verschachtelt werden
// wo Ausdrücke im Allgemeinen erlaubt sind,
// wie die Elemente eines Array-Literals oder als Argumente von Funktionsaufrufen.
console.log([0, x = f(), 0]);
console.log(f(0, x = f(), 0));
```

Das Auswertungsergebnis entspricht dem Ausdruck rechts des `=`-Zeichens in der
„Bedeutung“-Spalte der obigen Tabelle. Das bedeutet, dass `x = f()` in
das Ergebnis von `f()` ausgewertet wird, `x += f()` in die resultierende Summe `x + f()` ausgewertet wird,
`x **= f()` in die resultierende Potenz `x ** f()` ausgewertet wird, und so weiter.

Im Falle von logischen Zuweisungen, `x &&= f()`,
`x ||= f()`, und `x ??= f()`, ist der Rückgabewert der der
logischen Operation ohne die Zuweisung, also `x && f()`,
`x || f()`, und `x ?? f()`, jeweils.

Wenn Sie diese Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren
wie Array-Literals verketten, werden die Zuweisungsausdrücke **von rechts nach links gruppiert**
(sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts ausgewertet**.

Beachten Sie, dass für alle anderen Zuweisungsoperatoren als `=` selbst,
die resultierenden Werte immer auf den Operandenwerten _vor_
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

Berücksichtigen Sie diese drei Beispiele:

```js-nolint
y = x = f();
y = [f(), x = g()];
x[f()] = g();
```

#### Bewertung Beispiel 1

`y = x = f()` ist gleichbedeutend mit `y = (x = f())`,
da der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist.
Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird
      in eine Referenz auf die Variable mit dem Namen `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wird
         in eine Referenz auf die Variable mit dem Namen `x` ausgewertet.
      2. Der Funktionsaufruf `f()` gibt "F!" auf der Konsole aus und
         wird dann in die Zahl `2` ausgewertet.
      3. Diese `2`, das Ergebnis von `f()`, wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` hat nun die Auswertung abgeschlossen;
      sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Diese `2`, das Ergebnis, wird ebenfalls `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` hat nun die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `y` – der zufällig `2` ist.
   `x` und `y` sind auf `2` zugewiesen,
   und die Konsole hat "F!" ausgegeben.

#### Bewertung Beispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird
      in eine Referenz auf die Variable mit dem Namen `y` ausgewertet.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` gibt "F!" auf der Konsole aus und
         wird dann in die Zahl `2` ausgewertet.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wird
            in eine Referenz auf die Variable mit dem Namen `x` ausgewertet.
         2. Der Funktionsaufruf `g()` gibt "G!" auf der Konsole aus und
            wird dann in die Zahl `3` ausgewertet.
         3. Diese `3`, das Ergebnis von `g()`, wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` hat nun die Auswertung abgeschlossen;
         sein Ergebnis ist der neue Wert von `x`, der `3` ist.
         Diese `3` wird zum nächsten Element
         im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]`
      hat nun die Auswertung abgeschlossen;
      sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird nun `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` hat die
   Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `y` – der zufällig `[ 2, 3 ]` ist.
   `x` ist nun auf `3` zugewiesen,
   `y` ist nun auf `[ 2, 3 ]` zugewiesen,
   und die Konsole hat "F!" dann "G!" ausgegeben.

#### Bewertung Beispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet.
(Dieses Beispiel setzt voraus, dass `x` bereits einem Objekt zugewiesen ist.
Für mehr Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaftszugriff auf der linken Seite dieser Zuweisung
      beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftszugriff wird
         in eine Referenz auf die Variable mit dem Namen `x` ausgewertet.
      2. Der Funktionsaufruf `f()` gibt "F!" auf der Konsole aus und
         wird dann in die Zahl `2` ausgewertet.
   2. Der `x[f()]`-Eigenschaftszugriff auf dieser Zuweisung
      hat nun die Auswertung abgeschlossen;
      sein Ergebnis ist eine Variableigenschaftsreferenz: `x[2]`.
   3. Dann gibt der Funktionsaufruf `g()` "G!" auf der Konsole aus und
      wird dann in die Zahl `3` ausgewertet.
   4. Diese `3` wird nun `x[2]` zugewiesen.
      (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` hat die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `x[2]` – der zufällig `3` ist.
   `x[2]` ist nun auf `3` zugewiesen,
   und die Konsole hat "F!" dann "G!" ausgegeben.

### Vermeiden Sie Zuweisungsketten

Verketten von Zuweisungen oder Verschachteln von Zuweisungen in anderen Ausdrücken kann
zu überraschendem Verhalten führen. Aus diesem Grund wird
[das Verketten von Zuweisungen in derselben Anweisung entmutigt](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Setzen einer Variablenkette in eine [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung funktioniert oft _nicht_. Nur die äußerste/linkeste Variable würde deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ durch die `const`/`let`/`var` Anweisung deklariert.
Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung scheint die Variablen `x`, `y`, und `z` zu deklarieren.
Sie deklariert jedoch nur die Variable `z`.
`y` und `x` sind entweder ungültige Referenzen auf nicht-existierende Variablen (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden implizit [globale Variablen](/de/docs/Glossary/Global_variable) für `x` und `y` im [nachsichtigen Modus](/de/docs/Glossary/Sloppy_mode) erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert basierend darauf zurück, ob der Vergleich wahr ist.
Die Operanden können numerische Werte, Zeichenfolgen, logische oder [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein.
Zeichenfolgen werden basierend auf der standardmäßigen lexikographischen Ordnung verglichen, unter Verwendung von Unicode-Werten.
In den meisten Fällen, wenn die beiden Operanden nicht vom gleichen Typ sind, versucht JavaScript, sie in einen passenden Typ für den Vergleich zu konvertieren.
Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen von der Typkonvertierung bei Vergleichen betreffen die `===` und `!==` Operatoren, die strikte Gleichheits- und Ungleichheitsvergleiche durchführen.
Diese Operatoren versuchen nicht, die Operanden in kompatible Typen zu konvertieren, bevor die Gleichheit überprüft wird.
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
        <a href="/de/docs/Web/JavaScript/Equality_comparisons_and_sameness">Gleichheit in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strikt ungleich</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ, aber nicht gleich sind, oder wenn sie von verschiedenen Typen sind.
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
> für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetische Operatoren

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als seine Operanden und gibt einen einzelnen numerischen Wert zurück.
Die standardmäßigen arithmetischen Operatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`), und Division (`/`).
Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass Division durch null {{jsxref("Infinity")}} ergibt). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // das ist wahr
```

Zusätzlich zu den standardmäßigen arithmetischen Operationen (`+`, `-`, `*`, `/`) bietet JavaScript die in der folgenden Tabelle aufgeführten arithmetischen Operatoren:

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
        wenn als Postfix-Operator verwendet (<code>x++</code>), gibt den Wert seines Operanden vor dem Hinzufügen von eins zurück.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, setzt <code>++x</code> <code>x</code> auf 4
        und gibt 4 zurück, während <code>x++</code> 3 zurückgibt und erst dann <code>x</code> auf 4 setzt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Decrement">Dekrement</a> (<code>--</code>)
      </td>
      <td>
        Unärer Operator. Subtrahiert eins von seinem Operanden.
        Der Rückgabewert ist analog zu dem des Inkrementoperators.
      </td>
      <td>
        Wenn <code>x</code> 3 ist, setzt <code>--x</code> <code>x</code> auf 2
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
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäres Plus</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versucht, den Operanden in eine Zahl zu <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">zu konvertieren</a>, wenn er es nicht bereits ist.
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
        Berechnet die <code>Basis</code> zur <code>Exponent</code>-Potenz,
        das heißt, <code>base^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> gibt <code>8</code> zurück.<br /><code>10 ** -1</code>
        gibt <code>0.1</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als ein Set von 32 Bits (Nullen und Einsen), anstatt als Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun eine
binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen
binären Darstellungen durch, geben aber Standard JavaScript Zahlenwerte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren von JavaScript zusammen.

| Operator                                                                                     | Verwendung | Beschreibung                                                                                                                                                             |
| -------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                  | `a & b`   | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                  | `a \| b`  | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                               |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                  | `a ^ b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweises NOT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                  | `~ a`     | Invertiert die Bits seines Operanden.                                                                                                                                    |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)               | `a << b`  | Verschiebt `a` in binärer Darstellung um `b` Bits nach links und füllt von rechts Nullen auf.                                                                             |
| [Signierte Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)   | `a >> b`  | Verschiebt `a` in binärer Darstellung um `b` Bits nach rechts und verwirft die Bits, die weggeschoben werden.                                                             |
| [Unsigned Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b` | Verschiebt `a` in binärer Darstellung um `b` Bits nach rechts, verwirft die Bits, die weggeschoben werden und füllt von links Nullen auf.                                |

### Bitweise logische Operatoren

Konzepteurweise arbeiten die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in zweiunddreißig Bit-Integers umgewandelt und durch eine Folge von Bits (Nullen und Einsen) ausgedrückt.
  Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits.
  Zum Beispiel wird das folgende Integer mit mehr als 32 Bits in ein 32-Bit-Integer umgewandelt:

  ```plain
  Vorher: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  Danach:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit, und so weiter.
- Der Operator wird auf jedes Bit-Paar angewendet, und das Ergebnis wird bitweise aufgebaut.

Zum Beispiel, die binäre Darstellung von neun ist 1001, und die binäre Darstellung von fünfzehn ist 1111.
Wenn die bitweisen Operatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck | Ergebnis | Binäre Beschreibung                                    |
| -------- | -------- | ------------------------------------------------------ |
| `15 & 9` | `9`      | `1111 & 1001 = 1001`                                   |
| `15 \| 9`  | `15`   | `1111 \| 1001 = 1111`                                  |
| `15 ^ 9`   | `6`    | `1111 ^ 1001 = 0110`                                   |
| `~15`      | `-16`  | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000`      |
| `~9`       | `-10`  | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110`      |

Beachten Sie, dass alle 32 Bits mit dem Bitweisen NOT Operator invertiert werden und dass Werte mit dem bedeutendsten (linkesten) Bit auf 1 gesetzte negative Zahlen darstellen
(Ergänzungsdarstellung in Zweierkompliment). `~x` ergibt denselben Wert wie
`-x - 1`.

### Bitweise Verschiebungsoperatoren

Die bitweisen Verschiebungsoperatoren benötigen zwei Operanden: der erste ist eine Menge, die verschoben werden soll,
und der zweite gibt die Anzahl der Bitpositionen an, um die der erste Operand verschoben werden soll.
Die Richtung der Verschiebung wird durch den verwendeten Operator gesteuert.

Verschiebungsoperatoren konvertieren ihre Operanden in zweiunddreißig Bit-Integers und geben ein Ergebnis des Typs {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: speziell, wenn der Typ
des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück;
ansonsten geben sie {{jsxref("Number")}} zurück.

Die Verschiebungsoperatoren sind in der folgenden Tabelle aufgelistet.

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
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl an Bits nach links. Überschüssige Bits, die nach links geschoben werden, werden verworfen. Null Bits
        werden von rechts her aufgeschoben.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach
        links verschoben wird und zu 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Signierte Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl an Bits nach rechts. Überschüssige Bits, die nach rechts geschoben werden, werden verworfen. Kopien des
        linkesten Bits werden von links her aufgeschoben.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts
        verschoben wird und zu 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, weil das Vorzeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Unsigned Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl an Bits nach rechts. Überschüssige Bits, die nach rechts geschoben werden, werden verworfen. Null Bits
        werden von links her aufgeschoben.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts
        verschoben wird und zu 100 wird, was 4 ist. Für nicht-negative Zahlen ergeben Unsigned Rechtsverschiebung und signierte Rechtsverschiebung dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit booleschen (logischen) Werten verwendet; wenn sie es sind, geben sie einen booleschen Wert zurück.
Jedoch geben die `&&`, `||` und `??` Operatoren tatsächlich den Wert eines der angegebenen Operanden zurück, daher, wenn diese
Operatoren mit nicht-booleschen Werten verwendet werden, können sie einen nicht-booleschen Wert zurückgeben. Daher sind sie eher als "Wert Auswahl Operatoren" geeignet bezeichnet.
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
        andernfalls gibt <code>expr2</code> zurück. So gibt <code>&#x26;&#x26;</code>, wenn es mit booleschen Werten verwendet wird, <code>true</code> zurück, wenn beide
        Operanden wahr sind; andernfalls gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es zu <code>true</code> konvertiert werden kann;
        andernfalls gibt <code>expr2</code> zurück. So gibt <code>||</code>, wenn es mit booleschen Werten verwendet wird, <code>true</code> zurück, wenn einer der Operanden
        wahr ist; wenn beide falsch sind, gibt es <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish-Zusammenführungsoperator</a> (<code>??</code>)
      </td>
      <td><code>expr1 ?? expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es weder <code>null</code> noch
        <code>undefined</code> ist; andernfalls gibt <code>expr2</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logisches NICHT</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Gibt <code>false</code> zurück, wenn sein einziger Operand
        zu <code>true</code> konvertiert werden kann; andernfalls gibt <code>true</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die zu `false` konvertiert werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, der leeren Zeichenfolge (`""`), oder `undefined` ausgewertet werden.

Der folgende Code zeigt Beispiele des `&&` (logisches UND) Operators.

```js
const a1 = true && true; // t && t gibt true zurück
const a2 = true && false; // t && f gibt false zurück
const a3 = false && true; // f && t gibt false zurück
const a4 = false && 3 === 4; // f && f gibt false zurück
const a5 = "Cat" && "Dog"; // t && t gibt Dog zurück
const a6 = false && "Cat"; // f && t gibt false zurück
const a7 = "Cat" && false; // t && f gibt false zurück
```

Der folgende Code zeigt Beispiele des `||` (logisches ODER) Operators.

```js
const o1 = true || true; // t || t gibt true zurück
const o2 = false || true; // f || t gibt true zurück
const o3 = true || false; // t || f gibt true zurück
const o4 = false || 3 === 4; // f || f gibt false zurück
const o5 = "Cat" || "Dog"; // t || t gibt Cat zurück
const o6 = false || "Cat"; // f || t gibt Cat zurück
const o7 = "Cat" || false; // t || f gibt Cat zurück
```

Der folgende Code zeigt Beispiele des `??` (nullish-coalescing) Operators.

```js
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
```

Beachten Sie, wie `??` wie `||` funktioniert, aber es gibt den zweiten Ausdruck nur zurück, wenn der erste "[nullish](/de/docs/Glossary/Nullish)" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||`, um Standardwerte für Werte festzulegen, die `null` oder `undefined` sein könnten, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht gelten sollte.

Der folgende Code zeigt Beispiele des `!` (logisches NICHT) Operators.

```js
const n1 = !true; // !t gibt false zurück
const n2 = !false; // !f gibt true zurück
const n3 = !"Cat"; // !t gibt false zurück
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie auf mögliche "Kurzschluss"-Auswertung unter Verwendung der folgenden Regeln getestet:

- `falsy && anything` wird zu dem falsigen Wert kurzgeschlossenausgewertet.
- `truthy || anything` wird zu dem wahren Wert kurzgeschlossenausgewertet.
- `nonNullish ?? anything` wird zum nicht-nullish Wert kurzgeschlossenausgewertet.

Die Regeln der Logik garantieren, dass diese Auswertungen immer korrekt sind. Beachten Sie, dass der _anyting_ Teil der obigen Ausdrücke nicht ausgewertet wird, sodass etwaige Nebeneffekte
nicht erfolgen.

## BigInt Operatoren

Die meisten Operatoren, die zwischen Zahlen verwendet werden können, können auch zwischen [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Werten verwendet werden.

```js
// BigInt Addition
const a = 1n + 2n; // 3n
// Division mit BigInts wird auf Null gerundet
const b = 1n / 2n; // 0n
// Bitweise Operationen mit BigInts brechen keine Seite ab
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

Eine Ausnahme ist die [unsigned Rechtsverschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die für BigInt Werte nicht definiert ist. Das liegt daran, dass ein BigInt keine feste Breite hat und daher technisch gesehen kein "höchstes Bit" hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts haben keine unsigned Rechtsverschiebung, verwenden Sie >> stattdessen
```

BigInts und Zahlen sind nicht gegenseitig austauschbar — Sie können sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Kann BigInt und andere Typen nicht mischen
```

Das liegt daran, dass BigInt weder eine Teilmenge noch eine Obermenge von Zahlen ist. BigInts haben eine höhere Genauigkeit als Zahlen, wenn sie große ganze Zahlen darstellen, können jedoch keine Dezimalzahlen darstellen, sodass eine implizite Konvertierung auf beiden Seiten möglicherweise die Genauigkeit verliert. Verwenden Sie die explizite Konvertierung, um anzuzeigen, ob Sie möchten, dass die Operation eine Zahl-Operation oder eine BigInt-Operation ist.

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

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenfolgenwerten verwendet werden können, verkettet der Verkettungsoperator (+) zwei Zeichenfolgenwerte miteinander und gibt eine andere Zeichenfolge zurück, die die Vereinigung der beiden Operandenzeichenfolgen ist.

Zum Beispiel:

```js
console.log("my " + "string"); // gibt die Zeichenfolge "my string" aus der Konsole aus.
```

Der Kurzform-Zuweisungsoperator `+=` kann auch verwendet werden, um Zeichenfolgen zu verketteten.

Zum Beispiel:

```js
let mystring = "alpha";
mystring += "bet"; // ergibt "alphabet" und weist diesen Wert mystring zu.
```

## Bediengs-(ternärer) Operator

Der [Bedingungs-Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
ist der einzige JavaScript-Operator, der drei Operanden benötigt.
Der Operator kann einen von zwei Werten basierend auf einer Bedingung haben.
Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn `condition` wahr ist, hat der Operator den Wert von `val1`.
Andernfalls hat er den Wert von `val2`. Sie können den Bedingungs-Operator überall verwenden, wo Sie einen Standard-Operator verwenden würden.

Zum Beispiel:

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist dem `status` den Wert "adult" zu, wenn
`age` 18 oder mehr ist. Andernfalls weist sie den Wert "minor" zu
`status`.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich in einer `for`-Schleife verwendet, um mehrere Variablen jedes Mal beim Durchlaufen der Schleife zu aktualisieren.
Es wird als schlechter Stil angesehen, ihn anderweitig zu verwenden, wenn es nicht notwendig ist.
Oft können und sollten zwei separate Anweisungen stattdessen verwendet werden.

Zum Beispiel, wenn `a` ein 2-dimensionales Array mit 10 Elementen auf jeder Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen gleichzeitig zu aktualisieren.
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

Ein unärer Operator ist eine Operation mit nur einem Operanden.

### delete

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löscht die Eigenschaft eines Objekts.
Die Syntax ist:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts, `property` eine vorhandene Eigenschaft ist, und `propertyKey` ein String oder Symbol ist, das auf eine vorhandene Eigenschaft verweist.

Wenn der `delete` Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Der Versuch, darauf zuzugreifen, ergibt anschließend `undefined`.
Der `delete` Operator gibt `true` zurück, wenn die Operation möglich ist; anderenfalls gibt er `false` zurück.

```js
delete Math.PI; // Gibt false zurück (nicht-konfigurierbare Eigenschaften können nicht gelöscht werden)

const myObj = { h: 4 };
delete myObj.h; // Gibt true zurück (benutzerdefinierte Eigenschaften können gelöscht werden)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente daraus zu löschen.
Dies wird jedoch als schlechte Praxis angesehen — versuchen Sie, dies zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Länge des Arrays nicht beeinflusst und andere Elemente werden nicht neu indiziert.
Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt einen String zurück, der den Typ des nicht ausgewerteten Operanden angibt.
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

Der `typeof` Operator gibt die folgenden Ergebnisse für diese Variablen zurück:

```js
typeof myFun; // Gibt "function" zurück
typeof shape; // Gibt "string" zurück
typeof size; // Gibt "number" zurück
typeof foo; // Gibt "object" zurück
typeof today; // Gibt "object" zurück
typeof doesntExist; // Gibt "undefined" zurück
```

Für die Schlüsselwörter `true` und `null`, gibt der
`typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof true; // Gibt "boolean" zurück
typeof null; // Gibt "object" zurück
```

Für eine Zahl oder einen String gibt der `typeof` Operator die folgenden Ergebnisse zurück:

```js
typeof 62; // Gibt "number" zurück
typeof "Hello world"; // Gibt "string" zurück
```

Für Eigenschaftswerte gibt der `typeof` Operator den Typ des Wert zurück, den die
Eigenschaft enthält:

```js
typeof document.lastModified; // Gibt "string" zurück
typeof window.length; // Gibt "number" zurück
typeof Math.LN2; // Gibt "number" zurück
```

Für Methoden und Funktionen gibt der `typeof` Operator Ergebnisse zurück, wie folgt:

```js
typeof blur; // Gibt "function" zurück
typeof eval; // Gibt "function" zurück
typeof parseInt; // Gibt "function" zurück
typeof shape.split; // Gibt "function" zurück
```

Für vordefinierte Objekte gibt der `typeof` Operator Ergebnisse zurück, wie folgt:

```js
typeof Date; // Gibt "function" zurück
typeof Function; // Gibt "function" zurück
typeof Math; // Gibt "object" zurück
typeof Option; // Gibt "function" zurück
typeof String; // Gibt "function" zurück
```

### void

Der [`void` Operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt ein Ausdruck an, der ausgewertet werden soll, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck, der ausgewertet werden soll.
Die Klammern um den Ausdruck sind optional, aber es ist gute Praxis, sie aus Stilgründen zu verwenden, um Probleme mit der Priorität zu vermeiden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt einen booleschen Wert zurück, der darauf basiert, ob der Vergleich wahr ist.

### in

Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt vorhanden ist.
Die Syntax ist:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` eine Zeichenfolge, ein numerischer Ausdruck oder ein Symbolausdruck ist, der einen Eigenschaftsnamen oder Array-Index darstellt, und `objectName` der Name eines Objekts ist.

Die folgenden Beispiele zeigen einige Verwendungen des `in` Operators.

```js
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // Gibt true zurück
3 in trees; // Gibt true zurück
6 in trees; // Gibt false zurück
"bay" in trees; // Gibt false zurück
// (Sie müssen die Indexnummer angeben, nicht den Wert an diesem Index)
"length" in trees; // Gibt true zurück (length ist eine Array-Eigenschaft)

// Eingebaute Objekte
"PI" in Math; // Gibt true zurück
const myString = new String("coral");
"length" in myString; // Gibt true zurück

// Benutzerdefinierte Objekte
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // Gibt true zurück
"model" in mycar; // Gibt true zurück
```

### instanceof

Der [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true`
zurück, wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet wird, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie {{jsxref("Date")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen müssen.
Zum Beispiel, im Ausnahmefall können Sie auf unterschiedlichen Ausnahmebehandlungscode verzweigen, je nachdem, welche Art von Ausnahme ausgelöst wird.

Zum Beispiel verwendet der folgende Code `instanceof`, um festzustellen, ob `theDay` ein `Date` Objekt ist. Da `theDay` tatsächlich ein `Date` Objekt ist, werden die Anweisungen innerhalb der `if` Anweisung ausgeführt.

```js
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // Anweisungen ausführen
}
```

## Basale Ausdrücke

Alle Operatoren arbeiten schließlich an einem oder mehreren basalen Ausdrücken. Diese basalen Ausdrücke umfassen [Identifikatoren](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt auch einige andere Arten. Sie werden kurz unten eingeführt, und ihre Semantik wird in ihren jeweiligen Referenzabschnitten detailliert beschrieben.

### this

Verwenden Sie das [`this`-Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen.
Im Allgemeinen verweist `this` auf das aufrufende Objekt in einer Methode.
Verwenden Sie `this` entweder mit Punkt- oder Klammernotation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, eine Funktion namens `validate` validiert eine Eigenschaft `value` eines Objekts, gegeben das Objekt sowie den hohen und niedrigen Wert:

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    console.log("Invalid Value!");
  }
}
```

Sie könnten `validate` in jedem onChange-Ereignishandler eines Formularelements aufrufen, indem Sie `this` verwenden, um das auf das Formular-Element zu verweisen, wie im folgenden Beispiel:

```html
<p>Geben Sie eine Zahl zwischen 18 und 99 ein:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Priorität der Auswertung in
Ausdrücken. Zum Beispiel können Sie Multiplikation und Division zuerst übersteuern, dann Addition und Subtraktion, um die Addition zuerst auszuwerten.

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// Standardpriorität
a + b * c     // 7
// Wird standardmäßig so ausgewertet
a + (b * c)   // 7

// Nun Priorität überschreiben
// Addition vor Multiplikation
(a + b) * c   // 9

// Was gleichwertig ist zu
a * c + b * c // 9
```

### Eigenschaftszugriff

Die [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Syntax erhält Eigenschaftswerte von Objekten, entweder über Punktnotation oder Klammernotation.

```js
object.property;
object["property"];
```

Der [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) Guide geht detaillierter auf die Eigenschaften von Objekten ein.

### Optionale Verkettung

Die [Optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) Syntax (`?.`) führt die verkettete Operation auf einem Objekt aus, wenn es definiert und nicht `null` ist, und bricht die Operation andernfalls ab und gibt `undefined` zurück.
Dies ermöglicht es Ihnen, mit einem Wert zu arbeiten, der `null` oder `undefined` sein könnte, ohne einen `TypeError` zu verursachen.

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

Das [`super` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen vom Elternobjekt aufzurufen.
Es ist nützlich in [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um den Elternkonstruktor aufzurufen, zum Beispiel.

```js-nolint
super(args); // Ruft den Elternkonstruktor auf.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}
