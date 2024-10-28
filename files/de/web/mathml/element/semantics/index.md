---
title: <semantics>
slug: Web/MathML/Element/semantics
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<semantics>`** [MathML](/de/docs/Web/MathML)-Element verknüpft Anmerkungen mit einem MathML-Ausdruck, zum Beispiel dessen Textquelle als [Lightweight Markup Language](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder mathematische Bedeutung, die in einem speziellen {{Glossary("XML", "XML")}}-Dialekt ausgedrückt wird. Typischerweise hat es die folgende Struktur:

- ein erstes Kind, welches ein zu annotierender MathML-Ausdruck ist.
- nachfolgende {{mathmlelement("annotation")}} oder {{mathmlelement("annotation-xml")}} Elemente, wobei letztere für XML-Formate wie [Content MathML](https://en.wikipedia.org/wiki/MathML#Content_MathML) oder {{Glossary("SVG", "SVG")}} reserviert sind.

Standardmäßig wird nur das erste Kind des `<semantics>`-Elements gerendert, während die anderen das [display](/de/docs/Web/CSS/display) auf `none` gesetzt haben.

```css
semantics > :not(:first-child) {
  display: none;
}
```

> [!NOTE]
> Ältere MathML-Spezifikationen erlaubten es den Renderern, die Standarddarstellung gemäß den verfügbaren Anmerkungen festzulegen. Die folgenden Regeln zur Bestimmung des sichtbaren Kindes wurden in einigen Browsern implementiert. Siehe [MathML 4](https://w3c.github.io/mathml/) für die Unterscheidung zwischen Presentation und Content MathML.
>
> - Wenn keine anderen Regeln zutreffen: Standardmäßig wird nur das erste Kind gerendert, das Presentation MathML sein soll.
> - Wenn das erste Kind ein Presentation MathML-Element ist, das nicht `<annotation>` oder `<annotation-xml>` ist, rendern Sie das erste Kind.
> - Wenn kein Presentation MathML gefunden wird, rendern Sie das erste `<annotation>` oder `<annotation-xml>` Kind-Element von `<semantics>` ohne ein `src`-Attribut. Für `<annotation-xml>`-Elemente muss das `encoding`-Attribut gleich einem der folgenden Werte sein:
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml"`
>
> Beachten Sie, dass `"application/mathml+xml"` hier _nicht_ erwähnt wird, da es nicht zwischen Content oder Presentation MathML unterscheidet.

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
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
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
