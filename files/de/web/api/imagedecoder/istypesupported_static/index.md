---
title: "ImageDecoder: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/ImageDecoder/isTypeSupported_static
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`ImageDecoder.isTypeSupported()`** statische Methode prüft, ob ein gegebener [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vom Benutzeragenten dekodiert werden kann.

## Syntax

```js-nolint
ImageDecoder.isTypeSupported(type)
```

### Parameter

- `type`
  - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) enthält, für den die Unterstützung der Dekodierung überprüft werden soll.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem booleschen Wert aufgelöst wird, der angibt, ob Bilder mit einem Format von `type` von der API dekodiert werden können.

## Beispiele

Das folgende Beispiel überprüft, ob GIF- und PCX-Bilder zur Dekodierung unterstützt werden und gibt das Ergebnis in die Konsole aus.

```js
let isGifSupported = await ImageDecoder.isTypeSupported("image/gif");
console.log(`GIF unterstützt: ${isGifSupported}`); // Wahrscheinlich wahr.

let isPcxSupported = await ImageDecoder.isTypeSupported("image/pcx");
console.log(`PCX unterstützt: ${isPcxSupported}`); // Wahrscheinlich falsch
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
