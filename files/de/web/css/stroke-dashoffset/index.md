---
title: stroke-dashoffset
slug: Web/CSS/stroke-dashoffset
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{CSSRef}}

Die **`stroke-dashoffset`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen Versatz für den Startpunkt der Darstellung des mit einem [SVG](/de/docs/Web/SVG) Element assoziierten [Strichmuster-Arrays](/de/docs/Web/CSS/stroke-dasharray). Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-dashoffset")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhalts-Element (siehe {{SVGAttr("stroke-dashoffset")}} für eine vollständige Liste), kann jedoch als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und hat trotzdem den beabsichtigten Effekt auf die Striche der Nachkommen.

## Syntax

```css
/* Schlüsselwort */
stroke-dashoffset: none;

/* Längen- und Prozentwerte */
stroke-dashoffset: 2;
stroke-dashoffset: 2px;
stroke-dashoffset: 2%;

/* Globale Werte */
stroke-dashoffset: inherit;
stroke-dashoffset: initial;
stroke-dashoffset: revert;
stroke-dashoffset: revert-layer;
stroke-dashoffset: unset;
```

### Werte

- {{cssxref("&lt;number&gt;")}} {{non-standard_Inline}}

  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert ist. Der angegebene Wert, wenn er nicht `0` ist, verschiebt den Startpunkt vom Anfang des Strichmuster-Arrays zu einem anderen Punkt innerhalb desselben. Positive Werte scheinen das Strich-Lücke-Muster _rückwärts_ zu verschieben, während negative Werte das Muster _vorwärts_ verschieben.

- {{cssxref("&lt;length&gt;")}}

  - : Pixeleinheiten werden genauso wie SVG-Einheiten behandelt (siehe `<number>`, oben) und schriftbasierte Längen wie `em` werden im Hinblick auf den SVG-Wert des Elements für die Textgröße berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Der Verschiebungseffekt für jeden Wert ist derselbe wie für `<number>`-Werte (siehe oben).

- {{cssxref("&lt;percentage&gt;")}}

  - : Prozentsätze beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird, _nicht_ auf die Gesamtlänge des Strichpfads. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Strich-Versatz

Um zu zeigen, wie Striche versetzt werden können, richten wir zuerst fünf identische Pfade ein, denen allen mittels des SVG-Attributs {{SVGAttr('stroke-dasharray')}} ein Strichmuster-Array aus einem 20-Einheiten-Strich gefolgt von einer 3-Einheiten-Lücke zugewiesen wird. (Dies hätte auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} erfolgen können.) Die Pfade erhalten dann individuelle Strichversätze über CSS.

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

1. Der erste der fünf Pfade erhält einen Nullversatz, was das Standardverhalten ist.
2. Der zweite Pfad erhält einen Versatz von `-5`, der den Startpunkt des Arrays fünf Einheiten vor den Nullpunkt verschiebt. Der visuelle Effekt ist, dass das Strichmuster um fünf Einheiten nach vorne verschoben wird; somit sehen wir am Anfang des Pfades die letzten zwei Einheiten eines Strichs und dann eine drei-Einheiten-Lücke.
3. Der dritte Pfad hat einen Versatz von `5`, was bedeutet, dass der Startpunkt der Striche fünf Einheiten in das Strichmuster verschoben ist. Der visuelle Effekt ist, dass das Strichmuster um fünf Einheiten nach hinten verschoben wird; somit sehen wir am Anfang des Pfades die letzten fünfzehn Einheiten eines Strichs gefolgt von einer drei-Einheiten-Lücke.
4. Der vierte Pfad hat einen Versatz von `5px`, der denselben Effekt wie ein Wert von `5` hat (siehe vorheriges).
5. Der fünfte und letzte Pfad hat einen Versatz von `5%`, was dem vorherigen Beispiel sehr ähnlich ist, aber nicht ganz das gleiche. Prozentsätze werden in Bezug auf das diagonale Maß des SVG-Viewports berechnet und können daher je nach Größe und Seitenverhältnis dieses Viewports variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("stroke-dashoffset")}} Attribut
- CSS {{CSSxref("stroke-dasharray")}} Eigenschaft
- CSS {{CSSxref("stroke")}} Eigenschaft
