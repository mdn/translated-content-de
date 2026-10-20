---
title: CSS-Funktion `blur()`
short-title: blur()
slug: Web/CSS/Reference/Values/filter-function/blur
l10n:
  sourceCommit: cff28ac91efd68d0809779c81902bd080f614a1d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`blur()`** wendet eine [gaußsche Unschärfe](https://en.wikipedia.org/wiki/Gaussian_blur) auf das Eingabebild an. Ihr Ergebnis ist eine {{cssxref("filter-function")}}.

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
  - : Gibt den Radius der Unschärfe an. Der Wert definiert die Standardabweichung der Gauß-Funktion und bestimmt damit, wie viele Pixel auf dem Bildschirm ineinander übergehen. Ein größerer Wert erzeugt daher eine stärkere Unschärfe. Bei einem Wert von `0` bleibt die Eingabe unverändert. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Prozentwerte und negative Werte sind ungültig. Der Standardwert ist `0`.

## SVG-Filter

Auch das SVG-Filterelement {{SVGElement("feGaussianBlur")}} kann verwendet werden, um Inhalte unscharf darzustellen. Das Attribut {{SVGAttr("stdDeviation")}} des Filters akzeptiert bis zu zwei Werte, mit denen sich komplexere Unschärfeeffekte erzeugen lassen. Für einen gleichwertigen Unschärfeeffekt geben wir einen Wert für `stdDeviation` an. Auf diesen SVG-Effekt kann dann über seine ID verwiesen werden:

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
filter: url("#blur11"); /* with embedded SVG */
filter: url("folder/fileName.svg#blur11"); /* external svg filter definition */
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

Dieses Beispiel zeigt drei Bilder: eines mit angewendeter `blur()`-Filterfunktion, eines mit der entsprechenden SVG-Unschärfefunktion und das Originalbild zum Vergleich:

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

- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- Zu den weiteren {{cssxref("filter-function")}}-Funktionen, die als Werte der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, gehören:
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
