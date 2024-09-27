---
title: g1-Attribut
slug: Web/SVG/Attribute/g1
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}{{Deprecated_Header}}

Das **`g1`**-Attribut gibt eine Liste von Glypennamen an, die eine Menge möglicher erster Glyphen im Kerning-Paar identifizieren.

Alle Glyphen mit dem angegebenen Glyphennamen sind in der Menge enthalten. Die gesamte Menge möglicher erster Glyphen im Kerning-Paar ist die Vereinigung von Glyphen, die durch die Attribute {{SVGAttr("u1")}} und `g1` angegeben sind.

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
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<name>#`
  - : Dieser Wert gibt eine durch Kommas getrennte Sequenz von Glypennamen an (d. h. Werte, die den {{SVGAttr("glyph-name")}}-Attributen auf {{SVGElement("glyph")}}-Elementen entsprechen), die eine Menge möglicher erster Glyphen im Kerning-Paar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
