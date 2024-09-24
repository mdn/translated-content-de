---
title: "RTCDTMFToneChangeEvent: tone-Eigenschaft"
short-title: tone
slug: Web/API/RTCDTMFToneChangeEvent/tone
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`RTCDTMFToneChangeEvent.tone`**
gibt den DTMF-Charakter zurück, der gerade zu spielen begonnen hat, oder einen leeren String
(`""`), wenn alle in der Warteschlange befindlichen Töne abgespielt wurden (das heißt,
{{domxref("RTCDTMFSender.toneBuffer")}} ist leer).

## Wert

Ein String mit dem spielenden DTMF-Charakter oder der leere String.

## Beispiel

Dieses Beispiel richtet einen Handler für das [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event) Ereignis ein, welches
ein Element aktualisiert, um den derzeit spielenden Ton in seinem Inhalt anzuzeigen oder, wenn alle Töne
abgespielt wurden, den String "\<none>".

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCDTMFSender/tonechange_event", "tonechange")}}
- {{domxref("RTCDTMFToneChangeEvent")}}
