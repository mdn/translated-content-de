---
title: Exponentiation (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Exponentiationsoperator (`**`)\*\* gibt das Ergebnis zurück, wenn der erste Operand auf die Potenz des zweiten Operanden erhoben wird. Er ist äquivalent zu {{jsxref("Math.pow()")}}, akzeptiert jedoch auch [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) als Operanden.

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

Der `**`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zuerst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft deren Typen. Er führt BigInt-Exponentiation durch, wenn beide Operanden zu BigInts werden; andernfalls führt er eine Zahl-Exponentiation durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl bleibt.

Für sowohl Zahlen als auch BigInts gilt: `0` hoch eine positive Potenz ergibt `0`, und `0` hoch eine Potenz von `0` ergibt `1`. Für Zahlen gilt: `0` hoch eine negative Zahl ergibt `Infinity`, während `-0` hoch eine negative Zahl `-Infinity` ergibt.

`NaN ** 0` (und das entsprechende `Math.pow(NaN, 0)`) ist der einzige Fall, in dem {{jsxref("NaN")}} sich nicht durch mathematische Operationen fortpflanzt — es ergibt `1`, obwohl der Operand `NaN` ist. Darüber hinaus unterscheidet sich das Verhalten, wenn `base` 1 und `exponent` nicht endlich (±Infinity oder `NaN`) ist, von IEEE 754. Dieses spezifiziert, dass das Ergebnis 1 sein sollte, während JavaScript `NaN` zurückgibt, um die Rückwärtskompatibilität mit seinem ursprünglichen Verhalten zu bewahren.

Bei der Exponentiation von BigInt wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Exponent `y` negativ ist. Dies liegt daran, dass jeder negative Exponent wahrscheinlich ein Ergebnis zwischen 0 und 1 ergeben würde (es sei denn, die Basis ist `1`, `-1` oder `0`), das auf null gerundet wird, und vermutlich ein Entwicklerfehler ist.

Der Exponentiationsoperator ist [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` ist gleich `a ** (b ** c)`.

In den meisten Sprachen, wie PHP, Python und anderen, die einen Exponentiationsoperator (`**`) haben, ist der Exponentiationsoperator so definiert, dass er eine höhere Priorität als unäre Operatoren, wie unäres `+` und unäres `-`, hat, aber es gibt einige Ausnahmen. Zum Beispiel hat der `**`-Operator in Bash eine niedrigere Priorität als unäre Operatoren.

In JavaScript ist es unmöglich, einen mehrdeutigen Exponentiationsausdruck zu schreiben. Das bedeutet, dass Sie keinen unären Operator (mit [Priorität 14](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) direkt vor der Basiszahl setzen können; [dies würde zu einem SyntaxError führen](/de/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

Zum Beispiel ergibt `-2 ** 2` 4 in Bash, ist aber -4 in anderen Sprachen (wie Python). Dies ist in JavaScript ungültig, da die Operation mehrdeutig ist. Sie müssen eine Seite klammern – zum Beispiel als `-(2 ** 2)` – um die Absicht unmissverständlich zu machen.

Beachten Sie, dass einige Programmiersprachen das Caret-Symbol `^` für die Exponentiation verwenden, aber JavaScript verwendet dieses Symbol für den [bitweisen XOR-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

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

Sie können keine BigInt- und Zahlen-Operanden in der Exponentiation mischen.

```js example-bad
2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 ** 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Exponentiation zwischen einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

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
