---
title: grayscale()
slug: Web/CSS/filter-function/grayscale
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`grayscale()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) konvertiert das Eingabebild in Graustufen. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-grayscale.html")}}

## Syntax

```css
grayscale(amount)
```

### Parameter

- `amount`
  - : Der Anteil des Eingabebildes, der in Graustufen umgewandelt wird. Es wird entweder als {{cssxref("&lt;number&gt;")}} oder als {{cssxref("&lt;percentage&gt;")}} angegeben. Ein Wert von `100%` wandelt das Eingabebild vollständig in Graustufen um, während ein Wert von `0%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` haben lineare Multiplikatoren auf den Effekt. Wenn der `grayscale()`-Filter ohne Parameter vorhanden ist, ist der Standardwert `1`. Der anfängliche Wert, der für die {{Glossary("interpolation", "Interpolation")}} verwendet wird, ist `0`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für korrekte Werte für grayscale()

```css
grayscale(0)     /* No effect */
grayscale(.7)    /* 70% grayscale */
grayscale(100%)  /* Completely grayscale */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die bei den Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, sind:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
