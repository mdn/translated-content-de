---
title: rem()
slug: Web/CSS/rem
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`rem()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt den Rest zurück, der übrig bleibt, wenn der erste Parameter durch den zweiten Parameter geteilt wird, ähnlich dem JavaScript [Restoperator (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder). Der Rest ist der Wert, der übrig bleibt, wenn ein Operand, der Dividend, durch einen zweiten Operand, den Divisor, geteilt wird. Er übernimmt immer das Vorzeichen des Dividenden.

> Zum Beispiel gibt die CSS `rem(27, 5)`-Funktion den Rest `2` zurück. Wenn 27 durch 5 geteilt wird, ist das Ergebnis 5 mit einem Rest von 2. Die vollständige Berechnung ist `27 / 5 = 5 * 5 + 2`.

## Syntax

```css
/* Unitless <number> */
line-height: rem(21, 2); /* 1 */
line-height: rem(14, 5); /* 4 */
line-height: rem(5.5, 2); /* 1.5 */

/* Unit based <percentage> and <dimension> */
margin: rem(14%, 3%); /* 2% */
margin: rem(18px, 5px); /* 3px */
margin: rem(10rem, 6rem); /* 4rem */
margin: rem(26vmin, 7vmin); /* 5vmin */
margin: rem(1000px, 29rem); /* 72px - if root font-size is 16px */

/* Negative/positive values */
rotate: rem(200deg, 30deg); /* 20deg */
rotate: rem(140deg, -90deg); /* 50deg */
rotate: rem(-90deg, 20deg); /* -10deg */
rotate: rem(-55deg, -15deg); /* -10deg */

/* Calculations */
scale: rem(10 * 2, 1.7); /* 1.3 */
rotate: rem(10turn, 18turn / 3); /* 4turn */
transition-duration: rem(20s / 2, 3000ms * 2); /* 4s */
```

### Parameter

Die `rem(dividend, divisor)` Funktion akzeptiert zwei durch Kommas getrennte Werte als ihre Parameter. Beide Parameter müssen denselben Typ haben, [Zahl](/de/docs/Web/CSS/number), [Dimension](/de/docs/Web/CSS/dimension), oder {{cssxref("percentage")}}, damit die Funktion gültig ist. Während die Einheiten in den beiden Parametern nicht dieselben sein müssen, müssen sie vom selben Dimensionstyp sein, wie z.B. {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, um gültig zu sein.

- `dividend`

  - : Eine Berechnung, die sich zu einer {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} auflöst, die den Dividend repräsentiert.

- `divisor`
  - : Eine Berechnung, die sich zu einer {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} auflöst, die den Divisor repräsentiert.

### Rückgabewert

Gibt eine {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} zurück (entsprechend dem Typ der Parameter), die den Rest repräsentiert, also das, was von der Operation übrig bleibt.

- Wenn der `divisor` `0` ist, ist das Ergebnis `NaN`.
- Wenn der `dividend` unendlich ist, ist das Ergebnis `NaN`.
- Wenn der `dividend` positiv ist, ist das Ergebnis positiv (`0⁺`), und wenn der `dividend` negativ ist, ist das Ergebnis negativ (`0⁻`).

### Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("round")}}
- {{CSSxRef("mod")}}
