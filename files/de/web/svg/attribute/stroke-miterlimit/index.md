---
title: stroke-miterlimit
slug: Web/SVG/Attribute/stroke-miterlimit
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`stroke-miterlimit`**-Attribut ist ein Präsentationsattribut, das eine Begrenzung für das Verhältnis der Miterlänge zur {{ SVGAttr("stroke-width") }} festlegt, die verwendet wird, um eine Gehrungsfuge (`miter join`) zu zeichnen. Wenn die Begrenzung überschritten wird, wird die Gehrungsfuge in eine abgeschrägte Verbindung (`bevel`) umgewandelt.

> [!NOTE]
> Als Präsentationsattribut hat `stroke-miterlimit` auch ein entsprechendes CSS-Property: {{cssxref("stroke-miterlimit")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 38 30" xmlns="http://www.w3.org/2000/svg">
  <!-- Impact of the default miter limit -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    id="p1"
    d="M1,9 l7   ,-3 l7   ,3
       m2,0 l3.5 ,-3 l3.5 ,3
       m2,0 l2   ,-3 l2   ,3
       m2,0 l0.75,-3 l0.75,3
       m2,0 l0.5 ,-3 l0.5 ,3" />

  <!-- Impact of the smallest miter limit (1) -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    stroke-miterlimit="1"
    id="p2"
    d="M1,19 l7   ,-3 l7   ,3
       m2, 0 l3.5 ,-3 l3.5 ,3
       m2, 0 l2   ,-3 l2   ,3
       m2, 0 l0.75,-3 l0.75,3
       m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- Impact of a large miter limit (8) -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    stroke-miterlimit="8"
    id="p3"
    d="M1,29 l7   ,-3 l7   ,3
       m2, 0 l3.5 ,-3 l3.5 ,3
       m2, 0 l2   ,-3 l2   ,3
       m2, 0 l0.75,-3 l0.75,3
       m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- the following pink lines highlight the position of the path for each stroke -->
  <path
    stroke="pink"
    fill="none"
    stroke-width="0.05"
    d="M1, 9 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,29 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 400)}}

Wenn sich zwei Liniensegmente in einem scharfen Winkel treffen und für {{ SVGAttr("stroke-linejoin") }} `miter`-Verbindungen festgelegt wurden, ist es möglich, dass die Gehrung weit über die Breite der Linie hinausgeht, die den Pfad zeichnet. Das `stroke-miterlimit`-Verhältnis wird verwendet, um festzulegen, wann die Grenze überschritten wird; in diesem Fall wird die Verbindung von einer Gehrungsfuge zu einer abgeschrägten Verbindung umgewandelt.

Das Verhältnis der Miterlänge (der Abstand zwischen der äußeren Spitze und der inneren Ecke der Gehrung) zu {{ SVGAttr("stroke-width") }} steht in direktem Zusammenhang mit dem Winkel (Theta) zwischen den Segmenten im Benutzerraum durch die nachstehende Formel:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Zum Beispiel:

- Ein Miter-Limit von 1,414 wandelt Gehrungen in Abschrägungen um, wenn der Winkel Theta kleiner als 90 Grad ist.
- Ein Limit von 4,0 wandelt sie für Theta unter ungefähr 29 Grad um.
- Ein Limit von 10,0 wandelt sie für Theta unter ungefähr 11,5 Grad um.

## Gebrauchskontext

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>4</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Der Wert von `stroke-miterlimit` muss größer oder gleich 1 sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("stroke-miterlimit")}}-Property
