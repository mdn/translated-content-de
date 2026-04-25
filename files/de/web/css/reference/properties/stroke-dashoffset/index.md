---
title: "`stroke-dashoffset` CSS property"
short-title: stroke-dashoffset
slug: Web/CSS/Reference/Properties/stroke-dashoffset
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`stroke-dashoffset`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert einen Versatz für den Startpunkt der Darstellung des mit einem [SVG](/de/docs/Web/SVG)-Element verbundenen [Strichmuster-Arrays](/de/docs/Web/CSS/Reference/Properties/stroke-dasharray). Wenn vorhanden, überschreibt sie das Attribut {{SVGAttr("stroke-dashoffset")}} des Elements.

Diese Eigenschaft kann auf jede SVG-Form oder Textinhalt-Element angewendet werden (siehe {{SVGAttr("stroke-dashoffset")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auch auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die beabsichtigte Wirkung auf die Striche von Nachfahren-Elementen haben.

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
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Raum definiert wird. Der angegebene Wert, wenn er ungleich `0` ist, verschiebt den Startpunkt vom Beginn des Strichmusters zu einem anderen Punkt innerhalb desselben. Positive Werte scheinen das Strich-Lücken-Muster _nach hinten_ zu verschieben, während negative Werte das Muster _nach vorne_ verschieben.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden genauso wie SVG-Einheiten behandelt (siehe `<number>`, oben), und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert des Elements für die Schriftgröße berechnet; die Auswirkungen anderer Längeneinheiten können je nach Browser variieren. Der Verschiebungseffekt bei jedem Wert ist derselbe wie bei `<number>`-Werten (siehe oben).

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Viewports, die wie folgt berechnet wird: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>, _nicht_ auf die Gesamtlänge des Strichpfades. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Strichversatz

Um zu zeigen, wie Striche versetzt werden können, richten wir zuerst fünf identische Pfade ein, die alle ein Strichmuster-Array aus einem 20-Einheiten-Strich gefolgt von einer 3-Einheiten-Lücke über das SVG-Attribut {{SVGAttr('stroke-dasharray')}} haben. (Dies könnte auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} erfolgen.) Die Pfade erhalten dann individuelle Strichversätze über CSS.

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

In der Reihenfolge:

1. Der erste der fünf Pfade erhält einen Nullversatz, was dem Standardverhalten entspricht.
2. Der zweite Pfad erhält einen Versatz von `-5`, der den Startpunkt des Arrays um fünf Einheiten vor dem Nullpunkt verschiebt. Der visuelle Effekt ist, dass das Strichmuster um fünf Einheiten nach vorne verschoben wird; daher sehen wir am Anfang des Pfades die letzten zwei Einheiten eines Strichs und dann eine dreieinheitige Lücke.
3. Der dritte Pfad hat einen Versatz von `5`, was bedeutet, dass der Startpunkt der Striche fünf Einheiten in das Strichmuster verschoben wird. Der visuelle Effekt ist, das Strichmuster um fünf Einheiten nach hinten zu verschieben; daher sehen wir am Anfang des Pfades die letzten fünfzehn Einheiten eines Strichs gefolgt von einer dreieinheitigen Lücke.
4. Der vierte Pfad hat einen Versatz von `5px`, der den gleichen Effekt wie ein Wert von `5` hat (siehe vorheriges).
5. Der fünfte und letzte Pfad hat einen Versatz von `5%`, was dem vorherigen zwei Beispielen sehr ähnlich ist, aber nicht ganz dasselbe. Prozentsätze werden relativ zur Diagonalmessung des SVG-Viewports berechnet und können somit je nach Größe und Seitenverhältnis des Viewports variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("stroke-dashoffset")}}
- CSS-Eigenschaft {{CSSxref("stroke-dasharray")}}
- CSS-Eigenschaft {{CSSxref("stroke")}}
