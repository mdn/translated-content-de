---
title: Operatorenrangfolge
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: cf5a47bb26ce3473ad703add726e4b7e2d5a5b1a
---

Die **Operatorenrangfolge** bestimmt, wie Operatoren im Verhältnis zueinander geparst werden. Operatoren mit höherer Rangfolge werden die Operanden von Operatoren mit niedrigerer Rangfolge.

{{InteractiveExample("JavaScript Demo: Expressions - Operator precedence")}}

```js interactive-example
console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let a;
let b;

console.log((a = b = 5));
// Expected output: 5
```

## Rangfolge und Assoziativität

Betrachten Sie einen Ausdruck, der durch die folgende Darstellung beschreibbar ist, wobei sowohl `OP1` als auch `OP2` Platzhalter für OPeratoren sind.

```plain
a OP1 b OP2 c
```

Die obige Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche Interpretation die Sprache annimmt, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Rangfolgen (siehe Tabelle unten) haben, wird der Operator mit der höheren _Rangfolge_ zuerst ausgeführt und die Assoziativität spielt keine Rolle. Beachten Sie, dass Multiplikation eine höhere Rangfolge hat als Addition und zuerst ausgeführt wird, auch wenn die Addition im Code zuerst geschrieben ist.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Innerhalb von Operatoren mit derselben Rangfolge gruppiert die Sprache diese nach _Assoziativität_. _Linksassoziativität_ (von links nach rechts) bedeutet, dass sie als `(a OP1 b) OP2 c` interpretiert wird, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass sie als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ, daher können Sie schreiben:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies liegt daran, dass der Zuweisungsoperator den zugewiesenen Wert zurückgibt. Zuerst wird `b` auf 5 gesetzt. Dann wird auch `a` auf 5 gesetzt — den Rückgabewert von `b = 5`, d.h. der rechte Operand der Zuweisung.

Ein weiteres Beispiel: Der einzigartige Exponentialoperator hat eine Rechtsassoziativität, während andere arithmetische Operatoren eine Linksassoziativität haben.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zuerst nach Rangfolge und dann, für benachbarte Operatoren mit derselben Rangfolge, nach Assoziativität gruppiert. Wenn Sie Division und Exponentiation mischen, kommt die Exponentiation immer vor der Division. Zum Beispiel ergibt `2 ** 3 / 3 ** 2` 0.8888888888888888, weil es dasselbe ist wie `(2 ** 3) / (3 ** 2)`.

Für präfixunäre Operatoren nehmen wir den folgenden Muster an:

```plain
OP1 a OP2 b
```

wobei `OP1` ein Präfixunärer Operator und `OP2` ein binärer Operator ist. Wenn `OP1` eine höhere Rangfolge als `OP2` hat, würde es als `(OP1 a) OP2 b` gruppiert; andernfalls wäre es `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Wenn der unäre Operator auf dem zweiten Operand steht:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Rangfolge als der unäre Operator `OP1` haben, damit er als `a OP2 (OP1 b)` gruppiert wird. Zum Beispiel ist das folgende ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Rangfolge als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(a + yield) 1` werden — aber da `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, wäre dies ein Syntaxfehler. Glücklicherweise haben die meisten unären Operatoren eine höhere Rangfolge als binäre Operatoren und leiden nicht unter diesem Fallstrick.

Wenn wir zwei Präfixunäre Operatoren haben:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator, der näher an dem Operand ist, `OP2`, eine höhere Rangfolge als `OP1` haben, damit er als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es andersherum zu machen und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Rangfolge als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies `(await yield) 1` werden, was bedeutet, dass auf einen Bezeichner namens `yield` gewartet wird, also ein Syntaxfehler. Ebenso, wenn Sie `new !A;` haben, wird, da `!` eine niedrigere Rangfolge als `new` hat, dies zu `(new !) A`, was offensichtlich ungültig ist. (Dieser Code sieht sowieso unsinnig aus, da `!A` immer ein Boolescher Wert ist, keine Konstruktorfunktion.)

Für postfixunäre Operatoren (namentlich `++` und `--`) gelten die gleichen Regeln. Glücklicherweise haben beide Operatoren eine höhere Rangfolge als jeder binäre Operator, sodass die Gruppierung immer so ist, wie Sie es erwarten würden. Außerdem, da `++` zu einem _Wert_ und nicht zu einer _Referenz_ evaluiert, können Sie keine mehrfachen Inkremente zusammenketten.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorenrangfolge wird _rekursiv_ behandelt. Zum Beispiel betrachten Sie diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlichen Rangstufen in absteigender Reihenfolge der Rangstufen.

1. Der `**`-Operator hat die höchste Rangfolge und wird daher zuerst gruppiert.
2. Um den `**`-Ausdruck herum hat er `*` rechts und `+` links. `*` hat eine höhere Rangfolge, daher wird es zuerst gruppiert. `*` und `/` haben die gleiche Rangfolge, daher gruppieren wir sie vorerst zusammen.
3. Wenn Sie sich die um die in 2 gruppierte `*`/`/`-Ausdruck kümmern, wird, weil `+` eine höhere Rangfolge als `>>` hat, ersteres gruppiert.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/` Gruppe, da sie beide linksassoziativ sind, würde der linke Operand gruppiert werden.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass die Operatorenrangfolge und -assoziativität nur die Auswertungsreihenfolge von _Operatoren_ (die implizite Gruppierung) und nicht die Reihenfolge der Auswertung von _Operanden_ beeinflusst. Die Operanden werden immer von links nach rechts ausgewertet. Die höher priorisierten Ausdrücke werden immer zuerst ausgewertet, und ihre Ergebnisse werden dann gemäß der Operatorenrangfolge zusammengesetzt.

```js-nolint
function echo(name, num) {
  console.log(`Evaluating the ${name} side`);
  return num;
}
// Exponentiation operator (**) is right-associative,
// but all call expressions (echo()), which have higher precedence,
// will be evaluated before ** does
console.log(echo("left", 4) ** echo("middle", 3) ** echo("right", 2));
// Evaluating the left side
// Evaluating the middle side
// Evaluating the right side
// 262144

// Exponentiation operator (**) has higher precedence than division (/),
// but evaluation always starts with the left operand
console.log(echo("left", 4) / echo("middle", 3) ** echo("right", 2));
// Evaluating the left side
// Evaluating the middle side
// Evaluating the right side
// 0.4444444444444444
```

Wenn Sie mit Binärbäumen vertraut sind, denken Sie an eine [Post-Order Traversierung](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren richtig gruppiert wurden, würden die binären Operatoren einen Binärbaum bilden. Die Auswertung beginnt von der äußersten Gruppe — das ist der Operator mit der niedrigsten Rangfolge (`/` in diesem Fall). Der linke Operand dieses Operators wird zuerst ausgewertet, was aus höher priorisierten Operatoren (wie einem Aufrufausdruck `echo("left", 4)`) bestehen kann. Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher würden alle Blattknoten — die `echo()`-Aufrufe — von links nach rechts besucht, unabhängig von der Rangfolge der Operatoren, die sie verbinden.

## Kurzschlusslogik

Im vorherigen Abschnitt sagten wir: "Die höher priorisierten Ausdrücke werden immer zuerst ausgewertet" — das ist im Allgemeinen wahr, muss jedoch mit der Anerkennung der _Kurzschlusslogik_ ergänzt werden, bei der ein Operand möglicherweise überhaupt nicht ausgewertet wird.

Kurzschlusslogik ist ein Fachbegriff für bedingte Auswertung. Zum Beispiel in dem Ausdruck `a && (b + c)`, wenn `a` {{Glossary("falsy", "falsch")}} ist, wird der Unterausdruck `(b + c)` nicht einmal ausgewertet, selbst wenn er gruppiert ist und daher eine höhere Rangfolge hat als `&&`. Wir könnten sagen, dass der logische Und-Operator (`&&`) "kurzgeschlossen" ist. Neben logischem Und gehören zu den anderen kurzgeschlossenen Operatoren logisches Oder (`||`), der Nullish Coalescing Operator (`??`) und der optionale Verkettungsoperator (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Beim Auswerten eines kurzgeschlossenen Operators wird stets der linke Operand ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten der Kurzschlusslogik ist in diesen Operatoren integriert. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob das tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, selbst wenn das Ergebnis niemals etwas anderes als `NaN` wäre.

Das vorherige Modell einer Post-Order Traversierung gilt weiterhin. Allerdings wird die Sprache, nachdem der linke Unterbaum eines kurzgeschlossenen Operators besucht wurde, entscheiden, ob der rechte Operand ausgewertet werden muss. Wenn nicht (z. B. weil der linke Operand von `||` bereits wahr ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Unterbaum zu besuchen.

Betrachten Sie diesen Fall:

```js-nolint
function A() { console.log('called A'); return false; }
function B() { console.log('called B'); return false; }
function C() { console.log('called C'); return true; }

console.log(C() || B() && A());

// Logs:
// called C
// true
```

Nur `C()` wird ausgewertet, obwohl `&&` eine höhere Rangfolge hat. Das bedeutet nicht, dass `||` in diesem Fall eine höhere Rangfolge hat — es ist genau _weil_ `(B() && A())` eine höhere Rangfolge hat, dass es als Ganzes vernachlässigt wird. Wenn es umsortiert wird als:

```js-nolint
console.log(A() && B() || C());
// Logs:
// called A
// called C
// true
```

Dann würde der Kurzschlusseffekt von `&&` nur verhindern, dass `B()` ausgewertet wird, aber weil `A() && B()` als Ganzes `false` ist, würde `C()` trotzdem ausgewertet.

Allerdings beachten Sie, dass Kurzschlusslogik das endgültige Auswertungsergebnis nicht ändert. Es beeinflusst nur die Auswertung der _Operanden_, nicht wie _Operatoren_ gruppiert werden — wenn die Auswertung von Operanden keine Nebeneffekte hat (zum Beispiel Ausgabe an die Konsole, Zuweisung an Variablen, Auslösen eines Fehlers), wäre die Kurzschlusslogik überhaupt nicht wahrnehmbar.

Die Zuweisungsgegenstücke dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls kurzgeschlossen. Sie sind so kurzgeschlossen, dass die Zuweisung überhaupt nicht erfolgt.

## Tabelle

Die folgende Tabelle listet Operatoren in der Reihenfolge von der höchsten Rangfolge (18) zur niedrigsten Rangfolge (1) auf.

Mehrere allgemeine Hinweise zur Tabelle:

1. Nicht alle hier enthaltenen Syntaxe sind im strengen Sinne "Operatoren". Beispielsweise werden Spread `...` und Pfeil `=>` typischerweise nicht als Operatoren angesehen. Wir haben sie jedoch dennoch eingefügt, um zu zeigen, wie stark sie im Vergleich zu anderen Operatoren/Ausdrücken binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die enger sind als die, die durch höher priorisierte Operatoren produziert werden. Zum Beispiel muss die rechte Seite des Mitgliederzugriffs `.` (Rangfolge 17) ein Bezeichner anstelle eines gruppierten Ausdrucks sein. Die linke Seite des Pfeils `=>` (Rangfolge 2) muss eine Argumentliste oder ein einzelner Bezeichner anstelle eines zufälligen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die breiter sind als die, die durch höher priorisierte Operatoren erzeugt werden. Zum Beispiel kann der in Klammern eingeschlossene Ausdruck der Klammernotation `[ … ]` (Rangfolge 17) jeder Ausdruck sein, selbst durch Kommata (Rangfolge 1) verbundene. Diese Operatoren wirken so, als wäre dieser Operand "automatisch gruppiert". In diesem Fall werden wir die Assoziativität weglassen.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Rangfolge</th>
      <th>Assoziativität</th>
      <th>Einzelne Operatoren</th>
      <th>Hinweise</th>
    </tr>
    <tr>
      <td>18: Gruppierung</td>
      <td>n/a</td>
      <td>{{jsxref("Operators/Grouping", "Grouping", "", 1)}}<br><code>(x)</code></td>
      <td>[1]</td>
    </tr>
    <tr>
      <td rowspan="6">17: Zugriff und Aufruf</td>
      <td rowspan="2">
        von links nach rechts
      </td>
      <td>{{jsxref("Operators/Property_accessors", "Mitgliederzugriff", "#dot_notation", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "Optionale Verkettung", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">n/a</td>
      <td>
        {{jsxref("Operators/Property_accessors", "Berechneter Mitgliederzugriff", "#bracket_notation", 1)}}<br><code>x[y]</code>
      </td>
      <td>[3]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/new", "new")}} mit Argumentliste<br><code>new x(y)</code></td>
      <td rowspan="3">[4]</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Guide/Functions">Funktionsaufruf</a><br><code>x(y)</code>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/import", "import(x)")}}</td>
    </tr>
    <tr>
      <td>16: new</td>
      <td>n/a</td>
      <td>{{jsxref("Operators/new", "new")}} ohne Argumentliste<br><code>new x</code></td>
    </tr>
    <tr>
      <td rowspan="2">15: Postfix-Operatoren</td>
      <td rowspan="2">n/a</td>
      <td>
        {{jsxref("Operators/Increment", "Postfix-Inkrement", "", 1)}}<br><code>x++</code>
      </td>
      <td rowspan="2">[5]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Postfix-Dekrement", "", 1)}}<br><code>x--</code>
      </td>
    </tr>
    <tr>
      <td rowspan="10">14: Präfix-Operatoren</td>
      <td rowspan="10">n/a</td>
      <td>
        {{jsxref("Operators/Increment", "Präfix-Inkrement", "", 1)}}<br><code>++x</code>
      </td>
      <td rowspan="2">[6]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Präfix-Dekrement", "", 1)}}<br><code>--x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_NOT", "Logisches NICHT", "", 1)}}<br><code>!x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_NOT", "Bitweises NICHT", "", 1)}}<br><code>~x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_plus", "Unäres Plus", "", 1)}}<br><code>+x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_negation", "Unäre Negation", "", 1)}}<br><code>-x</code>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/typeof", "typeof x")}}</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/void", "void x")}}</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/delete", "delete x")}}</td>
      <td>[7]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/await", "await x")}}</td>
    </tr>
    <tr>
      <td>13: Exponentiierung</td>
      <td>von rechts nach links</td>
      <td>
        {{jsxref("Operators/Exponentiation", "Exponentiation", "", 1)}}<br><code>x ** y</code>
      </td>
      <td>[8]</td>
    </tr>
    <tr>
      <td rowspan="3">12: Multiplikative Operatoren</td>
      <td rowspan="3">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Multiplication", "Multiplikation", "", 1)}}<br><code>x * y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Division", "Division", "", 1)}}<br><code>x / y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Remainder", "Rest", "", 1)}}<br><code>x % y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="2">11: Additive Operatoren</td>
      <td rowspan="2">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Addition", "Addition", "", 1)}}<br><code>x + y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Subtraction", "Subtraktion", "", 1)}}<br><code>x - y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="3">10: Bitweises Verschieben</td>
      <td rowspan="3">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Left_shift", "Linksschiebung", "", 1)}}<br><code>x &#x3C;&#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift", "Rechtsschiebung", "", 1)}}<br><code>x >> y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift", "Unsigned-Rechtsschiebung", "", 1)}}<br><code>x >>> y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="6">9: Relationale Operatoren</td>
      <td rowspan="6">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Less_than", "Kleiner als", "", 1)}}<br><code>x &#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Less_than_or_equal", "Kleiner oder gleich", "", 1)}}<br><code>x &#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than", "Größer als", "", 1)}}<br><code>x > y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than_or_equal", "Größer oder gleich", "", 1)}}<br><code>x >= y</code>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/in", "x in y")}}</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/instanceof", "x instanceof y")}}</td>
    </tr>
    <tr>
      <td rowspan="4">8: Gleichheitsoperatoren</td>
      <td rowspan="4">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Equality", "Gleichheit", "", 1)}}<br><code>x == y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Inequality", "Ungleichheit", "", 1)}}<br><code>x != y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_equality", "Strikte Gleichheit", "", 1)}}<br><code>x === y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_inequality", "Strikte Ungleichheit", "", 1)}}<br><code>x !== y</code>
      </td>
    </tr>
    <tr>
      <td>7: Bitweises UND</td>
      <td>von links nach rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_AND", "Bitweises UND", "", 1)}}<br><code>x &#x26; y</code>
      </td>
    </tr>
    <tr>
      <td>6: Bitweises XOR</td>
      <td>von links nach rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_XOR", "Bitweises XOR", "", 1)}}<br><code>x ^ y</code>
      </td>
    </tr>
    <tr>
      <td>5: Bitweises ODER</td>
      <td>von links nach rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_OR", "Bitweises ODER", "", 1)}}<br><code>x | y</code>
      </td>
    </tr>
    <tr>
      <td>4: Logisches UND</td>
      <td>von links nach rechts</td>
      <td>
        {{jsxref("Operators/Logical_AND", "Logisches UND", "", 1)}}<br><code>x &#x26;&#x26; y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="2">3: Logisches ODER, Nullish Coalescing</td>
      <td rowspan="2">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Logical_OR", "Logisches ODER", "", 1)}}<br><code>x || y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing", "Nullish Coalescing Operator", "", 1)}}<br><code>x ?? y</code>
      </td>
      <td>[9]</td>
    </tr>
    <tr>
      <td rowspan="21">2: Zuweisung und Sonstiges</td>
      <td rowspan="16">von rechts nach links</td>
      <td>
        {{jsxref("Operators/Assignment", "Zuweisung", "", 1)}}<br><code>x = y</code>
      </td>
      <td rowspan="16">[10]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Addition_assignment", "Addition-Zuweisung", "", 1)}}<br><code>x += y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Subtraction_assignment", "Subtraktion-Zuweisung", "", 1)}}<br><code>x -= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Exponentiation_assignment", "Exponentiation-Zuweisung", "", 1)}}<br><code>x **= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Multiplication_assignment", "Multiplikation-Zuweisung", "", 1)}}<br><code>x *= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Division_assignment", "Division-Zuweisung", "", 1)}}<br><code>x /= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Remainder_assignment", "Rest-Zuweisung", "", 1)}}<br><code>x %= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Left_shift_assignment", "Linksschiebe-Zuweisung", "", 1)}}<br><code>x &#x3C;&#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift_assignment", "Rechtsschiebe-Zuweisung", "", 1)}}<br><code>x >>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift_assignment", "Unsigned-Rechtsschiebe-Zuweisung", "", 1)}}<br><code>x >>>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_AND_assignment", "Bitweises UND-Zuweisung", "", 1)}}<br><code>x &#x26;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_XOR_assignment", "Bitweises XOR-Zuweisung", "", 1)}}<br><code>x ^= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_OR_assignment", "Bitweises ODER-Zuweisung", "", 1)}}<br><code>x |= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_AND_assignment", "Logisches UND-Zuweisung", "", 1)}}<br><code>x &#x26;&#x26;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_OR_assignment", "Logisches ODER-Zuweisung", "", 1)}}<br><code>x ||= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing_assignment", "Nullish Coalescing-Zuweisung", "", 1)}}<br><code>x ??= y</code>
      </td>
    </tr>
    <tr>
      <td>von rechts nach links</td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator">Bedingter (ternärer) Operator</a><br><code>x ? y : z</code>
      </td>
      <td>[11]</td>
    </tr>
    <tr>
      <td>von rechts nach links</td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Pfeil</a><br><code>x => y</code>
      </td>
      <td>[12]</td>
    </tr>
    <tr>
      <td rowspan="3">n/a</td>
      <td>{{jsxref("Operators/yield", "yield x")}}</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield*", "yield* x")}}</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax">Spread</a><br><code>...x</code>
      </td>
      <td>[13]</td>
    </tr>
    <tr>
      <td>1: Komma</td>
      <td>von links nach rechts</td>
      <td>
        {{jsxref("Operators/Comma_Operator", "Komma-Operator", "", 1)}}<br><code>x, y</code>
      </td>
    </tr>
  </tbody>
</table>

Hinweise:

1. Der Operand kann jeder Ausdruck sein.
2. Die "rechte Seite" muss ein Bezeichner sein.
3. Die "rechte Seite" kann jeder Ausdruck sein.
4. Die "rechte Seite" ist eine durch Komma getrennte Liste von Ausdrücken mit Rangfolge > 1 (d.h. keine Komma-Ausdrücke). Der Konstruktor eines `new`-Ausdrucks kann keine optionale Kette sein.
5. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Mitgliederzugriff). Seine Rangfolge bedeutet, dass `new Foo++` `(new Foo)++` (ein Syntaxfehler) und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor) ist.
6. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Mitgliederzugriff).
7. Der Operand kann kein Bezeichner oder Zugriff auf ein [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sein.
8. Die linke Seite kann keine Rangfolge 14 haben.
9. Die Operanden können kein logisches ODER `||` oder logisches UND `&&`-Operator ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuweisungsziel sein (Bezeichner oder Mitgliederzugriff).
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelner Bezeichner oder eine geklammerte Parameterliste.
13. Nur innerhalb von Objektliteralen, Arrayliteralen oder Argumentlisten gültig.

Die Rangfolge der Gruppen 17 und 16 kann etwas mehrdeutig sein. Hier einige Beispiele zur Klärung:

- Optionale Verkettung ist immer für ihre jeweilige Syntax ohne Optionalität austauschbar (abgesehen von einigen besonderen Fällen, in denen optionale Verkettung verboten ist). Zum Beispiel akzeptiert jeder Ort, der `a?.b` akzeptiert, auch `a.b` und umgekehrt, und ähnlich für `a?.()`, `a()`, etc.
- Mitgliederausdrücke und berechnete Mitgliederausdrücke sind immer füreinander austauschbar.
- Aufrufausdrücke und `import()`-Ausdrücke sind immer füreinander austauschbar.
- Dies hinterlässt vier Klassen von Ausdrücken: Mitgliederzugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Mitgliederzugriffs kann sein: ein Mitgliederzugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Mitgliederzugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Mitgliederzugriff (`a.b()`), `new` mit Argumenten (`new a()()`), und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Mitgliederzugriff (`new a.b`), `new` mit Argumenten (`new new a()`) und `new` ohne Argumente (`new new a`).
