---
title: glyph-name
slug: Web/SVG/Attribute/glyph-name
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`glyph-name`** Attribut gibt den Namen eines {{Glossary("glyph", "Glyphen")}} an.

Es wird empfohlen, dass Glyphennamen innerhalb einer Schriftart eindeutig sind. Die Glyphennamen können in Situationen verwendet werden, in denen {{Glossary("Unicode", "Unicode")}}-Zeichennummern nicht genügend Informationen liefern, um auf den richtigen Glyphen zuzugreifen, z. B. wenn es mehrere Glyphen pro Unicode-Zeichen gibt.

Die Glyphennamen können in {{Glossary("kerning", "Kerning")}}-Definitionen referenziert werden, die von {{SVGElement("hkern")}} und {{SVGElement("vkern")}} Elementen erstellt wurden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("glyph")}}

## Kontextnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;name>#</code></td>
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

- `<name>#`
  - : Dieser Wert gibt eine durch Kommas getrennte Liste von Namen für den Glyphen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
