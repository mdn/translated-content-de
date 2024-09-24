---
title: <semantics>
slug: Web/MathML/Element/semantics
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<semantics>`** [MathML](/de/docs/Web/MathML)-Element verknüpft Anmerkungen mit einem MathML-Ausdruck, zum Beispiel dessen Textquelle als [Lightweight Markup Language](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder mathematische Bedeutung ausgedrückt in einem speziellen {{glossary("XML")}}-Dialekt. Typischerweise ist seine Struktur:

- ein erstes Kind, das ein zu annotierender MathML-Ausdruck ist.
- nachfolgende `<annotation>` oder `<annotation-xml>`-Elemente, wobei letzteres für XML-Formate wie [OpenMath](https://en.wikipedia.org/wiki/OpenMath) reserviert ist.

Standardmäßig wird nur das erste Kind des `<semantics>`-Elements gerendert, während die anderen ihren [Display](/de/docs/Web/CSS/display) auf `none` gesetzt haben.

> [!NOTE]
> Frühere MathML-Spezifikationen erlaubten Renderern, das Standardrendering entsprechend den verfügbaren Anmerkungen zu entscheiden. Die folgenden Regeln zur Bestimmung des sichtbaren Kindes wurden in einigen Browsern implementiert. Siehe [MathML 4](https://w3c.github.io/mathml/) für die Unterscheidung zwischen Präsentations- und Inhalts-MathML.
>
> - Wenn keine anderen Regeln zutreffen: Standardmäßig wird nur das erste Kind gerendert, das Präsentations-MathML sein soll.
> - Wenn das erste Kind ein anderes Präsentations-MathML-Element als `<annotation>` oder `<annotation-xml>` ist, rendern Sie das erste Kind.
> - Wenn kein Präsentations-MathML gefunden wird, rendern Sie das erste `<annotation>` oder `<annotation-xml>`-Kindelement von `<semantics>` ohne `src`-Attribut. Bei `<annotation-xml>`-Elementen muss das `encoding`-Attribut einem der folgenden Werte entsprechen:
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml`".
>
> Beachten Sie, dass `"application/mathml+xml"` hier _nicht_ erwähnt wird, da es nicht zwischen Inhalts- oder Präsentations-MathML unterscheidet.

## Attribute

`<semantics>`, `<annotation>` und `<annotation-xml>`-Elemente akzeptieren die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes). Zusätzlich können die folgenden Attribute auf den `<annotation>` und `<annotation-xml>`-Elementen gesetzt werden:

- `encoding`
  - : Die Kodierung der semantischen Information in der Anmerkung (z.B. `"MathML-Content"`, `"MathML-Presentation"`, `"application/openmath+xml"`, `"image/png"`)
- `src` {{deprecated_inline}}
  - : Der Ort einer externen Quelle für semantische Informationen.

## Beispiel

```html
<math display="block">
  <semantics>
    <!-- Das erste Kind ist der MathML-Ausdruck, der standardmäßig gerendert wird. -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!-- Kommentieren Sie mit "Content MathML", einem dedizierten XML-Dialekt,
         um die Bedeutung mathematischer Formeln auszudrücken. -->
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

    <!-- Kommentieren Sie mit einem PNG-Bild der Formel. -->
    <annotation encoding="image/png" src="some/path/formula.png" />

    <!-- Kommentieren Sie mit LaTeX, einer Lightweight-Markup-Sprache zum Schreiben
         mathematischer Formeln. -->
    <annotation encoding="application/x-tex"> x^{2} + y </annotation>
  </semantics>
</math>
```

{{ EmbedLiveSample('semantics_example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
