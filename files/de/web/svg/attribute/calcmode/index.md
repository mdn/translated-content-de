---
title: calcMode
slug: Web/SVG/Attribute/calcMode
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das **`calcMode`**-Attribut spezifiziert den {{Glossary("interpolation")}}modus für die Animation.

Der Standardmodus ist `linear`. Wenn das Attribut jedoch keine lineare Interpolation unterstützt (z. B. bei Zeichenfolgen), wird das `calcMode`-Attribut ignoriert und eine diskrete Interpolation verwendet.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Hinweise zur Verwendung

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
  - : Dies spezifiziert, dass die Animationsfunktion ohne Interpolation von einem Wert zum nächsten springt.
- `linear`
  - : Einfache lineare Interpolation zwischen den Werten wird zur Berechnung der Animationsfunktion verwendet. Mit Ausnahme von {{SVGElement("animateMotion")}} ist dies der Standardwert.
- `paced`
  - : Definiert eine Interpolation, um eine gleichmäßige Veränderungsgeschwindigkeit über die Animation zu erzeugen. Dies wird nur für Werte unterstützt, die einen linearen numerischen Bereich definieren und für die eine Art von "Entfernung" zwischen Punkten berechnet werden kann (z. B. Position, Breite, Höhe usw.). Wenn paced angegeben ist, werden alle {{SVGAttr("keyTimes")}} oder {{SVGAttr("keySplines")}} ignoriert. Für {{SVGElement("animateMotion")}} ist dies der Standardwert.
- `spline`
  - : Interpoliert von einem Wert in der {{SVGAttr("values")}}-Liste zum nächsten gemäß einer Zeitfunktion, die durch eine kubische Bézierkurve definiert ist. Die Punkte der Kurve werden im {{SVGAttr("keyTimes")}}-Attribut definiert und die Kontrollpunkte für jedes Intervall im {{SVGAttr("keySplines")}}-Attribut.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SMIL-Animationsspezifikation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
