---
title: <math>
slug: Web/MathML/Reference/Element/math
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`<math>`** [MathML](/de/docs/Web/MathML)-Element ist das oberste MathML-Element, das verwendet wird, um eine einzelne mathematische Formel zu schreiben. Es kann in HTML-Inhalt eingefügt werden, wo [Flussinhalt](/de/docs/Web/HTML/Guides/Content_categories#flow_content) erlaubt ist.

> [!NOTE]
> Siehe die [Seite zur Erstellung von MathML](/de/docs/Web/MathML/Guides/Authoring#using_mathml) für Tipps zur korrekten Integration von MathML-Formeln in Ihre Webseiten und die [Leitfäden](/de/docs/Web/MathML/Guides)-Seite für weitere Demonstrationen.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie das folgende Attribut:

- `display`
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut legt fest, wie das umschlossene MathML-Markup gerendert werden soll. Es kann einen der folgenden Werte haben:
    - `block`, was bedeutet, dass dieses Element in seinem eigenen Block außerhalb des aktuellen Textflusses und mit [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) auf `normal` gesetzt angezeigt wird.
    - `inline`, was bedeutet, dass dieses Element innerhalb des aktuellen Textflusses und mit [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) auf `compact` gesetzt angezeigt wird.

    Wenn es nicht vorhanden ist, ist der Standardwert `inline`.

## Barrierefreiheit

Das `<math>`-Element hat eine implizite [`math` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/math_role). Unterstützende Technologien können diese Rolle verwenden, um den Inhalt als mathematischen Ausdruck zu identifizieren und ihn den Benutzern zu vermitteln.

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

Zum Beispiel repräsentieren Bildschirmlesegeräte die folgende quadratische Formel ähnlich wie:

> x entspricht Bruch Anfang, minus b plus oder minus Quadratwurzel von b zum Quadrat minus 4 a c, Ende der Wurzel, über 2 a, Ende des Bruchs, Mathematik

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

Dieses Beispiel enthält zwei MathML-Formeln. Die erste wird in seinem eigenen zentrierten Block gerendert, der so viel Platz wie nötig einnimmt. Die zweite wird innerhalb des Textabschnitts gerendert, mit reduzierter Größe und Abständen, um ihre Höhe zu minimieren.

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

- HTML-Top-Element: {{ HTMLElement("html") }}
- SVG-Top-Element: {{ SVGElement("svg") }}
