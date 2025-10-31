---
title: <semantics>
slug: Web/MathML/Reference/Element/semantics
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`<semantics>`** [MathML](/de/docs/Web/MathML)-Element verknüpft Anmerkungen mit einem MathML-Ausdruck, zum Beispiel dessen Textquelle als [leichtgewichtiges Markup](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder mathematische Bedeutung, die in einem speziellen {{Glossary("XML", "XML")}} Dialekt ausgedrückt wird. Typischerweise hat es die folgende Struktur:

- ein erstes Kind, das ein zu annotierender MathML-Ausdruck ist.
- nachfolgende {{mathmlelement("annotation")}}- oder {{mathmlelement("annotation-xml")}}-Elemente, wobei letztere für XML-Formate wie [Content MathML](https://en.wikipedia.org/wiki/MathML#Content_MathML) oder {{Glossary("SVG", "SVG")}} reserviert sind.

Standardmäßig wird nur das erste Kind des `<semantics>`-Elements angezeigt, während die anderen das [display](/de/docs/Web/CSS/Reference/Properties/display) auf `none` gesetzt haben.

```css
semantics > :not(:first-child) {
  display: none;
}
```

> [!NOTE]
> Frühere MathML-Spezifikationen erlaubten es Renderern, die Standardanzeige basierend auf verfügbaren Anmerkungen zu entscheiden. Die folgenden Regeln zur Bestimmung des sichtbaren Kindes wurden in einigen Browsern implementiert. Siehe [MathML 4](https://w3c.github.io/mathml/) für die Unterscheidung zwischen Präsentations- und Inhalts-MathML.
>
> - Wenn keine anderen Regeln zutreffen: Standardmäßig wird nur das erste Kind gerendert, welches als Präsentations-MathML angenommen wird.
> - Wenn das erste Kind ein Präsentations-MathML-Element ist, das nicht `<annotation>` oder `<annotation-xml>` ist, wird das erste Kind gerendert.
> - Wenn kein Präsentations-MathML gefunden wird, wird das erste `<annotation>` oder `<annotation-xml>` Kind-Element des `<semantics>` ohne `src`-Attribut gerendert. Für `<annotation-xml>`-Elemente muss das `encoding`-Attribut einen der folgenden Werte haben:
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml"`
>
> Beachten Sie, dass `"application/mathml+xml"` _nicht_ hier erwähnt wird, da es nicht zwischen Inhalts- oder Präsentations-MathML unterscheidet.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

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
