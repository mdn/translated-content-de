---
title: "MediaSession: setScreenshareActive() Methode"
short-title: setScreenshareActive()
slug: Web/API/MediaSession/setScreenshareActive
l10n:
  sourceCommit: e1f2821ac79708a5f7fcc895e2a4ff66ab75c41a
---

{{APIRef("Media Session API")}}

Die **`setScreenshareActive()`**-Methode der [`MediaSession`](/de/docs/Web/API/MediaSession) Schnittstelle wird verwendet, um dem Benutzeragenten anzuzeigen, ob die Bildschirmfreigabe des Benutzers als aktiv angesehen wird.

Rufen Sie diese Methode am [`mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Objekt des `navigator`-Objekts auf.

Beachten Sie, dass der Status der Bildschirmfreigabe nicht in der [`MediaSession`](/de/docs/Web/API/MediaSession) selbst verfolgt wird, sondern separat nachverfolgt werden muss.

## Syntax

```js-nolint
setScreenshareActive(active)
```

### Parameter

- `active`
  - : Ein boolescher Wert, der angibt, ob die Bildschirmfreigabe als aktiv angesehen wird oder nicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Unten ist ein Beispiel für die Aktualisierung des aktiven Zustands der Bildschirmfreigabe der aktuellen
[`MediaSession`](/de/docs/Web/API/MediaSession) sowie für das Abhören von Anfragen zur Änderung des Bildschirmfreigabe-Status mit [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler) dargestellt.

```js
let screenshareActive = false;

navigator.mediaSession.setCameraActive(cameraActive);

navigator.mediaSession.setActionHandler("togglescreenshare", () => {
  screenshareActive = !screenshareActive;
  navigator.mediaSession.setCameraActive(screenshareActive);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
