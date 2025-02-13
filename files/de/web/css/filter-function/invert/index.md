---
title: invert()
slug: Web/CSS/filter-function/invert
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`invert()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) invertiert die Farbwerte im Eingabebild. Ihr Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## Syntax

```css
invert(amount)
```

### Parameter

- `amount`
  - : Die Menge der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `100%` ist vollständig invertiert, während ein Wert von `0%` den Eingang unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren auf den Effekt. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`.

## Formale Syntax

{{CSSSyntax}}

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

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, sind:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
