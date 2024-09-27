---
title: "MediaSession: setCameraActive() Methode"
short-title: setCameraActive()
slug: Web/API/MediaSession/setCameraActive
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`setCameraActive()`**-Methode des [`MediaSession`](/de/docs/Web/API/MediaSession)-Interfaces wird verwendet, um dem Benutzeragenten mitzuteilen, ob die Kamera des Benutzers als aktiv betrachtet wird.

Rufen Sie diese Methode für das `navigator`-Objekt von
[`mediaSession`](/de/docs/Web/API/Navigator/mediaSession) auf.

Beachten Sie, dass der Status der Kamera nicht im [`MediaSession`](/de/docs/Web/API/MediaSession) selbst verfolgt wird, sondern separat nachgehalten werden muss.

## Syntax

```js-nolint
setCameraActive(active)
```

### Parameter

- `active`
  - : Ein boolescher Wert, der angibt, ob die Kamera als aktiv betrachtet wird oder nicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Nachfolgend finden Sie ein Beispiel zum Aktualisieren des aktiven Kamerastatus der aktuellen
[`MediaSession`](/de/docs/Web/API/MediaSession), sowie zum Überwachen von Anfragen zur Änderung des Kamerastatus mit [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler).

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
