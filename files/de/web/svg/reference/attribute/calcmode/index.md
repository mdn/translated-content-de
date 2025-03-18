---
title: calcMode
slug: Web/SVG/Reference/Attribute/calcMode
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`calcMode`** Attribut gibt den {{Glossary("interpolation", "Interpolationsmodus")}} für die Animation an.

Der Standardmodus ist `linear`, jedoch wird das `calcMode` Attribut ignoriert und diskrete Interpolation verwendet, wenn das Attribut keine lineare Interpolation unterstützt (z.B. bei Zeichenketten).

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Anwendungshinweise

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
  - : Dies gibt an, dass die Animationsfunktion ohne Interpolation von einem Wert zum nächsten springt.
- `linear`
  - : Einfache lineare Interpolation zwischen Werten wird verwendet, um die Animationsfunktion zu berechnen. Mit Ausnahme von {{SVGElement("animateMotion")}} ist dies der Standardwert.
- `paced`
  - : Definiert Interpolation, um eine gleichmäßige Veränderungsgeschwindigkeit über die Animation hinweg zu erzeugen. Dies wird nur für Werte unterstützt, die einen linearen numerischen Bereich definieren und für die eine Art "Entfernung" zwischen Punkten berechnet werden kann (z.B. Position, Breite, Höhe, usw.). Wenn `paced` angegeben wird, werden alle {{SVGAttr("keyTimes")}} oder {{SVGAttr("keySplines")}} ignoriert. Für {{SVGElement("animateMotion")}} ist dies der Standardwert.
- `spline`
  - : Interpoliert von einem Wert in der {{SVGAttr("values")}} Liste zum nächsten gemäß einer Zeitfunktion, die durch eine kubische Bézier-Spline definiert ist. Die Punkte der Spline sind im {{SVGAttr("keyTimes")}} Attribut definiert, und die Kontrollpunkte für jedes Intervall sind im {{SVGAttr("keySplines")}} Attribut definiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
