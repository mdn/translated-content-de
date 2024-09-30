---
title: "ValidityState: patternMismatch-Eigenschaft"
short-title: patternMismatch
slug: Web/API/ValidityState/patternMismatch
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`patternMismatch`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces zeigt an, ob der Wert eines {{HTMLElement("input")}}-Elements, nachdem es vom Benutzer bearbeitet wurde, nicht den durch das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut festgelegten Beschränkungen entspricht.

Die `patternMismatch`-Eigenschaft ist genau dann `true`, wenn alle folgenden Bedingungen zutreffen:

- Das Feld unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut — was bedeutet, dass der {{HTMLElement("input")}} vom `Typ` {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} oder {{HTMLElement("input/search", "search")}} ist.
- Das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut enthält einen gültigen regulären Ausdruck.
- Der Wert des {{HTMLElement("input")}}-Elements entspricht nicht den durch den [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Wert festgelegten Beschränkungen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das `ValidityState`-Objekt den Beschränkungen nicht entspricht.

## Beispiele

Gegeben seien die folgenden:

```html
<p>
  <label
    >Enter your phone number in the format (123)456-7890 (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit area code"
      size="2" />)-
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit prefix"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4-digit number"
      size="3" />
  </label>
</p>
```

Hier haben wir 3 Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst, und erwarten jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern, wie durch das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut festgelegt.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` `true`. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 87)}}

Beachten Sie in diesem Fall, dass wir ein `patternMismatch` erhalten und nicht [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort), wenn die Werte zu lang oder zu kurz sind, da das Muster die Länge des Wertes bestimmt. Hätten wir stattdessen die [`minlength`](/de/docs/Web/HTML/Attributes/minlength)- und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Attribute verwendet, hätten wir vielleicht [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) als `true` erlebt.

> [!NOTE]
> Der `{{HTMLElement("input/email", "email")}}`-Eingabetyp erfordert mindestens ein Muster von `x@y` und der `{{HTMLElement("input/url", "url")}}`-Typ erfordert mindestens ein Muster von `x:`, ohne dass ein Muster-Attribut vorhanden ist. Wenn sie ungültig sind, wird [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) `true` sein, wenn kein Muster-Attribut vorhanden ist (oder wenn das Muster-Attribut für diesen Eingabetyp nicht gültig ist).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
