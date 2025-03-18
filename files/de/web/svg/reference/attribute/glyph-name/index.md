---
title: glyph-name
slug: Web/SVG/Reference/Attribute/glyph-name
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`glyph-name`**-Attribut spezifiziert den Namen eines {{Glossary("glyph", "Glyphs")}}.

Es wird empfohlen, dass Glyphennamen innerhalb einer Schriftart eindeutig sind. Die Glyphennamen können in Situationen verwendet werden, in denen {{Glossary("Unicode", "Unicode")}}-Zeichennummern nicht genügend Informationen bieten, um auf das richtige Glyph zuzugreifen, zum Beispiel wenn es mehrere Glyphen pro Unicode-Zeichen gibt.

Die Glyphennamen können in {{Glossary("kerning", "Kerning")}}-Definitionen referenziert werden, die durch die {{SVGElement("hkern")}}- und {{SVGElement("vkern")}}-Elemente erstellt wurden.

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
  - : Dieser Wert spezifiziert eine durch Kommas getrennte Liste von Namen für das Glyph.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
