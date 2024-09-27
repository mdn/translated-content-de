---
title: "TextTrack: removeCue()-Methode"
short-title: removeCue()
slug: Web/API/TextTrack/removeCue
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("WebVTT")}}

Die **`removeCue()`**-Methode der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle entfernt eine Spur aus der Liste der Spuren.

## Syntax

```js-nolint
removeCue(cue)
```

### Parameter

- `cue`
  - : Ein [`TextTrackCue`](/de/docs/Web/API/TextTrackCue).

### Rückgabewert

Nicht definiert.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene Spur nicht in der Liste der Spuren gefunden wird.

> [!NOTE]
> Die [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Schnittstelle ist eine abstrakte Klasse, die als Elternklasse für andere Spurenschnittstellen wie [`VTTCue`](/de/docs/Web/API/VTTCue) verwendet wird. Daher übergeben Sie beim Entfernen einer Spur einen der Spurtypen, die von `TextTrackCue` erben.

## Beispiele

Im folgenden Beispiel wird eine Spur zu einer Video-Textspur mit `addCue()` hinzugefügt und dann mit `removeCue` entfernt.

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
