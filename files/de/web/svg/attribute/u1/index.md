---
title: u1
slug: Web/SVG/Attribute/u1
l10n:
  sourceCommit: 611b4528a321b0ab346166ec9afdaaaebeb018ab
---

{{SVGRef}}{{Deprecated_Header}}

Das **`u1`**-Attribut gibt eine Liste von {{Glossary("Unicode")}}-Zeichen an (siehe die Beschreibung des {{SVGAttr("unicode")}}-Attributs des {{SVGElement("glyph")}}-Elements, um zu erfahren, wie einzelne Unicode-Zeichen ausgedrückt werden) und/oder Bereiche von Unicode-Zeichen, die eine Menge von möglichen ersten {{Glossary("glyph")}} in einem Kearning-Paar festlegen.

Wenn ein bestimmtes Unicode-Zeichen innerhalb der Menge mehrere entsprechende `<glyph>`-Elemente hat (d. h., es gibt mehrere `<glyph>`-Elemente mit demselben `unicode`-Attributwert, aber unterschiedlichen {{SVGAttr("glyph-name")}}-Werten), dann sind alle diese Glyphen in der Menge enthalten. Das Trennzeichen ist das Komma; um ein Komma zu kernieren, geben Sie das Komma als Teil eines Bereichs von Unicode-Zeichen oder als Glyphenname mit dem {{SVGAttr("g1")}}-Attribut an. Die Gesamtheit möglicher erster Glyphen in dem Kearning-Paar ist die Vereinigung der durch die `u1`- und `g1`-Attribute angegebenen Glyphen.

## Elemente

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("hkern")}}
- {{SVGElement("vkern")}}

## Verwendungshinweise

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
  - : Dieser Wert gibt eine durch Kommas getrennte Sequenz von Unicode-Zeichen und/oder Bereichen von Unicode-Zeichen an, die eine Menge von möglichen ersten Glyphen in einem Kearning-Paar bestimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
