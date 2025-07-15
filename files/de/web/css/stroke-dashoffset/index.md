---
title: stroke-dashoffset
slug: Web/CSS/stroke-dashoffset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`stroke-dashoffset`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert einen Versatz für den Startpunkt der Darstellung eines mit einem [SVG](/de/docs/Web/SVG)-Element verbundenen [Strichmusters](/de/docs/Web/CSS/stroke-dasharray). Wenn vorhanden, überschreibt es das {{SVGAttr("stroke-dashoffset")}}-Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhalts-Element (siehe {{SVGAttr("stroke-dashoffset")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Striche der Nachkommenelemente haben.

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
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert ist. Der angegebene Wert, wenn er ungleich `0` ist, bewegt den Startpunkt vom Beginn des Strichmusters zu einem anderen Punkt innerhalb desselben. Positive Werte verschieben das Strichlückenmuster _rückwärts_ und negative Werte verschieben das Muster _vorwärts_.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden genauso behandelt wie SVG-Einheiten (siehe `<number>`, oben) und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert für die Textgröße des Elements berechnet; die Effekte anderer Längeneinheiten können vom Browser abhängen. Der Verschiebungseffekt für jeden Wert ist derselbe wie für `<number>`-Werte (siehe oben).

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Viewports, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird, _nicht_ auf die Gesamtlänge des Strichpfades. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Strich-Versetzen

Um zu zeigen, wie Striche versetzt werden können, richten wir zuerst fünf identische Pfade ein, die alle ein Strichmuster von einem 20-Einheiten-Strich gefolgt von einer 3-Einheiten-Lücke über das SVG-Attribut {{SVGAttr('stroke-dasharray')}} erhalten. (Dies könnte auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} gemacht worden sein.) Die Pfade erhalten dann individuelle Strichversätze über CSS.

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

1. Der erste der fünf Pfade erhält keinen Versatz, was das Standardverhalten ist.
2. Der zweite Pfad erhält einen Versatz von `-5`, was den Startpunkt des Musters um fünf Einheiten vor den Nullpunkt verschiebt. Der visuelle Effekt ist, dass das Strichmuster um fünf Einheiten nach vorne geschoben wird; somit sehen wir am Anfang des Pfades die letzten zwei Einheiten eines Strichs und dann eine drei Einheiten große Lücke.
3. Der dritte Pfad hat einen Versatz von `5`, was bedeutet, dass der Startpunkt der Striche fünf Einheiten in das Strichmuster eintaucht. Der visuelle Effekt ist, das Strichmuster um fünf Einheiten nach hinten zu schieben; somit sehen wir am Anfang des Pfades die letzten fünfzehn Einheiten eines Strichs gefolgt von einer drei Einheiten großen Lücke.
4. Der vierte Pfad hat einen Versatz von `5px`, was denselben Effekt wie ein Wert von `5` hat (siehe vorherigen Punkt).
5. Der fünfte und letzte Pfad hat einen Versatz von `5%`, der dem der vorherigen zwei Beispiele sehr ähnlich ist, aber nicht ganz gleich. Prozentsätze werden gegen die Diagonalmessung des SVG-Viewports berechnet und können daher je nach Größe und Seitenverhältnis des Viewports variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("stroke-dashoffset")}}
- CSS-Eigenschaft {{CSSxref("stroke-dasharray")}}
- CSS-Eigenschaft {{CSSxref("stroke")}}
