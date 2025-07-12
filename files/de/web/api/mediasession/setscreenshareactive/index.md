---
title: "MediaSession: Methode setScreenshareActive()"
short-title: setScreenshareActive()
slug: Web/API/MediaSession/setScreenshareActive
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`setScreenshareActive()`**-Methode des [`MediaSession`](/de/docs/Web/API/MediaSession)-Interfaces wird verwendet, um dem Benutzeragenten mitzuteilen, ob die Bildschirmübertragung des Benutzers als aktiv angesehen wird.

Rufen Sie diese Methode am `navigator`-Objekt im [`mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Objekt auf.

Beachten Sie, dass der Status der Bildschirmübertragung nicht in der [`MediaSession`](/de/docs/Web/API/MediaSession) selbst verfolgt wird, sondern separat nachverfolgt werden muss.

## Syntax

```js-nolint
setScreenshareActive(active)
```

### Parameter

- `active`
  - : Ein boolescher Wert, der angibt, ob die Bildschirmübertragung als aktiv angesehen wird oder nicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Unten finden Sie ein Beispiel dafür, wie der aktuelle Status der aktiven Bildschirmübertragung der
[`MediaSession`](/de/docs/Web/API/MediaSession) aktualisiert wird. Außerdem wird gezeigt, wie Anfragen zum Ändern des Bildschirmübertragungsstatus mit [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler) behandelt werden.

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
