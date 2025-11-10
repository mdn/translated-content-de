---
title: "ImageDecoder: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/ImageDecoder/isTypeSupported_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die statische Methode **`ImageDecoder.isTypeSupported()`** prüft, ob ein gegebener [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) vom Benutzeragenten dekodiert werden kann.

## Syntax

```js-nolint
ImageDecoder.isTypeSupported(type)
```

### Parameter

- `type`
  - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) enthält, dessen Unterstützung für Dekodierung überprüft wird.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem booleschen Wert aufgelöst wird, der angibt, ob Bilder mit einem Format von `type` von der API dekodiert werden können.

## Beispiele

Das folgende Beispiel prüft, ob GIF- und PCX-Bilder für die Dekodierung unterstützt werden, und gibt das Ergebnis in der Konsole aus.

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
