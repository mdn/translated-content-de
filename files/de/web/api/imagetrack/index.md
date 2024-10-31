---
title: ImageTrack
slug: Web/API/ImageTrack
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ImageTrack`** Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine einzelne Bildspur.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ImageTrack.animated`](/de/docs/Web/API/ImageTrack/animated) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("boolean")}} zurück, der angibt, ob die Spur animiert ist und daher mehrere Bilderrahmen hat.
- [`ImageTrack.frameCount`](/de/docs/Web/API/ImageTrack/frameCount) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Bilderrahmen in der Spur angibt.
- [`ImageTrack.repetitionCount`](/de/docs/Web/API/ImageTrack/repetitionCount) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die angibt, wie oft die Animation wiederholt wird.
- [`ImageTrack.selected`](/de/docs/Web/API/ImageTrack/selected) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("boolean")}} zurück, der angibt, ob die Spur zur Dekodierung ausgewählt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
