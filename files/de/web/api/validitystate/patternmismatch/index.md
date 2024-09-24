---
title: "ValidityState: patternMismatch Eigenschaft"
short-title: patternMismatch
slug: Web/API/ValidityState/patternMismatch
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`patternMismatch`** Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interface gibt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut des Elements festgelegten Einschränkungen entspricht.

Die `patternMismatch` Eigenschaft ist genau dann `true`, wenn alle folgenden Bedingungen zutreffen:

- das Feld unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut — was bedeutet, dass das {{HTMLElement("input")}} von `type` {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} oder {{HTMLElement("input/search", "search")}} ist
- das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut enthält einen gültigen regulären Ausdruck
- der {{HTMLElement("input")}}-Wert entspricht nicht den durch den [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Wert festgelegten Einschränkungen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das `ValidityState`-Objekt nicht den Einschränkungen entspricht.

## Beispiele

Gegeben sei Folgendes:

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

Hier haben wir 3 Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst und jeweils 3-Stellen, 3-Stellen und 4-Stellen erwartet, wie durch das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut festgelegt ist.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` true sein. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 87)}}

In diesem Fall erhalten wir einen `patternMismatch` und nicht {{domxref('validityState.tooLong')}} oder {{domxref('validityState.tooShort')}} wenn die Werte zu lang oder zu kurz sind, da das Muster die Länge des Wertes vorgibt. Hätten wir stattdessen [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) Attribute verwendet, hätten wir möglicherweise gesehen, dass {{domxref('validityState.tooLong')}} oder {{domxref('validityState.tooShort')}} wahr ist.

> [!NOTE]
> Der `{{HTMLElement("input/email", "email")}}`-Eingabetyp erfordert mindestens ein Übereinstimmungsmuster von `x@y` und der `{{HTMLElement("input/url", "url")}}`-Typ erfordert mindestens eine Übereinstimmung zu x:, ohne dass ein pattern-Attribut vorhanden ist. Wenn ungültig, wird {{domxref('validityState.typeMismatch')}} wahr sein, wenn kein pattern-Attribut vorhanden ist (oder wenn das pattern-Attribut für diesen Eingabetyp nicht gültig ist).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenvalidierung bei Formularen](/de/docs/Learn/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
