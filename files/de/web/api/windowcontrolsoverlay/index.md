---
title: WindowControlsOverlay
slug: Web/API/WindowControlsOverlay
l10n:
  sourceCommit: 195edecd7c4a1205562d2a984bea9e2f8895c479
---

{{APIRef("Window Controls Overlay API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`WindowControlsOverlay`**-Schnittstelle der [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) liefert Informationen über die Geometrie
des Titelleistenbereichs in Desktop-Progressive-Web-Apps und ein Ereignis, um zu wissen, wann es sich ändert. Diese Schnittstelle ist über {{domxref('Navigator.windowControlsOverlay')}} zugänglich.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("WindowControlsOverlay.visible")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{Glossary("Boolean")}}, der anzeigt, ob das Fenstersteuerungsüberlagerung sichtbar ist oder nicht.

## Instanz-Methoden

- {{domxref("WindowControlsOverlay.getTitlebarAreaRect()")}} {{Experimental_Inline}}
  - : Gibt die Größe und Position der Titelleiste zurück.

## Ereignisse

Hören Sie auf diese Ereignisse mit {{domxref('EventTarget.addEventListener()')}} oder indem Sie einen Ereignis-Listener auf die entsprechende `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- {{domxref("WindowControlsOverlay/geometrychange_event", "geometrychange")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich die Geometrie des Titelleistenbereichs ändert.

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

## Browserkompatibilität

{{Compat}}
