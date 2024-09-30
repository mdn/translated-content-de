---
title: "TextTrack: addCue()-Methode"
short-title: addCue()
slug: Web/API/TextTrack/addCue
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("WebVTT")}}

Die **`addCue()`**-Methode der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle fügt eine neue Cue zur Liste der Cues hinzu.

## Syntax

```js-nolint
addCue(cue)
```

### Parameter

- `cue`
  - : Ein [`TextTrackCue`](/de/docs/Web/API/TextTrackCue).

> [!NOTE]
> Die Schnittstelle [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) ist eine abstrakte Klasse, die als Elternklasse für andere Cue-Schnittstellen wie [`VTTCue`](/de/docs/Web/API/VTTCue) dient. Daher verwenden Sie beim Hinzufügen einer Cue einen der Cue-Typen, die von `TextTrackCue` erben.

### Rückgabewert

Undefiniert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Regeln für diese [`TextTrackList`](/de/docs/Web/API/TextTrackList) nicht mit denen übereinstimmen, die für die eingehende [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) geeignet sind.

## Beispiele

Im folgenden Beispiel werden zwei Cues zu einem Video-Texttrack mit `addCue()` hinzugefügt.

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
