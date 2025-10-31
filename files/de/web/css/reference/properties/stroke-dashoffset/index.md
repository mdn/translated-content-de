---
title: stroke-dashoffset
slug: Web/CSS/Reference/Properties/stroke-dashoffset
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`stroke-dashoffset`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen Versatz für den Startpunkt der Darstellung des einem [SVG](/de/docs/Web/SVG)-Element zugeordneten [Strichmusters](/de/docs/Web/CSS/Reference/Properties/stroke-dasharray). Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-dashoffset")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhaltselement (siehe {{SVGAttr("stroke-dashoffset")}} für eine vollständige Liste), aber als geerbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die beabsichtigte Wirkung auf die Striche der Kindelemente haben.

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
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheit-Raum definiert ist. Wenn ein anderer Wert als `0` angegeben wird, bewegt sich der Startpunkt vom Anfang des Strichmusters zu einem anderen Punkt innerhalb des Musters. Somit scheinen positive Werte das Strich-Lücken-Muster _nach hinten_ zu verschieben, während negative Werte das Muster _nach vorne_ verschieben.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden genauso wie SVG-Einheiten behandelt (siehe `<number>` oben), und auf Schrift basierende Längen wie `em` werden in Bezug auf den SVG-Wert der Textgröße des Elements berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Der Verschiebungseffekt für jeden Wert ist derselbe wie für `<number>` Werte (siehe oben).

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Anzeigefensters, das berechnet wird als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>, _nicht_ auf die Gesamtlänge des Strichpfads. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Strichversatz

Um zu zeigen, wie Striche versetzt werden können, richten wir zunächst fünf identische Pfade ein, die alle ein Strichmuster von einem 20-Einheiten-Strich gefolgt von einem 3-Einheiten-Abstand über das SVG-Attribut {{SVGAttr('stroke-dasharray')}} erhalten. (Dies könnte auch mit der CSS-Eigenschaft {{CSSxref('stroke-dasharray')}} erfolgen.) Die Pfade erhalten dann individuelle Strichversätze über CSS.

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

1. Der erste der fünf Pfade erhält einen Versatz von Null, was das Standardverhalten ist.
2. Der zweite Pfad erhält einen Versatz von `-5`, was den Startpunkt des Musters auf fünf Einheiten vor dem Nullpunkt verschiebt. Der visuelle Effekt ist, dass das Strichmuster fünf Einheiten nach vorne geschoben wird; somit sehen wir am Anfang des Pfades die letzten zwei Einheiten eines Striches und dann einen drei Einheiten langen Abstand.
3. Der dritte Pfad hat einen Versatz von `5`, das bedeutet, dass der Startpunkt der Striche fünf Einheiten in das Muster hinein ist. Der visuelle Effekt ist, dass das Strichmuster um fünf Einheiten nach hinten geschoben wird; somit sehen wir am Anfang des Pfades die letzten fünfzehn Einheiten eines Striches gefolgt von einem drei Einheiten langen Abstand.
4. Der vierte Pfad hat einen Versatz von `5px`, was denselben Effekt wie ein Wert von `5` hat (siehe vorherige Erklärungen).
5. Der fünfte und letzte Pfad hat einen Versatz von `5%`, der sehr ähnlich zu den vorherigen beiden Beispielen ist, aber nicht ganz gleich. Prozentsätze werden gegen das Diagonalmass des SVG-Anzeigefensters berechnet und können somit je nach Größe und Seitenverhältnis des Anzeigefensters variieren.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("stroke-dashoffset")}} Attribut
- CSS {{CSSxref("stroke-dasharray")}} Eigenschaft
- CSS {{CSSxref("stroke")}} Eigenschaft
