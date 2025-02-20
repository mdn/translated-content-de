---
title: calcMode
slug: Web/SVG/Attribute/calcMode
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{SVGRef}}

Das **`calcMode`**-Attribut gibt den {{Glossary("interpolation", "Interpolationsmodus")}} für die Animation an.

Der Standardmodus ist `linear`, jedoch, wenn das Attribut keine lineare Interpolation unterstützt (z. B. für Zeichenketten), wird das `calcMode`-Attribut ignoriert und stattdessen eine diskrete Interpolation verwendet.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  - : Gibt an, dass die Animationsfunktion von einem Wert zum nächsten springt, ohne Interpolation.
- `linear`
  - : Eine einfache lineare Interpolation zwischen Werten wird verwendet, um die Animationsfunktion zu berechnen. Mit Ausnahme von {{SVGElement("animateMotion")}} ist dies der Standardwert.
- `paced`
  - : Definiert eine Interpolation, die eine gleichmäßige Veränderungsgeschwindigkeit über die Animation hinweg erzeugt. Dies wird nur für Werte unterstützt, die einen linearen numerischen Bereich definieren und für die ein Konzept von "Abstand" zwischen Punkten berechnet werden kann (z. B. Position, Breite, Höhe usw.). Wenn `paced` angegeben wird, werden alle {{SVGAttr("keyTimes")}} oder {{SVGAttr("keySplines")}} ignoriert. Für {{SVGElement("animateMotion")}} ist dies der Standardwert.
- `spline`
  - : Interpoliert von einem Wert in der {{SVGAttr("values")}}-Liste zum nächsten gemäß einer Zeitfunktion, die durch eine kubische Bézier-Kurve definiert ist. Die Punkte der Kurve werden im {{SVGAttr("keyTimes")}}-Attribut definiert, und die Kontrollpunkte für jedes Intervall werden im {{SVGAttr("keySplines")}}-Attribut definiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
