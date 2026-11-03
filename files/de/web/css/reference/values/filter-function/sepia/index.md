---
title: CSS-Funktion `sepia()`
short-title: sepia()
slug: Web/CSS/Reference/Values/filter-function/sepia
l10n:
  sourceCommit: 35b1d907e22f58fcd01fc5d3d22f1e73089c7f3d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`sepia()`** wandelt das Eingabebild in Sepia um und verleiht ihm ein wärmeres, stärker gelb-braunes Aussehen. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

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
/* No sepia conversion */
sepia(0)

/* Complete sepia conversion */
sepia()
sepia(1)
sepia(100%)

/* 60% sepia conversion */
sepia(.6)
sepia(60%)
```

### Parameter

- {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Gibt den Grad der Umwandlung an. Ein Wert von `100%` bewirkt eine vollständige Sepia-Umwandlung, während ein Wert von `0%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` skalieren den Effekt linear. Werte über `100%` sind zulässig, der Effekt wird jedoch auf `100%` begrenzt. Negative Werte sind nicht zulässig. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung des SVG-Filters

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit angewendeter `sepia()`-Filterfunktion, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Das SVG-Filterelement {{SVGElement("feColorMatrix")}} kann ebenfalls verwendet werden, um Inhalte in Sepia umzuwandeln. Wir legen die `values` für die Farbmatrix fest und können anschließend über die ID des {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="sepia70" color-interpolation-filters="sRGB">
    <feColorMatrix
      type="matrix"
      values="0.5751 0.5383 0.1323 0 0
              0.2443 0.7802 0.1176 0 0
              0.1904 0.3738 0.3917 0 0
              0 0 0 1 0" />
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: sepia(0.7);
filter: sepia(70%);
filter: url("#sepia70"); /* with embedded SVG */
filter: url("fileName.svg#sepia70"); /* external SVG */
```

#### CSS

Wir fügen CSS hinzu, das Elemente anhand ihrer Klasse `css-filter` oder `svg-filter` in Sepia umwandelt:

```css live-sample___svg-filter
.css-filter {
  filter: sepia(0.7);
}

.svg-filter {
  filter: url("#sepia70");
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
      <th><code>sepia()</code> filter</th>
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
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
