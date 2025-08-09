---
title: stroke
slug: Web/CSS/stroke
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`stroke`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Farbe oder den SVG-Malsever, der verwendet wird, um den Strich eines Elements zu zeichnen. Daher hat `stroke` nur Wirkung auf Elemente, denen ein Strich zugewiesen werden kann (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}); siehe die Seite über das SVG-Attribut {{SVGAttr('stroke')}} für eine vollständige Liste. Wenn deklariert, überschreibt der CSS-Wert jeden Wert des {{SVGAttr("stroke")}} SVG-Attributs des Elements.

> [!NOTE]
> Laut dem Entwurf vom 4. April 2017 der Spezifikation [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke-3/#stroke-shorthand) ist die `stroke`-Eigenschaft eine Kurzform für eine Reihe anderer Stricheigenschaften. In der Praxis, Stand August 2024, unterstützen Browser nicht die Einstellung anderer strichbezogener Werte wie Breite oder Strichmuster über die `stroke`-Eigenschaft, sondern behandeln sie stattdessen als direktes Analogon des SVG-Attributs {{SVGAttr("stroke")}}.

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
  - : Legt das Bemalen des Strichs mit einem gültigen CSS-Farbwert fest.

- `<image>`
  - : Setzt das Bemalen des Strichs mit einem [_paint server_](https://svgwg.org/svg2-draft/pservers.html), was in diesem Kontext ein SVG-Gradient oder Muster ist. CSS-Gradienten können nicht mit der `stroke`-Eigenschaft verwendet werden.

- `context-stroke`
  - : Führt dazu, dass ein Element seine Strichdefinition von seinem [_Kontextelement_](https://svgwg.org/svg2-draft/painting.html#TermContextElement) "erbt". Wenn es kein gültiges Kontextelement gibt, wird bei diesem Wert keine Farbe für den Strich verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Färben

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil einer {{SVGElement("g")}} (Gruppe) sind, die eine graue Strichfarbe als Standard für die beiden Formen hat.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine dämmerungsartige violette Farbe auf das Rechteck und ein Rot auf den Kreis an.

```css
rect {
  stroke: rebeccapurple;
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Basic color stroking", "300", "180")}}

### Muster-Strich

Dieses Beispiel verwendet dieselbe Gruppe und Formen (wobei der Kreis etwas verschoben wurde) wie im vorherigen Beispiel, hat jedoch auch ein SVG-Muster definiert.

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

Das Muster wird dann im CSS mit einem URL-Wert referenziert, der auf die ID des Musters zeigt. Dieses Muster wird auf beide Formen als Strichfarbe angewendet, wobei das Ergebnis angezeigt wird.

```css
rect,
circle {
  stroke: url("#star");
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu visuellen Störungen führen kann, wenn sie sich überlappen, da Teile des Musters transparent sind.

{{EmbedLiveSample("Pattern stroking", "300", "180")}}

### SVG- vs. CSS-Gradienten

Hier verwenden wir erneut dasselbe Gruppen- und Form-Markup wie im ersten Beispiel, fügen jedoch auch eine Definition für einen SVG-Gradienten hinzu.

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

Im CSS wenden wir diesen SVG-Gradienten auf das Rechteck an, indem wir einen URL-Wert verwenden, der auf die ID des linearen Gradienten verweist. Auf den Kreis wenden wir einen CSS-linearen Gradienten an, der in der Absicht dem SVG-Gradienten entspricht.

```css
rect {
  stroke: url("#greenwhite");
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält einen abgestuften Strich, während der Kreis auf den grauen Strich zurückfällt, der vom Gruppenelement festgelegt wurde. Dies geschieht, weil CSS-Gradienten keine gültigen Werte für die `stroke`-Eigenschaft sind, während URL-Referenzen auf SVG-Gradienten zulässig sind.

{{EmbedLiveSample("SVG versus CSS gradients", "300", "180")}}

### Kontextueller Strich

In diesem Fall beginnen wir erneut mit einem Gruppenelement, innerhalb dessen zwei rechteckige Pfade definiert sind. Danach werden ein linearer Gradient und ein SVG-Marker definiert.

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

Wir schreiben dann CSS, um beiden Pfaden einen Marker hinzuzufügen und außerdem eine dämmerungsartige violette Strichfarbe zu haben. Dies wird für den zweiten Pfad überschrieben, der einen URL-Wert erhält, um den orange-zu-roten Gradient als seinen Strich anzuwenden. Schließlich setzen wir das Kreiselement im Markerelement so, dass es einen Strichwert von `context-stroke` hat.

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

Weil `stroke-context` auf ein Element angewendet wird, das von einem {{SVGElement('marker')}}-Element abstammt, ist das Kontextelement für jeden Kreis das Element, das das `<marker>`-Element aufgerufen hat; das heißt, die {{SVGElement('path')}}-Elemente. Das Ergebnis ist, dass die Markierungen auf dem ersten Pfad die Farbe des aufrufenden Pfads verwenden und lila sind. Die Markierungen auf dem zweiten Pfad hingegen verwenden denselben orange-zu-roten SVG-Gradienten, den der Pfad verwendet. Dieser letzte Fall veranschaulicht, wie SVG-Gradienten als ein einziger Gradient auf die gesamte Form angewendet werden, anstatt auf jeden einzelnen Teil der Form unabhängig anzuwenden.

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
- SVG {{SVGAttr("stroke")}}-Attribut
