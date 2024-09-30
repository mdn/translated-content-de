---
title: "FileReaderSync: Methode readAsDataURL()"
short-title: readAsDataURL()
slug: Web/API/FileReaderSync/readAsDataURL
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsDataURL()`** Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Schnittstelle ermöglicht das synchrone Lesen von [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) Objekten in einen String, der eine Daten-URL darstellt. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Arbeitern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsDataURL(blob)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder der [`Blob`](/de/docs/Web/API/Blob), die gelesen werden soll.

### Rückgabewert

Ein String, der die Eingabedaten als Daten-URL darstellt.

### Ausnahmen

Die folgenden Ausnahmen können von dieser Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch die DOM [`File`](/de/docs/Web/API/File) oder den [`Blob`](/de/docs/Web/API/Blob) repräsentiert wird, nicht gefunden werden kann, z. B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten modifiziert;
    - es werden gleichzeitig zu viele Lesevorgänge durchgeführt;
    - die Datei, auf die die Ressource verweist, ist unsicher für eine Verwendung aus dem Web (wie etwa eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems nicht gelesen werden kann, wie etwa ein gleichzeitiger Sperrmechanismus.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die von jedem Browser definierte Längenbegrenzung überschreitet.

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
