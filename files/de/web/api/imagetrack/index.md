---
title: ImageTrack
slug: Web/API/ImageTrack
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ImageTrack`** Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine einzelne Bildspur.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ImageTrack.animated`](/de/docs/Web/API/ImageTrack/animated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{jsxref("boolean")}} zurück, der angibt, ob die Spur animiert ist und daher mehrere Frames hat.
- [`ImageTrack.frameCount`](/de/docs/Web/API/ImageTrack/frameCount) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Frames in der Spur angibt.
- [`ImageTrack.repetitionCount`](/de/docs/Web/API/ImageTrack/repetitionCount) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine ganze Zahl zurück, die angibt, wie oft die Animation wiederholt wird.
- [`ImageTrack.selected`](/de/docs/Web/API/ImageTrack/selected) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{jsxref("boolean")}} zurück, der angibt, ob die Spur zur Dekodierung ausgewählt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
