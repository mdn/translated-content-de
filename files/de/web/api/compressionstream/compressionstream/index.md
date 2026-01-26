---
title: "CompressionStream: CompressionStream() Konstruktor"
short-title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
l10n:
  sourceCommit: 58ea518e521a18a8930a67adc544cfd420d8f98f
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Der **`CompressionStream()`** Konstruktor erstellt ein neues [`CompressionStream`](/de/docs/Web/API/CompressionStream)-Objekt, das einen Datenstrom komprimiert.

## Syntax

```js-nolint
new CompressionStream(format)
```

### Parameter

- `format`
  - : Einer der folgenden erlaubten Komprimierungsformate:
    - `"brotli"`
      - : Komprimiert den Stream unter Verwendung des [Brotli](https://www.rfc-editor.org/rfc/rfc1952)-Algorithmus.
    - `"gzip"`
      - : Komprimiert den Stream im [GZIP](https://www.rfc-editor.org/rfc/rfc1952)-Format.
    - `"deflate"`
      - : Komprimiert den Stream mit dem [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950)-Algorithmus im ZLIB-komprimierten Datenformat.
        Das ZLIB-Format enthält einen Header mit Informationen über die Komprimierungsmethode und die unkomprimierte Größe der Daten sowie eine abschließende Prüfsumme zur Überprüfung der Datenintegrität.
    - `"deflate-raw"`
      - : Komprimiert den Stream mit dem [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951)-Algorithmus ohne Header und abschließende Prüfsumme.
    - `"zstd"`
      - : Komprimiert den Stream unter Verwendung des [ZSTD](https://datatracker.ietf.org/doc/html/rfc8478)-Algorithmus.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das an den Konstruktor übergebene Format nicht unterstützt wird.

## Beispiele

In diesem Beispiel wird ein Stream mit GZIP-Komprimierung komprimiert.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
