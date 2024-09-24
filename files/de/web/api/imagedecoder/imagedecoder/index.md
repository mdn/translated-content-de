---
title: "ImageDecoder: ImageDecoder() Konstruktor"
short-title: ImageDecoder()
slug: Web/API/ImageDecoder/ImageDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`ImageDecoder()`** Konstruktor erstellt ein neues {{domxref("ImageDecoder")}} Objekt, das Bilddaten entpackt und dekodiert.

## Syntax

```js-nolint
new ImageDecoder(init)
```

### Parameter

- `init`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `type`
      - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) der zu dekodierenden Bilddatei enthält.
    - `data`
      - : Ein {{jsxref("ArrayBuffer")}}, eine {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}} oder ein {{domxref("ReadableStream")}} von Bytes, die einen kodierten Bildtyp repräsentieren, wie durch `type` beschrieben.
    - `premultiplyAlpha` {{optional_inline}}
      - : Gibt an, ob die Farbkanäle des dekodierten Bildes durch den Alphakanal prämultipliziert werden sollen. Wenn nicht angegeben, wird als `"default"` gesetzt:
        - `"none"`
        - `"premultiply"`
        - `"default"`
    - `colorSpaceConversion` {{optional_inline}}
      - : Gibt an, ob das Bild unter Verwendung von Farbraumkonvertierung dekodiert werden soll. Wenn nicht angegeben, wird als `"default"` gesetzt. Der Wert `"default"` zeigt an, dass implementationsspezifisches Verhalten verwendet wird:
        - `"none"`
        - `"default"`
    - `desiredWidth` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Breite für die dekodierte Ausgabe angibt. Hat keine Wirkung, es sei denn, der Bildcodec unterstützt die Dekodierung variabler Auflösung.
    - `desiredHeight` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Höhe für die dekodierte Ausgabe angibt. Hat keine Wirkung, es sei denn, der Bildcodec unterstützt die Dekodierung variabler Auflösung.
    - `preferAnimation` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, der angibt, ob die anfängliche Titelauswahl eine animierte Spur bevorzugen soll.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}, die `ImageDecoder` ablösen und übernehmen wird. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` stützt, wird `ImageDecoder` diesen Puffer direkt verwenden, anstatt davon zu kopieren.

## Beispiele

Das folgende Beispiel erstellt einen neuen `ImageDecoder` mit den erforderlichen Optionen.

```js
let init = {
  type: "image/png",
  data: imageByteStream,
};

let imageDecoder = new ImageDecoder(init);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
