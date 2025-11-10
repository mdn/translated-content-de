---
title: gradientUnits
slug: Web/SVG/Reference/Attribute/gradientUnits
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`gradientUnits`**-Attribut definiert das Koordinatensystem, das für Attribute verwendet wird, die an den Gradienten-Elementen angegeben sind.

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
  - : Dieser Wert zeigt an, dass die Attribute Werte im Koordinatensystem repräsentieren, das sich ergibt, wenn das aktuelle Benutzerkoordinatensystem zum Zeitpunkt des Referenzierens des Gradienten-Elements verwendet wird (d.h. das Benutzerkoordinatensystem für das Element, das das Gradienten-Element über eine {{SVGAttr("fill")}}- oder {{SVGAttr("stroke")}}-Eigenschaft referenziert) und dann die durch das Attribut {{SVGAttr("gradientTransform")}} angegebene Transformation anwenden.
    Prozentsätze repräsentieren Werte relativ zum aktuellen SVG-Viewport.
- `objectBoundingBox`

  - : Dieser Wert zeigt an, dass das Benutzerkoordinatensystem für die Attribute unter Verwendung der Umrandung des Elements festgelegt wird, auf das der Verlauf angewendet wird, und dann die durch das Attribut `gradientTransform` angegebene Transformation anwenden.

    Prozentsätze repräsentieren Werte relativ zur Umrandung des Objekts.

    Mit diesem Wert und `gradientTransform` als Identitätsmatrix ist die Normale des linearen Verlaufs senkrecht zum Gradientenvektor im Raum der Objektumrandung (d.h. das abstrakte Koordinatensystem, wobei (0,0) oben/links an der Objektumrandung und (1,1) unten/rechts an der Objektumrandung ist). Wenn die Objektumrandung nicht quadratisch ist, kann die Normale des Verlaufs, die ursprünglich senkrecht zum Gradientenvektor im Raum der Objektumrandung ist, relativ zum Gradientenvektor im Benutzerraum nicht senkrecht erscheinen. Wenn der Gradientenvektor parallel zu einer der Achsen der Umrandung ist, bleibt die Verlaufnormale senkrecht. Diese Transformation resultiert aus der Anwendung der nicht einheitlichen Skalierungstransformation vom Raum der Objektumrandung zum Benutzerraum.

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
  - : {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} repräsentieren Werte im Koordinatensystem, das sich ergibt, wenn das aktuelle Benutzerkoordinatensystem zum Zeitpunkt der Referenzierung des Gradienten-Elements verwendet wird (d.h. das Benutzerkoordinatensystem für das Element, das das Gradienten-Element über eine {{SVGAttr("fill")}}- oder {{SVGAttr("stroke")}}-Eigenschaft referenziert) und dann die durch das Attribut {{SVGAttr("gradientTransform")}} angegebene Transformation anwenden.
- `objectBoundingBox`
  - : für {{SVGElement("radialGradient")}}: das Benutzerkoordinatensystem für die Attribute {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}} und {{SVGAttr("fr")}} wird unter Verwendung der Umrandung des Elements, auf das der Verlauf angewendet wird, festgelegt (siehe Objektumrandungseinheiten) und dann die durch das Attribut `gradientTransform` angegebene Transformation anwenden.
    Mit diesem Wert und `gradientTransform` als Identitätsmatrix sind die Ringe des radialen Verlaufs im Raum der Objektumrandung kreisförmig (d.h. das abstrakte Koordinatensystem, wobei (0,0) oben/links an der Objektumrandung und (1,1) unten/rechts an der Objektumrandung ist). Wenn die Objektumrandung nicht quadratisch ist, erscheinen die im Raum der Objektumrandung konzeptionell kreisförmigen Ringe aufgrund der Anwendung der nicht einheitlichen Skalierungstransformation vom Raum der Objektumrandung zum Benutzerraum als elliptisch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
