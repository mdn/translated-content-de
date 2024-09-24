---
title: "XMLHttpRequestUpload: loadstart-Ereignis"
short-title: loadstart
slug: Web/API/XMLHttpRequestUpload/loadstart_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`loadstart`**-Ereignis wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("loadstart", (event) => {});

onloadstart = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften stehen auch Eigenschaften von der übergeordneten Schnittstelle, {{domxref("Event")}}, zur Verfügung._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte zu erledigende Arbeit und die bereits geleistete Arbeit des zugrunde liegenden Prozesses berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert, der die bereits vom zugrunde liegenden Prozess geleistete Arbeit angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Overheads nicht ein.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, das die Gesamtmenge der Arbeit darstellt, die der zugrunde liegende Prozess im Begriff ist, auszuführen. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und anderen Overheads nicht ein.

## Beispiele

## Verwendung des `loadstart`-Ereignisses

Sie können das `loadstart`-Ereignis verwenden, um den Beginn eines Uploads zu erkennen. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsleiste anzeigt, siehe die Hauptseite von {{domxref("XMLHttpRequestUpload")}}.

```js
// Wenn der Upload beginnt, wird die Fortschrittsanzeige angezeigt
xhr.upload.addEventListener("loadstart", (event) => {
  progressBar.classList.add("visible");
  progressBar.value = 0;
  progressBar.max = event.total;
  log.textContent = "Uploading (0%)…";
  abortButton.disabled = false;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}
