---
title: stroke-dashoffset
slug: Web/CSS/stroke-dashoffset
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`stroke-dashoffset`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert eine Verschiebung für den Startpunkt des Renderings des zugehörigen [Strichmuster](/de/docs/Web/CSS/stroke-dasharray) eines [SVG](/de/docs/Web/SVG)-Elements. Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-dashoffset")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhaltselement (siehe {{SVGAttr("stroke-dashoffset")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die beabsichtigte Wirkung auf die Linien der Nachfahren-Elemente haben.

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

  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert ist. Der angegebene Wert, wenn ungleich `0`, verschiebt den Startpunkt vom Anfang des Strichmusters zu einem anderen Punkt innerhalb desselben. Positive Werte scheinen das Strich-Lücken-Muster _rückwärts_ zu verschieben, und negative Werte scheinen das Muster _vorwärts_ zu verschieben.

- {{cssxref("&lt;length&gt;")}}

  - : Pixeleinheiten werden wie SVG-Einheiten behandelt (siehe `<number>`, oben), und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert für die Textgröße des Elements berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Der Verschiebungseffekt für jeden Wert ist der gleiche wie für `<number>`-Werte (siehe oben).

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Anzeigefensters, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird, _nicht_ auf die Gesamtlänge des Strichpfads. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Strichverschiebung

Um zu zeigen, wie Striche verschoben werden können, richten wir zunächst fünf identische Pfade ein, die alle ein Strichmuster von einem 20-Einheiten-Strich gefolgt von einer 3-Einheiten-Lücke über das SVG-Attribut {{SVGAttr('stroke-dasharray')}} erhalten. (Dies hätte auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} gemacht werden können.) Die Pfade erhalten dann individuelle Strichverschiebungen über CSS.

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

In Reihenfolge:

1. Der erste der fünf Pfade erhält eine Nullverschiebung, was das Standardverhalten ist.
2. Der zweite Pfad erhält eine Verschiebung von `-5`, die den Startpunkt des Strichmusters fünf Einheiten vor dem Nullpunkt verlagert. Der visuelle Effekt ist, dass das Strichmuster fünf Einheiten nach vorne geschoben wird; wir sehen also am Anfang des Pfades die letzten zwei Einheiten eines Strichs und dann eine dreieinheiten Lücke.
3. Der dritte Pfad hat eine Verschiebung von `5`, was bedeutet, dass der Startpunkt der Striche fünf Einheiten in das Strichmuster verlagert ist. Der visuelle Effekt ist, das Strichmuster um fünf Einheiten nach hinten zu schieben; wir sehen also am Anfang des Pfades die letzten fünfzehn Einheiten eines Strichs gefolgt von einer dreieinheiten Lücke.
4. Der vierte Pfad hat eine Verschiebung von `5px`, was denselben Effekt wie ein Wert von `5` hat (siehe vorher).
5. Der fünfte und letzte Pfad hat eine Verschiebung von `5%`, was sehr ähnlich zu den vorherigen zwei Beispielen ist, aber nicht ganz dasselbe. Prozentsätze werden gegen das diagonale Maß des SVG-Anzeigefensters berechnet und können daher je nach Größe und Seitenverhältnis dieses Anzeigefensters variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("stroke-dashoffset")}} Attribut
- CSS {{CSSxref("stroke-dasharray")}} Eigenschaft
- CSS {{CSSxref("stroke")}} Eigenschaft
