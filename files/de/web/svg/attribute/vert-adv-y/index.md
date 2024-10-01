---
title: vert-adv-y
slug: Web/SVG/Attribute/vert-adv-y
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`vert-adv-y`** Attribut gibt den vertikalen Vorschub nach dem Rendern eines {{Glossary("glyph", "glyph")}} in vertikaler Ausrichtung an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font")}}
- {{SVGElement("glyph")}}
- {{SVGElement("missing-glyph")}}

## font

Für {{SVGElement("font")}}-Elemente spezifiziert `vert-adv-y` den Standard-Vertikalvorschub für ein Glyphe in vertikaler Ausrichtung.

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
  - : Dieser Wert gibt den Standard-Vertikalvorschub der Glyphe in vertikaler Richtung an

## glyph, missing-glyph

Für {{SVGElement("glyph")}}- und {{SVGElement("missing-glyph")}}-Elemente spezifiziert `vert-adv-y` den Vertikalvorschub für ein Glyphe in vertikaler Ausrichtung.

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
        <em>Der <code>vert-adv-y</code> Wert von {{SVGElement("font")}}</em>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt den Vertikalvorschub der Glyphe in vertikaler Richtung an

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("horiz-adv-x")}}
- {{SVGAttr("units-per-em")}}
