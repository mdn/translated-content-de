---
title: blur()
slug: Web/CSS/filter-function/blur
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

Die **`blur()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wendet einen [Gaussian Blur](https://en.wikipedia.org/wiki/Gaussian_blur) auf das Eingabebild an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-blur.html")}}

## Syntax

Die `blur()`-Funktion wendet einen Gaussian Blur auf die Elemente an, auf die sie angewendet wird.

```css
blur(radius)
```

### Parameter

- `radius`
  - : Der Radius des Blur, angegeben als {{cssxref("&lt;length&gt;")}}. Er definiert den Wert der Standardabweichung der Gaussian-Funktion, d.h. wie viele Pixel auf dem Bildschirm ineinander übergehen; ein größerer Wert erzeugt somit mehr Unschärfe. Ein Wert von `0` lässt das Eingabeobjekt unverändert. Der Anfangswert für {{Glossary("interpolation")}} ist `0`. Prozentwerte sind ungültig.

### Unschärfe mit Pixeln und mit rem festlegen

```css
blur(0)        /* Kein Effekt */
blur(8px)      /* Unschärfe mit 8px Radius */
blur(1.17rem)  /* Unschärfe mit 1.17rem Radius */
```

## SVG-Filter

Das SVG {{SVGElement("feGaussianBlur")}} Filterelement kann ebenfalls verwendet werden, um Inhalte zu verwischen. Das {{SVGAttr("stdDeviation")}} Attribut des Filters akzeptiert bis zu zwei Werte, um komplexere Unschärfewerte zu erstellen. Um eine äquivalente Unschärfe zu erstellen, geben wir einen Wert für `stdDeviation` an. Dieser SVG-Effekt kann dann über die ID referenziert werden:

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
filter: url(#blur11); /* mit eingebettetem SVG */
filter: url(folder/fileName.svg#blur11); /* externe SVG-Filterdefinition */
```

## Beispiele

Dieses Beispiel zeigt drei Bilder: das Bild mit einer `blur()`-Filterfunktion, das Bild mit der äquivalenten SVG-Blur-Funktion und die Originalbilder zum Vergleich:

```css
.filter {
  filter: blur(3.5px);
}
```

```html
<svg role="img" aria-label="Flagge">
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
      <th>Live-Beispiel</th>
      <th>Äquivalent zu SVG</th>
      <th>Originalbild</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride-Flagge" />
      </td>
      <td>
        <svg id="svg" height="220" width="220" style="overflow: visible">
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
          alt="Pride-Flagge" />
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

- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
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
