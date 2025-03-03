---
title: grayscale()
slug: Web/CSS/filter-function/grayscale
l10n:
  sourceCommit: 9ca1b6d1fe5e69fc288ad18c6986b581afafc0a4
---

{{CSSRef}}

Die **`grayscale()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) konvertiert das Eingabebild in Graustufen. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-grayscale.html")}}

## Syntax

```css
grayscale(amount)
```

### Parameter

- `amount` {{Optional_Inline}}
  - : Die Menge des Eingabebildes, die in Graustufen konvertiert wird. Sie wird als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} angegeben. Ein Wert von `100%` verändert das Eingabebild vollständig zu Graustufen, während ein Wert von `0%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` haben lineare Multiplikatoren auf den Effekt. Der Anfangswert, der für {{Glossary("interpolation", "Interpolation")}} verwendet wird, ist `0`. Der Standardwert ist `1`.

## Formaler Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für korrekte Werte für grayscale()

```css
grayscale(0)     /* No effect */
grayscale(.7)    /* 70% grayscale */

grayscale()      /* Completely grayscale */
grayscale(1)
grayscale(100%)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, sind:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
