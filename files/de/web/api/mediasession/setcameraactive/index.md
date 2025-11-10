---
title: "MediaSession: Methode setCameraActive()"
short-title: setCameraActive()
slug: Web/API/MediaSession/setCameraActive
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{APIRef("Media Session API")}}

Die **`setCameraActive()`**-Methode des [`MediaSession`](/de/docs/Web/API/MediaSession)-Interfaces wird verwendet, um dem Nutzeragenten mitzuteilen, ob die Kamera des Nutzers als aktiv angesehen wird.

Rufen Sie diese Methode am `navigator`-Objekt auf, und zwar beim
[`mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Objekt.

Beachten Sie, dass der Status der Kamera nicht in der [`MediaSession`](/de/docs/Web/API/MediaSession) selbst verfolgt wird, sondern separat nachverfolgt werden muss.

## Syntax

```js-nolint
setCameraActive(active)
```

### Parameter

- `active`
  - : Ein boolescher Wert, der angibt, ob die Kamera als aktiv angesehen wird oder nicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Unten ist ein Beispiel, das den aktiven Kamerastatus der aktuellen
[`MediaSession`](/de/docs/Web/API/MediaSession) aktualisiert sowie Anfragen zum Ändern des Kamerastatus mit [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler) abhört.

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
