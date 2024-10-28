---
title: <mstyle>
slug: Web/MathML/Element/mstyle
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mstyle>`**-[MathML](/de/docs/Web/MathML)-Element wird verwendet, um den Stil seiner Kinder zu ändern.

> [!NOTE]
> Historisch gesehen nahm dieses Element fast alle MathML-Attribute an und wurde verwendet, um die Standard-Attributwerte seiner Nachkommen zu überschreiben. Später wurde es auf nur wenige relevante Stilattribute beschränkt, die auf bestehenden Webseiten verwendet wurden. Heutzutage sind diese Stilattribute [allen MathML-Elementen gemeinsam](/de/docs/Web/MathML/Global_attributes), und daher ist `<mstyle>` wirklich nur gleichwertig mit einem [`<mrow>`](/de/docs/Web/MathML/Element/mrow)-Element. `<mstyle>` kann jedoch weiterhin für die Kompatibilität mit MathML-Implementierungen außerhalb von Browsern relevant sein.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden veralteten Attribute:

- `background` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen {{cssxref("background-color")}}.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen {{cssxref("color")}}.
- `fontsize` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen {{cssxref("font-size")}}.
- `fontstyle` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen {{cssxref("font-style")}}.
- `fontweight` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Verwenden Sie stattdessen {{cssxref("font-weight")}}.

## Beispiele

### Attribute, die auf CSS abgebildet sind

Das folgende Beispiel verwendet [globale Attribute](/de/docs/Web/MathML/Global_attributes) `displaystyle` und `mathcolor`, um jeweils den [`math-style`](/de/docs/Web/CSS/math-style) und die [`color`](/de/docs/Web/CSS/color) der `<munder>` und `<munderover>`-Kinder zu überschreiben:

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

{{EmbedLiveSample('Attribute, die auf CSS abgebildet sind')}}

### Veraltete Script-Attribute

Das folgende Beispiel zeigt eine Formel mit [`font-size`](/de/docs/Web/CSS/font-size) auf `128pt` eingestellt. Sie enthält Zahlen, die in verschachtelten Hochzahlen platziert sind, sowie ein `<mstyle>`-Element mit den veralteten Attributen `scriptsizemultiplier` und `scriptminsize`. Die `font-size` wird um `0.5` multipliziert, wenn jede Hochzahl betreten wird, solange dies sie nicht kleiner als `16pt` macht.

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

{{EmbedLiveSample('Veraltete Script-Attribute', 700, 400)}}

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
