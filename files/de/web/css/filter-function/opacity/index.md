---
title: opacity()
slug: Web/CSS/filter-function/opacity
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`opacity()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wendet Transparenz auf die Muster im Eingabebild an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("CSS Demo: opacity()")}}

```css interactive-example-choice
filter: opacity(1);
```

```css interactive-example-choice
filter: opacity(80%);
```

```css interactive-example-choice
filter: opacity(50%);
```

```css interactive-example-choice
filter: opacity(0.2);
```

```css interactive-example-choice
filter: opacity(0);
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

> [!NOTE]
> Diese Funktion ist ähnlich der etablierteren {{Cssxref("opacity")}}-Eigenschaft. Der Unterschied besteht darin, dass einige Browser bei Verwendung von Filtern Hardware-Beschleunigung für eine bessere Leistung bieten können.

## Syntax

```css
opacity(amount)
```

### Parameter

- `amount` {{Optional_Inline}}
  - : Der Betrag der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `0%` ist vollständig transparent, während ein Wert von `100%` den Eingabewert unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren auf den Effekt. Der Anfangswert für {{Glossary("interpolation", "Interpolation")}} ist `1`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für korrekte Werte für opacity()

```css
opacity(0%)   /* Completely transparent */
opacity(50%)  /* 50% transparent */

opacity()     /* No effect */
opacity(1)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("&lt;filter-function&gt;")}}-Funktionen, die in Werten der {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften verwendet werden können, umfassen:
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
