---
title: stroke-miterlimit
slug: Web/CSS/stroke-miterlimit
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`stroke-miterlimit`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Limit für das Verhältnis der Länge der Gehrung zur {{CSSxref("stroke-width") }}, wenn die Form, die an den Ecken eines mit Gehrung verbundenen Pfads eines [SVG](/de/docs/Web/SVG) Elements verwendet wird, ein Gehrungsverbindungsstück ist. Wenn das durch diese Eigenschaft definierte Limit überschritten wird, wird die Verbindung von `miter` zu `bevel` konvertiert, wodurch die Ecke gekürzt erscheint.

Diese Eigenschaft gilt für jede SVG-Eckenerzeugerform oder Texteinhalts-Element (siehe {{SVGAttr("stroke-miterlimit")}} für eine vollständige Liste), aber als eine vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und hat immer noch die beabsichtigte Wirkung auf die Linien der nachfolgenden Elemente. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-miterlimit")}} Attribut des Elements.

## Beschreibung

Wenn sich zwei Liniensegmente in einem scharfen Winkel treffen und `miter` Verbindungen für {{ CSSxref("stroke-linejoin") }} angegeben wurden, oder wenn sie standardmäßig auf diesen Wert eingestellt sind, ist es möglich, dass die Gehrung weit über die Dicke der das Pfad umgebenden Linie hinausreicht. Das `stroke-miterlimit` Verhältnis wird verwendet, um ein Limit zu definieren, über das hinaus die Verbindung von einer Gehrung zu einer Fase konvertiert wird.

Das Verhältnis der Gehrungslänge (die Entfernung zwischen der äußeren Spitze und der inneren Ecke der Gehrung) zur {{ CSSxref("stroke-width") }} ist direkt durch die Formel mit dem Winkel (Theta) zwischen den Segmenten im Benutzerbereich verbunden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Zum Beispiel konvertiert ein Gehrungslimit von `1.414` Gehrungen zu Fasern für einen Theta-Wert von weniger als 90 Grad, ein Limit von `4.0` konvertiert diese für ein Theta von weniger als ungefähr 29 Grad, und ein Limit von `10.0` konvertiert diese für Theta von weniger als ungefähr 11.5 Grad.

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
  - : Jede reale positive Zahl gleich oder größer als `1`; Werte darunter sind ungültig. Der Anfangswert ist `4`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Gehrungsgrenzen

Dieses Beispiel demonstriert die Auswirkung verschiedener Werte für die Eigenschaft `stroke-miterlimit`.

#### HTML

Wir richten fünf mehrsegmentige Pfade ein, die alle einen schwarzen Strich mit einer Breite von eins verwenden und keine Füllung haben. Jeder Pfad erzeugt eine Reihe von Bergsymbolen, die von links (ein flacher Winkel) nach rechts (ein extremer Winkel) verlaufen.

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

Wir wenden zunehmend größere Werte von `stroke-miterlimit` auf die Pfade an, sodass beim ersten Pfad nur der erste (linkeste) Unterpfad eine Gehrung hat; beim zweiten Pfad sind die ersten beiden Unterpfade gegehrt; und so weiter, bis beim fünften Pfad alle fünf Unterpfade gegehrt sind.

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
