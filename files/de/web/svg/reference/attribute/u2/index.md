---
title: u2
slug: Web/SVG/Reference/Attribute/u2
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`u2`**-Attribut gibt eine Liste von {{Glossary("Unicode", "Unicode")}}-Zeichen an (siehe die Beschreibung des {{SVGAttr("unicode")}}-Attributs des {{SVGElement("glyph")}}-Elements für eine Beschreibung, wie individuelle Unicode-Zeichen ausgedrückt werden) und/oder Bereiche von Unicode-Zeichen, die eine Menge möglicher zweiter {{Glossary("glyph", "Glyphen")}} in einem Kerning-Paar identifizieren.

Wenn ein gegebenes Unicode-Zeichen innerhalb der Menge mehrere entsprechende `<glyph>`-Elemente hat (d.h. es gibt mehrere `<glyph>`-Elemente mit demselben `unicode`-Attributwert, aber unterschiedlichen {{SVGAttr("glyph-name")}}-Werten), dann sind alle solchen Glyphen in der Menge enthalten. Ein Komma ist das Trennzeichen; um ein Komma zu kernen, geben Sie das Komma als Teil eines Unicode-Zeichenbereichs oder als Glyphenname unter Verwendung des {{SVGAttr("g2")}}-Attributs an. Die Gesamtmenge der möglichen zweiten Glyphen im Kerning-Paar ist die Vereinigung der durch die `u2`- und `g2`-Attribute angegebenen Glyphen.

## Elemente

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  - : Dieser Wert gibt eine kommagetrennte Sequenz von Unicode-Zeichen und/oder Bereichen von Unicode-Zeichen an, die eine Menge möglicher zweiter Glyphen in einem Kerning-Paar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
