---
title: <semantics>
slug: Web/MathML/Element/semantics
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{MathMLRef}}

Das **`<semantics>`** [MathML](/de/docs/Web/MathML)-Element verknüpft Anmerkungen mit einem MathML-Ausdruck, beispielsweise seine Textquelle als [leichtgewichtiges Markup-Sprachen](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder mathematische Bedeutung, ausgedrückt in einem speziellen [XML](/de/docs/Glossary/XML)-Dialekt. Typischerweise ist seine Struktur:

- ein erstes Kind, das ein anzumerkender MathML-Ausdruck ist.
- nachfolgende `<annotation>`- oder `<annotation-xml>`-Elemente, wobei letzteres für XML-Formate wie [OpenMath](https://en.wikipedia.org/wiki/OpenMath) reserviert ist.

Standardmäßig wird nur das erste Kind des `<semantics>`-Elements gerendert, während die anderen als [display](/de/docs/Web/CSS/display) auf `none` gesetzt werden.

> [!NOTE]
> Frühere MathML-Spezifikationen erlaubten es Renderern, das Standard-Rendering entsprechend den verfügbaren Anmerkungen zu entscheiden. Die folgenden Regeln zur Bestimmung des sichtbaren Kind-Elements wurden in einigen Browsern implementiert. Siehe [MathML 4](https://w3c.github.io/mathml/) für die Unterscheidung zwischen Präsentations- und Inhalts-MathML.
>
> - Wenn keine anderen Regeln gelten: Standardmäßig wird nur das erste Kind gerendert, das Präsentations-MathML sein soll.
> - Wenn das erste Kind ein Präsentations-MathML-Element ist, das nicht `<annotation>` oder `<annotation-xml>` ist, rendern Sie das erste Kind.
> - Wenn kein Präsentations-MathML gefunden wird, rendern Sie das erste `<annotation>`- oder `<annotation-xml>`-Kind-Element von `<semantics>` ohne ein `src`-Attribut. Für `<annotation-xml>`-Elemente muss das `encoding`-Attribut gleich einem der folgenden Werte sein:
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml"`
>
> Beachten Sie, dass `"application/mathml+xml"` hier _nicht_ erwähnt wird, da es nicht zwischen Inhalts- oder Präsentations-MathML unterscheidet.

## Attribute

`<semantics>`, `<annotation>` und `<annotation-xml>`-Elemente akzeptieren die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes). Zusätzlich können folgende Attribute auf den `<annotation>`- und `<annotation-xml>`-Elementen gesetzt werden:

- `encoding`
  - : Die Kodierung der semantischen Information in der Anmerkung (z.B. `"MathML-Content"`, `"MathML-Presentation"`, `"application/openmath+xml"`, `"image/png"`)
- `src` {{deprecated_inline}}
  - : Der Ort einer externen Quelle für semantische Informationen.

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
