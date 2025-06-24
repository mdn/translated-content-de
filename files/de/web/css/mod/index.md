---
title: mod()
slug: Web/CSS/mod
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`mod()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt den Modulus zurück, der übrig bleibt, wenn der erste Parameter durch den zweiten Parameter geteilt wird, ähnlich wie der JavaScript [Restoperator (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder). Der Modulus ist der Wert, der übrig bleibt, wenn ein Operand, der Dividend, durch einen zweiten Operand, den Divisor, geteilt wird. Er nimmt immer das Vorzeichen des Divisors an.

Die Berechnung ist `a - (Math.floor(a / b) * b)`. Zum Beispiel gibt die CSS-Funktion `mod(21, -4)` den Rest von `-3` zurück. Die vollständige Berechnung ist `21 - (Math.floor(21 / -4) * -4)`. Beim Teilen von `21` durch `-4` ist das Ergebnis `-5.25`. Dies wird auf `-6` abgerundet. Die Multiplikation von `-6` mit `-4` ergibt `24`. Subtrahiert man diese `24` von den ursprünglichen `21`, so ergibt sich der Rest von `-3`.

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

Die Funktion `mod(dividend, divisor)` akzeptiert zwei kommagetrennte Werte als Parameter. Beide Parameter müssen denselben Typ haben, [number](/de/docs/Web/CSS/number), [dimension](/de/docs/Web/CSS/dimension) oder {{cssxref("percentage")}}, damit die Funktion gültig ist. Während die Einheiten der beiden Parameter nicht gleich sein müssen, müssen sie von derselben Dimensionstyp sein, wie z.B. {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}} oder {{cssxref("frequency")}}, um gültig zu sein.

- `dividend`

  - : Eine Berechnung, die sich zu einem {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}} oder {{CSSxREF("&lt;percentage&gt;")}} auflöst und den Dividend darstellt.

- `divisor`
  - : Eine Berechnung, die sich zu einem {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}} oder {{CSSxREF("&lt;percentage&gt;")}} auflöst und den Divisor darstellt.

### Rückgabewert

Gibt ein {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}} oder {{CSSxREF("&lt;percentage&gt;")}} zurück (entspricht dem Typ der Parameter), der den Modulus darstellt, also den übrig gebliebenen Wert der Operation.

- Wenn `divisor` `0` ist, ist das Ergebnis `NaN`.
- Wenn `dividend` unendlich ist, ist das Ergebnis `NaN`.
- Wenn `divisor` positiv ist, ist das Ergebnis positiv (`0⁺`), und wenn `divisor` negativ ist, ist das Ergebnis negativ (`0⁻`).

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("round")}}
- {{CSSxRef("rem")}}
