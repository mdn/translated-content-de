---
title: "HTMLInputElement: invalid-Ereignis"
short-title: invalid
slug: Web/API/HTMLInputElement/invalid_event
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

{{APIRef("HTML DOM")}}

Das Ereignis **`invalid`** wird ausgelöst, wenn ein absendbares Element auf Gültigkeit geprüft wurde und seine Einschränkungen nicht erfüllt.

Dieses Ereignis kann nützlich sein, um beim Absenden eines Formulars eine Zusammenfassung der Probleme anzuzeigen. Wenn ein Formular abgesendet wird, wird für jedes ungültige Formularsteuerelement ein `invalid`-Ereignis ausgelöst. Die Gültigkeit absendbarer Elemente wird geprüft, bevor das zugehörige {{HtmlElement("form")}} abgesendet wird oder nachdem die Methode [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity) des Elements oder des zugehörigen `<form>` aufgerufen wurde.

Beim Ereignis [`blur`](/de/docs/Web/API/Element/blur_event) erfolgt keine Gültigkeitsprüfung.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("invalid", (event) => { })

oninvalid = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Wenn ein Formular mit einem ungültigen Wert abgesendet wird, werden die absendbaren Elemente geprüft. Wird ein Fehler festgestellt, wird für das ungültige Element das Ereignis `invalid` ausgelöst. In diesem Beispiel wird der ungültige Wert protokolliert, wenn aufgrund eines ungültigen Werts im Eingabefeld ein `invalid`-Ereignis ausgelöst wird.

### HTML

```html
<form action="#">
  <div>
    <label>
      Enter an integer between 1 and 10:
      <input type="number" min="1" max="10" required />
    </label>
  </div>
  <div><input type="submit" value="submit" /></div>
</form>
<hr />
Invalid values:
<ul id="log"></ul>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("invalid", (e) => {
  log.appendChild(document.createElement("li")).textContent = JSON.stringify(
    e.target.value,
  );
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element {{HtmlElement("form")}}
- Verwandtes Ereignis: [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
- CSS-Pseudoklasse {{cssxref(":invalid")}}
