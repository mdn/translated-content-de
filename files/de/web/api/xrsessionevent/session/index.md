---
title: "XRSessionEvent: Eigenschaft session"
short-title: session
slug: Web/API/XRSessionEvent/session
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`session`** der {{domxref("XRSessionEvent")}}-Schnittstelle zeigt an, um welche {{domxref("XRSession")}} es in dem Ereignis geht.

## Wert

Ein {{domxref("XRSession")}}-Objekt, das angibt, auf welche WebXR-Sitzung sich das Ereignis bezieht.

## Beispiele

In diesem Beispiel wird die `session`-Eigenschaft verwendet, um das Sitzungsobjekt zu erhalten, um zu verwalten, wann ein Ereignis empfangen wird.

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
