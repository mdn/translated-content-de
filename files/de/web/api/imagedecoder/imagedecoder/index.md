---
title: "ImageDecoder: Konstruktor ImageDecoder()"
short-title: ImageDecoder()
slug: Web/API/ImageDecoder/ImageDecoder
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`ImageDecoder()`**-Konstruktor erstellt ein neues [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Objekt, das Bilddaten entpackt und dekodiert.

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
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von Bytes, die einen kodierten Bildtyp darstellen, wie durch `type` beschrieben.
    - `premultiplyAlpha` {{optional_inline}}
      - : Gibt an, ob die Farbkanäle des dekodierten Bildes mit dem Alphakanal vorkompliziert werden sollen. Wenn nicht angegeben, ist der Standardwert `"default"`:
        - `"none"`
        - `"premultiply"`
        - `"default"`
    - `colorSpaceConversion` {{optional_inline}}
      - : Gibt an, ob das Bild mit Farbkonvertierung dekodiert werden soll. Wenn nicht angegeben, ist der Standardwert `"default"`. Der Wert `"default"` weist auf eine implementierungsspezifische Verhaltensweise hin:
        - `"none"`
        - `"default"`
    - `desiredWidth` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die gewünschte Breite für die dekodierte Ausgabe angibt. Hat keine Wirkung, es sei denn, der Bildcodec unterstützt variabel auflösende Dekodierung.
    - `desiredHeight` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die gewünschte Höhe für die dekodierte Ausgabe angibt. Hat keine Wirkung, es sei denn, der Bildcodec unterstützt variabel auflösende Dekodierung.
    - `preferAnimation` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, der angibt, ob die anfängliche Track-Auswahl einen animierten Track bevorzugen soll.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die `ImageDecoder` abtrennen und übernehmen wird. Wenn das Array den das `data` unterstützenden {{jsxref("ArrayBuffer")}} enthält, wird `ImageDecoder` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

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
