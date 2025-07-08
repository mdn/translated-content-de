---
title: Exponentiation (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Exponentiationsoperator (`**`)\*\* gibt das Ergebnis des Erhebens des ersten Operanden zur Potenz des zweiten Operanden zurück. Er entspricht {{jsxref("Math.pow()")}}, außer dass er auch [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) als Operanden akzeptiert.

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

Der `**` Operator ist für zwei Typen von Operanden überladen: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt beide Operanden zuerst dazu, numerische Werte zu sein](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft ihre Typen. Er führt BigInt-Exponentiation aus, wenn beide Operanden zu BigInts werden; andernfalls führt er number-Exponentiation aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einem number.

Für sowohl numbers als auch BigInts gilt, dass `0` zu einer positiven Potenz erhoben `0` zurückgibt, und `0` zur Potenz `0` erhebt `1` zurückgibt. Für numbers gilt, dass `0` zu einer negativen Zahl erhoben `Infinity` zurückgibt, während `-0` zu einer negativen Zahl erhoben `-Infinity` zurückgibt.

`NaN ** 0` (und das entsprechende `Math.pow(NaN, 0)`) ist der einzige Fall, in dem {{jsxref("NaN")}} sich nicht durch mathematische Operationen hindurch propagiert — es gibt `1` zurück, obwohl der Operand `NaN` ist. Zusätzlich unterscheidet sich das Verhalten, wenn `base` 1 ist und `exponent` nicht endlich (±Infinity oder `NaN`) ist, von IEEE 754, das vorschreibt, dass das Ergebnis 1 sein sollte, während JavaScript `NaN` zurückgibt, um die Rückwärtskompatibilität mit seinem ursprünglichen Verhalten zu erhalten.

Bei der BigInt-Exponentiation wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Exponent `y` negativ ist. Dies liegt daran, dass ein negativer Exponent wahrscheinlich zu einem Wert zwischen 0 und 1 führen würde (außer der Basis ist `1`, `-1` oder `0`), der auf null gerundet wird, und wahrscheinlich einen Entwicklerfehler darstellt.

Der Exponentiationsoperator ist [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` ist gleich `a ** (b ** c)`.

In den meisten Sprachen, wie PHP, Python und anderen, die einen Exponentiationsoperator (`**`) haben, hat der Exponentiationsoperator eine höhere Priorität als unäre Operatoren, wie z.B. unäres `+` und unäres `-`, es gibt jedoch einige Ausnahmen. Zum Beispiel ist im Bash-Skript der `**` Operator definiert, eine niedrigere Priorität als unäre Operatoren zu haben.

In JavaScript ist es unmöglich, einen mehrdeutigen Exponentiationsausdruck zu schreiben. Das bedeutet, Sie können keinen unären Operator (mit [Priorität 14](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) direkt vor der Basisziffer setzen; [das wird einen SyntaxError verursachen](/de/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

Zum Beispiel ist `-2 ** 2` im Bash-Skript 4, aber in anderen Sprachen (wie Python) -4. Dies ist in JavaScript ungültig, da die Operation mehrdeutig ist. Sie müssen entweder die eine oder die andere Seite einklammern — zum Beispiel als `-(2 ** 2)` — um die Absicht eindeutig zu machen.

Beachten Sie, dass einige Programmiersprachen das Zirkumflexsymbol `^` für Exponentiation verwenden, aber JavaScript verwendet dieses Symbol für den [bitweisen XOR Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

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

Andere nicht-BigInt-Werte werden zu Zahlen umgewandelt:

```js
2 ** "3"; // 8
2 ** "hello"; // NaN
```

### Exponentiation mit BigInts

```js
2n ** 3n; // 8n
2n ** 1024n; // A very large number, but not Infinity
```

Sie können BigInt- und Zahlenoperanden bei der Exponentiation nicht mischen.

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

### Nutzung mit unären Operatoren

Um das Vorzeichen des Ergebnisses eines Exponentiationsausdrucks zu invertieren:

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
