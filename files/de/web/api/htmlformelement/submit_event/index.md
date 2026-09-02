---
title: "HTMLFormElement: submit event"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: 2843ea988735ea93940dce9f35a2b2b2f4703f28
---

{{APIRef("HTML DOM")}}

Das **`submit`**-Ereignis wird ausgelöst, wenn ein {{HtmlElement("form")}} eingereicht wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("submit", (event) => { })

onsubmit = (event) => { }
```

## Ereignistyp

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SubmitEvent")}}

## Beschreibung

Das `submit`-Ereignis wird auf dem `<form>`-Element selbst ausgelöst und nicht auf einem {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` darin. Allerdings enthält das [`SubmitEvent`](/de/docs/Web/API/SubmitEvent), das gesendet wird, um anzuzeigen, dass die Sendeaktion des Formulars ausgelöst wurde, eine [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, die der Button ist, der ausgelöst wurde, um die Sendeanforderung zu starten.

Das `submit`-Ereignis wird ausgelöst, wenn:

- der Benutzer auf einen {{Glossary("submit_button", "Sende-Button")}} klickt,
- der Benutzer das Formular [implizit](#implizite_einreichung) einreicht,
- ein Skript die Methode [`form.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) aufruft

Allerdings wird das Ereignis _nicht_ an das Formular gesendet, wenn ein Skript direkt die Methode [`form.submit()`](/de/docs/Web/API/HTMLFormElement/submit) aufruft.

Der Versuch, ein Formular einzureichen, das die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) nicht besteht, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis aus. In diesem Fall verhindert die Validierung die Einreichung des Formulars und somit gibt es kein `submit`-Ereignis.

### Implizite Einreichung

Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission) definiert nicht formell, welche Benutzeraktionen eine implizite Einreichung auslösen können, da dies von den Konventionen des Betriebssystems und der Geräte abhängt. Zum Beispiel ist das Drücken der <kbd>Enter</kbd>-Taste bei Fokus auf einem Texteingabefeld eine übliche Geste. Die Reaktion des Browsers auf eine solche Geste ist jedoch standardisiert:

- Wenn das Formular einen nicht deaktivierten Standard-Sende-Button hat, löst der Browser ein `click`-Ereignis zu diesem Button aus. Der Standard-Button ist der erste Sende-Button in der Baumreihenfolge, dessen [Formular-Eigentümer](/de/docs/Web/API/HTMLButtonElement/form) dieses Formular ist. Dies löst dann den Formularübermittlungsprozess aus (als ob der Button vom Benutzer gedrückt worden wäre), es sei denn, das Ereignis wird abgebrochen.
- Wenn das Formular keinen Sende-Button hat, wird es implizit nur dann eingereicht, wenn es höchstens ein {{HTMLElement("input")}}-Element vom Typ `text`, `search`, `tel`, `url`, `email`, `password`, `date`, `month`, `week`, `time`, `datetime-local` oder `number` enthält. {{HTMLElement("textarea")}}- und {{HTMLElement("select")}}-Elemente blockieren keine implizite Einreichung.
- Andernfalls, wenn das Formular einen deaktivierten Standard-Sende-Button hat oder keinen Sende-Button und mehr als ein Eingabefeld, das eine implizite Einreichung blockiert, löst die Geste niemals eine implizite Einreichung aus.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Einreichung des Formulars zu lauschen, und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wann immer dies passiert, und verhindert dann die Standardaktion des Einreichens des Formulars.

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
const form = document.getElementById("form");
const log = document.getElementById("log");

function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

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
