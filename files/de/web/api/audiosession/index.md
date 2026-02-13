---
title: AudioSession
slug: Web/API/AudioSession
l10n:
  sourceCommit: 7afb60028792bba6b9c809867bc6c5304f9868a6
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Die **`AudioSession`**-Schnittstelle der [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es Entwicklern zu spezifizieren, wie Audio aus einer Webanwendung mit anderem Audio auf einem Gerät interagiert.

Eine Audiositzung repräsentiert die aggregierte Audioausgabe einer Webseite. Sie ermöglicht es Webseiten, die allgemeine Natur ihrer Audioausgabe auszudrücken, wie z.B. Wiedergabe, Aufnahme oder vorübergehende Geräusche wie Benachrichtigungen. Die Plattform kann diese Informationen dann verwenden, um zu bestimmen, wie web-basiertes Audio mit anderen Anwendungen auf dem Gerät interagieren sollte, z.B. ob Web-Audio andere Audios pausieren oder daneben abspielen sollte.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`AudioSession.type`](/de/docs/Web/API/AudioSession/type) {{Experimental_Inline}}
  - : Ein String, der den Typ der Audiositzung repräsentiert. Mögliche Werte umfassen `"auto"`, `"playback"`, `"transient"`, `"transient-solo"`, `"ambient"` und `"play-and-record"`.

## Beispiele

### Festlegen des Audiositzungstyps für eine Videokonferenzanwendung

Im folgenden Beispiel wird der Audiositzungstyp für eine Videokonferenzanwendung auf `"play-and-record"` gesetzt. Auf unterstützenden Plattformen signalisiert dies, dass die Seite eine gleichzeitige Wiedergabe und Aufnahme benötigt, was dazu führen kann, dass das System Audio über den korrekten Ausgang leitet (z.B. Ohrhörer statt Lautsprecher auf mobilen Geräten) und verhindert, dass Audio anderer Anwendungen den Anruf unterbricht.

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
