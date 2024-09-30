---
title: stroke-dashoffset
slug: Web/CSS/stroke-dashoffset
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`stroke-dashoffset`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen Versatz für den Startpunkt der Darstellung des mit dem [SVG](/de/docs/Web/SVG) Element verbundenen [Stricharrays](/de/docs/Web/CSS/stroke-dasharray). Wenn vorhanden, überschreibt sie das Attribut {{SVGAttr("stroke-dashoffset")}} des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhaltelemente (siehe {{SVGAttr("stroke-dashoffset")}} für die vollständige Liste), kann aber als geerbte Eigenschaft auch auf Elemente wie {{SVGElement("g")}} angewendet werden und hat weiterhin den gewünschten Effekt auf die Striche der Nachfahren-Elemente.

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

  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert wird. Der angegebene Wert, soweit er ungleich `0` ist, verschiebt den Startpunkt vom Anfang des Stricharrays zu einem anderen Punkt innerhalb desselben. Somit erscheinen positive Werte, als ob das Strich-Lückenmuster _nach hinten_ verschoben wird, und negative Werte verschieben das Muster nach _vorne_.

- {{cssxref("&lt;length&gt;")}}

  - : Pixeleinheiten werden genauso wie SVG-Einheiten behandelt (siehe `<number>`, oben) und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert der Textgröße des Elements berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Der Verschiebungseffekt für jeden Wert ist derselbe wie für `<number>`-Werte (siehe oben).

- {{cssxref("&lt;percentage&gt;")}}

  - : Prozentsätze beziehen sich auf die normierte Diagonale des aktuellen SVG-Ansichtsfensters, die wie folgt berechnet wird <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>, _nicht_ auf die Gesamtlänge des Strichpfads. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Strichversatz

Um zu zeigen, wie Striche versetzt werden können, richten wir zunächst fünf identische Pfade ein, denen allen ein Stricharray von einem 20-Einheiten-Strich gefolgt von einer 3-Einheiten-Lücke über das SVG-Attribut {{SVGAttr('stroke-dasharray')}} zugewiesen wird. (Dies hätte auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} gemacht werden können.) Den Pfaden werden dann individuelle Strichversätze über CSS zugewiesen.

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

1. Dem ersten der fünf Pfade wird ein Versatz von Null zugewiesen, was das Standardverhalten ist.
2. Der zweite Pfad erhält einen Versatz von `-5`, was den Startpunkt des Arrays fünf Einheiten vor dem Nullpunkt verschiebt. Der visuelle Effekt ist, dass das Strichmuster um fünf Einheiten nach vorne verschoben wird; somit sehen wir am Anfang des Pfads die letzten zwei Einheiten eines Strichs, gefolgt von einer dreieinheitigen Lücke.
3. Der dritte Pfad hat einen Versatz von `5`, was bedeutet, dass der Startpunkt der Striche fünf Einheiten in das Strichmuster hineinliegt. Der visuelle Effekt ist, dass das Strichmuster um fünf Einheiten nach hinten geschoben wird; somit sehen wir am Anfang des Pfades die letzten fünfzehn Einheiten eines Strichs, gefolgt von einer dreieinheitigen Lücke.
4. Der vierte Pfad hat einen Versatz von `5px`, der den gleichen Effekt wie ein Wert von `5` hat (siehe vorher).
5. Der fünfte und letzte Pfad hat einen Versatz von `5%`, was dem Effekt der vorherigen beiden Beispiele sehr ähnlich ist, jedoch nicht ganz gleich. Prozentsätze werden gegenüber der Diagonale des SVG-Ansichtsfensters berechnet und können daher je nach Größe und Seitenverhältnis des Ansichtsfensters variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("stroke-dashoffset")}} Attribut
- CSS {{CSSxref("stroke-dasharray")}} Eigenschaft
- CSS {{CSSxref("stroke")}} Eigenschaft
