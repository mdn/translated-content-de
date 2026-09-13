---
title: FileReaderSync
slug: Web/API/FileReaderSync
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Das **`FileReaderSync`**-Interface ermöglicht es Ihnen, [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte synchron zu lesen. Dieses Interface ist [nur verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [Workers](/de/docs/Web/API/Worker), da es synchrones I/O ermöglicht, das potenziell blockieren könnte.

## Konstruktor

- [`FileReaderSync()`](/de/docs/Web/API/FileReaderSync/FileReaderSync)
  - : Gibt ein neues `FileReaderSync`-Objekt zurück.

## Instanz-Eigenschaften

Dieses Interface hat keine Eigenschaften.

## Instanz-Methoden

- [`FileReaderSync.readAsArrayBuffer()`](/de/docs/Web/API/FileReaderSync/readAsArrayBuffer)
  - : Diese Methode konvertiert ein angegebenes [`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) in ein {{jsxref("ArrayBuffer")}}, das die Eingabedaten als binären String darstellt.
- [`FileReaderSync.readAsBinaryString()`](/de/docs/Web/API/FileReaderSync/readAsBinaryString) {{deprecated_inline}}
  - : Diese Methode konvertiert ein angegebenes [`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) in einen String, der die Eingabedaten als binären String darstellt. Diese Methode ist veraltet, verwenden Sie stattdessen `readAsArrayBuffer()`.
- [`FileReaderSync.readAsText()`](/de/docs/Web/API/FileReaderSync/readAsText)
  - : Diese Methode konvertiert ein angegebenes [`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) in einen String, der die Eingabedaten als Text-String darstellt. Der optionale **`encoding`**-Parameter gibt die zu verwendende Kodierung an (z.B. iso-8859-1 oder UTF-8). Wenn er nicht vorhanden ist, wird die Methode einen Erkennungsalgorithmus dafür anwenden.
- [`FileReaderSync.readAsDataURL()`](/de/docs/Web/API/FileReaderSync/readAsDataURL)
  - : Diese Methode konvertiert ein angegebenes [`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) in einen String, der die Eingabedaten als Daten-URL darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
