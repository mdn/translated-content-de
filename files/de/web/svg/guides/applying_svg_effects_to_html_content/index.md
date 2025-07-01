---
title: Anwenden von SVG-Effekten auf HTML-Inhalte
short-title: SVG-Effekte für HTML
slug: Web/SVG/Guides/Applying_SVG_effects_to_HTML_content
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Moderne Browser unterstützen die Verwendung von [SVG](/de/docs/Web/SVG) innerhalb von [CSS](/de/docs/Web/CSS)-Stilen, um grafische Effekte auf HTML-Inhalte anzuwenden.

Sie können SVG in Stilen entweder innerhalb desselben Dokuments oder in einem externen Stylesheet angeben. Es gibt drei Eigenschaften, die Sie verwenden können: [`mask`](/de/docs/Web/CSS/mask), [`clip-path`](/de/docs/Web/CSS/clip-path) und [`filter`](/de/docs/Web/CSS/filter).

> [!NOTE]
> Verweise auf SVG in externen Dateien müssen vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das referenzierende Dokument stammen.

## Verwenden von eingebettetem SVG

Um einen SVG-Effekt mit CSS-Stilen anzuwenden, müssen Sie zuerst den CSS-Stil erstellen, der auf das SVG verweist, das Sie anwenden möchten.

```css
p {
  mask: url(#my-mask);
}
```

Im obigen Beispiel werden alle Absätze von einem [SVG `<mask>`](/de/docs/Web/SVG/Reference/Element/mask) mit der [ID](/de/docs/Web/HTML/Reference/Global_attributes/id) `my-mask` maskiert.

### Beispiel: Maskierung

Zum Beispiel können Sie eine Gradient-Maske für HTML-Inhalte erstellen, indem Sie SVG und CSS-Code verwenden, der dem folgenden in Ihrem HTML-Dokument ähnelt:

```html
<svg height="0">
  <mask id="mask-1">
    <linearGradient id="gradient-1" y2="1">
      <stop stop-color="white" offset="0" />
      <stop stop-opacity="0" offset="1" />
    </linearGradient>
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white" />
    <rect x="0.5" y="0.2" width="300" height="100" fill="url(#gradient-1)" />
  </mask>
</svg>
```

```css
.target {
  mask: url(#mask-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
p.target {
  background: lime;
}
```

Beachten Sie, dass in dem CSS die Maske mit einer URL zur ID `#mask-1` angegeben wird, was die ID der unten angegebenen SVG-Maske ist. Alles andere spezifiziert Details über die Gradient-Maske selbst.

Die Anwendung des SVG-Effekts auf HTML wird durch Zuweisung der oben definierten `target`-Klasse zu einem Element erreicht, wie folgt:

```html
<p class="target">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>
```

Das obige Beispiel würde mit der darauf angewendeten Maske gerendert werden.

{{EmbedLiveSample('Example_Masking', 650, 200)}}

### Beispiel: Ausschneiden

Dieses Beispiel demonstriert die Verwendung von SVG, um HTML-Inhalte auszuschneiden. Beachten Sie, dass sogar die klickbaren Bereiche für Links ausgeschnitten werden.

```html
<p class="target">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>

<button>Toggle radius</button>

<svg height="0">
  <clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox">
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" />
    <rect x="0.5" y="0.2" width="0.5" height="0.8" />
  </clipPath>
</svg>
```

```css
.target {
  clip-path: url(#clipping-path-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
p.target {
  background: lime;
}
```

Dies legt einen Ausschnittbereich aus einem Kreis und Rechteck fest, weist ihm die ID `#clipping-path-1` zu und verweist dann darauf im CSS. Der Clip-Pfad kann jedem Element mit der `target`-Klasse zugewiesen werden.

Sie können Änderungen am SVG in Echtzeit vornehmen und sehen, wie sie die Darstellung des HTML sofort beeinflussen. Beispielsweise können Sie die Größe des Kreises im oben festgelegten Clip-Pfad ändern:

```js
const circle = document.getElementById("circle");

function toggleRadius() {
  circle.r.baseVal.value = 0.4 - circle.r.baseVal.value;
}

document.querySelector("button").addEventListener("click", toggleRadius);
```

{{EmbedLiveSample('Example_Clipping', 650, 200)}}

### Beispiel: Filtern

Dies demonstriert die Anwendung eines Filters auf HTML-Inhalte unter Verwendung von SVG. Es werden mehrere Filter eingerichtet, die sowohl im normalen als auch im Maus-[Hover-Zustand](/de/docs/Web/CSS/:hover) mit CSS auf drei Elemente angewendet werden.

```html
<p class="target">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<pre class="target">lorem</pre>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>
```

```css hidden
p.target {
  background: lime;
}
```

Jeder SVG-Filter kann auf diese Weise angewendet werden. Um beispielsweise einen Unschärfeeffekt anzuwenden, könnten Sie Folgendes verwenden:

```html
<svg height="0">
  <filter id="f1">
    <feGaussianBlur stdDeviation="3" />
  </filter>
</svg>
```

Sie könnten auch eine Farbmatrix anwenden:

```html
<svg height="0">
  <filter id="f2">
    <feColorMatrix
      values="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </filter>
</svg>
```

Und einige weitere Filter:

```html
<svg height="0">
  <filter id="f3">
    <feConvolveMatrix
      filterRes="100 100"
      color-interpolation-filters="sRGB"
      order="3"
      kernelMatrix="0 -1 0
                   -1 4 -1
                    0 -1 0"
      preserveAlpha="true" />
  </filter>
  <filter id="f4">
    <feSpecularLighting
      surfaceScale="5"
      specularConstant="1"
      specularExponent="10"
      lighting-color="white">
      <fePointLight x="-5000" y="-10000" z="20000" />
    </feSpecularLighting>
  </filter>
  <filter id="f5">
    <feColorMatrix
      values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 1 0 0 0"
      color-interpolation-filters="sRGB" />
  </filter>
</svg>
```

Die fünf Filter werden mit dem folgenden CSS angewendet:

```css
p.target {
  filter: url(#f3);
}
p.target:hover {
  filter: url(#f5);
}
em.target {
  filter: url(#f1);
}
em.target:hover {
  filter: url(#f4);
}
pre.target {
  filter: url(#f2);
}
pre.target:hover {
  filter: url(#f3);
}
```

{{EmbedLiveSample('Example_Filtering', 650, 200)}}

### Beispiel: Unschärfer Text

Um Text zu verwischen, gibt es eine CSS-Filterfunktion namens [`blur()`](/de/docs/Web/CSS/filter-function/blur). Sie können denselben Effekt mit SVG-Filtern erzielen.

```html
<p class="blur">Time to clean my glasses</p>
<svg height="0">
  <defs>
    <filter id="wherearemyglasses" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
  </defs>
</svg>
```

Sie können sowohl den SVG- als auch den CSS-Filter in derselben Klasse anwenden:

```css
.blur {
  filter: url(#wherearemyglasses);
}
```

{{ EmbedLiveSample('Example_Blurred_Text', 300, 100) }}

Unschärfe ist rechnerintensiv, daher sollten Sie sie sparsam einsetzen, insbesondere bei Elementen, die gescrollt oder animiert werden.

### Beispiel: Texteffekte

SVG-Effekte können auch verwendet werden, um eine dynamischere und flexiblere Herangehensweise an das Hinzufügen von Text im Vergleich zu einfachem HTML-Text zu bieten.

Durch die Erstellung des Texts mithilfe von SVG-Elementen in Kombination mit HTML können Sie eine Vielzahl verschiedener Texteffekte erzeugen. Sie können den Text drehen:

```html
<svg height="60" width="200">
  <text x="0" y="15" fill="blue" transform="rotate(30 20,50)">
    Example text
  </text>
</svg>
```

## Verwenden externer Referenzen

SVG, welches für Ausschnitte, Maskierungen und Filterungen verwendet wird, kann aus einer externen Quelle geladen werden, solange diese Quelle aus dem gleichen Ursprung wie das HTML-Dokument stammt, auf das es angewendet wird.

Beispielsweise kann Ihr CSS in einer Datei namens `default.css` so aussehen:

```css
.target {
  clip-path: url(resources.svg#c1);
}
```

Das SVG wird dann aus einer Datei namens `resources.svg` importiert, wobei der Clip-Pfad mit der ID `c1` verwendet wird.

## Siehe auch

- [SVG](/de/docs/Web/SVG)
- {{CSSXref('clip-path')}} Eigenschaft
- {{CSSXref('mask')}} Eigenschaft
- [Formen in Ausschnitten und Maskierungen – und wie Sie sie verwenden können](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
