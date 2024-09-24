---
title: <math>
slug: Web/MathML/Element/math
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<math>`** [MathML](/de/docs/Web/MathML)-Element ist das oberste MathML-Element, das verwendet wird, um eine einzelne mathematische Formel zu schreiben. Es kann in HTML-Inhalten platziert werden, wo [Flussinhalte](/de/docs/Web/HTML/Content_categories#flow_content) erlaubt sind.

> [!NOTE]
> Sehen Sie sich die [Authoring MathML-Seite](/de/docs/Web/MathML/Authoring#using_mathml) für Tipps zur korrekten Integration von MathML-Formeln in Ihre Webseiten an und die [Beispiele](/de/docs/Web/MathML/Examples)-Seite für weitere Demonstrationen.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende Attribut:

- `display`

  - : Dieses [aufgezählte](/de/docs/Glossary/Enumerated) Attribut gibt an, wie das eingeschlossene MathML-Markup dargestellt werden soll. Es kann einen der folgenden Werte haben:

    - `block`, was bedeutet, dass dieses Element in einem eigenen Block außerhalb des aktuellen Textbereichs angezeigt wird und mit [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` gesetzt ist.
    - `inline`, was bedeutet, dass dieses Element innerhalb des aktuellen Textbereichs angezeigt wird und mit [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` gesetzt ist.

    Wenn nicht vorhanden, ist der Standardwert `inline`.

## Beispiele

Dieses Beispiel enthält zwei MathML-Formeln. Die erste wird in einem eigenen zentrierten Block gerendert, der so viel Platz wie nötig einnimmt. Die zweite wird innerhalb des Textabsatzes gerendert, mit reduzierter Größe und Abständen, um ihre Höhe zu minimieren.

```html
<p>
  Die unendliche Summe
  <math display="block">
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
      <mfrac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfrac>
    </mrow>
  </math>
  ist gleich der reellen Zahl
  <math display="inline">
    <mfrac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfrac></math
  >.
</p>
```

{{ EmbedLiveSample('math_example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Oberste-Ebene-Element: {{ HTMLElement("html") }}
- SVG-Oberste-Ebene-Element: {{ SVGElement("svg") }}
