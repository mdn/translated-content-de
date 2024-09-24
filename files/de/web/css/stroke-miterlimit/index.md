---
title: stroke-miterlimit
slug: Web/CSS/stroke-miterlimit
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Die **`stroke-miterlimit`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Limit für das Verhältnis der Mieterlänge zur {{CSSxref("stroke-width")}}, wenn die Form, die an den Ecken eines [SVG](/de/docs/Web/SVG)-Elementpfades verwendet wird, eine Gehrungsecke ist. Wenn das durch diese Eigenschaft definierte Limit überschritten wird, wird die Verbindung von `miter` zu `bevel` konvertiert, sodass die Ecke abgeschnitten erscheint.

Diese Eigenschaft gilt für jede SVG-eckenerzeugende Form oder Textelement (siehe {{SVGAttr("stroke-miterlimit")}} für eine vollständige Liste), kann jedoch als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Striche von Kindelementen haben. Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-miterlimit")}}-Attribut des Elements.

## Beschreibung

Wenn sich zwei Liniensegmente in einem scharfen Winkel treffen und `miter`-Verbindungen für {{CSSxref("stroke-linejoin")}} angegeben wurden oder sie standardmäßig diesen Wert haben, kann es sein, dass sich die Gehrung weit über die Dicke der Linie hinaus erstreckt, die den Pfad streicht. Das `stroke-miterlimit`-Verhältnis wird verwendet, um ein Limit zu definieren, über das hinaus die Verbindung von einer Gehrung zu einem Abgeschrägte umgewandelt wird.

Das Verhältnis der Gehrungslänge (der Abstand zwischen der äußeren Spitze und der inneren Ecke der Gehrung) zur {{CSSxref("stroke-width")}} steht in direktem Zusammenhang mit dem Winkel (Theta) zwischen den Segmenten im Benutzeraum durch die Formel:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Zum Beispiel konvertiert ein Gehrungslimit von `1.414` Gehrungen in Abgeschrägte für einen Theta-Wert von weniger als 90 Grad, ein Limit von `4.0` konvertiert sie für einen Theta von weniger als ungefähr 29 Grad und ein Limit von `10.0` konvertiert sie für einen Theta von weniger als ungefähr 11.5 Grad.

## Syntax

```css
/* nummerische Werte */
stroke-miterlimit: 1;
stroke-miterlimit: 3.1416;

/* Globale Werte */
stroke-miterlimit: inherit;
stroke-miterlimit: initial;
stroke-miterlimit: revert;
stroke-miterlimit: revert-layer;
stroke-miterlimit: unset;
```

### Werte

- {{cssxref("&lt;number&gt;")}}

  - : Jede reelle positive Zahl, die gleich oder größer als `1` ist; niedrigere Werte sind ungültig. Der Anfangswert ist `4`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Gehrungslimits

Dieses Beispiel demonstriert die Wirkung verschiedener Werte für die Eigenschaft `stroke-miterlimit`.

#### HTML

Wir richten fünf mehrsegmentige Pfade ein, die alle einen schwarzen Strich mit einer Breite von eins und keine Füllung verwenden. Jeder Pfad erstellt eine Reihe von Bergsymbolen, die von links (ein flacher Eckwinkel) nach rechts (ein extremer Eckwinkel) gehen.

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

Wir wenden zunehmend größere Werte von `stroke-miterlimit` auf die Pfade an, sodass für den ersten Pfad nur der erste (linkeste) Unterpfad gehrtet ist; für den zweiten Pfad sind die ersten beiden Unterpfade gehrtet; und so weiter, bis für den fünften Pfad alle fünf Unterpfade gehrtet sind.

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
