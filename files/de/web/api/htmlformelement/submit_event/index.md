---
title: "HTMLFormElement: submit event"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Das **`submit`** Ereignis wird ausgelöst, wenn ein {{HtmlElement("form")}} übermittelt wird.

Beachten Sie, dass das `submit` Ereignis auf dem `<form>`-Element selbst ausgelöst wird und nicht auf einem der enthaltenen {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`. Allerdings enthält das [`SubmitEvent`](/de/docs/Web/API/SubmitEvent), das gesendet wird, um die auszulösende Übermittlungsaktion des Formulars anzuzeigen, eine [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, welche angibt, welcher Button zur Auslösung der Übermittlungsanforderung verwendet wurde.

Das `submit` Ereignis wird ausgelöst, wenn:

- der Benutzer einen {{Glossary("submit_button", "Submit-Button")}} anklickt,
- der Benutzer <kbd>Enter</kbd> drückt, während er ein Feld (z. B. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in einem Formular bearbeitet,
- ein Skript die Methode [`form.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) aufruft

Das Ereignis wird jedoch _nicht_ an das Formular gesendet, wenn ein Skript direkt die Methode [`form.submit()`](/de/docs/Web/API/HTMLFormElement/submit) aufruft.

> [!NOTE]
> Der Versuch, ein Formular zu übermitteln, das die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) nicht besteht, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis aus. In diesem Fall verhindert die Validierung die Übermittlung des Formulars, und daher gibt es kein `submit` Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("submit", (event) => {});

onsubmit = (event) => {};
```

## Eventtyp

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SubmitEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften erbt dieses Interface die Eigenschaften seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das den Button oder ein anderes Element identifiziert, das zur Auslösung der Formularübermittlung verwendet wurde.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Übermittlung des Formulars zu hören, und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wann immer dies auftritt, und verhindert dann die Standardaktion der Formularübermittlung.

### HTML

```html
<form id="form">
  <label>Test field: <input type="text" /></label>
  <br /><br />
  <button type="submit">Submit form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HtmlElement("form")}} Element
- Verwandtes Ereignis: [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
