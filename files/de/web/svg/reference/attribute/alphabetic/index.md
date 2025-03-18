---
title: alphabetic
slug: Web/SVG/Reference/Attribute/alphabetic
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{deprecated_header}}

Das Attribut **`alphabetic`** definiert die untere Grundlinie einer Schriftart. Es hat die gleiche Syntax und Semantik wie der Deskriptor {{cssxref("@font-face/baseline", "baseline")}} innerhalb eines {{cssxref("@font-face")}}.

Für horizontal orientierte Glyphenlayouts gibt es das Ausrichtungskoordinatensystem für Glyphen an, um die {{Glossary("/Baseline/Typography", "alphabetische Grundlinie")}} auszurichten. Der Wert ist ein Versatz im Koordinatensystem der Schriftart.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font-face")}}

## Anwendungshinweise

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
