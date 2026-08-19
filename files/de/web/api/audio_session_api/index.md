---
title: Audio Session API
slug: Web/API/Audio_Session_API
l10n:
  sourceCommit: 52a02663d8a43fb35ea80f1b276dab03d8dab9ef
---

{{DefaultAPISidebar("Audio Session API")}}{{SeeCompatTable}}

Die **Audio Session API** bietet eine Möglichkeit für Webanwendungen, zu steuern, wie ihr Audio mit anderem Audio auf einem Gerät interagiert.

## Konzepte und Nutzung

Menschen konsumieren zunehmend Medien über das Web: Es ist inzwischen ein primärer Kanal für den Zugang zu Audio- und Videoinhalten. Medien im Web fehlen jedoch oft eine nahtlose Integration mit den zugrundeliegenden Plattformen. Die Audio Session API schließt diese Lücke, indem sie Entwicklern ermöglicht zu spezifizieren, wie das von ihren Webanwendungen erzeugte Audio mit Audio von anderen Anwendungen auf dem Gerät interagiert — zum Beispiel indem es zusammen mit anderem Audio abgespielt, dessen Lautstärke verringert ("Ducking") oder pausiert wird, damit das eigene Audio alleine abgespielt werden kann.

Eine Webseite kann Audioverarbeitung auf verschiedene Arten unter Verwendung von APIs wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und der [Web Audio API](/de/docs/Web/API/Web_Audio_API) durchführen. Eine **Audiositzung** repräsentiert das aggregierte Audio, das von einer Webseite erzeugt wird, und ermöglicht es ihr, die allgemeine Natur ihrer Audioausgabe auszudrücken.

### Audiositzungstypen

Die API unterstützt mehrere Audiositzungstypen, die den Typ des durch die Anwendung erzeugten Audios spezifizieren:

- `"auto"` — Der Standard. Der User-Agent wählt automatisch den besten Typ basierend auf den verwendeten Audio-APIs.
- `"playback"` — Für Medienwiedergaben wie Musik oder Video. Dieser Typ sollte sich nicht mit anderer Audiowiedergabe mischen.
- `"transient"` — Für kurze Geräusche wie Benachrichtigungen. Dieser Typ wird in der Regel über anderem Audio abgespielt.
- `"transient-solo"` — Für Audio, das exklusiv abgespielt werden soll und allen anderen Audio pausiert (wie Sprachaufforderungen).
- `"ambient"` — Für Audio, das sich mit anderen Audioquellen mischen kann.
- `"play-and-record"` — Für Anwendungen, die sowohl Audio abspielen als auch aufnehmen, wie Videokonferenzen.

#### `auto` Typenauswahl

Wenn `type` auf `"auto"` gesetzt ist, wählt der User-Agent einen Typ basierend auf den Audio-APIs und den auf der Seite vorhandenen Elementen, die Audio ausgeben.

Jede Audio-erzeugende Funktion hat ihren eigenen Standardtyp:

- ein [`AudioContext`](/de/docs/Web/API/AudioContext) hat standardmäßig `"ambient"`
- ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (wie `<audio>` oder `<video>`) hat standardmäßig `"playback"`
- ein über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) gewonnenes Mikrofon-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) hat standardmäßig `"play-and-record"`

Wenn mehrere davon gleichzeitig auf der Seite aktiv sind, wird der automatisch gewählte Typ derjenige mit der höchsten Priorität, in der Reihenfolge `"play-and-record"`, `"playback"`, `"transient-solo"`, `"transient"`. Der Typ fällt auf `"ambient"` zurück, wenn keiner von ihnen aktiv ist. Ein Beispiel: Eine Seite, die gleichzeitig eine Mikrofonspur aufnimmt und ein `<video>` abspielt, wird zu `"play-and-record"` aufgelöst.

Beachten Sie, dass `"transient"` und `"transient-solo"` keine eigene Standardquelle haben, sodass diese Typen explizit gesetzt werden müssen.

### Audiositzungszustände

Eine Audiositzung hat auch einen Zustand, der widerspiegelt, ob sie derzeit Audio produziert, im Leerlauf oder vorübergehend von der Plattform unterbrochen ist:

- `"active"` — Die Audiositzung spielt Ton ab, nimmt Audio auf oder beides (und wird nicht unterbrochen).
- `"interrupted"` — Die Sitzung war aktiv, wurde aber vorübergehend von der Plattform unterbrochen, z.B. aufgrund eines eingehenden Anrufs oder einer anderen Anwendung, die exklusive Kontrolle über das Audio übernimmt.
- `"inactive"` — Die Audiositzung spielt oder nimmt kein Audio auf und ist derzeit nicht unterbrochen. Dies ist der Standardzustand.

Die Sitzung ist aktiv, solange ein Element oder ein anderes Mechanismus auf der Seite Audio produziert oder aufnimmt, und wird inaktiv, sobald alle Audioquellen und -senken gestoppt haben.

Das [`statechange`](/de/docs/Web/API/AudioSession/statechange_event) Ereignis wird ausgelöst, wann immer sich der Zustand ändert und ermöglicht es einer Seite, auf Unterbrechungen zu reagieren — beispielsweise indem sie die Wiedergabe pausiert, die die Plattform nicht bereits automatisch pausiert.

## Schnittstellen

- [`AudioSession`](/de/docs/Web/API/AudioSession) {{Experimental_Inline}}
  - : Die Hauptschnittstelle zur Steuerung des Verhaltens von Audiositzungen, einschließlich der Einstellung des Audiositzungstyps und der Verfolgung ihres Zustands.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`AudioSession`](/de/docs/Web/API/AudioSession) Objekt für das aktuelle Dokument zurück.

## Beispiele

### Einrichten einer Videokonferenz-Audiositzung

In einer Videokonferenzanwendung sind sowohl Wiedergabe als auch Aufnahme erforderlich; dabei kann die Audio Session API helfen.

Zuerst überprüfen wir, ob die Schnittstelle unterstützt wird, und wenn ja, setzen wir den Audiositzungstyp auf `"play-and-record"`.
Dies informiert die Plattform, dass diese Seite Mikrofonzugriff neben der Audioausgabe benötigt, was wiederum die Systemlautstärkerouting anpassen kann (z.B. unter Verwendung des Ohrhörers anstelle des Lautsprechers auf mobilen Geräten) und verhindert, dass Audio anderer Anwendungen den Anruf unterbricht.

```js
if ("audioSession" in navigator) {
  navigator.audioSession.type = "play-and-record";
}
```

Als nächstes richten wir die Medienstreams für den Videoanruf wie gewohnt ein. Die Plattform wird nun das von diesen Streams erzeugte Audio gemäß dem `"play-and-record"` Sitzungs-Typ behandeln.

```js
// Start playing remote media
remoteVideo.srcObject = remoteMediaStream;
remoteVideo.play();

// Start capturing local media
navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then((stream) => {
    localVideo.srcObject = stream;
  });
```

Der folgende Code lauscht auf das [`statechange`](/de/docs/Web/API/AudioSession/statechange_event) Ereignis.
Wenn der Sitzungszustand von der Plattform durch beispielsweise einen eingehenden Anruf `"interrupted"` wird, pausiert der Handler lokale und entfernte Videos, die nicht stummgeschaltet sind, während die Unterbrechung anhält (die Plattform pausiert und startet selbst jegliche Elemente neu, die eine hörbare Ausgabe haben).

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

- [`AudioSession`](/de/docs/Web/API/AudioSession)
- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
