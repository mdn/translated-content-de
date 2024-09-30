---
title: "ImageDecoder: ImageDecoder() Konstruktor"
short-title: ImageDecoder()
slug: Web/API/ImageDecoder/ImageDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`ImageDecoder()`** Konstruktor erstellt ein neues [`ImageDecoder`](/de/docs/Web/API/ImageDecoder) Objekt, das Bilddaten entpackt und dekodiert.

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
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von Bytes, die einen enkodierten Bildtyp darstellen, wie durch `type` beschrieben.
    - `premultiplyAlpha` {{optional_inline}}
      - : Gibt an, ob die Farbbeiträge des dekodierten Bildes durch den Alphakanal vormultipliziert werden sollen. Falls nicht angegeben, wird `"default"` gesetzt:
        - `"none"`
        - `"premultiply"`
        - `"default"`
    - `colorSpaceConversion` {{optional_inline}}
      - : Gibt an, ob das Bild unter Verwendung von Farbraumkonvertierung dekodiert werden soll. Falls nicht angegeben, wird `"default"` gesetzt. Der Wert `"default"` gibt an, dass eine implementationsspezifische Verhaltensweise verwendet wird:
        - `"none"`
        - `"default"`
    - `desiredWidth` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Breite für den dekodierten Output angibt. Hat keine Wirkung, es sei denn, der Bildcodec unterstützt variable Auflösungsdekodierung.
    - `desiredHeight` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Höhe für den dekodierten Output angibt. Hat keine Wirkung, es sei denn, der Bildcodec unterstützt variable Auflösungsdekodierung.
    - `preferAnimation` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, der angibt, ob die anfängliche Tonauswahl eine animierte Spur bevorzugen soll.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}, das `ImageDecoder` ablösen und in Besitz nehmen wird. Wenn das Array das {{jsxref("ArrayBuffer")}} enthält, das `data` unterstützt, wird `ImageDecoder` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

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
