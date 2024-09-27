---
title: widths
slug: Web/SVG/Attribute/widths
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`widths`** Attribut zeigt eine Liste von Bereichswerten an, gefolgt von einem oder mehreren [Glyphen](/de/docs/Glossary/glyph)-Breiten.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`

  - : Dieser Wert ist eine durch Kommas getrennte Liste von UCS-Bereichswerten, wie in [ISO 10646](https://www.iso.org/standard/29819.html) definiert, gefolgt von einem oder mehreren Glyphenbreiten.

    Wenn dieses Attribut verwendet wird, muss auch das {{SVGAttr("units-per-em")}} Attribut verwendet werden.

    Wenn der Bereich weggelassen wird, wird ein Bereich von U+0-7FFFFFFF angenommen, der alle Zeichen und deren Glyphen abdeckt. Wenn nicht genügend Glyphenbreiten angegeben sind, wird die letzte in der Liste wiederholt, um diesen Bereich abzudecken. Wenn zu viele Breiten bereitgestellt werden, werden die zusätzlichen ignoriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ISO 10646](https://www.iso.org/standard/29819.html)
