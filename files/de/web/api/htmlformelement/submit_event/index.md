---
title: "HTMLFormElement: submit Ereignis"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Das **`submit`**-Ereignis tritt auf, wenn ein {{HtmlElement("form")}} übermittelt wird.

Beachten Sie, dass das `submit`-Ereignis auf dem `<form>`-Element selbst auftritt und nicht auf einem {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`, das sich in ihm befindet. Das [`SubmitEvent`](/de/docs/Web/API/SubmitEvent), welches gesendet wird, um anzuzeigen, dass die Übermittlungsaktion des Formulars ausgelöst wurde, enthält jedoch eine [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, welche der Button ist, der zum Auslösen des Übermittlungsantrags betätigt wurde.

Das `submit`-Ereignis tritt auf, wenn:

- der Benutzer auf einen [submit button](/de/docs/Glossary/submit_button) klickt,
- der Benutzer <kbd>Enter</kbd> drückt, während er ein Feld (z. B. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in einem Formular bearbeitet,
- ein Skript die Methode [`form.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) aufruft

Das Ereignis wird jedoch _nicht_ an das Formular gesendet, wenn ein Skript die Methode [`form.submit()`](/de/docs/Web/API/HTMLFormElement/submit) direkt aufruft.

> [!NOTE]
> Der Versuch, ein Formular zu übermitteln, das die [Validierung](/de/docs/Learn/Forms/Form_validation) nicht besteht, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis aus. In diesem Fall verhindert die Validierung die Übermittlung des Formulars, und es gibt folglich kein `submit`-Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("submit", (event) => {});

onsubmit = (event) => {};
```

## Ereignistyp

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SubmitEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften erbt dieses Interface die Eigenschaften seines Eltern-Interfaces, [`Event`](/de/docs/Web/API/Event)._

- [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das den Button oder ein anderes Element identifiziert, das zum Auslösen der Übermittlung des Formulars betätigt wurde.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Formularübermittlung zu hören, und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wann immer dies eintritt, und verhindert dann die Standardaktion der Formularübermittlung.

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
