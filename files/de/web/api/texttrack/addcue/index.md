---
title: "TextTrack: addCue()-Methode"
short-title: addCue()
slug: Web/API/TextTrack/addCue
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("WebVTT")}}

Die **`addCue()`**-Methode des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces fügt eine neue Cue zur Liste der Cues hinzu.

## Syntax

```js-nolint
addCue(cue)
```

### Parameter

- `cue`
  - : Ein [`TextTrackCue`](/de/docs/Web/API/TextTrackCue).

> [!NOTE]
> Das [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interface ist eine abstrakte Klasse, die als Elternteil für andere Cue-Interfaces wie [`VTTCue`](/de/docs/Web/API/VTTCue) verwendet wird. Daher wird beim Hinzufügen eines Cues einer der Cue-Typen verwendet, die von `TextTrackCue` erben.

### Rückgabewert

Undefiniert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Regeln für diese [`TextTrackList`](/de/docs/Web/API/TextTrackList) nicht mit denjenigen übereinstimmen, die für das eingehende [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) geeignet sind.

## Beispiele

Im folgenden Beispiel werden zwei Cues zu einem Video-Text-Track mithilfe von `addCue()` hinzugefügt.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
