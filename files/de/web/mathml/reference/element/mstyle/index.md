---
title: <mstyle>
slug: Web/MathML/Reference/Element/mstyle
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`<mstyle>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um den Stil seiner Kinderelemente zu ändern.

> [!NOTE]
> Historisch gesehen akzeptierte dieses Element fast alle MathML-Attribute und wurde verwendet, um die Standardattributwerte seiner Nachkommen zu überschreiben. Es wurde später auf nur wenige relevante Stilattribute beschränkt, die auf bestehenden Webseiten verwendet wurden. Heutzutage sind diese Stilattribute [allen MathML-Elementen gemeinsam](/de/docs/Web/MathML/Reference/Global_attributes), sodass `<mstyle>` tatsächlich nur einem [`<mrow>`](/de/docs/Web/MathML/Reference/Element/mrow)-Element entspricht. Dennoch kann `<mstyle>` immer noch relevant für die Kompatibilität mit MathML-Implementierungen außerhalb von Browsern sein.

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

Das folgende Beispiel verwendet [globale Attribute](/de/docs/Web/MathML/Reference/Global_attributes) `displaystyle` und `mathcolor`, um den [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) und die [`color`](/de/docs/Web/CSS/Reference/Properties/color) der `<munder>`- und `<munderover>`-Kinder zu überschreiben:

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

Das folgende Beispiel zeigt eine Formel mit [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size) auf `128pt`. Es enthält Zahlen, die in verschachtelten Superskripten platziert sind, sowie ein `<mstyle>`-Element mit den veralteten Attributen `scriptsizemultiplier` und `scriptminsize`. Die `font-size` wird mit `0.5` multipliziert, wenn ein neuer Superskript betreten wird, solange sie dadurch nicht kleiner als `16pt` wird.

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
