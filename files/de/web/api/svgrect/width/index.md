---
title: "SVGRect: width-Eigenschaft"
short-title: width
slug: Web/API/SVGRect/width
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGRect`](/de/docs/Web/API/SVGRect)-Schnittstelle ist ein Alias für die [`DOMRect.width`](/de/docs/Web/API/DOMRect/width)-Eigenschaft. Sie beschreibt die horizontale Größe des Elements. Sie spiegelt das {{SVGattr("width")}}-Attribut des SVG-Elements und die CSS-{{cssxref("width")}}-Eigenschaft wider.

Die Breite ist eine Länge; sie ist der Abstand von der linken Seite des Elements bis zur rechten Seite des Elements im Benutzerkoordinatensystem. Ihre Syntax entspricht der von [`<length>`](/de/docs/Web/SVG/Content_type#length).

## Nutzungskontext

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>width</th>
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

- [`DOMRect.width`](/de/docs/Web/API/DOMRect/width)
- [`SVGRect.height`](/de/docs/Web/API/SVGRect/height)
