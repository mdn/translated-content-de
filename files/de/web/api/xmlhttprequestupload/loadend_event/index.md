---
title: "XMLHttpRequestUpload: loadend-Ereignis"
short-title: loadend
slug: Web/API/XMLHttpRequestUpload/loadend_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`loadend`**-Ereignis wird ausgelöst, wenn eine Anfrage abgeschlossen ist, unabhängig davon, ob sie erfolgreich (nach [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event)) oder erfolglos (nach [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event) oder [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event)) war.

Das `loadend`-Ereignis wird auch gesendet, wenn die Anfrage unterbrochen wurde (durch einen [`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event), ein [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event) oder ein [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event)). In solchen Fällen beträgt sowohl der `loaded`- als auch der `total`-Wert des Ereignisses 0.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("loadend", (event) => {});

onloadend = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgelisteten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die gesamte zu leistende Arbeit und der bereits geleistete Arbeitsaufwand des zugrunde liegenden Prozesses berechenbar sind. Mit anderen Worten, es zeigt, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Ganzzahlwert ohne Vorzeichen, der den bereits vom zugrunde liegenden Prozess geleisteten Arbeitsaufwand angibt. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Body der HTTP-Nachricht und schließt Header und andere Overheads aus.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Ganzzahlwert ohne Vorzeichen, der die Gesamtmenge der Arbeit repräsentiert, die der zugrunde liegende Prozess ausführt. Beim Herunterladen einer Ressource über HTTP entspricht dies der `Content-Length` (der Größe des Nachrichtentextes) und schließt Header und andere Overheads aus.

## Beispiele

## Verwendung des `loadend`-Ereignisses

Sie können das `loadend`-Ereignis verwenden, um das (erfolgreiche oder nicht) Ende eines Uploads zu erkennen. Für ein komplettes Codebeispiel, das eine Datei hochlädt und eine Fortschrittsanzeige anzeigt, siehe die Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

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
