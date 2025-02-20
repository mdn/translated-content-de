---
title: clip-rule
slug: Web/SVG/Attribute/clip-rule
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das Attribut `clip-rule` gilt nur für Grafikelemente, die sich innerhalb eines {{ SVGElement("clipPath") }}-Elements befinden. Das Attribut `clip-rule` funktioniert im Wesentlichen wie das Attribut {{ SVGAttr("fill-rule") }}, mit dem Unterschied, dass es auf Definitionen von {{ SVGElement("clipPath") }} angewendet wird.

> [!NOTE]
> Als Präsentationsattribut hat `clip-rule` auch ein entsprechendes CSS-Property: {{cssxref("clip-rule")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Der folgende Codeausschnitt bewirkt, dass eine "evenodd"-Clipping-Regel auf den Clipping-Pfad angewendet wird, da `clip-rule` auf dem {{ SVGElement("path") }}-Element spezifiziert ist, das die Clipping-Form definiert:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#MyClip)" ... />
</g>
```

Hingegen wird der folgende Codeausschnitt keine "evenodd"-Clipping-Regel anwenden, da `clip-rule` auf dem referenzierenden Element angegeben ist und nicht auf dem Objekt, das die Clipping-Form definiert:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." />
  </clipPath>
  <rect clip-path="url(#MyClip)" clip-rule="evenodd" ... />
</g>
```

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

Die folgenden Elemente können das Attribut `clip-rule` verwenden, allerdings nur, wenn sie sich innerhalb eines {{ SVGElement("clipPath") }}-Elements befinden.

- [Grafikelemente](/de/docs/Web/SVG/Element#graphics_elements)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGElement("clipPath") }}
- CSS {{cssxref("clip-rule")}}-Eigenschaft
