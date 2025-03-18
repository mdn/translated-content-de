---
title: stemv
slug: Web/SVG/Reference/Attribute/stemv
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`stemv`**-Attribut gibt die vertikale Stammbreite der Schriftart an.

Die vertikale Stammbreite ist die Breite der vertikalen (oder nahezu vertikalen) Stämme von {{Glossary("glyph", "Zeichen")}}. Diese Information ist oft mit dem Hinting verbunden und möglicherweise in einigen Schriftformaten nicht direkt zugänglich. Die Messung bezieht sich auf den dominanten vertikalen Stamm in der Schriftart, da es unterschiedliche Gruppierungen von vertikalen Stämmen geben kann (z. B. ein Hauptstamm und ein leichterer Stamm, wie bei einem großen "M" oder "N").

Wenn dieses Attribut verwendet wird, muss auch das Attribut {{SVGAttr("units-per-em")}} verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
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
  - : Dieser Wert gibt die vertikale Stammbreite der Schriftart an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stemh")}}
