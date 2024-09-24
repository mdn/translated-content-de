---
title: "FileReaderSync: readAsBinaryString() Methode"
short-title: readAsBinaryString()
slug: Web/API/FileReaderSync/readAsBinaryString
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{deprecated_header}} {{AvailableInWorkers("worker_except_service")}}

> [!NOTE]
> Diese Methode ist zugunsten von {{DOMxRef("FileReaderSync.readAsArrayBuffer","readAsArrayBuffer()")}} veraltet.

Die **`readAsBinaryString()`** Methode der {{DOMxRef("FileReaderSync")}} Schnittstelle ermöglicht das synchrone Lesen von {{DOMxRef("File")}} oder {{DOMxRef("Blob")}} Objekten in einen String. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsBinaryString(blob)
```

### Parameter

- `blob`
  - : Die {{DOMxRef("File")}} oder {{DOMxRef("Blob")}}, die gelesen werden soll.

### Rückgabewert

Ein String, der die Eingabedaten darstellt.

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die durch die DOM {{DOMxRef("File")}} oder {{DOMxRef("Blob")}} dargestellte Ressource nicht gefunden werden kann, z. B. weil sie gelöscht wurde.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen festgestellt wird:
    - die Ressource wurde von einem Dritten verändert;
    - es werden zu viele Lesevorgänge gleichzeitig durchgeführt;
    - die durch die Ressource angezeigte Datei ist unsicher für eine Verwendung im Web (wie ein Systemdatei).
- `NotReadableError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie einem gleichzeitigen Sperren, nicht gelesen werden kann.
- `EncodingError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die durch jeden Browser definierte Längenbegrenzung überschreitet.

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
