---
title: "TextTrack: Methode removeCue()"
short-title: removeCue()
slug: Web/API/TextTrack/removeCue
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("WebVTT")}}

Die **`removeCue()`**-Methode der {{domxref("TextTrack")}}-Schnittstelle entfernt ein Cue aus der Liste der Cues.

## Syntax

```js-nolint
removeCue(cue)
```

### Parameter

- `cue`
  - : Ein {{domxref("TextTrackCue")}}.

### Rückgabewert

Undefined.

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das angegebene Cue nicht in der Liste der Cues gefunden wird.

> [!NOTE]
> Die {{domxref("TextTrackCue")}}-Schnittstelle ist eine abstrakte Klasse, die als Eltern für andere Cue-Schnittstellen wie {{domxref("VTTCue")}} dient. Daher übergeben Sie beim Entfernen eines Cues einen der Cue-Typen, die von `TextTrackCue` erben.

## Beispiele

Im folgenden Beispiel wird ein Cue zu einem Videotext-Track mit `addCue()` hinzugefügt und dann mit `removeCue()` entfernt.

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
