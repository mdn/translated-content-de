---
title: grayscale()
slug: Web/CSS/Reference/Values/filter-function/grayscale
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`grayscale()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) konvertiert das Eingabebild in Graustufen. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("CSS Demo: grayscale()")}}

```css interactive-example-choice
filter: grayscale(0);
```

```css interactive-example-choice
filter: grayscale(0.2);
```

```css interactive-example-choice
filter: grayscale(60%);
```

```css interactive-example-choice
filter: grayscale(1);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## Syntax

```css
grayscale(amount)
```

### Parameter

- `amount` {{Optional_Inline}}
  - : Menge des Eingabebildes, die in Graustufen konvertiert wird. Es wird als {{cssxref("&lt;number&gt;")}} oder als {{cssxref("&lt;percentage&gt;")}} angegeben. Ein Wert von `100%` ändert das Eingangsbild komplett in Graustufen, während ein Wert von `0%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` haben lineare Multiplikatoren auf den Effekt. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele korrekter Werte für grayscale()

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

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften verwendet werden können, umfassen:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
