---
title: "XMLHttpRequestUpload: abort-Ereignis"
short-title: abort
slug: Web/API/XMLHttpRequestUpload/abort_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `abort`-Ereignis wird bei {{domxref("XMLHttpRequestUpload")}} ausgelöst, wenn eine Anfrage abgebrochen wurde, zum Beispiel, weil das Programm {{domxref("XMLHttpRequest.abort()")}} aufgerufen hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("abort", (event) => {});

onabort = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein booleanes Flag, das angibt, ob die gesamte zu erledigende Arbeit und die bereits vom zugrunde liegenden Prozess geleistete Arbeit berechenbar sind. Mit anderen Worten, es sagt, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer-Wert, der die bereits vom zugrunde liegenden Prozess geleistete Arbeit angibt. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource mit HTTP wird hierbei nur der Hauptteil der HTTP-Nachricht gezählt und nicht die Header und anderer Overhead.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer, der die gesamte Menge der Arbeit repräsentiert, die der zugrunde liegende Prozess im Gange ist zu leisten. Beim Herunterladen einer Ressource mit HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und anderen Overhead nicht ein.

## Beispiele

### Verwenden des `abort`-Ereignisses

Sie können das `abort`-Ereignis verwenden, um den Upload zu stoppen, bevor er fertig ist. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, siehe die Hauptseite von {{domxref("XMLHttpRequestUpload")}}.

```js
// Im Falle eines Abbruchs blenden wir die Fortschrittsanzeige aus
// Beachten Sie, dass dieses Ereignis auch am xhr-Objekt abgehört werden kann
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload fehlgeschlagen: ${event.type}`;
}
xhr.upload.addEventListener("abort", errorAction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}
