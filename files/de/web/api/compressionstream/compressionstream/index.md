---
title: "CompressionStream: CompressionStream() Konstruktor"
short-title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Der **`CompressionStream()`**-Konstruktor erstellt ein neues [`CompressionStream`](/de/docs/Web/API/CompressionStream)-Objekt, das einen Datenstrom komprimiert.

## Syntax

```js-nolint
new CompressionStream(format)
```

### Parameter

- `format`

  - : Einer der folgenden zulässigen Komprimierungsformate:

    - `"gzip"`
      - : Komprimiert den Strom mithilfe des [GZIP](https://www.rfc-editor.org/rfc/rfc1952)-Formats.
    - `"deflate"`
      - : Komprimiert den Strom mithilfe des [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950)-Algorithmus im ZLIB-Komprimierungsdatenformat.
        Das ZLIB-Format enthält einen Header mit Informationen über die Komprimierungsmethode und die unkomprimierte Größe der Daten sowie eine nachfolgende Prüfsumme zur Überprüfung der Datenintegrität.
    - `"deflate-raw"`
      - : Komprimiert den Strom mithilfe des [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951)-Algorithmus ohne Header und nachfolgende Prüfsumme.

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
