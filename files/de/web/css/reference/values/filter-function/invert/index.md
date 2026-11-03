---
title: CSS-Funktion `invert()`
short-title: invert()
slug: Web/CSS/Reference/Values/filter-function/invert
l10n:
  sourceCommit: 35b1d907e22f58fcd01fc5d3d22f1e73089c7f3d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`invert()`** invertiert die Farbwerte im Eingabebild. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

{{InteractiveExample("CSS Demo: invert()")}}

```css interactive-example-choice
filter: invert(0);
```

```css interactive-example-choice
filter: invert(0.3);
```

```css interactive-example-choice
filter: invert(50%);
```

```css interactive-example-choice
filter: invert(70%);
```

```css interactive-example-choice
filter: invert(1);
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
/* No inversion */
invert(0)

/* Complete inversion */
invert()
invert(1)
invert(100%)

/* 60% inversion */
invert(.6)
invert(60%)
```

### Parameter

- {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Gibt das Ausmaß der Umwandlung an. Ein Wert von `100%` bewirkt eine vollständige Invertierung, während ein Wert von `0%` das Eingabebild unverändert lässt. Werte zwischen `0%` und `100%` skalieren den Effekt linear. Werte über `100%` sind zulässig, der Effekt wird jedoch auf `100%` begrenzt. Negative Werte sind nicht zulässig. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung des SVG-Filters

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit angewendeter `invert()`-Filterfunktion, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Das SVG-Filterelement {{SVGElement("feComponentTransfer")}} kann ebenfalls verwendet werden, um Inhalte zu invertieren. Dazu wird eine entsprechende Invertierung mit den untergeordneten Tabellenelementen {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}} und {{SVGElement("feFuncB")}} erstellt. Wir setzen `tableValue` für die roten, grünen und blauen Filterprimitive auf denselben Wert. Anschließend können wir über die ID von {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="invert70" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.7 0.3" />
      <feFuncG type="table" tableValues="0.7 0.3" />
      <feFuncB type="table" tableValues="0.7 0.3" />
    </feComponentTransfer>
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: invert(0.7);
filter: invert(70%);
filter: url("#invert70"); /* with embedded SVG */
filter: url("fileName.svg#invert70"); /* external SVG */
```

#### CSS

Wir fügen CSS hinzu, das Elemente abhängig von ihrer Klasse `css-filter` oder `svg-filter` invertiert:

```css live-sample___svg-filter
.css-filter {
  filter: invert(0.7);
}

.svg-filter {
  filter: url("#invert70");
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
      <th><code>invert()</code> filter</th>
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
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
