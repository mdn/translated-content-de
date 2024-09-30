---
title: "MediaSession: `setCameraActive()` Methode"
short-title: setCameraActive()
slug: Web/API/MediaSession/setCameraActive
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`setCameraActive()`** Methode des [`MediaSession`](/de/docs/Web/API/MediaSession)-Interfaces wird verwendet, um dem Benutzeragenten mitzuteilen, ob die Kamera des Benutzers als aktiv angesehen wird.

Rufen Sie diese Methode am `navigator`-Objekt, also dem [`mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Objekt, auf.

Beachten Sie, dass der Status der Kamera nicht in der [`MediaSession`](/de/docs/Web/API/MediaSession) selbst verfolgt wird, sondern separat verfolgt werden muss.

## Syntax

```js-nolint
setCameraActive(active)
```

### Parameter

- `active`
  - : Ein Boolean-Wert, der angibt, ob die Kamera als aktiv angesehen wird oder nicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Unten finden Sie ein Beispiel zum Aktualisieren des Kamera-Status der aktuellen [`MediaSession`](/de/docs/Web/API/MediaSession), sowie zum Hören von Anfragen zur Änderung des Kamera-Status mit [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler).

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
