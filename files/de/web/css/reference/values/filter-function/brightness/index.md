---
title: CSS-Funktion `brightness()`
short-title: brightness()
slug: Web/CSS/Reference/Values/filter-function/brightness
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`brightness()`** wendet einen linearen Multiplikator auf ein Element oder ein Eingabebild an, sodass es heller oder dunkler erscheint. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

{{InteractiveExample("CSS Demo: brightness()")}}

```css interactive-example-choice
filter: brightness(1);
```

```css interactive-example-choice
filter: brightness(1.75);
```

```css interactive-example-choice
filter: brightness(50%);
```

```css interactive-example-choice
filter: brightness(0);
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
/* Completely black */
brightness(0)

/* No change */
brightness()
brightness(1)
brightness(100%)

/* 60% brightness */
brightness(.6)
brightness(60%)

/* Double brightness */
brightness(2)
brightness(200%)
```

### Parameter

- {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Gibt die Stärke der Umwandlung an. Ein Wert unter `100%` verdunkelt das Eingabebild oder Element, während ein Wert über `100%` es aufhellt. Bei `0%` entsteht ein vollständig schwarzes Bild oder Element; bei `100%` bleibt die Eingabe unverändert. Werte zwischen `0%` und `100%` wirken als lineare Multiplikatoren für den Effekt. Werte über `100%` sind zulässig und führen zu helleren Ergebnissen. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `1`. Negative Werte sind nicht zulässig. Der Standardwert ist `1`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Helligkeit mit der Eigenschaft backdrop-filter anpassen

Dieses Beispiel zeigt, wie Sie den Filter `brightness()` über die CSS-Eigenschaft {{cssxref("backdrop-filter")}} auf einen Absatz anwenden.

#### CSS

```css
.container {
  background: url("be_fierce.jpg") no-repeat right / contain #d4d5b2;
}
p {
  backdrop-filter: brightness(150%);
  text-shadow: 2px 2px white;
}
```

```css hidden
.container {
  padding: 5rem 3rem 1rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: black;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div class="container">
  <p>
    Text on images can be illegible and inaccessible even with a drop shadow.
  </p>
</div>
```

#### Ergebnis

{{EmbedLiveSample('applying_brightness_using_the_backdrop-filter_property', '100%', '280')}}

In diesem Beispiel ändern sich die Farben im Bereich hinter dem `<p>`-Element linear. Wäre die Eigenschaft `backdrop-filter` auf `brightness(0%)` gesetzt, wäre der `<div>`-Bereich mit dem `<p>`-Element schwarz und würde das dahinterliegende Bild verdecken. Bei `brightness(100%)` entspräche die Farbe des `<div>`-Bereichs dem Eingabewert `#d4d5b2`, und das dahinterliegende Bild wäre vollständig sichtbar. Bei einer Helligkeit von `150%`, wie in diesem Beispiel, werden die Farben des dahinterliegenden Bildes durch die Helligkeit des `<div>`-Elements überdeckt.

### Helligkeit mit der Eigenschaft filter anpassen

In diesem Beispiel wird ein `brightness()`-Filter über die CSS-Eigenschaft {{cssxref("filter")}} auf das gesamte Element angewendet, einschließlich Inhalt, Rahmen und Hintergrundbild. Das Ergebnis zeigt drei Varianten mit unterschiedlichen Helligkeitswerten.

```css
p:first-of-type {
  filter: brightness(50%);
}
p:last-of-type {
  filter: brightness(200%);
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
<p>This paragraph has reduced brightness.</p>
<p>This paragraph has normal brightness.</p>
<p>This paragraph has increased brightness.</p>
```

{{EmbedLiveSample('Applying_brightness_using_the_filter_property','100%','280')}}

### Den SVG-Filter verwenden

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit angewendeter `brightness()`-Filterfunktion, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Das SVG-Filterelement {{SVGElement("feComponentTransfer")}} kann ebenfalls verwendet werden, um die Helligkeit von Inhalten anzupassen. Dazu werden entsprechende Helligkeitsanpassungen für die untergeordneten linearen Elemente {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}} und {{SVGElement("feFuncB")}} erstellt. Wir legen für die roten, grünen und blauen Filterprimitiven denselben `slope` fest. Anschließend können wir über die ID von {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="brightness75" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncR type="linear" slope="0.75" />
      <feFuncG type="linear" slope="0.75" />
      <feFuncB type="linear" slope="0.75" />
    </feComponentTransfer>
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: brightness(0.75);
filter: brightness(75%);
filter: url("#brightness75"); /* with embedded SVG */
filter: url("fileName.svg#brightness75"); /* external SVG */
```

#### CSS

Wir fügen CSS hinzu, das die Helligkeit von Elementen anhand ihrer Klasse `css-filter` oder `svg-filter` anpasst:

```css live-sample___svg-filter
.css-filter {
  filter: brightness(0.75);
}

.svg-filter {
  filter: url("#brightness75");
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
      <th><code>brightness()</code> filter</th>
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
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
