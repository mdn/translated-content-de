---
title: Potenzierung (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der **Potenzierungsoperator (`**`)** gibt das Ergebnis zurück, das entsteht, wenn der erste Operand mit dem zweiten Operanden potenziert wird. Er entspricht {{jsxref("Math.pow()")}}, akzeptiert aber auch [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) als Operanden.

{{InteractiveExample("JavaScript Demo: Exponentiation (**) operator")}}

```js interactive-example
console.log(3 ** 4);
// Expected output: 81

console.log(10 ** -2);
// Expected output: 0.01

console.log(2 ** (3 ** 2));
// Expected output: 512

console.log((2 ** 3) ** 2);
// Expected output: 64
```

## Syntax

```js-nolint
x ** y
```

## Beschreibung

Der Operator `**` ist für zwei Operandentypen überladen: Number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [wandelt zunächst beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInts werden, führt er eine BigInt-Potenzierung aus; andernfalls eine Number-Potenzierung. Wird ein Operand zu einem BigInt und der andere zu einer Number, wird ein {{jsxref("TypeError")}} ausgelöst.

Sowohl für Numbers als auch für BigInts ergibt `0` hoch eine positive Zahl den Wert `0`, und `0` hoch `0` ergibt `1`. Bei Numbers ergibt `0` hoch eine negative Zahl den Wert `Infinity`, `-0` hoch eine negative ungerade Ganzzahl den Wert `-Infinity` und `-0` hoch jede andere negative Zahl den Wert `Infinity`.

`NaN ** 0` (und der entsprechende Ausdruck `Math.pow(NaN, 0)`) ist einer der wenigen Fälle, in denen sich {{jsxref("NaN")}} nicht durch mathematische Operationen fortpflanzt: Der Ausdruck gibt `1` zurück, obwohl der Operand `NaN` ist. Wenn `base` den Wert 1 hat und `exponent` nicht endlich ist (±Infinity oder `NaN`), weicht das Verhalten außerdem von IEEE 754 ab. Der Standard sieht als Ergebnis 1 vor, während JavaScript `NaN` zurückgibt, um die Abwärtskompatibilität mit seinem ursprünglichen Verhalten zu wahren.

Bei der BigInt-Potenzierung wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Exponent `y` negativ ist. Der Grund dafür ist, dass ein negativer Exponent wahrscheinlich einen Wert zwischen 0 und 1 ergeben würde (es sei denn, die Basis ist `1`, `-1` oder `0`). Dieser Wert würde auf null gerundet; ein negativer Exponent ist daher wahrscheinlich ein Programmierfehler.

Der Potenzierungsoperator ist [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` entspricht `a ** (b ** c)`.

In den meisten Sprachen mit einem Potenzierungsoperator (`**`), etwa PHP und Python, hat dieser Operator eine höhere Priorität als unäre Operatoren wie das unäre `+` und das unäre `-`. Es gibt jedoch einige Ausnahmen. In Bash hat der Operator `**` beispielsweise eine niedrigere Priorität als unäre Operatoren.

In JavaScript können Sie keinen mehrdeutigen Potenzierungsausdruck schreiben. Das heißt, Sie können einen unären Operator (mit [Priorität 14](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), darunter `+`/`-`/`~`/`!`/`delete`/`void`/`typeof`/`await`) nicht unmittelbar vor die Basis setzen: [Dies führt zu einem SyntaxError](/de/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation). Beachten Sie, dass `++` und `--` zulässig sind, da sie jeweils nur eine syntaktisch gültige Interpretation haben.

Beispielsweise ergibt `-2 ** 2` in Bash 4, in anderen Sprachen (etwa Python) jedoch -4. In JavaScript ist dieser Ausdruck ungültig, weil die Operation mehrdeutig ist. Sie müssen den betreffenden Teil des Ausdrucks einklammern – beispielsweise als `-(2 ** 2)` –, um die beabsichtigte Bedeutung eindeutig zu machen.

Beachten Sie, dass einige Programmiersprachen das Zirkumflexzeichen `^` für die Potenzierung verwenden. JavaScript verwendet dieses Zeichen jedoch für den [bitweisen XOR-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

## Beispiele

### Potenzierung mit Numbers

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
2 ** 1024; // Infinity
NaN ** 2; // NaN
NaN ** 0; // 1
1 ** Infinity; // NaN
```

Andere Werte, die keine BigInts sind, werden in Numbers umgewandelt:

```js
2 ** "3"; // 8
2 ** "hello"; // NaN
```

### Potenzierung mit BigInts

```js
2n ** 3n; // 8n
2n ** 1024n; // A very large number, but not Infinity
```

Bei der Potenzierung können BigInt- und Number-Operanden nicht gemischt werden.

```js example-bad
2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 ** 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Wenn Sie eine Potenzierung mit einem BigInt und einem Wert, der kein BigInt ist, durchführen möchten, wandeln Sie einen der beiden Operanden um:

```js
2n ** BigInt(2); // 4n
Number(2n) ** 2; // 4
```

### Assoziativität

```js-nolint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### Verwendung mit unären Operatoren

So kehren Sie das Vorzeichen des Ergebnisses eines Potenzierungsausdrucks um:

```js
-(2 ** 2); // -4
```

So legen Sie fest, dass die Basis eines Potenzierungsausdrucks eine negative Zahl ist:

```js
(-2) ** 2; // 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Restwert (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
