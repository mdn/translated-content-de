---
title: unicode
slug: Web/SVG/Reference/Attribute/unicode
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`unicode`** Attribut gibt ein oder mehrere {{Glossary("Unicode", "Unicode")}}-Zeichen an, die die Sequenz von Unicode-Zeichen darstellen, die einem {{Glossary("glyph", "Glyphe")}} entsprechen.

Wird ein Zeichen angegeben, entspricht diese Glyphe dem angegebenen Unicode-Zeichen. Werden mehrere Zeichen angegeben, entspricht diese Glyphe der angegebenen Sequenz von Unicode-Zeichen. Ein Anwendungsfall für eine Sequenz von Zeichen sind Ligaturen. Zum Beispiel, wenn `unicode="ffl"` angegeben ist, wird die gegebene Glyphe verwendet, um die Zeichenfolge "f", "f" und "l" darzustellen.

Es ist oft nützlich, sich auf Zeichen unter Verwendung von XML-Zeichenreferenzen zu beziehen, die in hexadezimaler oder dezimaler Notation ausgedrückt werden. Zum Beispiel könnte `unicode="ffl"` als XML-Zeichenreferenzen in hexadezimaler Notation als `unicode="&#x66;&#x66;&#x6c;"` oder in dezimaler Notation als `unicode="&#102;&#102;&#108;"` ausgedrückt werden.

Das `unicode` Attribut trägt zum Prozess bei, zu entscheiden, welche Glyphe(n) verwendet werden, um welches Zeichen/welche Zeichen darzustellen.

## Elemente

Sie können dieses Attribut mit dem {{SVGElement("glyph")}} SVG-Element verwenden.

## Anwendungshinweise

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
  - : Dieser Wert gibt ein oder mehrere Unicode-Zeichen an, die einer Glyphe entsprechen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
