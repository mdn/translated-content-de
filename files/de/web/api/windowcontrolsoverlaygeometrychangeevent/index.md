---
title: WindowControlsOverlayGeometryChangeEvent
slug: Web/API/WindowControlsOverlayGeometryChangeEvent
l10n:
  sourceCommit: 195edecd7c4a1205562d2a984bea9e2f8895c479
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Das **`WindowControlsOverlayGeometryChangeEvent`** Interface der [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) wird an [`geometrychange`](/de/docs/Web/API/WindowControlsOverlay/geometrychange_event) übergeben, wenn sich die Größe oder Sichtbarkeit des Titelleistenbereichs einer Desktop-Progress-Web-App ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`WindowControlsOverlayGeometryChangeEvent()`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent/WindowControlsOverlayGeometryChangeEvent) {{Experimental_Inline}}
  - : Erstellt ein `WindowControlsOverlayGeometryChangeEvent` Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`WindowControlsOverlayGeometryChangeEvent.titlebarAreaRect`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent/titlebarAreaRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect), das die Position und Größe des Titelleistenbereichs darstellt.
- [`WindowControlsOverlayGeometryChangeEvent.visible`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent/visible) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{Glossary("Boolean", "Boolean")}}, das angibt, ob das Fenstersteuerungsoverlay sichtbar ist oder nicht.

## Beispiele

Das folgende Beispiel zeigt, wie eine Instanz von `WindowControlsOverlayGeometryChangeEvent` verwendet wird, indem ein Ereignishandler zur [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay) Eigenschaft hinzugefügt wird, um Geometrieänderungen des Titelleistenbereichs einer PWA zu überwachen.

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

## Siehe auch

- Die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API).
