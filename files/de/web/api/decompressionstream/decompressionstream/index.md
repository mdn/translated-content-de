---
title: "DecompressionStream: DecompressionStream() Konstruktor"
short-title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Der **`DecompressionStream()`** Konstruktor erstellt ein neues {{domxref("DecompressionStream")}} Objekt, das einen Datenstrom dekomprimiert.

## Syntax

```js-nolint
new DecompressionStream(format)
```

### Parameter

- `format`

  - : Eines der folgenden Kompressionsformate:

    - `"gzip"`
      - : Dekomprimieren Sie den Stream mit dem [GZIP](https://www.rfc-editor.org/rfc/rfc1952) Format.
    - `"deflate"`
      - : Dekomprimieren Sie den Stream mit dem [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950) Algorithmus im ZLIB-Komprimierte-Daten-Format.
        Das ZLIB-Format enthält einen Header mit Informationen über die Komprimierungsmethode und die unkomprimierte Größe der Daten sowie eine abschließende Prüfsumme zur Überprüfung der Integrität der Daten.
    - `"deflate-raw"`
      - : Dekomprimieren Sie den Stream mit dem [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951) Algorithmus ohne Header und abschließende Prüfsumme.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das dem Konstruktor übergebene Format nicht unterstützt wird.

## Beispiele

In diesem Beispiel wird ein gzip-komprimiertes Blob dekomprimiert.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
