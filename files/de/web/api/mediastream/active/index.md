---
title: "MediaStream: active-Eigenschaft"
short-title: active
slug: Web/API/MediaStream/active
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Die **`active`**-Eigenschaft der Schnittstelle {{domxref("MediaStream")}} gibt einen booleschen Wert zurück, der `true` ist, wenn der Stream derzeit aktiv ist; andernfalls gibt er `false` zurück. Ein Stream gilt als **aktiv**, wenn mindestens einer seiner {{domxref("MediaStreamTrack")}}s die Eigenschaft {{domxref("MediaStreamTrack.readyState")}} nicht auf `ended` gesetzt hat. Sobald jeder Track beendet ist, wird die `active`-Eigenschaft des Streams `false`.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Stream derzeit aktiv ist; andernfalls ist der Wert `false`.

## Beispiele

In diesem Beispiel wird ein neuer Stream angefordert, dessen Quelle die lokale Kamera und das Mikrofon des Benutzers sind, mit Hilfe von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}. Wenn dieser Stream verfügbar wird (das heißt, wenn das zurückgegebene {{jsxref("Promise")}} erfüllt ist), wird ein Button auf der Seite basierend darauf aktualisiert, ob der Stream derzeit aktiv ist oder nicht.

```js
const promise = navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});

promise.then((stream) => {
  const startBtn = document.querySelector("#startBtn");
  startBtn.disabled = stream.active;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
