---
title: WindowControlsOverlayGeometryChangeEvent
slug: Web/API/WindowControlsOverlayGeometryChangeEvent
l10n:
  sourceCommit: 195edecd7c4a1205562d2a984bea9e2f8895c479
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Das **`WindowControlsOverlayGeometryChangeEvent`** Interface der [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) wird an {{domxref("WindowControlsOverlay/geometrychange_event", "geometrychange")}} übergeben, wenn sich die Größe oder Sichtbarkeit des Titelleistenbereichs einer Desktop-Progressive-Web-App ändert.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent", "WindowControlsOverlayGeometryChangeEvent()")}} {{Experimental_Inline}}
  - : Erzeugt ein `WindowControlsOverlayGeometryChangeEvent` Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrem Elternteil {{domxref("Event")}}_.

- {{domxref("WindowControlsOverlayGeometryChangeEvent.titlebarAreaRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMRect")}}, das die Position und Größe des Titelleistenbereichs darstellt.
- {{domxref("WindowControlsOverlayGeometryChangeEvent.visible")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{Glossary("Boolean")}}, das angibt, ob das Fenstersteuerungsoverlay sichtbar ist oder nicht.

## Beispiele

Das folgende Beispiel zeigt, wie eine `WindowControlsOverlayGeometryChangeEvent`-Instanz verwendet wird, indem ein
Ereignishandler auf der {{domxref("Navigator.windowControlsOverlay")}}-Eigenschaft hinzugefügt wird, um Geometrieänderungen des Titelleistenbereichs einer PWA zu überwachen.

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
