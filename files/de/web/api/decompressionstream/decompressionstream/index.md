---
title: "DecompressionStream: DecompressionStream() Konstruktor"
short-title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
l10n:
  sourceCommit: 238b0047b17c0d506060fc34619a16d237533dc7
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Der **`DecompressionStream()`** Konstruktor erstellt ein neues [`DecompressionStream`](/de/docs/Web/API/DecompressionStream)-Objekt, das einen Datenstrom dekomprimiert.

## Syntax

```js-nolint
new DecompressionStream(format)
```

### Parameter

- `format`
  - : Eines der folgenden Komprimierungsformate:
    - `"brotli"`
      - : Dekomprimieren Sie den Datenstrom mit dem [Brotli](https://www.rfc-editor.org/rfc/rfc7932)-Algorithmus.
    - `"gzip"`
      - : Dekomprimieren Sie den Datenstrom mit dem [GZIP](https://www.rfc-editor.org/rfc/rfc1952)-Algorithmus.
    - `"deflate"`
      - : Dekomprimieren Sie den Datenstrom mit dem [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950)-Algorithmus im ZLIB-komprimierten Datenformat.
        Das ZLIB-Format enthält einen Header mit Informationen über die Komprimierungsmethode und die unkomprimierte Größe der Daten sowie eine abschließende Prüfsumme zur Überprüfung der Datenintegrität.
    - `"deflate-raw"`
      - : Dekomprimieren Sie den Datenstrom mit dem [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951)-Algorithmus ohne Header und abschließende Prüfsumme.
    - `"zstd"`
      - : Dekomprimieren Sie den Datenstrom mit dem [ZSTD](https://datatracker.ietf.org/doc/html/rfc8478)-Algorithmus.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das an den Konstruktor übergebene Format nicht unterstützt wird.

## Beispiele

In diesem Beispiel wird ein mit gzip komprimiertes Blob dekomprimiert.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
