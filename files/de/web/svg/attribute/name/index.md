---
title: name
slug: Web/SVG/Attribute/name
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`name`**-Attribut gibt entweder den Namen eines Farbprofils oder eines Schriftschnitts an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{ SVGElement("font-face-name") }}

## font-face-name

Für {{SVGElement("font-face-name")}} definiert `name` den Namen des Schriftschnitts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;name></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<name>`
  - : Dieser Wert gibt den Namen einer lokalen Schriftart an. Im Gegensatz zur Syntax, die in den Klammern der `local(…)`-Klausel in einem [`@font-face`-Regel `src`](/de/docs/Web/CSS/@font-face/src) Deskriptor erlaubt ist, wird der im Attribut angegebene Schriftname nicht in einfachen oder doppelten Anführungszeichen eingeschlossen.

## Spezifikationen

{{Specifications}}
