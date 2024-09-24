---
title: "XMLHttpRequestUpload: timeout-Ereignis"
short-title: timeout
slug: Web/API/XMLHttpRequestUpload/timeout_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`timeout`**-Ereignis wird ausgelöst, wenn der Fortschritt aufgrund eines abgelaufenen voreingestellten Zeitlimits beendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("timeout", (event) => {});

ontimeout = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die Gesamtmenge der zu erledigenden Arbeit und die Menge der bereits geleisteten Arbeit durch den zugrunde liegenden Prozess berechenbar ist. Mit anderen Worten, es zeigt, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert, der die Menge der bereits vom zugrunde liegenden Prozess geleisteten Arbeit angibt. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Körper der HTTP-Nachricht und schließt keine Header und anderen Overhead ein.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, der die Gesamtsumme der Arbeit repräsentiert, die der zugrunde liegende Prozess gerade ausführt. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Nachrichtenkörpers) und schließt die Header und anderen Overhead nicht ein.

## Beispiele

### Verwendung des `timeout`-Ereignisses

Sie können das `timeout`-Ereignis verwenden, um einen Upload zu erkennen, der gestoppt wurde, weil er zu langsam war. Ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige zeigt, finden Sie auf der Hauptseite von {{domxref("XMLHttpRequestUpload")}}.

Das Zeitlimit wird auf dem {{domxref("XMLHttpRequest")}}-Objekt mit der Eigenschaft {{domxref("XMLHttpRequest.timeout")}} gesetzt.

```js
// Im Falle eines Timeouts blenden wir die Fortschrittsanzeige aus
// Beachten Sie, dass dieses Ereignis auch am xhr-Objekt abgehört werden kann
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

- Verwandte Ereignisse: {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}
- {{domxref("XMLHttpRequestUpload")}}
- {{domxref("XMLHttpRequest.timeout")}}
