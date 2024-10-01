---
title: stemv
slug: Web/SVG/Attribute/stemv
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{SVGRef}}{{Deprecated_Header}}

Das **`stemv`** Attribut gibt die vertikale Stamm-Breite der Schriftart an.

Die vertikale Stamm-Breite ist die Breite von vertikalen (oder nahezu vertikalen) Stämmen von {{Glossary("glyph", "Glyphen")}}. Diese Information ist oft mit der Hinting-Technik verbunden und möglicherweise in einigen Schriftformaten nicht direkt zugänglich. Die Messung ist für den dominanten vertikalen Stamm in der Schrift gedacht, da es unterschiedliche Gruppierungen von vertikalen Stämmen geben kann (z.B. einen Hauptstamm und einen leichteren Stamm für einen Großbuchstaben "M" oder "N").

Wenn dieses Attribut verwendet wird, muss auch das {{SVGAttr("units-per-em")}} verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Anwendungshinweise

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
  - : Dieser Wert gibt die vertikale Stamm-Breite der Schriftart an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stemh")}}
