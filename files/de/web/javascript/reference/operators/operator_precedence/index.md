---
title: Operatorpräzedenz
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

**Operatorpräzedenz** bestimmt, wie Operatoren im Verhältnis zueinander geparst werden. Operatoren mit höherer Präzedenz werden die Operanden von Operatoren mit niedrigerer Präzedenz.

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

Betrachten Sie einen Ausdruck, der durch die folgende Darstellung beschreibbar ist, wobei sowohl `OP1` als auch `OP2` Platzhalter für OPerators sind.

```plain
a OP1 b OP2 c
```

Die obige Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche die Sprache annimmt, hängt von der Identität von `OP1` und `OP2` ab.

Haben `OP1` und `OP2` unterschiedliche Präzedenzstufen (siehe Tabelle unten), geht der Operator mit der höheren _Präzedenz_ zuerst und die Assoziativität spielt keine Rolle. Beachten Sie, wie die Multiplikation höhere Präzedenz als die Addition hat und zuerst ausgeführt wird, obwohl die Addition im Code zuerst geschrieben ist.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Innerhalb von Operatoren mit derselben Präzedenz gruppiert die Sprache diese nach der _Assoziativität_. _Linksassoziativität_ (von links nach rechts) bedeutet, dass es als `(a OP1 b) OP2 c` interpretiert wird, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass es als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ, so dass Sie schreiben können:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies liegt daran, dass der Zuweisungsoperator den Wert zurückgibt, der zugewiesen wird. Zuerst wird `b` auf 5 gesetzt. Dann wird `a` ebenfalls auf 5 gesetzt — der Rückgabewert von `b = 5`, also der rechte Operand der Zuweisung.

Ein weiteres Beispiel ist der einzigartige Exponentialoperator, der rechtsassoziativ ist, wohingegen andere arithmetische Operatoren linksassoziativ sind.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zuerst nach Präzedenz und dann bei benachbarten Operatoren mit derselben Präzedenz nach Assoziativität gruppiert. Bei der Mischung von Division und Exponentialoperation kommt die Exponentialoperation immer vor der Division. Zum Beispiel ergibt `2 ** 3 / 3 ** 2` 0.8888888888888888, da es dasselbe ist wie `(2 ** 3) / (3 ** 2)`.

Betrachten wir für unäre Präfixoperatoren folgendes Muster:

```plain
OP1 a OP2 b
```

wobei `OP1` ein Präfix-Unäroperator und `OP2` ein binärer Operator ist. Wenn `OP1` eine höhere Präzedenz als `OP2` hat, wird es als `(OP1 a) OP2 b` gruppiert; andernfalls wäre es `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Befindet sich der Unäroperator am zweiten Operanden:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Präzedenz als der unäre Operator `OP1` haben, damit es als `a OP2 (OP1 b)` gruppiert wird. Zum Beispiel ist das folgende ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(a + yield) 1` werden — aber da `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, wäre dies ein Syntaxfehler. Zum Glück haben die meisten unären Operatoren eine höhere Präzedenz als binäre Operatoren und leiden nicht unter diesem Problem.

Haben wir zwei Präfix-Unäroperator:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator, der näher am Operand steht, `OP2`, eine höhere Präzedenz als `OP1` haben, damit es als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es anders zu bekommen und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(await yield) 1` werden, was bedeutet, dass auf eine Kennung namens `yield` gewartet wird, und dies ist ein Syntaxfehler. Ebenso, wenn Sie `new !A;` haben, da `!` eine niedrigere Präzedenz als `new` hat, würde dies zu `(new !) A`, was offensichtlich ungültig ist (dieser Code wäre ohnehin unsinnig zu schreiben, da `!A` immer einen booleschen Wert und keine Konstruktorfunktion erzeugt).

Für postfix Unäroperatoren (nämlich `++` und `--`) gelten dieselben Regeln. Zum Glück haben beide Operatoren eine höhere Präzedenz als jeder binäre Operator, so dass die Gruppierung immer wie erwartet ist. Außerdem, da `++` zu einem _Wert_ und nicht zu einer _Referenz_ evaluiert, können Sie keine mehrfachen Inkremente zusammenkettieren.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorpräzedenz wird _rekursiv_ behandelt. Betrachten Sie zum Beispiel diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlichen Präzedenzstufen nach abnehmenden Präzedenzstufen.

1. Der `**`-Operator hat die höchste Präzedenz, daher wird er zuerst gruppiert.
2. Um den `**`-Ausdruck herum befindet sich `*` rechts und `+` links. `*` hat eine höhere Präzedenz, daher wird es zuerst gruppiert. `*` und `/` haben die gleiche Präzedenz, daher gruppieren wir sie vorerst zusammen.
3. Um den in 2 gruppierten `*`/`/`-Ausdruck herum, da `+` eine höhere Präzedenz als `>>` hat, wird der erstere gruppiert.

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

Beachten Sie, dass die Operatorpräzedenz und Assoziativität nur die Ausführungsreihenfolge der _Operatoren_ (die implizite Gruppierung) beeinflussen, aber nicht die Ausführungsreihenfolge der _Operanden_. Die Operanden werden immer von links nach rechts abgearbeitet. Die höher präzedenten Ausdrücke werden immer zuerst ausgewertet, und ihre Ergebnisse werden dann entsprechend der Reihenfolge der Operatorpräzedenz zusammengesetzt.

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

Wenn Sie mit Binärbäumen vertraut sind, denken Sie daran als an eine [Post-Order-Durchlauf](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren korrekt gruppiert wurden, würde sich für die binären Operatoren ein Binärbaum ergeben. Die Auswertung beginnt bei der äußersten Gruppe — das ist der Operator mit der niedrigsten Präzedenz (in diesem Fall `/`). Der linke Operand dieses Operators wird zuerst ausgewertet, was aus höherpräzedenten Operatoren bestehen kann (wie einem Aufrufausdruck `echo("left", 4)`). Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand in der gleichen Weise ausgewertet. Daher werden alle Blattknoten — die `echo()`-Aufrufe — von links nach rechts besucht, unabhängig von der Präzedenz der Operatoren, die sie verbinden.

## Kurzschlussverhalten

Im vorherigen Abschnitt haben wir gesagt, dass "die höher präzedenten Ausdrücke immer zuerst ausgewertet werden" — das ist im Allgemeinen richtig, muss jedoch mit der Erkenntnis des _Kurzschlussverhaltens_ ergänzt werden, in welchem Fall ein Operand möglicherweise überhaupt nicht ausgewertet wird.

Kurzschlussverhalten ist ein Fachbegriff für bedingte Auswertung. Zum Beispiel wird im Ausdruck `a && (b + c)`, wenn `a` {{Glossary("falsy", "falsy")}} ist, der Unterausdruck `(b + c)` nicht einmal ausgewertet, selbst wenn er gruppiert ist und daher eine höhere Präzedenz als `&&` hat. Wir könnten sagen, dass der logische UND-Operator (`&&`) "kurzgeschlossen" wird. Neben dem logischen UND gehören auch logisches ODER (`||`), Nullish-Koaleszenz (`??`) und optionales Chaining (`?.`) zu den kurzgeschlossenen Operatoren.

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Bei der Auswertung eines kurzgeschlossenen Operators wird der linke Operand immer ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten des Kurzschlusses ist in diese Operatoren eingebaut. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob das tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, selbst wenn das Ergebnis nie etwas anderes als `NaN` sein könnte.

Das vorherige Modell der Post-Order-Durchlauf bleibt bestehen. Allerdings entscheidet die Sprache, nach dem Besuch des linken Teilbaums eines kurzgeschlossenen Operators, ob der rechte Operand ausgewertet werden muss. Wenn nicht (zum Beispiel weil der linke Operand von `||` bereits truthy ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Teilbaum zu besuchen.

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

Nur `C()` wird ausgewertet, trotz `&&` höherer Präzedenz. Dies bedeutet nicht, dass `||` in diesem Fall eine höhere Präzedenz hat — es ist genau _weil_ `(B() && A())` eine höhere Präzedenz hat, dass es als Ganzes vernachlässigt wird. Wird es wie folgt neu angeordnet:

```js-nolint
console.log(A() && B() || C());
// Logs:
// called A
// called C
// true
```

Dann würde der Kurzschlusseffekt von `&&` nur verhindern, dass `B()` ausgewertet wird, aber weil `A() && B()` insgesamt `false` ist, würde `C()` immer noch ausgewertet.

Beachten Sie jedoch, dass Kurzschlussverhalten das endgültige Auswertungsergebnis nicht ändert. Es beeinflusst nur die Auswertung der _Operanden_, nicht wie _Operatoren_ gruppiert werden — wenn die Auswertung der Operanden keine Nebeneffekte hat (zum Beispiel Ausgabe ins Konsolenprotokoll, Zuweisungen zu Variablen, Werfen eines Fehlers), wäre das Kurzschlussverhalten überhaupt nicht beobachtbar.

Die Zuweisungsgegenstücke dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls kurzgeschlossen. Sie sind so kurzgeschlossen, dass die Zuweisung überhaupt nicht stattfindet.

## Tabelle

Die folgende Tabelle listet Operatoren in der Reihenfolge von höchster Präzedenz (18) bis niedrigster Präzedenz (1) auf.

Einige allgemeine Anmerkungen zur Tabelle:

1. Nicht alle hier enthaltenen Syntaxen sind im strengen Sinne "Operatoren". Zum Beispiel werden Spread `...` und Pfeil `=>` typischerweise nicht als Operatoren betrachtet. Wir haben sie jedoch dennoch aufgenommen, um zu zeigen, wie eng sie im Vergleich zu anderen Operatoren/Ausdrucken binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die schmaler sind als jene, die von höheren Präzedenzoperatoren produziert werden. Zum Beispiel muss die rechte Seite des Mitgliederzugangs `.` (Präzedenz 17) ein Bezeichner anstelle eines gruppierten Ausdrucks sein. Die linke Seite des Pfeils `=>` (Präzedenz 2) muss eine Argumentenliste oder ein einzelner Bezeichner anstelle eines zufälligen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die weiter sind als jene, die von höheren Präzedenzoperatoren produziert werden. Zum Beispiel kann der klammerumfasste Ausdruck der Klammernotation `[ … ]` (Präzedenz 17) jeder Ausdruck sein, selbst durch Komma (Präzedenz 1) verbundene. Diese Operatoren wirken, als ob jener Operand "automatisch gruppiert" wäre. In diesem Fall werden wir die Assoziativität weglassen.

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
      <td>n/v</td>
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
      <td>{{jsxref("Operators/Optional_chaining", "Optionales Chaining", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">n/v</td>
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
      <td>n/v</td>
      <td>{{jsxref("Operators/new", "new")}} ohne Argumentenliste<br><code>new x</code></td>
    </tr>
    <tr>
      <td rowspan="2">15: Postfix-Operatoren</td>
      <td rowspan="2">n/v</td>
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
      <td rowspan="10">n/v</td>
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
        {{jsxref("Operators/Logical_NOT", "Logisches NOT", "", 1)}}<br><code>!x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_NOT", "Bitweises NOT", "", 1)}}<br><code>~x</code>
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
      <td>13: Exponentialfunktion</td>
      <td>rechts-nach-links</td>
      <td>
        {{jsxref("Operators/Exponentiation", "Exponentialfunktion", "", 1)}}<br><code>x ** y</code>
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
      <td rowspan="3">10: Bitweise Verschiebung</td>
      <td rowspan="3">links-nach-rechts</td>
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
      <td rowspan="2">3: Logisches ODER, Nullish-Koaleszenz</td>
      <td rowspan="2">links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Logical_OR", "Logisches ODER", "", 1)}}<br><code>x || y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing", "Nullish-Koaleszenz-operator", "", 1)}}<br><code>x ?? y</code>
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
        {{jsxref("Operators/Exponentiation_assignment", "Exponentialzuweisung", "", 1)}}<br><code>x **= y</code>
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
        {{jsxref("Operators/Nullish_coalescing_assignment", "Nullish-Koaleszenz-Zuweisung", "", 1)}}<br><code>x ??= y</code>
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
        <a href="/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Pfeil</a><br><code>x => y</code>
      </td>
      <td>[12]</td>
    </tr>
    <tr>
      <td rowspan="3">n/v</td>
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
        {{jsxref("Operators/Comma_operator", "Kommaoperator", "", 1)}}<br><code>x, y</code>
      </td>
    </tr>
  </tbody>
</table>

Anmerkungen:

1. Der Operand kann jeder Ausdruck sein.
2. Die "rechte Seite" muss ein Bezeichner sein.
3. Die "rechte Seite" kann jeder Ausdruck sein.
4. Die "rechte Seite" ist eine durch Komma getrennte Liste beliebiger Ausdrücke mit Präzedenz > 1 (d.h. keine Kommaausdrücke). Der Konstruktor eines `new`-Ausdrucks kann keine optionale Kette sein.
5. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Memberzugriff). Seine Präzedenz bedeutet, dass `new Foo++` `(new Foo)++` (ein Syntaxfehler) und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor) ist.
6. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Memberzugriff).
7. Der Operand kann kein Bezeichner oder ein [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)-Zugriff sein.
8. Die linke Seite kann keine Präzedenz 14 haben.
9. Die Operanden können nicht ein logisches ODER `||` oder ein logisches UND `&&` Operator ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuweisungsziel sein (Bezeichner oder Memberzugriff).
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelner Bezeichner oder eine parenthesierte Parameterliste.
13. Nur gültig innerhalb von Objektliteralen, Array-Literalen oder Argumentenlisten.

Die Präzedenz der Gruppen 17 und 16 kann etwas mehrdeutig sein. Hier sind einige Beispiele zur Klärung.

- Optionales Chaining ist immer für seine jeweilige Syntax ohne Optionalität austauschbar (außer in einigen speziellen Fällen, in denen optionales Chaining verboten ist). Zum Beispiel akzeptiert jeder Ort, der `a?.b` akzeptiert, auch `a.b` und umgekehrt und ähnlich für `a?.()`, `a()`, etc.
- Mitgliedsausdrücke und berechnete Mitgliedsausdrücke sind immer austauschbar.
- Aufrufausdrücke und `import()`-Ausdrücke sind immer austauschbar.
- Dies lässt vier Klassen von Ausdrücken: Mitgliedszugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Mitgliedszugriffs kann sein: ein Mitgliedszugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Mitgliedszugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Mitgliedszugriff (`a.b()`), `new` mit Argumenten (`new a()()`), und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Mitgliedszugriff (`new a.b`), `new` mit Argumenten (`new new a()`), und `new` ohne Argumente (`new new a`).
