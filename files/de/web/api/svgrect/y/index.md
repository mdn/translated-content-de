---
title: "SVGRect: y-Eigenschaft"
short-title: y
slug: Web/API/SVGRect/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft des [`SVGRect`](/de/docs/Web/API/SVGRect)-Interfaces ist ein Alias für die [`DOMRect.y`](/de/docs/Web/API/DOMRect/y)-Eigenschaft. Sie beschreibt die vertikale Koordinate der Position des Elements. Sie spiegelt das {{SVGattr("y")}}-Attribut des SVG-Elements und die CSS-{{cssxref("y")}}-Eigenschaft wider.

Ein `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der entsprechenden Achse (der y-Achse für Y-Koordinaten, der x-Achse für X-Koordinaten) darstellt. Seine Syntax entspricht der von [`<length>`](/de/docs/Web/SVG/Content_type#length).

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
      <td>Initialwert</td>
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
        beziehen sich auf die Größe des SVG-Viewports
      </td>
    </tr>
    <tr>
      <td>Medien</td>
      <td>visuell</td>
    </tr>
    <tr>
      <td>Berechneter Wert</td>
      <td>absolute Länge oder Prozentangabe</td>
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
