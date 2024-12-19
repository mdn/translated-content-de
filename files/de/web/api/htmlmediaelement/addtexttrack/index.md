---
title: "HTMLMediaElement: addTextTrack() Methode"
short-title: addTextTrack()
slug: Web/API/HTMLMediaElement/addTextTrack
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`addTextTrack()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces erstellt ein neues [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt und fügt es dem Medien-Element hinzu. Sie löst ein [`addtrack`](/de/docs/Web/API/TextTrackList/addtrack_event)-Ereignis auf den [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) dieses Medien-Elements aus. Diese Methode kann nicht auf einem [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Interface verwendet werden, nur auf einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement).

## Syntax

```js-nolint
addTextTrack(kind)
addTextTrack(kind, label)
addTextTrack(kind, label, language)
```

### Parameter

- `kind`
  - : Ein `string`, der die [`TextTrack.kind`](/de/docs/Web/API/TextTrack/kind)-Eigenschaft repräsentiert (`subtitles`, `captions`, `descriptions`, `chapters` oder `metadata`).
- `label`
  - : Ein `string`, der die [`TextTrack.label`](/de/docs/Web/API/TextTrack/label)-Eigenschaft repräsentiert.
- `language`
  - : Ein `string`, der die [`TextTrack.language`](/de/docs/Web/API/TextTrack/language)-Eigenschaft repräsentiert.

### Rückgabewert

Das neu erstellte [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt.

### Ausnahmen

Keine.

## Beispiele

Dieses Beispiel fügt ein neues [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu, wobei `kind` auf `"subtitles"` gesetzt ist, und fügt diesem einen neuen [`VTTCue`](/de/docs/Web/API/VTTCue) hinzu.

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
- Lernen: [Video- und Audi-Inhalte](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
