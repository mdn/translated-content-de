---
title: "XMLHttpRequestUpload: Fortschrittsereignis"
short-title: Fortschritt
slug: Web/API/XMLHttpRequestUpload/progress_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`progress`**-Ereignis wird regelmäßig ausgelöst, wenn eine Anfrage mehr Daten erhält.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("progress", (event) => {});

onprogress = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte zu erledigende Arbeit und die bereits vom zugrunde liegenden Prozess erledigte Arbeit berechenbar sind. Mit anderen Worten, es gibt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-ungezeichneter Ganzzahlwert, der die Menge der bereits vom zugrunde liegenden Prozess ausgeführten Arbeit angibt. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Überkopfkosten nicht ein.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-ungezeichneter Ganzzahlwert, der die Gesamtmenge der Arbeit darstellt, die der zugrunde liegende Prozess gerade ausführt. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und andere Überkopfkosten nicht ein.

## Beispiele

## Verwendung des `progress`-Ereignisses

Sie können das `progress`-Ereignis verwenden, um Informationen über den Fortschritt eines langwierigen Uploads zu erhalten. Ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, finden Sie auf der Hauptseite von {{domxref("XMLHttpRequestUpload")}}.

```js
// Jedes Mal, wenn ein Fortschrittsereignis empfangen wird, aktualisieren wir die Fortschrittsanzeige
// und die Fortschrittsnachricht
xhr.upload.addEventListener("progress", (event) => {
  progressBar.value = event.loaded; // Aktualisieren der Fortschrittsanzeige
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

- Verwandte Ereignisse: {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}, {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}
- [Fortschritt überwachen](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
- {{domxref("XMLHttpRequestUpload")}}
