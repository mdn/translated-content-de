---
title: additive
slug: Web/SVG/Reference/Attribute/additive
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`additive`**-Attribut steuert, ob eine Animation additiv ist oder nicht.

Es ist häufig nützlich, eine Animation als Offset oder Delta zum Wert eines Attributs zu definieren, anstatt als absolute Werte.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Verwendungshinweise

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
  - : Gibt an, dass die Animation zum zugrunde liegenden Wert des Attributs und zu anderen Animationen mit niedrigerer Priorität hinzugefügt wird.
- replace
  - : Gibt an, dass die Animation den zugrunde liegenden Wert des Attributs und andere Animationen mit niedrigerer Priorität überschreibt. Dies ist der Standardwert, jedoch wird das Verhalten auch durch die Animationswertattribute {{SVGAttr("by")}} und {{SVGAttr("to")}} beeinflusst, wie im [SMIL Animation: How from, to and by attributes affect additive behavior](https://www.w3.org/TR/smil-animation/#FromToByAndAdditive) beschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
