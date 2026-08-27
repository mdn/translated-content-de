---
title: "FileReaderSync: readAsArrayBuffer() Methode"
short-title: readAsArrayBuffer()
slug: Web/API/FileReaderSync/readAsArrayBuffer
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsArrayBuffer()`**-Methode des [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Interfaces ermöglicht es Ihnen, [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte synchron in einen {{jsxref("ArrayBuffer")}} zu lesen. Dieses Interface ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da es synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsArrayBuffer(blob)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob), die in die [`File`](/de/docs/Web/API/File) oder in den {{jsxref("ArrayBuffer")}} gelesen werden soll.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}, der die Daten der Datei darstellt.

### Ausnahmen

Die folgenden Ausnahmen können durch diese Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die durch die DOM [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) repräsentierte Ressource nicht gefunden werden kann, z. B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten modifiziert;
    - es werden zu viele Lesevorgänge gleichzeitig durchgeführt;
    - die Datei, auf die durch die Ressource verwiesen wird, ist für die Webnutzung unsicher (z. B. ist sie eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie z. B. eines gleichzeitigen Zugriffs, nicht gelesen werden kann.
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
