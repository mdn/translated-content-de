---
title: "HTMLButtonElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLButtonElement/reportValidity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces führt dieselben Gültigkeitsprüfungen durch wie die [`checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)-Methode. Zusätzlich zeigt der Browser, falls das [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis nicht abgebrochen wird, das Problem dem Benutzer an.

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

Wir erstellen ein Formular, das nur wenige Schaltflächen enthält:

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

Wir fügen etwas CSS hinzu, einschließlich `:valid` und `:invalid` Styles für unseren Button:

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

Wir fügen eine Funktion hinzu, um den Wert, den Inhalt und die Validierungsnachricht des Beispiel-Buttons zu toggeln:

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

{{EmbedLiveSample("Eigenes Fehlermeldung", "100%", 220)}}

Der Button ist standardmäßig gültig. Aktivieren Sie "THIS BUTTON", um den Wert, den Inhalt zu ändern und eine eigene Fehlermeldung hinzuzufügen. Durch Aktivieren der "reportValidity()"-Schaltfläche wird die Gültigkeit des Buttons überprüft, die eigene Fehlermeldung dem Benutzer gemeldet und ein `invalid`-Ereignis ausgelöst, wenn der Button aufgrund der Nachricht die Gültigkeitsprüfung nicht besteht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
