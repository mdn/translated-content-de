---
title: g1
slug: Web/SVG/Reference/Attribute/g1
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das Attribut **`g1`** spezifiziert eine Liste von Glyphennamen, die eine Menge möglicher erster Glyphen im Kerningpaar identifizieren.

Alle Glyphen mit dem gegebenen Glyphennamen sind in der Menge enthalten. Die gesamte Menge möglicher erster Glyphen im Kerningpaar ist die Vereinigung der Glyphen, die durch die Attribute {{SVGAttr("u1")}} und `g1` spezifiziert werden.

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
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<name>#`
  - : Dieser Wert gibt eine komma-separierte Sequenz von Glyphennamen an (d.h. Werte, die die {{SVGAttr("glyph-name")}} Attribute von {{SVGElement("glyph")}} Elementen entsprechen), die eine Menge möglicher erster Glyphen im Kerningpaar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
