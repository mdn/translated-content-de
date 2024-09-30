---
title: "XRSessionEvent: session-Eigenschaft"
short-title: session
slug: Web/API/XRSessionEvent/session
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent)-Schnittstelle hat die **`session`**-Eigenschaft, die angibt, auf welche [`XRSession`](/de/docs/Web/API/XRSession) sich das Ereignis bezieht.

## Wert

Ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt, das angibt, auf welche WebXR-Sitzung sich das Ereignis bezieht.

## Beispiele

In diesem Beispiel wird die `session`-Eigenschaft verwendet, um das Sitzungsobjekt zu erhalten, das verwaltet werden soll, wenn ein Ereignis empfangen wird.

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
