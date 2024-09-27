---
title: stemv
slug: Web/SVG/Attribute/stemv
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{SVGRef}}{{Deprecated_Header}}

Das **`stemv`**-Attribut gibt die vertikale Stammstärke der Schriftart an.

Die vertikale Stammstärke ist die Breite der vertikalen (oder nahezu vertikalen) Stämme von [Glyphen](/de/docs/Glossary/glyph). Diese Information hängt häufig mit der Hinting-Technik zusammen und ist möglicherweise in einigen Schriftartenformaten nicht direkt zugänglich. Das Maß ist für den dominanten vertikalen Stamm in der Schriftart gedacht, da es unterschiedliche Gruppierungen von vertikalen Stämmen geben kann (z.B. einen Hauptstamm und einen leichteren Stamm wie bei einem großen "M" oder "N").

Wird dieses Attribut verwendet, muss auch das {{SVGAttr("units-per-em")}} verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Verwendungshinweise

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
  - : Dieser Wert gibt die vertikale Stammstärke der Schriftart an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stemh")}}
