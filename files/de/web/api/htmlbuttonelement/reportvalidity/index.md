---
title: "HTMLButtonElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLButtonElement/reportValidity
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Interfaces führt die gleichen Gültigkeitsprüfungsschritte wie die [`checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity) Methode aus. Zusätzlich zeigt der Browser dem Benutzer das Problem an, wenn das [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis nicht abgebrochen wird.

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

Wir erstellen ein Formular, das nur ein paar Buttons enthält:

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

Wir fügen ein wenig CSS hinzu, einschließlich `:valid` und `:invalid` Stile für unseren Button:

```css
input[type="submit"],
button {
  background-color: #3333aa;
  border: none;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: white;
}
button:invalid {
  background-color: #aa3333;
}
button:valid {
  background-color: #33aa33;
}
```

#### JavaScript

Wir fügen eine Funktion hinzu, um den Wert, den Inhalt und die Validierungsnachricht des Beispiel-Buttons umzuschalten:

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
  if (exampleButton.value === "error") {
    breakOrFixButton("fixed");
  } else {
    breakOrFixButton("error");
  }
  output.innerHTML = `validation message: ${exampleButton.validationMessage} <br/> custom error: ${exampleButton.validationMessage}`;
});

const breakOrFixButton = () => {
  const state = toggleButton();
  if (state === "error") {
    exampleButton.setCustomValidity("This is a custom error message");
  } else {
    exampleButton.setCustomValidity("");
  }
};

const toggleButton = () => {
  if (exampleButton.value === "error") {
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

Der Button ist standardmäßig gültig. Aktivieren Sie "THIS BUTTON", um den Wert und den Inhalt zu ändern und eine benutzerdefinierte Fehlermeldung hinzuzufügen. Die Aktivierung des "reportValidity()" Buttons überprüft die Gültigkeit des Buttons, meldet die benutzerdefinierte Fehlermeldung dem Benutzer und löst ein `invalid` Ereignis aus, wenn der Button die Einschränkungsvalidierung aufgrund der Nachricht nicht besteht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
