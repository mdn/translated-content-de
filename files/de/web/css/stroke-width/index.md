---
title: stroke-width
slug: Web/CSS/stroke-width
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`stroke-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breite eines auf ein [SVG](/de/docs/Web/SVG) Element angewendeten Strichs. Falls vorhanden, überschreibt es das {{SVGAttr("stroke-width")}} Attribut des Elements.

Diese Eigenschaft kann auf jedes SVG-Form- oder Textinhalts-Element angewendet werden (siehe {{SVGAttr("stroke-width")}} für eine vollständige Liste). Als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch den beabsichtigten Effekt auf die Striche der Nachkommen. Wenn der Wert auf null ausgewertet wird, wird der Strich nicht gezeichnet.

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

  - : Pixeleinheiten werden genauso behandelt wie SVG-Einheiten (siehe `<number>` oben), und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert der Textgröße des Elements berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen.

- {{cssxref("&lt;percentage&gt;")}}

  - : Prozentsätze beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird.

- {{cssxref("&lt;number&gt;")}} {{non-standard_inline}}

  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitraum definiert ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Strichbreiten

Dieses Beispiel zeigt verschiedene Syntaxformen von Werten für die `stroke-width` Eigenschaft.

#### HTML

Zuerst richten wir fünf Pfade mit mehreren Segmenten ein, die alle einen schwarzen Strich mit einer Breite von eins und keine Füllung verwenden. Jeder Pfad erstellt eine Reihe von Bergsymbolen, die von links (ein flacher Eckwinkel) nach rechts (ein extremer Eckwinkel) verlaufen.

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

Auf die ersten vier Pfade wenden wir Strichbreitenwerte als Paare an, um zu zeigen, wie nackte Zahlenwerte und Pixelwerte funktional äquivalent sind. Für die ersten beiden Pfade sind die Werte `.25` und `.25px`. Für die zweiten beiden Pfade sind die Werte `1` und `1px`.

Für den fünften und letzten Pfad wird ein Wert von `5%` angewendet, wodurch eine Strichbreite festgelegt wird, die fünf Prozent der Länge der diagonalen Messung des SVG-Viewports beträgt.

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
- SVG {{SVGAttr("stroke-width")}} Attribut
