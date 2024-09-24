---
title: "HTMLInputElement: ungültiges Ereignis"
short-title: ungültig
slug: Web/API/HTMLInputElement/invalid_event
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef}}

Das **`invalid`**-Ereignis wird ausgelöst, wenn ein übermittelbares Element auf Gültigkeit überprüft wurde und seine Einschränkungen nicht erfüllt.

Dieses Ereignis kann nützlich sein, um bei der Übermittlung eine Zusammenfassung der Probleme mit einem Formular anzuzeigen. Wenn ein Formular übermittelt wird, werden `invalid`-Ereignisse für jedes ungültige Formularelement ausgelöst. Die Gültigkeit von übermittelbaren Elementen wird überprüft, bevor ihr Besitzer-{{HtmlElement("form")}} übermittelt wird, oder nachdem die Methode [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity) des Elements oder seines Besitzer-`<form>` aufgerufen wurde.

Es wird nicht beim {{domxref("Element/blur_event", "blur")}} überprüft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("invalid", (event) => {});

oninvalid = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Wenn ein Formular mit einem ungültigen Wert übermittelt wird, werden die übermittelbaren Elemente überprüft und, wenn ein Fehler gefunden wird, wird das `invalid`-Ereignis auf dem `invalid`-Element ausgelöst. In diesem Beispiel wird, wenn ein ungültiges Ereignis aufgrund eines ungültigen Wertes im Eingang ausgelöst wird, der ungültige Wert protokolliert.

### HTML

```html
<form action="#">
  <div>
    <label>
      Geben Sie eine ganze Zahl zwischen 1 und 10 ein:
      <input type="number" min="1" max="10" required />
    </label>
  </div>
  <div><input type="submit" value="submit" /></div>
</form>
<hr />
Ungültige Werte:
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- HTML {{HtmlElement("form")}}-Element
- Verwandtes Ereignis: {{domxref("HTMLFormElement/submit_event", "submit")}}
- CSS {{cssxref(":invalid")}}-Pseudoklasse
