---
title: akkumulieren
slug: Web/SVG/Attribute/accumulate
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das Attribut **`accumulate`** steuert, ob eine Animation kumulativ ist oder nicht.

Es ist häufig nützlich, wenn wiederholte Animationen auf den vorherigen Ergebnissen aufbauen und sich mit jeder Iteration akkumulieren. Dieses Attribut gibt der Animation an, ob der Wert bei jeder Iteration zum vorherigen Wert des animierten Attributs hinzugefügt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Verwendungshinweise

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
  - : Spezifiziert, dass jede Wiederholung nach der ersten auf dem letzten Wert der vorherigen Iteration aufbaut.
- `none`
  - : Spezifiziert, dass Wiederholungen nicht kumulativ sind.

Dieses Attribut wird ignoriert, wenn der Zielattributwert keine Addition unterstützt oder wenn das Animationselement nicht wiederholt wird.

Dieses Attribut wird ignoriert, wenn die Animationsfunktion nur mit dem Attribut {{SVGAttr("to")}} angegeben ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SMIL Animationsspezifikation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
