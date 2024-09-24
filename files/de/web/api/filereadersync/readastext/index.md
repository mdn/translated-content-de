---
title: "FileReaderSync: Methode readAsText()"
short-title: readAsText()
slug: Web/API/FileReaderSync/readAsText
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsText()`** Methode des {{DOMxRef("FileReaderSync")}} Interfaces ermöglicht das synchrone Einlesen von {{DOMxRef("File")}} oder {{DOMxRef("Blob")}} Objekten in einen String. Dieses Interface ist [nur in](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) [Web-Workern](/de/docs/Web/API/Worker) verfügbar, da es synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Die {{DOMxRef("File")}} oder der {{DOMxRef("Blob")}}, der gelesen werden soll.
- `encoding` {{optional_inline}}
  - : Der optionale Parameter gibt die zu verwendende Kodierung an (z.B. `iso-8859-1` oder `UTF-8`). Falls nicht angegeben, wird eine Erkennungsmethode angewendet.

### Rückgabewert

Ein String, der die Eingabedaten repräsentiert.

### Ausnahmen

Die folgenden Ausnahmen können durch diese Methode ausgelöst werden:

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die durch die DOM {{DOMxRef("File")}} oder {{DOMxRef("Blob")}} dargestellte Ressource nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten verändert;
    - es werden zu viele Lesevorgänge gleichzeitig durchgeführt;
    - die Datei, auf die die Ressource verweist, ist unsicher für die Nutzung im Web (wie z.B. eine Systemdatei).
- `NotReadableError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie einem gleichzeitigen Sperren, nicht gelesen werden kann.
- `EncodingError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die von jedem Browser festgelegte Längenbeschränkung überschreitet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File API](/de/docs/Web/API/File_API)
- {{DOMxRef("File")}}
- {{DOMxRef("FileReaderSync")}}
- {{DOMxRef("FileReader")}}
- {{ domxref("Blob") }}
