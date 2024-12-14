---
title: opacity()
slug: Web/CSS/filter-function/opacity
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

Die **`opacity()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wendet Transparenz auf die Samples im Eingabebild an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-opacity.html")}}

> [!NOTE]
> Diese Funktion ist der etablierten {{Cssxref("opacity")}}-Eigenschaft ähnlich. Der Unterschied besteht darin, dass einige Browser bei Filtern Hardware-Beschleunigung zur Leistungsverbesserung bieten.

## Syntax

```css
opacity(amount)
```

### Parameter

- `amount`
  - : Die Menge der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `0%` ist komplett transparent, während ein Wert von `100%` das Eingabeobjekt unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren für den Effekt. Der anfängliche Wert für die {{Glossary("interpolation", "Interpolation")}} ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für korrekte Werte für opacity()

```css
opacity(0%)   /* Completely transparent */
opacity(50%)  /* 50% transparent */
opacity(1)    /* No effect */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("&lt;filter-function&gt;")}}-Funktionen, die in Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, sind:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- Die CSS {{cssxref("opacity")}}-Eigenschaft
