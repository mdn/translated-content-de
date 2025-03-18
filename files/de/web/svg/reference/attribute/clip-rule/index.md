---
title: clip-rule
slug: Web/SVG/Reference/Attribute/clip-rule
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut `clip-rule` gilt nur für Grafikelemente, die innerhalb eines {{ SVGElement("clipPath") }}-Elements enthalten sind. Das Attribut `clip-rule` funktioniert im Grunde wie das Attribut {{ SVGAttr("fill-rule") }}, außer dass es auf {{ SVGElement("clipPath") }}-Definitionen angewendet wird.

> [!NOTE]
> Als Präsentationsattribut hat `clip-rule` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("clip-rule")}}. Wenn beide spezifiziert sind, hat die CSS-Eigenschaft Vorrang.

Der folgende Codeausschnitt sorgt dafür, dass eine evenodd-Ausschneidungsregel auf den Ausschneidungspfad angewendet wird, da `clip-rule` auf dem {{ SVGElement("path") }}-Element angegeben ist, das die Ausschneideform definiert:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#MyClip)" ... />
</g>
```

während der folgende Codeausschnitt keine evenodd-Ausschneidungsregel anwenden wird, da `clip-rule` auf dem referenzierenden Element und nicht auf dem Objekt angegeben ist, das die Ausschneideform definiert:

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

Die folgenden Elemente können das Attribut `clip-rule` verwenden, aber nur, wenn sie sich innerhalb eines {{ SVGElement("clipPath") }}-Elements befinden.

- [Grafikelemente](/de/docs/Web/SVG/Reference/Element#graphics_elements)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGElement("clipPath") }}
- CSS {{cssxref("clip-rule")}}-Eigenschaft
