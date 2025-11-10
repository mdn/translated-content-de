---
title: accumulate
slug: Web/SVG/Reference/Attribute/accumulate
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`accumulate`** steuert, ob eine Animation kumulativ ist oder nicht.

Es ist häufig nützlich, dass sich wiederholende Animationen auf vorherigen Ergebnissen aufbauen und sich mit jeder Iteration akkumulieren. Dieses Attribut gibt an, ob der Wert bei jeder Iteration zum vorherigen Wert des animierten Attributs hinzugefügt wird.

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
  - : Gibt an, dass jede Wiederholungsiteration nach der ersten auf dem letzten Wert der vorherigen Iteration aufbaut.
- `none`
  - : Gibt an, dass Wiederholungsiterationen nicht kumulativ sind.

Dieses Attribut wird ignoriert, wenn der Zielattributwert keine Addition unterstützt oder wenn das Animationselement nicht wiederholt wird.

Dieses Attribut wird ignoriert, wenn die Animationsfunktion nur mit dem {{SVGAttr("to")}} Attribut spezifiziert ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
