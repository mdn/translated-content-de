---
title: WindowControlsOverlay
slug: Web/API/WindowControlsOverlay
l10n:
  sourceCommit: 195edecd7c4a1205562d2a984bea9e2f8895c479
---

{{APIRef("Window Controls Overlay API")}}{{securecontext_header}}{{SeeCompatTable}}

Das **`WindowControlsOverlay`**-Interface der [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) liefert Informationen über die Geometrie
des Titelbereichs in Desktop-Progressive-Web-Apps und ein Ereignis, das anzeigt, wann sich dieser ändert. Dieses Interface ist über [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay) zugänglich.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`WindowControlsOverlay.visible`](/de/docs/Web/API/WindowControlsOverlay/visible) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [Boolean](/de/docs/Glossary/Boolean), der angibt, ob das Fenstersteuerungs-Overlay sichtbar ist oder nicht.

## Instanzmethoden

- [`WindowControlsOverlay.getTitlebarAreaRect()`](/de/docs/Web/API/WindowControlsOverlay/getTitlebarAreaRect) {{Experimental_Inline}}
  - : Gibt die Größe und Position des Titelbereichs zurück.

## Ereignisse

Hören Sie diese Ereignisse mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der relevanten `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`geometrychange`](/de/docs/Web/API/WindowControlsOverlay/geometrychange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich die Geometrie des Titelbereichs ändert.

## Beispiele

```js
if ("windowControlsOverlay" in navigator) {
  navigator.windowControlsOverlay.addEventListener(
    "geometrychange",
    (event) => {
      if (event.visible) {
        const rect = event.titlebarAreaRect;
        // Do something with the coordinates of the title bar area.
      }
    },
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
