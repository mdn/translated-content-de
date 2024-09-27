---
title: additive
slug: Web/SVG/Attribute/additive
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das Attribut **`additive`** steuert, ob eine Animation additiv ist oder nicht.

Es ist oft nützlich, Animationen als Versatz oder Delta zum Wert eines Attributs zu definieren, anstatt als absolute Werte.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>replace</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>replace</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- sum
  - : Gibt an, dass die Animation zum zugrunde liegenden Wert des Attributs und anderen Animationen mit niedrigerer Priorität addiert wird.
- replace
  - : Gibt an, dass die Animation den zugrunde liegenden Wert des Attributs und andere Animationen mit niedrigerer Priorität überschreibt. Dies ist der Standardwert, jedoch wird das Verhalten auch durch die Animationswertattribute {{SVGAttr("by")}} und {{SVGAttr("to")}} beeinflusst, wie im [SMIL Animation: How from, to and by attributes affect additive behavior](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#FromToByAndAdditive) beschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SMIL Animation specification](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AdditiveAttribute)
