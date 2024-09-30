---
title: "XMLHttpRequestUpload: abort-Ereignis"
short-title: abort
slug: Web/API/XMLHttpRequestUpload/abort_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `abort`-Ereignis wird bei [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload) ausgelöst, wenn eine Anfrage abgebrochen wurde, zum Beispiel, weil die Methode [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort) aufgerufen wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("abort", (event) => {});

onabort = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgelisteten Eigenschaften sind auch die Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die gesamte zu leistende Arbeit und die bereits geleistete Arbeit durch den zugrunde liegenden Prozess berechenbar ist. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert, der die Menge der bereits vom zugrunde liegenden Prozess geleisteten Arbeit angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Körper der HTTP-Nachricht und schließt Header und anderen Overhead nicht mit ein.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, das die Gesamtmenge der Arbeit darstellt, die der zugrunde liegende Prozess gerade verrichtet. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Nachrichtentextes) und schließt die Header und anderen Overhead nicht mit ein.

## Beispiele

### Verwendung des `abort`-Ereignisses

Sie können das `abort`-Ereignis verwenden, um den Upload abzubrechen, bevor er abgeschlossen ist. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und einen Fortschrittsbalken anzeigt, siehe die Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

```js
// In case of an abort we hide the progress bar
// Note that this event can be listened to on the xhr object too
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload failed: ${event.type}`;
}
xhr.upload.addEventListener("abort", errorAction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequestUpload/loadstart_event), [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event), [`progress`](/de/docs/Web/API/XMLHttpRequestUpload/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event), [`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
