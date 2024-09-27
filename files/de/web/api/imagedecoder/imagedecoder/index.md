---
title: "ImageDecoder: ImageDecoder() Konstruktor"
short-title: ImageDecoder()
slug: Web/API/ImageDecoder/ImageDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`ImageDecoder()`**-Konstruktor erstellt ein neues [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Objekt, welches Bilddaten entpackt und dekodiert.

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
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von Bytes, die einen kodierten Bildtyp darstellen, wie durch `type` beschrieben.
    - `premultiplyAlpha` {{optional_inline}}
      - : Gibt an, ob die Farbkanäle des dekodierten Bildes durch den Alphakanal vorab multipliziert werden sollen. Wenn nicht angegeben, wird `"default"` gesetzt:
        - `"none"`
        - `"premultiply"`
        - `"default"`
    - `colorSpaceConversion` {{optional_inline}}
      - : Gibt an, ob das Bild unter Verwendung der Farbraumkonvertierung dekodiert werden soll. Wenn nicht angegeben, wird `"default"` gesetzt. Der Wert `"default"` bedeutet, dass ein implementationsspezifisches Verhalten verwendet wird:
        - `"none"`
        - `"default"`
    - `desiredWidth` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die gewünschte Breite für die dekodierte Ausgabe angibt. Hat keinen Effekt, es sei denn, der Bildcodec unterstützt Dekodierung mit variabler Auflösung.
    - `desiredHeight` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die gewünschte Höhe für die dekodierte Ausgabe angibt. Hat keinen Effekt, es sei denn, der Bildcodec unterstützt Dekodierung mit variabler Auflösung.
    - `preferAnimation` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, der angibt, ob die anfängliche Track-Auswahl einen animierten Track bevorzugen soll.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die der `ImageDecoder` abtrennen und übernehmen wird. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird `ImageDecoder` diesen Puffer direkt verwenden anstatt davon zu kopieren.

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
