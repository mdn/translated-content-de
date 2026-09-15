---
title: "ImageDecoder: ImageDecoder()-Konstruktor"
short-title: ImageDecoder()
slug: Web/API/ImageDecoder/ImageDecoder
l10n:
  sourceCommit: cda389d5c936131bfd781ec8044bf528cdf8ff23
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der Konstruktor **`ImageDecoder()`** erstellt ein neues [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Objekt, das Bilddaten entpackt und dekodiert.

## Syntax

```js-nolint
new ImageDecoder(init)
```

### Parameter

- `init`
  - : Ein Objekt mit den folgenden Mitgliedern:
    - `type`
      - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der zu dekodierenden Bilddatei enthält.
    - `data`
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von Bytes, die einen kodierten Bildtyp darstellen, wie durch `type` beschrieben.
    - `colorSpaceConversion` {{optional_inline}}
      - : Legt fest, ob das Bild unter Verwendung einer Farbraumkonvertierung dekodiert werden soll. Falls nicht angegeben, wird `"default"` festgelegt. Der Wert `"default"` gibt an, dass implementierungsspezifisches Verhalten verwendet wird:
        - `"none"`
        - `"default"`
    - `desiredWidth` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Breite für die dekodierte Ausgabe angibt. Hat keine Auswirkung, sofern der Bild-Codec keine Dekodierung mit variabler Auflösung unterstützt.
    - `desiredHeight` {{optional_inline}}
      - : Eine ganze Zahl, die die gewünschte Höhe für die dekodierte Ausgabe angibt. Hat keine Auswirkung, sofern der Bild-Codec keine Dekodierung mit variabler Auflösung unterstützt.
    - `preferAnimation` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, das angibt, ob die anfängliche Track-Auswahl einen animierten Track bevorzugen soll.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, deren Verbindung `ImageDecoder` trennt und deren Eigentümerschaft es übernimmt. Wenn das Array den `data` zugrunde liegenden {{jsxref("ArrayBuffer")}} enthält, verwendet `ImageDecoder` diesen Buffer direkt, anstatt daraus zu kopieren.

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
