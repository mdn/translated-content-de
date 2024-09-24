---
title: FileReaderSync
slug: Web/API/FileReaderSync
l10n:
  sourceCommit: 1dad49fff047729e8dcca313a45ccb4cc2d2526f
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`FileReaderSync`**-Schnittstelle ermöglicht das synchrone Lesen von {{DOMxRef("File")}}- oder {{DOMxRef("Blob")}}-Objekten. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Konstruktor

- {{domxref("FileReaderSync.FileReaderSync", "FileReaderSync()")}}
  - : Gibt ein neues `FileReaderSync`-Objekt zurück.

## Instanzeigenschaften

Diese Schnittstelle hat keine Eigenschaften.

## Instanzmethoden

- {{DOMxRef("FileReaderSync.readAsArrayBuffer","FileReaderSync.readAsArrayBuffer()")}}
  - : Diese Methode wandelt ein angegebenes {{DOMxRef("Blob")}} oder eine {{DOMxRef("File")}} in einen {{jsxref("ArrayBuffer")}} um, der die Eingabedaten als binären String darstellt.
- {{DOMxRef("FileReaderSync.readAsBinaryString","FileReaderSync.readAsBinaryString()")}} {{deprecated_inline}}
  - : Diese Methode wandelt ein angegebenes {{DOMxRef("Blob")}} oder eine {{DOMxRef("File")}} in einen String um, der die Eingabedaten als binären String darstellt. Diese Methode ist veraltet, verwenden Sie stattdessen `readAsArrayBuffer()`.
- {{DOMxRef("FileReaderSync.readAsText","FileReaderSync.readAsText()")}}
  - : Diese Methode wandelt ein angegebenes {{DOMxRef("Blob")}} oder eine {{DOMxRef("File")}} in einen String um, der die Eingabedaten als Textstring darstellt. Der optionale **`encoding`**-Parameter gibt die zu verwendende Kodierung an (z. B. iso-8859-1 oder UTF-8). Falls nicht vorhanden, wird die Methode einen Erkennungsalgorithmus anwenden.
- {{DOMxRef("FileReaderSync.readAsDataURL","FileReaderSync.readAsDataURL()")}}
  - : Diese Methode wandelt ein angegebenes {{DOMxRef("Blob")}} oder eine {{DOMxRef("File")}} in einen String um, der die Eingabedaten als Data-URL darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("FileReader")}}
- {{DOMxRef("Blob")}}
- {{DOMxRef("File")}}
