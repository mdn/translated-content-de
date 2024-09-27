---
title: stroke-dashoffset
slug: Web/CSS/stroke-dashoffset
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`stroke-dashoffset`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen Versatz für den Startpunkt der Darstellung des mit einem [Dash-Array](/de/docs/Web/CSS/stroke-dasharray) assoziierten [SVG](/de/docs/Web/SVG) Elements. Wenn vorhanden, überschreibt es das {{SVGAttr("stroke-dashoffset")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhalt-Element (siehe {{SVGAttr("stroke-dashoffset")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Striche der Nachkommenelemente haben.

## Syntax

```css
/* Keyword */
stroke-dashoffset: none;

/* Length and percentage values */
stroke-dashoffset: 2;
stroke-dashoffset: 2px;
stroke-dashoffset: 2%;

/* Global values */
stroke-dashoffset: inherit;
stroke-dashoffset: initial;
stroke-dashoffset: revert;
stroke-dashoffset: revert-layer;
stroke-dashoffset: unset;
```

### Werte

- {{cssxref("&lt;number&gt;")}} {{non-standard_Inline}}

  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert wird. Der angegebene Wert, falls ungleich `0`, verschiebt den Startpunkt vom Beginn des Dash-Arrays zu einem anderen Punkt innerhalb desselben. So werden positive Werte das Dash-Lücken-Muster _nach hinten_ verschieben, während negative Werte das Muster _nach vorne_ bewegen.

- {{cssxref("&lt;length&gt;")}}

  - : Pixeleinheiten werden genauso wie SVG-Einheiten behandelt (siehe `<number>`, oben) und schrift-basierten Längen wie `em` werden in Bezug auf den SVG-Wert des Elements für die Textgröße berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Der Verschiebungseffekt für jeden Wert ist derselbe wie für `<number>`-Werte (siehe oben).

- {{cssxref("&lt;percentage&gt;")}}

  - : Prozentsätze beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird, _nicht_ auf die gesamte Länge des Streckenpfads. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Dash-Versetzung

Um zu zeigen, wie Strichelungen versetzt werden können, richten wir zunächst fünf identische Pfade ein, die alle ein Dash-Array mit einem 20-Einheiten langen Strich gefolgt von einer 3-Einheiten-langen Lücke über das SVG-Attribut {{SVGAttr('stroke-dasharray')}} zugewiesen bekommen. (Dies hätte auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} erfolgen können.) Die Pfade erhalten dann individuelle Dash-Versätze über CSS.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#EEE" />
  <g stroke="dodgerblue" stroke-width="2" stroke-dasharray="20,3">
    <path d="M 10,10 h 80" />
    <path d="M 10,15 h 80" />
    <path d="M 10,20 h 80" />
    <path d="M 10,25 h 80" />
    <path d="M 10,30 h 80" />
  </g>
</svg>
```

```css
path:nth-of-type(1) {
  stroke-dashoffset: 0;
}
path:nth-of-type(2) {
  stroke-dashoffset: -5;
}
path:nth-of-type(3) {
  stroke-dashoffset: 5;
}
path:nth-of-type(4) {
  stroke-dashoffset: 5px;
}
path:nth-of-type(5) {
  stroke-dashoffset: 5%;
}
```

In der Reihenfolge:

1. Der erste der fünf Pfade erhält einen Null-Versatz, was das Standardverhalten ist.
2. Der zweite Pfad erhält einen Versatz von `-5`, wodurch der Startpunkt des Arrays fünf Einheiten vor den Nullpunkt verschoben wird. Der visuelle Effekt ist, dass das Dash-Muster fünf Einheiten nach vorne verschoben wird; somit sehen wir am Anfang des Pfads die letzten zwei Einheiten eines Striches gefolgt von einer drei Einheiten langen Lücke.
3. Der dritte Pfad hat einen Versatz von `5`, was bedeutet, dass der Startpunkt der Strichelungen fünf Einheiten in das Dash-Muster hinein liegt. Der visuelle Effekt ist, dass das Dash-Muster fünf Einheiten nach hinten verschoben wird; somit sehen wir am Anfang des Pfads die letzten fünfzehn Einheiten eines Striches gefolgt von einer drei Einheiten langen Lücke.
4. Der vierte Pfad hat einen Versatz von `5px`, was denselben Effekt wie ein Wert von `5` hat (siehe vorher).
5. Der fünfte und letzte Pfad hat einen Versatz von `5%`, der sehr ähnlich zu den vorherigen zwei Beispielen ist, aber nicht ganz derselbe. Prozentsätze werden anhand des diagonalen Maßes des SVG-Viewports berechnet und können daher je nach Größe und Seitenverhältnis dieses Viewports variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("stroke-dashoffset")}} Attribut
- CSS {{CSSxref("stroke-dasharray")}} Eigenschaft
- CSS {{CSSxref("stroke")}} Eigenschaft
