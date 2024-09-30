---
title: Potenzierung (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Potenzierungsoperator (`**`)** gibt das Ergebnis der Erhebung des ersten Operanden zur Potenz des zweiten Operanden zurück. Er ist gleichwertig zu {{jsxref("Math.pow()")}}, außer dass er auch [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) als Operanden akzeptiert.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## Syntax

```js-nolint
x ** y
```

## Beschreibung

Der `**` Operator ist für zwei Typen von Operanden überladen: Zahlen und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er verwandelt beide Operanden zuerst in numerische Werte und prüft deren Typen. Er führt eine BigInt-Potenzierung durch, wenn beide Operanden zu BigInts werden; andernfalls wird eine Zahlenpotenzierung durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt und der andere zu einer Zahl wird.

Für sowohl Zahlen als auch BigInts ergibt `0` hoch zu einer positiven Potenz `0`, und `0` hoch zu einer Potenz von `0` ergibt `1`. Für Zahlen ergibt `0` hoch zu einer negativen Zahl `Infinity`, während `-0` hoch zu einer negativen Zahl `-Infinity` ergibt.

`NaN ** 0` (und das Äquivalent `Math.pow(NaN, 0)`) ist der einzige Fall, bei dem {{jsxref("NaN")}} nicht durch mathematische Operationen propagiert wird – es gibt `1` zurück, obwohl der Operand `NaN` ist. Zudem ist das Verhalten, wenn die Basis 1 und der Exponent nicht endlich (±Infinity oder `NaN`) ist, anders als in IEEE 754, das spezifiziert, dass das Ergebnis 1 sein sollte, während JavaScript `NaN` zurückgibt, um die Rückwärtskompatibilität mit seinem ursprünglichen Verhalten zu bewahren.

Für die BigInt-Potenzierung wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Exponent `y` negativ ist. Dies liegt daran, dass ein negativer Exponent wahrscheinlich zu einem Wert zwischen 0 und 1 führen würde (außer die Basis ist `1`, `-1` oder `0`), der auf null gerundet wird und wahrscheinlich ein Entwicklerfehler ist.

Der Potenzierungsoperator ist [rechtsassoziativ](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` ist gleich `a ** (b ** c)`.

In den meisten Sprachen, wie PHP, Python und anderen, die einen Potenzierungsoperator (`**`) besitzen, hat der Potenzierungsoperator eine höhere Priorität als unäre Operatoren, wie unäres `+` und unäres `-`, aber es gibt einige Ausnahmen. Zum Beispiel hat in Bash der `**` Operator eine niedrigere Priorität als unäre Operatoren.

In JavaScript ist es unmöglich, einen mehrdeutigen Potenzierungsausdruck zu schreiben. Das heißt, Sie können keinen unären Operator (mit [Priorität 14](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) unmittelbar vor der Basiszahl setzen; [dies führt zu einem SyntaxError](/de/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

Zum Beispiel ist `-2 ** 2` in Bash 4, aber in anderen Sprachen (wie Python) -4. Dies ist ungültig in JavaScript, da die Operation mehrdeutig ist. Sie müssen entweder die eine oder die andere Seite in Klammern setzen – zum Beispiel als `-(2 ** 2)` – um die Absicht unmissverständlich zu machen.

Beachten Sie, dass einige Programmiersprachen das Caret-Symbol `^` für die Potenzierung verwenden, aber JavaScript benutzt dieses Symbol für den [bitweisen XOR-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

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

Andere Nicht-BigInt-Werte werden zu Zahlen umgewandelt:

```js
2 ** "3"; // 8
2 ** "hello"; // NaN
```

### Potenzierung mit BigInts

```js
2n ** 3n; // 8n
2n ** 1024n; // A very large number, but not Infinity
```

Sie können BigInt und Zahlenoperanden nicht in der Potenzierung mischen.

```js example-bad
2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 ** 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Potenzierung mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der beiden Operanden:

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

Um das Vorzeichen des Ergebnisses eines Potenzierungsausdrucks zu invertieren:

```js
-(2 ** 2); // -4
```

Um die Basis eines Potenzierungsausdrucks zu einer negativen Zahl zu machen:

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
