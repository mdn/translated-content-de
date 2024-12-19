---
title: "HTMLFormElement: submit-Event"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef}}

Der **`submit`**-Event wird ausgelöst, wenn ein {{HtmlElement("form")}} übermittelt wird.

Beachten Sie, dass der `submit`-Event auf dem `<form>`-Element selbst ausgelöst wird und nicht auf einem {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` innerhalb des Formulars. Der [`SubmitEvent`](/de/docs/Web/API/SubmitEvent), welcher gesendet wird, um die Ausführung der Formularübermittlung anzuzeigen, enthält jedoch eine [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, die den Button angibt, der zur Auslösung der Übermittlungsanforderung verwendet wurde.

Der `submit`-Event wird ausgelöst, wenn:

- der Benutzer einen {{Glossary("submit_button", "submit button")}} anklickt,
- der Benutzer <kbd>Enter</kbd> drückt, während er ein Feld editiert (z.B. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in einem Formular,
- ein Skript die Methode [`form.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) aufruft

Der Event wird jedoch _nicht_ an das Formular gesendet, wenn ein Skript die Methode [`form.submit()`](/de/docs/Web/API/HTMLFormElement/submit) direkt aufruft.

> [!NOTE]
> Der Versuch, ein Formular zu übermitteln, das die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) nicht besteht, löst einen [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Event aus. In diesem Fall verhindert die Validierung die Übermittlung des Formulars, und es gibt daher keinen `submit`-Event.

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("submit", (event) => {});

onsubmit = (event) => {};
```

## Eventtyp

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SubmitEvent")}}

## Event-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt dieses Interface die Eigenschaften seines Eltern-Interfaces, [`Event`](/de/docs/Web/API/Event)._

- [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das den Button oder ein anderes Element identifiziert, das zur Auslösung der Formularübermittlung verwendet wurde.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Übermittlung des Formulars zu hören, und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wann immer dies geschieht, und verhindert dann die Standardaktion der Formularübermittlung.

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
- Verwandter Event: [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
