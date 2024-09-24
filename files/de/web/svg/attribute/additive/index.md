---
title: additives
slug: Web/SVG/Attribute/additive
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das **`additive`** Attribut steuert, ob eine Animation additiv ist oder nicht.

Es ist häufig nützlich, Animationen als ein Offset oder eine Differenz zum Wert eines Attributs zu definieren, anstatt als absolute Werte.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Nutzungshinweise

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
  - : Spezifiziert, dass die Animation zum zugrunde liegenden Wert des Attributs und anderen niedrigpriorisierten Animationen addiert wird.
- replace
  - : Spezifiziert, dass die Animation den zugrunde liegenden Wert des Attributs und andere niedrigpriorisierte Animationen überschreibt. Dies ist der Standard, jedoch wird das Verhalten auch durch die Animationswertattribute {{SVGAttr("by")}} und {{SVGAttr("to")}} beeinflusst, wie in [SMIL-Animation: Wie die Attribute from, to und by das additive Verhalten beeinflussen](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#FromToByAndAdditive) beschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SMIL Annotationsspezifikation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AdditiveAttribute)
