---
title: sepia()
slug: Web/CSS/filter-function/sepia
l10n:
  sourceCommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{CSSRef}}

Die **`sepia()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) konvertiert das Eingabebild in Sepia und verleiht ihm ein wärmeres, mehr gelb/braunes Erscheinungsbild. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-sepia.html")}}

## Syntax

```css
sepia(amount)
```

### Parameter

- `amount`
  - : Die Menge der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `100%` ist komplett sepia, während ein Wert von `0%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren für den Effekt. Der Anfangswert für [Interpolation](/de/docs/Glossary/interpolation) ist `0`.

## Beispiele

### Beispiele für korrekte Werte von sepia()

```css
sepia(0)     /* No effect */
sepia(.65)   /* 65% sepia */
sepia(100%)  /* Completely sepia */
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
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
