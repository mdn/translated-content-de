---
title: gradientUnits
slug: Web/SVG/Attribute/gradientUnits
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{SVGRef}}

Das **`gradientUnits`** Attribut definiert das Koordinatensystem, das für Attribute verwendet wird, die an den Gradienten-Elementen angegeben sind.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  - : Dieser Wert gibt an, dass die Attribute Werte im Koordinatensystem darstellen, das durch Übernahme des aktuellen Benutzerkoordinatensystems zum Zeitpunkt der Referenzierung des Gradienten-Elements (d. h. des Benutzerkoordinatensystems für das Element, das das Gradienten-Element über eine {{SVGAttr("fill")}}- oder {{SVGAttr("stroke")}}-Eigenschaft referenziert) entsteht und dann die durch das Attribut {{SVGAttr("gradientTransform")}} spezifizierte Transformation angewendet wird. Prozentangaben beziehen sich auf das aktuelle SVG-Viewport.
- `objectBoundingBox`

  - : Dieser Wert gibt an, dass das Benutzerkoordinatensystem für die Attribute unter Verwendung der Begrenzungsbox des Elements erstellt wird, auf das der Gradient angewendet wird, und dann die durch das Attribut `gradientTransform` spezifizierte Transformation angewendet wird.

    Prozentangaben beziehen sich auf die Begrenzungsbox des Objekts.

    Mit diesem Wert und `gradientTransform` als der Identitätsmatrix ist das Normale des linearen Gradienten senkrecht zum Gradientenvektor im Objektbegrenzungsboxraum (d. h. dem abstrakten Koordinatensystem, in dem (0,0) an der oberen/ linken Ecke der Objektbegrenzungsbox und (1,1) an der unteren/rechten Ecke der Objektbegrenzungsbox ist). Wenn die Objektbegrenzungsbox nicht quadratisch ist, kann das Normale des Gradienten, das innerhalb des Objektbegrenzungsboxraums anfänglich senkrecht zum Gradientenvektor ist, relativ zum Gradientenvektor im Benutzerraum nicht senkrecht erscheinen. Wenn der Gradientenvektor parallel zu einer der Achsen der Begrenzungsbox verläuft, bleibt das Normale des Gradienten senkrecht. Diese Transformation erfolgt durch die Anwendung der nicht-uniformen Skalierungstransformation vom Begrenzungsboxraum in den Benutzerraum.

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
  - : {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}}, und {{SVGAttr("fr")}} repräsentieren Werte im Koordinatensystem, das durch Übernahme des aktuellen Benutzerkoordinatensystems zum Zeitpunkt der Referenzierung des Gradienten-Elements (d. h. des Benutzerkoordinatensystems für das Element, das das Gradienten-Element über eine {{SVGAttr("fill")}}- oder {{SVGAttr("stroke")}}-Eigenschaft referenziert) entsteht und dann die durch das Attribut {{SVGAttr("gradientTransform")}} spezifizierte Transformation angewendet wird.
- `objectBoundingBox`
  - : für {{SVGElement("radialGradient")}}: das Benutzerkoordinatensystem für die Attribute {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} wird durch die Begrenzungsbox des Elements erstellt, auf das der Gradient angewendet wird (siehe Objektbegrenzungsbox-Einheiten) und dann die durch das Attribut `gradientTransform` spezifizierte Transformation angewendet.
    Mit diesem Wert und `gradientTransform` als der Identitätsmatrix sind die Kreise des radialen Gradienten in Bezug auf den Objektbegrenzungsboxraum kreisförmig (d. h. das abstrakte Koordinatensystem, in dem (0,0) an der oberen/ linken Ecke der Objektbegrenzungsbox und (1,1) an der unteren/rechten Ecke der Objektbegrenzungsbox ist). Wenn die Objektbegrenzungsbox nicht quadratisch ist, werden die konzeptionell kreisförmigen Kreise im Objektbegrenzungsboxraum als Ellipsen wiedergegeben, aufgrund der Anwendung der nicht-uniformen Skalierungstransformation vom Begrenzungsboxraum in den Benutzerraum.

## Spezifikationen

{{Specifications}}
