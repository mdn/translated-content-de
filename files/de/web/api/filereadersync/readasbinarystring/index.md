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

Die **`readAsBinaryString()`**-Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Schnittstelle ermöglicht das synchrone Lesen von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten in eine Zeichenkette. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Web Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockierend wirkt.

## Syntax

```js-nolint
readAsBinaryString(blob)
```

### Parameter

- `blob`
  - : Das zu lesende [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob).

### Rückgabewert

Eine Zeichenkette, die die eingelesenen Daten darstellt.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die durch das DOM-[`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) repräsentierte Ressource nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten verändert;
    - es werden gleichzeitig zu viele Lesevorgänge durchgeführt;
    - die durch die Ressource bezeichnete Datei ist unsicher für die Verwendung im Web (z.B. ist es eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie einer parallelen Sperre, nicht gelesen werden kann.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und das von jedem Browser definierte Längenlimit überschreitet.

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
