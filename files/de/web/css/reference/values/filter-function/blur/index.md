---
title: blur()
slug: Web/CSS/Reference/Values/filter-function/blur
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`blur()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wendet einen [Gaussian Blur](https://en.wikipedia.org/wiki/Gaussian_blur) auf das Eingabebild an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

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
blur()         /* No effect */
blur(0)        /* No effect */

blur(8px)      /* Blur with 8px radius */
blur(1.17rem)  /* Blur with 1.17rem radius */
```

### Parameter

- {{cssxref("length")}} {{Optional_Inline}}
  - : Gibt den Radius des Blurs an. Es definiert den Wert der Standardabweichung für die Gausssche Funktion, das heißt, wie viele Pixel auf dem Bildschirm ineinander übergehen. Daher erzeugt ein größerer Wert mehr Unschärfe. Ein Wert von `0` belässt die Eingabe unverändert. Der Anfangswert für {{Glossary("interpolation", "Interpolation")}} ist `0`. Prozentwerte sind ungültig. Der Standardwert ist `0`.

## SVG-Filter

Das SVG-Element {{SVGElement("feGaussianBlur")}} kann ebenfalls verwendet werden, um Inhalte zu verwischen. Das {{SVGAttr("stdDeviation")}} Attribut des Filters akzeptiert bis zu zwei Werte, die es ermöglichen, komplexere Unschärfewerte zu erzeugen. Um einen äquivalenten Blur zu erzeugen, fügen wir einen Wert für `stdDeviation` ein. Dieser SVG-Effekt kann dann per ID referenziert werden:

```html
<svg role="none">
  <filter id="blur11">
    <feGaussianBlur stdDeviation="1.1" edgeMode="duplicate" />
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen den gleichen Effekt:

```css
filter: blur(1.1px);
filter: url("#blur11"); /* with embedded SVG */
filter: url("folder/fileName.svg#blur11"); /* external svg filter definition */
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

Dieses Beispiel zeigt drei Bilder: das Bild mit einer `blur()` Filterfunktion angewendet, das Bild mit der äquivalenten SVG Blur-Funktion angewendet und die Originalbilder zum Vergleich:

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
    filter="url('#blur')" />
</svg>
```

```css hidden
svg:not([height]) {
  display: none;
}

th,
td {
  padding: 5px;
}
```

```html hidden
<table>
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
            filter="url('#svgBlur')" />
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

- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul
- Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, umfassen:
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
