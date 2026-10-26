---
title: "HTMLInputElement: invalid-Ereignis"
short-title: invalid
slug: Web/API/HTMLInputElement/invalid_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}

Das **`invalid`**-Ereignis wird ausgelöst, wenn ein absendbares Element auf Gültigkeit geprüft wurde und seine Einschränkungen nicht erfüllt.

Dieses Ereignis kann nützlich sein, um beim Absenden eine Zusammenfassung der Probleme mit einem Formular anzuzeigen. Wenn ein Formular abgesendet wird, wird für jedes ungültige Formularsteuerelement ein `invalid`-Ereignis ausgelöst. Die Gültigkeit absendbarer Elemente wird geprüft, bevor das zugehörige {{HtmlElement("form")}} abgesendet wird oder nachdem die Methode [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity) des Elements oder seines zugehörigen `<form>` aufgerufen wurde.

Beim Ereignis [`blur`](/de/docs/Web/API/Element/blur_event) wird die Gültigkeit nicht geprüft.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("invalid", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oninvalid = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Wenn ein Formular mit einem ungültigen Wert abgesendet wird, werden die absendbaren Elemente geprüft. Wird ein Fehler gefunden, wird auf dem ungültigen Element das `invalid`-Ereignis ausgelöst. In diesem Beispiel wird der ungültige Wert protokolliert, wenn das Ereignis aufgrund eines ungültigen Werts im Eingabefeld ausgelöst wird.

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
- Zugehöriges Ereignis: [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
- CSS-Pseudoklasse {{cssxref(":invalid")}}
