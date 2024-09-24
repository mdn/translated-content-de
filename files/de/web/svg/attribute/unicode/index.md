---
title: unicode
slug: Web/SVG/Attribute/unicode
l10n:
  sourceCommit: 00252e3d53b06d0d517a093ba5a3f53335dbc0d8
---

{{SVGRef}}{{Deprecated_Header}}

Das **`unicode`** Attribut gibt ein oder mehrere {{Glossary("Unicode")}} Zeichen an, die die Sequenz von Unicode-Zeichen angeben, die einem {{Glossary("glyph")}} entsprechen.

Wenn ein Zeichen angegeben wird, entspricht dieses Glyph dem angegebenen Unicode-Zeichen. Wenn mehrere Zeichen angegeben werden, entspricht dieses Glyph der angegebenen Sequenz von Unicode-Zeichen. Eine Anwendung einer Zeichenfolge ist die Ligatur. Zum Beispiel, wenn `unicode="ffl"`, wird das gegebene Glyph verwendet, um die Zeichenfolge "f", "f" und "l" darzustellen.

Es ist oft nützlich, Zeichen mit XML-Zeichenreferenzen in hexadezimaler oder dezimaler Notation zu bezeichnen. Zum Beispiel könnte `unicode="ffl"` als XML-Zeichenreferenzen in hexadezimaler Notation als `unicode="&#x66;&#x66;&#x6c;"` oder in dezimaler Notation als `unicode="&#102;&#102;&#108;"` ausgedrückt werden.

Das `unicode` Attribut trägt zum Prozess bei, welcher Glyph(e) verwendet werden, um welches/n Zeichen darzustellen.

## Elemente

Sie können dieses Attribut mit dem {{SVGElement("glyph")}} SVG-Element verwenden.

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;string></code></td>
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

- `<string>`
  - : Dieser Wert gibt ein oder mehrere Unicode-Zeichen an, die einem Glyph entsprechen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
