---
title: "TextTrack: Methode removeCue()"
short-title: removeCue()
slug: Web/API/TextTrack/removeCue
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("WebVTT")}}

Die **`removeCue()`** Methode der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle entfernt eine Untertitelung aus der Liste der Untertitelungen.

## Syntax

```js-nolint
removeCue(cue)
```

### Parameter

- `cue`
  - : Ein [`TextTrackCue`](/de/docs/Web/API/TextTrackCue).

### Rückgabewert

Undefiniert.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene Untertitelung nicht in der Liste der Untertitelungen gefunden wird.

> [!NOTE]
> Die [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Schnittstelle ist eine abstrakte Klasse, die als Elternteil für andere Untertitelungsschnittstellen wie [`VTTCue`](/de/docs/Web/API/VTTCue) verwendet wird. Daher wird beim Entfernen einer Untertitelung einer der Untertitelungstypen übergeben, der von `TextTrackCue` erbt.

## Beispiele

Im folgenden Beispiel wird einer Video-Textspur eine Untertitelung mit `addCue()` hinzugefügt und dann mit `removeCue` entfernt.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
let cue = new VTTCue(0, 0.9, "Hildy!");
track.addCue(cue);
track.removeCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
