---
title: "DecompressionStream: DecompressionStream() Konstruktor"
short-title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Der **`DecompressionStream()`** Konstruktor erzeugt ein neues [`DecompressionStream`](/de/docs/Web/API/DecompressionStream) Objekt, das einen Datenstrom dekomprimiert.

## Syntax

```js-nolint
new DecompressionStream(format)
```

### Parameter

- `format`

  - : Eine der folgenden Komprimierungsformate:

    - `"gzip"`
      - : Dekompimiert den Stream im [GZIP](https://www.rfc-editor.org/rfc/rfc1952) Format.
    - `"deflate"`
      - : Dekomprimiert den Stream unter Verwendung des [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950) Algorithmus im ZLIB-Komprimierungsdatenformat.
        Das ZLIB-Format enthält einen Header mit Informationen über die Komprimierungsmethode und die unkomprimierte Größe der Daten sowie eine nachgestellte Prüfsumme zur Überprüfung der Integrität der Daten.
    - `"deflate-raw"`
      - : Dekomprimiert den Stream unter Verwendung des [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951) Algorithmus ohne Header und nachgestellte Prüfsumme.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das an den Konstruktor übergebene Format nicht unterstützt wird.

## Beispiele

In diesem Beispiel wird ein GZIP-komprimiertes Blob dekomprimiert.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
