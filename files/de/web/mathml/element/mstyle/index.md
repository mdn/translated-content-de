---
title: <mstyle>
slug: Web/MathML/Element/mstyle
l10n:
  sourceCommit: f6e01b30b70e6ad3f2309c1589c8e2454038333c
---

{{MathMLRef}}

Das **`<mstyle>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um den Stil seiner Kinder zu ändern.

> [!NOTE]
> Historisch gesehen akzeptierte dieses Element fast alle MathML-Attribute und wurde verwendet, um die Standard-Attributwerte seiner Nachkommen zu überschreiben. Später wurde es auf nur noch wenige relevante Stil-Attribute beschränkt, die in bestehenden Webseiten verwendet wurden. Heutzutage sind diese Stil-Attribute [gemeinsam für alle MathML-Elemente](/de/docs/Web/MathML/Global_attributes) und somit ist `<mstyle>` wirklich nur gleichbedeutend mit einem [`<mrow>`](/de/docs/Web/MathML/Element/mrow) Element. Dennoch kann `<mstyle>` noch relevant für die Kompatibilität mit MathML-Implementierungen außerhalb von Browsern sein.

## Attribute

Die Attribute dieses Elements schließen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden veralteten Attribute ein:

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

Das folgende Beispiel verwendet die [globalen Attribute](/de/docs/Web/MathML/Global_attributes) `displaystyle` und `mathcolor`, um jeweils den [`math-style`](/de/docs/Web/CSS/math-style) und die [`color`](/de/docs/Web/CSS/color) der `<munder>` und `<munderover>` Kinder zu überschreiben:

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

### Veraltete Script-Attribute

Das folgende Beispiel zeigt eine Formel mit [`font-size`](/de/docs/Web/CSS/font-size) auf `128pt` eingestellt. Sie enthält Zahlen, die in geschachtelten Superscripts platziert sind, sowie ein `<mstyle>`-Element mit den veralteten Attributen `scriptsizemultiplier` und `scriptminsize`. Die `font-size` wird mit `0.5` multipliziert, wenn jedes Superscript betreten wird, solange sie dadurch nicht kleiner als `16pt` wird.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
