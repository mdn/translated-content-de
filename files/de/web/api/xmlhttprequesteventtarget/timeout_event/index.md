---
title: "XMLHttpRequestEventTarget: timeout-Event"
short-title: timeout
slug: Web/API/XMLHttpRequestEventTarget/timeout_event
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`timeout`**-Event wird ausgelöst, wenn der Fortschritt aufgrund eines abgelaufenen voreingestellten Timers beendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("timeout", (event) => { })

ontimeout = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die Gesamtarbeit, die zu erledigen ist, und die Menge der bereits geleisteten Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer-Wert, der die Menge der bereits vom zugrunde liegenden Prozess ausgeführten Arbeit angibt. Der Anteil der geleisteten Arbeit kann berechnet werden, indem der Wert dieser Eigenschaft durch `total` geteilt wird. Beim Herunterladen einer Ressource mit HTTP zählt dies nur den Body der HTTP-Nachricht und schließt Header und anderen Overhead nicht ein.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer, der die Gesamtmenge der Arbeit darstellt, die der zugrunde liegende Prozess gerade ausführt. Beim Herunterladen einer Ressource mit HTTP ist dies die `Content-Length` (die Größe des Nachrichtenbodys) und schließt die Header und anderen Overhead nicht ein.

## Beispiele

### Verwendung mit XMLHttpRequest

```js
const client = new XMLHttpRequest();
client.open("GET", "http://www.example.org/example.txt");
client.ontimeout = () => {
  console.error("Timeout!!");
};

client.send();
```

Sie könnten den Ereignishandler auch mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

```js
client.addEventListener("timeout", () => {
  console.error("Timeout!!");
});
```

### Verwendung mit XMLHttpRequestUpload

Sie können das `timeout`-Event verwenden, um einen Upload zu erkennen, der gestoppt wurde, weil er zu langsam war. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, siehe die Hauptseite [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

Das Timeout wird auf dem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt unter Verwendung der [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)-Eigenschaft festgelegt.

```js
// In case of an timeout we hide the progress bar
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
- [Überwachung des Fortschritts](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
