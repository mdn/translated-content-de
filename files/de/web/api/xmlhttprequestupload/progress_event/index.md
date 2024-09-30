---
title: "XMLHttpRequestUpload: progress-Ereignis"
short-title: progress
slug: Web/API/XMLHttpRequestUpload/progress_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`progress`**-Ereignis wird regelmäßig ausgelöst, wenn eine Anfrage mehr Daten empfängt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("progress", (event) => {});

onprogress = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die zu erledigende Gesamtarbeit und die bereits erledigte Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es zeigt, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert, der die Menge der bereits von dem zugrunde liegenden Prozess geleisteten Arbeit angibt. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP wird hier nur der Körper der HTTP-Nachricht gezählt, nicht jedoch die Header und anderer Overhead.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, der die Gesamtmenge der Arbeit angibt, die der zugrunde liegende Prozess zurzeit ausführt. Beim Herunterladen einer Ressource über HTTP entspricht dies der `Content-Length` (der Größe des Nachrichtentextes) und schließt die Header und den anderen Overhead nicht ein.

## Beispiele

## Verwendung des `progress`-Ereignisses

Sie können das `progress`-Ereignis verwenden, um Informationen über den Fortschritt eines langwierigen Uploads zu erhalten. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, siehe die Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

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
