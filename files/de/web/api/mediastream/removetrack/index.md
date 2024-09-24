---
title: "MediaStream: removeTrack()-Methode"
short-title: removeTrack()
slug: Web/API/MediaStream/removeTrack
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Die **`removeTrack()`**-Methode des {{domxref("MediaStream")}}-Interfaces entfernt ein {{domxref("MediaStreamTrack")}} aus einem Stream.

## Syntax

```js-nolint
removeTrack(track)
```

### Parameter

- `track`
  - : Ein {{domxref("MediaStreamTrack")}}, das aus dem Stream entfernt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt, wie man die Audio- und Videospuren aus einem {{domxref("MediaStream")}} entfernt. `fetchStreamFunction` ist ein Event-Handler für `fetchStreamButton`. Wenn der Button geklickt wird, werden Audio und Video von den Geräten des Systems aufgenommen. `removeTracksFunction` ist der Event-Handler für `removeTracksButton`. Wenn dieser Button geklickt wird, werden die Audio- und Videospuren aus dem {{domxref("MediaStream")}} entfernt.

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

  // Stream wird leer sein
  console.log(newStream.getTracks());
}

fetchStreamButton.addEventListener("click", fetchStreamFunction);
removeTracksButton.addEventListener("click", removeTracksFunction);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
