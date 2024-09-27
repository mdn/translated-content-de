---
title: <semantics>
slug: Web/MathML/Element/semantics
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{MathMLRef}}

Das **`<semantics>`** [MathML](/de/docs/Web/MathML)-Element verknüpft Anmerkungen mit einem MathML-Ausdruck, zum Beispiel dessen Textquelle als [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder mathematische Bedeutung, die in einem speziellen [XML](/de/docs/Glossary/XML)-Dialekt ausgedrückt wird. Typischerweise ist seine Struktur:

- ein erstes Kind, das ein MathML-Ausdruck ist, welcher annotiert werden soll.
- nachfolgende `<annotation>` oder `<annotation-xml>` Elemente, wobei letzteres XML-Formaten wie [OpenMath](https://en.wikipedia.org/wiki/OpenMath) vorbehalten ist.

Standardmäßig wird nur das erste Kind des `<semantics>`-Elements gerendert, während die anderen ihre [display](/de/docs/Web/CSS/display)-Eigenschaft auf `none` gesetzt haben.

> [!NOTE]
> Ältere MathML-Spezifikationen erlaubten es Renderern, das Standardrendering gemäß den verfügbaren Anmerkungen zu bestimmen. Die folgenden Regeln für das Bestimmen des sichtbaren Kindes wurden in einigen Browsern implementiert. Siehe [MathML 4](https://w3c.github.io/mathml/) für die Unterscheidung zwischen Präsentations- und Inhalts-MathML.
>
> - Wenn keine anderen Regeln zutreffen: Standardmäßig wird nur das erste Kind gerendert, das als Präsentations-MathML vorgesehen ist.
> - Wenn das erste Kind ein Präsentations-MathML-Element außer `<annotation>` oder `<annotation-xml>` ist, rendere das erste Kind.
> - Wenn kein Präsentations-MathML gefunden wird, rendere das erste `<annotation>` oder `<annotation-xml>` Kind-Element von `<semantics>` ohne ein `src`-Attribut. Für `<annotation-xml>` Elemente muss das `encoding`-Attribut einen der folgenden Werte haben:
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml"`
>
> Beachten Sie, dass `"application/mathml+xml"` hier _nicht_ erwähnt wird, da es nicht zwischen Content oder Presentation MathML unterscheidet.

## Attribute

`<semantics>`, `<annotation>` und `<annotation-xml>` Elemente akzeptieren die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes). Zusätzlich können die folgenden Attribute auf den `<annotation>` und `<annotation-xml>` Elementen gesetzt werden:

- `encoding`
  - : Die Kodierung der semantischen Informationen in der Annotation (z.B. `"MathML-Content"`, `"MathML-Presentation"`, `"application/openmath+xml"`, `"image/png"`)
- `src` {{deprecated_inline}}
  - : Der Speicherort einer externen Quelle für semantische Informationen.

## Beispiel

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

    <!-- Annotate with "Content MathML", a dedicated XML dialect to
         express the meaning of mathematical formulas. -->
    <annotation-xml encoding="MathML-Content">
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

    <!-- Annotate with a PNG image of the formula. -->
    <annotation encoding="image/png" src="some/path/formula.png" />

    <!-- Annotate with LaTeX, a lightweight markup language to write
         mathematical formulas. -->
    <annotation encoding="application/x-tex"> x^{2} + y </annotation>
  </semantics>
</math>
```

{{ EmbedLiveSample('semantics_example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
