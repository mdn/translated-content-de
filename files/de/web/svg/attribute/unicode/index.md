---
title: unicode
slug: Web/SVG/Attribute/unicode
l10n:
  sourceCommit: 00252e3d53b06d0d517a093ba5a3f53335dbc0d8
---

{{SVGRef}}{{Deprecated_Header}}

Das **`unicode`**-Attribut gibt ein oder mehrere [Unicode](/de/docs/Glossary/Unicode)-Zeichen an, die die Sequenz von Unicode-Zeichen anzeigen, die einem [Glyph](/de/docs/Glossary/glyph) entspricht.

Wenn ein Zeichen angegeben wird, entspricht dieses Glyph dem gegebenen Unicode-Zeichen. Wenn mehrere Zeichen angegeben werden, entspricht dieses Glyph der gegebenen Sequenz von Unicode-Zeichen. Eine Verwendung einer Zeichenfolge sind Ligaturen. Zum Beispiel, wenn `unicode="ffl"` angegeben ist, wird das gegebene Glyph verwendet, um die Zeichenfolge "f", "f" und "l" darzustellen.

Es ist oft nützlich, sich auf Zeichen mit XML-Zeichenreferenzen zu beziehen, die in hexadezimaler oder dezimaler Notation ausgedrückt werden. Zum Beispiel könnte `unicode="ffl"` als XML-Zeichenreferenzen in hexadezimaler Notation als `unicode="&#x66;&#x66;&#x6c;"` oder in dezimaler Notation als `unicode="&#102;&#102;&#108;"` ausgedrückt werden.

Das `unicode`-Attribut trägt zum Prozess bei, zu entscheiden, welche Glyphe(n) verwendet werden, um welche Zeichen darzustellen.

## Elemente

Sie können dieses Attribut mit dem {{SVGElement("glyph")}} SVG-Element verwenden.

## Nutzungsnotizen

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
  - : Dieser Wert spezifiziert ein oder mehrere Unicode-Zeichen, die einem Glyph entsprechen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
