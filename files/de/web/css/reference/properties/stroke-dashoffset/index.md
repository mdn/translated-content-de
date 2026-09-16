---
title: "`stroke-dashoffset` CSS property"
short-title: stroke-dashoffset
slug: Web/CSS/Reference/Properties/stroke-dashoffset
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`stroke-dashoffset`** definiert einen Versatz für den Startpunkt der Darstellung des zugehörigen [Strichmusters](/de/docs/Web/CSS/Reference/Properties/stroke-dasharray) eines [SVG](/de/docs/Web/SVG)-Elements. Falls vorhanden, überschreibt sie das Attribut {{SVGAttr("stroke-dashoffset")}} des Elements.

Diese Eigenschaft gilt für jedes SVG-Form- oder Textinhaltselement (eine vollständige Liste finden Sie unter {{SVGAttr("stroke-dashoffset")}}), kann aber als vererbte Eigenschaft auch auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Striche von Nachfolgerelementen haben.

## Syntax

```css
/* Keyword value */
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
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert wird. Der angegebene Wert verschiebt, sofern er nicht `0` ist, den Startpunkt vom Beginn des Strichmusters zu einem anderen Punkt innerhalb dieses Musters. Daher scheinen positive Werte das Strich-Lücken-Muster _rückwärts_ zu verschieben, während negative Werte das Muster _vorwärts_ zu verschieben scheinen.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden genauso behandelt wie SVG-Einheiten (siehe `<number>` oben), und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert des Elements für die Textgröße berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Der Verschiebungseffekt für jeden Wert entspricht dem von `<number>`-Werten (siehe oben).

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentwerte beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Viewports, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird, _nicht_ auf die Gesamtlänge des Strichpfads. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Strichversatz

Um zu zeigen, wie Striche versetzt werden können, richten wir zunächst fünf identische Pfade ein, die alle über das SVG-Attribut {{SVGAttr('stroke-dasharray')}} ein Strichmuster aus einem 20-Einheiten-Strich gefolgt von einer 3-Einheiten-Lücke erhalten. (Dies hätte auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} erfolgen können.) Den Pfaden werden dann über CSS individuelle Strichversätze zugewiesen.

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

Der Reihe nach:

1. Der erste der fünf Pfade erhält einen Versatz von null, was dem Standardverhalten entspricht.
2. Der zweite Pfad erhält einen Versatz von `-5`, wodurch der Startpunkt des Musters auf fünf Einheiten vor dem Nullpunkt verschoben wird. Der sichtbare Effekt besteht darin, dass das Strichmuster um fünf Einheiten nach vorn verschoben wird; daher sehen wir am Beginn des Pfads die letzten zwei Einheiten eines Strichs und anschließend eine Drei-Einheiten-Lücke.
3. Der dritte Pfad hat einen Versatz von `5`, was bedeutet, dass der Startpunkt der Striche fünf Einheiten innerhalb des Strichmusters liegt. Der sichtbare Effekt besteht darin, das Strichmuster um fünf Einheiten nach hinten zu verschieben; daher sehen wir am Beginn des Pfads die letzten fünfzehn Einheiten eines Strichs, gefolgt von einer Drei-Einheiten-Lücke.
4. Der vierte Pfad hat einen Versatz von `5px`, der dieselbe Wirkung wie ein Wert von `5` hat (siehe vorheriges Beispiel).
5. Der fünfte und letzte Pfad hat einen Versatz von `5%`, der den vorherigen beiden Beispielen sehr ähnlich ist, aber nicht ganz gleich. Prozentwerte werden anhand des Diagonalmaßes des SVG-Viewports berechnet und können daher je nach Größe und Seitenverhältnis dieses Viewports variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("stroke-dashoffset")}}
- CSS-Eigenschaft {{CSSxref("stroke-dasharray")}}
- CSS-Eigenschaft {{CSSxref("stroke")}}
