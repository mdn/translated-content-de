---
title: "`stroke-dashoffset` CSS property"
short-title: stroke-dashoffset
slug: Web/CSS/Reference/Properties/stroke-dashoffset
l10n:
  sourceCommit: cdbd60eab97b1958837806b059a920f6da2f4e78
---

Die **CSS-Eigenschaft `stroke-dashoffset`** definiert einen Versatz für den Ausgangspunkt der Darstellung der zugehörigen [Strichfolge](/de/docs/Web/CSS/Reference/Properties/stroke-dasharray) eines [SVG](/de/docs/Web/SVG)-Elements. Ist die Eigenschaft gesetzt, überschreibt sie das Attribut {{SVGAttr("stroke-dashoffset")}} des Elements. Weitere Informationen zu CSS finden Sie unter [CSS](/de/docs/Web/CSS).

Diese Eigenschaft gilt für alle SVG-Formelemente und Elemente mit Textinhalt (eine vollständige Liste finden Sie unter {{SVGAttr("stroke-dashoffset")}}). Da sie vererbt wird, kann sie auch auf Elemente wie {{SVGElement("g")}} angewendet werden und wirkt sich dann auf die Konturen der untergeordneten Elemente aus.

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
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch das aktuelle Einheitenkoordinatensystem bestimmt wird. Ein anderer Wert als `0` verschiebt den Ausgangspunkt vom Anfang der Strichfolge an eine andere Stelle innerhalb der Folge. Positive Werte lassen das Muster aus Strichen und Lücken dadurch scheinbar _nach hinten_ wandern, negative Werte _nach vorn_.

- {{cssxref("&lt;length&gt;")}}
  - : Pixelwerte werden wie SVG-Einheiten behandelt (siehe [`<number>`](#number)). Schriftbezogene Längen wie `em` werden anhand des SVG-Werts für die Textgröße des Elements berechnet; die Wirkung anderer Längeneinheiten kann vom Browser abhängen. Die Verschiebung wirkt bei allen Werten genauso wie bei `<number>`-Werten.

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentwerte beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports. Sie wird als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet, _nicht_ anhand der Gesamtlänge des Konturpfads. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Strichfolge verschieben

Um zu zeigen, wie sich Strichfolgen verschieben lassen, erstellen wir zunächst fünf identische Pfade. Über das SVG-Attribut {{SVGAttr('stroke-dasharray')}} erhalten sie alle eine Strichfolge aus einem 20 Einheiten langen Strich und einer anschließenden Lücke von 3 Einheiten. (Dies ließe sich auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} erreichen.) Anschließend weisen wir den Pfaden per CSS unterschiedliche Versatzwerte zu.

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

1. Der erste der fünf Pfade hat einen Versatz von null. Das entspricht dem Standardverhalten.
2. Der zweite Pfad hat einen Versatz von `-5`. Dadurch liegt der Ausgangspunkt der Folge fünf Einheiten vor dem Nullpunkt. Optisch wird das Strichmuster um fünf Einheiten nach vorn verschoben: Am Anfang des Pfads sind daher die letzten zwei Einheiten eines Strichs und danach eine drei Einheiten lange Lücke zu sehen.
3. Der dritte Pfad hat einen Versatz von `5`. Der Ausgangspunkt liegt damit fünf Einheiten innerhalb des Strichmusters. Optisch wird das Muster um fünf Einheiten nach hinten verschoben: Am Anfang des Pfads sind daher die letzten fünfzehn Einheiten eines Strichs und anschließend eine drei Einheiten lange Lücke zu sehen.
4. Der vierte Pfad hat einen Versatz von `5px`. Das hat dieselbe Wirkung wie der Wert `5` im vorherigen Beispiel.
5. Der fünfte und letzte Pfad hat einen Versatz von `5%`. Das Ergebnis ähnelt den beiden vorherigen Beispielen, ist aber nicht ganz gleich. Prozentwerte werden anhand der Diagonale des SVG-Viewports berechnet und können daher je nach dessen Größe und Seitenverhältnis variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("stroke-dashoffset")}}
- CSS-Eigenschaft {{CSSxref("stroke-dasharray")}}
- CSS-Eigenschaft {{CSSxref("stroke")}}
