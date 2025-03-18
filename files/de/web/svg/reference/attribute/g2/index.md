---
title: g2
slug: Web/SVG/Reference/Attribute/g2
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`g2`**-Attribut gibt eine Liste von Glyphennamen an, die eine Menge möglicher zweiter Glyphen im Paar für optischen Ausgleich identifizieren.

Alle Glyphen mit dem angegebenen Glyphennamen sind in der Menge enthalten. Die gesamte Menge der möglichen zweiten Glyphen im Paar für optischen Ausgleich ist die Vereinigung der Glyphen, die durch die Attribute {{SVGAttr("u2")}} und `g2` angegeben sind.

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
  - : Dieser Wert gibt eine durch Kommas getrennte Sequenz von Glyphennamen an (d.h. Werte, die den {{SVGAttr("glyph-name")}}-Attributen der {{SVGElement("glyph")}}-Elemente entsprechen), die eine Menge möglicher zweiter Glyphen im Paar für optischen Ausgleich identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
