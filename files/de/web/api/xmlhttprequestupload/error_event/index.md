---
title: "XMLHttpRequestUpload: error Ereignis"
short-title: error
slug: Web/API/XMLHttpRequestUpload/error_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `error` Ereignis wird ausgelöst, wenn die Anfrage auf einen Fehler gestoßen ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind auch Eigenschaften von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte zu erledigende Arbeit und die bereits erledigte Arbeit durch den zugrunde liegenden Prozess berechenbar ist. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit unsigned Integer-Wert, der die bereits vom zugrunde liegenden Prozess geleistete Arbeitsmenge angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und anderen Overhead nicht ein.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit unsigned Integer, der die Gesamtmenge der Arbeit repräsentiert, die der zugrunde liegende Prozess ausführt. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und anderen Overhead nicht ein.

## Beispiele

### Verwendung des `error` Ereignisses

Sie können das `error` Ereignis verwenden, um ein Problem mit dem Upload zu erkennen. Ein komplettes Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, finden Sie auf der Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

```js
// In case of an error we hide the progress bar
// Note that this event can be listened to on the xhr object too
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload failed: ${event.type}`;
}
xhr.upload.addEventListener("error", errorAction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequestUpload/loadstart_event), [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event), [`progress`](/de/docs/Web/API/XMLHttpRequestUpload/progress_event), [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event), [`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
