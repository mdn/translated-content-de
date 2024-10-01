---
title: <math>
slug: Web/MathML/Element/math
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<math>`** [MathML](/de/docs/Web/MathML)-Element ist das oberste MathML-Element und wird verwendet, um eine einzelne mathematische Formel zu schreiben. Es kann in HTML-Inhalt platziert werden, wo [Flussinhalt](/de/docs/Web/HTML/Content_categories#flow_content) zulässig ist.

> [!NOTE]
> Siehe die Seite [MathML-Seiten authoring](/de/docs/Web/MathML/Authoring#using_mathml) für Tipps, wie Sie MathML-Formeln angemessen in Ihre Webseiten integrieren können, und die Seite [Beispiele](/de/docs/Web/MathML/Examples) für weitere Demos.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende Attribut:

- `display`

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, wie das umschlossene MathML-Markup dargestellt werden soll. Es kann einen der folgenden Werte haben:

    - `block`, was bedeutet, dass dieses Element in einem eigenen Block außerhalb des aktuellen Textbereichs mit der [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` gesetzt angezeigt wird.
    - `inline`, was bedeutet, dass dieses Element innerhalb des aktuellen Textbereichs angezeigt wird, mit der [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` gesetzt.

    Wenn nicht vorhanden, ist der Standardwert `inline`.

## Beispiele

Dieses Beispiel enthält zwei MathML-Formeln. Die erste wird in ihrem eigenen zentrierten Block gerendert, der so viel Platz einnimmt, wie benötigt wird. Die zweite wird innerhalb des Textabsatzes dargestellt, mit reduzierter Größe und Abständen, um ihre Höhe zu minimieren.

```html
<p>
  The infinite sum
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
  is equal to the real number
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

- HTML-Top-Level-Element: {{ HTMLElement("html") }}
- SVG-Top-Level-Element: {{ SVGElement("svg") }}
