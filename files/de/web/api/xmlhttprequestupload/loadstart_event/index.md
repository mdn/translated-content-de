---
title: "XMLHttpRequestUpload: loadstart Ereignis"
short-title: loadstart
slug: Web/API/XMLHttpRequestUpload/loadstart_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`loadstart`** Ereignis wird ausgelöst, wenn eine Anfrage damit begonnen hat, Daten zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("loadstart", (event) => {});

onloadstart = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften stehen auch Eigenschaften der Schnittstelle [`Event`](/de/docs/Web/API/Event) zur Verfügung._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte Arbeit, die zu erledigen ist, und die bereits geleistete Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es gibt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integerwert ohne Vorzeichen, der die Menge an Arbeit angibt, die der zugrunde liegende Prozess bereits geleistet hat. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Nachrichtentext und schließt Header und anderen Aufwand aus.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, der die Gesamtmenge an Arbeit darstellt, die der zugrunde liegende Prozess auszuführen hat. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Nachrichtentextes) und schließt die Header und anderen Aufwand aus.

## Beispiele

## Verwendung des `loadstart` Ereignisses

Sie können das `loadstart` Ereignis verwenden, um den Beginn eines Uploads zu erkennen. Für ein vollständiges Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, siehe die Hauptseite [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

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
