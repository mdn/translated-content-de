---
title: "XMLHttpRequestUpload: timeout-Ereignis"
short-title: timeout
slug: Web/API/XMLHttpRequestUpload/timeout_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`timeout`**-Ereignis wird ausgelöst, wenn der Fortschritt aufgrund der Ablauffrist beendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("timeout", (event) => { })

ontimeout = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Kennzeichen, das angibt, ob die gesamte zu leistende Arbeit und die bereits geleistete Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert ohne Vorzeichen, der die bereits durch den zugrunde liegenden Prozess geleistete Arbeit angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Körper der HTTP-Nachricht und schließt keine Header und anderes Overhead ein.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer ohne Vorzeichen, das die gesamte Menge der Arbeit repräsentiert, die der zugrunde liegende Prozess gerade ausführt. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Nachrichtentextes) und schließt keine Header und anderes Overhead ein.

## Beispiele

### Verwendung des `timeout`-Ereignisses

Sie können das `timeout`-Ereignis verwenden, um einen Upload zu erkennen, der gestoppt wurde, weil er zu langsam war. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, siehe die Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

Das Timeout wird auf dem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt mit der [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)-Eigenschaft gesetzt.

```js
// In case of an timeout we hide the progress bar
// Note that this event can be listened to on the xhr object too
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload failed: ${event.type}`;
}
xhr.upload.addEventListener("timeout", errorAction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequestUpload/loadstart_event), [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event), [`progress`](/de/docs/Web/API/XMLHttpRequestUpload/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event), [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
- [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
