---
title: <math>
slug: Web/MathML/Reference/Element/math
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<math>`**-Element ist das oberste [MathML](/de/docs/Web/MathML)-Element und wird verwendet, um eine einzelne mathematische Formel zu schreiben. Es kann im HTML-Inhalt platziert werden, wo [Flussinhalt](/de/docs/Web/HTML/Content_categories#flow_content) zulässig ist.

> [!NOTE]
> Sehen Sie sich die [Seite zum Erstellen von MathML](/de/docs/Web/MathML/Guides/Authoring#using_mathml) für Tipps zur richtigen Integration von MathML-Formeln auf Ihren Webseiten an und die [Leitfäden](/de/docs/Web/MathML/Guides)-Seite für weitere Demos.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie das folgende Attribut:

- `display`

  - : Dieses {{Glossary("Enumerated", "aufzählbare")}} Attribut gibt an, wie das eingeschlossene MathML-Markup gerendert werden soll. Es kann einen der folgenden Werte haben:

    - `block`, was bedeutet, dass dieses Element in einem eigenen Block außerhalb des aktuellen Textbereichs angezeigt wird und mit [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` gesetzt ist.
    - `inline`, was bedeutet, dass dieses Element innerhalb des aktuellen Textbereichs angezeigt wird und mit [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` gesetzt ist.

    Wenn es nicht vorhanden ist, ist der Standardwert `inline`.

## Barrierefreiheit

Das `<math>`-Element hat eine implizite [`math` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/math_role). Hilfstechnologien können diese Rolle nutzen, um den Inhalt als mathematischen Ausdruck zu identifizieren und ihn den Benutzern zu vermitteln.

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

Zum Beispiel werden Bildschirmlesegeräte die folgende quadratische Formel ähnlich darstellen:

> x gleich Bruchanfang, minus b plus oder minus Quadratwurzel aus b quadrat minus 4 a c, Wurzelende, über 2 a, Bruchende, Mathe

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

Dieses Beispiel enthält zwei MathML-Formeln. Die erste wird in einem eigenen zentrierten Block gerendert, der so viel Platz einnimmt, wie benötigt. Die zweite wird innerhalb des Textabschnitts gerendert, mit reduzierter Größe und Abständen, um die Höhe zu minimieren.

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
