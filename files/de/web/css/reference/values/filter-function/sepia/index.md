---
title: CSS-Funktion `sepia()`
short-title: sepia()
slug: Web/CSS/Reference/Values/filter-function/sepia
l10n:
  sourceCommit: cff28ac91efd68d0809779c81902bd080f614a1d
---

Die **`sepia()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wandelt das Eingabebild in Sepiatöne um und verleiht ihm ein wärmeres, stärker gelb-braunes Aussehen. Ihr Ergebnis ist eine {{cssxref("filter-function")}}.

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
  - : Der Grad der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Bei einem Wert von `100%` wird das Bild vollständig in Sepiatöne umgewandelt, während es bei `0%` unverändert bleibt. Werte zwischen `0%` und `100%` skalieren den Effekt linear. Werte über `100%` sind zulässig, der Effekt wird jedoch auf `100%` begrenzt. Negative Werte sind nicht zulässig. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für gültige Werte von `sepia()`

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

Zu den weiteren {{cssxref("filter-function")}}-Funktionen, die als Werte der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, gehören:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
