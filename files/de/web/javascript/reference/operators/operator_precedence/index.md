---
title: Operatorpräzedenz
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **Operatorpräzedenz** bestimmt, wie Operatoren im Verhältnis zueinander geparst werden. Operatoren mit höherer Präzedenz werden zu Operanden von Operatoren mit niedrigerer Präzedenz.

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

Betrachten Sie einen Ausdruck, der durch die unten stehende Darstellung beschreibbar ist, wobei sowohl `OP1` als auch `OP2` Platzhalter für Operationen sind.

```plain
a OP1 b OP2 c
```

Die obige Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche davon die Sprache übernimmt, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Präzedenzebenen haben (siehe die Tabelle unten), geht der Operator mit der höheren _Präzedenz_ zuerst, und die Assoziativität spielt keine Rolle. Beachten Sie, wie Multiplikation eine höhere Präzedenz als Addition hat und zuerst ausgeführt wird, auch wenn Addition im Code zuerst geschrieben wird.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Bei Operatoren mit der gleichen Präzedenz werden diese durch _Assoziativität_ gruppiert. _Linksassoziativität_ (von links nach rechts) bedeutet, dass es als `(a OP1 b) OP2 c` interpretiert wird, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass es als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ, sodass Sie folgendes schreiben können:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies liegt daran, dass der Zuweisungsoperator den zugewiesenen Wert zurückgibt. Zuerst wird `b` auf 5 gesetzt. Dann wird auch `a` auf 5 gesetzt – den Rückgabewert von `b = 5`, also der rechte Operand der Zuweisung.

Ein weiteres Beispiel ist der eindeutige Exponentierungsoperator, der rechtsassoziativ ist, während andere arithmetische Operatoren linksassoziativ sind.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zuerst nach Präzedenz gruppiert und dann für benachbarte Operatoren mit gleicher Präzedenz nach Assoziativität. Beim Mischen von Division und Exponentiation kommt die Exponentierung immer vor der Division. Zum Beispiel ergibt `2 ** 3 / 3 ** 2` das Ergebnis 0.8888888888888888, da es dem Ausdruck `(2 ** 3) / (3 ** 2)` entspricht.

Für unäre Präfixoperatoren nehmen wir folgendes Muster an:

```plain
OP1 a OP2 b
```

wobei `OP1` ein unärer Präfixoperator und `OP2` ein binärer Operator ist. Wenn `OP1` eine höhere Präzedenz als `OP2` hat, würde er als `(OP1 a) OP2 b` gruppiert; andernfalls würde er als `OP1 (a OP2 b)` gruppiert.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Wenn der unäre Operator auf dem zweiten Operand liegt:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Präzedenz als der unäre Operator `OP1` haben, damit er als `a OP2 (OP1 b)` gruppiert wird. Zum Beispiel ist folgendes ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(a + yield) 1` werden – aber weil `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, wäre dies ein Syntaxfehler. Glücklicherweise haben die meisten unären Operatoren eine höhere Präzedenz als binäre Operatoren und leiden nicht unter diesem Problem.

Wenn wir zwei unäre Präfixoperatoren haben:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator, der näher am Operanden ist, `OP2`, eine höhere Präzedenz als `OP1` haben, damit er als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es andersherum zu bekommen und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(await yield) 1` werden, was darauf wartet, dass ein Bezeichner namens `yield` ausgewertet wird, und ein Syntaxfehler. Ebenso, wenn Sie `new !A;` haben, da `!` eine niedrigere Präzedenz als `new` hat, würde dies zu `(new !) A` werden, was offenkundig ungültig ist. (Dieser Code wäre sowieso unsinnig zu schreiben, da `!A` immer ein Boolean ergibt und keine Konstruktorfunktion.)

Für unäre Postfix-Operatoren (nämlich `++` und `--`) gelten die gleichen Regeln. Glücklicherweise haben beide Operatoren eine höhere Präzedenz als jeder binäre Operator, sodass die Gruppierung immer wie erwartet ist. Zudem ergibt `++` einen _Wert_ und keinen _Referenz_, sodass Sie keine mehrfachen Inkremente wie in C anketten können.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorpräzedenz wird _rekursiv_ behandelt. Betrachten Sie zum Beispiel diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlicher Präzedenz nach abnehmenden Präzedenzebenen.

1. Der `**`-Operator hat die höchste Präzedenz, also wird er zuerst gruppiert.
2. Um den `**`-Ausdruck herum hat er `*` auf der rechten Seite und `+` auf der linken. `*` hat eine höhere Präzedenz, also wird er zuerst gruppiert. `*` und `/` haben die gleiche Präzedenz, sodass sie zunächst zusammen gruppiert werden.
3. Um den in 2 gruppierten `*`/`/`-Ausdruck herum wird `+` zuerst gruppiert, da es eine höhere Präzedenz als `>>` hat.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/`-Gruppe, da sie beide linksassoziativ sind, würde der linke Operand gruppiert.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass die Operatorpräzedenz und Assoziativität nur die Reihenfolge der Auswertung von _Operatoren_ betrifft (die implizite Gruppierung), aber nicht die Reihenfolge der Auswertung von _Operanden_. Die Operanden werden immer von links nach rechts ausgewertet. Die höher-priorisierten Ausdrücke werden immer zuerst ausgewertet, und ihre Ergebnisse werden dann gemäß der Reihenfolge der Operatorpräzedenz zusammengesetzt.

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

Wenn Sie mit Binärbäumen vertraut sind, denken Sie daran als eine [Post-Order Traversion](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren korrekt gruppiert sind, würden die binären Operatoren einen Binärbaum bilden. Die Auswertung beginnt bei der äußersten Gruppe – das ist der Operator mit der niedrigsten Präzedenz (`/` in diesem Fall). Der linke Operand dieses Operators wird zuerst ausgewertet, was aus höher-priorisierten Operatoren (wie einem Aufrufausdruck `echo("left", 4)`) bestehen kann. Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher würden alle Blattknoten – die `echo()`-Aufrufe – unabhängig von der Präzedenz der diese verbindenden Operatoren von links nach rechts besucht werden.

## Short-Circuiting

Im vorherigen Abschnitt haben wir gesagt, "die höher-priorisierten Ausdrücke werden immer zuerst ausgewertet" – dies ist im Allgemeinen wahr, muss aber mit der Anerkennung des _Short-Circuiting_ ergänzt werden, bei dem ein Operand möglicherweise gar nicht ausgewertet wird.

Short-Circuiting ist ein Fachausdruck für bedingte Auswertung. Beispielsweise wird im Ausdruck `a && (b + c)` der Subausdruck `(b + c)` nicht einmal ausgewertet, wenn `a` {{Glossary("falsy", "falsy")}} ist, selbst wenn er gruppiert ist und daher eine höhere Präzedenz als `&&` hat. Wir könnten sagen, dass der logische UND-Operator (`&&`) "short-circuited" ist. Zusammen mit logischem UND sind andere short-circuiting Operatoren logisches ODER (`||`), Null-Koaleszenz (`??`) und optionales Chaining (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Bei der Auswertung eines short-circuiting Operators wird der linke Operand immer ausgewertet. Der rechte Operand wird nur dann ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten des Short-Circuiting ist in diesen Operatoren verankert. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob dies tatsächlich nützlich ist – zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, selbst wenn das Ergebnis nie etwas anderes als `NaN` wäre.

Das vorherige Modell einer Post-Order Traversion bleibt bestehen. Nachdem der linke Teilbaum eines short-circuiting Operators besucht wurde, entscheidet die Sprache, ob der rechte Operand ausgewertet werden muss. Falls nicht (z.B. weil der linke Operand von `||` bereits wahrheitsgemäß ist), wird das Ergebnis ohne Besuch des rechten Teilbaums direkt zurückgegeben.

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

Nur `C()` wird ausgewertet, obwohl `&&` eine höhere Präzedenz hat. Das bedeutet nicht, dass `||` in diesem Fall eine höhere Präzedenz hat – es ist genau _weil_ `(B() && A())` eine höhere Präzedenz hat, dass es als Ganzes vernachlässigt wird. Wenn es folgendermaßen neu angeordnet wird:

```js-nolint
console.log(A() && C() || B());
// Logs:
// called A
// called B
// false
```

Dann würde der short-circuiting Effekt von `&&` nur verhindern, dass `C()` ausgewertet wird, aber da `A() && C()` als Ganzes `false` ist, würde `B()` immer noch ausgewertet werden.

Beachten Sie jedoch, dass Short-Circuiting das endgültige Auswertungsergebnis nicht ändert. Es beeinflusst nur die Auswertung von _Operanden_, nicht wie _Operatoren_ gruppiert werden – wenn die Auswertung von Operanden keine Seiteneffekte hat (z.B. Konsolenausgabe, Zuweisungen an Variablen, Auslösen eines Fehlers), wäre Short-Circuiting überhaupt nicht beobachtbar.

Die Zuweisungsgegenstücke dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls short-circuiting. Sie sind auf eine Weise short-circuiting, dass die Zuweisung überhaupt nicht stattfindet.

## Tabelle

Die folgende Tabelle listet Operatoren in der Reihenfolge von höchster Präzedenz (18) zu niedrigster Präzedenz (1) auf.

Einige allgemeine Anmerkungen zur Tabelle:

1. Nicht alle hier enthaltenen Syntaxelemente sind im strengen Sinne „Operatoren“. Zum Beispiel werden Spread `...` und Pfeil `=>` normalerweise nicht als Operatoren angesehen. Wir haben sie jedoch aufgenommen, um zu zeigen, wie fest sie im Vergleich zu anderen Operatoren/Anweisungen binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die enger sind als diejenigen, die von Operatoren mit höherer Präzedenz erzeugt werden. Zum Beispiel muss die rechte Seite der Member-Zugriff `.` (Präzedenz 17) ein Bezeichner statt eines gruppierten Ausdrucks sein. Die linke Seite des Pfeils `=>` (Präzedenz 2) muss eine Argumentliste oder ein einzelner Bezeichner statt eines beliebigen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die breiter sind als diejenigen, die von Operatoren mit höherer Präzedenz erzeugt werden. Das in Klammern eingeschlossene Ausdruck des Klammerausdrucks `[ … ]` (Präzedenz 17) kann jeder Ausdruck sein, auch durch Komma (Präzedenz 1) verbundene. Diese Operatoren handeln so, als ob dieser Operand "automatisch gruppiert" wäre. In diesem Fall werden wir die Assoziativität weglassen.

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
      <td>{{jsxref("Operators/Property_accessors", "Member access", "#dot_notation", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "Optional chaining", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">n/a</td>
      <td>
        {{jsxref("Operators/Property_accessors", "Computed member access", "#bracket_notation", 1)}}<br><code>x[y]</code>
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
        {{jsxref("Operators/Increment", "Postfix-inkrement", "", 1)}}<br><code>x++</code>
      </td>
      <td rowspan="2">[5]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Postfix-dekrement", "", 1)}}<br><code>x--</code>
      </td>
    </tr>
    <tr>
      <td rowspan="10">14: Präfix-Operatoren</td>
      <td rowspan="10">n/a</td>
      <td>
        {{jsxref("Operators/Increment", "Präfix-inkrement", "", 1)}}<br><code>++x</code>
      </td>
      <td rowspan="2">[6]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Präfix-dekrement", "", 1)}}<br><code>--x</code>
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
      <td rowspan="3">10: Bitweiser Shift</td>
      <td rowspan="3">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Left_shift", "Linksshift", "", 1)}}<br><code>x &#x3C;&#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift", "Rechtsshift", "", 1)}}<br><code>x >> y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift", "Unsigned Rechtsshift", "", 1)}}<br><code>x >>> y</code>
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
      <td rowspan="2">3: Logisches ODER, Null-Koaleszenz</td>
      <td rowspan="2">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Logical_OR", "Logisches ODER", "", 1)}}<br><code>x || y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing", "Null-Koaleszenzoperator", "", 1)}}<br><code>x ?? y</code>
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
        {{jsxref("Operators/Left_shift_assignment", "Links-Shift-Zuweisung", "", 1)}}<br><code>x &#x3C;&#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift_assignment", "Rechts-Shift-Zuweisung", "", 1)}}<br><code>x >>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift_assignment", "Unsigned Rechts-Shift-Zuweisung", "", 1)}}<br><code>x >>>= y</code>
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
        {{jsxref("Operators/Nullish_coalescing_assignment", "Null-Koaleszenz-Zuweisung", "", 1)}}<br><code>x ??= y</code>
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

1. Der Operand kann ein beliebiger Ausdruck sein.
2. Die "rechte Seite" muss ein Bezeichner sein.
3. Die "rechte Seite" kann ein beliebiger Ausdruck sein.
4. Die "rechte Seite" ist eine durch Komma getrennte Liste von Ausdrücken mit Präzedenz > 1 (d.h. keine Kommaausdrücke). Der Konstruktor eines `new`-Ausdrucks kann keine optionale Verkettung sein.
5. Der Operand muss ein gültiges Ziel einer Zuweisung sein (Bezeichner oder Zugriff auf eine Eigenschaft). Seine Präzedenz bedeutet, `new Foo++` ist `(new Foo)++` (ein Syntaxfehler) und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor).
6. Der Operand muss ein gültiges Ziel einer Zuweisung sein (Bezeichner oder Zugriff auf eine Eigenschaft).
7. Der Operand kann kein Bezeichner oder ein Zugriff auf ein [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sein.
8. Die linke Seite kann keine Präzedenz 14 haben.
9. Die Operanden können kein logisches ODER `||` oder logisches UND `&&` Operator ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Ziel einer Zuweisung sein (Bezeichner oder Zugriff auf eine Eigenschaft).
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelner Bezeichner oder eine geklammerte Parameterliste.
13. Gültig nur innerhalb von Objektsyntaxen, Arraysyntaxen oder Argumentlisten.

Die Präzedenz der Gruppen 17 und 16 kann etwas unklar sein. Hier sind ein paar Beispiele zur Klärung:

- Optionales Chaining ist immer austauschbar mit seiner jeweiligen Syntax ohne Optionalität (mit Ausnahme einiger weniger Fälle, in denen optionales Chaining verboten ist). Zum Beispiel kann überall, wo `a?.b` akzeptiert wird, auch `a.b` akzeptiert werden und umgekehrt, und ähnlich für `a?.()`, `a()`, usw.
- Memberausdrücke und berechnete Memberausdrücke sind immer gegeneinander austauschbar.
- Aufrufausdrücke und `import()`-Ausdrücke sind immer gegeneinander austauschbar.
- Dies lässt vier Klassen von Ausdrücken: Memberzugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Memberzugriffs kann sein: ein Memberzugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Memberzugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Memberzugriff (`a.b()`), `new` mit Argumenten (`new a()()`) und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Memberzugriff (`new a.b`), `new` mit Argumenten (`new new a()`), und `new` ohne Argumente (`new new a`).
