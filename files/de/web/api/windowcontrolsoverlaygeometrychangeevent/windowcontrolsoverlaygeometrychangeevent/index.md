---
title: "WindowControlsOverlayGeometryChangeEvent: WindowControlsOverlayGeometryChangeEvent() Konstruktor"
short-title: WindowControlsOverlayGeometryChangeEvent()
slug: Web/API/WindowControlsOverlayGeometryChangeEvent/WindowControlsOverlayGeometryChangeEvent
l10n:
  sourceCommit: 195edecd7c4a1205562d2a984bea9e2f8895c479
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Der **`WindowControlsOverlayGeometryChangeEvent()`** Konstruktor gibt ein neues {{domxref("WindowControlsOverlayGeometryChangeEvent")}}-Objekt zurück, das die aktuelle Geometrie des Titelbereichs einer Desktop-Progressive-Web-App darstellt.

## Syntax

```js-nolint
new WindowControlsOverlayGeometryChangeEvent(type, options)
```

### Parameter

_Der `WindowControlsOverlayGeometryChangeEvent()` Konstruktor übernimmt auch Argumente von
{{domxref("Event.Event", "Event()")}}._

- `type`
  - : Ein String, der den Ereignistyp angibt. Es ist Groß- und Kleinschreibung beachten und Browser setzen ihn auf `geometrychange`.
- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `visible` {{optional_inline}}
      - : Ein boolesches Flag, das wahr ist, wenn die Werte des `titlebarAreaRect`-Objekts nicht 0 sind. Der Standardwert ist `false`.
    - `titlebarAreaRect`
      - : Ein {{domxref("DOMRect")}}, das die Position und Größe des Titelbereichs darstellt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("WindowControlsOverlayGeometryChangeEvent")}}-Interface, zu dem es gehört.
