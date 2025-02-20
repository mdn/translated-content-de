---
title: Operatorrangfolge
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

**Operatorrangfolge** bestimmt, wie Operatoren in Bezug zueinander geparst werden. Operatoren mit höherer Rangfolge werden zu Operanden von Operatoren mit niedrigerer Rangfolge.

{{InteractiveExample("JavaScript Demo: Expressions - Operatorrangfolge")}}

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

Betrachten Sie einen Ausdruck, der durch die folgende Darstellung beschrieben werden kann, wobei `OP1` und `OP2` Platzhalter für Operatoren sind.

```plain
a OP1 b OP2 c
```

Die obige Kombination hat zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Für welche Interpretation sich die Sprache entscheidet, hängt von der Identität von `OP1` und `OP2` ab.

Wenn `OP1` und `OP2` unterschiedliche Rangfolgen haben (siehe Tabelle unten), wird der Operator mit der höheren _Rangfolge_ zuerst ausgeführt, und die Assoziativität spielt keine Rolle. Beachten Sie, dass Multiplikation eine höhere Rangfolge als Addition hat und daher zuerst ausgeführt wird, auch wenn die Addition im Code zuerst erscheint.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Bei Operatoren mit derselben Rangfolge gruppiert die Sprache sie nach _Assoziativität_. _Linksassoziativität_ (von links nach rechts) bedeutet, dass sie als `(a OP1 b) OP2 c` interpretiert werden, während _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass sie als `a OP1 (b OP2 c)` interpretiert werden. Zuweisungsoperatoren sind rechtsassoziativ, sodass Sie schreiben können:

```js
a = b = 5; // same as writing a = (b = 5);
```

mit dem erwarteten Ergebnis, dass `a` und `b` den Wert 5 erhalten. Dies liegt daran, dass der Zuweisungsoperator den Wert zurückgibt, der zugewiesen wird. Zuerst wird `b` auf 5 gesetzt. Dann wird auch `a` auf 5 gesetzt — den Rückgabewert von `b = 5`, d.h. rechter Operand der Zuweisung.

Ein weiteres Beispiel: Der einzigartige Potenzierungs-Operator hat Rechtsassoziativität, während andere arithmetische Operatoren Linksassoziativität haben.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zuerst nach Rangfolge gruppiert, und dann, bei angrenzenden Operatoren mit derselben Rangfolge, nach Assoziativität. Wenn zum Beispiel Division und Potenzierung gemischt werden, wird die Potenzierung stets vor der Division ausgeführt. Zum Beispiel ergibt `2 ** 3 / 3 ** 2` 0.8888888888888888, da dies gleichbedeutend ist mit `(2 ** 3) / (3 ** 2)`.

Für Präfix-Unär-Operatoren nehmen wir das folgende Muster an:

```plain
OP1 a OP2 b
```

Wobei `OP1` ein Präfix-Unär-Operator und `OP2` ein Binär-Operator ist. Wenn `OP1` eine höhere Rangfolge als `OP2` hat, wird er als `(OP1 a) OP2 b` gruppiert; andernfalls als `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Wenn der Unär-Operator auf dem zweiten Operanden steht:

```plain
a OP2 OP1 b
```

Dann muss der Binär-Operator `OP2` eine niedrigere Rangfolge als der Unär-Operator `OP1` haben, damit er als `a OP2 (OP1 b)` gruppiert wird. Beispielsweise ist das Folgende ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Rangfolge als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(a + yield) 1` werden — aber da `yield` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) in Generatorfunktionen ist, würde dies zu einem Syntaxfehler führen. Glücklicherweise haben die meisten Unär-Operatoren eine höhere Rangfolge als Binär-Operatoren und unterliegen nicht diesem Problem.

Wenn wir zwei Präfix-Unär-Operatoren haben:

```plain
OP1 OP2 a
```

Dann muss der Unär-Operator näher am Operanden, `OP2`, eine höhere Rangfolge als `OP1` haben, damit er als `OP1 (OP2 a)` gruppiert wird. Es ist möglich, es andersherum zu bekommen und mit `(OP1 OP2) a` zu enden:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Rangfolge als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde dies zu `(await yield) 1`, was auf einen Bezeichner namens `yield` wartet und ein Syntaxfehler ist. Ebenso, wenn Sie `new !A;` haben, da `!` eine niedrigere Rangfolge als `new` hat, würde dies zu `(new !) A`, was offensichtlich ungültig ist. (Dieser Code sieht ohnehin unsinnig aus, da `!A` immer einen boolean erzeugt, keine Konstrukturfunktion.)

Für Postfix-Unär-Operatoren (nämlich `++` und `--`) gelten dieselben Regeln. Glücklicherweise haben beide Operatoren eine höhere Rangfolge als jeder Binär-Operator, sodass die Gruppierung immer wie erwartet ist. Darüber hinaus gibt `++` einen _Wert_ zurück, keinen _Referenz_, sodass Sie keine mehrfachen Inkremente wie in C verketten können.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorrangfolge wird _rekursiv_ behandelt. Betrachten Sie zum Beispiel diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zuerst gruppieren wir Operatoren mit unterschiedlicher Rangfolge nach abnehmenden Rangfolgestufen.

1. Der `**`-Operator hat die höchste Rangfolge, daher wird er zuerst gruppiert.
2. In der Umgebung des `**`-Ausdrucks liegt rechts `*` und links `+`. `*` hat die höhere Rangfolge, daher wird er zuerst gruppiert. `*` und `/` haben dieselbe Rangfolge, daher werden sie zunächst zusammen gruppiert.
3. In der Umgebung des `*`/`/`-Ausdrucks, der in 2 gruppiert wurde, wird, da `+` eine höhere Rangfolge als `>>` hat, der erstere gruppiert.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/`-Gruppe, da sie linksassoziativ sind, wird der linke Operand gruppiert.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass die Operatorrangfolge und -assoziativität nur die Auswertungsreihenfolge der _Operatoren_ (die implizite Gruppierung), nicht jedoch die Auswertungsreihenfolge der _Operanden_ betrifft. Die Operanden werden immer von links nach rechts ausgewertet. Die höherstufigen Ausdrücke werden stets zuerst ausgewertet, und ihre Ergebnisse werden dann gemäß der Reihenfolge der Operatorrangfolge zusammengesetzt.

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

Wenn Sie mit Binärbäumen vertraut sind, denken Sie daran wie an eine [Post-Order-Traversierung](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN).

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren ordnungsgemäß gruppiert wurden, würden die binären Operatoren einen binären Baum bilden. Die Auswertung beginnt mit der äußersten Gruppe — nämlich dem Operator mit der niedrigsten Rangfolge (in diesem Fall `/`). Der linke Operand dieses Operators wird zuerst ausgewertet, der möglicherweise aus höhergestuften Operatoren besteht (wie einem Aufrufausdruck `echo("left", 4)`). Nachdem der linke Operand ausgewertet wurde, wird der rechte Operand auf die gleiche Weise ausgewertet. Daher werden alle Blattknoten — die `echo()`-Aufrufe — von links nach rechts besucht, unabhängig von der Rangfolge der sie verbindenden Operatoren.

## Kurzschluss

Im vorigen Abschnitt erwähnten wir, dass "die höherstufigen Ausdrücke immer zuerst ausgewertet werden" — dies ist im Allgemeinen wahr, muss jedoch mit der Anerkennung von _Kurzschlüssen_ ergänzt werden, bei denen ein Operand möglicherweise überhaupt nicht ausgewertet wird.

Kurzschluss ist ein Fachbegriff für bedingte Auswertung. Zum Beispiel wird im Ausdruck `a && (b + c)` der Teil `(b + c)` überhaupt nicht ausgewertet, wenn `a` eine {{Glossary("falsy", "falsye")}} ist, auch wenn er gruppiert ist und daher eine höhere Rangfolge als `&&` besitzt. Man könnte sagen, dass der logische UND-Operator (`&&`) "kurzgeschlossen" ist. Weitere kurzgeschlossene Operatoren sind logisches ODER (`||`), Nullish-Coalescing (`??`) und optionale Verkettung (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Beim Auswerten eines kurzgeschlossenen Operators wird immer der linke Operand ausgewertet. Der rechte Operand wird nur ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bestimmen kann.

> [!NOTE]
> Das Verhalten des Kurzschlusses ist in diese Operatoren eingebaut. Andere Operatoren würden _immer_ beide Operanden auswerten, unabhängig davon, ob dies tatsächlich nützlich ist — zum Beispiel wird `NaN * foo()` immer `foo` aufrufen, selbst wenn das Ergebnis niemals etwas anderes als `NaN` wäre.

Das vorherige Modell einer Post-Order-Traversierung bleibt bestehen. Allerdings wird, nachdem der linke Teilbaum eines kurzschließenden Operators besucht wurde, die Sprache entscheiden, ob der rechte Operand ausgewertet werden muss. Falls nicht (zum Beispiel, weil der linke Operand von `||` bereits wahrheitswertig ist), wird das Ergebnis direkt zurückgegeben, ohne den rechten Teilbaum zu besuchen.

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

Nur `C()` wird ausgewertet, obwohl `&&` eine höhere Rangfolge hat. Dies bedeutet nicht, dass `||` in diesem Fall eine höhere Rangfolge hat — es ist genau _weil_ `(B() && A())` eine höhere Rangfolge hat, dass es insgesamt vernachlässigt wird. Wenn es umgeordnet wird:

```js-nolint
console.log(A() && C() || B());
// Logs:
// called A
// called B
// false
```

Dann würde der Kurzschlusseffekt von `&&` lediglich verhindern, dass `C()` ausgewertet wird, aber da `A() && C()` insgesamt `false` ist, würde `B()` dennoch ausgewertet.

Beachten Sie jedoch, dass der Kurzschluss das endgültige Auswertungsergebnis nicht ändert. Es betrifft nur die Auswertung der _Operanden_, nicht die Gruppierung der _Operatoren_ — wenn die Auswertung der Operanden keine Nebeneffekte hat (z.B. Protokollierung in der Konsole, Zuweisungen, Fehler werfen), wäre der Kurzschluss überhaupt nicht beobachtbar.

Die Zuweisungsvarianten dieser Operatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) sind ebenfalls kurzgeschlossen. Sie sind so kurzgeschlossen, dass die Zuweisung überhaupt nicht stattfindet.

## Tabelle

Die folgende Tabelle listet Operatoren in der Reihenfolge von der höchsten Rangfolge (18) zur niedrigsten Rangfolge (1) auf.

Einige allgemeine Hinweise zur Tabelle:

1. Nicht alle hier aufgeführten Syntaxelemente sind im strengen Sinne "Operatoren". Zum Beispiel werden Spread `...` und Arrow `=>` typischerweise nicht als Operatoren betrachtet. Trotzdem haben wir sie aufgenommen, um zu zeigen, wie stark sie im Vergleich zu anderen Operatoren/Ausdrücken binden.
2. Einige Operatoren haben bestimmte Operanden, die Ausdrücke erfordern, die enger sind als die von höherstufigen Operatoren erzeugten. Zum Beispiel muss die rechte Seite des Mitgliedszugriffs `.` (Rangfolge 17) ein Bezeichner anstelle eines gruppierten Ausdrucks sein. Die linke Seite von Arrow `=>` (Rangfolge 2) muss eine Argumentliste oder ein einzelner Bezeichner anstelle eines beliebigen Ausdrucks sein.
3. Einige Operatoren haben bestimmte Operanden, die Ausdrücke akzeptieren, die breiter sind als die von höherstufigen Operatoren erzeugten. Zum Beispiel kann der klammerumfasste Ausdruck der Klammernotation `[ … ]` (Rangfolge 17) jeder Ausdruck sein, sogar durch Komma (Rangfolge 1) verbundene. Diese Operatoren agieren, als ob dieser Operand "automatisch gruppiert" wäre. In diesem Fall werden wir die Assoziativität weglassen.

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
      <td>n/v</td>
      <td>{{jsxref("Operators/Grouping", "Grouping", "", 1)}}<br><code>(x)</code></td>
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
      <td>{{jsxref("Operators/Optional_chaining", "Optionale Verkettung", "", 1)}}<br><code>x?.y</code></td>
    </tr>
   ...
