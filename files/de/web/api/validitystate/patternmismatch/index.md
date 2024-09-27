---
title: "ValidityState: patternMismatch-Eigenschaft"
short-title: patternMismatch
slug: Web/API/ValidityState/patternMismatch
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`patternMismatch`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces zeigt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut festgelegten Einschränkungen entspricht.

Die `patternMismatch`-Eigenschaft ist genau dann `true`, wenn alle folgenden Bedingungen zutreffen:

- Das Feld unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut — das bedeutet, dass das {{HTMLElement("input")}} vom `type` {{HTMLElement("input/text", "Text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "E-Mail")}}, {{HTMLElement("input/url", "URL")}}, {{HTMLElement("input/password", "Passwort")}} oder {{HTMLElement("input/search", "Suche")}} ist.
- Das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut enthält einen gültigen regulären Ausdruck.
- Der Wert des {{HTMLElement("input")}} entspricht nicht den durch den Wert des [`pattern`](/de/docs/Web/HTML/Attributes/pattern) festgelegten Einschränkungen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das `ValidityState`-Objekt nicht den Einschränkungen entspricht.

## Beispiele

Gegeben ist Folgendes:

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

Hier haben wir drei Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst. Es werden jeweils 3-stellige, 3-stellige und 4-stellige Zahlen erwartet, wie es durch das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut für jedes festgelegt ist.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` `true` sein. Wenn `true`, stimmt das Element mit den {{cssxref(":invalid")}} CSS-Pseudoklassen überein.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Beispiele", 300, 87)}}

Beachten Sie, in diesem Fall erhalten wir ein `patternMismatch`, nicht ein [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort), wenn die Werte zu lang oder zu kurz sind, da das Muster die Länge des Wertes bestimmt. Hätten wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) verwendet, könnten wir feststellen, dass [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) `true` wären.

> [!NOTE]
> Der `{{HTMLElement("input/email", "E-Mail")}}` Eingabetyp erfordert mindestens eine Übereinstimmung mit `x@y` und der `{{HTMLElement("input/url", "URL")}}`-Eingabetyp erfordert mindestens eine Übereinstimmung mit x:, wenn kein Musterattribut vorhanden ist. Ist der Wert ungültig, wird [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) `true`, wenn kein Musterattribut vorhanden ist (oder wenn das Musterattribut für diesen Eingabetyp nicht gültig ist).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenvalidierung von Formularen](/de/docs/Learn/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
