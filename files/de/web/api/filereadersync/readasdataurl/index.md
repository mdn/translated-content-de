---
title: "FileReaderSync: readAsDataURL()-Methode"
short-title: readAsDataURL()
slug: Web/API/FileReaderSync/readAsDataURL
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsDataURL()`**-Methode der {{DOMxRef("FileReaderSync")}}-Schnittstelle ermöglicht es, {{DOMxRef("File")}}- oder {{DOMxRef("Blob")}}-Objekte synchron in einen String zu lesen, der eine Daten-URL darstellt. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workers](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsDataURL(blob)
```

### Parameter

- `blob`
  - : Die {{DOMxRef("File")}} oder der {{DOMxRef("Blob")}}, der gelesen werden soll.

### Rückgabewert

Ein String, der die Eingabedaten als Daten-URL darstellt.

### Ausnahmen

Die folgenden Ausnahmen können von dieser Methode ausgelöst werden:

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressource, die durch die DOM {{DOMxRef("File")}} oder den {{DOMxRef("Blob")}} repräsentiert wird, nicht gefunden werden kann, z.B. weil sie gelöscht wurde.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten verändert;
    - zu viele Leseoperationen werden gleichzeitig durchgeführt;
    - die Datei, auf die die Ressource verweist, ist unsicher für die Nutzung aus dem Web (z.B. handelt es sich um eine Systemdatei).
- `NotReadableError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie einem gleichzeitigen Sperrung, nicht gelesen werden kann.
- `EncodingError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die von jedem Browser definierte Längengrenze überschreitet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- {{DOMxRef("File")}}
- {{DOMxRef("FileReaderSync")}}
- {{DOMxRef("FileReader")}}
- {{ domxref("Blob") }}
