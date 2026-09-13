---
title: "FileReaderSync: readAsDataURL() Methode"
short-title: readAsDataURL()
slug: Web/API/FileReaderSync/readAsDataURL
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsDataURL()`** Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Schnittstelle ermöglicht es Ihnen, [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) Objekte synchron in eine Zeichenkette einzulesen, die eine Data-URL repräsentiert. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Arbeitern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsDataURL(blob)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob), die gelesen werden soll.

### Rückgabewert

Eine Zeichenkette, die die Eingabedaten als Data-URL darstellt.

### Ausnahmen

Die folgenden Ausnahmen können von dieser Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch die DOM [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) repräsentiert wird, nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von Dritten verändert;
    - zu viele Leseoperationen werden gleichzeitig durchgeführt;
    - die Datei, auf die die Ressource zeigt, ist unsicher für eine Nutzung aus dem Web (wie z.B. eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems nicht gelesen werden kann, wie z.B. bei einem gleichzeitigem Sperrzustand.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource eine Data-URL ist und die von jedem Browser definierte Längenbegrenzung überschreitet.

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
