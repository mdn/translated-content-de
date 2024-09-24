---
title: "MediaSession: setCameraActive()-Methode"
short-title: setCameraActive()
slug: Web/API/MediaSession/setCameraActive
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`setCameraActive()`**-Methode des {{domxref("MediaSession")}}-Interfaces wird verwendet, um dem Benutzeragenten mitzuteilen, ob die Kamera des Benutzers als aktiv betrachtet wird.

Rufen Sie diese Methode am `navigator`-Objekt auf, auf dem
{{domxref("navigator.mediaSession", "mediaSession")}}-Objekt.

Beachten Sie, dass der Status der Kamera nicht in der {{domxref("MediaSession")}} selbst verfolgt wird, sondern separat verfolgt werden muss.

## Syntax

```js-nolint
setCameraActive(active)
```

### Parameter

- `active`
  - : Ein Boolean-Wert, der angibt, ob die Kamera als aktiv betrachtet wird oder nicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt, wie der Status der Kameranutzung der aktuellen {{domxref('MediaSession')}} aktualisiert wird, sowie das Abhören von Anfragen zur Änderung des Kamerastatus mit {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}.

```js
let cameraActive = false;

navigator.mediaSession.setCameraActive(cameraActive);

navigator.mediaSession.setActionHandler("togglecamera", () => {
  cameraActive = !cameraActive;
  navigator.mediaSession.setCameraActive(cameraActive);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
