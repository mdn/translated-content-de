---
title: Audio Session API
slug: Web/API/Audio_Session_API
l10n:
  sourceCommit: 7afb60028792bba6b9c809867bc6c5304f9868a6
---

{{DefaultAPISidebar("Audio Session API")}}{{SeeCompatTable}}

Die **Audio Session API** bietet eine Möglichkeit für Webanwendungen, zu kontrollieren, wie ihr Audio mit anderem Audio auf einem Gerät interagiert.

## Konzepte und Nutzung

Menschen konsumieren zunehmend Medien über das Web: Es ist mittlerweile ein primärer Kanal für den Zugriff auf Audio- und Videoinhalte. Medien im Web fehlen jedoch oft nahtlose Integrationen mit den zugrunde liegenden Plattformen. Die Audio Session API schließt diese Lücke, indem sie Entwicklern erlaubt zu bestimmen, wie das Audio ihrer Webanwendungen mit Audio von anderen Anwendungen auf dem Gerät interagiert — zum Beispiel gleichzeitig mit anderem Audio zu spielen, es zu reduzieren (sogenanntes "Ducking") oder es zu pausieren, damit ihr Audio allein abgespielt werden kann.

Eine Webseite kann Audiobearbeitung auf verschiedene Weise über APIs wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und die [Web Audio API](/de/docs/Web/API/Web_Audio_API) durchführen. Eine **Audio-Sitzung** repräsentiert das aggregierte Audio, das von einer Webseite produziert wird, und ermöglicht es, die allgemeine Natur des Audioausgangs auszudrücken.

### Audio-Sitzungstypen

Die API unterstützt mehrere Audio-Sitzungstypen, die den Typ des Audios angeben, das eine Anwendung produziert:

- `"auto"` — Der Standard. Der Benutzeragent wählt automatisch den besten Typ basierend auf den verwendeten Audio-APIs aus.
- `"playback"` — Für die Wiedergabe von Medien wie Musik oder Video. Dieser Typ sollte nicht mit anderer Audiowiedergabe gemischt werden.
- `"transient"` — Für kurze Sounds wie Benachrichtigungen. Dieser Typ spielt normalerweise über anderem Audio.
- `"transient-solo"` — Für Audio, das exklusiv abgespielt werden soll und alle anderen Audios pausiert (zum Beispiel Sprachansagen).
- `"ambient"` — Für Audio, das mit anderen Audioquellen gemischt werden kann.
- `"play-and-record"` — Für Anwendungen, die sowohl Audio abspielen als auch aufnehmen, wie Videokonferenzen.

## Schnittstellen

- [`AudioSession`](/de/docs/Web/API/AudioSession) {{Experimental_Inline}}
  - : Die Hauptschnittstelle zur Steuerung des Audio-Sitzungsverhaltens, einschließlich der Einstellung des Audio-Sitzungstyps.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`AudioSession`](/de/docs/Web/API/AudioSession)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Einrichtung einer Videokonferenz-Audio-Sitzung

In einer Videokonferenzanwendung sind sowohl Wiedergabe als auch Aufnahme erforderlich; dies ist etwas, bei dem die Audio Session API helfen kann.

Zuerst setzen wir den Audio-Sitzungstyp auf `"play-and-record"`, um der Plattform mitzuteilen, dass diese Seite Mikrofonzugriff zusammen mit Audioausgabe benötigt. Auf unterstützenden Plattformen kann dies die Lautstärkenführung des Systems anpassen (zum Beispiel die Nutzung des Ohrhörers statt des Lautsprechers auf mobilen Geräten) und verhindern, dass Audio anderer Anwendungen den Anruf unterbricht.

```js
navigator.audioSession.type = "play-and-record";
```

Als Nächstes richten wir die Medienströme für den Videocall wie gewohnt ein. Die Plattform wird nun das von diesen Strömen produzierte Audio gemäß dem `"play-and-record"` Sitzungstyp behandeln.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioSession`](/de/docs/Web/API/AudioSession)
- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
