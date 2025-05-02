---
title: "XMLHttpRequestUpload: load-Event"
short-title: load
slug: Web/API/XMLHttpRequestUpload/load_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `load`-Event wird ausgelöst, wenn eine [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)-Transaktion erfolgreich abgeschlossen wird.

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## Event-Typ

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Event-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte zu erledigende Arbeit und die bereits geleistete Arbeit vom zugrunde liegenden Prozess berechenbar ist. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer-Wert, der die bereits vom zugrunde liegenden Prozess geleistete Arbeit angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Overheads aus.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer-Wert, der die gesamte Menge der Arbeit repräsentiert, die der zugrunde liegende Prozess ausführt. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und andere Overheads aus.

### Beispiele

## Verwendung des `load`-Events

Sie können das `load`-Event verwenden, um das erfolgreiche Ende eines Uploads zu erkennen. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsleiste anzeigt, siehe die Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

```js
// When the upload is finished, we hide the progress bar.
xhr.upload.addEventListener("load", (event) => {
  progressBar.classList.remove("visible");
  log.textContent = "Upload finished.";
  abortButton.disabled = true;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Events: [`loadstart`](/de/docs/Web/API/XMLHttpRequestUpload/loadstart_event), [`progress`](/de/docs/Web/API/XMLHttpRequestUpload/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event), [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event), [`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
