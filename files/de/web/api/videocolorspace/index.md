---
title: VideoColorSpace
slug: Web/API/VideoColorSpace
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoColorSpace`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert den Farbraum eines Videos.

## Konstruktor

- [`VideoColorSpace()`](/de/docs/Web/API/VideoColorSpace/VideoColorSpace)
  - : Erstellt ein neues `VideoColorSpace`-Objekt.

## Instanzeigenschaften

- [`VideoColorSpace.primaries`](/de/docs/Web/API/VideoColorSpace/primaries) {{ReadOnlyInline}}
  - : Eine Zeichenfolge mit den Primärfarben, die den Farbumfang ({{Glossary("gamut", "Gamut")}}) eines Video-Samples beschreiben.
- [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer) {{ReadOnlyInline}}
  - : Eine Zeichenfolge mit den Übertragungseigenschaften von Video-Samples.
- [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix) {{ReadOnlyInline}}
  - : Eine Zeichenfolge mit den Matrixkoeffizienten, die die Beziehung zwischen den Komponentenwerten eines Samples und den Farbkoordinaten beschreiben.
- [`VideoColorSpace.fullRange`](/de/docs/Web/API/VideoColorSpace/fullRange) {{ReadOnlyInline}}
  - : Ein {{jsxref("Boolean")}}-Wert. Ist er `true`, werden Farbwerte des vollen Wertebereichs verwendet.

## Instanzmethoden

- [`VideoColorSpace.toJSON()`](/de/docs/Web/API/VideoColorSpace/toJSON)
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `VideoColorSpace`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von [`VideoFrame`](/de/docs/Web/API/VideoFrame) zurückgegeben wird. Anschließend wird das Objekt in der Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
