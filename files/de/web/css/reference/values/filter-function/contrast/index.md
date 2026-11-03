---
title: CSS-Funktion `contrast()`
short-title: contrast()
slug: Web/CSS/Reference/Values/filter-function/contrast
l10n:
  sourceCommit: 35b1d907e22f58fcd01fc5d3d22f1e73089c7f3d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`contrast()`** passt den Kontrast des Eingabebildes an. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

{{InteractiveExample("CSS Demo: contrast()")}}

```css interactive-example-choice
filter: contrast(1);
```

```css interactive-example-choice
filter: contrast(1.75);
```

```css interactive-example-choice
filter: contrast(50%);
```

```css interactive-example-choice
filter: contrast(0);
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
/* Completely gray */
contrast(0)

/* No change */
contrast()
contrast(1)
contrast(100%)

/* 60% contrast */
contrast(.6)
contrast(60%)

/* Double contrast */
contrast(2)
contrast(200%)
```

### Parameter

- {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Gibt das Ausmaß der Anpassung an. Ein Wert unter `100%` verringert den Kontrast, während ein Wert über `100%` ihn erhöht. Ein Wert von `0` oder `0%` erzeugt ein vollständig graues Bild; bei `1` oder `100%` bleibt das Eingabebild unverändert. Negative Werte sind nicht zulässig. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `1`. Der Standardwert ist `1`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mit der Eigenschaft backdrop-filter

Dieses Beispiel wendet über die CSS-Eigenschaft {{cssxref("backdrop-filter")}} einen `contrast()`-Filter auf den Absatz an und verändert dabei die Farben des Bereichs hinter dem `<p>`.

```css
.container {
  background: url("unity_for_the_people.jpg") no-repeat center / contain #333399;
}
p {
  backdrop-filter: contrast(0.2);
}
```

```css hidden
.container {
  padding: 3rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: white;
  font-family: sans-serif;
}
```

```html hidden
<div class="container">
  <p>
    Always ensure there is enough contrast between text and all background
    colors. If you think your text may land on top of a background image,
    include a <code>backdrop-filter</code>. Reducing the contrast of background
    colors with the <code>contrast()</code> filter may improve legibility but
    does not guarantee accessibility.
  </p>
</div>
```

{{EmbedLiveSample('With_the_backdrop-filter_property','100%','260')}}

### Mit der Eigenschaft filter

Dieses Beispiel wendet über die CSS-Eigenschaft {{cssxref("filter")}} einen `contrast()`-Filter an. Dadurch wird der Kontrast des gesamten Elements verändert, einschließlich Inhalt, Rahmen, Hintergrund und Schatten.

```css
p:first-of-type {
  filter: contrast(30%);
}
p:last-of-type {
  filter: contrast(300%);
}
```

```css hidden
p {
  text-shadow: 2px 2px blue;
  background-color: magenta;
  color: palegoldenrod;
  border: 1em solid rebeccapurple;
  box-shadow:
    inset -5px -5px red,
    5px 5px yellow;
  padding: 0.25rem;
  font-size: 1.25rem;
  font-family: sans-serif;
  width: 85vw;
}
```

```html hidden
<p>This paragraph has reduced contrast.</p>
<p>This paragraph has normal contrast.</p>
<p>This paragraph has increased contrast.</p>
```

{{EmbedLiveSample('With_the_filter_property','100%','320')}}

### Verwendung des SVG-Filters

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit angewendeter `contrast()`-Filterfunktion, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Das SVG-Filterelement {{SVGElement("feComponentTransfer")}} kann ebenfalls verwendet werden, um den Kontrast von Inhalten anzupassen. Dazu werden entsprechende Kontrastanpassungen mit den untergeordneten linearen Elementen {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}} und {{SVGElement("feFuncB")}} erstellt. Wir legen für die roten, grünen und blauen Filterprimitive dieselben Werte für `slope` und `intercept` fest. Anschließend können wir über die ID des {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="contrast200" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5" />
      <feFuncG type="linear" slope="2" intercept="-0.5" />
      <feFuncB type="linear" slope="2" intercept="-0.5" />
    </feComponentTransfer>
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: contrast(2);
filter: contrast(200%);
filter: url("#contrast200"); /* with embedded SVG */
filter: url("fileName.svg#contrast200"); /* external SVG */
```

#### CSS

Wir verwenden CSS, das den Kontrast von Elementen anhand ihrer Klasse `css-filter` oder `svg-filter` anpasst:

```css live-sample___svg-filter
.css-filter {
  filter: contrast(2);
}

.svg-filter {
  filter: url("#contrast200");
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
      <th><code>contrast()</code> filter</th>
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
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
