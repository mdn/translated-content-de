---
title: <mo>
slug: Web/MathML/Element/mo
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<mo>`** [MathML](/de/docs/Web/MathML) Element repräsentiert einen **Operator** im weitesten Sinne. Neben Operatoren im streng mathematischen Sinn umfasst dieses Element auch "Operatoren" wie Klammern, Trennzeichen wie Kommas und Semikolons oder "Betragsstriche".

## Attribute

Zusätzlich zu den [globalen MathML-Attributen](/de/docs/Web/MathML/Global_attributes) akzeptiert dieses Element die folgenden Attribute [deren Standardwerte von der Form und dem Inhalt des Operators abhängen](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator):

- `accent` {{Non-standard_Inline}}
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das anzeigt, ob der Operator als Akzent behandelt werden soll, wenn er als [Unter](/de/docs/Web/MathML/Element/munder)- oder [Überschrift](/de/docs/Web/MathML/Element/mover) verwendet wird (d.h. größer und näher an dem Basis-Ausdruck gezeichnet).
- `fence`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das anzeigt, ob der Operator eine Begrenzung ist (wie Klammern). Es gibt keinen visuellen Effekt für dieses Attribut.
- `largeop`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das anzeigt, ob der Operator größer gezeichnet werden soll, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` eingestellt ist.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Platz vor dem Operator angibt.
- `maxsize`
  - : Ein {{cssxref("length-percentage")}}, das die maximale Größe des Operators angibt, wenn er dehnbar ist.
- `minsize`
  - : Ein {{cssxref("length-percentage")}}, das die minimale Größe des Operators angibt, wenn er dehnbar ist.
- `movablelimits`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob angehängte Unter- und Überschriften in die Positionen von Unter- und Hochschrift verschoben werden, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` eingestellt ist.
- `rspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Platz nach dem Operator angibt.
- `separator`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator ein Trennzeichen ist (wie Kommas). Es gibt keinen visuellen Effekt für dieses Attribut.
- `stretchy`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator auf die Größe des angrenzenden Elements gedehnt wird.
- `symmetric`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob ein dehnbarer Operator vertikal symmetrisch um die imaginäre Mathematikachse (zentrierte Bruchlinie) sein sollte.

> [!NOTE]
> Für die Attribute `lspace`, `maxsize`, `minsize` und `rspace` akzeptieren einige Browser möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Beispiele

```html-nolint
<math display="block">
  <mrow>
    <mn>5</mn>
    <mo>+</mo>
    <mn>5</mn>
  </mrow>
</math>

<math display="block">
  <mrow>
    <mo>[</mo> <!-- default form value: prefix -->
    <mrow>
      <mn>0</mn>
      <mo>;</mo> <!-- default form value: infix -->
      <mn>1</mn>
    </mrow>
    <mo>)</mo> <!-- default form value: postfix -->
  </mrow>
</math>
```

{{ EmbedLiveSample('mo_example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
