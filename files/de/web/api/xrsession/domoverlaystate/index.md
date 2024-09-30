---
title: "XRSession: domOverlayState-Eigenschaft"
short-title: domOverlayState
slug: Web/API/XRSession/domOverlayState
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`domOverlayState`**-Eigenschaft einer `immersive-ar`-`XRSession` bietet Informationen über das DOM-Overlay, wenn die Funktion aktiviert ist.

## Wert

Gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück, wenn die DOM-Overlay-Funktion nicht unterstützt oder nicht aktiviert ist, oder ein Objekt, das Informationen über den Zustand des DOM-Overlays mit den folgenden Eigenschaften enthält:

- `type`

  - : Ein String, der angibt, wie das DOM-Overlay angezeigt wird. Mögliche Werte:
    - `screen`
      - : Das Overlay wird auf dem gesamten bildschirmbasierten Gerät gezeichnet (für Handheld-AR-Geräte).
    - `head-locked`
      - : Das Overlay wird als benutzerfixierte UI dargestellt, die den darstellbaren Viewport ausfüllt und den Kopfbewegungen des Benutzers folgt.
    - `floating`
      - : Das Overlay erscheint als rechteckiger Bereich, der im Raum schwebt und sich vor dem Benutzer befindet. Es füllt nicht unbedingt den gesamten Raum aus und/oder ist strikt kopfgebunden.

## Beispiele

### Überprüfung, welches DOM-Overlay aktiviert ist

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
