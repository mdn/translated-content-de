---
title: ImageTrack
slug: Web/API/ImageTrack
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ImageTrack`** Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine einzelne Bildspur.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`ImageTrack.animated`](/de/docs/Web/API/ImageTrack/animated) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Boolean")}} zurück, das angibt, ob die Spur animiert ist und daher mehrere Frames hat.
- [`ImageTrack.frameCount`](/de/docs/Web/API/ImageTrack/frameCount) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Frames in der Spur angibt.
- [`ImageTrack.repetitionCount`](/de/docs/Web/API/ImageTrack/repetitionCount) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Wiederholungen der Animation angibt.
- [`ImageTrack.selected`](/de/docs/Web/API/ImageTrack/selected) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Boolean")}} zurück, das angibt, ob die Spur für das Decodieren ausgewählt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
