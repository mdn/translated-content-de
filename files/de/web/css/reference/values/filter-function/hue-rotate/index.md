---
title: "`hue-rotate()`-CSS-Funktion"
short-title: hue-rotate()
slug: Web/CSS/Reference/Values/filter-function/hue-rotate
l10n:
  sourceCommit: 35b1d907e22f58fcd01fc5d3d22f1e73089c7f3d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`hue-rotate()`** dreht den [Farbton](https://en.wikipedia.org/wiki/Hue) eines Elements und seines Inhalts. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

> [!NOTE]
> `hue-rotate()` ist als Matrixoperation auf RGB-Farben definiert. Die Farbe wird dabei nicht tatsächlich in das HSL-Modell umgewandelt, da dies eine nichtlineare Operation wäre. Daher bleiben Sättigung und Helligkeit der ursprünglichen Farbe möglicherweise nicht erhalten, insbesondere bei stark gesättigten Farben.

{{InteractiveExample("CSS Demo: hue-rotate()")}}

```css interactive-example-choice
filter: hue-rotate(0);
```

```css interactive-example-choice
filter: hue-rotate(90deg);
```

```css interactive-example-choice
filter: hue-rotate(-0.25turn);
```

```css interactive-example-choice
filter: hue-rotate(3.142rad);
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
/* No rotation */
hue-rotate()
hue-rotate(0deg)

/* Half-turn rotation */
hue-rotate(-180deg)
hue-rotate(540deg)
hue-rotate(200grad)
hue-rotate(3.14159rad)
hue-rotate(0.5turn)
```

### Parameter

- {{cssxref("angle")}} {{Optional_Inline}}
  - : Gibt die relative Änderung des Farbtons der Eingabe an. Der Wert `0deg` lässt die Eingabe unverändert. Eine positive Farbtondrehung erhöht den Farbtonwert, eine negative verringert ihn. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Es gibt weder einen Mindest- noch einen Höchstwert. Bei `hue-rotate(Ndeg)` entspricht der Effekt `N` modulo 360. Der Standardwert ist `0deg`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mit der Eigenschaft backdrop-filter

Dieses Beispiel wendet über die CSS-Eigenschaft `backdrop-filter` einen `hue-rotate()`-Filter auf den Absatz an. Dadurch verschieben sich die Farben im Bereich hinter dem `<p>`.

```css
.container {
  background: url("/shared-assets/images/examples/listen_to_black_women.jpg")
    no-repeat left / contain #011296;
}
p {
  backdrop-filter: hue-rotate(240deg);
  text-shadow: 2px 2px #011296;
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

{{EmbedLiveSample('With_the_backdrop-filter_property','100%','280')}}

### Mit der Eigenschaft filter

Dieses Beispiel wendet über die CSS-Eigenschaft `filter` einen `hue-rotate()`-Filter auf das gesamte Element an. Die Farbverschiebung betrifft damit auch den Inhalt, den Rahmen und das Hintergrundbild.

```css
p {
  filter: hue-rotate(-60deg);
  text-shadow: 2px 2px blue;
  background-color: magenta;
  color: goldenrod;
  border: 1em solid rebeccapurple;
  box-shadow:
    inset -5px -5px red,
    5px 5px yellow;
}
```

```css hidden
p {
  padding: 0.5rem;
  font-size: 2rem;
  font-family: sans-serif;
  width: 85vw;
}
```

```html hidden
<p>The person who wrote this example is not a designer, fortunately.</p>
```

{{EmbedLiveSample('With_the_filter_property','100%','220')}}

### Verwendung des SVG-Filters

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit angewendeter `hue-rotate()`-Filterfunktion, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Auch das SVG-Filterelement {{SVGElement("feColorMatrix")}} kann den Farbton von Inhalten drehen. Dazu setzen wir `type` auf `hueRotate` und `values` auf den Winkel in Grad. Anschließend können wir über die ID des {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="hue-rotate90" color-interpolation-filters="sRGB">
    <feColorMatrix type="hueRotate" values="90" />
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: hue-rotate(90deg);
filter: url("#hue-rotate90"); /* with embedded SVG */
filter: url("fileName.svg#hue-rotate90"); /* external SVG */
```

#### CSS

Wir fügen CSS hinzu, das den Farbton von Elementen abhängig von ihrer Klasse `css-filter` oder `svg-filter` dreht:

```css live-sample___svg-filter
.css-filter {
  filter: hue-rotate(90deg);
}

.svg-filter {
  filter: url("#hue-rotate90");
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
      <th><code>hue-rotate()</code> filter</th>
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

### hue-rotate() erhält Sättigung und Helligkeit nicht

Das folgende Diagramm vergleicht zwei Farbverläufe, die mit Rot beginnen: Der erste wird mit `hue-rotate()` erzeugt, der zweite verwendet tatsächliche HSL-Farbwerte. Beachten Sie, dass der mit `hue-rotate()` erzeugte Verlauf in der Mitte deutliche Unterschiede bei Sättigung und Helligkeit aufweist.

```html
<div>
  <p>Using <code>hue-rotate()</code></p>
  <div id="hue-rotate"></div>
</div>
<div>
  <p>Using <code>hsl()</code></p>
  <div id="hsl"></div>
</div>
```

```css hidden
#hue-rotate,
#hsl {
  display: flex;
  margin: 1em 0;
}

#hue-rotate div,
#hsl div {
  width: 2px;
  height: 100px;
}
```

```js
const hueRotate = document.getElementById("hue-rotate");
const hsl = document.getElementById("hsl");

for (let i = 0; i < 360; i++) {
  const div1 = document.createElement("div");
  div1.style.backgroundColor = `hsl(${i}, 100%, 50%)`;
  hsl.appendChild(div1);

  const div2 = document.createElement("div");
  div2.style.backgroundColor = "red";
  div2.style.filter = `hue-rotate(${i}deg)`;
  hueRotate.appendChild(div2);
}
```

{{EmbedLiveSample('hue-rotate_does_not_preserve_saturation_or_lightness','100%','350')}}

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
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
