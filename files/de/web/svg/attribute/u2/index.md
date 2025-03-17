---
title: u2
slug: Web/SVG/Attribute/u2
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{SVGRef}}{{Deprecated_Header}}

Das **`u2`** Attribut spezifiziert eine Liste von {{Glossary("Unicode", "Unicode")}}-Zeichen (siehe die Beschreibung des {{SVGAttr("unicode")}} Attributs des {{SVGElement("glyph")}} Elements für eine Beschreibung, wie einzelne Unicode-Zeichen ausgedrückt werden) und/oder Bereiche von Unicode-Zeichen, die ein Set von möglichen zweiten {{Glossary("glyph", "Glyphen")}} in einem Kerning-Paar identifizieren.

Wenn ein gegebenes Unicode-Zeichen innerhalb des Sets mehrere entsprechende `<glyph>` Elemente hat (d.h. es gibt mehrere `<glyph>` Elemente mit demselben `unicode` Attributwert aber unterschiedlichen {{SVGAttr("glyph-name")}} Werten), dann sind alle diese Glyphen im Set enthalten. Das Komma ist das Trennzeichen; um ein Komma zu kerning, spezifizieren Sie das Komma als Teil eines Bereichs von Unicode-Zeichen oder als Glyphenname mit Hilfe des {{SVGAttr("g2")}} Attributs. Das gesamte Set möglicher zweiter Glyphen im Kerning-Paar ist die Vereinigung der durch die Attribute `u2` und `g2` spezifizierten Glyphen.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("hkern")}}
- {{SVGElement("vkern")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#brackets">[</a>
        <code>&#x3C;character></code>
        <a href="/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#single_bar">|</a>
        <code>&#x3C;urange></code>
        <a href="/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#brackets">]</a
        ><a href="/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#hash_mark"
          >#</a
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

- `[ <character> | <urange> ]#`
  - : Dieser Wert gibt eine durch Kommas getrennte Sequenz von Unicode-Zeichen und/oder Bereichen von Unicode-Zeichen an, die ein Set von möglichen zweiten Glyphen in einem Kerning-Paar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
