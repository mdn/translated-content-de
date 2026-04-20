---
title: "`stroke` CSS property"
short-title: stroke
slug: Web/CSS/Reference/Properties/stroke
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`stroke`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe oder den SVG-Malserver, der verwendet wird, um den Umriss eines Elements zu zeichnen. Daher hat `stroke` nur auf Elemente, die einen Umriss haben können (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}), eine Wirkung; eine vollständige Liste finden Sie auf der Seite zum SVG-Attribut {{SVGAttr('stroke')}}. Wenn deklariert, überschreibt der CSS-Wert jeden Wert des {{SVGAttr("stroke")}} SVG-Attributs des Elements.

> [!NOTE]
> Laut dem Entwurf der Spezifikation [CSS Fill and Stroke Module Level 3](https://drafts.csswg.org/fill-stroke-3/#stroke-shorthand) vom 4. April 2017 ist die `stroke`-Eigenschaft eine Kurzform für eine Reihe anderer Stroke-Eigenschaften. In der Praxis unterstützen Browser ab August 2024 nicht die Einstellung anderer Stroke-bezogener Werte wie Breite oder Strichmuster über die `stroke`-Eigenschaft und behandeln sie stattdessen als ein direktes Analogon zum SVG-Attribut {{SVGAttr("stroke")}}.

## Syntax

```css
/* assorted color values */
stroke: rgb(153 51 102 / 1);
stroke: color-mix(in lch, var(--primaryColor) 35%, gray 15%);
stroke: dodgerblue;
stroke: currentColor;
stroke: transparent;
stroke: context-stroke;

/* Global values */
stroke: inherit;
stroke: initial;
stroke: revert;
stroke: revert-layer;
stroke: unset;
```

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Bestimmt das Bemalen des Umrisses mit einem beliebigen gültigen CSS-Farbwert.

- `<image>`
  - : Bestimmt das Bemalen des Umrisses mit dem, was SVG einen [_paint server_](https://w3c.github.io/svgwg/svg2-draft/pservers.html) nennt, was in diesem Zusammenhang ein SVG-Verlauf oder -Muster ist. CSS-Verläufe können nicht mit der `stroke`-Eigenschaft verwendet werden.

- `context-stroke`
  - : Führt dazu, dass ein Element seine Stroke-Definition von seinem [_context element_](https://w3c.github.io/svgwg/svg2-draft/painting.html#TermContextElement) "erbt". Wenn es kein gültiges Kontext-Element gibt, wird dieser Wert dazu führen, dass keine Farbe für den Umriss verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Färben des Umrisses

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil eines {{SVGElement("g")}} (Gruppe) sind, die eine graue Umrissfarbe als Standard für die beiden Formen hat.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine düstere violette Farbe auf das Rechteck und Rot auf den Kreis an.

```css
rect {
  stroke: rebeccapurple;
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Basic color stroking", "300", "180")}}

### Musterumrisse

Dieses Beispiel verwendet dieselbe Gruppe und Formen (mit dem etwas verschobenen Kreis) wie im vorherigen Beispiel, definiert aber auch ein SVG-Muster.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="23">
    <circle cx="150" cy="90" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>
</svg>
```

Das Muster wird dann im CSS mit einem URL-Wert, der auf die ID des Musters verweist, referenziert. Dieses Muster wird auf beide Formen als Bemalung des Umrisses angewendet, wobei das Ergebnis gezeigt wird.

```css
rect,
circle {
  stroke: url("#star");
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu visuellen Interferenzen führen kann, wenn sie sich überlappen, da Teile des Musters transparent sind.

{{EmbedLiveSample("Pattern stroking", "300", "180")}}

### SVG- versus CSS-Verläufe

Hier verwenden wir erneut das gleiche Gruppen- und Formenmarkup wie im ersten Beispiel, fügen jedoch auch eine Definition für einen SVG-Verlauf hinzu.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <linearGradient id="greenwhite">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
</svg>
```

Im CSS wenden wir diesen SVG-Verlauf über einen URL-Wert, der auf die ID des linearen Verlaufs verweist, auf das Rechteck an. Auf den Kreis wenden wir einen CSS-linearen Verlauf an, der im Sinne dem SVG-Verlauf entspricht.

```css
rect {
  stroke: url("#greenwhite");
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält einen Verlauf als Umriss, während der Kreis auf den grauen Umriss zurückfällt, der durch das Gruppenelement gesetzt wurde. Dies passiert, weil CSS-Verläufe keine gültigen Werte für die `stroke`-Eigenschaft sind, während URL-Referenzen zu SVG-Verläufen erlaubt sind.

{{EmbedLiveSample("SVG versus CSS gradients", "300", "180")}}

### Kontextuelles Bestreichen

In diesem Fall beginnen wir wieder mit einem Gruppenelement, in dem zwei rechteckige Pfade definiert sind. Danach werden ein linearer Verlauf und ein SVG-Markierungselement definiert.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="4">
    <path d="M 20,20 l 180,0 0,100 -180,0 z" />
    <path d="M 100,40 l 180,0 0,100 -180,0 z" />
  </g>
  <defs>
    <linearGradient id="orangered">
      <stop offset="0%" stop-color="orange" />
      <stop offset="100%" stop-color="red" />
    </linearGradient>
    <marker
      id="circle"
      markerWidth="20"
      markerHeight="20"
      refX="10"
      refY="10"
      markerUnits="userSpaceOnUse">
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke-width="4"
        stroke="none"
        fill="none" />
    </marker>
  </defs>
</svg>
```

Wir schreiben dann CSS, um beiden Pfaden eine Markierung hinzuzufügen und auch eine düstere violette Umrissfarbe zu haben. Dies wird für den zweiten Pfad überschrieben, der einen URL-Wert erhält, um den orange-zu-roten Verlauf als Umriss anzuwenden. Schließlich setzen wir das Kreiselement im Markierungselement, um einen `context-stroke`-Wert zu haben.

```css
path {
  stroke: rebeccapurple;
  marker: url("#circle");
}
path:nth-of-type(2) {
  stroke: url("#orangered");
}
marker circle {
  stroke: context-stroke;
}
```

Da `stroke-context` auf ein Element angewendet wird, das von einem {{SVGElement('marker')}}-Element abstammt, ist das Kontextelement für jeden Kreis das Element, das das `<marker>`-Element aufgerufen hat, also die {{SVGElement('path')}}-Elemente. Das Ergebnis ist, dass die Markierungen auf dem ersten Pfad die Farbe des aufrufenden Pfads verwenden und lila sind. Die Markierungen auf dem zweiten Pfad hingegen verwenden denselben orange-zu-roten SVG-Verlauf, den der Pfad verwendet. Dieser letzte Fall veranschaulicht, wie SVG-Verläufe als einzelner Verlauf auf die gesamte Form angewendet werden, anstatt unabhängig auf jeden einzelnen Teil der Form angewendet zu werden.

{{EmbedLiveSample("Contextual stroking", "300", "180")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("paint-order")}}
- SVG {{SVGAttr("stroke")}} Attribut
