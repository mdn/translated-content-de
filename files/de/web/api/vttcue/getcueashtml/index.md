---
title: "VTTCue: getCueAsHTML()-Methode"
short-title: getCueAsHTML()
slug: Web/API/VTTCue/getCueAsHTML
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`getCueAsHTML()`**-Methode der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das den Inhalt des Cues enthält.

## Syntax

```js-nolint
getCueAsHTML()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

## Beispiele

Im folgenden Beispiel wird ein neuer [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt. Der Wert als Dokumentfragment wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
console.log(cue.getCueAsHTML());

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
