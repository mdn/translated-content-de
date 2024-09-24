---
title: "SVGRect: x-Eigenschaft"
short-title: x
slug: Web/API/SVGRect/x
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("SVG")}}

Die [x](https://svgwg.org/svg2-draft/geometry.html#XProperty) Eigenschaft beschreibt die horizontale Koordinate der Position des Elements.

## Verwendungskontext

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>x</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wert</td>
      <td>
        <a href="https://www.w3.org/TR/css3-values/#lengths">&#x3C;length></a
        > | <a href="https://www.w3.org/TR/css3-values/#percentages"
          >&#x3C;percentage></a
        >
      </td>
    </tr>
    <tr>
      <td>Initialwert</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Gilt für</td>
      <td>
        {{ SVGElement("mask") }}, '<a
          href="https://svgwg.org/svg2-draft/struct.html#SVGElement"
          >svg</a
        >', '<a href="https://svgwg.org/svg2-draft/shapes.html#RectElement"
          >rect</a
        >', '<a href="https://svgwg.org/svg2-draft/embedded.html#ImageElement"
          >image</a
        >', '<a
          href="https://svgwg.org/svg2-draft/embedded.html#ForeignObjectElement"
          >foreignObject</a
        >'
      </td>
    </tr>
    <tr>
      <td>Vererbbar</td>
      <td>nein</td>
    </tr>
    <tr>
      <td>Prozentsätze</td>
      <td>
        beziehen sich auf die Größe des aktuellen Ansichtsfensters (siehe <a
          href="https://svgwg.org/svg2-draft/coords.html#Units"
          >Einheiten</a
        >)
      </td>
    </tr>
    <tr>
      <td>Medien</td>
      <td>visuell</td>
    </tr>
    <tr>
      <td>Berechneter Wert</td>
      <td>absolute Länge oder Prozentsatz</td>
    </tr>
    <tr>
      <td>Animierbar</td>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Einfache Verwendung

Ein \<coordinate> ist eine Länge im Benutzerskoordinatensystem, die die angegebene Entfernung vom Ursprung des Benutzerskoordinatensystems entlang der entsprechenden Achse ist (die x-Achse für X-Koordinaten, die y-Achse für Y-Koordinaten). Die Syntax ist dieselbe wie für [\<length>](https://www.w3.org/TR/SVG11/types.html#DataTypeLength).

```html
<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="0" width="40" height="40" fill="blue"></rect>
</svg>

<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="0" width="40" height="40" fill="green"></rect>
</svg>
```

{{EmbedLiveSample("Simple usage", "100%", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
