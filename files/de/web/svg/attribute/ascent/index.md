---
title: ascent
slug: Web/SVG/Attribute/ascent
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{deprecated_header}}

Das **`ascent`**-Attribut definiert die maximale Höhe der Schriftart ohne Akzent im Koordinatensystem der Schriftart.

Wenn das Attribut nicht angegeben ist, ist die Wirkung so, als wäre das Attribut auf die Differenz zwischen dem {{SVGAttr("units-per-em")}}-Wert und dem {{SVGAttr("vert-origin-y")}}-Wert für die entsprechende Schriftart gesetzt.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## font-face

Für {{SVGElement("font-face")}} definiert `ascent` die maximale Höhe der Schriftart ohne Akzent im Koordinatensystem der Schriftart.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a>
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
