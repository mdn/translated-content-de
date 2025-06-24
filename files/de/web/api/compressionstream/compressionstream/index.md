---
title: "CompressionStream: CompressionStream()-Konstruktor"
short-title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Der **`CompressionStream()`**-Konstruktor erstellt ein neues [`CompressionStream`](/de/docs/Web/API/CompressionStream)-Objekt, das einen Datenstrom komprimiert.

## Syntax

```js-nolint
new CompressionStream(format)
```

### Parameter

- `format`
  - : Eines der folgenden erlaubten Komprimierungsformate:
    - `"gzip"`
      - : Komprimiert den Stream im [GZIP](https://www.rfc-editor.org/rfc/rfc1952)-Format.
    - `"deflate"`
      - : Komprimiert den Stream mithilfe des [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950)-Algorithmus im ZLIB Compressed Data Format.
        Das ZLIB-Format enthält einen Header mit Informationen über die Komprimierungsmethode und die unkomprimierte Größe der Daten sowie eine abschließende Prüfsumme zur Überprüfung der Datenintegrität.
    - `"deflate-raw"`
      - : Komprimiert den Stream mithilfe des [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951)-Algorithmus ohne Header und abschließende Prüfsumme.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn das an den Konstruktor übergebene Format nicht unterstützt wird.

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
