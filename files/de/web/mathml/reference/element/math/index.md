---
title: <math>
slug: Web/MathML/Reference/Element/math
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<math>`**-Element von [MathML](/de/docs/Web/MathML) ist das oberste MathML-Element und dient dazu, eine einzelne mathematische Formel darzustellen. Es kann in HTML-Inhalten verwendet werden, in denen [Flow-Content](/de/docs/Web/HTML/Guides/Content_categories#flow_content) zulässig ist.

> [!NOTE]
> Tipps zur korrekten Einbindung von MathML-Formeln in Ihre Webseiten finden Sie auf der Seite [MathML erstellen](/de/docs/Web/MathML/Guides/Authoring#using_mathml). Weitere Beispiele finden Sie unter [Leitfäden](/de/docs/Web/MathML/Guides).

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie das folgende Attribut:

- `display`
  - : Dieses {{Glossary("Enumerated", "Aufzählungsattribut")}} legt fest, wie das enthaltene MathML-Markup dargestellt wird. Es kann einen der folgenden Werte haben:
    - `block`: Das Element wird als eigener Block außerhalb des aktuellen Textflusses dargestellt; {{cssxref("math-style")}} ist auf `normal` gesetzt.
    - `inline`: Das Element wird innerhalb des aktuellen Textflusses dargestellt; {{cssxref("math-style")}} ist auf `compact` gesetzt.

    Wenn das Attribut nicht vorhanden ist, lautet der Standardwert `inline`.

## Barrierefreiheit

Das `<math>`-Element hat implizit die [ARIA-Rolle `math`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/math_role). Unterstützende Technologien können anhand dieser Rolle den Inhalt als mathematischen Ausdruck erkennen und ihn Nutzern vermitteln.

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

Screenreader geben die folgende quadratische Formel beispielsweise sinngemäß so wieder:

> x gleich Bruchanfang, minus b plus oder minus Quadratwurzel aus b zum Quadrat minus 4 a c, Wurzelende, geteilt durch 2 a, Bruchende, mathematischer Ausdruck

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

Dieses Beispiel enthält zwei MathML-Formeln. Die erste wird in einem eigenen, zentrierten Block dargestellt und nimmt so viel Platz wie nötig ein. Die zweite wird innerhalb eines Textabsatzes mit verringerter Größe und geringeren Abständen dargestellt, um ihre Höhe möglichst gering zu halten.

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

{{ EmbedLiveSample('examples', 700, 200, "", "") }}

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
