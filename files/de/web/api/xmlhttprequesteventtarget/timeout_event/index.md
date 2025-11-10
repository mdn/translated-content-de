---
title: "XMLHttpRequestEventTarget: timeout-Ereignis"
short-title: timeout
slug: Web/API/XMLHttpRequestEventTarget/timeout_event
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`timeout`**-Ereignis wird ausgelöst, wenn der Fortschritt aufgrund einer abgelaufenen Vorgabezeit eingestellt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("timeout", (event) => { })

ontimeout = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die gesamte auszuführende Arbeit und der bereits vom zugrundeliegenden Prozess geleistete Arbeitsumfang berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert ohne Vorzeichen, der den bereits vom zugrundeliegenden Prozess geleisteten Arbeitsumfang angibt. Der Anteil der geleisteten Arbeit kann berechnet werden, indem der Wert dieser Eigenschaft durch `total` geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und anderen Overhead nicht ein.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert ohne Vorzeichen, der die gesamte Arbeitsmenge repräsentiert, die der zugrundeliegende Prozess zu leisten versucht. Beim Herunterladen einer Ressource über HTTP entspricht dies der `Content-Length` (der Größe des Hauptteils der Nachricht) und schließt die Header und anderen Overhead nicht ein.

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

Sie könnten ebenfalls den Ereignis-Handler mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

```js
client.addEventListener("timeout", () => {
  console.error("Timeout!!");
});
```

### Verwendung mit XMLHttpRequestUpload

Sie können das `timeout`-Ereignis verwenden, um einen Upload zu erkennen, der gestoppt wurde, weil er zu langsam war. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsleiste anzeigt, siehe die Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

Das Timeout wird am [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt über die [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)-Eigenschaft gesetzt.

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
