---
title: "HTMLFormElement: submit Event"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`submit`**-Event wird ausgelöst, wenn ein {{HtmlElement("form")}} übermittelt wird.

Beachten Sie, dass das `submit`-Event auf dem `<form>`-Element selbst ausgelöst wird und nicht auf einem {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` darin. Das [`SubmitEvent`](/de/docs/Web/API/SubmitEvent), das gesendet wird, um die Auslösung der Formularübermittlung anzuzeigen, enthält jedoch eine [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, die den Button bezeichnet, der angeklickt wurde, um die Übermittlung auszulösen.

Das `submit`-Event wird ausgelöst, wenn:

- der Benutzer auf einen {{Glossary("submit_button", "Submit-Button")}} klickt,
- der Benutzer <kbd>Enter</kbd> drückt, während er ein Feld bearbeitet (z.B. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in einem Formular,
- ein Skript die Methode [`form.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) aufruft.

Das Event wird jedoch _nicht_ an das Formular gesendet, wenn ein Skript die Methode [`form.submit()`](/de/docs/Web/API/HTMLFormElement/submit) direkt aufruft.

> [!NOTE]
> Der Versuch, ein Formular zu übermitteln, das die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) nicht besteht, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Event aus. In diesem Fall verhindert die Validierung die Formularübermittlung, und es gibt daher kein `submit`-Event.

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("submit", (event) => { })

onsubmit = (event) => { }
```

## Event-Typ

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SubmitEvent")}}

## Event-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt dieses Interface die Eigenschaften seines Elter-Interfaces, [`Event`](/de/docs/Web/API/Event)._

- [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das den Button oder ein anderes Element identifiziert, das aufgerufen wurde, um die Übermittlung des Formulars auszulösen.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Formularübermittlung zu hören, und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wann immer dies passiert, und verhindert dann die Standardaktion der Formularübermittlung.

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

- HTML {{HtmlElement("form")}}-Element
- Verwandtes Event: [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
