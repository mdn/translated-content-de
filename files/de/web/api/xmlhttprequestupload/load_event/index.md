---
title: "XMLHttpRequestUpload: load Ereignis"
short-title: load
slug: Web/API/XMLHttpRequestUpload/load_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `load`-Ereignis wird ausgelöst, wenn eine {{domxref("XMLHttpRequestUpload")}}-Transaktion erfolgreich abgeschlossen ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der Elternschnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte zu erledigende Arbeit und die bereits geleistete Arbeit durch den zugrunde liegenden Prozess berechenbar ist. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned Integer-Wert, der die Menge der bereits vom zugrunde liegenden Prozess geleisteten Arbeit angibt. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Overheads nicht ein.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned Integer-Wert, der die gesamte Menge der Arbeit darstellt, die der zugrunde liegende Prozess gegenwärtig leistet. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und andere Overheads nicht ein.

### Beispiele

## Verwenden des `load`-Ereignisses

Sie können das `load`-Ereignis verwenden, um das erfolgreiche Ende eines Uploads zu erkennen. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und einen Fortschrittsbalken anzeigt, siehe die Hauptseite von {{domxref("XMLHttpRequestUpload")}}.

```js
// Wenn der Upload abgeschlossen ist, blenden wir den Fortschrittsbalken aus.
xhr.upload.addEventListener("load", (event) => {
  progressBar.classList.remove("visible");
  log.textContent = "Upload finished.";
  abortButton.disabled = true;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}
