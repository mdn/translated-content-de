---
title: additive
slug: Web/SVG/Attribute/additive
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{SVGRef}}

Das **`additive`**-Attribut steuert, ob eine Animation additiv ist oder nicht.

Es ist häufig nützlich, eine Animation als Offset oder Differenz zu einem Attributwert zu definieren, anstatt als absolute Werte.

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
  - : Gibt an, dass die Animation zum darunterliegenden Wert des Attributs und anderen Animationen mit niedrigerer Priorität hinzugefügt wird.
- replace
  - : Gibt an, dass die Animation den darunterliegenden Wert des Attributs und andere Animationen mit niedrigerer Priorität überschreibt. Dies ist der Standardwert. Das Verhalten wird jedoch auch durch die Animationswert-Attribute {{SVGAttr("by")}} und {{SVGAttr("to")}} beeinflusst, wie in [SMIL Animation: How from, to and by attributes affect additive behavior](https://www.w3.org/TR/smil-animation/#FromToByAndAdditive) beschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
