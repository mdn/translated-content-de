---
title: "`opacity()` CSS-Funktion"
short-title: opacity()
slug: Web/CSS/Reference/Values/filter-function/opacity
l10n:
  sourceCommit: cff28ac91efd68d0809779c81902bd080f614a1d
---

Die **`opacity()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wendet Transparenz auf die Bildpunkte des Eingabebildes an. Ihr Ergebnis ist eine {{cssxref("filter-function")}}.

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
> Diese Funktion ähnelt der länger etablierten {{Cssxref("opacity")}}-Eigenschaft. Der Unterschied besteht darin, dass einige Browser für Filter Hardwarebeschleunigung bereitstellen, um die Leistung zu verbessern.

## Syntax

```css
opacity(amount)
```

### Parameter

- `amount` {{Optional_Inline}}
  - : Das Ausmaß der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert von `0%` ist vollständig transparent, während ein Wert von `100%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` skalieren den Effekt linear. Werte über `100%` sind zulässig, aber der Effekt wird auf `100%` begrenzt. Negative Werte sind nicht zulässig. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `1`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für gültige Werte für opacity()

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

- Zu den weiteren {{cssxref("filter-function")}}-Funktionen, die als Werte der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, gehören:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- Die CSS-Eigenschaft {{cssxref("opacity")}}
