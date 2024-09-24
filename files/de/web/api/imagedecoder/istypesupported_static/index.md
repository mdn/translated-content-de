---
title: "ImageDecoder: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/ImageDecoder/isTypeSupported_static
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die statische Methode **`ImageDecoder.isTypeSupported()`** prüft, ob ein bestimmter [MIME-Typ](/de/docs/Web/HTTP/MIME_types) vom Benutzeragenten dekodiert werden kann.

## Syntax

```js-nolint
ImageDecoder.isTypeSupported(type)
```

### Parameter

- `type`
  - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/MIME_types) enthält, für den die Unterstützung der Dekodierung überprüft werden soll.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem booleanen Wert auflöst, der angibt, ob Bilder mit einem Format des Typs `type` von der API dekodiert werden können.

## Beispiele

Im folgenden Beispiel wird überprüft, ob GIF- und PCX-Bilder für die Dekodierung unterstützt werden, und das Ergebnis wird in der Konsole ausgegeben.

```js
let isGifSupported = await ImageDecoder.isTypeSupported("image/gif");
console.log(`GIF supported: ${isGifSupported}`); // Likely true.

let isPcxSupported = await ImageDecoder.isTypeSupported("image/pcx");
console.log(`PCX supported: ${isPcxSupported}`); // Probably false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
