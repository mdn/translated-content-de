---
title: Audio Session API
slug: Web/API/Audio_Session_API
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

{{DefaultAPISidebar("Audio Session API")}}{{SeeCompatTable}}

Die **Audio Session API** bietet eine Möglichkeit für Webanwendungen, zu steuern, wie ihr Audio mit anderem Audio, das auf einem Gerät abgespielt wird, interagiert.

## Konzepte und Nutzung

Menschen konsumieren zunehmend Medien über das Internet: Es ist mittlerweile ein primärer Kanal für den Zugriff auf Audio- und Videoinhalte. Allerdings fehlt es Medien im Web oft an nahtloser Integration mit den zugrunde liegenden Plattformen. Die Audio Session API schließt diese Lücke, indem sie Entwicklern ermöglicht, festzulegen, wie das von ihren Webanwendungen erzeugte Audio mit dem Audio anderer Anwendungen auf dem Gerät interagiert — beispielsweise indem es parallel abgespielt wird, es abgedämpft wird (Reduktion der Lautstärke) oder es pausiert, damit das eigene Audio alleine abgespielt werden kann.

Eine Webseite kann Audioverarbeitung in verschiedener Weise durchführen, unter Verwendung von APIs wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und der [Web Audio API](/de/docs/Web/API/Web_Audio_API). Eine **Audio-Session** repräsentiert das aggregierte Audio, das von einer Webseite erzeugt wird, und ermöglicht es, die allgemeine Natur ihrer Audioausgabe auszudrücken.

### Audio-Session-Typen

Die API unterstützt mehrere Audio-Session-Typen, die den Typ des Audios angeben, das eine Anwendung erzeugt:

- `"auto"` — Der Standard. Der Benutzeragent wählt automatisch den besten Typ basierend auf den verwendeten Audio-APIs.
- `"playback"` — Für die Medienwiedergabe wie Musik oder Video. Dieser Typ sollte sich nicht mit anderen Audiowiedergaben mischen.
- `"transient"` — Für kurze Geräusche wie Benachrichtigungen. Dieser Typ wird normalerweise zusätzlich zu anderem Audio abgespielt.
- `"transient-solo"` — Für Audio, das ausschließlich abgespielt werden sollte und alle anderen Audios pausiert (wie Sprachansagen).
- `"ambient"` — Für Audio, das sich mit anderen Audioquellen mischen kann.
- `"play-and-record"` — Für Anwendungen, die sowohl Audio abspielen als auch aufzeichnen, wie Videokonferenzen.

## Schnittstellen

- [`AudioSession`](/de/docs/Web/API/AudioSession) {{Experimental_Inline}}
  - : Die Hauptschnittstelle zur Steuerung des Verhaltens der Audiosession, einschließlich der Einstellung des Audiosession-Typs.

### Erweiterungen für andere Schnittstellen

- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`AudioSession`](/de/docs/Web/API/AudioSession)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Einrichten einer Audiokonferenz-Session

In einer Anwendung für Videokonferenzen werden sowohl Wiedergabe als auch Aufnahme gleichzeitig benötigt; hier kann die Audio Session API helfen.

Erstens setzen wir den Typ der Audiosession auf `"play-and-record"`, um der Plattform mitzuteilen, dass diese Seite Mikrofonzugriff neben der Audioausgabe erfordert. Auf unterstützenden Plattformen kann dies die Lautstärkensteuerung im System anpassen (zum Beispiel Verwendung des Ohrhörers anstelle des Lautsprechers auf mobilen Geräten) und verhindern, dass Audio von anderen Anwendungen den Anruf unterbricht.

```js
navigator.audioSession.type = "play-and-record";
```

Als nächstes richten wir die Mediastreams für das Videogespräch wie gewohnt ein. Die Plattform wird nun das von diesen Streams produzierte Audio entsprechend dem `"play-and-record"` Session-Typ handhaben.

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
