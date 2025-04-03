---
title: "FileReaderSync: readAsBinaryString() Methode"
short-title: readAsBinaryString()
slug: Web/API/FileReaderSync/readAsBinaryString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("File API")}}{{deprecated_header}} {{AvailableInWorkers("worker_except_service")}}

> [!NOTE]
> Diese Methode wird zugunsten von [`readAsArrayBuffer()`](/de/docs/Web/API/FileReaderSync/readAsArrayBuffer) als veraltet angesehen.

Die **`readAsBinaryString()`** Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Schnittstelle ermöglicht das synchrone Lesen von [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) Objekten in einen String. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsBinaryString(blob)
```

### Parameter

- `blob`
  - : Die zu lesende [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob).

### Rückgabewert

Ein String, der die Eingabedaten darstellt.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die durch die DOM [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) dargestellte Ressource nicht gefunden werden kann, z. B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - Die Ressource wurde von einem Dritten verändert;
    - Es werden zu viele Leseoperationen gleichzeitig durchgeführt;
    - Die Datei, auf die die Ressource verweist, ist unsicher für eine Web-Nutzung (wie z. B. eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems nicht gelesen werden kann, wie z. B. ein gleichzeitiges Sperren.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die von jedem Browser definierte Längenbeschränkung überschreitet.

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
