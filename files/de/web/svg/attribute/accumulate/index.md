---
title: accumulate
slug: Web/SVG/Attribute/accumulate
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das **`accumulate`**-Attribut steuert, ob eine Animation kumulativ ist oder nicht.

Es ist häufig nützlich, wenn sich wiederholende Animationen auf die vorherigen Ergebnisse aufbauen und sich mit jeder Iteration ansammeln. Dieses Attribut gibt an, ob der Wert bei jeder Iteration zum vorherigen Wert des animierten Attributs hinzugefügt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>none</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `sum`
  - : Gibt an, dass jede Wiederholungsiteration nach der ersten auf den letzten Wert der vorherigen Iteration aufbaut.
- `none`
  - : Gibt an, dass Wiederholungsiterationen nicht kumulativ sind.

Dieses Attribut wird ignoriert, wenn der Zielattributwert keine Addition unterstützt oder wenn das Animationselement nicht wiederholt wird.

Dieses Attribut wird ignoriert, wenn die Animationsfunktion nur mit dem {{SVGAttr("to")}}-Attribut angegeben wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SMIL-Animationsspezifikation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
