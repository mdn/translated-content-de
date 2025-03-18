---
title: horiz-adv-x
slug: Web/SVG/Reference/Attribute/horiz-adv-x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das Attribut **`horiz-adv-x`** gibt den horizontalen Vorschub nach der Darstellung eines {{Glossary("glyph", "glyph")}} im horizontalen Modus an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font")}}
- {{SVGElement("glyph")}}
- {{SVGElement("missing-glyph")}}

## font

Für {{SVGElement("font")}}-Elemente gibt `horiz-adv-x` den Standard-horizontalen Vorschub eines Glyphen im horizontalen Modus an.

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
  - : Dieser Wert gibt den horizontalen Vorschub des Glyphen an.

## glyph, missing-glyph

Für die Elemente {{SVGElement("glyph")}} und {{SVGElement("missing-glyph")}} spezifiziert `horiz-adv-x` den horizontalen Vorschub des Glyphen im horizontalen Modus.

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
      <td>
        <em><code>{{SVGElement("font")}}</code>'s <code>horiz-adv-x</code> Wert</em>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt den horizontalen Vorschub des Glyphen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("vert-adv-y")}}
