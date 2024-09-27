---
title: "HTMLInputElement: invalid-Ereignis"
short-title: invalid
slug: Web/API/HTMLInputElement/invalid_event
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef}}

Das **`invalid`**-Ereignis wird ausgelöst, wenn ein übermittelbares Element auf seine Gültigkeit überprüft wurde und seine Bedingungen nicht erfüllt.

Dieses Ereignis kann nützlich sein, um bei der Übermittlung eines Formulars eine Zusammenfassung der Probleme anzuzeigen. Wenn ein Formular abgesendet wird, werden `invalid`-Ereignisse bei jedem Formularfeld ausgelöst, das ungültig ist. Die Gültigkeit von übermittelbaren Elementen wird vor dem Absenden ihres zugehörigen {{HtmlElement("form")}} überprüft oder nachdem die Methode [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity) des Elements oder seines zugehörigen `<form>` aufgerufen wird.

Es wird nicht bei [`blur`](/de/docs/Web/API/Element/blur_event) überprüft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("invalid", (event) => {});

oninvalid = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Wenn ein Formular mit einem ungültigen Wert übermittelt wird, werden die übermittelbaren Elemente überprüft und, wenn ein Fehler festgestellt wird, wird das `invalid`-Ereignis am `invalid`-Element ausgelöst. In diesem Beispiel wird, wenn ein ungültiges Ereignis aufgrund eines ungültigen Wertes im Eingabefeld ausgelöst wird, der ungültige Wert protokolliert.

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

- HTML {{HtmlElement("form")}}-Element
- Verwandtes Ereignis: [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
- CSS {{cssxref(":invalid")}} Pseudo-Klasse
