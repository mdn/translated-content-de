---
title: "CompressionStream: CompressionStream() Konstruktor"
short-title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
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
      - : Komprimiert den Strom mit dem [Brotli](https://www.rfc-editor.org/info/rfc7932/)-Algorithmus.
    - `"gzip"`
      - : Komprimiert den Strom im [GZIP](https://www.rfc-editor.org/info/rfc1952/)-Format.
    - `"deflate"`
      - : Komprimiert den Strom mit dem [DEFLATE](https://www.rfc-editor.org/info/rfc1950/)-Algorithmus im ZLIB-komprimierten Datenformat.
        Das ZLIB-Format enthält einen Header mit Informationen über die Komprimierungsmethode und die unkomprimierte Größe der Daten sowie eine abschließende Prüfsumme zur Überprüfung der Datenintegrität.
    - `"deflate-raw"`
      - : Komprimiert den Strom mit dem [DEFLATE](https://www.rfc-editor.org/info/rfc1951/)-Algorithmus ohne Header und abschließende Prüfsumme.
    - `"zstd"`
      - : Komprimiert den Strom mit dem [ZSTD](https://datatracker.ietf.org/doc/html/rfc8478)-Algorithmus.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das an den Konstruktor übergebene Format nicht unterstützt wird.

## Beispiele

In diesem Beispiel wird ein Datenstrom mit GZIP-Komprimierung komprimiert.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
