---
title: "`stroke-width` CSS property"
short-title: stroke-width
slug: Web/CSS/Reference/Properties/stroke-width
l10n:
  sourceCommit: cdbd60eab97b1958837806b059a920f6da2f4e78
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`stroke-width`** legt die Breite der Kontur einer [SVG](/de/docs/Web/SVG)-Form fest. Wenn sie gesetzt ist, hat sie Vorrang vor dem {{SVGAttr("stroke-width")}}-Attribut des Elements.

Diese Eigenschaft gilt für alle SVG-Formelemente und Textinhaltselemente (eine vollständige Liste finden Sie unter {{SVGAttr("stroke-width")}}). Da sie vererbt wird, kann sie auch auf Elemente wie {{SVGElement("g")}} angewendet werden und sich auf die Konturen der untergeordneten Elemente auswirken. Ergibt der Wert null, wird keine Kontur gezeichnet.

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
  - : Pixeleinheiten werden wie SVG-Einheiten behandelt (siehe [`<number>`](#number)). Schriftbasierte Längen wie `em` werden anhand des SVG-Werts für die Textgröße des Elements berechnet. Die Wirkung anderer Längeneinheiten kann vom Browser abhängen.

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentwerte beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports. Sie wird wie folgt berechnet: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

- {{cssxref("&lt;number&gt;")}} {{non-standard_inline}}
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum bestimmt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Konturbreiten

Dieses Beispiel zeigt verschiedene Wertsyntaxen für die Eigenschaft `stroke-width`.

#### HTML

Zunächst erstellen wir fünf Pfade mit jeweils mehreren Segmenten. Alle verwenden eine schwarze Kontur mit der Breite eins und keine Füllung. Jeder Pfad bildet eine Reihe von Bergsymbolen, deren Eckwinkel von links (flach) nach rechts (sehr spitz) variieren.

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

Auf die ersten vier Pfade wenden wir paarweise Konturbreiten an, um zu zeigen, dass reine Zahlenwerte und Pixelwerte funktional gleichwertig sind. Für die ersten beiden Pfade verwenden wir `.25` und `.25px`, für die nächsten beiden `1` und `1px`.

Auf den fünften und letzten Pfad wenden wir den Wert `5%` an. Damit beträgt die Konturbreite fünf Prozent der Diagonale des SVG-Viewports.

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
- SVG-Attribut {{SVGAttr("stroke-width")}}
