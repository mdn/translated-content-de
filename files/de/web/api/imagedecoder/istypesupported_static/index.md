---
title: "ImageDecoder: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/ImageDecoder/isTypeSupported_static
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die statische Methode **`ImageDecoder.isTypeSupported()`** prüft, ob ein gegebener [MIME-Typ](/de/docs/Web/HTTP/MIME_types) durch den Benutzeragenten decodiert werden kann.

## Syntax

```js-nolint
ImageDecoder.isTypeSupported(type)
```

### Parameter

- `type`
  - : Ein String, der den zu überprüfenden [MIME-Typ](/de/docs/Web/HTTP/MIME_types) für Dekodierungsunterstützung enthält.

### Rückgabewert

Ein {{jsxref("promise")}}, das sich mit einem booleschen Wert auflöst, der angibt, ob Bilder mit einem Format von `type` durch die API dekodiert werden können.

## Beispiele

Das folgende Beispiel überprüft, ob GIF- und PCX-Bilder für die Dekodierung unterstützt werden, und druckt das Ergebnis in die Konsole.

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
