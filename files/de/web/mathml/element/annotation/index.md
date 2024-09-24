---
title: <annotation>
slug: Web/MathML/Element/annotation
l10n:
  sourceCommit: 88171d31074babf2bf3b1ad59ed7933d886dd37f
---

{{MathMLRef}}

Das **`<annotation>`** [MathML](/de/docs/Web/MathML)-Element enthält eine Annotation zu dem MathML-Ausdruck in einem textuellen Format, zum Beispiel [LaTeX](https://www.latex-project.org/).

> [!NOTE]
> Annotationen sollen von Browsern nicht gerendert werden und sind standardmäßig verborgen. Allerdings rendern Firefox und Safari einige Annotationsformate, wenn das erste Kind des {{mathmlelement("semantics")}}-Elements Fehler enthält oder fehlt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `encoding`
  - : Die Kodierung der semantischen Informationen in der Annotation (z.B. `"application/x-tex"`)
- `src` {{deprecated_inline}}
  - : Der Speicherort einer externen Quelle für semantische Informationen.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
