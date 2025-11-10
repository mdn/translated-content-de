---
title: "XRSession: domOverlayState-Eigenschaft"
short-title: domOverlayState
slug: Web/API/XRSession/domOverlayState
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`domOverlayState`**-Eigenschaft einer `immersive-ar`
[`XRSession`](/de/docs/Web/API/XRSession) liefert Informationen über das DOM-Overlay, falls die Funktion aktiviert ist.

## Wert

Gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück, wenn die DOM-Overlay-Funktion nicht unterstützt oder nicht aktiviert ist, oder ein Objekt, das Informationen über den DOM-Overlay-Status mit den folgenden Eigenschaften enthält:

- `type`
  - : Ein String, der angibt, wie das DOM-Overlay angezeigt wird. Mögliche Werte:
    - `screen`
      - : Das Overlay wird auf dem gesamten bildschirmbasierten Gerät gezeichnet (für tragbare AR-Geräte).
    - `head-locked`
      - : Das Overlay wird in einem kopfgebundenen UI gezeichnet, das den darstellbaren Ansichtsbereich füllt und der Kopfbewegung des Benutzers folgt.
    - `floating`
      - : Das Overlay erscheint als rechteckiges Element, das im Raum schwebt und vor dem Benutzer gehalten wird. Es muss nicht unbedingt den gesamten Raum füllen und/oder streng kopfgebunden sein.

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
