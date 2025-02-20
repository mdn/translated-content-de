---
title: accumulate
slug: Web/SVG/Attribute/accumulate
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{SVGRef}}

Das **`accumulate`**-Attribut steuert, ob eine Animation kumulativ ist oder nicht.

Es ist oft nützlich, wenn wiederholte Animationen auf den vorherigen Ergebnissen aufbauen und sich bei jeder Iteration summieren. Dieses Attribut gibt an, ob der Wert bei jeder Iteration zum vorherigen Wert des animierten Attributs hinzugefügt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Hinweise zur Verwendung

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
  - : Gibt an, dass jede Wiederholung nach der ersten auf dem letzten Wert der vorherigen Iteration aufbaut.
- `none`
  - : Gibt an, dass Wiederholungen nicht kumulativ sind.

Dieses Attribut wird ignoriert, wenn der Zielattributwert keine Addition unterstützt oder wenn das Animationselement nicht wiederholt wird.

Dieses Attribut wird ignoriert, wenn die Animationsfunktion nur mit dem {{SVGAttr("to")}}-Attribut angegeben wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
