---
title: glyph-name
slug: Web/SVG/Attribute/glyph-name
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`glyph-name`** Attribut gibt den Namen eines {{Glossary("glyph")}} an.

Es wird empfohlen, dass Glyphennamen innerhalb einer Schriftart eindeutig sind. Die Glyphennamen können in Situationen verwendet werden, in denen {{Glossary("Unicode")}}-Zeichennummern nicht genügend Information liefern, um auf das korrekte Glyph zuzugreifen, wie zum Beispiel, wenn es mehrere Glyphen pro Unicode-Zeichen gibt.

Die Glyphennamen können in {{Glossary("kerning")}}-Definitionen, die durch die {{SVGElement("hkern")}}- und {{SVGElement("vkern")}}-Elemente erstellt wurden, referenziert werden.

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
  - : Dieser Wert gibt eine kommagetrennte Liste von Namen für das Glyph an.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
