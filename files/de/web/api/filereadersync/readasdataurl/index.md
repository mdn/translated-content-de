---
title: "FileReaderSync: Methode readAsDataURL()"
short-title: readAsDataURL()
slug: Web/API/FileReaderSync/readAsDataURL
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsDataURL()`** Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Schnittstelle ermöglicht das synchrone Lesen von [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) Objekten in einen String, der eine Daten-URL darstellt. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsDataURL(blob)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob), die gelesen werden soll.

### Rückgabewert

Ein String, der die Eingabedaten als Daten-URL darstellt.

### Ausnahmen

Die folgenden Ausnahmen können durch diese Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch die DOM [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) dargestellt wird, nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen festgestellt wird:
    - die Ressource wurde von einem Dritten verändert;
    - es werden zu viele Lesevorgänge gleichzeitig ausgeführt;
    - die Datei, auf die die Ressource verweist, ist unsicher für die Verwendung im Web (beispielsweise ein Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie einem gleichzeitigen Sperren, nicht gelesen werden kann.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die von jedem Browser festgelegte Längenbeschränkung überschreitet.

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
