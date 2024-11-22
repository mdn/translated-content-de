---
title: <mstyle>
slug: Web/MathML/Element/mstyle
l10n:
  sourceCommit: 1833050c622777ee4b1560f5c48adb43dca5eb27
---

{{MathMLRef}}

Das **`<mstyle>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um den Stil seiner Kinder zu ändern.

> [!NOTE]
> Historisch gesehen akzeptierte dieses Element fast alle MathML-Attribute und wurde verwendet, um die Standardwerte der Attribute seiner Nachkommen zu überschreiben. Später wurde es auf nur wenige relevante Stilattribute beschränkt, die in vorhandenen Webseiten verwendet wurden. Heutzutage sind diese Stilattribute [allen MathML-Elementen gemeinsam](/de/docs/Web/MathML/Global_attributes), und so ist `<mstyle>` wirklich gleichwertig mit einem [`<mrow>`](/de/docs/Web/MathML/Element/mrow)-Element. Ein `<mstyle>` könnte jedoch immer noch für die Kompatibilität mit MathML-Implementierungen außerhalb von Browsern relevant sein.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden veralteten Attribute:

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

### Attribute, die in CSS abgebildet sind

Das folgende Beispiel verwendet [globale Attribute](/de/docs/Web/MathML/Global_attributes) `displaystyle` und `mathcolor`, um den [`math-style`](/de/docs/Web/CSS/math-style) und die [`color`](/de/docs/Web/CSS/color) der `<munder>`- und `<munderover>`-Kinder zu überschreiben:

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

### Veraltete Skriptattribute

Das folgende Beispiel zeigt eine Formel mit [`font-size`](/de/docs/Web/CSS/font-size) auf `128pt` gesetzt. Es enthält Zahlen, die in verschachtelten Hochzahlen platziert sind, sowie ein `<mstyle>`-Element mit den veralteten Attributen `scriptsizemultiplier` und `scriptminsize`. Die `font-size` wird mit `0.5` multipliziert, wenn man in jede Hochzahl eintritt, solange sie dadurch nicht kleiner als `16pt` wird.

```html
<math display="block" style="font-size: 128pt">
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

{{EmbedLiveSample('Legacy script attributes', 700, 400)}}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
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
