---
title: "Navigator: audioSession-Eigenschaft"
short-title: audioSession
slug: Web/API/Navigator/audioSession
l10n:
  sourceCommit: 7afb60028792bba6b9c809867bc6c5304f9868a6
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Die schreibgeschützte **`audioSession`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt das [`AudioSession`](/de/docs/Web/API/AudioSession)-Objekt für das aktuelle Dokument zurück.

Das [`AudioSession`](/de/docs/Web/API/AudioSession)-Interface kann verwendet werden, um zu steuern, wie Audio von einer Webanwendung mit anderem Audio interagiert, das auf einem Gerät abgespielt wird. Zum Beispiel ermöglicht es Entwicklern anzugeben, ob das Audio ihrer Anwendung allein oder zusammen mit anderem Geräteaudio abgespielt werden soll.

## Wert

Ein [`AudioSession`](/de/docs/Web/API/AudioSession)-Objekt.

## Beispiele

### Festlegen des Audiowiedergabetypen

Das folgende Beispiel setzt den Audiowiedergabetyp auf `"play-and-record"`, bevor ein Videoanruf gestartet wird:

```js
navigator.audioSession.type = "play-and-record";

// Start video call
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

- [`AudioSession`](/de/docs/Web/API/AudioSession)
- [`AudioSession.type`](/de/docs/Web/API/AudioSession/type)
- [Audio Session API](/de/docs/Web/API/Audio_Session_API)
