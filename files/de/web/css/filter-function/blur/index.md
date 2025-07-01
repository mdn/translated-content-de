---
title: blur()
slug: Web/CSS/filter-function/blur
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{CSSRef}}

Die **`blur()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wendet einen [Gaussian-Schärfe](/https://en.wikipedia.org/wiki/Gaussian_blur) auf das Eingabebild an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

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
blur(radius)
```

### Parameter

- `radius` {{Optional_Inline}}
  - : Der Radius der Unschärfe, angegeben als {{cssxref("&lt;length&gt;")}}. Er definiert den Wert der Standardabweichung für die Gaußsche Funktion, d.h. wie viele Pixel auf dem Bildschirm ineinander verschwimmen; daher erzeugt ein größerer Wert mehr Unschärfe. Ein Wert von `0` lässt die Eingabe unverändert. Der Anfangswert für {{Glossary("interpolation", "Interpolation")}} ist `0`. Prozentwerte sind ungültig. Der Standardwert ist `0px`.

### Beispiele für Unschärfewerte

```css
blur()         /* No effect */
blur(0)        /* No effect */

blur(8px)      /* Blur with 8px radius */
blur(1.17rem)  /* Blur with 1.17rem radius */
```

## SVG-Filter

Das SVG-Element {{SVGElement("feGaussianBlur")}} kann ebenfalls verwendet werden, um Inhalte zu verwischen. Das Attribut {{SVGAttr("stdDeviation")}} des Filters akzeptiert bis zu zwei Werte, die es ermöglichen, komplexere Unschärfestufen zu erstellen. Um eine äquivalente Unschärfe zu erstellen, geben wir einen Wert für `stdDeviation` an. Dieser SVG-Effekt kann dann durch eine ID referenziert werden:

```html
<svg role="none">
  <filter id="blur11">
    <feGaussianBlur stdDeviation="1.1" edgeMode="duplicate" />
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: blur(1.1px);
filter: url(#blur11); /* with embedded SVG */
filter: url(folder/fileName.svg#blur11); /* external svg filter definition */
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

Dieses Beispiel zeigt drei Bilder: das Bild mit einer `blur()` Filterfunktion angewendet, das Bild mit der äquivalenten SVG-Unschärfefunktion angewendet und die Originalbilder zum Vergleich:

```css
.filter {
  filter: blur(3.5px);
}
```

```html
<svg role="img" aria-label="Flag">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" edgeMode="duplicate" />
  </filter>
  <image
    href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    filter="url(#blur)" />
</svg>
```

```css hidden
svg:not([height]) {
  display: none;
}
```

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>Live example</th>
      <th>SVG Equivalent</th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <svg id="svg" height="220" width="220" overflow="visible">
          <filter id="svgBlur">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url(#svgBlur)" />
        </svg>
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

{{EmbedLiveSample('blur','100%','280')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, beinhalten:
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
