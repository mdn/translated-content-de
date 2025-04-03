---
title: "FileReaderSync: readAsText()-Methode"
short-title: readAsText()
slug: Web/API/FileReaderSync/readAsText
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsText()`**-Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Schnittstelle ermöglicht das synchrone Auslesen von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten in einen String. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie synchronen I/O ermöglicht, der potenziell blockieren könnte.

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder der [`Blob`](/de/docs/Web/API/Blob), die gelesen werden sollen.
- `encoding` {{optional_inline}}
  - : Der optionale Parameter spezifiziert die zu verwendende Kodierung (z. B. `iso-8859-1` oder `UTF-8`). Wenn nicht vorhanden, wird die Methode einen Erkennungsalgorithmus anwenden.

### Rückgabewert

Ein String, der die Eingabedaten darstellt.

### Ausnahmen

Die folgende Ausnahmen können von dieser Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die durch die DOM-[`File`](/de/docs/Web/API/File) oder den [`Blob`](/de/docs/Web/API/Blob) dargestellte Ressource nicht gefunden werden kann, z. B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einer dritten Partei verändert;
    - es werden zu viele Lesevorgänge gleichzeitig durchgeführt;
    - die durch die Ressource angegebene Datei ist unsicher für eine Verwendung im Web (z. B. handelt es sich um eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems nicht gelesen werden kann, wie z. B. einer gleichzeitigen Sperre.
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
