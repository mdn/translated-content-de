---
title: "MediaSession: setMicrophoneActive() Methode"
short-title: setMicrophoneActive()
slug: Web/API/MediaSession/setMicrophoneActive
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{APIRef("Media Session API")}}

Die **`setMicrophoneActive()`** Methode der [`MediaSession`](/de/docs/Web/API/MediaSession) Schnittstelle wird verwendet, um dem Benutzeragenten anzuzeigen, ob das Mikrofon des Benutzers derzeit als stummgeschaltet angesehen wird.

Rufen Sie diese Methode auf dem `navigator` Objekt
[`mediaSession`](/de/docs/Web/API/Navigator/mediaSession) Objekt auf.

Beachten Sie, dass der Status des Mikrofons nicht in der [`MediaSession`](/de/docs/Web/API/MediaSession) selbst verfolgt wird, sondern separat verfolgt werden muss.

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

Unten ist ein Beispiel für das Aktualisieren des Mikrofon-Stummschaltstatus der aktuellen
[`MediaSession`](/de/docs/Web/API/MediaSession) sowie für das Annehmen von Anfragen zur Änderung des Stummschaltstatus mit [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler).

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
