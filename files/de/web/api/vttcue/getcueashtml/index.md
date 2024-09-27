---
title: "VTTCue: getCueAsHTML() Methode"
short-title: getCueAsHTML()
slug: Web/API/VTTCue/getCueAsHTML
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("WebVTT")}}

Die **`getCueAsHTML()`**-Methode des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das den Cue-Inhalt enthält.

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

let cue1 = new VTTCue(0, 0.9, "Hildy!");
console.log(cue1.getCueAsHTML());

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
