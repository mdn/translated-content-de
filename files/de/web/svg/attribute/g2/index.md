---
title: g2
slug: Web/SVG/Attribute/g2
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{SVGRef}}{{Deprecated_Header}}

Das **`g2`**-Attribut gibt eine Liste von Glyphennamen an, die eine Menge möglicher zweiter Glyphen im Kerning-Paar identifizieren.

Alle Glyphen mit dem angegebenen Glyphennamen sind in der Menge enthalten. Die gesamte Menge möglicher zweiter Glyphen im Kerning-Paar ist die Vereinigung der Glyphen, die durch die Attribute {{SVGAttr("u2")}} und `g2` angegeben sind.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("hkern")}}
- {{SVGElement("vkern")}}

## Kontextnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          >&#x3C;name><a
            href="/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#hash_mark"
            >#</a
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

- `<name>#`
  - : Dieser Wert gibt eine durch Kommata getrennte Sequenz von Glyphennamen an (d. h. Werte, die mit {{SVGAttr("glyph-name")}}-Attributen auf {{SVGElement("glyph")}}-Elementen übereinstimmen), die eine Menge möglicher zweiter Glyphen im Kerning-Paar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
