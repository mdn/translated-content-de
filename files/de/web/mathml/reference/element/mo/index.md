---
title: <mo>
slug: Web/MathML/Reference/Element/mo
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<mo>`**-Element von [MathML](/de/docs/Web/MathML) stellt einen **Operator** im weiteren Sinne dar. Neben Operatoren im streng mathematischen Sinn umfasst dieses Element auch „Operatoren“ wie Klammern, Trennzeichen wie Kommas und Semikolons oder Betragsstriche.

## Attribute

Zusätzlich zu den [globalen MathML-Attributen](/de/docs/Web/MathML/Reference/Global_attributes) akzeptiert dieses Element die folgenden Attribute, [deren Standardwerte von der Form und dem Inhalt des Operators abhängen](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator):

- `accent` {{Non-standard_Inline}}
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator bei Verwendung als [Unterskript](/de/docs/Web/MathML/Reference/Element/munder) oder [Überskript](/de/docs/Web/MathML/Reference/Element/mover) wie ein Akzent behandelt werden soll (d.h. größer und näher am Basisausdruck dargestellt wird).
- `fence`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator ein Begrenzungszeichen ist (z. B. eine Klammer). Dieses Attribut hat keine visuelle Auswirkung.
- `form`
  - : Ein {{Glossary("Enumerated", "Aufzählungsattribut")}}, das angibt, wie der Operator dargestellt werden soll. Je nach Wert kann beispielsweise auf beiden Seiten des Operators unterschiedlich viel Abstand dargestellt werden. Es kann einen der folgenden Werte haben:
    - `prefix`: Der Operator steht vor seinen Operanden. Im Ausdruck `+ a` ist `+` beispielsweise ein Präfixoperator.
    - `infix`: Der Operator steht zwischen seinen Operanden. Im Ausdruck `a + b` ist `+` ein Infixoperator.
    - `postfix`: Der Operator steht nach seinen Operanden. Im Ausdruck `a +` ist `+` beispielsweise ein Postfixoperator.
- `largeop`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator größer dargestellt werden soll, wenn {{cssxref("math-style")}} auf `normal` gesetzt ist.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, das den Abstand vor dem Operator angibt.
- `maxsize`
  - : Ein {{cssxref("length-percentage")}}, das die maximale Größe des Operators angibt, wenn er dehnbar ist.
- `minsize`
  - : Ein {{cssxref("length-percentage")}}, das die minimale Größe des Operators angibt, wenn er dehnbar ist.
- `movablelimits`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob angehängte Unter- und Überskripte an tief- bzw. hochgestellte Positionen verschoben werden, wenn {{cssxref("math-style")}} auf `compact` gesetzt ist.
- `rspace`
  - : Ein {{cssxref("length-percentage")}}, das den Abstand nach dem Operator angibt.
- `separator`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator ein Trennzeichen ist (z. B. ein Komma). Dieses Attribut hat keine visuelle Auswirkung.
- `stretchy`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator auf die Größe des benachbarten Elements gedehnt wird.
- `symmetric`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob ein dehnbarer Operator vertikal symmetrisch um die gedachte mathematische Achse (die zentrierte Bruchlinie) dargestellt werden soll.

> [!NOTE]
> Für die Attribute `lspace`, `maxsize`, `minsize` und `rspace` akzeptieren einige Browser möglicherweise auch [ältere MathML-Längenangaben](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths).

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

{{ EmbedLiveSample('examples', 700, 200, "", "") }}

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
