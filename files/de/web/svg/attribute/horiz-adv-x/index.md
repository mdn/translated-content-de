---
title: horiz-adv-x
slug: Web/SVG/Attribute/horiz-adv-x
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}{{Deprecated_Header}}

Das Attribut **`horiz-adv-x`** gibt den horizontalen Vorschub nach der Darstellung eines {{Glossary("glyph")}}s in horizontaler Ausrichtung an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font")}}
- {{SVGElement("glyph")}}
- {{SVGElement("missing-glyph")}}

## font

Für {{SVGElement("font")}}-Elemente gibt `horiz-adv-x` den Standardvorschub eines Glyphs in horizontaler Ausrichtung an.

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
  - : Dieser Wert gibt den horizontalen Vorschub des Glyphs an.

## glyph, missing-glyph

Für {{SVGElement("glyph")}}- und {{SVGElement("missing-glyph")}}-Elemente gibt `horiz-adv-x` den horizontalen Vorschub des Glyphs in horizontaler Ausrichtung an.

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
        <em>Wert von <code>horiz-adv-x</code> des {{SVGElement("font")}}</em>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt den horizontalen Vorschub des Glyphs an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("vert-adv-y")}}