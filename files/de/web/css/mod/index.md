---
title: mod()
slug: Web/CSS/mod
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`mod()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt einen Modulus zurück, der übrig bleibt, wenn der erste Parameter durch den zweiten Parameter geteilt wird, ähnlich dem JavaScript-[Restoperator (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder). Der Modulus ist der Wert, der übrig bleibt, wenn ein Operand, der Dividend, durch einen zweiten Operand, den Divisor, geteilt wird. Er übernimmt immer das Vorzeichen des Divisors.

> Beispielsweise gibt die CSS-`mod(21, -4)`-Funktion den Rest `-1` zurück. Wenn man 21 durch -4 teilt, ergibt das 5 mit einem Rest von -1. Die vollständige Berechnung ist `21 / -4 = -4 * 5 - 1`.

## Syntax

```css
/* Unitless <number> */
line-height: mod(7, 2); /* 1 */
line-height: mod(14, 5); /* 4 */
line-height: mod(3.5, 2); /* 1.5 */

/* Unit based <percentage> and <dimension> */
margin: mod(15%, 2%); /* 1% */
margin: mod(18px, 4px); /* 2px */
margin: mod(19rem, 5rem); /* 4rem */
margin: mod(29vmin, 6vmin); /* 5vmin */
margin: mod(1000px, 29rem); /* 72px - if root font-size is 16px */

/* Negative/positive values */
rotate: mod(100deg, 30deg); /* 10deg */
rotate: mod(135deg, -90deg); /* -45deg */
rotate: mod(-70deg, 20deg); /* 10deg */
rotate: mod(-70deg, -15deg); /* -10deg */

/* Calculations */
scale: mod(10 * 2, 1.7); /* 1.3 */
rotate: mod(10turn, 18turn / 3); /* 4turn */
transition-duration: mod(20s / 2, 3000ms * 2); /* 4s */
```

### Parameter

Die `mod(dividend, divisor)`-Funktion akzeptiert zwei durch Komma getrennte Werte als Parameter. Beide Parameter müssen denselben Typ haben, [number](/de/docs/Web/CSS/number), [dimension](/de/docs/Web/CSS/dimension), oder {{cssxref("percentage")}}, damit die Funktion gültig ist. Während die Einheiten der beiden Parameter nicht identisch sein müssen, müssen sie vom gleichen Dimensionstyp sein, wie beispielsweise {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, um gültig zu sein.

- `dividend`

  - : Eine Berechnung, die zu einem {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} aufgelöst wird und den Dividend darstellt.

- `divisor`
  - : Eine Berechnung, die zu einem {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} aufgelöst wird und den Divisor darstellt.

### Rückgabewert

Gibt ein {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} (entspricht dem Typ der Parameter) zurück, das den Modulus darstellt, der das übrig gebliebene Ergebnis der Operation ist.

- Wenn `divisor` `0` ist, ist das Ergebnis `NaN`.
- Wenn `dividend` unendlich ist, ist das Ergebnis `NaN`.
- Wenn `divisor` positiv ist, ist das Ergebnis positiv (`0⁺`), und wenn `divisor` negativ ist, ist das Ergebnis negativ (`0⁻`).

### Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("round")}}
- {{CSSxRef("rem")}}
