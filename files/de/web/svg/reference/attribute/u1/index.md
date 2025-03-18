---
title: u1
slug: Web/SVG/Reference/Attribute/u1
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`u1`**-Attribut gibt eine Liste von {{Glossary("Unicode", "Unicode")}}-Zeichen an (siehe die Beschreibung des {{SVGAttr("unicode")}}-Attributs des {{SVGElement("glyph")}}-Elements, um zu erfahren, wie man einzelne Unicode-Zeichen ausdrückt) und/oder Bereiche von Unicode-Zeichen, die eine Menge von möglichen ersten {{Glossary("glyph", "Glyphen")}} in einem Kerningpaar identifizieren.

Wenn ein bestimmtes Unicode-Zeichen innerhalb der Menge mehrere entsprechende `<glyph>`-Elemente hat (d.h. es gibt mehrere `<glyph>`-Elemente mit demselben `unicode`-Attributwert, aber unterschiedlichen {{SVGAttr("glyph-name")}}-Werten), dann sind alle diese Glyphen in der Menge enthalten. Das Trennzeichenzeichen ist das Komma; um also ein Komma zu kernen, geben Sie das Komma als Teil eines Bereichs von Unicode-Zeichen oder als Glyphenname mit dem {{SVGAttr("g1")}}-Attribut an. Die gesamte Menge der möglichen ersten Glyphen im Kerningpaar ist die Vereinigung der Glyphen, die durch die `u1`- und `g1`-Attribute angegeben sind.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("hkern")}}
- {{SVGElement("vkern")}}

## Verwendungshinweise

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
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `[ <character> | <urange> ]#`
  - : Dieser Wert gibt eine durch Komma separierte Sequenz von Unicode-Zeichen und/oder Bereichen von Unicode-Zeichen an, die eine Menge von möglichen ersten Glyphen in einem Kerningpaar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
