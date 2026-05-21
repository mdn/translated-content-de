---
title: "ImageDecoder: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/ImageDecoder/isTypeSupported_static
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die statische Methode **`ImageDecoder.isTypeSupported()`** überprüft, ob ein gegebener [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) vom Benutzeragenten decodiert werden kann.

## Syntax

```js-nolint
ImageDecoder.isTypeSupported(type)
```

### Parameter

- `type`
  - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) enthält, der auf Decodierungsunterstützung überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert auflöst, der angibt, ob Bilder im Format von `type` von der API decodiert werden können.

## Beispiele

Das folgende Beispiel überprüft, ob GIF- und PCX-Bilder zur Decodierung unterstützt werden und druckt das Ergebnis in die Konsole.

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
