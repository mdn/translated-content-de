---
title: CSS-Funktion `saturate()`
short-title: saturate()
slug: Web/CSS/Reference/Values/filter-function/saturate
l10n:
  sourceCommit: 35b1d907e22f58fcd01fc5d3d22f1e73089c7f3d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`saturate()`** erhöht oder verringert die Farbsättigung des Eingabebildes. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

> [!NOTE]
> `saturate()` ist als Matrixoperation auf RGB-Farben definiert. Die Farbe wird dabei nicht tatsächlich in das HSL-Modell umgewandelt, da dies eine nichtlineare Operation wäre. Daher bleiben Farbton und Helligkeit der ursprünglichen Farbe möglicherweise nicht erhalten.

{{InteractiveExample("CSS Demo: saturate()")}}

```css interactive-example-choice
filter: saturate(1);
```

```css interactive-example-choice
filter: saturate(4);
```

```css interactive-example-choice
filter: saturate(50%);
```

```css interactive-example-choice
filter: saturate(0);
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
/* Completely unsaturated */
saturate(0)

/* No change */
saturate()
saturate(1)
saturate(100%)

/* 60% saturation */
saturate(.6)
saturate(60%)

/* Double saturation */
saturate(2)
saturate(200%)
```

### Parameter

- {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Gibt das Ausmaß der Umwandlung an. Ein Wert unter `100%` verringert die Sättigung des Bildes, während ein Wert über `100%` sie erhöht. Bei `0%` ist das Bild vollständig entsättigt; bei `100%` bleibt die Eingabe unverändert. Negative Werte sind nicht zulässig. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `1`. Der Standardwert ist `1`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### saturate() erhält Farbton und Helligkeit nicht

Das folgende Diagramm vergleicht zwei Farbverläufe mit `hsl(0 50% 50%)` als Mittelpunkt: Der erste wird mit `saturate()` erzeugt, der zweite verwendet tatsächliche HSL-Farbwerte. Beachten Sie, wie sich beim `saturate()`-Farbverlauf Farbton und Helligkeit zu beiden Enden hin verändern.

```html
<div>
  <p>Using <code>saturate()</code></p>
  <div id="saturate"></div>
</div>
<div>
  <p>Using <code>hsl()</code></p>
  <div id="hsl"></div>
</div>
```

```css hidden
#saturate,
#hsl {
  display: flex;
  margin: 1em 0;
}

#saturate div,
#hsl div {
  width: 2px;
  height: 100px;
}
```

```js
const saturate = document.getElementById("saturate");
const hsl = document.getElementById("hsl");

for (let i = 0; i <= 200; i++) {
  const div1 = document.createElement("div");
  div1.style.backgroundColor = `hsl(0 ${i / 2}% 50%)`;
  hsl.appendChild(div1);

  const div2 = document.createElement("div");
  div2.style.backgroundColor = "hsl(0 50% 50%)";
  div2.style.filter = `saturate(${i}%)`;
  saturate.appendChild(div2);
}
```

{{EmbedLiveSample('saturate_does_not_preserve_hue_or_lightness','100%','350')}}

### SVG-Filter verwenden

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit angewendeter `saturate()`-Filterfunktion, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Das SVG-Filterelement {{SVGElement("feColorMatrix")}} kann ebenfalls verwendet werden, um die Sättigung von Inhalten anzupassen. Wir setzen `type` auf `saturate` und `values` auf den gewünschten Sättigungswert. Anschließend können wir den SVG-Effekt über die ID des {{SVGElement("filter")}} referenzieren:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="saturate20" color-interpolation-filters="sRGB">
    <feColorMatrix type="saturate" values="0.2" />
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: saturate(0.2);
filter: saturate(20%);
filter: url("#saturate20"); /* with embedded SVG */
filter: url("fileName.svg#saturate20"); /* external SVG */
```

#### CSS

Wir verwenden CSS, um die Sättigung von Elementen abhängig von ihrer Klasse `css-filter` oder `svg-filter` anzupassen:

```css live-sample___svg-filter
.css-filter {
  filter: saturate(0.2);
}

.svg-filter {
  filter: url("#saturate20");
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
      <th><code>saturate()</code> filter</th>
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
- Zu den anderen {{cssxref("filter-function")}}-Funktionen, die als Werte für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, gehören:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
