---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Dieses Kapitel beschreibt Ausdrücke und Operatoren in JavaScript, einschließlich Zuordnung, Vergleich, Arithmetik, Bitweise, Logik, Zeichenkette, ternärer Operator und mehr.

Auf einer hohen Ebene ist ein _Ausdruck_ eine gültige Codeeinheit, die zu einem Wert aufgelöst wird. Es gibt zwei Arten von Ausdrücken: solche, die Nebeneffekte haben (wie das Zuweisen von Werten), und solche, die rein _auswerten_.

Der Ausdruck `x = 7` ist ein Beispiel für die erste Art. Dieser Ausdruck verwendet den `=` _Operator_, um den Wert sieben der Variablen `x` zuzuweisen. Der Ausdruck selbst wertet zu `7` aus.

Der Ausdruck `3 + 4` ist ein Beispiel für die zweite Art. Dieser Ausdruck verwendet den `+`-Operator, um `3` und `4` zusammenzuzählen und ergibt den Wert `7`. Wenn er jedoch nicht Teil eines größeren Konstrukts (zum Beispiel einer [Variablen-Deklaration](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) wie `const z = 3 + 4`) ist, wird sein Ergebnis sofort verworfen – dies ist in der Regel ein Programmierfehler, da die Auswertung keine Effekte erzeugt.

Wie die obigen Beispiele ebenfalls zeigen, sind alle komplexen Ausdrücke durch _Operatoren_ verbunden, wie z.B. `=` und `+`. In diesem Abschnitt stellen wir die folgenden Operatoren vor:

- [Zuweisungsoperatoren](#zuweisungsoperatoren)
- [Vergleichsoperatoren](#vergleichsoperatoren)
- [Arithmetische Operatoren](#arithmetische_operatoren)
- [Bitweise Operatoren](#bitweise_operatoren)
- [Logische Operatoren](#logische_operatoren)
- [BigInt-Operatoren](#bigint_operatoren)
- [String-Operatoren](#string-operatoren)
- [Bedingungsoperator (ternär)](#conditional_ternary_operator)
- [Komma-Operator](#komma-operator)
- [Unäre Operatoren](#unäre_operatoren)
- [Relationsoperatoren](#relationsoperatoren)

Diese Operatoren verbinden Operanden, die entweder von Operatoren mit höherer Priorität gebildet werden oder von einem der [grundlegenden Ausdrücke](#grundlegende_ausdrücke). Eine vollständige und detaillierte Liste von Operatoren und Ausdrücken ist auch in der [Referenz](/de/docs/Web/JavaScript/Reference/Operators) verfügbar.

Der _Vorrang_ von Operatoren bestimmt die Reihenfolge, in der sie bei der Auswertung eines Ausdrucks angewendet werden. Zum Beispiel:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Obwohl `*` und `+` in unterschiedlicher Reihenfolge erscheinen, würden beide Ausdrücke `7` ergeben, da `*` Vorrang vor `+` hat, sodass der durch `*` verbundene Ausdruck immer zuerst ausgewertet wird. Sie können den Vorrang der Operatoren mit Hilfe von Klammern überschreiben (was einen [gruppierten Ausdruck](#gruppierungsoperator) erstellt – den grundlegenden Ausdruck). Eine vollständige Tabelle des Operatorvorrangs sowie verschiedene Fallstricke finden Sie auf der Seite [Operatorvorrang-Referenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).

JavaScript hat sowohl _binäre_ und _unäre_ Operatoren als auch einen speziellen ternären Operator, den bedingten Operator.
Ein binärer Operator benötigt zwei Operanden, einen vor dem Operator und einen nach dem Operator:

```plain
operand1 operator operand2
```

Zum Beispiel `3 + 4` oder `x * y`. Diese Form wird als _infix_ binärer Operator bezeichnet, weil der Operator zwischen zwei Operanden platziert wird. Alle binären Operatoren in JavaScript sind infix.

Ein unärer Operator benötigt einen einzelnen Operanden, entweder vor oder nach dem Operator:

```plain
operator operand
operand operator
```

Zum Beispiel `x++` oder `++x`. Die Form `Operator Operand` wird als _Präfix_-Unär-Operator bezeichnet, und die Form `Operand Operator` als _Postfix_-Unär-Operator. `++` und `--` sind die einzigen Postfix-Operatoren in JavaScript — alle anderen Operatoren, wie `!`, `typeof`, etc. sind Präfix.

## Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden basierend auf dem Wert seines rechten Operanden einen Wert zu.
Der einfache Zuweisungsoperator ist das Gleichheitszeichen (`=`), das den Wert seines rechten Operanden seinem linken Operanden zuweist.
Das heißt, `x = f()` ist ein Zuweisungsausdruck, der den Wert von `f()` `x` zuweist.

Es gibt auch zusammengesetzte Zuweisungsoperatoren, die Abkürzungen für die in der folgenden Tabelle aufgeführten Operationen sind:

| Name                                                                                                                 | Kurzschreib-Operator | Bedeutung          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment)                                                  | `x = f()`            | `x = f()`          |
| [Additionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`           | `x = x + f()`      |
| [Subtraktionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                          | `x -= f()`           | `x = x - f()`      |
| [Multiplikationszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`           | `x = x * f()`      |
| [Divisionszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`           | `x = x / f()`      |
| [Restzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                    | `x %= f()`           | `x = x % f()`      |
| [Exponentialzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                        | `x **= f()`          | `x = x ** f()`     |
| [Linksverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`          | `x = x << f()`     |
| [Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`          | `x = x >> f()`     |
| [Unsigned-Rechtsverschiebungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`         | `x = x >>> f()`    |
| [Bitweises UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                        | `x &= f()`           | `x = x & f()`      |
| [Bitweises XOR-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                        | `x ^= f()`           | `x = x ^ f()`      |
| [Bitweises ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                        | `x \|= f()`          | `x = x \| f()`     |
| [Logisches UND-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                        | `x &&= f()`          | `x && (x = f())`   |
| [Logisches ODER-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                        | `x \|\|= f()`        | `x \|\| (x = f())` |
| [Nullish Coalescing-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)            | `x ??= f()`          | `x ?? (x = f())`   |

### Zuweisung an Eigenschaften

Wenn ein Ausdruck zu einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) ausgewertet wird, kann die linke Seite eines Zuweisungsausdrucks Zuweisungen an Eigenschaften dieses Ausdrucks machen.
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

Für weitere Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

Wenn ein Ausdruck nicht zu einem Objekt ausgewertet wird, führen Zuweisungen an Eigenschaften dieses Ausdrucks keine Zuordnungen durch:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors) wirft der obige Code einen Fehler, da man keine Eigenschaften zu primitiven Datenwerten zuweisen kann.

Es ist ein Fehler, Werte an nicht modifizierbare Eigenschaften oder an Eigenschaften eines Ausdrucks ohne Eigenschaften (`null` oder `undefined`) zuzuweisen.

### Dekonstruktion

Für komplexere Zuweisungen ist der [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Syntax ein JavaScript-Ausdruck, der es ermöglicht, Daten aus Arrays oder Objekten mit einer Syntax zu extrahieren, die der Konstruktion von Array- und Objekt-Literalen entspricht.

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

Im Allgemeinen werden Zuweisungen innerhalb einer Variablendeklaration (d. h. mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) oder als eigenständige Anweisungen verwendet.

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

Allerdings, wie bei anderen Ausdrücken, werten Zuweisungsausdrücke wie `x = f()` in einen Ergebniswert aus. Obwohl dieser Ergebniswert normalerweise nicht verwendet wird, kann er dann von einem anderen Ausdruck verwendet werden.

Das Verketten von Zuweisungen oder das Verschachteln von Zuweisungen in andere Ausdrücke kann zu überraschendem Verhalten führen. Aus diesem Grund raten einige JavaScript-Stilrichtlinien [davon ab, Zuweisungen zu verketten oder zu verschachteln](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment). Nichtsdestotrotz kann das Verketten und Verschachteln von Zuweisungen manchmal vorkommen, sodass es wichtig ist, verstehen zu können, wie sie funktionieren.

Durch das Verketten oder Verschachteln eines Zuweisungsausdrucks kann das Ergebnis selbst einer anderen Variablen zugewiesen werden. Es kann protokolliert werden, es kann in ein Array-Literal oder einen Funktionsaufruf eingefügt werden und so weiter.

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

Das Auswertungsergebnis entspricht dem Ausdruck rechts vom `=`-Zeichen in der Spalte "Bedeutung" der obigen Tabelle. Das bedeutet, dass `x = f()` in das Ergebnis von `f()` auswertet, `x += f()` in die resultierende Summe von `x + f()`, `x **= f()` in die resultierende Potenz von `x ** f()`, und so weiter.

Im Fall von logischen Zuweisungen wie `x &&= f()`, `x ||= f()`, und `x ??= f()` ist der Rückgabewert der des logischen Vorgangs ohne die Zuweisung, also `x && f()`, `x || f()`, und `x ?? f()`, jeweils.

Wenn diese Ausdrücke ohne Klammern oder andere Gruppierungsoperatoren wie Array-Literale verkettet werden, werden die Zuweisungsausdrücke **von rechts nach links gruppiert** (sie sind [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)), aber sie werden **von links nach rechts ausgewertet**.

Beachten Sie, dass für alle Zuweisungsoperatoren außer `=` selbst, die resultierenden Werte immer auf den Werten der Operanden _vor_ der Operation basieren.

Zum Beispiel, vorausgesetzt, dass die folgenden Funktionen `f` und `g` und die Variablen `x` und `y` deklariert wurden:

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

`y = x = f()` entspricht `y = (x = f())`, weil der Zuweisungsoperator `=` [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity) ist. Es wird jedoch von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = x = f()` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable mit dem Namen `y` ausgewertet.
   2. Der Zuweisungsausdruck `x = f()` beginnt mit der Auswertung.
      1. Das `x` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable mit dem Namen `x` ausgewertet.
      2. Der Funktionsaufruf `f()` druckt "F!" in die Konsole aus und wertet dann zu der Zahl `2` aus.
      3. Dieses `2`-Ergebnis von `f()` wird `x` zugewiesen.
   3. Der Zuweisungsausdruck `x = f()` hat die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `x`, der `2` ist.
   4. Dieses `2`-Ergebnis wird wiederum `y` zugewiesen.
2. Der Zuweisungsausdruck `y = x = f()` hat die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `y` – der `2` ist. `x` und `y` werden auf `2` gesetzt, und die Konsole hat "F!" gedruckt.

#### Bewertung Beispiel 2

`y = [ f(), x = g() ]` wird ebenfalls von links nach rechts ausgewertet:

1. Der Zuweisungsausdruck `y = [ f(), x = g() ]` beginnt mit der Auswertung.
   1. Das `y` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable mit dem Namen `y` ausgewertet.
   2. Das innere Array-Literal `[ f(), x = g() ]` beginnt mit der Auswertung.
      1. Der Funktionsaufruf `f()` druckt "F!" in die Konsole aus und wertet dann zu der Zahl `2` aus.
      2. Der Zuweisungsausdruck `x = g()` beginnt mit der Auswertung.
         1. Das `x` auf der linken Seite dieser Zuweisung wird zu einer Referenz auf die Variable mit dem Namen `x` ausgewertet.
         2. Der Funktionsaufruf `g()` druckt "G!" in die Konsole aus und wertet dann zu der Zahl `3` aus.
         3. Dieses `3`-Ergebnis von `g()` wird `x` zugewiesen.
      3. Der Zuweisungsausdruck `x = g()` hat die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `x`, der `3` ist. Dieses `3`-Ergebnis wird zum nächsten Element im inneren Array-Literal (nach dem `2` von `f()`).
   3. Das innere Array-Literal `[ f(), x = g() ]` hat die Auswertung abgeschlossen; sein Ergebnis ist ein Array mit zwei Werten: `[ 2, 3 ]`.
   4. Dieses `[ 2, 3 ]`-Array wird jetzt `y` zugewiesen.
2. Der Zuweisungsausdruck `y = [ f(), x = g() ]` hat die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `y` – das `2, 3]`. `x` ist jetzt `3`, und `y` ist jetzt `[ 2, 3 ]`, und die Konsole hat "F!" und dann "G!" gedruckt.

#### Bewertung Beispiel 3

`x[f()] = g()` wird ebenfalls von links nach rechts ausgewertet. (Dieses Beispiel nimmt an, dass `x` bereits einem Objekt zugewiesen wurde. Für weitere Informationen über Objekte lesen Sie [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).)

1. Der Zuweisungsausdruck `x[f()] = g()` beginnt mit der Auswertung.
   1. Der Eigenschaftszugriff `x[f()]` auf der linken Seite dieser Zuweisung beginnt mit der Auswertung.
      1. Das `x` in diesem Eigenschaftszugriff wird zu einer Referenz auf die Variable mit dem Namen `x` ausgewertet.
      2. Der Funktionsaufruf `f()` druckt "F!" in die Konsole aus und wertet dann zu der Zahl `2` aus.
   2. Der Eigenschaftszugriff `x[f()]` auf dieser Zuweisung hat die Auswertung abgeschlossen; sein Ergebnis ist eine variable Eigenschaftsreferenz: `x[2]`.
   3. Der Funktionsaufruf `g()` druckt "G!" in die Konsole aus und wertet dann zu der Zahl `3` aus.
   4. Dieses `3` wird jetzt `x[2]` zugewiesen. (Dieser Schritt wird nur erfolgreich sein, wenn `x` einem [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) zugeordnet wurde.)
2. Der Zuweisungsausdruck `x[f()] = g()` hat die Auswertung abgeschlossen; sein Ergebnis ist der neue Wert von `x[2]` – das `3`. `x[2]` ist jetzt `3`, und die Konsole hat "F!" und dann "G!" gedruckt.

### Vermeiden von Zuweisungsketten

Das Verketten von Zuweisungen oder das Verschachteln von Zuweisungen in anderen Ausdrücken kann
zu überraschendem Verhalten führen. Aus diesem Grund wird [verkettete Zuweisung in derselben Anweisung als schlechter Stil angesehen](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment).

Insbesondere funktioniert es oft nicht, eine Vari

ablenkette in einer [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisung zu platzieren. Nur die äußerste/linkeste Variable wird deklariert; andere Variablen innerhalb der Zuweisungskette werden von der `const`/`let`/`var` Anweisung _nicht_ deklariert.
Zum Beispiel:

```js-nolint
const z = y = x = f();
```

Diese Anweisung scheint die Variablen `x`, `y` und `z` zu deklarieren.
Jedoch wird tatsächlich nur die Variable `z` deklariert.
`y` und `x` sind entweder ungültige Referenzen auf nicht existierende Variablen (im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)) oder, schlimmer noch, würden {{Glossary("Global_variable", "globale Variablen")}} für `x` und `y` im {{Glossary("Sloppy_mode", "nachlässigen Modus")}} implizit erstellen.

## Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert basierend darauf zurück, ob der Vergleich wahr ist.
Die Operanden können numerische, Zeichenketten-, logische oder [Objekt](/de/docs/Web/JavaScript/Guide/Working_with_objects) Werte sein.
Zeichenketten werden basierend auf der standardmäßigen lexikographischen Sortierung unter Verwendung von Unicode-Werten verglichen.
In den meisten Fällen, wenn die beiden Operanden nicht vom gleichen Typ sind, versucht JavaScript, sie in einen geeigneten Typ für den Vergleich zu konvertieren.
Dieses Verhalten führt in der Regel dazu, dass die Operanden numerisch verglichen werden.
Die einzigen Ausnahmen von der Typkonvertierung bei Vergleichen betreffen die `===` und `!==` Operatoren, die strikte Gleichheits- und Ungleichheitsvergleiche durchführen.
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
        Gibt <code>true</code> zurück, wenn die Operanden vom gleichen Typ, aber nicht gleich sind, oder von verschiedenen Typen sind.
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

Ein arithmetischer Operator nimmt numerische Werte (entweder Literale oder Variablen) als seine Operanden und gibt einen einzelnen numerischen Wert zurück.
Die Standard-Arithmetikoperatoren sind Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`).
Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Gleitkommazahlen verwendet werden (insbesondere beachten Sie, dass Division durch Null {{jsxref("Infinity")}} ergibt). Zum Beispiel:

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
        Binärer Operator. Gibt den ganzzahligen Rest der Division der beiden Operanden zurück.
      </td>
      <td>12 % 5 gibt 2 zurück.</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Increment">Inkrement</a> (<code>++</code>)
      </td>
      <td>
        Unärer Operator. Addiert eins zu seinem Operanden. Wenn als Präfix-Operator
        (<code>++x</code>) verwendet, gibt den Wert seines Operanden nach dem Hinzufügen von eins
        zurück; wenn als Postfix-Operator (<code>x++</code>) verwendet, gibt den Wert seines
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
        Der Rückgabewert ist analog zu dem für den Inkrement-Operator.
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
        Unärer Operator. Versucht, den Operanden in eine Zahl zu konvertieren, wenn er es nicht schon ist.
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
        Berechnet die <code>Grundzahl</code> zur <code>Exponenten</code>-Potenz,
        das ist, <code>Grundzahl^Exponenten</code>
      </td>
      <td>
        <code>2 ** 3</code> gibt <code>8</code> zurück.<br /><code>10 ** -1</code>
        gibt <code>0.1</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

## Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als ein Set von 32 Bit (Nullen und Einsen), anstatt als Dezimal-, Hexadezimal- oder Oktalzahlen. Zum Beispiel hat die Dezimalzahl neun eine binäre Darstellung von 1001. Bitweise Operatoren führen ihre Operationen auf solchen binären Darstellungen durch, geben jedoch standardmäßige JavaScript-numerische Werte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren von JavaScript zusammen.

| Operator                                                                                              | Nutzung   | Beschreibung                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                              | `a & b`   | Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Eins sind.                                                                                      |
| [Bitweises ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                              | `a \| b`  | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits beider Operanden Null sind.                                                                                      |
| [Bitweises XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                              | `a ^ b`   | Gibt eine Null in jeder Bitposition zurück, für die die entsprechenden Bits gleich sind. [Gibt eine Eins in jeder Bitposition zurück, für die die entsprechenden Bits unterschiedlich sind.] |
| [Bitweises NOT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                              | `~ a`     | Invertiert die Bits seines Operanden.                                                                                                                                                        |
| [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)                           | `a << b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach links, wobei Nullen von rechts hereingeschoben werden.                                                                                   |
| [Vorzeichenbehaftete Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)     | `a >> b`  | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, wobei verschobene Bits verworfen werden.                                                                                         |
| [Vorzeichenlose Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b` | Verschiebt `a` in binärer Darstellung `b` Bits nach rechts, wobei verschobene Bits verworfen werden und Nullen von links hereingeschoben werden.                                             |

### Bitweise logische Operatoren

Konzeptionell arbeiten die bitweisen logischen Operatoren wie folgt:

- Die Operanden werden in 32-Bit-Ganzzahlen konvertiert und durch eine Reihe von Bits (Nullen und Einsen) ausgedrückt. Zahlen mit mehr als 32 Bits werden ihre bedeutendsten Bits verworfen.
- Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: erstes Bit zu erstem Bit, zweites Bit zu zweitem Bit, und so weiter.
- Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Zum Beispiel ist die binäre Darstellung von neun 1001 und die binäre Darstellung von fünfzehn 1111. Wenn die bitweisen Operatoren auf diese Werte angewendet werden, sind die Ergebnisse wie folgt:

| Ausdruck  | Ergebnis | Binäre Beschreibung                               |
| --------- | -------- | ------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Beachten Sie, dass alle 32 Bits mit dem Bitweisen NOT-Operator invertiert werden und dass Werte mit dem bedeutendsten (linken) Bit, das auf 1 gesetzt ist, negative Zahlen (Zweierkomplement-Darstellung) darstellen. `~x` wertet zu demselben Wert aus, wie `-x - 1` auswertet.

### Bitweise Verschiebeoperatoren

Die bitweisen Verschiebeoperatoren nehmen zwei Operanden: der erste ist eine zu verschiebende Menge, und der zweite gibt die Anzahl der Bitpositionen an, um die der erste Operand verschoben werden soll. Die Richtung der Verschiebeoperation wird durch den verwendeten Operator gesteuert.

Verschiebeoperatoren konvertieren ihre Operanden in 32-Bit-Ganzzahlen und geben ein Ergebnis vom Typ {{jsxref("Number")}} oder {{jsxref("BigInt")}} zurück: Insbesondere, wenn der Typ
des linken Operanden {{jsxref("BigInt")}} ist, geben sie einen {{jsxref("BigInt")}} zurück;
anderenfalls geben sie einen {{jsxref("Number")}} zurück.

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
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach links. Überschüssige Bits, die nach links verschoben werden, werden verworfen. Null-Bits werden von rechts eingeschoben.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> ergibt 36, da 1001 verschoben um 2 Bits nach links 100100 wird, was 36 ist.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Right_shift">Vorzeichenbehaftete Rechtsverschiebung</a> (<code>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Kopien des linken Bits werden von links hereingeschoben.
      </td>
      <td>
        <code>9>>2</code> ergibt 2, da 1001 verschoben um 2 Bits nach rechts 10 wird, was 2 ist. Ebenfalls, <code>-9>>2</code> ergibt -3, da das Vorzeichen erhalten bleibt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Vorzeichenlose Rechtsverschiebung</a> (<code>>>></code>)
      </td>
      <td>
        Dieser Operator verschiebt den ersten Operanden um die angegebene Anzahl von Bits nach rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen. Null-Bits werden von links hereingeschoben.
      </td>
      <td>
        <code>19>>>2</code> ergibt 4, da 10011 verschoben um 2 Bits nach rechts 100 wird, was 4 ist. Für nicht-negative Zahlen erzeugen vorzeichenlose und vorzeichenbehaftete Rechtsverschiebung dasselbe Ergebnis.
      </td>
    </tr>
  </tbody>
</table>

## Logische Operatoren

Logische Operatoren werden typischerweise mit booleschen (logischen) Werten verwendet; wenn sie es sind, geben sie einen booleschen Wert zurück.
Allerdings geben die `&&`, `||` und `??` Operatoren tatsächlich den Wert eines der angegebenen Operanden zurück, sodass, wenn diese Operatoren mit nicht-booleschen Werten verwendet werden, sie einen nicht-booleschen Wert zurückgeben können. Als solche werden sie angemessener als "Wertauswahl-Operatoren" bezeichnet.
Die logischen Operatoren sind in der folgenden Tabelle beschrieben.

<table class="fullwidth-table">
  <caption>
    Logische Operatoren
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Nutzung</th>
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
        ansonsten gibt es <code>expr2</code> zurück. Wenn es mit booleschen Werten verwendet wird, gibt <code>&#x26;&#x26;</code> <code>true</code> zurück, wenn beide Operanden wahr sind; andernfalls gibt <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logisches ODER</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es in <code>true</code> umgewandelt werden kann;
        andernfalls gibt es <code>expr2</code> zurück. Wenn es mit booleschen Werten verwendet wird, gibt <code>||</code> <code>true</code> zurück, wenn einer der Operanden wahr ist; wenn beide falsch sind, gibt <code>false</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish Coalescing-Operator</a> (<code>??</code>)
      </td>
      <td><code>expr1 ?? expr2</code></td>
      <td>
        Gibt <code>expr1</code> zurück, wenn es weder <code>null</code> noch <code>undefined</code> ist; andernfalls gibt es <code>expr2</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logisches NICHT</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Gibt <code>false</code> zurück, wenn sein einziger Operand in <code>true</code> umgewandelt werden kann; andernfalls, liefert <code>true</code>.
      </td>
    </tr>
  </tbody>
</table>

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind solche, die zu `null`, `0`, `0n`, `NaN`, der leeren Zeichenkette (`""`) oder `undefined` ausgewertet werden.

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

Der folgende Code zeigt Beispiele für den `??` (Nullish Coalescing) Operator.

```js
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
```

Beachten Sie, wie `??` wie `||` funktioniert, aber es gibt nur den zweiten Ausdruck zurück, wenn der erste "{{Glossary("Nullish", "nullish")}}" ist, d. h. entweder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). `??` ist eine bessere Alternative zu `||`, um Standardwerte für Werte festzulegen, die `null` oder `undefined` sein könnten, insbesondere wenn Werte wie `''` oder `0` gültige Werte sind und der Standard nicht gelten sollte.

Der folgende Code zeigt Beispiele für den `!` (logisches NICHT) Operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Kurzschlussauswertung

Da logische Ausdrücke von links nach rechts ausgewertet werden, werden sie nach möglichen "Kurzschluss"-Bedingungen mittels der folgenden Regeln getestet:

- `falsch && irgendetwas` ist ein Kurzschluss, der zum falschen Wert auswertet.
- `wahr || irgendetwas` ist ein Kurzschluss, der zum wahren Wert auswertet.
- `nicht Nullish ?? irgendetwas` ist ein Kurzschluss, der zum nicht-nullish Wert auswertet.

Die Regeln der Logik garantieren, dass diese Bewertungen immer korrekt sind. Beachten Sie, dass der _irgendetwas_ Teil der obigen Ausdrücke nicht ausgewertet wird, sodass alle Nebeneffekte
dieses nicht in Kraft treten.

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

Eine Ausnahme ist die [Unsigned-Rechtsverschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), die für BigInt-Werte nicht definiert ist. Dies liegt daran, dass ein BigInt keine feste Breite hat und daher technisch gesehen kein "höchstes Bit" hat.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts und Zahlen sind nicht wechselseitig austauschbar – man kann sie nicht in Berechnungen mischen.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

Dies liegt daran, dass BigInt weder ein Obermenge noch eine Untermenge von Zahlen ist. BigInts haben eine höhere Präzision als Zahlen bei der Darstellung von großen Ganzzahlen, können jedoch keine Dezimalzahlen darstellen, sodass eine implizite Konvertierung auf beiden Seiten möglicherweise Präzision verliert. Verwenden Sie eine explizite Konvertierung, um anzugeben, ob Sie die Operation als Zahlenoperation oder als BigInt-Operation durchführen möchten.

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

Zusätzlich zu den Vergleichsoperatoren, die auf String-Werte angewendet werden können, fügt der Verkettungsoperator (+) zwei String-Werte zusammen und gibt einen weiteren String zurück, der die Vereinigung der beiden Operand-Strings ist.

Zum Beispiel,

```js
console.log("my " + "string"); // console logs the string "my string".
```

Der Kurzschreib-Zuweisungsoperator `+=` kann ebenfalls verwendet werden, um Strings zu verketten.

Zum Beispiel,

```js
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
```

## Bedingungsoperator (ternär)

Der [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist der einzige JavaScript-Operator, der drei Operanden annimmt. Der Operator kann einen von zwei Werten basierend auf einer Bedingung haben. Die Syntax lautet:

```js-nolint
condition ? val1 : val2
```

Wenn `Bedingung` wahr ist, hat der Operator den Wert von `val1`. Andernfalls hat er den Wert von `val2`. Sie können den Bedingungsoperator überall dort verwenden, wo Sie einen Standardoperator verwenden würden.

Zum Beispiel,

```js
const status = age >= 18 ? "adult" : "minor";
```

Diese Anweisung weist der Variable `status` den Wert "Erwachsener" zu, wenn `Alter` achtzehn oder mehr ist. Andernfalls weist sie `status` den Wert "Minderjähriger" zu.

## Komma-Operator

Der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`) wertet beide Operanden aus und gibt den Wert des letzten Operanden zurück. Dieser Operator wird hauptsächlich in einer `for`-Schleife verwendet, um mehrere Variablen bei jedem Durchlauf der Schleife zu aktualisieren. Es wird als schlechter Stil angesehen, ihn anderswo zu verwenden, wenn es nicht notwendig ist. Oft können und sollten stattdessen zwei separate Anweisungen verwendet werden.

Zum Beispiel, wenn `a` ein zweidimensionales Array mit 10 Elementen auf einer Seite ist, verwendet der folgende Code den Komma-Operator, um zwei Variablen auf einmal zu aktualisieren. Der Code gibt die Werte der Diagonalelemente im Array aus:

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

Der [`loeschen`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löscht eine Eigenschaft eines Objekts. Die Syntax lautet:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

wobei `objekt` der Name eines Objekts ist, `eigenschaft` eine vorhandene Eigenschaft ist, und `eigenschaftSchlüssel` eine Zeichenkette oder ein Symbol ist, die auf eine bestehende Eigenschaft verweist.

Wenn der `loeschen`-Operator erfolgreich ist, entfernt er die Eigenschaft vom Objekt. Der Versuch, darauf zuzugreifen, ergibt anschließend `undefined`. Der `loeschen`-Operator gibt `true` zurück, wenn die Operation möglich ist; er gibt `false` zurück, wenn die Operation nicht möglich ist.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Löschen von Array-Elementen

Da Arrays nur Objekte sind, ist es technisch möglich, Elemente daraus zu `loeschen`. Dies wird jedoch als schlechte Praxis angesehen – versuchen Sie, es zu vermeiden. Wenn Sie eine Array-Eigenschaft löschen, wird die Länge des Arrays nicht beeinflusst und andere Elemente werden nicht neu indexiert. Um dieses Verhalten zu erreichen, ist es viel besser, das Element einfach mit dem Wert `undefined` zu überschreiben. Um das Array tatsächlich zu manipulieren, nutzen Sie die verschiedenen Array-Methoden wie [`splice`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

Der [`typeof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) gibt einen String zurück, der den Typ des nicht ausgewerteten Operanden angibt. `Operand` ist der String, die Variable, das Schlüsselwort oder das Objekt, für das der Typ zurückgegeben werden soll. Die Klammern sind optional.

Angenommen, Sie definieren die folgenden Variablen:

```js
const myFun = new Function("5 + 2");
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();
```

Der `typeof`-Operator gibt folgende Ergebnisse für diese Variablen zurück:

```js
typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"
```

Für die Schlüsselwörter `true` und `null` gibt der `typeof`-Operator folgende Ergebnisse zurück:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

Für eine Zahl oder einen String gibt der `typeof`-Operator folgende Ergebnisse zurück:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

Für Eigenschaftswerte gibt der `typeof`-Operator den Typ des Wertes zurück, den die Eigenschaft enthält:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

Für Methoden und Funktionen gibt der `typeof`-Operator folgende Ergebnisse zurück:

```js
typeof blur; // returns "function"
typeof eval; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

Für vordefinierte Objekte gibt der `typeof`-Operator folgende Ergebnisse zurück:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

Der [`void`-Operator](/de/docs/Web/JavaScript/Reference/Operators/void) gibt an, dass ein Ausdruck ausgewertet werden soll, ohne einen Wert zurückzugeben. `Ausdruck` ist ein JavaScript-Ausdruck, der ausgewertet werden soll. Die den Ausdruck umgebenden Klammern sind optional, sind jedoch aus stilistischen Gründen sinnvoll, um Vorrangprobleme zu vermeiden.

## Relationsoperatoren

Ein Relationsoperator vergleicht seine Operanden und gibt einen booleschen Wert zurück, basierend darauf, ob der Vergleich wahr ist.

### in

Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gibt `true` zurück, wenn die angegebene Eigenschaft in dem angegebenen Objekt existiert. Die Syntax lautet:

```js-nolint
propNameOrNumber in objectName
```

wobei `propNameOrNumber` ein Ausdruck ist, der einen Eigenschaftsnamen oder einen Array-Index darstellt, und `objectName` der Name eines Objekts ist.

Die folgenden Beispiele zeigen einige Anwendungen des `in`-Operators.

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

Der [`instanceof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) gibt `true` zurück, wenn das angegebene Objekt vom angegebenen Objekttyp ist. Die Syntax lautet:

```js-nolint
object instanceof objectType
```

wobei `object` das Objekt ist, das gegen `objectType` getestet werden soll, und `objectType` ein Konstruktor ist, der einen Typ darstellt, wie z. B. {{jsxref("Map")}} oder {{jsxref("Array")}}.

Verwenden Sie `instanceof`, wenn Sie zur Laufzeit den Typ eines Objekts bestätigen müssen. Zum Beispiel können Sie beim Abfangen von Ausnahmen zu unterschiedlichen Ausnahmebehandlungscodezuschnitten entsprechend dem Typ der geworfenen Ausnahme verzweigen.

Zum Beispiel bestimmt der folgende Code mit `instanceof`, ob `obj` ein `Map`-Objekt ist. Da `obj` ein `Map`-Objekt ist, werden die Anweisungen innerhalb des `if`-Blocks ausgeführt.

```js
const obj = new Map();
if (obj instanceof Map) {
  // statements to execute
}
```

## Grundlegende Ausdrücke

Alle Operatoren arbeiten letztlich mit einem oder mehreren grundlegenden Ausdrücken. Diese grundlegenden Ausdrücke umfassen [Bezeichner](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) und [Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#literals), aber es gibt noch einige andere Arten. Sie werden kurz vorgestellt, und ihre Semantik wird in ihren jeweiligen Referenzabschnitten im Detail beschrieben.

### this

Verwenden Sie das [`this`-Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this), um auf das aktuelle Objekt zu verweisen. Im Allgemeinen bezieht sich `this` in einer Methode auf das aufrufende Objekt. Verwenden Sie `this` entweder mit der Punkt- oder der Klammer-Notation:

```js
this["propertyName"];
this.propertyName;
```

Angenommen, eine Funktion namens `validate` validiert eine `value`-Eigenschaft eines Objekts, gegeben das Objekt und die hohen und niedrigen Werte:

```js
function validate(obj, lowVal, highVal) {
  if (obj.value < lowVal || obj.value > highVal) {
    console.log("Invalid Value!");
  }
}
```

Sie könnten `validate` in jedem Formelement `onChange`-Ereignishandler aufrufen und `this` verwenden, um es an das Formelement zu übergeben, wie im folgenden Beispiel:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Gruppierungsoperator

Der Gruppierungsoperator `( )` steuert die Vorrangordnung der Auswertung in
Ausdrücken. Zum Beispiel können Sie die Multiplikation und Division vor der Addition und Subtraktion außer Kraft setzen, um die Addition zuerst auszuwerten.

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

Der [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Syntax holt Eigenschaftswerte auf Objekten, indem entweder Punkt-Notation oder Klammer-Notation verwendet wird.

```js
object.property;
object["property"];
```

Der [Leitfaden zu Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) geht näher auf Objekteigenschaften ein.

### Optional Chaining

Die [Optional Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) Syntax (`?.`) führt die verkettete Operation auf einem Objekt aus, wenn es definiert und nicht-`null` ist, und beendet andernfalls die Operation und gibt `undefined` zurück. Dies ermöglicht es Ihnen, mit einem Wert zu operieren, der möglicherweise `null` oder `undefined` ist, ohne dass ein `TypeError` verursacht wird.

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

Das [`super`-Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/super) wird verwendet, um Funktionen auf dem Elternobjekt eines Objekts aufzurufen. Es ist nützlich bei [Klassen](/de/docs/Web/JavaScript/Reference/Classes), um den Elternkonstruktor aufzurufen, zum Beispiel.

```js-nolint
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}
