---
title: <mo>
slug: Web/MathML/Element/mo
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mo>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert einen **Operator** im weiten Sinne. Neben Operatoren im strikten mathematischen Sinne umfasst dieses Element auch "Operatoren" wie Klammern, Trennzeichen wie Komma und Semikolon oder "Betrag"-Striche.

## Attribute

Zusätzlich zu den [globalen MathML-Attributen](/de/docs/Web/MathML/Global_attributes) akzeptiert dieses Element die folgenden Attribute [deren Standardwerte von der Form und dem Inhalt des Operators abhängen](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator):

- `accent` {{Non-standard_Inline}}
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator als Akzent behandelt werden soll, wenn er als [Unterskript](/de/docs/Web/MathML/Element/munder)- oder [Überskript](/de/docs/Web/MathML/Element/mover) verwendet wird (d.h. größer und näher zur Basisausdruck gezeichnet).
- `fence`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator ein Zaun (wie Klammern) ist. Es gibt keinen visuellen Effekt für dieses Attribut.
- `form`
  - : Ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das angibt, wie der Operator dargestellt werden soll. Je nach Wert kann unterschiedlich viel Raum auf beiden Seiten des Operators dargestellt werden. Es kann einen der folgenden Werte haben:
    - `prefix`: Der Operator erscheint vor seinen Operanden. Zum Beispiel ist in dem Ausdruck `+ a` das `+` ein Präfix-Operator.
    - `infix`: Der Operator erscheint zwischen seinen Operanden. Im Ausdruck `a + b` ist das `+` ein Infix-Operator.
    - `postfix`: Der Operator erscheint nach seinen Operanden. Zum Beispiel ist in dem Ausdruck `a +` das `+` ein Postfix-Operator.
- `largeop`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator größer gezeichnet werden soll, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` gesetzt ist.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Raum vor dem Operator angibt.
- `maxsize`
  - : Ein {{cssxref("length-percentage")}}, das die maximale Größe des Operators angibt, wenn er dehnbar ist.
- `minsize`
  - : Ein {{cssxref("length-percentage")}}, das die minimale Größe des Operators angibt, wenn er dehnbar ist.
- `movablelimits`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob angefügte Unter- und Überskripte in die Positionen von Sub- und Superskripten verschoben werden, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` gesetzt ist.
- `rspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Raum nach dem Operator angibt.
- `separator`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator ein Trennzeichen (wie Kommas) ist. Es gibt keinen visuellen Effekt für dieses Attribut.
- `stretchy`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator zur Größe des angrenzenden Elements gedehnt wird.
- `symmetric`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob ein dehnbarer Operator vertikal symmetrisch um die imaginäre Mathematikachse (zentrierte Bruchlinie) sein sollte.

> [!NOTE]
> Für die Attribute `lspace`, `maxsize`, `minsize` und `rspace` können einige Browser auch [alte MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

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
