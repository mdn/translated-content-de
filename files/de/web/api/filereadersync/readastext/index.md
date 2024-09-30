---
title: "FileReaderSync: readAsText()-Methode"
short-title: readAsText()
slug: Web/API/FileReaderSync/readAsText
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsText()`**-Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Schnittstelle ermöglicht das synchrone Lesen von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten in eine Zeichenkette. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workers](/de/docs/Web/API/Worker), da sie synchrone I/O-Operationen ermöglicht, die potenziell blockierend sein könnten.

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Die zu lesende [`File`](/de/docs/Web/API/File) oder der zu lesende [`Blob`](/de/docs/Web/API/Blob).
- `encoding` {{optional_inline}}
  - : Der optionale Parameter gibt die zu verwendende Kodierung an (z.B. `iso-8859-1` oder `UTF-8`). Wenn er nicht vorhanden ist, wird die Methode einen Erkennungsalgorithmus anwenden.

### Rückgabewert

Eine Zeichenkette, die die Eingabedaten repräsentiert.

### Ausnahmen

Die folgende Ausnahmen können von dieser Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die durch die DOM-[`File`](/de/docs/Web/API/File) oder den [`Blob`](/de/docs/Web/API/Blob) repräsentierte Ressource nicht gefunden werden kann, z.B., weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen festgestellt wird:
    - Die Ressource wurde von einem Dritten verändert;
    - zu viele Lesevorgänge werden gleichzeitig durchgeführt;
    - die Datei, auf die die Ressource verweist, ist unsicher für eine Nutzung aus dem Web (wie z.B. eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie z.B. einer konkurrierenden Sperre, nicht gelesen werden kann.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die durch jeden Browser definierte Längenbeschränkung überschreitet.

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
