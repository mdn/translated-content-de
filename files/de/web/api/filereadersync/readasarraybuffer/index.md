---
title: "FileReaderSync: Methode readAsArrayBuffer()"
short-title: readAsArrayBuffer()
slug: Web/API/FileReaderSync/readAsArrayBuffer
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsArrayBuffer()`**-Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Schnittstelle ermöglicht das synchrone Lesen von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten in einen {{jsxref("ArrayBuffer")}}. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsArrayBuffer(blob)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder der [`Blob`](/de/docs/Web/API/Blob), der in den [`File`](/de/docs/Web/API/File) oder {{jsxref("ArrayBuffer")}} gelesen werden soll.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}, der die Daten der Datei darstellt.

### Ausnahmen

Die folgenden Ausnahmen können von dieser Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch die DOM [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) dargestellt wird, nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von Dritten verändert;
    - es werden gleichzeitig zu viele Lesevorgänge durchgeführt;
    - die Datei, auf die die Ressource zeigt, ist unsicher für eine Nutzung im Web (z.B. es handelt sich um eine Systemdatei).
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
