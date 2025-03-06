---
title: <math>
slug: Web/MathML/Element/math
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<math>`** [MathML](/de/docs/Web/MathML)-Element ist das oberste MathML-Element, welches verwendet wird, um eine einzelne mathematische Formel zu schreiben. Es kann in HTML-Inhalten platziert werden, wo [Flow-Content](/de/docs/Web/HTML/Content_categories#flow_content) erlaubt ist.

> [!NOTE]
> Siehe die [Seite zur Erstellung von MathML](/de/docs/Web/MathML/Authoring#using_mathml) für Tipps zur richtigen Integration von MathML-Formeln in Ihre Webseiten und die [Beispiele-Seite](/de/docs/Web/MathML/Examples) für weitere Demos.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende Attribut:

- `display`

  - : Dieses {{Glossary("Enumerated", "aufzählbare")}} Attribut legt fest, wie die eingeschlossene MathML-Markup angezeigt werden soll. Es kann einen der folgenden Werte haben:

    - `block`, was bedeutet, dass dieses Element in einem eigenen Block außerhalb des aktuellen Textflusses und mit [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` dargestellt wird.
    - `inline`, was bedeutet, dass dieses Element innerhalb des aktuellen Textflusses und mit [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` dargestellt wird.

    Wenn nicht vorhanden, ist der Standardwert `inline`.

## Barrierefreiheit

Das `<math>`-Element hat eine implizite [`math` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/math_role). Unterstützende Technologien können diese Rolle nutzen, um den Inhalt als mathematischen Ausdruck zu identifizieren und den Benutzern zu übermitteln.

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

Zum Beispiel werden Bildschirmlesegeräte die folgende quadratische Formel ähnlich darstellen wie:

> x gleich Bruchanfang, minus b plus oder minus Wurzel aus b Quadrat minus 4 a c, Ende der Wurzel, über 2 a, Ende des Bruchs, Mathe

<details>
<summary>Markup für die quadratische Formel</summary>

```html
<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mrow>
          <mo>−</mo>
          <mi>b</mi>
        </mrow>
        <mo>±</mo>
        <msqrt>
          <mrow>
            <msup>
              <mi>b</mi>
              <mn>2</mn>
            </msup>
            <mo>−</mo>
            <mrow>
              <mn>4</mn>
              <mo>⁢</mo>
              <mi>a</mi>
              <mo>⁢</mo>
              <mi>c</mi>
            </mrow>
          </mrow>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mo>⁢</mo>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math>
```

</details>

{{ EmbedLiveSample('accessibility') }}

## Beispiele

Dieses Beispiel enthält zwei MathML-Formeln. Die erste wird in ihrem eigenen zentrierten Block dargestellt, wobei so viel Platz benötigt wird, wie nötig. Die zweite wird innerhalb des Textabschnitts gerendert, mit reduzierter Größe und Abstand, um die Höhe zu minimieren.

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
    </mfrac>
  </math>
  .
</p>
```

{{ EmbedLiveSample('math_example', 700, 200, "", "") }}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/math_role">
        <code>math</code>
      </a>
    </td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Oberstelement: {{ HTMLElement("html") }}
- SVG-Oberstelement: {{ SVGElement("svg") }}
