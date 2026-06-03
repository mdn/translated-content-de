---
title: "XRVisibilityMaskChangeEvent: session-Eigenschaft"
short-title: session
slug: Web/API/XRVisibilityMaskChangeEvent/session
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`session`** des Interfaces [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) gibt die [`XRSession`](/de/docs/Web/API/XRSession) an, zu der das Ereignis gehört.

## Wert

Ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt, das angibt, zu welcher WebXR-Sitzung das Ereignis gehört.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie einen benutzerdefinierten `userRequestsSessionEnd`-Wert überprüfen könnten, wenn das `visibilitymaskchange`-Ereignis ausgelöst wird, um festzustellen, ob der Benutzer manuell eine Option zum Beenden der XR-Sitzung ausgewählt hat. Falls ja, können Sie über die `session`-Eigenschaft auf die `XRSession` zugreifen und die Sitzung mit [`XRSession.end()`](/de/docs/Web/API/XRSession/end) beenden.

Falls der Benutzer diese Option nicht ausgewählt hat, könnten Sie eine Funktion ausführen, um die neue Ansicht basierend auf den anderen in dem `XRVisibilityMaskChangeEvent`-Objekt verfügbaren Werten zu rendern.

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
