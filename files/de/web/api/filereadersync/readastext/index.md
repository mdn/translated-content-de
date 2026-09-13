---
title: "FileReaderSync: Methode readAsText()"
short-title: readAsText()
slug: Web/API/FileReaderSync/readAsText
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsText()`**-Methode der [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Schnittstelle ermöglicht es Ihnen, [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte auf synchronisierte Weise in eine Zeichenkette zu lesen. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workers](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Die [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob), die gelesen werden soll.
- `encoding` {{optional_inline}}
  - : Der optionale Parameter gibt die zu verwendende Kodierung an (z. B. `iso-8859-1` oder `UTF-8`). Bei Abwesenheit wird die Methode einen Erkennungsalgorithmus hierfür anwenden.

### Rückgabewert

Eine Zeichenkette, die die Eingabedaten darstellt.

### Ausnahmen

Die folgende Ausnahmen können durch diese Methode ausgelöst werden:

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource, die durch die DOM-[`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) dargestellt wird, nicht gefunden werden kann, z. B. weil sie gelöscht wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten modifiziert;
    - es werden zu viele Leseoperationen gleichzeitig durchgeführt;
    - die Datei, auf die die Ressource verweist, ist unsicher für die Verwendung aus dem Web (wie zum Beispiel eine Systemdatei).
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems nicht gelesen werden kann, wie zum Beispiel ein gleichzeitiges Sperren.
- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die von jedem Browser definierte Längengrenze überschreitet.

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
