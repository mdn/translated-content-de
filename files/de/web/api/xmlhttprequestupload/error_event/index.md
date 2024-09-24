---
title: "XMLHttpRequestUpload: Fehlereignis"
short-title: Fehler
slug: Web/API/XMLHttpRequestUpload/error_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `error` Ereignis wird ausgelöst, wenn bei der Anfrage ein Fehler auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind auch Eigenschaften der Elternschnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die Gesamtarbeit, die zu erledigen ist, und die bereits erledigte Arbeit des zugrunde liegenden Prozesses berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-bit vorzeichenloser Ganzzahlwert, der die Menge der bereits vom zugrunde liegenden Prozess erledigten Arbeit anzeigt. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft dividiert wird. Beim Herunterladen einer Ressource über HTTP wird nur der Hauptteil der HTTP-Nachricht gezählt, die Header und andere Überhead werden nicht einbezogen.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-bit vorzeichenloser Ganzzahlwert, der die Gesamtmenge an Arbeit darstellt, die der zugrunde liegende Prozess in Bearbeitung hat. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und anderen Überhead nicht ein.

## Beispiele

### Verwendung des `error` Ereignisses

Sie können das `error` Ereignis verwenden, um ein Problem beim Hochladen zu erkennen. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige zeigt, siehe die Hauptseite von {{domxref("XMLHttpRequestUpload")}}.

```js
// Im Fehlerfall blenden wir die Fortschrittsanzeige aus
// Beachten Sie, dass dieses Ereignis auch am xhr-Objekt selbst abgehört werden kann
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload fehlgeschlagen: ${event.type}`;
}
xhr.upload.addEventListener("error", errorAction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}, {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}
