---
title: alphabetic
slug: Web/SVG/Attribute/alphabetic
l10n:
  sourceCommit: 0a4d5b451cc54599ed2b99cef4fdd39c3fd96a3d
---

{{SVGRef}}{{deprecated_header}}

Das **`alphabetic`** Attribut definiert die untere Grundlinie einer Schriftart. Es hat die gleiche Syntax und Semantik wie der {{cssxref("@font-face/baseline", "baseline")}} Deskriptor innerhalb eines {{cssxref("@font-face")}}.

Für horizontal ausgerichtete Glyphenlayouts gibt es die Ausrichtungskoordinate für Glyphen an, um eine {{Glossary("/Baseline/Typography", "alphabetische Grundlinie")}} zu erreichen. Der Wert ist ein Offset im Schriftart-Koordinatensystem.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font-face")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("v-alphabetic")}}
