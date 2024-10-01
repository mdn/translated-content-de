---
title: "HTMLFormElement: submit Ereignis"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Das **`submit`** Ereignis wird ausgelöst, wenn ein {{HtmlElement("form")}} abgeschickt wird.

Beachten Sie, dass das `submit` Ereignis auf dem `<form>`-Element selbst ausgelöst wird und nicht auf irgendeinem {{HtmlElement("button")}} oder {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}} innerhalb des Formulars. Jedoch enthält das [`SubmitEvent`](/de/docs/Web/API/SubmitEvent), welches gesendet wird, um anzuzeigen, dass die Submit-Aktion des Formulars ausgelöst wurde, eine [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) Eigenschaft, die die Schaltfläche kennzeichnet, die zum Absenden des Antrags aufgerufen wurde.

Das `submit` Ereignis wird ausgelöst, wenn:

- der Benutzer eine {{Glossary("submit_button", "Submit-Schaltfläche")}} anklickt,
- der Benutzer <kbd>Enter</kbd> drückt, während er ein Feld (z. B. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in einem Formular bearbeitet,
- ein Skript die [`form.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) Methode aufruft

Das Ereignis wird jedoch _nicht_ an das Formular gesendet, wenn ein Skript die [`form.submit()`](/de/docs/Web/API/HTMLFormElement/submit) Methode direkt aufruft.

> [!NOTE]
> Der Versuch, ein Formular abzusenden, welches die [Validierung](/de/docs/Learn/Forms/Form_validation) nicht besteht, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis aus. In diesem Fall verhindert die Validierung das Absenden des Formulars, sodass kein `submit` Ereignis auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("submit", (event) => {});

onsubmit = (event) => {};
```

## Ereignistyp

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SubmitEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften erbt dieses Interface die Eigenschaften seines übergeordneten Interfaces, [`Event`](/de/docs/Web/API/Event)._

- [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekt, das die Schaltfläche oder ein anderes Element identifiziert, das aufgerufen wurde, um das Absenden des Formulars auszulösen.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf das Abgeben des Formulars zu hören, und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wann immer dies geschieht. Anschließend wird die Standardaktion des Abschickens des Formulars verhindert.

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
