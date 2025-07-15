---
title: stroke-width
slug: Web/CSS/stroke-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`stroke-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Breite eines Strichs, der auf die [SVG](/de/docs/Web/SVG)-Form angewendet wird. Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-width")}}-Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhaltselemente (siehe {{SVGAttr("stroke-width")}} für eine vollständige Liste). Als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Striche der Nachkommenelemente haben. Wenn der Wert zu null ausgewertet wird, wird der Strich nicht gezeichnet.

## Syntax

```css
/* Length and percentage values */
stroke-width: 0%;
stroke-width: 1.414px;

/* Global values */
stroke-width: inherit;
stroke-width: initial;
stroke-width: revert;
stroke-width: revert-layer;
stroke-width: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Pixel-Einheiten werden genauso behandelt wie SVG-Einheiten (siehe `<number>`, oben), und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert der Textgröße des Elements berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen.

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Viewports, die wie folgt berechnet wird: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

- {{cssxref("&lt;number&gt;")}} {{non-standard_inline}}
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Strichbreiten

Dieses Beispiel zeigt verschiedene Wertesyntaxen für die `stroke-width`-Eigenschaft.

#### HTML

Zuerst richten wir fünf mehrsegmentige Pfade ein, die alle einen schwarzen Strich mit einer Breite von eins und keine Füllung verwenden. Jeder Pfad erzeugt eine Reihe von Bergsymbolen von links (ein flacherer Winkel) nach rechts (ein extremerer Winkel).

```html
<svg viewBox="0 0 39 30" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
    <path
      d="M1,5 l7   ,-3 l7   ,3
         m2,0 l3.5 ,-3 l3.5 ,3
         m2,0 l2   ,-3 l2   ,3
         m2,0 l0.75,-3 l0.75,3
         m2,0 l0.5 ,-3 l0.5 ,3" />
    <path
      d="M1,8 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,14 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,18 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,26 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
  </g>
</svg>
```

#### CSS

Bei den ersten vier Pfaden wenden wir Strichbreitenwerte paarweise an, um zu zeigen, dass nackte Zahlenwerte und Pixelwerte funktional gleichwertig sind. Für die ersten beiden Pfade sind die Werte `.25` und `.25px`. Für die zweiten beiden Pfade sind die Werte `1` und `1px`.

Für den fünften und letzten Pfad wird ein Wert von `5%` angewendet, wodurch eine Strichbreite eingestellt wird, die fünf Prozent der Länge der Diagonale des SVG-Viewports beträgt.

```css
path:nth-child(1) {
  stroke-width: 0.25;
}
path:nth-child(2) {
  stroke-width: 0.25px;
}
path:nth-child(3) {
  stroke-width: 1;
}
path:nth-child(4) {
  stroke-width: 1px;
}
path:nth-child(5) {
  stroke-width: 5%;
}
```

#### Ergebnisse

{{EmbedLiveSample("Various stroke widths", "400", "540")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxref("stroke")}}
- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{CSSxref("fill")}}
- SVG {{SVGAttr("stroke-width")}}-Attribut
