---
title: "HTMLMediaElement: addTextTrack()-Methode"
short-title: addTextTrack()
slug: Web/API/HTMLMediaElement/addTextTrack
l10n:
  sourceCommit: 935c368bdb6d3920f46cf94d292845c53f3a0dd7
---

{{APIRef("HTML DOM")}}

Die **`addTextTrack()`**-Methode der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle erstellt ein neues [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt und fügt es dem Media-Element hinzu. Sie löst ein [`addtrack`](/de/docs/Web/API/TextTrackList/addtrack_event)-Ereignis auf den [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) dieses Media-Elements aus. Diese Methode kann nicht auf einer [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Schnittstelle verwendet werden, sondern nur auf einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement).

## Syntax

```js-nolint
addTextTrack(kind)
addTextTrack(kind, label)
addTextTrack(kind, label, language)
```

### Parameter

- `kind`
  - : Ein String, der die [`TextTrack.kind`](/de/docs/Web/API/TextTrack/kind)-Eigenschaft darstellt (`subtitles`, `captions`, `descriptions`, `chapters` oder `metadata`).
- `label`
  - : Ein String, der die [`TextTrack.label`](/de/docs/Web/API/TextTrack/label)-Eigenschaft darstellt.
- `language`
  - : Ein String, der die [`TextTrack.language`](/de/docs/Web/API/TextTrack/language)-Eigenschaft darstellt.

### Rückgabewert

Das neu erstellte [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt.

### Ausnahmen

Keine.

## Beispiele

Dieses Beispiel fügt ein neues [`TextTrack`](/de/docs/Web/API/TextTrack) mit der `kind`-Eigenschaft auf `"subtitles"` gesetzt hinzu und fügt diesem eine neue [`VTTCue`](/de/docs/Web/API/VTTCue) hinzu.

```js
const video = document.querySelector("video");
const newTrack = video.addTextTrack("subtitles");
newTrack.addCue(new VTTCue(3, 6, "Hello world!"));
console.log(newTrack.cues[0].text);
// "Hello world!"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextTrack`](/de/docs/Web/API/TextTrack)
- [WebVTT API](/de/docs/Web/API/WebVTT_API)
- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernen: [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
