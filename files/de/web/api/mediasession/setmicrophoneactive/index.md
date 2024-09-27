---
title: "MediaSession: setMicrophoneActive() Methode"
short-title: setMicrophoneActive()
slug: Web/API/MediaSession/setMicrophoneActive
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`setMicrophoneActive()`** Methode des [`MediaSession`](/de/docs/Web/API/MediaSession) Interfaces wird verwendet, um dem User-Agent mitzuteilen, ob das Mikrofon des Benutzers aktuell als stummgeschaltet betrachtet wird.

Rufen Sie diese Methode am `navigator`-Objekt des [`mediaSession`](/de/docs/Web/API/Navigator/mediaSession) Objekts auf.

Beachten Sie, dass der Status des Mikrofons nicht in der [`MediaSession`](/de/docs/Web/API/MediaSession) selbst verfolgt wird, sondern separat erfasst werden muss.

## Syntax

```js-nolint
setMicrophoneActive(active)
```

### Parameter

- `active`
  - : Ein Boolean, der angibt, ob das Mikrofon als stummgeschaltet betrachtet wird oder nicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Unten finden Sie ein Beispiel zum Aktualisieren des Mikrofon-Stummschaltungsstatus der aktuellen [`MediaSession`](/de/docs/Web/API/MediaSession) sowie zum Anhören von Anfragen zur Änderung des Stummschaltungsstatus mit [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler).

```js
let microphoneActive = false;

navigator.mediaSession.setMicrophoneActive(microphoneActive);

navigator.mediaSession.setActionHandler("togglemicrophone", () => {
  microphoneActive = !microphoneActive;
  navigator.mediaSession.setMicrophoneActive(microphoneActive);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
