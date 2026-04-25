---
title: "`hue-rotate()` CSS-Funktion"
short-title: hue-rotate()
slug: Web/CSS/Reference/Values/filter-function/hue-rotate
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`hue-rotate()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) rotiert den [Farbton](https://en.wikipedia.org/wiki/Hue) eines Elements und dessen Inhalt. Das Ergebnis ist eine {{cssxref("filter-function")}}.

> [!NOTE]
> `hue-rotate()` ist als Matrixoperation auf der RGB-Farbe spezifiziert. Es konvertiert die Farbe nicht tatsächlich in das HSL-Modell, was eine nicht-lineare Operation ist. Daher kann es sein, dass sie die Sättigung oder Helligkeit der Originalfarbe nicht beibehält, insbesondere bei gesättigten Farben.

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
hue-rotate(angle)
```

### Werte

- `angle` {{Optional_Inline}}
  - : Die relative Änderung des Farbtons des Eingabesamples, angegeben als {{cssxref("angle")}}. Ein Wert von `0deg` lässt die Eingabe unverändert. Eine positive Farbtonrotation erhöht den Wert des Farbtons, während eine negative Rotation den Farbtonwert verringert. Der Anfangswert für {{Glossary("interpolation", "Interpolation")}} ist `0`. Es gibt keinen minimalen oder maximalen Wert. Die Wirkung von Werten über `360deg` hinaus wird, gegeben `hue-rotate(Ndeg)`, als `N` modulo 360 ausgewertet. Der Standardwert ist `0deg`.

Der CSS-Datentyp `<angle>` repräsentiert einen Winkelwert, ausgedrückt in Grad, Gradian, Radiant oder Umdrehungen. Die folgenden sind äquivalent:

```css
hue-rotate(-180deg)
hue-rotate(540deg)
hue-rotate(200grad)
hue-rotate(3.14159rad)
hue-rotate(0.5turn)
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mit der Eigenschaft backdrop-filter

In diesem Beispiel wird ein `hue-rotate()`-Filter über die CSS-Eigenschaft `backdrop-filter` auf den Absatz angewendet, wodurch der Bereich hinter dem `<p>` farbverschoben wird.

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

In diesem Beispiel wird ein `hue-rotate()`-Filter über die CSS-Eigenschaft `filter` angewendet, wodurch die Farbumwandlung auf das gesamte Element, einschließlich Inhalt, Rand und Hintergrundbild, übertragen wird.

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

### Mit url() und dem SVG hue-rotate Filter

Das SVG {{SVGElement("filter")}}-Element wird verwendet, um benutzerdefinierte Filtereffekte zu definieren, die dann per [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) referenziert werden können. Der `hueRotate`-Typ der `<filter>`{{SVGElement("feColorMatrix")}} primitiven bietet den gleichen Effekt. Angenommen, folgendes:

```html live-sample___svg_filter
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 220 220"
  color-interpolation-filters="sRGB"
  height="220"
  width="220">
  <filter id="hue-rotate">
    <feColorMatrix type="hueRotate" values="90" />
  </filter>
</svg>
```

Diese Werte erzeugen die gleichen Ergebnisse:

```css
filter: hue-rotate(90deg); /* 90deg rotation */
filter: url("#hue-rotate"); /* with embedded SVG */
filter: url("folder/fileName.svg#hue-rotate"); /* external svg filter definition */
```

Dieses Beispiel zeigt drei Bilder: das Bild mit einer `hue-rotate()`-Filterfunktion, das Bild mit einem äquivalenten `url()`-Filter und die Originalbilder zum Vergleich:

```html hidden live-sample___svg_filter
<table>
  <thead>
    <tr>
      <th><code>hue-rotate()</code></th>
      <th><code>url()</code></th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="css-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag with rotated colors" />
      </td>
      <td>
        <img
          class="svg-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag with rotated colors" />
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

```css hidden live-sample___svg_filter
.css-filter {
  filter: hue-rotate(90deg);
}
.svg-filter {
  filter: url("#hue-rotate");
}

th,
td {
  padding: 5px;
}
svg:not(:root) {
  display: none;
}
```

{{EmbedLiveSample('svg_filter','100%','280')}}

### hue-rotate() bewahrt nicht Sättigung oder Helligkeit

Das folgende Diagramm vergleicht zwei Farbverläufe, die mit Rot beginnen: Der erste wird mit `hue-rotate()` erzeugt, und der zweite verwendet tatsächliche HSL-Farbwerte. Beachten Sie, wie der `hue-rotate()`-Verlauf auffällige Unterschiede in Sättigung und Helligkeit in der Mitte zeigt.

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

- Modul [CSS Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- Die anderen {{cssxref("filter-function")}}-Funktionen, die in Werten der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, umfassen:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
