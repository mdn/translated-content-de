---
title: clip-rule
slug: Web/SVG/Reference/Attribute/clip-rule
l10n:
  sourceCommit: 04a0e78cf3119afe2a99e6449f6b74976654d69d
---

Das Attribut `clip-rule` gilt nur für Grafikelemente innerhalb eines {{ SVGElement("clipPath") }}-Elements. Es funktioniert im Wesentlichen wie das Attribut {{ SVGAttr("fill-rule") }}, wird jedoch auf {{ SVGElement("clipPath") }}-Definitionen angewendet.

> [!NOTE]
> Als Präsentationsattribut hat `clip-rule` auch eine entsprechende CSS-Eigenschaft: {{cssxref("clip-rule")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Das folgende Codefragment bewirkt, dass die Clipping-Regel `evenodd` auf den Clipping-Pfad angewendet wird, da `clip-rule` auf dem {{ SVGElement("path") }}-Element angegeben ist, das die Clipping-Form definiert:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#MyClip)" ... />
</g>
```

Das folgende Codefragment bewirkt dagegen **nicht**, dass die Clipping-Regel `evenodd` angewendet wird, da `clip-rule` auf dem referenzierenden Element und nicht auf dem Objekt angegeben ist, das die Clipping-Form definiert:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." />
  </clipPath>
  <rect clip-path="url(#MyClip)" clip-rule="evenodd" ... />
</g>
```

## Elemente

Die folgenden Elemente können das Attribut `clip-rule` verwenden, jedoch nur, wenn sie sich innerhalb eines {{ SVGElement("clipPath") }}-Elements befinden.

- [Grafikelemente](/de/docs/Web/SVG/Reference/Element#graphics_elements)

## Beispiel

```html
<svg width="100" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
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
  - : Siehe die Beschreibung der Eigenschaft {{ SVGAttr("fill-rule") }}.
- evenodd
  - : Siehe die Beschreibung der Eigenschaft {{ SVGAttr("fill-rule") }}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGElement("clipPath") }}
- CSS-Eigenschaft {{cssxref("clip-rule")}}
