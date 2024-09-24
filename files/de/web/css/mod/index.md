---
title: mod()
slug: Web/CSS/mod
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`mod()`**-Funktion in [CSS](/de/docs/Web/CSS) liefert den Modulus zurück, der übrig bleibt, wenn der erste Parameter durch den zweiten Parameter geteilt wird, ähnlich dem JavaScript-[Restoperator (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder). Der Modulus ist der Wert, der übrig bleibt, wenn ein Operand, der Dividend, durch einen zweiten Operand, den Divisor, geteilt wird. Er hat immer das Vorzeichen des Divisors.

> Zum Beispiel liefert die CSS-Funktion `mod(21, -4)` den Rest `-1` zurück. Wenn Sie 21 durch -4 teilen, ergibt das 5 mit einem Rest von -1. Die vollständige Berechnung lautet `21 / -4 = -4 * 5 - 1`.

## Syntax

```css
/* Zahlen ohne Einheit */
line-height: mod(7, 2); /* 1 */
line-height: mod(14, 5); /* 4 */
line-height: mod(3.5, 2); /* 1.5 */

/* Einheit basierend auf <percentage> und <dimension> */
margin: mod(15%, 2%); /* 1% */
margin: mod(18px, 4px); /* 2px */
margin: mod(19rem, 5rem); /* 4rem */
margin: mod(29vmin, 6vmin); /* 5vmin */
margin: mod(1000px, 29rem); /* 72px - wenn die Schriftgröße des Wurzelelements 16px beträgt */

/* Negative/positive Werte */
rotate: mod(100deg, 30deg); /* 10deg */
rotate: mod(135deg, -90deg); /* -45deg */
rotate: mod(-70deg, 20deg); /* 10deg */
rotate: mod(-70deg, -15deg); /* -10deg */

/* Berechnungen */
scale: mod(10 * 2, 1.7); /* 1.3 */
rotate: mod(10turn, 18turn / 3); /* 4turn */
transition-duration: mod(20s / 2, 3000ms * 2); /* 4s */
```

### Parameter

Die Funktion `mod(dividend, divisor)` akzeptiert zwei durch Kommas getrennte Werte als Parameter. Beide Parameter müssen denselben Typ haben, [Zahl](/de/docs/Web/CSS/number), [Dimension](/de/docs/Web/CSS/dimension) oder {{cssxref("percentage")}}, damit die Funktion gültig ist. Während die Einheiten in den beiden Parametern nicht gleich sein müssen, müssen sie vom selben Dimensionstyp sein, wie {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, um gültig zu sein.

- `dividend`

  - : Eine Berechnung, die sich zu einem {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} auflöst und den Dividend darstellt.

- `divisor`
  - : Eine Berechnung, die sich zu einem {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} auflöst und den Divisor darstellt.

### Rückgabewert

Gibt ein {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, oder {{CSSxREF("&lt;percentage&gt;")}} zurück (entspricht dem Parametertyp) und stellt den Modulus dar, das ist der verbleibende Wert der Operation.

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
