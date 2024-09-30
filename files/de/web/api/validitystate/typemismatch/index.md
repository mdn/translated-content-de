---
title: "ValidityState: typeMismatch-Eigenschaft"
short-title: typeMismatch
slug: Web/API/ValidityState/typeMismatch
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`typeMismatch`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces zeigt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das `type`-Attribut des Elements festgelegten Einschränkungen entspricht.

Wenn das `type`-Attribut bestimmte Zeichenfolgen erwartet, wie z.B. die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/url", "url")}}-Typen, und der Wert nicht den vom Typ festgelegten Einschränkungen entspricht, ist die `typeMismatch`-Eigenschaft wahr.

Der {{HTMLElement("input/email", "email")}}-Eingabetyp erwartet eine oder mehrere gültige E-Mail-Adressen, abhängig davon, ob das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut vorhanden ist. Eine gültige E-Mail-Adresse umfasst ein E-Mail-Präfix und eine Domain, mit oder ohne Top-Level-Domain. Wenn der Wert des E-Mail-Eingabefeldes nicht ein Leerstring, eine einzelne gültige E-Mail-Adresse oder eine oder mehrere durch Kommas getrennte E-Mail-Adressen ist, sofern das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut vorhanden ist, liegt ein `typeMismatch` vor.

Der {{HTMLElement("input/url", "url")}}-Eingabetyp erwartet eine oder mehrere gültige URLs, abhängig davon, ob das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut vorhanden ist. Eine gültige URL umfasst ein Protokoll, optional mit einer IP-Adresse, oder eine optionale Subdomain, Domain und Kombination mit Top-Level-Domain. Wenn der Wert des URL-Eingabefeldes nicht ein Leerstring, eine einzelne gültige URL oder eine oder mehrere durch Kommas getrennte URLs ist, sofern das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut vorhanden ist, liegt ein `typeMismatch` vor.

| Eingabetyp                              | Wert              | Erwarteter Wert                                               |
| --------------------------------------- | ----------------- | -------------------------------------------------------------- |
| {{HTMLElement("input/email", "email")}} | `x@y` oder `x@y.z` | E-Mail-Adresse, mit oder ohne [TLD](/de/docs/Glossary/TLD) |
| {{HTMLElement("input/url", "url")}}     | `x:` oder `x://y.z` | Protokoll oder vollständige URL mit Protokoll                  |

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Typ-Konflikt bei Eingabeelement

Der `typeMismatch` tritt auf, wenn eine Diskrepanz zwischen dem durch das [`value`](/de/docs/Web/HTML/Element/input#value) erwarteten Wert über das [`type`](/de/docs/Web/HTML/Element/input#input_types)-Attribut und den tatsächlich vorhandenen Daten besteht. Der `typeMismatch` ist nur ein möglicher Fehler unter vielen und ist nur für die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/url", "url")}}-Typen relevant. Wenn der bereitgestellte Wert bei anderen Eingabetypen nicht dem erwarteten Wert entspricht, erhalten Sie verschiedene Fehler. Wenn zum Beispiel der Wert des {{HTMLElement("input/number", "number")}} nicht eine Gleitzahl ist, ist `badInput` `true`. Wenn die E-Mail [`required`](/de/docs/Web/HTML/Attributes/required) ist, aber leer bleibt, wird [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

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

- ValidityState [badInput](/de/docs/Web/API/ValidityState/badInput), [valid](/de/docs/Web/API/ValidityState/valid), [customError](/de/docs/Web/API/ValidityState/customError) Eigenschaften.
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenvalidierung in Formularen](/de/docs/Learn/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
