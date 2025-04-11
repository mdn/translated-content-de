---
title: "ValidityState: typeMismatch-Eigenschaft"
short-title: typeMismatch
slug: Web/API/ValidityState/typeMismatch
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`typeMismatch`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces zeigt an, ob der Wert eines vom Benutzer bearbeiteten {{HTMLElement("input")}} nicht den durch das [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types)-Attribut des Elements festgelegten Einschränkungen entspricht.

Wenn das `type`-Attribut bestimmte Strings erwartet, wie bei den Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, und der Wert nicht den durch den Typ festgelegten Einschränkungen entspricht, wird die `typeMismatch`-Eigenschaft wahr sein.

Der {{HTMLElement("input/email", "email")}}-Eingabetyp erwartet je nach Vorhandensein des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attributs eine oder mehrere gültige E-Mail-Adressen. Eine gültige E-Mail-Adresse enthält ein E-Mail-Präfix und eine Domain, mit oder ohne Top-Level-Domain. Wenn der Wert der E-Mail-Eingabe nicht eine leere Zeichenkette, eine einzelne gültige E-Mail-Adresse oder eine oder mehrere durch Kommas getrennte E-Mail-Adressen ist, gibt es einen `typeMismatch`.

Der {{HTMLElement("input/url", "url")}}-Eingabetyp erwartet je nach Vorhandensein des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attributs eine oder mehrere gültige URLs. Eine gültige URL enthält ein Protokoll, optional mit einer IP-Adresse, oder eine optionale Subdomain, Domain und Top-Level-Domain-Kombination. Wenn der Wert der URL-Eingabe nicht eine leere Zeichenkette, eine einzelne gültige URL oder eine oder mehrere durch Kommas getrennte URLs ist, gibt es einen `typeMismatch`.

| Eingabetyp                              | Wert                | Erwarteter Wert                                          |
| --------------------------------------- | ------------------- | -------------------------------------------------------- |
| {{HTMLElement("input/email", "email")}} | `x@y` oder `x@y.z`  | E-Mail-Adresse, mit oder ohne {{Glossary("TLD", "TLD")}} |
| {{HTMLElement("input/url", "url")}}     | `x:` oder `x://y.z` | Protokoll oder vollständige URL mit Protokoll            |

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Typenfehlanpassung bei Input-Elementen

Der `typeMismatch` tritt auf, wenn es eine Diskrepanz zwischen dem über das [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types)-Attribut erwarteten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und den tatsächlich vorhandenen Daten gibt.
Der `typeMismatch` ist nur einer von vielen möglichen Fehlern und ist nur relevant für die Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}.
Wenn der bereitgestellte Wert nicht dem erwarteten Wert basierend auf dem Typ für andere Eingabetypen entspricht, treten verschiedene Fehler auf.
Zum Beispiel, wenn der {{HTMLElement("input/number", "number")}}-Eingabewert keine Gleitkommazahl ist, wird `badInput` `true`.
Wenn die E-Mail [`required`](/de/docs/Web/HTML/Reference/Attributes/required) ist, aber leer bleibt, wird [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

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
- [Constraint validation](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenvalidierung in Formularen](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
