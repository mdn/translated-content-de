---
title: Operatorpräzedenz
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: acfa52efa2052d17bd5aaad3b63b7651b0316904
---

**Operatorpräzedenz** bestimmt, wie Operatoren im Verhältnis zueinander geparst werden. Operatoren mit höherer Präzedenz werden zu den Operanden von Operatoren mit niedrigerer Präzedenz.

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

Betrachten Sie einen Ausdruck, der durch die untenstehende Darstellung beschreibbar ist, bei der sowohl `OP1` als auch `OP2` Platzhalter für Operatoren sind.

```plain
a OP1 b OP2 c
```

Die obenstehende Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche von ihnen die Sprache zu übernehmen entscheidet, hängt von der Identität von `OP1` und `OP2` ab.

Haben `OP1` und `OP2` unterschiedliche Präzedenzstufen (siehe Tabelle unten), geht der Operator mit der höheren _Präzedenz_ als erster vor, und Assoziativität spielt keine Rolle. Beachten Sie, wie Multiplikation eine höhere Präzedenz hat als Addition und zuerst ausgeführt wird, obwohl Addition im Code zuerst geschrieben wird.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Innerhalb von Operatoren mit derselben Präzedenz gruppiert die Sprache diese nach _Assoziativität_. _Linksassoziativität_ (von links nach rechts) bedeutet, dass es als `(a OP1 b) OP2 c` interpretiert wird, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass es als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ, so dass Sie schreiben können:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies liegt daran, dass der Zuweisungsoperator den zugewiesenen Wert zurückgibt. Zuerst wird `b` auf 5 gesetzt. Dann wird `a` ebenfalls auf 5 gesetzt — der Rückgabewert von `b = 5`, alias rechter Operand der Zuweisung.

Ein weiteres Beispiel ist der einzigartige Exponentialoperator, der rechtsassoziativ ist, während andere arithmetische Operatoren linksassoziativ sind.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zuerst nach Präzedenz und dann, für benachbarte Operatoren mit derselben Präzedenz, nach Assoziativität gruppiert. Werden Division und Exponentiation gemischt, kommt die Exponentiation immer vor der Division. Beispielsweise ergibt `2 ** 3 / 3 ** 2` 0,8888888888888888, weil es dasselbe ist wie `(2 ** 3) / (3 ** 2)`.

Für präfixe unäre Operatoren nehmen wir folgendes Muster an:

```plain
OP1 a OP2 b
```

wobei `OP1` ein präfixer unärer Operator und `OP2` ein binärer Operator ist. Hat `OP1` eine höhere Präzedenz als `OP2`, wird es als `(OP1 a) OP2 b` gruppiert; andernfalls als `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Befindet sich der unäre Operator auf dem zweiten Operanden:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Präzedenz haben als der unäre Operator `OP1`, damit es als `a OP2 (OP1 b)` gruppiert wird. Beispielsweise ist Folgendes ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Präzedenz hat als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield), würde dies zu `(a + yield) 1` werden — aber da `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, wäre dies ein Syntaxfehler. Glücklicherweise haben die meisten unären Operatoren eine höhere Präzedenz als binäre Operatoren und leiden nicht unter diesem Stolperstein.

Haben wir zwei präfixe unäre Operatoren:

```plain
OP1 OP2 a
```

Dann muss der unäre Operator, der näher am Operanden liegt, `OP2`, eine höhere Präzedenz haben als `OP1`, damit es als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es anders herum zu bekommen und bei `(OP1 OP2) a` zu landen:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Präzedenz als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(await yield) 1`, was bedeutet, auf einen Bezeichner namens `yield` zu warten, was ein Syntaxfehler ist. Ähnlich, wenn Sie `new !A;` haben, da `!` eine niedrigere Präzedenz hat als `new`, würde dies zu `(new !) A`, was offensichtlich ungültig ist. (Dieser Code scheint ohnehin unsinnig zu sein, da `!A` immer einen booleschen Wert liefert, keine Konstrukturfunktion.)

Für postfixe unäre Operatoren (nämlich `++` und `--`) gelten dieselben Regeln. Glücklicherweise haben beide Operatoren eine höhere Präzedenz als jeder binäre Operator, so dass die Gruppierung immer so ist, wie Sie es erwarten würden. Da `++` zudem einen _Wert_ und keinen _Verweis_ ergibt, können Sie auch keine mehrfachen Inkremente zusammenketten, wie Sie es in C tun könnten.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorpräzedenz wird _rekursiv_ behandelt. Beispielsweise betrachten Sie diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlicher Präzedenz nach absteigenden Präzedenzstufen.

1. Der `**`-Operator hat die höchste Präzedenz, daher wird er zuerst gruppiert.
2. In der Nähe des `**`-Ausdrucks hat es `*` rechts und `+` links. `*` hat eine höhere Präzedenz, daher wird es zuerst gruppiert. `*` und `/` haben die gleiche Präzedenz, also gruppieren wir sie vorerst zusammen.
3. In der Nähe des in 2 gruppierten `*`/`/`-Ausdrucks wird, da `+` eine höhere Präzedenz als `>>` hat, ersteres gruppiert.

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

Beachten Sie, dass Operatorpräzedenz und Assoziativität nur die Reihenfolge der Bewertung von _Operatoren_ (die implizite Gruppierung) beeinflussen, nicht aber die Reihenfolge der Bewertung von _Operanden_. Die Operanden werden immer von links nach rechts ausgewertet. Die Ausdrücke mit höherer Präzedenz werden immer zuerst ausgewertet, und ihre Ergebnisse werden dann entsprechend der Reihenfolge der Operatorpräzedenz zusammengesetzt.

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

Wenn Sie mit binären Bäumen vertraut sind, denken Sie daran wie an eine [post-order Traversierung](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren ordnungsgemäß gruppiert wurden, würden die binären Operatoren einen binären Baum bilden. Die Auswertung beginnt mit der äußersten Gruppe — das ist der Operator mit der niedrigsten Präzedenz (`/` in diesem Fall). Der linke Operand dieses Operators wird zuerst ausgewertet, was aus Operatoren mit höherer Präzedenz bestehen kann (wie ein Aufrufausdruck `echo("left", 4)`). Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher würden alle Blattknoten — die `echo()`-Aufrufe — von links nach rechts besucht werden, unabhängig von der Präzedenz der sie verbindenden Operatoren.

## Short-Circuiting

Im vorherigen Abschnitt sagten wir "Die Ausdrücke mit höherer Präzedenz werden immer zuerst ausgewertet" — dies ist im Allgemeinen wahr, muss jedoch mit dem Hinweis auf _Short-Circuiting_ ergänzt werden, bei dem ein Operand möglicherweise überhaupt nicht ausgewertet wird.

Short-Circuiting ist ein Fachbegriff für bedingte Auswertung. Beispielsweise wird im Ausdruck `a && (b + c)`, wenn `a` {{Glossary("falsy", "falsy")}} ist, der Unterausdruck `(b + c)` nicht einmal ausgewertet, auch wenn er gruppiert ist und somit eine höhere Präzedenz als `&&` hat. Wir könnten sagen, dass der logische UND-Operator (`&&`) "verkürzt" ist. Neben dem logischen UND gehören zu den verkürzten Operatoren auch logisches ODER (`||`), Nullish-Koaleszenz (`??`) und optionales Chaining (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Beim Auswerten eines verkürzten Operators wird der linke Operand immer ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten von Short-Circuiting ist in diese Operatoren eingebaut. Bei anderen Operatoren würden _immer_ beide Operanden ausgewertet, unabhängig davon, ob das tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, selbst wenn das Ergebnis niemals etwas anderes als `NaN` wäre.

Das vorherige Modell einer post-order Traversierung bleibt bestehen. Nachdem jedoch der linke Teilbaum eines verkürzten Operators besucht wurde, entscheidet die Sprache, ob der rechte Operand ausgewertet werden muss. Wenn nicht (zum Beispiel, weil der linke Operand von `||` bereits wahrheitsgemäß ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Teilbaum zu besuchen.

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

Nur `C()` wird ausgewertet, obwohl `&&` eine höhere Präzedenz hat. Dies bedeutet nicht, dass `||` in diesem Fall eine höhere Präzedenz hat — genau _weil_ `(B() && A())` eine höhere Präzedenz hat, wird es als Ganzes vernachlässigt. Wenn es umgestellt wird als:

```js-nolint
console.log(A() && B() || C());
// Logs:
// called A
// called C
// true
```

Dann würde der Short-Circuiting-Effekt von `&&` nur verhindern, dass `B()` ausgewertet wird, aber da `A() && B()` als Ganzes `false` ist, würde `C()` dennoch ausgewertet.

Beachten Sie jedoch, dass Short-Circuiting das endgültige Bewertungsergebnis nicht ändert. Es beeinflusst nur die Bewertung der _Operanden_, nicht, wie _Operatoren_ gruppiert werden — wenn die Bewertung der Operanden keine Seiteneffekte hat (zum Beispiel Konsolenausgaben, Zuweisungen zu Variablen, das Werfen eines Fehlers), wäre Short-Circuiting überhaupt nicht beobachtbar.

Auch die Zuweisungsvariante dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind verkürzt. Sie sind so verkürzt, dass die Zuweisung überhaupt nicht erfolgt.

## Tabelle

Die folgende Tabelle listet die Operatoren in der Reihenfolge von der höchsten Präzedenz (18) bis zur niedrigsten Präzedenz (1) auf.

Einige allgemeine Anmerkungen zur Tabelle:

1. Nicht alle hier enthaltenen Syntaxen sind im strengen Sinne "Operatoren". Zum Beispiel werden Spread `...` und Pfeil `=>` typischerweise nicht als Operatoren angesehen. Wir haben sie jedoch dennoch aufgenommen, um zu zeigen, wie fest sie im Vergleich zu anderen Operatoren/Ausdrücken binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die enger sind als die, die von Operatoren mit höherer Präzedenz produziert werden. Zum Beispiel muss die rechte Seite des Memberzugriffs `.` (Präzedenz 17) ein Bezeichner anstelle eines gruppierten Ausdrucks sein. Die linke Seite des Pfeils `=>` (Präzedenz 2) muss eine Argumentliste oder ein einzelner Bezeichner anstelle eines zufälligen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die weiter sind als die, die von Operatoren mit höherer Präzedenz produziert werden. Zum Beispiel kann der klammernverschlossene Ausdruck der Klammernotation `[ … ]` (Präzedenz 17) jeder Ausdruck sein, selbst durch Komma (Präzedenz 1) verbundene. Diese Operatoren wirken so, als wäre dieser Operand "automatisch gruppiert". In diesem Fall werden wir die Assoziativität weglassen.

| Präzedenz                                         | Assoziativität                                                                                                                         | Einzelne Operatoren                                                                                                        | Anmerkungen       |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------- |
| 18: Gruppierung                                   | n/a                                                                                                                                    | {{jsxref("Operators/Grouping", "Grouping", "", 1)}}<br><code>(x)</code>                                                    | [1]               |
| rowspan="6" 17: Zugriff und Aufruf                | rowspan="2" left-to-right                                                                                                              | {{jsxref("Operators/Property_accessors", "Member access", "#dot_notation", 1)}}<br><code>x.y</code>                        | rowspan="2" [2]   |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Optional_chaining", "Optional chaining", "", 1)}}<br><code>x?.y</code>                                 |
|                                                   | rowspan="4" n/a                                                                                                                        | {{jsxref("Operators/Property_accessors", "Computed member access", "#bracket_notation", 1)}}<br><code>x[y]</code>          | [3]               |
|                                                   |                                                                                                                                        | {{jsxref("Operators/new", "new")}} mit Argumentliste<br><code>new x(y)</code>                                              | rowspan="3" [4]   |
|                                                   |                                                                                                                                        | <a href="/de/docs/Web/JavaScript/Guide/Functions">Funktionsaufruf</a><br><code>x(y)</code>                                 |
|                                                   |                                                                                                                                        | {{jsxref("Operators/import", "import(x)")}}                                                                                |
| 16: new                                           | n/a                                                                                                                                    | {{jsxref("Operators/new", "new")}} ohne Argumentliste<br><code>new x</code>                                                |
| rowspan="2" 15: postfix) Operatoren               | rowspan="2" n/a                                                                                                                        | {{jsxref("Operators/Increment", "Postfix increment", "", 1)}}<br><code>x++</code>                                          | rowspan="2" [5]   |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Decrement", "Postfix decrement", "", 1)}}<br><code>x--</code>                                          |
| rowspan="10" 14: Präfix) Operatoren               | rowspan="10" n/a                                                                                                                       | {{jsxref("Operators/Increment", "Prefix increment", "", 1)}}<br><code>++x</code>                                           | rowspan="2" [6]   |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Decrement", "Prefix decrement", "", 1)}}<br><code>--x</code>                                           |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Logical_NOT", "Logical NOT", "", 1)}}<br><code>!x</code>                                               |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Bitwise_NOT", "Bitwise NOT", "", 1)}}<br><code>~x</code>                                               |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Unary_plus", "Unary plus", "", 1)}}<br><code>+x</code>                                                 |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Unary_negation", "Unary negation", "", 1)}}<br><code>-x</code>                                         |
|                                                   |                                                                                                                                        | {{jsxref("Operators/typeof", "typeof x")}}                                                                                 |
|                                                   |                                                                                                                                        | {{jsxref("Operators/void", "void x")}}                                                                                     |
|                                                   |                                                                                                                                        | {{jsxref("Operators/delete", "delete x")}}                                                                                 | [7]               |
|                                                   |                                                                                                                                        | {{jsxref("Operators/await", "await x")}}                                                                                   |
| 13: Exponential                                   | right-to-left                                                                                                                          | {{jsxref("Operators/Exponentiation", "Exponentiation", "", 1)}}<br><code>x \*\* y</code>                                   | [8]               |
| rowspan="3" 12: Multiplikationsoperatoren         | rowspan="3" left-to-right                                                                                                              | {{jsxref("Operators/Multiplication", "Multiplication", "", 1)}}<br><code>x \* y</code>                                     |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Division", "Division", "", 1)}}<br><code>x / y</code>                                                  |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Remainder", "Remainder", "", 1)}}<br><code>x % y</code>                                                |
| rowspan="2" 11: Additionsoperatoren               | rowspan="2" left-to-right                                                                                                              | {{jsxref("Operators/Addition", "Addition", "", 1)}}<br><code>x + y</code>                                                  |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Subtraction", "Subtraction", "", 1)}}<br><code>x - y</code>                                            |
| rowspan="3" 10: Bitweise Verschiebung             | rowspan="3" left-to-right                                                                                                              | {{jsxref("Operators/Left_shift", "Left shift", "", 1)}}<br><code>x &#x3C;&#x3C; y</code>                                   |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Right_shift", "Right shift", "", 1)}}<br><code>x >> y</code>                                           |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Unsigned_right_shift", "Unsigned right shift", "", 1)}}<br><code>x >>> y</code>                        |
| rowspan="6" 9: Relationale Operatoren             | rowspan="6" left-to-right                                                                                                              | {{jsxref("Operators/Less_than", "Less than", "", 1)}}<br><code>x &#x3C; y</code>                                           |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Less_than_or_equal", "Less than or equal", "", 1)}}<br><code>x &#x3C;= y</code>                        |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Greater_than", "Greater than", "", 1)}}<br><code>x > y</code>                                          |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Greater_than_or_equal", "Greater than or equal", "", 1)}}<br><code>x >= y</code>                       |
|                                                   | {{jsxref("Operators/in", "x in y")}}                                                                                                   |
|                                                   | {{jsxref("Operators/instanceof", "x instanceof y")}}                                                                                   |
| rowspan="4" 8: Gleichheitsoperatoren              | rowspan="4" left-to-right                                                                                                              | {{jsxref("Operators/Equality", "Equality", "", 1)}}<br><code>x == y</code>                                                 |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Inequality", "Inequality", "", 1)}}<br><code>x != y</code>                                             |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Strict_equality", "Strict equality", "", 1)}}<br><code>x === y</code>                                  |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Strict_inequality", "Strict inequality", "", 1)}}<br><code>x !== y</code>                              |
| 7: Bitweise UND                                   | left-to-right                                                                                                                          | {{jsxref("Operators/Bitwise_AND", "Bitwise AND", "", 1)}}<br><code>x &#x26; y</code>                                       |
| 6: Bitweise XOR                                   | left-to-right                                                                                                                          | {{jsxref("Operators/Bitwise_XOR", "Bitwise XOR", "", 1)}}<br><code>x ^ y</code>                                            |
| 5: Bitweise ODER                                  | left-to-right                                                                                                                          | {{jsxref("Operators/Bitwise_OR", "Bitwise OR", "", 1)}}<br><code>x                                                         | y</code>          |
| 4: Logisches UND                                  | left-to-right                                                                                                                          | {{jsxref("Operators/Logical_AND", "Logical AND", "", 1)}}<br><code>x &#x26;&#x26; y</code>                                 |
| rowspan="2" 3: Logisches ODER, Nullish-Koaleszenz | rowspan="2" left-to-right                                                                                                              | {{jsxref("Operators/Logical_OR", "Logical OR", "", 1)}}<br><code>x                                                         |                   | y</code>   |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Nullish_coalescing", "Nullish coalescing operator", "", 1)}}<br><code>x ?? y</code>                    | [9]               |
| rowspan="21" 2: Zuweisung und Verschiedenes       | rowspan="16" right-to-left                                                                                                             | {{jsxref("Operators/Assignment", "Assignment", "", 1)}}<br><code>x = y</code>                                              | rowspan="16" [10] |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Addition_assignment", "Addition assignment", "", 1)}}<br><code>x += y</code>                           |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Subtraction_assignment", "Subtraction assignment", "", 1)}}<br><code>x -= y</code>                     |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Exponentiation_assignment", "Exponentiation assignment", "", 1)}}<br><code>x \*\*= y</code>            |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Multiplication_assignment", "Multiplication assignment", "", 1)}}<br><code>x \*= y</code>              |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Division_assignment", "Division assignment", "", 1)}}<br><code>x /= y</code>                           |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Remainder_assignment", "Remainder assignment", "", 1)}}<br><code>x %= y</code>                         |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Left_shift_assignment", "Left shift assignment", "", 1)}}<br><code>x &#x3C;&#x3C;= y</code>            |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Right_shift_assignment", "Right shift assignment", "", 1)}}<br><code>x >>= y</code>                    |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Unsigned_right_shift_assignment", "Unsigned right shift assignment", "", 1)}}<br><code>x >>>= y</code> |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Bitwise_AND_assignment", "Bitwise AND assignment", "", 1)}}<br><code>x &#x26;= y</code>                |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Bitwise_XOR_assignment", "Bitwise XOR assignment", "", 1)}}<br><code>x ^= y</code>                     |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Bitwise_OR_assignment", "Bitwise OR assignment", "", 1)}}<br><code>x                                   | = y</code>        |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Logical_AND_assignment", "Logical AND assignment", "", 1)}}<br><code>x &#x26;&#x26;= y</code>          |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Logical_OR_assignment", "Logical OR assignment", "", 1)}}<br><code>x                                   |                   | = y</code> |
|                                                   |                                                                                                                                        | {{jsxref("Operators/Nullish_coalescing_assignment", "Nullish coalescing assignment", "", 1)}}<br><code>x ??= y</code>      |
| right-to-left                                     | <a href="/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator">Bedingter (ternärer) Operator</a><br><code>x ? y : z</code> | [11]                                                                                                                       |
| right-to-left                                     | <a href="/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Pfeil</a><br><code>x => y</code>                                 | [12]                                                                                                                       |
| rowspan="3" n/a                                   | {{jsxref("Operators/yield", "yield x")}}                                                                                               |
|                                                   | {{jsxref("Operators/yield*", "yield* x")}}                                                                                             |
|                                                   | <a href="/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax">Spread</a><br><code>...x</code>                                    | [13]                                                                                                                       |
| 1: Komma                                          | left-to-right                                                                                                                          | {{jsxref("Operators/Comma_Operator", "Comma operator", "", 1)}}<br><code>x, y</code>                                       |

Anmerkungen:

1. Der Operand kann jeder Ausdruck sein.
2. Die "rechte Seite" muss ein Bezeichner sein.
3. Die "rechte Seite" kann jeder Ausdruck sein.
4. Die "rechte Seite" ist eine kommagetrennte Liste von Ausdrücken mit einer Präzedenz > 1 (d.h. keine Komma-Ausdrücke). Der Konstruktor eines `new`-Ausdrucks kann keine optionale Kette sein.
5. Der Operand muss ein gültiges Zuweisungsziel (Bezeichner oder Eigenschaftszugriff) sein. Seine Präzedenz bedeutet, dass `new Foo++` `new (Foo++)` (ein Syntaxfehler) und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor) ist.
6. Der Operand muss ein gültiges Zuweisungsziel (Bezeichner oder Eigenschaftszugriff) sein.
7. Der Operand kann kein Bezeichner oder ein [privater Zugriff](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sein.
8. Die linke Seite kann keine Präzedenz von 14 haben.
9. Die Operanden können kein logisches ODER `||` oder logisches UND `&&` Operator ohne Gruppierung sein.
10. Die "linke Seite" muss ein gültiges Zuweisungsziel (Bezeichner oder Eigenschaftszugriff) sein.
11. Die Assoziativität bedeutet, dass die beiden Ausdrücke nach `?` implizit gruppiert sind.
12. Die "linke Seite" ist ein einzelner Bezeichner oder eine eingeklammertes Parameterliste.
13. Nur gültig in Objektliteralen, Array-Literalen oder Argumentlisten.

Die Präzedenz der Gruppen 17 und 16 kann etwas zweideutig sein. Hier sind einige Beispiele zur Klärung:

- Optionales Chaining ist immer durch seine jeweilige Syntax ohne Optionalität austauschbar (abgesehen von einigen speziellen Fällen, in denen optionales Chaining verboten ist). Zum Beispiel akzeptiert jede Stelle, die `a?.b` akzeptiert, auch `a.b` und umgekehrt, und ähnliches für `a?.()`, `a()`, etc.
- Memberausdrucke und berechnete Memberausdrucke sind immer austauschbar.
- Funktionsaufrufe und `import()`-Ausdrucke sind immer austauschbar.
- Dies lässt vier Klassen von Ausdrücken: Memberzugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die "linke Seite" eines Memberzugriffs kann sein: ein Memberzugriff (`a.b.c`), `new` mit Argumenten (`new a().b`), und Funktionsaufruf (`a().b`).
  - Die "linke Seite" von `new` mit Argumenten kann sein: ein Memberzugriff (`new a.b()`) und `new` mit Argumenten (`new new a()()`).
  - Die "linke Seite" eines Funktionsaufrufs kann sein: ein Memberzugriff (`a.b()`), `new` mit Argumenten (`new a()()`), und Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann sein: ein Memberzugriff (`new a.b`), `new` mit Argumenten (`new new a()`), und `new` ohne Argumente (`new new a`).
