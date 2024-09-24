---
title: VideoColorSpace
slug: Web/API/VideoColorSpace
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoColorSpace`**-Schnittstelle der {{domxref('WebCodecs API','','',' ')}} repräsentiert den Farbraum eines Videos.

## Konstruktor

- {{domxref("VideoColorSpace.VideoColorSpace", "VideoColorSpace()")}}
  - : Erstellt ein neues `VideoColorSpace`-Objekt.

## Instanzeigenschaften

- {{domxref("VideoColorSpace.primaries")}} {{ReadOnlyInline}}
  - : Ein String, der die Farbprimärwerte beschreibt, die den Farbumfang eines Videobeispiels bestimmen.
- {{domxref("VideoColorSpace.transfer")}}
  - : Ein String, der die Übertragungseigenschaften von Videobeispielen enthält.
- {{domxref("VideoColorSpace.matrix")}}
  - : Ein String, der die Matrixkoeffizienten enthält, die die Beziehung zwischen den Komponentenwerten eines Beispiels und den Farbkoordinaten beschreiben.
- {{domxref("VideoColorSpace.fullRange")}}
  - : Ein {{jsxref("Boolean")}}. Wenn `true`, zeigt dies an, dass vollständige Farbbereichswerte verwendet werden.

## Instanzmethoden

- {{domxref("VideoColorSpace.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `VideoColorSpace`-Objekts zurück.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von {{domxref("VideoFrame")}} zurückgegeben wird. Das Objekt wird dann in der Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
