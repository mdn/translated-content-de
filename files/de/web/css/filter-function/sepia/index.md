---
title: sepia()
slug: Web/CSS/filter-function/sepia
l10n:
  sourceCommit: 9ca1b6d1fe5e69fc288ad18c6986b581afafc0a4
---

{{CSSRef}}

Die **`sepia()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) konvertiert das Eingabebild in Sepia und verleiht ihm ein wärmeres, gelblich/braunes Aussehen. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-sepia.html")}}

## Syntax

```css
sepia(amount)
```

### Parameter

- `amount` {{Optional_Inline}}
  - : Der Grad der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `100%` ist komplett Sepia, während ein Wert von `0%` das Eingangssignal unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren des Effekts. Der Anfangswert für {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für korrekte Werte bei sepia()

```css
sepia(0)     /* No effect */
sepia(.65)   /* 65% sepia */

sepia()      /* Completely sepia */
sepia(100%)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, umfassen:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
