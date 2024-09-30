---
title: opacity()
slug: Web/CSS/filter-function/opacity
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`opacity()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wendet Transparenz auf die Muster im Eingabebild an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-opacity.html")}}

> [!NOTE]
> Diese Funktion ähnelt der etablierteren {{Cssxref("opacity")}}-Eigenschaft. Der Unterschied ist, dass einige Browser mit Filtern Hardware-Beschleunigung für bessere Leistung bieten.

## Syntax

```css
opacity(amount)
```

### Parameter

- `amount`
  - : Die Menge der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `0%` ist vollständig transparent, während ein Wert von `100%` das Eingabeobjekt unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren auf den Effekt. Der Anfangswert für [Interpolation](/de/docs/Glossary/interpolation) ist `1`.

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

- Die anderen {{cssxref("&lt;filter-function&gt;")}}-Funktionen, die in den Werten der {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften verwendet werden können, sind:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- Die CSS-{{cssxref("opacity")}}-Eigenschaft
