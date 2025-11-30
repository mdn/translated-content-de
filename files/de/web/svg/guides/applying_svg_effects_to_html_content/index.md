---
title: Anwenden von SVG-Effekten auf HTML-Inhalte
short-title: SVG-Effekte für HTML
slug: Web/SVG/Guides/Applying_SVG_effects_to_HTML_content
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Moderne Browser unterstützen die Verwendung von [SVG](/de/docs/Web/SVG) innerhalb von [CSS](/de/docs/Web/CSS)-Stilen, um grafische Effekte auf HTML-Inhalte anzuwenden.

Sie können SVG in Stilen entweder innerhalb desselben Dokuments oder in einem externen Stylesheet spezifizieren. Es gibt 3 Eigenschaften, die Sie verwenden können: [`mask`](/de/docs/Web/CSS/Reference/Properties/mask), [`clip-path`](/de/docs/Web/CSS/Reference/Properties/clip-path) und [`filter`](/de/docs/Web/CSS/Reference/Properties/filter).

> [!NOTE]
> Referenzen auf SVG in externen Dateien müssen aus demselben [Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) stammen wie das referenzierende Dokument.

## Verwenden von eingebettetem SVG

Um einen SVG-Effekt mit CSS-Stilen anzuwenden, müssen Sie zuerst den CSS-Stil erstellen, der das anzuwendende SVG referenziert.

```css
p {
  mask: url("#my-mask");
}
```

Im obigen Beispiel werden alle Absätze mit einer [SVG `<mask>`](/de/docs/Web/SVG/Reference/Element/mask) maskiert, die die [ID](/de/docs/Web/HTML/Reference/Global_attributes/id) `my-mask` hat.

### Beispiel: Maskierung

Zum Beispiel können Sie eine Verlaufsmaskierung für HTML-Inhalte mit SVG und CSS-Code erstellen, ähnlich dem folgenden, innerhalb Ihres HTML-Dokuments:

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

Beachten Sie, dass in dem CSS die Maske mit einer URL zur ID `#mask-1` angegeben ist, welche die ID der darunter spezifizierten SVG-Maske ist. Alles andere spezifiziert Details über die Verlaufsmaskierung selbst.

Die Anwendung des SVG-Effekts auf HTML erfolgt durch Zuweisung der oben definierten `target`-Klasse zu einem Element, wie folgt:

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

### Beispiel: Clipping

Dieses Beispiel demonstriert die Verwendung von SVG zum Ausschneiden von HTML-Inhalten. Beachten Sie, dass selbst die anklickbaren Bereiche für Links ausgeschnitten werden.

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

Dies erstellt einen Clip-Bereich aus einem Kreis und Rechteck, weist ihm die ID `#clipping-path-1` zu und referenziert ihn dann im CSS. Der Clipping-Pfad kann jedem Element mit der `target`-Klasse zugewiesen werden.

Sie können Änderungen am SVG in Echtzeit vornehmen und sofort sehen, wie sie das Rendering des HTML beeinflussen. Zum Beispiel können Sie den Kreis im oben festgelegten Clipping-Pfad vergrößern:

```js
const circle = document.getElementById("circle");

function toggleRadius() {
  circle.r.baseVal.value = 0.4 - circle.r.baseVal.value;
}

document.querySelector("button").addEventListener("click", toggleRadius);
```

{{EmbedLiveSample('Example_Clipping', 650, 200)}}

### Beispiel: Filterung

Dies demonstriert das Anwenden eines Filters auf HTML-Inhalte mit SVG. Es werden mehrere Filter eingerichtet, die mit CSS auf drei Elemente sowohl im normalen als auch im Maus-[Hover](/de/docs/Web/CSS/Reference/Selectors/:hover)-Zustand angewendet werden.

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

Jeder SVG-Filter kann auf diese Weise angewendet werden. Zum Beispiel, um einen Unschärfeneffekt anzuwenden, könnten Sie verwenden:

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

Um Text zu verwischen, gibt es eine CSS-Filterfunktion namens [`blur()`](/de/docs/Web/CSS/Reference/Values/filter-function/blur). Sie können denselben Effekt mit SVG-Filtern erzielen.

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

Das Verwischen ist rechenintensiv, verwenden Sie es daher sparsam, insbesondere bei Elementen, die gescrollt oder animiert werden.

### Beispiel: Texteffekte

SVG-Effekte können auch verwendet werden, um einen dynamischeren und flexibleren Ansatz zum Hinzufügen von Texten im Vergleich zu einfachem HTML-Text zu bieten.

Indem Sie den Text mit SVG-Elementen in Kombination mit HTML erstellen, können Sie eine Vielzahl von verschiedenen Texteffekten erzielen. Sie können den Text drehen:

```html
<svg height="60" width="200">
  <text x="0" y="15" fill="blue" transform="rotate(30 20,50)">
    Example text
  </text>
</svg>
```

## Verwenden von externen Referenzen

SVG, das zum Ausschneiden, Maskieren und Filtern verwendet wird, kann aus einer externen Quelle geladen werden, solange diese Quelle denselben Ursprung wie das HTML-Dokument hat, auf das sie angewendet wird.

Zum Beispiel, wenn Ihr CSS in einer Datei namens `default.css` ist, könnte es wie folgt aussehen:

```css
.target {
  clip-path: url("resources.svg#c1");
}
```

Das SVG wird dann aus einer Datei namens `resources.svg` importiert und der Clipping-Pfad mit der ID `c1` verwendet.

## Siehe auch

- [SVG](/de/docs/Web/SVG)
- {{CSSXref('clip-path')}}-Eigenschaft
- {{CSSXref('mask')}}-Eigenschaft
- [Formen im Ausschneiden und Maskieren – und wie man sie verwendet](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
