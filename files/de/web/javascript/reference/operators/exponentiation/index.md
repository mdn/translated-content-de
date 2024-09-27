---
title: Exponentiation (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Exponentiationsoperator (`**`)\*\* gibt das Ergebnis des Erhebens des ersten Operanden zur Potenz des zweiten Operanden zurück. Er entspricht {{jsxref("Math.pow()")}}, akzeptiert jedoch auch [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) als Operanden.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## Syntax

```js-nolint
x ** y
```

## Beschreibung

Der `**`-Operator ist für zwei Arten von Operanden überladen: Nummer und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt zunächst beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und testet deren Typen. Er führt eine BigInt-Exponentiation durch, wenn beide Operanden zu BigInts werden; andernfalls führt er eine Zahlen-Exponentiation durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt, aber der andere zu einer Zahl wird.

Für sowohl Zahlen als auch BigInts ergibt `0` zur positiven Potenz `0`, und `0` zur Potenz von `0` ergibt `1`. Für Zahlen ergibt `0` zu einer negativen Zahl `Infinity`, während `-0` zu einer negativen Zahl `-Infinity` ergibt.

`NaN ** 0` (und das entsprechende `Math.pow(NaN, 0)`) ist der einzige Fall, bei dem {{jsxref("NaN")}} nicht durch mathematische Operationen propagiert wird — er ergibt `1`, obwohl der Operand `NaN` ist. Darüber hinaus ist das Verhalten, wenn `base` 1 ist und `exponent` nicht endlich (±Infinity oder `NaN`) ist, anders als bei IEEE 754, das angibt, dass das Ergebnis 1 sein sollte, während JavaScript `NaN` zurückgibt, um die Rückwärtskompatibilität mit dem ursprünglichen Verhalten zu bewahren.

Bei der BigInt-Exponentiation wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Exponent `y` negativ ist. Dies ist der Fall, weil ein negativer Exponent wahrscheinlich zu einem Wert zwischen 0 und 1 führen würde (es sei denn, die Basis ist `1`, `-1` oder `0`), was auf Null gerundet wird, und höchstwahrscheinlich ein Entwicklerfehler ist.

Der Exponentiationsoperator ist [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` ist gleich `a ** (b ** c)`.

In den meisten Programmiersprachen, wie PHP, Python und anderen, die einen Exponentiationsoperator (`**`) haben, wird der Exponentiationsoperator definiert, eine höhere Priorität als unäre Operatoren, wie unäres `+` und unäres `-`, zu haben, es gibt jedoch einige Ausnahmen. Zum Beispiel, in Bash, hat der `**`-Operator eine niedrigere Priorität als unäre Operatoren.

In JavaScript ist es unmöglich, einen mehrdeutigen Exponentiationsausdruck zu schreiben. Das heißt, Sie können keinen unären Operator (mit [Priorität 14](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) sofort vor der Basisszahl setzen; [dies führt zu einem SyntaxError](/de/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

Zum Beispiel ergibt `-2 ** 2` 4 in Bash, aber -4 in anderen Sprachen (wie Python). Dies ist in JavaScript ungültig, da die Operation mehrdeutig ist. Sie müssen eine Seite in Klammern setzen — zum Beispiel als `-(2 ** 2)` —, um die Absicht eindeutig zu machen.

Beachten Sie, dass einige Programmiersprachen das Dachsymbol `^` für die Exponentiation verwenden, aber JavaScript verwendet dieses Symbol für den [Bitweise XOR-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

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

Andere Nicht-BigInt-Werte werden zu Zahlen gezwungen:

```js
2 ** "3"; // 8
2 ** "hello"; // NaN
```

### Exponentiation mit BigInts

```js
2n ** 3n; // 8n
2n ** 1024n; // A very large number, but not Infinity
```

Sie können BigInt- und Zahl-Operanden nicht in der Exponentiation mischen.

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
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
