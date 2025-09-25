---
title: "HTMLFormElement: submit-Ereignis"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das **`submit`**-Ereignis wird ausgelöst, wenn ein {{HtmlElement("form")}}-Element abgeschickt wird.

Beachten Sie, dass das `submit`-Ereignis auf dem `<form>`-Element selbst ausgelöst wird und nicht auf einem {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` innerhalb dieses Elements. Allerdings enthält das [`SubmitEvent`](/de/docs/Web/API/SubmitEvent), das gesendet wird, um die Auslösung der Abschickaktion des Formulars anzuzeigen, eine [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, welche den Button darstellt, der aufgerufen wurde, um die Abschickanforderung auszulösen.

Das `submit`-Ereignis wird ausgelöst, wenn:

- der Benutzer einen {{Glossary("submit_button", "Submit-Button")}} anklickt,
- der Benutzer <kbd>Enter</kbd> drückt, während er ein Feld (z.B. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in einem Formular bearbeitet,
- ein Skript die Methode [`form.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) aufruft

Das Ereignis wird jedoch _nicht_ auf das Formular gesendet, wenn ein Skript die Methode [`form.submit()`](/de/docs/Web/API/HTMLFormElement/submit) direkt aufruft.

> [!NOTE]
> Der Versuch, ein Formular abzusenden, das die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) nicht besteht, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis aus. In diesem Fall verhindert die Validierung die Formularabgabe, und es gibt somit kein `submit`-Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("submit", (event) => { })

onsubmit = (event) => { }
```

## Ereignistyp

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SubmitEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer Elternschnittstelle [`Event`](/de/docs/Web/API/Event)._

- [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das das Element identifiziert, welches aufgerufen wurde, um das Abschicken des Formulars zu triggern.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Formulareingaben zu hören und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wann immer dies geschieht, und verhindert dann die Standardaktion des Formularabsendens.

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

{{EmbedLiveSample("Examples", "", "", "", "", "", "", "allow-forms")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HtmlElement("form")}}-Element
- Verwandtes Ereignis: [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
