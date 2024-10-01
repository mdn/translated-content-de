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
  - : Ein String, der das Farbprimär beschreibt, der den Farb{{Glossary("gamut", "gamut")}} einer Video-Probe beschreibt.
- [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer)
  - : Ein String, der die Übertragungscharakteristika der Video-Proben enthält.
- [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix)
  - : Ein String, der die Matrix-Koeffizienten enthält, die die Beziehung zwischen Probenkomponentenwerten und Farbkoordinaten beschreiben.
- [`VideoColorSpace.fullRange`](/de/docs/Web/API/VideoColorSpace/fullRange)
  - : Ein {{jsxref("Boolean")}}. Wenn `true` ist, zeigt dies an, dass volle Farbwerte verwendet werden.

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
