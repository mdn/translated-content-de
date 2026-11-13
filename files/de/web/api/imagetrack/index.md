---
title: ImageTrack
slug: Web/API/ImageTrack
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`ImageTrack`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert einen einzelnen Bildtrack.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ImageTrack.animated`](/de/docs/Web/API/ImageTrack/animated) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("Boolean")}} zurück, der angibt, ob der Track animiert ist und daher mehrere Frames enthält.
- [`ImageTrack.frameCount`](/de/docs/Web/API/ImageTrack/frameCount) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Frames im Track angibt.
- [`ImageTrack.repetitionCount`](/de/docs/Web/API/ImageTrack/repetitionCount) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die angibt, wie oft die Animation wiederholt wird.
- [`ImageTrack.selected`](/de/docs/Web/API/ImageTrack/selected)
  - : Gibt einen {{jsxref("Boolean")}} zurück, der angibt, ob der Track zum Dekodieren ausgewählt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
