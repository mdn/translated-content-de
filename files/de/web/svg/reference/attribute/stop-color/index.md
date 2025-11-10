---
title: stop-color
slug: Web/SVG/Reference/Attribute/stop-color
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`stop-color`** gibt an, welche Farbe an einem Gradient-Stopp verwendet werden soll.

> [!NOTE]
> In Bezug auf Gradienten behandelt SVG das Schlüsselwort `transparent` anders als CSS. SVG berechnet Gradienten nicht in vormultipliziertem Raum, daher bedeutet `transparent` wirklich durchsichtiges Schwarz. Das Festlegen einer `stop-color` mit dem Wert `transparent` entspricht dem Festlegen einer `stop-color` mit dem Wert `black` und einer {{SVGAttr("stop-opacity")}} mit dem Wert `0`.

> [!NOTE]
> Als Präsentationsattribut hat `stop-color` auch ein entsprechendes CSS-Property: {{cssxref("stop-color")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("stop")}}

## Anmerkungen zur Verwendung

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

- [`<color>`](/de/docs/Web/SVG/Guides/Content_type#color)
  - : Dieser Wert gibt einen Farbwert an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("stop-color")}}
- {{SVGAttr("stop-opacity")}}
