---
title: "FileReaderSync: readAsBinaryString() Methode"
short-title: readAsBinaryString()
slug: Web/API/FileReaderSync/readAsBinaryString
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

> [!NOTE]
> Diese Methode ist zugunsten von [`readAsArrayBuffer()`](/de/docs/Web/API/FileReaderSync/readAsArrayBuffer) veraltet.

Die **`readAsBinaryString()`** Methode des [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Interfaces ermöglicht es Ihnen, [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte auf synchrone Weise in einen String zu lesen. Dieses Interface ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workers](/de/docs/Web/API/Worker), da es synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsBinaryString(blob)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob), die gelesen werden soll.

### Rückgabewert

Ein String, der die Eingabedaten darstellt.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch die DOM [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) repräsentiert wird, nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten modifiziert;
    - es werden gleichzeitig zu viele Lesevorgänge durchgeführt;
    - die Datei, auf die die Ressource zeigt, ist unsicher für eine Nutzung aus dem Web (wie z.B. eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems nicht gelesen werden kann, wie z.B. einem gleichzeitigen Sperren.
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
