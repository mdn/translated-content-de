---
title: u2
slug: Web/SVG/Attribute/u2
l10n:
  sourceCommit: f5656e96eef40ef1d8694a4c04d5768c4df5cb2d
---

{{SVGRef}}{{Deprecated_Header}}

Das **`u2`**-Attribut gibt eine Liste von {{Glossary("Unicode")}}-Zeichen an (siehe die Beschreibung des {{SVGAttr("unicode")}}-Attributs des {{SVGElement("glyph")}}-Elements für eine Beschreibung, wie einzelne Unicode-Zeichen ausgedrückt werden) und/oder Bereiche von Unicode-Zeichen, die eine Menge möglicher zweiter {{Glossary("glyph")}} in einem Kerning-Paar identifizieren.

Wenn ein gegebenes Unicode-Zeichen innerhalb der Menge mehrere entsprechende `<glyph>`-Elemente hat (d.h. es gibt mehrere `<glyph>`-Elemente mit demselben `unicode`-Attributwert, aber unterschiedlichen {{SVGAttr("glyph-name")}}-Werten), dann werden alle diese Glyphen in die Menge eingeschlossen. Das Trennzeichen ist das Komma; um ein Komma zu kern, geben Sie das Komma als Teil eines Bereichs von Unicode-Zeichen oder als Glyphenname mit dem {{SVGAttr("g2")}}-Attribut an. Die gesamte Menge möglicher zweiter Glyphen im Kerning-Paar ist die Vereinigung der Glyphen, die durch die `u2`- und `g2`-Attribute spezifiziert werden.

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
        <a href="/de/docs/Web/CSS/Value_definition_syntax#brackets">[</a>
        <code>&#x3C;character></code>
        <a href="/de/docs/Web/CSS/Value_definition_syntax#single_bar">|</a>
        <code>&#x3C;urange></code>
        <a href="/de/docs/Web/CSS/Value_definition_syntax#brackets">]</a
        ><a href="/de/docs/Web/CSS/Value_definition_syntax#hash_mark"
          >#</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `[ <character> | <urange> ]#`
  - : Dieser Wert gibt eine kommagetrennte Sequenz von Unicode-Zeichen und/oder Bereichen von Unicode-Zeichen an, die eine Menge möglicher zweiter Glyphen in einem Kerning-Paar identifizieren.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
