---
title: gradientUnits
slug: Web/SVG/Attribute/gradientUnits
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{SVGRef}}

Das **`gradientUnits`** Attribut definiert das Koordinatensystem, das für Attribute auf den Gradientelementen verwendet wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

## linearGradient

Für {{SVGElement("linearGradient")}} definiert `gradientUnits` das Koordinatensystem, das für die Attribute {{SVGAttr("x1")}}, {{SVGAttr("y1")}}, {{SVGAttr("x2")}} und {{SVGAttr("y2")}} verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : Dieser Wert bedeutet, dass die Attribute Werte im Koordinatensystem darstellen, das sich ergibt, indem man das aktuelle Benutzerkoordinatensystem zur Zeit der Verweisnahme auf das Gradientelement (d. h. das Benutzerkoordinatensystem des Elements, das auf das Gradientelement über eine {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} Eigenschaft verweist) verwendet und dann die durch das Attribut {{SVGAttr("gradientTransform")}} angegebene Transformierung anwendet. Prozentsätze repräsentieren Werte relativ zum aktuellen SVG-Viewport.
- `objectBoundingBox`
  - : Dieser Wert bedeutet, dass das Benutzerkoordinatensystem für die Attribute unter Verwendung des Begrenzungsrahmens des Elements, auf das der Gradient angewendet wird, festgelegt wird und dann die durch das Attribut `gradientTransform` angegebene Transformierung angewendet wird.

    Prozentsätze repräsentieren Werte relativ zum Begrenzungsrahmen des Objekts.

    Mit diesem Wert und `gradientTransform` als Einheitsmatrix ist die Normale des linearen Gradienten senkrecht zum Gradientenvektor im Objektbegrenzungsrahmenraum (d. h. das abstrakte Koordinatensystem, in dem (0,0) sich oben/links des Objektbegrenzungsrahmens befindet und (1,1) unten/rechts). Wenn der Begrenzungsrahmen des Objekts nicht quadratisch ist, kann die Normale des Gradienten, die zunächst senkrecht zum Gradientenvektor im Objektbegrenzungsrahmenraum verläuft, relativ zum Gradientenvektor im Benutzerraum nicht senkrecht dargestellt werden. Wenn der Gradientenvektor parallel zu einer der Achsen des Begrenzungsrahmens ist, bleibt die Gradienten-Normale senkrecht. Diese Transformation erfolgt aufgrund der Anwendung der nicht gleichmäßigen Skalierungstransformation vom Begrenzungsrahmenraum zum Benutzerraum.

## radialGradient

Für {{SVGElement("radialGradient")}} definiert `gradientUnits` das Koordinatensystem, das für die Attribute {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} repräsentieren Werte im Koordinatensystem, das sich ergibt, indem man das aktuelle Benutzerkoordinatensystem zur Zeit der Verweisnahme auf das Gradientelement (d. h. das Benutzerkoordinatensystem des Elements, das auf das Gradientelement über eine {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} Eigenschaft verweist) verwendet und dann die durch das Attribut {{SVGAttr("gradientTransform")}} angegebene Transformierung anwendet.
- `objectBoundingBox`
  - : für {{SVGElement("radialGradient")}}: das Benutzerkoordinatensystem für die Attribute {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} wird unter Verwendung des Begrenzungsrahmens des Elements, auf das der Gradient angewendet wird (siehe Objekt-Begrenzungsrahmen-Einheiten), festgelegt und dann die durch das Attribut `gradientTransform` angegebene Transformierung angewendet.
    Mit diesem Wert und `gradientTransform` als Einheitsmatrix sind die Ringe des radialen Gradienten kreisförmig im Bezug auf den Objektbegrenzungsrahmenraum (d. h. das abstrakte Koordinatensystem, in dem (0,0) sich oben/links des Objektbegrenzungsrahmens befindet und (1,1) unten/rechts). Wenn der Begrenzungsrahmen des Objekts nicht quadratisch ist, werden die konzeptionell kreisförmigen Ringe im Objektbegrenzungsrahmenraum durch die Anwendung der nicht gleichmäßigen Skalierungstransformation vom Begrenzungsrahmenraum zum Benutzerraum elliptisch dargestellt.

## Spezifikationen

{{Specifications}}
