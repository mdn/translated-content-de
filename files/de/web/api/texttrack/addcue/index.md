---
title: "TextTrack: Methode addCue()"
short-title: addCue()
slug: Web/API/TextTrack/addCue
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("WebVTT")}}

Die **`addCue()`**-Methode der {{domxref("TextTrack")}}-Schnittstelle fügt der Liste der Cues einen neuen Cue hinzu.

## Syntax

```js-nolint
addCue(cue)
```

### Parameter

- `cue`
  - : Ein {{domxref("TextTrackCue")}}.

> [!NOTE]
> Die {{domxref("TextTrackCue")}}-Schnittstelle ist eine abstrakte Klasse, die als Elternklasse für andere Cue-Schnittstellen wie {{domxref("VTTCue")}} verwendet wird. Daher wird beim Hinzufügen eines Cues einer der Cue-Typen verwendet, die von `TextTrackCue` erben.

### Rückgabewert

Undefined.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Regeln für diese {{domxref("TextTrackList")}} nicht mit denen übereinstimmen, die für die eingehende {{domxref("TextTrackCue")}} geeignet sind.

## Beispiele

Im folgenden Beispiel werden zwei Cues mit `addCue()` zu einem Videotext-Track hinzugefügt.

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
