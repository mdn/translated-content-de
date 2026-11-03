---
title: "`drop-shadow()` CSS-Funktion"
short-title: drop-shadow()
slug: Web/CSS/Reference/Values/filter-function/drop-shadow
l10n:
  sourceCommit: 35b1d907e22f58fcd01fc5d3d22f1e73089c7f3d
---

Die **`drop-shadow()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wendet einen Schlagschatteneffekt auf das Eingabebild an. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

{{InteractiveExample("CSS Demo: drop-shadow()")}}

```css interactive-example-choice
filter: drop-shadow(30px 10px 4px #4444dd);
```

```css interactive-example-choice
filter: drop-shadow(0 -6mm 4mm rgb(160 0 210));
```

```css interactive-example-choice
filter: drop-shadow(0 0 0.75rem crimson);
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

Ein Schlagschatten ist im Wesentlichen eine weichgezeichnete, versetzte Version der Alphamaske des Eingabebildes, die in einer bestimmten Farbe gezeichnet und unter dem Bild zusammengesetzt wird.

> [!NOTE]
> Diese Funktion ähnelt der Eigenschaft {{Cssxref("box-shadow")}}. Die Eigenschaft `box-shadow` erzeugt einen rechteckigen Schatten hinter der _gesamten Box_ eines Elements, während die Filterfunktion `drop-shadow()` einen Schatten erzeugt, der der Form (dem Alphakanal) des _Bildes selbst_ folgt.

## Syntax

```css
/* Two length values */
/* drop-shadow( <length> <length> ) */
drop-shadow(5px 5px)

/* Three length values */
/* drop-shadow( <length> <length> <length> ) */
drop-shadow(5px 5px 15px)

/* Two length values and a color */
/* drop-shadow( <length> <length> <color> ) */
drop-shadow(5px 5px red)

/* Three length values and a color */
/* drop-shadow( <length> <length> <length> <color> ) */
drop-shadow(5px 5px 15px red)

/* The order of color and length values can be changed */
/* drop-shadow( <color> <length> <length> <length> ) */
drop-shadow(#ee2233 0.5rem 0.5rem 1rem)

/* Pass multiple drop-shadows to a filter to stack them */
drop-shadow(10px 10px red) drop-shadow(-5px -5px yellow)
```

### Parameter

Die Funktion `drop-shadow()` akzeptiert zwei oder drei {{cssxref("length")}}-Werte und optional einen {{cssxref("color_value", "&lt;color&gt;")}}-Wert, jeweils durch Leerzeichen getrennt.

- `<color>` {{optional_inline}}
  - : Gibt die Farbe des Schattens an. Wenn kein Wert angegeben wird, wird der Wert der für das Element definierten Eigenschaft {{cssxref("color")}} verwendet.

- `<length>`
  - : Gibt die Versatzlänge des Schattens an. Dieser Parameter akzeptiert zwei oder drei Werte. Werden zwei Werte angegeben, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten oberhalb des Elements. Wird ein dritter Wert angegeben, wird er als `<standard-deviation>` interpretiert, also als Wert der Standardabweichung für die Funktion zur [gaußschen Weichzeichnung](https://en.wikipedia.org/wiki/Gaussian_blur). Ein größerer `<standard-deviation>`-Wert erzeugt einen größeren und stärker weichgezeichneten Schatten. Negative Werte für `<standard-deviation>` sind nicht zulässig.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einen Schlagschatten festlegen

```html
<div>drop-shadow(16px 16px)</div>
<div>drop-shadow(16px 16px red)</div>
<div>drop-shadow(red 1rem 1rem 10px)</div>
<div>drop-shadow(-16px -16px red)</div>
<div>
  drop-shadow(1px 1px red) drop-shadow(1px -1px red) drop-shadow(-1px 1px red)
  drop-shadow(-1px -1px red)
</div>
```

```css
div {
  display: inline-block;
  margin: 0 0.5rem 2rem 1rem;
  padding: 0.5rem;
  height: 100px;
  width: 190px;
  vertical-align: top;
  background-color: #222222;

  color: lime;
}

div:nth-child(1) {
  filter: drop-shadow(16px 16px);
}

div:nth-child(2) {
  filter: drop-shadow(16px 16px red);
}

div:nth-child(3) {
  filter: drop-shadow(red 1rem 1rem 10px);
}

div:nth-child(4) {
  filter: drop-shadow(-16px -16px red);
}

div:nth-child(5) {
  filter: drop-shadow(1px 1px red) drop-shadow(1px -1px red)
    drop-shadow(-1px 1px red) drop-shadow(-1px -1px red);
}
```

{{EmbedLiveSample("Setting a drop shadow", "100%", "300px")}}

Da in der Funktion `drop-shadow()` für die erste Box kein `<color>`-Wert angegeben ist, verwendet der Schatten den Wert der Eigenschaft `color` des Elements (`lime`). Der zweite und der dritte Schatten zeigen, dass Längen- und Farbwerte in beliebiger Reihenfolge angegeben werden können. Der dritte Schatten zeigt den Weichzeichnungseffekt, der entsteht, wenn ein dritter `<length>`-Wert angegeben wird. Der vierte Schatten verwendet negative Versatzwerte, die den Schatten nach links und oben verschieben. Das fünfte Beispiel zeigt, wie Sie mehrere Schlagschatten auf ein einzelnes Element anwenden können.

### Den SVG-Filter verwenden

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit angewendeter `drop-shadow()`-Filterfunktion, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Mit dem SVG-Filterelement {{SVGElement("feDropShadow")}} lässt sich ebenfalls ein Schlagschatten auf Inhalte anwenden. Wir legen die Versatzwerte `dx` und `dy`, `stdDeviation` sowie `flood-color` fest. Anschließend können wir über die ID des {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="drop-shadow5" color-interpolation-filters="sRGB">
    <feDropShadow dx="5" dy="5" stdDeviation="3" flood-color="black" />
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: drop-shadow(5px 5px 3px black);
filter: url("#drop-shadow5"); /* with embedded SVG */
filter: url("fileName.svg#drop-shadow5"); /* external SVG */
```

#### CSS

Wir fügen CSS hinzu, das auf Elemente mit der Klasse `css-filter` oder `svg-filter` einen Schlagschatten anwendet:

```css live-sample___svg-filter
.css-filter {
  filter: drop-shadow(5px 5px 3px black);
}

.svg-filter {
  filter: url("#drop-shadow5");
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
      <th><code>drop-shadow()</code> filter</th>
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
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
