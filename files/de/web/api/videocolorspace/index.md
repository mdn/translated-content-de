---
title: VideoColorSpace
slug: Web/API/VideoColorSpace
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoColorSpace`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert den Farbraum eines Videos.

## Konstruktor

- [`VideoColorSpace()`](/de/docs/Web/API/VideoColorSpace/VideoColorSpace)
  - : Erstellt ein neues `VideoColorSpace`-Objekt.

## Instanz-Eigenschaften

- [`VideoColorSpace.primaries`](/de/docs/Web/API/VideoColorSpace/primaries) {{ReadOnlyInline}}
  - : Ein String, der die Farbprimären beschreibt, die den Farbumfang ([gamut](/de/docs/Glossary/gamut)) eines Videomusters angeben.
- [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer)
  - : Ein String, der die Transfercharakteristiken von Videomustern enthält.
- [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix)
  - : Ein String, der die Matrixkoeffizienten beschreibt, die die Beziehung zwischen Musterkomponentenwerten und Farbkoordinaten darstellen.
- [`VideoColorSpace.fullRange`](/de/docs/Web/API/VideoColorSpace/fullRange)
  - : Ein {{jsxref("Boolean")}}. Wenn `true`, wird angezeigt, dass vollwertige Farbwerte verwendet werden.

## Instanz-Methoden

- [`VideoColorSpace.toJSON()`](/de/docs/Web/API/VideoColorSpace/toJSON)
  - : Gibt eine JSON-Darstellung des `VideoColorSpace`-Objekts zurück.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von [`VideoFrame`](/de/docs/Web/API/VideoFrame) zurückgegeben wird. Das Objekt wird dann in der Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
