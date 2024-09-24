---
title: clip-rule
slug: Web/SVG/Attribute/clip-rule
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{SVGRef}}

« [Übersicht der SVG-Attribute](/de/docs/Web/SVG/Attribute)

Das `clip-rule` Attribut gilt nur für Grafikelemente, die innerhalb eines {{ SVGElement("clipPath") }} Elements enthalten sind. Das `clip-rule` Attribut funktioniert im Wesentlichen wie das {{ SVGAttr("fill-rule") }} Attribut, mit dem Unterschied, dass es sich auf die Definitionen von {{ SVGElement("clipPath") }} bezieht.

Der folgende Codeausschnitt bewirkt, dass eine evenodd-Clipping-Regel auf den Clipping-Pfad angewendet wird, da `clip-rule` am {{ SVGElement("path") }} Element spezifiziert ist, welches die Clipping-Form definiert:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#MyClip)" ... />
</g>
```

Wohingegen der folgende Codeausschnitt nicht dazu führt, dass eine evenodd-Clipping-Regel angewendet wird, da `clip-rule` am referenzierenden Element und nicht am Objekt, das die Clipping-Form definiert, angegeben ist:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." />
  </clipPath>
  <rect clip-path="url(#MyClip)" clip-rule="evenodd" ... />
</g>
```

Als Präsentationsattribut kann es auch direkt innerhalb eines CSS-Stylesheets als Eigenschaft verwendet werden.

## Verwendungshinweise

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
  - : Siehe Beschreibung der {{ SVGAttr("fill-rule") }} Eigenschaft.
- evenodd
  - : Siehe Beschreibung der {{ SVGAttr("fill-rule") }} Eigenschaft.

## Beispiel

```html
<svg
  width="100"
  viewBox="0 0 100 90"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <!-- Sternpfad definieren -->
  <defs>
    <path d="M50,0 21,90 98,35 2,35 79,90z" id="star" />
  </defs>

  <!-- Links: evenodd -->
  <clipPath id="emptyStar">
    <use href="#star" clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#emptyStar)" width="50" height="90" fill="blue" />

  <!-- Rechts: nonzero -->
  <clipPath id="filledStar">
    <use href="#star" clip-rule="nonzero" />
  </clipPath>
  <rect clip-path="url(#filledStar)" width="50" height="90" x="50" fill="red" />
</svg>
```

{{ EmbedLiveSample('Beispiel', '100%', '110') }}

## Elemente

Die folgenden Elemente können das `clip-rule` Attribut verwenden, jedoch nur, wenn sie sich innerhalb eines {{ SVGElement("clipPath") }} Elements befinden.

- [Grafikelemente](/de/docs/Web/SVG/Element#graphics_elements)

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{ SVGElement("clipPath") }}
- CSS {{cssxref("clip-rule")}} Eigenschaft
