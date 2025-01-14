---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt die Ausdrücke und Operatoren von JavaScript, einschließlich Zuweisung, Vergleich, Arithmetik, Bitweise, Logik, Zeichenkette, ternär und mehr.

Auf hoher Ebene ist ein _Ausdruck_ eine gültige Einheit aus Code, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche, die Seiteneffekte haben (wie Werte zuweisen), und solche, die rein _bewerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=`-Operator, um den Wert sieben der Variable `x` zuzuweisen. Der Ausdruck selbst wertet zu `7` aus.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+` Operator, um `3` und `4` zusammenzuzählen und einen Wert zu erzeugen, `7`. Wenn er jedoch nicht letztendlich Teil eines größeren Konstrukts ist (zum Beispiel einer [Variablendeklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`), wird das Ergebnis sofort verworfen — dies ist normalerweise ein Programmierfehler, da die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele auch zeigen, werden alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie `=` und `+`. In diesem Abschnitt werden wir die folgenden Operatoren vorstellen:

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

Diese Operatoren verbinden Operanden, die entweder von höherwertigen Operatoren gebildet werden oder von einem der [grundlegenden Ausdrücke](#grundlegende_ausdrücke). Eine vollständige und detaillierte Liste von Operatoren und Ausdrücken ist auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) erhältlich.

Die _Priorität_ von Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlichen Reihenfolgen vorkommen, würden beide Ausdrücke `7` ergeben, weil `*` Vorrang vor `+` hat, sodass der durch `*`-verbundene Ausdruck immer zuerst ausgewertet wird. Sie können die Operator-Priorität durch Klammern überschreiben (was einen [gruppierten Ausdruck](#gruppierungsoperator) — den grundlegenden Ausdruck — erstellt). Um eine vollständige Tabelle der Operator-Priorität sowie verschiedene Fallstricke zu sehen, besuchen Sie die [Operator-Prioritätsreferenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) Seite.

JavaScript hat sowohl _binäre_ als auch _unäre_ Operatoren und einen speziellen ternären Operator, den bedingten Operator.
Ein binärer Operator benötigt zwei Operanden, einen vor und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird als _Infix_ binärer Operator bezeichnet, weil der Operator zwischen zwei Operanden platziert ist. Alle binären Operatoren in JavaScript sind Infix.

Ein unärer Operator benötigt einen einzelnen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die `Operator Operand`-Form wird als _Präfix_ unärer Operator bezeichnet, und die `Operand Operator`-Form wird als _Postfix_ unärer Operator bezeichnet. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof`, etc. sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist einen Wert seinem linken Operanden basierend auf dem Wert des rechten Operanden zu.
Der einfache Zuweisungsoperator ist gleich (`=`), der den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` an `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die eine Kurzform für die in der folgenden Tabelle aufgeführten Operationen sind:

| Name                                                                                                   | Kurzform-Operator | Bedeutung          |
| ------------------------------------------------------------------------------------------------------ | ----------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                    | `x = f()`         | `x = f()`          |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                  | `x += f()`        | `x = x + f()`      |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)            | `x -= f()`        | `x = x - f()`      |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)      | `x *= f()`        | `x = x * f()`      |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                  | `x /= f()`        | `x = x / f()`      |
| [Restzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                      | `x %= f()`        | `x = x % f()`      |
| [Exponentiierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)     | `x **= f()`       | `x = x ** f()`     |
| [Linksschiebzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)              | `x <<= f()`       | `x = x << f()`     |
| [Rechtsschiebzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)            | `x >>= f()`       | `x = x >> f()`     |
| [Signaturschiebzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`      | `x = x >>> f()`    |
| [Bitweiser UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)          | `x &= f()`        | `x = x & f()`      |
| [Bitweiser XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)          | `x ^= f()`        | `x = x ^ f()`      |
| [Bitweiser ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)          | `x \|= f()`       | `x = x \| f()`     |
| [Logische UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)           | `x &&= f()`       | `x && (x = f())`   |
| [Logische ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)           | `x \|\|= f()`     | `x \|\| (x = f())` |
| [Nullkoaleszenzzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)   | `x ??= f()`       | `x ?? (x = f())`   |

### Zuweisungen an Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, kann die linke Seite eines Zuweisungsausdrucks Zuweisungen an Eigenschaften dieses Ausdrucks machen. Beispielsweise:

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

Für weitere Informationen über Objekte lesen Sie den [Umgang mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, haben Zuweisungen an Eigenschaften dieses Ausdrucks keinen Effekt:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [Strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) führt der obige Code zu einem Fehler, da man Primitiven keine Eigenschaften zuweisen kann.

Es ist ein Fehler, unveränderlichen Eigenschaften oder Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) Werte zuzuweisen.

### Destrukturierung

Für komplexere Zuweisungen ermöglicht die [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Syntax das Extrahieren von Daten aus Arrays oder Objekten mit einer Syntax, die der Konstruktion von Array- und Objektliteralen nachempfunden ist.

Ohne Destrukturierung benötigt es mehrere Anweisungen, um Werte aus Arrays und Objekten zu extrahieren:

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

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration (d.h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen verwendet.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Wie andere Ausdrücke werten auch Zuweisungsausdrücke wie `x = f()` in ein Ergebnis aus. Obwohl dieses Ergebnis normalerweise nicht verwendet wird, kann es von einem anderen Ausdruck verwendet werden.

Das Verketten von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken kann zu überraschendem Verhalten führen. Aus diesem Grund, [werden verkettete oder verschachtelte Zuweisungen von einigen JavaScript-Stilrichtlinien entmutigt](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment). Dennoch können Zuweisungsverketten und -verschachtelung manchmal auftreten, daher ist es wichtig, zu verstehen, wie sie funktionieren.

Indem man einen Zuweisungsausdruck verketten oder verschachteln, kann sein Ergebnis selbst einer anderen Variablen zugewiesen werden. Es kann protokolliert werden, es kann in einem Array-Literal oder Funktionsaufruf platziert werden, und so weiter.

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

Das Auswertungsergebnis entspricht dem Ausdruck auf der rechten Seite des `= `-Zeichens in der
„Bedeutung“-Spalte der Tabelle oben. Das bedeutet, dass `x = f()` in das Ergebnis von
`f()` auswertet, `x += f()` bewertet sich zu der resultierenden Summe `x + f()`,
`x **= f()` bewertet sich zur resultierenden Potenz `x ** f()`, und so weiter.

Im Fall von logischen Zuweisungen, `x &&= f()`,
`x ||= f()`, und `x ??= f()`, ist der Rückgabewert derjenige der
logischen Operation ohne die Zuweisung, also `x && f()`,
`x || f()`, und `x ?? f()`, jeweils.

Beim Verketten dieser Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren
wie Array-Literalen, werden die Zuweisungsausdrücke **von rechts nach links gruppiert**
(sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts ausgewertet**.

Beachten Sie, dass für alle Zuweisungsoperatoren außer `=` selbst,
die resultierenden Werte immer auf den Werten der Operanden _vor_
der Operation basieren.

Beispielsweise, nehmen Sie an, dass die folgenden Funktionen `f` und `g`
sowie die Variablen `x` und `y` deklariert wurden:

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

`y = x = f()` ist gleichwertig zu `y = (x = f())`,
weil der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist.
Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird zu einem Verweis auf die Variable mit dem Namen `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wird zu einem Verweis auf die Variable mit dem Namen `x` ausgewertet.
      2. Der Funktionsaufruf `f()` druckt „F!“ auf die Konsole und
         wertet dann zur Zahl `2` aus.
      3. Dieses `2` Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` hat nun die Auswertung abgeschlossen;
      sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2` Ergebnis wird wiederum auch `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` hat nun die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `y` – der zufällig `2` ist.
   `x` und `y` werden `2` zugewiesen,
   und die Konsole hat „F!“ gedruckt.

#### Auswertungsbeispiel 2

`y = [ f(), x = g() ]` wird auch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf der linken der Zuweisung wird zu einem Verweis auf die Variable mit dem Namen `y` ausgewertet.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` druckt „F!“ auf die Konsole und
         wertet dann zur Zahl `2` aus.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wird zu einem Verweis auf die Variable mit dem Namen `x` ausgewertet.
         2. Der Funktionsaufruf `g()` druckt „G!“ auf die Konsole und
            wertet dann zur Zahl `3` aus.
         3. Dieses `3` Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` hat nun die Auswertung abgeschlossen;
         sein Ergebnis ist der neue Wert von `x`, der `3` ist.
         Dieses `3` Ergebnis wird das nächste Element
         im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]`
      hat nun die Auswertung abgeschlossen;
      sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]` Array wird nun `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` hat
   nun die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `y` – der zufällig `[ 2, 3 ]` ist.
   `x` wird nun `3` zugewiesen,
   `y` wird nun `[ 2, 3 ]` zugewiesen,
   und die Konsole hat „F!“ dann „G!“ gedruckt.

#### Auswertungsbeispiel 3

`x[f()] = g()` wird auch von links nach rechts ausgewertet.
(Dieses Beispiel setzt voraus, dass `x` bereits einem Objekt zugewiesen ist.
Für weitere Informationen über Objekte lesen Sie [Umgang mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der `x[f()]`-Eigenschaftszugriff auf der linken Seite dieser Zuweisung
      beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftszugriff wird zu einem Verweis auf die Variable mit dem Namen `x` ausgewertet.
      2. Dann druckt der Funktionsaufruf `f()` „F!“ in die Konsole und
         wertet dann zur Zahl `2` aus.
   2. Der `x[f()]`-Eigenschaftszugriff in dieser Zuweisung
      hat nun die Auswertung abgeschlossen;
      sein Ergebnis ist ein Variabileneigenschaftsverweis: `x[2]`.
   3. Dann druckt der Funktionsaufruf `g()` „G!“ in die Konsole und
      wertet dann zur Zahl `3` aus.
   4. Diese `3` wird nun `x[2]` zugewiesen.
      (Dieser Schritt wird nur erfolgreich ausgeführt, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugewiesen ist.)
2. Der Zuweisungsausdruck `x[f()] = g()` hat nun die Auswertung abgeschlossen;
   sein Ergebnis ist der neue Wert von `x[2]` – der zufällig `3` ist.
   `x[2]` wird nun `3` zugewiesen,
   und die Konsole hat „F!“ dann „G!“ gedruckt.

### Vermeiden von Zuweisungsketten

Das Verketten von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken kann
zu überraschendem Verhalten führen. Aus diesem Grund
[wird das Verketten von Zuweisungen in derselben Anweisung entmutigt](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere das Setzen einer Variablenkette in eine [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung funktioniert oft _nicht_. Nur die äußerste/linksstehende Variable würde deklariert; andere Variablen innerhalb der Zuweisungskette werden _nicht_ durch die `const`/`let`/`var` Anweisung deklariert.
Beispielsweise:

```js-nolint
const z = y = x = f();
```

Diese Anweisung scheint die Variablen `x`, `y`, und `z` zu deklarieren.
Jedoch deklariert sie tatsächlich nur die Variable `z`.
`y` und `x` sind entweder ungültige Referenzen auf nicht existierende Variablen (im [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden implizit {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "schlampigen Modus")}} erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert basierend darauf zurück, ob der Vergleich wahr ist.
Die Operanden können numerische, Zeichenketten-, logische oder [Objekt-](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werten sein.
Zeichenketten werden basierend auf der standardmäßigen lexikographischen Reihenfolge unter Verwendung von Unicode-Werten verglichen.
In den meisten Fällen, wenn die beiden Operanden nicht vom gleichen Typ sind, versucht JavaScript, sie in einen geeigneten Typ für den Vergleich umzuwandeln.
Dieses Verhalten führt im Allgemeinen zu einem numerischen Vergleich der Operanden.
Die einzigen Ausnahmen von der Typumwandlung innerhalb von Vergleichen betreffen die `===` und `!==` Operatoren, die strikte Gleichheits- und Ungleichheitsvergleiche durchführen.
Diese Operatoren versuchen nicht, die Operanden in kompatible Typen umzuwandeln, bevor sie die Gleichheit prüfen.
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
        Gibt <code>true</code> zurück, wenn die Operanden gleich und vom gleichen Typ sind. Siehe auch {{jsxref("Object.is")}} und
        <a href="/de/docs/Web/JavaScript/Equality_comparisons_and_sameness">Gleichheit in JavaScript</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strikt ungleich</a> (<code>!==</code>)
      </td>
      <td>
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ aber nicht gleich sind oder wenn sie von verschiedenen Typen sind.
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

Ein arithmetischer Operator verwendet numerische Werte (entweder Literale oder Variablen) als seine Operanden und gibt einen einzelnen numerischen Wert zurück.
Die Standardarithmetischen Operatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren, wie in den meisten anderen Programmiersprachen, bei Verwendung mit Gleitkommzahlen (insbesondere ergibt die Division durch Null {{jsxref("Infinity")}}). Zum Beispiel:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

Zusätzlich zu den Standardarithmetischen Operationen (`+`, `-`, `*`, `/`) bietet JavaScript die in der folgenden Tabelle aufgelisteten arithmetischen Operatoren:

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
        Unärer Operator. Addiert eins zu seinem Operanden. Wird er als Präfixoperator verwendet
        (<code>++x</code>), gibt er den Wert seines Operanden nach der Addition von eins zurück;
        wenn er als Postfixoperator verwendet wird (<code>x++</code>), gibt er den Wert seines
        Operanden vor der Addition von eins zurück.
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
        Der Rückgabewert ist analog zu dem des Inkrementoperators.
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
      <td>Wenn <code>x</code> 3 ist, dann gibt <code>-x</code> -3 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unäres Plus</a> (<code>+</code>)
      </td>
      <td>
        Unärer Operator. Versucht den Operanden in eine Zahl umzurechnen, wenn er nicht bereits eine ist.
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
        Berechnet die <code>basis</code> in der <code>exponent</code> Potenz,
        also <code>basis^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> gibt <code>8</code> zurück.<br /><code>10 ** -1</code>
        gibt <code>0.1</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als eine Menge von 32 Bits (Nullen und Einsen), anstatt als dezimale, hexadezimale oder oktale Zahlen. Zum Beispiel hat die Dezimalzahl neun eine
binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf diesen binären Darstellungen aus, geben aber Standard-JavaScript-Zahlenwerte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren von JavaScript zusammen.

| Operator                                                                                               | Verwendung | Beschreibung                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                               | `a & b`    | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Einsen sind.                                                                                    |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                               | `a \| b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Nullen sind.                                                                                    |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                               | `a ^ b`    | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweises NOT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                               | `~ a`      | Invertiert die Bits seines Operanden.                                                                                                                                                        |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                            | `a << b`   | Verschiebt `a` in binärer Darstellung um `b` Bits nach links, wobei Nullen von rechts eingefügt werden.                                                                                      |
| [Zeichenbewahrende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)        | `a >> b`   | Verschiebt `a` in binärer Darstellung um `b` Bits nach rechts, wobei Bits weggeschoben werden.                                                                                               |
| [Nullen-füllende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`  | Verschiebt `a` in binärer Darstellung um `b` Bits nach rechts, wobei Bits weggeschoben und Nullen von links eingefügt werden.                                                                |

### Bitweise logische Operatoren

Konzeptionell arbeiten die bitweisen logischen Operatoren folgendermaßen:

- Die Operanden werden in zweiunddreißig-Bit-Ganzzahlen umgewandelt und durch eine Folge von Bits (Nullen und Einsen) ausgedrückt.
  Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits.
  Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit und so weiter.
- Der Operator wird auf jedes Paar von Bits angewendet, und das Ergebnis wird bitweise konstruiert.

Zum Beispiel ist die binäre Darstellung von neun 1001, und die binäre Darstellung von fünfzehn ist 1111.
Wenn die bitweisen Operatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits mithilfe des Bitweisen NOT-Operators invertiert werden, und dass Werte mit
dem am weitesten links stehenden Bit auf 1 gesetzten als negative Zahlen
(zweier-Komplement-Darstellung) dargestellt werden. `~x` wertet sich zu demselben Wert aus, zu dem
`-x - 1` sich auswertet.

### Bitweise Verschiebeoperatoren

Die bitweisen Verschiebeoperatoren benötigen zwei Operanden: Der erste ist eine zu verschiebende Menge, und der zweite gibt die Anzahl der Bitpositionen an, um die der erste Operand verschoben werden soll.
Die Richtung der Verschiebeoperation wird durch den verwendeten Operator gesteuert.

Verschiebeoperatoren konvertieren ihre Operanden in zweiunddreißig-Bit-Ganzzahlen und geben ein Ergebnis entweder des Typs {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: konkret, wenn der Typ
des linken Operanden {{jsxref("BigInt")}} ist, geben sie {{jsxref("BigInt")}} zurück;
andernfalls geben sie {{jsxref("Number")}} zurück.

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
        Dieser Operator verschiebt den ersten Operand um die angegebene Anzahl an Bits nach links. Überzählige Bits, die nach links verschoben werden, werden verworfen. Nullen werden von rechts eingefügt.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, weil 1001 um 2 Bits nach links verschoben 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Rechtsverschiebung mit Vorzeichen</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operand um die angegebene Anzahl an Bits nach rechts. Überzählige Bits, die nach rechts verschoben werden, werden verworfen. Kopien des am weitesten links stehenden Bits werden von links eingefügt.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, weil 1001 um 2 Bits nach rechts verschoben 10 wird, was 2 ist. Ebenso ergibt <code>-9>>2</code> -3, weil das Vorzeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Nullen-füllende Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operand um die angegebene Anzahl an Bits nach rechts. Überzählige Bits, die nach rechts verschoben werden, werden verworfen. Nullen werden von links eingefügt.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, weil 10011 um 2 Bits nach rechts verschoben 100 wird, was 4 ist. Für nicht-negative Zahlen ergeben Nullen-füllende Rechtsverschiebung und Vorzeichenerhaltende Rechtsverschiebung dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit Booleschen (logischen) Werten verwendet; wenn sie es sind, geben sie einen Booleschen Wert zurück. Die Operatoren `&&`, `||`, und `??` geben tatsächlich den Wert eines der spezifizierten Operanden zurück, sodass, wenn diese Operatoren mit nicht-Booleschen Werten verwendet werden, sie möglicherweise einen nicht-Booleschen Wert zurückgeben. Daher sind sie besser als "Wertauswahloperatoren" bezeichnet. Die logischen Operatoren sind in der folgenden Tabelle beschrieben.

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
        andernfalls gibt <code>expr2</code> zurück. Somit ergibt sich bei der Verwendung mit Booleschen
        Werten <code>&#x26;&#x26;</code> <code>true</code>, wenn beide Operanden true sind; andernfalls gibt <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> umgewandelt werden kann;
        andernfalls gibt <code>expr2</code> zurück. Somit ergibt sich bei der Verwendung mit Booleschen
        Werten <code>||</code> <code>true</code>, wenn entweder Operand true ist; wenn beide false sind, gibt <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish coalescing operator</a> (<code>??</code>)
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
        Gibt <code>false</code> zurück, wenn sein einzelner Operand in
        <code>true</code> umgewandelt werden kann; andernfalls gibt <code>true</code> zurück.
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

Beachten Sie, wie `??` ähnlich wie `||` funktioniert, aber nur den zweiten Ausdruck zurückgibt, wenn der erste "{{Glossary("Nullish", "nullish")}}" ist, d.h. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative als `||` für das Setzen von Standardwerten für Werte, die `null` oder `undefined` sein könnten, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht gelten sollte.

Der folgende Code zeigt Beispiele für den `!` (logisches NOT) Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie nach möglichkeit mit einer "Kurzschluss" Auswertung nach den folgenden Regeln getestet:

- `falsy && anything` wird zum Kurzschluss ausgewertet auf den falsy Wert.
- `truthy || anything` wird zum Kurzschluss ausgewertet auf den truthy Wert.
- `nonNullish ?? anything` wird zum Kurzschluss ausgewertet auf den non-nullish Wert.

Die Regeln der Logik garantieren, dass diese Auswertungen immer korrekt sind. Beachten Sie, dass der _anything_-Teil der obigen Ausdrücke nicht ausgewertet wird, sodass keinerlei Seiteneffekte dafür eintreten.

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

Eine Ausnahme ist das [unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), das für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat und daher technisch kein "höchstes Bit" besitzt.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht gegenseitig ersetzbar — Sie können sie in Berechnungen nicht mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder eine Obermenge noch eine Untermenge von Zahlen ist. BigInts haben eine höhere Präzision als Zahlen bei der Darstellung großer Ganzzahlen, können aber keine Dezimalzahlen darstellen, sodass eine implizite Umwandlung auf beiden Seiten Präzision verlieren könnte. Verwenden Sie eine explizite Konvertierung, um zu signalisieren, ob Sie die Operation als eine Zahl oder eine BigInt ausführen möchten.

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

Zusätzlich zu den Vergleichsoperatoren, die auf Zeichenkettenwerten verwendet werden können, fügt der Konkatenationsoperator (+) zwei Zeichenkettenwerte zusammen und gibt eine weitere Zeichenkette zurück, die die Vereinigung der beiden Operandzeichenketten ist.

Zum Beispiel:

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzzuweisungsoperator `+=` kann auch verwendet werden, um Zeichenketten zu verknüpfen.

Zum Beispiel:

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingter (ternärer) Operator

Der [bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist der einzige JavaScript-Operator, der drei Operanden benötigt.
Der Operator kann einen von zwei Werten basierend auf einer Bedingung annehmen.
Die Syntax ist:

```js-nolint
condition ? val1 : val2
```

Wenn `bedingung` wahr ist, hat der Operator den Wert von `wert1`.
Andernfalls hat er den Wert von `wert2`. Sie können den bedingten Operator überall dort verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel:

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist die Variable `status` den Wert "adult" zu, wenn
`alter` achtzehn oder mehr ist. Andernfalls weist sie der `status` den Wert "minor" zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
wertet beide seiner Operanden aus und gibt den Wert des letzten Operanden zurück.
Dieser Operator wird hauptsächlich in einer `for` Schleife verwendet, um mehrere Variablen bei jedem Durchlauf der Schleife zu aktualisieren.
Es wird als schlechter Stil angesehen, ihn anderswo zu verwenden, wenn es nicht notwendig ist.
Oft können und sollten zwei separate Anweisungen stattdessen verwendet werden.

Zum Beispiel, wenn `a` ein 2-dimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen auf einmal zu aktualisieren.
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

### Löschen

Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löscht eine Eigenschaft eines Objekts.
Die Syntax ist:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `object` der Name eines Objekts ist, `property` eine vorhandene Eigenschaft ist und `propertyKey` ein String oder Symbol ist, das sich auf eine vorhandene Eigenschaft bezieht.

Wenn der `delete` Operator erfolgreich ist, entfernt er die Eigenschaft aus dem Objekt.
Der Versuch, danach darauf zuzugreifen, führt zu `undefined`.
Der `delete` Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, `elemente` daraus zu löschen.
Dies wird jedoch als schlechte Praxis betrachtet — versuchen Sie, es zu vermeiden.
Wenn Sie eine Array-Eigenschaft löschen, wird die Array-Länge nicht beeinflusst und andere Elemente werden nicht neu indexiert.
Um dieses Verhalten zu erreichen, ist es viel besser, einfach das Element mit dem Wert `undefined` zu überschreiben.
Um das Array tatsächlich zu manipulieren, verwenden Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof` Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt einen String zurück, der den Typ des nicht ausgewerteten Operanden angibt.
`operand` ist der String, die Variable, das Schlüsselwort oder das Objekt, dessen Typ zurückgegeben werden soll.
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

Für Eigenschaftswerte, gibt der `typeof` Operator den Typ des Wertes zurück, den die
Eigenschaft enthält:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für Methoden und Funktionen, gibt der `typeof` Operator Ergebnisse wie folgt zurück:

```js
typeof blur; // returns "function"
typeof eval; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

Für vordefinierte Objekte, gibt der `typeof` Operator Ergebnisse wie folgt zurück:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

Der [`void` Operator](/de/docs/Web/JavaScript/Reference/Operators/void) spezifiziert einen Ausdruck zur Auswertung, ohne einen Wert zurückzugeben. `expression` ist ein JavaScript-Ausdruck, der ausgewertet werden soll.
Die Klammern, die den Ausdruck umgeben, sind optional, es ist jedoch guter Stil, sie zu verwenden, um Präzedenzprobleme zu vermeiden.

## Relationale Operatoren

Ein relationaler Operator vergleicht seine Operanden und gibt einen booleschen Wert zurück, basierend darauf, ob der Vergleich wahr ist.

### in

Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft im angegebenen Objekt enthalten ist.
Die Syntax ist:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein String-, numerischer oder symobel Ausdruck ist, der einen Eigenschaftsnamen oder Index eines Arrays darstellt, und `objectName` der Name eines Objekts ist.

Die folgende Beispiele zeigen einige Verwendungen des `in` Operators.

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
wenn das angegebene Objekt von dem angegebenen Objekttyp ist. Die Syntax ist:

```js-nolint
object instanceof objectType
```

wobei `object` das zu testende Objekt gegen `objectType` ist, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie {{jsxref("Date")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie den Typ eines Objekts zur Laufzeit bestätigen müssen.
Zum Beispiel, wenn Ausnahmen behandelt werden, können Sie zu verschiedenen Ausnahmebehandlungscode unter Berücksichtigung des Typs der geworfenen Ausnahme verzweigen.

Zum Beispiel, verwendet der folgende Code `instanceof` um zu bestimmen, ob `theDay` ein `Date` Objekt ist. Da `theDay` ein `Date` Objekt ist, werden die Anweisungen im `if`-Block ausgeführt.

```js
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren operieren letztendlich auf einem oder mehreren grundlegenden Ausdrücken. Diese grundlegenden Ausdrücke schließen [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals) ein, aber es gibt auch einige andere Arten. Sie werden kurz unten eingeführt, und ihre Semantik wird im Detail in ihren jeweiligen Referenzabschnitten beschrieben.

### this

Verwenden Sie das [`this` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen.
Im Allgemeinen bezieht sich `this` auf das aufrufende Objekt in einer Methode.
Verwenden Sie `this` entweder mit der Punkt- oder Klammernotation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, eine Funktion namens `validate` validiert eine Eigenschaft `value` eines Objekts, basierend auf dem Objekt und den hohen und niedrigen Werten:

```js
function validate(obj, lowVal, highVal) {
  if (obj.value < lowVal || obj.value > highVal) {
    console.log("Invalid Value!");
  }
}
```

Sie könnten `validate` in jedem `onChange`-Ereignis-Handler eines Formularelements aufrufen, indem Sie `this` übergeben, um es auf das Formularelement zu beziehen, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Priorität der Auswertung in
Ausdrücken. Zum Beispiel, Sie können die Multiplikation und Division zuerst überschreiben, dann
Addition und Subtraktion, um die Addition zuerst auszuwerten.

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

Die [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Syntax ruft Eigenschaftswerte auf Objekten ab, indem entweder die Punktnotation oder die Klammernotation verwendet wird.

```js
object.property;
object["property"];
```

Der [guide dealing with objects](/de/docs/Web/JavaScript/Guide/Working_with_objects) Leitfaden geht detailliert auf die Eigenschaften von Objekten ein.

### Optionale Verkettung

Die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) Syntax (`?.`) führt die verkettete Operation an einem Objekt aus, wenn es definiert und nicht-`null` ist, und andernfalls unterbricht die Operation und gibt `undefined` zurück.
Dies ermöglicht es Ihnen, an einem Wert zu arbeiten, der `null` oder `undefined` sein kann, ohne einen `TypeError` zu verursachen.

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

Das [`super` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen am übergeordneten Objekt eines Objekts aufzurufen.
Es ist nützlich mit [Klassen](/de/docs/Web/JavaScript/Reference/Classes) um den Elternkonstruktor aufzurufen.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
