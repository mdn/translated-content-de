---
title: sepia()
slug: Web/CSS/filter-function/sepia
l10n:
  sourceCommit: c9f96f06d4fbd265808f298eb9b2773f739860c5
---

{{CSSRef}}

Die **`sepia()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wandelt das Eingabebild in Sepia um und verleiht ihm ein wärmeres, gelblich/braunes Erscheinungsbild. Ihr Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-sepia.html")}}

## Syntax

```css
sepia(amount)
```

### Parameter

- `amount`
  - : Die Menge der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder als {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `100%` ist vollständig sepia, während ein Wert von `0%` das Eingangsbild unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren für den Effekt. Der Anfangswert für {{Glossary("interpolation", "Interpolation")}} ist `0`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für korrekte Werte für sepia()

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

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, sind:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
