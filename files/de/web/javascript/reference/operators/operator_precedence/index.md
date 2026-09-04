---
title: Operatorpräzedenz
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: 5c8d0ac21db572edebbd4ad428efca0af3ec1734
---

**Operatorpräzedenz** bestimmt, wie Operatoren in Bezug zueinander geparst werden. Operatoren mit höherer Präzedenz werden zu den Operanden von Operatoren mit niedrigerer Präzedenz.

{{InteractiveExample("JavaScript Demo: Expressions - Operatorpräzedenz")}}

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

Die obige Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche Interpretation die Sprache übernimmt, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Präzedenzebenen haben (siehe die Tabelle unten), wird der Operator mit der höheren _Präzedenz_ zuerst ausgeführt und die Assoziativität spielt keine Rolle. Beachten Sie, wie Multiplikation eine höhere Präzedenz als Addition hat und zuerst ausgeführt wird, obwohl die Addition im Code zuerst steht.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Innerhalb von Operatoren mit derselben Präzedenz gruppiert die Sprache sie nach _Assoziativität_. _Linksassoziativität_ (von links nach rechts) bedeutet, dass es als `(a OP1 b) OP2 c` interpretiert wird, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass es als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ, daher können Sie schreiben:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies liegt daran, dass der Zuweisungsoperator den Wert zurückgibt, der zugewiesen wird. Zuerst wird `b` auf 5 gesetzt. Dann wird `a` ebenfalls auf 5 gesetzt — den Rückgabewert von `b = 5`, also dem rechten Operanden der Zuweisung.

Als weiteres Beispiel hat der einzigartige Exponentialoperator eine Rechtsassoziativität, während andere arithmetische Operatoren eine Linksassoziativität haben.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zunächst nach Präzedenz gruppiert und dann, für angrenzende Operatoren mit der gleichen Präzedenz, nach Assoziativität. Wenn Sie also Division und Exponentiation mischen, kommt die Exponentiation immer vor der Division. Zum Beispiel ergibt `2 ** 3 / 3 ** 2` das Ergebnis 0,8888888888888888, da es dasselbe ist wie `(2 ** 3) / (3 ** 2)`.

Für vorangestellte unäre Operatoren nehmen wir an, wir haben folgendes Muster:

```plain
OP1 a OP2 b
```

wobei `OP1` ein vorangestellter unärer Operator und `OP2` ein binärer Operator ist. Wenn `OP1` eine höhere Präzedenz als `OP2` hat, dann würde es als `(OP1 a) OP2 b` gruppiert werden; andernfalls wäre es `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Wenn der unäre Operator auf dem zweiten Operanden ist:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Präzedenz als der unäre Operator `OP1` haben, damit es als `a OP2 (OP1 b)` gruppiert wird. Zum Beispiel ist das folgende ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(a + yield) 1` werden — aber da `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, wäre dies ein Syntaxfehler. Glücklicherweise haben die meisten unären Operatoren eine höhere Präzedenz als binäre Operatoren und leiden nicht unter diesem Problem.

Wenn wir zwei vorangestellte unäre Operatoren haben:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator, der näher am Operanden `OP2` steht, eine höhere Präzedenz als `OP1` haben, damit es als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es anders herum zu bekommen und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(await yield) 1` werden, was darauf wartet, dass ein Bezeichner namens `yield` geladen wird, und einen Syntaxfehler verursacht. Ähnlich, wenn Sie `new !A;` haben, da `!` eine niedrigere Präzedenz als `new` hat, würde dies zu `(new !) A` werden, was offensichtlich ungültig ist. (Dieser Code sieht sowieso unsinnig aus, da `!A` immer einen booleschen Wert erzeugt, keine Konstrukturfunktion.)

Für nachgestellte unäre Operatoren (nämlich `++` und `--`) gelten dieselben Regeln. Zum Glück haben beide Operatoren eine höhere Präzedenz als jeder binäre Operator, sodass die Gruppierung immer so ausfällt, wie Sie es erwarten würden. Darüber hinaus ergibt `++` einen _Wert_, nicht eine _Referenz_, daher können Sie auch keine mehrfachen Inkremente verketteln.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Operatorpräzedenz wird _rekursiv_ gehandhabt. Betrachten wir zum Beispiel diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlicher Präzedenz nach abnehmenden Präzedenzebenen.

1. Der `**`-Operator hat die höchste Präzedenz, daher wird er zuerst gruppiert.
2. Um die `**`-Ausdruck herum hat es `*` auf der rechten Seite und `+` auf der linken Seite. `*` hat eine höhere Präzedenz, daher wird es zuerst gruppiert. `*` und `/` haben in etwa die gleiche Präzedenz, daher gruppieren wir sie zunächst zusammen.
3. Um den in 2 gruppierten `*`/`/`-Ausdruck herum, weil `+` eine höhere Präzedenz als `>>` hat, wird ersteres gruppiert.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/`-Gruppe, da sie beide linksassoziativ sind, wird der linke Operand gruppiert.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass Operatorpräzedenz und Assoziativität nur die Auswertungsreihenfolge von _Operatoren_ (die implizite Gruppierung) beeinflussen, aber nicht die Auswertungsreihenfolge von _Operanden_. Die Operanden werden immer von links nach rechts ausgewertet. Die Ausdrücke mit höherer Präzedenz werden immer zuerst ausgewertet, und ihre Ergebnisse werden dann gemäß der Reihenfolge der Operatorpräzedenz zusammengesetzt.

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

Wenn Sie mit Binärbäumen vertraut sind, denken Sie darüber nach in Bezug auf eine [post-order Traversierung](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren richtig gruppiert wurden, würden die binären Operatoren einen Binärbaum bilden. Die Auswertung beginnt mit der äußeren Gruppe — das ist der Operator mit der niedrigsten Präzedenz (`/` in diesem Fall). Der linke Operand dieses Operators wird zuerst ausgewertet, der aus Operatoren mit höherer Präzedenz bestehen kann (wie einem Aufrufausdruck `echo("left", 4)`). Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher würden alle Blattknoten — die `echo()`-Aufrufe — von links nach rechts besucht, unabhängig von der Präzedenz der sie verbindenden Operatoren.

## Kurzschlussauswertung

Im vorherigen Abschnitt haben wir gesagt, "die Ausdrücke mit höherer Präzedenz werden immer zuerst ausgewertet" — das ist allgemein wahr, aber es muss ergänzt werden mit der Anerkennung der _Kurzschlussauswertung_, bei der ein Operand möglicherweise gar nicht ausgewertet wird.

Kurzschlussauswertung ist ein Fachbegriff für konditionale Auswertung. Zum Beispiel wird im Ausdruck `a && (b + c)`, wenn `a` {{Glossary("falsy", "falsy")}} ist, der Unterausdruck `(b + c)` nicht einmal ausgewertet, selbst wenn er gruppiert ist und somit eine höhere Präzedenz als `&&` hat. Man könnte sagen, dass der logische UND-Operator (`&&`) "kurzgeschlossen" ist. Zusammen mit logischem UND gehören zu den kurzgeschlossenen Operatoren auch logisches ODER (`||`), der nullische Kohäsionsoperator (`??`) und das optionale Chaining (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Bei der Auswertung eines kurzgeschlossenen Operators wird immer der linke Operand ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten der Kurzschlussauswertung ist in diesen Operatoren fest verankert. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob das tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, selbst wenn das Ergebnis niemals etwas anderes als `NaN` wäre.

Das vorherige Modell der post-order Traversierung bleibt bestehen. Nachdem jedoch der linke Unterbaum eines kurzgeschlossenen Operators besucht wurde, entscheidet die Sprache, ob der rechte Operand ausgewertet werden muss. Ist dies nicht der Fall (zum Beispiel, weil der linke Operand von `||` bereits truthy ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Unterbaum zu besuchen.

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

Nur `C()` wird ausgewertet, obwohl `&&` eine höhere Präzedenz hat. Das bedeutet nicht, dass `||` in diesem Fall eine höhere Präzedenz hat — gerade _weil_ `(B() && A())` eine höhere Präzedenz hat, wird es als Ganzes vernachlässigt. Wenn es so umgestellt wäre:

```js-nolint
console.log(A() && B() || C());
// Logs:
// called A
// called C
// true
```

dann würde der Kurzschlusseffekt von `&&` nur verhindern, dass `B()` ausgewertet wird, aber weil `A() && B()` als Ganzes `false` ist, würde `C()` immer noch ausgewertet.

Beachten Sie jedoch, dass Kurzschluss nicht das endgültige Auswertungsergebnis ändert. Es beeinflusst nur die Bewertung von _Operanden_, nicht wie _Operatoren_ gruppiert werden — wenn die Bewertung von Operanden keine Nebenwirkungen hat (zum Beispiel, in die Konsole zu protokollieren, Variablen zuzuweisen, einen Fehler zu werfen), wäre Kurzschluss überhaupt nicht beobachtbar.

Die Zuweisungsgegenstücke dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls kurzgeschlossen. Sie sind auf eine Weise kurzgeschlossen, dass die Zuweisung überhaupt nicht stattfindet.

## Tabelle

Die folgende Tabelle listet die Operatoren in der Reihenfolge von der höchsten Präzedenz (18) zur niedrigsten Präzedenz (1) auf.

Mehrere allgemeine Anmerkungen zur Tabelle:

1. Nicht alle hier enthaltenen Syntaxen sind ["Operatoren im strengen Sinne"](/de/docs/Web/JavaScript/Reference/Operators#what_are_operators). Zum Beispiel werden Spread `...` und Pfeil `=>` typischerweise nicht als Operatoren angesehen. Dennoch haben wir sie aufgenommen, um zu zeigen, wie eng sie im Vergleich zu anderen Operatoren/Ausdrücken gebunden sind.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die schmaler sind als die von Operatoren mit höherer Präzedenz erzeugten. Zum Beispiel muss die rechte Seite des Zugriffsoperators `.` (Präzedenz 17) ein Bezeichner anstelle eines gruppierten Ausdrucks sein. Die linke Seite von Pfeil `=>` (Präzedenz 2) muss eine Argumentliste oder ein einzelner Bezeichner statt eines zufälligen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die breiter sind als die von Operatoren mit höherer Präzedenz erzeugten. Zum Beispiel kann der klammerumfasste Ausdruck der Klammernotation `[ … ]` (Präzedenz 17) ein beliebiger Ausdruck sein, sogar kommaverbundene (Präzedenz 1). Diese Operatoren handeln, als ob dieser Operand "automatisch gruppiert" wäre. In diesem Fall werden wir die Assoziativität weglassen.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Präzedenz</th>
      <th>Assoziativität</th>
      <th>Individuelle Operatoren</th>
      <th>Anmerkungen</th>
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
      <td>{{jsxref("Operators/Property_accessors", "Zugriff auf Member", "#dot_notation", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "Optionales Chaining", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">n/a</td>
      <td>
        {{jsxref("Operators/Property_accessors", "Berechneter Memberzugriff", "#bracket_notation", 1)}}<br><code>x[y]</code>
      </td>
      <td>[3]</td>
    </tr>
    <tr>
      <td>{{jsxref("new")}} mit Argumentliste<br><code>new x(y)</code></td>
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
      <td>{{jsxref("new")}} ohne Argumentliste<br><code>new x</code></td>
    </tr>
    <tr>
      <td rowspan="2">15: nachgestellte Operatoren</td>
      <td rowspan="2">n/a</td>
      <td>
        {{jsxref("Operators/Increment", "Nachgestellter Inkrement", "", 1)}}<br><code>x++</code>
      </td>
      <td rowspan="2">[5]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Nachgestellter Dekrement", "", 1)}}<br><code>x--</code>
      </td>
    </tr>
    <tr>
      <td rowspan="10">14: vorangestellte Operatoren</td>
      <td rowspan="10">n/a</td>
      <td>
        {{jsxref("Operators/Increment", "Vorangestellter Inkrement", "", 1)}}<br><code>++x</code>
      </td>
      <td rowspan="2">[6]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Vorangestellter Dekrement", "", 1)}}<br><code>--x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_NOT", "Logisches NICHT", "", 1)}}<br><code>!x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_NOT", "Bitweise NICHT", "", 1)}}<br><code>~x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_plus", "Unäres Plus", "", 1)}}<br><code>+x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_negation", "Unäres Minus", "", 1)}}<br><code>-x</code>
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
      <td>von rechts nach links</td>
      <td>
        {{jsxref("Operators/Exponentiation", "Exponentiation", "", 1)}}<br><code>x ** y</code>
      </td>
      <td>[8]</td>
    </tr>
    <tr>
      <td rowspan="3">12: multiplicative Operatoren</td>
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
      <td rowspan="2">11: additive Operatoren</td>
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
        {{jsxref("Operators/Unsigned_right_shift", "Rechtsverschiebung ohne Vorzeichen", "", 1)}}<br><code>x >>> y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="6">9: relationale Operatoren</td>
      <td rowspan="6">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Less_than", "Weniger als", "", 1)}}<br><code>x &#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Less_than_or_equal", "Weniger als oder gleich", "", 1)}}<br><code>x &#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than", "Größer als", "", 1)}}<br><code>x > y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than_or_equal", "Größer als oder gleich", "", 1)}}<br><code>x >= y</code>
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
      <td rowspan="2">3: Logisches ODER, Null-Kohäsion</td>
      <td rowspan="2">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Logical_OR", "Logisches ODER", "", 1)}}<br><code>x || y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing", "Null-Kohäsionsoperator", "", 1)}}<br><code>x ?? y</code>
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
        {{jsxref("Operators/Subtraction_assignment", "Substraktionszuweisung", "", 1)}}<br><code>x -= y</code>
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
        {{jsxref("Operators/Unsigned_right_shift_assignment", "Rechtsverschiebung-Ohne-Vorzeichen-Zuweisung", "", 1)}}<br><code>x >>>= y</code>
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
        {{jsxref("Operators/Logical_AND_assignment", "Logische UND-Zuweisung", "", 1)}}<br><code>x &#x26;&#x26;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_OR_assignment", "Logische ODER-Zuweisung", "", 1)}}<br><code>x ||= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing_assignment", "Null-Kohäsionszuweisung", "", 1)}}<br><code>x ??= y</code>
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
        {{jsxref("Operators/Comma_operator", "Kommmaoperator", "", 1)}}<br><code>x, y</code>
      </td>
    </tr>
  </tbody>
</table>

Anmerkungen:

1. Der Operand kann ein beliebiger Ausdruck sein.
2. Die "rechte Seite" muss ein Bezeichner sein.
3. Die "rechte Seite" kann ein beliebiger Ausdruck sein.
4. Die "rechte Seite" ist eine kommaseparierte Liste von beliebigen Ausdrücken mit Präzedenz > 1 (d.h. keine Kommaaussdrücke). Der Konstruktor eines `new`-Ausdrucks kann keine optionale Kette sein.
5. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Zugriff auf Eigenschaften). Seine Präzedenz bedeutet `new Foo++` ist `(new Foo)++` (ein Syntaxfehler) und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor).
6. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Zugriff auf Eigenschaften).
7. Der Operand kann kein Bezeichner oder Zugriff auf ein [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sein.
8. Die linke Seite kann keine Präzedenz von 14 haben.
9. Die Operanden können keine logischen ODER `||` oder logischen UND `&&` Operatoren ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuweisungsziel sein (Bezeichner oder Zugriff auf Eigenschaften).
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelner Bezeichner oder eine eingeklammerte Parameterliste.
13. Nur gültig innerhalb von Objektliteralen, Arrayliteralen oder Argumentlisten.

Die Präzedenz der Gruppen 17 und 16 kann etwas zweideutig sein. Hier sind einige Beispiele zur Klarstellung.

- Optionales Chaining ist immer austauschbar mit seiner jeweiligen Syntax ohne Optionalität (mit Ausnahme von ein paar speziellen Fällen, in denen optionales Chaining verboten ist). Zum Beispiel akzeptiert jeder Ort, der `a?.b` akzeptiert, auch `a.b` und umgekehrt, und ebenso für `a?.()`, `a()`, usw.
- Memberausdrücke und berechnete Memberausdrücke sind immer austauschbar.
- Aufrufausdrücke und `import()`-Ausdrücke sind immer austauschbar.
- Dies lässt vier Klassen von Ausdrücken übrig: Zugriff auf Member, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Zugriffs auf Member kann sein: ein Zugriff auf Member (`a.b.c`), `new` mit Argumenten (`new a().b`), und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Zugriff auf Member (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Zugriff auf Member (`a.b()`), `new` mit Argumenten (`new a()()`), und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Zugriff auf Member (`new a.b`), `new` mit Argumenten (`new new a()`), und `new` ohne Argumente (`new new a`).
