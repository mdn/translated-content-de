---
title: "HTMLFormElement: submit-Ereignis"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: d139e410ad4c170bbfeeb266e72723f140f0e9ee
---

{{APIRef}}

Das **`submit`**-Ereignis wird ausgelöst, wenn ein {{HtmlElement("form")}} gesendet wird.

Beachten Sie, dass das `submit`-Ereignis auf dem `<form>`-Element selbst ausgelöst wird und nicht auf einem {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` innerhalb davon. Das [`SubmitEvent`](/de/docs/Web/API/SubmitEvent), das gesendet wird, um anzuzeigen, dass die Übermittlung des Formulars ausgelöst wurde, enthält jedoch eine [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, bei der es sich um den Button handelt, der aufgerufen wurde, um die Übermittlungsanfrage auszulösen.

Das `submit`-Ereignis wird ausgelöst, wenn:

- der Benutzer einen {{Glossary("submit_button", "Submit-Button")}} klickt,
- der Benutzer <kbd>Enter</kbd> drückt, während ein Feld (z.B. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in einem Formular bearbeitet wird,
- ein Skript die Methode [`form.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) aufruft.

Das Ereignis wird jedoch _nicht_ an das Formular gesendet, wenn ein Skript direkt die Methode [`form.submit()`](/de/docs/Web/API/HTMLFormElement/submit) aufruft.

> [!NOTE]
> Der Versuch, ein Formular zu senden, das die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) nicht besteht, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis aus. In diesem Fall verhindert die Validierung die Formularübermittlung, sodass kein `submit`-Ereignis erfolgt.

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

_Neben den unten aufgeführten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das den Button oder ein anderes Element identifiziert, das aufgerufen wurde, um das Absenden des Formulars auszulösen.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Formularübermittlung zu hören, und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wenn dies geschieht, um dann die Standardaktion des Formulareinsendens zu verhindern.

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
