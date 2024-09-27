---
title: glyph-name
slug: Web/SVG/Attribute/glyph-name
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`glyph-name`**-Attribut gibt den Namen eines [Glyphs](/de/docs/Glossary/glyph) an.

Es wird empfohlen, dass Glyph-Namen innerhalb einer Schriftart eindeutig sind. Die Glyph-Namen können in Situationen verwendet werden, in denen [Unicode](/de/docs/Glossary/Unicode)-Zeichennummern nicht genügend Informationen geben, um das korrekte Glyph zuzugreifen, wie zum Beispiel, wenn es mehrere Glyphen pro Unicode-Zeichen gibt.

Die Glyph-Namen können in [Kerning](/de/docs/Glossary/kerning)-Definitionen referenziert werden, die durch die {{SVGElement("hkern")}}- und {{SVGElement("vkern")}}-Elemente erstellt wurden.

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
  - : Dieser Wert spezifiziert eine kommagetrennte Liste von Namen für das Glyph.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
