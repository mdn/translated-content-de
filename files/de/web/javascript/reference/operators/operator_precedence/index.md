---
title: Operatorpräzedenz
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die **Operatorpräzedenz** bestimmt, wie Operatoren im Verhältnis zueinander geparsed werden. Operatoren mit höherer Präzedenz werden die Operanden von Operatoren mit niedrigerer Präzedenz.

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## Präzedenz und Assoziativität

Betrachten Sie einen Ausdruck, der durch die untenstehende Darstellung beschrieben werden kann, wobei sowohl `OP1` als auch `OP2` Platzhalter für Operatoren sind.

```plain
a OP1 b OP2 c
```

Die obige Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche davon die Sprache übernimmt, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Präzedenzstufen (siehe die folgende Tabelle) haben, geht der Operator mit der höheren _Präzedenz_ zuerst und die Assoziativität spielt keine Rolle. Beachten Sie, dass die Multiplikation eine höhere Präzedenz als die Addition hat und zuerst ausgeführt wird, auch wenn die Addition im Code zuerst geschrieben ist.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Bei Operatoren mit gleicher Präzedenz gruppiert die Sprache sie nach _Assoziativität_. _Linksassoziativität_ (von links nach rechts) bedeutet, dass es interpretiert wird als `(a OP1 b) OP2 c`, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass es interpretiert wird als `a OP1 (b OP2 c)`. Zuweisungsoperatoren sind rechtsassoziativ, sodass Sie schreiben können:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass sowohl `a` als auch `b` den Wert 5 erhalten. Dies ist, weil der Zuweisungsoperator den Wert zurückgibt, der zugewiesen wird. Zuerst wird `b` auf 5 gesetzt. Dann wird `a` ebenfalls auf 5 gesetzt — das Rücklaufwert von `b = 5`, also der rechte Operand der Zuweisung.

Ein weiteres Beispiel ist der einzigartige Exponentiationsoperator, der rechtsassoziativ ist, während andere arithmetische Operatoren linksassoziativ sind.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zuerst nach Präzedenz gruppiert, und dann, für benachbarte Operatoren mit gleicher Präzedenz, nach Assoziativität. Also, wenn Sie Division und Exponentiation mischen, kommt die Exponentiation immer vor der Division. Zum Beispiel ergibt `2 ** 3 / 3 ** 2` 0.8888888888888888, weil es dasselbe ist wie `(2 ** 3) / (3 ** 2)`.

Für präfixe unäre Operatoren nehmen wir an, wir haben das folgende Muster:

```plain
OP1 a OP2 b
```

wobei `OP1` ein präfixer unärer Operator und `OP2` ein binärer Operator ist. Wenn `OP1` eine höhere Präzedenz als `OP2` hat, dann würde es gruppiert werden als `(OP1 a) OP2 b`; andernfalls wäre es `OP1 (a OP2 b)`.

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

Weil `+` eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies `(a + yield) 1` werden — aber weil `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, wäre dies ein Syntaxfehler. Glücklicherweise haben die meisten unären Operatoren eine höhere Präzedenz als binäre Operatoren und leiden nicht unter dieser Tücke.

Wenn wir zwei präfixe unäre Operatoren haben:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator, der näher am Operanden ist, `OP2`, eine höhere Präzedenz als `OP1` haben, damit es als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es andersherum zu bekommen und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Weil [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies `(await yield) 1` werden, was auf einen Bezeichner namens `yield` wartet und ein Syntaxfehler ist. Ebenso, wenn Sie `new !A;` haben, weil `!` eine niedrigere Präzedenz als `new` hat, würde dies `(new !) A` werden, was offensichtlich ungültig ist. (Dieser Code sieht sowieso unsinnig aus, da `!A` immer einen Boolean und keine Konstruktorfunktion ergibt.)

Für postfixe unäre Operatoren (nämlich `++` und `--`) gelten die gleichen Regeln. Glücklicherweise haben beide Operatoren eine höhere Präzedenz als jeder binäre Operator, sodass die Gruppierung immer so ist, wie Sie es erwarten würden. Darüber hinaus, weil `++` zu einem _Wert_ und nicht zu einer _Referenz_ evaluiert wird, können Sie keine mehrfachen Inkremente zusammen verketten, wie Sie es vielleicht in C tun können.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorpräzedenz wird _rekursiv_ behandelt. Betrachten Sie zum Beispiel diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlicher Präzedenz nach abnehmenden Präzedenzstufen.

1. Der `**` Operator hat die höchste Präzedenz, also wird er zuerst gruppiert.
2. In der Nähe des `**` Ausdrucks findet sich `*` auf der rechten und `+` auf der linken Seite. `*` hat eine höhere Präzedenz, also wird es zuerst gruppiert. `*` und `/` haben die gleiche Präzedenz, deshalb gruppieren wir sie vorerst zusammen.
3. In der Nähe der in 2 gruppierten `*`/`/` Ausdrucks, weil `+` eine höhere Präzedenz als `>>` hat, wird ersteres gruppiert.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/` Gruppe, weil sie beide linksassoziativ sind, würde der linke Operand gruppiert.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass die Operatorpräzedenz und die Assoziativität nur die Reihenfolge der Auswertung von _Operatoren_ (die implizierte Gruppierung) beeinflussen, nicht jedoch die Reihenfolge der Auswertung von _Operanden_. Die Operanden werden immer von links nach rechts evaluiert. Die höherpräzedenten Ausdrücke werden immer zuerst evaluiert und ihre Ergebnisse dann gemäß der Reihenfolge der Operatorpräzedenz zusammengesetzt.

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

Wenn Sie mit Binärbäumen vertraut sind, denken Sie daran als ein [Post-Order Traversal](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren korrekt gruppiert wurden, würden die binären Operatoren einen Binärbaum bilden. Die Auswertung beginnt bei der äußersten Gruppe — das ist der Operator mit der niedrigsten Präzedenz (`/` in diesem Fall). Der linke Operand dieses Operators wird zuerst evaluiert, was aus höherpräzedenten Operatoren bestehen kann (wie einem Aufrufausdruck `echo("left", 4)`). Nachdem der linke Operand evaluiert wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher werden alle Blattknoten — die `echo()` Aufrufe — links nach rechts besucht, unabhängig von der Präzedenz der Operatoren, die sie verbinden.

## Short-circuiting

Im vorigen Abschnitt haben wir gesagt: "die höherpräzedenten Ausdrücke werden immer zuerst ausgewertet" — das ist im Allgemeinen wahr, muss jedoch mit der Anerkennung des _Short-circuiting_ ergänzt werden, bei dem ein Operand möglicherweise gar nicht ausgewertet wird.

Short-circuiting ist ein Fachbegriff für bedingte Auswertung. Zum Beispiel wird im Ausdruck `a && (b + c)`, wenn `a` [falsy](/de/docs/Glossary/falsy) ist, der Unterausdruck `(b + c)` nicht einmal ausgewertet, selbst wenn er gruppiert ist und daher eine höhere Präzedenz als `&&` hat. Wir könnten sagen, dass der logische UND Operator (`&&`) "kurzgeschlossen" ist. Neben dem logischen UND gehören zu den anderen kurzgeschlossenen Operatoren logisches ODER (`||`), Nullish Coalescing (`??`) und optionale Verkettung (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Bei der Auswertung eines kurzgeschlossenen Operators wird immer der linke Operand ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten des Short-circuiting ist in diesen Operatoren eingebettet. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob das tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, auch wenn das Ergebnis nie etwas anderes als NaN sein könnte.

Das vorherige Modell der Post-Order Traversal bleibt bestehen. Nach dem Besuch des linken Teilbaums eines kurzgeschlossenen Operators entscheidet die Sprache, ob der rechte Operand ausgewertet werden muss. Wenn nicht (zum Beispiel, weil der linke Operand von `||` bereits truthy ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Teilbaum zu besuchen.

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

Nur `C()` wird evaluiert, trotz der höheren Präzedenz von `&&`. Dies bedeutet nicht, dass `||` in diesem Fall eine höhere Präzedenz hat — es ist genau _weil_ `(B() && A())` eine höhere Präzedenz hat, dass es als Ganzes übergangen wird. Wenn es umgestellt wird als:

```js-nolint
console.log(A() && C() || B());
// Logs:
// called A
// called B
// false
```

Dann würde der kurzer Schaltungs-Effekt von `&&` nur verhindern, dass `C()` ausgewertet wird, aber weil `A() && C()` als Ganzes `false` ist, würde `B()` dennoch ausgewertet.

Beachten Sie jedoch, dass Short-circuiting das abschließende Bewertungsergebnis nicht ändert. Es betrifft nur die Evaluation der _Operanden_, nicht die Art und Weise, wie _Operatoren_ gruppiert werden — wenn die Evaluation von Operanden keine Nebeneffekte hat (z.B. Konsolenausgaben, Zuweisung an Variablen, Fehlerauslösung), wäre Short-circuiting überhaupt nicht bemerkbar.

Die Zuweisungsgegenstücke dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls kurzgeschlossen. Sie sind so kurzgeschlossen, dass die Zuweisung überhaupt nicht erfolgt.

## Tabelle

Die folgende Tabelle listet Operatoren in der Reihenfolge von höchster Präzedenz (18) bis niedrigster Präzedenz (1).

Mehrere allgemeine Hinweise zur Tabelle:

1. Nicht alle hier enthaltenen Syntaxen sind im strengen Sinne "Operatoren". Zum Beispiel werden Spread `...` und Pfeil `=>` typischerweise nicht als Operatoren betrachtet. Wir haben sie jedoch aufgenommen, um zu zeigen, wie eng sie im Vergleich zu anderen Operatoren/Ausdrücken binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die enger sind als die von höherpräzedenten Operatoren produzierten. Zum Beispiel muss die rechte Seite des Mitgliedszugriffs `.` (Präzedenz 17) ein Bezeichner statt eines gruppierten Ausdrucks sein. Die linke Seite von Pfeil `=>` (Präzedenz 2) muss eine Argumentliste oder ein einzelner Bezeichner statt eines zufälligen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die weiter sind als die von höherpräzedenten Operatoren erzeugten. Zum Beispiel kann der klammerumschlossene Ausdruck der Klammernotation `[ … ]` (Präzedenz 17) jeder Ausdruck sein, auch durch Komma (Präzedenz 1) verbundene. Diese Operatoren verhalten sich so, als ob der Operand "automatisch gruppiert" wird. In diesem Fall werden wir die Assoziativität weglassen.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Präzedenz</th>
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
        links-nach-rechts
      </td>
      <td>{{jsxref("Operators/Property_accessors", "Mitgliedszugriff", "#dot_notation", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "Optionale Verkettung", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">n/a</td>
      <td>
        {{jsxref("Operators/Property_accessors", "Berechneter Mitgliedszugriff", "#bracket_notation", 1)}}<br><code>x[y]</code>
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
      <td>n/a</td>
      <td>{{jsxref("Operators/new", "new")}} ohne Argumentenliste<br><code>new x</code></td>
    </tr>
    <tr>
      <td rowspan="2">15: post-fix Operatoren</td>
      <td rowspan="2">n/a</td>
      <td>
        {{jsxref("Operators/Increment", "Postfix Inkrement", "", 1)}}<br><code>x++</code>
      </td>
      <td rowspan="2">[5]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Postfix Dekrement", "", 1)}}<br><code>x--</code>
      </td>
    </tr>
    <tr>
      <td rowspan="10">14: Präfix Operatoren</td>
      <td rowspan="10">n/a</td>
      <td>
        {{jsxref("Operators/Increment", "Präfix Inkrement", "", 1)}}<br><code>++x</code>
      </td>
      <td rowspan="2">[6]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Präfix Dekrement", "", 1)}}<br><code>--x</code>
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
      <td rowspan="3">10: Bitweises Schieben</td>
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
        {{jsxref("Operators/Unsigned_right_shift", "Unsigned Rechtsschieben", "", 1)}}<br><code>x >>> y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="6">9: Relationsoperatoren</td>
      <td rowspan="6">links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Less_than", "Kleiner als", "", 1)}}<br><code>x &#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Less_than_or_equal", "Kleiner als oder gleich", "", 1)}}<br><code>x &#x3C;= y</code>
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
      <td rowspan="2">3: Logisches ODER, Nullish Coalescing</td>
      <td rowspan="2">links-nach-rechts</td>
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
        {{jsxref("Operators/Left_shift_assignment", "Linkssschiebezuweisung", "", 1)}}<br><code>x &#x3C;&#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift_assignment", "Rechtsschiebezuweisung", "", 1)}}<br><code>x >>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift_assignment", "Unsigned Rechtsschiebezuweisung", "", 1)}}<br><code>x >>>= y</code>
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
        {{jsxref("Operators/Nullish_coalescing_assignment", "Nullish Coalescing Zuweisung", "", 1)}}<br><code>x ??= y</code>
      </td>
    </tr>
    <tr>
      <td>rechts-nach-links</td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator">Bedingter (ternärer) Operator</a><br><code>x ? y : z</code>
      </td>
      <td>[11]</td>
    </tr>
    <tr>
      <td>rechts-nach-links</td>
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
      <td>links-nach-rechts</td>
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
4. Die "rechte Seite" ist eine kommagetrennte Liste von Ausdrücken mit einer Präzedenz > 1 (d.h. keine Kommaaussdrücke). Der Konstruktor eines `new` Ausdrucks kann keine optionale Kette sein.
5. Der Operand muss ein gültiges Zuordnungsziel sein (Bezeichner oder Zugriff auf Eigenschaft). Die Präzedenz bedeutet `new Foo++` ist `(new Foo)++` (ein Syntaxfehler) und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor).
6. Der Operand muss ein gültiges Zuordnungsziel sein (Bezeichner oder Zugriff auf Eigenschaft).
7. Der Operand kann kein Bezeichner oder ein [privater Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) Zugriff sein.
8. Die linke Seite kann keine Präzedenz 14 haben.
9. Die Operanden dürfen kein logisches ODER `||` oder logisches UND `&&` Operator ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuordnungsziel sein (Bezeichner oder Zugriff auf Eigenschaft).
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelner Bezeichner oder eine geklammerte Parameterliste.
13. Nur gültig innerhalb von Objektliteraturen, Array-Literaturen oder Argumentlisten.

Die Präzedenz der Gruppen 17 und 16 kann etwas mehrdeutig sein. Hier sind einige Beispiele zur Klärung.

- Optionale Verkettung ist immer austauschbar mit ihrer jeweiligen Syntax ohne Optionalität (es gibt einige besondere Fälle, in denen die optionale Verkettung verboten ist). Zum Beispiel ist jeder Ort, der `a?.b` akzeptiert, auch für `a.b` und umgekehrt geeignet, und ähnlich für `a?.()`, `a()`, etc.
- Mitgliedszugriffe und berechnete Mitgliedzugriffe sind immer austauschbar miteinander.
- Funktionsaufrufe und `import()` Ausdrücke sind immer austauschbar miteinander.
- Dies lässt vier Klassen von Ausdrücken: Mitgliedszugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Mitgliedszugriffs kann sein: ein Mitgliedszugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Mitgliedszugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Mitgliedszugriff (`a.b()`), `new` mit Argumenten (`new a()()`), und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Mitgliedszugriff (`new a.b`), `new` mit Argumenten (`new new a()`), und `new` ohne Argumente (`new new a`).
