---
title: <math>
slug: Web/MathML/Element/math
l10n:
  sourceCommit: 1833050c622777ee4b1560f5c48adb43dca5eb27
---

{{MathMLRef}}

Das **`<math>`** [MathML](/de/docs/Web/MathML)-Element ist das oberste MathML-Element, das verwendet wird, um eine einzelne mathematische Formel zu schreiben. Es kann in HTML-Inhalten platziert werden, wo [Fließinhalte](/de/docs/Web/HTML/Content_categories#flow_content) zulässig sind.

> [!NOTE]
> Siehe die Seite [Verfassen von MathML](/de/docs/Web/MathML/Authoring#using_mathml) für Tipps zur ordnungsgemäßen Integration von MathML-Formeln in Ihre Webseiten und die Seite [Beispiele](/de/docs/Web/MathML/Examples) für weitere Demos.

## Attribute

Dieses Element umfasst die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende Attribut:

- `display`

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, wie das eingeschlossene MathML-Markup gerendert werden soll. Es kann einen der folgenden Werte annehmen:

    - `block`, was bedeutet, dass dieses Element in einem eigenen Block außerhalb des aktuellen Textabschnitts angezeigt wird und [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` gesetzt ist.
    - `inline`, was bedeutet, dass dieses Element innerhalb des aktuellen Textabschnitts angezeigt wird und [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` gesetzt ist.

    Wenn nicht vorhanden, ist sein Standardwert `inline`.

## Barrierefreiheit

Das `<math>`-Element hat eine implizite [`math` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/math_role). Unterstützende Technologien können diese Rolle verwenden, um den Inhalt als mathematischen Ausdruck zu identifizieren und ihn den Nutzern zu vermitteln.

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

Zum Beispiel werden Screenreader die folgende quadratische Formel in etwa folgendermaßen darstellen:

> x gleich Bruchstrich anfangen, minus b plus oder minus Quadratwurzel von b quadrat minus 4 a c, Ende der Wurzel, über 2 a, Ende des Bruchstrichs, Mathematik

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

Dieses Beispiel enthält zwei MathML-Formeln. Die erste wird in ihrem eigenen zentrierten Block gerendert und nimmt so viel Platz wie nötig ein. Die zweite wird innerhalb des Textparagraphen gerendert, mit reduzierter Größe und Abständen, um die Höhe zu minimieren.

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
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      <a href="/de/docs/Web/Accessibility/ARIA/Roles/math_role">
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
