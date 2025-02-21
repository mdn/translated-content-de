---
title: g1
slug: Web/SVG/Attribute/g1
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{SVGRef}}{{Deprecated_Header}}

Das **`g1`**-Attribut bestimmt eine Liste von Glyphennamen, die eine Reihe möglicher erster Glyphen im Kerningpaar identifizieren.

Alle Glyphen mit dem angegebenen Glyphennamen sind in der Menge enthalten. Die Gesamtheit der möglichen ersten Glyphen im Kerningpaar ist die Vereinigung der Glyphen, die durch die Attribute {{SVGAttr("u1")}} und `g1` angegeben sind.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  - : Dieser Wert gibt eine kommagetrennte Sequenz von Glyphennamen an (d.h. Werte, die den Eigenschaften {{SVGAttr("glyph-name")}} auf {{SVGElement("glyph")}}-Elementen entsprechen), die eine Reihe möglicher erster Glyphen im Kerningpaar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
