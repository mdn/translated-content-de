---
title: "`grayscale()`-CSS-Funktion"
short-title: grayscale()
slug: Web/CSS/Reference/Values/filter-function/grayscale
l10n:
  sourceCommit: cff28ac91efd68d0809779c81902bd080f614a1d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`grayscale()`** wandelt das Eingabebild in Graustufen um. Ihr Ergebnis ist eine {{cssxref("filter-function")}}.

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
  - : Anteil des Eingabebilds, der in Graustufen umgewandelt wird. Er wird als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} angegeben. Ein Wert von `100%` wandelt das Eingabebild vollständig in Graustufen um, während ein Wert von `0%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` skalieren den Effekt linear. Werte über `100%` sind zulässig, der Effekt wird jedoch auf `100%` begrenzt. Negative Werte sind nicht zulässig. Der für die {{Glossary("interpolation", "Interpolation")}} verwendete Anfangswert ist `0`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für gültige Werte von grayscale()

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

Zu den weiteren {{cssxref("filter-function")}}-Funktionen, die als Werte der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, gehören:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
