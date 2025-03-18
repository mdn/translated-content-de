---
title: vert-origin-x
slug: Web/SVG/Reference/Attribute/vert-origin-x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das Attribut **`vert-origin-x`** gibt die x-Koordinate im Koordinatensystem der Schriftart an, die als Ursprung eines {{Glossary("glyph", "glyph")}}s verwendet wird, wenn vertikal ausgerichteter Text gezeichnet wird.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font")}}

## Verwendungshinweise

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
      <td><em>Die Hälfte des {{SVGAttr("horiz-adv-x")}}-Wertes</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt die x-Koordinate des Ursprungs eines glyphs für vertikal ausgerichteten Text an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("horiz-origin-x")}}
- {{SVGAttr("horiz-origin-y")}}
- {{SVGAttr("vert-origin-y")}}
