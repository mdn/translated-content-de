---
title: name
slug: Web/SVG/Attribute/name
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`name`**-Attribut gibt entweder den Namen eines Farbprofils oder einer Schriftart an.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  - : Dieser Wert spezifiziert den Namen einer lokalen Schriftart. Anders als die Syntax, die innerhalb der Klammern der `local(…)`-Klausel in einem [`@font-face`-Regel-`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor erlaubt ist, ist der in diesem Attribut angegebene Schriftname nicht in einfache oder doppelte Anführungszeichen eingeschlossen.

## Spezifikationen

{{Specifications}}
