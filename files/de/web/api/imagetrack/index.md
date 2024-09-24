---
title: ImageTrack
slug: Web/API/ImageTrack
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ImageTrack`** Interface der {{domxref('WebCodecs API','','','true')}} repräsentiert eine einzelne Bildspur.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("ImageTrack.animated")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{jsxref("boolean")}} zurück, der angibt, ob die Spur animiert ist und daher mehrere Frames hat.
- {{domxref("ImageTrack.frameCount")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Frames in der Spur angibt.
- {{domxref("ImageTrack.repetitionCount")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Ganzzahl zurück, die angibt, wie oft die Animation wiederholt wird.
- {{domxref("ImageTrack.selected")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{jsxref("boolean")}} zurück, der angibt, ob die Spur zur Dekodierung ausgewählt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
