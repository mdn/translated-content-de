---
title: "MediaStream: active-Eigenschaft"
short-title: active
slug: Web/API/MediaStream/active
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte Eigenschaft **`active`** der Schnittstelle [`MediaStream`](/de/docs/Web/API/MediaStream) gibt einen booleschen Wert zurück. Dieser ist `true`, wenn der Stream derzeit aktiv ist; andernfalls ist er `false`. Ein Stream gilt als **aktiv**, wenn bei mindestens einem seiner [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte die Eigenschaft [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) nicht auf `ended` gesetzt ist. Sobald alle Tracks beendet sind, wird die Eigenschaft `active` des Streams zu `false`.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Stream derzeit aktiv ist; andernfalls ist er `false`.

## Beispiele

In diesem Beispiel wird mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) ein neuer Stream angefordert, dessen Quelle die lokale Kamera und das Mikrofon der Benutzerin oder des Benutzers sind. Sobald der Stream verfügbar ist (das heißt, sobald das zurückgegebene {{jsxref("Promise")}} erfüllt ist), wird eine Schaltfläche auf der Seite entsprechend dem aktuellen Wert der Eigenschaft `active` aktualisiert.

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
