---
title: "FileReaderSync: readAsArrayBuffer()-Methode"
short-title: readAsArrayBuffer()
slug: Web/API/FileReaderSync/readAsArrayBuffer
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsArrayBuffer()`**-Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Schnittstelle ermöglicht das synchrone Lesen von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten in einen {{jsxref("ArrayBuffer")}}. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workers](/de/docs/Web/API/Worker), da sie eine synchrone Ein-/Ausgabe ermöglicht, die potenziell blockierend sein könnte.

## Syntax

```js-nolint
readAsArrayBuffer(blob)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder der [`Blob`](/de/docs/Web/API/Blob), die in die [`File`](/de/docs/Web/API/File) oder den {{jsxref("ArrayBuffer")}} gelesen werden soll.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}, der die Daten der Datei darstellt.

### Ausnahmen

Die folgenden Ausnahmen können von dieser Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch die DOM [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) repräsentiert wird, nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten verändert;
    - es werden zu viele Lesevorgänge gleichzeitig durchgeführt;
    - die Datei, auf die die Ressource verweist, ist zur Nutzung im Web unsicher (z.B. weil sie eine Systemdatei ist).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie einem gleichzeitigen Sperrung, nicht gelesen werden kann.
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
