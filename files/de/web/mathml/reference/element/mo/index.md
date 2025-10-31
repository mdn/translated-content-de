---
title: <mo>
slug: Web/MathML/Reference/Element/mo
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`<mo>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert einen **Operator** im weiteren Sinne. Neben Operatoren im strikten mathematischen Sinne umfasst dieses Element auch „Operatoren“ wie Klammern, Trennzeichen wie Komma und Semikolon oder Betragsstriche.

## Attribute

Zusätzlich zu den [globalen MathML-Attributen](/de/docs/Web/MathML/Reference/Global_attributes) akzeptiert dieses Element die folgenden Attribute [deren Standardwerte je nach Form und Inhalt des Operators variieren](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator):

- `accent` {{Non-standard_Inline}}
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator als Akzent behandelt werden soll, wenn er als [Unter](/de/docs/Web/MathML/Reference/Element/munder)- oder [Überskript](/de/docs/Web/MathML/Reference/Element/mover) verwendet wird (d.h. größer und näher an der Basiszeichenfolge gezeichnet).
- `fence`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator eine Umzäunung (z.B. Klammern) ist. Es gibt keinen visuellen Effekt für dieses Attribut.
- `form`
  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das angibt, wie der Operator dargestellt werden soll. Zum Beispiel könnte, abhängig vom Wert, unterschiedlich viel Platz auf beiden Seiten des Operators dargestellt werden. Es kann einen der folgenden Werte haben:
    - `prefix`: Der Operator erscheint vor seinen Operanden. Zum Beispiel im Ausdruck `+ a`, ist das `+` ein Präfix-Operator.
    - `infix`: Der Operator erscheint zwischen seinen Operanden. Im Ausdruck `a + b`, ist das `+` ein Infix-Operator.
    - `postfix`: Der Operator erscheint nach seinen Operanden. Zum Beispiel im Ausdruck `a +`, ist das `+` ein Postfix-Operator.
- `largeop`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator größer gezeichnet werden soll, wenn [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) auf `normal` gesetzt ist.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Platz vor dem Operator angibt.
- `maxsize`
  - : Ein {{cssxref("length-percentage")}}, das die maximale Größe des Operators angibt, wenn er dehnbar ist.
- `minsize`
  - : Ein {{cssxref("length-percentage")}}, das die minimale Größe des Operators angibt, wenn er dehnbar ist.
- `movablelimits`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob angehängte Unter- und Überskripte in die Positionen für Unter- und Hochstellen verschoben werden, wenn [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) auf `compact` gesetzt ist.
- `rspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Platz nach dem Operator angibt.
- `separator`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator ein Trennzeichen (wie Kommas) ist. Es gibt keinen visuellen Effekt für dieses Attribut.
- `stretchy`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator sich an die Größe des benachbarten Elements anpasst.
- `symmetric`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob ein dehnbarer Operator vertikal symmetrisch um die imaginäre Mathematikachse (zentrierte Bruchlinie) sein soll.

> [!NOTE]
> Für die `lspace`, `maxsize`, `minsize` und `rspace` Attribute könnten einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) akzeptieren.

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
