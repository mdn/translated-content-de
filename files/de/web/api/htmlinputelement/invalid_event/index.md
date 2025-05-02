---
title: "HTMLInputElement: invalid-Event"
short-title: invalid
slug: Web/API/HTMLInputElement/invalid_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`invalid`**-Event wird ausgelöst, wenn ein übermittelbares Element auf seine Gültigkeit überprüft wurde und seine Einschränkungen nicht erfüllt.

Dieses Event kann nützlich sein, um bei der Übermittlung eines Formulars eine Zusammenfassung der Probleme anzuzeigen. Wenn ein Formular übermittelt wird, werden `invalid`-Events bei jedem Formular-Steuerelement ausgelöst, das ungültig ist. Die Gültigkeit der übermittelbaren Elemente wird vor der Übermittlung ihres zugehörigen {{HtmlElement("form")}}-Elements geprüft oder nachdem die Methode [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity) des Elements oder seines zugehörigen `<form>` aufgerufen wurde.

Sie wird nicht bei [`blur`](/de/docs/Web/API/Element/blur_event) geprüft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("invalid", (event) => { })

oninvalid = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Wenn ein Formular mit einem ungültigen Wert übermittelt wird, werden die übermittelbaren Elemente überprüft und, wenn ein Fehler gefunden wird, wird das `invalid`-Event auf dem ungültigen Element ausgelöst. In diesem Beispiel wird das ungültige Event beim Auftreten, aufgrund eines ungültigen Werts im Eingabefeld, protokolliert.

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
