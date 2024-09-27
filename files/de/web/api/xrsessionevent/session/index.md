---
title: "XRSessionEvent: session-Eigenschaft"
short-title: session
slug: Web/API/XRSessionEvent/session
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`session`**-Eigenschaft des [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent)-Interfaces zeigt an, welche [`XRSession`](/de/docs/Web/API/XRSession) mit dem Ereignis verbunden ist.

## Wert

Ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt, das angibt, auf welche WebXR-Session sich das Ereignis bezieht.

## Beispiele

In diesem Beispiel wird die `session`-Eigenschaft verwendet, um das Sitzungsobjekt zu erhalten, um auf ein empfangenes Ereignis zu reagieren.

```js
xrSession.addEventListener("visibilitychange", (e) => {
  switch (e.session.visibilityState) {
    case "hidden":
      myEnableRendering(true);
      break;
    case "visible":
    case "visible-blurred":
      myEnableRendering(false);
      break;
  }
});
```

Dies ruft eine Funktion auf, die auf die Änderung des Sichtbarkeitsstatus der Sitzung reagiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
