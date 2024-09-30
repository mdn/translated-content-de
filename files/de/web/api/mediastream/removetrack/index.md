---
title: "MediaStream: removeTrack() Methode"
short-title: removeTrack()
slug: Web/API/MediaStream/removeTrack
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Die **`removeTrack()`** Methode der [`MediaStream`](/de/docs/Web/API/MediaStream) Schnittstelle entfernt ein
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) aus einem Stream.

## Syntax

```js-nolint
removeTrack(track)
```

### Parameter

- `track`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der aus dem Stream entfernt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt, wie die Audio- und Videospuren aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) entfernt werden.
`fetchStreamFunction` ist ein Ereignishandler für `fetchStreamButton`. Wenn der Button geklickt wird, werden Audio
und Video von den Geräten des Systems erfasst. `removeTracksFunction` ist der Ereignishandler für `removeTracksButton`.
Wenn dieser Button geklickt wird, werden die Audio- und Videospuren aus dem [`MediaStream`](/de/docs/Web/API/MediaStream) entfernt.

```js
let initialStream = null;
let newStream = null;

let fetchStreamButton = document.getElementById("fetchStream");
let removeTracksButton = document.getElementById("removeTracks");

async function fetchStreamFunction() {
  initialStream = await navigator.mediaDevices.getUserMedia({
    video: { width: 620, height: 310 },
    audio: true,
  });
  if (initialStream) {
    await attachToDOM(initialStream);
  }
}

async function attachToDOM(stream) {
  newStream = new MediaStream(stream.getTracks());
  document.querySelector("video").srcObject = newStream;
}

async function removeTracksFunction() {
  let videoTrack = newStream.getVideoTracks()[0];
  let audioTrack = newStream.getAudioTracks()[0];

  newStream.removeTrack(videoTrack);
  newStream.removeTrack(audioTrack);

  // Stream will be empty
  console.log(newStream.getTracks());
}

fetchStreamButton.addEventListener("click", fetchStreamFunction);
removeTracksButton.addEventListener("click", removeTracksFunction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
