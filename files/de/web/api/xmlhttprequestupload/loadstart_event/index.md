---
title: "XMLHttpRequestUpload: loadstart-Ereignis"
short-title: loadstart
slug: Web/API/XMLHttpRequestUpload/loadstart_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`loadstart`**-Ereignis wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("loadstart", (event) => {});

onloadstart = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die gesamte zu erledigende Arbeit und die bereits geleistete Arbeit des zugrundeliegenden Prozesses berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, der die bereits vom zugrundeliegenden Prozess geleistete Arbeit angibt. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Overhead nicht ein.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, der die Gesamtmenge an Arbeit darstellt, die der zugrundeliegende Prozess im Begriff ist zu leisten. Beim Herunterladen einer Ressource über HTTP entspricht dies dem `Content-Length` (der Größe des Hauptteils der Nachricht) und schließt die Header und anderen Overhead nicht ein.

## Beispiele

## Verwenden des `loadstart`-Ereignisses

Sie können das `loadstart`-Ereignis nutzen, um den Beginn eines Uploads zu erkennen. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, siehe die Hauptseite [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

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
