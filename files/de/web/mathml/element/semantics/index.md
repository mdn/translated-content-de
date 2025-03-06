---
title: <semantics>
slug: Web/MathML/Element/semantics
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<semantics>`** [MathML](/de/docs/Web/MathML) Element ordnet Anmerkungen einem MathML-Ausdruck zu, zum Beispiel seine Textquelle als [Leichtgewicht-Markup-Sprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder mathematische Bedeutung, ausgedrückt in einem speziellen {{Glossary("XML", "XML")}} Dialekt. Typischerweise ist seine Struktur:

- ein erstes Kind, das ein MathML-Ausdruck ist, der annotiert werden soll.
- nachfolgende {{mathmlelement("annotation")}} oder {{mathmlelement("annotation-xml")}} Elemente, wobei letzteres XML-Formate wie [Content MathML](https://en.wikipedia.org/wiki/MathML#Content_MathML) oder {{Glossary("SVG", "SVG")}} vorbehalten ist.

Standardmäßig wird nur das erste Kind des `<semantics>`-Elements dargestellt, während die anderen das [display](/de/docs/Web/CSS/display) auf `none` gesetzt haben.

```css
semantics > :not(:first-child) {
  display: none;
}
```

> [!NOTE]
> In älteren MathML-Spezifikationen durften Renderer die Standarddarstellung anhand verfügbarer Anmerkungen bestimmen. Die folgenden Regeln zur Bestimmung des sichtbaren Kindes wurden in einigen Browsern implementiert. Siehe [MathML 4](https://w3c.github.io/mathml/) für die Unterscheidung zwischen Präsentations- und Inhalts-MathML.
>
> - Wenn keine anderen Regeln gelten: Standardmäßig wird nur das erste Kind dargestellt, das angeblich Präsentations-MathML ist.
> - Wenn das erste Kind ein Präsentations-MathML-Element ist, das nicht `<annotation>` oder `<annotation-xml>` ist, wird das erste Kind dargestellt.
> - Wenn kein Präsentations-MathML gefunden wird, wird das erste `<annotation>` oder `<annotation-xml>` Kind-Element des `<semantics>` ohne `src` Attribut dargestellt. Für `<annotation-xml>` Elemente muss das `encoding` Attribut einem der folgenden Werte entsprechen:
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml"`
>
> Beachten Sie, dass `"application/mathml+xml"` hier _nicht_ erwähnt wird, da es nicht zwischen Inhalts- oder Präsentations-MathML unterscheidet.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

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
      Annotate with content MathML, a dedicated XML dialect
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

    <!--
      Annotate with LaTeX, a lightweight markup language
      to write mathematical formulas.
    -->
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
