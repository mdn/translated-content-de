---
title: Operatorpriorität
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: b251b9bd2932d837806d743051b60aeab778d0f1
---

Die **Operatorpriorität** bestimmt, wie Operatoren im Verhältnis zueinander geparst werden. Operatoren mit höherer Priorität werden zu Operanden von Operatoren mit niedrigerer Priorität.

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

## Priorität und Assoziativität

Betrachten Sie einen Ausdruck, der sich durch die folgende Darstellung beschreiben lässt. Dabei stehen `OP1` und `OP2` jeweils als Platzhalter für Operatoren.

```plain
a OP1 b OP2 c
```

Für die obige Kombination gibt es zwei mögliche Interpretationen:

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

Welche davon die Sprache verwendet, hängt davon ab, welche Operatoren `OP1` und `OP2` sind.

Wenn `OP1` und `OP2` unterschiedliche Prioritätsstufen haben (siehe die Tabelle unten), wird der Operator mit der höheren _Priorität_ zuerst berücksichtigt; die Assoziativität spielt dabei keine Rolle. Die Multiplikation hat beispielsweise eine höhere Priorität als die Addition und wird zuerst ausgeführt, obwohl die Addition im Code zuerst steht.

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Operatoren mit derselben Priorität gruppiert die Sprache anhand ihrer _Assoziativität_. _Linksassoziativität_ (von links nach rechts) bedeutet, dass der Ausdruck als `(a OP1 b) OP2 c` interpretiert wird. _Rechtsassoziativität_ (von rechts nach links) bedeutet, dass er als `a OP1 (b OP2 c)` interpretiert wird. Zuweisungsoperatoren sind rechtsassoziativ. Daher können Sie Folgendes schreiben:

```js
a = b = 5; // same as writing a = (b = 5);
```

Das erwartete Ergebnis ist, dass `a` und `b` den Wert 5 erhalten. Das liegt daran, dass der Zuweisungsoperator den zugewiesenen Wert zurückgibt. Zuerst wird `b` auf 5 gesetzt. Anschließend wird auch `a` auf 5 gesetzt – auf den Rückgabewert von `b = 5`, also den rechten Operanden der Zuweisung.

Ein weiteres Beispiel ist der Potenzierungsoperator: Er ist rechtsassoziativ, während andere arithmetische Operatoren linksassoziativ sind.

```js-nolint
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

Operatoren werden zunächst nach Priorität gruppiert. Benachbarte Operatoren mit derselben Priorität werden anschließend nach Assoziativität gruppiert. Werden Division und Potenzierung kombiniert, kommt die Potenzierung daher immer vor der Division. Beispielsweise ergibt `2 ** 3 / 3 ** 2` den Wert 0.8888888888888888, da dies `(2 ** 3) / (3 ** 2)` entspricht.

Nehmen wir für unäre Präfixoperatoren folgendes Muster an:

```plain
OP1 a OP2 b
```

Dabei ist `OP1` ein unärer Präfixoperator und `OP2` ein binärer Operator. Hat `OP1` eine höhere Priorität als `OP2`, wird der Ausdruck als `(OP1 a) OP2 b` gruppiert; andernfalls als `OP1 (a OP2 b)`.

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

Wenn der unäre Operator vor dem zweiten Operanden steht:

```plain
a OP2 OP1 b
```

Dann muss der binäre Operator `OP2` eine niedrigere Priorität als der unäre Operator `OP1` haben, damit der Ausdruck als `a OP2 (OP1 b)` gruppiert wird. Das folgende Beispiel ist ungültig:

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

Da `+` eine höhere Priorität als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde daraus `(a + yield) 1`. Weil `yield` in Generatorfunktionen jedoch ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) ist, führt dies zu einem Syntaxfehler. Glücklicherweise haben die meisten unären Operatoren eine höhere Priorität als binäre Operatoren, sodass dieses Problem bei ihnen nicht auftritt.

Wenn zwei unäre Präfixoperatoren vorliegen:

```plain
OP1 OP2 a
```

Dann muss der näher am Operanden stehende unäre Operator `OP2` eine höhere Priorität als `OP1` haben, damit der Ausdruck als `OP1 (OP2 a)` gruppiert wird. Andernfalls kann die Gruppierung `(OP1 OP2) a` entstehen:

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

Da [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eine höhere Priorität als [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) hat, würde daraus `(await yield) 1`. Dabei würde auf einen Bezeichner namens `yield` gewartet, was zu einem Syntaxfehler führt. Ähnlich wird `new !A;` zu `(new !) A`, da `!` eine niedrigere Priorität als `new` hat. Das ist offensichtlich ungültig. (Ohnehin wäre dieser Code wenig sinnvoll, da `!A` immer einen booleschen Wert und keine Konstruktorfunktion erzeugt.)

Für unäre Postfixoperatoren (`++` und `--`) gelten dieselben Regeln. Glücklicherweise haben beide Operatoren eine höhere Priorität als jeder binäre Operator, sodass die Gruppierung stets der Erwartung entspricht. Da `++` außerdem einen _Wert_ und keine _Referenz_ ergibt, können auch nicht mehrere Inkrementierungen aneinandergereiht werden.

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

Die Operatorpriorität wird _rekursiv_ berücksichtigt. Betrachten Sie beispielsweise diesen Ausdruck:

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

Zunächst gruppieren wir Operatoren mit unterschiedlicher Priorität in absteigender Reihenfolge ihrer Priorität.

1. Der Operator `**` hat die höchste Priorität und wird daher zuerst gruppiert.
2. Links vom Ausdruck mit `**` steht `+`, rechts davon `*`. Da `*` eine höhere Priorität hat, wird es zuerst gruppiert. `*` und `/` haben dieselbe Priorität, daher fassen wir sie zunächst zu einer Gruppe zusammen.
3. Bei Betrachtung der in Schritt 2 gebildeten `*`/`/`-Gruppe wird `+` vor `>>` gruppiert, da `+` eine höhere Priorität hat.

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

Innerhalb der `*`/`/`-Gruppe wird aufgrund der Linksassoziativität beider Operatoren zuerst der linke Operand gruppiert.

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Beachten Sie, dass Operatorpriorität und Assoziativität nur die Auswertungsreihenfolge der _Operatoren_ (die implizite Gruppierung) beeinflussen, nicht aber die Auswertungsreihenfolge der _Operanden_. Die Operanden werden immer von links nach rechts ausgewertet. Ausdrücke mit höherer Priorität werden zuerst ausgewertet; ihre Ergebnisse werden anschließend entsprechend der Operatorpriorität miteinander verknüpft.

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

Falls Sie mit Binärbäumen vertraut sind, können Sie sich dies als [Postorder-Traversierung](https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN) vorstellen.

```plain
                /
       ┌────────┴────────┐
echo("left", 4)         **
                ┌────────┴────────┐
        echo("middle", 3)  echo("right", 2)
```

Nachdem alle Operatoren korrekt gruppiert wurden, bilden die binären Operatoren einen Binärbaum. Die Auswertung beginnt bei der äußersten Gruppe, also beim Operator mit der niedrigsten Priorität (in diesem Fall `/`). Zuerst wird der linke Operand dieses Operators ausgewertet. Er kann wiederum Operatoren mit höherer Priorität enthalten, etwa einen Funktionsaufruf `echo("left", 4)`. Danach wird der rechte Operand auf dieselbe Weise ausgewertet. Daher werden alle Blattknoten – die `echo()`-Aufrufe – von links nach rechts besucht, unabhängig von der Priorität der Operatoren, die sie miteinander verbinden.

## Kurzschlussauswertung

Im vorherigen Abschnitt hieß es, dass „Ausdrücke mit höherer Priorität immer zuerst ausgewertet werden“. Das trifft im Allgemeinen zu, muss aber um die _Kurzschlussauswertung_ ergänzt werden: Bei ihr wird ein Operand unter Umständen überhaupt nicht ausgewertet.

Kurzschlussauswertung bezeichnet die bedingte Auswertung. Ist beispielsweise bei `a && (b + c)` der Wert von `a` {{Glossary("falsy", "falsy")}}, wird der Teilausdruck `(b + c)` gar nicht ausgewertet, obwohl er gruppiert ist und damit eine höhere Priorität als `&&` hat. Man sagt, dass beim logischen UND-Operator (`&&`) eine Kurzschlussauswertung stattfindet. Weitere Operatoren mit Kurzschlussauswertung sind das logische ODER (`||`), Nullish Coalescing (`??`) und Optional Chaining (`?.`).

```js-nolint
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

Bei der Auswertung eines Operators mit Kurzschlussauswertung wird der linke Operand immer ausgewertet. Der rechte Operand wird nur dann ausgewertet, wenn der linke Operand das Ergebnis der Operation nicht bereits bestimmt.

> [!NOTE]
> Die Kurzschlussauswertung ist eine Eigenschaft dieser Operatoren. Andere Operatoren werten _immer_ beide Operanden aus, unabhängig davon, ob dies tatsächlich nützlich ist. Beispielsweise ruft `NaN * foo()` stets `foo` auf, obwohl das Ergebnis nur `NaN` sein kann.

Das zuvor beschriebene Modell der Postorder-Traversierung gilt weiterhin. Nachdem der linke Teilbaum eines Operators mit Kurzschlussauswertung besucht wurde, entscheidet die Sprache jedoch, ob der rechte Operand ausgewertet werden muss. Falls nicht – beispielsweise weil der linke Operand von `||` bereits truthy ist –, wird das Ergebnis direkt zurückgegeben, ohne den rechten Teilbaum zu besuchen.

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

Obwohl `&&` eine höhere Priorität hat, wird nur `C()` ausgewertet. Das bedeutet nicht, dass `||` hier eine höhere Priorität hätte. Gerade _weil_ `(B() && A())` eine höhere Priorität hat, wird dieser Ausdruck als Ganzes übersprungen. Wird der Ausdruck wie folgt umgestellt:

```js-nolint
console.log(A() && B() || C());
// Logs:
// called A
// called C
// true
```

Dann verhindert die Kurzschlussauswertung von `&&` lediglich die Auswertung von `B()`. Da `A() && B()` insgesamt `false` ist, wird `C()` dennoch ausgewertet.

Beachten Sie jedoch, dass die Kurzschlussauswertung das endgültige Auswertungsergebnis nicht verändert. Sie beeinflusst lediglich die Auswertung der _Operanden_, nicht die Gruppierung der _Operatoren_. Wenn die Auswertung der Operanden keine Seiteneffekte hat – etwa Ausgaben in der Konsole, Zuweisungen an Variablen oder das Auslösen eines Fehlers –, ist die Kurzschlussauswertung überhaupt nicht zu beobachten.

Auch bei den entsprechenden Zuweisungsoperatoren ([`&&=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment), [`||=`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment), [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)) findet eine Kurzschlussauswertung statt. Dabei kann die Zuweisung vollständig ausbleiben.

## Tabelle

Die folgende Tabelle führt die Operatoren von der höchsten Priorität (18) bis zur niedrigsten Priorität (1) auf.

Einige allgemeine Hinweise zur Tabelle:

1. Nicht jede hier aufgeführte Syntax ist [im engeren Sinne ein „Operator“](/de/docs/Web/JavaScript/Reference/Operators#what_are_operators). Beispielsweise gelten Spread `...` und Arrow `=>` üblicherweise nicht als Operatoren. Sie sind dennoch aufgeführt, um zu zeigen, wie stark sie im Vergleich zu anderen Operatoren und Ausdrücken binden.
2. Bei manchen Operatoren müssen bestimmte Operanden enger gefasste Ausdrücke sein, als Operatoren mit höherer Priorität erzeugen. Beispielsweise muss die rechte Seite des Member-Zugriffs `.` (Priorität 17) ein Bezeichner sein und darf kein gruppierter Ausdruck sein. Die linke Seite von Arrow `=>` (Priorität 2) muss eine Argumentliste oder ein einzelner Bezeichner sein und darf nicht irgendein Ausdruck sein.
3. Bei manchen Operatoren dürfen bestimmte Operanden weiter gefasste Ausdrücke sein, als Operatoren mit höherer Priorität erzeugen. Beispielsweise darf der in eckigen Klammern stehende Ausdruck der Klammernotation `[ … ]` (Priorität 17) ein beliebiger Ausdruck sein, auch ein durch Kommas verknüpfter Ausdruck (Priorität 1). Diese Operatoren verhalten sich so, als wäre der betreffende Operand „automatisch gruppiert“. In solchen Fällen lassen wir die Angabe zur Assoziativität weg.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Priorität</th>
      <th>Assoziativität</th>
      <th>Einzelne Operatoren</th>
      <th>Hinweise</th>
    </tr>
    <tr>
      <td>18: Gruppierung</td>
      <td>nicht zutreffend</td>
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
      <td rowspan="4">nicht zutreffend</td>
      <td>
        {{jsxref("Operators/Property_accessors", "Computed member access", "#bracket_notation", 1)}}<br><code>x[y]</code>
      </td>
      <td>[3]</td>
    </tr>
    <tr>
      <td>{{jsxref("new")}} mit Argumentliste<br><code>new x(y)</code></td>
      <td rowspan="3">[4]</td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Operators/Function_call">Funktionsaufruf</a><br><code>x(y)</code>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/import", "import(x)")}}</td>
    </tr>
    <tr>
      <td>16: new</td>
      <td>nicht zutreffend</td>
      <td>{{jsxref("new")}} ohne Argumentliste<br><code>new x</code></td>
    </tr>
    <tr>
      <td rowspan="2">15: Postfixoperatoren</td>
      <td rowspan="2">nicht zutreffend</td>
      <td>
        {{jsxref("Operators/Increment", "Postfix increment", "", 1)}}<br><code>x++</code>
      </td>
      <td rowspan="2">[5]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Postfix decrement", "", 1)}}<br><code>x--</code>
      </td>
    </tr>
    <tr>
      <td rowspan="10">14: Präfixoperatoren</td>
      <td rowspan="10">nicht zutreffend</td>
      <td>
        {{jsxref("Operators/Increment", "Prefix increment", "", 1)}}<br><code>++x</code>
      </td>
      <td rowspan="2">[6]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "Prefix decrement", "", 1)}}<br><code>--x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_NOT", "Logical NOT", "", 1)}}<br><code>!x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_NOT", "Bitwise NOT", "", 1)}}<br><code>~x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_plus", "Unary plus", "", 1)}}<br><code>+x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_negation", "Unary negation", "", 1)}}<br><code>-x</code>
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
        {{jsxref("Operators/Exponentiation", "Exponentiation", "", 1)}}<br><code>x ** y</code>
      </td>
      <td>[8]</td>
    </tr>
    <tr>
      <td rowspan="3">12: multiplikative Operatoren</td>
      <td rowspan="3">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Multiplication", "Multiplication", "", 1)}}<br><code>x * y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Division", "Division", "", 1)}}<br><code>x / y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Remainder", "Remainder", "", 1)}}<br><code>x % y</code>
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
        {{jsxref("Operators/Subtraction", "Subtraction", "", 1)}}<br><code>x - y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="3">10: bitweise Verschiebung</td>
      <td rowspan="3">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Left_shift", "Left shift", "", 1)}}<br><code>x &#x3C;&#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift", "Right shift", "", 1)}}<br><code>x >> y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift", "Unsigned right shift", "", 1)}}<br><code>x >>> y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="6">9: Vergleichsoperatoren</td>
      <td rowspan="6">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Less_than", "Less than", "", 1)}}<br><code>x &#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Less_than_or_equal", "Less than or equal", "", 1)}}<br><code>x &#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than", "Greater than", "", 1)}}<br><code>x > y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than_or_equal", "Greater than or equal", "", 1)}}<br><code>x >= y</code>
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
        {{jsxref("Operators/Equality", "Equality", "", 1)}}<br><code>x == y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Inequality", "Inequality", "", 1)}}<br><code>x != y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_equality", "Strict equality", "", 1)}}<br><code>x === y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_inequality", "Strict inequality", "", 1)}}<br><code>x !== y</code>
      </td>
    </tr>
    <tr>
      <td>7: bitweises UND</td>
      <td>von links nach rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_AND", "Bitwise AND", "", 1)}}<br><code>x &#x26; y</code>
      </td>
    </tr>
    <tr>
      <td>6: bitweises XOR</td>
      <td>von links nach rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_XOR", "Bitwise XOR", "", 1)}}<br><code>x ^ y</code>
      </td>
    </tr>
    <tr>
      <td>5: bitweises ODER</td>
      <td>von links nach rechts</td>
      <td>
        {{jsxref("Operators/Bitwise_OR", "Bitwise OR", "", 1)}}<br><code>x | y</code>
      </td>
    </tr>
    <tr>
      <td>4: logisches UND</td>
      <td>von links nach rechts</td>
      <td>
        {{jsxref("Operators/Logical_AND", "Logical AND", "", 1)}}<br><code>x &#x26;&#x26; y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="2">3: logisches ODER, Nullish Coalescing</td>
      <td rowspan="2">von links nach rechts</td>
      <td>
        {{jsxref("Operators/Logical_OR", "Logical OR", "", 1)}}<br><code>x || y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing", "Nullish coalescing operator", "", 1)}}<br><code>x ?? y</code>
      </td>
      <td>[9]</td>
    </tr>
    <tr>
      <td rowspan="21">2: Zuweisung und Sonstiges</td>
      <td rowspan="16">von rechts nach links</td>
      <td>
        {{jsxref("Operators/Assignment", "Assignment", "", 1)}}<br><code>x = y</code>
      </td>
      <td rowspan="16">[10]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Addition_assignment", "Addition assignment", "", 1)}}<br><code>x += y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Subtraction_assignment", "Subtraction assignment", "", 1)}}<br><code>x -= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Exponentiation_assignment", "Exponentiation assignment", "", 1)}}<br><code>x **= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Multiplication_assignment", "Multiplication assignment", "", 1)}}<br><code>x *= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Division_assignment", "Division assignment", "", 1)}}<br><code>x /= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Remainder_assignment", "Remainder assignment", "", 1)}}<br><code>x %= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Left_shift_assignment", "Left shift assignment", "", 1)}}<br><code>x &#x3C;&#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift_assignment", "Right shift assignment", "", 1)}}<br><code>x >>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift_assignment", "Unsigned right shift assignment", "", 1)}}<br><code>x >>>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_AND_assignment", "Bitwise AND assignment", "", 1)}}<br><code>x &#x26;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_XOR_assignment", "Bitwise XOR assignment", "", 1)}}<br><code>x ^= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_OR_assignment", "Bitwise OR assignment", "", 1)}}<br><code>x |= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_AND_assignment", "Logical AND assignment", "", 1)}}<br><code>x &#x26;&#x26;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_OR_assignment", "Logical OR assignment", "", 1)}}<br><code>x ||= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing_assignment", "Nullish coalescing assignment", "", 1)}}<br><code>x ??= y</code>
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
      <td rowspan="3">nicht zutreffend</td>
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
        {{jsxref("Operators/Comma_operator", "Comma operator", "", 1)}}<br><code>x, y</code>
      </td>
    </tr>
  </tbody>
</table>

Hinweise:

1. Der Operand kann ein beliebiger Ausdruck sein.
2. Die „rechte Seite“ muss ein Bezeichner sein.
3. Die „rechte Seite“ kann ein beliebiger Ausdruck sein.
4. Die „rechte Seite“ ist eine durch Kommas getrennte Liste beliebiger Ausdrücke mit einer Priorität > 1 (also keine Kommaausdrücke). Der Konstruktor eines `new`-Ausdrucks darf kein Optional Chain sein.
5. Der Operand muss ein gültiges Zuweisungsziel sein (ein Bezeichner oder ein Property-Zugriff). Aufgrund seiner Priorität bedeutet `new Foo++` dasselbe wie `(new Foo)++` (ein Syntaxfehler) und nicht `new (Foo++)` (ein TypeError: (Foo++) ist kein Konstruktor).
6. Der Operand muss ein gültiges Zuweisungsziel sein (ein Bezeichner oder ein Property-Zugriff).
7. Der Operand darf weder ein Bezeichner noch ein Zugriff auf ein [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sein.
8. Die linke Seite darf keine Priorität von 14 haben, ausgenommen Präfix-Inkrementierung und Präfix-Dekrementierung.
9. Die Operanden dürfen ohne Gruppierung keine Operatoren für logisches ODER `||` oder logisches UND `&&` sein.
10. Die „linke Seite“ muss ein gültiges Zuweisungsziel sein (ein Bezeichner oder ein Property-Zugriff).
11. Die Assoziativität bewirkt, dass die beiden Ausdrücke nach `?` implizit gruppiert werden.
12. Die „linke Seite“ ist ein einzelner Bezeichner oder eine eingeklammerte Parameterliste.
13. Nur innerhalb von Objektliteralen, Array-Literalen oder Argumentlisten zulässig.

Die Priorität der Gruppen 17 und 16 kann etwas mehrdeutig erscheinen. Die folgenden Beispiele verdeutlichen sie.

- Optional Chaining kann stets anstelle der entsprechenden Syntax ohne Optionalität verwendet werden und umgekehrt (abgesehen von einigen Sonderfällen, in denen Optional Chaining nicht zulässig ist). Überall, wo `a?.b` zulässig ist, ist beispielsweise auch `a.b` zulässig und umgekehrt. Dasselbe gilt entsprechend für `a?.()` und `a()` usw.
- Member-Ausdrücke und berechnete Member-Ausdrücke können stets gegeneinander ausgetauscht werden.
- Aufrufausdrücke und `import()`-Ausdrücke können stets gegeneinander ausgetauscht werden.
- Damit bleiben vier Ausdrucksklassen: Member-Zugriff, `new` mit Argumenten, Funktionsaufruf und `new` ohne Argumente.
  - Die „linke Seite“ eines Member-Zugriffs kann Folgendes sein: ein Member-Zugriff (`a.b.c`), `new` mit Argumenten (`new a().b`) oder ein Funktionsaufruf (`a().b`).
  - Die „linke Seite“ von `new` mit Argumenten kann Folgendes sein: ein Member-Zugriff (`new a.b()`) oder `new` mit Argumenten (`new new a()()`).
  - Die „linke Seite“ eines Funktionsaufrufs kann Folgendes sein: ein Member-Zugriff (`a.b()`), `new` mit Argumenten (`new a()()`) oder ein Funktionsaufruf (`a()()`).
  - Der Operand von `new` ohne Argumente kann Folgendes sein: ein Member-Zugriff (`new a.b`), `new` mit Argumenten (`new new a()`) oder `new` ohne Argumente (`new new a`).
