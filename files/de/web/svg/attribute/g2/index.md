---
title: g2
slug: Web/SVG/Attribute/g2
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}{{Deprecated_Header}}

Das **`g2`**-Attribut gibt eine Liste von Glyphennamen an, die ein Set von möglichen zweiten Glyphen im Kerning-Paar identifizieren.

Alle Glyphen mit dem angegebenen Glyphennamen werden in das Set aufgenommen. Das gesamte Set möglicher zweiter Glyphen im Kerning-Paar ist die Vereinigung der Glyphen, die durch die Attribute {{SVGAttr("u2")}} und `g2` angegeben sind.

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
            href="/de/docs/Web/CSS/Value_definition_syntax#hash_mark"
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
  - : Dieser Wert gibt eine kommagetrennte Sequenz von Glyphennamen an (also Werte, die den {{SVGAttr("glyph-name")}}-Attributen auf {{SVGElement("glyph")}}-Elementen entsprechen), die ein Set von möglichen zweiten Glyphen im Kerning-Paar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
