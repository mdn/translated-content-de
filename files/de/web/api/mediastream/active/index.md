---
title: "MediaStream: active-Eigenschaft"
short-title: active
slug: Web/API/MediaStream/active
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte **`active`**-Eigenschaft des [`MediaStream`](/de/docs/Web/API/MediaStream)-Interfaces gibt einen booleschen Wert zurück, der `true` ist, wenn der Stream derzeit aktiv ist; andernfalls wird `false` zurückgegeben. Ein Stream wird als **aktiv** angesehen, wenn mindestens einer seiner [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s nicht die Eigenschaft [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) auf `ended` gesetzt hat. Sobald jeder Track beendet ist, wird die `active`-Eigenschaft des Streams `false`.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Stream derzeit aktiv ist; andernfalls ist der Wert `false`.

## Beispiele

In diesem Beispiel wird ein neuer Stream angefordert, dessen Quelle die lokale Kamera und das Mikrofon des Benutzers ist, indem [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet wird. Wenn dieser Stream verfügbar wird (das heißt, wenn das zurückgegebene {{jsxref("Promise")}} erfüllt wird), wird ein Button auf der Seite basierend darauf aktualisiert, ob der Stream derzeit aktiv ist oder nicht.

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
