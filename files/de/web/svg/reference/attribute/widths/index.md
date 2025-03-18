---
title: widths
slug: Web/SVG/Reference/Attribute/widths
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`widths`** Attribut gibt eine Liste von Bereichswerten an, gefolgt von einem oder mehreren {{Glossary("glyph", "glyph")}} Breiten.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`

  - : Dieser Wert ist eine durch Kommas getrennte Liste von UCS-Bereichswerten wie in [ISO 10646](https://www.iso.org/standard/29819.html) definiert, gefolgt von einem oder mehreren Glyphenbreiten.

    Wenn dieses Attribut verwendet wird, muss auch das {{SVGAttr("units-per-em")}} Attribut verwendet werden.

    Wenn der Bereich weggelassen wird, wird ein Bereich von U+0-7FFFFFFF angenommen, der alle Zeichen und deren Glyphen abdeckt. Wenn nicht genügend Glyphenbreiten angegeben sind, wird die letzte in der Liste wiederholt, um diesen Bereich abzudecken. Wenn zu viele Breiten angegeben werden, werden die zusätzlichen ignoriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ISO 10646](https://www.iso.org/standard/29819.html)
