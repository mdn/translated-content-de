---
title: stroke-miterlimit
slug: Web/CSS/Reference/Properties/stroke-miterlimit
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`stroke-miterlimit`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert eine Begrenzung des Verhältnisses von der Länge der Fase zur {{CSSxref("stroke-width")}}, wenn die Form, die an den Ecken eines [SVG](/de/docs/Web/SVG)-Elements für den Pfadstrich verwendet wird, ein Fasenverbinder ist. Wird das durch diese Eigenschaft definierte Limit überschritten, wird der Verbinder von `miter` zu `bevel` geändert, wodurch die Ecke abgeschnitten erscheint.

Diese Eigenschaft gilt für jede SVG-Eckenerzeugende Form oder Textinhalts-Element (siehe {{SVGAttr("stroke-miterlimit")}} für eine vollständige Liste), kann aber als geerbte Eigenschaft auch auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch die beabsichtigte Wirkung auf die Striche der Nachkommenelemente. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-miterlimit")}} Attribut des Elements.

## Beschreibung

Wenn sich zwei Liniensegmente in einem scharfen Winkel treffen und `miter`-Verbinder für {{ CSSxref("stroke-linejoin") }} angegeben sind oder den Standardwert annehmen, ist es möglich, dass die Fase weit über die Dicke der Linie hinaus reicht, die den Pfad überstreicht. Das Verhältnis `stroke-miterlimit` wird verwendet, um eine Grenze zu definieren, über die der Verbinder von einer Fase zu einer Schräge geändert wird.

Das Verhältnis der Fasenlänge (die Entfernung zwischen der äußeren Spitze und der inneren Ecke der Fase) zur {{ CSSxref("stroke-width") }} steht in direktem Bezug zum Winkel (theta) zwischen den Segmenten im Benutzerraum durch die Formel:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Zum Beispiel konvertiert ein Fasengrenzwert von `1.414` Fasen zu Schräge bei einem Theta-Wert von weniger als 90 Grad, ein Grenzwert von `4.0` konvertiert sie bei einem Theta von weniger als etwa 29 Grad, und ein Grenzwert von `10.0` konvertiert sie bei einem Theta von weniger als etwa 11,5 Grad.

## Syntax

```css
/* number values */
stroke-miterlimit: 1;
stroke-miterlimit: 3.1416;

/* Global values */
stroke-miterlimit: inherit;
stroke-miterlimit: initial;
stroke-miterlimit: revert;
stroke-miterlimit: revert-layer;
stroke-miterlimit: unset;
```

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Jede reale positive Zahl, die gleich oder größer als `1` ist; Werte unterhalb davon sind ungültig. Der Anfangswert ist `4`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Fasenbegrenzungen

Dieses Beispiel demonstriert die Wirkung verschiedener Werte der Eigenschaft `stroke-miterlimit`.

#### HTML

Wir erstellen fünf Pfade mit mehreren Segmenten, die alle einen schwarzen Strich mit einer Breite von eins und keine Füllung haben. Jeder Pfad erzeugt eine Reihe von Bergsymbolen, die von links (einem flachen Eckwinkel) nach rechts (einem extremen Eckwinkel) verlaufen.

```html
<svg viewBox="0 0 39 36" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
    <path
      d="M1,5 l7   ,-3 l7   ,3
         m2,0 l3.5 ,-3 l3.5 ,3
         m2,0 l2   ,-3 l2   ,3
         m2,0 l0.75,-3 l0.75,3
         m2,0 l0.5 ,-3 l0.5 ,3" />
    <path
      d="M1,12 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,26 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,33 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
  </g>
</svg>
```

#### CSS

Wir wenden zunehmend größere Werte von `stroke-miterlimit` auf die Pfade an, sodass beim ersten Pfad nur der erste (ganz linke) Unterpfad gefast wird; beim zweiten Pfad die ersten zwei Unterpfade gefast werden; und so weiter, bis beim fünften Pfad alle fünf Unterpfade gefast werden.

```css
path:nth-child(1) {
  stroke-miterlimit: 1.1;
}
path:nth-child(2) {
  stroke-miterlimit: 1.4;
}
path:nth-child(3) {
  stroke-miterlimit: 1.9;
}
path:nth-child(4) {
  stroke-miterlimit: 4.2;
}
path:nth-child(5) {
  stroke-miterlimit: 6.1;
}
```

{{EmbedLiveSample("Various miter limits", "400", "650")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG {{SVGAttr("stroke-miterlimit")}} Attribut
