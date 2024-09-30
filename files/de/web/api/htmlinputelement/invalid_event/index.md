---
title: "HTMLInputElement: invalid Event"
short-title: invalid
slug: Web/API/HTMLInputElement/invalid_event
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef}}

Das **`invalid`** Ereignis wird ausgelöst, wenn ein übermittelbares Element auf Gültigkeit geprüft wurde und seine Einschränkungen nicht erfüllt.

Dieses Ereignis kann nützlich sein, um bei der Übermittlung eines Formulars eine Zusammenfassung der Probleme anzuzeigen. Wenn ein Formular übermittelt wird, werden bei jedem Formularelement, das ungültig ist, `invalid` Ereignisse ausgelöst. Die Gültigkeit übermittelbarer Elemente wird vor der Übermittlung ihres Eigentümer-{{HtmlElement("form")}}-Elements oder nach dem Aufruf der [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity) Methode des Elements oder seines Eigentümer-`<form>` geprüft.

Es wird nicht bei [`blur`](/de/docs/Web/API/Element/blur_event) überprüft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("invalid", (event) => {});

oninvalid = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Wenn ein Formular mit einem ungültigen Wert übermittelt wird, werden die übermittelbaren Elemente überprüft und bei einem Fehler wird das `invalid` Ereignis beim `invalid` Element ausgelöst. In diesem Beispiel wird, wenn ein invalid Ereignis aufgrund eines ungültigen Werts im Eingabefeld ausgelöst wird, der ungültige Wert protokolliert.

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

- HTML {{HtmlElement("form")}} Element
- Verwandtes Ereignis: [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
- CSS {{cssxref(":invalid")}} Pseudoklasse
