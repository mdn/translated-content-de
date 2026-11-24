---
title: Potenzierung (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
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

### Parameter

- `x`
  - : Eine Präfix-Inkrementierung (`++x`), eine Präfix-Dekrementierung (`--x`) oder ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 15 (Postfix-Operatoren) oder höher. Sein Wert wird in [eine Zahl oder einen BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 13 (Potenzierung) oder höher. Sein Wert wird in [eine Zahl oder einen BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.

### Rückgabewert

Eine Zahl oder ein BigInt, die bzw. der `x` hoch `y` darstellt.

## Beschreibung

Der Operator `**` ist für zwei Operandentypen überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [wandelt zunächst beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInts werden, führt er eine BigInt-Potenzierung durch; andernfalls führt er eine Potenzierung mit Zahlen durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt und der andere zu einer Zahl wird.

Sowohl bei Zahlen als auch bei BigInts ergibt `0` hoch einem positiven Exponenten `0` und `0` hoch `0` ergibt `1`. Bei Zahlen ergibt `0` hoch einer negativen Zahl `Infinity`, `-0` hoch einer negativen ungeraden ganzen Zahl `-Infinity` und `-0` hoch jeder anderen negativen Zahl `Infinity`.

`NaN ** 0` (und das gleichwertige `Math.pow(NaN, 0)`) ist einer der wenigen Fälle, in denen sich {{jsxref("NaN")}} nicht durch mathematische Operationen fortpflanzt: Das Ergebnis ist `1`, obwohl ein Operand `NaN` ist. Außerdem weicht das Verhalten bei `base` gleich 1 und einem nicht endlichen `exponent` (±Infinity oder `NaN`) von IEEE 754 ab. Dort ist als Ergebnis 1 festgelegt, während JavaScript `NaN` zurückgibt, um die Abwärtskompatibilität mit seinem ursprünglichen Verhalten zu bewahren.

Bei der BigInt-Potenzierung wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Exponent `y` negativ ist. Der Grund dafür ist, dass ein negativer Exponent wahrscheinlich einen Wert zwischen 0 und 1 ergeben würde (sofern die Basis nicht `1`, `-1` oder `0` ist). Dieser würde auf null gerundet, was vermutlich nicht beabsichtigt ist.

Der Potenzierungsoperator ist [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` entspricht `a ** (b ** c)`.

In den meisten Sprachen mit einem Potenzierungsoperator (`**`), etwa PHP und Python, hat dieser Operator eine höhere Priorität als unäre Operatoren wie unäres `+` und unäres `-`. Es gibt jedoch einige Ausnahmen. In Bash hat der Operator `**` beispielsweise eine niedrigere Priorität als unäre Operatoren.

In JavaScript können Sie keinen mehrdeutigen Potenzierungsausdruck schreiben. Das heißt, Sie können einen unären Operator (mit [Priorität 14](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich `+`/`-`/`~`/`!`/`delete`/`void`/`typeof`/`await`) nicht unmittelbar vor die Basis setzen: [Dies führt zu einem SyntaxError](/de/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation). Beachten Sie, dass `++` und `--` zulässig sind, weil es für sie jeweils nur eine syntaktisch gültige Interpretation gibt.

Beispielsweise ergibt `-2 ** 2` in Bash 4, in anderen Sprachen (etwa Python) dagegen -4. In JavaScript ist dieser Ausdruck ungültig, da die Operation mehrdeutig ist. Sie müssen eine der beiden Seiten einklammern – beispielsweise als `-(2 ** 2)` –, um die beabsichtigte Bedeutung eindeutig zu machen.

Beachten Sie, dass manche Programmiersprachen das Zirkumflexzeichen `^` für die Potenzierung verwenden. JavaScript verwendet dieses Zeichen jedoch für den [bitweisen XOR-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

## Beispiele

### Potenzierung mit Zahlen

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

Andere Werte, die keine BigInts sind, werden in Zahlen umgewandelt:

```js
2 ** "3"; // 8
2 ** "hello"; // NaN
```

### Potenzierung mit BigInts

```js
2n ** 3n; // 8n
2n ** 1024n; // A very large number, but not Infinity
```

Bei der Potenzierung können Sie BigInt- und Zahl-Operanden nicht mischen.

```js example-bad
2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 ** 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um einen BigInt und einen Wert, der kein BigInt ist, für eine Potenzierung zu verwenden, wandeln Sie einen der beiden Operanden um:

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

So stellen Sie sicher, dass die Basis eines Potenzierungsausdrucks eine negative Zahl ist:

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
- [Inkrementierung (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrementierung (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
