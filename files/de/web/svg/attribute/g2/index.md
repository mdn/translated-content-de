---
title: g2
slug: Web/SVG/Attribute/g2
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}{{Deprecated_Header}}

Das **`g2`**-Attribut gibt eine Liste von Glyphennamen an, die eine Reihe möglicher zweiter Glyphen im Kernenpaar identifizieren.

Alle Glyphen mit dem angegebenen Glyphennamen sind in der Menge enthalten. Die gesamte Menge möglicher zweiter Glyphen im Kernenpaar ist die Vereinigung der durch die Attribute {{SVGAttr("u2")}} und `g2` angegebenen Glyphen.

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
  - : Dieser Wert gibt eine durch Kommas getrennte Folge von Glyphennamen an (d. h. Werte, die mit {{SVGAttr("glyph-name")}}-Attributen auf {{SVGElement("glyph")}}-Elementen übereinstimmen), die eine Reihe möglicher zweiter Glyphen im Kernenpaar identifizieren.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
