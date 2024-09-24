---
title: vert-origin-x
slug: Web/SVG/Attribute/vert-origin-x
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`vert-origin-x`** Attribut gibt die x-Koordinate im Schriftkoordinatensystem des Ursprungs eines {{Glossary("glyph")}} an, der verwendet wird, wenn vertikal orientierter Text gezeichnet wird.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font")}}

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
      <td><em>Die Hälfte des Wertes von {{SVGAttr("horiz-adv-x")}}</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt die x-Koordinate des Ursprungs eines Glyphen für vertikal orientierten Text an.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{SVGAttr("horiz-origin-x")}}
- {{SVGAttr("horiz-origin-y")}}
- {{SVGAttr("vert-origin-y")}}
