---
title: "XRSession: domOverlayState-Eigenschaft"
short-title: domOverlayState
slug: Web/API/XRSession/domOverlayState
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`domOverlayState`**-Eigenschaft einer `immersive-ar`-[`XRSession`](/de/docs/Web/API/XRSession) liefert Informationen über das DOM-Overlay, wenn das Feature aktiviert ist.

## Wert

Gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück, wenn das DOM-Overlay-Feature nicht unterstützt oder nicht aktiviert ist, oder ein Objekt, das Informationen über den Zustand des DOM-Overlays mit den folgenden Eigenschaften enthält:

- `type`

  - : Ein String, der angibt, wie das DOM-Overlay angezeigt wird. Mögliche Werte:
    - `screen`
      - : Das Overlay wird auf dem gesamten bildschirmbasierten Gerät gezeichnet (für tragbare AR-Geräte).
    - `head-locked`
      - : Das Overlay wird an einem head-locked UI gezeichnet, das den darstellbaren Viewport ausfüllt und der Bewegung des Benutzers folgt.
    - `floating`
      - : Das Overlay erscheint als ein in den Raum schwebendes Rechteck, das vor dem Benutzer gehalten wird. Es füllt nicht unbedingt den gesamten Raum aus und/oder ist strikt head-locked.

## Beispiele

### Überprüfen, welches DOM-Overlay aktiviert wurde

```js
if (session.domOverlayState) {
  console.log(session.domOverlayState.type);
} else {
  console.log("DOM overlay not supported or enabled!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)
