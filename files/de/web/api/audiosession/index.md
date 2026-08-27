---
title: AudioSession
slug: Web/API/AudioSession
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Die **`AudioSession`**-Schnittstelle der [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es einer Webseite, den Typ der von ihr produzierten Audioausgabe zu deklarieren - zum Beispiel Musik-Wiedergabe, ein Videoanruf oder eine kurze Benachrichtigung. Die Plattform verwendet den deklarierten Typ, um zu entscheiden, wie die Audioausgabe der Seite und die Audiosignale anderer Anwendungen und Tabs koexistieren sollen — ob sie pausiert, abgesenkt (die Lautstärke verringert) oder parallel abgespielt werden sollen.

Die Schnittstelle bietet auch die Eigenschaft [`state`](/de/docs/Web/API/AudioSession/state), die anzeigt, ob Audio aktiv auf der Seite abgespielt wird, inaktiv ist oder unterbrochen wurde, sowie das Ereignis [`statechange`](/de/docs/Web/API/AudioSession/statechange_event), das eine Benachrichtigung bereitstellt, wenn sich der Zustand ändert. Während hörbare Medien automatisch durch Unterbrechungen pausiert/fortgesetzt werden, ermöglicht die Zustandsüberwachung die Konfiguration von nicht automatisch gesteuertem Verhalten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`AudioSession.type`](/de/docs/Web/API/AudioSession/type) {{Experimental_Inline}}
  - : Ein String, der den Typ der Audiositzung darstellt. Mögliche Werte sind `"auto"`, `"playback"`, `"transient"`, `"transient-solo"`, `"ambient"` und `"play-and-record"`.
- [`AudioSession.state`](/de/docs/Web/API/AudioSession/state) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den aktuellen Zustand der Audiositzung darstellt. Mögliche Werte sind `"active"`, `"interrupted"` und `"inactive"`.

## Ereignisse

Diese Ereignisse können mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Handlers zur `oneventname`-Eigenschaft dieser Schnittstelle gehört werden.

- [`statechange`](/de/docs/Web/API/AudioSession/statechange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn sich die [`state`](/de/docs/Web/API/AudioSession/state)-Eigenschaft ändert.
    Auch verfügbar über die [`onstatechange`](/de/docs/Web/API/AudioSession/statechange_event) Ereignishandler-Eigenschaft.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel setzt den Audiositzungstyp auf `"playback"`, bevor die Medienwiedergabe gestartet wird (sofern `AudioSession` unterstützt wird). Dies signalisiert, dass die Seite Medien wie Musik oder Video abspielt.

```js
if ("audioSession" in navigator) {
  // Set the audio session type for media playback
  navigator.audioSession.type = "playback";
}

// Play some audio
audioElement.play();
```

### Einrichten einer Video-Konferenzanwendung

Dieses Beispiel setzt den Audiositzungstyp für eine Videokonferenzanwendung auf `"play-and-record"`.

Zuerst verwenden wir [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession), um zu signalisieren, dass die Seite gleichzeitige Wiedergabe und Aufnahme benötigt. Dadurch kann das System den Audioausgang korrekt routen (zum Beispiel das Ohrstück statt des Lautsprechers auf Mobilgeräten verwenden) und verhindern, dass die Audioausgabe anderer Anwendungen den Anruf unterbricht. Dann beginnen wir mit der Wiedergabe des fremden Mediums und dem Streamen unseres eigenen Videos und Audios.

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

Der folgende Code hört auf das [`statechange`](/de/docs/Web/API/AudioSession/statechange_event)-Ereignis. Wenn der Sitzungszustand vom System unterbrochen wird, zum Beispiel aufgrund eines eingehenden Telefonanrufs, pausiert der Handler ungemutetes lokales und fremdes Video, solange die Unterbrechung anhält (das System selbst pausiert und startet alle Elemente neu, die eine hörbare Ausgabe haben).

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
