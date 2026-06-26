---
title: "DecompressionStream: DecompressionStream() Konstruktor"
short-title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Der **`DecompressionStream()`** Konstruktor erstellt ein neues [`DecompressionStream`](/de/docs/Web/API/DecompressionStream) Objekt, das einen Datenstrom dekomprimiert.

## Syntax

```js-nolint
new DecompressionStream(format)
```

### Parameter

- `format`
  - : Einer der folgenden Komprimierungsformate:
    - `"brotli"`
      - : Dekomprimieren Sie den Stream mit dem [Brotli](https://www.rfc-editor.org/info/rfc7932/)-Algorithmus.
    - `"gzip"`
      - : Dekomprimieren Sie den Stream mit dem [GZIP](https://www.rfc-editor.org/info/rfc1952/)-Algorithmus.
    - `"deflate"`
      - : Dekomprimieren Sie den Stream mit dem [DEFLATE](https://www.rfc-editor.org/info/rfc1950/)-Algorithmus im ZLIB-Komprimierungsdatenformat.
        Das ZLIB-Format enthält einen Header mit Informationen über die Komprimierungsmethode sowie die unkomprimierte Größe der Daten und eine abschließende Prüfsumme zur Verifizierung der Datenintegrität.
    - `"deflate-raw"`
      - : Dekomprimieren Sie den Stream mit dem [DEFLATE](https://www.rfc-editor.org/info/rfc1951/)-Algorithmus ohne Header und abschließende Prüfsumme.
    - `"zstd"`
      - : Dekomprimieren Sie den Stream mit dem [ZSTD](https://datatracker.ietf.org/doc/html/rfc8478)-Algorithmus.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das an den Konstruktor übergebene Format nicht unterstützt wird.

## Beispiele

In diesem Beispiel wird ein gzip-komprimierter Blob dekomprimiert.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
