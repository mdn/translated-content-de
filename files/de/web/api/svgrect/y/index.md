---
title: "SVGRect: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGRect/y
l10n:
  sourceCommit: 3ae7f380c04096191376ffc2b455471e5d5fd8a8
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft der [`SVGRect`](/de/docs/Web/API/SVGRect)-Schnittstelle ist ein Alias für die [`DOMRect.y`](/de/docs/Web/API/DOMRect/y)-Eigenschaft. Sie beschreibt die vertikale Koordinate der Position des Elements. Sie spiegelt das {{SVGattr("y")}}-Attribut des SVG-Elements und die CSS-{{cssxref("y")}}-Eigenschaft wider.

Ein `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der relevanten Achse (der y-Achse für Y-Koordinaten, der x-Achse für X-Koordinaten) darstellt. Die Syntax ist dieselbe wie für [`<length>`](/de/docs/Web/SVG/Content_type#length).

## Verwendungskontext

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>y</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wert</td>
      <td>
        <code>
        <a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a
        > | <a href="/de/docs/Web/SVG/Content_type#percentage"
          >&#x3C;percentage></a
        >
        </code>
      </td>
    </tr>
    <tr>
      <td>Initial</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Anwendbar auf</td>
      <td>
        {{ SVGElement("mask") }},
        {{ SVGElement("svg") }},
        {{ SVGElement("rect") }},
        {{ SVGElement("image") }},
        {{ SVGElement("foreignObject") }}
      </td>
    </tr>
    <tr>
      <td>Vererbt</td>
      <td>nein</td>
    </tr>
    <tr>
      <td>Prozentangaben</td>
      <td>
        beziehen sich auf die Größe des SVG-Anzeigebereichs
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect.y`](/de/docs/Web/API/DOMRect/y)
- [`SVGRect.x`](/de/docs/Web/API/SVGRect/x)
