---
title: "RTCDTMFToneChangeEvent: tone-Eigenschaft"
short-title: tone
slug: Web/API/RTCDTMFToneChangeEvent/tone
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`RTCDTMFToneChangeEvent.tone`**
gibt das DTMF-Zeichen zurück, das gerade begonnen hat, abzuspielen, oder einen leeren String
(`""`), wenn alle in die Warteschlange gestellten Töne abgespielt wurden (das heißt,
[`RTCDTMFSender.toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) ist leer).

## Wert

Ein String mit dem DTML-Zeichen, das abgespielt wird, oder der leere String.

## Beispiel

Dieses Beispiel legt einen Handler für das [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis fest, der ein Element aktualisiert, um den aktuell abgespielten Ton in seinem Inhalt anzuzeigen oder, wenn alle Töne abgespielt wurden, den String "\<none>".

```js
dtmfSender.ontonechange = (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "&lt;none&gt;";
  }

  document.getElementById("playingTone").innerText = tone;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
- [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)
