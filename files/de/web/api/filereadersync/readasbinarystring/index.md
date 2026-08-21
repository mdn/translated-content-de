---
title: "FileReaderSync: Methode readAsBinaryString()"
short-title: readAsBinaryString()
slug: Web/API/FileReaderSync/readAsBinaryString
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

> [!NOTE]
> Diese Methode ist zugunsten von [`readAsArrayBuffer()`](/de/docs/Web/API/FileReaderSync/readAsArrayBuffer) veraltet.

Die **`readAsBinaryString()`**-Methode der Schnittstelle [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) ermöglicht es, [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte synchron in einen String zu lesen. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsBinaryString(blob)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder der [`Blob`](/de/docs/Web/API/Blob), der gelesen werden soll.

### Rückgabewert

Ein String, der die Eingabedaten repräsentiert.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch die DOM [`File`](/de/docs/Web/API/File) oder den [`Blob`](/de/docs/Web/API/Blob) dargestellt wird, nicht gefunden werden kann, z. B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten verändert;
    - es werden zu viele Lesezugriffe gleichzeitig durchgeführt;
    - die Datei, auf die die Ressource zeigt, ist unsafe für die Nutzung im Web (zum Beispiel handelt es sich um eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie einem gleichzeitigen Lock, nicht gelesen werden kann.
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
