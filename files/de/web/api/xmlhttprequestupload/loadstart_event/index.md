---
title: "XMLHttpRequestUpload: loadstart-Ereignis"
short-title: loadstart
slug: Web/API/XMLHttpRequestUpload/loadstart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`loadstart`**-Ereignis wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("loadstart", (event) => { })

onloadstart = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften aus der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Kennzeichen, das angibt, ob die gesamte auszuführende Arbeit und die bereits geleistete Arbeit durch den zugrunde liegenden Prozess berechenbar ist. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert, der die Menge an Arbeit angibt, die bereits vom zugrunde liegenden Prozess ausgeführt wurde. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft dividiert wird. Beim Herunterladen einer Ressource mit HTTP zählt dies nur den Körper der HTTP-Nachricht und schließt Header und anderen Overhead nicht ein.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, der die Gesamtmenge an Arbeit darstellt, die der zugrunde liegende Prozess in der Ausführung ist. Beim Herunterladen einer Ressource mit HTTP ist dies die `Content-Length` (die Größe des Körpers der Nachricht) und schließt die Header und anderen Overhead nicht ein.

## Beispiele

### Verwendung des `loadstart`-Ereignisses

Sie können das `loadstart`-Ereignis verwenden, um den Beginn eines Uploads zu erkennen. Für ein vollständiges Code-Beispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, siehe die Hauptseite [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

```js
// When the upload starts, we display the progress bar
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

- Verwandte Ereignisse: [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event), [`progress`](/de/docs/Web/API/XMLHttpRequestUpload/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event), [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event), [`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
