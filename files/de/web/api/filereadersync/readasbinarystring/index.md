---
title: "FileReaderSync: readAsBinaryString()-Methode"
short-title: readAsBinaryString()
slug: Web/API/FileReaderSync/readAsBinaryString
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{deprecated_header}} {{AvailableInWorkers("worker_except_service")}}

> [!NOTE]
> Diese Methode ist zugunsten von [`readAsArrayBuffer()`](/de/docs/Web/API/FileReaderSync/readAsArrayBuffer) veraltet.

Die **`readAsBinaryString()`**-Methode des [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Interfaces ermöglicht es, [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte synchron in eine Zeichenkette zu lesen. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Web Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsBinaryString(blob)
```

### Parameter

- `blob`
  - : Die zu lesende [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob).

### Rückgabewert

Eine Zeichenkette, die die Eingabedaten repräsentiert.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch das DOM-[`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) repräsentiert wird, nicht gefunden werden kann, z. B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten geändert;
    - es werden gleichzeitig zu viele Lesevorgänge durchgeführt;
    - die durch die Ressource angezeigte Datei ist unsicher für die Verwendung im Web (z. B. eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie einem gleichzeitigen Sperren, nicht gelesen werden kann.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die von jedem Browser definierte Längenbegrenzung überschreitet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File API](/de/docs/Web/API/File_API)
- [`File`](/de/docs/Web/API/File)
- [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)
- [`FileReader`](/de/docs/Web/API/FileReader)
- [`Blob`](/de/docs/Web/API/Blob)
