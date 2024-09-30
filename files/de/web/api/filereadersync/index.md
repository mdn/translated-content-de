---
title: FileReaderSync
slug: Web/API/FileReaderSync
l10n:
  sourceCommit: 1dad49fff047729e8dcca313a45ccb4cc2d2526f
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Die **`FileReaderSync`**-Schnittstelle ermöglicht das synchrone Lesen von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten. Diese Schnittstelle ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workern](/de/docs/Web/API/Worker), da sie synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Konstruktor

- [`FileReaderSync()`](/de/docs/Web/API/FileReaderSync/FileReaderSync)
  - : Gibt ein neues `FileReaderSync`-Objekt zurück.

## Instanzeigenschaften

Diese Schnittstelle hat keine Eigenschaften.

## Instanzmethoden

- [`FileReaderSync.readAsArrayBuffer()`](/de/docs/Web/API/FileReaderSync/readAsArrayBuffer)
  - : Diese Methode konvertiert ein angegebenes [`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) in einen {{jsxref("ArrayBuffer")}}, der die Eingabedaten als binäre Zeichenkette darstellt.
- [`FileReaderSync.readAsBinaryString()`](/de/docs/Web/API/FileReaderSync/readAsBinaryString) {{deprecated_inline}}
  - : Diese Methode konvertiert ein angegebenes [`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) in eine Zeichenkette, die die Eingabedaten als binäre Zeichenkette darstellt. Diese Methode ist veraltet, erwägen Sie stattdessen `readAsArrayBuffer()` zu verwenden.
- [`FileReaderSync.readAsText()`](/de/docs/Web/API/FileReaderSync/readAsText)
  - : Diese Methode konvertiert ein angegebenes [`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) in eine Zeichenkette, die die Eingabedaten als Textzeichenkette darstellt. Der optionale **`encoding`**-Parameter gibt die zu verwendende Codierung an (z.B. iso-8859-1 oder UTF-8). Falls nicht vorhanden, wird die Methode einen Erkennungsalgorithmus anwenden.
- [`FileReaderSync.readAsDataURL()`](/de/docs/Web/API/FileReaderSync/readAsDataURL)
  - : Diese Methode konvertiert ein angegebenes [`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) in eine Zeichenkette, die die Eingabedaten als Daten-URL darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
