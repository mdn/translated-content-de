---
title: "SVGRect: height-Eigenschaft"
short-title: height
slug: Web/API/SVGRect/height
l10n:
  sourceCommit: 3ae7f380c04096191376ffc2b455471e5d5fd8a8
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft des [`SVGRect`](/de/docs/Web/API/SVGRect)-Interfaces ist ein Alias für die [`DOMRect.height`](/de/docs/Web/API/DOMRect/height)-Eigenschaft. Sie beschreibt die vertikale Größe des Elements. Sie spiegelt das {{SVGattr("height")}}-Attribut des SVG-Elements und die CSS-{{cssxref("height")}}-Eigenschaft wider.

Die Höhe ist eine Länge; es ist der Abstand von der Oberseite des Elements zur Unterseite des Elements im Benutzerkoordinatensystem. Ihre Syntax ist dieselbe wie die für [`<length>`](/de/docs/Web/SVG/Content_type#length).

## Verwendungskontext

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>height</th>
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
      <td>Gilt für</td>
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
      <td>Prozentwerte</td>
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

- [`DOMRect.height`](/de/docs/Web/API/DOMRect/height)
- [`SVGRect.width`](/de/docs/Web/API/SVGRect/width)
