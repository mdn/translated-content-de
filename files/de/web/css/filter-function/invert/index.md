---
title: invert()
slug: Web/CSS/filter-function/invert
l10n:
  sourceCommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{CSSRef}}

Die **`invert()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) invertiert die Farbwerte im Eingabebild. Ihr Ergebnis ist ein {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## Syntax

```css
invert(amount)
```

### Parameter

- `amount`
  - : Die Stärke der Umkehrung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `100%` ist vollständig invertiert, während ein Wert von `0%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren des Effekts. Der Anfangswert für [Interpolation](/de/docs/Glossary/interpolation) ist `0`.

## Beispiele

### Beispiele für korrekte Werte für invert()

```css
invert(0)     /* No effect */
invert(.6)    /* 60% inversion */
invert(100%)  /* Completely inverted */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, umfassen:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
