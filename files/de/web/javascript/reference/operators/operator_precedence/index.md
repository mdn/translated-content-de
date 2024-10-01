---
title: Operatorpriorität
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

**Operatorpriorität** bestimmt, wie Operatoren in Bezug aufeinander analysiert werden. Operatoren mit höherer Priorität werden zu den Operanden von Operatoren mit niedrigerer Priorität.

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## Priorität und Assoziativität

Betrachten Sie einen Ausdruck, der durch die folgende Darstellung beschreibbar ist, wobei sowohl `OP1` als auch `OP2` Platzhalter für Operatoren sind.

```plain
a OP1 b OP2 c
```

Die obenstehende Kombination erlaubt zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche Interpretation die Sprache annimmt, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Prioritätsstufen haben (siehe Tabelle unten), wird der Operator mit der höheren _Priorität_ zuerst ausgeführt und die Assoziativität spielt keine Rolle. Beachten Sie, wie die Multiplikation höhere Priorität als die Addition hat und zuerst ausgeführt wird, auch wenn die Addition im Code zuerst geschrieben ist.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Innerhalb von Operatoren gleicher Priorität gruppiert die Sprache sie nach _Assoziativität_. _Linksassoziativität_ (von links nach rechts) bedeutet, dass es als `(a OP1 b) OP2 c` interpretiert wird, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass es als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ, daher können Sie schreiben:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies liegt daran, dass der Zuweisungsoperator den Wert zurückgibt, der zugewiesen wird. Zuerst wird `b` auf 5 gesetzt. Dann wird `a` auch auf 5 gesetzt — der Rückgabewert von `b = 5`, also der rechte Operand der Zuweisung.

Ein weiteres Beispiel: Der einzigartige Potenzierungsoperator hat Rechtsassoziativität, während andere arithmetische Operatoren linksassoziativ sind.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zuerst nach Priorität gruppiert und dann, bei benachbarten Operatoren mit derselben Priorität, nach Assoziativität. Beim Mischen von Division und Potenzierung kommt die Potenzierung immer vor der Division. Zum Beispiel ergibt `2 ** 3 / 3 ** 2` 0,8888888888888888, weil es dasselbe ist wie `(2 ** 3) / (3 ** 2)`.

Für unäre Präfixoperatoren, nehmen wir folgendes Muster an:

```plain
OP1 a OP2 b
```

wobei `OP1` ein unärer Präfixoperator und `OP2` ein binärer Operator ist. Wenn `OP1` eine höhere Priorität als `OP2` hat, dann wird es als `(OP1 a) OP2 b` gruppiert; andernfalls würde es `OP1 (a OP2 b)` sein.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Wenn der unäre Operator am zweiten Operand ist:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Priorität als der unäre Operator `OP1` haben, damit es als `a OP2 (OP1 b)` gruppiert wird. Ein Beispiel dafür ist ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Priorität als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde daraus `(a + yield) 1` werden — da aber `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, wäre das ein Syntaxfehler. Glücklicherweise haben die meisten unären Operatoren eine höhere Priorität als binäre Operatoren und leiden nicht unter dieser Falle.

Wenn wir zwei unäre Präfixoperatoren haben:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator näher am Operanden, `OP2`, eine höhere Priorität als `OP1` haben, damit es als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es andersherum zu bekommen und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Priorität als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde daraus `(await yield) 1` werden, was bedeutet, dass auf einen Bezeichner namens `yield` gewartet wird, was ein Syntaxfehler ist. Ebenso, wenn Sie `new !A;` haben, würde wegen der niedrigeren Priorität von `!` gegenüber `new` daraus `(new !) A`, was offensichtlich ungültig ist. (Dieser Code scheint sowieso unsinnig zu sein, da `!A` immer ein Boolean ergibt, nicht eine Konstruktorfunktion.)

Für unäre Postfixoperatoren (nämlich `++` und `--`) gelten dieselben Regeln. Glücklicherweise haben beide Operatoren eine höhere Priorität als jeder binäre Operator, sodass die Gruppierung immer wie erwartet ausfällt. Zudem, da `++` zu einem _Wert_ evaluiert wird, nicht einer _Referenz_, können Sie nicht mehrere Inkremente nacheinander verketten, wie Sie es in C tun könnten.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorpriorität wird _rekursiv_ gehandhabt. Betrachten wir zum Beispiel diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir die Operatoren mit unterschiedlicher Priorität nach absteigenden Prioritätsstufen.

1. Der `**` Operator hat die höchste Priorität, daher wird er zuerst gruppiert.
2. Um den `**` Ausdruck herum befindet sich `*` rechts und `+` links. `*` hat eine höhere Priorität, daher wird es zuerst gruppiert. `*` und `/` haben dieselbe Priorität, daher werden sie vorerst zusammengefasst.
3. Um den in 2 gruppierten `*`/`/` Ausdruck herum, wird `+` aufgrund der höheren Priorität gegenüber `>>` gruppiert.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/` Gruppe, da sie beide linksassoziativ sind, wird der linke Operand gruppiert.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass Operatorpriorität und -assoziativität nur die Reihenfolge der Auswertung von _Operatoren_ (die implizite Gruppierung) beeinflussen, nicht jedoch die Reihenfolge der Auswertung von _Operanden_. Die Operanden werden immer von links nach rechts ausgewertet. Die höher priorisierten Ausdrücke werden immer zuerst ausgewertet, und ihre Ergebnisse werden dann entsprechend der Reihenfolge der Operatorprioritäten zusammengesetzt.

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

Wenn Sie mit binären Bäumen vertraut sind, denken Sie daran als [post-order traversal](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren korrekt gruppiert wurden, würden die binären Operatoren einen binären Baum bilden. Die Auswertung beginnt mit der äußersten Gruppe — die der Operator mit der niedrigsten Priorität (in diesem Fall `/`). Der linke Operand dieses Operators wird zuerst ausgewertet, was aus höher priorisierten Operatoren (wie einem Funktionsaufruf `echo("left", 4)`) bestehen kann. Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher werden alle Blattknoten — die `echo()`-Aufrufe — von links nach rechts besucht, unabhängig von der Priorität der sie verbindenden Operatoren.

## Kurzschlussauswertung

Im vorherigen Abschnitt sagten wir, "die höher priorisierten Ausdrücke werden immer zuerst ausgewertet" — dies ist im Allgemeinen wahr, muss jedoch mit der Anerkennung der _Kurzschlussauswertung_ ergänzt werden, bei der ein Operand möglicherweise überhaupt nicht ausgewertet wird.

Kurzschlussauswertung ist Fachjargon für bedingte Auswertung. Zum Beispiel wird im Ausdruck `a && (b + c)`, wenn `a` {{Glossary("falsy", "falsch")}} ist, der Unterausdruck `(b + c)` nicht ausgewertet, selbst wenn er gruppiert ist und deshalb eine höhere Priorität als `&&` hat. Wir könnten sagen, dass der logische UND-Operator (`&&`) "gekürzt" ist. Neben dem logischen UND gehören zu den anderen gekürzten Operatoren logisches ODER (`||`), Nullish Coalescing (`??`) und Optional Chaining (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Bei der Auswertung eines gekürzten Operators wird immer der linke Operand ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten der Kurzschlussauswertung ist in diesen Operatoren fest verankert. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob das tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, selbst wenn das Ergebnis nie etwas anderes als `NaN` wäre.

Das vorherige Modell einer post-order Traversierung gilt nach wie vor. Jedoch wird, nachdem der linke Teilbaum eines gekürzten Operators besucht wurde, die Sprache entscheiden, ob der rechte Operand ausgewertet werden muss. Wenn nicht (zum Beispiel, weil der linke Operand von `||` bereits wahrhaftig ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Teilbaum zu besuchen.

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

Nur `C()` wird ausgewertet, obwohl `&&` eine höhere Priorität hat. Das bedeutet nicht, dass `||` in diesem Fall eine höhere Priorität hat — es ist genau _wegen_ `(B() && A())` mit höherer Priorität, dass es als Ganzes ignoriert wird. Wenn es umgestellt wird wie:

```js-nolint
console.log(A() && C() || B());
// Logs:
// called A
// called B
// false
```

Dann würde der Kurzschluss-Effekt von `&&` nur verhindern, dass `C()` ausgewertet wird, aber da `A() && C()` insgesamt `false` ist, würde `B()` dennoch ausgewertet.

Beachten Sie jedoch, dass die Kurzschlussauswertung das endgültige Auswertungsergebnis nicht ändert. Sie beeinflusst nur die Auswertung der _Operanden_, nicht die Gruppierung der _Operatoren_ — wenn die Auswertung von Operanden keine Nebeneffekte hat (zum Beispiel Ausgabe auf die Konsole, Zuweisung an Variablen, Auslösen eines Fehlers), wäre die Kurzschlussauswertung überhaupt nicht beobachtbar.

Die Zuweisungsäquivalente dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls gekürzt. Sie sind auf eine Weise gekürzt, dass die Zuweisung überhaupt nicht stattfindet.

## Tabelle

Die folgende Tabelle listet Operatoren von der höchsten Priorität (18) bis zur niedrigsten Priorität (1) auf.

Einige allgemeine Anmerkungen zur Tabelle:

1. Nicht alle hier eingeschlossenen Syntaxen sind im strengen Sinne "Operatoren". Zum Beispiel werden Spread `...` und Arrow `=>` typischerweise nicht als Operatoren angesehen. Wir haben sie jedoch dennoch aufgenommen, um zu zeigen, wie eng sie im Vergleich zu anderen Operatoren/Ausdrücken gebunden sind.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die schmaler sind als diejenigen, die von höher priorisierten Operatoren produziert werden. Zum Beispiel muss die rechte Seite des Memberzugriffs `.` (Priorität 17) ein Bezeichner anstelle eines gruppierten Ausdrucks sein. Die linke Seite von Arrow `=>` (Priorität 2) muss eine Argumentenliste oder ein einzelner Bezeichner sein, anstelle eines zufälligen Ausdrucks.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die breiter sind als diejenigen, die von höher priorisierten Operatoren produziert werden. Zum Beispiel kann der eingeklammert-Ausdruck der Klammernotation `[ … ]` (Priorität 17) jeder Ausdruck sein, sogar durch Komma (Priorität 1) verbundene Ausdrücke. Diese Operatoren verhalten sich, als ob jener Operand "automatisch gruppiert" sei. In diesem Fall werden wir die Assoziativität weglassen.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Priorität</th>
      <th>Assoziativität</th>
      <th>Einzelne Operatoren</th>
      <th>Anmerkungen</th>
    </tr>
    <tr>
      <td>18: Gruppierung</td>
      <td>k.A.</td>
      <td>{{jsxref("Operators/Grouping", "Gruppierung", "", 1)}}<br><code>(x)</code></td>
      <td>[1]</td>
    </tr>
    <tr>
      <td rowspan="6">17: Zugriff und Aufruf</td>
      <td rowspan="2">
        von links nach rechts
      </td>
      <td>{{jsxref("Operators/Property_accessors", "Memberzugriff", "#dot_notation", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "Optionales Chaining", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">k.A.</td>
      <td>
        {{jsxref("Operators/Property_accessors", "Berechneter Memberzugriff", "#bracket_notation", 1)}}<br><code>x[y]</code>
      </td>
      <td>[3]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/new", "new")}} mit Argumentenliste<br><code>new x(y)</code></td>
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
      <td>k.A.</td>
      <td>{{jsxref("Operators/new", "new")}} ohne Argumentenliste<br><code>new x</code></td>
    </tr>
    <tr>
      <td rowspan="2">15: Postfix-Operatoren</td>
      <td rowspan="2">k.A.</td>
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
      <td rowspan="10">k.A.</td>
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
        {{jsxref("Operators/Unary_plus", "Unärer Plus", "", 1)}}<br><code>+x</code>
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
      <td>13: Potenzierung</td>
      <td>von rechts nach links</td>
      <td>
        {{jsxref("Operators/Exponentiation", "Potenzierung", "", 1)}}<br><code>x ** y</code>
      </td>
      <td>[8]</td>
    </tr>
    <tr>
      <td rowspan="3">12: Multiplikationsoperatoren</td>
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
      <td rowspan="2">11: Additionsoperatoren</td>
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
      <td rowspan="3">10: Bitverschiebung</td>
      <td rowspan="3">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Left_shift", "Linksverschiebung", "", 1)}}<br><code>x &#x3C;&#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift", "Rechtsverschiebung", "", 1)}}<br><code>x >> y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift", "Unsigned Rechtsverschiebung", "", 1)}}<br><code>x >>> y</code>
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
      <td rowspan="21">2: Zuweisung und Verschiedenes</td>
      <td rowspan="16">von rechts nach links</td>
      <td>
        {{jsxref("Operators/Assignment", "Zuweisung", "", 1)}}<br><code>x = y</code>
      </td>
      <td rowspan="16">[10]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Addition_assignment", "Additionszuweisung", "", 1)}}<br><code>x += y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Subtraction_assignment", "Subtraktionszuweisung", "", 1)}}<br><code>x -= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Exponentiation_assignment", "Potenzierungszuweisung", "", 1)}}<br><code>x **= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Multiplication_assignment", "Multiplikationszuweisung", "", 1)}}<br><code>x *= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Division_assignment", "Divisionszuweisung", "", 1)}}<br><code>x /= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Remainder_assignment", "Restzuweisung", "", 1)}}<br><code>x %= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Left_shift_assignment", "Linksverschiebungszuweisung", "", 1)}}<br><code>x &#x3C;&#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift_assignment", "Rechtsverschiebungszuweisung", "", 1)}}<br><code>x >>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift_assignment", "Unsigned Rechtsverschiebungszuweisung", "", 1)}}<br><code>x >>>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_AND_assignment", "Bitweise UND-Zuweisung", "", 1)}}<br><code>x &#x26;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_XOR_assignment", "Bitweise XOR-Zuweisung", "", 1)}}<br><code>x ^= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_OR_assignment", "Bitweise ODER-Zuweisung", "", 1)}}<br><code>x |= y</code>
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
        {{jsxref("Operators/Nullish_coalescing_assignment", "Nullish Coalescing Zuweisung", "", 1)}}<br><code>x ??= y</code>
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
        <a href="/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow</a><br><code>x => y</code>
      </td>
      <td>[12]</td>
    </tr>
    <tr>
      <td rowspan="3">k.A.</td>
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
        {{jsxref("Operators/Comma_Operator", "Kommaoperator", "", 1)}}<br><code>x, y</code>
      </td>
    </tr>
  </tbody>
</table>

Anmerkungen:

1. Der Operand kann jeder Ausdruck sein.
2. Die "rechte Seite" muss ein Bezeichner sein.
3. Die "rechte Seite" kann jeder Ausdruck sein.
4. Die "rechte Seite" ist eine kommagetrennte Liste aus jedem Ausdruck mit Priorität > 1 (d.h. keine Kommaausdrücke). Der Konstruktor eines `new` Ausdrucks kann keine optionale Kette sein.
5. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Eigenschaftszugriff). Seine Priorität bedeutet, dass `new Foo++` als `(new Foo)++` (ein Syntaxfehler) und nicht als `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor) geparst wird.
6. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Eigenschaftszugriff).
7. Der Operand kann kein Bezeichner oder Zugriff auf eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sein.
8. Die linke Seite kann keine Priorität 14 haben.
9. Die Operanden dürfen kein logisches ODER `||` oder logisches UND `&&` Operator ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuweisungsziel sein (Bezeichner oder Eigenschaftszugriff).
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einziger Bezeichner oder eine geklammerte Parameterliste.
13. Nur gültig innerhalb von Objektliteralen, Array-Literalen oder Argumentenlisten.

Die Priorität der Gruppen 17 und 16 kann etwas mehrdeutig sein. Hier sind einige Beispiele zur Klärung.

- Optionales Chaining ist immer durch seine jeweilige Syntax ohne Optionalität substituierbar (bis auf einige spezielle Fälle, in denen Optionales Chaining verboten ist). Zum Beispiel jede Stelle, die `a?.b` akzeptiert, akzeptiert auch `a.b` und umgekehrt, und ebenso für `a?.()`, `a()`, etc.
- Memberausdrücke und berechnete Memberausdrücke sind immer gegeneinander austauschbar.
- Aufrufausdrücke und `import()` Ausdrücke sind immer gegeneinander austauschbar.
- Dies hinterlässt vier Klassen von Ausdrücken: Memberzugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Memberzugriffs kann sein: ein Memberzugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Memberzugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Memberzugriff (`a.b()`), `new` mit Argumenten (`new a()()`) und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Memberzugriff (`new a.b`), `new` mit Argumenten (`new new a()`) und `new` ohne Argumente (`new new a`).
