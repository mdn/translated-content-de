---
title: name
slug: Web/SVG/Reference/Attribute/name
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`name`** Attribut gibt entweder den Namen eines Farbprofils oder einer Schriftart an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{ SVGElement("font-face-name") }}

## font-face-name

Für {{SVGElement("font-face-name")}} definiert `name` den Namen der Schriftart.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;name></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<name>`
  - : Dieser Wert spezifiziert den Namen einer lokalen Schriftart. Anders als bei der Syntax, die zwischen den Klammern der `local(…)` Klausel in einem [`@font-face` Regel `src`](/de/docs/Web/CSS/@font-face/src) Deskriptor erlaubt ist, wird der in diesem Attribut angegebene Schriftname nicht in einfache oder doppelte Anführungszeichen gesetzt.

## Spezifikationen

{{Specifications}}
