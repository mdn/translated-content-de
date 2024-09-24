---
title: "MediaSession: Methode setMicrophoneActive()"
short-title: setMicrophoneActive()
slug: Web/API/MediaSession/setMicrophoneActive
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`setMicrophoneActive()`**-Methode der {{domxref("MediaSession")}}-Schnittstelle wird verwendet, um dem Benutzeragenten anzuzeigen, ob das Mikrofon des Nutzers derzeit als stummgeschaltet betrachtet wird.

Rufen Sie diese Methode auf dem `navigator`-Objekt
{{domxref("navigator.mediaSession", "mediaSession")}} auf.

Beachten Sie, dass der Status des Mikrofons nicht im {{domxref("MediaSession")}} selbst verfolgt wird, sondern separat verfolgt werden muss.

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

Unten finden Sie ein Beispiel zur Aktualisierung des Mikrofonschaltezustands der aktuellen
{{domxref('MediaSession')}} sowie zum Hören von Anfragen zur Änderung des Stummschaltstatus mit {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}.

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
