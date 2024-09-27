---
title: "HTMLButtonElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLButtonElement/reportValidity
l10n:
  sourceCommit: 8ec1d24d4f935e73f39df9a7d69e58c098ebb003
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Interfaces führt dieselben Schritte zur Gültigkeitsprüfung aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity) Methode. Zusätzlich zeigt der Browser das Problem dem Benutzer an, wenn das [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event) Ereignis nicht abgebrochen wird.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls wird `false` zurückgegeben.

### Beispiele

Dieses weit hergeholte Beispiel demonstriert, wie ein Button ungültig gemacht werden kann.

#### HTML

Wir erstellen ein Formular, das nur einige wenige Buttons enthält:

```html
<form action="#" id="form" method="post">
  <p>
    <input type="submit" value="Submit" />
    <button id="example" type="submit" value="fixed">THIS BUTTON</button>
  </p>
  <p>
    <button type="button" id="report">reportValidity()</button>
  </p>
</form>

<p id="log"></p>
```

#### CSS

Wir fügen ein wenig CSS hinzu, einschließlich `:valid` und `:invalid` Styles für unseren Button:

```css
input[type="submit"],
button {
  background-color: #33a;
  border: none;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: white;
}
button:invalid {
  background-color: #a33;
}
button:valid {
  background-color: #3a3;
}
```

#### JavaScript

Wir fügen eine Funktion hinzu, um den Wert, den Inhalt und die Fehlermeldung des Beispiel-Buttons umzuschalten:

```js
const reportButton = document.querySelector("#report");
const exampleButton = document.querySelector("#example");
const output = document.querySelector("#log");

reportButton.addEventListener("click", () => {
  const reportVal = exampleButton.reportValidity();
  output.innerHTML = `reportValidity returned: ${reportVal} <br/> custom error: ${exampleButton.validationMessage}`;
});

exampleButton.addEventListener("invalid", () => {
  console.log("Invalid event fired on exampleButton");
});

exampleButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (exampleButton.value == "error") {
    breakOrFixButton("fixed");
  } else {
    breakOrFixButton("error");
  }
  output.innerHTML = `validation message: ${exampleButton.validationMessage} <br/> custom error: ${exampleButton.validationMessage}`;
});

const breakOrFixButton = () => {
  const state = toggleButton();
  if (state == "error") {
    exampleButton.setCustomValidity("This is a custom error message");
  } else {
    exampleButton.setCustomValidity("");
  }
};

const toggleButton = () => {
  if (exampleButton.value == "error") {
    exampleButton.value = "fixed";
    exampleButton.innerHTML = "No error";
  } else {
    exampleButton.value = "error";
    exampleButton.innerHTML = "Custom error";
  }
  return exampleButton.value;
};
```

#### Ergebnisse

{{EmbedLiveSample("Custom error message", "100%", 220)}}

Der Button ist standardmäßig gültig. Aktivieren Sie "THIS BUTTON", um den Wert, den Inhalt zu ändern und eine benutzerdefinierte Fehlermeldung hinzuzufügen. Das Aktivieren des "reportValidity()" Buttons überprüft die Gültigkeit des Buttons, meldet die benutzerdefinierte Fehlermeldung an den Benutzer und löst ein `invalid` Ereignis aus, wenn der Button aufgrund der Nachricht die Konformitätsprüfung nicht besteht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
