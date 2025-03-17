---
title: u1
slug: Web/SVG/Attribute/u1
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{SVGRef}}{{Deprecated_Header}}

Das **`u1`**-Attribut gibt eine Liste von {{Glossary("Unicode", "Unicode")}}-Zeichen an (siehe die Beschreibung des {{SVGAttr("unicode")}}-Attributs des {{SVGElement("glyph")}}-Elements für eine Beschreibung, wie einzelne Unicode-Zeichen ausgedrückt werden) und/oder Bereiche von Unicode-Zeichen, die einen Satz möglicher erster {{Glossary("glyph", "glyph")}} in einem Kerning-Paar identifizieren.

Wenn ein bestimmtes Unicode-Zeichen innerhalb des Satzes mehreren entsprechenden `<glyph>`-Elementen zugeordnet ist (d.h. es gibt mehrere `<glyph>`-Elemente mit demselben `unicode`-Attributwert, aber unterschiedlichen {{SVGAttr("glyph-name")}}-Werten), dann sind alle diese Glyphen in dem Satz enthalten. Das Trennzeichen ist das Komma; um einen Kuppelpunkt zu trennen, geben Sie das Komma als Teil eines Bereichs von Unicode-Zeichen oder als Glyphennamen mit dem {{SVGAttr("g1")}}-Attribut an. Die Gesamtheit der möglichen ersten Glyphen im Kerning-Paar ist die Vereinigung der Glyphen, die durch die `u1`- und `g1`-Attribute spezifiziert sind.

## Elemente

Dieses Attribut kann mit folgenden SVG-Elementen verwendet werden:

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
  - : Dieser Wert gibt eine kommagetrennte Folge von Unicode-Zeichen und/oder Bereichen von Unicode-Zeichen an, die einen Satz möglicher erster Glyphen in einem Kerning-Paar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
