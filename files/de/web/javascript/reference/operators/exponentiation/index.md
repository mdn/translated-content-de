---
title: Exponentiation (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **Exponentiationsoperator (`**`)\*\* gibt das Ergebnis zurück, wenn der erste Operant auf die Potenz des zweiten Operanten erhöht wird. Er ist äquivalent zu {{jsxref("Math.pow()")}}, mit der Ausnahme, dass er auch [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) als Operanden akzeptiert.

{{InteractiveExample("JavaScript Demo: Expressions - Exponentiation operator")}}

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

Der `**`-Operator ist für zwei Typen von Operanden überladen: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt zunächst beide Operanden in numerische Werte](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und testet deren Typen. Er führt BigInt-Exponentiation durch, wenn beide Operanden zu BigInts werden; andernfalls führt er die Exponentiation mit Zahlen durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch eine Zahl bleibt.

Für sowohl Zahlen als auch BigInts ergibt `0` hoch eine positive Potenz `0`, und `0` hoch `0` ergibt `1`. Für Zahlen ergibt `0` hoch eine negative Zahl `Infinity`, während `-0` hoch eine negative Zahl `-Infinity` ergibt.

`NaN ** 0` (und das äquivalente `Math.pow(NaN, 0)`) ist der einzige Fall, bei dem {{jsxref("NaN")}} sich nicht durch mathematische Operationen fortsetzt — er gibt `1` zurück, obwohl der Operant `NaN` ist. Darüber hinaus ist das Verhalten, bei dem die Basis `1` und der Exponent nicht endlich (±Infinity oder `NaN`) ist, anders als in IEEE 754, das angibt, dass das Ergebnis 1 sein sollte, während JavaScript `NaN` zurückgibt, um die Rückwärtskompatibilität mit seinem ursprünglichen Verhalten zu erhalten.

Bei der BigInt-Exponentiation wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Exponent `y` negativ ist. Dies liegt daran, dass jeder negative Exponent wahrscheinlich zu einem Wert zwischen 0 und 1 führen würde (es sei denn, die Basis ist `1`, `-1` oder `0`), der auf null abgerundet wird, und wahrscheinlich ein Entwicklerfehler ist.

Der Exponentiationsoperator ist [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` ist gleich `a ** (b ** c)`.

In den meisten Sprachen wie PHP, Python und anderen, die einen Exponentiationsoperator (`**`) haben, wird der Exponentiationsoperator so definiert, dass er eine höhere Priorität hat als unäre Operatoren wie unäres `+` und unäres `-`, es gibt jedoch einige Ausnahmen. Beispielsweise hat der `**`-Operator in Bash eine niedrigere Priorität als unäre Operatoren.

In JavaScript ist es unmöglich, einen mehrdeutigen Exponentiationsausdruck zu schreiben. Das bedeutet, dass Sie keinen unären Operator (mit [Priorität 14](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) direkt vor die Basiszahl setzen können; [dies würde einen SyntaxError verursachen](/de/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

Beispielsweise ist `-2 ** 2` in Bash 4, aber in anderen Sprachen (wie Python) -4. Dies ist in JavaScript ungültig, da der Ausdruck mehrdeutig ist. Sie müssen entweder die linke oder rechte Seite in Klammern setzen — zum Beispiel als `-(2 ** 2)` — um die Absicht unmissverständlich zu machen.

Beachten Sie, dass einige Programmiersprachen das Caret-Symbol `^` für Exponentiation verwenden, aber JavaScript verwendet dieses Symbol für den [bitweisen XOR-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

## Beispiele

### Exponentiation mit Zahlen

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

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
2 ** "3"; // 8
2 ** "hello"; // NaN
```

### Exponentiation mit BigInts

```js
2n ** 3n; // 8n
2n ** 1024n; // A very large number, but not Infinity
```

Sie können keine BigInt- und Zahlenoperanden in der Exponentiation mischen.

```js example-bad
2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 ** 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um die Exponentiation mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

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

Um das Vorzeichen des Ergebnisses eines Exponentiationsausdrucks umzukehren:

```js
-(2 ** 2); // -4
```

Um die Basis eines Exponentiationsausdrucks zu einer negativen Zahl zu machen:

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
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
