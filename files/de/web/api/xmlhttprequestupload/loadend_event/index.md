---
title: "XMLHttpRequestUpload: loadend-Ereignis"
short-title: loadend
slug: Web/API/XMLHttpRequestUpload/loadend_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`loadend`**-Ereignis wird ausgelöst, wenn eine Anfrage abgeschlossen ist, unabhängig davon, ob sie erfolgreich (nach {{domxref("XMLHttpRequestUpload/load_event", "load")}}) oder erfolglos (nach {{domxref("XMLHttpRequestUpload/abort_event", "abort")}} oder {{domxref("XMLHttpRequestUpload/error_event", "error")}}) war.

Das `loadend`-Ereignis wird auch gesendet, wenn die Anfrage unterbrochen wurde (durch ein {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}, ein {{domxref("XMLHttpRequestUpload/abort_event", "abort")}} oder ein {{domxref("XMLHttpRequestUpload/error_event", "error")}}). In solchen Fällen sind sowohl der `loaded`- als auch der `total`-Wert des Ereignisses 0.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("loadend", (event) => {});

onloadend = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die Gesamtarbeit und die bereits geleistete Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integerwert, der die Menge der bereits durch den zugrunde liegenden Prozess geleisteten Arbeit angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource mit HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Overhead nicht ein.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, das die Gesamtmenge an Arbeit repräsentiert, die der zugrunde liegende Prozess im Begriff ist zu leisten. Beim Herunterladen einer Ressource mit HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und anderen Overhead nicht ein.

## Beispiele

## Verwendung des `loadend`-Ereignisses

Sie können das `loadend`-Ereignis verwenden, um das Ende eines Uploads (erfolgreich oder nicht) zu erkennen. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsleiste anzeigt, siehe die Hauptseite von {{domxref("XMLHttpRequestUpload")}}.

```js
// Wenn der Upload abgeschlossen ist, blenden wir die Fortschrittsleiste aus.
xhr.upload.addEventListener("loadend", (event) => {
  progressBar.classList.remove("visible");
  if (event.loaded !== 0) {
    // Erfolgreicher Abschluss
    log.textContent = "Upload abgeschlossen.";
  }
  abortButton.disabled = true;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}
