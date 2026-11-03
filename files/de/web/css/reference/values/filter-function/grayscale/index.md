---
title: "`grayscale()`-CSS-Funktion"
short-title: grayscale()
slug: Web/CSS/Reference/Values/filter-function/grayscale
l10n:
  sourceCommit: 35b1d907e22f58fcd01fc5d3d22f1e73089c7f3d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`grayscale()`** wandelt das Eingabebild in Graustufen um. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

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
/* No grayscale conversion */
grayscale(0)

/* Complete grayscale conversion */
grayscale()
grayscale(1)
grayscale(100%)

/* 60% grayscale conversion */
grayscale(.6)
grayscale(60%)
```

### Parameter

- {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Gibt den Grad der Umwandlung an. Bei einem Wert von `100%` wird das Eingabebild vollständig in Graustufen umgewandelt, während es bei `0%` unverändert bleibt. Werte zwischen `0%` und `100%` skalieren den Effekt linear. Werte über `100%` sind zulässig, der Effekt wird jedoch auf `100%` begrenzt. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung des SVG-Filters

Dieses Beispiel zeigt drei Bilder zum Vergleich: eines mit angewendeter `grayscale()`-Filterfunktion, eines mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Das SVG-Filterelement {{SVGElement("feColorMatrix")}} kann ebenfalls verwendet werden, um Inhalte in Graustufen umzuwandeln. Wir legen die `values` für die Farbmatrix fest und können anschließend über die ID des {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="grayscale70" color-interpolation-filters="sRGB">
    <feColorMatrix
      type="matrix"
      values="0.44882 0.50064 0.05054 0 0
              0.14882 0.80064 0.05054 0 0
              0.14882 0.50064 0.35054 0 0
              0 0 0 1 0" />
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: grayscale(0.7);
filter: grayscale(70%);
filter: url("#grayscale70"); /* with embedded SVG */
filter: url("fileName.svg#grayscale70"); /* external SVG */
```

#### CSS

Wir verwenden CSS, um Elemente anhand ihrer Klasse `css-filter` oder `svg-filter` in Graustufen umzuwandeln:

```css live-sample___svg-filter
.css-filter {
  filter: grayscale(0.7);
}

.svg-filter {
  filter: url("#grayscale70");
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
      <th><code>grayscale()</code> filter</th>
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
- Weitere {{cssxref("filter-function")}}-Funktionen, die als Werte für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
