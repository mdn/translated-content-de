---
title: <annotation>
slug: Web/MathML/Reference/Element/annotation
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<annotation>`** [MathML](/de/docs/Web/MathML)-Element enthält eine Annotation für den MathML-Ausdruck in einem textuellen Format, zum Beispiel [LaTeX](https://www.latex-project.org/).

> [!NOTE]
> Annotationen sollen von Browsern nicht gerendert werden und sind standardmäßig ausgeblendet. Firefox und Safari rendern jedoch einige Annotationen-Formate, wenn das erste Kind des {{mathmlelement("semantics")}}-Elements Fehler enthält oder fehlt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden spezifischen Attribute:

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
