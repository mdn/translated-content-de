---
title: vert-adv-y
slug: Web/SVG/Attribute/vert-adv-y
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`vert-adv-y`** Attribut gibt den vertikalen Vorschub nach dem Rendern eines [glyph](/de/docs/Glossary/glyph) in vertikaler Ausrichtung an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font")}}
- {{SVGElement("glyph")}}
- {{SVGElement("missing-glyph")}}

## font

Für {{SVGElement("font")}} Elemente gibt `vert-adv-y` den standardmäßigen vertikalen Vorschub für ein Glyph in vertikaler Ausrichtung an.

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
      <td><em>1 em gemäß {{SVGAttr("units-per-em")}}</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt den standardmäßigen vertikalen Vorschub des Glyphs in vertikaler Richtung an

## glyph, missing-glyph

Für {{SVGElement("glyph")}} und {{SVGElement("missing-glyph")}} Elemente gibt `vert-adv-y` den vertikalen Vorschub für ein Glyph in vertikaler Ausrichtung an.

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
      <td>
        <em>Wert von <code>vert-adv-y</code> des {{SVGElement("font")}}</em>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt den vertikalen Vorschub des Glyphs in vertikaler Richtung an

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("horiz-adv-x")}}
- {{SVGAttr("units-per-em")}}
