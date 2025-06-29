---
title: Operatorpräzedenz
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Operators")}}

**Operatorpräzedenz** bestimmt, wie Operatoren im Verhältnis zueinander analysiert werden. Operatoren mit höherer Präzedenz werden zu Operanden von Operatoren mit niedrigerer Präzedenz.

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

Betrachten Sie einen Ausdruck, der durch die folgende Darstellung beschrieben werden kann, wobei sowohl `OP1` als auch `OP2` Platzhalter für Operatoren sind.

```plain
a OP1 b OP2 c
```

Die obige Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche der Sprache bevorzugt wird, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Präzedenzebenen haben (siehe die Tabelle unten), geht der Operator mit der höheren _Präzedenz_ zuerst und die Assoziativität spielt keine Rolle. Beachten Sie, dass die Multiplikation eine höhere Präzedenz hat als die Addition und zuerst ausgeführt wird, obwohl die Addition zuerst im Code geschrieben ist.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Innerhalb von Operatoren mit derselben Präzedenz gruppiert die Sprache nach _Assoziativität_. _Linksassozziativität_ (von links nach rechts) bedeutet, dass es als `(a OP1 b) OP2 c` interpretiert wird, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass es als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ, sodass Sie schreiben können:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies ist, weil der Zuweisungsoperator den zugewiesenen Wert zurückgibt. Zuerst wird `b` auf 5 gesetzt. Dann wird auch `a` auf 5 gesetzt — der Rückgabewert von `b = 5`, also der rechte Operand der Zuweisung.

Als weiteres Beispiel hat der einzigartige Exponentialoperator Rechtsassoziativität, während andere arithmetische Operatoren Linksassoziativität haben.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zuerst nach Präzedenz gruppiert und dann, für benachbarte Operatoren mit derselben Präzedenz, nach Assoziativität. Wenn man Division und Exponentialoperation mischt, kommt die Exponentialoperation immer vor der Division. Zum Beispiel ergibt `2 ** 3 / 3 ** 2` 0.8888888888888888, weil es dasselbe ist wie `(2 ** 3) / (3 ** 2)`.

Für Präfix-Unär-Operatoren nehmen wir an, wir haben das folgende Muster:

```plain
OP1 a OP2 b
```

wo `OP1` ein Präfix-Unär-Operator und `OP2` ein Binäroperator ist. Wenn `OP1` eine höhere Präzedenz als `OP2` hat, wird es als `(OP1 a) OP2 b` gruppiert; andernfalls wäre es `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Wenn der Unär-Operator am zweiten Operand ist:

```plain
a OP2 OP1 b
```

Dann muss der Binäroperator `OP2` eine niedrigere Präzedenz als der Unäroperator `OP1` haben, damit es als `a OP2 (OP1 b)` gruppiert wird. Zum Beispiel wäre das Folgende ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Weil `+` eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(a + yield) 1` werden — aber da `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generator-Funktionen ist, wäre dies ein Syntaxfehler. Glücklicherweise haben die meisten Unäroperatoren eine höhere Präzedenz als Binäroperatoren und leiden nicht unter diesem Fallstrick.

Wenn wir zwei Präfix-Unär-Operatoren haben:

```plain
OP1 OP2 a
```

Dann muss der Unäroperator näher am Operand, `OP2`, eine höhere Präzedenz als `OP1` haben, damit es als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es andersherum zu bekommen und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Weil [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(await yield) 1` führen, was auf ein Identifizierer `yield` wartet und somit ein Syntaxfehler ist. Ähnlich, wenn Sie `new !A;` haben, weil `!` eine niedrigere Präzedenz als `new` hat, würde es zu `(new !) A` werden, was offensichtlich ungültig ist. (Dieser Code sieht sowieso unsinnig aus, da `!A` immer ein boolescher Wert ist, keine Konstrukturfunktion.)

Für Nach-Unär-Operatoren (nämlich `++` und `--`) gelten dieselben Regeln. Glücklicherweise haben beide Operatoren eine höhere Präzedenz als jeder Binäroperator, sodass die Gruppierung immer so erfolgt, wie Sie es erwarten. Außerdem, weil `++` zu einem _Wert_ und nicht zu einer _Referenz_ evaluiert, können Sie auch nicht mehrere Inkremente miteinander verketten, wie Sie es in C tun könnten.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Operatorpräzedenz wird _rekursiv_ behandelt. Zum Beispiel, betrachten Sie diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlicher Präzedenz in absteigender Reihenfolge der Präzedenz.

1. Der `**`-Operator hat die höchste Präzedenz, also wird er zuerst gruppiert.
2. Um den `**`-Ausdruck herum hat er `*` rechts und `+` links. `*` hat eine höhere Präzedenz, also wird es zuerst gruppiert. `*` und `/` haben die gleiche Präzedenz, also gruppieren wir sie vorerst miteinander.
3. Um den in 2 gruppierten `*`/`/`-Ausdruck herum wird da `+` höher Präzedenz hat als `>>`, ersteres gruppiert.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/`-Gruppe werden sie, weil sie beide linksassoziativ sind, auf der linken Seite gruppiert.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass die Operatorpräzedenz und -assoziativität nur die Reihenfolge der _Operatoren_ (die implizite Gruppierung), aber nicht die Reihenfolge der _Operanden_ betrifft. Die Operanden werden immer von links nach rechts ausgewertet. Die höher-präzedenten Ausdrücke werden immer zuerst ausgewertet und ihre Ergebnisse dann entsprechend der Reihenfolge der Operatorpräzedenz zusammengesetzt.

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

Wenn Sie mit binären Bäumen vertraut sind, denken Sie daran als eine [Post-Order-Traversierung](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren korrekt gruppiert sind, würden die Binäroperatoren einen Binärbaum bilden. Die Bewertung beginnt bei der äußersten Gruppe – die den Operator mit der niedrigsten Präzedenz hat (`/` in diesem Fall). Der linke Operand dieses Operators wird zuerst ausgewertet, was aus höher-präzedenten Operatoren bestehen kann (wie ein Aufrufausdruck `echo("left", 4)`). Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher würden alle Blätter – die `echo()`-Aufrufe – von links nach rechts besucht, unabhängig von der Präzedenz der Operatoren, die sie miteinander verbinden.

## Kurzschluss

Im vorherigen Abschnitt sagten wir, "die höher-präzedenten Ausdrücke werden immer zuerst ausgewertet" — dies trifft im Allgemeinen zu, muss jedoch mit der Anerkennung des _Kurzschlusses_ ergänzt werden, bei dem ein Operand möglicherweise überhaupt nicht ausgewertet wird.

Kurzschluss ist ein Fachbegriff für bedingte Auswertung. Zum Beispiel wird im Ausdruck `a && (b + c)`, wenn `a` {{Glossary("falsy", "falsy")}} ist, der Unterausdruck `(b + c)` nicht einmal ausgewertet, obwohl er gruppiert ist und daher eine höhere Präzedenz als `&&` hat. Man könnte sagen, dass der logische Und-Operator (`&&`) "kurzgeschlossen" ist. Neben dem logischen Und sind andere kurzgeschlossene Operatoren logisches Oder (`||`), Nullish-Koaleszenz (`??`) und optionale Verkettung (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Beim Auswerten eines kurzgeschlossenen Operators wird der linke Operand immer ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten des Kurzschlusses ist in diesen Operatoren eingebaut. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob das tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, auch wenn das Ergebnis niemals etwas anderes als `NaN` sein würde.

Das vorherige Modell einer Post-Order-Traversierung bleibt bestehen. Allerdings entscheidet die Sprache nach dem Besuch des linken Teilbaums eines kurzgeschlossenen Operators, ob der rechte Operand ausgewertet werden muss. Falls nicht (zum Beispiel, weil der linke Operand von `||` bereits wahrheitsgemäß ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Teilbaum zu besuchen.

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

Nur `C()` wird ausgewertet, obwohl `&&` eine höhere Präzedenz hat. Das bedeutet nicht, dass `||` in diesem Fall eine höhere Präzedenz hat — es ist genau _weil_ `(B() && A())` eine höhere Präzedenz hat, die es dazu bringt, als Ganzes vernachlässigt zu werden. Wenn es umgestellt wird als:

```js-nolint
console.log(A() && C() || B());
// Logs:
// called A
// called B
// false
```

Dann würde der Kurzschlusseffekt von `&&` nur verhindern, dass `C()` ausgewertet wird, aber weil `A() && C()` als Ganzes `false` ist, würde `B()` dennoch ausgewertet.

Beachten Sie jedoch, dass Kurzschluss das endgültige Auswertungsergebnis nicht ändert. Es beeinflusst nur die Auswertung der _Operanden_, nicht wie _Operatoren_ gruppiert sind — wenn die Auswertung von Operanden keine Nebenwirkungen hat (zum Beispiel, Protokollierung in die Konsole, Zuweisung zu Variablen, Fehler werfen), wäre der Kurzschluss überhaupt nicht beobachtbar.

Die Zuweisungsgegenstücke dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls kurzgeschlossen. Sie sind so kurzgeschlossen, dass die Zuweisung überhaupt nicht stattfindet.

## Tabelle

Die folgende Tabelle listet Operatoren in der Reihenfolge von höchster Präzedenz (18) zu niedrigster Präzedenz (1) auf.

Mehrere allgemeine Anmerkungen zur Tabelle:

1. Nicht alle hier eingeschlossenen Syntaxen sind im strengen Sinne "Operatoren". Zum Beispiel werden Spread `...` und Pfeil `=>` normalerweise nicht als Operatoren angesehen. Wir haben sie jedoch dennoch aufgenommen, um zu zeigen, wie eng sie im Vergleich zu anderen Operatoren/Ausdrücken binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke schmaler erfordern als die von höher-präzedenten Operatoren erzeugten. Zum Beispiel muss die rechte Seite des Memberzugriffs `.` (Präzedenz 17) ein Identifikator anstelle eines gruppierten Ausdrucks sein. Die linke Seite des Pfeils `=>` (Präzedenz 2) muss eine Liste von Argumenten oder ein einzelner Identifikator und nicht irgendein zufälliger Ausdruck sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die breiter sind als die von höher-präzedenten Operatoren erzeugten. Zum Beispiel kann der in Klammern geschlossene Ausdruck der Klammernnotation `[ … ]` (Präzedenz 17) jeder Ausdruck sein, sogar durch Komma (Präzedenz 1) verbundene. Diese Operatoren agieren so, als wäre dieser Operand "automatisch gruppiert". In diesem Fall werden wir die Assoziativität auslassen.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Präzedenz</th>
      <th>Assoziativität</th>
      <th>Einzelne Operatoren</th>
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
      <td>{{jsxref("Operators/Property_accessors", "Memberzugriff", "#dot_notation", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "Optionale Verkettung", "", 1)}}<br><code>x?.y</code></td>
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
      <td>13: Exponentialrechnung</td>
      <td>von rechts nach links</td>
      <td>
        {{jsxref("Operators/Exponentiation", "Exponentialrechnung", "", 1)}}<br><code>x ** y</code>
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
      <td rowspan="2">3: Logisches ODER, Nullish-Koaleszenz</td>
      <td rowspan="2">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Logical_OR", "Logisches ODER", "", 1)}}<br><code>x || y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing", "Nullish-Coalescing-Operator", "", 1)}}<br><code>x ?? y</code>
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
        {{jsxref("Operators/Remainder_assignment", "Restszuweisung", "", 1)}}<br><code>x %= y</code>
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
        {{jsxref("Operators/Nullish_coalescing_assignment", "Nullish-Coalescing-Zuweisung", "", 1)}}<br><code>x ??= y</code>
      </td>
    </tr>
    <tr>
      <td>von rechts nach links</td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator">Bedingungsoperator (ternär)</a><br><code>x ? y : z</code>
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

Anmerkungen:

1. Der Operand kann jeder Ausdruck sein.
2. Die "rechte Seite" muss ein Identifikator sein.
3. Die "rechte Seite" kann jeder Ausdruck sein.
4. Die "rechte Seite" ist eine komma-separierte Liste von beliebigen Ausdrücken mit einer Präzedenz > 1 (d.h. keine Komma-Ausdrücke). Der Konstruktor eines `new`-Ausdrucks kann keine optionale Verkettung sein.
5. Der Operand muss ein gültiges Zuweisungsziel sein (Identifikator oder Memberzugriff). Seine Präzedenz bedeutet `new Foo++` ist `(new Foo)++` (ein Syntaxfehler) und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor).
6. Der Operand muss ein gültiges Zuweisungsziel sein (Identifikator oder Memberzugriff).
7. Der Operand kann kein Identifikator oder [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)-Zugriff sein.
8. Die linke Seite kann keine Präzedenz 14 haben.
9. Die Operanden dürfen kein logisches ODER `||` oder logischer UND `&&` Operator ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuweisungsziel sein (Identifikator oder Memberzugriff).
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelner Identifikator oder eine in Klammern gesetzte Parameterliste.
13. Nur innerhalb von Objektliteralen, Array-Literalen oder Argumentlisten gültig.

Die Präzedenz der Gruppen 17 und 16 kann etwas zweideutig sein. Hier sind einige Beispiele zur Klärung:

- Optionale Verkettung ist immer durch ihre jeweilige Syntax ohne Optionalität ersetzbar (abgesehen von einigen besonderen Fällen, in denen optionale Verkettung verboten ist). Zum Beispiel kann jedes Vorkommen von `a?.b` auch `a.b` akzeptieren und umgekehrt, und ähnlich für `a?.()`, `a()`, usw.
- Memberausdrücke und berechnete Memberausdrücke sind immer füreinander austauschbar.
- Aufrufausdrücke und `import()`-Ausdrücke sind immer füreinander austauschbar.
- Damit verbleiben vier Klassen von Ausdrücken: Memberzugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Memberzugriffs kann sein: ein Memberzugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Memberzugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Memberzugriff (`a.b()`), `new` mit Argumenten (`new a()()`), und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Memberzugriff (`new a.b`), `new` mit Argumenten (`new new a()`), und `new` ohne Argumente (`new new a`).
