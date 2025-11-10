---
title: "DecompressionStream: DecompressionStream()-Konstruktor"
short-title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Der **`DecompressionStream()`**-Konstruktor erstellt ein neues [`DecompressionStream`](/de/docs/Web/API/DecompressionStream)-Objekt, das einen Datenstrom dekomprimiert.

## Syntax

```js-nolint
new DecompressionStream(format)
```

### Parameter

- `format`
  - : Einer der folgenden Komprimierungsformate:
    - `"gzip"`
      - : Den Stream mit dem [GZIP](https://www.rfc-editor.org/rfc/rfc1952)-Format dekomprimieren.
    - `"deflate"`
      - : Den Stream mit dem [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950)-Algorithmus im ZLIB-komprimierten Datenformat dekomprimieren.
        Das ZLIB-Format beinhaltet einen Header mit Informationen über die Komprimierungsmethode und die unkomprimierte Größe der Daten sowie eine abschließende Prüfsumme zur Überprüfung der Datenintegrität.
    - `"deflate-raw"`
      - : Den Stream mit dem [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951)-Algorithmus ohne Header und abschließende Prüfsumme dekomprimieren.

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
