---
title: <annotation-xml>
slug: Web/MathML/Element/annotation-xml
l10n:
  sourceCommit: 88171d31074babf2bf3b1ad59ed7933d886dd37f
---

{{MathMLRef}}

Das **`<annotation-xml>`** [MathML](/de/docs/Web/MathML)-Element enthält eine Annotation zum MathML-Ausdruck im {{Glossary("XML", "XML")}}-Format, beispielsweise [Content MathML](https://en.wikipedia.org/wiki/MathML#Content_MathML) oder {{Glossary("SVG", "SVG")}}.

> [!NOTE]
> Annotationen sollen nicht von Browsern gerendert werden und sind standardmäßig ausgeblendet. Allerdings rendern Firefox und Safari einige Annotationsformate, wenn das erste Kind des {{mathmlelement("semantics")}}-Elements Fehler enthält oder fehlt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `encoding`
  - : Die Kodierung der semantischen Information in der Annotation (z.B. `"application/mathml+xml"`, `"application/mathml-presentation+xml"`, `"application/mathml-content+xml"`)
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

    <!--
      Annotate with Content MathML, a dedicated XML dialect
      to express the meaning of mathematical formulas.
    -->
    <annotation-xml encoding="application/mathml-content+xml">
      <apply>
        <plus />
        <apply>
          <power />
          <ci>x</ci>
          <cn type="integer">2</cn>
        </apply>
        <ci>y</ci>
      </apply>
    </annotation-xml>

    <!-- Annotate with SVG, a vector image format. -->
    <annotation-xml encoding="image/svg+xml">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 68">
        <path
          fill="#000"
          d="m20 33-.8-3.5c-1-3.6-2.2-6.5-3.8-8.4h-1l-9.3 1v2l2-.1c4.5 0 5.6 1.7 7.4 7.3l1.9 6-4.8 7c-2.6 3.8-3.8 3.9-4.1 3.9-1.1 0-2.7-.9-4.2-.9-1.6 0-2.6 1.5-2.6 2.8 0 1.7 1 3.3 3.9 3.3 4 0 6.2-3.2 8.3-6.6l4.3-7h.2l1.7 6.8c1 4.3 2.4 6.8 5.5 6.8 4.5 0 7.3-4.5 9.2-7.4l-1.4-1c-1.8 2.3-3 3.6-4.8 3.6-2 0-3.4-2.4-5.2-8.6L21 35.5l4-6.5c1.2-1.8 2.1-2.8 3.6-2.8.9 0 2.4.7 3.5.7a3 3 0 0 0 3-3.1c0-1.9-.7-3-3.3-3-3.9 0-6.6 3.3-8.4 6.5L20.1 33Zm38-10h-1.4c-1 3-1.6 4-4.1 4H46l-3.3.1v-.2l6.2-5.9c5-5 7.6-8.2 7.6-12.3 0-5-3.7-8-9-8-4.5 0-7.7 2.5-9.1 7l1.1.5c1.7-3.5 3.8-4.5 6.8-4.5 3.6 0 5.9 2.2 5.9 5.7 0 4.9-2.4 7.8-7 12.6l-7 7v1.7h18.3L58 23Zm62.8 14.8v-4.6h-17.5V15.6h-4.8v17.6H81v4.6h17.5v17.6h4.8V37.8h17.5Zm35.6-6.7c-.8-5.3-1.2-7.5-2.7-10h-1l-9.5.7v2l2.4-.2c4 0 4.4 3.3 4.8 6.3l4 23.5a44 44 0 0 1-8.5 10.4c-1.5 0-2.2-3.6-4.7-3.6-1.6 0-2.6 1-2.6 3 0 2.4 2.3 4.2 5 4.2 5.2 0 9.2-7.2 15.4-15.6 3.4-4.8 7.2-10.6 10.8-16.9a18 18 0 0 0 3-9.2c0-2.9-1.8-5-4.2-5-2 0-3 1.1-3 2.5 0 2.6 3.3 4.4 3.3 6.2 0 1.6-.6 3.2-2.2 5.8L159 47.5h-.4l-.6-6.7-1.6-9.7Z" />
      </svg>
    </annotation-xml>
  </semantics>
</math>
```

{{ EmbedLiveSample('example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}