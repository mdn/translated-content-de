---
title: "ImageDecoder: ImageDecoder() Konstruktor"
short-title: ImageDecoder()
slug: Web/API/ImageDecoder/ImageDecoder
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`ImageDecoder()`** Konstruktor erstellt ein neues [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Objekt, das Bilddaten entpackt und dekodiert.

## Syntax

```js-nolint
new ImageDecoder(init)
```

### Parameter

- `init`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `type`
      - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der zu dekodierenden Bilddatei enthält.
    - `data`
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von Bytes, die einen kodierten Bildtyp repräsentieren, wie durch `type` beschrieben.
    - `premultiplyAlpha` {{optional_inline}}
      - : Gibt an, ob die Farbkanäle des dekodierten Bildes mit dem Alphakanal vorvervielfacht werden sollen. Wenn nicht angegeben, wird `"default"` verwendet:
        - `"none"`
        - `"premultiply"`
        - `"default"`
    - `colorSpaceConversion` {{optional_inline}}
      - : Gibt an, ob das Bild unter Verwendung der Farbkonvertierung dekodiert werden soll. Wenn nicht angegeben, wird `"default"` verwendet. Der Wert `"default"` zeigt an, dass implementierungsspezifisches Verhalten verwendet wird:
        - `"none"`
        - `"default"`
    - `desiredWidth` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Breite für die dekodierte Ausgabe angibt. Hat keine Auswirkungen, es sei denn, der Bildcodec unterstützt das Dekodieren mit variabler Auflösung.
    - `desiredHeight` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Höhe für die dekodierte Ausgabe angibt. Hat keine Auswirkungen, es sei denn, der Bildcodec unterstützt das Dekodieren mit variabler Auflösung.
    - `preferAnimation` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, der angibt, ob die anfängliche Track-Auswahl einen animierten Track bevorzugen soll.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die vom `ImageDecoder` gelöst und in Besitz genommen werden. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird der `ImageDecoder` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

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
