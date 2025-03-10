---
title: brightness()
slug: Web/CSS/filter-function/brightness
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`brightness()`** [CSS](/de/docs/Web/CSS) {{cssxref("&lt;filter-function&gt;")}} wendet einen linearen Multiplikatorwert auf ein Element oder ein Eingabebild an und lässt das Bild heller oder dunkler erscheinen.

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
brightness(amount)
```

### Werte

- `amount` {{Optional_Inline}}
  - : Helligkeit, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert kleiner als `100%` verdunkelt das Eingabebild oder Element, während ein Wert über `100%` es aufhellt. Ein Wert von `0%` erzeugt ein vollständig schwarzes Bild oder Element, während ein Wert von `100%` das Eingabebild unverändert lässt. Andere Werte zwischen `0%` und `100%` haben einen linearen Multiplikatoreffekt. Werte größer als `100%` sind erlaubt und ergeben hellere Resultate. Der Anfangswert für {{Glossary("interpolation", "Interpolation")}} ist `1`. Negative Werte sind nicht erlaubt. Der Standardwert ist `1`.

Folgende Wertepaare sind äquivalent:

```css
brightness(0)   /* Brightness is reduced to zero, so input turns black */
brightness(0%)

brightness(0.4) /* Brightness of input is reduced to 40%, so input is 60% darker */
brightness(40%)

brightens()     /* Brightness of input is not changed */
brightness(1)
brightness(100%)

brightness(2)   /* Brightness of input is doubled */
brightness(200%)
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anwenden der Helligkeit mit der Eigenschaft backdrop-filter

Dieses Beispiel zeigt, wie der `brightness()`-Filter auf einen Absatz über die CSS-Eigenschaft [`backdrop-filter`](/de/docs/Web/CSS/backdrop-filter) angewendet wird.

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
    Text on images can be illegible and inaccessible even with a drop shadow.
  </p>
</div>
```

#### Ergebnis

{{EmbedLiveSample('Applying_brightness_using_the_backdrop_filter_property', '100%', '280')}}

In diesem Beispiel verschieben sich die Farben im Bereich hinter dem `<p>`-Element linear. Wenn die `backdrop-filter`-Eigenschaft auf `brightness(0%)` gesetzt wäre, wäre der `<div>`-Bereich mit dem `<p>`-Element schwarz und hätte das dahinterliegende Bild versteckt. Bei `brightness(100%)` wäre die `<div>`-Bereichsfarbe dieselbe wie die Eingabefarbe `#d4d5b2`, und das Bild dahinter wäre völlig transparent. Mit der Helligkeit auf `150%` wie in diesem Beispiel werden die Farben im dahinter liegenden Bild durch die Helligkeit des `<div>`-Elements verborgen.

### Anwenden der Helligkeit mit der Eigenschaft filter

In diesem Beispiel wird ein `brightness()`-Filter auf das gesamte Element angewendet, einschließlich Inhalt, Rahmen und Hintergrundbild, über die CSS-Eigenschaft [`filter`](/de/docs/Web/CSS/filter). Das Ergebnis zeigt drei Variationen unterschiedlicher Helligkeitswerte.

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

### Anwenden der Helligkeit mit dem url() SVG-Helligkeitsfilter

Das SVG-Element {{SVGElement("filter")}} wird verwendet, um benutzerdefinierte Filtereffekte zu definieren, die dann durch [`id`](/de/docs/Web/HTML/Global_attributes/id) referenziert werden können. Das Primitivelement {{SVGElement("feComponentTransfer")}} des `<filter>`-Elements ermöglicht eine Neuzuordnung der Pixel-Farben.

In diesem Beispiel, um einen Filter zu erstellen, der den Inhalt, auf den er angewendet wird, um 25 % abdunkelt (d.h. 75 % der ursprünglichen Helligkeit), wird das `slope`-Attribut auf `0.75` gesetzt. Wir können dann den Filter durch `id` referenzieren.

Folgendes ergibt:

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
filter: url(#darken25); /* with embedded SVG */
filter: url(folder/fileName.svg#darken25); /* external svg filter definition */
```

In den unten stehenden Bildern hat das erste eine `brightness()`-Filterfunktion angewendet, das zweite hat eine ähnliche SVG-Helligkeitsfunktion angewendet, und das dritte ist das ursprüngliche Bild für den Vergleich.

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
          alt="darkened pride flag" />
      </td>
      <td>
        <img
          style="filter: url(#darken25)"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="darkened pride flag" />
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

- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in Werten der {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften verwendet werden können, beinhalten:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
