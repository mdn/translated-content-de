---
title: stroke-miterlimit
slug: Web/CSS/stroke-miterlimit
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`stroke-miterlimit`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert ein Limit für das Verhältnis der Miter-Länge zur {{CSSxref("stroke-width") }}, wenn die Form, die an den Ecken eines [SVG](/de/docs/Web/SVG)-Elementpfades verwendet werden soll, ein Gehrungsstoß ist. Wenn das durch diese Eigenschaft definierte Limit überschritten wird, wird der Stoß von `miter` zu `bevel` konvertiert, wodurch die Ecke abgeschnitten erscheint.

Diese Eigenschaft gilt für jede SVG-Eckengenerierungsform oder Textinhaltselement (siehe {{SVGAttr("stroke-miterlimit")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Striche der Nachkommenelemente haben. Wenn vorhanden, überschreibt es das Attribut {{SVGAttr("stroke-miterlimit")}} des Elements.

## Beschreibung

Wenn sich zwei Liniensegmente in einem scharfen Winkel treffen und `miter`-Verbindungen für {{CSSxref("stroke-linejoin") }} spezifiziert wurden oder wenn sie standardmäßig diesen Wert haben, kann es vorkommen, dass die Gehrung weit über die Dicke der die Linie streichenden Linie hinausragt. Das `stroke-miterlimit`-Verhältnis wird verwendet, um ein Limit zu definieren, über das hinaus der Stoß von einer Gehrung zu einem abgeschrägten Schnitt konvertiert wird.

Das Verhältnis der Gehrungslänge (der Abstand zwischen der äußeren Spitze und der inneren Ecke der Gehrung) zur {{CSSxref("stroke-width") }} ist direkt mit dem Winkel (Theta) zwischen den Segmenten im Benutzerspace durch die Formel verbunden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Zum Beispiel konvertiert ein Gehrungslimit von `1.414` Gehrungen zu Abschrägungen für einen Theta-Wert von weniger als 90 Grad, ein Limit von `4.0` konvertiert sie für einen Theta-Wert von weniger als ungefähr 29 Grad, und ein Limit von `10.0` konvertiert sie für einen Theta-Wert von weniger als ungefähr 11,5 Grad.

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
  - : Jede reale positive Zahl, die gleich oder größer als `1` ist; Werte darunter sind ungültig. Der Anfangswert ist `4`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Gehrungslimits

Dieses Beispiel demonstriert die Wirkung verschiedener Werte für die `stroke-miterlimit`-Eigenschaft.

#### HTML

Wir richten fünf Mehrsegmentpfade ein, die alle einen schwarzen Strich mit einer Breite von eins und keine Füllung verwenden. Jeder Pfad erzeugt eine Reihe von Bergsymbolen, die von links (ein flacher Eckwinkel) nach rechts (ein extremer Eckwinkel) verlaufen.

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

Wir wenden zunehmend größere Werte für `stroke-miterlimit` auf die Pfade an, sodass für den ersten Pfad nur der erste (linkeste) Unterpfad Gehrungen aufweist; für den zweiten Pfad haben die ersten beiden Unterpfade Gehrungen; und so weiter, bis für den fünften Pfad alle fünf Unterpfade Gehrungen aufweisen.

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
- SVG-Attribut {{SVGAttr("stroke-miterlimit")}}
