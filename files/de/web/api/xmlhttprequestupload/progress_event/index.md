---
title: "XMLHttpRequestUpload: progress event"
short-title: progress
slug: Web/API/XMLHttpRequestUpload/progress_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`progress`**-Ereignis wird periodisch ausgelöst, wenn eine Anfrage mehr Daten empfängt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("progress", (event) => { })

onprogress = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die gesamte zu leistende Arbeit und die bereits geleistete Arbeit des zugrunde liegenden Prozesses berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer ohne Vorzeichen, der die Menge der bereits vom zugrunde liegenden Prozess geleisteten Arbeit angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Body der HTTP-Nachricht und schließt Header und andere Overheads aus.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer ohne Vorzeichen, der die gesamte Menge der Arbeit darstellt, die der zugrunde liegende Prozess gerade ausführt. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Bodys der Nachricht), und schließt die Header und anderen Overheads aus.

## Beispiele

### Verwendung des `progress`-Ereignisses

Sie können das `progress`-Ereignis verwenden, um Informationen über den Fortschritt eines langfristigen Uploads zu erhalten. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsleiste anzeigt, sehen Sie die Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

```js
// Each time a progress event is received we update the progress bar
// and the progress message
xhr.upload.addEventListener("progress", (event) => {
  progressBar.value = event.loaded; // Update the progress bar
  log.textContent = `Uploading (${((event.loaded / event.total) * 100).toFixed(
    2,
  )}%)…`;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequestUpload/loadstart_event), [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event), [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event), [`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event), [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event)
- [Überwachung des Fortschritts](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
