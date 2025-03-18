---
title: gradientUnits
slug: Web/SVG/Reference/Attribute/gradientUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`gradientUnits`**-Attribut definiert das Koordinatensystem, das für auf den Gradientenelementen spezifizierte Attribute verwendet wird.

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
  - : Dieser Wert gibt an, dass die Attribute Werte im Koordinatensystem darstellen, das resultiert, wenn das aktuelle Benutzerkoordinatensystem zur Zeit, zu der das Gradientelement referenziert wird (d.h. das Benutzerkoordinatensystem für das Element, das das Gradientelement über eine {{SVGAttr("fill")}}- oder {{SVGAttr("stroke")}}-Eigenschaft referenziert), und dann die durch das Attribut {{SVGAttr("gradientTransform")}} angegebene Transformation angewendet wird.
    Prozentsätze repräsentieren Werte relativ zum aktuellen SVG-Anzeigebereich.
- `objectBoundingBox`

  - : Dieser Wert gibt an, dass das Benutzerkoordinatensystem für die Attribute unter Verwendung des Begrenzungsrahmens des Elements, auf das der Gradient angewendet wird, festgelegt wird und dann die durch das Attribut `gradientTransform` angegebene Transformation angewendet wird.

    Prozentsätze repräsentieren Werte relativ zum Begrenzungsrahmen des Objekts.

    Mit diesem Wert und `gradientTransform` als Identitätsmatrix ist die Normale des linearen Gradienten senkrecht zum Gradientvektor im Objektbegrenzungsrahmenraum (d.h. das abstrakte Koordinatensystem, in dem (0,0) sich oben/links im Objektbegrenzungsrahmen und (1,1) unten/rechts im Objektbegrenzungsrahmen befindet). Wenn der Begrenzungsrahmen des Objekts nicht quadratisch ist, kann die Normale, die ursprünglich im Objektbegrenzungsrahmenraum senkrecht zum Gradientvektor ist, relativ zum Gradientvektor im Benutzerraum nicht senkrecht erscheinen. Wenn der Gradientvektor parallel zu einer der Achsen des Begrenzungsrahmens ist, bleibt die Gradientennormale senkrecht. Diese Transformation entsteht durch die Anwendung der nicht-uniformen Skalentransformation vom Begrenzungsrahmenraum in den Benutzerraum.

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
  - : {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} repräsentieren Werte im Koordinatensystem, das resultiert, wenn das aktuelle Benutzerkoordinatensystem zur Zeit, zu der das Gradientelement referenziert wird (d.h. das Benutzerkoordinatensystem für das Element, das das Gradientelement über eine {{SVGAttr("fill")}}- oder {{SVGAttr("stroke")}}-Eigenschaft referenziert) und dann die durch das Attribut {{SVGAttr("gradientTransform")}} angegebene Transformation angewendet wird.
- `objectBoundingBox`
  - : für {{SVGElement("radialGradient")}}: das Benutzerkoordinatensystem für die Attribute {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} wird unter Verwendung des Begrenzungsrahmens des Elements, auf das der Gradient angewendet wird (siehe Einheiten des Objektbegrenzungsrahmens), festgelegt und dann die durch das Attribut `gradientTransform` angegebene Transformation angewendet.
    Mit diesem Wert und `gradientTransform` als Identitätsmatrix sind die Ringe des radialen Gradienten kreisförmig in Bezug auf den Objektbegrenzungsrahmenraum (d.h. das abstrakte Koordinatensystem, in dem (0,0) sich oben/links im Objektbegrenzungsrahmen und (1,1) unten/rechts im Objektbegrenzungsrahmen befindet). Wenn der Begrenzungsrahmen des Objekts nicht quadratisch ist, werden die konzeptionell kreisförmigen Ringe im Objektbegrenzungsrahmenraum aufgrund der Anwendung der nicht-uniformen Skalentransformation vom Begrenzungsrahmenraum in den Benutzerraum als elliptisch dargestellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
