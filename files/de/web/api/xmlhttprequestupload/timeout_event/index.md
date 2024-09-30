---
title: "XMLHttpRequestUpload: timeout-Ereignis"
short-title: timeout
slug: Web/API/XMLHttpRequestUpload/timeout_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`timeout`**-Ereignis wird ausgelöst, wenn der Fortschritt aufgrund einer voreingestellten Zeitüberschreitung beendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("timeout", (event) => {});

ontimeout = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind auch Eigenschaften von der Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das gesamte zu erledigende Arbeitspensum und die bereits geleistete Arbeit des zugrunde liegenden Prozesses berechenbar ist. Mit anderen Worten sagt es aus, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-unsigned Integer-Wert, der angibt, wie viel Arbeit vom zugrunde liegenden Prozess bereits ausgeführt wurde. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem man `total` durch den Wert dieser Eigenschaft teilt. Beim Herunterladen einer Ressource über HTTP wird dabei nur der Körper der HTTP-Nachricht gezählt und nicht die Header und andere Überkopfkosten.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-unsigned Integer, der die Gesamtmenge der Arbeit darstellt, die der zugrunde liegende Prozess auszuführen hat. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Nachrichtentextes) und umfasst nicht die Header und andere Überkopfkosten.

## Beispiele

### Verwendung des `timeout`-Ereignisses

Sie können das `timeout`-Ereignis verwenden, um einen Upload zu erkennen, der gestoppt wurde, weil er zu langsam war. Ein vollständiges Codebeispiel, das den Upload einer Datei und die Anzeige einer Fortschrittsanzeige zeigt, finden Sie auf der Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

Das Timeout wird am [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt mit der [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout) Eigenschaft festgelegt.

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

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequestUpload/loadstart_event), [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event), [`progress`](/de/docs/Web/API/XMLHttpRequestUpload/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event), [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
- [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
