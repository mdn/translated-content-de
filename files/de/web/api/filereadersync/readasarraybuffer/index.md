---
title: "FileReaderSync: readAsArrayBuffer()-Methode"
short-title: readAsArrayBuffer()
slug: Web/API/FileReaderSync/readAsArrayBuffer
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`readAsArrayBuffer()`**-Methode der {{DOMxRef("FileReaderSync")}}-Schnittstelle ermöglicht es, {{DOMxRef("File")}}- oder {{DOMxRef("Blob")}}-Objekte auf synchrone Weise in einen {{jsxref("ArrayBuffer")}} einzulesen. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Syntax

```js-nolint
readAsArrayBuffer(blob)
```

### Parameter

- `blob`
  - : Die {{DOMxRef("File")}} oder das {{DOMxRef("Blob")}}, das in die {{DOMxRef("File")}} oder den {{jsxref("ArrayBuffer")}} eingelesen werden soll.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}, der die Daten der Datei repräsentiert.

### Ausnahmen

Die folgenden Ausnahmen können bei dieser Methode ausgelöst werden:

- `NotFoundError` {{domxref("DOMException")}}
  - : Wirft einen Fehler, wenn die durch das DOM {{DOMxRef("File")}} oder {{DOMxRef("Blob")}} repräsentierte Ressource nicht gefunden werden kann, zum Beispiel, weil sie gelöscht wurde.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine der folgenden problematischen Situationen erkannt wird:
    - die Ressource wurde von einem Dritten modifiziert;
    - zu viele Lesevorgänge werden gleichzeitig durchgeführt;
    - die Datei, auf die die Ressource zeigt, ist unsicher für die Nutzung im Web (zum Beispiel, wenn es sich um eine Systemdatei handelt).
- `NotReadableError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Berechtigungsproblems, wie eines gleichzeitigen Sperrverfahrens, nicht gelesen werden kann.
- `EncodingError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressource eine Daten-URL ist und die durch jeden Browser definierte Längenbegrenzung überschreitet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("File API", "", "", "nocode")}}
- {{DOMxRef("File")}}
- {{DOMxRef("FileReaderSync")}}
- {{DOMxRef("FileReader")}}
- {{DOMxRef("Blob")}}
