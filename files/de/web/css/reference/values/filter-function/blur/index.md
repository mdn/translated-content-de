---
title: CSS-Funktion `blur()`
short-title: blur()
slug: Web/CSS/Reference/Values/filter-function/blur
l10n:
  sourceCommit: 35b1d907e22f58fcd01fc5d3d22f1e73089c7f3d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`blur()`** wendet eine [gaußsche Unschärfe](https://en.wikipedia.org/wiki/Gaussian_blur) auf das Eingabebild an. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

{{InteractiveExample("CSS Demo: blur()")}}

```css interactive-example-choice
filter: blur(0);
```

```css interactive-example-choice
filter: blur(4px);
```

```css interactive-example-choice
filter: blur(1.5rem);
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
/* No blur */
blur()
blur(0)

/* Blur with 8px radius */
blur(8px)

/* Blur with 1.17rem radius */
blur(1.17rem)
```

### Parameter

- {{cssxref("length")}} {{Optional_Inline}}
  - : Gibt den Radius der Unschärfe an. Er legt den Wert der Standardabweichung für die Gauß-Funktion fest, also wie viele Pixel auf dem Bildschirm ineinander übergehen. Ein größerer Wert erzeugt daher eine stärkere Unschärfe. Ein Wert von `0` lässt das Eingabebild unverändert. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Prozentwerte und negative Werte sind ungültig. Der Standardwert ist `0`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung des SVG-Filters

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit angewendeter `blur()`-Filterfunktion, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Mit dem SVG-Filterelement {{SVGElement("feGaussianBlur")}} lassen sich Inhalte ebenfalls weichzeichnen. Wir setzen `stdDeviation` auf den Unschärferadius. Anschließend können wir über die ID von {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="blur35" color-interpolation-filters="sRGB">
    <feGaussianBlur stdDeviation="3.5" />
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: blur(3.5px);
filter: url("#blur35"); /* with embedded SVG */
filter: url("fileName.svg#blur35"); /* external SVG */
```

#### CSS

Wir verwenden CSS, um Elemente anhand ihrer Klasse `css-filter` oder `svg-filter` weichzuzeichnen:

```css live-sample___svg-filter
.css-filter {
  filter: blur(3.5px);
}

.svg-filter {
  filter: url("#blur35");
}
```

```css hidden live-sample___svg-filter
th,
td {
  padding: 5px;
}
```

```html hidden live-sample___svg-filter
<table>
  <thead>
    <tr>
      <th><code>blur()</code> filter</th>
      <th>SVG filter equivalent</th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="css-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          class="svg-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('svg-filter','100%','280')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- Zu den weiteren {{cssxref("filter-function")}}-Funktionen, die als Werte für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, gehören:
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
