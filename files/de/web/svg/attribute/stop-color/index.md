---
title: stop-color
slug: Web/SVG/Attribute/stop-color
l10n:
  sourceCommit: 401b6b1355a1ca28f686cff9be83384e68e81d82
---

{{SVGRef}}

Das **`stop-color`**-Attribut gibt an, welche Farbe an einem Gradientenstopp verwendet werden soll.

> [!NOTE]
> In Bezug auf Gradienten behandelt SVG das Schlüsselwort `transparent` anders als CSS. SVG berechnet Gradienten nicht im vor-multiplizierten Raum, daher bedeutet `transparent` wirklich transparentes Schwarz. Daher ist das Angeben eines `stop-color`-Attributs mit dem Wert `transparent` gleichbedeutend mit dem Angeben eines `stop-color`-Attributs mit dem Wert `black` und einer {{SVGAttr("stop-opacity")}} mit dem Wert `0`.

> [!NOTE]
> Als Präsentationsattribut kann `stop-color` als CSS-Eigenschaft verwendet werden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("stop")}}

## Anwendungshinweise

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
