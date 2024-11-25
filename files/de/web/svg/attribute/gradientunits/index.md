---
title: gradientUnits
slug: Web/SVG/Attribute/gradientUnits
l10n:
  sourceCommit: fceea994be5c930065bb1f2b45bee9ac38de491c
---

{{SVGRef}}

Das **`gradientUnits`** Attribut definiert das Koordinatensystem, das für auf die Gradientelemente spezifizierte Attribute verwendet wird.

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
  - : Dieser Wert gibt an, dass die Attribute Werte im Koordinatensystem darstellen, das aus der aktuellen Benutzerkoordinatensystem resultiert, das zu dem Zeitpunkt vorhanden ist, wenn das Gradientelement referenziert wird (d.h. das Benutzerkoordinatensystem für das Element, das das Gradientelement über eine {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} Eigenschaft referenziert) und dann die durch das Attribut {{SVGAttr("gradientTransform")}} spezifizierte Transformation anwendet.
    Prozentsätze stellen Werte relativ zum aktuellen SVG-Viewport dar.
- `objectBoundingBox`

  - : Dieser Wert gibt an, dass das Benutzerkoordinatensystem für die Attribute unter Verwendung der Begrenzungsrahmen des Elements, auf das der Verlauf angewendet wird, etabliert wird und dann die durch das Attribut `gradientTransform` spezifizierte Transformation anwendet.

    Prozentsätze stellen Werte relativ zum Begrenzungsrahmen des Objekts dar.

    Mit diesem Wert und `gradientTransform` als Identitätsmatrix ist die Normale des linearen Verlaufs senkrecht zum Gradientenvektor im Objekt-Begrenzungsrahmenraum (d.h. dem abstrakten Koordinatensystem, in dem (0,0) oben/links des Objektbegrenzungsrahmens und (1,1) unten/rechts des Objektbegrenzungsrahmens ist). Wenn der Begrenzungsrahmen des Objekts nicht quadratisch ist, kann die Gradienten-Normale, die zunächst senkrecht zum Gradientenvektor innerhalb des Objektbegrenzungsrahmenraums ist, nicht senkrecht relativ zum Gradientenvektor im Benutzerraum sein. Wenn der Gradientenvektor parallel zu einer der Achsen des Begrenzungsrahmens ist, bleibt die Gradienten-Normale senkrecht. Diese Transformation ergibt sich aus der Anwendung der nicht uniformen Skalentransformation vom Begrenzungsrahmenraum zum Benutzerraum.

## radialGradient

Für {{SVGElement("radialGradient")}} definiert `gradientUnits` das Koordinatensystem, das für die Attribute {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}}, und {{SVGAttr("fr")}} verwendet wird.

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
  - : {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}}, und {{SVGAttr("fr")}} repräsentieren Werte im Koordinatensystem, das daraus resultiert, dass das aktuelle Benutzerkoordinatensystem verwendet wird, das zum Zeitpunkt, wenn das Gradientelement referenziert wird, vorhanden ist (d.h. das Benutzerkoordinatensystem für das Element, das das Gradientelement über eine {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} Eigenschaft referenziert) und dann die durch das Attribut {{SVGAttr("gradientTransform")}} spezifizierte Transformation anwendet.
- `objectBoundingBox`
  - : Für {{SVGElement("radialGradient")}}: Das Benutzerkoordinatensystem für die Attribute {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}}, und {{SVGAttr("fr")}} wird unter Verwendung des Begrenzungsrahmens des Elements, auf das der Verlauf angewendet wird, etabliert (siehe Objektbegrenzungsrahmeneinheiten) und dann die durch das Attribut `gradientTransform` spezifizierte Transformation anwendet.
    Mit diesem Wert und `gradientTransform` als Identitätsmatrix sind die Ringe des radialen Verlaufs in Bezug auf den Objektbegrenzungsrahmenraum kreisförmig (d.h. das abstrakte Koordinatensystem, bei dem (0,0) oben/links des Objektbegrenzungsrahmens und (1,1) unten/rechts des Objektbegrenzungsrahmens ist). Wenn der Begrenzungsrahmen des Objekts nicht quadratisch ist, werden die konzeptionell kreisförmigen Ringe innerhalb des Objektbegrenzungsrahmenraums aufgrund der Anwendung der nicht uniformen Skalentransformation vom Begrenzungsrahmenraum zum Benutzerraum als elliptisch dargestellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
