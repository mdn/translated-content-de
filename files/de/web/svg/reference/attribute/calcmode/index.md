---
title: calcMode
slug: Web/SVG/Reference/Attribute/calcMode
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`calcMode`** Attribut legt den {{Glossary("interpolation", "Interpolationsmodus")}} für die Animation fest.

Der Standardmodus ist `linear`. Falls das Attribut jedoch keine lineare Interpolation unterstützt (z.B. für Zeichenfolgen), wird das `calcMode` Attribut ignoriert und es wird diskrete Interpolation verwendet.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>discrete</code> | <code>linear</code> | <code>paced</code> |
        <code>spline</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>linear</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `discrete`
  - : Dies gibt an, dass die Animationsfunktion von einem Wert zum nächsten springt, ohne Interpolation.
- `linear`
  - : Einfache lineare Interpolation zwischen Werten wird verwendet, um die Animationsfunktion zu berechnen. Außer für {{SVGElement("animateMotion")}} ist dies der Standardwert.
- `paced`
  - : Definiert die Interpolation so, dass ein gleichmäßiges Tempo der Veränderung über die Animation erreicht wird. Dies wird nur für Werte unterstützt, die einen linearen numerischen Bereich definieren, und für die eine Art von "Entfernung" zwischen Punkten berechnet werden kann (z.B. Position, Breite, Höhe, etc.). Wenn paced angegeben ist, werden alle {{SVGAttr("keyTimes")}} oder {{SVGAttr("keySplines")}} ignoriert. Für {{SVGElement("animateMotion")}} ist dies der Standardwert.
- `spline`
  - : Interpoliert von einem Wert in der {{SVGAttr("values")}} Liste zum nächsten gemäß einer durch eine kubische Bézier-Kurve definierten Zeitfunktion. Die Punkte der Kurve werden im {{SVGAttr("keyTimes")}} Attribut definiert, und die Kontrollpunkte für jedes Intervall werden im {{SVGAttr("keySplines")}} Attribut definiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
