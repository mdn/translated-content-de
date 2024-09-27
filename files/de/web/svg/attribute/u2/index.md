---
title: u2
slug: Web/SVG/Attribute/u2
l10n:
  sourceCommit: f5656e96eef40ef1d8694a4c04d5768c4df5cb2d
---

{{SVGRef}}{{Deprecated_Header}}

Das **`u2`**-Attribut gibt eine Liste von [Unicode](/de/docs/Glossary/Unicode)-Zeichen an (sehen Sie sich die Beschreibung des {{SVGAttr("unicode")}}-Attributs des {{SVGElement("glyph")}}-Elements an, um zu erfahren, wie einzelne Unicode-Zeichen ausgedrückt werden) und/oder Bereiche von Unicode-Zeichen, die eine Gruppe möglicher zweiter [glyph](/de/docs/Glossary/glyph) in einem Kerning-Paar identifizieren.

Wenn ein gegebenes Unicode-Zeichen innerhalb der Gruppe mehrere entsprechende `<glyph>`-Elemente hat (d. h., es gibt mehrere `<glyph>`-Elemente mit demselben `unicode`-Attributwert, aber unterschiedlichen {{SVGAttr("glyph-name")}}-Werten), dann sind alle diese Glyphen in der Gruppe enthalten. Das Trennzeichen ist das Komma; daher geben Sie ein Komma als Teil eines Bereichs von Unicode-Zeichen oder als Glyphenname unter Verwendung des {{SVGAttr("g2")}}-Attributs an. Die Gesamtheit der möglichen zweiten Glyphen im Kerning-Paar ist die Vereinigung der durch die `u2`- und `g2`-Attribute angegebenen Glyphen.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `[ <character> | <urange> ]#`
  - : Dieser Wert gibt eine durch Kommas getrennte Sequenz von Unicode-Zeichen und/oder Bereichen von Unicode-Zeichen an, die eine Gruppe möglicher zweiter Glyphen in einem Kerning-Paar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
