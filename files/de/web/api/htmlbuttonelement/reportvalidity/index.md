---
title: "HTMLButtonElement: Methode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLButtonElement/reportValidity
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

{{APIRef("HTML DOM")}}

Die Methode **`reportValidity()`** der Schnittstelle [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) führt dieselben Gültigkeitsprüfungen durch wie die Methode [`checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity). Wenn das Ereignis [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) nicht abgebrochen wird, zeigt der Browser das Problem außerdem an. Die Methode gibt immer `true` zurück, wenn das Element {{HTMLElement("button")}} kein Kandidat für die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) ist (wenn sein [`willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) den Wert `false` hat).

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist oder das Element kein Kandidat für die Constraint Validation ist. Andernfalls gibt die Methode `false` zurück.

## Beispiele

Dieses etwas konstruierte Beispiel zeigt, wie ein Button ungültig gemacht werden kann.

### HTML

Wir erstellen zwei Buttons:

```html
<p>
  <button id="example" type="submit" value="fixed">THIS BUTTON</button>
</p>
<p>
  <button type="button" id="report">reportValidity()</button>
</p>

<p id="log"></p>
```

### CSS

Wir fügen etwas CSS hinzu, darunter Stile mit `:valid` und `:invalid` für unseren Button:

```css
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

### JavaScript

Wir fügen eine Funktion hinzu, die den Wert, den Inhalt und die Validierungsmeldung des Beispiel-Buttons umschaltet:

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

exampleButton.addEventListener("click", () => {
  if (exampleButton.value === "error") {
    breakOrFixButton("fixed");
  } else {
    breakOrFixButton("error");
  }
  output.innerHTML = `validation message: ${exampleButton.validationMessage} <br/> custom error: ${exampleButton.validationMessage}`;
});

function breakOrFixButton() {
  const state = toggleButton();
  if (state === "error") {
    exampleButton.setCustomValidity("This is a custom error message");
  } else {
    exampleButton.setCustomValidity("");
  }
}

function toggleButton() {
  if (exampleButton.value === "error") {
    exampleButton.value = "fixed";
    exampleButton.innerHTML = "No error";
  } else {
    exampleButton.value = "error";
    exampleButton.innerHTML = "Custom error";
  }
  return exampleButton.value;
}
```

### Ergebnis

{{EmbedLiveSample("examples", "100%", 220)}}

Der Button ist standardmäßig gültig. Aktivieren Sie „THIS BUTTON“, um den Wert und den Inhalt zu ändern und eine benutzerdefinierte Fehlermeldung hinzuzufügen. Wenn Sie den Button „reportValidity()“ aktivieren, wird die Gültigkeit des Buttons geprüft. Besteht der Button wegen der Fehlermeldung die Constraint Validation nicht, wird die benutzerdefinierte Fehlermeldung angezeigt und ein `invalid`-Ereignis ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}}
