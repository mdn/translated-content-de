---
title: <mstyle>
slug: Web/MathML/Reference/Element/mstyle
l10n:
  sourceCommit: 6b01bafc68dffb3a50f70882d2ba24cd6f9d886f
---

Das **`<mstyle>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um den Stil seiner Kinderelemente zu ändern.

> [!NOTE]
> Historisch gesehen akzeptierte dieses Element fast alle MathML-Attribute und wurde verwendet, um die Standardattributwerte seiner Nachkommen zu überschreiben. Später wurde es auf nur wenige relevante Stilattribute beschränkt, die in bestehenden Webseiten verwendet wurden. Heutzutage sind diese Stilattribute [allen MathML-Elementen gemeinsam](/de/docs/Web/MathML/Reference/Global_attributes) und daher ist `<mstyle>` im Grunde nur gleichwertig mit einem [`<mrow>`](/de/docs/Web/MathML/Reference/Element/mrow)-Element. Jedoch kann `<mstyle>` immer noch relevant für die Kompatibilität mit MathML-Implementierungen außerhalb von Browsern sein.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden veralteten Attribute:

- `background` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}}.
- `fontsize` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("font-size")}}.
- `fontstyle` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("font-style")}}.
- `fontweight` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("font-weight")}}.

## Beispiele

### Attribute, die auf CSS abgebildet sind

Das folgende Beispiel verwendet [globale Attribute](/de/docs/Web/MathML/Reference/Global_attributes) `displaystyle` und `mathcolor`, um jeweils die {{cssxref("math-style")}} und {{cssxref("color")}} der `<munder>`- und `<munderover>`-Kinderelemente zu überschreiben:

```html
<math display="block">
  <mstyle displaystyle="false" mathcolor="teal">
    <munder>
      <mo>∑</mo>
      <mi>I</mi>
    </munder>
    <munderover>
      <mo>∏</mo>
      <mrow>
        <mi>i</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mi>N</mi>
    </munderover>
  </mstyle>
</math>
```

{{EmbedLiveSample('Attributes mapped to CSS')}}

### Veraltete Skript-Attribute

Das folgende Beispiel zeigt eine Formel, bei der die {{cssxref("font-size")}} auf `128pt` gesetzt ist. Es enthält Zahlen, die in verschachtelten Superskripten platziert sind, sowie ein `<mstyle>`-Element mit den veralteten Attributen `scriptsizemultiplier` und `scriptminsize`. Die `font-size` wird mit `0.5` multipliziert, wenn man in jedes Superskript eintritt, solange dies nicht dazu führt, dass die Schriftgröße kleiner als `16pt` wird.

```html
<math display="block">
  <mstyle scriptsizemultiplier="0.5" scriptminsize="16pt">
    <msup>
      <mn>2</mn>
      <msup>
        <mn>2</mn>
        <msup>
          <mn>2</mn>
          <msup>
            <mn>2</mn>
            <msup>
              <mn>2</mn>
              <msup>
                <mn>2</mn>
                <mn>2</mn>
              </msup>
            </msup>
          </msup>
        </msup>
      </msup>
    </msup>
  </mstyle>
</math>
```

```css
math {
  font-size: 128pt;
}
```

{{EmbedLiveSample('Legacy script attributes', 700, 400)}}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizierte ARIA-Rolle</a>
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
