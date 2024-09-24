---
title: stemv
slug: Web/SVG/Attribute/stemv
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{SVGRef}}{{Deprecated_Header}}

Das **`stemv`**-Attribut gibt die vertikale Stamdicke der Schriftart an.

Die vertikale Stamdicke ist die Breite der vertikalen (oder nahezu vertikalen) Stäbe von {{Glossary("glyph", "glyphs")}}. Diese Information ist oft mit dem Hinting verbunden und in einigen Schriftformaten möglicherweise nicht direkt zugänglich. Die Messung ist für den dominanten vertikalen Stamm in der Schriftart gedacht, da es verschiedene Gruppierungen vertikaler Stämme geben könnte (z.B. einen Hauptstamm und einen leichteren, wie bei einem Großbuchstaben "M" oder "N").

Wenn dieses Attribut verwendet wird, muss auch {{SVGAttr("units-per-em")}} verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt die vertikale Stamdicke der Schriftart an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stemh")}}
