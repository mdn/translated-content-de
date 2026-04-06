---
title: "CompressionStream: CompressionStream() Konstruktor"
short-title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
l10n:
  sourceCommit: 238b0047b17c0d506060fc34619a16d237533dc7
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Der **`CompressionStream()`** Konstruktor erstellt ein neues [`CompressionStream`](/de/docs/Web/API/CompressionStream)-Objekt, das einen Datenstrom komprimiert.

## Syntax

```js-nolint
new CompressionStream(format)
```

### Parameter

- `format`
  - : Eines der folgenden zulässigen Komprimierungsformate:
    - `"brotli"`
      - : Komprimiert den Datenstrom mithilfe des [Brotli](https://www.rfc-editor.org/rfc/rfc7932)-Algorithmus.
    - `"gzip"`
      - : Komprimiert den Datenstrom im [GZIP](https://www.rfc-editor.org/rfc/rfc1952)-Format.
    - `"deflate"`
      - : Komprimiert den Datenstrom mithilfe des [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950)-Algorithmus im ZLIB Compressed Data Format.
        Das ZLIB-Format enthält einen Header mit Informationen über die Komprimierungsmethode und die unkomprimierte Größe der Daten sowie eine Prüfsumme am Ende zur Überprüfung der Datenintegrität.
    - `"deflate-raw"`
      - : Komprimiert den Datenstrom mithilfe des [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951)-Algorithmus ohne Header und Prüfsumme am Ende.
    - `"zstd"`
      - : Komprimiert den Datenstrom mithilfe des [ZSTD](https://datatracker.ietf.org/doc/html/rfc8478)-Algorithmus.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das an den Konstruktor übergebene Format nicht unterstützt wird.

## Beispiele

In diesem Beispiel wird ein Stream mit gzip-Komprimierung komprimiert.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
