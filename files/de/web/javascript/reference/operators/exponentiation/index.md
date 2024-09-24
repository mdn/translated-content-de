---
title: Exponentiation (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Exponentiationsoperator (`**`)** gibt das Ergebnis der Potenzierung des ersten Operanden mit der Potenz des zweiten Operanden zurück. Er ist äquivalent zu {{jsxref("Math.pow()")}}, akzeptiert jedoch auch [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) als Operanden.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## Syntax

```js-nolint
x ** y
```

## Beschreibung

Der `**`-Operator ist für zwei Typen von Operanden überladen: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und testet deren Typen. Er führt eine BigInt-Exponentiation durch, wenn beide Operanden BigInts werden; andernfalls führt er eine number-Exponentiation durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt, der andere jedoch zu einer number wird.

Für sowohl Zahlen als auch BigInts ergibt `0` hoch eine positive Potenz `0`, und `0` hoch `0` ergibt `1`. Bei numbers ergibt `0` hoch einer negativen Zahl `Infinity`, während `-0` hoch einer negativen Zahl `-Infinity` ergibt.

`NaN ** 0` (und das entsprechende `Math.pow(NaN, 0)`) ist der einzige Fall, bei dem {{jsxref("NaN")}} nicht durch mathematische Operationen propagiert wird — er gibt `1` zurück, obwohl der Operand `NaN` ist. Zusätzlich weicht das Verhalten, wenn `base` 1 ist und `exponent` nicht endlich ist (±Infinity oder `NaN`), von IEEE 754 ab, das angibt, dass das Ergebnis 1 sein sollte, während JavaScript `NaN` zurückgibt, um die Rückwärtskompatibilität mit seinem ursprünglichen Verhalten zu wahren.

Für BigInt-Exponentiation wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Exponent `y` negativ ist. Dies liegt daran, dass jeder negative Exponent wahrscheinlich einen Wert zwischen 0 und 1 ergeben würde (es sei denn, die Basis ist `1`, `-1` oder `0`), der auf null gerundet wird, und wahrscheinlich ein Entwicklerfehler ist.

Der Exponentiationsoperator ist [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` ist gleich `a ** (b ** c)`.

In den meisten Sprachen, wie PHP, Python und anderen, die einen Exponentiationsoperator (`**`) haben, ist der Exponentiationsoperator definiert, um eine höhere Priorität als unäre Operatoren, wie unäres `+` und unäres `-`, zu haben, aber es gibt einige Ausnahmen. Zum Beispiel ist in Bash der `**`-Operator definiert, um eine niedrigere Priorität als unäre Operatoren zu haben.

In JavaScript ist es unmöglich, einen mehrdeutigen Exponentiationsausdruck zu schreiben. Das heißt, Sie können keinen unären Operator (mit [Priorität 14](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) direkt vor der Basiszahl setzen; [dies würde einen SyntaxError verursachen](/de/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

Zum Beispiel ist `-2 ** 2` in Bash 4, aber in anderen Sprachen (wie Python) -4. Dies ist in JavaScript ungültig, da der Vorgang mehrdeutig ist. Sie müssen entweder die eine oder die andere Seite klammern — zum Beispiel so: `-(2 ** 2)` — um die Absicht unmissverständlich zu machen.

Beachten Sie, dass einige Programmiersprachen das Caret-Symbol `^` für Exponentiation verwenden, aber JavaScript verwendet dieses Symbol für den [bitweisen XOR-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

## Beispiele

### Exponentiation mit numbers

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

Andere Nicht-BigInt-Werte werden in numbers umgewandelt:

```js
2 ** "3"; // 8
2 ** "hello"; // NaN
```

### Exponentiation mit BigInts

```js
2n ** 3n; // 8n
2n ** 1024n; // Eine sehr große Zahl, aber nicht Infinity
```

Sie können BigInt- und number-Operanden bei der Exponentiation nicht mischen.

```js example-bad
2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 ** 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um die Exponentiation mit einem BigInt und einer Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

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

## Browserkompatibilität

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
