---
title: <math>
slug: Web/MathML/Reference/Element/math
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das **`<math>`** [MathML](/de/docs/Web/MathML) Element ist das oberste MathML-Element, das verwendet wird, um eine einzelne mathematische Formel zu schreiben. Es kann in HTML-Inhalten verwendet werden, wo [Flussinhalte](/de/docs/Web/HTML/Guides/Content_categories#flow_content) erlaubt sind.

> [!NOTE]
> Sehen Sie sich die [Seite zur Erstellung von MathML](/de/docs/Web/MathML/Guides/Authoring#using_mathml) für Tipps zur korrekten Integration von MathML-Formeln in Ihre Webseiten an und die [Leitfaden](/de/docs/Web/MathML/Guides) Seite für weitere Demos.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie das folgende Attribut:

- `display`

  - : Dieses {{Glossary("Enumerated", "aufgelistete")}} Attribut legt fest, wie das enthaltene MathML-Markup dargestellt werden soll. Es kann einen der folgenden Werte haben:

    - `block`, was bedeutet, dass dieses Element in einem eigenen Block außerhalb des aktuellen Textbereichs angezeigt wird und mit [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` gesetzt ist.
    - `inline`, was bedeutet, dass dieses Element innerhalb des aktuellen Textbereichs angezeigt wird und mit [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` gesetzt ist.

    Wenn nicht vorhanden, ist der Standardwert `inline`.

## Barrierefreiheit

Das `<math>` Element hat eine implizite [`math` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/math_role). Unterstützende Technologien können diese Rolle nutzen, um den Inhalt als mathematische Ausdruck zu identifizieren und den Nutzern zu vermitteln.

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

Zum Beispiel werden Bildschirmleser die folgende quadratische Formel ähnlich wiedergeben:

> x gleich Bruchstart, negativ b plus oder minus Quadratwurzel von b Quadrat minus 4 a c, Wurzelende, über 2 a, Bruchende, Mathematik

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

Dieses Beispiel enthält zwei MathML-Formeln. Die erste wird in ihrem eigenen zentrierten Block dargestellt, wobei sie so viel Platz wie nötig einnimmt. Die zweite wird innerhalb des Textabsatzes angezeigt, mit reduzierter Größe und Abständen, um ihre Höhe zu minimieren.

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

- Oberstes HTML-Element: {{ HTMLElement("html") }}
- Oberstes SVG-Element: {{ SVGElement("svg") }}
