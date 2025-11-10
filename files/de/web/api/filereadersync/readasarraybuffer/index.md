---
title: "FileReaderSync: readAsArrayBuffer()-Methode"
short-title: readAsArrayBuffer()
slug: Web/API/FileReaderSync/readAsArrayBuffer
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsArrayBuffer()`**-Methode des [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Interfaces ermöglicht das synchrone Lesen von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten in ein {{jsxref("ArrayBuffer")}}. Dieses Interface ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Arbeitern](/de/docs/Web/API/Worker), da es synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsArrayBuffer(blob)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob), die in die [`File`](/de/docs/Web/API/File) oder das {{jsxref("ArrayBuffer")}} gelesen werden soll.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}, das die Daten der Datei repräsentiert.

### Ausnahmen

Die folgende Ausnahmen können durch diese Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn die Ressource, die durch die DOM [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) repräsentiert wird, nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einer Drittpartei modifiziert;
    - es werden gleichzeitig zu viele Lesevorgänge durchgeführt;
    - die durch die Ressource angezeigte Datei ist unsicher für die Verwendung aus dem Web (z.B. weil es sich um eine Systemdatei handelt).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn die Ressource aufgrund eines Berechtigungsproblems, wie einem konkurrierenden Sperren, nicht gelesen werden kann.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn die Ressource eine Daten-URL ist und die von jedem Browser definierte Längenbegrenzung überschreitet.

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
