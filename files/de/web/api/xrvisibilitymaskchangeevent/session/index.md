---
title: "XRVisibilityMaskChangeEvent: session-Eigenschaft"
short-title: session
slug: Web/API/XRVisibilityMaskChangeEvent/session
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die schreibgeschützte **`session`**-Eigenschaft des [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Interfaces gibt die [`XRSession`](/de/docs/Web/API/XRSession) an, zu der das Ereignis gehört.

## Wert

Ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt, das angibt, zu welcher WebXR-Sitzung das Ereignis gehört.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie Sie einen benutzerdefinierten `userRequestsSessionEnd`-Wert überprüfen könnten, wenn das `visibilitymaskchange`-Ereignis ausgelöst wird, um festzustellen, ob der Benutzer manuell eine Option zum Beenden der XR-Sitzung ausgewählt hat. Wenn dies der Fall ist, können Sie über die `session`-Eigenschaft auf die `XRSession` zugreifen und die Sitzung mit [`XRSession.end()`](/de/docs/Web/API/XRSession/end) beenden.

Falls der Benutzer diese Option nicht ausgewählt hat, könnten Sie eine Funktion ausführen, um den neuen Sichtbereich basierend auf den anderen im `XRVisibilityMaskChangeEvent`-Objekt verfügbaren Werten darzustellen.

```js
xrSession.addEventListener("visibilitymaskchange", (e) => {
  if (userRequestsSessionEnd) {
    e.session.end();
  } else {
    renderNewView(e.index, e.eye, e.indices, e.vertices);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
