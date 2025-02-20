---
title: "SVGRect: height-Eigenschaft"
short-title: height
slug: Web/API/SVGRect/height
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGRect`](/de/docs/Web/API/SVGRect)-Schnittstelle ist ein Alias für die [`DOMRect.height`](/de/docs/Web/API/DOMRect/height)-Eigenschaft. Sie beschreibt die vertikale Größe des Elements. Sie spiegelt das {{SVGattr("height")}}-Attribut des SVG-Elements und die CSS-{{cssxref("height")}}-Eigenschaft wider.

Die Höhe ist eine Länge; sie ist der Abstand vom oberen Ende des Elements bis zum unteren Ende im Benutzerkoordinatensystem. Ihre Syntax ist dieselbe wie für [`<length>`](/de/docs/Web/SVG/Content_type#length).

## Nutzungskontext

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
      <td>Prozentsätze</td>
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
