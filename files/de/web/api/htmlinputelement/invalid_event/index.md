---
title: "HTMLInputElement: invalid Event"
short-title: invalid
slug: Web/API/HTMLInputElement/invalid_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das **`invalid`**-Ereignis wird ausgelöst, wenn ein übermittelbares Element auf Gültigkeit überprüft wurde und die Bedingungen nicht erfüllt.

Dieses Ereignis kann nützlich sein, um beim Absenden eines Formulars eine Zusammenfassung der Probleme anzuzeigen. Wenn ein Formular übermittelt wird, werden `invalid`-Ereignisse bei jedem Formularsteuerelement ausgelöst, das ungültig ist. Die Gültigkeit von übermittelbaren Elementen wird vor dem Absenden ihres Besitzer-{{HtmlElement("form")}} überprüft oder nachdem die [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)-Methode des Elements oder seines Besitzer-`<form>` aufgerufen wurde.

Es wird nicht bei [`blur`](/de/docs/Web/API/Element/blur_event) überprüft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("invalid", (event) => { })

oninvalid = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Wenn ein Formular mit einem ungültigen Wert gesendet wird, werden die übermittelbaren Elemente überprüft und, wenn ein Fehler gefunden wird, wird das `invalid`-Ereignis auf dem `invalid`-Element ausgelöst. In diesem Beispiel wird, wenn ein ungültiges Ereignis aufgrund eines ungültigen Werts im Eingabefeld ausgelöst wird, der ungültige Wert protokolliert.

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
- CSS {{cssxref(":invalid")}}-Pseudoklasse
