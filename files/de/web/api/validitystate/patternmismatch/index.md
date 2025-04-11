---
title: "ValidityState: patternMismatch-Eigenschaft"
short-title: patternMismatch
slug: Web/API/ValidityState/patternMismatch
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`patternMismatch`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces zeigt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut des Elements festgelegten Einschränkungen entspricht.

Die `patternMismatch`-Eigenschaft ist genau dann `true`, wenn alle folgenden Bedingungen zutreffen:

- das Feld unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut — das bedeutet, das {{HTMLElement("input")}}-Element ist vom `type` {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} oder {{HTMLElement("input/search", "search")}}
- das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut enthält einen gültigen regulären Ausdruck
- der Wert des {{HTMLElement("input")}} entspricht nicht den durch den [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Wert festgelegten Einschränkungen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das `ValidityState`-Objekt nicht den Einschränkungen entspricht.

## Beispiele

Gegeben sei folgendes:

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

Hier haben wir drei Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst, mit jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern, wie durch das auf jedem festgelegte [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut definiert.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` true. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 87)}}

Beachten Sie, dass wir in diesem Fall einen `patternMismatch` erhalten und nicht [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort), wenn die Werte zu lang oder zu kurz sind, da es das Muster ist, das die Länge des Wertes bestimmt. Hätten wir stattdessen die [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribute verwendet, könnten wir sehen, dass [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) true ist.

> [!NOTE]
> Der `{{HTMLElement("input/email", "email")}}`-Eingabetyp erfordert mindestens eine Übereinstimmung von `x@y` und der `{{HTMLElement("input/url", "url")}}`-Typ erfordert mindestens eine Übereinstimmung mit x:, ohne vorhandenes Musterattribut. Wenn ungültig, wird der [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) wahr sein, wenn kein Musterattribut vorhanden ist (oder wenn das Musterattribut für diesen Eingabetyp nicht gültig ist).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
