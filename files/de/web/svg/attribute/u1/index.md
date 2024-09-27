---
title: u1
slug: Web/SVG/Attribute/u1
l10n:
  sourceCommit: 611b4528a321b0ab346166ec9afdaaaebeb018ab
---

{{SVGRef}}{{Deprecated_Header}}

Das **`u1`** Attribut spezifiziert eine Liste von [Unicode](/de/docs/Glossary/Unicode)-Zeichen (verweisen Sie auf die Beschreibung des {{SVGAttr("unicode")}} Attributs des {{SVGElement("glyph")}} Elements für eine Beschreibung, wie einzelne Unicode-Zeichen ausgedrückt werden) und/oder Bereiche von Unicode-Zeichen, die eine Menge von möglichen ersten [glyph](/de/docs/Glossary/glyph) in einem Kerning-Paar identifizieren.

Wenn ein gegebenes Unicode-Zeichen innerhalb der Menge mehrere entsprechende `<glyph>` Elemente hat (d.h. es gibt mehrere `<glyph>` Elemente mit demselben `unicode` Attributwert, aber unterschiedlichen {{SVGAttr("glyph-name")}} Werten), dann werden alle solche glyphs in die Menge aufgenommen. Ein Komma ist das Trennzeichen; daher, um ein Komma zu kerneln, spezifizieren Sie das Komma als Teil eines Bereichs von Unicode-Zeichen oder als glyph-Name unter Verwendung des {{SVGAttr("g1")}} Attributs. Die gesamte Menge der möglichen ersten glyphs in dem Kerning-Paar ist die Vereinigung von glyphs, die durch die `u1` und `g1` Attribute spezifiziert werden.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("hkern")}}
- {{SVGElement("vkern")}}

## Hinweise zur Verwendung

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
  - : Dieser Wert gibt eine kommagetrennte Sequenz von Unicode-Zeichen und/oder Bereichen von Unicode-Zeichen an, die eine Menge von möglichen ersten glyphs in einem Kerning-Paar identifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
