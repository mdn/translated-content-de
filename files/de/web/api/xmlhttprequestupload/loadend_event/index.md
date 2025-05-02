---
title: "XMLHttpRequestUpload: loadend-Ereignis"
short-title: loadend
slug: Web/API/XMLHttpRequestUpload/loadend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`loadend`**-Ereignis wird ausgelöst, wenn eine Anfrage abgeschlossen wurde, unabhängig davon, ob sie erfolgreich (nach [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event)) oder erfolglos (nach [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event) oder [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event)) beendet wurde.

Das `loadend`-Ereignis wird auch gesendet, wenn die Anfrage unterbrochen wurde (durch ein [`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event), ein [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event) oder ein [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event)). In solchen Fällen betragen sowohl der `loaded`- als auch der `total`-Wert des Ereignisses 0.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("loadend", (event) => { })

onloadend = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die Gesamtarbeit, die vom zugrunde liegenden Prozess zu erledigen ist, und die bereits geleistete Arbeit berechenbar sind. Mit anderen Worten, es sagt aus, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer-Wert, der die bereits geleistete Arbeit durch den zugrunde liegenden Prozess angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Körper der HTTP-Nachricht und schließt Header und anderen Overhead nicht ein.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer, der die Gesamtmenge der Arbeit darstellt, die der zugrunde liegende Prozess auszuführen hat. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Nachrichtentextes) und schließt die Header und anderen Overhead nicht mit ein.

## Beispiele

### Verwendung des `loadend`-Ereignisses

Sie können das `loadend`-Ereignis verwenden, um die (erfolgreiche oder nicht erfolgreiche) Beendigung eines Uploads zu erkennen. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und einen Fortschrittsbalken anzeigt, siehe die Hauptseite [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

```js
// When the upload is finished, we hide the progress bar.
xhr.upload.addEventListener("loadend", (event) => {
  progressBar.classList.remove("visible");
  if (event.loaded !== 0) {
    // Successful termination
    log.textContent = "Upload finished.";
  }
  abortButton.disabled = true;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequestUpload/loadstart_event), [`progress`](/de/docs/Web/API/XMLHttpRequestUpload/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event), [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event), [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event), [`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
