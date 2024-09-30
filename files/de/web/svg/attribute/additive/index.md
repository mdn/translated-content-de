---
title: additive
slug: Web/SVG/Attribute/additive
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das **`additive`**-Attribut steuert, ob eine Animation additiv ist oder nicht.

Es ist häufig nützlich, Animationen als Verschiebung oder Delta zum Wert eines Attributs zu definieren, anstatt als absolute Werte.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Anwendungshinweise

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
  - : Gibt an, dass die Animation zum zugrunde liegenden Wert des Attributs und anderen Animationen mit niedrigerer Priorität hinzugefügt wird.
- replace
  - : Gibt an, dass die Animation den zugrunde liegenden Wert des Attributs und andere Animationen mit niedrigerer Priorität überschreibt. Dies ist der Standard, jedoch wird das Verhalten auch durch die Animationswertattribute {{SVGAttr("by")}} und {{SVGAttr("to")}} beeinflusst, wie in [SMIL-Animation: Wie von, zu und durch Attribute das additive Verhalten beeinflussen](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#FromToByAndAdditive) beschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SMIL-Animationsspezifikation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AdditiveAttribute)
