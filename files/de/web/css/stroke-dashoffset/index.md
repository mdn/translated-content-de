---
title: stroke-dashoffset
slug: Web/CSS/stroke-dashoffset
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`stroke-dashoffset`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen Versatz für den Startpunkt der Darstellung des mit einem [SVG](/de/docs/Web/SVG) Element verbundenen [dash array](/de/docs/Web/CSS/stroke-dasharray). Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-dashoffset")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhalts-Element (siehe {{SVGAttr("stroke-dashoffset")}} für eine vollständige Liste), kann jedoch, da sie eine vererbte Eigenschaft ist, auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch den beabsichtigten Effekt auf die Striche der Nachfahren-Elemente haben.

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
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitsraum definiert wird. Der angegebene Wert versetzt, falls anders als `0`, den Startpunkt vom Anfang des Dash-Arrays zu einem anderen Punkt innerhalb davon. Positive Werte scheinen das Muster der Strichlücken _rückwärts_ zu verschieben, und negative Werte scheinen das Muster _vorwärts_ zu verschieben.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden genauso behandelt wie SVG-Einheiten (siehe `<number>`, oben) und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert des Elements für die Textgröße berechnet; die Effekte anderer Längeneinheiten können vom Browser abhängen. Der Verschiebungseffekt für jeden Wert ist derselbe wie für `<number>`-Werte (siehe oben).

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Viewports, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird, _nicht_ auf die Gesamtlänge des Strichpfads. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Strich-Versatz

Um zu zeigen, wie Striche versetzt werden können, richten wir zunächst fünf identische Pfade ein, die alle ein Dash-Array mit einem 20-Einheiten-Strich gefolgt von einem 3-Einheiten-Abstand über das SVG-Attribut {{SVGAttr('stroke-dasharray')}} erhalten. (Dies hätte auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} erreicht werden können.) Den Pfaden werden dann individuelle Strich-Versätze über CSS zugewiesen.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#eeeeee" />
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

In Reihenfolge:

1. Der erste der fünf Pfade erhält einen Nullversatz, was dem Standardverhalten entspricht.
2. Der zweite Pfad erhält einen Versatz von `-5`, der den Startpunkt des Arrays um fünf Einheiten vor den Nullpunkt verschiebt. Der visuelle Effekt ist, dass das Strichmuster um fünf Einheiten nach vorne geschoben wird; somit sehen wir am Anfang des Pfades die letzten zwei Einheiten eines Striches und dann einen drei Einheiten breiten Abstand.
3. Der dritte Pfad hat einen Versatz von `5`, was bedeutet, dass der Startpunkt der Striche fünf Einheiten in das Strichmuster verschoben wird. Der visuelle Effekt ist, dass das Strichmuster um fünf Einheiten nach hinten geschoben wird; somit sehen wir am Anfang des Pfades die letzten fünfzehn Einheiten eines Striches gefolgt von einem drei Einheiten breiten Abstand.
4. Der vierte Pfad hat einen Versatz von `5px`, der den gleichen Effekt wie ein Wert von `5` hat (siehe oben).
5. Der fünfte und letzte Pfad hat einen Versatz von `5%`, der dem der vorherigen zwei Beispiele sehr ähnlich ist, jedoch nicht ganz gleich ist. Prozentwerte werden gegen das diagonale Maß des SVG-Viewports berechnet und können daher je nach Größe und Seitenverhältnis dieses Viewports variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("stroke-dashoffset")}} Attribut
- CSS {{CSSxref("stroke-dasharray")}} Eigenschaft
- CSS {{CSSxref("stroke")}} Eigenschaft
