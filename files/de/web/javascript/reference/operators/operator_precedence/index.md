---
title: Operatorpräzedenz
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die **Operatorpräzedenz** bestimmt, wie Operatoren in Bezug aufeinander geparst werden. Operatoren mit höherer Präzedenz werden zu den Operanden von Operatoren mit niedrigerer Präzedenz.

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## Präzedenz und Assoziativität

Betrachten Sie einen Ausdruck, der durch die folgende Darstellung beschreibbar ist, wobei sowohl `OP1` als auch `OP2` für OPerators ausfüllbar sind.

```plain
a OP1 b OP2 c
```

Die obige Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche Variante die Sprache wählt, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Präzedenzstufen haben (siehe Tabelle unten), geht der Operator mit der höheren _Präzedenz_ zuerst, und die Assoziativität spielt keine Rolle. Beachten Sie, dass Multiplikation eine höhere Präzedenz als Addition hat und zuerst ausgeführt wird, auch wenn die Addition im Code zuerst geschrieben wird.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, weil Klammern hier überflüssig sind
console.log((3 + 10) * 2); // 26, weil die Klammern die Reihenfolge ändern
```

Innerhalb von Operatoren derselben Präzedenz gruppiert die Sprache sie nach _Assoziativität_. _Linksassoziativität_ (links-nach-rechts) bedeutet, dass es als `(a OP1 b) OP2 c` interpretiert wird, während _Rechtsassoziativität_ (rechts-nach-links) bedeutet, dass es als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ, sodass Sie schreiben können:

```js
a = b = 5; // das Gleiche wie a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies ist, weil der Zuweisungsoperator den Wert zurückgibt, der zugewiesen wird. Zuerst wird `b` auf 5 gesetzt. Dann wird `a` ebenfalls auf 5 gesetzt — den Rückgabewert von `b = 5`, auch bekannt als rechter Operand der Zuweisung.

Ein weiteres Beispiel ist, dass der einzigartige Potenzierungsoperator rechtsassoziativ ist, während andere arithmetische Operatoren linksassoziativ sind.

```js-nolint
const a = 4 ** 3 ** 2; // Das Gleiche wie 4 ** (3 ** 2); ergibt 262144
const b = 4 / 3 / 2; // Das Gleiche wie (4 / 3) / 2; ergibt 0.6666...
```

Operatoren werden zuerst nach Präzedenz geordnet und dann, für benachbarte Operatoren mit derselben Präzedenz, nach Assoziativität. Wenn man Division und Potenzierung mischt, kommt die Potenzierung immer vor der Division. Zum Beispiel führt `2 ** 3 / 3 ** 2` zu 0.8888888888888888, weil es das Gleiche ist wie `(2 ** 3) / (3 ** 2)`.

Für präfix-unäre Operatoren nehmen wir folgendes Muster an:

```plain
OP1 a OP2 b
```

wobei `OP1` ein präfix-unärer Operator und `OP2` ein binärer Operator ist. Wenn `OP1` eine höhere Präzedenz als `OP2` hat, wird es als `(OP1 a) OP2 b` gruppiert; ansonsten wird es `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Entspricht (typeof a) + b; Ergebnis ist "number2"
```

Wenn der unäre Operator auf dem zweiten Operanden steht:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Präzedenz als der unäre Operator `OP1` haben, um als `a OP2 (OP1 b)` gruppiert zu werden. Zum Beispiel ist das Folgende ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(a + yield) 1` werden — aber weil `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generator-Funktionen ist, wäre dies ein Syntaxfehler. Glücklicherweise haben die meisten unären Operatoren eine höhere Präzedenz als binäre Operatoren und leiden nicht unter diesem Problem.

Wenn wir zwei präfix-unäre Operatoren haben:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator näher am Operanden, `OP2`, eine höhere Präzedenz als `OP1` haben, um als `OP1 (OP2 a)` gruppiert zu werden. Es ist möglich, es andersherum zu bekommen und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(await yield) 1`, was darauf wartet, dass eine Variable namens `yield` aufgerufen wird, und ein Syntaxfehler. Ähnlich, wenn Sie `new !A;` haben, da `!` eine niedrigere Präzedenz als `new` hat, würde dies zu `(new !) A`, was offensichtlich ungültig ist. (Dieser Code sieht sowieso unsinnig aus, da `!A` immer ein Boolean ergibt, keine Konstrukturfunktion.)

Für postfix-unäre Operatoren (nämlich `++` und `--`) gelten dieselben Regeln. Glücklicherweise haben beide Operatoren eine höhere Präzedenz als jeder binäre Operator, sodass die Gruppierung immer das ist, was Sie erwarten würden. Darüber hinaus, weil `++` zu einem _Wert_ und nicht zu einer _Referenz_ evaluiert, können Sie keine mehreren Inkremente zusammenketten, wie Sie es in C tun könnten.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Ungültige linke Seite in Postfix-Operation.
```

Die Operatorpräzedenz wird _rekursiv_ behandelt. Betrachten Sie zum Beispiel diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlichen Präzedenzebenen in absteigender Reihenfolge der Präzedenz.

1. Der `**` Operator hat die höchste Präzedenz und wird daher zuerst gruppiert.
2. Schauend um den `**` Ausdruck herum, hat er `*` rechts und `+` links. `*` hat eine höhere Präzedenz und wird zuerst gruppiert. `*` und `/` haben dieselbe Präzedenz, daher gruppieren wir sie vorerst zusammen.
3. Schauend um den in 2 gruppierten `*`/`/` Ausdruck, weil `+` eine höhere Präzedenz als `>>` hat, wird das erstere gruppiert.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/` Gruppe, weil sie beide linksassoziativ sind, würde der linke Operand gruppiert werden.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass die Operatorpräzedenz und die Assoziativität nur die Auswertungsreihenfolge der _Operatoren_ betreffen (die implizite Gruppierung), aber nicht die Auswertungsreihenfolge der _Operanden_. Die Operanden werden immer von links nach rechts ausgewertet. Die höher-präzedenten Ausdrücke werden immer zuerst ausgewertet und ihre Ergebnisse dann gemäß der Reihenfolge der Operatorpräzedenz zusammengesetzt.

```js-nolint
function echo(name, num) {
  console.log(`Evaluating the ${name} side`);
  return num;
}
// Der Potenzierungsoperator (**) ist rechtsassoziativ,
// aber alle Aufrufausdrücke (echo()), die eine höhere Präzedenz haben,
// werden ausgewertet, bevor ** dies tut
console.log(echo("left", 4) ** echo("middle", 3) ** echo("right", 2));
// Auswertung der linken Seite
// Auswertung der mittleren Seite
// Auswertung der rechten Seite
// 262144

// Der Potenzierungsoperator (**) hat eine höhere Präzedenz als die Division (/),
// aber die Auswertung beginnt immer mit dem linken Operanden
console.log(echo("left", 4) / echo("middle", 3) ** echo("right", 2));
// Auswertung der linken Seite
// Auswertung der mittleren Seite
// Auswertung der rechten Seite
// 0,4444444444444444
```

Wenn Sie mit binären Bäumen vertraut sind, denken Sie daran wie an eine [Post-Order-Durchlauf](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren richtig gruppiert wurden, würden die binären Operatoren einen Binärbaum bilden. Die Auswertung beginnt bei der äußersten Gruppe — dies ist der Operator mit der niedrigsten Präzedenz (`/` in diesem Fall). Der linke Operand dieses Operators wird zuerst ausgewertet, was aus höher-präzedenten Operatoren bestehen kann (wie ein Aufrufausdruck `echo("left", 4)`). Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher würden alle Blattknoten — die `echo()` Aufrufe — von links nach rechts besucht werden, unabhängig von der Präzedenz der sie verbindenden Operatoren.

## Kurzschluss-Auswertung

Im vorangegangenen Abschnitt sagten wir: "die höher-präzedenten Ausdrücke werden immer zuerst ausgewertet" — das ist im Allgemeinen richtig, muss aber mit der Anerkennung von _Kurzschluss-Auswertung_ ergänzt werden, bei der ein Operand überhaupt nicht ausgewertet werden kann.

Kurzschluss-Auswertung ist Fachjargon für bedingte Auswertung. Zum Beispiel, im Ausdruck `a && (b + c)`, wenn `a` {{Glossary("falsy")}} ist, wird der Unterausdruck `(b + c)` nicht einmal ausgewertet, auch wenn er gruppiert ist und daher eine höhere Präzedenz als `&&` hat. Man könnte sagen, dass der logische UND-Operator (`&&`) "kurzgeschlossen" ist. Neben logischen UND zählen auch logisches ODER (`||`), der Nullish Coalescing Operator (`??`) und Optional Chaining (`?.`) zu den kurzgeschlossenen Operatoren.

```js-nolint
a || (b * c); // Auswertung von `a` zuerst, dann Ausgabe von `a`, wenn `a` "truthy" ist
a && (b < c); // Auswertung von `a` zuerst, dann Ausgabe von `a`, wenn `a` "falsy" ist
a ?? (b || c); // Auswertung von `a` zuerst, dann Ausgabe von `a`, wenn `a` nicht `null` und nicht `undefined` ist
a?.b.c; // Auswertung von `a` zuerst, dann Ausgabe von `undefined`, wenn `a` `null` oder `undefined` ist
```

Bei der Auswertung eines kurzgeschlossenen Operators wird der linke Operand immer ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten der Kurzschluss-Auswertung ist in diese Operatoren eingebaut. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob dies tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, selbst wenn das Ergebnis nie etwas anderes als `NaN` wäre.

Das vorhergehende Modell einer Post-Order-Durchlauf bleibt bestehen. Wenn jedoch der linke Teilbaum eines kurzgeschlossenen Operators besucht wurde, entscheidet die Sprache, ob der rechte Operand ausgewertet werden muss. Wenn nicht (zum Beispiel, weil der linke Operand von `||` bereits truthy ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Teilbaum zu besuchen.

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

Nur `C()` wird ausgewertet, obwohl `&&` eine höhere Präzedenz hat. Das bedeutet nicht, dass `||` in diesem Fall eine höhere Präzedenz hat — es ist genau _wegen_ der höheren Präzedenz von `(B() && A())`, dass es als Ganzes ignoriert wird. Wenn es umgestellt wird als:

```js-nolint
console.log(A() && C() || B());
// Logs:
// called A
// called B
// false
```

Dann würde der Kurzschluss-Effekt von `&&` nur verhindern, dass `C()` ausgewertet wird, aber weil `A() && C()` als Ganzes `false` ist, würde `B()` dennoch ausgewertet werden.

Beachten Sie jedoch, dass die Kurzschluss-Auswertung das endgültige Evaluationsergebnis nicht ändert. Sie beeinflusst nur die Auswertung der _Operanden_, nicht wie _Operatoren_ gruppiert werden — wenn die Auswertung der Operanden keine Nebenwirkungen hat (zum Beispiel die Konsolenausgabe, Variablenzuweisungen, Fehlerauslösung), wäre die Kurzschluss-Auswertung überhaupt nicht beobachtbar.

Die Zuweisungsvarianten dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls kurzgeschlossen. Sie sind so kurzgeschlossen, dass die Zuweisung überhaupt nicht erfolgt.

## Tabelle

Die folgende Tabelle listet Operatoren in der Reihenfolge von der höchsten Präzedenz (18) zur niedrigsten Präzedenz (1) auf.

Einige allgemeine Hinweise zur Tabelle:

1. Nicht alle hier enthaltene Syntax wird im strengen Sinne als "Operatoren" angesehen. Zum Beispiel werden Spread `...` und Pfeil `=>` typischerweise nicht als Operatoren betrachtet. Wir haben sie jedoch aufgenommen, um zu zeigen, wie eng sie im Vergleich zu anderen Operatoren/Ausdrücken binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die schmaler sind als jene, die durch höher-präzedente Operatoren erzeugt werden. Zum Beispiel muss die rechte Seite des Memberzugsangs `.` (Präzedenz 17) ein Bezeichner statt eines gruppierten Ausdrucks sein. Die linke Seite des Pfeils `=>` (Präzedenz 2) muss eine Argumentliste oder ein einzelner Bezeichner anstelle eines beliebigen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die breiter sind als die, die von höher-präzedenten Operatoren erzeugt werden. Zum Beispiel kann der klammerumschlossene Ausdruck der Klammernotation `[ … ]` (Präzedenz 17) ein beliebiger Ausdruck sein, sogar durch Komma (Präzedenz 1) verbundene. Diese Operatoren tun so, als ob dieser Operand "automatisch gruppiert" wäre. In diesem Fall werden wir die Assoziativität weglassen.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Precedence</th>
      <th>Associativity</th>
      <th>Individual operators</th>
      <th>Notes</th>
    </tr>
    <tr>
      <td>18: groupierung</td>
      <td>n/a</td>
      <td>{{jsxref("Operators/Grouping", "Grouping", "", 1)}}<br><code>(x)</code></td>
      <td>[1]</td>
    </tr>
    <tr>
      <td rowspan="6">17: zugriff und aufruf</td>
      <td rowspan="2">
        links-nach-rechts
      </td>
      <td>{{jsxref("Operators/Property_accessors", "Memberzugriff", "#dot_notation", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "Optional Chaining", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">n/a</td>
      <td>
        {{jsxref("Operators/Property_accessors", "Berechneter Memberzugriff", "#bracket_notation", 1)}}<br><code>x[y]</code>
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
      <td rowspan="2">15: postfix-operatoren</td>
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
      <td rowspan="10">14: präfix-operatoren</td>
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
      <td>13: potenzierung</td>
      <td>rechts-nach-links</td>
      <td>
        {{jsxref("Operators/Exponentiation", "Potenzierung", "", 1)}}<br><code>x ** y</code>
      </td>
      <td>[8]</td>
    </tr>
    <tr>
      <td rowspan="3">12: multiplikative operatoren</td>
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
      <td rowspan="2">11: additive operatoren</td>
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
      <td rowspan="3">10: bitweise verschiebung</td>
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
        {{jsxref("Operators/Unsigned_right_shift", "Unsigned-Rechtsverschiebung", "", 1)}}<br><code>x >>> y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="6">9: relationale operatoren</td>
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
      <td rowspan="4">8: gleichheitsoperatoren</td>
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
      <td>7: bitweise UND</td>
      <td>links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_AND", "Bitweise UND", "", 1)}}<br><code>x &#x26; y</code>
      </td>
    </tr>
    <tr>
      <td>6: bitweise XOR</td>
      <td>links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_XOR", "Bitweise XOR", "", 1)}}<br><code>x ^ y</code>
      </td>
    </tr>
    <tr>
      <td>5: bitweise ODER</td>
      <td>links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_OR", "Bitweise ODER", "", 1)}}<br><code>x | y</code>
      </td>
    </tr>
    <tr>
      <td>4: logisches UND</td>
      <td>links-nach-rechts</td>
      <td>
        {{jsxref("Operators/Logical_AND", "Logisches UND", "", 1)}}<br><code>x &#x26;&#x26; y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="2">3: logisches ODER, nullish coalescing</td>
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
      <td rowspan="21">2: zuweisung und diversen</td>
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
        {{jsxref("Operators/Left_shift_assignment", "LinksverschiebungZuweisung", "", 1)}}<br><code>x &#x3C;&#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift_assignment", "Rechtsverschiebungszuweisung", "", 1)}}<br><code>x >>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift_assignment", "Unsigned-Rechtsverschiebungszuweisung", "", 1)}}<br><code>x >>>= y</code>
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
      <td>1: komma</td>
      <td>links-nach-rechts</td>
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
4. Die "rechte Seite" ist eine durch Komma getrennte Liste eines beliebigen Ausdrucks mit Präzedenz > 1 (d.h. keine Kommaausdrücke). Der Konstruktor eines `new`-Ausdrucks kann keine optionale Verkettung sein.
5. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Property-Zugriff). Seine Präzedenz bedeutet, dass `new Foo++` `(new Foo)++` (ein Syntaxfehler) ist und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor).
6. Der Operand muss ein gültiges Zuweisungsziel sein (Bezeichner oder Property-Zugriff).
7. Der Operand kann kein Bezeichner oder ein [privater Property](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) Zugriff sein.
8. Die linke Seite kann keine Präzedenz 14 haben.
9. Die Operanden dürfen kein logisches ODER `||` oder logisches UND `&&` Operator ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuweisungsziel sein (Bezeichner oder Property-Zugriff).
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelner Bezeichner oder eine geklammerte Parameterliste.
13. Nur innerhalb von Objekt-Literalen, Array-Literalen oder Argument-Listen gültig.

Die Präzedenz der Gruppen 17 und 16 kann etwas zweideutig sein. Hier sind einige Beispiele zur Verdeutlichung.

- Optionales Chaining ist immer austauschbar mit der entsprechenden Syntax ohne Optionalität (abgesehen von einigen Sonderfällen, in denen optionales Chaining verboten ist). Zum Beispiel akzeptiert jeder Ort, der `a?.b` akzeptiert, auch `a.b` und umgekehrt, und ebenso für `a?.()`, `a()`, etc.
- Memberausdrücke und berechnete Memberausdrücke sind immer untereinander austauschbar.
- Aufrufausdrücke und `import()`-Ausdrücke sind immer untereinander austauschbar.
- Dies lässt vier Klassen von Ausdrücken: Memberzugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Memberzugriffs kann sein: ein Memberzugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Memberzugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Memberzugriff (`a.b()`), `new` mit Argumenten (`new a()()`), und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Memberzugriff (`new a.b`), `new` mit Argumenten (`new new a()`), und `new` ohne Argumente (`new new a`).
