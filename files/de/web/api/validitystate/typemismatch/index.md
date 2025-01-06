---
title: "ValidityState: typeMismatch Eigenschaft"
short-title: typeMismatch
slug: Web/API/ValidityState/typeMismatch
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`typeMismatch`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle zeigt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das [`type`](/de/docs/Web/HTML/Element/input#input_types)-Attribut des Elements festgelegten Einschränkungen entspricht.

Wenn das `type`-Attribut spezifische Zeichenfolgen erwartet, wie die Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, und der Wert nicht den durch den Typ festgelegten Einschränkungen entspricht, wird die `typeMismatch`-Eigenschaft auf true gesetzt.

Der {{HTMLElement("input/email", "email")}} Eingabetyp erwartet eine oder mehrere gültige E-Mail-Adressen, abhängig davon, ob das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut vorhanden ist. Eine gültige E-Mail-Adresse umfasst ein E-Mail-Präfix und eine Domain, mit oder ohne Top-Level-Domain. Wenn der Wert des E-Mail-Eingabefelds nicht eine leere Zeichenfolge, eine einzelne gültige E-Mail-Adresse oder eine oder mehrere kommagetrennte E-Mail-Adressen ist, sofern das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut vorhanden ist, liegt ein `typeMismatch` vor.

Der {{HTMLElement("input/url", "url")}} Eingabetyp erwartet eine oder mehrere gültige URLs, abhängig davon, ob das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut vorhanden ist. Eine gültige URL umfasst ein Protokoll, optional mit einer IP-Adresse oder einer optionalen Kombination aus Subdomain, Domain und Top-Level-Domain. Wenn der Wert des URL-Eingabefelds nicht eine leere Zeichenfolge, eine einzelne gültige URL oder eine oder mehrere kommagetrennte URLs ist, sofern das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut vorhanden ist, liegt ein `typeMismatch` vor.

| Eingabetyp                              | Wert                | Erwarteter Wert                                          |
| --------------------------------------- | ------------------- | -------------------------------------------------------- |
| {{HTMLElement("input/email", "email")}} | `x@y` oder `x@y.z`  | E-Mail-Adresse, mit oder ohne {{Glossary("TLD", "TLD")}} |
| {{HTMLElement("input/url", "url")}}     | `x:` oder `x://y.z` | Protokoll oder vollständige URL mit Protokoll            |

## Wert

Ein boolescher Wert, der `true` ist, wenn das `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Typmismatch bei Eingabeelement

Der `typeMismatch` tritt auf, wenn eine Diskrepanz zwischen dem über das [`type`](/de/docs/Web/HTML/Element/input#input_types)-Attribut erwarteten [`value`](/de/docs/Web/HTML/Element/input#value) und den tatsächlich vorhandenen Daten besteht.
Der `typeMismatch` ist nur einer von vielen möglichen Fehlern und ist nur relevant für die Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}.
Wenn der bereitgestellte Wert nicht dem erwarteten Wert basierend auf dem Typ für andere Eingabetypen entspricht, treten verschiedene Fehler auf.
Zum Beispiel, wenn der Wert des {{HTMLElement("input/number", "number")}} Eingabefelds keine Gleitkommazahl ist, ist `badInput` `true`.
Wenn die E-Mail [`required`](/de/docs/Web/HTML/Attributes/required) ist, aber leer bleibt, wird [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

```html
<pre id="log">Validation logged here...</pre>
<p>
  <label>
    Enter an email address:
    <input id="emailInput" type="email" value="example.com" required />
  </label>
</p>
```

```css
input:invalid {
  border: red solid 3px;
}
```

```css hidden
body {
  margin: 0.5rem;
}
pre {
  padding: 1rem;
  height: 2rem;
  background-color: lightgrey;
  outline: 1px solid grey;
}
```

```js
const emailInput = document.getElementById("emailInput");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

emailInput.addEventListener("input", () => {
  emailInput.reportValidity();
  if (emailInput.validity.valid) {
    log("Input OK…");
  } else if (emailInput.validity.typeMismatch) {
    log("Input is not an email.");
  } else {
    log("Validation failed: " + emailInput.validationMessage);
  }
});
```

{{EmbedLiveSample("Examples", "100%", "160")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- ValidityState [badInput](/de/docs/Web/API/ValidityState/badInput), [valid](/de/docs/Web/API/ValidityState/valid), [customError](/de/docs/Web/API/ValidityState/customError)-Eigenschaften.
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
