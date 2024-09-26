---
title: invert()
slug: Web/CSS/filter-function/invert
l10n:
  sourceCommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{CSSRef}}

Die **`invert()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) invertiert die Farbproben im Eingabebild. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## Syntax

```css
invert(amount)
```

### Parameter

- `amount`
  - : Der Betrag der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `100%` ist vollständig invertiert, während ein Wert von `0%` den Eingang unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren für den Effekt. Der Anfangswert für die {{Glossary("interpolation")}} ist `0`.

## Beispiele

### Beispiele für korrekte Werte von invert()

```css
invert(0)     /* Kein Effekt */
invert(.6)    /* 60% Inversion */
invert(100%)  /* Vollständig invertiert */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, umfassen:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}