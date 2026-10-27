---
title: "XMLHttpRequestEventTarget: timeout-Ereignis"
short-title: timeout
slug: Web/API/XMLHttpRequestEventTarget/timeout_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das Ereignis **`timeout`** wird ausgelöst, wenn der Vorgang wegen Überschreitung der festgelegten Zeitspanne beendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("timeout", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontimeout = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Beispiele

### Verwendung mit XMLHttpRequest

Verwenden Sie die Event-Handler-Eigenschaft `ontimeout` (beachten Sie jedoch, dass dadurch andere gegebenenfalls über `ontimeout` hinzugefügte Event-Listener ersetzt werden):

```js
const client = new XMLHttpRequest();
client.open("GET", "http://www.example.org/example.txt");
client.timeout = 5000;
client.ontimeout = () => {
  console.error("Timeout!!");
};

client.send();
```

Sie können den Event-Handler auch mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einrichten:

```js
client.addEventListener("timeout", () => {
  console.error("Timeout!!");
});
```

### Verwendung mit XMLHttpRequestUpload

Mit dem Ereignis `timeout` können Sie erkennen, ob ein Upload beendet wurde, weil er zu langsam war. Ein vollständiges Codebeispiel, das eine Datei hochlädt und einen Fortschrittsbalken anzeigt, finden Sie auf der Hauptseite zu [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

Die Zeitüberschreitung wird über die Eigenschaft [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout) des Objekts [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) festgelegt.

```js
// In case of a timeout we hide the progress bar
// Note that this event can be listened to on the xhr object too
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload failed: ${event.type}`;
}
xhr.upload.addEventListener("timeout", errorAction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadstart_event), [`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event), [`progress`](/de/docs/Web/API/XMLHttpRequestEventTarget/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequestEventTarget/error_event), [`abort`](/de/docs/Web/API/XMLHttpRequestEventTarget/abort_event)
- [Fortschritt überwachen](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
