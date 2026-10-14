---
title: "HTMLInputElement: Methode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

{{APIRef("HTML DOM")}}

Die Methode **`reportValidity()`** der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) führt dieselben Schritte zur Gültigkeitsprüfung aus wie die Methode [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity). Wenn das Ereignis [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) nicht abgebrochen wird, zeigt der Browser das Problem außerdem an.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls wird `false` zurückgegeben.

## Beispiele

### Grundlegende Verwendung

#### HTML

Wir fügen ein erforderliches Zahlenfeld und einen Button hinzu, mit dem sich dessen Gültigkeit prüfen lässt.

```html
<p>
  <label for="age">Your (21 to 65) </label>
  <input type="number" name="age" required id="age" min="21" max="65" />
</p>
<p>
  <button type="button" id="report">reportValidity()</button>
</p>
<pre id="log"></pre>
```

#### JavaScript

Wenn der Button „reportValidity()“ aktiviert wird, prüfen wir mit der Methode `reportValidity()`, ob der Wert des Eingabefelds die Vorgaben erfüllt. Wir protokollieren den Rückgabewert. Ist er `false`, zeigen wir außerdem die Validierungsmeldung an und erfassen das Ereignis `invalid`.

```js
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  output.textContent += "Invalid event fired.\n";
});

reportButton.addEventListener("click", () => {
  output.textContent = "";
  const reportVal = ageInput.reportValidity();
  output.textContent += `"reportValidity()" returned: ${reportVal}`;
  if (!reportVal) {
    output.textContent += `\nValidation message: "${ageInput.validationMessage}"`;
  }
});
```

#### Ergebnisse

{{EmbedLiveSample("Basic usage", "100%", 120)}}

Wenn der Rückgabewert `false` ist, weil beispielsweise ein Wert fehlt, der Wert unter 21 oder über 65 liegt oder aus einem anderen Grund ungültig ist, erscheint eine Fehlermeldung. Außerdem wird ein `invalid`-Ereignis ausgelöst, das wir in der Ausgabe protokollieren.

### Benutzerdefinierte Fehlermeldung

Dieses Beispiel zeigt, wie eine benutzerdefinierte Fehlermeldung dazu führen kann, dass `false` zurückgegeben wird, obwohl der Wert ansonsten gültig ist.

#### HTML

Wir ergänzen das HTML aus dem vorherigen Beispiel um ein Kontrollkästchen „Allow resetting“.

```html hidden
<p>
  <label for="age">Your (21 to 65) </label>
  <input type="number" name="age" required id="age" min="21" max="65" />
</p>
<p>
  <button type="button" id="report">reportValidity()</button>
  <input type="checkbox" id="allow-resetting" />
  <label for="allow-resetting">Allow resetting</label>
</p>
<pre id="log"></pre>
```

#### JavaScript

Wir erweitern das JavaScript aus dem grundlegenden Beispiel um eine Funktion, die mit der Methode [`HTMLInputElement.setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) benutzerdefinierte Fehlermeldungen festlegt. Die Funktion `validateAge()` setzt die Fehlermeldung nur dann auf eine leere Zeichenfolge, wenn das Alter die geprüften Vorgaben erfüllt und das Kontrollkästchen „Allow resetting“ aktiviert ist.

```js
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");
const allowResetting = document.querySelector("#allow-resetting");

reportButton.addEventListener("click", () => {
  validateAge();
  output.textContent = "";
  const reportVal = ageInput.reportValidity();
  output.textContent += `"reportValidity()" returned: ${reportVal}`;
  if (!reportVal) {
    output.textContent += `\nValidation message: "${ageInput.validationMessage}"`;
  }
});

function validateAge() {
  const validityState = ageInput.validity;
  if (validityState.valueMissing) {
    ageInput.setCustomValidity("Please set an age (required)");
  } else if (validityState.rangeUnderflow) {
    ageInput.setCustomValidity("Your value is too low");
  } else if (validityState.rangeOverflow) {
    ageInput.setCustomValidity("Your value is too high");
  } else if (allowResetting.checked) {
    // Clear the custom error only when resetting is allowed.
    ageInput.setCustomValidity("");
  }
}
```

#### Ergebnisse

{{EmbedLiveSample("Custom error message", "100%", 120)}}

Wenn Sie den Button „reportValidity()“ aktivieren, bevor Sie ein Alter eingegeben haben, gibt die Methode `reportValidity()` den Wert `false` zurück, weil die `required`-Vorgabe nicht erfüllt ist. Die Methode löst für das Eingabefeld ein `invalid`-Ereignis aus und zeigt die benutzerdefinierte Fehlermeldung „Please set an age (required)“ an. Solange eine benutzerdefinierte Fehlermeldung festgelegt ist, wird beim Aktivieren des Buttons „reportValidity()“ weiterhin ein Fehler angezeigt, selbst wenn Sie ein gültiges Alter auswählen. Aktivieren Sie „Allow resetting“ und anschließend mit einem gültigen Alter erneut „reportValidity()“, um die benutzerdefinierte Fehlermeldung zu löschen. Wenn Sie das Kontrollkästchen deaktivieren, kann die benutzerdefinierte Fehlermeldung bei späteren Prüfungen nicht mehr gelöscht werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}}
