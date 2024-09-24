---
title: brightness()
slug: Web/CSS/filter-function/brightness
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

Die **`brightness()`** [CSS](/de/docs/Web/CSS) {{cssxref("&lt;filter-function&gt;")}} wendet einen linearen Multiplikator auf ein Element oder ein Eingabebild an, wodurch das Bild heller oder dunkler erscheint.

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## Syntax

```css
brightness(amount)
```

### Werte

- `amount`
  - : Helligkeit angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert kleiner als `100%` verdunkelt das Eingabebild oder Element, während ein Wert über `100%` es aufhellt. Ein Wert von `0%` erzeugt ein komplett schwarzes Bild oder Element, während ein Wert von `100%` das Eingabebild unverändert lässt. Andere Werte zwischen `0%` und `100%` haben einen linearen Multiplikatoreffekt. Werte größer als `100%` sind erlaubt und führen zu helleren Ergebnissen. Der Anfangswert für {{Glossary("interpolation")}} ist `1`. Negative Werte sind nicht erlaubt. Der Standardwert, wenn nichts angegeben ist, ist `1`.

Die folgenden Paare sind gleichwertige Werte:

```css
brightness(0) /* Helligkeit ist auf null reduziert, daher wird das Eingabebild schwarz */
brightness(0%)

brightness(0.4) /* Die Helligkeit des Eingabebildes ist auf 40 % reduziert, daher ist das Eingabebild 60 % dunkler */
brightness(40%)

brightness(1) /* Helligkeit des Eingabebildes ist nicht verändert */
brightness(100%)

brightness(2) /* Helligkeit des Eingabebildes ist verdoppelt */
brightness(200%)
```

### Formale Syntax

{{csssyntax}}

## Beispiele

### Anwendung der Helligkeit mit der Eigenschaft backdrop-filter

Dieses Beispiel zeigt, wie der `brightness()` Filter auf einen Absatz über die CSS-Eigenschaft [`backdrop-filter`](/de/docs/Web/CSS/backdrop-filter) angewendet wird.

#### CSS

```css
.container {
  background: url(image.jpg) no-repeat right / contain #d4d5b2;
}
p {
  backdrop-filter: brightness(150%);
  text-shadow: 2px 2px #ffffff;
}
```

```css hidden
.container {
  padding: 5rem 3rem 1rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: #000000;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div class="container" style="background-image: url(be_fierce.jpg);">
  <p>
    Text auf Bildern kann unleserlich und unzugänglich sein, selbst mit einem Schatten.
  </p>
</div>
```

#### Ergebnis

{{EmbedLiveSample('Applying_brightness_using_the_backdrop_filter_property', '100%', '280')}}

In diesem Beispiel verschieben sich die Farben im Bereich hinter dem `<p>`-Element linear. Wenn die `backdrop-filter` Eigenschaft auf `brightness(0%)` gesetzt wäre, wäre der `<div>`-Bereich mit dem `<p>` Element schwarz und würde das Bild dahinter verbergen. Bei `brightness(100%)` wäre die `<div>`-Bereichsfarbe dieselbe wie die Eingabe `#d4d5b2`, und das Bild dahinter wäre völlig transparent. Mit der Helligkeit auf `150%` gesetzt, wie in diesem Beispiel, werden die Farben im Bild dahinter durch die Helligkeit des `<div>`-Elements verschleiert.

### Anwendung der Helligkeit mit der Eigenschaft filter

In diesem Beispiel wird einem gesamten Element, einschließlich Inhalt, Rahmen und Hintergrundbild, ein `brightness()` Filter über die CSS-Eigenschaft [`filter`](/de/docs/Web/CSS/filter) angewendet. Das Ergebnis zeigt drei Variationen unterschiedlicher Helligkeitswerte.

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
<p>Dieser Absatz hat reduzierte Helligkeit.</p>
<p>Dieser Absatz hat normale Helligkeit.</p>
<p>Dieser Absatz hat erhöhte Helligkeit.</p>
```

{{EmbedLiveSample('Applying_brightness_using_the_filter_property','100%','280')}}

### Anwendung der Helligkeit mit dem url() SVG Helligkeitsfilter

Das SVG {{SVGElement("filter")}} Element wird verwendet, um benutzerdefinierte Filtereffekte zu definieren, die dann durch [`id`](/de/docs/Web/HTML/Global_attributes#id) referenziert werden können. Das {{SVGElement("feComponentTransfer")}} Primitivelement ermöglicht Farbzuweisungen auf Pixel-Ebene.

In diesem Beispiel wurde das Attribut `slope` auf `0.75` gesetzt, um einen Filter zu erstellen, der den Inhalt, auf den er angewendet wird, um 25% verdunkelt (d.h. 75% der ursprünglichen Helligkeit). Wir können dann den Filter durch `id` referenzieren.

Gegeben folgendes:

```css hidden
.filter {
  filter: brightness(0.75);
}
svg {
  position: absolute;
}
```

```html
<svg role="none">
  <filter id="darken25" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncR type="linear" slope="0.75" />
      <feFuncG type="linear" slope="0.75" />
      <feFuncB type="linear" slope="0.75" />
    </feComponentTransfer>
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen ähnliche Effekte:

```css
filter: brightness(75%);
filter: url(#darken25); /* mit eingebettetem SVG */
filter: url(folder/fileName.svg#darken25); /* externe SVG Filterdefinition */
```

In den folgenden Bildern hat das erste ein `brightness()` Filterfunktion angewendet, das zweite hat eine ähnliche SVG-Helligkeitsfunktion angewendet, und das dritte ist das Originalbild zum Vergleich.

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>Live-Beispiel</th>
      <th>SVG-Äquivalent</th>
      <th>Originalbild</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="verdunkelte Pride-Flagge" />
      </td>
      <td>
        <img
          style="filter: url(#darken25)"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="verdunkelte Pride-Flagge" />
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
- Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in Werten von {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, umfassen:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
