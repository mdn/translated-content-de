---
title: "HTMLFormElement: submit-Ereignis"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("HTML DOM")}}

Das **`submit`**-Ereignis wird ausgelöst, wenn ein {{HtmlElement("form")}} abgesendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("submit", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsubmit = (event) => { }
```

## Ereignistyp

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SubmitEvent")}}

## Beschreibung

Das `submit`-Ereignis wird auf dem `<form>`-Element selbst ausgelöst und nicht auf einem darin enthaltenen {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`. Das [`SubmitEvent`](/de/docs/Web/API/SubmitEvent), das anzeigt, dass das Absenden des Formulars ausgelöst wurde, enthält jedoch eine [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft. Sie verweist auf den Button, mit dem das Absenden ausgelöst wurde.

Das `submit`-Ereignis wird ausgelöst, wenn:

- ein Benutzer auf einen {{Glossary("submit_button", "Submit-Button")}} klickt,
- ein Benutzer das Formular [implizit](#implizites_absenden) absendet,
- ein Skript die Methode [`form.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) aufruft.

Das Ereignis wird jedoch _nicht_ an das Formular gesendet, wenn ein Skript die Methode [`form.submit()`](/de/docs/Web/API/HTMLFormElement/submit) direkt aufruft.

Der Versuch, ein Formular abzusenden, das die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) nicht besteht, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis aus. In diesem Fall verhindert die Validierung das Absenden des Formulars. Daher wird kein `submit`-Ereignis ausgelöst.

### Implizites Absenden

Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission) legt nicht formal fest, welche Benutzeraktionen ein implizites Absenden auslösen können, da dies von den Konventionen des Betriebssystems und des Geräts abhängt. Beispielsweise ist das Drücken der <kbd>Eingabetaste</kbd>, während ein Texteingabefeld den Fokus hat, eine übliche Aktion. Die Reaktion des Browsers auf eine solche Aktion ist jedoch standardisiert:

- Wenn das Formular einen nicht deaktivierten Standard-Submit-Button hat, löst der Browser auf diesem Button ein `click`-Ereignis aus. Der Standard-Button ist der erste Submit-Button in der Baumreihenfolge, dessen [form owner](/de/docs/Web/API/HTMLButtonElement/form) dieses Formular ist. Dadurch wird der Vorgang zum Absenden des Formulars ausgelöst (als hätte der Benutzer den Button gedrückt), sofern das Ereignis nicht abgebrochen wird.
- Wenn das Formular keinen Submit-Button hat, wird es nur dann implizit abgesendet, wenn es höchstens ein {{HTMLElement("input")}}-Element vom Typ `text`, `search`, `tel`, `url`, `email`, `password`, `date`, `month`, `week`, `time`, `datetime-local` oder `number` enthält. {{HTMLElement("textarea")}}- und {{HTMLElement("select")}}-Elemente verhindern das implizite Absenden nicht.
- Andernfalls löst die Aktion niemals ein implizites Absenden aus: Das gilt, wenn der Standard-Submit-Button des Formulars deaktiviert ist oder wenn das Formular keinen Submit-Button und mehr als ein Eingabefeld hat, das ein implizites Absenden verhindert.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf das Absenden des Formulars zu reagieren. Bei jedem Auftreten wird der aktuelle Wert von [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) protokolliert. Anschließend wird die Standardaktion zum Absenden des Formulars verhindert.

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

- HTML-Element {{HtmlElement("form")}}
- Zugehöriges Ereignis: [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
