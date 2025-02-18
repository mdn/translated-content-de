---
title: stop-color
slug: Web/SVG/Attribute/stop-color
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`stop-color`**-Attribut gibt an, welche Farbe an einem Verlaufspunkt verwendet werden soll.

> [!NOTE]
> Im Hinblick auf Verläufe behandelt SVG das Schlüsselwort `transparent` anders als CSS. SVG berechnet Verläufe nicht im vormultiplizierten Farbraum, daher bedeutet `transparent` tatsächlich transparentes Schwarz. Das Festlegen eines `stop-color`-Wertes auf `transparent` entspricht dem Festlegen eines `stop-color`-Wertes auf `black` und eines {{SVGAttr("stop-opacity")}}-Wertes auf `0`.

> [!NOTE]
> Als Präsentationsattribut besitzt `stop-color` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("stop-color")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("stop")}}

## Hinweise zur Verwendung

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

- CSS {{cssxref("stop-color")}}-Eigenschaft
- {{SVGAttr("stop-opacity")}}
