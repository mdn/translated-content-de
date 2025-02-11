---
title: Exponentiation (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Exponentiations-Operator (`**`)\*\* gibt das Ergebnis zurück, wenn der erste Operand auf die Potenz des zweiten Operanden angehoben wird. Er ist äquivalent zu {{jsxref("Math.pow()")}}, außer dass er auch [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) als Operanden akzeptiert.

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

Der `**`-Operator ist für zwei Typen von Operanden überladen: Nummern und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er erzwingt zunächst die [Umwandlung beider Operanden in numerische Werte](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft dann deren Typen. Er führt eine BigInt-Exponentiation aus, wenn beide Operanden zu BigInts werden; andernfalls führt er eine numerische Exponentiation aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch eine Nummer bleibt.

Für sowohl Zahlen als auch BigInts gilt: `0` hoch eine positive Potenz ergibt `0`, und `0` hoch die Potenz `0` ergibt `1`. Für Zahlen ergibt `0` hoch eine negative Zahl `Infinity`, während `-0` hoch eine negative Zahl `-Infinity` ergibt.

`NaN ** 0` (und das äquivalente `Math.pow(NaN, 0)`) ist der einzige Fall, bei dem {{jsxref("NaN")}} nicht durch mathematische Operationen propagiert wird – es ergibt `1`, obwohl der Operand `NaN` ist. Zusätzlich unterscheidet sich das Verhalten, wenn die `base` 1 ist und `exponent` nicht endlich ist (±Infinity oder `NaN`), von IEEE 754, was spezifiziert, dass das Ergebnis 1 sein sollte. JavaScript gibt jedoch `NaN` zurück, um die Rückwärtskompatibilität mit dem ursprünglichen Verhalten zu erhalten.

Bei BigInt-Exponentiation wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Exponent `y` negativ ist. Dies liegt daran, dass jeder negative Exponent wahrscheinlich einen Wert zwischen 0 und 1 (außer die Basis ist `1`, `-1` oder `0`) ergibt, der auf Null gerundet wird, was wahrscheinlich ein Entwicklerfehler ist.

Der Exponentiations-Operator ist [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` ist gleich `a ** (b ** c)`.

In den meisten Programmiersprachen, wie PHP, Python und anderen, die einen Exponentiations-Operator (`**`) haben, wird der Exponentiations-Operator so definiert, dass er eine höhere Priorität als unäre Operatoren hat, wie unäres `+` und unäres `-`, aber es gibt ein paar Ausnahmen. Zum Beispiel hat der `**`-Operator in Bash eine niedrigere Priorität als unäre Operatoren.

In JavaScript ist es unmöglich, einen mehrdeutigen Exponentiations-Ausdruck zu schreiben. Das heißt, Sie können keinen unären Operator (mit [Priorität 14](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) direkt vor die Basenummer setzen; [das führt zu einem SyntaxError](/de/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

Zum Beispiel ergibt `-2 ** 2` in Bash 4, aber -4 in anderen Sprachen (wie Python). Dies ist in JavaScript ungültig, da die Operation mehrdeutig ist. Sie müssen eine Seite klammern – zum Beispiel als `-(2 ** 2)` –, um die Absicht eindeutig zu machen.

Beachten Sie, dass einige Programmiersprachen das Caret-Symbol `^` für Exponentiation verwenden, aber JavaScript verwendet dieses Symbol für den [Bitweise-XOR-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

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

Sie können BigInt- und Nummer-Operanden bei der Exponentiation nicht mischen.

```js example-bad
2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 ** 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Exponentiation mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

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

Um das Vorzeichen des Ergebnisses eines Exponentiationsausdrucks zu invertieren:

```js
-(2 ** 2); // -4
```

Um die Basis eines Exponentiationsausdrucks negativ zu machen:

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
- [Modulo (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
