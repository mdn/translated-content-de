---
title: <annotation>
slug: Web/MathML/Element/annotation
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<annotation>`** [MathML](/de/docs/Web/MathML) Element enthält eine Annotation der MathML-Ausdruck in einem textuellen Format, zum Beispiel [LaTeX](https://www.latex-project.org/).

> [!NOTE]
> Annotationen sind nicht dazu gedacht, von Browsern dargestellt zu werden und sind standardmäßig verborgen. Allerdings rendern Firefox und Safari einige Annotationformate, falls das erste Kind des {{mathmlelement("semantics")}} Elements Fehler enthält oder fehlt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `encoding`
  - : Die Kodierung der semantischen Informationen in der Annotation (z.B. `"application/x-tex"`)
- `src` {{deprecated_inline}}
  - : Der Ort einer externen Quelle für semantische Informationen.

## Beispiel

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

```html
<math display="block">
  <semantics>
    <!-- The first child is the MathML expression rendered by default. -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!-- Annotate with LaTeX, a lightweight markup language. -->
    <annotation encoding="application/x-tex">x^{2} + y</annotation>
  </semantics>
</math>
```

{{ EmbedLiveSample('example', 700, 200, "", "") }}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
