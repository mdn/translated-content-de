---
title: unicode
slug: Web/SVG/Attribute/unicode
l10n:
  sourceCommit: 00252e3d53b06d0d517a093ba5a3f53335dbc0d8
---

{{SVGRef}}{{Deprecated_Header}}

Das **`unicode`** Attribut legt ein oder mehrere [Unicode](/de/docs/Glossary/Unicode)-Zeichen fest, die die Sequenz von Unicode-Zeichen angeben, die einem [Glyph](/de/docs/Glossary/glyph) entsprechen.

Wenn ein Zeichen angegeben wird, dann entspricht dieses Glyph dem angegebenen Unicode-Zeichen. Wenn mehrere Zeichen angegeben werden, dann entspricht dieses Glyph der angegebenen Sequenz von Unicode-Zeichen. Eine Verwendung einer Zeichenfolge ist Ligaturen. Zum Beispiel, wenn `unicode="ffl"`, dann wird das angegebene Glyph verwendet, um die Sequenz der Zeichen "f", "f" und "l" darzustellen.

Es ist oft nützlich, sich auf Zeichen unter Verwendung von XML-Zeichenreferenzen zu beziehen, die in hexadezimaler oder dezimaler Notation ausgedrückt sind. Zum Beispiel könnte `unicode="ffl"` als XML-Zeichenreferenzen in hexadezimaler Notation als `unicode="&#x66;&#x66;&#x6c;"` oder in dezimaler Notation als `unicode="&#102;&#102;&#108;"` ausgedrückt werden.

Das `unicode` Attribut trägt zum Prozess bei, der entscheidet, welche Glyphen verwendet werden, um welche Zeichen darzustellen.

## Elemente

Sie können dieses Attribut zusammen mit dem {{SVGElement("glyph")}} SVG-Element verwenden.

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
  - : Dieser Wert gibt ein oder mehrere Unicode-Zeichen an, die einem Glyph entsprechen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
