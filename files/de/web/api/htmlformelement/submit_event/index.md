---
title: "HTMLFormElement: submit Ereignis"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Das **`submit`** Ereignis wird ausgelöst, wenn ein {{HtmlElement("form")}} abgeschickt wird.

Beachten Sie, dass das `submit` Ereignis auf dem `<form>` Element selbst ausgelöst wird und nicht auf einem {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` innerhalb des Formulars. Allerdings enthält das gesendete {{domxref("SubmitEvent")}}, das die Formular-Abschickaktion signalisiert, eine {{domxref("SubmitEvent.submitter", "submitter")}} Eigenschaft, die den Button darstellt, der ausgelöst wurde, um die Abschickanforderung zu triggern.

Das `submit` Ereignis wird ausgelöst, wenn:

- der Benutzer auf einen {{Glossary("Abschick-Button")}} klickt,
- der Benutzer <kbd>Enter</kbd> drückt, während er ein Feld (z.B. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in einem Formular bearbeitet,
- ein Skript die {{domxref("HTMLFormElement.requestSubmit()", "form.requestSubmit()")}} Methode aufruft

Das Ereignis wird jedoch _nicht_ an das Formular gesendet, wenn ein Skript direkt die {{domxref("HTMLFormElement.submit()", "form.submit()")}} Methode aufruft.

> [!NOTE]
> Der Versuch, ein Formular abzusenden, das die [Validierung](/de/docs/Learn/Forms/Form_validation) nicht besteht, löst ein {{domxref("HTMLInputElement/invalid_event", "invalid")}} Ereignis aus. In diesem Fall verhindert die Validierung die Formularübermittlung, und es wird daher kein `submit` Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("submit", (event) => {});

onsubmit = (event) => {};
```

## Ereignistyp

Ein {{domxref("SubmitEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SubmitEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt dieses Interface die Eigenschaften seines Eltern-Interfaces, {{domxref("Event")}}._

- {{domxref("SubmitEvent.submitter", "submitter")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLElement")}} Objekt, das den Button oder ein anderes Element identifiziert, das ausgelöst wurde, um das Formular abzuschicken.

## Beispiele

Dieses Beispiel verwendet {{domxref("EventTarget.addEventListener()")}}, um dem Formular-Submit zu lauschen, und protokolliert den aktuellen {{domxref("Event.timeStamp")}}, wann immer dies geschieht, und verhindert dann die Standardaktion des Absendens des Formulars.

### HTML

```html
<form id="form">
  <label>Testfeld: <input type="text" /></label>
  <br /><br />
  <button type="submit">Formular absenden</button>
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
- Verwandtes Ereignis: {{domxref("HTMLInputElement/invalid_event", "invalid")}}
