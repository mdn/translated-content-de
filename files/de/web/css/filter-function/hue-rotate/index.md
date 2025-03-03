---
title: hue-rotate()
slug: Web/CSS/filter-function/hue-rotate
l10n:
  sourceCommit: 9ca1b6d1fe5e69fc288ad18c6986b581afafc0a4
---

{{CSSRef}}

Die **`hue-rotate()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) dreht den [Farbton](https://en.wikipedia.org/wiki/Hue) eines Elements und dessen Inhalt. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

> **Hinweis:** `hue-rotate()` ist als Matrixoperation auf der RGB-Farbe spezifiziert. Es konvertiert die Farbe nicht tatsächlich in das HSL-Modell, welches eine nichtlineare Operation ist. Daher kann es sein, dass die Sättigung oder Helligkeit der Originalfarbe, insbesondere bei gesättigten Farben, nicht erhalten bleibt.

{{EmbedInteractiveExample("pages/css/function-hue-rotate.html")}}

## Syntax

Die `hue-rotate()` Funktion wendet eine Farbrotation auf die Elemente an, auf die sie angewendet wird.

```css
hue-rotate(angle)
```

### Werte

- `angle` {{Optional_Inline}}
  - : Die relative Änderung des Farbtons der Eingabe, angegeben als {{cssxref("&lt;angle&gt;")}}. Ein Wert von `0deg` lässt die Eingabe unverändert. Eine positive Farbtonrotation erhöht den Farbtonwert, während eine negative Rotation den Farbtonwert verringert. Der Anfangswert für {{Glossary("interpolation", "Interpolation")}} ist `0`. Es gibt keinen Minimal- oder Maximalwert. Der Effekt von Werten über `360deg`, gegeben `hue-rotate(Ndeg)`, wird zu `N` modulo 360 ausgewertet. Der Standardwert ist `0deg`.

Der `<angle>` CSS-Datentyp repräsentiert einen Winkelwert, der in Grad, Gon, Radiant oder Umdrehungen ausgedrückt wird. Folgende Werte sind gleichwertig:

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

### Mit der backdrop-filter-Eigenschaft

Dieses Beispiel wendet einen `hue-rotate()` Filter über die CSS-Eigenschaft `backdrop-filter` auf den Absatz an und verschiebt die Farbe in den Bereich hinter dem `<p>`.

```css
.container {
  background: url(image.jpg) no-repeat left / contain #011296;
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
  color: #ffffff;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div
  class="container"
  style="background-image: url('https://mdn.github.io/shared-assets/images/examples/listen_to_black_women.jpg');">
  <p>
    Text on images can be illegible and inaccessible even with a drop shadow.
  </p>
</div>
```

{{EmbedLiveSample('With_the_backdrop-filter_property','100%','280')}}

### Mit der filter-Eigenschaft

Dieses Beispiel wendet einen `hue-rotate()` Filter über die CSS-Eigenschaft `filter` an und fügt die Farbverschiebung auf das gesamte Element, einschließlich Inhalt, Rahmen und Hintergrundbild, hinzu.

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

Das SVG {{SVGElement("filter")}} Element wird verwendet, um benutzerdefinierte Filtereffekte zu definieren, die dann mittels [`id`](/de/docs/Web/HTML/Global_attributes/id) referenziert werden können. Der `hueRotate` Typ der `<filter>`-Primitive {{SVGElement("feColorMatrix")}} bietet den gleichen Effekt. Angenommen folgende:

```svg
<filter id="filterID">
  <feColorMatrix type="hueRotate" values="90" />
</filter>
```

Diese Werte erzeugen die gleichen Ergebnisse:

```css
filter: hue-rotate(90deg); /* 90deg rotation */
filter: url(#filterID); /* with embedded SVG */
filter: url(folder/fileName.svg#filterID); /* external svg filter definition */
```

Dieses Beispiel zeigt drei Bilder: das Bild mit einer `hue-rotate()` Filterfunktion, das Bild mit einem äquivalenten `url()` Filter, und die Originalbilder zum Vergleich:

```html hidden
<table cellpadding="5">
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
          style="filter: hue-rotate(90deg)"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag with rotated colors" />
      </td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 220"
          color-interpolation-filters="sRGB"
          height="220"
          width="220">
          <filter id="hue-rotate">
            <feColorMatrix type="hueRotate" values="90" />
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url(#hue-rotate)"
            width="220"
            height="220" />
        </svg>
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

{{EmbedLiveSample('With_url()_and_the_SVG_hue-rotate_filter','100%','280')}}

### hue-rotate() erhält nicht die Sättigung oder Helligkeit

Das unten stehende Diagramm vergleicht zwei Farbverläufe, die mit Rot beginnen: Der erste wird mit `hue-rotate()` erzeugt, der zweite mit tatsächlichen HSL-Farbwerten. Beachten Sie, wie der `hue-rotate()` Verlauf offensichtliche Unterschiede in Sättigung und Helligkeit in der Mitte zeigt.

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

- [CSS Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, umfassen:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
