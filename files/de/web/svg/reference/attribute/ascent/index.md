---
title: ascent
slug: Web/SVG/Reference/Attribute/ascent
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{deprecated_header}}

Das **`ascent`**-Attribut definiert die maximale Höhe ohne Akzent des Zeichensatzes im Koordinatensystem des Fonts.

Falls das Attribut nicht angegeben ist, entspricht der Effekt dem, als ob das Attribut auf die Differenz zwischen dem Wert von {{SVGAttr("units-per-em")}} und dem Wert von {{SVGAttr("vert-origin-y")}} für den entsprechenden Font gesetzt wäre.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font-face")}}

## font-face

Für {{SVGElement("font-face")}} definiert `ascent` die maximale Höhe ohne Akzent des Zeichensatzes im Koordinatensystem des Fonts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        Differenz zwischen {{SVGAttr("units-per-em")}} und
        {{SVGAttr("vert-origin-y")}}
      </td>
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
