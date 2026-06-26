---
title: "VTTRegion: VTTRegion() Konstruktor"
short-title: VTTRegion()
slug: Web/API/VTTRegion/VTTRegion
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Der **`VTTRegion()`** Konstruktor erstellt eine neue Instanz des [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Objekts.

## Syntax

```js-nolint
new VTTRegion()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Objekt.

Die Eigenschaften des zurückgegebenen Objekts werden auf folgende Werte initialisiert:

- [`id`](/de/docs/Web/API/VTTRegion/id): `""` (der leere String)
- [`width`](/de/docs/Web/API/VTTRegion/width): `100`
- [`lines`](/de/docs/Web/API/VTTRegion/lines): `3`
- [`regionAnchorX`](/de/docs/Web/API/VTTRegion/regionAnchorX): `0`
- [`regionAnchorY`](/de/docs/Web/API/VTTRegion/regionAnchorY): `100`
- [`viewportAnchorX`](/de/docs/Web/API/VTTRegion/viewportAnchorX): `0`
- [`viewportAnchorY`](/de/docs/Web/API/VTTRegion/viewportAnchorY): `100`
- [`scroll`](/de/docs/Web/API/VTTRegion/scroll): `""` (der leere String)

## Beispiele

```js
const region = new VTTRegion();
region.width = 50; // Use 50% of the video width
region.lines = 4; // Use 4 lines of height.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
