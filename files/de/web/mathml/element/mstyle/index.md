---
title: <mstyle>
slug: Web/MathML/Element/mstyle
l10n:
  sourceCommit: f6e01b30b70e6ad3f2309c1589c8e2454038333c
---

{{MathMLRef}}

Das **`<mstyle>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um den Stil seiner Kinder zu ändern.

> [!NOTE]
> Historisch gesehen akzeptierte dieses Element fast alle MathML-Attribute und wurde verwendet, um die Standard-Attributwerte seiner Nachkommen zu überschreiben. Später wurde es auf nur wenige relevante Stilattribute beschränkt, die auf bestehenden Webseiten verwendet wurden. Heutzutage sind diese Stilattribute [allgemein für alle MathML-Elemente](/de/docs/Web/MathML/Global_attributes) und so ist `<mstyle>` wirklich nur äquivalent zu einem [`<mrow>`](/de/docs/Web/MathML/Element/mrow)-Element. Dennoch könnte `<mstyle>` weiterhin relevant sein für die Kompatibilität mit MathML-Implementierungen außerhalb von Browsern.

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

### Attribute auf CSS abgebildet

Das folgende Beispiel verwendet [globale Attribute](/de/docs/Web/MathML/Global_attributes) `displaystyle` und `mathcolor`, um den [`math-style`](/de/docs/Web/CSS/math-style) bzw. die [`color`](/de/docs/Web/CSS/color) der `<munder>` und `<munderover>` Kinder zu überschreiben:

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

### Legacy-Skript-Attribute

Das folgende Beispiel zeigt eine Formel mit [`font-size`](/de/docs/Web/CSS/font-size) auf `128pt` gesetzt. Sie enthält Zahlen, die in verschachtelten Superskripten platziert sind, sowie ein `<mstyle>`-Element mit Legacy-Attributen `scriptsizemultiplier` und `scriptminsize`. Die `font-size` wird bei jedem Eintritt in einen Superscript mit `0.5` multipliziert, solange sie dadurch nicht kleiner als `16pt` wird.

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
