---
title: invert()
slug: Web/CSS/filter-function/invert
l10n:
  sourceCommit: 9ca1b6d1fe5e69fc288ad18c6986b581afafc0a4
---

{{CSSRef}}

Die **`invert()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) invertiert die Farbmuster im Eingabebild. Ihr Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## Syntax

```css
invert(amount)
```

### Parameter

- `amount` {{Optional_Inline}}
  - : Die Menge der Umkehrung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `100%` ist vollständig invertiert, während ein Wert von `0%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren für den Effekt. Der Anfangswert für {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für korrekte Werte für invert()

```css
invert(0)     /* No effect */
invert(.6)    /* 60% inversion */

invert()      /* Completely inverted */
invert(1)
invert(100%)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}}-Funktionen, die in den Werten der {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften verwendet werden können, sind:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
