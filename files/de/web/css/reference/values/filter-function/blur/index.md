---
title: "`blur()` CSS-Funktion"
short-title: blur()
slug: Web/CSS/Reference/Values/filter-function/blur
l10n:
  sourceCommit: 8e660776b8b6557d4166f97bc1a8f26e056e7362
---

Die **`blur()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ist eine {{cssxref("filter-function")}}, die einen [Gaußschen Weichzeichner](https://en.wikipedia.org/wiki/Gaussian_blur) auf das Eingabebild anwendet.

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

## Zugehörige Eigenschaften und Funktionen

Diese Funktion kann als Wert der folgenden CSS-Eigenschaften verwendet werden:

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}

Diese Funktion kann auch als Parameter der folgenden CSS-Funktion verwendet werden:

- {{cssxref("filter()")}}-Funktion

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
  - : Gibt den Radius der Unschärfe an. Der Wert definiert die Standardabweichung der Gaußfunktion, also wie viele Pixel auf dem Bildschirm miteinander verschwimmen. Ein größerer Wert erzeugt daher eine stärkere Unschärfe. Bei einem Wert von `0` bleibt die Eingabe unverändert. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Prozentwerte und negative Werte sind ungültig. Der Standardwert ist `0`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung des SVG-Filters

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild, auf das die Filterfunktion `blur()` angewendet wurde, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Das SVG-Filterelement {{SVGElement("feGaussianBlur")}} kann ebenfalls verwendet werden, um Inhalte weichzuzeichnen. Wir setzen `stdDeviation` auf den Unschärferadius und können dann über die ID von {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="blur35" color-interpolation-filters="sRGB">
    <feGaussianBlur stdDeviation="3.5" />
  </filter>
</svg>
```

Die folgenden Deklarationen erzielen denselben Effekt:

```css
filter: blur(3.5px);
filter: url("#blur35"); /* with embedded SVG */
filter: url("fileName.svg#blur35"); /* external SVG */
```

#### CSS

Wir fügen CSS hinzu, das Elemente anhand ihrer Klasse `css-filter` oder `svg-filter` weichzeichnet:

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
- Zu den weiteren {{cssxref("filter-function")}}-Funktionen gehören:
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
