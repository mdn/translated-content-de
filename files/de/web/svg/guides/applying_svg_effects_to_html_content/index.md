---
title: Anwenden von SVG-Effekten auf HTML-Inhalte
short-title: SVG-Effekte für HTML
slug: Web/SVG/Guides/Applying_SVG_effects_to_HTML_content
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Moderne Browser unterstützen die Verwendung von [SVG](/de/docs/Web/SVG) innerhalb von [CSS](/de/docs/Web/CSS)-Stilen, um grafische Effekte auf HTML-Inhalte anzuwenden.

Sie können SVG in Stilen entweder innerhalb desselben Dokuments oder eines externen Stylesheets angeben. Es gibt 3 Eigenschaften, die Sie verwenden können: [`mask`](/de/docs/Web/CSS/Reference/Properties/mask), [`clip-path`](/de/docs/Web/CSS/Reference/Properties/clip-path) und [`filter`](/de/docs/Web/CSS/Reference/Properties/filter).

> [!NOTE]
> Referenzen auf SVG in externen Dateien müssen von demselben [Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das referenzierende Dokument sein.

## Verwendung von eingebettetem SVG

Um einen SVG-Effekt mit CSS-Stilen anzuwenden, müssen Sie zuerst den CSS-Stil erstellen, der das anzuwendende SVG referenziert.

```css
p {
  mask: url("#my-mask");
}
```

Im obigen Beispiel werden alle Absätze mit einer [SVG-`<mask>`](/de/docs/Web/SVG/Reference/Element/mask) mit der [ID](/de/docs/Web/HTML/Reference/Global_attributes/id) `my-mask` maskiert.

### Beispiel: Maskierung

Sie können beispielsweise eine Verlaufmaske für HTML-Inhalte erstellen, indem Sie SVG und CSS-Code ähnlich dem folgenden in Ihr HTML-Dokument einfügen:

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
  mask: url("#mask-1");
}
p {
  width: 300px;
  border: 1px solid black;
  display: inline-block;
}
p.target {
  background: lime;
}
```

Beachten Sie, dass in dem CSS die Maske mithilfe einer URL zur ID `#mask-1` angegeben wird, welche die ID der nachfolgend angegebenen SVG-Maske ist. Alles andere spezifiziert Details über die Verlaufmaske selbst.

Das Anwenden des SVG-Effekts auf HTML wird erreicht, indem der zuvor definierte `target`-Klassentyp einem Element zugewiesen wird, wie folgt:

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

Das obige Beispiel würde mit der angewendeten Maske angezeigt werden.

{{EmbedLiveSample('Example_Masking', 650, 200)}}

### Beispiel: Zuschneiden

Dieses Beispiel demonstriert die Verwendung von SVG, um HTML-Inhalte zuzuschneiden. Beachten Sie, dass sogar die klickbaren Bereiche für Links zugeschnitten sind.

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
  clip-path: url("#clipping-path-1");
}
p {
  width: 300px;
  border: 1px solid black;
  display: inline-block;
}
p.target {
  background: lime;
}
```

Dies erstellt einen Zuschneidebereich aus einem Kreis und einem Rechteck, weist ihm die ID `#clipping-path-1` zu und referenziert ihn dann im CSS. Der Zuschneidepfad kann jedem Element mit der Klasse `target` zugewiesen werden.

Sie können Änderungen am SVG in Echtzeit vornehmen und sofort sehen, wie sie das Rendering des HTML beeinflussen. Zum Beispiel können Sie den Kreis in dem oben erstellten Zuschneidepfad ändern:

```js
const circle = document.getElementById("circle");

function toggleRadius() {
  circle.r.baseVal.value = 0.4 - circle.r.baseVal.value;
}

document.querySelector("button").addEventListener("click", toggleRadius);
```

{{EmbedLiveSample('Example_Clipping', 650, 200)}}

### Beispiel: Filtern

Dies demonstriert die Anwendung eines Filters auf HTML-Inhalte mittels SVG. Es werden mehrere Filter festgelegt, die mit CSS sowohl auf drei Elemente im normalen als auch im Maus-[hover](/de/docs/Web/CSS/Reference/Selectors/:hover)-Zustand angewendet werden.

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

Die fünf Filter werden mit folgendem CSS angewendet:

```css
p.target {
  filter: url("#f3");
}
p.target:hover {
  filter: url("#f5");
}
em.target {
  filter: url("#f1");
}
em.target:hover {
  filter: url("#f4");
}
pre.target {
  filter: url("#f2");
}
pre.target:hover {
  filter: url("#f3");
}
```

{{EmbedLiveSample('Example_Filtering', 650, 200)}}

### Beispiel: Verschwommener Text

Um Text zu verwischen, gibt es eine CSS-Filterfunktion namens [`blur()`](/de/docs/Web/CSS/filter-function/blur). Sie können den gleichen Effekt mit SVG-Filtern erzielen.

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

Sie können den SVG- und den CSS-Filter in derselben Klasse anwenden:

```css
.blur {
  filter: url("#wherearemyglasses");
}
```

{{ EmbedLiveSample('Example_Blurred_Text', 300, 100) }}

Verschwimmen ist rechnerintensiv, daher sollten Sie es sparsam verwenden, insbesondere bei Elementen, die gescrollt oder animiert werden.

### Beispiel: Texteffekte

SVG-Effekte können auch verwendet werden, um einen dynamischeren und flexibleren Ansatz zur Textgestaltung im Vergleich zu einfachem HTML-Text zu bieten.

Durch das Erstellen des Textes mit SVG-Elementen in Kombination mit HTML können Sie verschiedene Texteffekte erzeugen. Sie können den Text drehen:

```html
<svg height="60" width="200">
  <text x="0" y="15" fill="blue" transform="rotate(30 20,50)">
    Example text
  </text>
</svg>
```

## Verwendung von externen Referenzen

SVG, das zum Zuschneiden, Maskieren und Filtern verwendet wird, kann aus einer externen Quelle geladen werden, solange diese Quelle vom selben Ursprung wie das HTML-Dokument stammt, auf das es angewendet wird.

Wenn Ihr CSS beispielsweise in einer Datei mit dem Namen `default.css` ist, könnte es wie folgt aussehen:

```css
.target {
  clip-path: url("resources.svg#c1");
}
```

Das SVG wird dann aus einer Datei namens `resources.svg` importiert und der Zuschneidepfad mit der ID `c1` verwendet.

## Siehe auch

- [SVG](/de/docs/Web/SVG)
- {{CSSXref('clip-path')}} Eigenschaft
- {{CSSXref('mask')}} Eigenschaft
- [Formen beim Zuschneiden und Maskieren – und wie man sie verwendet](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
