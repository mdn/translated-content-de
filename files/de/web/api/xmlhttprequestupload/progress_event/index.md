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

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("progress", (event) => {});

onprogress = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die gesamte zu leistende Arbeit und der bereits geleistete Arbeitsaufwand durch den zugrunde liegenden Prozess berechnungsfähig sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-ganzzahliger Wert ohne Vorzeichen, der die Menge der bereits vom zugrunde liegenden Prozess geleisteten Arbeit angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource mithilfe von HTTP wird nur der Hauptteil der HTTP-Nachricht gezählt und nicht die Header und andere Überköpfe.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-ganzzahliger Wert ohne Vorzeichen, der die Gesamtmenge der Arbeit repräsentiert, die der zugrunde liegende Prozess gerade ausführt. Beim Herunterladen einer Ressource mit HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und andere Überköpfe nicht ein.

## Beispiele

## Verwendung des `progress`-Ereignisses

Sie können das `progress`-Ereignis verwenden, um Informationen über den Fortschritt eines längeren Uploads zu erhalten. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsleiste anzeigt, siehe die Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

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
