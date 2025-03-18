---
title: vert-adv-y
slug: Web/SVG/Reference/Attribute/vert-adv-y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das Attribut **`vert-adv-y`** gibt den vertikalen Abstand nach der Darstellung eines {{Glossary("glyph", "Glyphs")}} in vertikaler Ausrichtung an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font")}}
- {{SVGElement("glyph")}}
- {{SVGElement("missing-glyph")}}

## font

Für {{SVGElement("font")}}-Elemente gibt `vert-adv-y` den Standardwert für den vertikalen Abstand eines Glyphs in vertikaler Ausrichtung an.

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
      <td><em>1 em gemäß {{SVGAttr("units-per-em")}}</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt den Standardwert für den vertikalen Abstand des Glyphs in vertikaler Richtung an

## glyph, missing-glyph

Für {{SVGElement("glyph")}} und {{SVGElement("missing-glyph")}}-Elemente gibt `vert-adv-y` den vertikalen Abstand für ein Glyph in vertikaler Ausrichtung an.

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
        <em>{{SVGElement("font")}}'s <code>vert-adv-y</code> Wert</em>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt den vertikalen Abstand des Glyphs in vertikaler Richtung an

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("horiz-adv-x")}}
- {{SVGAttr("units-per-em")}}
