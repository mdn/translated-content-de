---
title: Operatorpräzedenz
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

**Operatorpräzedenz** bestimmt, wie Operatoren im Verhältnis zueinander geparst werden. Operatoren mit höherer Präzedenz werden zu Operanden von Operatoren mit niedrigerer Präzedenz.

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

## Präzedenz und Assoziativität

Betrachten Sie einen Ausdruck, der durch die folgende Darstellung beschreibbar ist, wobei sowohl `OP1` als auch `OP2` Platzhalter für Operatoren sind.

```plain
a OP1 b OP2 c
```

Das obige Diagramm hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche Interpretation die Sprache annimmt, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Präzedenzstufen haben (siehe Tabelle unten), wird der Operator mit der höheren _Präzedenz_ zuerst ausgeführt, und die Assoziativität spielt keine Rolle. Beachten Sie, dass die Multiplikation eine höhere Präzedenz als die Addition hat und zuerst ausgeführt wird, auch wenn die Addition zuerst im Code geschrieben ist.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Innerhalb von Operatoren mit derselben Präzedenz werden sie von der Sprache nach _Assoziativität_ gruppiert. _Linksassoziativität_ (von links nach rechts) bedeutet, dass sie interpretiert wird als `(a OP1 b) OP2 c`, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass sie interpretiert wird als `a OP1 (b OP2 c)`. Zuweisungsoperatoren sind rechtsassoziativ, so dass Sie schreiben können:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies liegt daran, dass der Zuweisungsoperator den Wert zurückgibt, der zugewiesen wird. Zuerst wird `b` auf 5 gesetzt. Dann wird `a` ebenfalls auf 5 gesetzt – der Rückgabewert von `b = 5`, also der rechte Operand der Zuweisung.

Als weiteres Beispiel hat der einzigartige Exponentialoperator eine Rechtsassoziativität, während andere arithmetische Operatoren eine Linksassoziativität haben.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zuerst nach Präzedenz gruppiert, und dann für benachbarte Operatoren mit derselben Präzedenz nach Assoziativität. Beim Mischen von Division und Exponentialrechnung kommt die Exponentialrechnung immer vor der Division. Zum Beispiel ergibt `2 ** 3 / 3 ** 2` 0.8888888888888888, weil es dasselbe ist wie `(2 ** 3) / (3 ** 2)`.

Für unäre Präfixoperatoren, nehmen wir folgendes Muster an:

```plain
OP1 a OP2 b
```

wo `OP1` ein unärer Präfixoperator und `OP2` ein binärer Operator ist. Wenn `OP1` eine höhere Präzedenz als `OP2` hat, wird es als `(OP1 a) OP2 b` gruppiert; andernfalls wäre es `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Wenn der unäre Operator auf dem zweiten Operanden liegt:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Präzedenz als der unäre Operator `OP1` haben, damit es als `a OP2 (OP1 b)` gruppiert wird. Zum Beispiel ist das Folgende ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(a + yield) 1` — aber da `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, wäre dies ein Syntaxfehler. Zum Glück haben die meisten unären Operatoren eine höhere Präzedenz als binäre Operatoren und leiden nicht unter diesem Problem.

Haben wir zwei unäre Präfixoperatoren:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator, der näher am Operanden liegt, `OP2`, eine höhere Präzedenz als `OP1` haben, damit es als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es andersherum zu haben und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Weil [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield), wird dies zu `(await yield) 1`, was bedeutet, dass auf einen Identifikator namens `yield` gewartet wird, und ein Syntaxfehler. Ähnlich, wenn Sie `new !A;` haben, weil `!` eine niedrigere Präzedenz als `new` hat, wird dies zu `(new !) A`, was offensichtlich ungültig ist. (Dieser Code sieht sowieso unsinnig aus, da `!A` immer ein Boolean, keine Konstruktorfunktion ergibt.)

Für unäre Postfixoperatoren (nämlich `++` und `--`) gelten die gleichen Regeln. Zum Glück haben beide Operatoren eine höhere Präzedenz als jeder binäre Operator, sodass die Gruppierung immer so ist, wie man es erwarten würde. Außerdem, da `++` auf einen _Wert_ und nicht auf eine _Referenz_ evaluiert wird, können Sie nicht mehrere Inkremente miteinander verkettet schreiben.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorpräzedenz wird _rekursiv_ behandelt. Betrachten Sie zum Beispiel diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlicher Präzedenz nach absteigenden Präzedenzstufen.

1. Der `**`-Operator hat die höchste Präzedenz, daher wird er zuerst gruppiert.
2. Betrachtet man den `**`-Ausdruck, hat er `*` rechts und `+` links. `*` hat eine höhere Präzedenz, wird also zuerst gruppiert. `*` und `/` haben dieselbe Präzedenz, daher gruppieren wir sie zunächst.
3. Betrachtet man den in 2 gruppierten `*`/`/`-Ausdruck, weil `+` eine höhere Präzedenz als `>>` hat, wird zuerst die `+`-Gruppe gebildet.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/`-Gruppe, weil sie linksassoziativ sind, wird der linke Operand gruppiert.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass Operatorpräzedenz und Assoziativität nur die Reihenfolge der Auswertung von _Operatoren_ beeinflussen (die implizite Gruppierung), nicht aber die Auswertungsreihenfolge der _Operanden_. Die Operanden werden immer von links nach rechts ausgewertet. Die höherstufigen Präzedenz-Ausdrücke werden immer zuerst evaluiert, und ihre Ergebnisse werden dann gemäß der Reihenfolge der Operatorpräzedenz zusammengesetzt.

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

Wenn Sie mit binären Bäumen vertraut sind, denken Sie daran wie bei einer [Post-Order-Traversierung](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren ordnungsgemäß gruppiert sind, bilden die binären Operatoren einen Binärbaum. Die Auswertung beginnt mit der äußersten Gruppe — die der Operator mit der niedrigsten Präzedenz ist (in diesem Fall `/`). Der linke Operand dieses Operators wird zuerst ausgewertet, der möglicherweise aus höherstufigen Präzedenz-Operatoren besteht (wie ein Aufrufausdruck in `echo("left", 4)`). Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher werden alle Blattknoten — die `echo()`-Aufrufe — von links nach rechts besucht, unabhängig von der Präzedenz der Operatoren, die sie verbinden.

## Kurzschluss

Im vorherigen Abschnitt sagten wir: "die höherstufigen Präzedenz-Ausdrücke werden immer zuerst ausgewertet" — das ist im Allgemeinen wahr, muss jedoch mit der Anerkennung des _Kurzschlusses_ ergänzt werden, bei dem ein Operand möglicherweise überhaupt nicht ausgewertet wird.

Kurzschluss ist Fachjargon für bedingte Auswertung. Zum Beispiel, im Ausdruck `a && (b + c)`, wenn `a` {{Glossary("falsy", "falsy")}} ist, wird der Teilausdruck `(b + c)` gar nicht ausgewertet, selbst wenn er gruppiert ist und daher eine höhere Präzedenz als `&&` hat. Man könnte sagen, dass der logische Und-Operator (`&&`) "kurzgeschlossen" ist. Zusammen mit logischem Und sind andere kurzgeschlossene Operatoren logisches Oder (`||`), "nullish coalescing" (`??`) und optionales Verkettung (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Bei der Auswertung eines kurzgeschlossenen Operators wird immer der linke Operand ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten des Kurzschlusses ist in diesen Operatoren eingebaut. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob dies tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, selbst wenn das Ergebnis nie etwas anderes als `NaN` wäre.

Das vorherige Modell einer Post-Order-Traversierung bleibt bestehen. Allerdings entscheidet die Sprache, nachdem der linke Unterbaum eines kurzgeschlossenen Operators besucht wurde, ob der rechte Operand ausgewertet werden muss. Wenn nicht (zum Beispiel, weil der linke Operand von `||` bereits truthy ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Unterbaum zu besuchen.

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

Nur `C()` wird ausgewertet, trotz dass `&&` eine höhere Präzedenz hat. Das bedeutet nicht, dass `||` in diesem Fall eine höhere Präzedenz hat — es ist genau _weil_ `(B() && A())` eine höhere Präzedenz hat, dass dieser Ausdruck als Ganzes vernachlässigt wird. Wenn es umgestellt wird als:

```js-nolint
console.log(A() && B() || C());
// Logs:
// called A
// called C
// true
```

Dann würde der Kurzschluss-Effekt von `&&` lediglich verhindern, dass `B()` ausgewertet wird, aber da `A() && B()` als Ganzes `false` ist, würde `C()` trotzdem ausgewertet werden.

Beachten Sie jedoch, dass der Kurzschluss das Endergebnis der Auswertung nicht ändert. Es beeinflusst nur die Auswertung der _Operanden_, nicht wie _Operatoren_ gruppiert werden — wenn die Auswertung der Operanden keine Nebeneffekte hat (zum Beispiel Protokollierung in der Konsole, Variablenzuweisungen, Fehler auslösen), wäre der Kurzschluss überhaupt nicht bemerkbar.

Die Zuweisungsgegenstücke dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls kurzgeschlossen. Sie sind so kurzgeschlossen, dass die Zuweisung überhaupt nicht stattfindet.

## Tabelle

Die folgende Tabelle listet Operatoren in der Reihenfolge von der höchsten Präzedenz (18) zur niedrigsten Präzedenz (1) auf.

Einige allgemeine Anmerkungen zur Tabelle:

1. Nicht alle hier enthaltenen Syntaxelemente sind im strengen Sinne "Operatoren". Zum Beispiel werden Spread `...` und Arrow `=>` normalerweise nicht als Operatoren betrachtet. Wir haben sie jedoch einbezogen, um zu zeigen, wie eng sie im Vergleich zu anderen Operatoren/ Ausdrücken binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die enger sind als die von höherstufigen Präzedenz-Operatoren erzeugten. Zum Beispiel muss die rechte Seite des `.`-Zugriffsoperators (Präzedenz 17) ein Bezeichner anstelle eines gruppierten Ausdrucks sein. Die linke Seite des Arrow `=>` (Präzedenz 2) muss eine Argumenteliste oder ein einzelner Bezeichner statt eines zufälligen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die breiter sind als die von höherstufigen Präzedenz-Operatoren produzierten. Zum Beispiel kann der klammergeschützte Ausdruck der Klammernotation `[ … ]` (Präzedenz 17) jeder Ausdruck sein, sogar durch Kommas (Präzedenz 1) verbundene. Diese Operatoren verhalten sich, als ob der Operand "automatisch gruppiert" wäre. In diesem Fall werden wir die Assoziativität weglassen.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Präzedenz</th>
      <th>Assoziativität</th>
      <th>Einzelne Operatoren</th>
      <th>Bemerkungen</th>
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
        links-nach-rechts
      </td>
      <td>{{jsxref("Operators/Property_accessors", "Mitgliedszugriff", "#dot_notation", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "Optionale Verkettung", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">k.A.</td>
      <td>
        {{jsxref("Operators/Property_accessors", "Berechneter Mitgliedszugriff", "#bracket_notation", 1)}}<br><code>x[y]</code>
      </td>
      <td>[3]</td>
    </tr>
    <tr>
      <td>{{jsxref("new")}} mit Argumenteliste<br><code>new x(y)</code></td>
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
      <td>{{jsxref("new")}} ohne Argumenteliste<br><code>new x</code></td>
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
      <td>13: Exponentiation</td>
      <td>rechts-nach-links</td>
      <td>
        {{jsxref("Operators/Exponentiation", "Exponentiation", "", 1)}}<br><code>x ** y</code>
      </td>
      <td>[8]</td>
    </tr>
    <tr>
      <td rowspan="3">12: Multiplikative Operatoren</td>
      <td rowspan="3">links-nach-rechts</td>
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
      <td rowspan="2">links-nach-rechts</td>
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
      <td rowspan="3">links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Left_shift", "Linksschieben", "", 1)}}<br><code>x &#x3C;&#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift", "Rechtsschieben", "", 1)}}<br><code>x >> y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift", "Ungar. Rechtsschieben", "", 1)}}<br><code>x >>> y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="6">9: Relationale Operatoren</td>
      <td rowspan="6">links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Less_than", "Kleiner als", "", 1)}}<br><code>x &#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Less_than_or_equal", "Kleiner gleich", "", 1)}}<br><code>x &#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than", "Größer als", "", 1)}}<br><code>x > y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than_or_equal", "Größer gleich", "", 1)}}<br><code>x >= y</code>
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
      <td rowspan="4">links-nach-rechts</td>
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
        {{jsxref("Operators/Strict_equality", "Strenge Gleichheit", "", 1)}}<br><code>x === y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_inequality", "Strenge Ungleichheit", "", 1)}}<br><code>x !== y</code>
      </td>
    </tr>
    <tr>
      <td>7: Bitweises UND</td>
      <td>links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_AND", "Bitweises UND", "", 1)}}<br><code>x &#x26; y</code>
      </td>
    </tr>
    <tr>
      <td>6: Bitweises XOR</td>
      <td>links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_XOR", "Bitweises XOR", "", 1)}}<br><code>x ^ y</code>
      </td>
    </tr>
    <tr>
      <td>5: Bitweises ODER</td>
      <td>links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_OR", "Bitweises ODER", "", 1)}}<br><code>x | y</code>
      </td>
    </tr>
    <tr>
      <td>4: Logisches UND</td>
      <td>links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Logical_AND", "Logisches UND", "", 1)}}<br><code>x &#x26;&#x26; y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="2">3: Logisches ODER, Nullish coalescing</td>
      <td rowspan="2">links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Logical_OR", "Logisches ODER", "", 1)}}<br><code>x || y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing", "Nullish coalescing Operator", "", 1)}}<br><code>x ?? y</code>
      </td>
      <td>[9]</td>
    </tr>
    <tr>
      <td rowspan="21">2: Zuweisung und Sonstiges</td>
      <td rowspan="16">rechts-nach-links</td>
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
        {{jsxref("Operators/Exponentiation_assignment", "Exponentiationszuweisung", "", 1)}}<br><code>x **= y</code>
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
        {{jsxref("Operators/Unsigned_right_shift_assignment", "Ungar. Rechtsverschiebungszuweisung", "", 1)}}<br><code>x >>>= y</code>
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
        {{jsxref("Operators/Nullish_coalescing_assignment", "Nullish coalescing Zuweisung", "", 1)}}<br><code>x ??= y</code>
      </td>
    </tr>
    <tr>
      <td>rechts-nach-links</td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator">Bedingungsoperator (ternär)</a><br><code>x ? y : z</code>
      </td>
      <td>[11]</td>
    </tr>
    <tr>
      <td>rechts-nach-links</td>
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
      <td>links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Comma_operator", "KommOperator", "", 1)}}<br><code>x, y</code>
      </td>
    </tr>
  </tbody>
</table>

Bemerkungen:

1. Der Operand kann jeder Ausdruck sein.
2. Die "rechte Seite" muss ein Identifier sein.
3. Die "rechte Seite" kann jeder Ausdruck sein.
4. Die "rechte Seite" ist eine kommagetrennte Liste von beliebigen Ausdrücken mit einer Präzedenz > 1 (d.h. keine Komma-Ausdrücke). Der Konstruktor eines `new`-Ausdrucks kann nicht eine optionale Verkettung sein.
5. Der Operand muss ein gültiges Zuweisungsziel (Identifier oder Eigenschaftszugriff) sein. Seine Präzedenz bedeutet `new Foo++` ist `(new Foo)++` (ein Syntaxfehler) und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor).
6. Der Operand muss ein gültiges Zuweisungsziel (Identifier oder Eigenschaftszugriff) sein.
7. Der Operand kann kein Identifier oder ein [privater Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) zugriff sein.
8. Die linke Seite kann keine Präzedenz 14 haben.
9. Die Operanden können nicht ein logisches ODER `||` oder logisches UND `&&`-Operator ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuweisungsziel (Identifier oder Eigenschaftszugriff) sein.
11. Die Assoziativität bedeutet, dass die zwei Ausdrücke nach dem `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelnes Identifier oder eine geklammerte Parameterliste.
13. Nur gültig innerhalb von Objekt-Literalen, Array-Literalen oder Argumentenlisten.

Die Präzedenz der Gruppen 17 und 16 kann etwas zweideutig sein. Hier sind einige Beispiele zur Klärung.

- Optionale Verkettung kann immer durch ihre entsprechende Syntax ohne Optionalität ersetzt werden (mit Ausnahme einiger besonderer Fälle, in denen optionale Verkettung verboten ist). Beispielsweise akzeptiert jede Stelle, die `a?.b` akzeptiert, auch `a.b` und umgekehrt, und ähnlich für `a?.()`, `a()`, etc.
- Mitgliedsausdrücke und berechnete Mitgliedsausdrücke sind immer gegeneinander austauschbar.
- Aufrufs- und `import()`-Ausdrücke sind immer gegeneinander austauschbar.
- Dadurch bleiben vier Klassen von Ausdrücken übrig: Mitgliedszugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Mitgliedszugriffs kann sein: ein Mitgliedszugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Mitgliedszugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Mitgliedszugriff (`a.b()`), `new` mit Argumenten (`new a()()`) und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Mitgliedszugriff (`new a.b`), `new` mit Argumenten (`new new a()`), und `new` ohne Argumente (`new new a`).
