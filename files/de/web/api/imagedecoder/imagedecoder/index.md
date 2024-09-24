---
title: "ImageDecoder: ImageDecoder() Konstruktor"
short-title: ImageDecoder()
slug: Web/API/ImageDecoder/ImageDecoder
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`ImageDecoder()`** Konstruktor erstellt ein neues [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Objekt, das Bilddaten entpackt und dekodiert.

## Syntax

```js-nolint
new ImageDecoder(init)
```

### Parameter

- `init`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `type`
      - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/MIME_types) der zu dekodierenden Bilddatei enthält.
    - `data`
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, oder ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von Bytes, die einen kodierten Bildtyp darstellen, wie er von `type` beschrieben wird.
    - `premultiplyAlpha` {{optional_inline}}
      - : Gibt an, ob die Farbkanäle des dekodierten Bildes mit dem Alphakanal prä-multipliziert werden sollen. Falls nicht angegeben, wird `"default"` verwendet:
        - `"none"`
        - `"premultiply"`
        - `"default"`
    - `colorSpaceConversion` {{optional_inline}}
      - : Gibt an, ob das Bild mit Farbkonvertierung dekodiert werden soll. Falls nicht angegeben, wird `"default"` verwendet. Der Wert `"default"` zeigt an, dass eine implementationsspezifische Verarbeitung verwendet wird:
        - `"none"`
        - `"default"`
    - `desiredWidth` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Breite für den dekodierten Output angibt. Hat keine Wirkung, es sei denn, der Bildcodec unterstützt eine Dekodierung mit variabler Auflösung.
    - `desiredHeight` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Höhe für den dekodierten Output angibt. Hat keine Wirkung, es sei denn, der Bildcodec unterstützt eine Dekodierung mit variabler Auflösung.
    - `preferAnimation` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, der angibt, ob die anfängliche Spurauswahl eine animierte Spur bevorzugen sollte.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die der `ImageDecoder` trennen und in Besitz nehmen wird. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird `ImageDecoder` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

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
