---
title: VideoColorSpace
slug: Web/API/VideoColorSpace
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoColorSpace`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert den Farbraum eines Videos.

## Konstruktor

- [`VideoColorSpace()`](/de/docs/Web/API/VideoColorSpace/VideoColorSpace)
  - : Erstellt ein neues `VideoColorSpace`-Objekt.

## Instanzeigenschaften

- [`VideoColorSpace.primaries`](/de/docs/Web/API/VideoColorSpace/primaries) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Primärfarben enthält, welche den Farbumfang ({{Glossary("gamut", "Gamut")}}) eines Videobeispiels beschreiben.
- [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer)
  - : Eine Zeichenfolge, die die Übertragungscharakteristik von Videobeispielen enthält.
- [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix)
  - : Eine Zeichenfolge, die die Matrixkoeffizienten enthält, welche die Beziehung zwischen den Werten der Beispielkomponenten und den Farbkoordinaten beschreiben.
- [`VideoColorSpace.fullRange`](/de/docs/Web/API/VideoColorSpace/fullRange)
  - : Ein {{jsxref("Boolean")}}-Wert. Wenn er `true` ist, werden Farbwerte des vollen Wertebereichs verwendet.

## Instanzmethoden

- [`VideoColorSpace.toJSON()`](/de/docs/Web/API/VideoColorSpace/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `VideoColorSpace`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von [`VideoFrame`](/de/docs/Web/API/VideoFrame) zurückgegeben wird. Das Objekt wird anschließend in der Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
