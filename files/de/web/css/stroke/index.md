---
title: stroke
slug: Web/CSS/stroke
l10n:
  sourceCommit: 727be5569e8e5d6b9c630bc1ed362e1be1edef88
---

{{CSSRef}}

Die **`stroke`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe oder den SVG-Mal-Server, der verwendet wird, um den Strich eines Elements zu zeichnen. Daher hat `stroke` nur eine Auswirkung auf Elemente, denen ein Strich zugewiesen werden kann (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}); auf der Seite über das SVG {{SVGAttr('stroke')}} Attribut finden Sie eine vollständige Liste. Wenn deklariert, überschreibt der CSS-Wert jeden Wert des {{SVGAttr("stroke")}} SVG-Attributs des Elements.

> [!NOTE]
> Laut dem Entwurf vom 4. April 2017 der Spezifikation [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke-3/#stroke-shorthand) ist die `stroke` Eigenschaft eine Abkürzung für eine Reihe anderer Stricheigenschaften. In der Praxis, Stand August 2024, unterstützen Browser nicht die Einstellung anderer streifenbezogener Werte wie Breite oder Strichmuster über die `stroke` Eigenschaft, sondern behandeln sie stattdessen als direktes Analog zum SVG {{SVGAttr("stroke")}} Attribut.

## Syntax

```css
/* assorted color values */
stroke: rgb(153 51 102 / 1);
stroke: color-mix(in lch, var(--primaryColor) 35%, gray 15%));
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

  - : Setzt das Malen des Strichs mit jedem gültigen CSS-Farbwert.

- `<image>`

  - : Setzt das Malen des Strichs mit dem, was SVG einen [_paint server_](https://www.w3.org/TR/SVG2/pservers.html) nennt, was in diesem Kontext ein SVG-Verlauf oder -Muster ist. CSS-Verläufe können nicht mit der `stroke` Eigenschaft verwendet werden.

- `context-stroke`

  - : Veranlasst, dass ein Element seine Strichdefinition von seinem [_Kontextelement_](https://svgwg.org/svg2-draft/painting.html#TermContextElement) "erbt". Wenn es kein gültiges Kontextelement gibt, wird dieser Wert dazu führen, dass für den Strich keine Farbe verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Farbstrichzeichnen

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil einer {{SVGElement("g")}} (Gruppe) sind, die als Standard für die beiden Formen eine graue Strichfarbe hat.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine düstere violette Farbe auf das Rechteck und eine rote auf den Kreis an.

```css
rect {
  stroke: hsl(270deg 50% 40%);
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Grundlegendes Farbstrichzeichnen", "300", "180")}}

### Musterstrichzeichnen

Dieses Beispiel verwendet die gleiche Gruppe und Formen (mit dem Kreis etwas weiter zu einem anderen Ort verschoben) wie im vorherigen Beispiel, definiert jedoch zusätzlich ein SVG-Muster.

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

Das Muster wird dann im CSS mit einem URL-Wert auf die ID des Musters verwiesen. Dieses Muster wird auf beide Formen als Strichfarbe angewendet, mit dem gezeigten Ergebnis.

```css
rect,
circle {
  stroke: url(#star);
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu einer visuellen Überlagerung führen kann, wenn sie sich überschneiden, da Teile des Musters transparent sind.

{{EmbedLiveSample("Musterstrichzeichnen", "300", "180")}}

### SVG- versus CSS-Verläufe

Hier verwenden wir erneut die gleiche Gruppe-und-Formen-Markup wie im ersten Beispiel, fügen jedoch eine Definition für einen SVG-Verlauf hinzu.

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

Im CSS wenden wir diesen SVG-Verlauf auf das Rechteck mit einem URL-Wert an, der auf die ID des linearen Verlaufs zeigt. Auf den Kreis wenden wir einen CSS-linearen Verlauf an, der im Sinn dem SVG-Verlauf entspricht.

```css
rect {
  stroke: url(#greenwhite);
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält einen Verlaufsstrich, während der Kreis auf den grauen Strich zurückgreift, der durch das Gruppenelement festgelegt wurde. Dies geschieht, weil CSS-Verläufe keine gültigen Werte für die `stroke` Eigenschaft sind, während URL-Referenzen auf SVG-Verläufe zugelassen sind.

{{EmbedLiveSample("SVG- versus CSS-Verläufe", "300", "180")}}

### Kontextuelles Strichzeichnen

In diesem Fall beginnen wir erneut mit einem Gruppenelement, in dem zwei rechteckige Pfade definiert sind. Danach werden ein linearer Verlauf und ein SVG-Marker definiert.

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

Wir schreiben dann CSS, um einen Marker für beide Pfade hinzuzufügen und auch eine düstere lila Strichfarbe zu haben. Dies wird für den zweiten Pfad überschrieben, dem ein URL-Wert gegeben wird, um den orange-zu-roten Verlauf als seinen Strich anzuwenden. Schließlich setzen wir das Kreiselement im Markerelement so, dass es einen Strichwert von `context-stroke` hat.

```css
path {
  stroke: hsl(270deg 50% 40%);
  marker: url(#circle);
}
path:nth-of-type(2) {
  stroke: url(#orangered);
}
marker circle {
  stroke: context-stroke;
}
```

Da `stroke-context` auf ein Element angewendet wird, das von einem {{SVGElement('marker')}} Element abstammt, ist das Kontextelement für jeden Kreis das Element, das das `<marker>` Element aufgerufen hat; das heißt, die {{SVGElement('path')}} Elemente. Das Ergebnis ist, dass die Marker auf dem ersten Pfad die Farbe des aufrufenden Pfades verwenden und lila sind. Die Marker auf dem zweiten Pfad hingegen verwenden den gleichen orange-zu-roten SVG-Verlauf, den der Pfad verwendet. Dieser letztere Fall illustriert, wie SVG-Verläufe als einzelner Verlauf auf die gesamte Form angewendet werden, anstatt auf jedes individuelle Teil der Form.

{{EmbedLiveSample("Kontextuelles Strichzeichnen", "300", "180")}}

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
