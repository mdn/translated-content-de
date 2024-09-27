---
title: clip-rule
slug: Web/SVG/Attribute/clip-rule
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{SVGRef}}

« [SVG-Attributreferenz Startseite](/de/docs/Web/SVG/Attribute)

Das `clip-rule`-Attribut gilt nur für Grafikelemente, die in einem {{ SVGElement("clipPath") }}-Element enthalten sind. Das `clip-rule`-Attribut funktioniert im Wesentlichen wie das {{ SVGAttr("fill-rule") }}-Attribut, außer dass es für {{ SVGElement("clipPath") }}-Definitionen gilt.

Der folgende Codeausschnitt sorgt dafür, dass eine ungerade-gerade Clipping-Regel auf den Clipping-Pfad angewendet wird, weil `clip-rule` auf dem {{ SVGElement("path") }}-Element angegeben ist, das die Clipping-Form definiert:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#MyClip)" ... />
</g>
```

während der folgende Codeausschnitt keine ungerade-gerade Clipping-Regel bewirkt, da `clip-rule` auf dem referenzierenden Element angegeben ist, nicht auf dem Objekt, das die Clipping-Form definiert:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." />
  </clipPath>
  <rect clip-path="url(#MyClip)" clip-rule="evenodd" ... />
</g>
```

Als Präsentationsattribut kann es auch direkt in einem CSS-Stylesheet als Eigenschaft verwendet werden.

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>nonzero | evenodd | inherit</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>nonzero</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- nonzero
  - : Siehe Beschreibung der {{ SVGAttr("fill-rule") }}-Eigenschaft.
- evenodd
  - : Siehe Beschreibung der {{ SVGAttr("fill-rule") }}-Eigenschaft.

## Beispiel

```html
<svg
  width="100"
  viewBox="0 0 100 90"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <!-- Define star path -->
  <defs>
    <path d="M50,0 21,90 98,35 2,35 79,90z" id="star" />
  </defs>

  <!-- Left: evenodd -->
  <clipPath id="emptyStar">
    <use href="#star" clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#emptyStar)" width="50" height="90" fill="blue" />

  <!-- Right: nonzero -->
  <clipPath id="filledStar">
    <use href="#star" clip-rule="nonzero" />
  </clipPath>
  <rect clip-path="url(#filledStar)" width="50" height="90" x="50" fill="red" />
</svg>
```

{{ EmbedLiveSample('Example', '100%', '110') }}

## Elemente

Die folgenden Elemente können das `clip-rule`-Attribut verwenden, jedoch nur, wenn sie sich in einem {{ SVGElement("clipPath") }}-Element befinden.

- [Grafikelemente](/de/docs/Web/SVG/Element#graphics_elements)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGElement("clipPath") }}
- CSS {{cssxref("clip-rule")}}-Eigenschaft
