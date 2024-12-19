---
title: "ValidityState: patternMismatch-Eigenschaft"
short-title: patternMismatch
slug: Web/API/ValidityState/patternMismatch
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`patternMismatch`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces gibt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut des Elements festgelegten Anforderungen entspricht.

Die `patternMismatch`-Eigenschaft ist genau dann wahr, wenn alle folgenden Bedingungen erfüllt sind:

- das Feld unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut — das bedeutet, das {{HTMLElement("input")}} ist vom `type` {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, oder {{HTMLElement("input/search", "search")}}
- das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut enthält einen gültigen regulären Ausdruck
- der Wert des {{HTMLElement("input")}} entspricht nicht den durch den [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Wert gesetzten Anforderungen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das `ValidityState`-Objekt nicht den Anforderungen entspricht.

## Beispiele

Gegeben folgendes:

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

Hier haben wir 3 Abschnitte für eine nordamerikanische Telefonnummer mit einer impliziten Beschriftung, die alle drei Komponenten der Telefonnummer umfasst und erwartet jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern, wie durch das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut auf jedem Abschnitt definiert.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` auf true gesetzt. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 87)}}

Beachten Sie, dass in diesem Fall ein `patternMismatch` und nicht [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) ausgelöst wird, wenn die Werte zu lang oder zu kurz sind, da es das Muster ist, das die Länge des Werts bestimmt. Hätten wir stattdessen die [`minlength`](/de/docs/Web/HTML/Attributes/minlength)- und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Attribute verwendet, hätten wir möglicherweise gesehen, dass [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) auf true gesetzt werden.

> [!NOTE]
> Der `{{HTMLElement("input/email", "email")}}` Eingabetyp erfordert mindestens ein Muster von `x@y`, und der `{{HTMLElement("input/url", "url")}}` Eingabetyp erfordert mindestens ein Muster von x:, ohne dass ein Muster-Attribut vorhanden ist. Wenn ungültig, wird [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) auf true gesetzt, wenn kein Muster-Attribut vorhanden ist (oder wenn das Muster-Attribut für diesen Eingabetyp nicht gültig ist).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Formularvalidierung für Daten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
