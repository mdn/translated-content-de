---
title: Operatorenrangfolge
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

**Operatorenrangfolge** bestimmt, wie Operatoren in Bezug aufeinander analysiert werden. Operatoren mit höherer Rangfolge werden zu Operanden von Operatoren mit niedrigerer Rangfolge.

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

Betrachten Sie einen Ausdruck, der durch die untenstehende Darstellung beschreibbar ist, wobei sowohl `OP1` als auch `OP2` als Platzhalter für OP-eratoren dienen.

```plain
a OP1 b OP2 c
```

Die obige Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche der Sprache zu Grunde liegt, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Rangfolgestufen haben (siehe Tabelle unten), wird der Operator mit der höheren _Rangfolge_ zuerst verwendet und die Assoziativität spielt keine Rolle. Beachten Sie, dass Multiplikation eine höhere Rangfolge als Addition hat und zuerst ausgeführt wird, auch wenn Addition im Code zuerst geschrieben steht.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Innerhalb von Operatoren mit der gleichen Rangfolge gruppiert die Sprache sie nach _Assoziativität_. _Linksassoziativität_ (von links nach rechts) bedeutet, dass es als `(a OP1 b) OP2 c` interpretiert wird, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass es als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ, daher können Sie schreiben:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass sowohl `a` als auch `b` den Wert 5 erhalten. Dies liegt daran, dass der Zuweisungsoperator den Wert zurückgibt, der zugewiesen wird. Zuerst wird `b` auf 5 gesetzt. Dann wird auch `a` auf 5 gesetzt — der Rückgabewert von `b = 5`, also der rechte Operand der Zuweisung.

Ein weiteres Beispiel: Der einzigartige Potenzierungsoperator hat Rechtsassoziativität, während andere arithmetische Operatoren Linksassoziativität haben.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zunächst nach Rangfolge und dann, für benachbarte Operatoren mit der gleichen Rangfolge, nach Assoziativität gruppiert. Bei der Mischung von Division und Potenzierung erfolgt die Potenzierung immer vor der Division. Zum Beispiel: `2 ** 3 / 3 ** 2` ergibt 0.8888888888888888, weil es dasselbe ist wie `(2 ** 3) / (3 ** 2)`.

Für präfixe unäre Operatoren nehmen wir folgendes Muster an:

```plain
OP1 a OP2 b
```

wobei `OP1` ein präfixer unärer Operator und `OP2` ein binärer Operator ist. Wenn `OP1` eine höhere Rangfolge als `OP2` hat, wird er als `(OP1 a) OP2 b` gruppiert; sonst wäre es `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Wenn der unäre Operator beim zweiten Operanden ist:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Rangfolge als der unäre Operator `OP1` haben, damit er als `a OP2 (OP1 b)` gruppiert wird. Zum Beispiel ist das Folgende ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Weil `+` eine höhere Rangfolge als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(a + yield) 1` — aber, weil `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, wäre dies ein Syntaxfehler. Zum Glück haben die meisten unären Operatoren eine höhere Rangfolge als binäre Operatoren und leiden nicht unter diesem Problem.

Wenn wir zwei präfixe unäre Operatoren haben:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator, der näher am Operanden ist, `OP2`, eine höhere Rangfolge als `OP1` haben, damit er als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, dass es andersherum angeordnet wird und mit `(OP1 OP2) a` endet:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Rangfolge als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(await yield) 1` — was auf eine Wartezeit für einen Identifier namens `yield` hinausläuft und einen Syntaxfehler darstellt. Ebenso, wenn Sie `new !A;` haben, da `!` eine niedrigere Rangfolge als `new` hat, wird dies zu `(new !) A`, was offensichtlich ungültig ist. (Dieser Code erscheint ohnehin sinnlos zu schreiben, da `!A` immer einen Boolean liefert, keine Konstruktionsfunktion.)

Für postfixe unäre Operatoren (nämlich `++` und `--`) gelten die gleichen Regeln. Zum Glück haben beide Operatoren eine höhere Rangfolge als jeder binäre Operator, so dass die Gruppierung stets wie erwartet ist. Zudem, weil `++` einen _Wert_ und keinen _Verweis_ ergibt, kann man keine Mehrfach-Inkremente zusammen wie in C verketten.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorrangfolge wird _rekursiv_ gehandhabt. Betrachten wir zum Beispiel diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit verschiedenen Rangfolgen nach abnehmenden Rangfolgestufen.

1. Der `**` Operator hat die höchste Rangfolge, also wird er zuerst gruppiert.
2. Betrachtet man den Bereich um den `**`-Ausdruck, hat er `*` auf der rechten und `+` auf der linken Seite. `*` hat eine höhere Rangfolge, also wird er zuerst gruppiert. `*` und `/` haben die gleiche Rangfolge, daher gruppieren wir sie zunächst zusammen.
3. Betrachtet man den Bereich um den `*`/`/` Ausdruck, der in 2 gruppiert wurde: Da `+` eine höhere Rangfolge als `>>` hat, wird zuerst das `+` gruppiert.

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

Beachten Sie, dass Operatorrangfolge und Assoziativität nur die Reihenfolge der Auswertung von _Operatoren_ (die implizite Gruppierung) beeinflussen, nicht jedoch die Reihenfolge der Auswertung von _Operanden_. Die Operanden werden immer von links nach rechts ausgewertet. Die höherwertigen Ausdrücke werden immer zuerst ausgewertet, und ihre Ergebnisse werden dann gemäß der Operatorrangfolge zusammengesetzt.

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

Wenn Sie mit binären Bäumen vertraut sind, denken Sie daran als eine [nachträgliche Traversierung](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren korrekt gruppiert wurden, würden die binären Operatoren einen binären Baum bilden. Die Auswertung beginnt mit der äußersten Gruppe – die der Operator mit der niedrigsten Rangfolge ist (`/` in diesem Fall). Der linke Operand dieses Operators wird zuerst ausgewertet, was aus höher-priorisierten Operatoren bestehen kann (wie ein Aufrufausdruck `echo("left", 4)`). Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher werden alle Blätter – die `echo()`-Aufrufe – von links nach rechts besucht, ungeachtet der Rangfolge der Operatoren, die sie verbinden.

## Kurzschlussverhalten

Im vorherigen Abschnitt sagten wir: "die höherwertigen Ausdrücke werden immer zuerst ausgewertet" – das ist im Allgemeinen zutreffend, muss jedoch um das Wissen über das _Kurzschlussverhalten_ ergänzt werden, bei dem ein Operand unter Umständen gar nicht ausgewertet wird.

Kurzschlussverhalten ist ein Fachbegriff für bedingte Auswertung. Zum Beispiel, im Ausdruck `a && (b + c)`, wenn `a` {{Glossary("falsy", "Falsy")}} ist, wird der Teilausdruck `(b + c)` gar nicht ausgewertet, auch wenn er gruppiert ist und folglich eine höhere Rangfolge als `&&` aufweist. Man könnte sagen, dass der logische Und-Operator (`&&`) "kurzgeschlossen" ist. Neben dem logischen Und sind andere kurzgeschlossene Operatoren der logische Oder (`||`), der nullish Koaleszenzoperator (`??`) und Optional Chaining (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Bei der Auswertung eines kurzgeschlossenen Operators wird der linke Operand immer ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten des Kurzschlussverhaltens ist in diesen Operatoren eingebaut. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob das tatsächlich nützlich ist – zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, auch wenn das Ergebnis nie etwas anderes als `NaN` sein würde.

Das vorherige Modell einer nachträglichen Traversierung bleibt bestehen. Wird jedoch der linke Teilbaum eines kurzgeschlossenen Operators besucht, entscheidet die Sprache, ob der rechte Operand ausgewertet werden muss. Falls nicht (z. B. weil der linke Operand von `||` bereits wahr ist), wird das Ergebnis direkt ohne Besuch des rechten Teilbaums zurückgegeben.

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

Es wird nur `C()` ausgewertet, obwohl `&&` eine höhere Rangfolge hat. Das bedeutet nicht, dass `||` in diesem Fall eine höhere Rangfolge hat — es ist genau _weil_ `(B() && A())` eine höhere Rangfolge hat, dass es als Ganzes vernachlässigt wird. Wird es folgendermaßen umgestellt:

```js-nolint
console.log(A() && C() || B());
// Logs:
// called A
// called B
// false
```

Dann würde der Kurzschluss-Effekt von `&&` nur verhindern, dass `C()` ausgewertet wird, aber weil `A() && C()` insgesamt `false` ist, würde `B()` dennoch ausgewertet werden.

Beachten Sie jedoch, dass das Kurzschlussverhalten das endgültige Auswertungsergebnis nicht verändert. Es beeinflusst nur die Auswertung von _Operanden_, nicht die Gruppierung von _Operatoren_ — wenn die Auswertung von Operanden keine Seiteneffekte hat (zum Beispiel, eine Ausgabe auf der Konsole, das Zuweisen zu Variablen, das Auslösen eines Fehlers), wäre das Kurzschlussverhalten überhaupt nicht wahrnehmbar.

Die Zuweisungsgegenstücke dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls kurzgeschlossen. Sie sind so kurzgeschlossen, dass die Zuweisung überhaupt nicht stattfindet.

## Tabelle

Die folgende Tabelle listet Operatoren in der Reihenfolge von der höchsten Rangfolge (18) zur niedrigsten Rangfolge (1) auf.

Einige allgemeine Anmerkungen zur Tabelle:

1. Nicht alle hier enthaltenen Syntaxe sind im strengen Sinne "Operatoren". Zum Beispiel, der Spread-Operator `...` und der Pfeil-Operator `=>` gelten typischerweise nicht als Operatoren. Wir haben sie dennoch aufgenommen, um zu zeigen, wie eng sie im Vergleich zu anderen Operatoren/Ausdrücken binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die enger als die von höher-rangigen Operatoren erzeugten sind. Zum Beispiel muss die rechte Seite des Memberzugriffs `.` (Rangfolge 17) ein Identifier anstelle eines gruppierten Ausdrucks sein. Die linke Seite des Pfeils `=>` (Rangfolge 2) muss eine Argumentenliste oder ein einzelner Identifier anstelle eines beliebigen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die breitere Ausdrücke als die von höher-rangigen Operatoren erzeugten akzeptieren. Zum Beispiel kann der einschließende Ausdruck der Klammernotation `[ … ]` (Rangfolge 17) jeder Ausdruck sein, selbst durch Komma (Rangfolge 1) verbundene. Diese Operatoren agieren, als ob dieser Operand "automatisch gruppiert" wird. In diesem Fall verzichten wir auf die Assoziativität.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Rangfolge</th>
      <th>Assoziativität</th>
      <th>Einzelne Operatoren</th>
      <th>Anmerkungen</th>
    </tr>
    <tr>
      <td>18: Gruppierung</td>
      <td>n/a</td>
      <td>{{jsxref("Operators/Grouping", "Gruppierung", "", 1)}}<br><code>(x)</code></td>
      <td>[1]</td>
    </tr>
    <tr>
      <td rowspan="6">17: Zugriff und Aufruf</td>
      <td rowspan="2">
        von links nach rechts
      </td>
      <td>{{jsxref("Operators/Property_accessors", "Mitgliedszugriff", "#dot_notation", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "Optional Chaining", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">n/a</td>
      <td>
        {{jsxref("Operators/Property_accessors", "Berechneter Mitgliedszugriff", "#bracket_notation", 1)}}<br><code>x[y]</code>
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
      <td>13: Potenzierung</td>
      <td>von rechts nach links</td>
      <td>
        {{jsxref("Operators/Exponentiation", "Potenzierung", "", 1)}}<br><code>x ** y</code>
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
      <td rowspan="3">10: Bitweise Verschiebung</td>
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
        {{jsxref("Operators/Unsigned_right_shift", "Unsigned-Rechtsverschiebung", "", 1)}}<br><code>x >>> y</code>
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
      <td rowspan="2">3: Logisches ODER, Nullish-Koaleszenz</td>
      <td rowspan="2">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Logical_OR", "Logisches ODER", "", 1)}}<br><code>x || y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing", "Nullish-Koaleszenzoperator", "", 1)}}<br><code>x ?? y</code>
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
        {{jsxref("Operators/Unsigned_right_shift_assignment", "Unsigned-Rechtsverschiebungszuweisung", "", 1)}}<br><code>x >>>= y</code>
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
        {{jsxref("Operators/Nullish_coalescing_assignment", "Nullish-Koaleszenzzuweisung", "", 1)}}<br><code>x ??= y</code>
      </td>
    </tr>
    <tr>
      <td>von rechts nach links</td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator">Konditionaler (ternärer) Operator</a><br><code>x ? y : z</code>
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
2. Die "rechte Seite" muss ein Identifier sein.
3. Die "rechte Seite" kann jeder Ausdruck sein.
4. Die "rechte Seite" ist eine durch Komma getrennte Liste von Ausdrücken mit Rangfolge > 1 (d.h. keine Kommaausdrücke). Der Konstruktor eines `new`-Ausdrucks kann keine optionale Kette sein.
5. Der Operand muss ein gültiges Zuweisungsziel sein (Identifier oder Zugriff auf eine Eigenschaft). Seine Rangfolge bedeutet, dass `new Foo++` zu `(new Foo)++` wird (ein Syntaxfehler) und nicht zu `new (Foo++)` (ein Typfehler: (Foo++) ist keine Konstruktorfunktion).
6. Der Operand muss ein gültiges Zuweisungsziel sein (Identifier oder Zugriff auf eine Eigenschaft).
7. Der Operand kann kein Identifier oder ein Zugriff auf eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) sein.
8. Die linke Seite kann keine Rangfolge von 14 haben.
9. Die Operanden dürfen keine logischen ODER `||` oder logischen UND `&&` Operatoren ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuweisungsziel sein (Identifier oder Zugriff auf eine Eigenschaft).
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelner Identifier oder eine in Klammern stehende Parameterliste.
13. Nur innerhalb von Objekt-Literalen, Array-Literalen oder Argumentlisten gültig.

Die Rangfolge der Gruppen 17 und 16 kann etwas zweideutig sein. Hier sind einige Beispiele zur Klärung.

- Optionales Chaining kann stets für seine jeweilige ohne Optionalität ausgetauscht werden (abgesehen von einigen besonderen Fällen, in denen Optional Chaining verboten ist). Zum Beispiel akzeptiert jeder Ort, der `a?.b` akzeptiert, auch `a.b` und umgekehrt, ebenso für `a?.()`, `a()`, usw.
- Member-Ausdrücke und berechnete Member-Ausdrücke sind stets für einander austauschbar.
- Aufruf-Ausdrücke und `import()`-Ausdrücke sind stets für einander austauschbar.
- Dies hinterlässt vier Klassen von Ausdrücken: Mitgliedszugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Mitgliedszugriffs kann sein: ein Mitgliedszugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Mitgliedszugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Mitgliedszugriff (`a.b()`), `new` mit Argumenten (`new a()()`) und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Mitgliedszugriff (`new a.b`), `new` mit Argumenten (`new new a()`) und `new` ohne Argumente (`new new a`).
