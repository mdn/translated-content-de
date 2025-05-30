---
title: "ValidityState: typeMismatch-Eigenschaft"
short-title: typeMismatch
slug: Web/API/ValidityState/typeMismatch
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`typeMismatch`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle zeigt an, ob der Wert eines vom Benutzer bearbeiteten {{HTMLElement("input")}}-Elements nicht den durch das [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types)-Attribut festgelegten Einschränkungen entspricht.

Wenn das `type`-Attribut bestimmte Zeichenfolgen erwartet, wie bei den Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, und der Wert nicht den für den Typ festgelegten Einschränkungen entspricht, ist die `typeMismatch`-Eigenschaft wahr.

Der {{HTMLElement("input/email", "email")}}-Eingabetyp erwartet eine oder mehrere gültige E-Mail-Adressen, je nachdem, ob das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut vorhanden ist. Eine gültige E-Mail-Adresse enthält ein E-Mail-Präfix und eine Domain, mit oder ohne Top-Level-Domain. Ist der Wert des E-Mail-Eingabefelds kein leerer String, eine einzelne gültige E-Mail-Adresse oder eine oder mehrere durch Kommas getrennte E-Mail-Adressen, falls das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut vorhanden ist, liegt ein `typeMismatch` vor.

Der {{HTMLElement("input/url", "url")}}-Eingabetyp erwartet eine oder mehrere gültige URLs, je nachdem, ob das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut vorhanden ist. Eine gültige URL umfasst ein Protokoll, optional mit einer IP-Adresse oder einer optionalen Subdomain, Domain und einer Top-Level-Domain-Kombination. Ist der Wert des URL-Eingabefelds kein leerer String, eine einzelne gültige URL oder eine oder mehrere durch Kommas getrennte URLs, falls das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut vorhanden ist, liegt ein `typeMismatch` vor.

| Eingabetyp                              | Wert                | Erwarteter Wert                                          |
| --------------------------------------- | ------------------- | -------------------------------------------------------- |
| {{HTMLElement("input/email", "email")}} | `x@y` oder `x@y.z`  | E-Mail-Adresse, mit oder ohne {{Glossary("TLD", "TLD")}} |
| {{HTMLElement("input/url", "url")}}     | `x:` oder `x://y.z` | Protokoll oder vollständige URL mit Protokoll            |

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Typfehler bei Eingabeelement

Der `typeMismatch` tritt auf, wenn eine Diskrepanz zwischen dem über das [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types)-Attribut erwarteten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und den tatsächlich vorhandenen Daten vorhanden ist.
Der `typeMismatch` ist nur einer der vielen möglichen Fehler und ist nur relevant für die Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}.
Wenn der bereitgestellte Wert nicht dem erwarteten Wert basierend auf dem Typ für andere Eingabetypen entspricht, treten andere Fehler auf.
Zum Beispiel, wenn der Wert eines {{HTMLElement("input/number", "number")}}-Eingabefelds keine Gleitkommazahl ist, ist der `badInput` `true`.
Wenn die E-Mail-Adresse [`required`](/de/docs/Web/HTML/Reference/Attributes/required) ist, aber leer bleibt, wird [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

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

- ValidityState [badInput](/de/docs/Web/API/ValidityState/badInput), [valid](/de/docs/Web/API/ValidityState/valid), [customError](/de/docs/Web/API/ValidityState/customError)-Eigenschaften.
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
