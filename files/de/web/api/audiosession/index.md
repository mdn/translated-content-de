---
title: AudioSession
slug: Web/API/AudioSession
l10n:
  sourceCommit: 9b653061ee49f61a30188659ca26793f0017449c
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Das **`AudioSession`**-Interface der [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es einer Webseite, die Art des Audios zu deklarieren, das sie produziert — zum Beispiel Musik-Wiedergabe, ein Videoanruf oder eine kurze Benachrichtigung. Die Plattform verwendet diese Deklaration, um zu entscheiden, wie das Audio der Seite und das Audio von anderen Anwendungen und Tabs koexistieren sollen — ob pausiert, die Lautstärke gesenkt (geduckt) oder parallel abgespielt wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`AudioSession.type`](/de/docs/Web/API/AudioSession/type) {{Experimental_Inline}}
  - : Ein String, der den Typ der Audiositzung darstellt. Mögliche Werte sind `"auto"`, `"playback"`, `"transient"`, `"transient-solo"`, `"ambient"` und `"play-and-record"`.

## Beispiele

### Festlegen des Audio-Session-Typs für eine Videokonferenz-App

Im folgenden Beispiel wird der Audio-Session-Typ für eine Videokonferenz-Anwendung auf `"play-and-record"` gesetzt. Auf unterstützenden Plattformen signalisiert dies, dass die Seite gleichzeitig Wiedergabe und Aufnahme benötigt, was dazu führen kann, dass das System Audio durch den richtigen Ausgang leitet (z.B. Ohrhörer statt Lautsprecher auf Mobilgeräten) und verhindert, dass Audio von anderen Anwendungen den Anruf unterbricht.

```js
navigator.audioSession.type = "play-and-record";

// Start playing remote media
remoteVideo.srcObject = remoteMediaStream;
remoteVideo.play();

// Start capturing local media
const stream = await navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});
localVideo.srcObject = stream;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession)
- [Audio Session API](/de/docs/Web/API/Audio_Session_API)
