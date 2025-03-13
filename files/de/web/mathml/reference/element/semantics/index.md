---
title: <semantics>
slug: Web/MathML/Reference/Element/semantics
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<semantics>`** [MathML](/de/docs/Web/MathML) Element verknüpft Anmerkungen mit einem MathML-Ausdruck, beispielsweise dessen Textquelle als [leicht zu erlernende Markup-Sprache](https://de.wikipedia.org/wiki/Lightweight_Markup_Sprache) oder mathematische Bedeutung, die in einem speziellen {{Glossary("XML", "XML")}} Dialekt ausgedrückt wird. Typischerweise ist seine Struktur:

- ein erstes Kind, das ein zu annotierender MathML-Ausdruck ist.
- nachfolgende {{mathmlelement("annotation")}} oder {{mathmlelement("annotation-xml")}} Elemente, wobei letztere XML-Formaten wie [Content MathML](https://en.wikipedia.org/wiki/MathML#Content_MathML) oder {{Glossary("SVG", "SVG")}} vorbehalten sind.

Standardmäßig wird nur das erste Kind des `<semantics>`-Elements gerendert, während die anderen ihre [display](/de/docs/Web/CSS/display) Einstellung auf `none` haben.

```css
semantics > :not(:first-child) {
  display: none;
}
```

> [!NOTE]
> Frühere MathML-Spezifikationen erlaubten es den Renderern, die Standarddarstellung basierend auf verfügbaren Anmerkungen zu bestimmen. Die folgenden Regeln zur Bestimmung des sichtbaren Kindes wurden in einigen Browsern implementiert. Siehe [MathML 4](https://w3c.github.io/mathml/) für die Unterscheidung zwischen Präsentations-MathML und Inhalts-MathML.
>
> - Wenn keine anderen Regeln zutreffen: Standardmäßig wird nur das erste Kind gerendert, welches ein Präsentations-MathML sein soll.
> - Wenn das erste Kind ein Präsentations-MathML-Element, ein anderes als `<annotation>` oder `<annotation-xml>`, ist, rendere das erste Kind.
> - Wenn kein Präsentations-MathML gefunden wird, rendere das erste `<annotation>` oder `<annotation-xml>` Kind des `<semantics>` ohne ein `src` Attribut. Für `<annotation-xml>` Elemente muss das `encoding` Attribut einen der folgenden Werte haben:
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml"`
>
> Beachten Sie, dass `"application/mathml+xml"` hier _nicht_ erwähnt wird, da es nicht zwischen Content- oder Presentation-MathML unterscheidet.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

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
