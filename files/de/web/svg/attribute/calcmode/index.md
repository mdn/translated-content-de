---
title: calcMode
slug: Web/SVG/Attribute/calcMode
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das **`calcMode`** Attribut spezifiziert den [Interpolation](/de/docs/Glossary/interpolation) Modus für die Animation.

Der Standardmodus ist `linear`, jedoch wenn das Attribut keine lineare Interpolation unterstützt (z.B. für Zeichenketten), wird das `calcMode` Attribut ignoriert und diskrete Interpolation verwendet.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Dies gibt an, dass die Animationsfunktion von einem Wert zum nächsten springt, ohne jegliche Interpolation.
- `linear`
  - : Einfache lineare Interpolation zwischen Werten wird verwendet, um die Animationsfunktion zu berechnen. Außer für {{SVGElement("animateMotion")}}, ist dies der Standardwert.
- `paced`
  - : Definiert eine Interpolation, um eine gleichmäßige Änderung der Animation zu erzielen. Dies wird nur für Werte unterstützt, die einen linearen numerischen Bereich definieren und für die eine Art von "Distanz" zwischen Punkten berechnet werden kann (z.B. Position, Breite, Höhe, etc.). Wenn `paced` angegeben ist, werden alle {{SVGAttr("keyTimes")}} oder {{SVGAttr("keySplines")}} ignoriert. Für {{SVGElement("animateMotion")}} ist dies der Standardwert.
- `spline`
  - : Interpoliert von einem Wert in der {{SVGAttr("values")}}-Liste zum nächsten gemäß einer Zeitfunktion, die durch eine kubische Bézier-Kurve definiert ist. Die Punkte der Kurve sind im {{SVGAttr("keyTimes")}} Attribut definiert, und die Kontrollpunkte für jedes Intervall sind im {{SVGAttr("keySplines")}} Attribut definiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SMIL Animationsspezifikation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
