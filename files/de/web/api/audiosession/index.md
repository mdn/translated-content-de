---
title: AudioSession
slug: Web/API/AudioSession
l10n:
  sourceCommit: 52a02663d8a43fb35ea80f1b276dab03d8dab9ef
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Die **`AudioSession`** Schnittstelle der [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es einer Webseite, den Typ des Audios zu deklarieren, das sie produziert – zum Beispiel Musik-Wiedergabe, ein Videoanruf oder eine kurze Benachrichtigung. Die Plattform verwendet den deklarierten Typ, um zu entscheiden, wie das Audio der Seite und Audio von anderen Anwendungen und Tabs koexistieren sollen – ob pausiert, gedämpft (die Lautstärke gesenkt) oder parallel abgespielt werden soll.

Die Schnittstelle bietet auch die [`state`](/de/docs/Web/API/AudioSession/state) Eigenschaft, die anzeigt, ob Audio aktiv auf der Seite abgespielt wird, inaktiv ist oder unterbrochen wurde, sowie das [`statechange`](/de/docs/Web/API/AudioSession/statechange_event) Ereignis, das eine Benachrichtigung liefert, wenn sich der Zustand ändert. Während hörbare Medien automatisch durch Unterbrechungen pausiert/fortgesetzt werden, ermöglicht die Zustandsüberwachung die Konfiguration von Verhalten, das nicht automatisch gesteuert wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`AudioSession.type`](/de/docs/Web/API/AudioSession/type) {{Experimental_Inline}}
  - : Ein String, der den Typ der Audiositzung darstellt. Mögliche Werte sind `"auto"`, `"playback"`, `"transient"`, `"transient-solo"`, `"ambient"` und `"play-and-record"`.
- [`AudioSession.state`](/de/docs/Web/API/AudioSession/state) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den aktuellen Zustand der Audiositzung darstellt. Mögliche Werte sind `"active"`, `"interrupted"` und `"inactive"`.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieser Schnittstelle zuweisen.

- [`statechange`](/de/docs/Web/API/AudioSession/statechange_event)
  - : Wird ausgelöst, wenn sich die [`state`](/de/docs/Web/API/AudioSession/state) Eigenschaft ändert.
    Auch verfügbar über die [`onstatechange`](/de/docs/Web/API/AudioSession/statechange_event) Ereignis-Handler-Eigenschaft.

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel setzt den Audiositzungstyp auf `"playback"`, bevor die Medienwiedergabe gestartet wird (vorausgesetzt, `AudioSession` wird unterstützt). Dies signalisiert, dass die Seite Medien wie Musik oder Video abspielt.

```js
if ("audioSession" in navigator) {
  // Set the audio session type for media playback
  navigator.audioSession.type = "playback";
}

// Play some audio
audioElement.play();
```

### Einrichtung einer Video-Konferenzanwendung

Dieses Beispiel setzt den Audiositzungstyp auf `"play-and-record"` für eine Videokonferenz-Anwendung.

Zuerst verwenden wir [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession), um zu signalisieren, dass die Seite simultane Wiedergabe und Aufnahme benötigt. Dies kann dazu führen, dass das System Audio durch den richtigen Ausgang leitet (zum Beispiel Ohrhörer statt Lautsprecher auf mobilen Geräten) und verhindert, dass das Audio anderer Anwendungen den Anruf unterbricht. Dann beginnen wir mit dem Abspielen des entfernten Medien und dem Streamen unseres eigenen Videos und Audios.

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

Der folgende Code lauscht auf das [`statechange`](/de/docs/Web/API/AudioSession/statechange_event) Ereignis. Wenn der Sitzungszustand durch die Plattform auf `"interrupted"` gesetzt wird, zum Beispiel aufgrund eines eingehenden Telefonanrufs, pausiert der Handler ungemutetes lokales und entferntes Video, solange die Unterbrechung dauert (die Plattform selbst wird alle Elemente, die eine hörbare Ausgabe haben, pausieren und neu starten).

```js
// Pause local playback and recording while the platform interrupts the call
navigator.audioSession.addEventListener("statechange", () => {
  const interrupted = navigator.audioSession.state === "interrupted";

  // remoteVideo is the audio/video from the remote end.
  // We pause it on interruption if it was muted (and hence not paused automatically)
  if (remoteVideo.muted) {
    if (interrupted) {
      remoteVideo.pause();
    } else {
      remoteVideo.play();
    }
  }

  // localVideo is the preview for the local user.
  // This is typically muted by default,
  // so the page must pause and resume it explicitly.
  if (interrupted) {
    localVideo.pause();
  } else {
    localVideo.play();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession)
- [Audio Session API](/de/docs/Web/API/Audio_Session_API)
