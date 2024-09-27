---
title: gradientUnits
slug: Web/SVG/Attribute/gradientUnits
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{SVGRef}}

Das **`gradientUnits`** Attribut definiert das Koordinatensystem, das für Attribute auf den Gradienten-Elementen verwendet wird.

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
  - : Dieser Wert zeigt an, dass die Attribute Werte im Koordinatensystem darstellen, das aus der Anwendung des aktuellen Benutzerkoordinatensystems resultiert, das in Kraft ist, wenn das Gradienten-Element referenziert wird (d.h., das Benutzerkoordinatensystem für das Element, das das Gradienten-Element über eine {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} Eigenschaft referenziert) und dann die Transformation, die durch das Attribut {{SVGAttr("gradientTransform")}} festgelegt wird, verwendet.
    Prozentsätze stellen Werte relativ zur aktuellen SVG-Ansichtsport dar.
- `objectBoundingBox`

  - : Dieser Wert zeigt an, dass das Benutzerkoordinatensystem für die Attribute durch die Verwendung des Begrenzungsrahmens des Elements, auf das der Gradient angewendet wird, festgelegt wird und dann die Transformation verwendet wird, die durch das `gradientTransform`-Attribut festgelegt wird.

    Prozentsätze stellen Werte relativ zum Begrenzungsrahmen für das Objekt dar.

    Mit diesem Wert und `gradientTransform` als Einheitsmatrix ist die Normale des linearen Gradienten senkrecht zum Gradientenvektor im Raum des Objektbegrenzungsrahmens (d.h., das abstrakte Koordinatensystem, in dem (0,0) oben/links im Objektbegrenzungsrahmen liegt und (1,1) unten/rechts im Objektbegrenzungsrahmen liegt). Wenn der Begrenzungsrahmen des Objekts nicht quadratisch ist, könnte die Gradienten-Normale, die ursprünglich senkrecht zum Gradientenvektor im Raum des Objektbegrenzungsrahmens ist, relativ zum Gradientenvektor im Benutzerraum nicht senkrecht darstellen. Wenn der Gradientenvektor parallel zu einer der Achsen des Begrenzungsrahmens ist, bleibt die Gradienten-Normale senkrecht. Diese Transformation ist auf die Anwendung der nicht-uniformen Skalierungstransformation vom Raum des Begrenzungsrahmens zum Benutzerraum zurückzuführen.

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
  - : {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} stellen Werte im Koordinatensystem dar, das aus der Anwendung des aktuellen Benutzerkoordinatensystems resultiert, das in Kraft ist, wenn das Gradienten-Element referenziert wird (d.h., das Benutzerkoordinatensystem für das Element, das das Gradienten-Element über eine {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} Eigenschaft referenziert) und dann die Transformation, die durch das Attribut {{SVGAttr("gradientTransform")}} festgelegt wird, verwendet.
- `objectBoundingBox`
  - : für {{SVGElement("radialGradient")}}: Das Benutzerkoordinatensystem für die Attribute {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} wird durch die Verwendung des Begrenzungsrahmens des Elements, auf das der Gradient angewendet wird, festgelegt (siehe Einheiten des Objektbegrenzungsrahmens) und dann die Transformation, die durch das Attribut `gradientTransform` festgelegt wird, verwendet.
    Mit diesem Wert und `gradientTransform` als Einheitsmatrix sind die Ringe des radialen Gradienten im Raum des Objektbegrenzungsrahmens kreisförmig (d.h., das abstrakte Koordinatensystem, in dem (0,0) oben/links im Objektbegrenzungsrahmen liegt und (1,1) unten/rechts im Objektbegrenzungsrahmen liegt). Wenn der Begrenzungsrahmen des Objekts nicht quadratisch ist, werden die konzeptionell kreisförmigen Ringe im Raum des Objektbegrenzungsrahmens aufgrund der Anwendung der nicht-uniformen Skalierungstransformation vom Raum des Begrenzungsrahmens zum Benutzerraum als elliptisch dargestellt.

## Spezifikationen

{{Specifications}}
