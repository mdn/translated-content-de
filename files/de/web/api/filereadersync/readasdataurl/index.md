---
title: "FileReaderSync: readAsDataURL() Methode"
short-title: readAsDataURL()
slug: Web/API/FileReaderSync/readAsDataURL
l10n:
  sourceCommit: 1a09a1e09d761cda91a8c89dc4f665182ec493f8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsDataURL()`** Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Schnittstelle ermöglicht das Lesen von [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) Objekten auf synchronem Weg in einen String, der eine Data-URL darstellt. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie eine synchrone I/O ermöglicht, die potenziell blockieren könnte.

## Syntax

```js-nolint
readAsDataURL(blob)
```

### Parameter

- `blob`
  - : Das [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob), das gelesen werden soll.

### Rückgabewert

Ein String, der die Eingabedaten als Data-URL darstellt.

### Ausnahmen

Die folgende Ausnahmen können von dieser Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Ressource, die durch das DOM [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) repräsentiert wird, nicht gefunden werden kann, z.B., weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - Die Ressource wurde von einem Dritten verändert;
    - Es werden zu viele Leseoperationen gleichzeitig durchgeführt;
    - Die Datei, auf die die Ressource verweist, ist unsicher für die Nutzung im Web (z.B. ein Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems nicht gelesen werden kann, wie z.B. ein gleichzeitiger Sperrzugriff.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Ressource eine Data-URL ist und die von jedem Browser definierte Längenbeschränkung überschreitet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`File`](/de/docs/Web/API/File)
- [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)
- [`FileReader`](/de/docs/Web/API/FileReader)
- [`Blob`](/de/docs/Web/API/Blob)
