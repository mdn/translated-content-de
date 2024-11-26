---
title: stop-color
slug: Web/SVG/Attribute/stop-color
l10n:
  sourceCommit: fe1beab414730a2d9ae8a3824af9297ac9bd9410
---

{{SVGRef}}

Das **`stop-color`** Attribut gibt an, welche Farbe an einem Farbverlauf-Stopp verwendet werden soll.

> [!NOTE]
> Im Hinblick auf Farbverläufe behandelt SVG das Schlüsselwort `transparent` anders als CSS. SVG berechnet Farbverläufe nicht in vor-multipliziertem Raum, daher bedeutet `transparent` wirklich transparentes Schwarz. Das Festlegen eines `stop-color` Wertes auf `transparent` ist gleichbedeutend mit dem Festlegen eines `stop-color` Wertes auf `black` und einem {{SVGAttr("stop-opacity")}} Wert von `0`.

> [!NOTE]
> Als Präsentationsattribut kann `stop-color` als CSS-Eigenschaft verwendet werden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("stop")}}

## Verwendungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("color_value", "&lt;color&gt;")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- [`<color>`](/de/docs/Web/SVG/Content_type#color)
  - : Dieser Wert gibt einen Farbwert an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("stop-color")}} Eigenschaft
- {{SVGAttr("stop-opacity")}}
