---
title: "FileReaderSync: Methode readAsText()"
short-title: readAsText()
slug: Web/API/FileReaderSync/readAsText
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsText()`**-Methode des [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Interfaces ermöglicht das synchrone Einlesen von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten in einen String. Dieses Interface ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da es synchrone Ein-/Ausgabe ermöglicht, die potenziell blockieren könnte.

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Das zu lesende [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob).
- `encoding` {{optional_inline}}
  - : Der optionale Parameter spezifiziert die zu verwendende Kodierung (z.B. `iso-8859-1` oder `UTF-8`). Wenn nicht vorhanden, wendet die Methode einen Erkennungsalgorithmus an.

### Rückgabewert

Ein String, der die Eingabedaten repräsentiert.

### Ausnahmen

Die folgenden Ausnahmen können von dieser Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch das DOM-[`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) repräsentiert wird, nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen festgestellt wird:
    - die Ressource wurde von einem Dritten geändert;
    - es werden zu viele Leseoperationen gleichzeitig durchgeführt;
    - die Datei, auf die die Ressource verweist, ist unsicher für die Nutzung aus dem Web (z.B. handelt es sich um eine Systemdatei).
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
