---
title: "ValidityState: typeMismatch-Eigenschaft"
short-title: typeMismatch
slug: Web/API/ValidityState/typeMismatch
l10n:
  sourceCommit: f37e438c6dece2b381d2b9f35dc53af21a916a75
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`typeMismatch`** des Interfaces [`ValidityState`](/de/docs/Web/API/ValidityState) gibt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) des Elements festgelegten Einschränkungen entspricht.

Wenn das Attribut `type` bestimmte Zeichenfolgen erwartet, wie bei den Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, und der Wert nicht den durch den Typ festgelegten Einschränkungen entspricht, ist die Eigenschaft `typeMismatch` auf true gesetzt.

Der Eingabetyp {{HTMLElement("input/email", "email")}} erwartet eine oder mehrere gültige E-Mail-Adressen, abhängig davon, ob das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist. Eine gültige E-Mail-Adresse umfasst einen E-Mail-Präfix und eine Domain, mit oder ohne Top-Level-Domain. Wenn der Wert der E-Mail-Eingabe keine leere Zeichenfolge, keine einzelne gültige E-Mail-Adresse oder – falls das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist – keine oder mehrere durch Kommas getrennte E-Mail-Adressen ist, liegt ein `typeMismatch` vor.

Der Eingabetyp {{HTMLElement("input/url", "url")}} erwartet eine oder mehrere gültige URLs, abhängig davon, ob das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist. Eine gültige URL enthält ein Protokoll, optional mit einer IP-Adresse, oder eine optionale Kombination aus Subdomain, Domain und Top-Level-Domain. Wenn der Wert der URL-Eingabe keine leere Zeichenfolge, keine einzelne gültige URL oder – falls das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist – keine oder mehrere durch Kommas getrennte URLs ist, liegt ein `typeMismatch` vor.

| Eingabetyp                              | Wert                | Erwarteter Wert                                          |
| --------------------------------------- | ------------------- | -------------------------------------------------------- |
| {{HTMLElement("input/email", "email")}} | `x@y` oder `x@y.z`  | E-Mail-Adresse, mit oder ohne {{Glossary("TLD", "TLD")}} |
| {{HTMLElement("input/url", "url")}}     | `x:` oder `x://y.z` | Protokoll oder vollständige URL mit Protokoll            |

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` den Einschränkungen nicht entspricht.

## Beispiele

### Typabweichung bei einem input-Element

Ein `typeMismatch` tritt auf, wenn eine Diskrepanz zwischen dem über das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) erwarteten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und den tatsächlich vorhandenen Daten besteht.
Der `typeMismatch` ist nur einer von vielen möglichen Fehlern und nur für die Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}} relevant.
Wenn der bereitgestellte Wert bei anderen Eingabetypen nicht dem auf dem Typ basierenden erwarteten Wert entspricht, treten andere Fehler auf.
Wenn beispielsweise der Wert einer {{HTMLElement("input/number", "number")}}-Eingabe keine Gleitkommazahl ist, ist `badInput` auf `true` gesetzt.
Wenn die E-Mail-Adresse [`required`](/de/docs/Web/HTML/Reference/Attributes/required) ist, aber leer ist, wird [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) auf `true` gesetzt.

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
    log(`Validation failed: ${emailInput.validationMessage}`);
  }
});
```

{{EmbedLiveSample("Examples", "100%", "160")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften von ValidityState: [badInput](/de/docs/Web/API/ValidityState/badInput), [valid](/de/docs/Web/API/ValidityState/valid), [customError](/de/docs/Web/API/ValidityState/customError).
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenvalidierung von Formularen](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
