---
title: "MediaSession: setMicrophoneActive() Methode"
short-title: setMicrophoneActive()
slug: Web/API/MediaSession/setMicrophoneActive
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`setMicrophoneActive()`**-Methode des [`MediaSession`](/de/docs/Web/API/MediaSession)-Interfaces wird verwendet, um dem User-Agent anzuzeigen, ob das Mikrofon des Benutzers derzeit als stummgeschaltet angesehen wird.

Rufen Sie diese Methode am `navigator`-Objekt im [`mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Objekt auf.

Beachten Sie, dass der Status des Mikrofons nicht im [`MediaSession`](/de/docs/Web/API/MediaSession) selbst verfolgt wird, sondern separat erfasst werden muss.

## Syntax

```js-nolint
setMicrophoneActive(active)
```

### Parameter

- `active`
  - : Ein Boolean, der angibt, ob das Mikrofon als stummgeschaltet angesehen wird oder nicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Nachfolgend ein Beispiel zum Aktualisieren des Mikrofon-Stummschaltungszustandes der aktuellen [`MediaSession`](/de/docs/Web/API/MediaSession) und zum Zuhören von Anforderungen zur Änderung des Stummschaltungsstatus mit [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler).

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
