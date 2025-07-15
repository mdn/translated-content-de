---
title: sepia()
slug: Web/CSS/filter-function/sepia
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`sepia()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wandelt das Eingabebild in Sepia um und verleiht ihm ein wärmeres, gelblich/braunes Erscheinungsbild. Ihr Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("CSS Demo: sepia()")}}

```css interactive-example-choice
filter: sepia(0);
```

```css interactive-example-choice
filter: sepia(0.2);
```

```css interactive-example-choice
filter: sepia(60%);
```

```css interactive-example-choice
filter: sepia(1);
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
sepia(amount)
```

### Parameter

- `amount` {{Optional_Inline}}
  - : Die Menge der Umwandlung, spezifiziert als ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `100%` ist vollständig sepia, während ein Wert von `0%` die Eingabe unverändert lässt. Werte zwischen `0%` und `100%` wirken als lineare Multiplikatoren auf den Effekt. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für korrekte Werte für sepia()

```css
sepia(0)     /* No effect */
sepia(.65)   /* 65% sepia */

sepia()      /* Completely sepia */
sepia(100%)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, umfassen:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
